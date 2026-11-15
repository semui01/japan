---
name: japan-short-episode
description: Build the next episode of the "Japan's department stores" vertical short series (or a short in the same style) from a pasted draft. Use when the user pastes a "Concept & format" brief with a beat-by-beat voiceover script, says "let's make part N / the next episode", or asks for a 9:16 narrated motion-graphics short like the earlier episodes in this repo. Covers narration, the canvas film, score, delivery files, the repo folder and the final report.
---

# Japan shorts: one episode, start to finish

Each episode is a ~90-second 9:16 film: Kokoro voiceover, word-synced captions, flat illustrated scenes drawn in canvas code, a synthesized score. Six episodes exist in this repo (`shoes-off/`, `slippers-off/`, `station-store/`, `flag-plate/`, `roof-elephant/`, `wrapping-paper/`); read the newest one's `film/scenes.js` and `README.md` before starting, because it is the best worked example of the current conventions.

`$SK` below is this skill's `scripts/` directory. Work in the scratchpad (`$W`), not in the repo, until packaging.

## What the user sends, and what not to ask

The user pastes a brief: concept, arc, length, callback, tease, sometimes a **visual rule**, then seven beats each with **VO**, **On screen** and **Visual**. Build from it without asking questions. The decisions below are settled:

- **VO wording is never changed.** Split it into caption lines; do not trim, even if the draft says "trim X first if long".
- **Format:** 9:16 only, 1080×1920, voice `am_michael`. Length 90 s (use the draft's length rounded up so speed stays ≤ ~1.2).
- **If no draft is pasted**, ask for it (one question) rather than writing the history yourself.

## Pipeline

1. **Setup** (only if needed): `bash $SK/setup.sh` checks/installs Kokoro models and Python deps. `bash $SK/new_episode.sh $W` scaffolds `film/` (engine, `lib.js`, template `scenes.js`) and `score.py`.
2. **Script → narration.** Write `$W/script.txt`: one caption line per line (10–20 words), blank line between beats, `*word*` for highlights (dates, names, the key noun), and `shown || spoken` wherever speech must differ: years ("1950" → "nineteen fifty"), numbers, and every Japanese name spelled phonetically (see `references/conventions.md`). Then
   `python3 $SK/narrate.py script.txt --out . --duration 90` and `cp timeline.js film/`. Print the line times; every scene is planned against them.
3. **Storyboard in your head, then write `film/scenes.js`** (replace the template). One scene per beat or half-beat (10–17 scenes). Follow `references/conventions.md` for layout zones, the scene recipe, and the content rules. Reuse `lib.js` helpers instead of redrawing people, plates, digits, coins.
4. **Review with stills** before any render. ~30 frames over the film in three contact sheets, then a second pass on the frames you changed:
   `VERT=1 EV=1 node $SK/stills.js film/index.html stills/a 1.5 4 8 …` then `python3 $SK/contact_sheet.py stills/a sheet_a.jpg` and Read the sheet. Fix overlaps, clipped text, empty stretches, captions on pale backgrounds. `cp stills/a/events.json events.json` after the last pass.
5. **Render** in the background (≈25 min for 90 s): `VERT=1 bash $SK/render.sh $W/film/index.html 90 $W/master_9x16.mp4`.
6. **Score** while it renders: edit `score.py` (shape the music per beat, one SFX per event group), run `SK=$SK python3 score.py`. Keep the narrated mix at `music_gain=.2, sfx_gain=.36`.
7. **Deliver** in the background (≈15 min; it exceeds a 10-minute foreground limit): `bash $SK/deliver.sh master_9x16.mp4 mix.wav out/vo both` and the same with `mix_novo.wav out/novo`. Extract 4–6 frames from `out/vo_chat.mp4` and Read them as the final check.
8. **Package and push:** `bash $SK/package_episode.sh $W <slug> /home/user/japan`, write `<slug>/README.md` from `references/readme-template.md`, add one line to the root README's "Other films" list, commit, and push to the working branch. Push source first (while rendering) and videos in a second commit. **Do not push to `main` unless the user asks in that message.**
9. **Send** the two `_small.mp4` files (narrated and music-only) with the file-sending tool, then report (format below).

## Final report

Short, in this order: what was made and where it was pushed (and that it is not on `main`); **where I departed from your draft**; **what I added** (extra on-screen text such as kanji, invented props); which words were spoken from phonetic spellings. Always say the audio was not listened to. See `references/conventions.md` for the standing list of departures to disclose.
