# Contributing to Behemoth

Contributions are welcome! Here's how to add to the plugin.

## Adding a New Agent

1. Create `agents/your-agent.md` with YAML frontmatter:
   ```yaml
   ---
   name: your-agent
   description: What this agent does
   tools: ["Read", "Write", "Bash", "Grep", "Glob"]
   model: sonnet
   ---
   ```
2. Add entry to `.claude-plugin/plugin.json` under `agents`
3. Update the agents table in `README.md`
4. Submit PR with `feat(agent): add your-agent`

## Adding a New Skill

1. Create `skills/<domain>/<skill-name>/SKILL.md` with YAML frontmatter:
   ```yaml
   ---
   name: your-skill
   description: What this skill teaches
   triggers:
     - "keyword that activates it"
   ---
   ```
2. Add entry to `.claude-plugin/plugin.json` under `skills`
3. Update the skills table in `README.md`
4. Submit PR with `feat(skill): add your-skill`

## Adding a New Command

1. Create `commands/your-command.md` with the prompt template
2. Use `$ARGUMENTS` for user-provided input
3. Reference agents and skills by name
4. Add entry to `.claude-plugin/plugin.json` under `commands`
5. Submit PR with `feat(command): add /your-command`

## Adding a New Hook

1. Create the script in `hooks/scripts/your-hook.js`
2. Must be Node.js, zero dependencies, compatible with Node 18+
3. Add the hook config to `hooks/hooks.json`
4. Submit PR with `feat(hook): add your-hook`

## Guidelines

- Keep files focused — one concept per file
- Hook scripts must work without `npm install`
- Test hook scripts manually before submitting
- Follow conventional commits
- Update README.md with any new components
