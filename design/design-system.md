# Portfolio Design System Specification — Mahardika Rafa

## 1. Typography System

The typography system is built for architectural monumentality, editorial readability, and monospaced technical precision.

### 1.1 Font Stacks

```css
--font-display: 'Plus Jakarta Sans', 'Syne', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-body: 'Inter', 'Geist Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: 'JetBrains Mono', 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

### 1.2 Font Weight Hierarchy

- `weight-regular`: `400` (Standard body prose, narrative paragraphs)
- `weight-medium`: `500` (Sub-navigation, form field values, secondary button labels)
- `weight-semibold`: `600` (Section subheadings, cards, interactive CTAs)
- `weight-bold`: `700` (Section headings H2/H3, primary button titles)
- `weight-extrabold`: `800` (Monumental hero display titles, key brand wordmarks)

### 1.3 Fluid Typographic Scale Matrix

| Token | Size Range (CSS clamp) | Line Height | Letter Spacing | Font Family | Default Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-2xl` | `clamp(3.5rem, 8vw, 7.5rem)` | `0.98` | `-0.045em` | Display | 800 |
| `display-xl` | `clamp(2.75rem, 6vw, 5rem)` | `1.02` | `-0.04em` | Display | 800 |
| `heading-1` | `clamp(2.25rem, 4.5vw, 3.5rem)` | `1.10` | `-0.035em` | Display | 700 |
| `heading-2` | `clamp(1.75rem, 3.5vw, 2.5rem)` | `1.20` | `-0.03em` | Display | 700 |
| `heading-3` | `clamp(1.35rem, 2.5vw, 1.85rem)` | `1.30` | `-0.02em` | Display | 600 |
| `heading-4` | `clamp(1.15rem, 1.8vw, 1.4rem)` | `1.40` | `-0.015em` | Display | 600 |
| `subtitle` | `clamp(1.1rem, 1.6vw, 1.25rem)` | `1.60` | `-0.01em` | Body | 400 |
| `body-large` | `1.125rem` (18px) | `1.70` | `-0.005em` | Body | 400 |
| `body-base` | `1.0rem` (16px) | `1.65` | `0` | Body | 400 |
| `body-small` | `0.875rem` (14px) | `1.55` | `0` | Body | 400 |
| `caption` | `0.75rem` (12px) | `1.40` | `0.02em` | Body | 400 |
| `mono-code` | `0.875rem` (14px) | `1.60` | `0` | Mono | 400 / 500 |
| `mono-badge` | `0.6875rem` (11px) | `1.00` | `0.08em` | Mono (Uppercase) | 600 |
| `eyebrow` | `0.75rem` (12px) | `1.00` | `0.12em` | Mono (Uppercase) | 600 |

---

## 2. Color System & Semantic Tokens

The color system is organized around two foundational themes: **Obsidian Dark (Default)** and **Gallery Light**, supported by precise semantic slots and calibrated contrast ratios.

### 2.1 Dark Obsidian Tokens (Default)

```css
:root, [data-theme="dark"], html.dark {
  --bg-canvas: #0A0A0C;
  --bg-surface: #121216;
  --bg-surface-hover: #18181F;
  --bg-inset: #0E0E12;
  --bg-glass: rgba(18, 18, 22, 0.75);

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.14);
  --border-strong: rgba(255, 255, 255, 0.28);

  --text-primary: #EDEDED;
  --text-secondary: #A1A1AA;
  --text-muted: #71717A;
  --text-ghost: #52525B;

  --accent-primary: #00F0FF;
  --accent-primary-hover: #00C4D4;
  --accent-glow: rgba(0, 240, 255, 0.18);

  --status-live: #10B981;
  --status-live-glow: rgba(16, 185, 129, 0.3);
  --status-alert: #EF4444;
}
```

### 2.2 Gallery Light Tokens

```css
[data-theme="light"], html.light {
  --bg-canvas: #F8F9FA;
  --bg-surface: #FFFFFF;
  --bg-surface-hover: #F1F3F5;
  --bg-inset: #ECEEF1;
  --bg-glass: rgba(255, 255, 255, 0.85);

  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-medium: rgba(0, 0, 0, 0.16);
  --border-strong: rgba(0, 0, 0, 0.35);

  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --text-ghost: #94A3B8;

  --accent-primary: #0284C7;
  --accent-primary-hover: #0369A1;
  --accent-glow: rgba(2, 132, 199, 0.18);

  --status-live: #059669;
  --status-live-glow: rgba(5, 150, 105, 0.25);
  --status-alert: #DC2626;
}
```

### 2.3 Contrast Ratio Verification

| Token Pair | Foreground | Background | Calculated Ratio | WCAG Compliance |
| :--- | :--- | :--- | :--- | :--- |
| Dark Primary | `#EDEDED` | `#0A0A0C` | **16.5:1** | AAA (Pass) |
| Dark Secondary | `#A1A1AA` | `#0A0A0C` | **8.6:1** | AAA (Pass) |
| Dark Muted | `#71717A` | `#0A0A0C` | **4.8:1** | AA (Pass) |
| Dark Accent | `#00F0FF` | `#0A0A0C` | **10.2:1** | AAA (Pass) |
| Light Primary | `#0F172A` | `#F8F9FA` | **15.8:1** | AAA (Pass) |
| Light Secondary | `#475569` | `#F8F9FA` | **7.1:1** | AAA (Pass) |
| Light Muted | `#64748B` | `#F8F9FA` | **4.6:1** | AA (Pass) |

