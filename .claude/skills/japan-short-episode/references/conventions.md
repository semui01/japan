# Conventions learned over six episodes

## Contents
1. Layout zones (9:16)
2. Scene recipe
3. Helpers in `lib.js`
4. Content rules
5. Pronunciation spellings
6. Score and mix
7. Pitfalls
8. Departures to disclose in the report

## 1. Layout zones (1080×1920)
- y 170–204: chapter tag and series tag (drawn by the engine). Chapters: `01` hook … `07 NEXT`, one per beat.
- y 250–520: **title zone**. Call `topBand(540, 'rgba(r,g,b,.55)')` after the artwork; it darkens the top and also shades the bottom so captions stay readable on pale scenes. Put one big caption here per beat: `digits('1929', …)` for a year, or two `popText` lines, plus one `plate` at y≈470.
- y 540–1380: artwork. A plate, label or callout inside the art must not sit at y > 1380.
- y ≥ 1385: captions. Three-line captions start at ~1385, two-line at ~1460. Lines over ~60 characters wrap to three lines; lines over ~85 to four, so split long sentences in `script.txt`.
- `digits()` is centred at x=540 and ~560 px wide: do not put a plate over its first digit (keep side plates at x≤150, y≤265).

## 2. Scene recipe
```js
const T = { hook: 0, beat2: LB(3), …, end: TL[last].e + .15 };          // LB(i) = just before line i
function sceneX(t) {
  /* background */  /* props keyed to words: const a0 = wt(7, 'pebbles') - .3; if (t > a0) … pop(t, a0) */
  topBand(540, …);  /* title zone text */
}
```
- Key every appearance to a spoken word with `wt(line, 'word')` (lower-case, punctuation and macrons stripped: "Zō-san" → `'zsan'`, "1.8" → `'18'`, "5,000" → `'5000'`). Lead the word by 0.2–0.5 s.
- Give each line something new to look at; a beat with one static picture for 5 s reads as dead air. Typical beat: title → prop pops → plate verdict.
- Hook: `EP n` plate + two-line title, and a visual callback to the previous episode's tease. End: `NEXT` card with the next title; if the VO ends on "That's our next story" start the card at `LB(lastLine)`, otherwise at `TL[last].e + .15` (it then runs ~2.5 s).
- A tracked "hero" with `reticle(x, y, r, t, 'LABEL #001', 'STATUS', alpha)` ties beats together (PAIR #001, COMMUTER #001, MEAL #001). Keep labels short: the reticle text starts at x + r + 66 and must end before x = 1060.
- Fill `FILM.events` as you go (`scene`, `pop`, `stamp`, plus named ones such as `footstep`, `train`, `doors`); the score reads them.

## 3. Helpers in `lib.js`
Palette `K` (ink, paper, red, must, teal, wood…), `SKIN`, `JP` font. Text: `big`, `popText`, `jp` (Japanese, IPA Gothic), `label` (small mono), `plate` (pill label), `digits` (animated year), `nameTag`. Marks: `stamp` (engine), `callout` (engine; its sub-label is pale, so use a `plate` on light backgrounds), `reticle` (engine). People: `walker(x, ground, scale, phase, FOLK[i])` (add `stand: 1`), `mini` (crowd), `hand`, `leg`. Props: `coin`, `badge`, `trainCar`, `curry`, `table`, `priceCard`, footwear via `wear`/`pair`. Background: `fillBG`, `rays`, `skyDusk`, `topBand`. Utilities: `at`, `pop`, plus the engine's `P`, `E`, `lerp`, `clamp`, `vis`, `rng`, `noise`, `fbm`, `rrect`, `txt`, `font`.

## 4. Content rules
- **Only script-sourced facts on screen.** No added dates, prices or statistics. Animated counters between two scripted figures are fine; say in the README that in-between values are not data. Schematic charts get a "SCHEMATIC" label.
- **Everything is drawn.** Archive hosts (NDL Search, Wikimedia) are blocked in the sandbox; draw a stand-in and label it "ILLUSTRATION". Paraphrased documents (ads, notices) get "PARAPHRASE · ILLUSTRATION".
- **Protected or real things:** never draw a protected character or copy a real design, logo or logotype (episode 6: generic rings-and-bars paper, an abstract scrawl labelled "not the actual logotype", Anpanman as a word only). Real people are generic figures, not likenesses. Follow any "Visual rule" in the brief literally and restate how in the report.
- **Uncertain claims** stay hedged on screen as in the VO: stamp "LEGEND", "ONE ACCOUNT: …", "SAID TO BE …".
- **Sensitive beats** (war, death) are shown by absence: empty enclosures, fading silhouettes; no harm depicted.
- If the brief's on-screen caption would misstate something (wrong year for the event shown), fix it and say so. If it does not fit its beat, keep it as a smaller banner and say so.
- Kanji and kana add texture (store names, signs, people's names) but are additions: list every one in the README and the report for the user to check.

## 5. Pronunciation spellings (spoken side of `||`)
Mitsukoshi → Mitsoo-koshi · Hankyu → Hahn-cue · Takashimaya → Tah-kah-shee-mah-ya · Matsuzakaya → Mah-tsoo-zah-ka-ya · Matsuya → Mah-tsoo-ya · Shirokiya → Shee-ro-kee-ya · Echigoya → Etchy-go-ya · Umeda → Oo-meh-da · Ueno → Oo-eh-no · Asakusa → Ah-sock-sa · Shōwa → Show-wah · Kantō → Kahn-toe · tatami → tah-tah-mee · dokin → doh-keen · Kobayashi Ichizō → Kobayashi Ee-chee-zoh · Gotō Keita → Go-toh Kay-ta · Andō Tarō → Ahn-doh Tah-roh · Yanase Takashi → Yah-nah-seh Tah-kah-shee · Inokuma Gen'ichirō → Ee-no-koo-ma Gen-ee-chee-roh · Taka-chan → Tah-kah-chahn · Anpanman → Ahn-pahn-mahn · NHK → N H K. Years as words ("nineteen oh five"), "1.8 tonnes" → "one point eight tons". Shibuya, Ginza, Nagoya, Osaka, Tokyo are fine as written.

## 6. Score and mix
- Music map per beat: sparse pad + bells for the hook; pulse from beat 2; a hush (low pad only) for the sombre turn; brightest groove for the payoff; soft two-chord tease; a C-major hit with bells on the end card.
- SFX: whoosh per scene change, blip per pop, soft boom+click per stamp, plus story sounds (train clack, footsteps, ticks for counters, crumple, door ding).
- Narrated mix: `music_gain=.2, sfx_gain=.36` (the user found the first three episodes' music too loud). Music-only mix uses defaults.
- A loud repeated SFX (footsteps, booms at g ≥ .8) raises a whole section; keep such hits ≤ .45.

## 7. Pitfalls
- `soundkit` envelopes: a sound shorter than its fade (e.g. `hum(d=1.1)` with a 1.5 s release) raises a broadcast error. Keep `hum`/`bed` ≥ 2.2 s.
- `deliver.sh … both` twice takes ~15 min: run it with `run_in_background`, and put the copy/commit/push after it in the same command.
- The tracking ref for a newly pushed branch may be missing in a shallow clone; if a hook reports "unpushed commits" after a successful push, add the branch to `remote.origin.fetch` and fetch.
- Walkers are ~760·scale px tall: scale .8 fills the art zone; crowds read better at .3–.6, or use `mini`.
- White captions on cream/sky/sand need the `topBand` bottom shade; check one still per pale scene.
- The skill's install folder can vanish between sessions; the repo copy under `.claude/skills/` and each episode's `tools/` are the durable ones.
- To change audio only, remux instead of re-rendering: `ffmpeg -i video.mp4 -i mix.wav -map 0:v -map 1:a -c:v copy -af loudnorm=I=-14:TP=-1:LRA=11 -c:a aac -b:a 160k out.mp4`.

## 8. Departures to disclose in the report
Length differing from the draft · captions corrected or demoted · visuals drawn instead of archival (and which listed visuals were replaced or dropped) · how a visual rule was applied · added on-screen text (every kanji/kana string) · invented props · words spoken from phonetic spellings · that audio was not listened to · that the work is on the branch, not `main`.
