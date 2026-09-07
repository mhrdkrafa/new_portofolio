import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioApi } from "@/lib/api/client";
import { constructMetadata } from "@/lib/seo/metadata";
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
    description: `Read the architectural deep-dive: ${title}.`,
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
        body: `<p>Modern portfolio platforms often suffer from an identity crisis: they either sacrifice visual identity for static simplicity, or compromise performance and SEO for uncontrolled client-side rendering.</p>
        <p>In this architecture, we bridge the best of both worlds by establishing strict system boundaries:</p>
        <h3>1. The Server Boundary</h3>
        <p>Next.js 16 Server Components fetch pre-validated content directly from our Laravel 13 API using HTTP caching headers and Redis tag revalidation. The client never executes database queries or holds credentials.</p>
        <h3>2. Deterministic Hydration</h3>
        <p>Animations and WebGL canvases are isolated into dedicated client islands using @gsap/react useGSAP, guaranteeing that critical content renders immediately without waiting for client-side JavaScript execution.</p>`,
        reading_time: 8,
        status: "published",
        published_at: "2026-08-15",
        tags: [
          { id: 1, name: "Architecture", slug: "architecture" },
          { id: 2, name: "Next.js 16", slug: "nextjs-16" },
          { id: 3, name: "Performance", slug: "performance" },
        ],
      };
    }
  }

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      <div className="py-6 border-b border-white/10 mb-12 flex justify-between items-center">
        <Link href="/articles" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          ← Back to Articles
        </Link>
        <span className="text-xs font-mono text-cyan-400">{article.reading_time} min read</span>
      </div>

      <header className="space-y-4 mb-12">
        <div className="text-xs font-mono text-zinc-500">
          Published {article.published_at}
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          {article.title}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          {article.excerpt}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-0.5 rounded text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </header>

      <section
        className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <Link href="/articles" className="text-sm text-zinc-400 hover:text-white transition-colors">
          ← All Articles
        </Link>
        <Link href="/contact" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
          Have questions? Reach out →
        </Link>
      </div>
    </article>
  );
}
