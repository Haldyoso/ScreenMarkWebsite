import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { homePath, type Lang } from "@/lib/i18n";
import type { Copy, FooterColumn } from "@/types";

interface FooterProps {
  lang: Lang;
  copy: Copy;
  columns: FooterColumn[];
}

/** Internal links are section anchors; only the changelog is a real route. */
function isRoute(href: string) {
  return href.startsWith("/");
}

export function Footer({ lang, copy, columns }: FooterProps) {
  return (
    <footer className="relative z-1 border-t border-divider bg-code-bg">
      <div className="mx-auto max-w-[1200px] px-4 pt-16 pb-10 md:px-6">
        <div className="grid grid-cols-2 gap-8 min-[720px]:grid-cols-[1.2fr_1fr_1fr] min-[900px]:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 min-[720px]:col-span-1">
            <Link href={homePath(lang)} className="mb-3.5 inline-flex rounded-md">
              <Logo markClassName="size-[26px]" />
            </Link>
            <p className="max-w-[280px] text-sm leading-relaxed text-fg-muted">
              {copy.footer.blurb}
            </p>
          </div>

          {columns.map((column) => (
            /* Named by the visible heading rather than a duplicate aria-label. */
            <nav key={column.title} aria-labelledby={`footer-${slug(column.title)}`}>
              <h2
                id={`footer-${slug(column.title)}`}
                className="mb-3.5 text-xs font-semibold uppercase tracking-[0.8px] text-fg-subtle"
              >
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {isRoute(link.href) ? (
                      <Link
                        href={link.href}
                        className="text-fg-muted transition-colors duration-[120ms] hover:text-accent-hover"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener" }
                          : {})}
                        className="text-fg-muted transition-colors duration-[120ms] hover:text-accent-hover"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-divider pt-6 text-[13px] text-fg-subtle">
          <span>{copy.footer.legal}</span>
          <span>{copy.footer.traits}</span>
        </div>
      </div>
    </footer>
  );
}

/**
 * The column heading is translated, so it can carry spaces and diacritics that
 * do not belong in an id. Latin-1 accents are stripped rather than encoded so
 * "Zdroje" and "Ressourcen" produce ids as stable as the English ones.
 */
const COMBINING_MARKS = /[̀-ͯ]/g;

function slug(value: string) {
  return value
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
