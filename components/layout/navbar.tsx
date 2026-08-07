"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { GitHubIcon } from "@/components/ui/github-icon";
import { Button } from "@/components/ui/button";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // The drawer's trigger is hidden at md; close the drawer if the viewport
  // grows past that while it is open, or it would be stranded off-screen.
  const isDesktop = useMediaQuery("(min-width: 900px)");

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-100">
      <div
        className={cn(
          "h-16 border-b backdrop-blur-[20px] transition-[background-color,border-color] duration-[180ms] ease-standard",
          scrolled
            ? "border-border bg-[rgb(14_15_17/0.82)]"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-full max-w-[1200px] items-center gap-6 px-4 md:px-6"
        >
          <a href="#top" className="rounded-md">
            <Logo glow />
            <span className="sr-only">ScreenMark — back to top</span>
          </a>

          <div className="flex-1" />

          <div className="hidden items-center gap-1 min-[900px]:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[15px] font-medium text-fg-muted transition-colors duration-[120ms] hover:text-fg"
              >
                {item.label}
              </a>
            ))}

            <Button asChild variant="ghost" size="icon" className="ml-1">
              <a
                href={site.repo}
                target="_blank"
                rel="noopener"
                aria-label="GitHub repository"
              >
                <GitHubIcon className="size-5" />
              </a>
            </Button>

            <Button asChild size="sm" className="ml-2">
              <a href="#download">
                <Download aria-hidden="true" className="size-4" />
                Download
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Menu"}
            className="flex size-10 items-center justify-center rounded-md border border-border bg-surface text-fg min-[900px]:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </nav>
      </div>

      {/* LazyMotion + `m` loads only the DOM animation features, not all of Framer. */}
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence>
          {menuOpen && (
            <m.div
              id="mobile-menu"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              className="border-b border-border bg-code-bg min-[900px]:hidden"
            >
              <div className="flex flex-col gap-0.5 px-4 py-3 md:px-6">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-2 py-3.5 text-base font-medium text-fg"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#download"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-md bg-accent px-2 py-3.5 text-center font-semibold text-white"
                >
                  Download for Windows
                </a>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </header>
  );
}
