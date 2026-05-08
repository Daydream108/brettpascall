# Brett Pascall

Static personal site for `brettpascall.com`, deployed as a Cloudflare Worker with Workers Static Assets.

This repo intentionally has no backend, no database, and no account system. The Worker is only being used as the static site host/origin.

## Deploy

The public assets are copied into `dist/`, which is ignored by Git. Wrangler deploys the `dist/` directory using `wrangler.jsonc`.

```powershell
New-Item -ItemType Directory -Force dist,dist\js,dist\assets | Out-Null
Copy-Item -LiteralPath index.html,styles.css,robots.txt,sitemap.xml -Destination dist -Force
Copy-Item -LiteralPath js\data.js,js\site.js -Destination dist\js -Force
Copy-Item -LiteralPath assets\brett-headshot.jpg,assets\Brett-Pascall-Resume-2026.pdf -Destination dist\assets -Force
npx.cmd wrangler deploy
```

The Worker config declares:

```jsonc
{
  "name": "brettpascall",
  "compatibility_date": "2026-05-08",
  "routes": [
    {
      "pattern": "brettpascall.com",
      "custom_domain": true
    }
  ],
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

## Domain

`brettpascall.com` is attached as a Worker custom domain. Cloudflare creates the needed Worker DNS record and certificate for the hostname.

If a local browser still shows `DNS_PROBE_FINISHED_NXDOMAIN`, the local resolver is stale. Public resolvers may already see the domain before the local router does.

Useful checks:

```powershell
nslookup brettpascall.com 1.1.1.1
nslookup brettpascall.com 8.8.8.8
```

## Comments

Comments and reactions are not included because this is a static-only site. Adding visitor comments later would require a backend service, a third-party embed, or Cloudflare Workers storage.
