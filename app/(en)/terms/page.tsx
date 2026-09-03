import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata: Metadata = legalMetadata("terms", "en");

export default function Terms() {
  return <LegalPage kind="terms" lang="en" />;
}

