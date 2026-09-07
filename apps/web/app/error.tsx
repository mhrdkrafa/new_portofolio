"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring/telemetry service
    console.error("Runtime exception captured by App Router boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-canvas text-text-primary">
      <div className="space-y-6 max-w-lg">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">
          SYSTEM_FAULT_EXCEPTION
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
          Hydration & Execution Failure
        </h1>

        <p className="text-sm text-zinc-400 leading-relaxed font-body">
          An unexpected error interrupted system rendering. The state boundary has isolated the exception to prevent application-wide failure.
        </p>

        {error.message && (
          <div className="p-4 rounded-md bg-zinc-950 border border-red-500/30 text-left overflow-x-auto text-xs font-mono text-red-300">
            {error.message}
          </div>
        )}

        <div className="pt-4 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-md bg-cyan-400 text-black font-semibold text-xs hover:bg-cyan-300 transition-colors"
          >
            Attempt System Reset
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 font-semibold text-xs hover:bg-zinc-800 transition-colors"
          >
            Return to Safety
          </Link>
        </div>
      </div>
    </div>
  );
}
