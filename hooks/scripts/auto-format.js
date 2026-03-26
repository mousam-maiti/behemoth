#!/usr/bin/env node

/**
 * PostToolUse (Edit) hook — Auto-format files after edits.
 * Runs Prettier and ESLint fix if available.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function main() {
  const filePath = process.argv[2];
  if (!filePath || !fs.existsSync(filePath)) return;

  const ext = path.extname(filePath);
  const formattable = ['.ts', '.tsx', '.js', '.jsx', '.css', '.json', '.md', '.html', '.vue', '.svelte'];
  if (!formattable.includes(ext)) return;

  // Try Prettier
  try {
    const prettierBin = fs.existsSync('node_modules/.bin/prettier') 
      ? 'node_modules/.bin/prettier' 
      : 'npx prettier';
    execSync(`${prettierBin} --write "${filePath}" 2>/dev/null`, { 
      stdio: 'pipe', 
      timeout: 5000 
    });
  } catch (e) {
    // Prettier not available — skip silently
  }

  // Try ESLint fix (only for JS/TS)
  const lintable = ['.ts', '.tsx', '.js', '.jsx'];
  if (lintable.includes(ext)) {
    try {
      const eslintBin = fs.existsSync('node_modules/.bin/eslint') 
        ? 'node_modules/.bin/eslint' 
        : 'npx eslint';
      execSync(`${eslintBin} --fix "${filePath}" 2>/dev/null`, { 
        stdio: 'pipe', 
        timeout: 10000 
      });
    } catch (e) {
      // ESLint not available or has errors — skip
    }
  }
}

main();
