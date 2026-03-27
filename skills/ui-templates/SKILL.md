---
name: ui-templates
description: Landing page and dashboard component patterns for Tailwind/React.
triggers:
  - "landing page"
  - "dashboard"
  - "hero section"
  - "pricing"
  - "navbar"
  - "sidebar"
---

# UI Templates Skill

Always load `.behemoth/design-system/MASTER.md` first and apply its colors/fonts/style.

## Landing Page Sections (order)
1. **Nav** — Fixed, logo left, links center, CTA right. Mobile: hamburger drawer.
2. **Hero** — h1 (max 10 words) + subline + primary CTA + product screenshot. Above fold.
3. **Social proof** — Logo bar, grayscale, consistent height.
4. **Features** — 3-col grid, SVG icon + title + description per card.
5. **How it works** — 3-step numbered process.
6. **Testimonials** — Photo + name + role + quote cards.
7. **Pricing** — 3 tiers, middle highlighted, monthly/annual toggle.
8. **FAQ** — `<details>` accordion, no JS needed.
9. **CTA** — Contrasting background, headline + button.
10. **Footer** — 4-col links grid + copyright + social SVG icons.

## Dashboard Components
- **Metric card** — Icon, big number, label, trend arrow. 4-across grid.
- **Data table** — Sticky header, search/filter, sortable, pagination, skeleton loading.
- **Sidebar** — 240px, logo top, nav links, user bottom. Collapsible to 64px on tablet, hidden on mobile.
- **Chart container** — Title + subtitle + period selector + chart area.
- **Status badge** — Green=active, yellow=pending, red=failed, gray=draft. Consistent shapes.
- **Empty state** — Illustration + message + CTA button.

## Rules
- SVG icons only (Lucide, Heroicons) — never emojis
- cursor:pointer on all clickables
- Hover transitions 150-300ms
- Skeleton loading, not spinners
- No pie charts (use donut or bar)
- No auto-playing video with sound
- No carousel with >3 slides
