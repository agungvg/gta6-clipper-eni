# Agent notes — gta6-clipper-01 entry for @lyso

## The task (one page)

Find a GTA 6 moment people will want to watch, cut it into a short
vertical clip that hooks with GTA 6 hype and then pitches make.fun, post
it public on YouTube, and hand the video in through `VIDEO.json`.

## What this entry is

- **Moment:** the action run at 139–143.5s of Rockstar's official GTA VI
  Trailer 2 — helicopter over the swamp, airboat, Jason & Lucia launching
  a green jet ski airborne, a biker with a small plane buzzing past him —
  opened by the 118s car explosion and the 115s flying kick. Chosen
  because none of those beats is in the competition's top 20, and the jet
  ski jump + plane photobomb is the most "only in GTA" visual in the
  trailer.
- **Clip:** `clip-final.mp4` (not committed), 720x1280, 20s, 30fps.
  Hook text in the first 2 seconds, "WAIT FOR THE PLANE..." retention
  tease, slow-motion replays of the two best beats, then a 7-second
  make.fun pitch end card on screen ("MAKE CLIPS LIKE THIS WITH AI —
  AND GET PAID / make.fun / make.fun/bounty/gta6-clipper-01"). Built
  with ffmpeg; the build script lives outside this repository
  (`../gta6-clipper-eni-work/build-clip.sh`).
- **Upload:** Lyso uploads the clip himself from his own YouTube channel
  as a public Short, with the exact description line and the play code
  `makefun-orchid-nettle-kangaroo` (see README.md), then sends the video
  address. Only then does `VIDEO.json` get the real URL and the entry
  get submitted. Never guess the URL.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output/VIDEO.json` and refuses a placeholder URL, so a forgotten
placeholder is caught locally. Check it with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Submit checklist (for the submit session)

1. `VIDEO.json` holds the real public Short URL (Share → Copy link).
2. Video is public, published inside the window (2026-11-20 01:00 UTC to
   2026-11-23 01:00 UTC), description carries the `$500 bounty` line and
   the play code.
3. Bundle the sessions that built this entry (this build session +
   parent chain) with the kit CLI; run `check` on the bundle first.
4. Submit with the kit CLI; verify the entry status. Never submit twice
   without a reason — the last submission before the deadline is final.
