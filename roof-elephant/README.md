# The Elephant on the Roof: Japan's department stores (episode 5)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `flag-plate/` (episode 4): how a baby elephant, Taka-chan, came to live on the roof of Takashimaya in Tokyo from 1950 to 1954, and why a country just out of war fell for her. It ends by teasing episode 6, Mitsukoshi's 1950 wrapping paper.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/roof-elephant_9x16.mp4` | `video/roof-elephant_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/roof-elephant_9x16_music.mp4` | `video/roof-elephant_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- Every date, weight and claim on screen comes from the script (May 1950, 1907, 1931, 1949, 1950–1954, 30 kg a day, 560 kg → 1,800 kg, 1954). No statistics were added. The weight readout animates between the two scripted figures; the in-between values are not data.
- All visuals are drawn in code; none are archive images. The rooftop tower is a stylised illustration (labelled on screen), not a likeness of the real structure, and the glass canopy is only suggested.
- The wartime beat shows empty enclosures and fading silhouettes; no harm is depicted.
- The tease names Anpanman in text only; the character is not drawn. The wrapping paper is shown as generic abstract pink shapes, not a copy of Mitsukoshi's design.
- Additions beyond the script: the kanji 高島屋, 高子, 上野動物園 and ぞうさん; the hiragana ぞうれっしゃ banner on the train; the "From Thailand" crate label.
- Invented props: the crate, the crowd, the zoo animals in the 1931 cages, the hay bales, the scale platform, the child rider and the doves.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.15). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
