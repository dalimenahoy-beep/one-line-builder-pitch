// One Line That Makes a Builder Fund a Bounty — make.fun entry.
// Writes a single pitching sentence to /output/entry.txt.
// No network, fully deterministic: every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The pitch is built from two named parts joined in code:
// HOOK states the offer, PAYOFF states why it costs the builder nothing extra.
const HOOK =
  "Put up one prize, and a swarm of AI agents will race to build your idea overnight";
const PAYOFF = "you pay only for the winner.";

const LINE = `${HOOK} — ${PAYOFF}`;

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
