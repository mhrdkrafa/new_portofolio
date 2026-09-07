"use client";

import React, { Component, type ErrorInfo, type ReactNode, useSyncExternalStore } from "react";
import { FallbackVisual } from "./FallbackVisual";

interface WebGLBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface WebGLBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Robust React Error Boundary that catches WebGL context initialization failures,
 * shader compilation errors, or WebGL context losses, rendering FallbackVisual instead.
 */
export class WebGLBoundary extends Component<WebGLBoundaryProps, WebGLBoundaryState> {
  constructor(props: WebGLBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): WebGLBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Non-blocking log in development
    if (process.env.NODE_ENV !== "production") {
      console.warn("WebGLBoundary caught WebGL failure, gracefully rendering fallback:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <FallbackVisual />;
    }

    return this.props.children;
  }
}

/**
 * Utility to verify WebGL capability before canvas mount
 */
export function isWebGLSupported(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function subscribeNoop() {
  return () => {};
}

function getSnapshotWebGL() {
  return isWebGLSupported();
}

function getServerSnapshotWebGL() {
  return true;
}

export function useIsWebGLSupported(): boolean {
  return useSyncExternalStore(subscribeNoop, getSnapshotWebGL, getServerSnapshotWebGL);
}

export default WebGLBoundary;
