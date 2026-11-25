import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words as a tombstone epitaph: a whole working life spent
// saving for retirement, then death the day after it finally arrives.
// Three short beats, the last one the sting — Tuesday retired, Wednesday
// dead. Concrete, universal, and it reads like something carved in stone.
// Dodges the field's saturated angles: the Wi-Fi password, "watch this",
// the manager, the snooze button, subscriptions, customer-support hold,
// and the AI-running-out-of-context joke. No setup the reader must know.
const LINE =
  "I spent my whole life saving for retirement. I retired on Tuesday. This is Wednesday.";

// Gate guard: the competition requires 1 to 150 characters of UTF-8 text,
// not only whitespace. Fail loudly rather than submit an invalid entry.
if (LINE.length < 1 || LINE.length > 150) {
  throw new Error(`entry line must be 1-150 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Deterministic by construction: the same single line is written on every run.
// 85 characters, 85 bytes — well inside the 150-character gate.
