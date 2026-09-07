import type { HTMLAttributes, ReactNode } from "react";

export type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "label";

// ============================================================================
// Display Heading (Fluid Oversized Editorial Typography)
// ============================================================================
export interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TypographyTag;
  size?: "2xl" | "xl";
  children: ReactNode;
}

export function Display({
  as: Component = "h1",
  size = "2xl",
  className = "",
  children,
  ...props
}: DisplayProps) {
  const sizeClasses =
    size === "2xl"
      ? "text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95]"
      : "text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0]";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = Component as any;

  return (
    <Tag
      className={`font-bold font-display text-white ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ============================================================================
// Section Headings (H1 - H4)
// ============================================================================
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TypographyTag;
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
}

export function Heading({
  as,
  level = 2,
  className = "",
  children,
  ...props
}: HeadingProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (as || `h${level}`) as any;

  const levelClasses = {
    1: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    2: "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug",
    3: "text-xl sm:text-2xl font-bold tracking-tight leading-snug",
    4: "text-lg sm:text-xl font-semibold tracking-normal leading-normal",
  }[level];

  return (
    <Tag
      className={`font-display text-white ${levelClasses} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ============================================================================
// Eyebrow (Technical Monospace Metadata Prefix)
// ============================================================================
export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Eyebrow({ className = "", children, ...props }: EyebrowProps) {
  return (
    <span
      className={`inline-block font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

// ============================================================================
// Body & Subtitle Text
// ============================================================================
export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyTag;
  size?: "lg" | "base" | "sm" | "caption";
  variant?: "primary" | "secondary" | "muted" | "ghost";
  children: ReactNode;
}

export function Text({
  as: Component = "p",
  size = "base",
  variant = "secondary",
  className = "",
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    lg: "text-lg sm:text-xl leading-relaxed",
    base: "text-base leading-relaxed",
    sm: "text-sm leading-relaxed",
    caption: "text-xs leading-normal",
  }[size];

  const variantClasses = {
    primary: "text-white",
    secondary: "text-zinc-400",
    muted: "text-zinc-500",
    ghost: "text-zinc-600",
  }[variant];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = Component as any;

  return (
    <Tag
      className={`font-body ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ============================================================================
// Inline Code & Badge
// ============================================================================
export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Code({ className = "", children, ...props }: CodeProps) {
  return (
    <code
      className={`px-1.5 py-0.5 rounded font-mono text-xs bg-zinc-800 text-cyan-300 border border-zinc-700/60 ${className}`}
      {...props}
    >
      {children}
    </code>
  );
}
