# MINA Consulting & Engineering

A small, static Astro website. No client-side JavaScript, forms, accounts, analytics, cookies, external fonts or embeds. Company copy, logo and regional artwork come from the supplied PDF. The public email is info@mina-consulting.com. Two additional photos are locally hosted under the Pexels licence; see `docs/image-credits.md`.

## Local development

Use Node 22.12+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

The Astro development server listens on port 8000. Alternatively, serve the generated production site with Python:

```sh
npm run build
python3 -m http.server 8000 --bind 0.0.0.0 --directory dist
```

Python serves a build snapshot; rebuild after changes. Do not run both servers on the same port. Only `dist` is served, so the original PDF and repository files stay out of the preview.

## Verification

```sh
npm run check
npm run build
```

## Editing

- `src/pages/index.astro`: homepage copy and services.
- `src/styles/global.css`: responsive design and styles.
- `src/layouts/Layout.astro`: shared navigation, metadata and footer.
- `src/pages/privacy.astro` and `src/pages/legal.astro`: legal information.
- `public/images/region.webp`: regional illustration extracted from page 9 of the profile.

## GitHub Pages deployment

`.github/workflows/deploy.yml` validates, builds and publishes on pushes to `main`. Select **GitHub Actions** under repository **Settings → Pages** before the first deployment. The workflow reads the site origin and repository path from GitHub Pages, so no username or repository name is hardcoded.

Internal links and assets use `src/lib/paths.ts`. Local builds default to `/`, and deployment builds receive `SITE_URL` and `BASE_PATH` from the workflow.

The original PDF is intentionally excluded from Git because it contains personal contact details removed from the website. All assets needed to build the site are in `public/`.

To reproduce a repository-path build locally:

```sh
SITE_URL=https://example.github.io BASE_PATH=/mina-consulting npm run build
```

Run `npm run build` again to restore the ordinary root-path Python preview.

## Custom domain later

Verify your domain with GitHub, add it in repository Pages settings, configure DNS and enable HTTPS. The workflow reads the updated Pages origin and base path automatically; rerun it after changing the domain. Review `docs/launch-checklist.md` when finalising the production site.

References: https://docs.astro.build/en/guides/deploy/github/ and https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
