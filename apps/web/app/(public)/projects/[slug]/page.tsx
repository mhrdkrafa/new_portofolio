import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ProjectMediaViewer } from "@/components/projects/ProjectMediaViewer";
import type { Project } from "@/types/api";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return constructMetadata({
    title: `${title} — Engineering Case Study`,
    description: `Architectural breakdown, distributed scaling patterns, and code implementation of ${title}.`,
    canonical: `/projects/${slug}`,
  });
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
        category: { id: 1, name: "Headless Architecture", slug: "architecture" },
        title: "Cinematic Digital Portfolio",
        slug: "cinematic-digital-portfolio",
        summary: "Ultra high-performance digital portfolio platform with headless Laravel API, Next.js 16, and GSAP timeline choreography.",
        description: "An architectural exploration into deterministic motion language, sub-50ms Time to First Byte, and headless editorial CMS workflows. The platform leverages Next.js 16 Server Components paired with isolated client animations powered by @gsap/react useGSAP hooks and procedural Three.js geometric lattices.",
        client_name: "Mahardika Rafa Creative Systems",
        year: 2026,
        featured: true,
        status: "published",
        sort_order: 1,
        links: [
          { id: 1, project_id: 1, label: "GitHub Repository", url: "https://github.com/mhrdkrafa/new_portofolio", type: "github" },
          { id: 2, project_id: 1, label: "Live System", url: "/", type: "live" },
        ],
        technologies: [
          { id: 1, name: "Next.js 16", slug: "nextjs", category: "frontend" },
          { id: 2, name: "Laravel 13", slug: "laravel", category: "backend" },
          { id: 3, name: "Filament 5", slug: "filament", category: "cms" },
          { id: 4, name: "GSAP 3", slug: "gsap", category: "motion" },
          { id: 5, name: "Three.js / R3F", slug: "threejs", category: "3d" },
          { id: 6, name: "Tailwind CSS", slug: "tailwind", category: "css" },
        ],
        media: [
          {
            id: 1,
            project_id: 1,
            file_path: "config/motion.ts",
            media_type: "code",
            caption: "Motion Tokens & GSAP Defaults Orchestration",
            sort_order: 1,
          },
        ],
      };
    } else if (slug === "distributed-transaction-engine") {
      project = {
        id: 2,
        category_id: 2,
        category: { id: 2, name: "Distributed Systems", slug: "distributed-systems" },
        title: "Distributed Transaction Engine",
        slug: "distributed-transaction-engine",
        summary: "Sub-millisecond settlement pipeline handling 45,000+ ops/sec with Redis streams, MySQL sharding, and optimistic locking.",
        description: "Designed and engineered an event-driven transaction processor handling high financial throughput. Implemented Redis atomic Lua scripts for inventory locks and asynchronous queue workers writing to sharded database tables with zero data corruption. Benchmarked to 45,000 requests per second under synthetic chaos injection.",
        client_name: "FinTech Global Matrix",
        year: 2025,
        featured: true,
        status: "published",
        sort_order: 2,
        links: [
          { id: 3, project_id: 2, label: "Architecture Spec", url: "/articles/architecting-low-latency-headless-portfolios", type: "docs" },
        ],
        technologies: [
          { id: 7, name: "PHP 8.3 / Laravel", slug: "php-laravel", category: "backend" },
          { id: 8, name: "Redis Streams", slug: "redis", category: "infra" },
          { id: 9, name: "MySQL 8 Cluster", slug: "mysql", category: "database" },
          { id: 10, name: "Docker & K8s", slug: "k8s", category: "devops" },
        ],
        media: [
          {
            id: 2,
            project_id: 2,
            file_path: "storage/telemetry/pipeline.json",
            media_type: "code",
            caption: "High-throughput Transaction Stream Pipeline Topology",
            sort_order: 1,
          },
        ],
      };
    } else if (slug === "telemetry-observability-mesh") {
      project = {
        id: 3,
        category_id: 3,
        category: { id: 3, name: "Motion & WebGL", slug: "webgl" },
        title: "Real-Time Telemetry Observability Mesh",
        slug: "telemetry-observability-mesh",
        summary: "Interactive WebGL telemetry topology visualizing real-time cluster health, latency distributions, and distributed tracing metrics.",
        description: "Constructed a real-time 3D node topology graph using Three.js buffer geometries and custom vertex shaders. Visualizes sub-millisecond edge latency distributions across globally distributed cloud regions with instantaneous anomaly detection.",
        client_name: "CloudTelemetry Labs",
        year: 2025,
        featured: false,
        status: "published",
        sort_order: 3,
        technologies: [
          { id: 11, name: "Three.js", slug: "threejs", category: "3d" },
          { id: 12, name: "WebGL Shaders", slug: "glsl", category: "graphics" },
          { id: 13, name: "TypeScript", slug: "ts", category: "language" },
        ],
      };
    }
  }

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen px-6 sm:px-8 md:px-12 max-w-5xl mx-auto pt-16 pb-24">
      {/* Top Breadcrumb & Metadata Navigation */}
      <div className="py-4 border-b border-white/10 mb-10 flex justify-between items-center">
        <Link
          href="/projects"
          className="text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
        >
          <span>←</span>
          <span>Back to Projects Archive</span>
        </Link>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          {project.year} • {project.category?.name ?? "Case Study"}
        </span>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 mb-12">
        {project.category && (
          <Eyebrow>{project.category.name}</Eyebrow>
        )}
        <Display size="xl" className="text-white tracking-tight">
          {project.title}
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl leading-relaxed text-zinc-300">
          {project.summary}
        </Text>

        <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
          {project.client_name && (
            <div>
              <span className="text-zinc-500">CLIENT: </span>
              <span className="text-zinc-200">{project.client_name}</span>
            </div>
          )}
          <div>
            <span className="text-zinc-500">YEAR: </span>
            <span className="text-zinc-200">{project.year}</span>
          </div>
          <div>
            <span className="text-zinc-500">STATUS: </span>
            <span className="text-emerald-400">Production Deployed</span>
          </div>
        </div>

        {/* Action Links */}
        {project.links && project.links.length > 0 && (
          <div className="pt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.id}
                href={link.url}
                variant={link.type === "live" ? "primary" : "secondary"}
                size="sm"
                rightIcon={<span>↗</span>}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </header>

      {/* Core Technology Stack Pills */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-12 p-6 sm:p-8 rounded-xl bg-zinc-900/50 border border-zinc-800">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            {"//"} Core Technology Architecture
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech.id}
                className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-800/90 text-zinc-200 border border-zinc-700/60"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Media Viewer Demonstration */}
      {project.media && project.media.length > 0 && (
        <section className="mb-14 space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            {"//"} Technical Demonstration & Artifacts
          </h2>
          {project.media.map((item) => (
            <ProjectMediaViewer key={item.id} media={item} />
          ))}
        </section>
      )}

      {/* Architectural Deep-Dive Content */}
      <section className="border-t border-white/10 pt-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
          Architecture & Engineering Execution
        </h2>
        <p className="text-base text-zinc-300 font-body leading-relaxed max-w-3xl">
          {project.description || project.summary}
        </p>
      </section>

      {/* Bottom Navigation */}
      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <Link
          href="/projects"
          className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
        >
          ← All Engineering Projects
        </Link>
        <Link
          href="/contact"
          className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Initiate Architecture Discussion →
        </Link>
      </div>
    </article>
  );
}
