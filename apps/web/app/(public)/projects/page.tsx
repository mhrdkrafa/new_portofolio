import type { Metadata } from "next";
import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectReveal } from "@/components/motion/ProjectReveal";
import type { Project } from "@/types/api";

export const metadata: Metadata = {
  title: "Engineering Projects & Architectural Case Studies",
  description: "A curated archive of high-throughput distributed transaction engines, headless web architectures, and interactive digital artifacts.",
};

interface ProjectsPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const activeCategory = resolvedParams.category || "all";

  let projects: Project[] = [];

  try {
    const res = await portfolioApi.getProjects(
      activeCategory !== "all" ? { category: activeCategory } : undefined
    );
    projects = (res as { data: Project[] }).data ?? res;
  } catch {
    projects = [
      {
        id: 1,
        category_id: 1,
        category: { id: 1, name: "Headless Architecture", slug: "architecture" },
        title: "Cinematic Digital Portfolio",
        slug: "cinematic-digital-portfolio",
        summary: "Ultra high-performance digital portfolio platform with headless Laravel API, Next.js 16, and GSAP timeline choreography.",
        year: 2026,
        featured: true,
        status: "published",
        sort_order: 1,
        technologies: [
          { id: 1, name: "Next.js 16", slug: "nextjs", category: "frontend" },
          { id: 2, name: "Laravel 13", slug: "laravel", category: "backend" },
          { id: 3, name: "GSAP 3", slug: "gsap", category: "motion" },
        ],
      },
      {
        id: 2,
        category_id: 2,
        category: { id: 2, name: "Distributed Systems", slug: "distributed-systems" },
        title: "Distributed Transaction Engine",
        slug: "distributed-transaction-engine",
        summary: "Sub-millisecond settlement pipeline handling 45,000+ ops/sec with Redis streams, MySQL sharding, and optimistic locking.",
        year: 2025,
        featured: true,
        status: "published",
        sort_order: 2,
        technologies: [
          { id: 4, name: "Redis Streams", slug: "redis", category: "infra" },
          { id: 5, name: "MySQL 8", slug: "mysql", category: "db" },
          { id: 6, name: "Laravel API", slug: "laravel", category: "backend" },
        ],
      },
      {
        id: 3,
        category_id: 3,
        category: { id: 3, name: "Motion & WebGL", slug: "webgl" },
        title: "Real-Time Telemetry Observability Mesh",
        slug: "telemetry-observability-mesh",
        summary: "Interactive WebGL telemetry topology visualizing real-time cluster health, latency distributions, and distributed tracing metrics.",
        year: 2025,
        featured: false,
        status: "published",
        sort_order: 3,
        technologies: [
          { id: 7, name: "Three.js", slug: "threejs", category: "3d" },
          { id: 8, name: "TypeScript", slug: "ts", category: "language" },
          { id: 9, name: "Tailwind CSS", slug: "tailwind", category: "styling" },
        ],
      },
      {
        id: 4,
        category_id: 2,
        category: { id: 2, name: "Distributed Systems", slug: "distributed-systems" },
        title: "High-Concurrency WebSocket Gateway",
        slug: "high-concurrency-websocket-gateway",
        summary: "Zero-copy pub/sub push engine managing 120,000 concurrent client socket sessions with Redis cluster backplane.",
        year: 2024,
        featured: true,
        status: "published",
        sort_order: 4,
        technologies: [
          { id: 10, name: "Go", slug: "go", category: "language" },
          { id: 11, name: "Redis Cluster", slug: "redis-cluster", category: "infra" },
          { id: 12, name: "Docker", slug: "docker", category: "infra" },
        ],
      },
    ];

    if (activeCategory !== "all") {
      projects = projects.filter(
        (p) => p.category?.slug === activeCategory || String(p.category_id) === activeCategory
      );
    }
  }

  const categories = [
    { label: "All Engineering", slug: "all" },
    { label: "Distributed Systems", slug: "distributed-systems" },
    { label: "Headless Architecture", slug: "architecture" },
    { label: "Motion & WebGL", slug: "webgl" },
  ];

  return (
    <div className="w-full pb-20">
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-8">
        <Eyebrow className="mb-3">Archive & Case Studies (2023 — 2026)</Eyebrow>
        <Display size="xl" className="mb-4">
          Architectural Systems & Engineering Case Studies
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl">
          A curated selection of high-concurrency transaction pipelines, low-latency microservices, headless cloud platforms, and bespoke interactive user experiences.
        </Text>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={cat.slug === "all" ? "/projects" : `/projects?category=${cat.slug}`}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? "bg-cyan-400/15 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </header>

      <SectionWrapper
        title="Engineering Artifacts"
        subtitle={`Displaying ${projects.length} verified technical systems`}
      >
        {projects.length > 0 ? (
          <ProjectReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectReveal>
        ) : (
          <div className="py-20 text-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-8">
            <p className="text-zinc-400 font-mono text-sm mb-4">
              No technical artifacts found under the selected category.
            </p>
            <Link
              href="/projects"
              className="text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Reset to all engineering works
            </Link>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
