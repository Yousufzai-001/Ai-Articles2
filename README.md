# silent - Recent Stories (Ad-Ready Website)

## How to Host on GitHub Pages (2 Easy Methods)

### Method 1: Automatic via GitHub Actions (Recommended - 1 Click)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `silent-stories`).
2. Push or upload all these files to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. That's it! GitHub will automatically run the included `.github/workflows/deploy.yml` workflow, build your site, and provide you with your live URL:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

### Method 2: Direct Static Build Upload

1. Run `npm run build` on your computer.
2. It will create a `dist` folder.
3. You can deploy only the files inside `dist/` directly to your repository or `gh-pages` branch, or drag and drop them to GitHub.
