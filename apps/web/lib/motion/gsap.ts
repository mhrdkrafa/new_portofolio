import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

/**
 * Design system motion tokens aligned with DESIGN.md & tokens.css
 */
export const MOTION_EASE = {
  quartOut: "power4.out",
  expoOut: "expo.out",
  smooth: "power2.inOut",
  elastic: "back.out(1.7)",
  linear: "none",
} as const;

export const MOTION_DURATION = {
  instant: 0,
  fast: 0.15,
  normal: 0.28,
  medium: 0.45,
  slow: 0.75,
  deliberate: 1.2,
} as const;

export const MOTION_STAGGER = {
  micro: 0.04,
  word: 0.08,
  card: 0.12,
} as const;

/**
 * Configure global GSAP defaults
 */
export function initGsapDefaults() {
  if (typeof window === "undefined") return;

  gsap.defaults({
    ease: MOTION_EASE.quartOut,
    duration: MOTION_DURATION.medium,
  });
}

export { gsap, useGSAP };
export default gsap;
