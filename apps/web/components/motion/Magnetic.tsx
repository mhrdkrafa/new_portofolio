"use client";

import React, { useRef } from "react";
import { gsap, MOTION_EASE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // 0 to 1 scale of pull
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(containerRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (prefersReduced || !containerRef.current) return;

    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: MOTION_EASE.elastic,
      clearProps: "transform",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
