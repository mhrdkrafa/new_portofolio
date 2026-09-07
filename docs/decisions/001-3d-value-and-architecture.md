# Architecture Decision Record: 3D / WebGL Value & Strategy

## Status
Accepted

## Context
The portfolio represents Mahardika Rafa as a "Systems Architect & Creative Full-Stack Engineer". We evaluated whether adding 3D / WebGL creates genuine visual identity or unnecessary bloat, measuring against the project's strict performance, accessibility, and SEO constraints (`AGENTS.md`, `DESIGN.md`, `ARCHITECTURE.md`).

## Decision: Does 3D Add Real Value?
**Yes, but strictly under deterministic architectural constraints.**

An interactive, procedural 3D geometric artifact in the Hero section (representing a distributed mesh node / topological lattice) creates a memorable, distinctive digital identity that visually bridges "Systems Architecture" and "Creative Engineering".

However, traditional 3D implementations introduce severe flaws that we explicitly prohibit:
- **Prohibited**: Heavy external `.gltf` / `.obj` 3D model files (megabytes of network transfer).
- **Prohibited**: Blocking Largest Contentful Paint (LCP) or First Contentful Paint (FCP).
- **Prohibited**: Battery drain on mobile devices and laptops.
- **Prohibited**: Inaccessible or disorienting motion for users with vestibular sensitivities.

## Architectural Guidelines
1. **Procedural Geometry Only**:
   - Geometries are generated programmatically using Three.js built-ins (`IcosahedronGeometry`, `TorusKnotGeometry`, wireframes, custom points/lattices). Zero network overhead for 3D model files.
2. **Strict Lazy Loading (`ssr: false`)**:
   - The 3D canvas is dynamically imported via `next/dynamic` with `ssr: false` and rendered only after the primary hero DOM and critical fonts have loaded.
3. **Multi-Tier Fallbacks**:
   - **Mobile Fallback**: On mobile devices (`pointer: coarse` or viewport < 768px), disable WebGL canvas and display an ultra-lightweight SVG/CSS architectural lattice.
   - **Reduced Motion Fallback**: When `prefers-reduced-motion: reduce` is detected, stop all rotations and render a static, resting state or CSS fallback.
   - **WebGL Failure Fallback**: An error boundary catches WebGL context losses and missing GPU support, rendering `FallbackVisual.tsx` seamlessly.
4. **Performance & Viewport Culling**:
   - Canvas rendering pauses when the hero scrolls out of the viewport using `IntersectionObserver`.
   - `dpr` is clamped to `Math.min(window.devicePixelRatio, 1.5)` to protect low-end GPUs and mobile devices.

## Verification & Metrics
- Bundle impact: Tree-shaken Three.js chunks are strictly deferred.
- Lighthouse performance score: Must remain ≥ 95 on Desktop and Mobile.
- Zero WebGL errors in non-WebGL or headless test environments.
