---
name: frontend-patterns
description: Production-ready UI component patterns and templates for React, Next.js, Tailwind CSS, and other frontend stacks.
triggers:
  - "build a component"
  - "create a page"
  - "frontend"
  - "react component"
  - "landing page"
  - "dashboard"
  - "form"
  - "layout"
  - "navbar"
  - "sidebar"
---

# Frontend Patterns Skill

## Stack-Specific Guidelines

### React + Tailwind (Default)
- Use functional components with hooks
- Prefer `useState`, `useReducer` for local state
- Use `React.memo` only when profiling shows re-render issues
- Tailwind classes directly on elements — no CSS files for component styles
- Extract repeated class combinations into component variants, not `@apply`

### Next.js App Router
- Default to Server Components — add `'use client'` only when needed (event handlers, hooks, browser APIs)
- Use `loading.tsx` for streaming, `error.tsx` for error boundaries
- Data fetching in Server Components with `fetch()` — no `useEffect` for initial data
- Metadata via `export const metadata` or `generateMetadata()`
- File structure: `app/(group)/route/page.tsx`

### HTML + Tailwind (Simple)
- Single HTML file with Tailwind CDN for prototypes
- Use `<script>` with Alpine.js for interactivity without a build step
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

### Vue / Nuxt
- Composition API with `<script setup>`
- Auto-imports for composables and components in Nuxt
- Use `defineProps` and `defineEmits` with TypeScript

### SwiftUI
- Use `@State` for local, `@Binding` for passed, `@StateObject` for reference types
- Prefer composition: small views composed together
- Use `NavigationStack` (not deprecated `NavigationView`)

---

## Component Templates

### Navigation Bar
```
Structure:
- Fixed top, full width, z-50
- Logo left, nav links center, CTA/avatar right
- Mobile: hamburger menu → slide-in drawer
- Active link indicator (underline or background)
- Height: 64px desktop, 56px mobile
- Background: semi-transparent with backdrop-blur on scroll
```

### Hero Section
```
Patterns by product type:

SAAS / B2B:
- Headline (h1, max 10 words) + subheadline (1-2 sentences)
- Primary CTA button + secondary text link
- Product screenshot or demo video right-aligned
- Trust badges / logos below fold

E-COMMERCE:
- Full-width hero image or video
- Overlay text with CTA
- Rotating carousel for multiple products (max 3 slides)

PORTFOLIO:
- Large name/title with subtle animation
- Brief tagline
- Scroll indicator or "View Work" CTA

DASHBOARD:
- Skip hero — go straight to key metrics cards
- Welcome message with user name
- Quick action buttons
```

### Card Component
```
Structure:
- Rounded corners (8-12px)
- Subtle shadow (shadow-sm to shadow-md)
- Padding: 16-24px
- Image top (aspect-ratio constrained) or icon
- Title (font-semibold, text-lg)
- Description (text-sm, text-muted)
- Action area bottom (buttons or links)
- Hover: slight lift (translateY -2px) + shadow increase
- Transition: 200ms ease
```

### Form Pattern
```
Structure:
- Label above input (not placeholder-only — accessibility)
- Input: full width, 44px height minimum (touch target)
- Validation: inline errors below field, red border
- Success: green border + checkmark
- Submit button: full width on mobile, right-aligned on desktop
- Loading state: spinner in button, disable button
- Error summary: red banner at top listing all errors

Field order (for signup):
1. Name
2. Email
3. Password (with strength indicator)
4. Confirm password (or skip — use email verification)
5. Terms checkbox
6. Submit
```

### Dashboard Layout
```
Structure:
- Sidebar (240px) + main content
- Sidebar: logo top, nav links, user/settings bottom
- Collapsible sidebar on tablet (icon-only mode, 64px)
- Hidden sidebar on mobile (hamburger trigger)
- Main content: 8px gap grid system
- Top bar: breadcrumbs + search + notifications + avatar

Metric cards row:
- 3-4 cards across on desktop
- Key number large (text-3xl, font-bold)
- Label small (text-sm, text-muted)
- Trend indicator: green up arrow / red down arrow
- Sparkline chart optional
```

### Data Table
```
Structure:
- Sticky header row
- Alternating row colors (subtle, not jarring)
- Sortable columns (click header, arrow indicator)
- Pagination: prev/next + page numbers + items per page selector
- Search/filter bar above table
- Row actions: edit/delete on hover or in last column
- Empty state: illustration + helpful message
- Loading state: skeleton rows (not spinner)
- Mobile: horizontal scroll or card layout transformation
```

### Modal / Dialog
```
Structure:
- Centered, max-width 480px (small) or 640px (medium)
- Overlay: black 50% opacity, click-to-close
- Header: title + close button (X)
- Body: scrollable if content overflows
- Footer: cancel (left) + primary action (right)
- Trap focus inside modal (accessibility)
- Close on Escape key
- Animate in: fade + slight scale (200ms)
```

### Pricing Table
```
Structure:
- 3 tiers side by side (2-4 acceptable)
- Middle tier highlighted ("Most Popular" badge)
- Tier name + price (large) + billing period
- Feature list with checkmarks
- CTA button per tier
- Feature comparison table below (optional, collapsed)
- Toggle: monthly / annual pricing
- Annual discount badge
```

---

## Responsive Breakpoints
```
Mobile first approach:
- Base:    0px+     (mobile portrait)
- sm:     640px+    (mobile landscape)
- md:     768px+    (tablet)
- lg:     1024px+   (desktop)
- xl:     1280px+   (large desktop)
- 2xl:    1536px+   (ultrawide)

Design at: 375px, 768px, 1024px, 1440px
```

## Animation Guidelines
```
- Transitions: 150-300ms (never >500ms for UI elements)
- Easing: ease-out for entrances, ease-in for exits
- Hover effects: subtle (scale 1.02, shadow increase, color shift)
- Page transitions: fade 200ms
- Loading: skeleton screens over spinners
- Respect prefers-reduced-motion — disable animations when set
- Never animate layout properties (width, height) — use transform/opacity
```

## Accessibility Checklist
```
- [ ] All images have alt text (decorative images: alt="")
- [ ] Color contrast 4.5:1 for text, 3:1 for large text
- [ ] Focus ring visible on all interactive elements
- [ ] Form inputs have associated labels (not just placeholder)
- [ ] Buttons have descriptive text (not just icons)
- [ ] Skip navigation link for keyboard users
- [ ] ARIA labels on icon-only buttons
- [ ] Modal traps focus and closes on Escape
- [ ] Touch targets minimum 44x44px
- [ ] prefers-reduced-motion respected
```
