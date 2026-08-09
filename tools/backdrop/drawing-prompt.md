# ChatGPT prompt — ISO-compliant technical drawing as SVG

Paste everything below the line into ChatGPT. Ask for **code**, never an image.

---

You are a mechanical design engineer. Produce a production-quality 2D detail drawing
as a **single self-contained SVG file**.

## Output rules (hard)

- Reply with **SVG source code only**, in one code block. No commentary before or after.
- Do **not** generate a raster image, and do not use an image-generation tool. I need vector code.
- The SVG must be self-contained: no external fonts, no external images, no `<script>`, no CSS `@import`.
- Root element: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"
  preserveAspectRatio="xMidYMid meet">` with `width="100%" height="100%"`.
- All geometry must be real vector primitives (`path`, `line`, `circle`, `rect`, `text`).
  Do not fake anything with blurred shapes or decorative noise.

## Purpose

It will be displayed full-screen at 1920×1080 as the background for product screenshots.
Mechanical engineers will look at it closely, so it has to survive scrutiny — this is not
decorative "blueprint art". Every number must be internally consistent and every line type
must mean what the standard says it means.

## Canvas and sheet

- Background of the whole canvas: neutral grey `#4A4F55` (the look of a drawing open in a viewer).
- Drawing sheet: white `#FFFFFF`, **1442 × 1020 px**, top-left corner at `x=239, y=30`.
  That is ISO A3 landscape proportion (√2), so do not distort it.
- Inside the sheet, an ISO 5457 drawing frame: border line 22 px inside the sheet edge,
  drawn as a continuous wide line.
- Everything (views, dimensions, notes, title block) must sit **inside** that frame with a
  comfortable margin. Nothing may touch or cross the frame.

## The part (use exactly these dimensions — do not invent your own)

**Guide bracket**, machined from solid.

- Overall plate: **160 wide × 120 high × 20 thick**.
- Corner fillets: **R8** on all four corners of the plate outline.
- Central bore: **⌀50 H7** (+0,025 / 0), through, on the plate centre.
- Counterbore on the front face, coaxial with the bore: **⌀70 × 6 deep**.
- Bore mouth chamfer: **2 × 45°**.
- 4 × fixing holes: **⌀11 through**, counterbored **⌀18 × 8 deep** from the front face,
  on a rectangular pitch of **120 × 80**, symmetric about both centre lines.
- Material: **EN AW-6082 T6**. Surface: **Ra 1,6** machined all over.
- General tolerances: **ISO 2768-mK**. Break sharp edges 0,5 × 45°.

Consistency you must respect (already checked — do not contradict it):
160 − 120 = 40, so each fixing hole centre is **20 from the left/right edge**;
120 − 80 = 40, so each is **20 from the top/bottom edge**. Bore counterbore radius 35,
fixing counterbore radius 9, centre-to-hole distance √(60² + 40²) ≈ 72,1 — no interference.

## Views

Use **first-angle projection (ISO / European)** and place the ISO projection symbol
(truncated cone) in or beside the title block. Do not label it "third angle".

1. **Front view** — looking at the face with the counterbores. Show the plate outline with
   corner fillets, the central bore, the ⌀70 counterbore circle, and the four fixing holes
   with their counterbore circles. Full centre lines through the part and short cross
   centre marks on every hole.
2. **Section A–A** — a full section, horizontal cutting plane through the centre of the
   part, placed to the right of (or below) the front view per first-angle rules. Show the
   bore, both counterbore steps and the chamfer. **Hatch the cut material** with continuous
   narrow lines at 45°, evenly spaced, in one consistent direction.
3. Mark the cutting plane on the front view with a long-dashed dotted **wide** line at the
   ends and direction changes, with arrows and the letters **A  A**.

## Line types and widths (ISO 128-2 / 128-24, line group 0,5)

Use exactly two weights, at a clear 2:1 ratio — this contrast is the single strongest
signal of a real drawing:

| Element | Type | stroke-width |
|---|---|---|
| Visible edges, outlines, frame, cutting-plane ends | continuous **wide** | 2.0 |
| Dimension, extension, leader, hatching, title-block dividers | continuous **narrow** | 1.0 |
| Hidden edges | dashed narrow | 1.0, dash ~10 5 |
| Centre lines, pitch lines, axes | long-dashed dotted narrow | 1.0, dash ~24 4 4 4 |

Set `stroke-linecap="butt"` and `shape-rendering="geometricPrecision"` on geometry.

## Dimensioning (ISO 129-1)

- Extension lines: start with a visible **gap of ~6 px** from the part outline and extend
  ~8 px **past** the dimension line. They must never touch the outline.
- Dimension lines: continuous narrow, with **filled, closed arrowheads**, slender
  (about 15° included angle), roughly 18 px long. Same arrow size everywhere.
- Values placed **above** and roughly centred on the dimension line, readable from the
  bottom and from the right — never upside down.
- Symbols: `⌀` for diameter, `R` for radius, `□` for square, `×` for repetition
  (e.g. `4× ⌀11`). Use the real characters, not letters like "O" or "x".
- Dimension the part **once**. No redundant or duplicated dimensions, no closed dimension
  chains. Give: 160, 120, 20, the 120 and 80 hole pitches, ⌀50 H7, ⌀70 × 6, 4× ⌀11,
  ⌀18 × 8, R8, and the 2 × 45° chamfer.
- Group dimensions in tidy rows/columns outside the outline, smallest nearest the part,
  larger ones further out. Do not let dimension lines cross each other or cross the part.

## Geometric tolerancing (ISO 1101)

Include a small, correct set — boxed frames with the proper leader or datum attachment:

- Datum **A** = the back face (datum triangle on the section view).
- **Flatness 0,05** on datum face A.
- **Perpendicularity ⌀0,05 A** on the ⌀50 bore axis.
- **Position ⌀0,2 Ⓜ A B** on the four fixing holes, attached under the `4× ⌀11` callout.

Draw the tolerance frames as rectangles divided by vertical narrow lines, and the datum
as a filled triangle with a boxed letter.

## Title block (ISO 7200) — bottom-right, inside the frame

Draw it as a proper ruled table with narrow dividers and small grey field labels above the
values. Use **exactly these values** (they are referenced elsewhere, keep them):

- TITLE: `GUIDE BRACKET`
- PART NO.: `BRK-4417-02`
- MATERIAL: `EN AW-6082 T6`
- **SERIAL: `SN-2026-004417`**  ← must be present
- **DRAWN: `M. Halus`**  ← must be present
- **CHECKED: `J. Novak`**  ← must be present
- DATE: `2026-07-02` · SCALE: `1:2` · SHEET: `1 / 1` · SIZE: `A3` · REV: `C`
- Projection symbol (first angle) in its own cell.

Also include, above the title block, a small **revision table** with columns REV /
DESCRIPTION / DATE and two rows:
`B · Bore tolerance H7 · 2026-03-11` and `C · Added flatness callout · 2026-07-02`.

And a general note line along the bottom-left inside the frame:
`ISO 2768-mK · Dimensions in millimetres · First angle projection · Ra 1,6 machined all over`

## Typography

- Font stack on every `<text>`: `"Arial Narrow", "Liberation Sans Narrow", Arial, sans-serif`
  (a condensed sans is the closest widely-installed stand-in for ISO 3098 lettering).
- Dimension values and notes ~15 px; title-block values ~15 px; field labels ~11 px in grey
  `#5A5A5A`; the drawing title ~19 px bold. Keep sizes consistent across the sheet.
- All text in **English**. Use a comma as the decimal separator (`0,05`), per ISO.
- Text colour `#1A1A1A`, not pure black.

## Do NOT do any of these (they are what makes a drawing look amateur)

- Do not let dimension or extension lines touch, cross or overlap the part outline.
- Do not draw every line at the same width.
- Do not omit the gap between extension lines and the part.
- Do not dimension the same feature twice, and do not close a dimension chain.
- Do not let centre lines stop at the feature edge — they must extend a few px past it.
- Do not place text upside down or at arbitrary angles.
- Do not overlap labels, leaders, views or the title block.
- Do not add shadows, gradients, glows, colour fills, "blueprint" blue, or fake grain.
- Do not add a company logo or any real company name.
- Do not leave placeholder text such as "XX" or "TBD".

## Before you answer, verify

1. Every dimension is consistent with the geometry actually drawn (measure it in your head:
   the plate really is 160 across in the coordinates you emitted, holes really are 120 apart).
2. Exactly two stroke widths dominate, at a visible 2:1 ratio.
3. Nothing overlaps anything, and nothing crosses the frame.
4. The section hatching is one consistent direction and spacing, only on cut material.
5. Every `<text>` uses the declared font stack, and no glyph is a placeholder box.
6. The SVG parses standalone and renders correctly at 1920×1080.

Output the SVG now.
