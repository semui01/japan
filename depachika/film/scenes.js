// DOWN TO THE BASEMENT — episode 13: the depachika. Portrait-first (9:16). Helpers in lib.js.
// Tone: brisk and appetizing. The "firsts" come from a business historian's thesis and a library research note, so the 1911 claim stays attributed on screen.
const EP = { n: 13, next: ['The ekiben', 'fair'] };
const L = TL.length - 1;
const T = { hook: 0, up: LB(3), under: LB(6), fish: LB(9), names: LB(12), noren: LB(16), word: LB(20), quarter: LB(22), tease: LB(23), end: TL[L].e + .15 };
const fadeIn = (t, t0, d = .5) => E.o3(P(t, t0, t0 + d));
function quiet(s, x, y, size, bgc, fg, a) { plate(s, x, y, size, bgc, fg, a, 0, 1); }
function hatMan(x, y, s, col) { mini(x, y, s, col); ctx.fillStyle = col; rrect(x - 13 * s, y - 126 * s, 26 * s, 18 * s, 4 * s); ctx.fill(); rrect(x - 22 * s, y - 111 * s, 44 * s, 6 * s, 3 * s); ctx.fill(); }
const FOODC = ['#dc4a33', '#f0b637', '#7fae5a', '#e9dcbb', '#b06c22', '#f29a8a', '#7a4f2c', '#f3ecd8'];

// a lit display case full of trays
function foodCase(x, y, w, h, seed, a = 1) {
  ctx.fillStyle = '#5b3a20'; ctx.fillRect(x - 6, y + h, w + 12, 16); const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, `rgba(255,236,190,${a})`); g.addColorStop(1, `rgba(240,200,130,${a})`); ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  const r = rng(seed), n = Math.max(2, Math.floor(w / 62)); for (let j = 0; j < 2; j++) for (let i = 0; i < n; i++) { const cx = x + 10 + i * ((w - 20) / n), cy = y + 12 + j * (h / 2 - 4), cw = (w - 20) / n - 8, ch = h / 2 - 20; ctx.fillStyle = '#fff8e8'; rrect(cx, cy, cw, ch, 5); ctx.fill(); ctx.fillStyle = FOODC[Math.floor(r() * 8)]; const k = Math.floor(r() * 3); if (k === 0) { for (let q = 0; q < 3; q++) { ctx.beginPath(); ctx.arc(cx + cw * (.22 + q * .28), cy + ch / 2, Math.min(cw * .12, ch * .32), 0, TAU); ctx.fill(); } } else if (k === 1) rrect(cx + 5, cy + 6, cw - 10, ch - 12, 6), ctx.fill(); else { rrect(cx + 5, cy + 6, cw / 2 - 8, ch - 12, 4); ctx.fill(); ctx.fillStyle = FOODC[Math.floor(r() * 8)]; rrect(cx + cw / 2 + 2, cy + 6, cw / 2 - 8, ch - 12, 4); ctx.fill(); } }
  ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 4; ctx.strokeRect(x, y, w, h); ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.beginPath(); ctx.moveTo(x + w * .1, y); ctx.lineTo(x + w * .3, y); ctx.lineTo(x + w * .16, y + h); ctx.lineTo(x - w * .04 + w * .04, y + h); ctx.fill();
}

// ------------------------------------------------------------ 01 going down
function sceneHook(t) {
  fillBG('#3a3440', '#2a2430'); const hall = ctx.createLinearGradient(0, 1000, 0, 1400); hall.addColorStop(0, 'rgba(255,220,150,0)'); hall.addColorStop(1, 'rgba(255,220,150,.5)'); ctx.fillStyle = hall; ctx.fillRect(0, 900, W, 520);
  ctx.fillStyle = '#e9d9b0'; ctx.fillRect(0, 1290, W, 800); ctx.fillStyle = 'rgba(0,0,0,.06)'; for (let i = 0; i < 9; i++) if (i % 2) ctx.fillRect(i * 130 - 20, 1290, 130, 60);
  foodCase(620, 1130, 420, 150, 3); ctx.fillStyle = K.red; ctx.fillRect(610, 1060, 440, 44); ctx.fillStyle = '#f3ecd8'; for (let i = 0; i < 6; i++) ctx.fillRect(610 + i * 80, 1060, 40, 44); foodCase(-60, 1180, 260, 110, 9);
  // escalator
  const A = [60, 640], B = [820, 1270], dx = B[0] - A[0], dy = B[1] - A[1];
  ctx.fillStyle = '#4a505c'; ctx.beginPath(); ctx.moveTo(A[0] - 60, A[1] + 40); ctx.lineTo(B[0], B[1] + 26); ctx.lineTo(B[0], B[1] + 90); ctx.lineTo(A[0] - 60, A[1] + 230); ctx.fill();
  ctx.fillStyle = '#16181d'; for (let i = 0; i < 14; i++) { const u = ((i / 14 + t * .11) % 1), x = A[0] + dx * u, y = A[1] + dy * u; ctx.fillRect(x - 30, y + 20, 62, 14); ctx.fillStyle = '#2a2d36'; ctx.fillRect(x - 30, y + 34, 62, 30); ctx.fillStyle = '#16181d'; }
  for (let i = 0; i < 3; i++) { const u = ((i / 3 + t * .11 + .06) % 1), x = A[0] + dx * u, y = A[1] + dy * u, a = Math.min(P(u, 0, .08), 1 - P(u, .9, 1)); ctx.save(); ctx.globalAlpha = a; (i === 1 ? hatMan : mini)(x, y + 22, 1.7, ['#24407a', '#5b2a30', '#274a48'][i]); ctx.restore(); }
  ctx.fillStyle = 'rgba(200,225,240,.22)'; ctx.beginPath(); ctx.moveTo(A[0] - 60, A[1] - 70); ctx.lineTo(B[0], B[1] - 80); ctx.lineTo(B[0], B[1] + 30); ctx.lineTo(A[0] - 60, A[1] + 40); ctx.fill(); ctx.strokeStyle = '#1b1a22'; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(A[0] - 60, A[1] - 70); ctx.lineTo(B[0], B[1] - 80); ctx.lineTo(B[0] + 50, B[1] - 80); ctx.stroke();
  ctx.fillStyle = '#4a505c'; ctx.fillRect(B[0] - 4, B[1] + 20, 140, 22);
  // B1 sign, the word, the turn
  const d0 = wt(0, 'down') - .3; if (t > d0) { const k = pop(t, d0); ctx.save(); ctx.translate(910, 640); ctx.scale(k, k); ctx.fillStyle = K.ink; rrect(-90, -70, 180, 150, 14); ctx.fill(); big('B1', 0, 28, 84, K.must, 'center', '#05071a'); ctx.fillStyle = K.must; const b = 8 * Math.sin(t * 5); ctx.beginPath(); ctx.moveTo(-24, 100 + b); ctx.lineTo(24, 100 + b); ctx.lineTo(0, 136 + b); ctx.fill(); ctx.restore(); }
  const w0 = wt(1, 'depachika') - .4, u0 = wt(2, 'upstairs') - .6, off = 1 - P(t, u0 - .1, u0 + .2);
  if (t > w0) { ctx.save(); ctx.globalAlpha = P(t, w0, w0 + .25) * off; jp('デパ地下', 430, 900, 110, K.paper, 'center', .05); ctx.restore(); plate('DEPACHIKA', 430, 960, 44, K.must, K.ink, off, -.02, pop(t, w0 + .2)); }
  const f0 = wt(1, 'bento') - .3; if (t > f0) plate('BENTO · SWEETS · GIFTS', 540, 1348, 42, K.paper, K.ink, off, .012, pop(t, f0));
  if (t > u0) { plate('BUT IT STARTED UPSTAIRS', 500, 930, 50, K.red, K.paper, 1, -.02, pop(t, u0)); const k = pop(t, u0 + .2); ctx.save(); ctx.translate(940, 930 - 14 * Math.abs(Math.sin(t * 4))); ctx.scale(k, k); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(0, -60); ctx.lineTo(44, 0); ctx.lineTo(16, 0); ctx.lineTo(16, 56); ctx.lineTo(-16, 56); ctx.lineTo(-16, 0); ctx.lineTo(-44, 0); ctx.fill(); ctx.restore(); }
  topBand(540, 'rgba(20,16,26,.72)');
  plate('EP 13', 160, 268, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('DOWN TO', 540, 396, 116, t, .55, K.paper, -.015, '#0a080e'); popText('THE BASEMENT', 540, 510, 108, t, .8, K.must, -.015, '#0a080e');
}

// ------------------------------------------------------------ 02 upstairs, 1911
function bottle(x, y, col, k) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = col; rrect(-30, -170, 60, 170, [16, 16, 6, 6]); ctx.fill(); rrect(-12, -250, 24, 90, 6); ctx.fill(); ctx.fillStyle = K.must; rrect(-14, -262, 28, 22, 4); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-24, -120, 48, 64, 4); ctx.fill(); ctx.fillStyle = 'rgba(20,27,51,.4)'; ctx.fillRect(-16, -104, 32, 6); ctx.fillRect(-16, -88, 22, 6); ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(-24, -166, 10, 150); ctx.restore(); }
function tinCan(x, y, w, h, col, lab, k) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(-w / 2 + 6, -h + 6, w, h, 8); ctx.fill(); ctx.fillStyle = col; rrect(-w / 2, -h, w, h, 8); ctx.fill(); ctx.fillStyle = '#c8ccd4'; ctx.fillRect(-w / 2, -h, w, 12); ctx.fillRect(-w / 2, -12, w, 12); ctx.fillStyle = '#f3ecd8'; rrect(-w / 2 + 10, -h * .68, w - 20, h * .4, 4); ctx.fill(); if (lab) txt(lab, 0, -h * .68 + h * .28, font(900, Math.min(26, (w - 30) / lab.length * 1.5)), K.ink, 'center', 1); ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(-w / 2 + 6, -h + 12, 10, h - 24); ctx.restore(); }
function sceneUp(t) {
  fillBG('#6b4a3a', '#3a261c'); ctx.fillStyle = 'rgba(0,0,0,.12)'; for (let i = 0; i < 9; i++) ctx.fillRect(i * 130, 540, 6, 600); ctx.fillStyle = '#4a3020'; ctx.fillRect(60, 780, 960, 20);
  ctx.fillStyle = '#8b5a33'; ctx.fillRect(0, 1090, W, 280); ctx.fillStyle = '#5b3a20'; ctx.fillRect(-10, 1070, W + 20, 30); ctx.fillStyle = '#2a1810'; ctx.fillRect(0, 1370, W, 800);
  const Y = 1070, A0 = T.up + .7, liq = A0, cof = A0 + .5, spi = A0 + 1.0, tin = A0 + 1.6, bis = A0 + 2.2, gif = wt(5, 'gifts') - .5;
  [['LIQUOR', 155, 760, 'liquor'], ['COFFEE', 340, 850, 'coffee'], ['SPICES', 536, 920, 'spices'], ['TINS', 760, 900, 'tins'], ['BISCUITS', 940, 910, 'biscuits']].forEach(([s, x, y, w], i) => { const t0 = wt(5, w) - .3; if (t > t0) plate(s, x, y, 30, i % 2 ? K.must : K.paper, K.ink, 1, (i % 2 ? .03 : -.03), pop(t, t0)); });
  bottle(110, Y, '#274a48', pop(t, liq)); bottle(200, Y, '#7c2a22', pop(t, liq + .12)); tinCan(340, Y, 130, 170, '#5b3a20', 'COFFEE', pop(t, cof));
  for (let i = 0; i < 3; i++) { const k = pop(t, spi + i * .08); if (k > 0) { ctx.save(); ctx.translate(470 + i * 66, Y); ctx.scale(k, k); ctx.fillStyle = 'rgba(230,240,245,.5)'; rrect(-24, -96, 48, 96, 8); ctx.fill(); ctx.fillStyle = ['#b06c22', '#dc4a33', '#f0b637'][i]; rrect(-20, -66, 40, 62, 6); ctx.fill(); ctx.fillStyle = '#1b1a22'; rrect(-26, -112, 52, 20, 5); ctx.fill(); ctx.restore(); } }
  tinCan(710, Y, 96, 120, '#24407a', '', pop(t, tin)); tinCan(810, Y, 96, 120, '#2f6b45', '', pop(t, tin + .1)); tinCan(950, Y, 170, 110, K.red, 'BISCUITS', pop(t, bis));
  if (t > gif) { const k = pop(t, gif); ctx.save(); ctx.translate(950, Y - 110); ctx.scale(k, k); ctx.fillStyle = K.must; ctx.fillRect(-9, 0, 18, 110); ctx.beginPath(); ctx.ellipse(-24, -8, 26, 14, -.5, 0, TAU); ctx.ellipse(24, -8, 26, 14, .5, 0, TAU); ctx.fill(); ctx.restore(); plate('MUCH OF IT FOR GIFTS', 540, 1230, 46, K.must, K.ink, 1, -.012, pop(t, gif + .1)); }
  const g0 = wt(4, 'ground') - .3; if (t > g0) { const k = pop(t, g0); ctx.save(); ctx.translate(880, 690); ctx.scale(k, k); ctx.fillStyle = K.ink; rrect(-80, -60, 160, 120, 12); ctx.fill(); big('1F', 0, 30, 80, K.must, 'center', '#05071a'); ctx.restore(); plate('GROUND FLOOR', 600, 700, 40, K.paper, K.ink, 1, -.02, pop(t, g0 + .15)); }
  const h0 = wt(3, 'what') - .3; if (t > h0) plate('ONE BUSINESS HISTORIAN: “THE FIRST FOOD SECTION”', 540, 596, 30, K.paper, K.ink, 1, -.008, pop(t, h0));
  topBand(540, 'rgba(36,20,12,.7)');
  digits('1911', t, T.up + .25, 400, 190, K.must, '#160c06'); const s0 = wt(3, 'shirokiya') - .3; if (t > s0) plate('SHIROKIYA, NIHONBASHI', 540, 492, 42, K.paper, K.ink, 1, .012, pop(t, s0));
}

// ------------------------------------------------------------ 03 underground, 1922
function sceneUnder(t) {
  const g = ctx.createLinearGradient(0, 540, 0, 920); g.addColorStop(0, '#5f7f9a'); g.addColorStop(1, '#d6c5a0'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, 1000);
  const GL = 930, b0 = wt(8, 'basement') - 1.0, lit = fadeIn(t, b0, 1.0);
  ctx.fillStyle = '#cfc5b0'; ctx.fillRect(140, 600, 800, GL - 600); ctx.fillStyle = '#a89c84'; ctx.fillRect(126, 584, 828, 24); for (let i = 0; i < 6; i++) { ctx.fillStyle = '#56607a'; rrect(180 + i * 125, 640, 80, 110, [40, 40, 3, 3]); ctx.fill(); } ctx.fillStyle = '#4a3a2c'; for (let i = 0; i < 3; i++) rrect(220 + i * 240, 790, 160, 140, [8, 8, 0, 0]), ctx.fill();
  ctx.fillStyle = '#4a3a2c'; ctx.fillRect(-60, GL, W + 120, 900); ctx.fillStyle = '#6f6a60'; ctx.fillRect(-60, GL, W + 120, 18);
  // basement room
  ctx.fillStyle = '#1b1410'; ctx.fillRect(140, GL + 18, 800, 380); const rg = ctx.createLinearGradient(0, GL, 0, GL + 400); rg.addColorStop(0, `rgba(255,226,160,${.18 + .67 * lit})`); rg.addColorStop(1, `rgba(220,160,90,${.18 + .67 * lit})`); ctx.fillStyle = rg; ctx.fillRect(150, GL + 28, 780, 360);
  if (lit > .3) { ctx.save(); ctx.globalAlpha = (lit - .3) / .7; foodCase(420, GL + 250, 220, 110, 5); foodCase(680, GL + 250, 220, 110, 6); ctx.restore(); }
  // stairs and the sign
  ctx.fillStyle = '#6f6a60'; for (let i = 0; i < 8; i++) ctx.fillRect(160 + i * 30, GL + 30 + i * 42, 240 - i * 30 + 10, 42);
  ctx.fillStyle = '#1b1410'; for (let i = 0; i < 8; i++) ctx.fillRect(160 + i * 30, GL + 30 + i * 42, 240 - i * 30 + 10, 5);
  const s0 = wt(6, 'underground') - .3; if (t > s0) { const k = pop(t, s0); ctx.save(); ctx.translate(300, 850); ctx.scale(k, k); ctx.rotate(.02 * Math.sin(t * 2)); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-142, -52, 300, 120, 10); ctx.fill(); ctx.fillStyle = K.ink; rrect(-150, -60, 300, 120, 10); ctx.fill(); txt('FOOD', 30, 24, font(900, 70), K.paper, 'center', 3); ctx.fillStyle = K.must; const b = 6 * Math.sin(t * 5); ctx.beginPath(); ctx.moveTo(-124, -14 + b); ctx.lineTo(-76, -14 + b); ctx.lineTo(-100, 26 + b); ctx.fill(); ctx.fillRect(-108, -40 + b, 16, 28); ctx.restore(); }
  for (let i = 0; i < 3; i++) { const u = P(t, b0 + i * .3, b0 + 1.4 + i * .3); if (u > 0 && u < 1) tinCan(lerp(190, 420, u), GL + 40 + 300 * u - 30 * Math.abs(Math.sin(u * 8 * Math.PI)), 60, 70, [K.red, '#24407a', '#2f6b45'][i], '', 1); }
  txt('1F', 990, 880, font(900, 60), 'rgba(20,27,51,.55)', 'center'); { ctx.save(); ctx.globalAlpha = .4 + .6 * lit; big('B1', 990, GL + 220, 84, K.must, 'center', '#05071a'); ctx.restore(); }
  if (t > b0 + .6) plate('FOOD FLOOR IN THE BASEMENT', 540, 1352, 42, K.must, K.ink, 1, -.012, pop(t, b0 + .6));
  topBand(540, 'rgba(14,26,40,.68)');
  const y0 = wt(7, '1922') - .9; ctx.save(); ctx.globalAlpha = 1 - P(t, y0 - .2, y0); popText('OSAKA', 540, 430, 160, t, wt(6, 'osaka') - .5, K.paper, -.015, '#0a1420'); ctx.restore();
  digits('1922', t, y0, 400, 190, K.must, '#0a1420'); const n0 = wt(7, 'takashimayas') - .1; if (t > Math.max(n0, y0 + .3)) plate('OSAKA · TAKASHIMAYA NAGAHORI', 540, 492, 40, K.paper, K.ink, 1, .012, pop(t, Math.max(n0, y0 + .3)));
}

// ------------------------------------------------------------ 04 frozen fish, 1923
const ICE = (() => { const r = rng(23), a = []; for (let i = 0; i < 70; i++) a.push([r() * 1100 - 10, 1030 + r() * 330, 30 + r() * 50, r() * 3, r()]); return a; })();
function sceneFish(t) {
  fillBG('#1f4a6a', '#0e2436'); const fr = P(t, wt(9, 'frozen') - .6, wt(10, 'cheap') + .6);
  ICE.forEach(([x, y, s, rot, c]) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = c > .5 ? '#dff1f8' : '#b9dcea'; ctx.beginPath(); ctx.moveTo(-s, 0); ctx.lineTo(-s * .3, -s * .7); ctx.lineTo(s * .8, -s * .4); ctx.lineTo(s, s * .3); ctx.lineTo(0, s * .7); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.beginPath(); ctx.moveTo(-s * .3, -s * .7); ctx.lineTo(s * .8, -s * .4); ctx.lineTo(0, 0); ctx.fill(); ctx.restore(); });
  // the fish
  ctx.save(); ctx.translate(540, 960); ctx.rotate(-.06); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.ellipse(10, 60, 360, 40, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#5f8196'; ctx.beginPath(); ctx.moveTo(300, 0); ctx.lineTo(430, -110); ctx.lineTo(400, 0); ctx.lineTo(430, 110); ctx.closePath(); ctx.fill();
  const fg = ctx.createLinearGradient(0, -120, 0, 120); fg.addColorStop(0, '#3f6a86'); fg.addColorStop(.5, '#a9c4d2'); fg.addColorStop(1, '#eef4f6'); ctx.fillStyle = fg; ctx.beginPath(); ctx.moveTo(-360, 0); ctx.quadraticCurveTo(-200, -150, 60, -110); ctx.quadraticCurveTo(250, -70, 330, 0); ctx.quadraticCurveTo(250, 70, 60, 110); ctx.quadraticCurveTo(-200, 150, -360, 0); ctx.fill();
  ctx.fillStyle = '#3f6a86'; ctx.beginPath(); ctx.moveTo(-60, -116); ctx.lineTo(40, -180); ctx.lineTo(120, -100); ctx.fill(); ctx.beginPath(); ctx.moveTo(-90, 40); ctx.lineTo(-10, 110); ctx.lineTo(-130, 100); ctx.fill();
  ctx.strokeStyle = 'rgba(40,70,90,.5)'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(-190, 0, 110, -.9, .9); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(-270, -24, 24, 0, TAU); ctx.fill(); ctx.fillStyle = '#0e2436'; ctx.beginPath(); ctx.arc(-270, -24, 12, 0, TAU); ctx.fill();
  // frost creeping over
  const r = rng(77); for (let i = 0; i < 46; i++) { const fx = -340 + r() * 660, fy = (r() - .5) * 190, a = clamp(fr * 46 - i) * .9, s = 12 + r() * 20; if (a <= 0) { r(); continue; } ctx.strokeStyle = `rgba(255,255,255,${a})`; ctx.lineWidth = 3; const ro = r() * 3; for (let k = 0; k < 3; k++) { const an = ro + k * Math.PI / 3; ctx.beginPath(); ctx.moveTo(fx - Math.cos(an) * s, fy - Math.sin(an) * s); ctx.lineTo(fx + Math.cos(an) * s, fy + Math.sin(an) * s); ctx.stroke(); } }
  ctx.fillStyle = `rgba(235,247,252,${.28 * fr})`; ctx.beginPath(); ctx.moveTo(-360, 0); ctx.quadraticCurveTo(-200, -150, 60, -110); ctx.quadraticCurveTo(250, -70, 330, 0); ctx.quadraticCurveTo(250, 70, 60, 110); ctx.quadraticCurveTo(-200, 150, -360, 0); ctx.fill(); ctx.restore();
  for (let i = 0; i < 5; i++) { const ph = (t * .25 + i / 5) % 1; ctx.fillStyle = `rgba(230,245,252,${.1 * Math.sin(ph * Math.PI)})`; ctx.beginPath(); ctx.ellipse(160 + i * 200 + 40 * Math.sin(t + i), 1020 - ph * 260, 150, 50, 0, 0, TAU); ctx.fill(); }
  quiet('AFTER THE 1923 EARTHQUAKE', 540, 596, 34, K.paper, K.ink, fadeIn(t, T.fish + .4) * (1 - P(t, LS(11) - .3, LS(11))));
  const f0 = wt(10, 'fresh') - .3, c0 = wt(10, 'cheap') - .3, a0 = wt(11, 'astonished') - .6, off = 1 - P(t, a0 - .1, a0 + .2); if (t > f0) plate('FRESH', 250, 760, 60, K.paper, K.ink, off, -.05, pop(t, f0)); if (t > c0) plate('CHEAP', 830, 780, 60, K.must, K.ink, off, .05, pop(t, c0));
  if (t > a0) { const k = E.o3(P(t, a0, a0 + .5)); ctx.save(); ctx.translate(540, lerp(1700, 1230, k)); ctx.rotate(-.03); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(-392, -112, 800, 250); ctx.fillStyle = '#e4dcc6'; ctx.fillRect(-400, -120, 800, 250); ctx.fillStyle = '#2a2622'; ctx.fillRect(-400, -120, 800, 8); ctx.fillStyle = 'rgba(42,38,34,.75)'; ctx.fillRect(-370, -70, 520, 34); ctx.fillRect(-370, -22, 380, 34); ctx.fillStyle = 'rgba(42,38,34,.35)'; for (let i = 0; i < 4; i++) ctx.fillRect(-370, 36 + i * 20, 560, 8); txt('!', 300, 70, font(900, 200), K.red, 'center'); ctx.restore(); plate('NEWSPAPERS: ASTONISHED', 540, 700, 48, K.red, K.paper, 1, -.02, pop(t, a0 + .2)); }
  const b0 = wt(11, 'beyond') - .5; if (t > b0) plate('FOOD GROWS BEYOND GIFTS', 540, 800, 40, K.paper, K.ink, 1, .015, pop(t, b0));
  topBand(540, 'rgba(8,24,40,.7)');
  popText('FROZEN FISH', 540, 405, 124, t, Math.max(T.fish + .2, wt(9, 'frozen') - 1.6), K.paper, -.015, '#061420'); const m0 = wt(9, 'mitsukoshi') - .3; if (t > m0) plate('MITSUKOSHI · DEC 1923', 540, 494, 44, K.must, K.ink, 1, .012, pop(t, m0));
}

// ------------------------------------------------------------ 05 famous names, 1936
function lightbox(x, y, w, h, s, on, col, size = 40) { ctx.fillStyle = '#16131c'; rrect(x - w / 2 - 8, y - h / 2 - 8, w + 16, h + 16, 10); ctx.fill(); if (on > 0) { const g = ctx.createRadialGradient(x, y, 0, x, y, w); g.addColorStop(0, `rgba(255,226,160,${.3 * on})`); g.addColorStop(1, 'rgba(255,226,160,0)'); ctx.fillStyle = g; ctx.fillRect(x - w, y - w, w * 2, w * 2); }
  ctx.fillStyle = `rgba(${Math.round(lerp(70, 251, on))},${Math.round(lerp(64, 236, on))},${Math.round(lerp(72, 196, on))},1)`; rrect(x - w / 2, y - h / 2, w, h, 6); ctx.fill(); ctx.fillStyle = on > .5 ? col : 'rgba(20,20,28,.6)'; ctx.fillRect(x - w / 2, y - h / 2, w, 10); txt(s, x, y + size * .36, font(900, size), on > .5 ? K.ink : 'rgba(20,20,28,.7)', 'center', 2); }
function sceneNames(t) {
  fillBG('#2a2430', '#141018'); ctx.fillStyle = '#1e1a24'; ctx.fillRect(0, 1300, W, 800); ctx.fillStyle = 'rgba(255,255,255,.03)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 800);
  const c0 = wt(15, 'cut') - .9, tm = [wt(13, 'kyoto') - .3, wt(13, 'osaka') - .3, wt(13, 'tokyo') - .3, wt(14, 'toraya') - .3, wt(14, 'colombin') - .3, wt(14, 'more') - .3], nm = ['KYOTO', 'OSAKA', 'TOKYO', 'TORAYA', 'COLOMBIN', '…AND MORE'], cl = [K.red, '#24407a', '#2f6b45', '#7c2a22', K.must, '#b5a2c8'];
  const dim = i => 1 - .85 * fadeIn(t, c0 + i * .14, .5);
  // the one basement sign
  const s0 = wt(13, 'one') - .5, son = fadeIn(t, s0, .5) * dim(0); ctx.fillStyle = '#16131c'; rrect(90, 606, 900, 130, 12); ctx.fill(); ctx.fillStyle = `rgba(${Math.round(lerp(60, 201, son))},${Math.round(lerp(50, 162, son))},${Math.round(lerp(40, 60, son))},1)`; rrect(104, 620, 872, 102, 8); ctx.fill(); txt('FAMOUS SHOPS · ONE SIGN', 540, 690, font(900, 52), son > .5 ? K.ink : 'rgba(20,20,28,.7)', 'center', 3);
  ctx.strokeStyle = '#16131c'; ctx.lineWidth = 6; for (const x of [200, 880]) { ctx.beginPath(); ctx.moveTo(x, 540); ctx.lineTo(x, 606); ctx.stroke(); }
  for (let i = 0; i < 6; i++) { const x = 200 + (i % 3) * 340, y = i < 3 ? 880 : 1090, on = fadeIn(t, tm[i], .3) * dim(i + 1), fl = on > 0 && t < tm[i] + .5 ? .6 + .4 * noise(t * 24 + i * 9) : 1; lightbox(x, y, 290, 130, nm[i], on * fl, cl[i], i === 5 ? 34 : i === 4 ? 40 : 46); if (i < 3) txt('SHOPS FROM', x, y - 86, font(700, 17, F.m), `rgba(243,232,207,${.7 * on})`, 'center', 3); }
  if (t > c0 + .2) quiet('PRICE CONTROLS, THEN WAR: CUT SHORT', 540, 1340, 36, K.paper, K.ink, fadeIn(t, c0 + .2));
  topBand(540, 'rgba(14,10,20,.7)');
  digits('1936', t, T.names + .25, 400, 190, K.must, '#0a0810'); const m0 = wt(12, 'matsuzakaya') - .2; if (t > m0) plate('MATSUZAKAYA NAGOYA · THE BASEMENT', 540, 492, 38, K.paper, K.ink, 1, .012, pop(t, m0));
}

// ------------------------------------------------------------ 06 Noren-gai, 1951: fifteen stalls
const NCOL = ['#24407a', '#7c2a22', '#274a48', '#5b3a20', '#3a2140', '#b02c22', '#1f5a57', '#6b4a2c'];
function parcel(x, y, i, k) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(-36, -24, 80, 56, 5); ctx.fill(); const a = ['#f3ecd8', '#f6d9d0', '#dfe9d8', '#e6def2', '#f6ecc0'][i % 5], b = NCOL[(i * 3 + 1) % 8]; ctx.fillStyle = a; rrect(-40, -28, 80, 56, 5); ctx.fill(); ctx.save(); rrect(-40, -28, 80, 56, 5); ctx.clip(); ctx.fillStyle = b; ctx.strokeStyle = b; ctx.lineWidth = 4; const m = i % 4; if (m === 0) for (let q = -40; q < 40; q += 14) ctx.fillRect(q, -28, 6, 56); else if (m === 1) for (let q = 0; q < 12; q++) { ctx.beginPath(); ctx.arc(-32 + (q % 4) * 22, -18 + Math.floor(q / 4) * 18, 5, 0, TAU); ctx.fill(); } else if (m === 2) for (let q = -80; q < 80; q += 16) { ctx.beginPath(); ctx.moveTo(q, -28); ctx.lineTo(q + 56, 28); ctx.stroke(); } else for (let q = 0; q < 12; q++) if ((q + Math.floor(q / 4)) % 2) ctx.fillRect(-40 + (q % 4) * 20, -28 + Math.floor(q / 4) * 19, 20, 19); ctx.restore(); ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0, -28); ctx.lineTo(0, 28); ctx.stroke(); ctx.restore(); }
function sceneNoren(t) {
  fillBG('#e9dcbb', '#cdb98f'); ctx.fillStyle = '#b9a07a'; ctx.fillRect(0, 1280, W, 400);
  const n0 = wt(17, '15') - 1.0, w0 = wt(18, 'wrapping') - .8;
  for (let i = 0; i < 15; i++) { const c = i % 5, r = Math.floor(i / 5), x = 124 + c * 208, y = 690 + r * 205, k = E.oBack(P(t, n0 + i * .09, n0 + i * .09 + .35)); if (k <= 0) continue;
    ctx.fillStyle = 'rgba(90,60,30,.18)'; rrect(x - 92, y - 16, 184, 184, 8); ctx.fill(); ctx.save(); ctx.translate(x, y); ctx.scale(1, k); ctx.fillStyle = '#5b3a20'; rrect(-88, -10, 176, 14, 6); ctx.fill(); for (let p = 0; p < 3; p++) { const px = -80 + p * 54, sw = 4 * Math.sin(t * 1.6 + i + p); ctx.fillStyle = NCOL[i % 8]; ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px + 52, 0); ctx.lineTo(px + 52 + sw, 96); ctx.lineTo(px + sw, 96); ctx.closePath(); ctx.fill(); } ctx.fillStyle = 'rgba(243,236,216,.85)'; ctx.fillRect(-52, 30, 104, 8); ctx.restore(); parcel(x, y + 136, i, pop(t, w0 + i * .06)); }
  if (t > n0 + .3) plate('15 SHOPS', 890, 610, 44, K.red, K.paper, 1, .03, pop(t, n0 + .3)); const g0 = wt(17, 'norengai') - .4; if (t > g0) { plate('NOREN-GAI', 250, 610, 46, K.ink, K.paper, 1, -.02, pop(t, g0)); ctx.save(); ctx.globalAlpha = P(t, g0 + .2, g0 + .45); jp('のれん街', 560, 628, 54, '#7c2a22', 'center', .05); ctx.restore(); }
  const p0 = wt(18, 'wrapping') - .3, o0 = wt(19, 'beat') - .7; if (t > p0) plate('EACH WITH ITS OWN WRAPPING PAPER', 540, 1330, 36, K.paper, K.ink, 1 - P(t, o0 - .2, o0), -.01, pop(t, p0)); if (t > o0) plate('OPENING DAY: FAR ABOVE TARGET', 540, 1330, 42, K.must, K.ink, 1, .012, pop(t, o0));
  topBand(540, 'rgba(30,24,40,.76)');
  digits('1951', t, T.noren + .25, 400, 190, K.must, '#14101e'); const s0 = wt(16, 'tyoko') - .3; if (t > s0) plate('TŌYOKO, SHIBUYA · EP 3’S STATION STORE', 540, 492, 36, K.paper, K.ink, 1, .012, pop(t, s0));
}

// ------------------------------------------------------------ 07 the word, 2000
function deliHall(t, speed) {
  fillBG('#f3e3bf', '#e2c98f'); ctx.fillStyle = 'rgba(120,80,40,.1)'; for (let i = 0; i < 6; i++) ctx.fillRect(90 + i * 190, 540, 70, 520);
  for (let i = 0; i < 3; i++) { ctx.fillStyle = [K.red, '#2f6b45', '#24407a'][i]; ctx.fillRect(40 + i * 345, 640, 310, 60); ctx.fillStyle = '#f3ecd8'; for (let q = 0; q < 4; q++) ctx.fillRect(40 + i * 345 + q * 80, 640, 40, 60); }
  for (let i = 0; i < 3; i++) { const x = 190 + i * 345, b = 5 * Math.sin(t * 6 + i * 2); mini(x, 980 + b, 2.0, '#f3ecd8'); ctx.fillStyle = '#f3ecd8'; rrect(x - 30, 980 + b - 262, 60, 40, 10); ctx.fill(); }
  for (let i = 0; i < 3; i++) foodCase(40 + i * 345, 920, 310, 170, 40 + i);
  ctx.fillStyle = '#8b5a33'; ctx.fillRect(0, 1106, W, 110); ctx.fillStyle = '#c9a66b'; ctx.fillRect(0, 1216, W, 400); ctx.fillStyle = 'rgba(0,0,0,.06)'; for (let j = 0; j < 3; j++) for (let i = 0; i < 9; i++) if ((i + j) % 2) ctx.fillRect(i * 130 - 20, 1216 + j * 60, 130, 60);
  for (let i = 0; i < 12; i++) { const dir = i % 2 ? 1 : -1, sp = dir * (150 + i * 37) * speed, x = ((i * 113 + t * sp) % 1400 + 1400) % 1400 - 150, y = 1330 + (i % 4) * 22, c = ['#2c3040', '#7c2a22', '#274a48', '#5b3a20', '#3a3f52', '#24407a'][i % 6]; ctx.fillStyle = c; ctx.globalAlpha = .25; ctx.fillRect(x - dir * 90, y - 150, 90 * dir, 110); ctx.globalAlpha = 1; (i % 3 === 0 ? hatMan : mini)(x, y, 1.9, c); }
}
function sceneWord(t) {
  deliHall(t, 1);
  const b0 = wt(21, 'buzzword') - .4; if (t > b0) plate('A BUZZWORD', 800, 610, 50, K.red, K.paper, 1, .04, pop(t, b0)); const r0 = wt(20, 'relaunched') - .3; if (t > r0) plate('THAT STORE’S FOOD FLOOR, RELAUNCHED', 480, 600, 30, K.ink, K.paper, 1 - P(t, b0 - .2, b0), -.01, pop(t, r0));
  topBand(540, 'rgba(50,24,10,.74)');
  const w0 = wt(21, 'depachika') - .5; ctx.save(); ctx.globalAlpha = 1 - P(t, w0 - .2, w0); digits('2000', t, T.word + .25, 400, 190, K.must, '#2a1206'); const f0 = wt(20, 'tokyu') - .2; if (t > f0) plate('THE TOKYU FOOD SHOW', 540, 492, 42, K.paper, K.ink, 1, .012, pop(t, f0)); ctx.restore();
  if (t > w0) { const k = pop(t, w0); ctx.save(); ctx.globalAlpha = P(t, w0, w0 + .12); ctx.translate(540, 420); ctx.scale(k, k); jp('デパ地下', 0, 0, 150, K.paper, 'center', .05); ctx.restore(); plate('“DEPACHIKA”', 540, 498, 50, K.must, K.ink, 1, .012, pop(t, w0 + .2)); }
}
function sceneQuarter(t) {
  deliHall(t, .5); ctx.fillStyle = 'rgba(30,16,8,.62)'; ctx.fillRect(0, 540, W, 1400);
  const u = E.io2(P(t, T.quarter + .3, wt(22, 'quarter') + .3)), cx = 540, cy = 960, R = 290;
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.arc(cx + 10, cy + 12, R, 0, TAU); ctx.fill(); ctx.fillStyle = '#e9dcbb'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();
  ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + TAU * .25 * u); ctx.fill();
  if (u >= 1) { ctx.fillStyle = 'rgba(220,74,51,.5)'; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, 0, TAU * .035); ctx.fill(); ctx.setLineDash([10, 8]); ctx.strokeStyle = K.red; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(TAU * .035) * R, cy + Math.sin(TAU * .035) * R); ctx.stroke(); ctx.setLineDash([]); }
  const q0 = wt(22, 'quarter') - .3; if (t > q0) { plate('FOOD FLOORS', 760, 760, 40, K.red, K.paper, 1, .03, pop(t, q0)); popText('OVER ¼', 380, 1080, 110, t, q0 + .1, K.ink, -.03, 'rgba(0,0,0,.15)'); }
  quiet('SCHEMATIC · “OVER A QUARTER”', 540, 1300, 22, K.paper, K.ink, .9);
  topBand(540, 'rgba(50,24,10,.6)');
  digits('2013', t, T.quarter + .2, 400, 190, K.must, '#2a1206'); const s0 = wt(22, 'food') - .2; if (t > s0) plate('SHARE OF DEPARTMENT-STORE SALES', 540, 492, 38, K.paper, K.ink, 1, .012, pop(t, s0));
}

// ------------------------------------------------------------ 08 tease: bento boxes with train-shaped lids
function trainBento(x, y, s, k, col) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(-232, -86, 480, 110, 16); ctx.fill(); ctx.fillStyle = '#1b1a22'; rrect(-240, -40, 480, 60, 10); ctx.fill();
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-240, -40); ctx.lineTo(-240, -120); ctx.quadraticCurveTo(-240, -140, -220, -140); ctx.lineTo(120, -140); ctx.quadraticCurveTo(230, -130, 250, -40); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#f3ecd8'; ctx.fillRect(-240, -70, 486, 12);
  ctx.fillStyle = '#cfe6ee'; for (let i = 0; i < 4; i++) rrect(-216 + i * 76, -122, 58, 40, 6), ctx.fill(); ctx.beginPath(); ctx.moveTo(110, -122); ctx.lineTo(150, -122); ctx.quadraticCurveTo(200, -112, 216, -82); ctx.lineTo(110, -82); ctx.fill(); ctx.fillStyle = '#16171c'; for (const wx of [-170, -90, 90, 170]) { ctx.beginPath(); ctx.arc(wx, 18, 16, 0, TAU); ctx.fill(); } ctx.restore(); }
function sceneTease(t) {
  fillBG('#1f5a57', '#123c3e'); rays(540, 1000, t, .04, .08); ctx.fillStyle = '#8b5a33'; ctx.fillRect(0, 1260, W, 140); ctx.fillStyle = '#5b3a20'; ctx.fillRect(0, 1246, W, 24); ctx.fillStyle = '#0e2c2e'; ctx.fillRect(0, 1400, W, 800);
  const b0 = wt(23, 'january') - .4, cols = [K.red, '#24407a', K.must]; for (let i = 0; i < 3; i++) { const k = E.o3(P(t, b0 + i * .45, b0 + i * .45 + .45)); if (k > 0) trainBento(540 + (i % 2 ? 14 : -14), lerp(400, 1226 - i * 150, k), 1.25, 1, cols[i]); }
  const j0 = wt(23, 'shinjuku') - .5; if (t > j0) plate('EVERY JANUARY · A SHINJUKU DEPARTMENT STORE', 540, 596, 30, K.paper, K.ink, 1, -.008, pop(t, j0));
  const e0 = wt(24, 'railway') - .4; if (t > e0) { ctx.save(); ctx.globalAlpha = P(t, e0 + .2, e0 + .45); jp('駅弁', 880, 720, 100, K.must, 'center', .05); ctx.restore(); }
  topBand(540, 'rgba(8,36,40,.68)');
  popText('RAILWAY BENTO', 540, 405, 108, t, Math.max(T.tease + .25, e0 - 2.4), K.paper, -.015, '#062020'); const a0 = wt(24, 'from') - .3, y0 = wt(25, 'every') - .2; if (t > a0) plate('FROM ALL OVER JAPAN', 540, 494, 42, K.paper, K.ink, 1 - P(t, y0 - .2, y0), .012, pop(t, a0)); if (t > y0) plate('EVERY YEAR SINCE 1966', 540, 494, 46, K.must, K.ink, 1, .012, pop(t, y0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n, .25)); plate('EPISODE 14', 870, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 820 + i * 130 + 30 * (1 - a), 124, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 1030); ctx.lineTo(80 + 600 * u, 1030); ctx.stroke();
}

window.FILM = {
  title: 'DOWN TO THE BASEMENT', tag: 'EP 13 · JAPAN’S DEPARTMENT STORES',
  hotLines: [],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.up, draw: sceneUp }, { start: T.under, draw: sceneUnder }, { start: T.fish, draw: sceneFish }, { start: T.names, draw: sceneNames }, { start: T.noren, draw: sceneNoren }, { start: T.word, draw: sceneWord }, { start: T.quarter, draw: sceneQuarter }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.up, .5], [T.under, .5], [T.fish, .5], [T.names, .5], [T.noren, .5], [T.word, .4], [T.quarter, .5], [T.tease, .5], [T.end, .3]],
  chapters: [[0, '01', 'GOING DOWN'], [T.up, '02', 'UPSTAIRS, 1911'], [T.under, '03', 'UNDERGROUND, 1922'], [T.fish, '04', 'FROZEN FISH, 1923'], [T.names, '05', 'FAMOUS NAMES, 1936'], [T.noren, '06', 'NOREN-GAI, 1951'], [T.word, '07', 'THE WORD, 2000'], [T.tease, '08', 'NEXT']],
  hits: [[.8, 8, .3], [wt(2, 'upstairs') - .6, 8, .3], [wt(21, 'depachika') - .5, 10, .35]],
  flashes: [[T.noren, .3], [T.word, .3], [T.end, .25]],
  events: {
    scene: [T.up, T.under, T.fish, T.names, T.noren, T.word, T.quarter, T.tease, T.end],
    pop: [.3, wt(0, 'down') - .3, wt(1, 'depachika') - .2, wt(1, 'bento') - .3, wt(2, 'upstairs') - .6, wt(3, 'shirokiya') - .3, wt(3, 'what') - .3, wt(4, 'ground') - .3, wt(5, 'liquor') - .4, wt(5, 'coffee') - .3, wt(5, 'spices') - .3, wt(5, 'tins') - .3, wt(5, 'biscuits') - .3, wt(5, 'gifts') - .5, wt(6, 'underground') - .3, wt(8, 'basement') - .4, wt(9, 'mitsukoshi') - .3, wt(10, 'fresh') - .3, wt(10, 'cheap') - .3, wt(11, 'astonished') - .4, wt(11, 'beyond') - .5, wt(12, 'matsuzakaya') - .2, wt(16, 'tyoko') - .3, wt(17, 'norengai') - .4, wt(17, '15') - .7, wt(18, 'wrapping') - .3, wt(19, 'beat') - .7, wt(20, 'tokyu') - .2, wt(20, 'relaunched') - .3, wt(21, 'buzzword') - .4, wt(22, 'food') - .2, wt(22, 'quarter') - .3, wt(23, 'shinjuku') - .5, wt(24, 'from') - .3, wt(25, 'every') - .2, T.end + .1],
    stamp: [.55, T.up + .25, wt(7, '1922') - .9, wt(9, 'frozen') - 1.6, T.names + .25, T.noren + .25, T.word + .25, wt(21, 'depachika') - .5, T.quarter + .2, wt(24, 'railway') - 2.4],
    escalator: [0, T.up], lightsOn: [wt(8, 'basement') - 1.0], frost: [wt(9, 'frozen') - .6, wt(10, 'cheap') + .6], signs: [wt(13, 'one') - .5, wt(13, 'kyoto') - .3, wt(13, 'osaka') - .3, wt(13, 'tokyo') - .3, wt(14, 'toraya') - .3, wt(14, 'colombin') - .3, wt(14, 'more') - .3], dim: [wt(15, 'cut') - .9],
    stalls: Array.from({ length: 15 }, (_, i) => wt(17, '15') - 1.0 + i * .09), bustle: [T.word, T.tease], boxes: [0, 1, 2].map(i => wt(23, 'january') - .4 + i * .45 + .4), end: [T.end],
  },
};
