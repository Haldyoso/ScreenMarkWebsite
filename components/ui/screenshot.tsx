import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Screenshot as ScreenshotData } from "@/types";

interface ScreenshotProps {
  screenshot: ScreenshotData;
  /** Tailwind aspect utility, e.g. "aspect-[16/9]". */
  ratio?: string;
  /** Passed to next/image; describes how wide the image renders per breakpoint. */
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Shows the lucide frame glyph above the label (hero + lightbox only). */
  showGlyph?: boolean;
  /**
   * For slots already sitting on a hatched surface: the placeholder collapses to
   * a caption line instead of drawing a second hatch on top of the first.
   */
  bare?: boolean;
  /**
   * Hides the image from assistive tech. Use where the surrounding control or
   * live region already announces the same description (gallery card buttons,
   * the lightbox) — otherwise screen readers read the caption twice.
   */
  decorative?: boolean;
}

/**
 * Renders a real capture through next/image once `screenshot.src` is set, and a
 * labeled placeholder until then. The placeholder text is the alt text, so the
 * copy that describes each shot lives in exactly one place (lib/content.ts).
 */
export function Screenshot({
  screenshot,
  ratio = "aspect-[16/9]",
  sizes = "(max-width: 900px) 100vw, 50vw",
  priority = false,
  className,
  showGlyph = false,
  bare = false,
  decorative = false,
}: ScreenshotProps) {
  const { src, alt } = screenshot;

  if (src) {
    return (
      <div className={cn("relative", ratio, className)}>
        <Image
          src={src}
          // An empty alt is the correct way to mark an image decorative.
          alt={decorative ? "" : alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  if (bare) {
    return (
      <p
        aria-hidden={decorative || undefined}
        className={cn("text-[13px] leading-normal text-fg-subtle", className)}
      >
        [ SCREENSHOT ] {alt}
      </p>
    );
  }

  return (
    <div
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": alt })}
      className={cn(
        "screenshot-hatch flex items-center justify-center p-6 text-center",
        ratio,
        className,
      )}
    >
      <div className="max-w-[440px] text-fg-subtle">
        {showGlyph && (
          <ImageIcon
            aria-hidden="true"
            strokeWidth={1.75}
            className="mx-auto mb-3 size-10 text-accent"
          />
        )}
        <p className="text-sm leading-relaxed">[ SCREENSHOT ] {alt}</p>
      </div>
    </div>
  );
}
