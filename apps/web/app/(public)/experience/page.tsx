import type { Metadata } from "next";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Experience, Education } from "@/types/api";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Engineering Experience & Career Trajectory",
    description: "Chronological trajectory of systems architecture, engineering leadership roles, and academic foundations by Mahardika Rafa.",
    canonical: "/experience",
  }),
};

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
        company_name: "Aether Dynamics Lab",
        position: "Principal Systems Architect",
        location: "Jakarta, Indonesia & Remote",
        start_date: "2024-01-01",
        end_date: null,
        is_current: true,
        description: "Directing cloud-native architecture, high-frequency distributed ledgers, and core platform API performance.",
        highlights: [
          "Engineered distributed ingestion pipelines processing 45,000 requests/sec with Redis Streams and Go workers.",
          "Cut enterprise infrastructure compute footprint by 38% via query execution plan rewrites and tiered caching.",
          "Established zero-downtime CI/CD deployment gates using Blue/Green deployments on Kubernetes.",
        ],
        sort_order: 1,
      },
      {
        id: 2,
        company_name: "Nexus Interactive Studio",
        position: "Lead Full-Stack & Motion Engineer",
        location: "Remote / Singapore",
        start_date: "2021-06-01",
        end_date: "2023-12-31",
        is_current: false,
        description: "Spearheaded headless web architectures, real-time WebGL experiences, and high-conversion client platforms.",
        highlights: [
          "Delivered 14 bespoke commercial platforms maintaining 100/100 Lighthouse performance and accessibility scores.",
          "Constructed internal GSAP 3 animation library with deterministic reduced-motion and mobile fallbacks.",
          "Mentored an international squad of 8 frontend and backend software engineers.",
        ],
        sort_order: 2,
      },
      {
        id: 3,
        company_name: "Vortex Data Systems",
        position: "Senior Software Engineer",
        location: "Jakarta, Indonesia",
        start_date: "2018-08-01",
        end_date: "2021-05-31",
        is_current: false,
        description: "Built scalable relational databases, internal analytical dashboards, and microservice APIs.",
        highlights: [
          "Migrated monolithic MySQL database to sharded read/write clusters with zero customer downtime.",
          "Authored automated unit and integration test suites achieving 92% code coverage across critical financial paths.",
        ],
        sort_order: 3,
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
        field_of_study: "Computer Science & Distributed Systems",
        start_year: 2014,
        end_year: 2018,
        description: "Graduated with highest honors. Specialized in distributed consensus protocols, concurrency control, and computer graphics.",
        activities: ["Lead Researcher, Distributed Systems Lab", "ACM ICPC Regional Contestant", "Teaching Assistant, Algorithm Design"],
        sort_order: 1,
      },
    ];
  }

  return (
    <div className="w-full pb-20">
      {/* Top Header */}
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Track Record & Career Milestones</Eyebrow>
        <Display size="xl" className="mb-4">
          Engineering Leadership & Systems Experience
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl leading-relaxed">
          Over 8 years of designing fault-tolerant distributed backends, orchestrating cloud infrastructures, and shipping award-winning digital experiences.
        </Text>
      </header>

      {/* Professional Milestones Timeline */}
      <SectionWrapper
        index={1}
        title="Professional Milestones"
        subtitle="Chronological progression of technical leadership and architectural responsibilities"
      >
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                aria-hidden="true"
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.is_current
                    ? "bg-cyan-400 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                    : "bg-zinc-900 border-zinc-600 group-hover:border-cyan-400 transition-colors"
                }`}
              />

              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-mono text-cyan-400 mt-0.5">
                      {exp.company_name}
                      {exp.location && <span className="text-zinc-500 font-sans"> — {exp.location}</span>}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-3 py-1 rounded-full w-fit border border-zinc-700/50">
                    {exp.start_date.slice(0, 4)} — {exp.is_current ? "Present" : exp.end_date?.slice(0, 4)}
                  </div>
                </div>

                {exp.description && (
                  <p className="text-sm text-zinc-300 font-body leading-relaxed mb-6">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2 border-t border-zinc-800/80 pt-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                      Key Engineering Outcomes
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-xs text-zinc-300 font-body">
                          <span className="text-cyan-400 mr-2 font-mono">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Academic Foundation */}
      {education.length > 0 && (
        <SectionWrapper
          index={2}
          title="Academic Credentials"
          subtitle="Formal software engineering foundations and distributed systems research"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-bold font-display text-white">{edu.institution}</h3>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-0.5 rounded border border-zinc-700">
                      {edu.start_year} — {edu.end_year ?? "Present"}
                    </span>
                  </div>
                  <div className="text-sm font-mono text-cyan-400 mb-4">
                    {edu.degree} in {edu.field_of_study}
                  </div>
                  {edu.description && (
                    <p className="text-sm text-zinc-400 font-body leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  )}
                </div>

                {edu.activities && edu.activities.length > 0 && (
                  <div className="border-t border-zinc-800/80 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.map((act, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-800/90 text-zinc-300 border border-zinc-700/50"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Next Steps CTA */}
      <SectionWrapper
        index={3}
        title="Looking for Architectural Guidance?"
        subtitle="Explore my verified engineering works or discuss an upcoming platform build."
      >
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display text-white">Let’s discuss your technical goals.</h3>
            <p className="text-sm text-zinc-400 font-body leading-relaxed">
              From architecting low-latency microservices to scaling distributed databases.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" variant="secondary" size="lg">
              Explore Projects
            </Button>
            <Button href="/contact" variant="primary" size="lg" rightIcon={<span>→</span>}>
              Initiate Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
