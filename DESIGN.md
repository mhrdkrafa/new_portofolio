# Portfolio — DESIGN.md

## 1. Design Philosophy
The portfolio should feel like an interactive digital identity, not a template.

Keywords:
- editorial
- cinematic
- technical
- minimal
- confident
- experimental
- premium
- intentional

Avoid generic SaaS cards, excessive gradients, template-like hero sections, animation everywhere, unnecessary 3D, tiny unreadable text, and visual noise.

## 2. Experience Principle
Curiosity → Identity → Exploration → Proof → Trust → Contact

## 3. Homepage
Hero → Statement → Selected Work → Capabilities → Experience → About → Testimonials → Articles → Contact → Footer.

## 4. Hero
Use oversized typography, restrained copy, subtle grain/noise, ambient background, cursor response, and one memorable interactive visual. Optional R3F/Three.js abstract object must have a static/mobile fallback.

## 5. Motion
Entrance: opacity/transform/clip-path where appropriate.
Scroll: parallax, pinned sections, horizontal project sequence, image reveal, text movement.
Hover: magnetic CTA, image scale, cursor label, subtle displacement.
Page transition: short and coherent.

## 6. Animation Rules
- Motion communicates hierarchy or interaction.
- Do not animate everything.
- Prefer transform/opacity.
- Use GSAP for complex choreography and ScrollTrigger for scroll-driven interactions.
- Use @gsap/react useGSAP in React components.
- Respect prefers-reduced-motion.
- Never make important information dependent on animation completion.
- Never trap keyboard users in animation.

## 7. 3D Rules
Three.js/React Three Fiber is allowed only when it creates meaningful identity.
- lazy load
- avoid blocking LCP
- provide fallback
- reduce complexity on mobile
- reduce/disable under reduced motion
- monitor GPU/CPU impact

## 8. Design Tokens
Centralize color, typography, spacing, radius, shadow, z-index, motion duration, easing, and container widths.

## 9. Responsive
Design for 360px, 390px, 768px, 1024px, 1280px, and 1440px+. Do not simply shrink desktop.

## 10. Accessibility
Semantic HTML, visible focus, keyboard navigation, adequate contrast, alt text, accessible labels, no color-only status, reduced-motion support.

## 11. Admin Design Controls
Allowed: theme preset, accent preset, homepage section order, section visibility, featured projects, hero copy, approved motion intensity, navigation, approved typography preset.

Forbidden: arbitrary CSS, JS, JSX, HTML templates, or code injection.

## 12. Visual QA
Compare every major screen against the approved visual reference for hierarchy, spacing, typography, imagery, responsive behavior, animation timing, interaction feedback, and accessibility.
