# Hero Section Concept Specification — Mahardika Rafa

## 1. Hero Objectives & Experience Goal

The Hero section is the digital cornerstone of the portfolio. Its mission is to transform a passive visitor into an engaged explorer within the first 3 seconds.

It establishes:
1. **Identity & Authority**: Uncompromising technical confidence through clean typography and layout discipline.
2. **Tactile Delight**: Subtle, responsive ambient interaction that responds to user presence without hijacking focus.
3. **Frictionless Pathways**: Immediate clarity on who Mahardika is, what he builds, and how to explore work or initiate contact.

---

## 2. Structural Composition & Wireframe

```text
┌────────────────────────────────────────────────────────────────────────┐
│  [● LIVE] AVAILABLE FOR ARCHITECTURE & CREATIVE DEV      JAKARTA / 23:27 │
│                                                                        │
│                                                                        │
│   M A H A R D I K A   R A F A                                          │
│   ─── SYSTEMS ARCHITECT & CREATIVE ENGINEER ───                        │
│                                                                        │
│   "Engineering high-concurrency distributed systems while composing   │
│    cinematic, tactile digital interfaces with mathematical precision." │
│                                                                        │
│   ┌───────────────────────┐   ┌───────────────────────┐                │
│   │ [→] VIEW SELECTED WORK│   │ [↗] INITIATE DIALOGUE │                │
│   └───────────────────────┘   └───────────────────────┘                │
│                                                                        │
│                                                   [ SCROLL TO EXPLORE ]│
│                                                             ↓          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Component Breakdown

### A. Ambient Status Ribbon (Top Eyebrow)
- **Status Beacon**: Pulsing emerald indicator (`#10B981`) paired with mono label: `AVAILABLE FOR SELECT PROJECTS · Q3/Q4`.
- **Temporal Anchor**: Real-time timezone counter (`JAKARTA, ID · UTC+7`) to ground the visitor in authentic physical-digital context.

### B. Oversized Typographic Lockup
- **Primary Name**: "MAHARDIKA RAFA" in high-impact display grotesque (`Syne` / `Cabinet Grotesk`), tracked tight (`-0.04em`), fluidly scaled with CSS clamp: `clamp(3rem, 7vw, 7.5rem)`.
- **Architectural Sub-Headline**: Monospace / Grotesque tag: `SYSTEMS ARCHITECT & CREATIVE FULL-STACK ENGINEER`.
- **Editorial Mission Statement**: 2-line maximum, high-contrast off-white (`#EDEDED`) text with generous line-height (`1.7`):
  > *"Architecting high-throughput distributed systems & composing cinematic, tactile web interfaces with mathematical precision."*

### C. Interactive Ambient Visual Anchor
- **Visual Concept**: Monochromatic Ambient Particle & Coordinate Lattice.
- **Interaction**: The lattice gently displaces away from the visitor's cursor with subtle spring physics and gradual decay.
- **Implementation Rules**:
  - Rendered via isolated 2D `<canvas>` context (or lightweight WebGL shader if enabled).
  - Absolutely zero external asset blocking — initializes asynchronously after initial DOM paint.
  - Frame-budgeted with `requestAnimationFrame`, pausing automatically when scrolled out of view via `IntersectionObserver`.

### D. Magnetic Tactile Call-To-Actions (CTAs)
- **Primary CTA ("View Selected Work")**:
  - Dark titanium surface with subtle inner bevel, 1px perimeter glow, and magnetic pull effect on desktop hover (button translates up to 8px toward cursor).
  - Smoothly navigates to `#work` or `/projects`.
- **Secondary CTA ("Initiate Dialogue")**:
  - Minimalist hairline border (`border-white/15`), background blur (`backdrop-blur-md`), arrow glyph (`↗`) transitioning on hover.
  - Links directly to contact section or modal.

---

## 4. Responsive Adaptation Matrix

| Viewport | Headline Size | Layout Mode | Ambient Visual Strategy |
| :--- | :--- | :--- | :--- |
| **Desktop (> 1200px)** | `clamp(4.5rem, 7vw, 7.5rem)` | Asymmetric 12-col grid, generous negative margins. | Full interactive particle physics + magnetic hover. |
| **Tablet (768px - 1199px)** | `clamp(3.5rem, 6vw, 5rem)` | Balanced vertical rhythm, stacked metadata. | Reduced particle count (40%), gyroscope or touch ripple. |
| **Mobile (< 768px)** | `clamp(2.5rem, 8vw, 3.75rem)` | Single column, thumb-accessible vertical CTA stack. | Static ambient gradient mesh (GPU saving, 0% CPU impact). |

---

## 5. Resilience & Fallback Architecture

1. **Zero-JS Resilience**:
   - Semantic HTML5 structure displays fully rendered headlines, copy, and working anchor links immediately, even if JavaScript is blocked or delayed.
2. **WebGL / Canvas Failure**:
   - If canvas initialization fails or hardware acceleration is disabled, an elegant CSS radial gradient (`radial-gradient(circle at 50% 30%, rgba(255,255,255,0.06), transparent 70%)`) seamlessly stands in with zero visual breakage.
3. **Accessibility & Reduced Motion**:
   - When `prefers-reduced-motion: reduce` is active, all entry slide/scale animations are bypassed: content appears at full opacity instantly, and ambient particle movement is frozen into a static constellation.
