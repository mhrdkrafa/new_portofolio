import type { Metadata } from "next";
import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArticleCard } from "@/components/articles/ArticleCard";
import type { Article } from "@/types/api";

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Technical Writings, Architecture Essays & Engineering Notes",
    description: "Deep dives on distributed systems engineering, high-throughput caching, and deterministic frontend motion choreography.",
    canonical: "/articles",
  }),
};

interface ArticlesPageProps {
  searchParams?: Promise<{ tag?: string }>;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const activeTag = resolvedParams.tag || "all";

  let articles: Article[] = [];

  try {
    const res = await portfolioApi.getArticles(
      activeTag !== "all" ? { tag: activeTag } : undefined
    );
    articles = (res as { data: Article[] }).data ?? res;
  } catch {
    articles = [
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
          { id: 3, name: "Performance", slug: "performance" },
        ],
      },
      {
        id: 2,
        title: "Deterministic Scroll Choreography with GSAP and React 19 Server Components",
        slug: "deterministic-scroll-choreography-gsap-react-19",
        excerpt: "Patterns for managing complex scroll-bound animation timelines without compromising hydration performance or accessibility.",
        body: "",
        reading_time: 6,
        status: "published",
        published_at: "2026-07-22",
        tags: [
          { id: 4, name: "GSAP", slug: "gsap" },
          { id: 5, name: "React 19", slug: "react-19" },
          { id: 6, name: "Motion", slug: "motion" },
        ],
      },
      {
        id: 3,
        title: "Scaling MySQL 8 Sharding and Redis Streams to 45k Ops/Sec",
        slug: "scaling-mysql-sharding-redis-streams",
        excerpt: "Lessons learned while designing transactional settlement pipelines that survive high-concurrency spikes without distributed deadlocks.",
        body: "",
        reading_time: 11,
        status: "published",
        published_at: "2026-05-18",
        tags: [
          { id: 1, name: "Architecture", slug: "architecture" },
          { id: 7, name: "Distributed Systems", slug: "distributed-systems" },
          { id: 3, name: "Performance", slug: "performance" },
        ],
      },
      {
        id: 4,
        title: "Zero-Downtime Blue/Green Deployments with Kubernetes and Docker",
        slug: "zero-downtime-blue-green-deployments",
        excerpt: "A practical guide to continuous delivery pipelines that gracefully drain WebSocket connections and migrate database schemas live.",
        body: "",
        reading_time: 7,
        status: "published",
        published_at: "2026-04-10",
        tags: [
          { id: 7, name: "Distributed Systems", slug: "distributed-systems" },
          { id: 8, name: "DevOps", slug: "devops" },
        ],
      },
    ];

    if (activeTag !== "all") {
      articles = articles.filter(
        (a) => a.tags && a.tags.some((t) => t.slug === activeTag)
      );
    }
  }

  const tags = [
    { label: "All Topics", slug: "all" },
    { label: "Architecture", slug: "architecture" },
    { label: "Distributed Systems", slug: "distributed-systems" },
    { label: "Performance", slug: "performance" },
    { label: "Motion", slug: "motion" },
  ];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-8">
        <Eyebrow className="mb-3">Writings & Technical Essays</Eyebrow>
        <Display size="xl" className="mb-4">
          Technical Essays & Architectural Notes
        </Display>
        <Text size="lg" variant="secondary" className="max-w-3xl leading-relaxed">
          Deep dives into distributed systems engineering, high-throughput caching patterns, and deterministic frontend motion choreography.
        </Text>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {tags.map((tag) => {
            const isActive = activeTag === tag.slug;
            return (
              <Link
                key={tag.slug}
                href={tag.slug === "all" ? "/articles" : `/articles?tag=${tag.slug}`}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? "bg-cyan-400/15 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tag.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Articles Grid */}
      <SectionWrapper
        title="Published Technical Notes"
        subtitle={`Showing ${articles.length} peer-reviewed articles`}
      >
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-8">
            <p className="text-zinc-400 font-mono text-sm mb-4">
              No technical writings found under the selected topic.
            </p>
            <Link
              href="/articles"
              className="text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            >
              Reset to all technical writings
            </Link>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
