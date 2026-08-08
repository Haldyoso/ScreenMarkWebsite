import { Download } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WindowsIcon } from "@/components/ui/github-icon";
import { site } from "@/lib/site";

export function DownloadCta() {
  const { version, size, sha256, downloadUrl, olderVersionsUrl } = site.release;

  return (
    <section
      id="download"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-4 pt-16 pb-24 md:px-6"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface px-8 py-14 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-20%,rgb(45_125_246/0.22),transparent_60%)]"
          />

          <div className="relative">
            <Badge variant="plain" className="mb-6">
              <WindowsIcon className="size-[15px] text-accent" />
              Windows 10 &amp; 11 · 64-bit
            </Badge>

            <h2 className="mx-auto max-w-[640px] text-[clamp(28px,4.5vw,38px)] font-bold tracking-[-0.5px]">
              Download ScreenMark
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.55] text-fg-muted">
              Portable ZIP — unzip and run. No installation, no admin rights, no internet.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button asChild size="lg" className="shadow-[0_8px_24px_rgb(45_125_246/0.35)]">
                <a href={downloadUrl} download>
                  <Download aria-hidden="true" className="size-5" />
                  Download ZIP (v{version})
                </a>
              </Button>
              <Button asChild size="lg" variant="elevated">
                <a href={olderVersionsUrl} target="_blank" rel="noopener">
                  Older versions
                </a>
              </Button>
            </div>

            <p className="mt-7 flex flex-wrap justify-center gap-5 text-[13px] text-fg-subtle">
              <span>Version {version}</span>
              <span aria-hidden="true">·</span>
              <span>{size}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">SHA-256: {sha256}</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
