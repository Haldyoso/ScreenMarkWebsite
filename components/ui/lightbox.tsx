"use client";

import { domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Screenshot } from "@/components/ui/screenshot";
import { WindowFrame } from "@/components/ui/window-frame";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import type { Copy, GalleryItem } from "@/types";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  ui: Copy["ui"];
}

export function Lightbox({ items, index, onClose, onNavigate, ui }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const item = items[index];
  const total = items.length;
  const position = `${index + 1} / ${total}`;

  useLockBodyScroll(true);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>("[data-page-root]");
    if (!page) return;

    const wasInert = page.inert;
    page.inert = true;
    return () => {
      page.inert = wasInert;
    };
  }, []);

  const step = useCallback(
    (direction: number) => {
      onNavigate((index + direction + total) % total);
    },
    [index, total, onNavigate],
  );

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        step(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        step(-1);
        return;
      }

      // Focus trap: cycle Tab within the dialog's focusable controls.
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, step]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${ui.screenshotViewer}, ${position}`}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.2, 0, 0, 1] }}
        className="fixed inset-0 z-[400] flex items-center justify-center bg-black/78 p-4 backdrop-blur-[6px] sm:p-6"
      >
        {/*
         * Arrowing through the set swaps the image silently otherwise — this
         * announces each one to screen readers as it becomes current.
         */}
        <p aria-live="polite" className="sr-only">
          {item.title}, {ui.imageOfTotal} {position}. {item.screenshot.alt}
        </p>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label={ui.close}
          className="absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-md border border-border bg-surface text-fg hover:bg-surface-elevated sm:top-5 sm:right-5"
        >
          <X aria-hidden="true" className="size-[22px]" />
        </button>

        <div className="grid w-full max-w-[1128px] grid-cols-2 items-center gap-3 sm:grid-cols-[48px_minmax(0,1000px)_48px] sm:gap-4">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label={ui.previousScreenshot}
            className="col-start-1 row-start-2 flex size-12 justify-self-end rounded-full border border-border bg-surface text-fg hover:bg-surface-elevated sm:col-start-1 sm:row-start-1 sm:justify-self-auto"
          >
            <ChevronLeft aria-hidden="true" className="m-auto size-6" />
          </button>

          {/* Clicks inside the panel must not reach the backdrop's close handler. */}
          <div
            className="col-span-2 col-start-1 row-start-1 min-w-0 sm:col-span-1 sm:col-start-2"
            onClick={(event) => event.stopPropagation()}
          >
            <WindowFrame className="shadow-[0_16px_48px_rgb(0_0_0/0.6)]">
              <Screenshot
                screenshot={item.screenshot}
                ratio="aspect-[16/10]"
                sizes="(max-width: 1000px) 100vw, 1000px"
                fit="contain"
                priority
                decorative
              />
            </WindowFrame>
            <p className="mt-4 text-center text-sm text-fg-muted">
              {item.title} · <span className="text-fg-subtle">{position}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label={ui.nextScreenshot}
            className="col-start-2 row-start-2 flex size-12 justify-self-start rounded-full border border-border bg-surface text-fg hover:bg-surface-elevated sm:col-start-3 sm:row-start-1 sm:justify-self-auto"
          >
            <ChevronRight aria-hidden="true" className="m-auto size-6" />
          </button>
        </div>
      </m.div>
    </LazyMotion>,
    document.body,
  );
}
