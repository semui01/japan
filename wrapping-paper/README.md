# The Wrapping Paper and Anpanman: Japan's department stores (episode 6)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `roof-elephant/` (episode 5): Mitsukoshi's 1950 wrapping paper, drawn by the painter Inokuma Gen'ichirō from beach pebbles and lettered by Yanase Takashi, the young ad man who later created Anpanman. It ends by teasing episode 7, Japan's first elevator girls.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/wrapping-paper_9x16.mp4` | `video/wrapping-paper_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/wrapping-paper_9x16_music.mp4` | `video/wrapping-paper_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Visual rule followed

Neither Mitsukoshi's actual paper nor Anpanman appears anywhere.

- The paper is shown as a generic stand-in pattern of magenta rings and bars, generated in code (`paperPattern` in `film/scenes.js`). It is not a copy or tracing of the real design.
- The "mitsukoshi" lettering is an abstract looping scrawl, labelled on screen "illustrative scrawl · not the actual logotype", with the word set in an ordinary italic typeface beside it.
- Anpanman is named in text only; the character is never drawn.
- Yanase and Inokuma are shown as generic figures, not likenesses.

## Notes on the content

- Every date and claim on screen comes from the script (1950, 1953, 1973 and age 54, 1988, 2014, 2025, 1 April 1929). No statistics were added.
- All visuals are drawn in code; none are archive images.
- Additions beyond the script: the kanji 猪熊弦一郎, 犬吠埼, 華ひらく and the hiragana やなせたかし; "75 years on" is the brief's on-screen line.
- Invented props: the postwar street, the studio, the lighthouse on the cape, the desk and lamp, the 2014 bag's dot pattern, the clapperboard and the elevator.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.16). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
