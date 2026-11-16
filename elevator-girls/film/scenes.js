// GOING UP — episode 7: Japan's first elevator girls. Portrait-first (9:16). Shared helpers live in lib.js.
// Visual rule: everything is drawn (nothing filmed); attendants are faceless figures or silhouettes, never likenesses.
const EP = { n: 7, title: ['GOING UP'], next: ['The fire', 'and the myth'] };
const T = { hook: 0, name: LB(2), first: LB(3), ride: LB(5), hire: LB(6), handle: LB(7), miss: LB(9), rank: LB(10), mag: LB(11), spread: LB(13), trips: LB(14), strain: LB(15), auto: LB(17), taka: LB(18), matsu: LB(19), tease: LB(20), end: TL[22].e + .15 };
const BR = ['#8a6a1e', '#e9c45a', '#a5822a'], DECO = { teal: '#1f5a57', maroon: '#7c2a22', plum: '#3a2140', cream: '#f3e8cf' };

// ------------------------------------------------------------ elevator kit
function brassDoors(x, y, w, h, op, cols = BR, deco = 1) {
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip(); const dw = w / 2;
  for (const sd of [-1, 1]) {
    const dx = sd < 0 ? x - op * dw * .93 : x + dw + op * dw * .93, bg = ctx.createLinearGradient(dx, 0, dx + dw, 0); bg.addColorStop(0, cols[0]); bg.addColorStop(.5, cols[1]); bg.addColorStop(1, cols[2]);
    ctx.fillStyle = bg; ctx.fillRect(dx, y, dw, h); ctx.strokeStyle = 'rgba(60,40,10,.55)'; ctx.lineWidth = Math.max(3, w * .009); rrect(dx + dw * .09, y + h * .05, dw * .82, h * .9, 10); ctx.stroke();
    if (deco) for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(dx + dw / 2, y + h * (.11 + i * .055)); ctx.lineTo(dx + dw * .15, y + h * (.2 + i * .085)); ctx.moveTo(dx + dw / 2, y + h * (.11 + i * .055)); ctx.lineTo(dx + dw * .85, y + h * (.2 + i * .085)); ctx.stroke(); }
  }
  ctx.restore();
}
function carInside(x, y, w, h) {
  const cg = ctx.createLinearGradient(0, y, 0, y + h); cg.addColorStop(0, '#ffe2a0'); cg.addColorStop(1, '#c98a3a'); ctx.fillStyle = cg; ctx.fillRect(x, y, w, h);
  ctx.fillStyle = 'rgba(90,50,20,.3)'; for (let px = x + w * .08; px < x + w; px += w * .21) ctx.fillRect(px, y, Math.max(4, w * .012), h);
  ctx.fillStyle = '#8b5a33'; ctx.fillRect(x, y + h * .56, w, Math.max(6, h * .02));
}
function dial(x, y, r, f) {
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.arc(x + 5, y + 6, r + 8, Math.PI, 0); ctx.fill();
  ctx.fillStyle = '#e9dcbb'; ctx.beginPath(); ctx.arc(x, y, r, Math.PI, 0); ctx.fill(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = r * .09; ctx.beginPath(); ctx.arc(x, y, r, Math.PI, 0); ctx.closePath(); ctx.stroke();
  ctx.lineWidth = r * .04; for (let i = 0; i <= 6; i++) { const a = Math.PI + Math.PI * (.08 + .84 * i / 6); ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * r * .72, y + Math.sin(a) * r * .72); ctx.lineTo(x + Math.cos(a) * r * .86, y + Math.sin(a) * r * .86); ctx.stroke(); }
  const na = Math.PI + Math.PI * (.08 + .84 * clamp(f)); ctx.strokeStyle = K.red; ctx.lineWidth = r * .08; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y - 3); ctx.lineTo(x + Math.cos(na) * r * .8, y - 3 + Math.sin(na) * r * .8); ctx.stroke(); ctx.fillStyle = '#5b3a20'; ctx.beginPath(); ctx.arc(x, y - 3, r * .1, 0, TAU); ctx.fill();
}
// hand-driven car switch: a brass plate with a lever. a = lever angle (0 = stop, upright)
function controller(x, y, s, a) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = '#3a2616'; rrect(-70, 0, 140, 230, 14); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.arc(8, 10, 118, 0, TAU); ctx.fill();
  const g = ctx.createRadialGradient(-30, -40, 10, 0, 0, 120); g.addColorStop(0, '#f3d67a'); g.addColorStop(1, '#a5822a'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 112, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#6b4e12'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(0, 0, 96, 0, TAU); ctx.stroke(); ctx.lineWidth = 8; for (const k of [-.8, 0, .8]) { ctx.beginPath(); ctx.moveTo(Math.sin(k) * 74, -Math.cos(k) * 74); ctx.lineTo(Math.sin(k) * 92, -Math.cos(k) * 92); ctx.stroke(); }
  ctx.rotate(a); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 26; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -160); ctx.stroke(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(0, -176, 34, 0, TAU); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, 0, 24, 0, TAU); ctx.fill();
  ctx.restore();
}
const knob = (x, y, s, a) => [x + Math.sin(a) * 176 * s, y - Math.cos(a) * 176 * s];
// Faceless uniformed figure, ~700·s tall, feet at (x, g). o: {sil, uni, hat, bow, arm:[dx,dy], arm2, flip}; arm targets are in hip-frame units.
function attendant(x, g, s, o = {}) {
  const c = o.sil, U = c || o.uni || DECO.teal, f = o.flip || 1;
  ctx.save(); ctx.translate(x, g); ctx.scale(s * f, s);
  ctx.fillStyle = c || '#d9c9b0'; ctx.fillRect(-34, -150, 22, 140); ctx.fillRect(12, -150, 22, 140);
  ctx.fillStyle = c || '#1b1a22'; rrect(-40, -16, 42, 16, 6); ctx.fill(); rrect(8, -16, 42, 16, 6); ctx.fill();
  ctx.fillStyle = U; ctx.beginPath(); ctx.moveTo(-62, -334); ctx.lineTo(62, -334); ctx.lineTo(84, -130); ctx.lineTo(-84, -130); ctx.closePath(); ctx.fill();
  ctx.translate(0, -330); ctx.rotate(o.bow || 0);
  const a2 = o.arm2 || [-74, -24], a1 = o.arm || [74, -24];
  ctx.lineCap = 'round'; ctx.strokeStyle = U; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(-54, -200); ctx.lineTo(a2[0], a2[1]); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(a2[0], a2[1], 22, 0, TAU); ctx.fill();
  ctx.fillStyle = U; rrect(-68, -240, 136, 262, 38); ctx.fill();
  if (!c) { ctx.fillStyle = '#f3ece0'; ctx.beginPath(); ctx.moveTo(-24, -240); ctx.lineTo(24, -240); ctx.lineTo(0, -196); ctx.fill(); ctx.fillStyle = K.must; for (const by of [-160, -112, -64]) { ctx.beginPath(); ctx.arc(0, by, 7, 0, TAU); ctx.fill(); } }
  ctx.fillStyle = c || SKIN; ctx.beginPath(); ctx.arc(0, -292, 46, 0, TAU); ctx.fill();
  ctx.fillStyle = c || '#1b1a22'; ctx.beginPath(); ctx.arc(0, -300, 49, Math.PI * .95, Math.PI * 2.05); ctx.fill(); rrect(-50, -306, 18, 46, 8); ctx.fill(); rrect(32, -306, 18, 46, 8); ctx.fill();
  ctx.fillStyle = c || o.hat || DECO.maroon; rrect(-40, -366, 80, 38, 10); ctx.fill();
  ctx.strokeStyle = U; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(54, -200); ctx.lineTo(a1[0], a1[1]); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(a1[0], a1[1], 22, 0, TAU); ctx.fill();
  ctx.restore();
}
const armTo = (x, g, s, wx, wy) => [(wx - x) / s, (wy - (g - 330 * s)) / s];
function hatMan(x, y, s, col) { mini(x, y, s, col); ctx.fillStyle = col; rrect(x - 13 * s, y - 126 * s, 26 * s, 18 * s, 4 * s); ctx.fill(); rrect(x - 22 * s, y - 111 * s, 44 * s, 6 * s, 3 * s); ctx.fill(); }
function bubble(x, y, w, h, k, lines, tail = -1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-w / 2 + 8, -h / 2 + 8, w, h, 26); ctx.fill(); ctx.fillStyle = K.paper; rrect(-w / 2, -h / 2, w, h, 26); ctx.fill();
  ctx.beginPath(); ctx.moveTo(tail * w * .12 - 30, h / 2 - 4); ctx.lineTo(tail * w * .2, h / 2 + 64); ctx.lineTo(tail * w * .12 + 34, h / 2 - 4); ctx.fill();
  lines.forEach(([s, size, col], i) => txt(s, 0, -h / 2 + (i + 1) * h / (lines.length + 1) + size * .34, font(900, size), col, 'center')); ctx.restore();
}
function hall(p) {
  fillBG(p.wall[0], p.wall[1]); const r = rng(p.seed); ctx.strokeStyle = p.vein; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (let i = 0; i < 30; i++) { let x = r() * W, y = 540 + r() * 760; ctx.lineWidth = 1.5 + r() * 3.5; ctx.beginPath(); ctx.moveTo(x, y); for (let k = 0; k < 5; k++) { x += (r() - .5) * 170; y += 30 + r() * 70; ctx.lineTo(x, y); } ctx.stroke(); }
  ctx.fillStyle = p.trim; ctx.fillRect(0, 1236, W, 96);
  for (const x of [110, 970]) { ctx.fillStyle = p.pil; ctx.fillRect(x - 52, 560, 104, 772); ctx.fillStyle = 'rgba(255,255,255,.14)'; ctx.fillRect(x - 52, 560, 14, 772); ctx.fillStyle = 'rgba(0,0,0,.16)'; ctx.fillRect(x + 36, 560, 16, 772); ctx.fillStyle = p.trim; ctx.fillRect(x - 66, 1290, 132, 42); ctx.fillRect(x - 66, 560, 132, 34); }
  ctx.fillStyle = p.floor[0]; ctx.fillRect(0, 1332, W, 700); ctx.fillStyle = p.floor[1]; for (let j = 0; j < 6; j++) for (let i = -1; i < 9; i++) if ((i + j) % 2) ctx.fillRect(i * 135 + j * 10, 1332 + j * 78, 135, 78);
  ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(0, 1332, W, 10);
}
function doorSurround(x, y, w, h, p) { ctx.fillStyle = 'rgba(0,0,0,.2)'; rrect(x - 30, y - 44, w + 76, h + 44, [70, 70, 0, 0]); ctx.fill(); ctx.fillStyle = p.trim; rrect(x - 40, y - 52, w + 80, h + 52, [70, 70, 0, 0]); ctx.fill(); ctx.fillStyle = '#2a1810'; ctx.fillRect(x - 8, y - 8, w + 16, h + 8); }
const HALL_A = { wall: ['#e9dcc3', '#cdbb9c'], vein: 'rgba(130,100,70,.28)', pil: '#b9a07a', trim: '#6b4a2c', floor: ['#d8cbb0', '#8a735a'], seed: 31 };
const HALL_B = { wall: ['#c9d2c4', '#9fb0a2'], vein: 'rgba(50,80,70,.3)', pil: '#7f978a', trim: '#33483f', floor: ['#cfd6c8', '#55695f'], seed: 77 };

// ------------------------------------------------------------ 01 hook: the doors from episode 6's tease open
function sceneHook(t) {
  fillBG(DECO.plum, '#1d1024'); ctx.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 900); ctx.fillStyle = '#2a1830'; ctx.fillRect(0, 1330, W, 800);
  const o0 = wt(1, 'women') - .6, op = E.io2(P(t, o0, o0 + 1.1)), X = 210, Y = 620, DW = 660, DH = 710;
  ctx.save(); ctx.beginPath(); ctx.rect(X, Y, DW, DH); ctx.clip(); carInside(X, Y, DW, DH);
  const la = .45 * Math.sin((t - o0) * 1.7) * op, cx = 700, cy = 1040, cs = .7, kb = knob(cx, cy, cs, la); controller(cx, cy, cs, la); attendant(420, 1330, .95, { arm: armTo(420, 1330, .95, kb[0] - 6, kb[1] + 4) });
  ctx.restore(); brassDoors(X, Y, DW, DH, op); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 30; ctx.strokeRect(X - 15, Y - 15, DW + 30, DH + 30);
  dial(540, 596, 84, .1 + .8 * E.io2(P(t, .4, o0)));
  const r0 = wt(0, 'rebuilt') - .3; if (t > r0) plate('THE REBUILT UENO STORE OPENS', 540, 720, 40, K.paper, K.ink, 1 - P(t, o0 - .1, o0 + .2), -.02, pop(t, r0));
  const n0 = wt(1, 'new') - .3; if (t > n0) plate('SOMETHING NEW', 330, 690, 52, K.red, K.paper, 1, -.04, pop(t, n0));
  const e0 = wt(1, 'elevators') - .5; if (t > e0) plate('WOMEN RUNNING THE ELEVATORS', 540, 1338, 44, K.must, K.ink, 1, .015, pop(t, e0));
  topBand(540, 'rgba(24,10,30,.6)');
  plate('EP 7', 150, 268, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('GOING UP', 540, 425, 150, t, .55, K.must, -.015, '#12081a');
  const d0 = wt(0, '1') - .2; if (t > d0) plate('1 APRIL 1929 · MATSUZAKAYA, TOKYO', 540, 492, 36, K.paper, K.ink, 1, .012, pop(t, d0));
}

// ------------------------------------------------------------ the name
function sceneName(t) {
  carInside(-60, -60, W + 120, H + 120); ctx.fillStyle = 'rgba(60,20,10,.25)'; ctx.fillRect(0, 0, W, H);
  const la = .6 * Math.sin((t - T.name) * 1.9), kb = knob(470, 1120, 1.5, la); controller(470, 1120, 1.5, la);
  ctx.lineCap = 'round'; ctx.strokeStyle = DECO.teal; ctx.lineWidth = 120; ctx.beginPath(); ctx.moveTo(1140, 1560); ctx.lineTo(kb[0] + 90, kb[1] + 110); ctx.stroke(); ctx.strokeStyle = '#f3ece0'; ctx.lineWidth = 124; ctx.beginPath(); ctx.moveTo(kb[0] + 112, kb[1] + 137); ctx.lineTo(kb[0] + 90, kb[1] + 110); ctx.stroke();
  ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.arc(kb[0] + 30, kb[1] + 40, 76, 0, TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(kb[0] + 24, kb[1] + 30, 76, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(0,0,0,.12)'; ctx.lineWidth = 5; for (const k of [-1, 0, 1]) { ctx.beginPath(); ctx.moveTo(kb[0] + 4 + k * 24, kb[1] - 22); ctx.lineTo(kb[0] + 10 + k * 24, kb[1] + 14); ctx.stroke(); }
  const l0 = wt(2, 'lift') - .3; if (t > l0) plate('= “LIFT GIRLS”', 540, 700, 70, K.red, K.paper, 1, -.03, pop(t, l0));
  topBand(540, 'rgba(50,20,8,.62)');
  const s0 = wt(2, 'shk') - .35; popText('“SHŌKŌKI GIRLS”', 540, 390, 92, t, Math.max(T.name + .2, s0), K.paper, -.015, '#2a0b08');
  if (t > s0 + .2) { ctx.save(); ctx.globalAlpha = P(t, s0 + .2, s0 + .5); jp('昇降機ガール', 540, 486, 62, K.must, 'center', .06); ctx.restore(); }
}

// ------------------------------------------------------------ 02 who was first: schematic map
const HONSHU = [[800, 680], [845, 745], [825, 840], [805, 920], [795, 990], [772, 1032], [700, 1050], [640, 1070], [570, 1088], [528, 1142], [476, 1100], [400, 1100], [330, 1120], [240, 1140], [168, 1160], [180, 1118], [260, 1080], [360, 1050], [460, 1020], [540, 990], [556, 936], [600, 968], [680, 920], [730, 840], [750, 740], [758, 680]];
function land(pts, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 26; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fill(); ctx.stroke(); }
function japan(col) { land(HONSHU, col); land([[810, 632], [850, 574], [950, 566], [1000, 606], [940, 640], [880, 664]], col); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(400, 1182, 76, 30, -.2, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(150, 1244, 56, 86, .15, 0, TAU); ctx.fill(); }
function cityDot(x, y, t, t0, col) { const k = pop(t, t0); if (k <= 0) return; for (let i = 0; i < 2; i++) { const ph = ((t - t0) * .8 + i / 2) % 1; ctx.strokeStyle = col; ctx.globalAlpha = .8 * (1 - ph); ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(x, y, 24 + ph * 70, 0, TAU); ctx.stroke(); } ctx.globalAlpha = 1; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 26 * k, 0, TAU); ctx.fill(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 18 * k, 0, TAU); ctx.fill(); }
function sceneMap(t) {
  fillBG('#1f5a57', '#123c3e'); ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.lineWidth = 5; for (let j = 0; j < 14; j++) { ctx.beginPath(); for (let x = -20; x <= W + 20; x += 30) { const y = 600 + j * 62 + Math.sin(x * .012 + t * .8 + j) * 9; x < 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
  ctx.save(); ctx.translate(8, 12); japan('rgba(0,0,0,.25)'); ctx.restore(); japan('#e9dcbb');
  const TK = [772, 1026], KB = [452, 1096], t0 = T.first + .35, k0 = wt(4, 'kobe') - .35;
  if (t > k0) { ctx.save(); ctx.setLineDash([16, 14]); ctx.lineDashOffset = -t * 30; ctx.strokeStyle = K.red; ctx.lineWidth = 7; ctx.globalAlpha = P(t, k0, k0 + .4); ctx.beginPath(); ctx.moveTo(TK[0], TK[1]); ctx.quadraticCurveTo(620, 1250, KB[0], KB[1]); ctx.stroke(); ctx.restore(); }
  cityDot(TK[0], TK[1], t, t0, K.red); cityDot(KB[0], KB[1], t, k0, K.must);
  if (t > t0) plate('TOKYO', 880, 950, 46, K.red, K.paper, 1, .03, pop(t, t0 + .1)); if (t > k0) plate('KOBE', 330, 1010, 46, K.must, K.ink, 1, -.03, pop(t, k0 + .1));
  const f0 = wt(3, 'first') - .4, d0 = wt(4, 'daimaru') - .3; if (t > f0) plate('MATSUZAKAYA: “JAPAN’S FIRST”', 540, 1320, 42, K.paper, K.ink, 1 - P(t, k0 - .1, k0 + .2), -.015, pop(t, f0));
  if (t > k0) plate('ONE HISTORY: DAIMARU, KOBE, WAS EARLIER', 540, 1320, 36, K.must, K.ink, 1, .012, pop(t, Math.max(k0 + .2, d0 - .6)));
  label('SCHEMATIC MAP', 150, 620, .8, K.paper, 18);
  topBand(540, 'rgba(8,36,40,.62)');
  popText('TOKYO 1929', 540, 385, 124, t, T.first + .2, K.paper, -.015, '#062020'); popText('KOBE EARLIER?', 540, 498, 104, t, k0, K.must, -.015, '#062020');
}
function sceneRide(t) {
  fillBG('#e6d3b0', '#cdb98f'); ctx.fillStyle = 'rgba(120,80,40,.1)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 + 20, 540, 8, 800);
  const SX = 400, SW = 280, F1 = 1332, F2 = 950, r0 = wt(5, 'rode') - .3, r1 = wt(5, 'floor') + .3, u = E.io2(P(t, r0, r1)), cy = lerp(F1, F2, u);
  ctx.fillStyle = '#3a2616'; ctx.fillRect(SX, 560, SW, F1 - 560); ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.lineWidth = 4; for (const x of [SX + SW * .4, SX + SW * .6]) { ctx.beginPath(); ctx.moveTo(x, 560); ctx.lineTo(x, cy - 300); ctx.stroke(); }
  ctx.fillStyle = '#8b6a4a'; ctx.fillRect(0, F2, SX, 26); ctx.fillRect(SX + SW, F2, W, 26); ctx.fillStyle = '#6b4a2c'; ctx.fillRect(-60, F1, W + 120, 700);
  carInside(SX + 14, cy - 300, SW - 28, 300); ctx.strokeStyle = BR[1]; ctx.lineWidth = 10; ctx.strokeRect(SX + 14, cy - 300, SW - 28, 300);
  attendant(SX + 84, cy - 4, .36, { sil: '#2a1420' }); const out = P(t, r1 + .1, r1 + .9);
  for (let i = 0; i < 2; i++) hatMan(lerp(SX + 170 + i * 54, SX + SW + 90 + i * 110, E.o3(out)), cy - 2, 1.75, ['#2c3040', '#5b3a20'][i]);
  for (let i = 0; i < 5; i++) hatMan(70 + i * 68 + 5 * Math.sin(t * 2 + i), F1, 1.75, ['#3a3f52', '#5b3a20', '#274a48', '#2c3040', '#6b2a30'][i]);
  if (t > r0) { ctx.save(); ctx.globalAlpha = P(t, r0, r0 + .3); ctx.strokeStyle = K.red; ctx.fillStyle = K.red; ctx.lineWidth = 8; arrow(800, F1 - 10, 800, F2 + 36, 22); ctx.restore(); plate('ONE FLOOR', 890, 1150, 44, K.red, K.paper, 1, .03, pop(t, r0 + .1)); }
  txt('1F', 40, F1 - 250, font(900, 56), 'rgba(60,40,20,.5)', 'left'); txt('2F', 40, F2 - 60, font(900, 56), 'rgba(60,40,20,.5)', 'left');
  stamp(t, wt(5, 'just') - .1, 850, 700, 'ONE ACCOUNT', K.red, -.07, 38);
  topBand(540, 'rgba(40,24,8,.66)');
  popText('UP ONE FLOOR', 540, 390, 118, t, T.ride + .2, K.paper, -.015, '#2a1808'); const j0 = wt(5, 'just') - .3; if (t > j0) plate('…JUST TO SEE THEM', 540, 486, 48, K.must, K.ink, 1, .015, pop(t, j0));
}

// ------------------------------------------------------------ 03 by hand
function sceneHire(t) {
  fillBG(DECO.maroon, '#3d1410'); rays(540, 1000, t, .05, .1, '0,0,0');
  for (let i = 0; i < 8; i++) { const k = pop(t, T.hire + .25 + i * .13); if (k <= 0) continue; const x = 165 + (i % 4) * 250, g = i < 4 ? 980 : 1368; shadow(x, g, 80, 12, .3); ctx.save(); if (i === 7) ctx.globalAlpha = .4 + .15 * Math.sin(t * 5); ctx.translate(x, g); ctx.scale(k, k); attendant(0, 0, .5, { uni: i % 2 ? '#24407a' : DECO.teal, hat: K.must }); ctx.restore(); }
  const e0 = wt(6, 'eight') - .2; if (t > e0) plate('…OR EIGHT', 915, 1010, 34, K.paper, K.ink, 1, .04, pop(t, e0));
  topBand(540, 'rgba(40,10,8,.6)');
  popText('SEVEN OR EIGHT', 540, 392, 112, t, Math.max(T.hire + .2, wt(6, 'seven') - .5), K.paper, -.015, '#2a0b08'); const a0 = wt(6, 'women') - .3; if (t > a0) plate('WOMEN AGED 18 AND OVER · UENO', 540, 490, 40, K.must, K.ink, 1, .015, pop(t, a0));
}
function sceneHandle(t) {
  carInside(-60, -60, W + 120, H + 120); ctx.fillStyle = '#5b3a20'; ctx.fillRect(0, 1340, W, 700);
  const tt = t - T.handle, la = .75 * Math.sin(tt * 1.5), fl = .5 - .42 * Math.cos(tt * .75), cx = 760, cy = 1070, cs = .95, kb = knob(cx, cy, cs, la);
  ctx.fillStyle = '#3a2616'; rrect(600, 600, 320, 190, 16); ctx.fill(); dial(760, 760, 130, fl);
  controller(cx, cy, cs, la); shadow(310, 1342, 130, 16, .3); attendant(310, 1340, .86, { arm: armTo(310, 1340, .86, kb[0] - 8, kb[1] + 6) });
  const c0 = wt(8, 'called') - .35; if (t > c0) bubble(300, 650, 420, 130, pop(t, c0), [['“GOING UP!”', 62, K.red]], 0.3);
  const h0 = wt(7, 'handle') - .4; if (t > h0) { ctx.save(); ctx.globalAlpha = P(t, h0, h0 + .3) * (1 - P(t, c0 + 1.2, c0 + 1.6)); ctx.strokeStyle = K.red; ctx.lineWidth = 8; ctx.setLineDash([14, 12]); ctx.lineDashOffset = -t * 40; ctx.beginPath(); ctx.arc(cx, cy, 220, -Math.PI * .5 - .9, -Math.PI * .5 + .9); ctx.stroke(); ctx.restore(); plate('THE HANDLE', 800, 1310, 46, K.red, K.paper, 1, .03, pop(t, h0)); }
  topBand(540, 'rgba(50,24,8,.64)');
  const d0 = wt(7, 'driven') - .4; if (t > d0) plate('DRIVEN BY TURNING A HANDLE', 540, 288, 38, K.paper, K.ink, 1, -.012, pop(t, d0));
  const s0 = wt(8, 'steered') - .3, s2 = wt(8, 'called') - .3, s1 = (s0 + s2) / 2;
  popText('STEER', 340, 400, 88, t, s0, K.paper, -.02, '#2a1808'); popText('STOP', 770, 400, 88, t, s1, K.must, .01, '#2a1808'); popText('ANNOUNCE', 540, 506, 100, t, s2, K.paper, -.01, '#2a1808');
  ctx.fillStyle = K.must; if (t > s1) { ctx.beginPath(); ctx.arc(590, 372, 10, 0, TAU); ctx.fill(); }
}
function sceneMiss(t) {
  fillBG('#274a7a', '#16284a'); ctx.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 900);
  const LV = 1180, GAP = 104, s0 = wt(9, 'stopped') - .1, u = P(t, T.miss, s0), cyF = LV - GAP + (1 - E.o3(u)) * -460 + (t > s0 ? 14 * Math.sin((t - s0) * 22) * Math.exp(-(t - s0) * 5) : 0), SX = 270, SW = 540, CH = 520;
  ctx.fillStyle = '#0e1830'; ctx.fillRect(SX, 540, SW, 1500);
  carInside(SX + 20, cyF - CH, SW - 40, CH); const la = -.5 * (1 - P(t, s0 - .3, s0)), kb = knob(SX + 400, cyF - 210, .5, la); controller(SX + 400, cyF - 210, .5, la); attendant(SX + 190, cyF, .62, { arm: armTo(SX + 190, cyF, .62, kb[0] - 4, kb[1] + 4) });
  ctx.fillStyle = '#5b3a20'; ctx.fillRect(SX + 8, cyF, SW - 16, 30); ctx.strokeStyle = BR[1]; ctx.lineWidth = 12; ctx.strokeRect(SX + 14, cyF - CH, SW - 28, CH + 26);
  ctx.fillStyle = '#8a8478'; ctx.fillRect(-60, LV, SX + 60, 900); ctx.fillRect(SX + SW, LV, W, 900); ctx.fillStyle = '#6f6a60'; ctx.fillRect(-60, LV, SX + 60, 16); ctx.fillRect(SX + SW, LV, W, 16);
  hatMan(140, LV, 2.1, '#2c3040');
  if (t > s0) { const a = P(t, s0, s0 + .25); ctx.save(); ctx.globalAlpha = a; ctx.setLineDash([14, 10]); ctx.strokeStyle = K.must; ctx.lineWidth = 6; for (const y of [LV, LV - GAP]) { ctx.beginPath(); ctx.moveTo(SX - 30, y); ctx.lineTo(1040, y); ctx.stroke(); } ctx.setLineDash([]); ctx.fillStyle = K.must; arrow(900, LV - 6, 900, LV - GAP + 6, 16); ctx.restore(); plate('A FOOT OFF', 890, 1280, 48, K.must, K.ink, 1, .03, pop(t, s0 + .1)); popText('!', 140, 880, 130, t, s0 + .2, K.red, .1, '#0a1020'); }
  topBand(540, 'rgba(10,24,50,.62)');
  popText('BEGINNERS', 540, 392, 136, t, T.miss + .2, K.paper, -.015, '#0a1830'); const p0 = wt(9, 'sometimes') - .2; if (t > p0) plate('SOMETIMES STOPPED SHORT OF LEVEL', 540, 490, 38, K.must, K.ink, 1, .015, pop(t, p0));
}

// ------------------------------------------------------------ 04 standing: 1930s magazine-style graphics
function decoBG(t, a, b) { fillBG(a, b); ctx.save(); ctx.translate(540, 1500); for (let i = 0; i < 13; i++) { ctx.fillStyle = i % 2 ? 'rgba(240,182,55,.13)' : 'rgba(255,255,255,.05)'; const a0 = Math.PI + i * Math.PI / 13 + Math.sin(t * .3) * .02; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1500, a0, a0 + Math.PI / 13); ctx.fill(); } ctx.restore(); }
function sceneRank(t) {
  decoBG(t, '#e9dcbb', '#d6c59a');
  const u = E.o3(P(t, T.rank + .1, T.rank + .7)), hiY = lerp(1500, 900, u), loY = lerp(1500, 1140, E.o3(P(t, T.rank + .25, T.rank + .85)));
  ctx.fillStyle = DECO.teal; ctx.fillRect(540, hiY, 620, 1200); ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(540, hiY, 620, 14);
  ctx.fillStyle = DECO.maroon; ctx.fillRect(-60, loY, 600, 1200); ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(-60, loY, 600, 14);
  // desk worker (generic) on the higher step
  ctx.fillStyle = '#5b3a20'; rrect(650, hiY - 120, 300, 22, 6); ctx.fill(); ctx.fillRect(668, hiY - 100, 16, 100); ctx.fillRect(916, hiY - 100, 16, 100); mini(800, hiY - 96, 2.0, '#2c3040'); ctx.fillStyle = '#f3ece0'; rrect(700, hiY - 150, 90, 30, 4); ctx.fill();
  attendant(270, loY, .44, {});
  txt('DESK JOBS', 800, hiY + 90, font(900, 54), K.paper, 'center', 2); txt('SERVICE WORK', 240, loY + 90, font(900, 48), K.paper, 'center', 2);
  const b0 = wt(10, 'below') - .3; if (t > b0) { ctx.save(); ctx.globalAlpha = P(t, b0, b0 + .25); ctx.strokeStyle = K.red; ctx.fillStyle = K.red; ctx.lineWidth = 9; arrow(470, 890, 470, 1120, 22); ctx.restore(); plate('RANKED BELOW', 330, 760, 46, K.red, K.paper, 1, -.03, pop(t, b0)); }
  label('SCHEMATIC', 140, 600, .8, K.ink, 18);
  topBand(540, 'rgba(30,24,40,.72)');
  popText('SERVICE WORK', 540, 388, 112, t, T.rank + .2, K.paper, -.015, '#14101e'); const p0 = wt(10, 'ranked') - .3; if (t > p0) plate('THEN: BELOW DESK JOBS', 540, 488, 44, K.must, K.ink, 1, .015, pop(t, p0));
}
function sceneMag(t) {
  decoBG(t, DECO.teal, '#123c3e');
  const r0 = wt(12, 'standing') - .4, up = E.io2(P(t, r0, r0 + 1.3)), k = E.o3(P(t, T.mag, T.mag + .5)), cy = lerp(1700, 0, k) - 46 * up;
  // lift-indicator track: the job's standing rising after the war
  ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(908, 610, 76, 660, 38); ctx.fill(); ctx.strokeStyle = 'rgba(243,232,207,.4)'; ctx.lineWidth = 4; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(926, 670 + i * 108); ctx.lineTo(966, 670 + i * 108); ctx.stroke(); }
  const my = lerp(1160, 690, up); ctx.fillStyle = K.must; rrect(918, my - 44, 56, 88, 12); ctx.fill(); if (t > r0) { ctx.fillStyle = K.ink; ctx.beginPath(); ctx.moveTo(946, my - 24); ctx.lineTo(966, my + 12); ctx.lineTo(926, my + 12); ctx.fill(); }
  ctx.save(); ctx.translate(470, cy + 940); ctx.rotate(-.03);
  ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-298, -328, 620, 680, 8); ctx.fill(); ctx.fillStyle = DECO.cream; rrect(-310, -340, 620, 680, 8); ctx.fill(); ctx.save(); rrect(-310, -340, 620, 680, 8); ctx.clip();
  ctx.fillStyle = K.red; ctx.fillRect(-310, -340, 620, 150); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, 340, 330, Math.PI, 0); ctx.fill(); ctx.strokeStyle = DECO.cream; ctx.lineWidth = 6; for (let i = 1; i < 8; i++) { const a = Math.PI + i * Math.PI / 8; ctx.beginPath(); ctx.moveTo(0, 340); ctx.lineTo(Math.cos(a) * 330, 340 + Math.sin(a) * 330); ctx.stroke(); }
  ctx.fillStyle = DECO.teal; ctx.fillRect(-310, -190, 620, 12); attendant(0, 350, .68, { uni: K.ink2, hat: K.red, arm: [150, -150] }); ctx.restore();
  txt('MODERN', 0, -226, font(900, 104), DECO.cream, 'center', 6); txt('PROFESSIONALS', -290, -150, font(800, 26, F.m), K.ink, 'left', 5);
  ctx.restore(); label('ILLUSTRATION · NOT A REAL MAGAZINE', 470, cy + 1318, .85, K.paper, 17);
  if (t > r0) plate('AFTER THE WAR: STANDING ROSE', 540, 1352 - 0, 40, K.must, K.ink, 1, .012, pop(t, r0 + .2));
  topBand(540, 'rgba(8,36,40,.64)');
  const m0 = Math.max(T.mag + .2, wt(11, 'modern') - 1.2); popText('MODERN', 540, 380, 124, t, m0, K.paper, -.015, '#062020'); popText('WORKING WOMEN', 540, 494, 100, t, m0 + .25, K.must, -.015, '#062020');
}

// ------------------------------------------------------------ 05 the strain
const TOWERS = [[40, 250, 560, '#1c2444'], [270, 190, 700, '#232d55'], [440, 170, 470, '#1c2444'], [880, 240, 620, '#232d55']];
function sceneSpread(t) {
  skyDusk('#172a55', '#8a4a62', '#f0a25a'); const G = 1340;
  const w0 = wt(13, 'tokyo') - .4, tu = E.o3(P(t, w0, w0 + .8));
  if (tu > 0) { ctx.save(); ctx.beginPath(); ctx.rect(560, G - 760 * tu, 360, 760 * tu + 4); ctx.clip(); const X = 740; ctx.lineCap = 'round';
    for (const sd of [-1, 1]) { ctx.strokeStyle = '#e2562f'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(X + sd * 160, G); ctx.quadraticCurveTo(X + sd * 50, G - 300, X + sd * 10, G - 720); ctx.stroke(); }
    ctx.lineWidth = 6; for (let i = 0; i < 9; i++) { const y0 = G - 40 - i * 62, y1 = y0 - 62, w = y => 160 * Math.pow(1 - (G - y) / 760, 2.1) + 8; ctx.strokeStyle = i % 2 ? '#f3ece0' : '#e2562f'; ctx.beginPath(); ctx.moveTo(X - w(y0), y0); ctx.lineTo(X + w(y1), y1); ctx.moveTo(X + w(y0), y0); ctx.lineTo(X - w(y1), y1); ctx.moveTo(X - w(y0), y0); ctx.lineTo(X + w(y0), y0); ctx.stroke(); }
    ctx.fillStyle = '#f3ece0'; rrect(X - 62, G - 330, 124, 44, 6); ctx.fill(); rrect(X - 30, G - 590, 60, 30, 5); ctx.fill(); ctx.strokeStyle = '#e2562f'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(X, G - 720); ctx.lineTo(X, G - 780); ctx.stroke();
    const ly = G - 30 - 290 * (.5 - .5 * Math.cos((t - w0) * 2.2)); ctx.fillStyle = '#ffe9a6'; rrect(X - 10, ly - 26, 20, 26, 4); ctx.fill(); ctx.restore(); }
  TOWERS.forEach(([x, w, h, c], i) => { const k = E.o3(P(t, T.spread + .1 + i * .18, T.spread + .7 + i * .18)), top = G - h * k; ctx.fillStyle = c; ctx.fillRect(x, top, w, h * k + 10); ctx.fillStyle = 'rgba(255,217,138,.75)'; const r = rng(i + 3); for (let yy = top + 26; yy < G - 30; yy += 44) for (let xx = x + 18; xx < x + w - 60; xx += 36) if (r() > .35) ctx.fillRect(xx, yy, 18, 24);
    ctx.fillStyle = '#0b1026'; ctx.fillRect(x + w - 44, top + 12, 30, h * k); const ly = top + 30 + (h * k - 70) * (.5 + .5 * Math.sin((t - T.spread) * (1.6 + i * .4) + i * 2)); ctx.fillStyle = '#ffe9a6'; rrect(x + w - 40, ly, 22, 30, 4); ctx.fill(); });
  ctx.fillStyle = '#0b1026'; ctx.fillRect(-60, G, W + 120, 800);
  if (tu > 0) plate('TOKYO TOWER', 740, 640, 40, K.red, K.paper, 1, .03, pop(t, w0 + .3));
  topBand(540, 'rgba(10,14,40,.6)');
  popText('POSTWAR', 540, 392, 150, t, T.spread + .2, K.paper, -.015, '#0a0e28'); const o0 = wt(13, 'office') - .3; if (t > o0) plate('INTO THE OFFICE TOWERS', 540, 490, 42, K.must, K.ink, 1, .015, pop(t, o0));
}
function tripsU(t) { return P(t, T.trips + .25, wt(14, 'half') - .1); }
function sceneTrips(t) {
  fillBG('#18203f', '#0b0f22'); const u = tripsU(t), ph = u * 13, n = Math.min(13, Math.ceil(ph)), fr = ph % 1, f = u >= 1 ? 0 : (Math.floor(ph) % 2 ? 1 - fr : fr), TOP = 600, BOT = 1360, SX = 110, SW = 300;
  ctx.fillStyle = '#060918'; ctx.fillRect(SX, TOP - 30, SW, BOT - TOP + 60); ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 3; for (let i = 0; i <= 8; i++) { const y = TOP + i * (BOT - TOP) / 8; ctx.beginPath(); ctx.moveTo(SX, y); ctx.lineTo(SX + SW, y); ctx.stroke(); }
  const cyB = lerp(BOT, TOP + 200, E.io2(f)), sp = u > 0 && u < 1 ? Math.sin(f * Math.PI) : 0, dirUp = Math.floor(ph) % 2 === 0;
  for (let i = 1; i <= 5; i++) { ctx.fillStyle = `rgba(255,217,138,${.09 * sp * (6 - i)})`; ctx.fillRect(SX + 30, cyB - 190 + (dirUp ? 1 : -1) * i * 34 * sp, SW - 60, 190); }
  ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(SX + SW / 2, TOP - 30); ctx.lineTo(SX + SW / 2, cyB - 190); ctx.stroke();
  carInside(SX + 30, cyB - 190, SW - 60, 190); ctx.strokeStyle = BR[1]; ctx.lineWidth = 8; ctx.strokeRect(SX + 30, cyB - 190, SW - 60, 190); attendant(SX + 150, cyB - 2, .24, { sil: '#2a1420' });
  // half-hour clock and trip counter
  const CX = 740, CY = 800, R = 180; ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.arc(CX + 8, CY + 10, R + 14, 0, TAU); ctx.fill(); ctx.fillStyle = DECO.cream; ctx.beginPath(); ctx.arc(CX, CY, R + 14, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(220,74,51,.35)'; ctx.beginPath(); ctx.moveTo(CX, CY); ctx.arc(CX, CY, R, -Math.PI / 2, -Math.PI / 2 + Math.PI * u); ctx.fill();
  ctx.strokeStyle = K.ink; ctx.lineWidth = 6; for (let i = 0; i < 12; i++) { const a = i * TAU / 12; ctx.beginPath(); ctx.moveTo(CX + Math.cos(a) * R * .86, CY + Math.sin(a) * R * .86); ctx.lineTo(CX + Math.cos(a) * R * .98, CY + Math.sin(a) * R * .98); ctx.stroke(); }
  const ha = -Math.PI / 2 + Math.PI * u; ctx.strokeStyle = K.red; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(CX + Math.cos(ha) * R * .8, CY + Math.sin(ha) * R * .8); ctx.stroke(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(CX, CY, 14, 0, TAU); ctx.fill();
  label('HALF AN HOUR', CX, CY + R + 62, 1, K.paper, 22);
  if (n > 0) { const kk = 1 + .18 * (1 - P(fr, 0, .35)) * (u < 1 ? 1 : 0); ctx.save(); ctx.translate(CX, 1250); ctx.scale(kk, kk); big(String(n), 0, 0, 200, K.must, 'center', '#05071a'); ctx.restore(); label('TRIPS UP AND DOWN', CX, 1310, 1, K.paper, 22); }
  topBand(540, 'rgba(8,10,30,.6)');
  popText('12–13 TRIPS', 540, 390, 128, t, Math.max(T.trips + .2, wt(14, '12') - 1.2), K.paper, -.015, '#05071a'); popText('IN 30 MINUTES', 540, 498, 98, t, wt(14, '12') - .2, K.must, -.015, '#05071a');
}
function sceneStrain(t) {
  fillBG(K.ink2, '#0e1430'); const a0 = wt(16, 'admired') - .4, ad = P(t, a0, a0 + .4);
  const X = 290, Y = 620, DW = 500, DH = 712; ctx.fillStyle = '#0b1026'; ctx.fillRect(X - 24, Y - 24, DW + 48, DH + 24); carInside(X, Y, DW, DH);
  if (ad > 0) { ctx.save(); ctx.beginPath(); ctx.rect(X, Y, DW, DH); ctx.clip(); ctx.globalAlpha = ad; rays(540, 1000, t, .16, .25, '255,240,190'); ctx.restore(); }
  const bw = .5 * E.io2(P(t, T.strain + .2, T.strain + 1.1)) * (1 - .8 * E.io2(ad)); attendant(540, 1330, .92, { sil: '#141b33', bow: bw, arm: [30, -30], arm2: [-10, -34] });
  ctx.fillStyle = '#0b1026'; ctx.fillRect(-60, 1332, W + 120, 800);
  const p0 = wt(15, 'pushy') - .3; if (t > p0) for (let i = 0; i < 4; i++) { const k = E.o3(P(t, p0 + i * .08, p0 + .5 + i * .08)), sd = i % 2 ? 1 : -1; hatMan(540 + sd * lerp(700, 330 + (i > 1 ? 110 : 0), k) + 6 * Math.sin(t * 9 + i), 1400 + (i > 1 ? 30 : 0), 2.5, '#060918'); }
  const tags = [['SORE LEGS', 250, 1200, wt(15, 'sore') - .25, -.03], ['STIFF SHOULDERS', 770, 800, wt(15, 'stiff') - .25, .03], ['PUSHY CUSTOMERS', 300, 690, p0, -.02]];
  tags.forEach(([s, x, y, t0, rot]) => { if (t > t0) plate(s, x, y, 42, K.red, K.paper, 1 - .7 * ad, rot, pop(t, t0)); });
  if (ad > 0) plate('YET: AN ADMIRED CITY JOB', 540, 990, 50, K.must, K.ink, 1, -.02, pop(t, a0));
  topBand(540, 'rgba(8,10,30,.62)');
  popText('THE STRAIN', 540, 420, 140, t, T.strain + .2, K.paper, -.015, '#05071a');
}

// ------------------------------------------------------------ 06 still running
const STEEL = ['#7d858f', '#cfd6dc', '#8b939c'];
function panel(x, y, lit, t) { ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(x - 82, y - 222, 180, 460, 16); ctx.fill(); ctx.fillStyle = '#aab2ba'; rrect(x - 90, y - 230, 180, 460, 16); ctx.fill(); ctx.strokeStyle = '#6f7780'; ctx.lineWidth = 5; rrect(x - 78, y - 218, 156, 436, 10); ctx.stroke();
  for (let i = 0; i < 8; i++) { const bx = x - 36 + (i % 2) * 72, by = y - 160 + Math.floor(i / 2) * 104, on = lit > i ? 1 : 0; ctx.fillStyle = on ? '#ffd45e' : '#e6eaee'; ctx.beginPath(); ctx.arc(bx, by, 26, 0, TAU); ctx.fill(); ctx.strokeStyle = on ? '#b88a1e' : '#6f7780'; ctx.lineWidth = 5; ctx.stroke(); if (on) { ctx.fillStyle = 'rgba(255,212,94,.25)'; ctx.beginPath(); ctx.arc(bx, by, 40, 0, TAU); ctx.fill(); } } }
function sceneAuto(t) {
  fillBG('#4a505c', '#262a33'); ctx.fillStyle = 'rgba(255,255,255,.03)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 900); ctx.fillStyle = '#1f2229'; ctx.fillRect(0, 1332, W, 800);
  const a0 = wt(17, 'automatic') - .9, go = E.io2(P(t, a0, a0 + 1.0)), X = 90, Y = 640, DW = 520, DH = 692;
  ctx.fillStyle = '#16181d'; ctx.fillRect(X - 20, Y - 20, DW + 40, DH + 20); carInside(X, Y, DW, DH);
  ctx.save(); ctx.beginPath(); ctx.rect(X, Y, DW, DH); ctx.clip(); ctx.globalAlpha = 1 - go; const kb = knob(X + 400, 1080, .55, .3); controller(X + 400, 1080, .55, .3); attendant(X + 200, 1330, .84, { sil: '#2a1420', arm: armTo(X + 200, 1330, .84, kb[0], kb[1]) }); ctx.restore();
  brassDoors(X, Y, DW, DH, 1 - E.io2(P(t, a0 + .7, a0 + 1.7)), STEEL, 0);
  const pk = pop(t, a0 + .2); if (pk > 0) { ctx.save(); ctx.translate(840, 990); ctx.scale(pk, pk); panel(0, 0, Math.floor(P(t, a0 + .5, a0 + 2.6) * 9), t); ctx.restore(); plate('AUTOMATIC', 840, 1300, 46, K.must, K.ink, 1, .03, pop(t, a0 + .5)); }
  const s0 = wt(17, 'slump') - .3; if (t > s0) plate('THE SLUMP', 350, 720, 50, K.red, K.paper, 1 - go, -.04, pop(t, s0));
  topBand(540, 'rgba(14,16,24,.62)');
  digits('1990s', t, Math.max(T.auto + .25, wt(17, '1990s') - 1.0), 405, 170, K.must, '#0a0c14'); const m0 = wt(17, 'most') - .3; if (t > m0) plate('MOST STORES SWITCH TO AUTOMATIC LIFTS', 540, 492, 36, K.paper, K.ink, 1, .012, pop(t, m0));
}
function sceneTaka(t) {
  hall(HALL_A); const X = 300, Y = 690, DW = 480, DH = 642, o0 = wt(18, 'attendants') - .5, op = E.io2(P(t, o0, o0 + 1.1));
  doorSurround(X, Y, DW, DH, HALL_A); dial(540, 630, 74, .15 + .7 * E.io2(P(t, T.taka, o0)));
  ctx.save(); ctx.beginPath(); ctx.rect(X, Y, DW, DH); ctx.clip(); carInside(X, Y, DW, DH); const la = .5 * Math.sin((t - o0) * 1.8) * op, kb = knob(X + 360, 1100, .5, la); controller(X + 360, 1100, .5, la); attendant(X + 180, 1330, .8, { sil: '#2a1420', arm: armTo(X + 180, 1330, .8, kb[0] - 4, kb[1] + 4) }); ctx.restore();
  brassDoors(X, Y, DW, DH, op); ctx.strokeStyle = BR[0]; ctx.lineWidth = 10; ctx.strokeRect(X, Y, DW, DH);
  for (const x of [210, 870]) { ctx.fillStyle = BR[0]; ctx.fillRect(x - 5, 800, 10, 50); ctx.fillStyle = '#fff3c4'; ctx.beginPath(); ctx.ellipse(x, 790, 26, 36, 0, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(255,235,170,.22)'; ctx.beginPath(); ctx.arc(x, 790, 70, 0, TAU); ctx.fill(); }
  plate('ILLUSTRATION · NOT FILMED', 540, 1352, 22, K.ink, K.paper, .9);
  const h0 = wt(18, 'otis') - .3; if (t > h0) plate('OTIS CARS FROM 1933', 540, 1290, 48, K.must, K.ink, 1, -.02, pop(t, h0));
  topBand(540, 'rgba(40,26,10,.66)');
  plate('NIHOMBASHI TAKASHIMAYA', 540, 280, 38, K.paper, K.ink, P(t, T.taka + .3, T.taka + .4), -.012, pop(t, T.taka + .3));
  const s0 = wt(18, 'still') - .3; popText('STILL DRIVEN', 540, 412, 104, t, s0, K.paper, -.015, '#2a1808'); popText('BY HAND', 540, 512, 104, t, s0 + .2, K.must, -.015, '#2a1808');
}
function sceneMatsu(t) {
  hall(HALL_B); const X = 250, Y = 690, DW = 480, DH = 642, o0 = wt(19, 'rides') - .5, op = E.io2(P(t, o0, o0 + 1.1)), au = wt(19, 'automated') - .35;
  doorSurround(X, Y, DW, DH, HALL_B); dial(490, 630, 74, .85 - .7 * E.io2(P(t, T.matsu, o0)));
  carInside(X, Y, DW, DH); ctx.save(); ctx.beginPath(); ctx.rect(X, Y, DW, DH); ctx.clip(); for (let i = 0; i < 3; i++) { const k = E.o3(P(t, o0 + .9 + i * .35, o0 + 2.2 + i * .35)); if (k > 0) mini(lerp(-80 - i * 60, X + 130 + i * 110, k), 1334, 2.6, ['#2a2f4f', '#5b2a30', '#274a48'][i]); } ctx.restore();
  { ctx.save(); ctx.beginPath(); ctx.rect(0, 540, X, 900); ctx.clip(); for (let i = 0; i < 3; i++) { const k = E.o3(P(t, o0 + .9 + i * .35, o0 + 2.2 + i * .35)); if (k > 0 && k < 1) mini(lerp(-80 - i * 60, X + 130 + i * 110, k), 1334, 2.6, ['#2a2f4f', '#5b2a30', '#274a48'][i]); } ctx.restore(); }
  brassDoors(X, Y, DW, DH, op); ctx.strokeStyle = BR[0]; ctx.lineWidth = 10; ctx.strokeRect(X, Y, DW, DH);
  // call buttons beside the door: nobody at the handle
  ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(826, 928, 110, 200, 14); ctx.fill(); ctx.fillStyle = BR[1]; rrect(820, 920, 110, 200, 14); ctx.fill(); for (let i = 0; i < 2; i++) { const on = i === 0 && t > au; ctx.fillStyle = on ? '#fff3c4' : '#6b4e12'; ctx.beginPath(); ctx.arc(875, 975 + i * 90, 28, 0, TAU); ctx.fill(); ctx.fillStyle = on ? K.red : BR[1]; ctx.beginPath(); const s = i ? 1 : -1; ctx.moveTo(875, 975 + i * 90 + s * 14); ctx.lineTo(889, 975 + i * 90 - s * 10); ctx.lineTo(861, 975 + i * 90 - s * 10); ctx.fill(); if (on) { ctx.fillStyle = 'rgba(255,243,196,.3)'; ctx.beginPath(); ctx.arc(875, 975, 48, 0, TAU); ctx.fill(); } }
  plate('ILLUSTRATION · NOT FILMED', 540, 1352, 22, K.ink, K.paper, .9);
  if (t > au) plate('AUTOMATED NOW', 600, 800, 56, K.red, K.paper, 1, -.03, pop(t, au));
  topBand(540, 'rgba(10,30,26,.66)');
  plate('MATSUZAKAYA UENO', 540, 280, 38, K.paper, K.ink, P(t, T.matsu + .3, T.matsu + .4), -.012, pop(t, T.matsu + .3));
  popText('ORIGINAL LIFTS', 540, 410, 100, t, wt(19, 'still') - .3, K.paper, -.015, '#06201a'); const y0 = wt(19, '1929') - .3; if (t > y0) plate('FROM 1929', 540, 500, 54, K.must, K.ink, 1, .015, pop(t, y0));
}

// ------------------------------------------------------------ 07 tease: smoke over a 1930s skyline (no harm shown)
const SKY30 = (() => { const r = rng(1932), a = []; let x = -30; while (x < W + 40) { const w = 90 + r() * 130, h = 120 + r() * 260; a.push([x, w, h, r() > .6]); x += w + 6; } return a; })();
function sceneTease(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1340); g.addColorStop(0, '#1d1830'); g.addColorStop(.6, '#5b3348'); g.addColorStop(1, '#c97a4a'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  const tt = t - T.tease, r = rng(8);
  for (let i = 0; i < 46; i++) { const sp = .05 + r() * .05, ph = (tt * sp + r()) % 1, bx = 520 + (r() - .5) * 90, x = bx + ph * (260 + r() * 260) + Math.sin(ph * 6 + i) * 40, y = 1010 - ph * 620, rad = 50 + ph * 190, a = .3 * Math.sin(ph * Math.PI) * P(tt, 0, 1.2); const sg = ctx.createRadialGradient(x, y, 0, x, y, rad); sg.addColorStop(0, `rgba(16,14,24,${a})`); sg.addColorStop(1, 'rgba(16,14,24,0)'); ctx.fillStyle = sg; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2); }
  SKY30.forEach(([x, w, h, step], i) => { ctx.fillStyle = i % 2 ? '#15121f' : '#1c1828'; ctx.fillRect(x, 1340 - h, w, h + 10); if (step) ctx.fillRect(x + w * .3, 1340 - h - 50, w * .4, 50); ctx.fillStyle = 'rgba(255,200,120,.5)'; const q = rng(i + 20); for (let yy = 1340 - h + 22; yy < 1310; yy += 40) for (let xx = x + 14; xx < x + w - 22; xx += 30) if (q() > .55) ctx.fillRect(xx, yy, 12, 18); });
  ctx.fillStyle = '#100e18'; ctx.fillRect(-60, 1338, W + 120, 800);
  const f0 = wt(21, 'famous') - .3, c0 = wt(21, 'changed') - .3, q0 = LS(22) - .15;
  if (t > f0) plate('THE FAMOUS STORY…', 420, 680, 50, K.paper, K.ink, 1, -.03, pop(t, f0)); if (t > c0) plate('…THAT IT CHANGED WHAT WOMEN WORE', 540, 790, 38, K.must, K.ink, 1, .012, pop(t, c0));
  if (t > q0) bubble(540, 1060, 620, 220, pop(t, q0), [['IS IT TRUE?', 104, K.red]], .2);
  topBand(540, 'rgba(16,10,24,.62)');
  digits('1932', t, Math.max(T.tease + .25, wt(20, '1932') - .5), 400, 190, K.must, '#0c0814'); const s0 = wt(20, 'fire') - .3; if (t > s0) plate('A FIRE AT SHIROKIYA', 540, 478, 46, K.red, K.paper, 1, .015, pop(t, s0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n, .25)); plate('EPISODE 8', 880, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 820 + i * 130 + 30 * (1 - a), 118, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 1030); ctx.lineTo(80 + 600 * u, 1030); ctx.stroke();
}

const TRIP0 = T.trips + .25, TRIP1 = wt(14, 'half') - .1;
window.FILM = {
  title: 'GOING UP', tag: 'EP 7 · JAPAN’S DEPARTMENT STORES',
  hotLines: [15],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.name, draw: sceneName }, { start: T.first, draw: sceneMap }, { start: T.ride, draw: sceneRide }, { start: T.hire, draw: sceneHire }, { start: T.handle, draw: sceneHandle }, { start: T.miss, draw: sceneMiss }, { start: T.rank, draw: sceneRank }, { start: T.mag, draw: sceneMag }, { start: T.spread, draw: sceneSpread }, { start: T.trips, draw: sceneTrips }, { start: T.strain, draw: sceneStrain }, { start: T.auto, draw: sceneAuto }, { start: T.taka, draw: sceneTaka }, { start: T.matsu, draw: sceneMatsu }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.name, .4], [T.first, .5], [T.ride, .4], [T.hire, .4], [T.handle, .4], [T.miss, .4], [T.rank, .5], [T.mag, .4], [T.spread, .5], [T.trips, .4], [T.strain, .4], [T.auto, .5], [T.taka, .5], [T.matsu, .5], [T.tease, .5], [T.end, .3]],
  chapters: [[0, '01', 'GOING UP'], [T.first, '02', 'WHO WAS FIRST'], [T.hire, '03', 'BY HAND'], [T.rank, '04', 'STANDING'], [T.spread, '05', 'THE STRAIN'], [T.auto, '06', 'STILL RUNNING'], [T.tease, '07', 'NEXT']],
  hits: [[.8, 8, .3], [wt(9, 'stopped') - .1, 12, .4], [wt(16, 'admired') - .4, 8, .3], [wt(18, 'still') - .3, 8, .3]],
  flashes: [[T.first, .3], [T.rank, .3], [T.spread, .3], [T.taka, .3], [T.end, .25]],
  events: {
    scene: [T.name, T.first, T.ride, T.hire, T.handle, T.miss, T.rank, T.mag, T.spread, T.trips, T.strain, T.auto, T.taka, T.matsu, T.tease, T.end],
    pop: [.3, wt(0, '1') - .2, wt(0, 'rebuilt') - .3, wt(1, 'new') - .3, wt(1, 'elevators') - .5, wt(2, 'lift') - .3, T.first + .35, wt(3, 'first') - .4, wt(4, 'kobe') - .35, wt(5, 'rode') - .2, wt(5, 'just') - .3, wt(6, 'eight') - .2, wt(6, 'women') - .3, wt(7, 'driven') - .4, wt(7, 'handle') - .4, wt(8, 'called') - .35, wt(9, 'sometimes') - .2, wt(10, 'ranked') - .3, wt(10, 'below') - .3, wt(13, 'office') - .3, wt(13, 'tokyo') - .1, wt(15, 'sore') - .25, wt(15, 'stiff') - .25, wt(15, 'pushy') - .3, wt(17, 'slump') - .3, wt(17, 'most') - .3, wt(17, 'automatic') - .4, T.taka + .3, wt(18, 'otis') - .3, T.matsu + .3, wt(19, '1929') - .3, wt(20, 'fire') - .3, wt(21, 'famous') - .3, wt(21, 'changed') - .3, LS(22) - .15, T.end + .1],
    stamp: [.55, wt(2, 'shk') - .35, T.first + .2, wt(4, 'kobe') - .35, T.ride + .2, wt(5, 'just') - .1, wt(6, 'seven') - .5, wt(8, 'steered') - .3, T.miss + .2, T.rank + .2, wt(11, 'modern') - 1.2, T.spread + .2, wt(14, '12') - .2, T.strain + .2, wt(16, 'admired') - .4, wt(17, '1990s') - 1.0, wt(18, 'still') - .3, wt(19, 'still') - .3, wt(19, 'automated') - .35, wt(20, '1932') - .5],
    doors: [wt(1, 'women') - .6, wt(18, 'attendants') - .5, wt(19, 'rides') - .5], ding: [wt(1, 'women') - .7, wt(5, 'floor') + .3, wt(18, 'attendants') - .6, wt(19, 'rides') - .6],
    lever: [T.name, T.handle], clunk: [wt(9, 'stopped') - .1], rise: [wt(5, 'rode') - .3, wt(12, 'standing') - .4],
    tick: Array.from({ length: 13 }, (_, i) => TRIP0 + (TRIP1 - TRIP0) * i / 13), autoSwitch: [wt(17, 'automatic') - .9], smoke: [T.tease], end: [T.end],
  },
};
