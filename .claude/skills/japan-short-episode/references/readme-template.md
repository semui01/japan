# <Title>: Japan's department stores (episode N)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `<previous-slug>/` (episode N−1): <one-sentence summary>. It ends by teasing episode N+1, <tease>.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/<slug>_9x16.mp4` | `video/<slug>_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/<slug>_9x16_music.mp4` | `video/<slug>_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- Every date, figure and claim on screen comes from the script (<list them>). No statistics were added.
- All visuals are drawn in code; none are archive images. <labelled stand-ins, schematics, paraphrases>
- <how any visual rule or hedged claim was handled>
- Additions beyond the script: <every kanji/kana string and extra label>.
- Invented props: <list>.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed <from narrate.py>). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
