# Portfolio — SCHEMA.md

## Entity Map

```text
User
└── Profile
    ├── SocialLinks
    ├── Experiences
    └── Education

Project
├── Category
├── Media
├── Technologies
└── Links

Article
├── Category
└── Tags

Website
├── HomepageSections
├── NavigationItems
├── WebsiteSettings
├── ThemePresets
└── SEOPages

Visitor
└── ContactMessage
```

## Project States
draft, published, archived

## Article States
draft, published, archived

## Contact States
new, read, replied, archived, spam

## Homepage Section Types
```text
hero
statement
featured_projects
projects_grid
capabilities
experience
about
testimonials
articles
contact_cta
custom_banner
```

## Theme Presets
```text
dark
light
monochrome
dark-accent
light-accent
```

Theme presets store controlled tokens, not arbitrary CSS.

## Project Relationship
```text
projects
  ├── project_media
  ├── project_links
  └── project_technology
       └── project_technologies
```

## Homepage Composition
`homepage_sections` contains key, type, title, subtitle, config, is_enabled, sort_order. `type` must resolve to a known component.

## SEO
Indexable pages may have title, description, canonical, robots, OG image, and structured data.

## Invariants
1. Only published projects appear publicly.
2. Only published articles appear publicly.
3. Only enabled homepage sections render.
4. Homepage sections use allowlisted component types.
5. Theme presets use allowlisted token schemas.
6. Admin-only data never enters public API responses.
7. Deleted projects are not returned publicly.
8. Contact messages are never publicly readable.
9. Public APIs never return passwords, tokens, or secrets.
10. Media access follows visibility rules.

## CMS-to-Frontend Contract
```text
CMS
 ↓
Validated JSON
 ↓
Next.js schema validation
 ↓
Allowlisted component
 ↓
Rendered section
```

Never interpret CMS JSON as executable code.
