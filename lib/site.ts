/**
 * Single source of truth for anything that changes per release or per
 * deployment. Release values below are taken from the clean ScreenMark app
 * repository and its reproducible portable build.
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

const releaseAssetPath =
  "/downloads/ScreenMark-v0.9.9.86-win-x64-portable.zip";
const opmAssetPath =
  "/downloads/ScreenMark-v0.9.9.89-OPM-do-2026-10-22.exe";
const publicTrialAssetPath =
  "/downloads/ScreenMark-v0.9.9.89-public-trial-do-2026-09-22.exe";

export const site = {
  name: "ScreenMark",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://haldyoso.github.io/ScreenMarkWebsite",
  // The application repository is private. These public links intentionally
  // point at the website repository so visitors never land on a GitHub 404.
  repo: "https://github.com/Haldyoso/ScreenMarkWebsite",
  issuesUrl: "https://github.com/Haldyoso/ScreenMarkWebsite/issues/new",
  release: {
    version: "0.9.9.86",
    size: "66.9 MB",
    sha256: "F57D97D5427DF8CBD6131E3C43B7C36E4BF2E17DCEF543A9EA9360EA71BDFCC3",
    assetPath: releaseAssetPath,
    downloadUrl: `${basePath}${releaseAssetPath}`,
    opmVersion: "0.9.9.89",
    opmExpires: "2026-10-22",
    opmDownloadUrl: `${basePath}${opmAssetPath}`,
    publicTrialVersion: "0.9.9.89",
    publicTrialExpires: "2026-09-22",
    publicTrialDownloadUrl: `${basePath}${publicTrialAssetPath}`,
  },
} as const;

/**
 * Kept as a guard so a future pre-release edit cannot accidentally publish a
 * placeholder URL or checksum into the page and its structured data.
 */
export const hasRealRelease = !site.release.downloadUrl.endsWith("#");
