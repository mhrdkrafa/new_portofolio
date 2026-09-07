"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, refreshScrollTrigger, MOTION_EASE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      if (prefersReduced) {
        gsap.set(containerRef.current, {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        refreshScrollTrigger();
        return;
      }

      // Smooth entry on route change
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
          ease: MOTION_EASE.quartOut,
          onComplete: () => {
            if (containerRef.current) {
              gsap.set(containerRef.current, { clearProps: "transform,opacity" });
            }
            refreshScrollTrigger();
          },
        }
      );
    },
    {
      scope: containerRef,
      dependencies: [pathname, prefersReduced],
    }
  );

  return (
    <div ref={containerRef} className="w-full flex-1 flex flex-col will-change-transform">
      {children}
    </div>
  );
}
