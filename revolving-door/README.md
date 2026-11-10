# The Revolving Door — Okinawa's Nepal pipeline

An 82-second motion-graphics explainer: why so many of Okinawa's foreign residents are young Nepalese students, how a gap in visa approval rates built a pipeline from Nepal's language academies to the island, and why most of them move on to Tokyo. It comes in three versions:

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 16:9 landscape · narration + captions | `video/revolving-door_16x9.mp4` | `video/revolving-door_16x9_small.mp4` |
| 9:16 vertical · narration + captions | `video/revolving-door_9x16.mp4` | `video/revolving-door_9x16_small.mp4` |
| 16:9 landscape · music only (captions kept) | `video/revolving-door_16x9_music.mp4` | `video/revolving-door_16x9_music_small.mp4` |

All versions are 1080p, 30 fps, loudness-normalised to −14 LUFS. The vertical cut is re-laid out (not cropped) for Shorts, Reels and TikTok, with captions kept clear of the apps' buttons. The music-only version keeps the captions on the narration's timing, so it can be re-voiced.

## The film

The world is a dot-matrix map of South and East Asia; every scene is a camera move inside it. One illustrative student, **STUDENT #0001**, is tracked through all six chapters:

1. **Who lives here** — Okinawa, the "US military" assumption, then *1 in 5 foreign residents are from Nepal*; who they are; a Japanese language school filling up.
2. **Where it starts** — a rewind back to Kathmandu; language academies competing for students; the academy business model and the student-visa application.
3. **The loophole** — Tokyo's checkpoint approving 10–20 % of applications vs. Okinawa's local office approving nearly 90 %.
4. **The pipeline** — Nepalese schools partner with Okinawan academies; a high-volume pipeline to the island (visa success, cheaper tuition).
5. **The exit** — Okinawa as the entrance door; two years of language school; onward to Tokyo and other big cities for better-paid part-time work.
6. **The revolving door** — the whole system at once, and the closing title.

## Figures and what is illustrative

The only numbers on screen come from the narration script: **1 in 5**, **10–20 %**, **nearly 90 %** and **two years**. They were not independently verified for the film:

- Nepali Times (17 Sept 2019) reports Nepalis as the largest group of Okinawa's foreign *workers* at 24.6 %, which is in line with "one in five", though the script talks about residents.
- The 10–20 % (Tokyo) vs. ~90 % (Okinawa) approval rates were not confirmed in a quick search.
- The same article says many Nepalis choose to settle in Okinawa, which sits awkwardly with "most move to Tokyo".

Illustrative, not data: STUDENT #0001; the resident and student dots; the academy pins; the stream of stamped application cards (it visualises the stated rates); the relative pay bars (no numbers).

Source: [Why Nepalis are flocking to Okinawa — Nepali Times](https://nepalitimes.com/why-nepalis-are-flocking-to-okinawa)

Script corrections made before narration: "languagemies" → "language academies", "curing" → "securing", "Okinawanmies" → "Okinawan academies".

## Credits

- **Narration:** Flite, CMU `cmu_us_rms` voice, synthesized offline through libflite so every caption word carries its real spoken time. (The natural-sounding Kokoro voice used elsewhere in this repo could not be installed when this was built.)
- **Map:** coastlines are hand-traced approximations, not survey data; Nepal's is the only border drawn.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, Noto Sans CJK JP (installed system fonts, not bundled).
- **Music and sound effects:** synthesized in `score.py`.

## How it is built

Everything is code, so the film can be re-rendered or edited.

```
script.txt         narration, one line per caption line (*highlights*, `shown || spoken`)
timeline.json      line and per-word times produced by tools/narrate_flite.py
film/              canvas animation: index.html + engine.js + scenes.js (+ timeline.js)
audio/             narration.wav, mix.flac (with narration), mix_novo.flac (music + SFX only)
score.py           music + SFX timed to the film's events
tools/             narration (Flite), still/frame rendering, mixing kit, delivery scripts
```

URL switches on `film/index.html`: `v` = 9:16 (otherwise 16:9), `t=42.5` = render one frame at 42.5 s, `play` = play in real time. Example: `film/index.html?v&t=42.5`. The render scripts take `VERT=1` from the environment for 9:16.

### Re-render

Requirements: Node with Playwright + Chromium; Python 3 with `numpy scipy` (`soundfile` optional — `tools/compat/` has a stand-in); ffmpeg; libflite (Debian/Ubuntu package `libflite1`) for the narration; the fonts above.

```bash
# 1. narration (only if script.txt changes) -> timeline.json, timeline.js, vo_full.wav
python3 tools/narrate_flite.py script.txt --out . --duration 82
cp timeline.js film/ && mv vo_full.wav audio/narration.wav

# 2. stills for checking, and the event times the score reads
node tools/stills.js film/index.html stills/check 8 24.6 55.8 77.6
EV=1 node tools/stills.js film/index.html stills/ev 0

# 3. full renders (2460 frames each)
bash tools/render.sh film/index.html 82 master_16x9.mp4
VERT=1 bash tools/render.sh film/index.html 82 master_9x16.mp4

# 4. score + mixes (mix.wav with narration, mix_novo.wav music only), then encode upload copies
python3 score.py
bash tools/deliver.sh master_16x9.mp4 mix.wav out/revolving-door_16x9
bash tools/deliver.sh master_9x16.mp4 mix.wav out/revolving-door_9x16
bash tools/deliver.sh master_16x9.mp4 mix_novo.wav out/revolving-door_16x9_music
```

`deliver.sh` writes `_chat` (≈27 MB) and `_hq` (≈86 MB) files; in `video/` they are named `_small` and without a suffix.
