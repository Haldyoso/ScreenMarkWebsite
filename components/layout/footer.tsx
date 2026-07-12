import { Logo } from "@/components/layout/logo";
import { footerColumns } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-1 border-t border-divider bg-code-bg">
      <div className="mx-auto max-w-[1200px] px-4 pt-16 pb-10 md:px-6">
        <div className="grid grid-cols-2 gap-8 min-[720px]:grid-cols-[1.2fr_1fr_1fr] min-[900px]:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 min-[720px]:col-span-1">
            <a href="#top" className="mb-3.5 inline-flex rounded-md">
              <Logo tileClassName="size-[26px]" />
            </a>
            <p className="max-w-[280px] text-sm leading-relaxed text-fg-muted">
              Draw directly on your screen. Edit everything later. Portable annotation for
              Windows engineers.
            </p>
          </div>

          {footerColumns.map((column) => (
            /* Named by the visible heading rather than a duplicate aria-label. */
            <nav
              key={column.title}
              aria-labelledby={`footer-${column.title.toLowerCase()}`}
            >
              <h2
                id={`footer-${column.title.toLowerCase()}`}
                className="mb-3.5 text-xs font-semibold uppercase tracking-[0.8px] text-fg-subtle"
              >
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener" }
                        : {})}
                      className="text-fg-muted transition-colors duration-[120ms] hover:text-accent-hover"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-divider pt-6 text-[13px] text-fg-subtle">
          <span>© 2026 ScreenMarkPro. Released under the MIT License.</span>
          <span>Portable · Offline · No telemetry</span>
        </div>
      </div>
    </footer>
  );
}
