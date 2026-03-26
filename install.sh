#!/usr/bin/env bash
set -euo pipefail

# Behemoth — Manual Installation Script
# Usage: ./install.sh [--user | --project] [languages...]
#   --user      Install to ~/.claude/ (applies to all projects)
#   --project   Install to .claude/ in current directory (project-level)
#   languages:  typescript python golang swift (default: all)
#
# Examples:
#   ./install.sh                          # User-level, all languages
#   ./install.sh --project typescript     # Project-level, TypeScript only
#   ./install.sh --user python golang     # User-level, Python + Go

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

MODE="--user"
LANGUAGES=()

# Parse args
for arg in "$@"; do
  case "$arg" in
    --user|--project) MODE="$arg" ;;
    *) LANGUAGES+=("$arg") ;;
  esac
done

# Default to all languages if none specified
if [ ${#LANGUAGES[@]} -eq 0 ]; then
  LANGUAGES=(typescript python golang swift)
fi

case "$MODE" in
  --user)
    TARGET="$HOME/.claude"
    echo "📦 Installing Behemoth to ~/.claude/ (user-level)"
    ;;
  --project)
    TARGET=".claude"
    echo "📦 Installing Behemoth to .claude/ (project-level)"
    ;;
esac

# Create directories
mkdir -p "$TARGET/agents"
mkdir -p "$TARGET/commands"
mkdir -p "$TARGET/rules"
mkdir -p "$TARGET/skills"

# Copy agents
echo "  → Copying 8 agents..."
cp "$SCRIPT_DIR/agents/"*.md "$TARGET/agents/"

# Copy commands
echo "  → Copying 20 commands..."
cp "$SCRIPT_DIR/commands/"*.md "$TARGET/commands/"

# Copy rules (common always)
echo "  → Copying common rules..."
cp -r "$SCRIPT_DIR/rules/common/"* "$TARGET/rules/"

# Copy language-specific rules
for lang in "${LANGUAGES[@]}"; do
  if [ -d "$SCRIPT_DIR/rules/$lang" ]; then
    echo "  → Copying $lang rules..."
    cp -r "$SCRIPT_DIR/rules/$lang/"* "$TARGET/rules/"
  else
    echo "  ⚠️  No rules found for $lang (skipping)"
  fi
done

# Copy skills
echo "  → Copying 18 skills..."
cp -r "$SCRIPT_DIR/skills/"* "$TARGET/skills/"

# Initialize .behemoth directory in current project
if [ ! -d ".behemoth" ]; then
  echo "  → Initializing .behemoth/ directory..."
  mkdir -p .behemoth/{sessions,plans,designs,decisions,design-system}
  echo "    Created: .behemoth/sessions/, plans/, designs/, decisions/, design-system/"
fi

# Remind about hooks
echo ""
echo "✅ Behemoth installed successfully!"
echo "   Languages: ${LANGUAGES[*]}"
echo ""
echo "📋 Next steps:"
echo "  1. Add hooks to your settings.json:"
echo "     Copy the contents of hooks/hooks.json into ~/.claude/settings.json"
echo ""
echo "  2. Add to your project's .gitignore:"
echo "     .behemoth/sessions/"
echo ""
echo "  3. (Optional) Copy MCP configs:"
echo "     Copy desired servers from mcp-configs/mcp-servers.json to ~/.claude.json"
echo ""
echo "  4. Start using Behemoth:"
echo "     /prime                              # Load project context"
echo "     /plan \"Your feature description\"    # Plan a feature"
echo "     /tdd                                # Test-driven development"
echo "     /design \"Your product description\"  # Generate design system"
echo "     /status                             # Project dashboard"
echo ""
echo "  5. For plugin install (recommended instead of manual):"
echo "     /plugin marketplace add mousam-maiti/behemoth"
echo "     /plugin install behemoth@behemoth"
