import type { NextConfig } from "next";

import { basePath } from "./lib/site";

const nextConfig: NextConfig = {
  /**
   * GitHub Pages is a dumb file host: it serves what is in the artifact and
   * runs no Node process. `export` emits plain HTML/CSS/JS into out/.
   */
  output: "export",

  // Project site lives at /<repo>, not the domain root.
  basePath,
  assetPrefix: basePath,

  /**
   * The default next/image loader needs the Next server to resize on request.
   * There isn't one here, so images ship at their source resolution. Without
   * this the build fails the moment a real <Image> renders.
   */
  images: { unoptimized: true },

  // Don't advertise the framework version.
  poweredByHeader: false,

  /**
   * The security headers this config used to send (X-Frame-Options, nosniff,
   * Referrer-Policy, Permissions-Policy) are gone on purpose: GitHub Pages
   * sends a fixed header set and offers no way to add to it, and Next silently
   * drops `headers()` under `output: export`. Keeping the block would have
   * looked like protection that isn't there. Restore it if this ever moves to
   * a host that runs Node.
   */
};

export default nextConfig;
