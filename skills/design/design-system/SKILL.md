---
name: design-system
description: Generates complete design systems based on product type, audience, and industry.
triggers:
  - "landing page"
  - "design system"
  - "UI for"
  - "build a website"
  - "dashboard"
---

# Design System Generation Skill

## Activation
This skill activates automatically when the user requests any UI/UX work. It runs BEFORE any frontend code is written.

## Process

### 1. Classify the Product
Identify the product category:
- SaaS / B2B Tool / Developer Platform
- E-commerce / Marketplace / Subscription
- Portfolio / Agency / Creative
- Healthcare / Finance / Government
- Dashboard / Analytics / Admin Panel
- Mobile App / PWA
- Landing Page / Marketing Site

### 2. Select Style
Based on product type, recommend from:

| Style | Best For |
|---|---|
| Minimalism | Enterprise, dashboards, documentation |
| Glassmorphism | Modern SaaS, financial dashboards |
| Neumorphism | Wellness, meditation apps |
| Brutalism / Neubrutalism | Creative portfolios, Gen Z brands |
| Soft UI | Modern enterprise, premium services |
| Bento Grid | Dashboards, feature showcases |
| Dark Mode | Dev tools, gaming, media |
| AI-Native UI | AI products, chatbots, copilots |

### 3. Generate Color Palette
- **Primary**: Brand color — used for headers, CTAs
- **Secondary**: Supporting — used for accents, highlights
- **CTA**: Action color — buttons, links (high contrast)
- **Background**: Canvas — white/near-white or dark
- **Text**: Content — high contrast against background

Ensure WCAG AA contrast (4.5:1 minimum).

### 4. Select Typography
Recommend a heading + body font pair:
- **Professional**: Inter + Source Code Pro
- **Elegant**: Playfair Display + Lato
- **Modern**: Space Grotesk + DM Sans
- **Technical**: JetBrains Mono + Inter
- **Friendly**: Nunito + Open Sans

### 5. Define Anti-Patterns
List what to AVOID for this product type:
- Banking → No bright neon, no playful animations
- Children's app → No dark mode, no tiny text
- Portfolio → No stock photos, no generic templates
- AI product → No purple/pink gradients (overdone)

### 6. Save and Apply
Save to `.behemoth/design-system/MASTER.md` and reference it in all subsequent frontend work.
