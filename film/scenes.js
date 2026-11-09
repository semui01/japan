// "Which prefecture in Japan has the most foreign residents?" — 9:16 data short.
// One persistent world (a projected map of Japan) with a keyframed camera; every beat keyed to a narrated word.
// Data: Immigration Services Agency of Japan, foreign residents at end of June 2026 (released 16 Oct 2026).

// ------------------------------------------------------------------ data
const merc = lat => -Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)) * 180 / Math.PI;
const LL = (lon, lat) => [lon, merc(lat)];
const GP = {}; for (const p of GEO.prefs) GP[p.id] = p;
const CEN = id => GP[id].c;
const TOTAL = 4281026;
const PR = [
  { rank: 5, id: 11, en: 'SAITAMA', ja: '埼玉県', n: 305867, d: 14930, col: '#a28dff', line: 3, word: 'saitama' },
  { rank: 4, id: 14, en: 'KANAGAWA', ja: '神奈川県', n: 331515, d: 14162, col: '#3fd9c4', line: 6, word: 'kanagawa' },
  { rank: 3, id: 23, en: 'AICHI', ja: '愛知県', n: 369849, d: 12049, col: '#57a8ff', line: 9, word: 'aichi' },
  { rank: 2, id: 27, en: 'OSAKA', ja: '大阪府', n: 389846, d: 14527, col: '#ff7f97', line: 13, word: 'osaka' },
  { rank: 1, id: 13, en: 'TOKYO', ja: '東京都', n: 824486, d: 23048, col: '#ffc54a', line: 17, word: 'tokyo' },
];
for (let i = 0; i < PR.length; i++) {
  const p = PR[i];
  p.tR = wt(p.line, p.word);                                   // name spoken → reveal
  p.tIn = p.rank === 1 ? LS(16) - .1 : LS(p.line) - .15;       // card enters
  p.tN = LS(p.rank === 1 ? 18 : p.line + 1) - .05;             // counter starts with the number's line
  p.slot = 5 - p.rank;
}
for (let i = 0; i < PR.length; i++) PR[i].tOut = i < 4 ? PR[i + 1].tIn : LB(21);
const BY = {}; for (const p of PR) BY[p.en] = p;
const GOLD = '#ffc54a', GREEN = '#4dffa6', INK = 'rgba(8,16,32,.86)';
const hexA = (h, a) => { const n = parseInt(h.slice(1), 16); return `rgba(${n >> 16},${n >> 8 & 255},${n & 255},${a})`; };
const mix = (h, k) => { const n = parseInt(h.slice(1), 16); const f = c => Math.round(c + (255 - c) * k); return `rgb(${f(n >> 16)},${f(n >> 8 & 255)},${f(n & 255)})`; };
const dark = (h, k) => { const n = parseInt(h.slice(1), 16); const f = c => Math.round(c * k); return `rgb(${f(n >> 16)},${f(n >> 8 & 255)},${f(n & 255)})`; };
const JPF = (w, s) => `${w} ${s}px NotoJP`;
const fmt = n => Math.round(n).toLocaleString('en-US');

// ------------------------------------------------------------------ time anchors
const T = {
  q: LS(0), rec: wt(1, 'record') - .25, rail: wt(2, 'top') - .1, cd: LB(3),
  sai: BY.SAITAMA.tR, kan: BY.KANAGAWA.tR, aic: BY.AICHI.tR, osa: BY.OSAKA.tR, tok: BY.TOKYO.tR,
  badge: wt(5, '15000') - .1, china: wt(8, 'chinatown') - .35, car: wt(11, 'car') - .3, was2: wt(12, 'number') - .1, rival: wt(12, 'rival') - .1,
  slope: LS(15) - .1, comb: LS(19) - .1, one5: wt(20, '1') - .15, fin: LB(21), half: wt(21, 'half') - .2, home: LS(22) - .05,
  end: TL[TL.length - 1].e + .25,
};
// intro particles: 428 dots = 4.28 million, flying in and landing across Japan
const NPT = GEO.pts.length / 2, PFLY = .85;
const PT = []; { const r = rng(11); for (let i = 0; i < NPT; i++) {
  const west = r() < .72, ang = west ? lerp(2.2, 3.9, r()) : lerp(-1.1, 1.6, r());
  PT.push({ x: GEO.pts[i * 2], y: GEO.pts[i * 2 + 1], ang, rad: lerp(1150, 1500, r()), bend: (r() < .5 ? -1 : 1) * lerp(.18, .5, r()),
    l: T.rec + (i / NPT) * 1.35 + r() * .12, hue: r() });
} PT.sort((a, b) => a.l - b.l); }
const landN = t => { let n = 0; for (const p of PT) if (t >= p.l + PFLY) n++; return n; };

// ------------------------------------------------------------------ camera (projected units: x = lon°, y = mercator°; s = px per unit)
const cS = CEN(11), cK = CEN(14), cA = CEN(23), cO = CEN(27), cT = CEN(13), JP = [137.9, -41.4], REG = [137.85, -37.72];
const K = [
  [0, JP[0], JP[1] - .4, 47, 1040],
  [LB(3) - .45, JP[0], JP[1], 55, 1040, 'lin'],
  [T.sai + .2, cS[0], cS[1], 560, 830, 'io'],
  [LB(6) - .25, cS[0] + .04, cS[1] + .01, 600, 830, 'lin'],
  [T.kan + .25, cK[0], cK[1], 610, 820, 'io'],
  [LB(9) - .3, cK[0], cK[1], 650, 820, 'lin'],
  [T.aic + .3, cA[0], cA[1], 450, 820, 'io', .55],
  [T.rival - .1, cA[0] - .02, cA[1], 480, 820, 'lin'],
  [LB(13) - .05, lerp(cA[0], cO[0], .4), lerp(cA[1], cO[1], .4), 330, 760, 'io'],
  [T.osa + .3, cO[0], cO[1], 400, 650, 'io'],
  [LB(16) - .1, cO[0], cO[1], 420, 650, 'lin'],
  [T.tok - .05, cT[0], cT[1], 470, 720, 'io', .62],
  [T.fin, cT[0], cT[1], 520, 720, 'lin'],
  [T.fin + 1.7, REG[0], REG[1], 168, 850, 'io'],
  [DUR, REG[0], REG[1] - .02, 178, 850, 'lin'],
];
const FLIGHTS = [[11, 14, K[3][0], K[4][0]], [14, 23, K[5][0], K[6][0]], [23, 27, K[7][0], K[9][0]], [27, 13, K[10][0], K[11][0]]];
function cam(t) {
  let i = 0; while (i < K.length - 2 && t >= K[i + 1][0]) i++;
  const a = K[i], b = K[i + 1], u = clamp((t - a[0]) / (b[0] - a[0])), e = b[5] === 'io' ? E.io(u) : u;
  const s = a[3] * Math.pow(b[3] / a[3], e) * (1 - (b[6] || 0) * Math.sin(Math.PI * e));
  // keep the zoom and pan coherent: interpolate the centre in a scale-weighted way so targets don't slide off
  const r = b[3] / a[3], w = (1 - Math.pow(r, -e)) / (1 - 1 / r);
  const ce = b[5] === 'io' && Math.abs(Math.log(r)) > .2 ? w : e;
  return { x: lerp(a[1], b[1], ce), y: lerp(a[2], b[2], ce), s, fy: lerp(a[4], b[4], e) };
}
let CM = { x: 0, y: 0, s: 1, fy: 0 };
const SX = X => (X - CM.x) * CM.s + W / 2, SY = Y => (Y - CM.y) * CM.s + CM.fy;
const ID = () => ctx.setTransform(1, 0, 0, 1, SH.x, SH.y);
const mapXf = (dx = 0, dy = 0) => ctx.setTransform(CM.s, 0, 0, CM.s, W / 2 - CM.x * CM.s + SH.x + dx, CM.fy - CM.y * CM.s + SH.y + dy);

// ------------------------------------------------------------------ geometry caches
let PATH = {}, HL = {}, BB = {}, ICON = {}, LAND, COAST, ALLP, SPARK = [], TONE = {};
function ringPath(P, r) { P.moveTo(r[0], r[1]); for (let i = 2; i < r.length; i += 2) P.lineTo(r[i], r[i + 1]); P.closePath(); }
function initGeo() {
  ALLP = new Path2D();
  const tr = rng(5);
  for (const p of GEO.prefs) {
    const P = new Path2D(), Hp = new Path2D(); let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (const r of p.rings) { ringPath(P, r); ringPath(ALLP, r);
      let mx = 0, my = 0; for (let i = 0; i < r.length; i += 2) { mx += r[i]; my += r[i + 1]; } mx /= r.length / 2; my /= r.length / 2;
      if (Math.hypot(mx - p.c[0], my - p.c[1]) > .9) continue;           // far islands (Izu, Ogasawara) stay unlit
      ringPath(Hp, r); for (let i = 0; i < r.length; i += 2) { x0 = Math.min(x0, r[i]); x1 = Math.max(x1, r[i]); y0 = Math.min(y0, r[i + 1]); y1 = Math.max(y1, r[i + 1]); } }
    PATH[p.id] = P; HL[p.id] = Hp; BB[p.id] = [x0, y0, x1, y1]; TONE[p.id] = tr();
    // icon: main polygon normalised to a unit box
    const r = p.icon; let a0 = 1e9, b0 = 1e9, a1 = -1e9, b1 = -1e9;
    for (let i = 0; i < r.length; i += 2) { a0 = Math.min(a0, r[i]); a1 = Math.max(a1, r[i]); b0 = Math.min(b0, r[i + 1]); b1 = Math.max(b1, r[i + 1]); }
    const sc = 1 / Math.max(a1 - a0, b1 - b0), cx = (a0 + a1) / 2, cy = (b0 + b1) / 2, I = new Path2D();
    I.moveTo((r[0] - cx) * sc, (r[1] - cy) * sc); for (let i = 2; i < r.length; i += 2) I.lineTo((r[i] - cx) * sc, (r[i + 1] - cy) * sc); I.closePath();
    ICON[p.id] = I;
  }
  LAND = new Path2D(); for (const r of GEO.land) ringPath(LAND, r);
  COAST = new Path2D(); for (const r of GEO.coast) ringPath(COAST, r);
  const r = rng(77); for (let i = 0; i < 70; i++) SPARK.push({ a: r() * TAU, v: lerp(160, 520, r()), s: lerp(2, 6, r()), d: lerp(.6, 1.3, r()), c: r() < .7 ? GOLD : '#fff' });
}

// ------------------------------------------------------------------ drawing helpers
const DWC = {};
function numTxt(str, x, y, f, col, align = 'left') {           // tabular digits so counters don't jitter
  ctx.font = f; if (!DWC[f]) DWC[f] = Math.max(...'0123456789'.split('').map(d => ctx.measureText(d).width));
  const dw = DWC[f], ws = [...str].map(ch => /[0-9]/.test(ch) ? dw : ctx.measureText(ch).width), tw = ws.reduce((a, b) => a + b, 0);
  let cx = align === 'center' ? x - tw / 2 : align === 'right' ? x - tw : x;
  ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  [...str].forEach((ch, i) => { ctx.fillText(ch, cx + ws[i] / 2, y); cx += ws[i]; }); return tw;
}
function tw(s, f, ls = 0) { ctx.font = f; ctx.letterSpacing = ls + 'px'; const w = ctx.measureText(s).width; ctx.letterSpacing = '0px'; return w; }
function glass(x, y, w, h, r, col, a, fillA = .84) {
  if (a <= 0) return;
  ctx.save(); ctx.globalAlpha *= a;
  ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 40; ctx.shadowOffsetY = 14;
  ctx.fillStyle = `rgba(7,14,30,${fillA})`; rrect(x, y, w, h, r); ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.save(); rrect(x, y, w, h, r); ctx.clip();
  const s = ctx.createLinearGradient(0, y, 0, y + h * .6); s.addColorStop(0, 'rgba(255,255,255,.075)'); s.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = s; ctx.fillRect(x, y, w, h * .6);
  const gl = ctx.createRadialGradient(x, y, 0, x, y, w * .7); gl.addColorStop(0, hexA(col, .16)); gl.addColorStop(1, hexA(col, 0));
  ctx.fillStyle = gl; ctx.fillRect(x, y, w, h); ctx.restore();
  const g = ctx.createLinearGradient(x, y, x + w, y + h); g.addColorStop(0, hexA(col, .95)); g.addColorStop(.55, hexA(col, .22)); g.addColorStop(1, hexA(col, .6));
  ctx.strokeStyle = g; ctx.lineWidth = 2.5; rrect(x + 1.25, y + 1.25, w - 2.5, h - 2.5, r - 1); ctx.stroke();
  ctx.restore();
}
function pill(x, y, label, f, bg, fg, a = 1, align = 'center', padX = 18, h = 46) {
  if (a <= 0) return 0; const w = tw(label, f, 1) + padX * 2, x0 = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
  ctx.save(); ctx.globalAlpha *= a; ctx.shadowColor = 'rgba(0,0,0,.5)'; ctx.shadowBlur = 18; ctx.fillStyle = bg; rrect(x0, y - h / 2, w, h, h / 2); ctx.fill();
  ctx.shadowColor = 'transparent'; txt(label, x0 + w / 2, y + 1, f, fg, 'center', 1, 'middle'); ctx.restore(); return w;
}
function drawIcon(id, x, y, size, col, a = 1, glow = 0) {
  ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(size, size);
  if (glow > 0) { ctx.shadowColor = hexA(col, .8 * glow); ctx.shadowBlur = 26 * glow; }
  const g = ctx.createLinearGradient(-.5, -.5, .5, .5); g.addColorStop(0, mix(col, .45)); g.addColorStop(1, col);
  ctx.fillStyle = g; ctx.fill(ICON[id]); ctx.shadowColor = 'transparent';
  ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = 1.6 / size; ctx.stroke(ICON[id]); ctx.restore();
}
function qmark(x, y, size, a, col = 'rgba(255,255,255,.75)') { txt('?', x, y + size * .36, font(900, size), col, 'center'); }
function crown(x, y, s, col) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; ctx.beginPath();
  ctx.moveTo(-1, .55); ctx.lineTo(-1, -.35); ctx.lineTo(-.5, .1); ctx.lineTo(0, -.7); ctx.lineTo(.5, .1); ctx.lineTo(1, -.35); ctx.lineTo(1, .55); ctx.closePath(); ctx.fill();
  for (const px of [-1, 0, 1]) { ctx.beginPath(); ctx.arc(px, px === 0 ? -.78 : -.42, .14, 0, TAU); ctx.fill(); } ctx.restore();
}
function gear(x, y, r, rot, col) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = col; ctx.beginPath();
  for (let i = 0; i < 16; i++) { const a0 = i / 16 * TAU, rr = i % 2 ? r * .78 : r; ctx.lineTo(Math.cos(a0) * rr, Math.sin(a0) * rr); ctx.lineTo(Math.cos(a0 + TAU / 16) * rr, Math.sin(a0 + TAU / 16) * rr); }
  ctx.closePath(); ctx.fill(); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(0, 0, r * .36, 0, TAU); ctx.fill(); ctx.restore();
}
function person(x, y, s, col) {
  ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y - s * .62, s * .26, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - s * .42, y + s * .42); ctx.quadraticCurveTo(x - s * .44, y - s * .26, x, y - s * .28); ctx.quadraticCurveTo(x + s * .44, y - s * .26, x + s * .42, y + s * .42); ctx.closePath(); ctx.fill();
}

// ------------------------------------------------------------------ the map world
function prefState(p, t) {                                     // revealed fill / lift as functions of t
  const on = P(t, p.tR - .05, p.tR + .35), act = t >= p.tR - .05 && t < p.tOut + .3;
  let lift = act ? E.oBack(P(t, p.tR - .05, p.tR + .55)) * (1 - E.io(P(t, p.tOut - .15, p.tOut + .45))) : 0;
  const fin = E.io(P(t, T.fin + .6, T.fin + 1.6)); lift = Math.max(lift, .45 * fin);
  return { on, lift, fill: on * lerp(.62, 1, Math.max(lift, fin)) };
}
function drawMap(t) {
  const s = CM.s;
  // ocean
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#08203d'); g.addColorStop(.55, '#061629'); g.addColorStop(1, '#030b17');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const rg = ctx.createRadialGradient(W / 2, CM.fy, 0, W / 2, CM.fy, H * .7); rg.addColorStop(0, 'rgba(40,110,190,.16)'); rg.addColorStop(1, 'rgba(40,110,190,0)');
  ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
  // graticule
  const step = s < 120 ? 5 : s < 260 ? 1 : .5;
  ctx.strokeStyle = 'rgba(120,190,255,.07)'; ctx.lineWidth = 1; ctx.beginPath();
  const lon0 = CM.x - W / 2 / s, lon1 = CM.x + W / 2 / s;
  for (let lo = Math.ceil(lon0 / step) * step; lo < lon1; lo += step) { const x = SX(lo); ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let la = 20; la < 50; la += step) { const y = SY(merc(la)); if (y > 0 && y < H) { ctx.moveTo(0, y); ctx.lineTo(W, y); } }
  ctx.stroke();
  // neighbouring land
  mapXf(); ctx.lineJoin = 'round'; ctx.fillStyle = '#101c2e'; ctx.fill(LAND); ctx.strokeStyle = 'rgba(120,170,230,.18)'; ctx.lineWidth = 1.2 / s; ctx.stroke(LAND);
  // coast glow
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  ctx.strokeStyle = 'rgba(70,170,255,.07)'; ctx.lineWidth = 14 / s; ctx.stroke(COAST);
  ctx.strokeStyle = 'rgba(70,170,255,.10)'; ctx.lineWidth = 6 / s; ctx.stroke(COAST); ctx.restore();
  // prefectures: subtle mosaic of tones
  const vx0 = CM.x - W / 2 / s, vx1 = CM.x + W / 2 / s, vy0 = CM.y - CM.fy / s, vy1 = CM.y + (H - CM.fy) / s;
  for (const p of GEO.prefs) {
    const b = BB[p.id]; if (b[2] < vx0 || b[0] > vx1 || b[3] < vy0 || b[1] > vy1) continue;
    const k = TONE[p.id]; ctx.fillStyle = `rgb(${27 + k * 9 | 0},${42 + k * 11 | 0},${64 + k * 14 | 0})`; ctx.fill(PATH[p.id]);
  }
  ctx.strokeStyle = 'rgba(150,195,245,.22)'; ctx.lineWidth = 1.1 / s; ctx.stroke(ALLP);
  ctx.strokeStyle = 'rgba(150,215,255,.55)'; ctx.lineWidth = 1.5 / s; ctx.stroke(COAST);
  // revealed prefectures: flat colour, then the active one lifted as a slab
  const st = PR.map(p => [p, prefState(p, t)]).filter(([, q]) => q.on > 0).sort((a, b) => a[1].lift - b[1].lift);
  for (const [p, q] of st) drawPref(p, q, t);
  ctx.lineJoin = 'miter'; ID();
}
function drawPref(p, q, t) {
  const s = CM.s, path = HL[p.id], b = BB[p.id], dep = 18 * q.lift;
  if (q.lift > .02) {
    mapXf(0, 0); ctx.save(); ctx.shadowColor = `rgba(0,0,0,${.65 * Math.min(1, q.lift)})`; ctx.shadowBlur = 34; ctx.shadowOffsetY = 18 + dep;
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fill(path); ctx.restore();
    for (let k = 0; k < dep; k += 2) { mapXf(0, -k); ctx.fillStyle = dark(p.col, .38 + .25 * k / dep); ctx.fill(path); }
  }
  mapXf(0, -dep);
  const g = ctx.createLinearGradient(b[0], b[1], b[2], b[3]); g.addColorStop(0, mix(p.col, .35)); g.addColorStop(1, p.col);
  ctx.save(); ctx.globalAlpha = q.fill; ctx.fillStyle = g; ctx.fill(path);
  ctx.strokeStyle = mix(p.col, .6); ctx.lineWidth = 2.2 / s; ctx.stroke(path);
  if (q.lift > .02) { ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = .25 + .15 * Math.sin(t * 5); ctx.strokeStyle = p.col; ctx.lineWidth = 10 / s; ctx.stroke(path); }
  ctx.restore();
}
function arcPt(a, b, u, bend = .22) {                       // quadratic arc in projected space
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], cx = mx + dy * bend, cy = my - dx * bend;
  return [(1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * cx + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * cy + u * u * b[1]];
}
function drawFlights(t) {
  for (const [ia, ib, t0, t1] of FLIGHTS) {
    if (t < t0 || t > t1 + 1.2) continue;
    const a = CEN(ia), b = CEN(ib), u = E.io(P(t, t0, t1)), fade = 1 - P(t, t1 + .3, t1 + 1.2);
    ctx.save(); ctx.globalAlpha = fade; ctx.setLineDash([10, 9]); ctx.lineDashOffset = -t * 40; ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 3;
    ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 8; ctx.beginPath();
    for (let k = 0; k <= 40; k++) { const q = arcPt(a, b, u * k / 40); k ? ctx.lineTo(SX(q[0]), SY(q[1])) : ctx.moveTo(SX(q[0]), SY(q[1])); }
    ctx.stroke(); ctx.setLineDash([]);
    const h = arcPt(a, b, u), hx = SX(h[0]), hy = SY(h[1]), o = arcPt(a, b, 0);
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(SX(o[0]), SY(o[1]), 7, 0, TAU); ctx.fill();
    if (u < 1) { ctx.globalCompositeOperation = 'lighter'; const gg = ctx.createRadialGradient(hx, hy, 0, hx, hy, 34); gg.addColorStop(0, 'rgba(255,255,255,.95)'); gg.addColorStop(1, 'rgba(120,200,255,0)'); ctx.fillStyle = gg; ctx.fillRect(hx - 34, hy - 34, 68, 68); }
    ctx.restore();
  }
}
// pinned map marker: pulsing dot, leader line, pill label
function mapPin(lon, lat, label, sub, col, a, t, up = 150, icon) {
  if (a <= 0) return; const [X, Y] = LL(lon, lat), x = SX(X), y = SY(Y), e = E.o3(clamp(a * 1.4));
  ctx.save(); ctx.globalAlpha = clamp(a * 2);
  for (let k = 0; k < 2; k++) { const ph = (t * .9 + k * .5) % 1; ctx.strokeStyle = hexA(col, .8 * (1 - ph)); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 8 + ph * 34, 0, TAU); ctx.stroke(); }
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 8, 0, TAU); ctx.fill(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 5, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(x, y - 10); ctx.lineTo(x, y - 10 - (up - 40) * e); ctx.stroke();
  const ly = y - up; ctx.globalAlpha = clamp(a * 2 - .6);
  const f = font(850, 30), w = tw(label, f, 2) + (icon ? 96 : 52), h = sub ? 84 : 56, bx = clamp(x - w / 2, 40, W - 40 - w);
  glass(bx, ly - h + 10, w, h, 18, col, 1, .9);
  if (icon) icon(bx + 44, ly - h / 2 + 10);
  txt(label, bx + (icon ? 76 : 26), ly - (sub ? 34 : 9), f, '#fff', 'left', 2);
  if (sub) txt(sub, bx + (icon ? 76 : 26), ly + 2, JPF(600, 22), 'rgba(230,240,255,.75)', 'left', 1);
  ctx.restore();
}

// ------------------------------------------------------------------ overlays
const CARD = { x: 56, y: 222, w: 968, h: 236 };
function drawCard(p, t) {
  const a = P(t, p.tIn, p.tIn + .35) * (1 - P(t, p.tOut - .05, p.tOut + .25)); if (a <= 0) return;
  const e = E.oBack(P(t, p.tIn, p.tIn + .5)), ex = E.i2(P(t, p.tOut - .05, p.tOut + .25));
  const { x, w, h } = CARD, y = CARD.y + 40 * (1 - e) - 50 * ex;
  const known = t >= p.tR - .02, col = known ? p.col : '#8fa3c0';
  ctx.save(); ctx.globalAlpha = a;
  glass(x, y, w, h, 30, col, 1);
  // icon tile
  const ix = x + 28, iy = y + 28, is = h - 56;
  ctx.fillStyle = 'rgba(255,255,255,.04)'; rrect(ix, iy, is, is, 22); ctx.fill(); ctx.strokeStyle = hexA(col, .35); ctx.lineWidth = 1.5; ctx.stroke();
  const rv = E.oBack(P(t, p.tR - .02, p.tR + .45));
  if (known) drawIcon(p.id, ix + is / 2, iy + is / 2, is * .78 * lerp(.4, 1, rv), p.col, 1, 1);
  else { ctx.globalAlpha = a * (.55 + .25 * Math.sin(t * 7)); qmark(ix + is / 2, iy + is / 2, 120, 1); ctx.globalAlpha = a; }
  // text
  const tx = ix + is + 34;
  if (p.rank === 1 && known) crown(tx + 20, y + 52, 19, GOLD);
  txt(p.rank === 1 ? 'No.1' : 'No.' + p.rank, tx + (p.rank === 1 && known ? 50 : 0), y + 66, font(800, 32), known ? p.col : GOLD, 'left', 3);
  if (known) {
    const name = p.en.slice(0, Math.ceil(p.en.length * P(t, p.tR - .02, p.tR + .25)));
    const nf = font(900, p.en.length > 6 ? 70 : 78), nw = tw(p.en, nf, 1);
    ctx.save(); ctx.shadowColor = hexA(p.col, .5); ctx.shadowBlur = 20; txt(name, tx - 3, y + 142, nf, '#fff', 'left', 1); ctx.restore();
    ctx.globalAlpha = a * P(t, p.tR + .2, p.tR + .6); txt(p.ja, tx + nw + 16, y + 138, JPF(700, 34), 'rgba(230,240,255,.62)', 'left'); ctx.globalAlpha = a;
  } else {
    ctx.globalAlpha = a * (.6 + .3 * Math.sin(t * 9)); txt('? ? ?', tx, y + 142, font(900, 78), '#c9d6ea', 'left', 6); ctx.globalAlpha = a;
  }
  // counter
  if (t > p.tN - .1) {
    const c = p.n * E.o3(P(t, p.tN, p.tN + 1.25)), na = P(t, p.tN - .1, p.tN + .15);
    ctx.globalAlpha = a * na; const nwid = numTxt(fmt(c), tx, y + 206, font(850, 50), p.col);
    txt('foreign residents', tx + nwid + 14, y + 204, font(600, 24), 'rgba(225,236,255,.7)');
    ctx.globalAlpha = a;
  }
  ctx.restore();
}
const RAIL = { y: 1262, h: 144, sw: 174, gap: 14 };
function drawRail(t) {
  const a0 = P(t, T.rail, T.rail + .4) * (1 - P(t, T.end, T.end + .4)); if (a0 <= 0) return;
  const x0 = (W - (5 * RAIL.sw + 4 * RAIL.gap)) / 2;
  for (const p of [...PR].sort((a, b) => b.rank - a.rank)) {
    const i = p.slot, sx = x0 + i * (RAIL.sw + RAIL.gap), ap = E.oBack(P(t, T.rail + i * .08, T.rail + i * .08 + .45));
    if (ap <= 0) continue;
    const hop = T.home < t ? Math.max(0, Math.sin(clamp((t - T.home - i * .14) / .32) * Math.PI)) * 22 : 0;
    const fu = P(t, p.tR + .25, p.tR + .65), flip = Math.abs(Math.cos(fu * Math.PI)), shown = fu >= .5;
    const act = t >= p.tR && t < p.tOut, fin = t > T.fin + .6;
    const cy = RAIL.y + RAIL.h / 2 - hop;
    ctx.save(); ctx.globalAlpha = a0 * clamp(ap); ctx.translate(sx + RAIL.sw / 2, cy); ctx.scale(flip * ap, ap);
    const col = shown ? p.col : '#6f86a8', x = -RAIL.sw / 2, y = -RAIL.h / 2;
    if (act && shown) { ctx.shadowColor = hexA(p.col, .9); ctx.shadowBlur = 30; }
    ctx.fillStyle = shown ? 'rgba(10,20,40,.92)' : 'rgba(10,18,34,.82)'; rrect(x, y, RAIL.sw, RAIL.h, 18); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.strokeStyle = shown ? hexA(p.col, act || fin ? 1 : .6) : 'rgba(140,165,200,.45)'; ctx.lineWidth = act ? 3.5 : 2; ctx.stroke();
    txt(p.rank === 1 ? '#1' : '#' + p.rank, 0, y + 32, font(800, 24), shown ? p.col : GOLD, 'center', 1);
    if (shown) { drawIcon(p.id, 0, 2, 64, p.col, 1, act ? .8 : .3); txt(p.en, 0, y + RAIL.h - 16, font(800, p.en.length > 6 ? 20 : 23), '#fff', 'center', 1); }
    else { ctx.globalAlpha *= .8; qmark(0, 12, 62, 1, col); }
    ctx.restore();
  }
}
function drawHeader(t) {
  const a = P(t, T.cd - .2, T.cd + .4) * (1 - P(t, T.end, T.end + .3)); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a;
  ctx.fillStyle = GOLD; ctx.beginPath(); ctx.arc(70, 190, 6, 0, TAU); ctx.fill();
  txt('FOREIGN RESIDENTS BY PREFECTURE', 88, 198, font(800, 22), 'rgba(235,243,255,.92)', 'left', 3);
  txt('JUN 2026', W - 60, 198, font(700, 20, F.m), GOLD, 'right', 2);
  ctx.restore();
}
function drawIntro(t) {
  // hook question
  const qa = 1 - P(t, LS(1) - .25, LS(1) + .15); if (qa > 0) {
    const L = [['Which prefecture', 'which'], ['in Japan has the', 'in'], ['most', 'most'], ['foreign residents?', 'foreign']];
    ctx.save(); ctx.globalAlpha = qa;
    txt('JAPAN · 2026', W / 2, 300, font(700, 24, F.m), GOLD, 'center', 6);
    L.forEach(([s, w], i) => {
      const t0 = Math.min(wt(0, w), LS(0) + i * .45) - .15, e = E.oBack(P(t, t0, t0 + .45)), y = [400, 492, 612, 716][i];
      if (e <= 0) return; ctx.save(); ctx.globalAlpha = qa * P(t, t0, t0 + .2); ctx.translate(W / 2, y); ctx.scale(lerp(.7, 1, e), lerp(.7, 1, e));
      ctx.shadowColor = 'rgba(0,0,0,.7)'; ctx.shadowBlur = 24;
      if (i === 2) txt(s, 0, 0, font(900, 108), GOLD, 'center', 2);
      else txt(s, 0, 0, font(900, i === 3 ? 84 : 76), i === 3 ? GOLD : '#fff', 'center', 1);
      ctx.restore();
    });
    ctx.restore();
  }
  // record counter
  const ca = P(t, T.rec - .1, T.rec + .3) * (1 - P(t, T.cd - .3, T.cd + .15)); if (ca > 0) {
    const n = landN(t), v = n >= NPT ? TOTAL : TOTAL * n / NPT, yy = 450 - 40 * E.io(P(t, T.rail - .2, T.cd));
    ctx.save(); ctx.globalAlpha = ca;
    txt('FOREIGN RESIDENTS IN JAPAN', W / 2, yy - 128, font(800, 26), 'rgba(235,243,255,.9)', 'center', 4);
    ctx.save(); ctx.shadowColor = 'rgba(255,170,40,.75)'; ctx.shadowBlur = 40; numTxt(fmt(v), W / 2, yy, font(900, 132), GOLD, 'center'); ctx.restore();
    const done = PT[PT.length - 1].l + PFLY;
    if (t > done) { const e = E.oBack(P(t, done, done + .35)); ctx.save(); ctx.translate(W / 2, yy + 64); ctx.scale(lerp(1.8, 1, e), lerp(1.8, 1, e)); ctx.globalAlpha = ca * P(t, done, done + .12);
      pill(0, 0, '▲ RECORD HIGH', font(900, 28), '#ff3d5a', '#fff', 1, 'center', 22, 52); ctx.restore();
      txt('END OF JUNE 2026', W / 2, yy + 130, font(700, 22, F.m), 'rgba(220,235,255,.75)', 'center', 4); }
    ctx.restore();
  }
}
function drawParticles(t) {
  if (t < T.rec || t > T.cd + 1.5) return;
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  const cx = W / 2, cy = 900;
  for (const p of PT) {
    const u = (t - p.l) / PFLY; if (u < 0) continue;
    const tx = SX(p.x), ty = SY(p.y), sx = cx + Math.cos(p.ang) * p.rad, sy = cy + Math.sin(p.ang) * p.rad * .9;
    const mx = (sx + tx) / 2 + (ty - sy) * p.bend, my = (sy + ty) / 2 - (tx - sx) * p.bend;
    const at = v => { const q = E.io2(clamp(v)); return [(1 - q) * (1 - q) * sx + 2 * (1 - q) * q * mx + q * q * tx, (1 - q) * (1 - q) * sy + 2 * (1 - q) * q * my + q * q * ty]; };
    const col = p.hue < .7 ? '255,200,90' : '140,215,255';
    if (u < 1) {
      const [x1, y1] = at(u);
      for (let k = 0; k < 6; k++) { const [a0, b0] = at(u - (k + 1) * .016), [a1, b1] = at(u - k * .016);
        ctx.strokeStyle = `rgba(${col},${.6 * (1 - k / 6)})`; ctx.lineWidth = 3 - k * .35; ctx.beginPath(); ctx.moveTo(a0, b0); ctx.lineTo(a1, b1); ctx.stroke(); }
      ctx.fillStyle = `rgba(${col},.22)`; ctx.beginPath(); ctx.arc(x1, y1, 9, 0, TAU); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x1, y1, 2.6, 0, TAU); ctx.fill();
    } else {
      const k = t - p.l - PFLY, fade = 1 - P(t, T.cd - .2, T.cd + 1.2);
      if (k < .45) { ctx.strokeStyle = `rgba(${col},${.8 * (1 - k / .45)})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(tx, ty, 3 + k * 40, 0, TAU); ctx.stroke(); }
      ctx.fillStyle = `rgba(${col},${(.75 + .25 * Math.sin(t * 6 + p.hue * 30)) * fade})`; ctx.beginPath(); ctx.arc(tx, ty, 2.6, 0, TAU); ctx.fill();
    }
  }
  ctx.restore();
}
function drawMystery(t) {
  // Tokyo waits under a "?" from the first reveal until its own; Osaka flashes as the "rival"
  const mk = (id, col, a, label) => {
    if (a <= 0) return; const c = CEN(id), x = SX(c[0]), y = SY(c[1]);
    mapXf(); ctx.save(); ctx.globalAlpha = a; ctx.setLineDash([6 / CM.s, 6 / CM.s]); ctx.lineDashOffset = -t * 12 / CM.s; ctx.strokeStyle = col; ctx.lineWidth = 2.5 / CM.s; ctx.stroke(HL[id]); ctx.setLineDash([]);
    ctx.fillStyle = hexA(col, .1 + .06 * Math.sin(t * 6)); ctx.fill(HL[id]); ctx.restore(); ID();
    const bob = Math.sin(t * 4) * 5, r = 34;
    ctx.save(); ctx.globalAlpha = a; ctx.shadowColor = hexA(col, .9); ctx.shadowBlur = 24; ctx.fillStyle = 'rgba(8,16,32,.9)'; ctx.beginPath(); ctx.arc(x, y + bob, r, 0, TAU); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.stroke(); qmark(x, y + bob - 2, 44, 1, col);
    if (label) txt(label, x, y + bob + r + 32, font(850, 22), col, 'center', 3);
    ctx.restore();
  };
  mk(13, GOLD, P(t, LS(4), LS(4) + .5) * (1 - P(t, T.tok - .15, T.tok + .05)) * (t > T.fin ? 0 : 1));
  mk(27, '#ff7f97', P(t, T.rival, T.rival + .3) * (1 - P(t, T.osa - .2, T.osa + .05)), 'RIVAL');
}
function growthBadge(p, t, t0, dx = 0, dy = -150) {
  const a = P(t, t0, t0 + .3) * (1 - P(t, p.tOut - .3, p.tOut)); if (a <= 0) return;
  const c = CEN(p.id), x = SX(c[0]) + dx, y = SY(c[1]) + dy - 8 * Math.sin(t * 3), e = E.oBack(P(t, t0, t0 + .45));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.scale(e, e);
  const w = pill(0, 0, `+${fmt(p.d)} in 6 months`, font(850, 30), 'rgba(16,120,80,.95)', '#eafff3', 1, 'center', 26, 60);
  ctx.fillStyle = GREEN; const ax = w / 2 + 40, ay = -6 + 6 * Math.sin(t * 6);
  ctx.beginPath(); ctx.moveTo(ax, ay - 30); ctx.lineTo(ax + 24, ay); ctx.lineTo(ax + 9, ay); ctx.lineTo(ax + 9, ay + 26); ctx.lineTo(ax - 9, ay + 26); ctx.lineTo(ax - 9, ay); ctx.lineTo(ax - 24, ay); ctx.closePath(); ctx.fill();
  ctx.restore();
}
function drawSlope(t) {                                         // Aichi vs Osaka, Jun 2020 → Jun 2026
  const a = P(t, T.slope, T.slope + .35) * (1 - P(t, BY.OSAKA.tOut - .2, BY.OSAKA.tOut + .1)); if (a <= 0) return;
  const x = 56, y = 884, w = 968, h = 350; ctx.save(); ctx.globalAlpha = a; glass(x, y, w, h, 28, BY.OSAKA.col, 1);
  const x1 = x + 268, x2 = x + w - 268, yv = v => y + h - 46 - (v - 250000) / (392000 - 250000) * (h - 150);
  txt('JUN 2020', x1, y + 52, font(700, 22, F.m), 'rgba(220,235,255,.7)', 'center', 2); txt('JUN 2026', x2, y + 52, font(700, 22, F.m), 'rgba(220,235,255,.7)', 'center', 2);
  ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x1, y + 72); ctx.lineTo(x1, y + h - 26); ctx.moveTo(x2, y + 72); ctx.lineTo(x2, y + h - 26); ctx.stroke();
  const u = E.io(P(t, T.slope + .25, T.slope + 1.35));
  const S = [[BY.AICHI, 276282, 369849, -10, 32], [BY.OSAKA, 253303, 389846, 30, -10]];
  for (const [p, v0, v1, o0, o1] of S) {
    const ya = yv(v0), yb = yv(v1), xe = lerp(x1, x2, u), ye = lerp(ya, yb, u);
    ctx.strokeStyle = p.col; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x1, ya); ctx.lineTo(xe, ye); ctx.stroke(); ctx.lineCap = 'butt';
    ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(x1, ya, 10, 0, TAU); ctx.fill();
    const nw = numTxt(fmt(v0), x1 - 26, ya + o0, font(700, 24), 'rgba(230,240,255,.8)', 'right'); txt(p.en, x1 - 38 - nw, ya + o0, font(850, 26), p.col, 'right', 1);
    if (u > .02) { ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(xe, ye, 10, 0, TAU); ctx.fill(); }
    if (u > .98) { const k = P(t, T.slope + 1.3, T.slope + 1.6); ctx.globalAlpha = a * k; const ew = tw(p.en, font(850, 26), 1);
      txt(p.en, x2 + 26, yb + o1, font(850, 26), p.col, 'left', 1); numTxt(fmt(v1), x2 + 38 + ew, yb + o1, font(700, 24), '#fff', 'left'); ctx.globalAlpha = a; }
  }
  // crossing point
  const cu = (276282 - 253303) / ((276282 - 253303) + (389846 - 369849)), cxp = lerp(x1, x2, cu), cyp = lerp(yv(276282), yv(369849), cu), tc = T.slope + .25 + 1.1 * E.io(cu) ;
  if (u > cu) { const k = P(t, tc, tc + .5);
    ctx.strokeStyle = `rgba(255,255,255,${1 - k})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cxp, cyp, 10 + k * 40, 0, TAU); ctx.stroke();
    ctx.globalAlpha = a * clamp(k * 3); pill(cxp + 20, cyp + 58, 'OSAKA OVERTAKES', font(850, 20), 'rgba(255,127,151,.95)', '#fff', 1, 'center', 14, 36); ctx.globalAlpha = a; }
  const ga = P(t, wt(15, '50') - .1, wt(15, '50') + .3); if (ga > 0) { ctx.globalAlpha = a * ga; const e = E.oBack(clamp(ga * 1.3));
    ctx.save(); ctx.translate(x + w / 2, y + 44); ctx.scale(e, e); pill(0, 0, 'OSAKA  +54%', font(900, 26), 'rgba(16,120,80,.95)', '#eafff3', 1, 'center', 18, 46); ctx.restore(); }
  ctx.restore();
}
function drawTokyoPanels(t) {
  const x = 56, y = 912, w = 968, h = 318, out = P(t, T.fin - .2, T.fin + .2);
  const a1 = P(t, T.comb, T.comb + .35) * (1 - P(t, T.one5 - .25, T.one5 + .05)), a2 = P(t, T.one5 - .1, T.one5 + .25) * (1 - out);
  if (a1 + a2 <= 0) return;
  ctx.save(); glass(x, y, w, h, 28, GOLD, Math.max(a1, a2));
  if (a1 > 0) {
    ctx.globalAlpha = a1; const bx = x + 40, bw = w - 80, mx = 824486, u1 = E.o3(P(t, T.comb + .15, T.comb + 1.0)), u2 = E.o3(P(t, T.comb + .45, T.comb + 1.4));
    txt('TOKYO', bx, y + 64, font(850, 30), GOLD, 'left', 2); numTxt(fmt(824486 * u1), x + w - 40, y + 64, font(850, 30), '#fff', 'right');
    ctx.fillStyle = 'rgba(255,255,255,.07)'; rrect(bx, y + 82, bw, 50, 12); ctx.fill();
    const g = ctx.createLinearGradient(bx, 0, bx + bw, 0); g.addColorStop(0, mix(GOLD, .3)); g.addColorStop(1, GOLD); ctx.fillStyle = g; rrect(bx, y + 82, Math.max(1, bw * u1), 50, 12); ctx.fill();
    txt('OSAKA + AICHI', bx, y + 196, font(850, 30), '#fff', 'left', 2); numTxt(fmt(759695 * u2), x + w - 40, y + 196, font(850, 30), 'rgba(230,240,255,.85)', 'right');
    ctx.fillStyle = 'rgba(255,255,255,.07)'; rrect(bx, y + 214, bw, 50, 12); ctx.fill();
    const wo = bw * 389846 / mx * u2, wa = bw * 369849 / mx * u2;
    ctx.fillStyle = BY.OSAKA.col; rrect(bx, y + 214, Math.max(1, wo), 50, [12, 0, 0, 12]); ctx.fill();
    ctx.fillStyle = BY.AICHI.col; rrect(bx + wo, y + 214, Math.max(1, wa), 50, [0, 12, 12, 0]); ctx.fill();
    if (u2 > .9) { const gx = bx + wo + wa, k = P(t, T.comb + 1.4, T.comb + 1.8);
      ctx.globalAlpha = a1 * k; ctx.setLineDash([6, 6]); ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx, y + 140); ctx.lineTo(gx, y + 272); ctx.stroke(); ctx.setLineDash([]);
      pill(gx + (bw - (gx - bx)) / 2, y + 239, '+' + fmt(824486 - 759695), font(850, 22), 'rgba(255,197,74,.95)', '#1a1200', 1, 'center', 12, 38); }
  }
  if (a2 > 0) {
    ctx.globalAlpha = a2; const px0 = x + 90;
    for (let i = 0; i < 5; i++) { const e = E.oBack(P(t, T.one5 + i * .07, T.one5 + i * .07 + .4)); ctx.save(); ctx.translate(px0 + i * 92, y + 190); ctx.scale(e, e);
      if (i === 0) { ctx.shadowColor = 'rgba(255,190,60,.9)'; ctx.shadowBlur = 30; } person(0, 0, 92, i === 0 ? GOLD : 'rgba(150,170,200,.35)'); ctx.restore(); }
    const tx = x + 560; ctx.save(); ctx.shadowColor = 'rgba(255,170,40,.6)'; ctx.shadowBlur = 30;
    numTxt(((19.26 * E.o3(P(t, T.one5 + .1, T.one5 + 1))).toFixed(1)) + '%', tx, y + 160, font(900, 110), GOLD, 'left'); ctx.restore();
    txt('of all foreign residents', tx + 4, y + 212, font(650, 28), 'rgba(235,243,255,.9)', 'left');
    txt('in Japan live in Tokyo', tx + 4, y + 250, font(650, 28), 'rgba(235,243,255,.9)', 'left');
  }
  ctx.restore();
}
function drawSparks(t) {
  const t0 = T.tok; if (t < t0 || t > t0 + 1.6) return; const c = CEN(13), x = SX(c[0]), y = SY(c[1]);
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  const rg = ctx.createRadialGradient(x, y, 0, x, y, 520); rg.addColorStop(0, `rgba(255,200,80,${.5 * (1 - P(t, t0, t0 + .8))})`); rg.addColorStop(1, 'rgba(255,200,80,0)'); ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
  for (const s of SPARK) { const k = (t - t0) / s.d; if (k > 1) continue; const d = s.v * E.o3(k);
    ctx.globalAlpha = 1 - k; ctx.fillStyle = s.c; ctx.beginPath(); ctx.arc(x + Math.cos(s.a) * d, y + Math.sin(s.a) * d + 60 * k * k, s.s * (1 - k * .5), 0, TAU); ctx.fill(); }
  ctx.restore();
}
function drawFinale(t) {
  const a = P(t, T.fin + .3, T.fin + .8) * (1 - P(t, T.end - .1, T.end + .3)); if (a <= 0) return;
  // waffle panel where the card used to be
  const { x, y, w, h } = CARD; ctx.save(); ctx.globalAlpha = a; glass(x, y, w, h, 30, GOLD, 1);
  const cells = []; for (const p of PR.slice().sort((a, b) => a.rank - b.rank)) for (let k = 0; k < Math.round(p.n / TOTAL * 100); k++) cells.push(p.col);
  const cs = 17, gp = 3.2, wx = x + 32, wy = y + (h - (10 * cs + 9 * gp)) / 2, fu = P(t, T.half - .3, T.half + 1.0);
  for (let i = 0; i < 100; i++) { const r = Math.floor(i / 10), c = i % 10, on = i < cells.length && i < fu * cells.length + .5;
    ctx.fillStyle = on ? cells[i] : 'rgba(150,170,200,.22)'; rrect(wx + c * (cs + gp), wy + r * (cs + gp), cs, cs, 4); ctx.fill(); }
  const tx = wx + 10 * (cs + gp) + 34; ctx.save(); ctx.shadowColor = 'rgba(255,170,40,.6)'; ctx.shadowBlur = 30;
  numTxt((51.9 * E.o3(fu)).toFixed(1) + '%', tx, y + 116, font(900, 96), GOLD, 'left'); ctx.restore();
  txt('of all foreign residents live in', tx + 4, y + 162, font(650, 27), 'rgba(235,243,255,.9)', 'left');
  txt('just 5 of Japan’s 47 prefectures', tx + 4, y + 198, font(800, 27), '#fff', 'left');
  ctx.restore();
  // labels on the map
  const LBL = { 13: [150, -14], 11: [-40, -118], 14: [70, 112], 23: [10, 120], 27: [-10, -128] };
  for (const p of PR) { const c = CEN(p.id), d = LBL[p.id], la = a * P(t, T.fin + 1.0 + (5 - p.rank) * .1, T.fin + 1.4 + (5 - p.rank) * .1); if (la <= 0) continue;
    const x0 = SX(c[0]), y0 = SY(c[1]) - 8, x1 = x0 + d[0], y1 = y0 + d[1], bob = T.home < t ? Math.max(0, Math.sin(clamp((t - T.home - p.slot * .14) / .32) * Math.PI)) * 14 : 0;
    ctx.save(); ctx.globalAlpha = la; ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1 - bob); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x0, y0, 5, 0, TAU); ctx.fill();
    pill(x1, y1 - bob, `${p.rank}  ${p.en}`, font(900, 24), hexA(p.col, .96), '#0b1424', 1, 'center', 16, 44); ctx.restore(); }
}
function drawEndCard(t) {
  const a = P(t, T.end, T.end + .45); if (a <= 0) return;
  ctx.save(); ctx.fillStyle = `rgba(3,9,20,${.82 * a})`; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = a;
  const y0 = 430 + 30 * (1 - E.o3(a));
  txt('JUNE 2026 · FOREIGN RESIDENTS', W / 2, y0 - 120, font(700, 24, F.m), GOLD, 'center', 4);
  txt('Japan’s Top 5', W / 2, y0 - 36, font(900, 92), '#fff', 'center', 1);
  txt('Prefectures', W / 2, y0 + 56, font(900, 92), '#fff', 'center', 1);
  const rows = PR.slice().sort((a, b) => a.rank - b.rank);
  rows.forEach((p, i) => { const ry = y0 + 170 + i * 128, e = E.o3(P(t, T.end + .15 + i * .07, T.end + .6 + i * .07));
    ctx.save(); ctx.globalAlpha = a * e; ctx.translate(40 * (1 - e), 0);
    txt(String(p.rank), 92, ry + 30, font(900, 56), p.col, 'center'); drawIcon(p.id, 186, ry + 12, 74, p.col, 1, .4);
    txt(p.en, 252, ry + 4, font(900, 40), '#fff', 'left', 1); txt(p.ja, 252 + tw(p.en, font(900, 40), 1) + 14, ry + 2, JPF(700, 26), 'rgba(230,240,255,.55)', 'left');
    const bw = 640 * p.n / 824486; ctx.fillStyle = 'rgba(255,255,255,.07)'; rrect(252, ry + 22, 640, 22, 11); ctx.fill(); ctx.fillStyle = p.col; rrect(252, ry + 22, bw * E.o3(P(t, T.end + .3 + i * .07, T.end + 1.1 + i * .07)), 22, 11); ctx.fill();
    numTxt(fmt(p.n), W - 70, ry + 4, font(850, 34), p.col, 'right'); ctx.restore(); });
  txt('Source: Immigration Services Agency of Japan', W / 2, y0 + 840, font(600, 24), 'rgba(220,235,255,.7)', 'center');
  txt('Foreign residents as of end of June 2026', W / 2, y0 + 876, font(600, 24), 'rgba(220,235,255,.55)', 'center');
  ctx.restore();
}

// ------------------------------------------------------------------ main scene
function sceneMain(t) {
  CM = cam(t);
  drawMap(t);
  drawMystery(t);
  drawFlights(t);
  drawParticles(t);
  drawSparks(t);
  // map pins
  mapPin(139.6455, 35.4437, 'YOKOHAMA CHINATOWN', '横浜中華街', BY.KANAGAWA.col, P(t, T.china, T.china + .6) * (1 - P(t, BY.KANAGAWA.tOut - .3, BY.KANAGAWA.tOut)), t, 170);
  mapPin(137.1563, 35.0825, 'TOYOTA CITY', '豊田市 · auto industry hub', BY.AICHI.col, P(t, T.car, T.car + .6) * (1 - P(t, T.rival - .2, T.rival + .1)), t, 150,
    (cx, cy) => gear(cx, cy, 22, t * 1.6, BY.AICHI.col));
  growthBadge(BY.SAITAMA, t, T.badge, 0, -170);
  drawIntro(t);
  drawHeader(t);
  for (const p of PR) drawCard(p, t);
  // "was #2" tag on the Aichi card
  { const a = P(t, T.was2, T.was2 + .3) * (1 - P(t, BY.AICHI.tOut - .1, BY.AICHI.tOut + .1)); if (a > 0) { const e = E.oBack(P(t, T.was2, T.was2 + .4));
    ctx.save(); ctx.globalAlpha = a; ctx.translate(CARD.x + CARD.w - 120, CARD.y + 60); ctx.rotate(-.06); ctx.scale(e, e);
    pill(0, 0, 'WAS #2', font(900, 26), 'rgba(255,127,151,.95)', '#fff', 1, 'center', 18, 48); ctx.restore(); } }
  drawSlope(t);
  drawTokyoPanels(t);
  drawFinale(t);
  drawRail(t);
  drawEndCard(t);
}

window.FILM = {
  title: 'TOP 5 PREFECTURES',
  hotLines: [1, 17, 18, 20, 21],
  chapters: [],
  scenes: [{ start: 0, draw: sceneMain }],
  xfades: [],
  init: initGeo,
  hits: [[T.tok, 16, .55], ...PR.slice(0, 4).map(p => [p.tR, 5, .3]), [PT[PT.length - 1].l + PFLY, 6, .3]],
  flashes: [[T.tok, .35]],
  events: {
    whoosh: [K[1][0], ...FLIGHTS.map(f => f[2]), T.fin],
    reveal: PR.slice(0, 4).map(p => p.tR),
    boom: [T.tok, PT[PT.length - 1].l + PFLY],
    riser: [[LS(16) - .2, T.tok]],
    count: [...PR.map(p => [p.tN, 1.25]), [T.rec + PFLY, 1.47]],
    pop: [...[0, 1, 2, 3, 4].map(i => T.rail + i * .08), ...PR.map(p => p.tR + .45)],
    sparkle: [T.badge, T.china, T.car, T.slope + 1.1, T.comb + 1.4, T.one5, T.half, T.tok + .05],
    type: [...PR.map(p => p.tR), T.was2, wt(15, '50')],
    swarm: [T.rec],
    chime: [T.half, T.end],
    title: [0.55, LS(0) + .45, LS(0) + .9, LS(0) + 1.35],
    hop: [T.home, T.home + .14, T.home + .28, T.home + .42, T.home + .56],
  },
};
