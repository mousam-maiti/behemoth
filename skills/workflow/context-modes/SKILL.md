---
name: context-modes
description: Switch between development, review, and research modes for optimized context usage.
triggers:
  - "mode"
  - "switch mode"
  - "research mode"
  - "review mode"
---

# Context Modes Skill

## Available Modes

### Development Mode (default)
```
Focus: Writing code, implementing features, fixing bugs
Active agents: planner, tdd-guide, debugger
Active skills: brainstorming, planning, tdd, frontend-patterns, backend-patterns
Model: sonnet
Behavior:
  - Load active plan from .behemoth/plans/
  - Load design system from .behemoth/design-system/
  - Follow TDD cycle
  - Commit after each green test
```

### Review Mode
```
Focus: Code quality, security, spec compliance
Active agents: code-reviewer, security-reviewer
Active skills: security-review
Model: sonnet (or opus for complex reviews)
Behavior:
  - Read the plan/spec for the feature being reviewed
  - Run two-stage review (spec compliance + code quality)
  - Check for security issues
  - Generate review report
  - Do NOT write code — only identify issues
```

### Research Mode
```
Focus: Exploring options, reading docs, evaluating approaches
Active agents: architect
Active skills: none (minimal context)
Model: opus (for deep reasoning)
Behavior:
  - Read documentation and codebases
  - Compare approaches with tradeoffs
  - Document findings in .behemoth/research/
  - Do NOT write production code
  - Do NOT make permanent changes
  - Save research to .behemoth/designs/ when complete
```

### Debug Mode
```
Focus: Reproducing and isolating bugs
Active agents: debugger
Active skills: none (minimal context)
Model: sonnet
Behavior:
  - Reproduce the bug with a failing test
  - Isolate root cause with binary search
  - Fix with minimal change
  - Verify no regressions
```

## Switching Modes
The mode determines which agents and skills are prioritized, and which model to use. Switch by stating intent:
- "Let's plan this feature" → Development Mode
- "Review the auth PR" → Review Mode
- "What's the best approach for caching?" → Research Mode
- "This endpoint is returning 500" → Debug Mode
