# Hige (ひげの日本史): Japan's long, complicated history with facial hair

An 82-second landscape motion-graphics short with English narration, word-timed Japanese captions and a synthesized score. One face is followed through five eras as the beard goes from warrior's pride to banned, back to imperial fashion, out again with the salaryman, and into court in 2019.

| Version | High quality | Small (≈27 MB) |
|---|---|---|
| 16:9 landscape · English narration + Japanese captions | `video/hige_16x9.mp4` | `video/hige_16x9_small.mp4` |
| 16:9 landscape · music and sound effects only (captions kept) | `video/hige_16x9_music.mp4` | `video/hige_16x9_music_small.mp4` |

All versions are 1920×1080, 30 fps, loudness-normalised to −14 LUFS.

## Notes on the content

- **Approval graph:** the "Beard Approval Index" line is an illustration of the swings described in the narration, not measured data. It is labelled "ILLUSTRATIVE · NOT MEASURED DATA" on screen.
- **The Edo ban (大髭禁止令):** confirmed as issued under the fourth shogun Tokugawa Ietsuna (r. 1651–80). The exact year was not confirmed, so the narration says "late sixteen hundreds"; the on-screen year counter reads about 1670 at that moment.
- **General Nagaoka Gaishi's moustache:** most sources give about 51 cm (20 in) tip to tip and one gives 70 cm. The narration says "more than fifty centimeters".
- **Isesaki, Gunma (2010):** the city barred male municipal staff from wearing beards at work.
- **Osaka (2019):** the Osaka District Court ruled that giving two subway drivers lower performance ratings over their beards was unlawful and ordered the city to pay ¥440,000 in total.
- **Japanese captions** are a natural translation of the narration, not word-for-word, and their reveal timing follows the English line rather than individual Japanese words.
- "HIGE #001" is a storytelling device, and the faces are generic figures, not portraits of real people.

Sources:
- Edo-era beard bans: https://intojapanwaraku.com/rock/culture-rock/114296/
- Osaka ruling: https://japantimes.co.jp/news/2019/01/17/national/crime-legal/osaka-subway-drivers-win-court-case-right-grow-beards
- Isesaki ban: https://www.japantimes.co.jp/news/2010/05/20/national/gunma-bureaucrats-get-beard-ban/
- Nagaoka Gaishi: https://www.tokyoweekender.com/art_and_culture/history/celebrating-movember-best-mustaches-japan-history/ and https://content.time.com/time/subscriber/article/0,33009,745458,00.html (51 cm); https://tofugu.com/japan/japanese-mustache (70 cm)

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 0.93).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, Noto Sans CJK JP and Noto Serif CJK JP (system fonts at render time; on Debian/Ubuntu, `fonts-noto-cjk` and `fonts-noto-cjk-extra`).

## How it is built

```
script.txt         one line per caption line: `Japanese caption || English narration`, `*word*` = highlight
timeline.json      line start/end times produced by tools/narrate.py
film/              canvas animation: index.html + engine.js + scenes.js + timeline.js
events.json        event times exported from the film, read by score.py
score.py           music + SFX timed to those events (run from this folder; needs audio/narration.wav copied to vo_full.wav)
audio/             narration.wav, mix.flac (with narration), mix_novo.flac (music + SFX only)
tools/             narration, still/frame rendering, sound kit, delivery scripts
```

`film/engine.js` differs from the other episodes' engine: captions are drawn from the Japanese half of each script line, while `wt(line, 'word')` timing is taken from the English narration.

URL switches on `film/index.html`: `t=42.5` = render one frame at 42.5 s, `play` = play in real time. The film is laid out for 16:9 only. Render with `bash tools/render.sh film/index.html 82 master_16x9.mp4`.
