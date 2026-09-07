"use client";

import dynamic from "next/dynamic";
import { FallbackVisual } from "./FallbackVisual";
import type { HeroSceneProps } from "./HeroScene";

const HeroSceneDynamic = dynamic<HeroSceneProps>(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <FallbackVisual />,
  }
);

export function DynamicHeroScene(props: HeroSceneProps) {
  return <HeroSceneDynamic {...props} />;
}

export default DynamicHeroScene;
