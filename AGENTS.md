# Portfolio — AGENTS.md

## Project
An original, CMS-driven personal portfolio website designed as an interactive digital experience. The public website prioritizes visual storytelling, performance, SEO, accessibility, and controlled modern motion.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- GSAP + @gsap/react
- GSAP ScrollTrigger
- Lenis where appropriate
- Three.js + React Three Fiber only for intentional 3D/WebGL experiences
- Laravel 13 API
- Filament 5 admin panel
- MySQL 8+
- Redis
- S3-compatible object storage
- Laravel Sanctum
- Playwright + Vitest

Next.js App Router is the current recommended routing model. GSAP provides an official React package with useGSAP for scoped cleanup. Filament Resources provide CRUD interfaces for Eloquent models. Laravel explicitly supports serving as an API backend for a Next.js application.

## Agent Rules
1. Read PRD.md, ARCHITECTURE.md, DESIGN.md, SCHEMA.md, DATABASE.md, RULES.md, and TASK.md before major implementation.
2. Treat DESIGN.md and approved design references as the visual source of truth.
3. Never blindly copy generated design code; translate the design into the project's architecture.
4. Do not introduce a new UI library without approval.
5. Use GSAP for complex timeline/scroll choreography; use CSS for simple transitions.
6. Use @gsap/react useGSAP for React GSAP integrations and cleanup.
7. Respect prefers-reduced-motion.
8. Do not use Three.js for effects CSS/GSAP can handle.
9. Keep 3D/WebGL isolated and lazy-loaded.
10. Never put database credentials in Next.js client code.
11. The browser never connects directly to MySQL.
12. Laravel owns business rules, authorization, persistence, and CMS data.
13. Next.js owns presentation, routing, SEO rendering, and interaction.
14. Filament is the administrative CMS and operational dashboard.
15. Never trust client-side content IDs, permissions, publication status, or form state.
16. Validate all CMS/API input server-side.
17. Private media must never be exposed as permanent public URLs.
18. Use typed API contracts.
19. Avoid N+1 API/database patterns.
20. Paginate collections.
21. Use image optimization and responsive media.
22. Do not hardcode portfolio content into components.
23. Content is data; component design is code.
24. CMS controls approved composition/content options, not arbitrary JSX/CSS/JavaScript.
25. Every schema change requires a migration.
26. Critical API workflows require automated tests.
27. Keep animation code colocated with the component/feature it animates.
28. Avoid global animation selectors that can affect unrelated pages.
29. Do not block page rendering on non-critical animations or 3D assets.
30. Keep documentation synchronized with architecture and schema changes.

## CMS Boundary
Admin may control profile text, hero copy, projects, project ordering, project media, experience, education, skills, services, testimonials, articles, contact details, social links, navigation, SEO, approved homepage section visibility/order, approved theme variants, and banners.

Admin may not inject arbitrary JavaScript, CSS, React components, SQL, or executable templates.

## Definition of Done
A feature is complete when functionality, responsive behavior, accessibility, performance, loading/error/empty states, authorization, tests, and relevant documentation are complete.
