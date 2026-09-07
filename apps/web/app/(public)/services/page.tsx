import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import type { Service } from "@/types/api";

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    const res = await portfolioApi.getServices();
    services = (res as { data: Service[] }).data ?? res;
  } catch {
    services = [
      {
        id: 1,
        title: "Systems Architecture & Scalability",
        slug: "systems-architecture",
        short_description: "Designing fault-tolerant, high-throughput distributed architectures, database sharding, and caching strategies.",
        description: "Comprehensive architectural audits, microservices migration blueprints, sub-millisecond database optimization, and high-availability cloud infrastructure.",
        features: [
          "Distributed database clustering (MySQL, PostgreSQL)",
          "Sub-millisecond caching topologies with Redis Streams",
          "Decoupled event-driven architectures & message queues",
          "Resilience audits & chaos testing benchmarks",
        ],
        is_active: true,
        sort_order: 1,
      },
      {
        id: 2,
        title: "Creative Full-Stack Engineering",
        slug: "creative-full-stack-engineering",
        short_description: "Building production-grade headless web applications with Next.js 16, Laravel 13 API, and seamless interactions.",
        description: "Full-cycle delivery of enterprise-grade digital platforms, combining robust backend domain boundaries with fluid, accessible frontends.",
        features: [
          "Next.js App Router Server Component architecture",
          "Filament 5 administrative dashboards & CMS modeling",
          "Sanctum-secured multi-tenant API services",
          "Strict TypeScript type contracts end-to-end",
        ],
        is_active: true,
        sort_order: 2,
      },
      {
        id: 3,
        title: "Deterministic Motion & WebGL Experiences",
        slug: "motion-webgl-experiences",
        short_description: "Crafting bespoke animation choreography, 60 FPS GSAP timelines, and isolated 3D scenes.",
        description: "Enhancing digital storytelling through controlled, accessible animations that wow users without hurting Core Web Vitals.",
        features: [
          "Deterministic GSAP 3 timelines & ScrollTrigger scrub",
          "WCAG-compliant prefers-reduced-motion adaptations",
          "React Three Fiber isolated WebGL canvases",
          "Zero layout shift, 100/100 Lighthouse performance",
        ],
        is_active: true,
        sort_order: 3,
      },
    ];
  }

  return (
    <div className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-6 border-b border-white/10 mb-12">
        <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <span className="text-xs font-mono text-cyan-400">Engineering Consulting</span>
      </div>

      <header className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Capabilities & Specialized Services
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Partnering with ambitious founders and engineering teams to build resilient architectures, scalable systems, and category-defining interactive experiences.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-sm mb-6">
                0{service.sort_order}
              </div>
              <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.short_description}
              </p>

              {service.features && service.features.length > 0 && (
                <ul className="space-y-2 border-t border-zinc-800/80 pt-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zinc-300">
                      <span className="text-cyan-400 mr-2">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-8 mt-8 border-t border-zinc-800/40">
              <Link
                href="/contact"
                className="inline-block text-xs font-mono text-cyan-400 hover:text-cyan-300"
              >
                Inquire Engagement →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
