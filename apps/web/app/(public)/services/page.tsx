import type { Metadata } from "next";
import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Service } from "@/types/api";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Engineering Capabilities & Specialized Advisory Services",
    description: "Systems architecture, high-concurrency transaction backends, headless web applications, and deterministic WebGL motion.",
    canonical: "/services",
  }),
};

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    const res = await portfolioApi.getServices();
    services = (res as { data: Service[] }).data ?? res;
  } catch {
    services = [
      {
        id: 1,
        title: "Distributed Systems Architecture",
        slug: "systems-architecture",
        short_description: "Designing fault-tolerant, high-throughput distributed backends, database sharding, and caching topologies.",
        description: "Comprehensive architectural audits, microservices migration blueprints, sub-millisecond database optimization, and high-availability cloud infrastructure.",
        features: [
          "Distributed database clustering (MySQL 8, PostgreSQL)",
          "Sub-millisecond caching topologies with Redis Streams",
          "Decoupled event-driven architectures & message queues",
          "Resilience audits & synthetic chaos testing benchmarks",
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
          "Next.js 16 App Router Server Component architecture",
          "Filament 5 administrative dashboards & CMS modeling",
          "Sanctum-secured multi-tenant API microservices",
          "Strict TypeScript type contracts end-to-end",
        ],
        is_active: true,
        sort_order: 2,
      },
      {
        id: 3,
        title: "Deterministic Motion & WebGL",
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

  const engagementProcess = [
    {
      step: "01",
      title: "Discovery & Architectural Audit",
      description: "Deep dive into current system throughput, profiling database bottlenecks, identifying single points of failure, and establishing SLA targets.",
    },
    {
      step: "02",
      title: "System Design & RFC Formulation",
      description: "Authoring typed API specifications, entity relationship models, migration blueprints, and deterministic component state machines.",
    },
    {
      step: "03",
      title: "Implementation & Chaos Benchmarking",
      description: "Iterative engineering paired with automated unit tests, continuous integration, and synthetic load testing under high concurrency.",
    },
    {
      step: "04",
      title: "Zero-Downtime Launch & Transfer",
      description: "Coordinated deployment with blue-green cutover, comprehensive runbooks, real-time observability dashboards, and team handover.",
    },
  ];

  return (
    <div className="w-full pb-20">
      {/* Top Header */}
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Specialized Advisory & Engineering</Eyebrow>
        <Display size="xl" className="mb-4">
          Capabilities & Specialized Services
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl leading-relaxed">
          Partnering with ambitious engineering teams and technical founders to build resilient distributed systems, sub-millisecond architectures, and category-defining digital artifacts.
        </Text>
      </header>

      {/* Core Capabilities Grid */}
      <SectionWrapper
        index={1}
        title="Core Practice Areas"
        subtitle="Specialized domain competencies designed for high-concurrency resilience and aesthetic distinction"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-400/50 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-sm mb-6">
                  0{service.sort_order}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 font-body leading-relaxed mb-6">
                  {service.short_description}
                </p>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2.5 border-t border-zinc-800/80 pt-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-zinc-300 font-body">
                        <span className="text-cyan-400 mr-2 font-mono">›</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-800/60">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
                >
                  <span>Inquire Engagement</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Engagement Delivery Process */}
      <SectionWrapper
        index={2}
        title="Execution Methodology"
        subtitle="How we collaborate from initial architectural assessment to zero-downtime production deployment"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementProcess.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                {"//"} {item.step}
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Engagement CTA */}
      <SectionWrapper
        index={3}
        title="Ready to Scale Your Systems?"
        subtitle="Available for select technical advisory, architecture audits, and high-concurrency engineering contracts."
      >
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display text-white">Let’s discuss your technical roadmap.</h3>
            <p className="text-sm text-zinc-400 font-body leading-relaxed">
              We typically engage on 4 to 12-week focused sprints for architecture transformation, or ongoing quarterly advisory.
            </p>
          </div>
          <Button href="/contact" variant="accent" size="lg" rightIcon={<span>→</span>}>
            Initiate Consultation
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
