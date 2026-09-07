"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { FallbackVisual } from "./FallbackVisual";
import { WebGLBoundary, useIsWebGLSupported } from "./WebGLBoundary";
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
  const webglSupported = useIsWebGLSupported();

  // 1. Mobile / Touch Fallback: bypass WebGL to conserve GPU/battery
  if (isMobile) {
    return <FallbackVisual className={props.className} />;
  }

  // 2. WebGL Unsupported Fallback: if browser lacks WebGL capability
  if (!webglSupported) {
    return <FallbackVisual className={props.className} />;
  }

  // 3. WebGL Boundary: protects against runtime context loss or crash
  return (
    <WebGLBoundary fallback={<FallbackVisual className={props.className} />}>
      <HeroSceneDynamic {...props} />
    </WebGLBoundary>
  );
}

export default DynamicHeroScene;
