# Motion Language Specification — Mahardika Rafa

## 1. Motion Philosophy

Motion in this portfolio is an **instrument of clarity, spatial hierarchy, and tactile feedback** — never mere decoration.

Every transition communicates physical weight, intentionality, and respect for user time.

---

## 2. Timing Tokens & Easing Curves

All animations adhere to a calibrated token system to guarantee consistency across GSAP timelines and CSS transitions.

| Token | Duration | Cubic-Bezier / GSAP Easing | Application |
| :--- | :--- | :--- | :--- |
| `motion.instant` | `0ms` | `linear` | Reduced-motion fallback & immediate resets |
| `motion.micro` | `150ms` | `cubic-bezier(0.2, 0, 0, 1)` / `power2.out` | Hover feedback, button active press, tooltips |
| `motion.state` | `280ms` | `cubic-bezier(0.16, 1, 0.3, 1)` / `power3.out` | Modal open, navigation drawer, theme switch |
| `motion.reveal` | `750ms` | `cubic-bezier(0.19, 1, 0.22, 1)` / `expo.out` | Headline text reveals, hero entry, image unmasking |
| `motion.scrub` | `0.8s damping` | GSAP `ScrollTrigger` scrub: `1` | Parallax drift, pinned horizontal reel |

### Custom Easing Profiles
- **Primary Entrance**: `cubic-bezier(0.16, 1, 0.3, 1)` ("Quart Out") — Rapid initial acceleration with prolonged, gentle settling. Prevents sluggish starts while avoiding mechanical abruptness.
- **Magnetic Return**: `cubic-bezier(0.34, 1.56, 0.64, 1)` ("Elastic Settling") — Subtle rubber-band feedback for magnetic CTA buttons.

---

## 3. Choreography Patterns

### A. The Hero Entry Timeline
1. **t = 0ms**: Canvas ambient particle field fades in from opacity 0 to 1 (`duration: 1.0s`).
2. **t = 150ms**: Eyebrow status ribbon slides down (`y: -12px → 0px`, `opacity: 0 → 1`, `duration: 0.5s`).
3. **t = 300ms**: Headline text unmasks via vertical clip-path (`yPercent: 100 → 0`, staggered by word `0.06s`).
4. **t = 600ms**: Editorial narrative statement fades in (`opacity: 0 → 1`, `y: 16px → 0px`, `duration: 0.6s`).
5. **t = 800ms**: CTAs reveal with subtle scale expansion (`scale: 0.96 → 1.0`, `opacity: 0 → 1`).

### B. Magnetic Interaction Physics
- Interactive CTAs calculate cursor vector relative to button center:
  $$\Delta x = (\text{mouseX} - \text{centerX}) \times 0.28$$
  $$\Delta y = (\text{mouseY} - \text{centerY}) \times 0.28$$
- When cursor exits the bounding radius (80px), the button snaps back to $(0, 0)$ via `power3.out` over 400ms.

### C. Scroll-Driven Revelations
- **Section Headers**: Pinned trigger at 80% viewport height, revealing numbers `[ 01 ]` and title.
- **Project Case Studies**: Horizontal timeline pin where vertical scroll maps 1:1 to horizontal card translation.
- **Images**: Clip-path curtain reveal (`inset(0% 0% 100% 0%) → inset(0% 0% 0% 0%)`).

---

## 4. Accessibility & Reduced Motion (`prefers-reduced-motion`)

### The Immutable Rule
When `prefers-reduced-motion: reduce` is active:
1. **Zero Translation Shifts**: Elements do NOT translate along X/Y axes or scale.
2. **Zero Delay Gating**: All text and media are immediately 100% visible on mount. No content is hidden waiting for a timeline completion.
3. **Parallax & ScrollTrigger Pinned Loops**: Replaced with standard, native vertical stacking.
4. **Canvas / WebGL**: Ambient particles remain completely static or are swapped with a subtle CSS background gradient.
