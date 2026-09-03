import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata: Metadata = legalMetadata("terms", "de");

export default function TermsDe() {
  return <LegalPage kind="terms" lang="de" />;
}

