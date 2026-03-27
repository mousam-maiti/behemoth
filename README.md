# Behemoth

ECC companion plugin — fills the gaps that [Everything Claude Code](https://github.com/affaan-m/everything-claude-code) doesn't cover.

## What This Adds (on top of ECC)

| Component | What | Why ECC Doesn't Have It |
|---|---|---|
| **Design System Agent** | Matches product type → UI style, colors, fonts, anti-patterns | ECC has no style intelligence engine |
| **UI Templates Skill** | Landing page sections + dashboard component patterns | ECC has no ready-to-use HTML/Tailwind patterns |
| **Design Persistence** | `.behemoth/design-system/MASTER.md` loads every session | ECC has no cross-session design consistency |
| **Secret Scanner Hook** | Blocks edits containing API keys, tokens (14 patterns) | ECC greps but doesn't block pre-edit |
| **Auto-Format Hook** | Runs Prettier + ESLint after every file edit | ECC has this for Cursor, not Claude Code |
| **`/prime`** | One command loads full project context | ECC has no single catch-up command |
| **`/design`** | Generates complete design system | ECC has no equivalent |

## Install

```bash
# Requires ECC installed first
/plugin marketplace add mousam-maiti/behemoth
/plugin install behemoth@behemoth
```

## Usage

```
/behemoth:plan "Add user authentication"
/behemoth:tdd
/behemoth:review
/behemoth:design "SaaS dashboard for marketing teams"
/behemoth:prime
```

The design system agent activates automatically on any frontend/UI request.
Secret scanner and auto-format hooks run automatically on every edit.

## Inventory

- 4 agents (planner, tdd-guide, code-reviewer, design-system)
- 2 skills (design-system, ui-templates)
- 5 commands (/plan, /tdd, /review, /design, /prime)
- 2 hooks (secret-scan, auto-format)
- **Total context cost: ~6KB** (vs ~25KB in v1)

Works standalone or alongside ECC. If using with ECC, the plan/tdd/review agents complement ECC's versions.

## License

MIT
