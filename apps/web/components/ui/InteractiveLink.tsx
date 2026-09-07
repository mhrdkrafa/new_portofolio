import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface InteractiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  external?: boolean;
  withArrow?: boolean;
  className?: string;
}

export function InteractiveLink({
  href,
  children,
  external = false,
  withArrow = true,
  className = "",
  ...props
}: InteractiveLinkProps) {
  const isExternal = external || href.startsWith("http");

  const content = (
    <span className="inline-flex items-center space-x-1 group">
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
      </span>
      {withArrow && (
        <span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-cyan-400 font-mono text-xs"
          aria-hidden="true"
        >
          {isExternal ? "↗" : "→"}
        </span>
      )}
    </span>
  );

  const combinedClasses = `text-sm font-medium text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {content}
    </Link>
  );
}
