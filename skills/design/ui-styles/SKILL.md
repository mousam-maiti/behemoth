---
name: ui-styles
description: Implementation reference for 20+ UI styles with specific CSS/Tailwind patterns, color palettes, and typography.
triggers:
  - "glassmorphism"
  - "neumorphism"
  - "brutalism"
  - "minimalist"
  - "dark mode"
  - "bento"
  - "style"
  - "look and feel"
---

# UI Styles Reference

## 1. Minimalism / Swiss Style
```css
/* Clean, lots of whitespace, grid-based */
--bg: #FFFFFF;
--text: #1A1A1A;
--accent: #0066FF;
--muted: #6B7280;
--border: #E5E7EB;
--radius: 4px;
--shadow: none;
--font-heading: 'Inter', sans-serif; /* weight: 600 */
--font-body: 'Inter', sans-serif; /* weight: 400 */
--spacing-unit: 8px; /* multiply for all spacing */
```
Best for: Enterprise apps, dashboards, documentation
Key: Maximum whitespace, strict grid, no decorative elements

## 2. Glassmorphism
```css
/* Frosted glass over colorful background */
--glass-bg: rgba(255, 255, 255, 0.15);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-blur: blur(12px);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
--radius: 16px;

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--glass-shadow);
}
```
Tailwind: `bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg`
Best for: Modern SaaS, financial dashboards, premium apps
Needs: Colorful or gradient background behind the glass elements

## 3. Neumorphism (Soft UI)
```css
/* Soft extruded shapes on flat background */
--bg: #E0E5EC;
--shadow-light: #FFFFFF;
--shadow-dark: #A3B1C6;
--text: #2D3436;
--accent: #6C5CE7;

.neu-card {
  background: var(--bg);
  border-radius: 20px;
  box-shadow: 8px 8px 16px var(--shadow-dark),
              -8px -8px 16px var(--shadow-light);
}
.neu-card-inset {
  box-shadow: inset 4px 4px 8px var(--shadow-dark),
              inset -4px -4px 8px var(--shadow-light);
}
```
Best for: Wellness, meditation, calculator-style apps
Warning: Low contrast — use only for decorative elements, not text containers

## 4. Brutalism / Neubrutalism
```css
/* Bold borders, raw aesthetic, intentionally "ugly" */
--bg: #FFFFFF;
--text: #000000;
--accent: #FF6B6B; /* or any bold primary */
--border: 3px solid #000000;
--shadow: 4px 4px 0px #000000;
--radius: 0px; /* or slight: 8px for neubrutalism */
--font-heading: 'Space Grotesk', sans-serif; /* weight: 700 */

.brutal-card {
  border: var(--border);
  box-shadow: var(--shadow);
  background: var(--accent);
}
.brutal-card:hover {
  box-shadow: 6px 6px 0px #000000;
  transform: translate(-2px, -2px);
}
```
Tailwind: `border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`
Best for: Creative portfolios, Gen Z brands, design agencies

## 5. Bento Grid
```css
/* Magazine-style grid with varied card sizes */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 16px;
}
.bento-item-wide { grid-column: span 2; }
.bento-item-tall { grid-row: span 2; }
.bento-item-featured { grid-column: span 2; grid-row: span 2; }
```
Tailwind: `grid grid-cols-4 gap-4` with `col-span-2`, `row-span-2`
Best for: Dashboards, product features, personal sites, Apple-style showcases

## 6. Dark Mode (OLED)
```css
--bg: #000000; /* true black for OLED */
--surface: #111111;
--surface-hover: #1A1A1A;
--text: #E4E4E7;
--text-muted: #71717A;
--accent: #3B82F6;
--border: #27272A;
--shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

/* Key rule: never use pure white text on pure black — use #E4E4E7 */
```
Best for: Dev tools, coding platforms, media, gaming
Rules: No pure white (#fff) on pure black (#000). Reduce contrast slightly for comfort.

## 7. AI-Native UI
```css
/* Clean, conversational, subtle tech feel */
--bg: #FAFAFA;
--surface: #FFFFFF;
--text: #18181B;
--accent: #8B5CF6; /* violet — but NOT gradient overdone */
--chat-bg-user: #F4F4F5;
--chat-bg-ai: #FFFFFF;
--radius: 16px;
--font: 'Inter', sans-serif;

/* Streaming text effect */
.typing-indicator {
  animation: pulse 1.5s ease-in-out infinite;
}
```
Best for: AI products, chatbots, copilot interfaces
Warning: Avoid the cliche purple-to-pink gradient background. Be subtle.

## 8. Soft UI Evolution
```css
/* Modern, gentle depth without harsh shadows */
--bg: #F8FAFC;
--surface: #FFFFFF;
--text: #1E293B;
--accent: #6366F1;
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--radius: 12px;
--transition: 200ms ease;
```
Best for: Modern enterprise, premium SaaS, wellness brands

## 9. Retro / Y2K
```css
--bg: #FFE4F3;
--text: #1A0533;
--accent: #FF00FF;
--secondary: #00FFFF;
--font-heading: 'Bungee', cursive;
--border: 2px solid #FF00FF;
--shadow: 3px 3px 0px #00FFFF;
```
Best for: Fashion, music, Gen Z lifestyle, nostalgic brands

## 10. Editorial / Magazine
```css
--bg: #FFFDF5;
--text: #1A1A1A;
--accent: #C62828;
--font-heading: 'Playfair Display', serif; /* weight: 700 */
--font-body: 'Source Serif 4', serif; /* weight: 400 */
--max-width: 680px; /* reading column */
--line-height: 1.75;
```
Best for: Blogs, news sites, long-form content, magazines

---

## Landing Page Patterns

### Hero-Centric (Product Showcase)
```
[Nav Bar]
[Hero: Headline + CTA + Product Image/Video]
[Social Proof: Logo bar or testimonial strip]
[Features: 3-column grid with icons]
[How It Works: 3-step process]
[Testimonials: Cards or carousel]
[Pricing: 3-tier table]
[FAQ: Accordion]
[CTA: Final call to action]
[Footer]
```

### Conversion-Optimized (Lead Gen)
```
[Nav Bar - minimal, no links except CTA]
[Hero: Pain point headline + form above fold]
[Benefits: icon + short text, 3 columns]
[Social proof: numbers (10k+ users, 99% uptime)]
[Testimonials: photo + name + role + quote]
[Objection handling: FAQ accordion]
[Final CTA: repeated form or big button]
[Footer - minimal]
```

### Feature-Rich (SaaS)
```
[Nav Bar with dropdown menus]
[Hero: Headline + subhead + dual CTA]
[Feature sections: alternating image-left/text-right]
[Integration logos grid]
[Comparison table vs competitors]
[Case study highlights]
[Pricing toggle: monthly/annual]
[FAQ]
[CTA bar]
[Footer with sitemap]
```

---

## Color Palette Quick Reference

| Industry | Primary | Secondary | CTA | Background | Mood |
|---|---|---|---|---|---|
| SaaS / Tech | #2563EB (Blue) | #6366F1 (Indigo) | #F97316 (Orange) | #F8FAFC | Professional, trustworthy |
| Healthcare | #059669 (Green) | #0EA5E9 (Sky) | #2563EB (Blue) | #F0FDF4 | Calm, clinical |
| Finance | #1E3A5F (Navy) | #0D9488 (Teal) | #F59E0B (Amber) | #F8FAFC | Trustworthy, stable |
| E-commerce | #DC2626 (Red) | #F97316 (Orange) | #16A34A (Green) | #FFFFFF | Urgent, energetic |
| Creative | #8B5CF6 (Violet) | #EC4899 (Pink) | #F97316 (Orange) | #FAFAFA | Bold, expressive |
| Wellness | #A7F3D0 (Mint) | #E8B4B8 (Rose) | #D4AF37 (Gold) | #FFF5F5 | Calming, organic |
| Education | #2563EB (Blue) | #F59E0B (Amber) | #16A34A (Green) | #FFFBEB | Approachable, clear |

## Typography Pairing Quick Reference

| Mood | Heading | Body | Google Fonts |
|---|---|---|---|
| Professional | Inter (600) | Inter (400) | `Inter:wght@400;600` |
| Elegant | Playfair Display (700) | Lato (400) | `Playfair+Display:wght@700\|Lato` |
| Modern | Space Grotesk (600) | DM Sans (400) | `Space+Grotesk:wght@600\|DM+Sans` |
| Technical | JetBrains Mono (600) | Inter (400) | `JetBrains+Mono:wght@600\|Inter` |
| Friendly | Nunito (700) | Open Sans (400) | `Nunito:wght@700\|Open+Sans` |
| Editorial | Cormorant Garamond (600) | Source Serif 4 (400) | `Cormorant+Garamond:wght@600\|Source+Serif+4` |
| Bold/Startup | Sora (700) | Inter (400) | `Sora:wght@700\|Inter` |
| Luxury | Tenor Sans (400) | Montserrat (300) | `Tenor+Sans\|Montserrat:wght@300` |
