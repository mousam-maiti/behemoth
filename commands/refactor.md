Analyze the specified code for refactoring opportunities:

1. **Dead Code** — Find and remove unused imports, variables, functions, and files
   - Run: `grep -rn` for exported symbols that are never imported elsewhere
   - Check for commented-out code blocks — remove them (git has history)

2. **Duplication** — Identify repeated patterns that should be extracted
   - Look for similar functions across files
   - Suggest shared utilities or base classes

3. **Complexity** — Simplify overly complex code
   - Functions >40 lines → split into smaller functions
   - Files >300 lines → split into modules
   - Deeply nested conditionals → use early returns or guard clauses
   - Long parameter lists → use option objects

4. **Naming** — Improve unclear names
   - Generic names like `data`, `result`, `item`, `temp` → make specific
   - Abbreviations → spell out unless universally understood

Rules:
- Run tests after every refactoring step — if tests break, undo
- Commit after each successful refactoring: `refactor: [what improved]`
- Never change behavior — refactoring is about structure, not functionality

$ARGUMENTS: File path, directory, or "all" for full codebase scan
