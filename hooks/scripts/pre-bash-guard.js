#!/usr/bin/env node

/**
 * PreToolUse (Bash) hook — Guards against dangerous shell commands.
 * Inspired by ECC's security hooks and Dippy's AST-based approach.
 */

const readline = require('readline');

function main() {
  let input = '';
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', chunk => { input += chunk; });
  process.stdin.on('end', () => {
    try {
      const data = JSON.parse(input);
      const command = data.tool_input?.command || '';

      const blocked = [
        { pattern: /rm\s+-rf\s+[\/~]/, msg: 'Blocked: recursive delete on root or home directory' },
        { pattern: />\s*\/dev\/sd[a-z]/, msg: 'Blocked: writing directly to disk device' },
        { pattern: /mkfs\./, msg: 'Blocked: filesystem format command' },
        { pattern: /:(){ :\|:& };:/, msg: 'Blocked: fork bomb' },
        { pattern: /curl.*\|\s*(bash|sh|zsh)/, msg: 'Blocked: piping curl to shell — review the script first' },
        { pattern: /wget.*\|\s*(bash|sh|zsh)/, msg: 'Blocked: piping wget to shell — review the script first' },
      ];

      for (const rule of blocked) {
        if (rule.pattern.test(command)) {
          console.error(`[Behemoth] 🛑 ${rule.msg}`);
          console.error(`  Command: ${command}`);
          // Output deny decision
          console.log(JSON.stringify({ decision: 'block', reason: rule.msg }));
          process.exit(2);
        }
      }

      // Warn but don't block
      const warned = [
        { pattern: /git\s+push\s+.*--force/, msg: 'Force push detected — are you sure?' },
        { pattern: /npm\s+publish/, msg: 'Publishing to npm — verify version and contents' },
        { pattern: /docker\s+system\s+prune/, msg: 'Docker prune — this removes all unused data' },
      ];

      for (const rule of warned) {
        if (rule.pattern.test(command)) {
          console.error(`[Behemoth] ⚠️  ${rule.msg}`);
        }
      }

    } catch (e) {
      // If we can't parse input, let it through
    }
  });
}

main();
