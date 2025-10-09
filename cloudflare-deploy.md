# Cloudflare Deployment Guide (Pages & Workers)

This project is a Vite + React app. The recommended hosting is Cloudflare Pages (static hosting with optional Functions). You can also deploy the built `dist/` via Cloudflare Workers.

Key project details:
- Build command: `npm run build` (from `package.json`)
- Dev server: Vite
- Output directory: `dist/` (default Vite)
- Base path: `/` for all targets except GitHub Pages (`vite.config.ts` uses `VITE_DEPLOY_TARGET=github` to change base).

---

## 1) Prerequisites
- Cloudflare account: https://dash.cloudflare.com/
- Node.js 18+ (Cloudflare recommends Node 18 or 20)
- GitHub repo (optional but recommended for Pages CI/CD)
- Wrangler CLI (for CLI deploy flows):
  ```bash
  npm install -g wrangler
  wrangler --version
  ```

---

## 2) Deploy with Cloudflare Pages (Recommended)

Cloudflare Pages is ideal for static SPAs built by Vite. It natively supports SPA fallback routing and integrates easily with GitHub.

### Option A: Connect GitHub Repository (CI/CD)
1. Push this repository to GitHub if not already.
2. In Cloudflare Dashboard → Pages → Create a project → Connect to Git.
3. Select your repository.
4. Build settings:
   - Framework preset: Vite (or “None” with manual settings)
   - Build command: `npm run build` (or just `vite build`)
   - Build output directory: `dist`
   - Root directory: repository root (unless you changed structure)
5. Environment variables (optional but recommended):
   - `NODE_VERSION = 20` (or 18)
6. Start first deploy. Subsequent commits to the default branch will auto-deploy.

### Option B: Deploy with Wrangler (no Git integration)
1. Install dependencies and build locally:
   ```bash
   npm ci
   npm run build
   ```
2. Create a Pages project (first time only):
   ```bash
   wrangler pages project create duniya-rides-wanderlust-trails
   # choose Production/Preview branches as desired, or leave defaults
   ```
3. Deploy the `dist/` directory:
   ```bash
   wrangler pages deploy dist --project-name=duniya-rides-wanderlust-trails
   ```
4. Wrangler will output the Preview and Production URLs. Promote to Production when ready:
   ```bash
   wrangler pages deploy dist --project-name=duniya-rides-wanderlust-trails --branch=main
   ```

### SPA Routing (React Router)
This app uses client-side routing. Ensure SPA fallback so deep links work:
- Create `_redirects` in `public/` (so it gets copied into `dist/`):
  ```
  /*  /index.html  200
  ```
- Cloudflare Pages honors this file and will serve `index.html` for unknown paths, letting the SPA handle them.

### Custom Domains & HTTPS
- In Cloudflare Dashboard → Pages → Your Project → Custom domains → Add custom domain.
- Follow DNS and SSL steps (automatic if domain is on Cloudflare).

### Cache, Headers, and Security
- Add `_headers` file in `public/` for HTTP headers, for example:
  ```
  /*
    X-Frame-Options: DENY
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
  /assets/*
    Cache-Control: public, max-age=31536000, immutable
  ```
- Use hashed asset filenames (Vite default) for long-term caching.

---

## 3) Deploy with Cloudflare Workers (Static Assets)

If you prefer a single Worker serving static assets, you can deploy the built `dist/` directly via Wrangler. This is good for simple static hosting without Pages.

### Quick Deploy (no code needed)
1. Build locally:
   ```bash
   npm ci
   npm run build
   ```
2. Deploy assets to Workers:
   ```bash
   wrangler deploy --assets dist
   ```
   Wrangler will create a Worker that serves files from `dist/`.

### Using `wrangler.toml` (more control)
Create `wrangler.toml` at the repo root:
```toml
name = "duniya-rides-wanderlust-trails"
main = "worker.js" # If you add custom logic; not required for pure --assets deploys
compatibility_date = "2024-10-01"

[assets]
# Serve files from the Vite build directory
directory = "dist"
# optional:
# binding = "ASSETS"
# not_found_handling = "single-page-app"
```

If you need SPA routing from Workers without Pages, either:
- Use `--assets dist` (Wrangler provides SPA mode when `not_found_handling = "single-page-app"` is set in `wrangler.toml`), or
- Write a minimal `worker.js` that returns `index.html` for non-asset paths.

Example `worker.js` SPA fallback:
```js
export default {
  async fetch(request, env, ctx) {
    // Try asset first
    const res = await env.ASSETS.fetch(request);
    if (res.status !== 404) return res;

    // Fallback to index.html for SPA routes
    const url = new URL(request.url);
    const indexUrl = new URL("/index.html", url.origin);
    return env.ASSETS.fetch(new Request(indexUrl, request));
  }
}
```
Then deploy:
```bash
wrangler deploy
```

---

## 4) Environment Configuration Notes
- Vite base path:
  - In `vite.config.ts`, `base` is `/` by default and switches only for GitHub (`VITE_DEPLOY_TARGET=github`). No change needed for Cloudflare.
- Environment variables for the build:
  - Add `VITE_*` variables in Cloudflare Pages “Environment variables” UI or `.env` files for local builds.
- Node version:
  - Set `NODE_VERSION` to `20` (or `18`) for consistency with your local dev.

---

## 5) Local Verification
- Preview build locally before deploying:
  ```bash
  npm run build
  npm run preview
  # or with Vite directly
  vite preview
  ```
- Open the printed localhost URL and test routes (including deep links).

---

## 6) Troubleshooting
- Blank page or 404 on deep links:
  - Ensure `public/_redirects` contains `/*  /index.html  200` (Pages) or SPA fallback handling is configured in `wrangler.toml`/`worker.js` (Workers).
- Missing styles/assets:
  - Confirm `dist/` is the output and deployment path, and that the base path is `/` (it is for Cloudflare).
- Build failures on Pages:
  - Check Node version and set `NODE_VERSION`.
  - Inspect build logs in the Pages dashboard.

---

## 7) Summary
- For most cases, use Cloudflare Pages:
  - Build command: `npm run build`
  - Output directory: `dist`
  - Add `public/_redirects` for SPA routing
  - Optional: `_headers` for caching/security
- For Workers, deploy `dist/` via `wrangler deploy --assets dist`, and configure SPA fallback if needed.
