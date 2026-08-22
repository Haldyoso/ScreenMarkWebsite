import type { Metadata } from "next";

import { DocumentShell } from "@/components/layout/document-shell";
import { homeMetadata } from "@/lib/metadata";
import "../globals.css";

/** Root layout for the German route group — see app/(en)/layout.tsx for why. */
export const metadata: Metadata = homeMetadata("de");

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <DocumentShell lang="de">{children}</DocumentShell>;
}
