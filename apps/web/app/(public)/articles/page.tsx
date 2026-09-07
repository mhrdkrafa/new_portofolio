import Link from "next/link";
import { portfolioApi } from "@/lib/api/client";
import type { Article } from "@/types/api";

export default async function ArticlesPage() {
  let articles: Article[] = [];

  try {
    const res = await portfolioApi.getArticles();
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
    ];
  }

  return (
    <div className="min-h-screen p-8 md:p-16 max-w-5xl mx-auto">
      <div className="flex justify-between items-center py-6 border-b border-white/10 mb-12">
        <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <span className="text-xs font-mono text-cyan-400">Technical Articles</span>
      </div>

      <header className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Writings & Technical Essays
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Deep dives on distributed systems engineering, high-throughput caching, and deterministic frontend motion choreography.
        </p>
      </header>

      <div className="space-y-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="group block p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-500 mb-3">
              <span>{article.published_at}</span>
              <span>•</span>
              <span>{article.reading_time} min read</span>
            </div>

            <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
              {article.title}
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-6">
              {article.excerpt}
            </p>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-400 border border-zinc-700/40"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
