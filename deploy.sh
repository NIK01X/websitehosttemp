#!/bin/bash

# Build the project
npm run build

# Create a temporary directory for deployment
rm -rf temp-deploy
mkdir temp-deploy
cd temp-deploy

# Initialize git repo
git init
git remote add origin https://github.com/nik01x/websitehosttemp.git

# Create the websitehosttemp directory structure
mkdir websitehosttemp

# Copy all built files to the websitehosttemp directory
cp -r ../dist/* websitehosttemp/

# Add all files and commit
git add -A
git commit -m 'Deploy to GitHub Pages'

# Set the branch name to master and push to gh-pages
git branch -M master
git push -f origin master:gh-pages

# Clean up
cd ..
rm -rf temp-deploy

echo "Deployment complete! Your site should be available at: https://nik01x.github.io/websitehosttemp/"
