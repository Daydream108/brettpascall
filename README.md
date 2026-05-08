# Brett Pascall

Static personal site for `brettpascall.com`.

This repo intentionally has no backend, no build step, no database, and no account system. GitHub Pages can serve it directly from the repository root.

## Deploy With GitHub Pages

1. Push this repository to `Daydream108/brettpascall`.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Set branch to `main` and folder to `/root`.
5. Confirm the custom domain is `brettpascall.com`.
6. Wait for GitHub to issue the certificate, then enable `Enforce HTTPS`.

The `CNAME` file is already set to:

```txt
brettpascall.com
```

## Cloudflare DNS For GitHub Pages

In Cloudflare, use these records for the apex domain:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |

Optional IPv6 records:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 | DNS only |
| AAAA | @ | 2606:50c0:8001::153 | DNS only |
| AAAA | @ | 2606:50c0:8002::153 | DNS only |
| AAAA | @ | 2606:50c0:8003::153 | DNS only |

For `www`:

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| CNAME | www | Daydream108.github.io | DNS only |

Keep records DNS only while GitHub provisions HTTPS. After everything works, Cloudflare proxying is optional, but this site does not need it.

## Cloudflare Pages Alternative

You do not need a Worker for this site.

If you prefer Cloudflare Pages instead of GitHub Pages:

1. Cloudflare dashboard -> `Workers & Pages` -> `Create application` -> `Pages`.
2. Connect the `Daydream108/brettpascall` GitHub repo.
3. Use no build command and `/` as the output directory.
4. Add `brettpascall.com` under the Pages project's custom domains.

That route is also static-only. Workers would only be useful later for server-side features like comments, forms, auth, or private APIs.
