# The Store Inside the Station: Japan's department stores (episode 3)

A 92-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `slippers-off/` (episode 2): how Hankyu, a railway company, tested and then built a department store inside its Umeda terminal in 1929, sold to commuters, and was copied in Tokyo. It ends by teasing episode 4, the plate with a flag.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/station-store_9x16.mp4` | `video/station-store_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/station-store_9x16_music.mp4` | `video/station-store_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- Every date, price and claim on screen comes from the script (1920, 1925, 15 April 1929, 25 sen, 1931, half a sen, 1934, 1936, 1930). No statistics were added.
- All visuals are drawn in code; none are archive images. The 1925 wholesaler notice is a paraphrase and the 1929 opening-day ad is an illustration built from the script's wording; both are labelled on screen. The horseshoe plan is a schematic, labelled "not to scale".
- The rice-only story is stamped "LEGEND" on screen, as in the script.
- Additions beyond the script: the kanji 小林一三, 五島慶太, 阪急, 阪急百貨店 and 東横; the "Osaka 1929 → Tokyo 1934" route strip; 正 tally marks on the clipboard.
- Invented props: the "TENANT STORE" sign, the tally count, the cutaway's floor contents, the sauce bottle and the plate garnishes.
- "COMMUTER #001" is a storytelling device: one commuter tracked from the concourse up to the dining halls.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.22). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 92 master_9x16.mp4`.
