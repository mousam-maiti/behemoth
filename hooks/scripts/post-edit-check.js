#!/usr/bin/env node

/**
 * PostToolUse (Edit) hook — Checks for common issues after file edits.
 * Inspired by ECC's TypeScript quality hooks.
 */

const fs = require('fs');
const path = require('path');

function main() {
  const filePath = process.argv[2];
  if (!filePath || !fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');
  const warnings = [];

  // Check for console.log left behind
  const consoleMatches = content.match(/console\.(log|debug|info)\(/g);
  if (consoleMatches && consoleMatches.length > 0) {
    warnings.push(`⚠️  ${consoleMatches.length} console.log statement(s) found — remove before committing`);
  }

  // Check for TODO/FIXME/HACK comments
  const todoMatches = content.match(/\/\/\s*(TODO|FIXME|HACK|XXX):/gi);
  if (todoMatches && todoMatches.length > 0) {
    warnings.push(`📝 ${todoMatches.length} TODO/FIXME comment(s) — track or resolve`);
  }

  // Check for 'any' type in TypeScript
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    const anyMatches = content.match(/:\s*any\b/g);
    if (anyMatches && anyMatches.length > 0) {
      warnings.push(`🔸 ${anyMatches.length} 'any' type(s) — consider using specific types`);
    }
  }

  // Check for hardcoded secrets patterns
  const secretPatterns = /(?:sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{36}|AKIA[A-Z0-9]{16}|password\s*=\s*['"][^'"]+['"])/g;
  if (secretPatterns.test(content)) {
    warnings.push(`🔴 POSSIBLE SECRET DETECTED — review immediately`);
  }

  // Check file length
  const lineCount = content.split('\n').length;
  if (lineCount > 300) {
    warnings.push(`📏 File is ${lineCount} lines — consider splitting (recommended: <300)`);
  }

  if (warnings.length > 0) {
    console.error(`[Behemoth] Post-edit checks for ${path.basename(filePath)}:`);
    warnings.forEach(w => console.error(`  ${w}`));
  }
}

main();
