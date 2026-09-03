/**
 * Three locales, three fully static pages. English is the default and lives at
 * the site root; Slovak and German hang off /sk and /de.
 *
 * Why the root is English rather than /en: `output: "export"` rules out
 * middleware and runtime redirects, so a language-negotiating "/" would have to
 * be a client-side meta refresh — an extra round trip on the site's single most
 * common entry point, and a blank frame for anyone who lands there. Serving the
 * default language directly costs nothing and keeps one canonical URL per
 * language instead of an /en duplicate of "/".
 */
export const langs = ["en", "sk", "de"] as const;

export type Lang = (typeof langs)[number];

export const defaultLang: Lang = "en";

/** Endonyms — a language picker that names languages in English helps nobody. */
export const langNames: Record<Lang, string> = {
  en: "English",
  sk: "Slovenčina",
  de: "Deutsch",
};

/** Short label for the switcher's collapsed state. */
export const langCodes: Record<Lang, string> = {
  en: "EN",
  sk: "SK",
  de: "DE",
};

/**
 * Root-relative path for a locale. Next's `basePath` is applied by <Link> and
 * by the router, so these stay unprefixed — the same rule the screenshot data
 * follows. Trailing slash on the non-default locales keeps the static export's
 * directory URLs and their emitted index.html in agreement.
 */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}`;
}

export function changelogPath(lang: Lang): string {
  return lang === defaultLang ? "/changelog" : `/${lang}/changelog`;
}

export function privacyPath(lang: Lang): string {
  return lang === defaultLang ? "/privacy" : `/${lang}/privacy`;
}

export function termsPath(lang: Lang): string {
  return lang === defaultLang ? "/terms" : `/${lang}/terms`;
}

/**
 * Absolute URL for a locale's home page, for canonical/hreflang/sitemap use.
 * `site.url` already carries the basePath on a project site, so this must not
 * add it a second time.
 */
export function absoluteUrl(siteUrl: string, path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}
