import { portfolioApi } from "@/lib/api/client";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { HeroMotion } from "@/components/motion/HeroMotion";
import { ProjectReveal } from "@/components/motion/ProjectReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { DynamicHeroScene } from "@/components/3d/DynamicHeroScene";
import type { Project, Profile, Article, Service, Experience, Testimonial } from "@/types/api";

export default async function HomePage() {
  let profile: Profile | null = null;
  let featuredProjects: Project[] = [];
  let recentArticles: Article[] = [];
  let coreServices: Service[] = [];
  let experiences: Experience[] = [];
  let testimonials: Testimonial[] = [];

  try {
    const profileRes = await portfolioApi.getProfile();
    profile = (profileRes as { data: Profile }).data ?? profileRes;
  } catch {
    profile = {
      id: 1,
      full_name: "Mahardika Rafa",
      headline: "Systems Architect & Creative Full-Stack Engineer",
      bio: "Engineering high-throughput distributed backends, deterministic 60 FPS motion choreographies, and state-of-the-art digital artifacts.",
      location: "Jakarta, Indonesia",
      availability_status: "available",
      years_experience: 8,
    };
  }

  try {
    const projectsRes = await portfolioApi.getProjects({ featured: true });
    featuredProjects = (projectsRes as { data: Project[] }).data ?? projectsRes;
  } catch {
    featuredProjects = [
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
          { id: 6, name: "Laravel API", slug: "laravel", category: "backend" },
        ],
      },
    ];
  }

  try {
    const servicesRes = await portfolioApi.getServices();
    coreServices = (servicesRes as { data: Service[] }).data ?? servicesRes;
  } catch {
    coreServices = [
      {
        id: 1,
        title: "Systems Architecture & Scalability",
        slug: "systems-architecture",
        short_description: "Designing fault-tolerant, high-throughput distributed architectures, database sharding, and caching strategies.",
        description: "",
        features: ["Distributed database clustering", "Sub-millisecond Redis Streams", "Decoupled event-driven queues"],
        is_active: true,
        sort_order: 1,
      },
      {
        id: 2,
        title: "Creative Full-Stack Engineering",
        slug: "creative-full-stack-engineering",
        short_description: "Building production-grade headless web applications with Next.js 16, Laravel 13 API, and seamless interactions.",
        description: "",
        features: ["Server Components architecture", "Filament 5 CMS modeling", "Strict TypeScript type contracts"],
        is_active: true,
        sort_order: 2,
      },
      {
        id: 3,
        title: "Deterministic Motion & WebGL",
        slug: "motion-webgl-experiences",
        short_description: "Crafting bespoke animation choreography, 60 FPS GSAP timelines, and isolated 3D scenes.",
        description: "",
        features: ["GSAP 3 ScrollTrigger scrub", "Reduced-motion accessibility", "React Three Fiber canvases"],
        is_active: true,
        sort_order: 3,
      },
    ];
  }

  try {
    const experiencesRes = await portfolioApi.getExperiences();
    experiences = (experiencesRes as { data: Experience[] }).data ?? experiencesRes;
  } catch {
    experiences = [
      {
        id: 1,
        company_name: "Aether Dynamics Lab",
        position: "Principal Systems Architect",
        location: "Jakarta & Remote",
        start_date: "2024-01-01",
        end_date: null,
        is_current: true,
        description: "Overseeing cloud architecture, high-frequency distributed ledgers, and core API platform performance.",
        highlights: [
          "Scaled message ingestion to 45,000 requests/sec with zero packet loss using Redis Streams and Go workers.",
          "Cut infrastructure compute costs by 38% through optimized MySQL query plans and caching layers.",
        ],
        sort_order: 1,
      },
      {
        id: 2,
        company_name: "Nexus Interactive Studio",
        position: "Lead Full-Stack & Motion Engineer",
        location: "Remote",
        start_date: "2021-06-01",
        end_date: "2023-12-31",
        is_current: false,
        description: "Spearheaded headless web applications and interactive 3D WebGL user experiences for enterprise clients.",
        highlights: [
          "Delivered 14 bespoke commercial platforms with perfect 100 Lighthouse performance audits.",
          "Engineered custom GSAP and R3F pipelines with automatic reduced-motion accessibility fallbacks.",
        ],
        sort_order: 2,
      },
    ];
  }

  try {
    const testimonialsRes = await portfolioApi.getTestimonials();
    testimonials = (testimonialsRes as { data: Testimonial[] }).data ?? testimonialsRes;
  } catch {
    testimonials = [
      {
        id: 1,
        name: "Devon Vance",
        role: "VP of Engineering",
        company: "Apex Global Financial",
        quote: "Mahardika delivered our distributed transaction pipeline ahead of schedule. The system effortlessly absorbed our Black Friday traffic peaks without breaking a sweat.",
        rating: 5,
        is_published: true,
        sort_order: 1,
      },
      {
        id: 2,
        name: "Elena Rostova",
        role: "Creative Director",
        company: "Synthetix Design Group",
        quote: "Rarely do you find an engineer who understands sub-millisecond database queries just as deeply as bezier curves and 60 FPS WebGL choreography. A truly exceptional technical partner.",
        rating: 5,
        is_published: true,
        sort_order: 2,
      },
    ];
  }

  try {
    const articlesRes = await portfolioApi.getArticles();
    recentArticles = (articlesRes as { data: Article[] }).data ?? articlesRes;
  } catch {
    recentArticles = [
      {
        id: 1,
        title: "Architecting Low-Latency Headless Portfolios with Next.js 16 & Laravel 13",
        slug: "architecting-low-latency-headless-portfolios",
        excerpt: "An architectural deep-dive into pairing Laravel 13 API backends with Next.js 16 App Router for sub-second page loads and zero layout shift.",
        body: "",
        reading_time: 8,
        status: "published",
        published_at: "2026-08-15",
        tags: [
          { id: 1, name: "Architecture", slug: "architecture" },
          { id: 2, name: "Next.js 16", slug: "nextjs-16" },
        ],
      },
    ];
  }

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center px-6 sm:px-8 md:px-12 max-w-7xl mx-auto py-16 sm:py-20 overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          data-hero-glow
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <HeroMotion className="lg:col-span-7 space-y-6">
            <div data-hero-eyebrow>
              <Eyebrow>Systems Architecture × Creative Engineering</Eyebrow>
            </div>

            <div data-hero-title>
              <Display size="2xl">
                {profile?.full_name ?? "Mahardika Rafa"}
              </Display>
            </div>

            <div data-hero-headline>
              <Text size="lg" variant="primary" className="max-w-3xl font-medium sm:text-2xl text-zinc-300">
                {profile?.headline ?? "Systems Architect & Creative Full-Stack Engineer"}
              </Text>
            </div>

            <div data-hero-bio>
              <Text size="base" variant="secondary" className="max-w-2xl text-zinc-400">
                {profile?.bio}
              </Text>
            </div>

            <div data-hero-actions className="pt-6 flex flex-wrap gap-4">
              <Magnetic>
                <Button
                  href="/projects"
                  variant="primary"
                  size="lg"
                  rightIcon={<span>→</span>}
                >
                  Explore Selected Works
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Initiate Consultation
                </Button>
              </Magnetic>
            </div>
          </HeroMotion>

          {/* 3D WebGL Architectural Centerpiece with Fallbacks */}
          <div
            data-hero-decor
            className="lg:col-span-5 h-[340px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center pointer-events-none lg:pointer-events-auto"
          >
            <DynamicHeroScene className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* 2. Architectural Impact Metrics Bar */}
      <section className="border-y border-white/10 bg-zinc-950/80 backdrop-blur-md py-10 px-6 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">45k+</div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mt-1">TPS Peak Throughput</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">99.99%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mt-1">Historical Uptime SLA</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">{profile?.years_experience ?? 8}+ Yrs</div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mt-1">Distributed Systems Mastery</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">&lt; 100ms</div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mt-1">P99 API Latency SLA</div>
          </div>
        </div>
      </section>

      {/* 3. Featured Engineering Works */}
      {featuredProjects.length > 0 && (
        <SectionWrapper
          index={1}
          title="Featured Engineering"
          subtitle="High-impact system architectures, transaction engines, and interactive digital artifacts"
          actionLabel="View all projects"
          actionHref="/projects"
        >
          <ProjectReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectReveal>
        </SectionWrapper>
      )}

      {/* 4. Capabilities & Services */}
      {coreServices.length > 0 && (
        <SectionWrapper
          index={2}
          title="Core Capabilities"
          subtitle="Specialized domain mastery delivering resilience from low-level database clustering to fluid frontends"
          actionLabel="View all services"
          actionHref="/services"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreServices.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-400/40 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-sm mb-6">
                    0{service.sort_order}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-zinc-400 font-body leading-relaxed mb-6">
                    {service.short_description}
                  </p>
                  {service.features && (
                    <ul className="space-y-2 border-t border-zinc-800/80 pt-6">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs text-zinc-300 font-body">
                          <span className="text-cyan-400 mr-2">›</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 5. Career Trajectory / Experience */}
      {experiences.length > 0 && (
        <SectionWrapper
          index={3}
          title="Career Trajectory"
          subtitle="A track record of engineering leadership, scalable cloud deployments, and resilient backend systems"
          actionLabel="View full history"
          actionHref="/experience"
        >
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">{exp.position}</h3>
                    <div className="text-sm font-mono text-cyan-400">{exp.company_name}</div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">
                    {new Date(exp.start_date).getFullYear()} — {exp.is_current ? "Present" : exp.end_date ? new Date(exp.end_date).getFullYear() : "Past"}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-sm text-zinc-400 font-body leading-relaxed mb-4">{exp.description}</p>
                )}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-zinc-300 font-body flex items-start">
                        <span className="text-cyan-400 mr-2">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 6. Client & Peer Endorsements */}
      {testimonials.length > 0 && (
        <SectionWrapper
          index={4}
          title="Peer Endorsements"
          subtitle="Reflections from engineering executives and collaborators on technical rigor and execution reliability"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"
              >
                <blockquote className="text-sm sm:text-base text-zinc-300 font-body italic leading-relaxed mb-6">
                  “{test.quote}”
                </blockquote>
                <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold font-display text-white">{test.name}</div>
                    <div className="text-xs font-mono text-zinc-500">
                      {test.role}, <span className="text-zinc-400">{test.company}</span>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-mono text-xs">
                    {"★".repeat(test.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 7. Technical Writings */}
      {recentArticles.length > 0 && (
        <SectionWrapper
          index={5}
          title="Technical Writings"
          subtitle="Deep dives on distributed systems engineering, high-throughput caching, and deterministic frontend motion"
          actionLabel="View all articles"
          actionHref="/articles"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 8. Direct Engagement Callout */}
      <SectionWrapper
        index={6}
        title="Ready to Build Resilient Systems?"
        subtitle="Available for select Q3/Q4 architectural advisory, performance optimizations, and creative engineering contracts."
      >
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-display text-white">Let’s engineer something exceptional.</h3>
            <p className="text-sm text-zinc-400 font-body leading-relaxed">
              Whether you need to scale to tens of thousands of requests per second or craft an interactive digital identity.
            </p>
          </div>
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            rightIcon={<span>→</span>}
          >
            Initiate Consultation
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
