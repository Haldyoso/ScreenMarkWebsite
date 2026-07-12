import type { Metadata } from "next";

import { site } from "@/lib/site";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    description: site.description,
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "DesignApplication",
    softwareVersion: site.release.version,
    fileSize: site.release.size,
    url: site.url,
    downloadUrl: new URL(site.release.downloadUrl, site.url).toString(),
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
