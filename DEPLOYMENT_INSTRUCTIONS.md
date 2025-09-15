# Manual Deployment Instructions

## Option 1: Using Git Commands (if you have push access)

```bash
# 1. Build the project
npm run build

# 2. Clone your repo to a temporary directory
git clone https://github.com/nik01x/websitehosttemp.git temp-gh-pages
cd temp-gh-pages

# 3. Switch to gh-pages branch (create if it doesn't exist)
git checkout -b gh-pages

# 4. Clear existing content
rm -rf *

# 5. Create the websitehosttemp directory
mkdir websitehosttemp

# 6. Copy built files
cp -r ../dist/* websitehosttemp/

# 7. Commit and push
git add .
git commit -m "Deploy website to GitHub Pages"
git push origin gh-pages

# 8. Clean up
cd ..
rm -rf temp-gh-pages
```

## Option 2: Manual Upload via GitHub Web Interface

1. Go to your GitHub repository: https://github.com/nik01x/websitehosttemp
2. Switch to `gh-pages` branch (create if needed)
3. Delete all existing files
4. Create folder: `websitehosttemp`
5. Upload all files from your local `dist/` folder into `websitehosttemp/`
6. Go to Settings → Pages
7. Set source to `gh-pages` branch, `/ (root)` folder

## Your website will be available at:

https://nik01x.github.io/websitehosttemp/

## Files to upload from dist/ folder:

- index.html
- assets/ (entire folder)
- images/ (entire folder)
- whitelogo.svg
- mask.svg
- vite.svg

All these should go inside the `websitehosttemp/` folder on GitHub.
