import type { LucideIcon } from "lucide-react";

/**
 * Every screenshot on the site is described by this shape. `src` is optional on
 * purpose: until a real capture exists, `<Screenshot>` renders a labeled
 * placeholder from `alt`. Dropping a file into /public/screenshots and setting
 * `src` here switches that slot over to `next/image` with no other changes.
 */
export interface Screenshot {
  src?: string;
  /** Describes the annotation shown, not the app in general. */
  alt: string;
  width?: number;
  height?: number;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ShowcaseFeature {
  id: string;
  icon: LucideIcon;
  name: string;
  /** One-line summary shown in the selectable row. */
  short: string;
  /** Long copy shown in the preview panel. */
  description: string;
  screenshot: Screenshot;
}

export interface GridFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

/** A cell is either a plain yes/no, or a short qualifying note ("limited"). */
export type CompareCell = boolean | string;

export interface CompareRow {
  label: string;
  screenMarkPro: CompareCell;
  /** The head-to-head competitor: the other draw-anywhere overlay. */
  pointofix: CompareCell;
  snippingTool: CompareCell;
  greenshot: CompareCell;
  shareX: CompareCell;
}

export interface GalleryItem {
  title: string;
  caption: string;
  screenshot: Screenshot;
}

export interface Shortcut {
  label: string;
  /** Rendered as separate <kbd> chips joined by "+". */
  keys: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
