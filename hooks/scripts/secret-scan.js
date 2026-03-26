#!/usr/bin/env node

/**
 * PreToolUse (Edit) hook — Scans content being written for secrets.
 * Blocks writes that contain API keys, tokens, or credentials.
 */

function main() {
  let input = '';
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', chunk => { input += chunk; });
  process.stdin.on('end', () => {
    try {
      const data = JSON.parse(input);
      const content = data.tool_input?.content || data.tool_input?.new_str || '';
      const filePath = data.tool_input?.file_path || '';

      // Skip non-code files
      const skipFiles = ['.env.example', 'README.md', 'CHANGELOG.md', '.behemoth/'];
      if (skipFiles.some(s => filePath.includes(s))) return;

      const patterns = [
        { name: 'AWS Access Key', regex: /AKIA[A-Z0-9]{16}/ },
        { name: 'AWS Secret Key', regex: /(?:aws_secret|secret_key)\s*[=:]\s*['"][A-Za-z0-9/+=]{40}['"]/ },
        { name: 'GitHub Token', regex: /gh[ps]_[A-Za-z0-9_]{36,}/ },
        { name: 'OpenAI Key', regex: /sk-[A-Za-z0-9]{20,}/ },
        { name: 'Anthropic Key', regex: /sk-ant-[A-Za-z0-9-]{20,}/ },
        { name: 'Stripe Key', regex: /sk_(?:live|test)_[A-Za-z0-9]{24,}/ },
        { name: 'Private Key', regex: /-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/ },
        { name: 'Generic Secret', regex: /(?:password|secret|token|api_key|apikey)\s*[=:]\s*['"][^'"]{8,}['"]/i },
        { name: 'Database URL with password', regex: /(?:postgres|mysql|mongodb):\/\/[^:]+:[^@\s]+@/i },
        { name: 'JWT Token', regex: /eyJ[A-Za-z0-9-_]+\.eyJ[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+/ },
        { name: 'Slack Token', regex: /xox[bpas]-[A-Za-z0-9-]+/ },
        { name: 'Google API Key', regex: /AIza[A-Za-z0-9_-]{35}/ },
        { name: 'SendGrid Key', regex: /SG\.[A-Za-z0-9_-]{22}\.[A-Za-z0-9_-]{43}/ },
        { name: 'Twilio Key', regex: /SK[a-f0-9]{32}/ },
      ];

      const found = [];
      for (const p of patterns) {
        if (p.regex.test(content)) {
          found.push(p.name);
        }
      }

      if (found.length > 0) {
        console.error(`[Behemoth] 🔴 SECRET DETECTED in ${filePath}:`);
        found.forEach(s => console.error(`  → ${s}`));
        console.error('  Use environment variables instead. Add to .env (not committed).');
        console.log(JSON.stringify({ 
          decision: 'block', 
          reason: `Potential secrets detected: ${found.join(', ')}. Use environment variables.` 
        }));
        process.exit(2);
      }
    } catch (e) {
      // If we can't parse, let it through
    }
  });
}

main();
