---
name: design-system
description: Generate and persist a design system matched to your product type.
triggers:
  - "design system"
  - "color palette"
  - "UI style"
  - "font pairing"
---

# Design System Skill

Activates before frontend code. Invoke the `design-system` agent.

Loads existing system from `.behemoth/design-system/MASTER.md` if present.
For page-specific overrides, check `.behemoth/design-system/pages/<page>.md`.

Output format for MASTER.md:
```markdown
# Design System — [Product Name]
## Style: [name]
## Colors
- Primary: #hex — [usage]
- Secondary: #hex — [usage]
- CTA: #hex — [usage]
- Background: #hex
- Text: #hex
## Typography
- Heading: [font] (weight) — [Google Fonts link]
- Body: [font] (weight)
## Anti-Patterns
- [what to avoid for this product type]
```
