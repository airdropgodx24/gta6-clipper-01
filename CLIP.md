# Clip production notes — gta6-clipper-01

## Source

- Rockstar Games, "Grand Theft Auto VI — Launch Trailer", official
  YouTube upload, video id rz1B4B2yBZY, published 15 October 2026.
- Fetched in the build session with yt-dlp (720p, AV1 + Opus, 90.0s).
- Segment used: 54.5s to 56.4s — the biplane wing-walker over the beach.
  Scene boundaries were confirmed with ffmpeg scene detection (cuts at
  54.5s and 56.4s) and by inspecting still frames across the trailer.

## Creative decisions (made in the build session)

- One moment only, not a montage: the wing-walker is the whole clip.
- Hook first: the stunt opens the clip at full speed, captioned
  "GTA 6: HE'S STANDING ON THE PLANE WING" in the top safe area.
- Slow-motion replay at 0.55× gives the viewer a second look and gives
  the pitch a natural place to land without cutting away from the stunt.
- Pitch last, on a frozen frame of the plane close-up, held about 4
  seconds so it can be read: "Make clips like this with AI and earn
  money on make.fun" plus the bounty page address.
- Vertical format by blur-fill: a blurred, darkened copy of the frame
  fills 1080×1920 behind the full 1080-wide picture, so nothing of the
  beach, the smoke or the wing-walker is cropped away.

## Render

- ffmpeg 8.1.2, one filter graph: trim, blur-fill, drawtext captions and
  pitch, tpad freeze for the pitch card, audio trimmed and slowed with
  the picture and faded out at the end.
- Output: gta6-wing-walker-clip.mp4 — 1080×1920, 30fps, 9.57s,
  H.264 (CRF 19) + AAC 160k, faststart. About 2.9 MB.
- Verified after rendering by extracting stills at 1s, 3.5s and 7.5s:
  hook caption, slow-motion caption and pitch card all render inside
  the frame and stay readable.

## Hand-off

The entrant uploads the file to YouTube himself as a public Short with
the title and description in UPLOAD.md. Once the video is public, its
address replaces the placeholder in VIDEO.json and the entry is
submitted with that commit.
