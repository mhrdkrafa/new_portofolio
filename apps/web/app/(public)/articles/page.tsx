import { portfolioApi } from "@/lib/api/client";
import { Display, Text, Eyebrow } from "@/components/ui/Typography";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArticleCard } from "@/components/articles/ArticleCard";
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
    <div className="w-full">
      <header className="px-6 sm:px-8 md:px-12 max-w-7xl mx-auto pt-16 pb-12">
        <Eyebrow className="mb-3">Writings & Architecture Notes</Eyebrow>
        <Display size="xl" className="mb-4">
          Technical Essays & Observations
        </Display>
        <Text size="lg" variant="secondary" className="max-w-2xl">
          Deep dives on distributed systems engineering, high-throughput caching, and deterministic frontend motion choreography.
        </Text>
      </header>

      <SectionWrapper
        title="All Technical Writings"
        subtitle={`Showing ${articles.length} published essays`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
