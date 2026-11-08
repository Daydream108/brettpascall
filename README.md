# Brett Pascall

Personal website for https://brettpascall.com.

## Approved design

The approved November 8, 2026 design is saved as the GitHub tag `design-baseline-2026-11-08`. Read [DESIGN_BASELINE.md](DESIGN_BASELINE.md) before future edits for the visual direction, approved content, file locations, deployment process, and restoration instructions.

## Deployment

The existing Cloudflare Worker `brettpascall` is connected to `Daydream108/brettpascall`, production branch `main`. Cloudflare runs `npx wrangler deploy`. The tracked `wrangler.jsonc` publishes only `public/`; no build step is needed.

Make changes in `public/`. Root HTML, CSS, JavaScript and portrait files mirror the deployed files for compatibility with the original repository layout. Keep those copies in sync.

Do not deploy the repository root: it includes editing scripts and archived content that are not part of the public website.

## Content

The homepage focuses on professional experience, Bookcase, creative-work profiles, and contact information. Unfinished projects and unconfirmed essays were removed from the public site. The original data is preserved in `content/archive/site-data-before-refresh.js` for reference and is not served.

The resume remains at `#/resume`. Previous writing routes lead to the published-work links when an essay is no longer available.

## Add writing

Run `node scripts/new-post.mjs "My New Post Title" Building`.

Edit the draft in `public/js/data.js`. New posts default to `published: false` and are not shown. Set `published: true` only when the essay is ready. Mirror the data file to `js/data.js`, then commit and push to deploy. Published posts automatically appear on the homepage and writing page.

The archived essays are not automatically republished.
