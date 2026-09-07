"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, MOTION_EASE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export interface HeroMotionProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroMotion({ children, className = "" }: HeroMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = {
        glow: containerRef.current.querySelectorAll("[data-hero-glow]"),
        eyebrow: containerRef.current.querySelectorAll("[data-hero-eyebrow]"),
        title: containerRef.current.querySelectorAll("[data-hero-title]"),
        headline: containerRef.current.querySelectorAll("[data-hero-headline]"),
        bio: containerRef.current.querySelectorAll("[data-hero-bio]"),
        actions: containerRef.current.querySelectorAll("[data-hero-actions]"),
        decor: containerRef.current.querySelectorAll("[data-hero-decor]"),
      };

      if (prefersReduced) {
        gsap.set(
          [
            elements.glow,
            elements.eyebrow,
            elements.title,
            elements.headline,
            elements.bio,
            elements.actions,
            elements.decor,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clearProps: "all",
          }
        );
        return;
      }

      // Initial state to prevent flash of unstyled content
      gsap.set(
        [
          elements.eyebrow,
          elements.title,
          elements.headline,
          elements.bio,
          elements.actions,
        ],
        {
          opacity: 0,
          y: 32,
        }
      );

      if (elements.glow.length > 0) {
        gsap.set(elements.glow, { opacity: 0, scale: 0.8 });
      }

      const tl = gsap.timeline({
        defaults: {
          ease: MOTION_EASE.quartOut,
        },
      });

      if (elements.glow.length > 0) {
        tl.to(
          elements.glow,
          {
            opacity: 0.45,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
          },
          0
        );
      }

      tl.to(
        elements.eyebrow,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        0.1
      )
        .to(
          elements.title,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
          },
          0.22
        )
        .to(
          elements.headline,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          0.38
        )
        .to(
          elements.bio,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          0.5
        )
        .to(
          elements.actions,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
          },
          0.62
        );
    },
    { scope: containerRef, dependencies: [prefersReduced] }
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}
