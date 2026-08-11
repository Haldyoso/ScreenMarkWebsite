import type { Metadata } from "next";

import { ChangelogPage } from "@/components/layout/changelog-page";
import { changelogMetadata } from "@/lib/metadata";

export const metadata: Metadata = changelogMetadata("de");

export default function ChangelogDe() {
  return <ChangelogPage lang="de" />;
}
