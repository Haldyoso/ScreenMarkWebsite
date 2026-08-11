import { getCopy } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

/**
 * The social card, one per locale. Rendered by the three route handlers under
 * app/opengraph-image*.png/ — see any of them for why they are routes rather
 * than Next's file convention.
 *
 * Satori, not a browser: no CSS variables, no gradient text, no dasharray. The
 * hex values below are the same tokens globals.css declares, inlined because
 * this renders outside the page's stylesheet.
 */
export function OgCard({ lang }: { lang: Lang }) {
  const copy = getCopy(lang);

  return (
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
          /*
           * German runs long enough to wrap the headline onto three lines at
           * 66px, which would collide with the tagline below. The step down
           * costs nothing at card size and keeps all three locales on two.
           */
          fontSize: lang === "de" ? 58 : 66,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: -2,
        }}
      >
        <span>{copy.hero.titleLead}</span>
        {/* The page gradient-fills this line; Satori gets its lighter end flat. */}
        <span style={{ color: "#7FA8F9" }}>{copy.hero.titleAccent}</span>
      </div>

      <div style={{ marginTop: 36, fontSize: 27, color: "#9AA1B2" }}>
        {copy.meta.social}
      </div>
    </div>
  );
}
