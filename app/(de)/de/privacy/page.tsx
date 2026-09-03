import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata: Metadata = legalMetadata("privacy", "de");

export default function PrivacyDe() {
  return <LegalPage kind="privacy" lang="de" />;
}

