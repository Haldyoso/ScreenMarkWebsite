/**
 * Single source of truth for anything that changes per release or per
 * deployment. The download href and repo URL are placeholders from the
 * prototype — point them at the real release asset before launch.
 *
 * Nothing here is translated. Everything the visitor reads lives in
 * lib/content/<lang>.ts; what is left is URLs, version numbers and the site
 * name, which are the same in every language.
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
} as const;

/**
 * True once `release.downloadUrl` points at a real asset. Guards everything
 * that would otherwise state something unverifiable: the JSON-LD downloadUrl
 * (a link to nowhere, fed to Google) and the SHA-256 line (still the
 * prototype's placeholder digest, and a checksum nobody can verify is worse
 * than no checksum at all).
 */
export const hasRealRelease = site.release.downloadUrl.startsWith("http");
