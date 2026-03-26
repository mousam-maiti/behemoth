---
name: planning
description: Breaks approved designs into bite-sized implementation tasks with verification steps.
triggers:
  - "plan approved"
  - "start implementing"
  - "create tasks"
---

# Planning Skill

## Task Design Rules

### Size
Each task should take a subagent 2-5 minutes. If you can't describe the task in 3 sentences, it's too big — split it.

### Structure
Every task must include:
```
## Task N: [short title]
**Files**: [exact paths to create/modify]
**Do**: [what the code should accomplish — behavior, not implementation]
**Verify**: [command to run that proves the task is done]
**Depends on**: [task numbers this requires]
```

### Ordering
1. Data model / types first
2. Core business logic second
3. API / routes third
4. UI last
5. Tests woven into every step (not at the end)

### Plan File Format
Save to `.behemoth/plans/YYYY-MM-DD-<slug>.md`:
```markdown
# Implementation Plan: [feature name]
**Design**: [link to design doc]
**Estimated tasks**: N
**Status**: [ ] Not started

## Tasks
[task list]

## Definition of Done
- [ ] All tasks completed
- [ ] All tests pass
- [ ] Code review passed
- [ ] No security warnings
```
