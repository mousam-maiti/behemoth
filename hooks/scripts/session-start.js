#!/usr/bin/env node

/**
 * SessionStart hook — Loads context from .behemoth/ on session start.
 * Inspired by Claude-Mem's progressive disclosure approach.
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

function loadRecentSessions(behemothDir, count = 2) {
  const sessionsDir = path.join(behemothDir, 'sessions');
  if (!fs.existsSync(sessionsDir)) return [];

  return fs.readdirSync(sessionsDir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse()
    .slice(0, count)
    .map(f => {
      const content = fs.readFileSync(path.join(sessionsDir, f), 'utf-8');
      // Extract just the Context and In Progress sections for Layer 1
      const contextMatch = content.match(/## Context\n([\s\S]*?)(?=\n##|$)/);
      const progressMatch = content.match(/## In Progress\n([\s\S]*?)(?=\n##|$)/);
      return {
        file: f,
        context: contextMatch ? contextMatch[1].trim() : '',
        inProgress: progressMatch ? progressMatch[1].trim() : ''
      };
    });
}

function loadActivePlan(behemothDir) {
  const plansDir = path.join(behemothDir, 'plans');
  if (!fs.existsSync(plansDir)) return null;

  const plans = fs.readdirSync(plansDir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse();

  if (plans.length === 0) return null;

  const content = fs.readFileSync(path.join(plansDir, plans[0]), 'utf-8');
  const completed = (content.match(/✅/g) || []).length;
  const total = (content.match(/## Task \d+/g) || []).length;
  const titleMatch = content.match(/# Implementation Plan: (.+)/);

  return {
    file: plans[0],
    title: titleMatch ? titleMatch[1] : plans[0],
    completed,
    total
  };
}

function main() {
  const root = findProjectRoot();
  const behemothDir = path.join(root, '.behemoth');

  if (!fs.existsSync(behemothDir)) {
    // First time — create .behemoth structure
    const dirs = ['sessions', 'plans', 'designs', 'decisions', 'design-system'];
    dirs.forEach(d => fs.mkdirSync(path.join(behemothDir, d), { recursive: true }));
    console.error('[Behemoth] Initialized .behemoth/ directory structure');
    return;
  }

  const output = [];

  // Load recent sessions (Layer 1 — brief)
  const sessions = loadRecentSessions(behemothDir);
  if (sessions.length > 0) {
    const latest = sessions[0];
    if (latest.context) output.push(`📝 Last session: ${latest.context}`);
    if (latest.inProgress) output.push(`📌 Continue: ${latest.inProgress}`);
  }

  // Load active plan
  const plan = loadActivePlan(behemothDir);
  if (plan) {
    output.push(`📋 Plan: ${plan.title} (${plan.completed}/${plan.total} tasks done)`);
  }

  // Check design system
  const designPath = path.join(behemothDir, 'design-system', 'MASTER.md');
  if (fs.existsSync(designPath)) {
    output.push(`🎨 Design system loaded from .behemoth/design-system/MASTER.md`);
  }

  // Check learnings
  const learningsPath = path.join(behemothDir, 'learnings.md');
  if (fs.existsSync(learningsPath)) {
    const learnings = fs.readFileSync(learningsPath, 'utf-8');
    const count = (learnings.match(/^## /gm) || []).length;
    if (count > 0) {
      output.push(`💡 ${count} project-specific patterns loaded from .behemoth/learnings.md`);
    }
  }

  if (output.length > 0) {
    console.error('[Behemoth] Session context loaded:');
    output.forEach(line => console.error(`  ${line}`));
  }
}

main();
