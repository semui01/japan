# The Lucky Bag: Japan's department stores (episode 10)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `christmas-japan/` (episode 9): the fukubukuro, the sealed New Year lucky bag, from the year's first sale in a late-Edo print and the rival origin stories to bubble-era bags with a Picasso and a Renoir, and stores now closed on New Year's Day. It ends by teasing episode 11, Valentine's Day and the 1958 chocolate fair that sold three bars.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/lucky-bag_9x16.mp4` | `video/lucky-bag_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/lucky-bag_9x16_music.mp4` | `video/lucky-bag_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Tone rule followed

The brief asked for a light, playful film in which every origin claim is attributed, because the records are thin.

- The fabric-scraps origin is headed "The usual story".
- Echigoya, Daimaru and Matsuya each appear as a shop curtain stamped with a question mark, with a question mark after the name, under the line "The records are thin".
- The gold obi carries "One version says: Daimaru".
- No shop crest, logo or real curtain design is drawn.

## Notes on the content

- Every date, figure and claim on screen comes from the script (2 January, late-Edo print of Shinsaibashi in Osaka, the three store names, the gold obi, late Shōwa and unsold stock, ¥500,000,000 with a Picasso and a Renoir, 2025 and 1 January, the 2nd, 1958 and three bars). No statistics were added.
- All visuals are drawn in code; none are archive images. The street scene is labelled "ILLUSTRATION · NOT THE ACTUAL PRINT". The two gilt frames are empty and labelled "EMPTY FRAMES · ILLUSTRATION"; no artwork is shown.
- Additions beyond the script: the kanji and kana 福袋 (fukubukuro) and 初売り (hatsuuri); the saying 残り物には福がある is the brief's own on-screen line; the ticket reading "Admit one · Experience"; a "CLOSED" sign on the shutter; the numbers 1, 2, 3 over the chocolate bars.
- Invented props: the red paper bags, the cloth sack, the queue, the lanterns and shopfronts, the stockroom shelf and boxes, the clear bag and its contents, the shutters, the New Year pine-and-bamboo decorations and rising sun, the counter and chocolate bars.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.06). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
