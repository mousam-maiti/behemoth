Fix the current build errors systematically:

1. Run the project's build command and capture all errors
2. Group errors by type: type errors, import errors, missing dependencies, syntax errors
3. Fix errors in dependency order — start with the root cause, not the symptoms
4. After each fix, re-run the build to confirm the error is resolved and no new errors appeared
5. Repeat until the build is clean

Rules:
- Never suppress errors with `// @ts-ignore` or `any` type — fix the actual issue
- If a dependency is missing, install it properly (don't just add a type stub)
- If an import path is wrong, fix the path (don't create a re-export barrel file as a workaround)
- Commit after every successful fix: `git commit -m "fix: [what was wrong]"`

$ARGUMENTS: Optional — specific error message or file to focus on
