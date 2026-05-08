# Brett Pascall

Static personal site for `brettpascall.com`.

This repo intentionally has no backend, no database, no account system, and no required build step. It is meant to deploy on Cloudflare Pages from the `main` branch.

## Deploy With Cloudflare Pages

1. In Cloudflare, go to `Workers & Pages`.
2. Select `Create application`.
3. Select the `Pages` tab.
4. Select `Import an existing Git repository`.
5. Connect GitHub if Cloudflare asks for access.
6. Choose `Daydream108/brettpascall`.
7. Use these build settings:

| Setting | Value |
| --- | --- |
| Project name | `brettpascall` |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `/` |
| Root directory | `/` |

8. Select `Save and Deploy`.

Cloudflare will deploy a temporary `*.pages.dev` URL first. After that works, add the real domain.

## Connect brettpascall.com

1. Open the new Cloudflare Pages project.
2. Go to `Custom domains`.
3. Select `Set up a domain`.
4. Enter `brettpascall.com`.
5. Follow Cloudflare's confirmation flow.

If `brettpascall.com` is already managed in this same Cloudflare account, Cloudflare should add the DNS record automatically. If it asks you to create a record, use the record Cloudflare shows in the Pages custom-domain flow rather than manually guessing one.

Optional but recommended:

1. Add another custom domain for `www.brettpascall.com`.
2. Add a redirect rule from `www.brettpascall.com/*` to `https://brettpascall.com/$1`, or make `www` the secondary domain.

## Why Not GitHub Pages?

The GitHub repository is private. GitHub Pages requires a public repo on GitHub Free, but Cloudflare Pages can deploy from a private GitHub repository after you grant Cloudflare access to it.

## Comments

Comments and reactions are not included because this is a static-only site. Adding visitor comments later would require a backend service, a third-party embed, or Cloudflare Workers/Pages Functions.
