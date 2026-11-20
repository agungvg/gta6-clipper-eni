// gta6-clipper-01 entry for @lyso (make.fun): "Clip GTA 6 for the most YouTube views".
//
// The entry is the video itself, not this program. This program (Node 22,
// standard library only, no network) does exactly one job: it copies
// VIDEO.json from the repository root into /output/VIDEO.json, where the
// house's gate reads it and then reads the video's views through the
// YouTube Data API. Nothing this program writes about the video is scored.
//
// VIDEO.json holds {"url": "https://www.youtube.com/shorts/<id>"} (or the
// equivalent watch / youtu.be form) naming the public YouTube Short that
// carries the clip. A placeholder URL is refused by design, so this program
// validates the shape before copying and exits non-zero on a placeholder:
// that way a forgotten placeholder is caught locally instead of at intake.
//
// Local check (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//   cat out/VIDEO.json

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A YouTube video address as the Share button gives it, id = 11 chars.
const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})([?&#].*)?$/;

// Placeholders this entry has used while the video was not uploaded yet.
// "PLACEHOLDER" is 11 characters, so it passes the shape check above on
// its own — reject it (and its siblings) by name as well.
const KNOWN_PLACEHOLDERS = new Set([
  'PLACEHOLDER',
  'UPLOAD_PENDING',
  'REPLACE_WITH_VIDEO_ID',
]);

const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoJson;
try {
  videoJson = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof videoJson !== 'object' ||
  videoJson === null ||
  typeof videoJson.url !== 'string' ||
  !YOUTUBE_URL.test(videoJson.url) ||
  KNOWN_PLACEHOLDERS.has(YOUTUBE_URL.exec(videoJson.url)?.[4] ?? '')
) {
  console.error(
    'VIDEO.json does not name a YouTube video yet (expected {"url": "https://www.youtube.com/shorts/<11-char id>"}). ' +
      'Upload the clip, paste its address into VIDEO.json, and run again.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`VIDEO.json copied to ${OUTPUT_DIR} (video ${videoJson.url})`);
