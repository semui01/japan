# The Fire and the Myth: Japan's department stores (episode 8)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `elevator-girls/` (episode 7): the Shirokiya fire of 16 December 1932, which killed 14 people, and the story it left behind, that it made Japanese women start wearing underwear. It ends by teasing episode 9, how Christmas came to Japan's department stores.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/fire-myth_9x16.mp4` | `video/fire-myth_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/fire-myth_9x16_music.mp4` | `video/fire-myth_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Tone rule followed

The brief asked for a sober, plain film: the myth told as a claim and never acted out, no dramatized falls, no jokes, no suggestive imagery.

- No person is drawn anywhere in the film. The fire is a building silhouette, a glow on one floor and ink smoke.
- The fourteen dead are shown as fourteen lights; thirteen dim when the narration says thirteen fell. Nothing falls on screen.
- The kimono story appears only as words on a card headed "The story, as repeated" and tagged "A claim", beside a single swaying rope. The card later returns stamped "A big exaggeration".
- The clothing-shop window shows bolts of cloth and folded kimono only: no mannequins and no underwear.
- The score has no drums; the fire, the toll and the chrysanthemum scenes carry only low pads and soft bells. Titles sit level and plates fade in rather than bounce.

## Notes on the content

- Every date, figure and claim on screen comes from the script (16 December 1932, 9:23, fourth-floor toy department, celluloid toys, four floors, 14 dead and 13 who fell, Tokyo Asahi and 7 May 1933, about 1%, "dubious"). The "7 May" is from the brief's on-screen line; the narration says "May 1933". No statistics were added.
- All visuals are drawn in code; none are archive images. The store is a generic eight-storey block, not the real facade. The newspaper is unreadable grey bars labelled "ILLUSTRATION · NOT THE ACTUAL PAGE". The rescue chute is labelled "SIMPLE DIAGRAM".
- The curve for "caught on slowly … mostly after the war" is labelled "SCHEMATIC · NOT DATA". The 100-square grid with one lit square restates "about one percent" as "about 1 in 100".
- Additions beyond the script: the kanji 白木屋 (Shirokiya), 東京朝日新聞 (Tokyo Asahi Shimbun) and 井上章一 (Inoue Shōichi); the labels "No sudden jump" and "Titles left unreadable".
- Invented props: the bunting and plain cloth banners, the neighbouring rooftops, the claim card, the stack of books, the shop awning and cloth, and the lit store in the tease.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.19). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
