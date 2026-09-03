import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata: Metadata = legalMetadata("terms", "sk");

export default function TermsSk() {
  return <LegalPage kind="terms" lang="sk" />;
}

