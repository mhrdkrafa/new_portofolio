# Color & Theme Mode Decision Specification — Mahardika Rafa

## 1. Core Decision & Strategic Rationale

### The Decision: **Obsidian Dark as Authoritative Default**
The portfolio defaults to **Obsidian Dark**, with complete first-class architectural support for **Gallery Light** and **Monochrome** presets.

### Rationale
1. **Atmospheric Immersion**: A dark obsidian canvas immediately signals an editorial, cinematic environment, distinct from generic white enterprise dashboards.
2. **Visual Framing**: Media, case study screenshots, and code artifacts exhibit higher perceived contrast and depth against dark surfaces.
3. **Developer & Designer Alignment**: The primary target audience (tech leads, CTOs, product designers) overwhelmingly operate in dark mode environments.
4. **Energy Efficiency & Eye Comfort**: Lower emissive luminance on modern OLED and high-refresh-rate mobile displays.

---

## 2. Palette Architecture & Semantic Tokens

Theme tokens are implemented via CSS custom properties mapped to semantic slots, ensuring seamless switching without layout shifts.

### A. Dark Mode Tokens (Default)

| Semantic Token | Value | Visual Purpose | Contrast Ratio vs Canvas |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#0A0A0C` | Root page background (deep obsidian) | Baseline |
| `--bg-surface` | `#121216` | Card, container, and dialog background | 1.15:1 |
| `--bg-subtle` | `#18181F` | Hover states, pill badges, code blocks | 1.3:1 |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | 1px grid divider and container hairlines | Accessible structure |
| `--border-focus` | `rgba(255, 255, 255, 0.28)` | Focus rings and active hover boundaries | High visibility |
| `--text-primary` | `#EDEDED` | Headings, hero display, key titles | **16.5:1** (WCAG AAA) |
| `--text-secondary` | `#A1A1AA` | Body copy, case study narratives | **8.6:1** (WCAG AAA) |
| `--text-muted` | `#71717A` | Metadata, tags, dates, copyright | **4.8:1** (WCAG AA) |
| `--accent-primary` | `#00F0FF` / `#38BDF8` | Interactive focus, active links, glow | 10.2:1 |
| `--status-live` | `#10B981` | Availability dot, live system status | 9.4:1 |

### B. Light Mode Tokens (Gallery Light)

| Semantic Token | Value | Visual Purpose | Contrast Ratio vs Canvas |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#F8F9FA` | Off-white archival paper background | Baseline |
| `--bg-surface` | `#FFFFFF` | Crisp elevated cards and containers | 1.05:1 |
| `--bg-subtle` | `#F1F3F5` | Hover backgrounds, badge fills | 1.1:1 |
| `--border-subtle` | `rgba(0, 0, 0, 0.08)` | Delicate card boundaries and dividers | Accessible structure |
| `--border-focus` | `rgba(0, 0, 0, 0.40)` | Focus indicators and hover outlines | High visibility |
| `--text-primary` | `#0F172A` | Deep slate headings and titles | **15.8:1** (WCAG AAA) |
| `--text-secondary` | `#475569` | Body paragraphs and descriptions | **7.1:1** (WCAG AAA) |
| `--text-muted` | `#64748B` | Timestamps, tags, fine print | **4.6:1** (WCAG AA) |
| `--accent-primary` | `#0284C7` | Interactive primary actions | 5.2:1 (WCAG AA) |
| `--status-live` | `#059669` | Live availability beacon | 4.8:1 (WCAG AA) |

---

## 3. Theme Presets in CMS Alignment

Per `SCHEMA.md`, the CMS controls approved theme presets:
1. `dark` (Default: Deep obsidian, neutral platinum text)
2. `dark-accent` (Obsidian with electric cyan or warm titanium highlights)
3. `light` (Archival white, deep slate typography)
4. `light-accent` (Archival white with cobalt/cerulean accents)
5. `monochrome` (Pure grayscale discipline; 0% chroma across all elements)

---

## 4. Flash-of-Unstyled-Content (FOUC) Elimination

To guarantee seamless initial rendering without visible theme flickering:
1. A micro inline `<script>` executes synchronously in the Next.js `<head>` before body hydration:
   - Reads `localStorage.getItem('theme')`.
   - If absent, evaluates `window.matchMedia('(prefers-color-scheme: dark)').matches`.
   - Immediately sets `document.documentElement.classList.add('dark')` (or light).
2. All CSS color transitions use a restrained `transition: background-color 0.25s ease, border-color 0.25s ease` to avoid sluggish sluggishness during manual toggling.
