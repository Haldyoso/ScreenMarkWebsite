# ScreenMark — official website

Single-page marketing site for **ScreenMark**, the portable Windows screen-annotation
app whose annotations stay fully editable. One conversion goal: download the portable ZIP.

The handoff bundle below still says "ScreenMarkPro" throughout — that was the working name
during design. The shipped product and this site are **ScreenMark**; the bundle is kept
verbatim as the original deliverable.

Built to the spec in
[`ScreenMark UX redesign/design_handoff_screenmarkpro_website/README.md`](<ScreenMark UX redesign/design_handoff_screenmarkpro_website/README.md>).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 ·
Framer Motion · Radix primitives (shadcn-style) · lucide-react.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Layout

```
app/          route, layout, metadata, JSON-LD, sitemap/robots/manifest, OG image
components/
  layout/     Navbar (sticky + mobile drawer), Footer, Logo
  sections/   Hero, Benefits, FeatureShowcase, HowItWorks, FeatureGrid,
              ComparisonTable, Gallery, Shortcuts, Faq, DownloadCta
  motion/     Reveal (IntersectionObserver fade-up)
  ui/         Button, Badge, Card, Kbd, Accordion, WindowFrame, Screenshot, Lightbox
hooks/        useMediaQuery, useLockBodyScroll
lib/          content.ts (all copy + data arrays), site.ts (release info), utils.ts
types/        shared content types
```

Everything is a Server Component except the interactive islands: `Navbar`,
`FeatureShowcase`, `Gallery`, `Lightbox` (dynamically imported) and the FAQ `Accordion`.

## Design tokens

All colors, radii, shadows, easings and fonts are `@theme` tokens in
[`app/globals.css`](app/globals.css) — no hard-coded hex outside that file. Dark is the
primary theme; the light token set is defined and applies when `<html data-theme="light">`.

The one mapping worth memorizing: the spec's `text.primary` / `text.secondary` /
`text.disabled` are the utilities `text-fg` / `text-fg-muted` / `text-fg-subtle`.

## Adding the real screenshots

Every screenshot is currently a **labeled placeholder** describing exactly what belongs
there. That description doubles as the `alt` text, so it lives in exactly one place.

To swap in a real capture:

1. Drop the image in `public/screenshots/`.
2. Set `src` on the matching entry in [`lib/content.ts`](lib/content.ts):

```ts
screenshot: {
  src: "/screenshots/freeze-mode.png",
  alt: "Frozen CAD viewport with an editable arrow selected …", // keep this accurate
}
```

`<Screenshot>` then renders it through `next/image` instead of the placeholder. Note that
image **optimization is off** (see Deployment) — export screenshots at the size they
render, roughly 1200 px wide, because the browser downloads exactly what you commit.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
lint → typecheck → `next build` → publish `out/` to GitHub Pages. Live at
**https://haldyoso.github.io/ScreenMarkWebsite/**.

Pages is a static file host with no Node process, which forces four things:

- `output: "export"` in [`next.config.ts`](next.config.ts). Every metadata route
  (`manifest`, `robots`, `sitemap`, the OG image) needs `export const dynamic =
  "force-static"` or the build fails on it — one at a time, so expect to hit them in turn.
- **`basePath`** — project sites are served from `/<repo>`, not the root. It lives in
  [`lib/site.ts`](lib/site.ts) so the config and the app share one value. Next rewrites
  `<Link>`, `next/image` and the build output automatically; it does *not* touch strings
  inside the manifest JSON body, which are prefixed by hand.
- **`images.unoptimized: true`** — the default loader resizes on request and there is no
  server to do it.
- **No security headers.** The `headers()` block was removed rather than left to be
  silently dropped: Pages sends a fixed header set and cannot add to it. Restore it if
  this ever moves to a host that runs Node.

The OG card is a route handler at `app/opengraph-image.png/` rather than Next's
`app/opengraph-image.tsx` convention, because that convention exports an *extensionless*
file — and Pages types files purely by extension, so scrapers would get
`application/octet-stream` and drop the card.

`robots.txt` is emitted at `/ScreenMarkWebsite/robots.txt`, which crawlers ignore; only a
root-domain one counts. It costs nothing and starts working the day this gets a real
domain.

## Before launch

- `lib/site.ts` — `repo` and `release.olderVersionsUrl` still point at bare
  `https://github.com`, and `release.downloadUrl` is `#`, so **the download button goes
  nowhere**. `sha256` is a placeholder too. The app repo has no published release yet.
- No `LICENSE` file, though the footer and the JSON-LD both claim MIT.
- Replace the remaining `#` hrefs in the footer (Documentation, Changelog, License).
- Real screenshots — all twelve slots are still placeholders.

## Accessibility & motion

One `h1`, ordered headings, semantic landmarks. The lightbox traps focus, restores it to
the card that opened it, and supports Esc and ←/→ (wrapping). Comparison-table status is
never color-only — every ✓/— carries a visually hidden "Yes"/"No". All motion honors
`prefers-reduced-motion`.

Scroll reveals are IntersectionObserver-driven, with the hidden state scoped to
`html[data-js="on"]` (set by an inline script before first paint). A Framer Motion
`initial` would instead ship `opacity: 0` in the server HTML, blanking the page for no-JS
clients and holding LCP until hydration.
