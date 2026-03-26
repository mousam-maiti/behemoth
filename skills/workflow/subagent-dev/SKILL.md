---
name: subagent-dev
description: Dispatches fresh subagents per task with two-stage review.
triggers:
  - "execute plan"
  - "start building"
  - "subagent"
---

# Subagent-Driven Development Skill

## How It Works

When executing a plan, don't do everything in one long session. Instead:

### 1. Dispatch Per Task
For each task in the plan, spawn a fresh subagent with:
- The task description (from the plan)
- Relevant file context (only what the task needs)
- The TDD skill active

### 2. Two-Stage Review
After each task completes:

**Stage A — Spec Compliance**: Does the output match what the plan asked for?
- Every acceptance criterion met?
- Nothing added that wasn't requested?
- Tests exist and pass?

**Stage B — Code Quality**: Is the code well-written?
- Clean, readable, maintainable?
- No security issues?
- No performance concerns?

### 3. Gate Decisions
- **Both pass** → commit, move to next task
- **Spec fails** → re-dispatch the task with feedback
- **Quality fails** → fix issues, then commit
- **3 failures on same task** → escalate to user

### 4. Progress Tracking
Update the plan file after each task:
```markdown
## Task 3: Add user validation ✅
Completed: 2025-03-15 14:30
Files changed: src/validators/user.ts, tests/validators/user.test.ts
```

## Benefits
- Fresh context window per task (no context pollution)
- Consistent quality via automated review
- Autonomous multi-hour execution with human checkpoints
