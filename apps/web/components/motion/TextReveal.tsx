"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, MOTION_EASE, MOTION_STAGGER, MOTION_DURATION } from "@/lib/motion";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  scrollTrigger?: boolean;
  once?: boolean;
}

export function TextReveal({
  text,
  as: Component = "div",
  className = "",
  wordClassName = "",
  stagger = MOTION_STAGGER.word,
  delay = 0,
  duration = MOTION_DURATION.slow,
  scrollTrigger = true,
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const wordNodes = containerRef.current.querySelectorAll("[data-reveal-word]");

      if (prefersReduced) {
        gsap.set(wordNodes, {
          y: 0,
          opacity: 1,
          clearProps: "all",
        });
        return;
      }

      // Initial state
      gsap.set(wordNodes, {
        y: "110%",
        opacity: 0,
      });

      const animProps: gsap.TweenVars = {
        y: "0%",
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: MOTION_EASE.quartOut,
      };

      if (scrollTrigger) {
        animProps.scrollTrigger = {
          trigger: containerRef.current,
          start: "top 88%",
          once,
        };
      }

      gsap.to(wordNodes, animProps);
    },
    {
      scope: containerRef,
      dependencies: [text, prefersReduced, delay, duration, stagger, scrollTrigger, once],
    }
  );

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={containerRef as any}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true" className="inline-block">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
          >
            <span
              data-reveal-word
              className={`inline-block will-change-transform ${wordClassName}`}
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}
