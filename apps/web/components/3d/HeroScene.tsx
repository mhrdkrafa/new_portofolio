"use client";

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
  const isReduced = useReducedMotion();
  const effectiveReduceMotion = reduceMotion !== undefined ? reduceMotion : isReduced;

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <SceneCanvas
        interactive={interactive && !effectiveReduceMotion}
        reduceMotion={effectiveReduceMotion}
      />
    </div>
  );
}

export default HeroScene;
