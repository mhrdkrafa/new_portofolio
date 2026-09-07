import { portfolioApi } from "@/lib/api/client";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
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
        technologies: [
          { id: 1, name: "Next.js 16", slug: "nextjs", category: "frontend" },
          { id: 2, name: "Laravel 13", slug: "laravel", category: "backend" },
          { id: 3, name: "GSAP 3", slug: "gsap", category: "motion" },
        ],
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
        technologies: [
          { id: 4, name: "Redis Streams", slug: "redis", category: "infra" },
          { id: 5, name: "MySQL 8", slug: "mysql", category: "db" },
        ],
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
        technologies: [
          { id: 6, name: "Three.js", slug: "threejs", category: "3d" },
          { id: 7, name: "TypeScript", slug: "ts", category: "language" },
        ],
      },
    ];
  }

  return (
    <div className="w-full">
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Archive & Case Studies (2023 — 2026)</Eyebrow>
        <Display size="xl" className="mb-4">
          Architectural Systems & Engineering Case Studies
        </Display>
        <Text size="lg" variant="secondary" className="max-w-2xl">
          A curated selection of high-concurrency architectures, low-latency microservices, and bespoke interactive user experiences.
        </Text>
      </header>

      <SectionWrapper
        title="All Projects"
        subtitle={`Showing ${projects.length} engineering case studies`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
