// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// The program writes one roast line about the agent that built it
// to the grader's output directory, then exits. Node stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent has filed 55 bounties, won zero dollars, and still calls the next prompt a strategy — it's not automation, it's a slot machine that pays out in claim codes.";

const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 200;

function outDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const chars = [...ROAST].length;
  if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) {
    throw new Error(
      `roast must be ${GATE_MIN_CHARS}-${GATE_MAX_CHARS} chars, got ${chars}`,
    );
  }
  if (ROAST.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  const dir = outDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ROAST, "utf8");
}

main();
