# Portfolio — ARCHITECTURE.md

## 1. System

```text
Public Browser
      |
      v
Next.js 16 App Router
      |
  ┌───┴────────────┐
  |                |
Server Rendering   Client Motion
                   |
             GSAP / R3F
      |
      v
Laravel 13 API
  |        |       |
MySQL    Redis   Storage
  |
Filament 5 Admin
```

Next.js App Router is the recommended routing approach. Laravel documents the API-backend pattern for Next.js applications.

## 2. Repository

```text
portfolio/
├── AGENTS.md
├── PRD.md
├── DATABASE.md
├── SCHEMA.md
├── DESIGN.md
├── ARCHITECTURE.md
├── RULES.md
├── TASK.md
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   └── shared-types/
└── design/
```

## 3. Next.js

```text
apps/web/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── projects/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── services/
│   │   ├── articles/
│   │   └── contact/
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── sitemap.ts
├── components/
│   ├── ui/
│   ├── layout/
│   ├── projects/
│   ├── articles/
│   ├── motion/
│   └── 3d/
├── features/
│   ├── homepage/
│   ├── projects/
│   ├── articles/
│   └── contact/
├── lib/
│   ├── api/
│   ├── seo/
│   ├── motion/
│   └── utils/
└── styles/
```

Use Server Components by default. Client Components are reserved for interactive state, GSAP, cursor interactions, WebGL, and client-heavy forms.

## 4. Laravel

```text
apps/api/
├── app/
│   ├── Actions/
│   ├── Enums/
│   ├── Filament/
│   ├── Http/
│   │   ├── Controllers/Api/
│   │   ├── Requests/
│   │   └── Resources/
│   ├── Jobs/
│   ├── Models/
│   ├── Notifications/
│   ├── Policies/
│   └── Services/
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
└── routes/api.php
```

## 5. API
Version with `/api/v1`.

Public endpoints:
GET /profile
GET /projects
GET /projects/{slug}
GET /experiences
GET /skills
GET /services
GET /testimonials
GET /articles
GET /articles/{slug}
GET /homepage
GET /navigation
GET /settings/public
GET /seo/{path}
POST /contact

## 6. Motion
```text
components/motion/
├── Reveal.tsx
├── Parallax.tsx
├── Magnetic.tsx
├── PageTransition.tsx
├── TextReveal.tsx
└── CursorLabel.tsx
```

Each component owns its animation lifecycle. Use useGSAP rather than unmanaged effects.

## 7. WebGL
```text
components/3d/
├── HeroScene.tsx
├── SceneCanvas.tsx
├── FallbackVisual.tsx
└── shaders/
```
Load only where necessary.

## 8. CMS Rendering
API returns allowlisted content configuration. Next.js maps known types to components. CMS data is never executable code.

## 9. Caching
Cache public portfolio content where safe: profile, projects, skills, articles, homepage configuration. Invalidate after admin publishing changes.

## 10. Contact
Next.js form → Laravel API → validate → persist → queue notification → admin inbox/email.

## 11. Security
HTTPS, Sanctum for protected APIs, restricted CORS, rate limits, validation, private storage, audit logs, and no secrets in public environment variables.

## 12. Performance
Priority order: content → typography → primary image → interaction → non-critical effects → 3D. Decorative effects must never block critical content.
