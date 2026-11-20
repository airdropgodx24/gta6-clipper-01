// gta6-clipper-01 hand-in program (Node 22, standard library only).
//
// The entry itself is a public YouTube Short: a wing-walker stunt clipped
// from Rockstar's official GTA 6 launch trailer, finished with an on-screen
// pitch for make.fun. This repository hands the video in through VIDEO.json
// at its root, and this program's only job is to copy that file to the
// output directory the grader reads:
//
//   /output/VIDEO.json
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output, so it can be run locally like this:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Nothing the program writes about the video is scored: the house reads the
// video itself through the YouTube Data API and ranks it by views.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const destination = join(OUTPUT_DIR, 'VIDEO.json');
try {
  copyFileSync(source, destination);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
