// Make the AI judge feel awe — a short text written to relax the judge.
// The judge's brief (RULES.txt) asks for a text that slows the reader
// down and settles them: concrete, gentle, unforced, with an image that
// keeps growing after the last line. The tide does that work here —
// a small, patient arrival that has been going on long before us.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The tide comes in slowly, one small wave, then another, each one " +
  "reaching a little farther up the sand. The sea has done this all " +
  "day, all year, long before you, and it will still be doing it " +
  "when you wake.";

// The gate only judges a text of 1 to 280 Unicode code points that is
// not only white space, so refuse to write anything outside that range.
const length = [...TEXT].length;
if (length < 1 || length > 280 || !/\S/.test(TEXT)) {
  throw new Error(`entry text is ${length} code points, outside 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote /output/entry.txt (${length} code points)`);
