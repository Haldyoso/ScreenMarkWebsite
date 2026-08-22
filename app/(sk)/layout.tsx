import type { Metadata } from "next";

import { DocumentShell } from "@/components/layout/document-shell";
import { homeMetadata } from "@/lib/metadata";
import "../globals.css";

/** Root layout for the Slovak route group — see app/(en)/layout.tsx for why. */
export const metadata: Metadata = homeMetadata("sk");

export default function SkLayout({ children }: { children: React.ReactNode }) {
  return <DocumentShell lang="sk">{children}</DocumentShell>;
}
