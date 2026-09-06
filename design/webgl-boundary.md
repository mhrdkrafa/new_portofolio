# 3D & WebGL Usage Boundary Specification — Mahardika Rafa

## 1. Core Principle: Progressive Enhancement

WebGL, Three.js, and React Three Fiber (R3F) are strictly classified as **optional atmospheric enhancement layers**. 

Under no circumstances is WebGL permitted to become a structural dependency of the portfolio. The site must be 100% readable, navigatable, interactive, and complete even if WebGL is entirely unsupported or disabled.

```text
┌────────────────────────────────────────────────────────┐
│  Next.js 16 App Router (Server Rendered HTML/CSS)      │  ← Primary Core
├────────────────────────────────────────────────────────┤
│  GSAP & CSS Micro-Interactions (Client Hydration)       │  ← Motion Layer
├────────────────────────────────────────────────────────┤
│  [ Optional / Asynchronous ] Isolated WebGL Canvas    │  ← Atmospheric Layer
└────────────────────────────────────────────────────────┘
```

---

## 2. The 5 Immutable WebGL Boundaries

### Boundary 1: Zero Impact on Critical Path & LCP
- **No Blocking Bundles**: Neither Three.js nor `@react-three/fiber` nor geometry files may be included in the initial SSR chunk.
- **Dynamic Lazy Loading**: All 3D components must use `next/dynamic(() => import(...), { ssr: false })` with a lightweight `<FallbackVisual />` placeholder.
- **Initialization Trigger**: WebGL scene initializes only during idle time (`requestIdleCallback`) or when entering the viewport via `IntersectionObserver`.

### Boundary 2: Strict Asset & Performance Budgets
- **Asset Size Ceiling**: 3D models or point cloud data must not exceed **1.2 MB** compressed (using Draco / Meshopt compression).
- **Draw Call Limit**: Maximum **5 draw calls** per frame.
- **Target Frame Rate**: Consistent **60 FPS** on mid-tier hardware. If the frame rate drops below 30 FPS for 3 consecutive seconds, the engine automatically throttles resolution or gracefully downgrades to the 2D canvas fallback.
- **Post-Processing Discipline**: No expensive multi-pass post-processing chains (e.g. SSAO, heavy screen-space bloom, or depth of field) that drain mobile GPU thermals.

### Boundary 3: Viewport & Device Adaptation

| Device Tier | WebGL Strategy | Behavior |
| :--- | :--- | :--- |
| **Desktop (> 1024px)** | Full Interactive Scene | Reacts to mouse coordinates with gentle inertia and smooth camera parallax. |
| **Tablet (768px – 1024px)** | Simplified Scene | Reduced geometry count; post-processing disabled. |
| **Mobile (< 768px)** | **Disabled / Downgraded** | Replaced by `<FallbackVisual />` (subtle CSS ambient gradient or 2D canvas) to preserve battery life and eliminate thermal throttling. |
| **Low-Power / Battery Saver** | **Disabled** | Automatically suppressed if low battery status is detected. |

### Boundary 4: Unfailing Context Recovery & Fallback
- **Webglcontextlost Event Handling**: The canvas must cleanly handle context loss and context restoration without throwing unhandled JavaScript runtime exceptions.
- **Instant Fallback**: If WebGL context creation fails or hardware acceleration is unavailable, `<FallbackVisual />` mounts immediately, presenting an atmospheric radial gradient with zero visual breakage.

### Boundary 5: Reduced Motion Adherence
- When `prefers-reduced-motion: reduce` is detected:
  1. The WebGL animation loop stops (`cancelAnimationFrame`).
  2. The scene renders a single static initial state, or swaps directly to `<FallbackVisual />`.
  3. Interactive cursor physics are disconnected.

---

## 3. Component Architecture Alignment

In accordance with `ARCHITECTURE.md`:

```text
components/3d/
├── SceneCanvas.tsx      # Dynamic loader, WebGL detection, ErrorBoundary, canvas container
├── HeroScene.tsx        # Isolated Three.js / R3F scene graph & shader logic
├── FallbackVisual.tsx   # Pure CSS radial gradient + SVG noise layer (zero runtime cost)
└── shaders/             # Custom vertex and fragment GLSL shaders
```

All 3D logic remains strictly sandboxed within `components/3d/` and interacts with the rest of the application exclusively through standard React props.
