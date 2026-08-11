import type { Metadata } from "next";

import { DocumentShell } from "@/components/layout/document-shell";
import { homeMetadata } from "@/lib/metadata";
import "../globals.css";

/**
 * Root layout for the English route group.
 *
 * Next allows one root layout per route group, and that is the whole reason the
 * app is grouped this way: `<html lang>` has to be a server-rendered attribute
 * per locale, and a single shared root layout could only ever hard-code one
 * value. Moving between groups triggers a full page load, which is exactly
 * right for a language switch.
 *
 * Segoe UI is a Windows system font, so there is no webfont to fetch — the
 * stack is declared once in globals.css and costs zero network requests.
 */
export const metadata: Metadata = homeMetadata("en");

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <DocumentShell lang="en">{children}</DocumentShell>;
}
