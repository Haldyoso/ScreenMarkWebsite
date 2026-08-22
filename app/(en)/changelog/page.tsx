import type { Metadata } from "next";

import { ChangelogPage } from "@/components/layout/changelog-page";
import { changelogMetadata } from "@/lib/metadata";

export const metadata: Metadata = changelogMetadata("en");

export default function Changelog() {
  return <ChangelogPage lang="en" />;
}
