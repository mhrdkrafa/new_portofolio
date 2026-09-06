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
