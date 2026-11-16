// CHRISTMAS COMES TO JAPAN — episode 9. Portrait-first (9:16). Helpers in lib.js.
// Tone: lighter than episode 8, but the 25 December 1926 beat is plain and still (a day of imperial mourning): no bounce, no decoration.
const EP = { n: 9, next: ['The lucky bag'] };
const L = TL.length - 1;
const T = { hook: 0, mass: LB(3), play: LB(4), ban: LB(5), ginza: LB(6), papers: LB(10), cal: LB(12), eve: LB(16), cafe: LB(17), dance: LB(18), vanish: LS(19) + .5, postwar: LB(20), tease: LB(23), end: TL[L].e + .15 };
const SERIF = '"DejaVu Serif","Liberation Serif",Georgia,serif';
const fadeIn = (t, t0, d = .5) => E.o3(P(t, t0, t0 + d));
function quiet(s, x, y, size, bgc, fg, a) { plate(s, x, y, size, bgc, fg, a, 0, 1); }
function hatMan(x, y, s, col) { mini(x, y, s, col); ctx.fillStyle = col; rrect(x - 13 * s, y - 126 * s, 26 * s, 18 * s, 4 * s); ctx.fill(); rrect(x - 22 * s, y - 111 * s, 44 * s, 6 * s, 3 * s); ctx.fill(); }

// ------------------------------------------------------------ the store from episode 8 (generic eight-storey block)
const FH = 82, SW = 520, SX = 540 - SW / 2, G = 1340, FLOORS = 8, STOP = G - 70 - FLOORS * FH;
function store(c, win) {
  ctx.fillStyle = c.body; ctx.fillRect(SX, STOP, SW, G - STOP + 4); ctx.fillStyle = c.trim; ctx.fillRect(SX - 14, STOP - 18, SW + 28, 24); ctx.fillRect(SX + SW * .36, STOP - 70, SW * .28, 56); ctx.fillRect(SX - 6, G - 76, SW + 12, 10);
  for (let f = 0; f < FLOORS; f++) for (let k = 0; k < 7; k++) { const x = SX + 28 + k * 68, y = G - 70 - (f + 1) * FH + 16; ctx.fillStyle = win(f, k); rrect(x, y, 44, 54, [20, 20, 2, 2]); ctx.fill(); }
  ctx.fillStyle = c.door; for (let k = 0; k < 3; k++) rrect(SX + 60 + k * 150, G - 62, 100, 62, [8, 8, 0, 0]), ctx.fill();
}
function nightStore(t, up) {
  store({ body: '#1a1f3a', trim: '#141830', door: '#0c0f20' }, (f, k) => { const on = P(up * 9 - f - (k % 3) * .3, 0, 1), fl = on < 1 && on > 0 ? .6 + .4 * noise(t * 18 + k * 5 + f) : 1; return `rgba(255,${Math.round(205 + 20 * Math.sin(k))},130,${.12 + .8 * on * fl})`; });
  for (let k = 0; k < 3; k++) { const x = SX + 60 + k * 150; const g = ctx.createRadialGradient(x + 50, G - 30, 0, x + 50, G - 30, 150); g.addColorStop(0, `rgba(255,214,140,${.55 * up})`); g.addColorStop(1, 'rgba(255,214,140,0)'); ctx.fillStyle = g; ctx.fillRect(x - 100, G - 180, 300, 260); ctx.fillStyle = `rgba(255,226,160,${.2 + .8 * up})`; rrect(x, G - 62, 100, 62, [8, 8, 0, 0]); ctx.fill(); }
  for (const sd of [-1, 1]) for (let i = 1; i < 16; i++) { const u = i / 16, x = lerp(540 + sd * (SW / 2 - 10), 540 + sd * 520, u), y = lerp(STOP - 10, G - 330, u) + 70 * Math.sin(u * Math.PI), on = P(up * 20 - i, 0, 1) * (.7 + .3 * Math.sin(t * 3 + i * 1.7)); ctx.fillStyle = `rgba(${i % 2 ? '255,214,140' : '240,120,100'},${on})`; ctx.beginPath(); ctx.arc(x, y, 9, 0, TAU); ctx.fill(); }
}
function lowTown(c1, c2, seed = 5) { const r = rng(seed); let x = -40; while (x < W + 40) { const w = 80 + r() * 110, h = 70 + r() * 150; if (x + w < SX - 10 || x > SX + SW + 10) { ctx.fillStyle = r() > .5 ? c1 : c2; ctx.fillRect(x, G - h, w, h + 6); } x += w + 5; } }
function garland(x0, y0, x1, y1, sag, t, a = 1, n = 9) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha *= clamp(a); ctx.strokeStyle = '#2f6b45'; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo((x0 + x1) / 2, (y0 + y1) / 2 + sag * 2, x1, y1); ctx.stroke(); ctx.strokeStyle = '#3f8a58'; ctx.lineWidth = 6; ctx.setLineDash([10, 12]); ctx.stroke(); ctx.setLineDash([]);
  for (let i = 1; i < n; i++) { const u = i / n, v = 1 - u, x = v * v * x0 + 2 * v * u * (x0 + x1) / 2 + u * u * x1, y = v * v * y0 + 2 * v * u * ((y0 + y1) / 2 + sag * 2) + u * u * y1; ctx.fillStyle = i % 2 ? K.red : `rgba(255,220,130,${.7 + .3 * Math.sin(t * 4 + i * 2)})`; ctx.beginPath(); ctx.arc(x, y + 4, i % 2 ? 9 : 8, 0, TAU); ctx.fill(); } ctx.restore();
}

// ------------------------------------------------------------ 01 the question
function sceneHook(t) {
  fillBG('#141a34', '#0a0c1a'); const up = E.io2(P(t, .3, 4.2)); lowTown('#0e1226', '#121732', 9); nightStore(t, up);
  ctx.fillStyle = '#0a0c1a'; ctx.fillRect(-60, G, W + 120, 800); ctx.fillStyle = `rgba(255,214,140,${.1 * up})`; ctx.fillRect(SX - 80, G, SW + 160, 60);
  const l0 = wt(0, 'shirokiya') - .3; if (t > l0) quiet('LAST TIME: SHIROKIYA’S CHRISTMAS SALE, 1932', 540, 590, 32, K.paper, K.ink, fadeIn(t, l0) * (1 - P(t, LS(1) - .2, LS(1) + .1)));
  const q0 = wt(1, 'question') - .3; popText('?', 890, 800, 260, t, q0, K.must, .12, '#05060e');
  const w0 = wt(2, 'selling') - .4; if (t > w0) plate('WHY SELL CHRISTMAS AT ALL?', 540, 1338, 46, K.must, K.ink, 1, -.015, pop(t, w0));
  topBand(540, 'rgba(8,10,24,.66)');
  plate('EP 9', 150, 268, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('CHRISTMAS COMES', 540, 400, 92, t, .55, K.paper, -.015, '#05060e'); popText('TO JAPAN', 540, 512, 128, t, .8, K.must, -.015, '#05060e');
}

// ------------------------------------------------------------ 02 long before the shops
function candle(x, y, h, lit, t, i = 0) {
  ctx.fillStyle = '#e9e2cd'; rrect(x - 13, y - h, 26, h, 5); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.fillRect(x + 3, y - h, 10, h); ctx.strokeStyle = '#2a2420'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y - h); ctx.lineTo(x, y - h - 12); ctx.stroke();
  if (lit > 0) { const fl = .85 + .15 * noise(t * 9 + i * 13), fy = y - h - 14; const g = ctx.createRadialGradient(x, fy - 14, 0, x, fy - 14, 170); g.addColorStop(0, `rgba(255,200,110,${.45 * lit * fl})`); g.addColorStop(1, 'rgba(255,200,110,0)'); ctx.fillStyle = g; ctx.fillRect(x - 170, fy - 184, 340, 340);
    ctx.save(); ctx.globalAlpha = lit; ctx.translate(x, fy); ctx.scale(1 + .08 * noise(t * 11 + i), fl); ctx.fillStyle = '#ffb347'; ctx.beginPath(); ctx.moveTo(0, -46); ctx.quadraticCurveTo(16, -14, 0, 0); ctx.quadraticCurveTo(-16, -14, 0, -46); ctx.fill(); ctx.fillStyle = '#fff3c4'; ctx.beginPath(); ctx.moveTo(0, -28); ctx.quadraticCurveTo(7, -9, 0, -2); ctx.quadraticCurveTo(-7, -9, 0, -28); ctx.fill(); ctx.restore(); }
  else { ctx.strokeStyle = 'rgba(200,200,210,.25)'; ctx.lineWidth = 4; ctx.beginPath(); for (let k = 0; k <= 8; k++) { const yy = y - h - 16 - k * 16, xx = x + Math.sin(k * .9 + t * 2 + i) * 9; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); }
}
const CANDLES = [[160, 250], [290, 330], [420, 280], [540, 380], [660, 290], [790, 340], [920, 240]];
function candleRoom(t, litFn) {
  fillBG('#1b1730', '#0a0814'); ctx.fillStyle = '#2a1c14'; ctx.fillRect(-60, 1240, W + 120, 900); ctx.fillStyle = '#3a2616'; ctx.fillRect(-60, 1226, W + 120, 22);
  CANDLES.forEach(([x, h], i) => candle(x, 1226, h, litFn(i), t, i));
}
function sceneMass(t) {
  candleRoom(t, i => fadeIn(t, T.mass + .1 + Math.abs(i - 3) * .28, .6));
  topBand(540, 'rgba(10,8,22,.6)');
  digits('1552', t, Math.max(T.mass + .25, wt(3, '1552') - 1.6), 400, 190, K.must, '#07050f'); const m0 = wt(3, 'first') - .2; if (t > m0) plate('JAPAN’S FIRST CHRISTMAS MASS', 540, 492, 40, K.paper, K.ink, 1, .012, pop(t, m0));
}
function scenePlay(t) {
  // woodblock style: flat colours, dark outlines, a graded band of sky
  fillBG('#e9dcbb', '#e2d2aa'); const sg = ctx.createLinearGradient(0, 540, 0, 820); sg.addColorStop(0, '#24407a'); sg.addColorStop(1, 'rgba(36,64,122,0)'); ctx.fillStyle = sg; ctx.fillRect(0, 540, W, 290);
  ctx.lineJoin = 'round'; ctx.strokeStyle = '#2a2420'; ctx.lineWidth = 5;
  ctx.fillStyle = '#5f8a7a'; ctx.beginPath(); ctx.moveTo(-20, 900); ctx.quadraticCurveTo(200, 700, 420, 880); ctx.quadraticCurveTo(620, 760, 820, 870); ctx.quadraticCurveTo(960, 800, 1100, 900); ctx.lineTo(1100, 960); ctx.lineTo(-20, 960); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#33599a'; ctx.fillRect(-20, 940, 1120, 60); ctx.strokeStyle = '#e9dcbb'; ctx.lineWidth = 3; for (let j = 0; j < 3; j++) { ctx.beginPath(); for (let x = -20; x <= W + 20; x += 24) { const y = 954 + j * 16 + Math.sin(x * .05 + t * 1.2 + j) * 4; x < 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
  ctx.fillStyle = '#c9b071'; ctx.fillRect(-20, 996, 1120, 460);
  // stage
  ctx.strokeStyle = '#2a2420'; ctx.lineWidth = 5; ctx.fillStyle = '#8b5a33'; ctx.fillRect(270, 1010, 540, 70); ctx.strokeRect(270, 1010, 540, 70); ctx.fillStyle = '#5b3a20'; for (const x of [290, 770]) { ctx.fillRect(x, 760, 20, 250); ctx.strokeRect(x, 760, 20, 250); }
  ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(270, 760); ctx.lineTo(810, 760); ctx.lineTo(810, 810); for (let i = 5; i >= 0; i--) ctx.quadraticCurveTo(270 + i * 90 + 45, 850, 270 + i * 90, 810); ctx.closePath(); ctx.fill(); ctx.stroke();
  for (let i = 0; i < 3; i++) { const x = 420 + i * 120, b = 4 * Math.sin(t * 2 + i * 2); mini(x, 1010 + b, 1.5, ['#24407a', '#7c2a22', '#2a7a74'][i]); }
  for (const x of [240, 840]) { ctx.fillStyle = '#5b3a20'; ctx.fillRect(x - 5, 880, 10, 130); ctx.fillStyle = '#ffd98a'; rrect(x - 22, 830, 44, 60, 10); ctx.fill(); ctx.stroke(); }
  // crowd: rows of heads (decoration, not a count)
  const r = rng(15), c0 = wt(4, 'reportedly') - .9; for (let j = 0; j < 6; j++) for (let i = 0; i < 15 + j; i++) { const k = pop(t, c0 + j * .12 + (i % 5) * .03); if (k <= 0) { r(); continue; } const x = 20 + i * (1040 / (14 + j)) + r() * 14, y = 1140 + j * 46; ctx.fillStyle = ['#2c3040', '#5b3a20', '#274a48', '#3a3f52'][(i + j) % 4]; ctx.beginPath(); ctx.arc(x, y, 24 * k, 0, TAU); ctx.fill(); ctx.fillRect(x - 26 * k, y + 14, 52 * k, 60); }
  quiet('ILLUSTRATION · WOODBLOCK STYLE', 540, 590, 20, K.ink, K.paper, .9);
  const p0 = wt(4, 'reportedly') - .3; if (t > p0) plate('REPORTEDLY: 2,000 PEOPLE', 540, 1284, 46, K.must, K.ink, 1, -.015, pop(t, p0));
  topBand(540, 'rgba(14,20,44,.68)');
  digits('1568', t, T.play + .25, 400, 190, K.must, '#070a18'); const n0 = wt(4, 'christmas') - .2; if (t > n0) plate('A CHRISTMAS PLAY NEAR NAGASAKI', 540, 492, 38, K.paper, K.ink, 1, .012, pop(t, n0));
}
function sceneBan(t) {
  const b0 = wt(5, 'banned') - .3; candleRoom(t, i => 1 - fadeIn(t, b0 + i * .22, .35));
  ctx.fillStyle = `rgba(6,5,12,${.45 * P(t, b0, b0 + 2)})`; ctx.fillRect(0, 540, W, 900);
  topBand(540, 'rgba(10,8,22,.66)');
  popText('BANNED', 540, 410, 160, t, b0, K.paper, 0, '#07050f'); const c0 = wt(5, 'over') - .3; if (t > c0) quiet('FOR OVER TWO CENTURIES', 540, 496, 44, K.red, K.paper, fadeIn(t, c0));
}

// ------------------------------------------------------------ 03 Ginza lights up
function shopfront(x, w, top, col, lit, awn) {
  ctx.fillStyle = col; ctx.fillRect(x, top, w, G - top); ctx.fillStyle = 'rgba(0,0,0,.12)'; for (let y = top + 16; y < G - 250; y += 22) ctx.fillRect(x, y, w, 3);
  ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(x - 6, top - 14, w + 12, 18);
  const n = Math.max(2, Math.round(w / 130)); for (let i = 0; i < n; i++) { const wx = x + 24 + i * ((w - 48) / n) + 8, ww = (w - 48) / n - 16; ctx.fillStyle = `rgba(255,${200 + 20 * (i % 2)},130,${.15 + .75 * lit})`; rrect(wx, top + 44, ww, 120, [ww / 2, ww / 2, 4, 4]); ctx.fill(); }
  ctx.fillStyle = '#2a1c14'; ctx.fillRect(x + 18, G - 250, w - 36, 250); ctx.fillStyle = `rgba(255,214,140,${.12 + .8 * lit})`; ctx.fillRect(x + 30, G - 238, w - 60, 200);
  ctx.fillStyle = awn; ctx.beginPath(); ctx.moveTo(x + 6, G - 262); ctx.lineTo(x + w - 6, G - 262); ctx.lineTo(x + w + 16, G - 214); ctx.lineTo(x - 16, G - 214); ctx.fill();
}
function gasLamp(x, t) { ctx.fillStyle = '#1b1a22'; ctx.fillRect(x - 5, G - 330, 10, 330); rrect(x - 20, G - 340, 40, 14, 4); ctx.fill(); const g = ctx.createRadialGradient(x, G - 370, 0, x, G - 370, 130); g.addColorStop(0, `rgba(255,226,160,${.5 + .08 * noise(t * 6 + x)})`); g.addColorStop(1, 'rgba(255,226,160,0)'); ctx.fillStyle = g; ctx.fillRect(x - 130, G - 500, 260, 260); ctx.fillStyle = '#fff3c4'; rrect(x - 16, G - 396, 32, 54, 8); ctx.fill(); }
function sceneGinza(t) {
  skyDusk('#141a34', '#3a2f5a', '#b06a5a'); const y0 = wt(7, '1900') - .5, d0 = wt(8, 'dressed') - .4, dr = P(t, d0, d0 + 1.4), c0 = wt(9, 'crowds') - .3, k0 = wt(9, 'copied') - .5, cp = fadeIn(t, k0, .8), lit = fadeIn(t, y0 + .3, 1.2);
  shopfront(-40, 300, 820, '#6b4a3a', .25 + .6 * cp, '#33483f'); shopfront(820, 300, 780, '#5a4a52', .25 + .6 * cp, '#24407a'); shopfront(270, 540, 680, '#8a4a3a', lit, K.red);
  ctx.fillStyle = '#1b1a22'; rrect(390, 716, 300, 76, 8); ctx.fill(); ctx.strokeStyle = BRASS; ctx.lineWidth = 4; rrect(398, 724, 284, 60, 5); ctx.stroke(); { ctx.save(); ctx.globalAlpha = .35 + .65 * lit; jp('明治屋', 540, 774, 50, '#f3d67a', 'center', .05); ctx.restore(); }
  // Christmas dress: evergreen swags, lights, a wreath, a banner in period-style serif lettering
  for (let i = 0; i < 3; i++) garland(280 + i * 177, 668, 457 + i * 177, 668, 26, t, dr * 3 - i);
  garland(300, G - 214, 780, G - 214, 16, t, dr * 3 - 1.5, 13);
  if (dr > .5) { const k = pop(t, d0 + .7); ctx.save(); ctx.translate(540, 978); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-196, -42, 400, 96, 6); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-204, -50, 408, 96, 6); ctx.fill(); ctx.strokeStyle = '#2f6b45'; ctx.lineWidth = 5; rrect(-194, -40, 388, 76, 3); ctx.stroke(); txt('MERRY XMAS', 0, 18, `700 42px ${SERIF}`, K.red, 'center', 3); ctx.restore(); }
  if (dr > .8) { const k = pop(t, d0 + 1.1); ctx.save(); ctx.translate(540, 852); ctx.scale(k * .8, k * .8); ctx.strokeStyle = '#2f6b45'; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(0, 0, 46, 0, TAU); ctx.stroke(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(0, 40); ctx.lineTo(-26, 76); ctx.lineTo(0, 62); ctx.lineTo(26, 76); ctx.fill(); ctx.restore(); }
  if (cp > 0) { garland(-30, 806, 250, 806, 22, t, cp, 7); garland(830, 766, 1110, 766, 22, t, cp, 7); }
  ctx.fillStyle = '#2a2430'; ctx.fillRect(-60, G, W + 120, 800); gasLamp(230, t); gasLamp(850, t);
  const FOLKC = ['#2c3040', '#7c2a22', '#274a48', '#5b3a20', '#3a3f52', '#6b2a30', '#24407a', '#4a3a2c'];
  for (let i = 0; i < 8; i++) { const sd = i % 2 ? 1 : -1, k = E.o3(P(t, c0 + i * .12, c0 + 1.5 + i * .12)); if (k <= 0) continue; const x = lerp(540 + sd * 700, 540 + sd * (70 + Math.floor(i / 2) * 105), k), y = G + 40 + (i % 3) * 14; (i % 3 ? mini : hatMan)(x, y, 1.9, FOLKC[i]); }
  if (t > c0) plate('CROWDS CAME TO LOOK', 300, 640, 38, K.paper, K.ink, 1 - P(t, k0 - .1, k0 + .2), -.02, pop(t, c0)); if (t > k0) plate('OTHER SHOPS COPIED IT', 540, 620, 44, K.must, K.ink, 1, -.015, pop(t, k0));
  topBand(540, 'rgba(10,12,30,.66)');
  ctx.save(); ctx.globalAlpha = 1 - P(t, y0 - .2, y0); popText('MEIJI ERA', 540, 405, 136, t, T.ginza + .2, K.paper, -.015, '#05060e'); if (t > T.ginza + .5) plate('CHRISTMAS RETURNS', 540, 494, 42, K.must, K.ink, 1, .012, pop(t, T.ginza + .5)); ctx.restore();
  popText('GINZA, 1900', 540, 405, 132, t, y0, K.paper, -.015, '#05060e'); const m0 = wt(7, 'upscale') - .3; if (t > m0) plate('MEIDI-YA · UPSCALE GROCER', 540, 494, 40, K.must, K.ink, 1, .012, pop(t, m0));
}
const BRASS = '#c9a23c';

// ------------------------------------------------------------ 04 every December
const HEADS = [null, null, ['GINZA’S DECORATIONS', 'ARE UP'], ['HERE’S WHAT', 'TO GIVE'], null];
function newsCard(x, y, rot, k, head, seed) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(-372, -112, 760, 240); ctx.fillStyle = '#e4dcc6'; ctx.fillRect(-380, -120, 760, 240); ctx.fillStyle = '#2a2622'; ctx.fillRect(-380, -120, 760, 8);
  txt('DECEMBER', -356, -78, font(700, 20, F.m), 'rgba(42,38,34,.75)', 'left', 4); const r = rng(seed);
  if (head) head.forEach((s, i) => txt(s, -356, -22 + i * 62, `700 ${head.length > 1 ? 48 : 60}px ${SERIF}`, '#1b1814', 'left'));
  else { ctx.fillStyle = 'rgba(42,38,34,.75)'; ctx.fillRect(-356, -54, 420 + r() * 200, 26); ctx.fillRect(-356, -12, 300 + r() * 200, 26); ctx.fillStyle = 'rgba(42,38,34,.35)'; for (let i = 0; i < 4; i++) ctx.fillRect(-356, 36 + i * 17, 600 + r() * 110, 7); }
    ctx.restore();
}
function scenePapers(t) {
  fillBG('#3a3440', '#1e1a24'); const times = [T.papers + .3, T.papers + 1.5, wt(11, 'decorations') - .5, wt(11, 'heres') - .4, T.cal - .6];
  times.forEach((t0, i) => { const k = E.o3(P(t, t0, t0 + .45)); if (k <= 0) return; newsCard(540 + (i % 2 ? 26 : -22), lerp(400, [690, 800, 930, 1130, 1290][i], k), (i % 2 ? .03 : -.035) * (1 + i * .2), .9 + .1 * k, HEADS[i], 60 + i); });
  quiet('PARAPHRASE · ILLUSTRATION', 540, 580, 20, K.paper, K.ink, .9);
  topBand(540, 'rgba(20,16,26,.74)');
  const q0 = wt(11, 'decorations') - .4; plate('TAISHŌ ERA · EVERY DECEMBER', 540, 288, 38, K.paper, K.ink, P(t, T.papers + .3, T.papers + .4), -.012, pop(t, T.papers + .3));
  ctx.save(); ctx.globalAlpha = 1 - P(t, q0 - .2, q0); popText('THE SAME STORIES', 540, 440, 96, t, wt(10, 'same') - .5, K.must, -.015, '#0a080e'); ctx.restore();
  popText('“DECORATIONS', 540, 408, 100, t, q0, K.paper, -.015, '#0a080e'); popText('ARE UP”', 540, 510, 110, t, q0 + .2, K.must, -.015, '#0a080e');
}

// ------------------------------------------------------------ 05 a holiday on the 25th (kept plain: a day of imperial mourning)
function calPage(x, y, num, numCol, sy = 1, head = '#2a2f3a') {
  ctx.save(); ctx.translate(x, y - 300); ctx.scale(1, sy); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-252, 12, 520, 600, 10); ctx.fill(); ctx.fillStyle = '#f3efe4'; rrect(-260, 0, 520, 600, 10); ctx.fill(); ctx.fillStyle = head; rrect(-260, 0, 520, 120, [10, 10, 0, 0]); ctx.fill();
  txt('DECEMBER', 0, 78, font(800, 50), '#f3efe4', 'center', 8); txt(num, 0, 480, font(900, 340), numCol, 'center'); ctx.fillStyle = '#8a8478'; for (const hx of [-150, 150]) { ctx.beginPath(); ctx.arc(hx, 0, 16, 0, TAU); ctx.fill(); } ctx.restore();
}
function sceneCal(t) {
  fillBG('#3a4150', '#1f232c'); const f0 = wt(12, 'calendar') - .2, fl = P(t, f0, f0 + .7), h0 = wt(14, 'national') - .3, hol = fadeIn(t, h0, .8), r0 = wt(15, '1927') - .4, ru = E.io2(P(t, r0, wt(15, '1947') + .4));
  const red = `rgb(${Math.round(lerp(42, 200, hol))},${Math.round(lerp(47, 60, hol))},${Math.round(lerp(58, 50, hol))})`;
  calPage(540, 930, '25', red); if (fl < 1) calPage(540, 930, '24', '#2a2f3a', 1 - E.i2(fl));
  const d0 = wt(13, 'died') - .3; if (t > d0) quiet('EMPEROR TAISHŌ DIES', 540, 1296, 44, '#1b1d24', K.paper, fadeIn(t, d0, .8) * (1 - P(t, h0 - .2, h0 + .2)));
  if (t > h0) quiet('MEMORIAL DAY → NATIONAL HOLIDAY', 540, 1296, 38, K.paper, K.ink, hol * (1 - P(t, r0 - .2, r0 + .2)));
  if (t > r0) { const a = fadeIn(t, r0); ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(243,239,228,.25)'; rrect(250, 1286, 580, 16, 8); ctx.fill(); ctx.fillStyle = K.must; rrect(250, 1286, 580 * ru, 16, 8); ctx.fill(); big('1927', 150, 1316, 60, K.paper, 'center', '#0c0e14'); big('1947', 930, 1316, 60, ru >= 1 ? K.must : K.paper, 'center', '#0c0e14'); ctx.restore(); }
  topBand(540, 'rgba(16,18,26,.7)');
  const x0 = wt(15, 'day') - .3; ctx.save(); ctx.globalAlpha = 1 - P(t, x0 - .3, x0); digits('1926', t, Math.max(T.cal + .25, wt(12, '1926') - .5), 400, 190, K.paper, '#0a0b10'); const p0 = wt(13, '25') - .3; if (t > p0) quiet('25 DECEMBER 1926', 540, 492, 44, K.paper, K.ink, fadeIn(t, p0)); ctx.restore();
  if (t > x0) { ctx.save(); ctx.globalAlpha = fadeIn(t, x0); big('25 DEC', 540, 400, 130, K.paper, 'center', '#0a0b10'); ctx.restore(); quiet('A DAY OFF · 1927–1947', 540, 494, 46, K.must, K.ink, fadeIn(t, x0 + .2)); }
}
function sceneEve(t) {
  fillBG('#141a34', '#0a0c1a'); const r = rng(24); for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(255,255,255,${.3 + .5 * r()})`; ctx.fillRect(r() * W, 550 + r() * 300, 3, 3); }
  ctx.fillStyle = '#fff3c4'; ctx.beginPath(); ctx.arc(860, 680, 54, 0, TAU); ctx.fill(); ctx.fillStyle = '#141a34'; ctx.beginPath(); ctx.arc(836, 668, 50, 0, TAU); ctx.fill();
  for (let i = 0; i < 5; i++) { const x = -30 + i * 228, h = 330 + (i * 97) % 150; ctx.fillStyle = i % 2 ? '#1c2444' : '#232d55'; ctx.fillRect(x, G - h, 216, h); for (let j = 0; j < 3; j++) { ctx.fillStyle = `rgba(255,${205 + 15 * j},130,${.6 + .3 * Math.sin(t * 2 + i + j)})`; rrect(x + 22 + j * 62, G - h + 40, 44, 70, [22, 22, 3, 3]); ctx.fill(); } ctx.fillStyle = 'rgba(255,214,140,.85)'; ctx.fillRect(x + 22, G - 170, 172, 120); garland(x + 6, G - 196, x + 210, G - 196, 14, t, 1, 7); }
  ctx.fillStyle = '#0c0f20'; ctx.fillRect(-60, G, W + 120, 800);
  for (let i = 0; i < 6; i++) { const sp = (i % 2 ? 1 : -1) * (50 + i * 9), x = ((i * 190 + (t - T.eve) * sp) % 1300 + 1300) % 1300 - 110; (i % 2 ? hatMan : mini)(x, G + 46, 1.9, ['#060918', '#0b1026'][i % 2]); mini(x + 44, G + 46, 1.75, '#0b1026'); }
  ctx.save(); ctx.translate(170, 760); ctx.rotate(-.06); ctx.scale(.32, .32); calPage(0, 300, '24', '#2a2f3a'); ctx.restore();
  topBand(540, 'rgba(8,10,24,.66)');
  popText('CHRISTMAS EVE', 540, 400, 104, t, T.eve + .2, K.paper, -.015, '#05060e'); popText('A NIGHT OUT', 540, 512, 124, t, wt(16, 'night') - .3, K.must, -.015, '#05060e');
}

// ------------------------------------------------------------ 06 the boom
function cup(x, y, s, t, i) { ctx.fillStyle = '#f3ece0'; rrect(x - 22 * s, y - 30 * s, 44 * s, 30 * s, [3 * s, 3 * s, 12 * s, 12 * s]); ctx.fill(); ctx.strokeStyle = '#f3ece0'; ctx.lineWidth = 5 * s; ctx.beginPath(); ctx.arc(x + 26 * s, y - 16 * s, 9 * s, -1.2, 1.2); ctx.stroke(); ctx.fillRect(x - 32 * s, y, 64 * s, 5 * s); ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = 3 * s; ctx.beginPath(); for (let k = 0; k <= 5; k++) { const yy = y - 38 * s - k * 9 * s, xx = x + Math.sin(k + t * 3 + i) * 5 * s; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); }
function sceneCafe(t) {
  fillBG('#2a1830', '#150c1a'); ctx.fillStyle = '#3a2140'; ctx.fillRect(0, 620, W, 720); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 620, W, 16);
  for (let i = 0; i < 3; i++) { const x = 50 + i * 340, on = fadeIn(t, T.cafe + .2 + i * .25, .6), fl = on < 1 ? .6 + .4 * noise(t * 20 + i * 7) : 1;
    ctx.fillStyle = '#1b1a22'; rrect(x, 660, 300, 84, 10); ctx.fill(); ctx.strokeStyle = `rgba(255,120,140,${on * fl})`; ctx.lineWidth = 5; rrect(x + 10, 670, 280, 64, 6); ctx.stroke(); ctx.save(); ctx.globalAlpha = on * fl; jp('カフェー', x + 150, 722, 46, '#ffb8c4', 'center', .05); ctx.restore();
    ctx.fillStyle = '#16101c'; ctx.fillRect(x, 780, 300, 520); const g = ctx.createLinearGradient(0, 790, 0, 1290); g.addColorStop(0, `rgba(255,214,140,${.15 + .8 * on * fl})`); g.addColorStop(1, `rgba(201,138,58,${.15 + .8 * on * fl})`); ctx.fillStyle = g; ctx.fillRect(x + 12, 792, 276, 496);
    if (on > .5) { ctx.fillStyle = '#5b3a20'; ctx.fillRect(x + 40, 1180, 220, 12); ctx.fillRect(x + 142, 1192, 16, 96); cup(x + 100, 1178, 1.2, t, i); cup(x + 200, 1178, 1.2, t, i + 3);
      ctx.fillStyle = '#2f6b45'; for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.moveTo(x + 150, 860 + k * 56); ctx.lineTo(x + 150 - 50 - k * 16, 950 + k * 56); ctx.lineTo(x + 150 + 50 + k * 16, 950 + k * 56); ctx.fill(); } for (let k = 0; k < 7; k++) { ctx.fillStyle = k % 2 ? K.red : `rgba(255,230,150,${.7 + .3 * Math.sin(t * 5 + k)})`; ctx.beginPath(); ctx.arc(x + 150 + ((k * 37) % 90 - 45) * (.5 + k * .08), 920 + k * 22, 8, 0, TAU); ctx.fill(); } garland(x + 12, 800, x + 288, 800, 18, t, 1, 7); }
    ctx.strokeStyle = '#16101c'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x + 150, 792); ctx.lineTo(x + 150, 860); ctx.stroke(); }
  ctx.fillStyle = '#150c1a'; ctx.fillRect(-60, G, W + 120, 800);
  topBand(540, 'rgba(18,8,24,.68)');
  const n0 = wt(17, '7400') - .6; plate('A TOKYO PAPER, 1931', 540, 266, 36, K.paper, K.ink, P(t, T.cafe + .3, T.cafe + .4), -.012, pop(t, T.cafe + .3));
  ctx.save(); ctx.globalAlpha = 1 - P(t, n0 - .2, n0); popText('CHRISTMAS IS', 540, 410, 96, t, wt(17, 'christmas') - .4, K.paper, -.015, '#0a0410'); popText('COMING TO…', 540, 510, 96, t, wt(17, 'coming') - .3, K.must, -.015, '#0a0410'); ctx.restore();
  digits('7,400', t, n0, 436, 160, K.must, '#0a0410'); if (t > n0 + .4) plate('MORE THAN 7,400 CAFÉS', 540, 506, 40, K.paper, K.ink, 1, .012, pop(t, n0 + .4));
}
function sceneDance(t) {
  fillBG('#7c2a22', '#3d1410'); const fg = ctx.createLinearGradient(0, 1000, 0, 1400); fg.addColorStop(0, '#c98a3a'); fg.addColorStop(1, '#8b5a33'); ctx.fillStyle = fg; ctx.fillRect(0, 1040, W, 500); ctx.fillStyle = 'rgba(0,0,0,.1)'; for (let i = 0; i < 12; i++) ctx.fillRect(i * 100 - 20, 1040, 6, 500);
  for (let i = 0; i < 4; i++) garland(i * 270, 600, i * 270 + 270, 600, 40, t, 1, 9); for (let i = 0; i < 5; i++) { const x = 110 + i * 215, sw = 6 * Math.sin(t * 1.6 + i); ctx.strokeStyle = '#1b1a22'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, 560); ctx.lineTo(x + sw, 700); ctx.stroke(); const g = ctx.createRadialGradient(x + sw, 730, 0, x + sw, 730, 140); g.addColorStop(0, 'rgba(255,220,150,.4)'); g.addColorStop(1, 'rgba(255,220,150,0)'); ctx.fillStyle = g; ctx.fillRect(x - 150, 590, 300, 300); ctx.fillStyle = i % 2 ? '#ffd98a' : '#f3ece0'; rrect(x + sw - 26, 700, 52, 66, 16); ctx.fill(); }
  for (let j = 0; j < 3; j++) for (let i = 0; i < 6 + j; i++) { const k = pop(t, T.dance + j * .15 + i * .04); if (k <= 0) continue; const s = 1.5 + j * .45, y = 1130 + j * 110, x = 60 + i * (980 / (5 + j)) + (j % 2) * 40 + 12 * Math.sin(t * 2.4 + i * 1.7 + j), c = ['#2a1420', '#1c0e16', '#12080e'][j], b = 6 * Math.sin(t * 4.8 + i + j); hatMan(x - 20 * s, y + b, s * k, c); mini(x + 22 * s, y - b, s * .94 * k, c); }
  topBand(540, 'rgba(40,10,8,.62)');
  popText('DANCE HALLS', 540, 405, 124, t, T.dance + .15, K.paper, -.015, '#2a0b08'); const f0 = wt(18, 'filled') - .3; if (t > f0) plate('FILLED', 540, 498, 54, K.must, K.ink, 1, .02, pop(t, f0));
}
function sceneVanish(t) {
  const v = E.io2(P(t, T.vanish + .2, wt(19, '1940') + .5)); fillBG('#d9d1bd', '#c7bea8'); ctx.fillStyle = `rgba(60,62,70,${.35 * v})`; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(40,36,30,.4)'; const r = rng(71); for (let c = 0; c < 4; c++) { let y = 1010; while (y < 1400) { const para = r() > .9; ctx.fillRect(60 + c * 250, y, 210 * (para ? .5 : 1), 7); y += para ? 34 : 17; } } ctx.fillRect(60, 640, 960, 6); ctx.fillRect(60, 960, 960, 3);
  ctx.save(); ctx.globalAlpha = 1 - v; txt('CHRISTMAS', 540, 800, `700 136px ${SERIF}`, '#1b1814', 'center'); jp('クリスマス', 540, 916, 84, '#1b1814', 'center', .04); ctx.restore();
  if (v > .3) { ctx.save(); ctx.globalAlpha = (v - .3) / .7; ctx.setLineDash([18, 14]); ctx.strokeStyle = 'rgba(27,24,20,.5)'; ctx.lineWidth = 4; ctx.strokeRect(110, 690, 860, 244); ctx.restore(); }
  const w0 = wt(19, 'war') - .4; if (t > w0) quiet('AS THE WAR DEEPENED', 540, 1300, 40, '#1b1d24', K.paper, fadeIn(t, w0));
  topBand(540, 'rgba(18,18,24,.76)');
  digits('1940', t, Math.max(T.vanish + .2, wt(19, '1940') - 1.4), 400, 190, K.paper, '#0a0b10'); const p0 = wt(19, 'vanished') - .1; if (t > p0) quiet('THE WORD VANISHES FROM NEWSPAPERS', 540, 492, 36, K.paper, K.ink, fadeIn(t, p0));
}

// ------------------------------------------------------------ 07 after the war
function bell(x, y, s, sw) { ctx.save(); ctx.translate(x, y); ctx.rotate(sw); ctx.strokeStyle = '#8a6a1e'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, -60 * s); ctx.lineTo(0, 0); ctx.stroke(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(-14 * s, 0); ctx.quadraticCurveTo(-18 * s, 50 * s, -44 * s, 70 * s); ctx.lineTo(44 * s, 70 * s); ctx.quadraticCurveTo(18 * s, 50 * s, 14 * s, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.2)'; for (let i = 1; i < 4; i++) ctx.fillRect(-40 * s, i * 17 * s, 80 * s, 3); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, 78 * s, 9 * s, 0, TAU); ctx.fill(); ctx.restore(); }
function tinsel(x0, x1, y, sag, t, col) { ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.lineCap = 'round'; for (let i = 0; i <= 60; i++) { const u = i / 60, x = lerp(x0, x1, u), yy = y + sag * Math.sin(u * Math.PI), L = 14 + 8 * Math.sin(i * 2.7 + t * 6); ctx.globalAlpha = .6 + .4 * Math.sin(i * 1.9 + t * 8); ctx.beginPath(); ctx.moveTo(x - 6, yy - L); ctx.lineTo(x + 6, yy + L); ctx.stroke(); } ctx.globalAlpha = 1; }
function giftBox(x, y, w, h, c, rib) { ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(x + 6, y - h + 6, w, h); ctx.fillStyle = c; ctx.fillRect(x, y - h, w, h); ctx.fillStyle = rib; ctx.fillRect(x + w / 2 - 7, y - h, 14, h); ctx.fillRect(x, y - h / 2 - 6, w, 12); ctx.beginPath(); ctx.ellipse(x + w / 2 - 14, y - h - 8, 16, 9, -.5, 0, TAU); ctx.ellipse(x + w / 2 + 14, y - h - 8, 16, 9, .5, 0, TAU); ctx.fill(); }
function scenePostwar(t) {
  fillBG('#f3e3bf', '#e2c98f'); ctx.fillStyle = 'rgba(120,80,40,.1)'; for (let i = 0; i < 6; i++) ctx.fillRect(90 + i * 190, 540, 70, 520);
  ctx.fillStyle = '#c9a66b'; ctx.fillRect(0, 1180, W, 400); ctx.fillStyle = 'rgba(0,0,0,.06)'; for (let j = 0; j < 4; j++) for (let i = 0; i < 9; i++) if ((i + j) % 2) ctx.fillRect(i * 130 - 20, 1180 + j * 60, 130, 60);
  const k0 = T.postwar + .15; for (let i = 0; i < 4; i++) tinsel(i * 270, i * 270 + 270, 580, 60, t, i % 2 ? '#c9a23c' : '#c8ccd4'); for (let i = 0; i < 5; i++) { const k = pop(t, k0 + i * .1); if (k > 0) bell(i * 270, 600, 1.15 * k, .12 * Math.sin(t * 2.2 + i)); }
  // banner and counters
  { const k = pop(t, k0 + .3); ctx.save(); ctx.translate(540, 780); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.2)'; rrect(-312, -52, 640, 120, 8); ctx.fill(); ctx.fillStyle = K.red; rrect(-320, -60, 640, 120, 8); ctx.fill(); ctx.strokeStyle = '#f3ecd8'; ctx.lineWidth = 4; rrect(-308, -48, 616, 96, 4); ctx.stroke(); txt('CHRISTMAS SALE', 0, 22, font(900, 62), '#f3ecd8', 'center', 3); ctx.restore(); }
  for (let i = 0; i < 2; i++) { const x = 60 + i * 520; ctx.fillStyle = '#8b5a33'; ctx.fillRect(x, 1090, 440, 120); ctx.fillStyle = '#5b3a20'; ctx.fillRect(x - 10, 1076, 460, 20); const cs = ['#24407a', '#2f6b45', K.must, '#b5a2c8']; for (let b = 0; b < 4; b++) giftBox(x + 24 + b * 104, 1076, 80, 60 + (b * 31 + i * 17) % 50, cs[(b + i) % 4], b % 2 ? K.red : '#f3ecd8'); }
  const f0 = wt(21, 'fever') - .5, busy = 1 + 1.4 * P(t, f0, f0 + .6); for (let i = 0; i < 9; i++) { const sp = (i % 2 ? 1 : -1) * (40 + i * 8) * busy * .6, x = ((i * 137 + (t - T.postwar) * sp + 2000) % 1300) - 110, y = 1300 + (i % 3) * 26; (i % 3 === 0 ? hatMan : mini)(x, y, 1.9, ['#2c3040', '#7c2a22', '#274a48', '#5b3a20', '#3a3f52'][i % 5]); if (i % 2) giftBox(x + 26, y - 40, 34, 30, K.red, '#f3ecd8'); }
  if (t > f0) plate('SALES HIT FEVER PITCH', 540, 950, 50, K.must, K.ink, 1 - P(t, LS(22) - .2, LS(22) + .1), -.02, pop(t, f0));
  // inset: episode 8's store
  const s0 = LS(22) - .1, sk = E.o3(P(t, s0, s0 + .6)); if (sk > 0) { ctx.save(); ctx.translate(lerp(1500, 740, sk), 930); ctx.rotate(.04); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(-188, -238, 400, 500); ctx.fillStyle = '#f3efe4'; ctx.fillRect(-200, -250, 400, 500); ctx.save(); ctx.beginPath(); ctx.rect(-180, -230, 360, 380); ctx.clip(); ctx.fillStyle = '#141a34'; ctx.fillRect(-180, -230, 360, 380); ctx.translate(0, -30); ctx.scale(.46, .46); ctx.translate(-540, -960); nightStore(t, 1); ctx.restore(); txt('SHIROKIYA · 1932', 0, 206, font(900, 34), K.ink, 'center', 1); ctx.restore(); const e0 = wt(22, 'early') - .3; if (t > e0) plate('AN EARLY SIGN', 330, 1000, 50, K.red, K.paper, 1, -.04, pop(t, e0)); }
  topBand(540, 'rgba(50,24,10,.72)');
  popText('CHRISTMAS,', 540, 400, 116, t, T.postwar + .2, K.paper, -.015, '#2a1206'); popText('JAPANESE STYLE', 540, 510, 96, t, T.postwar + .45, K.must, -.015, '#2a1206');
}

// ------------------------------------------------------------ 08 tease: the lucky bag
function luckyBag(x, y, s, q, t) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(10, 8, 190, 22, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#c9382a'; ctx.beginPath(); ctx.moveTo(-170, 0); ctx.lineTo(-150, -380); ctx.lineTo(150, -380); ctx.lineTo(170, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.14)'; ctx.beginPath(); ctx.moveTo(100, -380); ctx.lineTo(150, -380); ctx.lineTo(170, 0); ctx.lineTo(120, 0); ctx.fill();
  ctx.fillStyle = '#a82c20'; ctx.beginPath(); ctx.moveTo(-150, -380); ctx.lineTo(-110, -450); ctx.lineTo(110, -450); ctx.lineTo(150, -380); ctx.fill(); ctx.fillStyle = '#f3ecd8'; ctx.fillRect(-156, -396, 312, 26);
  ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-30, -384); ctx.quadraticCurveTo(-70, -330, -40, -300); ctx.moveTo(30, -384); ctx.quadraticCurveTo(70, -330, 44, -296); ctx.stroke(); ctx.beginPath(); ctx.ellipse(-36, -404, 34, 16, -.4, 0, TAU); ctx.ellipse(36, -404, 34, 16, .4, 0, TAU); ctx.stroke();
  if (q > 0) { ctx.save(); ctx.translate(0, -170); ctx.scale(q, q); ctx.rotate(.05 * Math.sin(t * 2)); ctx.fillStyle = '#f3ecd8'; ctx.beginPath(); ctx.arc(0, 0, 104, 0, TAU); ctx.fill(); txt('?', 0, 62, font(900, 180), '#c9382a', 'center'); ctx.restore(); }
  ctx.restore();
}
function sceneTease(t) {
  fillBG('#f3e8cf', '#e6d3a8'); rays(540, 1000, t, .06, .08, '201,56,42');
  ctx.fillStyle = '#c9a66b'; ctx.fillRect(-60, 1300, W + 120, 800);
  const th = wt(23, 'thousand') - .6; for (let i = 0; i < 8; i++) { const k = pop(t, th + i * .08); if (k > 0) luckyBag(90 + i * 130, 1296 - (i % 2) * 14, .34 * k, 0, t); }
  const b0 = wt(23, 'lucky') - .5, bk = pop(t, b0, .5); if (bk > 0) luckyBag(540, 1330, 1.2 * bk, pop(t, LS(24) - .1), t);
  const f0 = wt(24, 'fukubukuro') - .4; if (t > f0) { plate('FUKUBUKURO', 330, 700, 50, K.ink, K.paper, 1, -.03, pop(t, f0)); ctx.save(); ctx.globalAlpha = P(t, f0 + .15, f0 + .4); jp('福袋', 800, 730, 110, '#c9382a', 'center', .05); ctx.restore(); }
  topBand(540, 'rgba(60,20,12,.74)');
  popText('NEW YEAR', 540, 405, 148, t, Math.max(T.tease + .2, wt(23, 'new') - .3), K.paper, -.015, '#2a0b08'); if (t > b0) plate('LUCKY BAGS · SOLD BY THE THOUSAND', 540, 494, 38, K.must, K.ink, 1, .012, pop(t, b0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n, .25)); plate('EPISODE 10', 870, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 840 + i * 130 + 30 * (1 - a), 124, K.must, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 910); ctx.lineTo(80 + 600 * u, 910); ctx.stroke();
}

window.FILM = {
  title: 'CHRISTMAS COMES TO JAPAN', tag: 'EP 9 · JAPAN’S DEPARTMENT STORES',
  hotLines: [],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.mass, draw: sceneMass }, { start: T.play, draw: scenePlay }, { start: T.ban, draw: sceneBan }, { start: T.ginza, draw: sceneGinza }, { start: T.papers, draw: scenePapers }, { start: T.cal, draw: sceneCal }, { start: T.eve, draw: sceneEve }, { start: T.cafe, draw: sceneCafe }, { start: T.dance, draw: sceneDance }, { start: T.vanish, draw: sceneVanish }, { start: T.postwar, draw: scenePostwar }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.mass, .5], [T.play, .4], [T.ban, .5], [T.ginza, .5], [T.papers, .4], [T.cal, .6], [T.eve, .5], [T.cafe, .4], [T.dance, .3], [T.vanish, .6], [T.postwar, .5], [T.tease, .5], [T.end, .3]],
  chapters: [[0, '01', 'THE QUESTION'], [T.mass, '02', 'LONG BEFORE THE SHOPS'], [T.ginza, '03', 'GINZA LIGHTS UP'], [T.papers, '04', 'EVERY DECEMBER'], [T.cal, '05', 'THE 25TH'], [T.cafe, '06', 'THE BOOM'], [T.postwar, '07', 'AFTER THE WAR'], [T.tease, '08', 'NEXT']],
  hits: [[.8, 8, .3], [wt(9, 'copied') - .5, 6, .3], [T.postwar + .2, 8, .3]],
  flashes: [[T.ginza, .3], [T.postwar, .3], [T.end, .25]],
  events: {
    scene: [T.mass, T.play, T.ban, T.ginza, T.papers, T.cal, T.eve, T.cafe, T.dance, T.vanish, T.postwar, T.tease, T.end],
    pop: [.3, wt(1, 'question') - .3, wt(2, 'selling') - .4, wt(3, 'first') - .2, wt(4, 'christmas') - .2, wt(4, 'reportedly') - .3, T.ginza + .5, wt(7, 'upscale') - .3, wt(8, 'dressed') + .3, wt(8, 'dressed') + .7, wt(9, 'crowds') - .3, wt(9, 'copied') - .5, T.papers + .3, T.cafe + .3, wt(17, '7400') - .2, wt(18, 'filled') - .3, wt(21, 'fever') - .5, wt(22, 'early') - .3, wt(23, 'lucky') - .5, LS(24) - .1, wt(24, 'fukubukuro') - .4, T.end + .1],
    stamp: [.55, T.mass + .25, T.play + .25, wt(7, '1900') - .5, wt(11, 'decorations') - .4, wt(16, 'night') - .3, wt(17, '7400') - .6, T.dance + .15, T.postwar + .2, wt(23, 'new') - .3],
    soft: [wt(13, '25') - .3, wt(13, 'died') - .3, wt(14, 'national') - .3, wt(19, 'vanished') - .1, wt(19, 'war') - .4],
    lightsOn: [.3, wt(7, '1900') - .2, T.eve, T.cafe + .2], candlesOut: CANDLES.map((_, i) => wt(5, 'banned') - .3 + i * .22), cards: [T.papers + .3, T.papers + 1.5, wt(11, 'decorations') - .5, wt(11, 'heres') - .4, T.cal - .6],
    flip: [wt(12, 'calendar') - .2], range: [wt(15, '1927') - .4], dance: [T.dance, T.vanish], fade: [T.vanish + .2], bells: [T.postwar + .15], bags: Array.from({ length: 8 }, (_, i) => wt(23, 'thousand') - .6 + i * .08), end: [T.end],
  },
};
