import type { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  index?: string | number;
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  children: ReactNode;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  index,
  title,
  subtitle,
  actionLabel,
  actionHref,
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionWrapperProps) {
  const formattedIndex =
    typeof index === "number" ? `0${index}`.slice(-2) : index;

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 md:py-32 border-t border-white/10 ${className}`}
      {...props}
    >
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 md:px-12 ${containerClassName}`}>
        {(title || formattedIndex) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
            <div className="max-w-2xl space-y-2">
              {formattedIndex && (
                <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                  // {formattedIndex}
                </div>
              )}
              {title && (
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-sm sm:text-base text-zinc-400 font-body leading-relaxed max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>

            {actionLabel && actionHref && (
              <div className="md:text-right flex-shrink-0">
                <Link
                  href={actionHref}
                  className="group inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{actionLabel}</span>
                  <span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
