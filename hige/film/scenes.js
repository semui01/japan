// HIGE — Japan's long, complicated history with facial hair. 16:9.
C.cyan = '#e8c36a';
const GOLD = '#e8c36a', VERM = '#e2452f', CREAM = '#efe2c4', INK = '#17100c';
const T = { sen: LB(2), edo: LB(5), mei: LB(8), post: LB(11), today: LB(13), out: LB(16), graph: LB(17), card: TL[17].e - .35 };
const FCX = 960, FCY = 455, FR = 212;
const ERAS = [
  { k: 'sen', t0: T.sen, kanji: '戦国', en: 'WARRING STATES', yrs: 'c. 1467 – 1600' },
  { k: 'edo', t0: T.edo, kanji: '江戸', en: 'EDO PERIOD', yrs: '1603 – 1868' },
  { k: 'mei', t0: T.mei, kanji: '明治', en: 'MEIJI ERA', yrs: '1868 – 1912' },
  { k: 'post', t0: T.post, kanji: '戦後', en: 'POST-WAR', yrs: '1945 –' },
  { k: 'today', t0: T.today, kanji: '現代', en: 'TODAY', yrs: '2010s –' },
];
const eraIdx = t => { let i = 0; while (i < ERAS.length - 1 && t >= ERAS[i + 1].t0) i++; return i; };
const kf = (K, x) => { if (x <= K[0][0]) return K[0][1]; for (let i = 1; i < K.length; i++) if (x < K[i][0]) return lerp(K[i - 1][1], K[i][1], (x - K[i - 1][0]) / (K[i][0] - K[i - 1][0])); return K[K.length - 1][1]; };
const tBan = wt(6, 'banned'), tRazor = wt(11, 'razor'), tFake = wt(3, 'faked'), tGrow = wt(2, 'thick') - .2, tMei = wt(9, 'grew') - .3, tProp = wt(10, 'mustache') - .2, tNow = wt(13, 'argument');
const YEARK = [[T.sen, 1560], [T.edo - .01, 1600], [T.edo, 1615], [wt(6, 'late'), 1645], [tBan, 1670], [LS(7), 1678], [T.mei - .3, 1866], [T.mei, 1868], [tMei, 1873], [LS(10), 1895], [T.post - .01, 1912], [T.post, 1946], [T.today - .01, 1985], [T.today, 2005], [wt(14, 'twenty') + .4, 2010], [LS(15), 2010], [wt(15, 'twenty') + .9, 2019], [T.out, 2019]];
const yearAt = t => kf(YEARK, t);
const APPR = [[1550, .86], [1600, .9], [1640, .62], [1672, .1], [1860, .08], [1885, .82], [1912, .93], [1940, .62], [1956, .2], [2000, .22], [2010, .16], [2019, .42], [2026, .46]];

// ------------------------------------------------------------------ precomputed
let ST = [], MW = [], KP = [], EMB = [], PET = [], WIN = [], SEI;
function fw(y) { const a = Math.abs(y / 100); return a >= 1 ? 0 : 80 * Math.pow(1 - Math.pow(a, 2.6), 1 / 2.2); }
function initFilm() {
  const r = rng(42);
  for (let i = 0; i < 190; i++) { const sg = i % 2 ? 1 : -1, u = r(); ST.push({ k: 'm', sg, u, x: sg * (3 + 27 * u), y: 37 + 4 * u * u + (r() - .5) * 5, l: .6 + .8 * r(), d: r(), c: r() - .5, sh: r(), i }); }
  for (let i = 0; i < 230; i++) { const y = 60 + r() * 39, x = (r() * 2 - 1) * Math.min(fw(y), 40); ST.push({ k: 'c', x, y, a: x / 40 * .35 + (r() - .5) * .2, l: .5 + r(), d: r(), c: r() - .5, sh: r(), i }); }
  let n = 0; while (n < 520) { const y = 8 + r() * 90, x = (r() * 2 - 1) * fw(y) * .99, e = Math.abs(x) / fw(y);
    if (Math.abs(x) < 22 && y > 41 && y < 58) continue; if (y < 34 && e < .78) continue; if (y < 50 && e < .5) continue;
    ST.push({ k: 'j', x, y, a: x / 80 * .6 + (r() - .5) * .25, l: .5 + r(), d: r(), c: r() - .5, sh: r(), i: n }); n++; }
  for (let i = 0; i < 90; i++) { const sg = i % 2 ? 1 : -1, u = r(); MW.push({ x: sg * (5 + 27 * u), y: 37 + 3 * u, a: sg * (1.15 + 1.0 * r()), l: 26 + 34 * r(), ph: r() * 9 }); }
  for (let i = 0; i < 50; i++) MW.push({ x: (r() - .5) * 26, y: 100 + r() * 6, a: (r() - .5) * .7, l: 26 + 30 * r(), ph: r() * 9 });
  // furry kanji sample points
  const c = mkCanvas(700, 700), g = c.getContext('2d'); g.fillStyle = '#fff'; g.font = '900 600px "Noto Serif CJK JP"'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('髭', 350, 370);
  const d = g.getImageData(0, 0, 700, 700).data; let tries = 0;
  while (KP.length < 3800 && tries++ < 400000) { const x = r() * 700 | 0, y = r() * 700 | 0; if (d[(y * 700 + x) * 4 + 3] > 128) KP.push({ x: x - 350, y: y - 350, l: .5 + r(), d: r(), ph: r() * 20 }); }
  for (let i = 0; i < 110; i++) EMB.push({ x: r() * W, sp: .04 + r() * .08, ph: r(), s: 1.5 + r() * 3, w: r() * 9 });
  for (let i = 0; i < 46; i++) PET.push({ x: r() * W, sp: .03 + r() * .04, ph: r(), s: 6 + r() * 7, w: r() * 9 });
  for (let y = 0; y < 26; y++) for (let x = 0; x < 34; x++) WIN.push({ x, y, v: r(), ph: r() * 30 });
  SEI = mkCanvas(W, 520); { const g = SEI.getContext('2d'); g.strokeStyle = '#9db6e8'; g.lineWidth = 2; const R = 46;
    for (let row = 0; row < 26; row++) for (let col = -1; col < 23; col++) { const cx = col * R * 2 + (row % 2 ? R : 0), cy = 30 + row * R * .5; g.fillStyle = '#16284f'; g.beginPath(); g.arc(cx, cy, R, Math.PI, TAU); g.fill(); for (let k = 1; k <= 4; k++) { g.beginPath(); g.arc(cx, cy, R * k / 4, Math.PI, TAU); g.stroke(); } } }
}

// ------------------------------------------------------------------ hair
const invIo2 = p => p < .5 ? Math.sqrt(p / 2) : 1 - Math.sqrt((1 - p) / 2);
function hairState(t) {
  let g = E.o3(P(t, tGrow, tGrow + 1.7)), m = g, c = g, j = g, sweep = 0, ext = 0, shave = null;
  if (t < T.edo) { const k = 1 - P(t, wt(3, 'couldn') - .1, wt(3, 'couldn') + .5); m *= k; c *= k; j *= k; }
  if (t >= tBan && t < T.mei) { if (t < tBan + 1.4) shave = { p: P(t, tBan, tBan + 1.4), t0: tBan, dur: 1.4 }; else m = c = j = 0; }
  if (t >= T.mei) { g = E.o3(P(t, tMei, tMei + 1.6)); m = g; c = .8 * g; j = .4 * g; sweep = .22 * g;
    const e = t < T.post ? E.io(P(t, tProp, tProp + 2.6)) : 0; sweep = lerp(sweep, 1, e); ext = e; c *= 1 - .45 * e; j *= 1 - .6 * e; }
  if (t >= T.post) { m = .85; c = .6; j = .35; sweep = .2; if (t >= tRazor) { if (t < tRazor + 1.2) shave = { p: P(t, tRazor, tRazor + 1.2), t0: tRazor, dur: 1.2 }; else m = c = j = 0; } }
  if (t >= T.today) { g = E.o3(P(t, tNow, tNow + 1.6)); m = .6 * g; c = .42 * g; j = .45 * g; sweep = 0; shave = null; }
  return { m, c, j, sweep, ext, shave };
}
function drawStrands(hs, t, lw = 1.7) {
  const rx = hs.shave ? lerp(-92, 92, E.io2(hs.shave.p)) : -1e9;
  const paths = [new Path2D(), new Path2D(), new Path2D()], clip = new Path2D();
  for (const s of ST) {
    const g = hs[s.k]; if (g <= 0.01) continue;
    if (s.x < rx) { if (s.i % 2 === 0) { const ti = hs.shave.t0 + hs.shave.dur * invIo2((s.x + 92) / 184), dt = t - ti; if (dt > 0 && dt < 1.1) { const x = s.x + s.c * 40 * dt, y = s.y + 14 * dt + 170 * dt * dt, a = dt * 7 * s.c + s.d * 6; clip.moveTo(x, y); clip.lineTo(x + Math.cos(a) * 7, y + Math.sin(a) * 7); } } continue; }
    const k = clamp(g * 1.4 - s.d * .4); if (k <= 0) continue;
    const sway = Math.sin(t * 1.3 + s.d * 9) * .02; let ex, ey, cx, cy;
    if (s.k === 'm') {
      const a0 = s.sg * (.5 + .75 * s.u) + sway, L = 19 * s.l * k; ex = s.x + Math.sin(a0) * L; ey = s.y + Math.cos(a0) * L; cx = s.x + Math.sin(a0) * L * .5 + s.sg * 3; cy = s.y + Math.cos(a0) * L * .4;
      if (hs.sweep > 0) { const v = (s.l - .6) / .8, wl = 34 + hs.ext * 221 * (1 - .28 * v), wx = s.sg * wl, wy = 33 - wl * .07 + (s.y - 38) * .45 + Math.sin(t * 2 + s.d * 5) * hs.ext * 1.2, mx = s.sg * (wl * .5 + 6), my = s.y + 5 + hs.ext * 5 + (s.y - 38) * 2.4;
        ex = lerp(ex, wx, hs.sweep); ey = lerp(ey, wy, hs.sweep); cx = lerp(cx, mx, hs.sweep); cy = lerp(cy, my, hs.sweep); }
    } else { const L = (s.k === 'c' ? 50 : 25) * s.l * k, a = s.a + sway; ex = s.x + Math.sin(a) * L; ey = s.y + Math.cos(a) * L; cx = s.x + Math.sin(a) * L * .5 + s.c * L * .28; cy = s.y + Math.cos(a) * L * .5; }
    const p = paths[s.sh < .5 ? 0 : s.sh < .85 ? 1 : 2]; p.moveTo(s.x, s.y); p.quadraticCurveTo(cx, cy, ex, ey);
  }
  ctx.lineCap = 'round'; ctx.lineWidth = lw + 2.2; ctx.strokeStyle = 'rgba(10,6,4,.35)'; ctx.stroke(paths[0]);
  ctx.lineWidth = lw; ctx.strokeStyle = '#120d0b'; ctx.stroke(paths[0]); ctx.strokeStyle = '#2b1f19'; ctx.stroke(paths[1]); ctx.strokeStyle = '#5a463a'; ctx.stroke(paths[2]);
  ctx.strokeStyle = '#1a1310'; ctx.lineWidth = 1.4; ctx.stroke(clip);
}

// ------------------------------------------------------------------ face
function facePath(k = 1) { ctx.beginPath(); for (let i = 0; i <= 40; i++) { const y = -100 + 5 * i; i ? ctx.lineTo(fw(y) * k, y * k) : ctx.moveTo(fw(y) * k, y * k); } for (let i = 40; i >= 0; i--) { const y = -100 + 5 * i; ctx.lineTo(-fw(y) * k, y * k); } ctx.closePath(); }
const HAIR = '#15100e';
function shoulders() { ctx.beginPath(); ctx.moveTo(-36, 92); ctx.lineTo(-150, 128); ctx.quadraticCurveTo(-178, 140, -182, 250); ctx.lineTo(182, 250); ctx.quadraticCurveTo(178, 140, 150, 128); ctx.lineTo(36, 92); ctx.closePath(); }
function clothes(era) {
  const OL = '#160c08'; ctx.lineWidth = 2.5; ctx.strokeStyle = OL;
  shoulders(); ctx.fillStyle = { sen: '#2c3350', edo: '#46546f', mei: '#1d2646', post: '#30374a', today: '#2f7a7c' }[era]; ctx.fill(); ctx.stroke();
  ctx.save(); shoulders(); ctx.clip();
  if (era === 'sen') { for (let y = 118; y < 250; y += 17) { ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.fillRect(-190, y, 380, 3); ctx.fillStyle = '#c8502e'; for (let x = -180; x < 180; x += 11) ctx.fillRect(x, y + 4, 5, 7); }
    ctx.fillStyle = GOLD; for (const x of [-120, 120]) { ctx.beginPath(); ctx.arc(x, 150, 6, 0, TAU); ctx.fill(); } }
  if (era === 'edo') { ctx.fillStyle = '#c9a57f'; ctx.beginPath(); ctx.moveTo(-36, 92); ctx.lineTo(0, 165); ctx.lineTo(36, 92); ctx.fill();
    ctx.lineWidth = 13; ctx.strokeStyle = CREAM; ctx.beginPath(); ctx.moveTo(-40, 94); ctx.lineTo(8, 176); ctx.stroke(); ctx.beginPath(); ctx.moveTo(40, 94); ctx.lineTo(-12, 190); ctx.stroke();
    ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.moveTo(47, 96); ctx.lineTo(-10, 204); ctx.lineTo(-10, 250); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,.75)'; for (const x of [-105, 105]) { ctx.beginPath(); ctx.arc(x, 168, 9, 0, TAU); ctx.fill(); } }
  if (era === 'mei') { ctx.fillStyle = '#e6e0d0'; ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(182, 135); ctx.lineTo(-40, 250); ctx.lineTo(-84, 250); ctx.fill(); ctx.fillStyle = VERM; ctx.beginPath(); ctx.moveTo(160, 125); ctx.lineTo(172, 131); ctx.lineTo(-56, 250); ctx.lineTo(-70, 250); ctx.fill();
    ctx.fillStyle = GOLD; for (let y = 128; y < 250; y += 26) { ctx.beginPath(); ctx.arc(0, y, 5, 0, TAU); ctx.fill(); }
    for (const [x, y, c] of [[-92, 172, GOLD], [-66, 178, '#d8d8e2'], [-92, 200, VERM]]) { ctx.fillStyle = c; ctx.beginPath(); for (let k = 0; k < 16; k++) { const a = k / 16 * TAU, rr = k % 2 ? 6 : 12; ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } ctx.fill(); }
    for (const sg of [-1, 1]) { ctx.fillStyle = GOLD; ctx.beginPath(); ctx.ellipse(sg * 138, 128, 36, 11, sg * .28, 0, TAU); ctx.fill(); ctx.strokeStyle = GOLD; ctx.lineWidth = 2.5; for (let k = -4; k <= 4; k++) { ctx.beginPath(); ctx.moveTo(sg * 138 + k * 8, 134 + sg * k * 2); ctx.lineTo(sg * 138 + k * 9.5, 154 + sg * k * 2.3); ctx.stroke(); } } }
  if (era === 'post') { ctx.fillStyle = '#f2f3f5'; ctx.beginPath(); ctx.moveTo(-36, 92); ctx.lineTo(-6, 250); ctx.lineTo(6, 250); ctx.lineTo(36, 92); ctx.fill();
    ctx.fillStyle = '#7d2630'; ctx.beginPath(); ctx.moveTo(-9, 108); ctx.lineTo(9, 108); ctx.lineTo(6, 124); ctx.lineTo(15, 250); ctx.lineTo(-15, 250); ctx.lineTo(-6, 124); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.45)'; ctx.lineWidth = 2.5; for (const sg of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sg * 38, 94); ctx.lineTo(sg * 30, 170); ctx.lineTo(sg * 8, 250); ctx.stroke(); ctx.beginPath(); ctx.moveTo(sg * 30, 170); ctx.lineTo(sg * 62, 150); ctx.lineTo(sg * 50, 110); ctx.stroke(); } }
  if (era === 'today') { ctx.strokeStyle = 'rgba(0,0,0,.3)'; ctx.lineWidth = 9; ctx.beginPath(); ctx.ellipse(0, 100, 46, 20, 0, 0, Math.PI); ctx.stroke(); ctx.strokeStyle = CREAM; ctx.lineWidth = 3; for (const sg of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sg * 16, 118); ctx.lineTo(sg * 18, 180); ctx.stroke(); } }
  ctx.restore();
  if (era === 'mei') { ctx.fillStyle = VERM; ctx.strokeStyle = GOLD; ctx.lineWidth = 3; rrect(-40, 80, 80, 26, 5); ctx.fill(); ctx.stroke(); }
}
function menpo(a, t) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a * 3); ctx.translate(0, (1 - E.oBack(clamp(a))) * 150);
  ctx.fillStyle = '#262d47'; ctx.strokeStyle = '#0d0605'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(-46, 104); ctx.lineTo(46, 104); ctx.lineTo(66, 152); ctx.lineTo(-66, 152); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#c8502e'; for (let y = 116; y < 150; y += 16) for (let x = -52; x < 52; x += 10) ctx.fillRect(x, y, 5, 7);
  ctx.beginPath(); ctx.moveTo(-86, 4); ctx.quadraticCurveTo(-44, 0, -20, -8); ctx.quadraticCurveTo(0, -34, 20, -8); ctx.quadraticCurveTo(44, 0, 86, 4);
  for (let y = 6; y <= 99; y += 6) ctx.lineTo(fw(y) * 1.06 + 3, y * 1.05); ctx.lineTo(0, 110); for (let y = 96; y >= 6; y -= 6) ctx.lineTo(-fw(y) * 1.06 - 3, y * 1.05); ctx.closePath();
  const g = ctx.createLinearGradient(-86, 0, 86, 0); g.addColorStop(0, '#6f130d'); g.addColorStop(.35, '#c22c1e'); g.addColorStop(.5, '#d6402c'); g.addColorStop(.65, '#c22c1e'); g.addColorStop(1, '#6f130d'); ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = '#2c0504'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#a82216'; ctx.beginPath(); ctx.moveTo(0, -22); ctx.quadraticCurveTo(20, 16, 17, 25); ctx.quadraticCurveTo(0, 33, -17, 25); ctx.quadraticCurveTo(-20, 16, 0, -22); ctx.fill(); ctx.lineWidth = 2; ctx.stroke();
  ctx.strokeStyle = '#5e100b'; ctx.lineWidth = 2.2; for (const sg of [-1, 1]) for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(sg * (30 + k * 2), 30, 22 + k * 11, sg > 0 ? -.5 : Math.PI - .7, sg > 0 ? .7 : Math.PI + .5); ctx.stroke(); }
  ctx.fillStyle = '#120202'; ctx.beginPath(); ctx.moveTo(-32, 56); ctx.quadraticCurveTo(0, 44, 32, 56); ctx.quadraticCurveTo(0, 84, -32, 56); ctx.fill();
  ctx.fillStyle = GOLD; for (let k = -3; k <= 3; k++) ctx.fillRect(k * 7.5 - 3, 51.5 + Math.abs(k) * 1.3, 6, 7);
  const p = new Path2D(); for (const s of MW) { const a = s.a + Math.sin(t * 9 + s.ph) * .03, ex = s.x + Math.sin(a) * s.l, ey = s.y + Math.cos(a) * s.l; p.moveTo(s.x, s.y); p.quadraticCurveTo(s.x + Math.sin(a) * s.l * .5, s.y + Math.cos(a) * s.l * .5 + 5, ex, ey); }
  ctx.lineCap = 'round'; ctx.lineWidth = 3.6; ctx.strokeStyle = 'rgba(20,5,3,.5)'; ctx.stroke(p); ctx.lineWidth = 1.7; ctx.strokeStyle = '#f3ecda'; ctx.stroke(p);
  ctx.restore();
}
// era: sen|edo|mei|post|today. o: {mood, menpo, lw}
function drawFace(cx, cy, R, era, hs, t, o = {}) {
  ctx.save(); ctx.translate(cx, cy); ctx.scale(R / 100, R / 100); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  const OL = '#160c08', skin = '#ecc097', shade = '#c99468';
  if (era === 'sen') { ctx.fillStyle = '#262d47'; ctx.strokeStyle = OL; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(-90, -44); ctx.quadraticCurveTo(-150, 0, -162, 76); ctx.lineTo(162, 76); ctx.quadraticCurveTo(150, 0, 90, -44); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.save(); ctx.clip(); for (let k = 0; k < 5; k++) { const y = -22 + k * 22; ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(-170, y, 340, 3); ctx.fillStyle = '#c8502e'; for (let x = -165; x < 165; x += 11) ctx.fillRect(x, y + 4, 5, 7); } ctx.restore(); }
  else { ctx.fillStyle = HAIR; ctx.beginPath(); ctx.ellipse(0, era === 'edo' ? -18 : -26, era === 'today' ? 91 : 87, 92, 0, 0, TAU); ctx.fill(); }
  ctx.fillStyle = shade; ctx.fillRect(-32, 70, 64, 50);
  clothes(era);
  ctx.strokeStyle = OL; ctx.lineWidth = 2.5; ctx.fillStyle = skin; for (const sg of [-1, 1]) { ctx.beginPath(); ctx.ellipse(sg * 81, 4, 10, 19, 0, 0, TAU); ctx.fill(); ctx.stroke(); }
  facePath(); const fg = ctx.createLinearGradient(-80, 0, 80, 0); fg.addColorStop(0, '#dcae84'); fg.addColorStop(.3, skin); fg.addColorStop(.7, skin); fg.addColorStop(1, '#d6a57b'); ctx.fillStyle = fg; ctx.fill(); ctx.stroke();
  if (era === 'edo') { ctx.save(); facePath(); ctx.clip(); ctx.fillStyle = 'rgba(96,120,160,.22)'; ctx.fillRect(-90, -110, 180, 62); ctx.restore(); }
  // hair / headgear
  ctx.fillStyle = HAIR;
  if (era === 'edo') { for (const sg of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sg * 60, -84); ctx.quadraticCurveTo(sg * 58, -52, sg * 66, -28); ctx.lineTo(sg * 74, 2); ctx.lineTo(sg * 90, -4); ctx.quadraticCurveTo(sg * 96, -60, sg * 60, -84); ctx.fill(); }
    ctx.beginPath(); ctx.ellipse(0, -101, 26, 13, 0, 0, TAU); ctx.fill(); rrect(-10, -140, 20, 58, 9); ctx.fill(); ctx.fillStyle = CREAM; ctx.fillRect(-11, -104, 22, 5); }
  if (era === 'mei' || era === 'post' || era === 'today') { const pt = era === 'post' ? -34 : era === 'mei' ? 30 : 0;
    ctx.beginPath(); ctx.moveTo(-86, -6); ctx.bezierCurveTo(-98, -132, 98, -132, 86, -6); ctx.lineTo(79, -30);
    if (era === 'today') { ctx.lineTo(66, -58); ctx.lineTo(52, -40); ctx.lineTo(36, -62); ctx.lineTo(20, -42); ctx.lineTo(2, -64); ctx.lineTo(-16, -44); ctx.lineTo(-34, -64); ctx.lineTo(-50, -46); ctx.lineTo(-66, -60); }
    else { ctx.quadraticCurveTo(70, -62, pt + 14, -66); ctx.quadraticCurveTo(pt, -58, pt - 6, -76); ctx.quadraticCurveTo(-64, -62, -79, -30); }
    ctx.closePath(); ctx.fill();
    if (era === 'today') for (let k = 0; k < 7; k++) { ctx.beginPath(); ctx.arc(-66 + k * 22, -98 - Math.sin(k * 1.9) * 6 - (3 - Math.abs(k - 3)) * 4, 20, 0, TAU); ctx.fill(); }
    if (era === 'post') { ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-20, -96); ctx.quadraticCurveTo(30, -100, 62, -70); ctx.stroke(); } }
  if (era === 'sen') { ctx.strokeStyle = OL; ctx.lineWidth = 2.5;
    for (const sg of [-1, 1]) { ctx.save(); ctx.translate(sg * 101, -40); ctx.rotate(sg * .35); ctx.fillStyle = '#343d60'; rrect(-13, -22, 26, 44, 9); ctx.fill(); ctx.stroke(); ctx.fillStyle = GOLD; ctx.beginPath(); ctx.arc(0, 0, 6, 0, TAU); ctx.fill(); ctx.restore(); }
    const cg = ctx.createLinearGradient(0, -175, 0, -120); cg.addColorStop(0, '#fff0b8'); cg.addColorStop(1, '#c9972f'); ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(0, -192, 70, .12 * Math.PI, .88 * Math.PI); ctx.arc(0, -212, 70, .8 * Math.PI, .2 * Math.PI, true); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#1e2540'; ctx.beginPath(); ctx.moveTo(-93, -34); ctx.bezierCurveTo(-98, -152, 98, -152, 93, -34); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.13)'; ctx.lineWidth = 2; for (let k = -5; k <= 5; k++) { ctx.beginPath(); ctx.moveTo(0, -123); ctx.quadraticCurveTo(k * 14, -90, k * 17.5, -36); ctx.stroke(); }
    ctx.fillStyle = GOLD; ctx.beginPath(); ctx.arc(0, -123, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = '#0e1326'; ctx.strokeStyle = GOLD; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-96, -36); ctx.quadraticCurveTo(0, -60, 96, -36); ctx.lineTo(100, -20); ctx.quadraticCurveTo(0, -46, -100, -20); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  // features
  const mood = o.mood || 0, bl = (((t + (o.bs || 0)) % 3.7) < .12) ? .15 : 1;
  for (const sg of [-1, 1]) { ctx.save(); ctx.translate(sg * 33, -6); ctx.rotate(sg * -.09); ctx.fillStyle = '#fbf6ee'; ctx.beginPath(); ctx.ellipse(0, 0, 14, 6.5 * bl, 0, 0, TAU); ctx.fill(); ctx.fillStyle = INK; ctx.beginPath(); ctx.ellipse(0, 0, 6.4, 6.4 * bl, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(0, 0, 14.5, 7 * bl, 0, Math.PI, TAU); ctx.stroke(); ctx.restore();
    ctx.strokeStyle = HAIR; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(sg * 15, -25 + mood * 7); ctx.quadraticCurveTo(sg * 34, -33 - mood * 2, sg * 53, -26 - mood * 5); ctx.stroke(); }
  if (era === 'post') { ctx.strokeStyle = '#0c0c10'; ctx.lineWidth = 3.5; for (const sg of [-1, 1]) { rrect(sg * 33 - 21, -19, 42, 27, 7); ctx.stroke(); } ctx.beginPath(); ctx.moveTo(-12, -8); ctx.lineTo(12, -8); ctx.stroke(); }
  ctx.strokeStyle = '#a06c46'; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(4, -4); ctx.quadraticCurveTo(13, 16, 9, 23); ctx.quadraticCurveTo(3, 28, -5, 24); ctx.stroke();
  ctx.strokeStyle = '#7a3b2c'; ctx.lineWidth = 3.2; ctx.beginPath(); ctx.moveTo(-14, 49); ctx.quadraticCurveTo(0, 49 + (o.smile || 0) * 7, 14, 49); ctx.stroke();
  if (hs) drawStrands(hs, t, o.lw || 1.7);
  menpo(o.menpo || 0, t);
  if (hs && hs.shave && hs.shave.p > 0 && hs.shave.p < 1) { const rx = lerp(-92, 92, E.io2(hs.shave.p)), ry = 52 + Math.sin(hs.shave.p * TAU * 2.5) * 30;
    ctx.save(); ctx.translate(rx + 4, ry); ctx.rotate(-.3);
    if (era === 'post') { ctx.fillStyle = '#2a2f3a'; rrect(-5, 4, 10, 86, 4); ctx.fill(); const g = ctx.createLinearGradient(-26, 0, 26, 0); g.addColorStop(0, '#9aa5b3'); g.addColorStop(.5, '#f4f8fc'); g.addColorStop(1, '#9aa5b3'); ctx.fillStyle = g; rrect(-26, -9, 52, 16, 4); ctx.fill(); }
    else { ctx.fillStyle = '#5c4a3a'; rrect(-4.5, 20, 9, 84, 3); ctx.fill(); const g = ctx.createLinearGradient(-9, 0, 9, 0); g.addColorStop(0, '#f6fafd'); g.addColorStop(1, '#8794a4'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(-9, -46); ctx.lineTo(8, -40); ctx.lineTo(9, 22); ctx.lineTo(-9, 22); ctx.closePath(); ctx.fill(); }
    ctx.restore(); }
  ctx.restore();
}

// ------------------------------------------------------------------ backgrounds
function disc(col, r, glow) { const g = ctx.createRadialGradient(FCX, FCY - 20, r * .2, FCX, FCY - 20, r * 2.2); g.addColorStop(0, glow); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(FCX, FCY - 20, r, 0, TAU); ctx.fill(); }
function vgrad(a, b) { const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, a); g.addColorStop(1, b); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
function drawBG(k, t) {
  if (k === 'sen') { vgrad('#150405', '#4a120c'); disc('#a3261a', 335, 'rgba(255,90,40,.28)');
    for (const [x, h, ph] of [[560, 300, 0], [660, 250, 1.3], [1270, 260, 2.1], [1372, 310, .6]]) { const sk = Math.sin(t * .9 + ph) * 8; ctx.fillStyle = '#0d0202'; ctx.fillRect(x - 3, 200, 6, 800); ctx.beginPath(); ctx.moveTo(x + 3, 215); ctx.lineTo(x + 58, 215 + sk * .3); ctx.lineTo(x + 58 + sk, 215 + h); ctx.lineTo(x + 3, 215 + h); ctx.fill(); ctx.fillStyle = '#4a120c'; ctx.beginPath(); ctx.arc(x + 31 + sk * .3, 290, 15, 0, TAU); ctx.fill(); }
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (const e of EMB) { const u = (t * e.sp + e.ph) % 1, x = e.x + Math.sin(t * .8 + e.w) * 40, y = H * (1.05 - u * 1.15); ctx.fillStyle = `rgba(255,${130 + e.w * 10 | 0},50,${.75 * Math.sin(u * Math.PI)})`; ctx.beginPath(); ctx.arc(x, y, e.s, 0, TAU); ctx.fill(); } ctx.restore(); }
  if (k === 'edo') { vgrad('#0b1633', '#1f3b70'); disc('#efe2c4', 335, 'rgba(240,226,196,.2)'); ctx.globalAlpha = .34; ctx.drawImage(SEI, 0, H - 500); ctx.globalAlpha = 1;
    const g = ctx.createLinearGradient(0, H - 520, 0, H - 380); g.addColorStop(0, '#16295366'); g.addColorStop(1, 'rgba(0,0,0,0)');
    for (const p of PET) { const u = (t * p.sp + p.ph) % 1, x = p.x + Math.sin(t * .7 + p.w) * 60 + u * 120, y = -30 + u * (H + 60); ctx.save(); ctx.translate(x, y); ctx.rotate(t * .8 + p.w); ctx.fillStyle = 'rgba(255,190,205,.75)'; ctx.beginPath(); ctx.ellipse(0, 0, p.s, p.s * .55, 0, 0, TAU); ctx.fill(); ctx.restore(); } }
  if (k === 'mei') { vgrad('#24160b', '#6a4520'); ctx.save(); ctx.translate(FCX, FCY - 20); ctx.rotate(t * .03); ctx.fillStyle = 'rgba(255,200,110,.085)'; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * 1600, Math.sin(a) * 1600); ctx.lineTo(Math.cos(a + .2) * 1600, Math.sin(a + .2) * 1600); ctx.fill(); } ctx.restore(); disc('#d9a94e', 335, 'rgba(255,200,110,.25)');
    ctx.strokeStyle = 'rgba(60,35,10,.5)'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(FCX, FCY - 20, 312, 0, TAU); ctx.stroke();
    for (const e of EMB) { const u = (t * e.sp * .3 + e.ph) % 1; ctx.fillStyle = `rgba(255,230,170,${.35 * Math.sin(u * Math.PI)})`; ctx.beginPath(); ctx.arc(e.x + Math.sin(t * .3 + e.w) * 50, H * (1 - u), e.s * .7, 0, TAU); ctx.fill(); } }
  if (k === 'post') { vgrad('#0a101b', '#1e2d42'); for (const w of WIN) { const on = Math.sin(t * .25 + w.ph) > (w.v * 2 - 1.1); ctx.fillStyle = on ? `rgba(${w.v > .5 ? '255,214,150' : '170,210,255'},${.1 + w.v * .22})` : 'rgba(255,255,255,.03)'; ctx.fillRect(12 + w.x * 57, 8 + w.y * 42, 43, 28); } disc('#3d5574', 335, 'rgba(120,160,220,.16)'); ctx.strokeStyle = 'rgba(200,225,255,.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(FCX, FCY - 20, 335, 0, TAU); ctx.stroke(); }
  if (k === 'today') { vgrad('#0e1216', '#1a2630'); for (const [x, y, c] of [[380 + Math.sin(t * .3) * 80, 300, '80,200,190'], [1500 + Math.cos(t * .25) * 80, 700, '230,90,120']]) { const g = ctx.createRadialGradient(x, y, 0, x, y, 800); g.addColorStop(0, `rgba(${c},.2)`); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
    ctx.fillStyle = 'rgba(255,255,255,.07)'; for (let y = 30; y < H; y += 48) for (let x = 30; x < W; x += 48) ctx.fillRect(x, y, 3, 3); disc('#e9e4d8', 335, 'rgba(255,255,255,.1)'); }
}

// ------------------------------------------------------------------ panels
function miniFace(x, y, R, era, hs, t, o) { ctx.save(); ctx.beginPath(); ctx.arc(x, y, R * 1.45, 0, TAU); ctx.fillStyle = '#d9a94e'; ctx.fill(); ctx.clip(); drawFace(x, y + R * .12, R, era, hs, t, o); ctx.restore(); ctx.strokeStyle = CREAM; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, R * 1.45, 0, TAU); ctx.stroke(); }
const CARDS = [
  [tGrow, 'STATUS SYMBOL', '武士の証', 'MARK OF A WARRIOR', 'thick beard = valour'],
  [tFake - .2, 'FACE ARMOUR', '面頬', 'MENPŌ · ARMOURED MASK', 'false whiskers attached'],
  [T.edo, 'PEACETIME', '太平の世', 'THE TOKUGAWA PEACE', 'fierce looks fall from favour'],
  [tBan - 1.3, 'EDICT', '大髭禁止令', 'THE BIG-BEARD BAN', '4th shogun Ietsuna', 'r. 1651 – 1680'],
  [LS(7), 'CLEAN-SHAVEN ERA', '約200年', '', ''],
  [T.mei, 'WESTERNISATION', '文明開化', 'OPENING TO THE WEST', 'the rule flips again'],
  [wt(9, 'statesmen') - .2, 'THE ELITE FOLLOW', '', '', ''],
  [LS(10), 'RECORD HOLDER', '長岡外史', 'GEN. NAGAOKA GAISHI', '"propeller" moustache', '≈ 51 cm (20 in) tip to tip'],
  [T.post, 'POST-WAR', '剃刀の帰還', 'THE RAZOR RETURNS', ''],
  [LS(12), 'DRESS CODE', 'サラリーマン', 'THE SALARYMAN STANDARD', 'smooth face = uniform'],
  [T.today, 'ONGOING', '論争中', 'STILL ARGUING', ''],
  [wt(14, 'twenty') - .2, 'CITY RULE · 2010', '伊勢崎市', 'ISESAKI, GUNMA', 'male staff told: no beards'],
  [LS(15), 'COURT RULING · 2019', '大阪地裁', 'OSAKA DISTRICT COURT', 'beard-based low ratings unlawful', 'city ordered to pay ¥440,000'],
];
const tBarred = wt(14, 'barred'), tUnlaw = wt(15, 'unlawful');
function statusAt(t) {
  if (t < tFake + .6) return ['PRIZED', '誉れ', GOLD]; if (t < T.edo) return ['FAKED IF NEEDED', '付けひげ', GOLD];
  if (t < tBan) return ['OUT OF FAVOUR', '時代遅れ', '#f0a04a']; if (t < wt(8, 'flipped')) return ['BANNED', '禁止', VERM];
  if (t < LS(10)) return ['BACK IN STYLE', '復活', GOLD]; if (t < T.post) return ['AUTHORITY', '権威', GOLD];
  if (t < T.today) return ['FROWNED ON', '好まれず', VERM]; return ['CONTESTED', '論争中', '#f0a04a'];
}
function apprPath(x0, y0, w, h, yr) { ctx.beginPath(); let first = true; for (let y = 1550; ; y += 2) { const yy = Math.min(y, yr), px = x0 + (yy - 1550) / 476 * w, py = y0 + h - kf(APPR, yy) * h; first ? ctx.moveTo(px, py) : ctx.lineTo(px, py); first = false; if (y >= yr) return [px, py]; } }
function panels(t) {
  const a = P(t, T.sen + .2, T.sen + .9) * (1 - P(t, T.out - .5, T.out)); if (a <= 0) return;
  const ei = eraIdx(t), er = ERAS[ei], p = P(t, er.t0 + .05, er.t0 + .8), e = E.o3(p), yr = yearAt(t);
  ctx.save(); ctx.shadowColor = 'transparent';
  hudPanel(70, 165, 400, 580, 'ERA', a, GOLD);
  ctx.globalAlpha = a * p; txt(er.kanji, 100 + 30 * (1 - e), 366, font(900, 150, F.s), CREAM, 'left');
  txt(er.en.slice(0, Math.round(er.en.length * p)), 104, 412, font(800, 24), GOLD, 'left', 5); txt(er.yrs, 104, 444, font(500, 17, F.m), 'rgba(239,226,196,.7)', 'left', 2);
  ctx.globalAlpha = a; ctx.fillStyle = 'rgba(232,195,106,.3)'; ctx.fillRect(100, 472, 340, 1.5);
  txt('YEAR', 104, 506, font(700, 15, F.m), 'rgba(239,226,196,.65)', 'left', 4); txt(String(Math.round(yr)), 100, 580, font(800, 78, F.m), '#fff', 'left', 2);
  ctx.fillRect(100, 606, 340, 1.5);
  txt('BEARD STATUS', 104, 640, font(700, 15, F.m), 'rgba(239,226,196,.65)', 'left', 4);
  const [sw, sj, sc] = statusAt(t); txt(sw, 102, 690, font(900, sw.length > 11 ? 33 : 42), sc, 'left', 2); txt(sj, 104, 724, font(700, 22, F.j), 'rgba(255,255,255,.8)', 'left', 3);
  // graph
  hudPanel(1450, 165, 400, 330, 'APPROVAL INDEX', a, GOLD); txt('ILLUSTRATIVE · NOT MEASURED DATA', 1472, 222, font(500, 12.5, F.m), 'rgba(239,226,196,.6)', 'left', 1.5);
  const gx = 1482, gy = 250, gw = 338, gh = 190; ctx.strokeStyle = 'rgba(239,226,196,.22)'; ctx.lineWidth = 1; ctx.strokeRect(gx, gy, gw, gh);
  for (const y of [1603, 1868, 1945]) { const x = gx + (y - 1550) / 476 * gw; ctx.setLineDash([4, 5]); ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x, gy + gh); ctx.stroke(); ctx.setLineDash([]); }
  txt('誉', gx + 6, gy + 22, font(900, 17, F.s), GOLD, 'left'); txt('禁', gx + 6, gy + gh - 8, font(900, 17, F.s), VERM, 'left');
  txt('1550', gx, gy + gh + 22, font(500, 13, F.m), 'rgba(239,226,196,.6)', 'left'); txt('TODAY', gx + gw, gy + gh + 22, font(500, 13, F.m), 'rgba(239,226,196,.6)', 'right');
  ctx.strokeStyle = GOLD; ctx.lineWidth = 3.5; ctx.lineJoin = 'round'; const [px, py] = apprPath(gx, gy, gw, gh, yr); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(px, py, 6, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(px, py, 10 + 4 * Math.sin(t * 5), 0, TAU); ctx.stroke();
  // card
  let ci = -1; for (let i = 0; i < CARDS.length; i++) if (t >= CARDS[i][0]) ci = i;
  if (ci >= 0) { const cd = CARDS[ci], cp = P(t, cd[0], cd[0] + .5), ce = E.o3(cp);
    hudPanel(1450, 515, 400, 230, cd[1], a * cp, GOLD); ctx.globalAlpha = a * cp; const ox = 24 * (1 - ce);
    if (ci === 4) { const q = P(t, LS(7), wt(7, 'respectable')); txt('約' + Math.round(200 * E.o3(q)) + '年', 1474 + ox, 618, font(900, 58, F.s), CREAM, 'left'); txt('≈ 200 YEARS, CLEAN-SHAVEN', 1474, 656, font(800, 19), GOLD, 'left', 2);
      ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(1474, 682, 352, 14); ctx.fillStyle = GOLD; ctx.fillRect(1474, 682, 352 * E.o3(q), 14); txt('1670s', 1474, 722, font(500, 13, F.m), 'rgba(239,226,196,.7)', 'left'); txt('1868', 1826, 722, font(500, 13, F.m), 'rgba(239,226,196,.7)', 'right'); }
    else if (ci === 6) { const H3 = [{ m: 1, c: 0, j: 0, sweep: .6, ext: .1 }, { m: .9, c: 1, j: .9, sweep: 0, ext: 0 }, { m: 1, c: .6, j: 0, sweep: .25, ext: 0 }];
      for (let k = 0; k < 3; k++) { const q = E.oBack(P(t, cd[0] + .25 + k * .35, cd[0] + .7 + k * .35)); if (q > 0) { ctx.save(); ctx.translate(1530 + k * 120, 635); ctx.scale(q, q); miniFace(0, 0, 30, 'mei', H3[k], t, { lw: 2.6, bs: k }); ctx.restore(); } }
      txt('STATESMEN · GENERALS · OFFICIALS', 1474, 722, font(700, 13.5, F.m), 'rgba(239,226,196,.8)', 'left', 1); }
    else { txt(cd[2], 1474 + ox, 618, font(900, cd[2].length > 5 ? 46 : 56, F.s), CREAM, 'left'); txt(cd[3], 1474, 656, font(800, 19), GOLD, 'left', 2);
      if (cd[4]) txt(cd[4], 1474, 690, font(500, 15, F.m), 'rgba(255,255,255,.85)', 'left', .5); if (cd[5]) txt(cd[5], 1474, 716, font(500, 15, F.m), 'rgba(255,255,255,.85)', 'left', .5); }
    ctx.globalAlpha = a;
    if (ci === 3) stamp(t, tBan, 1762, 702, '禁止', VERM, .08, 31);
    if (ci === 11) stamp(t, tBarred, 1782, 598, '禁止', VERM, .08, 31);
    if (ci === 12) stamp(t, tUnlaw, 1782, 598, '勝訴', '#7dffb0', .08, 31); }
  ctx.restore();
}

// ------------------------------------------------------------------ scenes
function furryKanji(t, cx, cy, sc, t0, a) {
  if (a <= 0) return; ctx.save(); ctx.translate(cx, cy); ctx.scale(sc, sc); ctx.globalAlpha = a * .22 * P(t, t0 + .4, t0 + 2); ctx.fillStyle = CREAM; ctx.font = '900 600px "Noto Serif CJK JP"'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('髭', 0, 20);
  ctx.globalAlpha = a; const p1 = new Path2D(), p2 = new Path2D();
  for (let i = 0; i < KP.length; i++) { const k = KP[i], g = E.o3(P(t, t0 + (k.y + 350) / 700 * 1.3 + k.d * .5, t0 + (k.y + 350) / 700 * 1.3 + k.d * .5 + .9)); if (g <= 0) continue; const L = 30 * k.l * g, wv = Math.sin(t * 1.6 + k.ph) * 5 * g; (i % 3 ? p1 : p2).moveTo(k.x, k.y); (i % 3 ? p1 : p2).quadraticCurveTo(k.x + wv * .3, k.y + L * .6, k.x + wv + (k.d - .5) * 8, k.y + L); }
  ctx.lineCap = 'round'; ctx.lineWidth = 2.6; ctx.strokeStyle = CREAM; ctx.stroke(p1); ctx.strokeStyle = '#b89e6e'; ctx.stroke(p2); ctx.restore();
}
function introBG(t) { vgrad('#07060c', '#191222'); const g = ctx.createRadialGradient(W / 2, 430, 0, W / 2, 430, 900); g.addColorStop(0, 'rgba(226,69,47,.2)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(239,226,196,.05)'; ctx.lineWidth = 1.5; for (let i = 0; i < 60; i++) { const x = (i * 97.3) % W, y = ((t * (30 + i % 7 * 9) + i * 131) % (H + 300)) - 150; ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 8, y + 60, x - 4, y + 120); ctx.stroke(); } }
const tSw = LS(1) - .3, tBadge = wt(1, 'badge'), tBreach = wt(1, 'breach');
function sceneIntro(t) {
  introBG(t); const u = E.io(P(t, tSw, tSw + 1.1));
  furryKanji(t, lerp(960, 960, u), lerp(430, 265, u), lerp(.92, .42, u), .35, 1);
  const la = vis(t, 1.6, tSw + .2, .6, .4); ctx.globalAlpha = la; txt('ひ げ', 1330, 420, font(900, 64, F.s), CREAM, 'left'); txt('HIGE', 1332, 470, font(800, 30), GOLD, 'left', 10); txt('beard · moustache · whiskers', 1332, 506, font(500, 17, F.m), 'rgba(239,226,196,.75)', 'left', 1); ctx.fillStyle = GOLD; ctx.fillRect(1250, 440, 60, 2); ctx.globalAlpha = 1;
  // pendulum gauge
  const ga = P(t, tSw + .3, tSw + 1); if (ga > 0) { const px = 960, py = 800, R = 350; let ang;
    const swing = Math.sin((t - tBreach - .8) * 4.2) * .7 * P(t, tBreach + .8, tBreach + 1.4);
    ang = lerp(0, -.82, E.io(P(t, tBadge - .25, tBadge + .5))); ang = lerp(ang, .82, E.io(P(t, tBreach - .3, tBreach + .5))); ang = lerp(ang, swing, P(t, tBreach + .8, tBreach + 1.3));
    ctx.save(); ctx.globalAlpha = ga; ctx.strokeStyle = 'rgba(239,226,196,.3)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(px, py, R, -Math.PI / 2 - 1.0, -Math.PI / 2 + 1.0); ctx.stroke();
    for (let k = -10; k <= 10; k++) { const a = -Math.PI / 2 + k * .1; ctx.strokeStyle = k < 0 ? GOLD : k > 0 ? VERM : '#fff'; ctx.globalAlpha = ga * .7; ctx.beginPath(); ctx.moveTo(px + Math.cos(a) * (R - 14), py + Math.sin(a) * (R - 14)); ctx.lineTo(px + Math.cos(a) * (R + (k % 5 ? 4 : 14)), py + Math.sin(a) * (R + (k % 5 ? 4 : 14))); ctx.stroke(); }
    ctx.globalAlpha = ga; const hl = clamp(-ang / .6), hr = clamp(ang / .6);
    for (const [sg, kj, en, col, h] of [[-1, '誉', 'BADGE OF HONOUR', GOLD, hl], [1, '禁', 'BREACH OF THE RULES', VERM, hr]]) { const x = px + sg * 470, y = 640; ctx.globalAlpha = ga * (.4 + .6 * h); ctx.save(); ctx.translate(x, y); ctx.scale(1 + .15 * h, 1 + .15 * h); ctx.shadowColor = col; ctx.shadowBlur = 40 * h; txt(kj, 0, 0, font(900, 150, F.s), col, 'center'); ctx.restore(); txt(en, x, y + 56, font(800, 22), '#fff', 'center', 4); }
    ctx.globalAlpha = ga; const a = -Math.PI / 2 + ang; ctx.strokeStyle = CREAM; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + Math.cos(a) * (R - 26), py + Math.sin(a) * (R - 26)); ctx.stroke();
    ctx.fillStyle = CREAM; ctx.beginPath(); ctx.arc(px + Math.cos(a) * (R - 26), py + Math.sin(a) * (R - 26), 13, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(px, py, 16, 0, TAU); ctx.fill(); ctx.restore(); }
}
function sceneWorld(t) {
  const ei = eraIdx(t), er = ERAS[ei], p = P(t, er.t0, er.t0 + .8);
  if (ei > 0 && p < 1) { drawBG(ERAS[ei - 1].k, t); ctx.save(); ctx.beginPath(); ctx.arc(FCX, FCY, E.o3(p) * 1300, 0, TAU); ctx.clip(); drawBG(er.k, t); ctx.restore(); ctx.strokeStyle = `rgba(255,240,215,${1 - p})`; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(FCX, FCY, E.o3(p) * 1300, 0, TAU); ctx.stroke(); }
  else drawBG(er.k, t);
  const hs = hairState(t), pe = t < T.post ? E.io(P(t, tProp, tProp + 2.6)) : 0, R = FR * lerp(1, .8, pe), cy = FCY + 8 * Math.sin(t * .9) * .4 - 30 * pe;
  const pop = E.oBack(P(t, er.t0 - .05, er.t0 + .5)), fs = ei === 0 ? 1 : lerp(.92, 1, pop);
  // salaryman clones
  if (er.k === 'post') { const t0 = wt(12, 'smooth') - .3, HS0 = { m: 0, c: 0, j: 0, sweep: 0, ext: 0 }; [[640, 560, 96], [1280, 560, 96], [560, 330, 64], [1360, 330, 64], [730, 300, 58], [1190, 300, 58]].forEach(([x, y, r], k) => { const q = E.oBack(P(t, t0 + k * .22, t0 + k * .22 + .45)); if (q > 0) { ctx.save(); ctx.globalAlpha = clamp(q) * .92; drawFace(x, y + (1 - q) * 40, r * q, 'post', HS0, t, { bs: k * .7 }); ctx.restore(); } }); }
  const mood = { sen: 1, edo: t > tBan ? -.3 : .5, mei: .2, post: -.4, today: 0 }[er.k], smile = { sen: -.6, edo: 0, mei: .2, post: t > tRazor + 1 ? .4 : -.5, today: .8 }[er.k];
  drawFace(FCX, cy, R * fs, er.k, hs, t, { mood, smile, menpo: t < T.edo ? P(t, tFake - .2, tFake + .45) : 0 });
  // reticle on the hero beard
  reticle(FCX, cy + R * .78, 62, t, 'HIGE #001', 'GROWING', vis(t, tGrow + .3, wt(3, 'couldn') - .2, .5, .3), CREAM);
  reticle(FCX, cy + R * .6, 70, t, 'HIGE #001', 'STILL HERE', vis(t, tNow + .5, LS(14) - .1, .5, .3), VERM);
  // propeller dimension
  if (pe > 0.02 && t < T.post) { const s = R / 100, half = (34 + hs.ext * 221) * s, y = cy + 66 * s, a = clamp(pe * 2); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = INK; ctx.fillStyle = INK; ctx.lineWidth = 3;
    for (const sg of [-1, 1]) { ctx.beginPath(); ctx.moveTo(FCX + sg * half, y - 16); ctx.lineTo(FCX + sg * half, y + 16); ctx.stroke(); arrow(FCX + sg * half, y, FCX + sg * Math.min(half - 10, 92 * s), y, 12); }
    txt(Math.round(51 * hs.ext) + ' cm', FCX - half + 6, y + 58, font(900, 46), INK, 'left'); txt('TIP TO TIP', FCX + half - 6, y + 52, font(800, 24), INK, 'right', 4); ctx.restore(); }
  panels(t);
}
const OW = [['honor', '誉', 'HONOUR', 'sen', { m: 1, c: 1, j: 1, sweep: 0, ext: 0 }, GOLD], ['rebellion', '反骨', 'REBELLION', 'edo', { m: 1, c: .9, j: .9, sweep: 0, ext: 0 }, VERM], ['authority', '権威', 'AUTHORITY', 'mei', { m: 1, c: .7, j: .3, sweep: .5, ext: .12 }, GOLD], ['nuisance', '迷惑', 'NUISANCE', 'today', { m: .6, c: .42, j: .45, sweep: 0, ext: 0 }, VERM]];
function sceneOutro(t) {
  introBG(t);
  const fo = 1 - P(t, T.graph - .1, T.graph + .5);
  if (fo > 0) OW.forEach(([w, kj, en, era, hs, col], k) => { const t0 = wt(16, w) - .08, q = E.oBack(P(t, t0, t0 + .4)), x = 330 + k * 420; if (q <= 0) return;
    ctx.save(); ctx.globalAlpha = clamp(q) * fo; ctx.fillStyle = ['#a3261a', '#efe2c4', '#d9a94e', '#e9e4d8'][k]; ctx.beginPath(); ctx.arc(x, 400, 185 * q, 0, TAU); ctx.fill(); ctx.save(); ctx.beginPath(); ctx.rect(x - 230, 100, 460, 485); ctx.clip(); drawFace(x, 400, 108 * q, era, hs, t, { mood: [1, .6, .2, 0][k], smile: [-.6, .3, .2, .8][k], bs: k, lw: 2 }); ctx.restore();
    txt(kj, x, 730 + 20 * (1 - q), font(900, 110, F.s), col, 'center'); txt(en, x, 778, font(800, 24), '#fff', 'center', 6); ctx.restore(); });
  const ga = P(t, T.graph + .2, T.graph + .8) * (1 - .93 * P(t, T.card, T.card + .5));
  if (ga > 0) { ctx.save(); ctx.globalAlpha = ga; const x0 = 300, y0 = 300, w = 1320, h = 420, X = y => x0 + (y - 1550) / 476 * w;
    txt('BEARD APPROVAL INDEX', x0, 232, font(800, 30), CREAM, 'left', 6); txt('ILLUSTRATIVE · NOT MEASURED DATA', x0 + w, 232, font(500, 16, F.m), 'rgba(239,226,196,.65)', 'right', 2);
    [[1550, 1603, '戦国', '#a3261a'], [1603, 1868, '江戸', '#2a4c8c'], [1868, 1945, '明治〜', '#a8782c'], [1945, 2026, '戦後〜', '#4a6a8c']].forEach(([a, b, n, c]) => { ctx.globalAlpha = ga * .3; ctx.fillStyle = c; ctx.fillRect(X(a) + 2, y0, X(b) - X(a) - 4, h); ctx.globalAlpha = ga * .85; txt(n, (X(a) + X(b)) / 2, y0 + 50, font(900, b - a < 60 ? 30 : 40, F.s), CREAM, 'center'); txt(String(a), X(a) + 2, y0 + h + 28, font(500, 16, F.m), 'rgba(239,226,196,.7)', 'left'); });
    ctx.globalAlpha = ga; txt('TODAY', x0 + w, y0 + h + 28, font(500, 16, F.m), 'rgba(239,226,196,.7)', 'right'); txt('誉 PRIZED', x0 - 16, y0 + 24, font(800, 20, F.j), GOLD, 'right'); txt('禁 BANNED', x0 - 16, y0 + h - 8, font(800, 20, F.j), VERM, 'right');
    const yr = lerp(1550, 2026, E.io2(P(t, T.graph + .5, T.graph + 2.9))); ctx.strokeStyle = GOLD; ctx.lineWidth = 7; ctx.lineJoin = 'round'; ctx.shadowColor = GOLD; ctx.shadowBlur = 24; const [px, py] = apprPath(x0, y0, w, h, yr); ctx.stroke(); ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(px, py, 11, 0, TAU); ctx.fill();
    for (const [y, lab, dy] of [[1590, 'WARRIOR PRIDE', 58], [1700, 'BANNED', -26], [1900, 'IMPERIAL FASHION', 44], [1975, 'SALARYMAN', 44], [2024, '?', -34]]) if (yr >= y) { const q = P(yr, y, y + 25); ctx.globalAlpha = ga * q; txt(lab, X(y), y0 + h - kf(APPR, y) * h + dy, font(800, lab === '?' ? 44 : 19), '#fff', 'center', 2); }
    ctx.restore(); }
  const ca = P(t, T.card, T.card + .6); if (ca > 0) { furryKanji(t, 960, 330, .5, T.card - 3, ca); ctx.globalAlpha = ca; txt('ひげの日本史', 960, 640 + 16 * (1 - E.o3(ca)), font(900, 104, F.s), CREAM, 'center', 10); ctx.fillStyle = VERM; ctx.fillRect(960 - 230 * E.o3(ca), 676, 460 * E.o3(ca), 4);
    txt("JAPAN'S LONG, COMPLICATED HISTORY WITH FACIAL HAIR", 960, 730, font(700, 24), GOLD, 'center', 6); ctx.globalAlpha = 1; }
}

const owT = OW.map(o => wt(16, o[0]) - .08);
window.FILM = {
  title: 'HIGE', tag: 'HIGE · A HISTORY OF JAPANESE FACIAL HAIR', init: initFilm,
  hotLines: [6, 11, 14],
  scenes: [{ start: 0, draw: sceneIntro }, { start: T.sen, draw: sceneWorld }, { start: T.out, draw: sceneOutro }],
  xfades: [[T.sen, .6], [T.out, .6]],
  chapters: [[0, '00', 'MORE THAN A BEARD'], [T.sen, '01', 'THE WARRIOR BEARD'], [T.edo, '02', 'THE BAN'], [T.mei, '03', 'THE COMEBACK'], [T.post, '04', 'THE RAZOR RETURNS'], [T.today, '05', 'STILL ARGUING'], [T.out, '06', 'THE VERDICT']],
  hits: [[tBan, 12, .45], [tFake + .25, 8, .35], [tBarred, 8, .35], [tUnlaw, 10, .4], ...owT.map(x => [x, 7, .3]), [T.card, 10, .5]],
  flashes: [[T.sen, .3], [T.edo, .3], [T.mei, .3], [T.post, .3], [T.today, .3], [T.out, .3]],
  events: { intro: [.35], swing: [tBadge, tBreach], eras: [T.sen, T.edo, T.mei, T.post, T.today, T.out], grow: [tGrow, tMei, tNow], poof: [wt(3, 'couldn')], clank: [tFake + .25], shave: [tBan, tRazor], stamp: [tBan, tBarred], win: [tUnlaw], stretch: [tProp, tProp + 2.6], count: [LS(7), wt(7, 'respectable')], busts: [0, 1, 2].map(k => wt(9, 'statesmen') + .05 + k * .35), clones: [0, 1, 2, 3, 4, 5].map(k => wt(12, 'smooth') - .3 + k * .22), cards: CARDS.map(c => c[0]), words: owT, graph: [T.graph + .5, T.graph + 2.9], card: [T.card], T },
};
