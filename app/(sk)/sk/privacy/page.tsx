import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata: Metadata = legalMetadata("privacy", "sk");

export default function PrivacySk() {
  return <LegalPage kind="privacy" lang="sk" />;
}

