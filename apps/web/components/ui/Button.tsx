import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-semibold hover:bg-zinc-200 border border-transparent shadow-sm",
  secondary:
    "bg-zinc-900/80 text-zinc-200 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700",
  accent:
    "bg-cyan-400 text-black font-semibold hover:bg-cyan-300 border border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)]",
  outline:
    "bg-transparent text-zinc-300 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
  ghost:
    "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-mono rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm font-medium rounded-md gap-2",
  lg: "px-7 py-3.5 text-base font-semibold rounded-lg gap-2.5",
};

export function Button({
  children,
  variant = "secondary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  href,
  external,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <span
          className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"
          aria-hidden="true"
        />
      ) : (
        leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      disabled={disabled || isLoading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
