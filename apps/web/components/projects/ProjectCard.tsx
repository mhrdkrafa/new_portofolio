import Link from "next/link";
import type { Project } from "@/types/api";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-400/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div>
        {/* Top Metadata Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-zinc-500">{project.year}</span>
            {project.category && (
              <>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {project.category.name}
                </span>
              </>
            )}
          </div>

          {project.featured && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors mb-3">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none focus:underline">
            {project.title}
          </Link>
        </h3>

        {/* Summary Description */}
        <p className="text-sm text-zinc-400 font-body leading-relaxed line-clamp-3 mb-6">
          {project.summary}
        </p>

        {/* Technology Pills */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.id}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-[11px] font-mono text-zinc-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors">
        <span>Technical Case Study</span>
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
