"use client";

import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-canvas mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Colophon */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-bold text-white tracking-tight">Mahardika Rafa</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md font-body">
              Systems Architect & Creative Full-Stack Engineer designing resilient distributed backends, deterministic motion choreographies, and modern digital platforms.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              COORDINATES: 6.2088° S, 106.8456° E • JAKARTA, GMT+7
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects Catalog
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-zinc-400 hover:text-white transition-colors">
                  Experience & Education
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-zinc-400 hover:text-white transition-colors">
                  Technical Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Direct Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: System Specs & Colophon */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">Architecture</div>
            <div className="text-xs font-mono text-zinc-500 space-y-1.5 leading-relaxed">
              <div>FRAMEWORK: Next.js 16 (App Router)</div>
              <div>RUNTIME: React 19 Server Components</div>
              <div>BACKEND: Laravel 13 API + Filament 5</div>
              <div>CHOREOGRAPHY: GSAP + @gsap/react</div>
              <div>STYLING: Tailwind CSS v4</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Mahardika Rafa. Built with precision and care.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-zinc-400 hover:text-cyan-400 transition-colors focus:outline-none"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
