"use client";

interface FallbackVisualProps {
  className?: string;
  label?: string;
}

export function FallbackVisual({
  className = "",
  label = "Architectural Mesh Topology",
}: FallbackVisualProps) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden ${className}`}
      aria-label={label}
      role="img"
    >
      {/* Ambient Gradient Halo */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-purple-600/10 blur-2xl pointer-events-none" />

      {/* Lightweight SVG Geometric Lattice */}
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 h-64 sm:w-80 sm:h-80 opacity-70 animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cyanPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="innerCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#121216" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Outer Hexagonal Structure */}
        <polygon
          points="160,20 280,90 280,230 160,300 40,230 40,90"
          stroke="url(#cyanPurpleGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Inner Topological Triangulations */}
        <line x1="160" y1="20" x2="160" y2="300" stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="40" y1="90" x2="280" y2="230" stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="40" y1="230" x2="280" y2="90" stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Mid Octahedral Facets */}
        <polygon
          points="160,65 240,115 240,205 160,255 80,205 80,115"
          stroke="#A855F7"
          strokeWidth="1"
          strokeOpacity="0.6"
        />

        {/* Central Core Lattice */}
        <polygon
          points="160,110 205,135 205,185 160,210 115,185 115,135"
          fill="url(#innerCoreGrad)"
          stroke="#00F0FF"
          strokeWidth="1.5"
        />

        {/* Vertex Nodes */}
        <circle cx="160" cy="20" r="3.5" fill="#00F0FF" />
        <circle cx="280" cy="90" r="3.5" fill="#00F0FF" />
        <circle cx="280" cy="230" r="3.5" fill="#00F0FF" />
        <circle cx="160" cy="300" r="3.5" fill="#00F0FF" />
        <circle cx="40" cy="230" r="3.5" fill="#00F0FF" />
        <circle cx="40" cy="90" r="3.5" fill="#00F0FF" />

        <circle cx="160" cy="160" r="4.5" fill="#00F0FF" className="animate-pulse motion-reduce:animate-none" />
      </svg>
    </div>
  );
}

export default FallbackVisual;
