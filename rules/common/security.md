# Security

## Mandatory Checks Before Every Commit
1. No secrets in code — grep for `sk-`, `ghp_`, `AKIA`, hardcoded passwords
2. No `eval()` or `Function()` with dynamic input
3. SQL queries use parameterized statements
4. User input is sanitized before rendering (XSS)
5. File operations validate paths (no traversal)

## Authentication & Authorization
- Hash passwords with bcrypt or argon2 (never MD5/SHA1)
- JWT tokens must have expiration
- Implement refresh token rotation
- Check authorization on every endpoint, not just the frontend

## Dependencies
- Run `npm audit` / `pip audit` before merging
- Pin major versions in package.json
- Review new dependency licenses and maintenance status

## Configuration
- Use environment variables for all secrets and config
- Never commit `.env` files — use `.env.example` with placeholder values
- Set restrictive CORS policies (not `*`)
- Disable debug/verbose mode in production
