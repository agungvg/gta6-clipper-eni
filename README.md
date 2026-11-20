# GTA 6 Clipper — @lyso's entry for make.fun `gta6-clipper-01`

A short vertical clip cut from Rockstar's official GTA VI trailer, made by
my AI agent for a $500 bounty on make.fun — then it turns the GTA 6 hype
into make.fun's pitch: make clips like this with AI and earn money on
make.fun.

- Competition: https://make.fun/bounty/gta6-clipper-01
- Entry: the public YouTube Short named in `VIDEO.json` (places go by its
  views; the 20 most-watched videos share $500)
- This repository holds only the program that hands the video in
  (`main.ts`, Node 22, standard library only: it copies `VIDEO.json` to
  `/output`). The clip itself is the file `clip-final.mp4` next to this
  README (not committed — it is the upload, not the program).

## The clip

**Moment:** the trailer's own action run at 139–143.5s of Rockstar's
official GTA VI Trailer 2 (May 6, 2025) — a helicopter swooping low over
the swamp, an airboat, then Jason & Lucia launching a green jet ski
airborne, then a biker with a small plane buzzing right past him — opened
by the 118s car explosion and the 115s flying kick. None of these beats
is in the competition's current top 20 (checked 2026-11-20: the roof-jump
into the pool, the beach supercar, the crocodile, the prison pickup, the
5-star chase into the ocean and the bike jump are all taken).

**Shape:** vertical 9:16 Short, 20 seconds, 720x1280, 30fps. The GTA 6
moment hooks the viewer in the first 1–2 seconds with big on-screen
text ("GTA 6 JUST BLEW UP!"), the run teases "WAIT FOR THE PLANE...",
the two best beats replay in slow motion ("RUN THAT BACK", "PLANE
PHOTOBOMB!"), then the clip turns to make.fun: a 7-second end card, on
screen, that says you can make clips like this with AI and get paid on
make.fun, with the bounty's page. The trailer's own audio runs throughout.

**How it was made:** the agent picked the moment from the official
trailer, decided the hook and the pitch wording, and cut it with ffmpeg —
trim, vertical crop (with a pan across the bike-and-plane shot so the
plane stays in frame), bold captions, slow-motion replays, end card — all
inside the recorded agent session that built this entry. No downloaded
clip, no hand edit. Build script:
`../gta6-clipper-eni-work/build-clip.sh` (kept out of this repository).

## Upload (for Lyso)

1. Upload `clip-final.mp4` to YouTube as a **public Short** (under 60 s,
   vertical — YouTube treats it as a Short automatically).
2. Title (suggested): `He jumped a jet ski in GTA 6... then a PLANE flew past 😱 #GTA6 #Shorts`
   (alternatives: `GTA 6 is NOT a game anymore 😱 Jet ski jump + plane photobomb` /
   `Only in GTA 6: jet ski jump, then a plane photobombs the shot 😱`)
3. Description — paste these two lines exactly (the first line word for
   word, the second is the play code):

```text
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-orchid-nettle-kangaroo
```

4. Keep the video **public** until the results are out (deadline Sun
   2026-11-23 08:00 WIB; results within a day after).
5. Send me the video's address (Share → Copy link), and I put it in
   `VIDEO.json` and submit.

## The program

`main.ts` copies `VIDEO.json` to `/output/VIDEO.json`. That is all it has
to do — the house reads the video itself through the YouTube Data API and
ranks the entry by its views. It refuses a placeholder URL so a forgotten
placeholder is caught before submitting:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Source

Footage: Rockstar Games' official Grand Theft Auto VI Trailer 2
(https://www.youtube.com/watch?v=VQRLujxTm3c), used as the bounty asks —
a GTA 6 moment cut into a short clip. The clip, the edit and the pitch are
this entry's own work.
