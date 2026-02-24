#!/bin/bash

# Configuration
BRANCH="pages"
TARGET_DIR="_site"
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}Starting deployment to $BRANCH...${NC}"

# 1. Enter the worktree
cd "$TARGET_DIR" || { echo -e "${RED}❌ Error: $TARGET_DIR directory not found. Did you run the setup?${NC}"; exit 1; }

# 2. Sync with remote first (Prevents "rejected" pushes)
echo -e "${BLUE}Syncing $BRANCH with remote...${NC}"
git pull origin "$BRANCH" --rebase

# 3. Add, Commit, and Push
echo -e "${BLUE}Committing changes...${NC}"
git add -A
# Using '|| true' so the script doesn't crash if there are no changes to commit
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes to commit."

echo -e "${BLUE}Pushing to GitHub...${NC}"
git push origin "$BRANCH"

# 4. Return to main project root
cd ..

echo -e "${GREEN}✅ Deployment to GIt Page Complete!${NC}"

neocities push _site

echo -e "${GREEN}✅ Deployment to Neocities Complete!${NC}"
