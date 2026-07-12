"use client";

import { AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Screenshot } from "@/components/ui/screenshot";
import { SectionHeading } from "@/components/ui/section-heading";
import { gallery } from "@/lib/content";

// Kept out of the initial bundle; nothing renders until a card is clicked.
const Lightbox = dynamic(() =>
  import("@/components/ui/lightbox").then((mod) => mod.Lightbox),
);

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  // Held separately from lightboxIndex, which moves as the user arrows through
  // the set — focus has to return to the card that opened the viewer.
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = lightboxIndex >= 0;

  const open = (index: number) => {
    openerRef.current = triggerRefs.current[index];
    setLightboxIndex(index);
  };

  const close = () => {
    setLightboxIndex(-1);
    openerRef.current?.focus();
  };

  return (
    <section
      aria-label="Screenshot gallery"
      className="mx-auto max-w-[1200px] px-4 py-24 md:px-6"
    >
      <SectionHeading
        overline="In the workspace"
        title="See it on real screens"
        className="mb-12"
      />

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {gallery.map((item, index) => (
          <Reveal as="li" key={item.title} index={index % 3} className="h-full">
            <button
              ref={(node) => {
                triggerRefs.current[index] = node;
              }}
              type="button"
              onClick={() => open(index)}
              aria-label={`Enlarge: ${item.caption}`}
              className="h-full w-full overflow-hidden rounded-lg border border-border bg-card text-left transition-[border-color,transform] duration-[120ms] ease-standard hover:-translate-y-0.5 hover:border-accent/50"
            >
              {/* The button's aria-label already carries this caption. */}
              <Screenshot
                screenshot={item.screenshot}
                ratio="aspect-[16/10]"
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 384px"
                className="p-5 text-[13px]"
                decorative
              />
              <span className="flex items-center justify-between gap-2 px-4 py-3.5">
                <span className="text-sm font-medium text-fg">{item.title}</span>
                <Maximize2
                  aria-hidden="true"
                  className="size-4 shrink-0 text-fg-subtle"
                />
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {isOpen && (
          <Lightbox
            items={gallery}
            index={lightboxIndex}
            onClose={close}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
