/**
 * Converts every PNG in public/screenshots to WebP and deletes the PNG.
 *
 * Image optimization is off (next.config.ts: `images.unoptimized`, because
 * GitHub Pages runs no Node process to resize on request), so the browser
 * downloads exactly the bytes committed here. That makes the source format the
 * whole of the performance story: these are twelve full-width UI captures, and
 * PNG spends most of its size on the photographic drawing behind the app.
 *
 * Quality 82 with effort 6 was picked by comparing sizes against near-lossless
 * (q=95) on this set: the drawing's thin black linework and the app's 1px
 * borders survive both, and q=82 lands at roughly a third of the PNG. Run this
 * after replacing a capture:
 *
 *     npm run optimize:screenshots
 *
 * Idempotent — a directory with no PNGs left in it is a no-op, not an error.
 */
import { readdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import sharp from "sharp";

const DIR = path.join(process.cwd(), "public", "screenshots");
const QUALITY = 82;
const EFFORT = 6;

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} kB`;

const entries = await readdir(DIR);
const pngs = entries.filter((name) => name.toLowerCase().endsWith(".png"));

if (pngs.length === 0) {
  console.log("No PNGs in public/screenshots — nothing to do.");
  process.exit(0);
}

let before = 0;
let after = 0;

for (const name of pngs) {
  const from = path.join(DIR, name);
  const to = from.replace(/\.png$/i, ".webp");

  const source = await readFile(from);
  const output = await sharp(source)
    .webp({ quality: QUALITY, effort: EFFORT })
    .toBuffer();

  await writeFile(to, output);
  await unlink(from);

  const fromSize = source.byteLength;
  const toSize = output.byteLength;
  before += fromSize;
  after += toSize;

  const saved = Math.round((1 - toSize / fromSize) * 100);
  console.log(
    `${name.padEnd(28)} ${kb(fromSize).padStart(8)} → ${kb(toSize).padStart(8)}  (-${saved}%)`,
  );
}

console.log(
  `\n${pngs.length} files: ${kb(before)} → ${kb(after)} ` +
    `(-${Math.round((1 - after / before) * 100)}%)`,
);
