import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/** No Node server on GitHub Pages — this has to be baked at build time. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
