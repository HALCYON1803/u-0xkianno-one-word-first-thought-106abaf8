// One Word, First Thought — this program writes exactly one word to /output/entry.txt.
// The word is psithurism: the sound of wind whispering through trees.
// It is rare enough to surprise, vivid enough to picture at once, and its soft
// sibilants sound like the thing itself — a whisper made into a word.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "psithurism"; // one word, ten letters, no explanation, no second draft.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD); // exactly the word, nothing else.
