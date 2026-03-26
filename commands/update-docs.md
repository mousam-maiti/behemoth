Update project documentation to reflect current code state:

1. Scan for outdated README sections:
   - Check if install instructions match current package.json/requirements
   - Verify API examples work with current endpoints
   - Update feature lists to match implemented features
2. Update API documentation:
   - Scan route files for endpoints
   - Verify request/response shapes match current types
3. Update inline documentation:
   - Find public functions missing JSDoc/docstrings
   - Add or update descriptions for exported modules
4. Check for broken links in markdown files
5. Update CHANGELOG.md with recent changes if needed

Rules:
- Don't fabricate documentation for features that don't exist
- Keep README concise — link to detailed docs instead of inline
- Commit: `docs: update [section] documentation`

$ARGUMENTS: Optional — specific file or section to update
