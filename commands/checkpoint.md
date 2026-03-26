Save the current session state to `.behemoth/sessions/`. This captures:

1. **Decisions made** — architectural and design choices with rationale
2. **Work completed** — files created/modified, features implemented
3. **Work in progress** — current task state and next steps
4. **Patterns & gotchas** — project-specific knowledge discovered
5. **Resume prompt** — a ready-to-paste prompt for the next session

Use the `session-archivist` agent.

Run this before `/compact`, before ending a session, or at any logical breakpoint.

$ARGUMENTS: Optional — brief description of current state
