import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Screenshot } from "@/components/ui/screenshot";
import { WindowFrame } from "@/components/ui/window-frame";
import { changelogPath, type Lang } from "@/lib/i18n";
import type { Copy, Screenshot as ScreenshotData } from "@/types";

interface HeroProps {
  copy: Copy;
  lang: Lang;
  screenshot: ScreenshotData;
  chips: string[];
}

export function Hero({ copy, lang, screenshot, chips }: HeroProps) {
  const { hero } = copy;

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-[118px] pb-16 text-center sm:pt-[150px] sm:pb-20 md:px-6">
      <Reveal>
        <Badge variant="status">
          <span className="size-[7px] rounded-full bg-success shadow-[0_0_8px_var(--color-success)]" />
          {hero.badge}
        </Badge>
      </Reveal>

      <h1 className="mx-auto mt-7 max-w-[900px] text-[clamp(36px,9.5vw,44px)] leading-[1.04] font-bold tracking-[-1.5px] sm:text-[clamp(44px,6vw,64px)]">
        {hero.titleLead}
        <br />
        <span className="text-gradient-accent">{hero.titleAccent}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-[680px] text-[clamp(17px,2.2vw,20px)] leading-[1.55] text-fg-muted">
        {hero.description}
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3.5">
        <Button asChild className="shadow-glow">
          <a href="#download">
            <Download aria-hidden="true" className="size-[18px]" />
            {hero.ctaPrimary}
          </a>
        </Button>
        <Button asChild variant="secondary">
          <Link href={changelogPath(lang)}>
            {hero.ctaSecondary}
            <ArrowRight aria-hidden="true" className="size-[18px]" />
          </Link>
        </Button>
      </div>

      <Reveal>
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {chips.map((chip, index) => (
            <li key={chip} className={index >= 3 ? "hidden sm:list-item" : undefined}>
              <Badge variant="chip">{chip}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal index={1}>
        <div className="relative mt-4 sm:mt-14">
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-xl bg-linear-[120deg] from-accent/50 to-accent-soft/35 opacity-50 blur-[22px]"
          />
          <WindowFrame title={hero.frameTitle} className="relative shadow-e3">
            <Screenshot
              screenshot={screenshot}
              ratio="aspect-[16/9]"
              sizes="(max-width: 1200px) 100vw, 1152px"
              priority
              showGlyph
            />
          </WindowFrame>
        </div>
      </Reveal>
    </section>
  );
}
