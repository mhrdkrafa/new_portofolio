"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, MOTION_EASE, MOTION_STAGGER, MOTION_DURATION } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export interface ProjectRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  threshold?: string;
  once?: boolean;
}

export function ProjectReveal({
  children,
  className = "",
  stagger = MOTION_STAGGER.card,
  duration = MOTION_DURATION.slow,
  threshold = "top 85%",
  once = true,
}: ProjectRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = containerRef.current.children;
      if (!items.length) return;

      if (prefersReduced) {
        gsap.set(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "all",
        });
        return;
      }

      // Initial unrevealed state
      gsap.set(items, {
        opacity: 0,
        y: 40,
        scale: 0.98,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease: MOTION_EASE.quartOut,
        scrollTrigger: {
          trigger: containerRef.current,
          start: threshold,
          once,
        },
        onComplete: () => {
          // Clear transform so subsequent hover transitions are completely uninhibited
          gsap.set(items, { clearProps: "transform,opacity" });
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [prefersReduced, stagger, duration, threshold, once],
    }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
