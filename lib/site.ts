/**
 * Single source of truth for anything that changes per release or per
 * deployment. The download href and repo URL are placeholders from the
 * prototype — point them at the real release asset before launch.
 */

/**
 * GitHub Pages serves project sites from /<repo>, not the domain root, so every
 * absolute path needs this prefix. next.config.ts feeds it to Next's `basePath`
 * (which rewrites <Link>, next/image and the build output on its own); the two
 * places Next does NOT touch are the manifest's own JSON fields, which are
 * plain strings to it — see app/manifest.ts.
 *
 * Empty string on a root domain. Kept here rather than in next.config.ts so the
 * config and the app can't drift apart.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/ScreenMarkWebsite";

export const site = {
  name: "ScreenMark",
  tagline: "Draw directly on your screen. Edit everything later.",
  description:
    "The portable screen-annotation tool for engineers. Every arrow, callout and measurement stays a fully editable vector object — move it, restyle it, regroup it, re-export it. No installation, no login, no internet.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://haldyoso.github.io/ScreenMarkWebsite",
  repo: "https://github.com",
  release: {
    version: "1.0.0",
    size: "~8.4 MB",
    sha256: "a3f9…e21c",
    downloadUrl: "#",
    olderVersionsUrl: "https://github.com",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Compare", href: "#compare" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
