# Behemoth — Claude Code Plugin

The ultimate Claude Code plugin. 8 agents, 18 skills, 20 commands, 6 hooks, 8 rule files — distilled from the best open-source Claude Code projects (330k+ combined stars).

## Quick Start

```bash
# Register marketplace
/plugin marketplace add mousam-maiti/behemoth

# Install
/plugin install behemoth@behemoth
```

## What's Inside

| Component | Count | Inspired By |
|---|---|---|
| **Agents** | 8 | Superpowers, ECC, UI UX Pro Max |
| **Skills** | 18 | Superpowers, Claude-Mem, ECC, UI UX Pro Max |
| **Commands** | 20 | ECC, Superpowers, Awesome Claude Code |
| **Hooks** | 6 | ECC, Claude-Mem |
| **Rules** | 8 | ECC (common + TypeScript + Python + Go + Swift) |

### Agents

| Agent | Purpose | Model |
|---|---|---|
| `planner` | Socratic brainstorming → implementation plans | sonnet |
| `architect` | System design decisions with ADR documentation | opus |
| `tdd-guide` | Strict RED-GREEN-REFACTOR enforcement | sonnet |
| `code-reviewer` | Two-stage review (spec compliance + code quality) | sonnet |
| `debugger` | Systematic 4-phase root cause debugging | sonnet |
| `design-system` | Generates tailored UI/UX design systems | sonnet |
| `security-reviewer` | OWASP Top 10 security audits | sonnet |
| `session-archivist` | Captures and restores session context | haiku |

### Commands

| Command | What It Does |
|---|---|
| `/plan` | Brainstorm → design → implementation plan |
| `/tdd` | Activate strict test-driven development |
| `/review` | Two-stage code review with severity grading |
| `/design` | Generate a complete design system |
| `/checkpoint` | Save session state for future sessions |
| `/compact` | Strategic compaction with state preservation |
| `/security` | Run comprehensive security audit |
| `/status` | Project dashboard (plan, git, tests, design) |
| `/build-fix` | Systematically fix build errors in dependency order |
| `/refactor` | Find and fix dead code, duplication, and complexity |
| `/orchestrate` | Execute plans via subagent-driven development |
| `/e2e` | Generate end-to-end tests for critical user flows |
| `/debug` | Systematic 4-phase root cause debugging |
| `/learn` | Extract reusable patterns from the current session |
| `/commit` | Create conventional commits with smart messages |
| `/create-pr` | Create pull requests with generated descriptions |
| `/fix-issue` | Structured GitHub issue resolution workflow |
| `/update-docs` | Sync documentation with current code state |
| `/test-coverage` | Analyze coverage gaps with priority recommendations |
| `/prime` | Load full project context for a productive session |

### Hooks

| Event | Script | What It Does |
|---|---|---|
| `SessionStart` | `session-start.js` | Loads context from `.behemoth/` — sessions, plans, design system, learnings |
| `Stop` | `session-checkpoint.js` | Suggests checkpointing before session ends |
| `PostToolUse (Edit)` | `post-edit-check.js` | Catches console.log, `any` types, TODOs, secrets, long files |
| `PostToolUse (Edit)` | `auto-format.js` | Runs Prettier + ESLint fix after file edits |
| `PreToolUse (Edit)` | `secret-scan.js` | Blocks writes containing API keys, tokens, credentials (14 patterns) |
| `PreToolUse (Bash)` | `pre-bash-guard.js` | Blocks dangerous commands (rm -rf /, fork bombs, pipe to shell) |

### Skills

**Workflow (6)**

| Skill | Description |
|---|---|
| `brainstorming` | Socratic design refinement before code |
| `planning` | Bite-sized task decomposition with verification steps |
| `tdd` | RED-GREEN-REFACTOR cycle enforcement |
| `subagent-dev` | Dispatch subagents per task with two-stage review |
| `git-workflow` | Git worktrees, branch naming, PR creation, merge strategies |
| `context-modes` | Switch between dev/review/research/debug modes |

**Memory (3)**

| Skill | Description |
|---|---|
| `session-memory` | Cross-session persistence via `.behemoth/sessions/` |
| `strategic-compact` | Smart compaction at logical breakpoints |
| `continuous-learning` | Auto-extract patterns, instinct → skill evolution |

**Design (5)**

| Skill | Description |
|---|---|
| `design-system` | Generate color palettes, typography, style recommendations |
| `ui-styles` | 10+ styles with CSS/Tailwind code (Glassmorphism, Brutalism, Bento, etc.) |
| `frontend-patterns` | Component templates, responsive breakpoints, accessibility checklist |
| `landing-pages` | Hero, social proof, features, pricing, FAQ, CTA section templates |
| `dashboard-templates` | Metrics cards, data tables, charts, sidebar nav, empty states |

**Backend (3)**

| Skill | Description |
|---|---|
| `backend-patterns` | REST API design, pagination, caching, error handling, rate limiting |
| `database-migrations` | Safe migration patterns for Prisma, Drizzle, Django, raw SQL |
| `deployment-patterns` | Docker, CI/CD pipelines, rollback strategies, health checks |

**Security (1)**

| Skill | Description |
|---|---|
| `security-review` | OWASP Top 10 + code-level vulnerability scanning |

### Rules

| File | Scope | Key Topics |
|---|---|---|
| `common/coding-style.md` | All languages | File org, naming, git conventions |
| `common/testing.md` | All languages | TDD principles, test structure, coverage |
| `common/performance.md` | All languages | Token management, model selection |
| `common/security.md` | All languages | Secrets, injection, auth, dependencies |
| `typescript/typescript.md` | TypeScript | Strict mode, discriminated unions, Zod, imports |
| `python/python.md` | Python | Type hints, pytest, Django/FastAPI patterns |
| `golang/golang.md` | Go | Error handling, table-driven tests, concurrency |
| `swift/swift.md` | Swift | SwiftUI state, async/await, protocol DI |

## Installation

### Option 1: Plugin Marketplace (Recommended)

```bash
/plugin marketplace add mousam-maiti/behemoth
/plugin install behemoth@behemoth
```

### Option 2: Manual Installation

```bash
git clone https://github.com/mousam-maiti/behemoth.git
cd behemoth
./install.sh --user        # Install to ~/.claude/ (all projects)
# or
./install.sh --project     # Install to .claude/ (this project only)
```

### Option 3: Cherry-Pick

```bash
git clone https://github.com/mousam-maiti/behemoth.git

# Just agents
cp behemoth/agents/*.md ~/.claude/agents/

# Just rules (pick your languages)
cp -r behemoth/rules/common/* ~/.claude/rules/
cp -r behemoth/rules/typescript/* ~/.claude/rules/
cp -r behemoth/rules/python/* ~/.claude/rules/

# Just commands
cp behemoth/commands/*.md ~/.claude/commands/

# Just skills
cp -r behemoth/skills/ .claude/skills/
```

Then copy hooks from `hooks/hooks.json` into `~/.claude/settings.json`.

### MCP Servers (Optional)

Copy desired servers from `mcp-configs/mcp-servers.json` to your `~/.claude.json`. Replace `YOUR_*_HERE` placeholders with actual values.

## How It Works

### The Workflow

```
1. /prime
   └── Load project context, session history, active plan, design system

2. /plan "Add user authentication"
   └── Brainstorm → Design doc → Implementation plan → .behemoth/plans/

3. /orchestrate
   └── Subagent per task → TDD → Two-stage review → Auto-commit

4. /review
   └── Stage 1: Spec compliance → Stage 2: Code quality

5. /security
   └── Secrets scan → Injection check → Dependency audit

6. /create-pr
   └── Tests pass → PR with generated description

7. /checkpoint
   └── Session state saved → Learnings extracted → Ready for next session
```

### Memory Persistence

All project knowledge lives in `.behemoth/`:

```
.behemoth/
├── sessions/          # Session summaries (auto-loaded on start)
├── plans/             # Implementation plans with task tracking
├── designs/           # Approved design documents
├── decisions/         # Architectural Decision Records (ADRs)
├── design-system/     # UI/UX design system specs
│   └── MASTER.md
└── learnings.md       # Project-specific patterns (auto-extracted)
```

The `SessionStart` hook loads recent context automatically. The `Stop` hook reminds you to checkpoint.

### Design Intelligence

The `/design` command generates a complete design system matched to your product:
- Layout pattern (Hero-Centric, Dashboard, Feature Showcase, etc.)
- UI style with actual CSS/Tailwind code (67 styles available)
- Color palette with hex codes and WCAG contrast ratios
- Typography pairing with Google Fonts links
- Landing page section templates (copy-paste ready HTML/Tailwind)
- Dashboard component patterns (metrics, tables, charts, sidebar)
- Anti-patterns specific to your industry

### Continuous Learning

Behemoth gets smarter about your project over time:
1. `/learn` extracts patterns from the current session
2. Patterns are saved to `.behemoth/learnings.md` with confidence levels
3. On next session start, learnings are loaded automatically
4. High-confidence patterns can evolve into formal skills

## Token Optimization

Add to `~/.claude/settings.json`:

```json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
```

Use `sonnet` by default (~60% cost savings), switch to `opus` for architecture. Use `/clear` between unrelated tasks, `/compact` at logical breakpoints.

## Project Structure

```
behemoth/
├── .claude-plugin/
│   ├── plugin.json          # Plugin manifest (8 agents, 18 skills, 20 commands)
│   └── marketplace.json     # Marketplace catalog
├── agents/                  # 8 specialized subagents
│   ├── planner.md           # Socratic planning
│   ├── architect.md         # System design (Opus)
│   ├── tdd-guide.md         # TDD enforcement
│   ├── code-reviewer.md     # Two-stage review
│   ├── debugger.md          # Root cause debugging
│   ├── design-system.md     # Design intelligence
│   ├── security-reviewer.md # Security audits
│   └── session-archivist.md # Memory persistence (Haiku)
├── skills/                  # 18 skills across 5 domains
│   ├── workflow/            # brainstorming, planning, tdd, subagent-dev, git-workflow, context-modes
│   ├── memory/              # session-memory, strategic-compact, continuous-learning
│   ├── design/              # design-system, ui-styles, frontend-patterns, landing-pages, dashboard-templates
│   ├── backend/             # backend-patterns, database-migrations, deployment-patterns
│   └── security/            # security-review
├── commands/                # 20 slash commands
├── hooks/                   # 6 lifecycle hooks
│   ├── hooks.json
│   └── scripts/             # session-start, session-checkpoint, post-edit-check, auto-format, secret-scan, pre-bash-guard
├── rules/                   # 8 rule files
│   ├── common/              # coding-style, testing, performance, security
│   ├── typescript/          # TypeScript-specific
│   ├── python/              # Python-specific
│   ├── golang/              # Go-specific
│   └── swift/               # Swift-specific
├── mcp-configs/             # MCP server configurations (GitHub, Playwright, Postgres, etc.)
├── AGENTS.md                # Cross-tool instructions (Cursor, Codex, OpenCode)
├── CLAUDE.md                # Dev instructions for working on the plugin
├── CHANGELOG.md
├── CONTRIBUTING.md
├── install.sh
├── package.json
├── LICENSE
└── README.md
```

## Sources & Attribution

| Project | Stars | What We Took |
|---|---|---|
| [Superpowers](https://github.com/obra/superpowers) | 108k | Brainstorming, TDD, subagent-driven dev, two-stage review, git worktrees |
| [Everything Claude Code](https://github.com/affaan-m/everything-claude-code) | 103k | Agent architecture, hooks, rules, token optimization, multi-language rules, strategic compact, continuous learning |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 49k | Design system generation, 67 UI styles, landing page templates, dashboard patterns, typography pairing |
| [Claude-Mem](https://github.com/thedotmack/claude-mem) | 40k | Session memory architecture, progressive disclosure, context layering, learnings persistence |
| [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) | 31k | Curated best practices, PR/issue commands, hook patterns, context priming, slash command patterns |

## License

MIT — use freely, modify as needed, contribute back if you can.
