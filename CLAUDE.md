# Behemoth — Claude Code Plugin

## Project Overview
Behemoth is the ultimate Claude Code plugin, combining the best patterns from Superpowers, Everything Claude Code, UI UX Pro Max, Claude-Mem, and Awesome Claude Code into one cohesive system.

## Architecture

### Directory Layout
- `agents/` — 8 subagent definitions (markdown with YAML frontmatter)
- `skills/` — 18 skill definitions organized by domain (workflow, memory, design, backend, security)
- `commands/` — 20 slash commands (markdown prompt templates)
- `hooks/` — hooks.json config + 6 Node.js hook scripts
- `rules/` — 8 rule files (common + typescript + python + golang + swift)
- `.claude-plugin/` — plugin.json manifest + marketplace.json
- `mcp-configs/` — MCP server configurations
- `.behemoth/` — runtime state directory (sessions, plans, designs, decisions, design-system, learnings)

### Key Design Decisions
1. **File-based memory** — No databases, no external services. Everything in `.behemoth/` as markdown. Git-friendly and portable.
2. **Progressive disclosure** — Session context is loaded in layers: brief summary first, details on demand.
3. **Two-stage review** — Spec compliance check before code quality check. Catches scope drift early.
4. **Mandatory brainstorming** — The planner agent refuses to write code. It produces plans only.
5. **Hooks warn, don't block** — Post-edit hooks warn but don't prevent saves. Only secret-scan and pre-bash hooks block genuinely dangerous operations.
6. **Continuous learning** — Patterns are extracted from sessions and loaded automatically on next start.

## Development

### Testing Hook Scripts
```bash
cd /path/to/project-with-behemoth-dir && node hooks/scripts/session-start.js

echo '{"tool_input":{"file_path":"test.ts"}}' | node hooks/scripts/post-edit-check.js test.ts

echo '{"tool_input":{"command":"rm -rf /"}}' | node hooks/scripts/pre-bash-guard.js

echo '{"tool_input":{"content":"sk-ant-abc123def456"}}' | node hooks/scripts/secret-scan.js
```

### Adding Components
1. Create the file in the appropriate directory
2. Add entry to `.claude-plugin/plugin.json`
3. Update README.md tables
4. Update CHANGELOG.md
5. Submit PR with conventional commit

## Code Style
- Hook scripts: Node.js, zero dependencies, compatible with Node 18+
- Markdown files: Use YAML frontmatter for metadata
- Keep files focused — one agent/skill/command per file
- Follow conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`

## Important Notes
- Do NOT add a `"hooks"` field to `.claude-plugin/plugin.json` — Claude Code v2.1+ auto-loads `hooks/hooks.json` by convention
- Hook scripts must be executable and start with `#!/usr/bin/env node`
- The `.behemoth/sessions/` directory should be gitignored in user projects (session-specific state)
- Plans, designs, decisions, and design-system can be committed (shared team knowledge)
