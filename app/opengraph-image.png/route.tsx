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

/** Social card: the same dark canvas, Signal Blue glow and real mark as the hero. */
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
          backgroundColor: "#0B0D14",
          backgroundImage:
            "radial-gradient(900px 500px at 85% -10%, rgba(45,125,246,0.28), transparent 60%)",
          color: "#E8EAF0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/*
           * The `mid` level of detail from the brand icon set — the step meant
           * for 40–64px, which drops the dash-dot guides the full mark carries.
           * Those need stroke-dasharray, which Satori does not render.
           */}
          <svg width="72" height="72" viewBox="0 0 256 256">
            <g transform="translate(-14.121 -14.399) scale(1.11249)">
              <path
                d="M121 46 H61 A24 24 0 0 0 37 70 V186 A24 24 0 0 0 61 210 H192"
                fill="none"
                stroke="#2D7DF6"
                strokeWidth="21"
                strokeLinejoin="round"
              />
              <rect x="73" y="122.5" width="37" height="11" fill="#E8EAF0" />
              <rect x="132" y="122.5" width="37" height="11" fill="#E8EAF0" />
              <rect x="115.5" y="80" width="11" height="37" fill="#E8EAF0" />
              <rect x="115.5" y="139" width="11" height="37" fill="#E8EAF0" />
              <path d="M142 47 H212 V104" fill="none" stroke="#F5842B" strokeWidth="9" />
              <rect x="133.5" y="38.5" width="17" height="17" fill="#F5842B" />
              <rect x="203.5" y="95.5" width="17" height="17" fill="#F5842B" />
              <rect x="203.5" y="119.5" width="17" height="17" fill="#2D7DF6" />
              <circle cx="212" cy="47" r="17" fill="#FFFFFF" />
              <circle cx="212" cy="47" r="11" fill="#2D7DF6" />
              <circle cx="212" cy="209" r="17" fill="#FFFFFF" />
              <circle cx="212" cy="209" r="11" fill="#2D7DF6" />
            </g>
          </svg>
          {/* Satori requires an explicit display on any node with 2+ children. */}
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span>Screen</span>
            <span style={{ color: "#2D7DF6" }}>Mark</span>
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
          {/* The page gradient-fills this line; Satori gets its lighter end flat. */}
          <span style={{ color: "#7FA8F9" }}>Edit everything later.</span>
        </div>

        <div style={{ marginTop: 36, fontSize: 27, color: "#9AA1B2" }}>
          Portable · Windows 10 &amp; 11 · No installation · Vector, always editable
        </div>
      </div>
    ),
    size,
  );
}
