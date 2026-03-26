#!/usr/bin/env node

/**
 * Stop hook — Suggests saving a checkpoint when Claude finishes a task.
 * Inspired by ECC's strategic-compact and Claude-Mem's session capture.
 */

const fs = require('fs');
const path = require('path');

function findProjectRoot() {
  let dir = process.cwd();
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, '.behemoth'))) return dir;
    if (fs.existsSync(path.join(dir, '.git'))) return dir;
    dir = path.dirname(dir);
  }
  return process.cwd();
}

function main() {
  const root = findProjectRoot();
  const behemothDir = path.join(root, '.behemoth');
  const sessionsDir = path.join(behemothDir, 'sessions');

  if (!fs.existsSync(sessionsDir)) return;

  // Check if there's been meaningful work since last checkpoint
  const sessions = fs.readdirSync(sessionsDir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse();

  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, 16);

  if (sessions.length > 0) {
    // Extract date from most recent session filename
    const lastSession = sessions[0];
    const lastDate = lastSession.slice(0, 10);
    const today = now.toISOString().slice(0, 10);

    // Only suggest if we haven't checkpointed today
    if (lastDate === today) return;
  }

  console.error('[Behemoth] 💡 Consider running /checkpoint to save session state before ending.');
}

main();
