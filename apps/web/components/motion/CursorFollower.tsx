"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gsap } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

function subscribeFine(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(pointer: fine)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshotFine() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerSnapshotFine() {
  return false;
}

function useFinePointer(): boolean {
  return useSyncExternalStore(subscribeFine, getSnapshotFine, getServerSnapshotFine);
}

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isFinePointer = useFinePointer();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isFinePointer || prefersReduced || !cursorRef.current || !dotRef.current) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    // High performance quickTo setters
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3.out" });
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      const customTextAttr = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (customTextAttr) {
        setCursorText(customTextAttr);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isFinePointer, prefersReduced]);

  if (!isFinePointer || prefersReduced) {
    return null;
  }

  return (
    <>
      {/* Trailing Ring / Highlight */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center rounded-full border border-cyan-400/60 transition-opacity duration-300 backdrop-blur-[1px] will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? "w-12 h-12 bg-cyan-400/15 border-cyan-400 scale-110 shadow-[0_0_15px_rgba(0,240,255,0.35)]"
            : "w-8 h-8 bg-transparent scale-100"
        }`}
      >
        <span
          ref={textRef}
          className={`text-[9px] font-mono tracking-wider font-semibold text-cyan-300 uppercase transition-opacity duration-150 ${
            cursorText ? "opacity-100" : "opacity-0"
          }`}
        >
          {cursorText}
        </span>
      </div>

      {/* Instant Precision Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[10000] w-1.5 h-1.5 rounded-full bg-cyan-400 transition-opacity duration-150 will-change-transform ${
          isVisible && !isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
