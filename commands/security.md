Run a comprehensive security audit on the codebase. Checks:

1. **Secrets** — API keys, tokens, passwords in code or config files
2. **Injection** — SQL, XSS, command injection, path traversal
3. **Auth** — JWT expiry, session management, password hashing
4. **Dependencies** — Known CVEs via `npm audit` / `pip audit` / `go vuln`
5. **Configuration** — CORS, CSP headers, error leaking, debug mode

Use the `security-reviewer` agent.

Output a severity-graded report: CRITICAL (block deploy), HIGH, MEDIUM, LOW.

$ARGUMENTS: Optional — specific directory or file to audit
