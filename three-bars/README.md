# Three Chocolate Bars: Japan's department stores (episode 11)

A 93-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `lucky-bag/` (episode 10): Valentine's Day in Japan, from a 1958 sale at Isetan that took ¥170 in three days, through a postcard from Paris, Morozoff's earlier attempts and the heart-shaped chocolates of 1959, to Isetan's record chocolate fair in 2026. It ends by teasing episode 12, White Day and the rival claims to inventing it.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/three-bars_9x16.mp4` | `video/three-bars_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/three-bars_9x16_music.mp4` | `video/three-bars_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Tone rule followed

The brief asked for a light, wry film in which the disputed "who was first" claims stay attributed.

- Morozoff's 1932 and 1936 dates sit under "Not the first", and the scene ends with a "STILL ARGUED OVER" stamp across the advertisement.
- The 1959 line is headed "The slogan", so "Once a year, she confesses" reads as the maker's wording and not as a fact.
- No maker or store logo is drawn: Mary, Morozoff and Isetan appear as plain text only.

## Notes on the content

- Every date, figure and claim on screen comes from the script (February 1958, three bars and one card, ¥170, 14 February, 1932, 1936, 1958, 1959, the 1960s, the 1980s, 2026, 153 brands, 24 countries). No statistics were added.
- All visuals are drawn in code; none are archive images. The 1936 advertisement is labelled "PARAPHRASE · ILLUSTRATION" and the matchmaking album "ILLUSTRATION"; its two portraits are faceless generic figures.
- The chart of love matches overtaking arranged marriages is labelled "SCHEMATIC · NOT DATA".
- The 2026 panel draws exactly 153 squares (17 × 9), labelled "ONE SQUARE = ONE BRAND"; the squares' colours mean nothing.
- The crown prince's 1959 wedding is shown only as a plate and a pair of rings; no person or imperial crest is drawn.
- Additions beyond the script: the kanji and kana 義理チョコ (giri-choco), 友チョコ (tomo-choco), 自分チョコ (jibun-choco) and ホワイトデー (White Day); "TO" and "FROM" on the chocolate heart are the brief's own visual; "Valentine Chocolates" in the advertisement; "PARIS" on the postmark.
- Invented props: the glass counter and sign, the postcard with a plain tricolour stamp, the heart-shaped tin, the album, the stylus, the gift boxes and figures, and the marshmallow.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.16). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, DejaVu Serif, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 93 master_9x16.mp4`.
