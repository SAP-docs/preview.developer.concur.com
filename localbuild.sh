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

# Step 3: Place CNAME
echo "Setting custom domain name"
echo "doctest.frdy.io" > _site/CNAME # Update with preview.developer.concur.com when going live
