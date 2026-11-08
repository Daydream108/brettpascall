# Approved personal-site design

Saved on November 8, 2026 as `design-baseline-2026-11-08`.

This is the approved design for **brettpascall.com**. Future edits should start here and preserve its visual direction unless Brett explicitly requests a redesign.

## What to preserve

- Cobalt blue (`#304ad8`) with a cool blue-gray page background.
- Large sans-serif name, lime accents, and the supplied real portrait.
- Framed, slightly rotated portrait with layered shadows.
- Overlapping cream About panel, pale blue experience section, green Bookcase feature, dark navy creative section, warm hobby tiles, and blue contact panel.
- The real Bookcase screenshot, existing external links, and responsive phone/tablet layouts.
- Current role: **Enterprise Customer Success Manager at Optimizely**.
- Approved professional bio referencing Fortune 500 experience and the creative section titled **A creative point of view.**
- Interview names: Vincent D’Onofrio, Brian K. Vaughan, and Seth Rogen.

Do not reintroduce SafeHaven Ventures, Verdict, placeholder interviews, unconfirmed essays, or the claim that Brett has a book in progress. Bookcase remains the featured personal project.

## Where to edit

| File | Purpose |
| --- | --- |
| `public/js/site.js` | Homepage copy, sections, navigation, and résumé |
| `public/js/data.js` | Projects and explicitly published writing |
| `public/styles.css` | Base layout and responsive styles |
| `public/depth.css` | Approved layered visual treatment |
| `public/index.html` | Page metadata and asset version references |
| `public/assets/` | Portrait and Bookcase screenshot |
| `wrangler.jsonc` | Cloudflare deployment; publishes only `public/` |

Mirror changed site files to the matching root `js/`, CSS, HTML, and `assets/` copies. For text-only requests, preserve CSS, layout, images, and links. Update the relevant asset query version in both HTML files so visitors receive changes promptly.

## How publication works

The repository is `https://github.com/Daydream108/brettpascall`.

The working branch used for this redesign is `codex/personal-site-refresh`. The reviewed commits were pushed to the remote production branch with `git push origin HEAD:main`. Cloudflare's existing GitHub connection then ran `npx wrangler deploy` for Worker `brettpascall`, serving `public/` at `https://brettpascall.com`.

Before future pushes, fetch the remote and check for newer changes. Stage only intended website files; this workspace also contains unrelated personal files. Verify JavaScript syntax and relevant responsive layouts, then verify the result on the live domain.

## Return to this version

The GitHub tag `design-baseline-2026-11-08` preserves the complete approved source and assets. The last content-change commit before these notes was `d3d0738`.

To inspect or develop from the saved version without disturbing later work, create a separate checkout:

```powershell
git fetch origin --tags
git worktree add ../brettpascall-baseline -b codex/from-approved-design design-baseline-2026-11-08
```

To restore production later, prepare a normal restoration commit against the current `main`, review it, and deploy through the same GitHub connection. Do not force-push or reset away subsequent history.
