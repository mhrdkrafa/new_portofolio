import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import type { Project, Profile } from "@/types/api";

export default async function HomePage() {
  let profile: Profile | null = null;
  let featuredProjects: Project[] = [];

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
      },
    ];
  }

  return (
    <div className="min-h-screen flex flex-col justify-between p-8 md:p-16 max-w-7xl mx-auto">
      <header className="flex justify-between items-center py-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-mono tracking-wider uppercase text-zinc-400">
            {profile?.availability_status === 'available' ? 'Available for Consulting' : 'Engineering Showcase'}
          </span>
        </div>
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">Projects</Link>
          <Link href="/experience" className="text-zinc-400 hover:text-white transition-colors">Experience</Link>
          <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">Services</Link>
          <Link href="/articles" className="text-zinc-400 hover:text-white transition-colors">Articles</Link>
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Contact</Link>
        </nav>
      </header>

      <main className="my-auto py-20">
        <div className="max-w-4xl space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Systems Architecture × Creative Engineering
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            {profile?.full_name ?? "Mahardika Rafa"}
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
            {profile?.headline ?? "Systems Architect & Creative Full-Stack Engineer"}
          </p>
          <p className="text-base text-zinc-500 max-w-2xl">
            {profile?.bio}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
            >
              Explore Selected Projects →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 font-semibold text-sm hover:bg-zinc-800 hover:text-white transition-colors"
            >
              Initiate Consultation
            </Link>
          </div>
        </div>

        {featuredProjects.length > 0 && (
          <section className="mt-24 pt-12 border-t border-white/10">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Featured Engineering</h2>
                <p className="text-sm text-zinc-400 mt-1">High-impact architectures and interactive systems</p>
              </div>
              <Link href="/projects" className="text-sm text-cyan-400 hover:underline">
                View all projects ({featuredProjects.length}+) →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 2).map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group block p-6 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                    <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                      Case Study →
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
                    {project.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Mahardika Rafa. Built with Next.js 16 & Laravel 13.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link href="/projects" className="hover:text-zinc-300">Projects</Link>
          <Link href="/experience" className="hover:text-zinc-300">Experience</Link>
          <Link href="/articles" className="hover:text-zinc-300">Articles</Link>
          <Link href="/contact" className="hover:text-zinc-300">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
