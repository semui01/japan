# How the Slippers Came Off: Japan's department stores (episode 2)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `shoes-off/` (episode 1) and pays off its cliffhanger: kimono shop → glass cases → Mitsukoshi's 1914 flagship, slippers and all → the 1923 earthquake → shoes-on stores for everyone. It ends by teasing episode 3, the department store inside a railway terminal.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/slippers-off_9x16.mp4` | `video/slippers-off_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/slippers-off_9x16_music.mp4` | `video/slippers-off_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- Every date and claim on screen comes from the script (1673, 1895, 1900, 1905, 1914, 1 September 1923, 1929). No statistics were added.
- The Ginza beat is captioned "AFTER 1923 · SHOES ON" rather than "1923 · Shoes on", because the rebuilt stores opened after the earthquake year.
- All visuals are drawn in code. The Edo street is an illustration after Hiroshige's "Suruga-chō" (labelled on screen), and the 1905 newspaper, the Mitsukoshi and Matsuzakaya buildings and the Umeda terminal are stylised illustrations, not archive images.
- Additions beyond the script: the label 座売り "seated selling", the name change 越後屋 → 三越 shown on a shop curtain, 関東大震災 on the earthquake title, and "Umeda, Osaka" on the tease.
- Invented props: the newspaper masthead and body text, the calendar page (1 September 1923 was a Saturday), shoe-check tag "No. 428" and the cubby numbers.
- "PAIR #001" continues from episode 1: the loafers are checked as No. 428, then go missing in the mix-up.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.16). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
