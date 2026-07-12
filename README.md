# ScreenMarkPro — official website

Single-page marketing site for **ScreenMarkPro**, the portable Windows screen-annotation
app whose annotations stay fully editable. One conversion goal: download the portable ZIP.

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

`<Screenshot>` then renders it through `next/image` (sized, lazy, no CLS) instead of the
placeholder. Nothing else changes.

## Before launch

- `lib/site.ts` — point `repo`, `release.downloadUrl` and `release.sha256` at the real
  release. `url` feeds canonical/OG/sitemap; override it with `NEXT_PUBLIC_SITE_URL`.
- Replace the remaining `#` hrefs in the footer (Documentation, Changelog, License).

## Accessibility & motion

One `h1`, ordered headings, semantic landmarks. The lightbox traps focus, restores it to
the card that opened it, and supports Esc and ←/→ (wrapping). Comparison-table status is
never color-only — every ✓/— carries a visually hidden "Yes"/"No". All motion honors
`prefers-reduced-motion`.

Scroll reveals are IntersectionObserver-driven, with the hidden state scoped to
`html[data-js="on"]` (set by an inline script before first paint). A Framer Motion
`initial` would instead ship `opacity: 0` in the server HTML, blanking the page for no-JS
clients and holding LCP until hydration.
