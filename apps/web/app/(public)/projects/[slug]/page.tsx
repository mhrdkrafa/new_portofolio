import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioApi } from "@/lib/api/client";
import type { Project } from "@/types/api";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const { slug } = await props.params;

  let project: Project | null = null;

  try {
    const res = await portfolioApi.getProject(slug);
    project = (res as { data: Project }).data ?? res;
  } catch {
    if (slug === "cinematic-digital-portfolio") {
      project = {
        id: 1,
        category_id: 1,
        title: "Cinematic Digital Portfolio",
        slug: "cinematic-digital-portfolio",
        summary: "Ultra high-performance digital portfolio platform with headless Laravel API, Next.js 16, and GSAP timeline choreography.",
        description: "An architectural exploration into deterministic motion language, sub-50ms Time to First Byte, and headless editorial CMS workflows. The platform leverages Next.js 16 Server Components paired with isolated client animations powered by @gsap/react useGSAP hooks.",
        client_name: "Mahardika Rafa Creative Systems",
        year: 2026,
        featured: true,
        status: "published",
        sort_order: 1,
        technologies: [
          { id: 1, name: "Next.js 16", slug: "nextjs", category: "frontend" },
          { id: 2, name: "Laravel 13", slug: "laravel", category: "backend" },
          { id: 3, name: "Filament 5", slug: "filament", category: "cms" },
          { id: 4, name: "GSAP 3", slug: "gsap", category: "motion" },
          { id: 5, name: "Tailwind CSS", slug: "tailwind", category: "css" },
        ],
      };
    } else if (slug === "distributed-transaction-engine") {
      project = {
        id: 2,
        category_id: 2,
        title: "Distributed Transaction Engine",
        slug: "distributed-transaction-engine",
        summary: "Sub-millisecond settlement pipeline handling 45,000+ ops/sec with Redis streams, MySQL sharding, and optimistic locking.",
        description: "Designed and engineered an event-driven transaction processor handling high financial throughput. Implemented Redis atomic lua scripts for inventory locks and asynchronous queue workers writing to sharded database tables with zero data corruption.",
        client_name: "FinTech Global Matrix",
        year: 2025,
        featured: true,
        status: "published",
        sort_order: 2,
        technologies: [
          { id: 6, name: "PHP 8.3 / Laravel", slug: "php-laravel", category: "backend" },
          { id: 7, name: "Redis Streams", slug: "redis", category: "infra" },
          { id: 8, name: "MySQL 8 Cluster", slug: "mysql", category: "database" },
          { id: 9, name: "Docker & K8s", slug: "k8s", category: "devops" },
        ],
      };
    }
  }

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen p-8 md:p-16 max-w-5xl mx-auto">
      <div className="py-6 border-b border-white/10 mb-12 flex justify-between items-center">
        <Link href="/projects" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Projects
        </Link>
        <span className="text-xs font-mono text-cyan-400">{project.year} • Case Study</span>
      </div>

      <header className="space-y-4 mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {project.client_name && (
          <div className="pt-2 text-xs font-mono text-zinc-500">
            Client / Context: <span className="text-zinc-300">{project.client_name}</span>
          </div>
        )}
      </header>

      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-12 p-6 rounded-lg bg-zinc-900/40 border border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">Core Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech.id}
                className="px-3 py-1 rounded text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-2">
          Architecture & Engineering Execution
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed">
          {project.description || project.summary}
        </p>
      </section>

      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <Link href="/projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
          ← All Projects
        </Link>
        <Link href="/contact" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
          Discuss Architecture →
        </Link>
      </div>
    </article>
  );
}
