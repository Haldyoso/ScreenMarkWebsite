"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

import { Screenshot } from "@/components/ui/screenshot";
import { WindowFrame } from "@/components/ui/window-frame";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import type { GalleryItem } from "@/types";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const item = items[index];
  const total = items.length;

  useLockBodyScroll(true);

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

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.2, 0, 0, 1] }}
      className="fixed inset-0 z-400 flex items-center justify-center bg-black/78 p-6 backdrop-blur-[6px]"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-md border border-border bg-surface text-fg hover:bg-surface-elevated"
      >
        <X aria-hidden="true" className="size-[22px]" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          step(-1);
        }}
        aria-label="Previous screenshot"
        className="absolute left-5 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-fg hover:bg-surface-elevated"
      >
        <ChevronLeft aria-hidden="true" className="size-6" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          step(1);
        }}
        aria-label="Next screenshot"
        className="absolute right-5 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-fg hover:bg-surface-elevated"
      >
        <ChevronRight aria-hidden="true" className="size-6" />
      </button>

      {/* Clicks inside the panel must not reach the backdrop's close handler. */}
      <div
        className="w-full max-w-[1000px]"
        onClick={(event) => event.stopPropagation()}
      >
        <WindowFrame className="shadow-[0_16px_48px_rgb(0_0_0/0.6)]">
          <Screenshot
            screenshot={item.screenshot}
            ratio="aspect-[16/9]"
            sizes="(max-width: 1000px) 100vw, 1000px"
            className="p-8"
          />
        </WindowFrame>
        <p className="mt-4 text-center text-sm text-fg-muted">
          {item.title} ·{" "}
          <span className="text-fg-subtle">
            {index + 1} / {total}
          </span>
        </p>
      </div>
    </motion.div>
  );
}
