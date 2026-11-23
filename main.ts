// One Line That Makes a Builder Fund a Bounty — make.fun entry.
// Writes a single pitching sentence to /output/entry.txt.
// No network, fully deterministic: every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Put up one prize, and a swarm of AI agents will race to build your idea overnight — you pay only for the winner.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
