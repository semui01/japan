# Shoes Off: why Shōwa Japan slipped its shoes off on trains and in cars

A 75-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It ends on a cliffhanger about department-store shoe checks ("It took an earthquake to end that").

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/shoes-off_9x16.mp4` | `video/shoes-off_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/shoes-off_9x16_music.mp4` | `video/shoes-off_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- Every figure on screen comes from the script (1905 slippers on trains, cars per household ×9 from 1963 to 1972, about a fifth of roads paved, dokin until the 1980s). No statistics were added.
- All visuals are drawn in code. The Ginza / Matsuzakaya card at the end is an illustrated stand-in labelled "ILLUSTRATION", not the period postcard held by Taitō City Library (NDL Search, CC BY 4.0).
- Invented props: the newspaper masthead (毎朝新聞), shoe-check tag "No. 428" and the cubby numbers.
- "PAIR #001" is a storytelling device: one pair of loafers followed from the train floor to the car's shoe tray to the rest-stop car park.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.22). Spoken from phonetic spellings: Show-wah, Dye-mah-roo, doh-keen (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

```
script.txt         narration, one line per caption line (`shown || spoken`, `*word*` = highlight)
timeline.json      line start/end times produced by tools/narrate.py
film/              canvas animation: index.html + engine.js + scenes.js + timeline.js
events.json        event times exported from the film, read by score.py
score.py           music + SFX timed to those events (run from this folder; needs the mixes' narration as vo_full.wav)
audio/             narration.wav, mix.flac (with narration), mix_novo.flac (music + SFX only)
tools/             narration, still/frame rendering, sound kit, delivery scripts
```

URL switches on `film/index.html`: `v` = 9:16 (the film is laid out for this), `t=42.5` = render one frame at 42.5 s, `play` = play in real time. Render with `VERT=1 bash tools/render.sh film/index.html 75 master_9x16.mp4`.
