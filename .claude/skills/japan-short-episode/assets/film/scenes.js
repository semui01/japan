// EPISODE TEMPLATE. Replace the placeholder scenes with the real storyboard; keep the structure.
// Rules: every beat keyed to wt(line, 'word') or LB(line); render(t) pure (rng(seed) only); 9:16 layout zones:
//   y 170–204 chapter tag (engine) · y 250–520 title zone (under topBand) · y 540–1380 artwork · y ≥ 1385 captions (3-line captions start there).
const EP = { n: 0, title: ['EPISODE', 'TITLE'], next: ['Next episode', 'title'] };       // edit me
const CHL = TL.map((l, i) => i).filter(i => i === 0 || TL[i].chapterBreak);          // first line of each beat
const T = { starts: CHL.map(i => LB(i)), end: TL[TL.length - 1].e + .15 };

function sceneHook(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .05, .12, '0,0,0');
  topBand(540, 'rgba(40,10,8,.55)');
  plate('EP ' + EP.n, 150, 290, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText(EP.title[0], 540, 400, 100, t, .55, K.paper, -.015, '#2a0b08'); popText(EP.title[1], 540, 510, 110, t, .8, K.must, -.015, '#2a0b08');
}
function sceneBeat(k) { return t => {                                                  // placeholder for beat k
  fillBG(['#1f5a57', '#18203f', '#274a7a', '#3a2140', '#5b3a20'][k % 5], '#0f152b');
  walker(540, 1270, .8, (t - T.starts[k]) * 1.2, FOLK[k % FOLK.length]);
  topBand(540);
  digits(String(1900 + k), t, T.starts[k] + .3, 400); plate('BEAT ' + (k + 1) + ' · REPLACE ME', 540, 470, 40, K.paper, K.ink, 1, .015, pop(t, T.starts[k] + .5));
}; }
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 820 + i * 130 + 30 * (1 - a), 110, i === EP.next.length - 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
}

window.FILM = {
  title: EP.title.join(' '), tag: 'EP ' + EP.n + ' · JAPAN’S DEPARTMENT STORES',
  hotLines: [],
  scenes: [{ start: 0, draw: sceneHook }, ...T.starts.slice(1).map((s, i) => ({ start: s, draw: sceneBeat(i + 1) })), { start: T.end, draw: sceneEnd }],
  xfades: [...T.starts.slice(1).map(s => [s, .4]), [T.end, .3]],
  chapters: T.starts.map((s, i) => [s, String(i + 1).padStart(2, '0'), 'BEAT ' + (i + 1)]),
  hits: [[.8, 8, .3]], flashes: [[T.end, .25]],
  events: { scene: [...T.starts.slice(1), T.end], pop: [.3], stamp: [.8], end: [T.end] },   // the score reads these
};
