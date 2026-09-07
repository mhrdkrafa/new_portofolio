import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Text } from "@/components/ui/Typography";
import type { Article } from "@/types/api";

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return constructMetadata({
    title: `${title} — Technical Essay`,
    description: `Read the architectural deep-dive: ${title}. Authored by Mahardika Rafa.`,
    canonical: `/articles/${slug}`,
  });
}

export default async function ArticleDetailPage(props: ArticleDetailPageProps) {
  const { slug } = await props.params;

  let article: Article | null = null;

  try {
    const res = await portfolioApi.getArticle(slug);
    article = (res as { data: Article }).data ?? res;
  } catch {
    if (slug === "architecting-low-latency-headless-portfolios") {
      article = {
        id: 1,
        title: "Architecting Low-Latency Headless Portfolios with Next.js 16 & Laravel 13",
        slug: "architecting-low-latency-headless-portfolios",
        excerpt: "An architectural deep-dive into pairing Laravel 13 API backends with Next.js 16 App Router for sub-second page loads and zero layout shift.",
        body: `<p class="text-lg leading-relaxed text-zinc-300 mb-6">Modern digital platforms often suffer from an identity crisis: they either sacrifice visual distinction for static simplicity, or compromise core performance and SEO for heavy, unmanaged client-side rendering.</p>
        <p class="leading-relaxed text-zinc-300 mb-6">In this architecture, we bridge both worlds by establishing strict, uncompromised system boundaries between server persistence and client interaction.</p>
        
        <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4 tracking-tight">1. The Server Boundary & Edge Caching</h2>
        <p class="leading-relaxed text-zinc-300 mb-6">Next.js 16 Server Components fetch pre-validated content directly from our Laravel 13 API using HTTP caching headers and Redis tag revalidation. The browser never connects directly to MySQL, never executes database mutations unauthenticated, and never holds infrastructure credentials.</p>
        
        <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4 tracking-tight">2. Deterministic Hydration & Motion Isolation</h2>
        <p class="leading-relaxed text-zinc-300 mb-6">Animations and WebGL canvases are isolated into dedicated client islands using @gsap/react's <code>useGSAP</code> hook, guaranteeing that critical semantic HTML renders immediately without waiting for client-side JavaScript execution.</p>
        
        <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4 tracking-tight">3. Accessibility Without Compromise</h2>
        <p class="leading-relaxed text-zinc-300 mb-6">By synchronizing browser media queries via <code>useSyncExternalStore</code>, users requesting <code>prefers-reduced-motion: reduce</code> receive immediate resting layouts with zero transform delays and zero layout shifts.</p>`,
        reading_time: 8,
        status: "published",
        published_at: "2026-08-15",
        tags: [
          { id: 1, name: "Architecture", slug: "architecture" },
          { id: 2, name: "Next.js 16", slug: "nextjs-16" },
          { id: 3, name: "Performance", slug: "performance" },
        ],
      };
    } else if (slug === "deterministic-scroll-choreography-gsap-react-19") {
      article = {
        id: 2,
        title: "Deterministic Scroll Choreography with GSAP and React 19 Server Components",
        slug: "deterministic-scroll-choreography-gsap-react-19",
        excerpt: "Patterns for managing complex scroll-bound animation timelines without compromising hydration performance or accessibility.",
        body: `<p class="text-lg leading-relaxed text-zinc-300 mb-6">Complex scroll-driven choreography often introduces subtle bugs: hydration mismatches, orphaned event listeners during client-side route changes, and jank on lower-end mobile devices.</p>
        <p class="leading-relaxed text-zinc-300 mb-6">Using React 19 with GSAP 3's official <code>@gsap/react</code> wrapper, we scope all timeline allocations to specific ref boundaries. Whenever a component unmounts, GSAP automatically kills triggers and resets styles.</p>
        <h2 class="text-2xl font-bold font-display text-white mt-10 mb-4 tracking-tight">Managing Viewport Culling</h2>
        <p class="leading-relaxed text-zinc-300 mb-6">By pairing <code>ScrollTrigger</code> with native <code>IntersectionObserver</code> listeners, non-visible sections immediately suspend active requestAnimationFrame loops, returning CPU and GPU utilization to near zero.</p>`,
        reading_time: 6,
        status: "published",
        published_at: "2026-07-22",
        tags: [
          { id: 4, name: "GSAP", slug: "gsap" },
          { id: 5, name: "React 19", slug: "react-19" },
          { id: 6, name: "Motion", slug: "motion" },
        ],
      };
    } else if (slug === "scaling-mysql-sharding-redis-streams") {
      article = {
        id: 3,
        title: "Scaling MySQL 8 Sharding and Redis Streams to 45k Ops/Sec",
        slug: "scaling-mysql-sharding-redis-streams",
        excerpt: "Lessons learned while designing transactional settlement pipelines that survive high-concurrency spikes without distributed deadlocks.",
        body: `<p class="text-lg leading-relaxed text-zinc-300 mb-6">When financial order volume exceeds 40,000 transactions per second, standard relational database architectures degrade rapidly into lock contention and disk I/O bottlenecks.</p>
        <p class="leading-relaxed text-zinc-300 mb-6">In this retrospective, we break down how sharded MySQL 8 clusters combined with Redis Streams consumer groups enabled sub-millisecond settlement confirmation with optimistic locking.</p>`,
        reading_time: 11,
        status: "published",
        published_at: "2026-05-18",
        tags: [
          { id: 1, name: "Architecture", slug: "architecture" },
          { id: 7, name: "Distributed Systems", slug: "distributed-systems" },
          { id: 3, name: "Performance", slug: "performance" },
        ],
      };
    }
  }

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen px-6 sm:px-8 md:px-12 max-w-4xl mx-auto pt-16 pb-24">
      {/* Breadcrumbs Navigation */}
      <div className="py-4 border-b border-white/10 mb-10 flex justify-between items-center">
        <Link
          href="/articles"
          className="text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
        >
          <span>←</span>
          <span>Back to Technical Writings</span>
        </Link>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          {article.reading_time} MIN READ
        </span>
      </div>

      {/* Article Header */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
          <span className="text-zinc-500">PUBLISHED:</span>
          <span className="text-zinc-300">{article.published_at}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-500">AUTHOR:</span>
          <span className="text-cyan-400">Mahardika Rafa</span>
        </div>

        <Display size="xl" className="text-white tracking-tight leading-tight">
          {article.title}
        </Display>

        <Text size="lg" variant="secondary" className="leading-relaxed text-zinc-300">
          {article.excerpt}
        </Text>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-0.5 rounded text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Body */}
      <section
        className="border-t border-white/10 pt-10 font-body text-zinc-300 leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      {/* Author Bio Box */}
      <div className="mt-16 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-14 h-14 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center font-mono font-bold text-cyan-300 text-lg flex-shrink-0">
          MR
        </div>
        <div className="space-y-1">
          <div className="text-sm font-bold font-display text-white">Written by Mahardika Rafa</div>
          <p className="text-xs text-zinc-400 font-body leading-relaxed">
            Systems Architect & Creative Full-Stack Engineer based in Jakarta. Specializing in high-concurrency distributed backends, deterministic motion choreographies, and resilient cloud architectures.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
        <Link
          href="/articles"
          className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
        >
          ← All Technical Notes
        </Link>
        <Link
          href="/contact"
          className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Discuss Technical Findings →
        </Link>
      </div>
    </article>
  );
}
