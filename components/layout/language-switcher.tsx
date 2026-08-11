import Link from "next/link";

import { langCodes, langNames, langs, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Copy } from "@/types";

interface LanguageSwitcherProps {
  current: Lang;
  /** Where each locale's equivalent of the current page lives. */
  paths: Record<Lang, string>;
  ui: Copy["ui"];
  className?: string;
}

/**
 * Three links rather than a dropdown. With this few locales a menu would add a
 * popover, focus management and a JS dependency to save one row of chrome — and
 * these are plain links, so they work with JS off and can be opened in a new
 * tab, which a button-driven menu cannot.
 *
 * `hreflang` on each link tells a crawler what it will find on the other side;
 * `lang` tells a screen reader to pronounce "Slovenčina" in Slovak instead of
 * reading it with the page's voice. <Link> applies the basePath.
 */
export function LanguageSwitcher({
  current,
  paths,
  ui,
  className,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={ui.language} className={cn("flex items-center gap-0.5", className)}>
      {langs.map((lang) => {
        const isCurrent = lang === current;

        return (
          <Link
            key={lang}
            href={paths[lang]}
            hrefLang={lang}
            lang={lang}
            aria-current={isCurrent ? "true" : undefined}
            className={cn(
              "rounded-md px-2 py-1.5 text-[13px] font-semibold transition-colors duration-[120ms]",
              isCurrent
                ? "bg-surface text-fg"
                : "text-fg-subtle hover:bg-surface hover:text-fg",
            )}
          >
            {langCodes[lang]}
            <span className="sr-only"> — {langNames[lang]}</span>
          </Link>
        );
      })}
    </nav>
  );
}
