"use client";

import { useRef, useState, useEffect } from "react";
import { SceneCanvas } from "./SceneCanvas";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export interface HeroSceneProps {
  className?: string;
  interactive?: boolean;
  reduceMotion?: boolean;
}

export function HeroScene({
  className = "",
  interactive = true,
  reduceMotion,
}: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  const isReduced = useReducedMotion();
  const effectiveReduceMotion = reduceMotion !== undefined ? reduceMotion : isReduced;

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <SceneCanvas
        interactive={interactive && !effectiveReduceMotion}
        reduceMotion={effectiveReduceMotion}
        frameloop={isInView && !effectiveReduceMotion ? "always" : "never"}
      />
    </div>
  );
}

export default HeroScene;
