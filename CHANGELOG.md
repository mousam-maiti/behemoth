# Changelog

## v1.0.0 — Initial Release

### Agents (8)
- `planner` — Socratic brainstorming → implementation plans
- `architect` — System design decisions with ADR documentation
- `tdd-guide` — Strict RED-GREEN-REFACTOR enforcement
- `code-reviewer` — Two-stage review (spec compliance + code quality)
- `debugger` — Systematic 4-phase root cause debugging
- `design-system` — Generates tailored UI/UX design systems
- `security-reviewer` — OWASP Top 10 security audits
- `session-archivist` — Captures and restores session context

### Skills (18)

**Workflow (6):**
- `brainstorming` — Socratic design refinement (from Superpowers)
- `planning` — Bite-sized task decomposition (from Superpowers)
- `tdd` — RED-GREEN-REFACTOR cycle (from Superpowers)
- `subagent-dev` — Dispatch + two-stage review loop (from Superpowers)
- `git-workflow` — Worktrees, branches, PRs, merge strategies (from Superpowers)
- `context-modes` — Dev/review/research/debug mode switching (from ECC)

**Memory (3):**
- `session-memory` — Cross-session persistence (from Claude-Mem)
- `strategic-compact` — Smart compaction at logical breakpoints (from ECC)
- `continuous-learning` — Auto-extract patterns, evolve into skills (from ECC)

**Design (5):**
- `design-system` — UI/UX generation with anti-patterns (from UI UX Pro Max)
- `ui-styles` — 10+ styles with CSS/Tailwind code (from UI UX Pro Max)
- `frontend-patterns` — Component templates, responsive, a11y (from UI UX Pro Max + ECC)
- `landing-pages` — Hero, pricing, FAQ, CTA section templates (from UI UX Pro Max)
- `dashboard-templates` — Metrics, tables, charts, sidebar patterns (from UI UX Pro Max)

**Backend (3):**
- `backend-patterns` — REST API design, caching, error handling (from ECC)
- `database-migrations` — Safe migration patterns for Prisma, Drizzle, Django, raw SQL (from ECC)
- `deployment-patterns` — Docker, CI/CD, rollbacks, health checks (from ECC)

**Security (1):**
- `security-review` — Vulnerability scanning checklist (from ECC + Trail of Bits)

### Commands (20)
- `/plan` — Brainstorm → design → implementation plan
- `/tdd` — Activate strict test-driven development
- `/review` — Two-stage code review with severity grading
- `/design` — Generate a complete design system
- `/checkpoint` — Save session state for future sessions
- `/compact` — Strategic compaction with state preservation
- `/security` — Run comprehensive security audit
- `/status` — Project dashboard (plan, git, tests, design)
- `/build-fix` — Systematically fix build errors
- `/refactor` — Find and fix dead code, duplication, complexity
- `/orchestrate` — Execute plans via subagent-driven development
- `/e2e` — Generate end-to-end tests for critical user flows
- `/debug` — Systematic 4-phase root cause debugging
- `/learn` — Extract reusable patterns from session
- `/commit` — Create conventional commits with smart messages
- `/create-pr` — Create pull requests with generated descriptions
- `/fix-issue` — Structured GitHub issue resolution
- `/update-docs` — Sync documentation with current code
- `/test-coverage` — Analyze coverage gaps with priorities
- `/prime` — Load full project context for productive session

### Hooks (6)
- `SessionStart` → `session-start.js` — Auto-loads context from `.behemoth/`
- `Stop` → `session-checkpoint.js` — Suggests checkpointing before session ends
- `PostToolUse (Edit)` → `post-edit-check.js` — Catches console.log, `any`, secrets, long files
- `PostToolUse (Edit)` → `auto-format.js` — Runs Prettier + ESLint after edits
- `PreToolUse (Edit)` → `secret-scan.js` — Blocks writes containing secrets (14 patterns)
- `PreToolUse (Bash)` → `pre-bash-guard.js` — Blocks dangerous shell commands

### Rules (8)
- `common/coding-style.md` — File organization, naming, git conventions
- `common/testing.md` — TDD principles, test structure, coverage
- `common/performance.md` — Token management, model selection
- `common/security.md` — Security checklist for every commit
- `typescript/typescript.md` — Strict mode, unions, Zod, imports
- `python/python.md` — Type hints, pytest, Django/FastAPI
- `golang/golang.md` — Error handling, table-driven tests, concurrency
- `swift/swift.md` — SwiftUI, async/await, protocol DI

### Infrastructure
- MCP server configurations (GitHub, Playwright, Postgres, Memory, Context7)
- Cross-tool support: AGENTS.md (Cursor, Codex, OpenCode)
- Manual install script: `install.sh`

### Sources
Synthesized from: Superpowers (108k★), Everything Claude Code (103k★), UI UX Pro Max (49k★), Claude-Mem (40k★), Awesome Claude Code (31k★)
