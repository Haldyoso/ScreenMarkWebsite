import {
  ArrowRight,
  CircleCheck,
  Download,
  Focus,
  Highlighter,
  History,
  Layers,
  ListOrdered,
  Monitor,
  Pencil,
  Ruler,
  Shapes,
  Shield,
  Snowflake,
  Stamp,
  Type,
  Zap,
} from "lucide-react";

import type {
  Benefit,
  CompareRow,
  Faq,
  FooterColumn,
  GalleryItem,
  GridFeature,
  Shortcut,
  ShowcaseFeature,
  Step,
} from "@/types";

export const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Open → Draw → Export",
    description:
      "Launch to first stroke in under two seconds. Copy a finished markup to the clipboard with a single keystroke.",
  },
  {
    icon: Pencil,
    title: "Everything stays editable",
    description:
      "Select, move, rotate, restyle or regroup any object — hours later. Nothing is flattened until you export.",
  },
  {
    icon: Shield,
    title: "Private by design",
    description:
      "Runs fully offline. No account, no telemetry, no cloud. Your screenshots never leave the machine.",
  },
  {
    icon: Monitor,
    title: "Built for CAD workflows",
    description:
      "3-point arcs, angle measurement and freeze mode match how CATIA, NX and Creo users already think.",
  },
];

export const showcase: ShowcaseFeature[] = [
  {
    id: "editable-objects",
    icon: Pencil,
    name: "Editable objects",
    short: "Select, move, rotate and restyle anything, anytime.",
    description:
      "Nothing is baked in. Click any arrow, shape or label to get eight resize handles, a rotation handle and a right-click menu of colour, width and opacity — hours after you drew it.",
    screenshot: {
      src: "/screenshots/editable-objects.png",
      alt: "A red rectangle drawn over a bore on an engineering drawing, reselected and showing eight resize handles plus a rotation handle above it.",
    },
  },
  {
    id: "cad-measurement",
    icon: Ruler,
    name: "CAD measurement",
    short: "3-point arcs and angle tools with live readouts.",
    description:
      "Angle and 3-point arc tools follow CATIA/NX muscle memory: click start, end, then vertex, with a live degree/radius readout that trails the cursor. Measurements stay editable objects.",
    screenshot: {
      src: "/screenshots/measurement.png",
      alt: "An angle measured across two bolt holes reading 35.2°, beside a 58 mm dimension placed on the same drawing.",
    },
  },
  {
    id: "qa-stamps",
    icon: CircleCheck,
    name: "QA stamps & markers",
    short: "OK / NOK stamps and auto-numbered badges.",
    description:
      "Drop auto-incrementing ①②③ markers, letter markers, check/cross and one-click OK / NOK stamps at a uniform size — built for inspection reports.",
    screenshot: {
      src: "/screenshots/qa-stamps.png",
      alt: "An engineering drawing marked with numbered badges ①②③ and a green OK stamp beside a red NOK stamp.",
    },
  },
  {
    id: "blur-focus",
    icon: Focus,
    name: "Blur & focus",
    short: "Hide sensitive data, spotlight what matters.",
    description:
      "Blur serial numbers and operator names, or drop a focus rectangle that dims everything except the region under discussion. Both remain adjustable objects.",
    screenshot: {
      src: "/screenshots/blur-focus.png",
      alt: "A drawing dimmed by a focus rectangle so only the title block stays lit, with the serial number and both operator names blurred out.",
    },
  },
  {
    id: "freeze-boards",
    icon: Snowflake,
    name: "Freeze & boards",
    short: "Freeze live screens, or sketch on white/black.",
    description:
      "Freeze all monitors so live gauges can’t change mid-markup, or switch to whiteboard / blackboard for training sessions — annotations persist per mode.",
    screenshot: {
      src: "/screenshots/freeze-mode.png",
      alt: "The screen held as a frozen still while annotations are drawn on top, with the freeze toggle lit in the tool panel.",
    },
  },
];

export const steps: Step[] = [
  {
    title: "Open",
    description:
      "Press the global hotkey. The overlay activates on the current monitor with your last tool pre-armed. Freeze the screen if it’s live.",
  },
  {
    title: "Draw",
    description:
      "Arrows, callouts, blur, stamps, measurements — each is a single keystroke. Everything you place remains a selectable object.",
  },
  {
    title: "Export",
    description:
      "Copy to clipboard, save a PNG/JPG, or keep the editable JSON project for re-inspection later. Repeat your last export with one key.",
  },
];

export const gridFeatures: GridFeature[] = [
  {
    icon: Highlighter,
    title: "Pen & highlighter",
    description:
      "Freehand ink and translucent highlight, with optional auto-fade for presentations.",
  },
  {
    icon: ArrowRight,
    title: "Lines & arrows",
    description:
      "Straight lines and arrows with four arrowhead styles, dash/dot, and Shift-to-45° locking.",
  },
  {
    icon: Shapes,
    title: "Shapes",
    description:
      "Rectangle, rounded rectangle, ellipse and 3-point arc with adjustable corner radius.",
  },
  {
    icon: Type,
    title: "Text & speech bubbles",
    description: "Rich text objects and speech bubbles with full typography controls.",
  },
  {
    icon: ListOrdered,
    title: "Number & letter markers",
    description:
      "Auto-incrementing badges you can renumber, restart or switch between digits and letters.",
  },
  {
    icon: Stamp,
    title: "Check, cross & stamps",
    description: "One-click checkmarks, crosses and OK / NOK stamps at a consistent size.",
  },
  {
    icon: Layers,
    title: "Layers & groups",
    description: "Group, lock, hide and reorder objects in a Figma-style layers panel.",
  },
  {
    icon: History,
    title: "History & autosave",
    description:
      "Named, clickable undo history and a 30-second autosave that survives crashes.",
  },
  {
    icon: Download,
    title: "Flexible export",
    description:
      "PNG, transparent PNG, JPG, clipboard, per-monitor, selection region — or an editable JSON project.",
  },
];

/**
 * Pointofix leads the competitor columns because it is the only one of the four
 * that does the same thing ScreenMark does — a draw-anywhere overlay rather than
 * a capture-then-edit tool. The others are the fallbacks people reach for when
 * they don't know a tool like this exists.
 *
 * Its column is transcribed from the vendor's own feature and download pages
 * (pointofix.de/bedienung.php, /download.php, /hilfe.php), not from memory:
 * v1.8.0, released 2018-05-11. The help is explicit that undo reverses "the last
 * drawing action", that a text block stops being movable once committed, and
 * that the selection tool moves a rectangular *pixel region* — it is a paint-
 * over annotator, so nothing survives as an object. Layers, grouping, angle and
 * dimension measurement and scale calibration appear nowhere in its docs.
 *
 * The magnifier row is left in deliberately even though ScreenMark loses it. A
 * table the incumbent loses 8–0 reads as a strawman, and this one is real:
 * Pointofix ships a 200/400% loupe and a 10× wheel zoom, which ScreenMark's own
 * README still lists under planned work.
 */
export const compareRows: CompareRow[] = [
  {
    label: "Annotations stay fully editable",
    screenMarkPro: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Vector objects (move / resize / rotate)",
    screenMarkPro: true,
    pointofix: false,
    snippingTool: false,
    greenshot: "limited",
    shareX: "limited",
  },
  {
    label: "Layers, groups, lock & reorder",
    screenMarkPro: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "CAD arc & angle measurement",
    screenMarkPro: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Real-world scale (px → mm)",
    screenMarkPro: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Editable project format (JSON)",
    screenMarkPro: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Screen magnifier & zoom",
    screenMarkPro: "planned",
    pointofix: true,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Portable — no installation",
    screenMarkPro: true,
    pointofix: true,
    snippingTool: false,
    greenshot: "installer",
    shareX: "installer",
  },
  {
    label: "Fully offline · no telemetry",
    screenMarkPro: true,
    pointofix: true,
    snippingTool: true,
    greenshot: true,
    shareX: "opt-out",
  },
];

/**
 * Real captures, not mock-ups: ScreenMark annotating an engineering drawing
 * held open on a second screen. Caption and alt say the same thing because the
 * gallery card's aria-label already carries the caption — see Gallery/Lightbox.
 */
export const gallery: GalleryItem[] = [
  {
    title: "Markup on a frozen screen",
    caption:
      "Numbered badges and an arrow over a frozen engineering drawing, the arrow still selected and editable.",
    screenshot: {
      src: "/screenshots/gallery-markup.png",
      alt: "Numbered badges and an arrow over a frozen engineering drawing, the arrow still selected and editable.",
    },
  },
  {
    title: "Editable geometry",
    caption:
      "A rectangle reselected long after it was drawn, showing eight resize handles and a rotation handle.",
    screenshot: {
      src: "/screenshots/gallery-handles.png",
      alt: "A rectangle reselected long after it was drawn, showing eight resize handles and a rotation handle.",
    },
  },
  {
    title: "Command palette",
    caption:
      "Ctrl+Shift+P opens a searchable list of every command with the key that runs it.",
    screenshot: {
      src: "/screenshots/gallery-palette.png",
      alt: "Ctrl+Shift+P opens a searchable list of every command with the key that runs it.",
    },
  },
  {
    title: "QA inspection",
    caption:
      "Numbered findings on a drawing with a green OK and a red NOK stamp at a matched size.",
    screenshot: {
      src: "/screenshots/gallery-qa.png",
      alt: "Numbered findings on a drawing with a green OK and a red NOK stamp at a matched size.",
    },
  },
  {
    title: "Angle and dimension",
    caption:
      "A 35.2° angle measured across two bolt holes and a 58 mm dimension, both drawn straight onto the screen.",
    screenshot: {
      src: "/screenshots/gallery-angle.png",
      alt: "A 35.2° angle measured across two bolt holes and a 58 mm dimension, both drawn straight onto the screen.",
    },
  },
  {
    title: "Export menu",
    caption:
      "Export offers PNG with the screenshot, transparent PNG, JPG, clipboard, print, region and screen recording.",
    screenshot: {
      src: "/screenshots/gallery-export.png",
      alt: "Export offers PNG with the screenshot, transparent PNG, JPG, clipboard, print, region and screen recording.",
    },
  },
];

/**
 * Transcribed from the app's own command table (Core/CommandRegistry.cs) and,
 * for Freeze, its registered global hotkeys (Services/SettingsService.cs).
 * Freeze is the only entry here that fires while ScreenMark has no focus,
 * which is why it alone carries modifiers — the in-overlay tools are all a
 * single letter.
 */
export const shortcuts: Shortcut[] = [
  { label: "Selection tool", keys: ["V"] },
  { label: "Arrow", keys: ["A"] },
  { label: "Rectangle", keys: ["R"] },
  { label: "Text", keys: ["T"] },
  { label: "Number markers", keys: ["N"] },
  { label: "Dimension", keys: ["D"] },
  { label: "Angle measure", keys: ["G"] },
  { label: "Blur", keys: ["B"] },
  { label: "Export region", keys: ["Q"] },
  { label: "Freeze screen", keys: ["Ctrl", "Alt", "F"] },
  { label: "Undo", keys: ["Ctrl", "Z"] },
  { label: "Repeat last command", keys: ["Space"] },
];

export const faqs: Faq[] = [
  {
    question: "Do I need to install anything?",
    answer:
      "No. ScreenMark is a portable application — unzip the folder and run the executable. It needs no installer, no administrator rights and no registry changes, so it works fine on locked-down corporate machines and from a USB stick.",
  },
  {
    question: "What does “everything stays editable” actually mean?",
    answer:
      "Every mark you make is a vector object, not baked-in pixels. You can reselect any arrow, shape, text or measurement later to move, resize, rotate, recolor, regroup or delete it — just like objects in PowerPoint or Illustrator. Your work is only flattened when you export to an image.",
  },
  {
    question: "Does it send any data to the internet?",
    answer:
      "Never. The app runs completely offline with no account, no cloud sync and no telemetry. Your screenshots and annotations stay on your machine.",
  },
  {
    question: "Does it work across multiple monitors?",
    answer:
      "Yes. Freeze mode captures every monitor independently, and the floating toolbar follows your cursor between screens. Mixed-DPI multi-monitor setups are supported.",
  },
  {
    question: "Can I re-open and keep editing an annotation later?",
    answer:
      "Yes. Save your work as a .smpj project — readable JSON — to keep every object editable, or export a PNG/JPG for sharing. Autosave also keeps a rolling snapshot so you can recover after a crash.",
  },
  {
    question: "Which Windows versions are supported?",
    answer:
      "Windows 10 and Windows 11, 64-bit. The interface uses native Segoe UI and Fluent conventions, scales correctly on high-DPI displays, and honors your system light/dark and reduced-motion settings.",
  },
];

export const heroChips: string[] = [
  "Offline",
  "No telemetry",
  "No admin rights",
  "Multi-monitor",
  "Vector · always editable",
];

export const heroScreenshot = {
  src: "/screenshots/hero.png",
  alt: "ScreenMark's tool panel beside a frozen engineering drawing, marked up with numbered badges ①②③ and a red arrow that is selected and still editable.",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Comparison", href: "#compare" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Documentation", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Keyboard shortcuts", href: "#shortcuts" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "License (MIT)", href: "#" },
      { label: "Report an issue", href: "#" },
    ],
  },
];
