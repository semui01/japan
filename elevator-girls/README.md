# Going Up: Japan's department stores (episode 7)

A 90-second vertical motion-graphics short with English narration, word-synced captions and a synthesized score. It follows `wrapping-paper/` (episode 6): Japan's first elevator girls, from Matsuzakaya Ueno's opening on 1 April 1929 and Kobe's rival claim, through driving a car by hand, the job's standing and its strain, to automation and the few lifts still run by attendants. It ends by teasing episode 8, the 1932 Shirokiya fire and the myth it left behind.

| Version | High quality (≈86 MB) | Small (≈27 MB) |
|---|---|---|
| 9:16 vertical · English narration + captions | `video/elevator-girls_9x16.mp4` | `video/elevator-girls_9x16_small.mp4` |
| 9:16 vertical · music and sound effects only (captions kept) | `video/elevator-girls_9x16_music.mp4` | `video/elevator-girls_9x16_music_small.mp4` |

All versions are 1080×1920, 30 fps, loudness-normalised to −14 LUFS.

## Visual rule followed

The brief asked for period-style recreations and today's elevator halls filmed with the stores' permission, with no identifiable staff unless they consent.

- Nothing was filmed. Every hall, car and door is drawn in code. The two present-day halls (Nihombashi Takashimaya and Matsuzakaya Ueno) are generic marble halls, not copies of the real interiors, and each carries an "ILLUSTRATION · NOT FILMED" label.
- No real person appears. Attendants are faceless figures in the 1929 scenes and plain silhouettes in the postwar and present-day scenes. No store logo or uniform design is reproduced.
- The tease shows smoke over a generic skyline only: no building on fire and no people.

## Notes on the content

- Every date, figure and claim on screen comes from the script (1 April 1929, seven or eight women aged 18 and over, a foot off the floor, 12–13 trips in half an hour, the 1990s, Otis cars from 1933, 1932). No statistics were added.
- Hedged claims stay hedged: "Matsuzakaya: 'Japan's first'", "One history: Daimaru, Kobe, was earlier", a "ONE ACCOUNT" stamp on the men riding one floor, and "Is it true?" on the tease.
- The trip counter runs 1 to 13 and the clock sweeps half a turn; the in-between values are animation, not data. The map and the two-step "ranked below" graphic are labelled "SCHEMATIC".
- Additions beyond the script: the kanji and kana 昇降機ガール (shōkōki gāru); the bubble "GOING UP!"; the plate "The slump"; "1F" and "2F" on the one-floor ride.
- Invented props: the car switch and its lever, the floor dials, the magazine cover (labelled "not a real magazine"), the desk worker, the office towers, the half-hour clock, the button panels, the marble halls and the skyline.

## Credits

- **Narration:** Kokoro TTS (voice `am_michael`, speed 1.11). Spoken from phonetic spellings where needed (see `script.txt`).
- **Music and sound effects:** synthesized in `score.py`.
- **Fonts:** Inter / Inter Display, DejaVu Sans Mono, IPA P Gothic (system fonts at render time).

## How it is built

Same layout and tools as `shoes-off/`: `script.txt`, `timeline.json`, `film/`, `events.json`, `score.py`, `audio/`, `tools/`. Render with `VERT=1 bash tools/render.sh film/index.html 90 master_9x16.mp4`.
