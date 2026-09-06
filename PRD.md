# Portfolio — Product Requirements Document

## 1. Product Vision
Build a personal portfolio that behaves like an interactive digital experience rather than a conventional resume website.

It should communicate who I am, what I build, how I think, what I have worked on, my capabilities, and how to contact me while encouraging visitors to explore.

## 2. Goals
- Create a memorable first impression.
- Showcase selected projects visually.
- Explain technical capability without overwhelming visitors.
- Provide strong project case studies.
- Generate contact opportunities.
- Be editable without changing source code.
- Maintain excellent performance despite rich motion.
- Provide SEO-friendly public pages.

## 3. Target Visitors
Recruiters, prospective clients, collaborators, developers, designers, lecturers/academic reviewers, professional network, and general visitors.

## 4. Public Information Architecture
Home: Hero → Intro → Selected Work → Capabilities → Experience → About → Testimonials → Articles → Contact → Footer.

Optional pages:
- /projects
- /projects/[slug]
- /about
- /experience
- /services
- /articles
- /articles/[slug]
- /contact

## 5. Core Features

### Hero
Name, role/headline, short statement, primary/secondary CTA, subtle interactive visual, optional 3D/WebGL element.

### Projects
Title, cover, summary, role, technologies, year, challenge, approach, result, gallery/video, live URL, repository URL where appropriate.

### About
Biography, capabilities, working philosophy, selected skills.

### Experience
Timeline, company, role, period, responsibilities, outcomes.

### Services
Service cards, description, process, CTA.

### Articles
List, category, tags, reading time, article page, SEO.

### Contact
Contact form, social links, email, availability status.

## 6. Admin Requirements
Admin can create/edit/delete/reorder projects, manage project media, profile, experience, education, skills, services, testimonials, articles, homepage sections, navigation, SEO, social links, settings, theme presets, contact messages, and audit logs.

## 7. Design Customization
Approved presets may control dark/light/monochrome modes, accent variants, typography combinations, homepage compositions, and motion intensity.

Admin cannot create arbitrary CSS or JavaScript.

## 8. Interaction
Use motion intentionally: hero entrance, text reveal, project image reveal, scroll-driven transitions, hover/magnetic interactions, page transitions, subtle cursor response, optional WebGL hero.

Motion must never prevent reading, navigation, or accessibility.

## 9. Performance
Optimize images, lazy-load below-the-fold media, lazy-load 3D/WebGL, avoid long main-thread tasks, prefer transform/opacity animation, respect reduced motion, keep critical content server-renderable, and avoid unnecessary client JavaScript.

## 10. SEO
Metadata per page, canonical URLs, Open Graph, sitemap, robots, structured data where appropriate, semantic HTML, crawlable project/article URLs.

## 11. MVP Acceptance
Public homepage and project detail work; admin can manage projects/profile/experience/skills/homepage; contact works; SEO works; responsive UI works; animations respect reduced motion; authorization and core tests pass.
