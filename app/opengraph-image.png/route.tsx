import { ImageResponse } from "next/og";

/**
 * Deliberately a route handler at /opengraph-image.png rather than Next's
 * `app/opengraph-image.tsx` file convention. The convention exports to an
 * extensionless out/opengraph-image, and GitHub Pages types files purely by
 * extension — scrapers then get application/octet-stream and drop the card.
 * It also wins over `openGraph.images` in layout.tsx, so it can't just be
 * pointed elsewhere. Naming the segment .png puts the extension in the
 * exported filename; layout.tsx references this URL explicitly.
 */
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

/** Social card: the same dark canvas, accent glow and gradient wordmark as the hero. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 88px",
          backgroundColor: "#0E0F11",
          backgroundImage:
            "radial-gradient(900px 500px at 85% -10%, rgba(76,141,214,0.28), transparent 60%)",
          color: "#F2F3F5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundImage: "linear-gradient(145deg, #4C8DD6, #3E79BE)",
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 20 L14 6 l4 4 L8 20 Z" />
              <path d="M14 6 l2-2 4 4 -2 2" />
            </svg>
          </div>
          {/* Satori requires an explicit display on any node with 2+ children. */}
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span>Screen</span>
            <span style={{ color: "#4C8DD6" }}>Mark</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          <span>Draw directly on your screen.</span>
          <span style={{ color: "#3FB6A8" }}>Edit everything later.</span>
        </div>

        <div style={{ marginTop: 36, fontSize: 27, color: "#9BA1AA" }}>
          Portable · Windows 10 &amp; 11 · No installation · Vector, always editable
        </div>
      </div>
    ),
    size,
  );
}
