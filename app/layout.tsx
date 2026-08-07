import type { Metadata } from "next";

import { site } from "@/lib/site";
import "./globals.css";

const ogAlt = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "screen annotation",
    "screenshot markup",
    "portable Windows app",
    "editable vector annotation",
    "CAD screenshot tool",
    "QA inspection markup",
    "Snipping Tool alternative",
    "Greenshot alternative",
    "ShareX alternative",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "en_US",
    /** Served by the route handler in app/opengraph-image.png/ — see why there. */
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: ogAlt }],
  },
  robots: { index: true, follow: true },
};

/**
 * Segoe UI is a Windows system font, so there is no webfont to fetch — the
 * stack is declared once in globals.css and costs zero network requests.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // downloadUrl is still a "#" placeholder; emitting it would feed Google a link
  // to nowhere, so it is omitted until lib/site.ts points at the real asset.
  const hasRealDownload = site.release.downloadUrl.startsWith("http");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    description: site.description,
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "DesignApplication",
    softwareVersion: site.release.version,
    fileSize: site.release.size.replace("~", "").trim(),
    url: site.url,
    ...(hasRealDownload ? { downloadUrl: site.release.downloadUrl } : {}),
    license: "https://opensource.org/licenses/MIT",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" data-js="off">
      <head>
        {/*
         * Runs before first paint. Only once this flips to "on" does the
         * scroll-reveal CSS hide anything, so a JS-less client gets the whole
         * page and a JS client never sees content flash in then out.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.js="on"`,
          }}
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
