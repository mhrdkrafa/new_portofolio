import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import type { Experience, Education } from "@/types/api";

export default async function ExperiencePage() {
  let experiences: Experience[] = [];
  let education: Education[] = [];

  try {
    const expRes = await portfolioApi.getExperiences();
    experiences = (expRes as { data: Experience[] }).data ?? expRes;
  } catch {
    experiences = [
      {
        id: 1,
        company_name: "Apex Systems",
        position: "Principal Systems Architect",
        location: "Remote / Singapore",
        start_date: "2024-01-01",
        end_date: null,
        is_current: true,
        description: "Leading core infrastructure, high-throughput microservices, and distributed observability topologies.",
        highlights: [
          "Architected real-time streaming pipeline reducing event processing latency from 450ms to 24ms.",
          "Spearheaded multi-tenant cloud consolidation delivering 38% compute cost reduction.",
        ],
        sort_order: 1,
      },
      {
        id: 2,
        company_name: "CloudScale Matrix",
        position: "Senior Full-Stack & Creative Engineer",
        location: "Jakarta, Indonesia",
        start_date: "2021-06-01",
        end_date: "2023-12-31",
        is_current: false,
        description: "Engineered performant Next.js web applications, GSAP micro-interactions, and resilient Laravel backend microservices.",
        highlights: [
          "Built design system and headless storefront handling 2M+ monthly active users with 99.98% uptime.",
          "Implemented deterministic scroll-driven animation library using GSAP ScrollTrigger.",
        ],
        sort_order: 2,
      },
    ];
  }

  try {
    const eduRes = await portfolioApi.getEducation();
    education = (eduRes as { data: Education[] }).data ?? eduRes;
  } catch {
    education = [
      {
        id: 1,
        institution: "Bandung Institute of Technology (ITB)",
        degree: "Bachelor of Science",
        field_of_study: "Informatics & Computer Engineering",
        start_year: 2017,
        end_year: 2021,
        description: "Graduated with honors. Specialized in Distributed Computing and Database Systems.",
        activities: ["Lead Researcher, Distributed Systems Lab", "President, IT Computing Society"],
        sort_order: 1,
      },
    ];
  }

  return (
    <div className="min-h-screen p-8 md:p-16 max-w-5xl mx-auto">
      <div className="flex justify-between items-center py-6 border-b border-white/10 mb-12">
        <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <span className="text-xs font-mono text-cyan-400">Track Record & Credentials</span>
      </div>

      <header className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Experience & Academic Foundation
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Over 8 years of architecting scalable distributed backends, resilient APIs, and interactive frontend systems.
        </p>
      </header>

      <section className="space-y-12 mb-20">
        <h2 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
          Professional Milestones
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                  <div className="text-sm font-medium text-cyan-400">{exp.company_name}</div>
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
                  {exp.start_date.slice(0, 4)} — {exp.is_current ? "Present" : exp.end_date?.slice(0, 4)}
                </div>
              </div>

              {exp.description && (
                <p className="text-sm text-zinc-400 leading-relaxed pt-1">
                  {exp.description}
                </p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 pt-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
          Education & Specializations
        </h2>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-lg bg-zinc-900/30 border border-zinc-800/60 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-white">{edu.institution}</h3>
                <span className="text-xs font-mono text-zinc-500">
                  {edu.start_year} — {edu.end_year ?? "Present"}
                </span>
              </div>
              <div className="text-sm text-cyan-400">
                {edu.degree} in {edu.field_of_study}
              </div>
              {edu.description && (
                <p className="text-xs text-zinc-400">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
