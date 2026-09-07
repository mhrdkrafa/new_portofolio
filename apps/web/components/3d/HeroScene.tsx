"use client";

import { SceneCanvas } from "./SceneCanvas";

export interface HeroSceneProps {
  className?: string;
  interactive?: boolean;
}

export function HeroScene({
  className = "",
  interactive = true,
}: HeroSceneProps) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <SceneCanvas interactive={interactive} />
    </div>
  );
}

export default HeroScene;
