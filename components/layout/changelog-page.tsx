import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SkipLink } from "@/components/layout/skip-link";
import { getChangelog } from "@/lib/changelog";
import { getContent } from "@/lib/content";
import { changelogPath, homePath, langs, type Lang } from "@/lib/i18n";
import { softwareApplicationJsonLd } from "@/lib/structured-data";

/**
 * The release-notes page, one per locale. The chrome and the framing sentences
 * are translated; the entries themselves are the application's own CHANGELOG.md
 * reproduced verbatim, which is Slovak — hence `copy.changelog.sourceNote`
 * saying so on the English and German pages rather than pretending otherwise.
 */
export function ChangelogPage({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const { copy } = content;
  const { releases, total } = getChangelog();

  const langPaths = Object.fromEntries(
    langs.map((l) => [l, changelogPath(l)]),
  ) as Record<Lang, string>;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageBackdrop />

      <SkipLink label={copy.ui.skipToContent} />
      <Navbar
        lang={lang}
        copy={copy}
        nav={content.nav}
        langPaths={langPaths}
        showSections={false}
      />

      <main
        id="top"
        tabIndex={-1}
        className="relative z-1 mx-auto max-w-[820px] px-4 pt-[136px] pb-24 focus:outline-none md:px-6"
      >
        <Link
          href={homePath(lang)}
          className="inline-flex items-center gap-2 rounded-md text-sm text-fg-muted transition-colors duration-[120ms] hover:text-fg"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {copy.changelog.back}
        </Link>

        <h1 className="mt-6 text-[clamp(32px,5vw,44px)] font-bold tracking-[-1px]">
          {copy.changelog.title}
        </h1>
        <p className="mt-4 text-lg leading-[1.55] text-fg-muted">
          {copy.changelog.intro}
        </p>
        <p className="mt-2 text-sm text-fg-subtle">
          {copy.changelog.sourceNote}
          {total > releases.length && (
            <>
              {" "}
              {copy.changelog.truncated
                .replace("{shown}", String(releases.length))
                .replace("{total}", String(total))}
            </>
          )}
        </p>

        {releases.length === 0 ? (
          <p className="mt-12 rounded-lg border border-border bg-card px-6 py-10 text-center text-fg-muted">
            {copy.changelog.empty}
          </p>
        ) : (
          <ol className="mt-12 flex flex-col gap-8">
            {releases.map((release) => (
              <li
                key={release.version}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-divider pb-4">
                  <h2 className="font-mono text-xl font-semibold text-accent">
                    {release.version}
                  </h2>
                  {release.date && (
                    <time dateTime={release.date} className="text-sm text-fg-subtle">
                      {release.date}
                    </time>
                  )}
                  {release.note && (
                    <span className="text-sm text-fg-subtle">{release.note}</span>
                  )}
                </div>
                {/*
                 * Build-time HTML from a file in this repository — see the note
                 * in lib/changelog.ts. `prose-changelog` carries the typography;
                 * Tailwind's own prose plugin is not installed and one page does
                 * not justify adding it.
                 */}
                <div
                  className="prose-changelog"
                  dangerouslySetInnerHTML={{ __html: release.html }}
                />
              </li>
            ))}
          </ol>
        )}
      </main>

      <Footer lang={lang} copy={copy} columns={content.footerColumns} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd(lang)),
        }}
      />
    </div>
  );
}
