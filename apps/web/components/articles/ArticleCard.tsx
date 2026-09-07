import Link from "next/link";
import type { Article } from "@/types/api";

export interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className = "" }: ArticleCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-400/40 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div>
        {/* Top Metadata Header */}
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-500 mb-3">
          {article.published_at && <span>{article.published_at}</span>}
          {article.published_at && <span>•</span>}
          <span>{article.reading_time} min read</span>
          {article.category && (
            <>
              <span>•</span>
              <span className="text-cyan-400/80">{article.category.name}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
          <Link href={`/articles/${article.slug}`} className="focus:outline-none focus:underline">
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-zinc-400 font-body leading-relaxed line-clamp-3 mb-6">
          {article.excerpt}
        </p>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/60 text-zinc-400 border border-zinc-700/40"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors">
        <span>Read Technical Essay</span>
        <span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </article>
  );
}
