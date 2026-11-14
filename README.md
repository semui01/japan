# Which Prefecture in Japan Has the Most Foreign Residents?

A 60-second motion-graphics short counting down Japan's top 5 prefectures by number of foreign residents, with a synthesized score. It comes in four versions:

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/top5-prefectures_9x16.mp4` | `video/top5-prefectures_9x16_small.mp4` |
| 9:16 vertical · music only · Japanese captions and graphics | `video/top5-prefectures_9x16_ja_music.mp4` | `video/top5-prefectures_9x16_ja_music_small.mp4` |
| 16:9 landscape · English narration + captions | `video/top5-prefectures_16x9.mp4` | `video/top5-prefectures_16x9_small.mp4` |
| 16:9 landscape · music only · Japanese captions and graphics | `video/top5-prefectures_16x9_ja_music.mp4` | `video/top5-prefectures_16x9_ja_music_small.mp4` |

All versions are 1080p, 30 fps, loudness-normalised to −14 LUFS. The vertical cut is made for Shorts, Reels and TikTok. The landscape cut puts the rank card, charts and rail in a left column so the map stays uncovered, which suits YouTube and presentations. The Japanese versions translate all on-screen text, write numbers Japanese-style (82万4486人), and keep the English narration's timing as their pacing.

## The data

Foreign residents (在留外国人) at **end of June 2026**, from the Immigration Services Agency of Japan (出入国在留管理庁), released 16 Oct 2026. National total: **4,281,026** (record high).

| Rank | Prefecture | Foreign residents | Change since Dec 2025 |
|---|---|---|---|
| 1 | Tokyo 東京都 | 824,486 | +23,048 |
| 2 | Osaka 大阪府 | 389,846 | +14,527 |
| 3 | Aichi 愛知県 | 369,849 | +12,049 |
| 4 | Kanagawa 神奈川県 | 331,515 | +14,162 |
| 5 | Saitama 埼玉県 | 305,867 | +14,930 |

Figures calculated for the video:
- Top 5 combined = 2,221,563, which is **51.9 %** of the national total. The waffle chart rounds each prefecture's share to whole squares, giving 52.
- Tokyo's share is **19.3 %** ("nearly 1 in 5"), as stated in the release.
- Tokyo minus (Osaka + Aichi) = 824,486 − 759,695 = **+64,791**.
- Osaka grew from 253,303 (June 2020) to 389,846: **+54 %**. Aichi was 276,282 in June 2020, still ahead of Osaka then.

The 428 dots in the opening stand for about 10,000 people each, but they are decoration: where they land is random, not real locations.

Sources:
- ISA press release, 令和8年6月末現在における在留外国人数について: https://www.moj.go.jp/isa/publications/press/13_00070.html
- June 2020 prefecture figures from the ISA statistics, as tabulated by Ibaraki Prefecture: https://www.pref.ibaraki.jp/bugai/kokusai/tabunka/jpn/data/documents/02_r26zenkokugaikokujinn.pdf

## Credits and licences

- **Prefecture boundaries:** 地球地図日本 / Global Map Japan, Geospatial Information Authority of Japan (GSI), via [dataofjapan/land](https://github.com/dataofjapan/land). Per its terms, credit the source. For commercial use, GSI also asks for a usage report.
- **Neighbouring coastlines:** [Natural Earth](https://www.naturalearthdata.com/) 1:50m land (public domain).
- **Japanese font:** Noto Sans JP, SIL Open Font License 1.1 (`film/NotoSansJP-OFL.txt`).
- **Narration:** Kokoro TTS (voice `af_heart`). Place names are spoken from phonetic spellings: Sai-tama, Eye-chee, Kana-gawa, Oh-saka.
- **Music and sound effects:** synthesized in `score.py`.

## How it is built

Everything is code, so the film can be re-rendered or edited.

```
script.txt         narration, one line per caption line (`shown || spoken`)
timeline.json      line start/end times produced by narrate.py
film/              canvas animation: index.html + engine.js + scenes.js (+ geo.js map data, timeline.js)
audio/             narration.wav, mix.flac (with narration), mix_novo.flac (music + SFX only)
score.py           music + SFX timed to the film's events
tools/             geo prep, narration, still/frame rendering, mixing, delivery scripts
```

URL switches on `film/index.html`: `v` = 9:16 (otherwise 16:9), `ja` = Japanese text and captions, `t=42.5` = render one frame at 42.5 s, `play` = play in real time. Example: `film/index.html?v&ja&t=42.5`. The Japanese caption lines are in `JCAP` in `film/scenes.js`. The render scripts take the same switches from the environment: `VERT=1` for 9:16 and `Q=ja` for Japanese.

### Re-render

Requirements: Node with Playwright + Chromium, Python 3 with `numpy scipy soundfile kokoro-onnx shapely`, and ffmpeg.

```bash
# 1. narration (only if script.txt changes) -> timeline.json, timeline.js, vo_full.wav
python3 tools/narrate.py script.txt --out . --duration 60 --voice af_heart --tail 3.6
python3 tools/regap.py . 17:0.8          # extra suspense pause before "Tokyo"
cp timeline.js film/ && mv vo_full.wav audio/narration.wav

# 2. stills for checking, and the event times the score reads
VERT=1 node tools/stills.js film/index.html stills/check 5 20 42.5 58
EV=1 VERT=1 node tools/stills.js film/index.html stills/ev 0

# 3. full renders (1800 frames each)
VERT=1 bash tools/render.sh film/index.html 60 master_9x16.mp4            # 9:16 English
VERT=1 Q=ja bash tools/render.sh film/index.html 60 master_9x16_ja.mp4    # 9:16 Japanese
bash tools/render.sh film/index.html 60 master_16x9.mp4                   # 16:9 English
Q=ja bash tools/render.sh film/index.html 60 master_16x9_ja.mp4           # 16:9 Japanese

# 4. score + mixes (mix.wav with narration, mix_novo.wav music only), then encode upload copies
python3 score.py
bash tools/deliver.sh master_9x16.mp4 mix.wav out/top5-prefectures_9x16
bash tools/deliver.sh master_9x16_ja.mp4 mix_novo.wav out/top5-prefectures_9x16_ja_music
```

`tools/prep_geo.py` rebuilds `film/geo.js` from `japan.geojson` (dataofjapan/land) and `ne_50m_land.geojson` (Natural Earth).

## Other films in this repo

- `shoes-off/` — *Shoes Off*: why Shōwa Japan slipped its shoes off on trains and in cars (75 s, 9:16). See `shoes-off/README.md`.
- `slippers-off/` — *How the Slippers Came Off*: episode 2, how Japan's department stores dropped the shoe check (90 s, 9:16). See `slippers-off/README.md`.
- `station-store/` — *The Store Inside the Station*: episode 3, how a railway built a department store in its Umeda terminal (92 s, 9:16). See `station-store/README.md`.
- `flag-plate/` — *The Plate with a Flag*: episode 4, how a 1930 department-store plate became Japan's kids' meal (90 s, 9:16). See `flag-plate/README.md`.
- `roof-elephant/` — *The Elephant on the Roof*: episode 5, the baby elephant who lived on Takashimaya's roof, 1950–1954 (90 s, 9:16). See `roof-elephant/README.md`.
