import type { MetadataRoute } from "next";

import { basePath, site } from "@/lib/site";

/** No Node server on GitHub Pages — this has to be baked at build time. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    /**
     * These two are plain strings inside a JSON body, so Next's basePath
     * rewriting never sees them — unlike the <link rel="manifest"> href, which
     * it does rewrite. Prefixed by hand or the installed app opens the domain
     * root and 404s.
     */
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#0e0f11",
    theme_color: "#0e0f11",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
