import type { Metadata } from "next";

import { ChangelogPage } from "@/components/layout/changelog-page";
import { changelogMetadata } from "@/lib/metadata";

export const metadata: Metadata = changelogMetadata("sk");

export default function ChangelogSk() {
  return <ChangelogPage lang="sk" />;
}
