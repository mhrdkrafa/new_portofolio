# Visual References & Moodboard Specification — Mahardika Rafa

## 1. Visual Aesthetic Archetype

The portfolio embraces **"Monolithic Editorial Minimalism with Tactile Depth"**. 

It evokes the feeling of a premium architectural journal or a high-end hardware design laboratory at night: deeply focused, calm, confident, and meticulous down to the single pixel.

```text
┌──────────────────────────────────────────────────────────────┐
│  STATUS: AVAILABLE FOR ENGAGEMENT              [ 23:26 GMT ] │
│                                                              │
│  M A H A R D I K A   R A F A                                 │
│  Systems Architect & Creative Full-Stack Engineer            │
│                                                              │
│  ┌──────────────────────────────┐  [ 01 ] SELECTED WORK      │
│  │                              │  DISTRIBUTED LEDGER ENGINE │
│  │    TACTILE INTERACTION       │  Next.js · Go · Redis      │
│  │    & AMBIENT DEPTH           │                            │
│  │                              │  "Sub-millisecond latency  │
│  └──────────────────────────────┘   with cinematic frontend" │
└──────────────────────────────────────────────────────────────┘
```

---

## 2. Visual Pillars

### 1. The Obsidian Canvas
- Deep, atmospheric, non-pitch black background (`#0A0A0C` to `#0E0E12`), avoiding harsh pure black `#000000` while preventing washed-out grey.
- Multi-layered depth achieved through subtle ambient back-glows (`radial-gradient` with soft feathering and low opacity < 0.15) rather than harsh linear gradients.

### 2. Tactile Micro-Texture
- Seamless procedural film grain (SVG turbulence overlay with `opacity: 0.035` and `pointer-events: none`).
- Eliminates the sterile "digital flat" feel and renders the screen tactile, like matte coated paper or anodized aluminum.

### 3. Hairline Structural Precision
- 1px hairline borders (`rgba(255, 255, 255, 0.07)` to `rgba(255, 255, 255, 0.12)`).
- Sharp, intentional border radii: 0px or 4px for brutalist architectural precision, max 8px for cards, never hyper-rounded 24px+ "pill" bubble cards.

### 4. Asymmetric Swiss Grid
- 12-column responsive layout with disciplined vertical rhythm.
- Intentional negative space: letting oversized display headings breathe against condensed, highly-structured technical metadata blocks.

---

## 3. Typographic Expression & Pairing

| Role | Font Family / Style | Weight | Characteristics |
| :--- | :--- | :--- | :--- |
| **Display Headings (H1/H2)** | Syne / Cabinet Grotesk / Plus Jakarta Sans | 700 / 800 Bold | Monumental scale (4rem to 8rem), tight tracking (`-0.04em`), uppercase or sentence-case architectural authority. |
| **Technical Data & Labels** | JetBrains Mono / Geist Mono | 400 Regular / 500 Medium | Micro-metadata, system stats, tags, coordinates, dates, and technology badges. Monospaced clarity. |
| **Body & Longform** | Inter / Geist Sans | 400 / 450 Book | Clean, neutral, high x-height, generous line-height (`1.65` to `1.75`), superior readability on high-DPI displays. |

---

## 4. Visual References & Benchmarks

### Approved Inspirations
1. **Linear.app & Raycast**: Extreme polish, keyboard navigation indicators, subtle borders, crisp dark mode contrast, zero fluff.
2. **Stripe Press**: High-end editorial typography, physical book tactile sensibility translated to web.
3. **Bissement & Awwwards Studio Portfolios**: Cinematic pacing, magnetic interaction cues, controlled scroll-driven reveals, restrained audio/haptic feel.
4. **Vercel / Next.js Design Systems**: Utilitarian clarity, clean monochrome hierarchies, robust component boundaries.

### Anti-Patterns (Explicitly Forbidden)
- ❌ **Generic SaaS Card Clutter**: Floating cards with 32px soft drop shadows, pastel blue gradients, and stock illustrations.
- ❌ **Gratuitous 3D Gimmicks**: Spinning 3D spheres, floating toruses, or heavy canvas scenes that consume 90% GPU and provide no storytelling value.
- ❌ **Neon Rainbow Gradients**: Over-saturated purple/pink mesh gradients that distract from project content and degrade accessibility contrast.
- ❌ **Tiny Low-Contrast Text**: 11px gray-on-dark-gray copy that fails WCAG AA standards.
- ❌ **Scroll-Hijacking Without Purpose**: Interfering with native trackpad physics unless strictly orchestrating an intentional horizontal pin.
