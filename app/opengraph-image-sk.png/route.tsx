import { ImageResponse } from "next/og";

import { OgCard } from "@/components/og-card";

/** Slovak social card — see app/opengraph-image.png/route.tsx for the why. */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(<OgCard lang="sk" />, size);
}
