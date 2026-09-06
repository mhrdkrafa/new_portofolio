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

---

## 3. Spacing & Layout Grid System

The spacing system relies on an 8pt modular grid with 4pt half-steps for micro-components and fluid padding for responsive layouts.

### 3.1 Base Spacing Scale

| Token | Rem | Pixel Equivalent | Typical Usage |
| :--- | :--- | :--- | :--- |
| `space-1` | `0.25rem` | `4px` | Micro-badge padding, inline icon spacing |
| `space-2` | `0.5rem` | `8px` | Button horizontal padding, tag gaps |
| `space-3` | `0.75rem` | `12px` | Card internal micro-gutters |
| `space-4` | `1.0rem` | `16px` | Standard component margin, form field padding |
| `space-5` | `1.25rem` | `20px` | Dialog padding, card internal spacing |
| `space-6` | `1.5rem` | `24px` | Medium card gutters, container edge offset |
| `space-8` | `2.0rem` | `32px` | Grid column gutters, module margins |
| `space-10` | `2.5rem` | `40px` | Header padding, section sub-block gaps |
| `space-12` | `3.0rem` | `48px` | Major component separations |
| `space-16` | `4.0rem` | `64px` | Standard section vertical gaps |
| `space-20` | `5.0rem` | `80px` | Hero bottom margins, feature separation |
| `space-24` | `6.0rem` | `96px` | High-impact architectural empty space |
| `space-32` | `8.0rem` | `128px` | Major page chapter dividers |

### 3.2 Containers & Fluid Layout Gutter

- `container-sm`: `640px` (Text dossiers, articles, simple forms)
- `container-md`: `768px` (Reading view, experience timeline)
- `container-lg`: `1024px` (Projects grid, capabilities)
- `container-xl`: `1280px` (Main portfolio layout)
- `container-2xl`: `1440px` (Hero panoramic lockup)
- `container-max`: `1600px` (Wide architectural viewports)
- `pad-gutter`: `clamp(1.25rem, 4vw, 3.5rem)` (Edge safety padding)
- `section-gap`: `clamp(5rem, 10vw, 8.5rem)` (Standard section spacing)

---

## 4. Border Radius System

To maintain architectural precision and eliminate "bubbly SaaS template" aesthetics, the design system enforces strict, disciplined corner radii (maximum 8px for containers).

| Token | Value | Applied Elements | Architectural Intent |
| :--- | :--- | :--- | :--- |
| `radius-none` | `0px` | Full-bleed banners, table rows, structural dividers | Pure brutalist baseline |
| `radius-xs` | `2px` | Progress bars, technical hairline tabs, micro-tags | Precision accent |
| `radius-sm` | `4px` | Monospace badges, code chips, inline tags, form inputs | Structural crispness |
| `radius-md` | `6px` | Interactive buttons, dropdown menus, flyout tooltips | Tactile ergonomic edge |
| `radius-lg` | `8px` | Project showcase cards, article panels, modal sheets | Maximum allowable card curve |
| `radius-full` | `9999px` | Live status dots, circular avatar clips | Strictly for circular elements |

---

## 5. Shadow & Elevation System

On dark obsidian backgrounds, traditional drop shadows are visually ineffective. Elevation is therefore achieved through **Tactile Layered Illumination**: combining subtle outer ambient drop shadows with an inner hairline highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`). In light mode, diffuse architectural shadows provide spatial separation.

| Token | Dark Mode Formula | Light Mode Formula | Applied Components |
| :--- | :--- | :--- | :--- |
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)` | `0 1px 2px rgba(0,0,0,0.05)` | Tags, code badges |
| `shadow-sm` | `0 2px 8px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)` | `0 2px 6px rgba(0,0,0,0.06)` | Buttons, dropdowns |
| `shadow-md` | `0 8px 24px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)` | `0 6px 16px rgba(0,0,0,0.08)` | Hover cards, flyouts |
| `shadow-lg` | `0 16px 40px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.10)` | `0 12px 32px rgba(0,0,0,0.10)` | Modals, pinned reels |
| `shadow-xl` | `0 24px 60px rgba(0,0,0,0.90), inset 0 1px 0 rgba(255,255,255,0.12)` | `0 20px 48px rgba(0,0,0,0.14)` | Lightbox previews |
| `shadow-glow-cyan` | `0 0 24px rgba(0, 240, 255, 0.25)` | `0 0 20px rgba(2, 132, 199, 0.20)` | Magnetic CTA active focus |
| `shadow-glow-emerald` | `0 0 16px rgba(16, 185, 129, 0.40)` | `0 0 14px rgba(5, 150, 105, 0.35)` | Live status pulse |

---

## 6. Motion System Tokens

Centralized motion timing and easing profiles ensure rhythmic coherence between CSS transitions and GSAP timelines.

### 6.1 Duration Scale

| Token | Milliseconds | Typical Use Case |
| :--- | :--- | :--- |
| `duration-instant` | `0ms` | Accessibility bypass & reduced-motion resets |
| `duration-fast` | `150ms` | Micro-interactions, button presses, icon shifts |
| `duration-normal` | `280ms` | Dropdowns, mobile nav drawer, theme toggles |
| `duration-medium` | `450ms` | Modal presentation, page transitions, accordion expands |
| `duration-slow` | `750ms` | Hero headline reveals, clip-path curtain animations |
| `duration-deliberate` | `1200ms` | Ambient canvas opacity fades, deep background transitions |

### 6.2 Calibrated Easing Curves

```css
--ease-linear: linear;
--ease-quart-out: cubic-bezier(0.16, 1, 0.3, 1);     /* Standard editorial entrance */
--ease-expo-out: cubic-bezier(0.19, 1, 0.22, 1);     /* High-impact headline unmasking */
--ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);   /* Magnetic cursor return */
--ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);       /* Pinned horizontal reel */
```

### 6.3 Stagger & Scrub Tokens

- `stagger-micro`: `0.04s` (Character-by-character reveals)
- `stagger-word`: `0.08s` (Hero title word reveals)
- `stagger-card`: `0.12s` (Project showcase cards entry)
- `scrub-responsive`: `1.0s` (ScrollTrigger parallax inertia)

---

## 7. Reduced-Motion Behavior Specification

The portfolio treats accessibility as an absolute priority. When `prefers-reduced-motion: reduce` is enabled:

### 7.1 Universal CSS Reset Rules

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    transform: none !important;
    opacity: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

### 7.2 GSAP & Interaction Contract

1. **Zero Content Gating**: No text or project showcase will ever be hidden behind a `clip-path` or `opacity: 0` while waiting for an animation timeline.
2. **Horizontal Pins to Native Stacking**: Any ScrollTrigger pinned horizontal reels automatically transform into vertical standard stacking.
3. **Magnetic Disablement**: Cursor gravitation vectors are zeroed; buttons remain static on hover with standard high-contrast focus rings.
4. **Canvas / 3D Freezing**: Canvas particle loops and Three.js renderers stop `requestAnimationFrame` and render a single static frame or switch to the pure CSS ambient background.






