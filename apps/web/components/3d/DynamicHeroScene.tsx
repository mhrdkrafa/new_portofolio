"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { FallbackVisual } from "./FallbackVisual";
import type { HeroSceneProps } from "./HeroScene";

function subscribeMobile(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(max-width: 768px), (pointer: coarse)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshotMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
}

function getServerSnapshotMobile() {
  return false;
}

export function useIsMobileDevice(): boolean {
  return useSyncExternalStore(subscribeMobile, getSnapshotMobile, getServerSnapshotMobile);
}

const HeroSceneDynamic = dynamic<HeroSceneProps>(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <FallbackVisual />,
  }
);

export function DynamicHeroScene(props: HeroSceneProps) {
  const isMobile = useIsMobileDevice();

  // On mobile or touch devices, bypass WebGL completely and render lightweight SVG/CSS visual
  if (isMobile) {
    return <FallbackVisual className={props.className} />;
  }

  return <HeroSceneDynamic {...props} />;
}

export default DynamicHeroScene;
