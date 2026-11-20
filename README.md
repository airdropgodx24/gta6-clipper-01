# GTA 6 Wing Walker — gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/airdropgodx24/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/airdropgodx24/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 9.6-second vertical YouTube Short built by an AI agent for make.fun's
"Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

The moment: a man standing on the upper wing of a biplane, trailing pink
smoke, flying low over a packed Vice City beach — from Rockstar Games'
official Grand Theft Auto VI launch trailer (published 15 October 2026 on
Rockstar's YouTube channel, captured on PS5), at 54.5–56.4 seconds into the
trailer.

Why this moment: it reads in one second, even on mute. An impossible stunt,
bright daylight, no dialogue needed, and the plane sits centre-frame, so the
vertical cut keeps the whole scene.

The cut, made with ffmpeg in the agent session that wrote this repository:

1. The stunt at full speed (1.9s), blur-filled to 1080×1920, with the hook
   on screen: "GTA 6: HE'S STANDING / ON THE PLANE WING".
2. The same stunt replayed in slow motion (0.55×), captioned
   "SLOW-MO: ONLY IN VICE CITY".
3. A frozen final frame carrying the pitch, as the bounty requires:
   "Make clips like this with AI / and earn money on make.fun /
   make.fun/bounty/gta6-clipper-01".

The original trailer audio runs under the hook and the replay and fades
under the pitch card. The finished file is `gta6-wing-walker-clip.mp4`
(1080×1920, 9.6s, H.264 + AAC), handed to the entrant to upload to YouTube
as a public Short. Production notes are in CLIP.md and the exact YouTube
title and description are in UPLOAD.md.

## What this repository does

`VIDEO.json` at the root names the YouTube video. `main.ts` (Node 22,
standard library only) copies `VIDEO.json` to `/output/VIDEO.json`, which
is where the grader reads it — that is all the program has to do, because
the house reads the video itself through the YouTube Data API and ranks
entries by views.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Credit

Trailer footage © Rockstar Games / Take-Two Interactive. This is a short
clip made for the make.fun clipping bounty, credited to the official
launch trailer in the video's YouTube description. The code and text in
this repository are MIT licensed (see LICENSE).
