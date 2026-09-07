import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-canvas text-text-primary">
      <div className="space-y-6 max-w-md">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">
          ERR_RESOURCE_NOT_FOUND (404)
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
          Route Terminated
        </h1>

        <p className="text-sm text-zinc-400 leading-relaxed font-body">
          The requested system node, article, or project case study does not exist or has been archived into historical telemetry.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-md bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
          >
            ← Return to Command Center
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 font-semibold text-xs hover:bg-zinc-800 transition-colors"
          >
            Browse Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
