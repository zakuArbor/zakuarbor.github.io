#!/bin/bash

BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}Starting Jekyll Build...${NC}"

jekyll build --destination _site

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Jekyll build failed. Check your Gemfile.${NC}"
    exit 1
fi

cd _site || exit 1

dir=`pwd`
echo -e "pwd: ${dir}"

echo -e "${BLUE}Creating .domains ...${NC}"

echo "randombits.ca" > .domains
echo "www.randombits.ca" >> .domains

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo -e "${RED}❌ _site is not linked to Git. Run the reset commands above.${NC}"
    exit 1
fi

echo -e "${BLUE}🔄 Syncing and Pushing...${NC}"
git add -f .
git add -f .domains
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes."
git push -f origin pages

cd ..

echo -e "${GREEN}✅ GitHub Pages updated!${NC}"

#neocities push _site

