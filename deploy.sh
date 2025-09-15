#!/bin/bash

# Build the project
npm run build

# Navigate to the build output directory
cd dist

# Initialize git repo in dist folder
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Force push to gh-pages branch
git push -f git@github.com:nik01x/websitehosttemp.git main:gh-pages

cd ..
