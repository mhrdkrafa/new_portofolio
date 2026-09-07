import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import type { Project } from "@/types/api";

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    const res = await portfolioApi.getProjects();
    projects = (res as { data: Project[] }).data ?? res;
  } catch {
    projects = [
      {
        id: 1,
        category_id: 1,
        title: "Cinematic Digital Portfolio",
        slug: "cinematic-digital-portfolio",
        summary: "Ultra high-performance digital portfolio platform with headless Laravel API, Next.js 16, and GSAP timeline choreography.",
        year: 2026,
        featured: true,
        status: "published",
        sort_order: 1,
      },
      {
        id: 2,
        category_id: 2,
        title: "Distributed Transaction Engine",
        slug: "distributed-transaction-engine",
        summary: "Sub-millisecond settlement pipeline handling 45,000+ ops/sec with Redis streams, MySQL sharding, and optimistic locking.",
        year: 2025,
        featured: true,
        status: "published",
        sort_order: 2,
      },
      {
        id: 3,
        category_id: 1,
        title: "Real-Time Telemetry Observability Mesh",
        slug: "telemetry-observability-mesh",
        summary: "Interactive WebGL telemetry topology visualizing real-time cluster health and distributed tracing metrics.",
        year: 2025,
        featured: false,
        status: "published",
        sort_order: 3,
      },
    ];
  }

  return (
    <div className="min-h-screen p-8 md:p-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-6 border-b border-white/10 mb-12">
        <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <span className="text-xs font-mono text-cyan-400">Selected Works (2023 — 2026)</span>
      </div>

      <header className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Architectural Systems & Creative Case Studies
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          A curated selection of high-concurrency systems, low-latency microservices, and bespoke interactive user experiences.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group flex flex-col justify-between p-6 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 min-h-[220px]"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                {project.featured && (
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-2 line-clamp-3">
                {project.summary}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-cyan-400">
              <span>Explore Technical Case Study</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
