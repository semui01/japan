# Christmas Comes to Japan: Japan's department stores (episode 9)

A 94-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `fire-myth/` (episode 8) and answers the question that episode left behind: why a Tokyo department store was holding a Christmas sale in 1932. It runs from the first Christmas Mass in 1552, through Meidi-ya's Ginza storefront in 1900 and the 25 December holiday of 1927–1947, to the postwar sales. It ends by teasing episode 10, New Year and the lucky bag.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/christmas-japan_9x16.mp4` | `video/christmas-japan_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/christmas-japan_9x16_music.mp4` | `video/christmas-japan_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Tone rule followed

The brief asked for a lighter film than episode 8, with the holiday beat kept neutral because the day off was a day of imperial mourning.

- The 25 December 1926 scene is a plain grey calendar page. Its labels fade in without a bounce, there are no decorations or lights, and the music drops to a single low pad.
- The numeral turns red only when the narration reaches "national holiday", as a calendar marks a holiday. Lights and garlands return in the next scene, on Christmas Eve.
- The 1940 scene, where the word disappears from newspapers, is also kept quiet.

## Notes on the content

- Every date, figure and claim on screen comes from the script (1932, 1552, 1568 and "reportedly 2,000 people", over two centuries, 1900, 25 December 1926, 1927–1947, 1931 and "more than 7,400 cafés", 1940). No statistics were added.
- Hedged claims stay hedged: "Reportedly: 2,000 people" and "A Tokyo paper, 1931".
- All visuals are drawn in code; none are archive images. The 1568 play is labelled "ILLUSTRATION · WOODBLOCK STYLE" and the newspaper headlines "PARAPHRASE · ILLUSTRATION". The crowd at the play and the café windows are decoration, not counts.
- Meidi-ya's storefront is a generic brick shopfront, not the real building or its logo. The "MERRY XMAS" banner is the brief's period-style lettering.
- Additions beyond the script: the kanji and kana 明治屋 (Meidi-ya), カフェー (café), クリスマス (Christmas) and 福袋 (fukubukuro); a "CHRISTMAS SALE" banner on the postwar shop floor; the headline wording "Ginza's decorations are up" and "Here's what to give", taken from the narration.
- Invented props: the candles, the stage and its three performers, the gas lamps, the wreath and garlands, the calendar, the café trees and cups, the dance-hall lanterns, the tinsel, paper bells and gift boxes, and the lucky bags.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.17). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, DejaVu Serif, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 94 master_9x16.mp4`.
