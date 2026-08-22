"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { Screenshot } from "@/components/ui/screenshot";
import { WindowFrame } from "@/components/ui/window-frame";
import { showcaseIcons } from "@/lib/content/shared";
import { cn } from "@/lib/utils";
import type { HeadingCopy, ShowcaseFeature } from "@/types";

interface FeatureShowcaseProps {
  heading: HeadingCopy;
  features: ShowcaseFeature[];
}

export function FeatureShowcase({ heading, features }: FeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = features[activeIndex];
  /*
   * Looked up here rather than received as a prop: icons are React components
   * and cannot be serialized across the server/client boundary. The id in the
   * props is enough to find them, and this module is already client-side.
   */
  const ActiveIcon = showcaseIcons[active.id];

  return (
    <section id="features" className="mx-auto max-w-[1200px] scroll-mt-20 px-4 py-16 md:px-6">
      <SectionHeading {...heading} className="mb-12" />

      <div className="grid items-stretch gap-8 min-[900px]:grid-cols-[0.9fr_1.1fr]">
        <ul className="flex flex-col gap-2">
          {features.map((feature, index) => {
            const Icon = showcaseIcons[feature.id];
            const isActive = index === activeIndex;

            return (
              <li key={feature.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-full items-start gap-3.5 rounded-lg border p-[18px_20px] text-left transition-[border-color,background-color] duration-150 ease-standard",
                    isActive
                      ? "border-accent/55 bg-accent-subtle"
                      : "border-border bg-card",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-[38px] shrink-0 items-center justify-center rounded-[9px] transition-colors duration-150",
                      isActive ? "bg-accent/18 text-accent-hover" : "bg-tile text-fg-icon",
                    )}
                  >
                    <Icon aria-hidden="true" strokeWidth={1.75} className="size-[22px]" />
                  </span>
                  <span>
                    <span className="mb-[3px] block text-base font-semibold">
                      {feature.name}
                    </span>
                    <span className="block text-sm leading-normal text-fg-muted">
                      {feature.short}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <WindowFrame className="flex min-h-[360px] flex-col">
          <div className="screenshot-hatch flex flex-1 items-center justify-center p-7 text-center">
            {/* LazyMotion + `m` loads only DOM animation features, not all of Framer. */}
            <LazyMotion features={domAnimation} strict>
              <AnimatePresence mode="wait">
                <m.div
                  key={active.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                  className="max-w-[420px]"
                >
                  <span className="mx-auto mb-4 flex size-11 items-center justify-center rounded-[11px] bg-accent-subtle text-accent">
                    <ActiveIcon
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="size-[22px]"
                    />
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{active.name}</h3>
                  <p className="text-[15px] leading-relaxed text-fg-muted">
                    {active.description}
                  </p>
                  <div className="mt-4">
                    <Screenshot
                      screenshot={active.screenshot}
                      ratio="aspect-[16/10]"
                      sizes="(max-width: 900px) 100vw, 620px"
                      className="overflow-hidden rounded-md"
                      bare
                    />
                  </div>
                </m.div>
              </AnimatePresence>
            </LazyMotion>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
}
