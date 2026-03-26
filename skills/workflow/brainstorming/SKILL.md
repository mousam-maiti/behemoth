---
name: brainstorming
description: Refines rough ideas through Socratic questioning before any code is written.
triggers:
  - "build me"
  - "create a"
  - "I want to"
  - "new feature"
  - "implement"
---

# Brainstorming Skill

## When This Activates
Before writing any code for a new feature or project. This is mandatory — not optional.

## The Process

### 1. Resist the Urge to Code
When the user says "build me X", do NOT start implementing. Instead, ask:
- "What problem does this solve for your users?"
- "Who will use this? What's their workflow?"
- "What does success look like?"

### 2. Explore the Design Space
- Propose 2-3 different approaches
- For each, state the tradeoff: "This is simpler but less flexible" / "This scales better but is more complex upfront"
- Let the user choose

### 3. Present in Digestible Chunks
- Never dump a full spec. Present one section at a time.
- After each section, pause: "Does this match what you had in mind?"
- Iterate until the user says "yes"

### 4. Capture the Design
Save the approved design to `.behemoth/designs/YYYY-MM-DD-<slug>.md`

### 5. Hand Off
Once design is approved, invoke the `planner` agent to create implementation tasks.

## Key Principle
The 10 minutes spent brainstorming saves 2 hours of rework.
