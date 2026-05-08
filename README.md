# Brett Pascall

Static personal site for `brettpascall.com`.

This repository is set up for the same workflow as Bookcase: push to GitHub, then Cloudflare Pages deploys automatically from the GitHub repository.

## Cloudflare Pages Settings

Use one Cloudflare Pages project connected to `Daydream108/brettpascall`.

| Setting | Value |
| --- | --- |
| Framework preset | `None` |
| Production branch | `main` |
| Build command | leave blank |
| Build output directory | `public` |
| Root directory | `/` |

The deployable site files are committed in `public/`.

## Create A Blog Post

Run this from the repo root:

```powershell
node scripts/new-post.mjs "My New Post Title" Building
```

Then edit the new draft at the top of `public/js/data.js`:

- `excerpt` is the summary shown on the Writing page.
- `body` is an array of paragraphs.
- `category` should match one of the categories in the same file.
- `readTime` is the displayed reading time in minutes.

After editing:

```powershell
git add public/js/data.js
git commit -m "add new blog post"
git push
```

Cloudflare Pages will deploy from GitHub automatically.

## Resume Page

The resume is rendered as a static HTML page at `#/resume`. The PDF is not published in `public/`, so visitors see the web page instead of a download link.

## Domain

Attach `brettpascall.com` to the Cloudflare Pages project as a custom domain.

Recommended:

1. Add `brettpascall.com` as the primary custom domain.
2. Add `www.brettpascall.com` as a secondary custom domain or redirect it to the root domain.

## What To Delete In Cloudflare

To avoid mixed deployments, keep only one Cloudflare Pages project for this site.

Delete:

- The manual Worker named `brettpascall` that uses `brettpascall.com`.
- Any extra duplicate Pages project that is not connected to `Daydream108/brettpascall`.

Keep:

- One Cloudflare Pages project connected to `Daydream108/brettpascall`.

## Comments

Comments and reactions are not included because this is static-only. Adding visitor comments later would require a backend service, a third-party embed, or Cloudflare storage.
