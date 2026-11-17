# Down to the Basement: Japan's department stores (episode 13)

A 97-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It traces the depachika, the department-store basement food hall, from a ground-floor food section at Shirokiya in 1911, through the first basement food floor in Osaka in 1922, frozen fish in 1923, a famous-names arcade in Nagoya in 1936 and Shibuya's Noren-gai in 1951, to the word "depachika" taking off in 2000. It ends by teasing episode 14, the January ekiben fair held every year since 1966.

Episode 12 (White Day), which episode 11 teases and this episode's brief refers back to, is not in this repository; the previous film here is `three-bars/` (episode 11).

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/depachika_9x16.mp4` | `video/depachika_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/depachika_9x16_music.mp4` | `video/depachika_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- Every date, figure and claim on screen comes from the script (1911, 1922, 1923, 1936, 1951 and 15 shops, 2000, 2013 and "over a quarter", 1966). "Dec 1923" for the frozen fish is the brief's on-screen line; the narration says "after the 1923 earthquake". No statistics were added.
- The 1911 "first" stays attributed on screen: "One business historian: 'the first food section'". The 1922 basement "first" is stated as the narration states it.
- All visuals are drawn in code; none are archive images. Stores are generic buildings and counters, and no store or shop logo is drawn: Toraya and Colombin appear as plain text on generic lightboxes.
- The 1923 earthquake is named in a plain label only; nothing of the disaster is shown.
- The Noren-gai scene draws exactly 15 stalls, each with a differently patterned parcel; the patterns are invented and are not the shops' real wrapping papers.
- The pie chart is labelled "SCHEMATIC": it shows a quarter plus a dashed sliver for "over a quarter", not a measured share.
- Additions beyond the script: the kanji and kana のれん街 (Noren-gai) and 駅弁 (ekiben); デパ地下 is the brief's own on-screen line; the labels "1F" and "B1"; "FAMOUS SHOPS · ONE SIGN" on the 1936 sign; "COFFEE" and "BISCUITS" on two tins; "EP 3'S STATION STORE" beside Tōyoko.
- Invented props: the escalator and food hall, bottles, tins and spice jars, the stairway and "FOOD" sign, the fish on ice, the newspaper card, the lightboxes, the curtains and parcels, the deli counter and its staff and shoppers, and the train-lidded bento boxes (a generic train, not a real livery).

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.19). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 97 master_9x16.mp4`.
