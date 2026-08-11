import { ImageResponse } from "next/og";

import { OgCard } from "@/components/og-card";

/**
 * Deliberately a route handler at /opengraph-image.png rather than Next's
 * `app/opengraph-image.tsx` file convention. The convention exports to an
 * extensionless out/opengraph-image, and GitHub Pages types files purely by
 * extension — scrapers then get application/octet-stream and drop the card.
 * It also wins over `openGraph.images` in the metadata, so it can't just be
 * pointed elsewhere. Naming the segment .png puts the extension in the
 * exported filename; lib/metadata.ts references this URL explicitly.
 *
 * One route per locale, because a static export has no way to vary a single
 * route by query string. The three differ only in the Lang they pass.
 */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(<OgCard lang="en" />, size);
}
