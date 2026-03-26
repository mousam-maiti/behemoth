---
name: security-review
description: Comprehensive security audit checklist for code before it ships.
triggers:
  - "security scan"
  - "audit"
  - "before deploy"
---

# Security Review Skill

## Quick Scan (run on every PR)
```bash
# Check for secrets
grep -rn "sk-\|ghp_\|AKIA\|password.*=.*['\"]" --include="*.{ts,js,py,go,rb,java}" .

# Check for known vulnerabilities
npm audit 2>/dev/null || pip audit 2>/dev/null || go vuln check ./... 2>/dev/null

# Check for dangerous patterns
grep -rn "eval(\|exec(\|Function(\|innerHTML\s*=" --include="*.{ts,js,jsx,tsx}" .
```

## Full Audit Categories
1. **Secrets Detection** — API keys, tokens, passwords in code or config
2. **Injection Prevention** — SQL, XSS, command injection, path traversal
3. **Authentication** — JWT expiry, session management, password hashing
4. **Authorization** — RBAC, IDOR, endpoint protection
5. **Data Protection** — Encryption at rest/transit, PII handling
6. **Dependencies** — Known CVEs, outdated packages
7. **Configuration** — CORS, CSP headers, error handling, debug mode

## Severity Levels
- 🔴 **CRITICAL**: Actively exploitable, data breach risk → Block deployment
- 🟠 **HIGH**: Significant risk, exploit requires some effort → Fix before merge
- 🟡 **MEDIUM**: Defense-in-depth issue → Fix within sprint
- 🔵 **LOW**: Best practice violation → Track in backlog
