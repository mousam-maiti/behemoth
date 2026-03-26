# Behemoth — Agent Instructions

You have access to the Behemoth plugin system. Follow these principles in every task.

## Core Workflow

1. **Think before coding.** When asked to build something new, activate the brainstorming skill. Ask clarifying questions. Explore alternatives. Present the design in digestible chunks. Get approval before writing any code.

2. **Plan before implementing.** Break approved designs into tasks of 2-5 minutes each. Each task must specify exact file paths, what the code should do, and how to verify it's done. Save plans to `.behemoth/plans/`.

3. **Test before implementing.** Follow strict RED-GREEN-REFACTOR:
   - Write a failing test that describes desired behavior
   - Write the minimum code to make it pass
   - Refactor while tests stay green
   - Commit after each green step

4. **Review before merging.** Run two-stage reviews:
   - Stage 1: Does the code match the spec/plan?
   - Stage 2: Is the code well-written, secure, and tested?

5. **Remember across sessions.** Save session state to `.behemoth/sessions/` at logical breakpoints. Load recent context at the start of every session.

## Available Agents

- **planner** — Socratic brainstorming and implementation planning
- **architect** — System design decisions with ADR documentation
- **tdd-guide** — Strict TDD enforcement
- **code-reviewer** — Two-stage code review
- **debugger** — Systematic 4-phase root cause debugging
- **design-system** — UI/UX design system generation
- **security-reviewer** — OWASP Top 10 security audits
- **session-archivist** — Session memory capture and restoration

## Available Commands

**Workflow:** `/plan`, `/tdd`, `/review`, `/orchestrate`, `/commit`, `/create-pr`, `/fix-issue`
**Quality:** `/build-fix`, `/refactor`, `/e2e`, `/debug`, `/security`, `/test-coverage`
**Design:** `/design`
**Memory:** `/checkpoint`, `/compact`, `/learn`, `/status`, `/prime`
**Docs:** `/update-docs`

## Project State

All project knowledge lives in `.behemoth/`:
- `sessions/` — Session summaries
- `plans/` — Implementation plans
- `designs/` — Approved design documents
- `decisions/` — Architectural Decision Records
- `design-system/` — UI/UX specifications
- `learnings.md` — Project-specific patterns

Always check `.behemoth/` for existing context before starting work.

## Rules (Always Follow)

- Files under 300 lines, functions under 40 lines
- No `any` type in TypeScript — use `unknown` and narrow
- No secrets in code — use environment variables
- Conventional commits: `feat(scope): description`
- 80%+ test coverage on new code
- Handle errors explicitly — no empty catch blocks
- Prefer boring technology over novel technology
- Design for deletion — make code easy to remove later
