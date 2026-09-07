import type { ReactNode } from "react";
import { CursorFollower } from "@/components/motion/CursorFollower";

interface GlobalLayoutProps {
  children: ReactNode;
}

export function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="relative min-h-screen bg-canvas text-text-primary selection:bg-accent-primary selection:text-black antialiased flex flex-col justify-between">
      {/* Interactive Cursor Follower */}
      <CursorFollower />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Subtle Ambient Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30"
      >
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-b from-cyan-500/10 via-purple-600/5 to-transparent blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-3xl" />
        <div className="absolute top-[80%] -right-[10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl" />
      </div>

      {/* Main Content Area */}
      <div id="main-content" className="relative z-10 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
