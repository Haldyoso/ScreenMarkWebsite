import type { MetadataRoute } from "next";

import { absoluteUrl, changelogPath, homePath, langs, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

/** No Node server on GitHub Pages — this has to be baked at build time. */
export const dynamic = "force-static";

/**
 * Six URLs: a landing page and a changelog per locale. Each entry repeats the
 * full xhtml:link alternate set, which is what Google asks for — an alternate
 * group is only trusted when every member points back at every other.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const alternatesFor = (pathFor: (lang: Lang) => string) => {
    const languages: Record<string, string> = {};
    for (const lang of langs) {
      languages[lang] = absoluteUrl(site.url, pathFor(lang));
    }
    return { languages };
  };

  const home = langs.map((lang) => ({
    url: absoluteUrl(site.url, homePath(lang)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: alternatesFor(homePath),
  }));

  const changelog = langs.map((lang) => ({
    url: absoluteUrl(site.url, changelogPath(lang)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
    alternates: alternatesFor(changelogPath),
  }));

  return [...home, ...changelog];
}
