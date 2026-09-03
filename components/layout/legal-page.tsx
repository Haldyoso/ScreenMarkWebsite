import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SkipLink } from "@/components/layout/skip-link";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/content";
import {
  homePath,
  langs,
  privacyPath,
  termsPath,
  type Lang,
} from "@/lib/i18n";
import { getLegalCopy, type LegalPageKind } from "@/lib/legal";
import { site } from "@/lib/site";

export function LegalPage({ kind, lang }: { kind: LegalPageKind; lang: Lang }) {
  const content = getContent(lang);
  const copy = getLegalCopy(kind, lang);
  const pathFor = kind === "privacy" ? privacyPath : termsPath;
  const langPaths = Object.fromEntries(
    langs.map((locale) => [locale, pathFor(locale)]),
  ) as Record<Lang, string>;
  const contactHref = site.legal.supportEmail
    ? `mailto:${site.legal.supportEmail}`
    : site.issuesUrl;

  return (
    <div data-page-root className="relative min-h-screen overflow-x-hidden">
      <PageBackdrop />
      <SkipLink label={content.copy.ui.skipToContent} />
      <Navbar
        lang={lang}
        copy={content.copy}
        nav={content.nav}
        langPaths={langPaths}
        showSections={false}
      />

      <main
        id="top"
        tabIndex={-1}
        className="relative z-1 mx-auto max-w-[820px] px-4 pt-28 pb-20 focus:outline-none sm:pt-36 md:px-6"
      >
        <Button asChild variant="ghost" size="sm">
          <Link href={homePath(lang)}>
            <ArrowLeft aria-hidden="true" className="size-4" />
            {copy.back}
          </Link>
        </Button>

        <article className="mt-8">
          <header className="border-b border-divider pb-8">
            <h1 className="text-[clamp(34px,6vw,48px)] font-bold tracking-[-1px]">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-[720px] text-lg leading-relaxed text-fg-muted">
              {copy.intro}
            </p>
            <dl className="mt-6 grid gap-2 text-sm text-fg-subtle sm:grid-cols-2">
              <div>
                <dt className="inline font-semibold text-fg-muted">
                  {copy.lastUpdatedLabel}: {" "}
                </dt>
                <dd className="inline">{copy.lastUpdated}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-fg-muted">
                  {copy.ownerLabel}: {" "}
                </dt>
                <dd className="inline">
                  {site.legal.owner ?? copy.ownerPending}
                </dd>
              </div>
            </dl>
          </header>

          <div className="space-y-10 py-10">
            {copy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-[-0.3px]">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-7 text-fg-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <aside className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-semibold">{copy.contactTitle}</h2>
            <p className="mt-3 leading-7 text-fg-muted">{copy.contactText}</p>
            <a
              href={contactHref}
              {...(site.legal.supportEmail
                ? {}
                : { target: "_blank", rel: "noopener" })}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-accent-hover transition-colors hover:text-accent-soft"
            >
              {copy.contactLink}
              {!site.legal.supportEmail && (
                <ExternalLink aria-hidden="true" className="size-4" />
              )}
            </a>
          </aside>
        </article>
      </main>

      <Footer
        lang={lang}
        copy={content.copy}
        columns={content.footerColumns}
      />
    </div>
  );
}
