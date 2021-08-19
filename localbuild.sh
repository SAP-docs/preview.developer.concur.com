#!/bin/bash
#
# Local build script
set -euo pipefail

# Step 1: Clean environment for build
echo "Cleaning build artifact directories..."
set +e
rm -rf _site
set -e
mkdir _site

# Step 2: Jekyll build to resolve "{ % include }" directives
echo "Compiling static files with JEKYLL"
bundle exec jekyll build
