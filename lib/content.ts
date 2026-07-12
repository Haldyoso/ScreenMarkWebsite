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
      "Nothing is baked in. Click any arrow, shape or label to get eight resize handles, a rotation handle and a live properties card — hours after you drew it.",
    screenshot: {
      alt: "An arrow selected with 8 handles + rotation handle and the floating properties card open.",
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
      alt: "Angle measurement between two edges showing a live 47.5° readout.",
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
      alt: "A frozen part photo with number markers and a green OK stamp.",
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
      alt: "A dialog with a blurred serial field and a focus rectangle around one control.",
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
      alt: "Freeze mode active with the FROZEN chip on the floating toolbar.",
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

export const compareRows: CompareRow[] = [
  {
    label: "Annotations stay fully editable",
    screenMarkPro: true,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Vector objects (move / resize / rotate)",
    screenMarkPro: true,
    snippingTool: false,
    greenshot: "limited",
    shareX: "limited",
  },
  {
    label: "Layers, groups, lock & reorder",
    screenMarkPro: true,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "CAD arc & angle measurement",
    screenMarkPro: true,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  {
    label: "Portable — no installation",
    screenMarkPro: true,
    snippingTool: false,
    greenshot: "installer",
    shareX: "installer",
  },
  {
    label: "Fully offline · no telemetry",
    screenMarkPro: true,
    snippingTool: true,
    greenshot: true,
    shareX: "opt-out",
  },
  {
    label: "Editable project format (JSON)",
    screenMarkPro: true,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Freeze mode",
    caption:
      "Frozen CAD viewport with an editable arrow selected and the floating toolbar in FROZEN state.",
    screenshot: {
      alt: "Frozen CAD viewport with an editable arrow selected and the floating toolbar in FROZEN state.",
    },
  },
  {
    title: "Properties panel",
    caption:
      "Floating properties card showing transform, stroke, arrowheads and opacity for a selected shape.",
    screenshot: {
      alt: "Floating properties card showing transform, stroke, arrowheads and opacity for a selected shape.",
    },
  },
  {
    title: "Layers panel",
    caption:
      "Layers panel with a nested group, a hidden marker and a locked background capture.",
    screenshot: {
      alt: "Layers panel with a nested group, a hidden marker and a locked background capture.",
    },
  },
  {
    title: "QA inspection",
    caption:
      "Inspection screenshot with number markers, blur over a serial number and a green OK stamp.",
    screenshot: {
      alt: "Inspection screenshot with number markers, blur over a serial number and a green OK stamp.",
    },
  },
  {
    title: "Angle measurement",
    caption: "Two edges with a 3-point angle measurement showing a live 47.5° readout.",
    screenshot: {
      alt: "Two edges with a 3-point angle measurement showing a live 47.5° readout.",
    },
  },
  {
    title: "Export dialog",
    caption:
      "Export dialog with region, format, destination options and a live preview thumbnail.",
    screenshot: {
      alt: "Export dialog with region, format, destination options and a live preview thumbnail.",
    },
  },
];

export const shortcuts: Shortcut[] = [
  { label: "Selection tool", keys: ["V"] },
  { label: "Arrow", keys: ["A"] },
  { label: "Rectangle", keys: ["R"] },
  { label: "Text", keys: ["T"] },
  { label: "Number markers", keys: ["N"] },
  { label: "Blur", keys: ["B"] },
  { label: "Freeze screen", keys: ["F"] },
  { label: "Group", keys: ["Ctrl", "G"] },
  { label: "Undo", keys: ["Ctrl", "Z"] },
  { label: "Copy to clipboard", keys: ["Ctrl", "C"] },
  { label: "Repeat last export", keys: ["Ctrl", "E"] },
  { label: "Save project", keys: ["Ctrl", "S"] },
];

export const faqs: Faq[] = [
  {
    question: "Do I need to install anything?",
    answer:
      "No. ScreenMarkPro is a portable application — unzip the folder and run the executable. It needs no installer, no administrator rights and no registry changes, so it works fine on locked-down corporate machines and from a USB stick.",
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
      "Yes. Save your work as a .smp.json project to keep every object editable, or export a PNG/JPG for sharing. Autosave also keeps a rolling snapshot so you can recover after a crash.",
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
  alt: "Main application window — frozen CAD viewport with a selected editable arrow (8 handles + rotation), floating properties card, and grouped number markers ①②③.",
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
