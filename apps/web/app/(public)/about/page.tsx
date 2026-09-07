import type { Metadata } from "next";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Profile, Skill, Education } from "@/types/api";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "About Mahardika Rafa — Systems Architect & Creative Engineer",
    description: "Learn about Mahardika Rafa's architectural philosophy, distributed systems background, and creative engineering craft.",
    canonical: "/about",
  }),
};

export default async function AboutPage() {
  let profile: Profile | null = null;
  let skills: Skill[] = [];
  let education: Education[] = [];

  try {
    const profileRes = await portfolioApi.getProfile();
    profile = (profileRes as { data: Profile }).data ?? profileRes;
  } catch {
    profile = {
      id: 1,
      full_name: "Mahardika Rafa",
      headline: "Systems Architect & Creative Full-Stack Engineer",
      bio: "Crafting resilient distributed backends, deterministic motion choreographies, and state-of-the-art digital artifacts.",
      location: "Jakarta, Indonesia",
      availability_status: "available",
      years_experience: 8,
    };
  }

  try {
    const skillsRes = await portfolioApi.getSkills();
    skills = (skillsRes as { data: Skill[] }).data ?? skillsRes;
  } catch {
    skills = [
      { id: 1, name: "Go & Distributed Systems", group_name: "Backend & Systems", proficiency: 95, is_featured: true, sort_order: 1 },
      { id: 2, name: "PHP 8.3 & Laravel 13", group_name: "Backend & Systems", proficiency: 98, is_featured: true, sort_order: 2 },
      { id: 3, name: "Redis Streams & Pub/Sub", group_name: "Backend & Systems", proficiency: 92, is_featured: true, sort_order: 3 },
      { id: 4, name: "MySQL 8 Sharding & Replication", group_name: "Backend & Systems", proficiency: 94, is_featured: true, sort_order: 4 },
      { id: 5, name: "Next.js 16 App Router", group_name: "Frontend & Motion", proficiency: 96, is_featured: true, sort_order: 5 },
      { id: 6, name: "React 19 & TypeScript", group_name: "Frontend & Motion", proficiency: 95, is_featured: true, sort_order: 6 },
      { id: 7, name: "GSAP 3 & Timeline Scrubbing", group_name: "Frontend & Motion", proficiency: 94, is_featured: true, sort_order: 7 },
      { id: 8, name: "Three.js & WebGL Shaders", group_name: "Frontend & Motion", proficiency: 88, is_featured: true, sort_order: 8 },
      { id: 9, name: "Docker & Kubernetes", group_name: "Infrastructure & SRE", proficiency: 90, is_featured: true, sort_order: 9 },
      { id: 10, name: "Prometheus & Grafana Tracing", group_name: "Infrastructure & SRE", proficiency: 86, is_featured: false, sort_order: 10 },
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
        field_of_study: "Computer Science & Software Systems",
        start_year: 2014,
        end_year: 2018,
        description: "Concentration in distributed networks, database transaction theory, and computer graphics.",
        activities: ["Distributed Systems Lab Lead", "ACM ICPC Regional Finalist"],
        sort_order: 1,
      },
    ];
  }

  // Group skills by category
  const skillGroups = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const group = skill.group_name || "Core Technologies";
    if (!acc[group]) acc[group] = [];
    acc[group].push(skill);
    return acc;
  }, {});

  const principles = [
    {
      title: "Determinism Over Hope",
      description: "Every state transition, cache invalidation, and database lock must be mathematically deterministic. We design systems to isolate faults and self-heal rather than assuming optimal network conditions.",
    },
    {
      title: "Latency as an Aesthetic",
      description: "Sub-100ms Time to First Byte and instantaneous page transitions aren't mere SRE metrics—they represent deep respect for user time, attention, and cognitive flow.",
    },
    {
      title: "Content Decoupled from Code",
      description: "Content is structured data; layout is deterministic code. Decoupling editorial authority from frontend presentation enables agile publishing without compromising type safety.",
    },
    {
      title: "Inclusive Digital Storytelling",
      description: "World-class 3D and GSAP motion should elevate an identity, never create accessibility barriers. Every dynamic interaction honors reduced-motion preferences, visible focus states, and semantic HTML.",
    },
  ];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Digital Identity & Technical Philosophy</Eyebrow>
        <Display size="xl" className="mb-4">
          Architecting at the Intersection of Scalability & Motion
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl leading-relaxed">
          Bridging high-throughput distributed backend architectures with state-of-the-art interactive digital experiences.
        </Text>
      </header>

      {/* Narrative Section */}
      <SectionWrapper
        index={1}
        title="The Engineering Narrative"
        subtitle="8+ years dedicated to low-latency cloud infrastructure and bespoke frontend interfaces"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-base text-zinc-300 font-body leading-relaxed">
            <p>
              I am {profile?.full_name ?? "Mahardika Rafa"}, a systems architect and creative full-stack engineer currently based in {profile?.location ?? "Jakarta, Indonesia"}.
            </p>
            <p>
              Throughout my engineering journey, I have focused on solving a fundamental dichotomy in digital engineering: backend systems are often resilient but visually utilitarian, while creative agencies build visually stunning websites that crash under load or suffer from bloated, unmaintainable architectures.
            </p>
            <p>
              My practice is built on eliminating that compromise. Whether engineering financial settlement pipelines handling 45,000+ operations per second with Redis streams and MySQL sharding, or choreographing 60 FPS GSAP timelines and procedural Three.js geometric lattices, every system I build is designed to be deterministic, accessible, and remarkably fast.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              {"//"} Operating Profile
            </div>
            <div className="space-y-3 text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-500">EXPERIENCE:</span>
                <span className="text-zinc-200">{profile?.years_experience ?? 8}+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">BASE LOCATION:</span>
                <span className="text-zinc-200">{profile?.location ?? "Jakarta, ID"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">STATUS:</span>
                <span className="text-emerald-400 font-semibold">Available for Advisory</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">SPECIALTY:</span>
                <span className="text-zinc-200">High-Concurrency & Motion</span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/contact" variant="primary" size="sm" className="w-full">
                Initiate Conversation
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Architectural Principles */}
      <SectionWrapper
        index={2}
        title="Architectural Principles"
        subtitle="The foundational philosophies governing every system architecture and code contract"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-400/40 transition-colors"
            >
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                0{idx + 1} — PRINCIPLE
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">{p.title}</h3>
              <p className="text-sm text-zinc-400 font-body leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Technical Skill Matrix */}
      <SectionWrapper
        index={3}
        title="Technical Competencies"
        subtitle="Specialized domain toolchains, distributed protocols, and runtime environments"
      >
        <div className="space-y-10">
          {Object.entries(skillGroups).map(([groupName, groupSkills]) => (
            <div key={groupName} className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
                {groupName}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
                    <span className="text-xs font-mono text-cyan-400">{skill.proficiency}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Academic Background */}
      {education.length > 0 && (
        <SectionWrapper
          index={4}
          title="Academic Pedigree"
          subtitle="Formal computer science foundations in distributed computing and software engineering"
        >
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold font-display text-white">{edu.institution}</h3>
                  <div className="text-xs font-mono text-zinc-400">
                    {edu.start_year} — {edu.end_year ?? "Present"}
                  </div>
                </div>
                <div className="text-sm font-mono text-cyan-400 mb-3">
                  {edu.degree} in {edu.field_of_study}
                </div>
                {edu.description && (
                  <p className="text-sm text-zinc-400 font-body leading-relaxed mb-4">{edu.description}</p>
                )}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                    {edu.activities.map((act, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-zinc-800 text-zinc-400"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Consultation Callout */}
      <SectionWrapper
        index={5}
        title="Collaborate or Consult"
        subtitle="Open for select enterprise architecture advisory, distributed systems design, and performance reviews."
      >
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display text-white">Let’s discuss your technical challenges.</h3>
            <p className="text-sm text-zinc-400 font-body leading-relaxed">
              Whether preparing for a major product launch or migrating legacy infrastructure to decoupled architectures.
            </p>
          </div>
          <Button href="/contact" variant="accent" size="lg" rightIcon={<span>→</span>}>
            Start a Conversation
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
