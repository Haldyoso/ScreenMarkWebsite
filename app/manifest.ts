import type { MetadataRoute } from "next";

import { getCopy } from "@/lib/content";
import { defaultLang } from "@/lib/i18n";
import { basePath, site } from "@/lib/site";

/** No Node server on GitHub Pages — this has to be baked at build time. */
export const dynamic = "force-static";

/**
 * One manifest, in the default locale. A web manifest has no locale
 * negotiation — the spec gives it a single `lang` — and Next's metadata route
 * emits exactly one file, so a per-language variant would need three
 * <link rel="manifest"> tags pointing at three hand-written routes for an
 * install prompt almost nobody on a marketing site will use. Not worth it;
 * `lang` and `dir` at least tell the browser what it is looking at.
 */
export default function manifest(): MetadataRoute.Manifest {
  const copy = getCopy(defaultLang);

  return {
    name: `${site.name} — ${copy.meta.tagline}`,
    short_name: site.name,
    description: copy.meta.description,
    lang: defaultLang,
    dir: "ltr",
    /**
     * These are plain strings inside a JSON body, so Next's basePath rewriting
     * never sees them — unlike the <link rel="manifest"> href, which it does
     * rewrite. Prefixed by hand or the installed app opens the domain root and
     * 404s.
     */
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#0b0d14",
    theme_color: "#0b0d14",
    /**
     * Same hand-prefixing caveat as start_url. The PNGs are the shipped app
     * icon set rather than downscales of the SVG: the mark drops detail on
     * purpose below ~96px, and only the pre-rendered files carry that.
     */
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: `${basePath}/icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${basePath}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${basePath}/icons/maskable-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
