# The Plate with a Flag: Japan's department stores (episode 4)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `station-store/` (episode 3): how the department-store dining hall, with its food models and meal tickets, produced Mitsukoshi's 1930 plate for children, which became Japan's kids' meal. It ends by teasing episode 5, the elephant on the roof.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/flag-plate_9x16.mp4` | `video/flag-plate_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/flag-plate_9x16_music.mp4` | `video/flag-plate_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS. The narrated mix uses the quieter music level adopted after episode 3.

## Notes on the content

- Every date, figure and claim on screen comes from the script (1907, 1927 and 4,778 diners a day, 1917, 1930, 30 sen and its 2008 equivalent, 1950). No statistics were added.
- All visuals are drawn in code; none are archive images. The Depression chart is a schematic with no real data, labelled on screen.
- The flag: the hook repeats episode 3's red-disc flag; the 1930 plate shows a blank flag with a question mark until the line "one account says it was Mitsukoshi's own", when Mitsukoshi's 越 mark fades in under that caption.
- The "25 sen" curry price card is carried over from episode 3 (Hankyu's dining hall); it is not in this episode's script.
- Additions beyond the script: the kanji お子様ランチ, 食堂, 洋食, 食券, 昭和恐慌 and 安藤太郎; the menu heading お品書き; the dish names on the food models.
- Invented props: the goods on the shelves, the six food models, the picture-plate motifs, the layout of the 1930 plate, the modern kids' meal, the novelty plates' contents and the rooftop.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.12). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
