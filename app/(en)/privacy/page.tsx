import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata: Metadata = legalMetadata("privacy", "en");

export default function Privacy() {
  return <LegalPage kind="privacy" lang="en" />;
}

