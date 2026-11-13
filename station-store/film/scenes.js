// THE STORE INSIDE THE STATION — episode 3. Portrait-first (9:16). Helpers shared with episodes 1 and 2.
const K = { ink: '#141b33', ink2: '#232d55', paper: '#f3e8cf', red: '#dc4a33', must: '#f0b637', teal: '#2a7a74', wood: '#8b5a33', woodD: '#5b3a20', seat: '#33599a', seatD: '#223f72', shoe: '#7a4120' };
C.cyan = '#f3c552'; C.cyan2 = '#f3e8cf';
const JP = '"IPAPGothic","IPAGothic",sans-serif';

// ------------------------------------------------------------ small helpers
function fillBG(c1, c2) { const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, c1); g.addColorStop(1, c2 || c1); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120); }
function big(s, x, y, size, col = K.paper, align = 'center', sh = K.ink, ls = 0) { const o = Math.max(3, size * .055); txt(s, x + o, y + o, font(900, size), sh, align, ls); txt(s, x, y, font(900, size), col, align, ls); }
function popText(s, x, y, size, t, t0, col = K.paper, rot = 0, sh = K.ink) { if (t < t0) return; const k = E.oBack(P(t, t0, t0 + .32)); ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(k, k); ctx.globalAlpha *= P(t, t0, t0 + .08); big(s, 0, 0, size, col, 'center', sh); ctx.restore(); }
function jp(s, x, y, size, col, align = 'center', bold = .05) { ctx.save(); ctx.font = `${size}px ${JP}`; ctx.textAlign = align; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = size * bold; ctx.lineJoin = 'round'; ctx.strokeText(s, x, y); ctx.fillText(s, x, y); ctx.restore(); }
function label(s, x, y, a = 1, col = K.paper, size = 22, align = 'center') { ctx.save(); ctx.globalAlpha *= a; txt(s, x, y, font(700, size, F.m), col, align, 4); ctx.restore(); }
function plate(s, x, y, size, bgc, fg, a = 1, rot = 0, k = 1) { if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot); ctx.scale(k, k); ctx.font = font(900, size); ctx.letterSpacing = '2px'; const w = ctx.measureText(s).width + size * .9; ctx.letterSpacing = '0px'; ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-w / 2 + 7, -size * .78 + 7, w, size * 1.5, 10); ctx.fill(); ctx.fillStyle = bgc; rrect(-w / 2, -size * .78, w, size * 1.5, 10); ctx.fill(); txt(s, 0, size * .3, font(900, size), fg, 'center', 2); ctx.restore(); }
function shadow(x, y, rx, ry = 10, a = .3) { ctx.fillStyle = `rgba(0,0,0,${a})`; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, TAU); ctx.fill(); }

// ------------------------------------------------------------ footwear (origin: heel on the ground, toe to +x, ~200 long)
function loafer(col = K.shoe) {
  ctx.fillStyle = '#20140c'; rrect(-2, -10, 210, 10, 4); ctx.fill(); ctx.fillRect(-2, -18, 56, 18);
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, -14); ctx.lineTo(-3, -62); ctx.quadraticCurveTo(-2, -77, 16, -75); ctx.lineTo(62, -71); ctx.quadraticCurveTo(84, -53, 112, -51); ctx.quadraticCurveTo(182, -48, 203, -24); ctx.quadraticCurveTo(210, -12, 200, -10); ctx.lineTo(0, -10); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,.5)'; ctx.beginPath(); ctx.ellipse(31, -71, 30, 6, -.06, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.beginPath(); ctx.moveTo(84, -56); ctx.lineTo(108, -52); ctx.lineTo(120, -12); ctx.lineTo(96, -12); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(255,220,170,.28)'; ctx.beginPath(); ctx.ellipse(160, -34, 26, 6, .35, 0, TAU); ctx.fill();
  ctx.strokeStyle = 'rgba(255,220,170,.35)'; ctx.lineWidth = 2; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(120, -46); ctx.quadraticCurveTo(170, -42, 192, -22); ctx.stroke(); ctx.setLineDash([]);
}
function geta() {
  ctx.fillStyle = '#b98a52'; ctx.fillRect(40, -30, 24, 30); ctx.fillRect(122, -30, 24, 30);
  ctx.fillStyle = '#d6a868'; rrect(0, -46, 196, 17, 5); ctx.fill(); ctx.fillStyle = 'rgba(90,50,10,.25)'; ctx.fillRect(4, -35, 188, 3);
  ctx.strokeStyle = K.red; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(52, -48); ctx.quadraticCurveTo(100, -92, 156, -48); ctx.stroke();
}
function zori() {
  ctx.fillStyle = '#c9a14e'; ctx.beginPath(); ctx.moveTo(0, -6); ctx.quadraticCurveTo(0, -26, 22, -26); ctx.lineTo(176, -20); ctx.quadraticCurveTo(202, -18, 200, -6); ctx.quadraticCurveTo(198, 0, 180, 0); ctx.lineTo(14, 0); ctx.quadraticCurveTo(0, 0, 0, -6); ctx.fill();
  ctx.strokeStyle = 'rgba(100,65,10,.45)'; ctx.lineWidth = 2; for (let x = 12; x < 196; x += 11) { ctx.beginPath(); ctx.moveTo(x, -2); ctx.lineTo(x + 5, -22); ctx.stroke(); }
  ctx.strokeStyle = K.ink2; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(48, -26); ctx.quadraticCurveTo(100, -66, 158, -22); ctx.stroke();
}
function slipper(col = '#b5322a') {
  ctx.fillStyle = '#e9d9b0'; rrect(0, -11, 204, 11, 5); ctx.fill();
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(70, -11); ctx.quadraticCurveTo(84, -56, 130, -58); ctx.quadraticCurveTo(196, -54, 205, -11); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.22)'; ctx.beginPath(); ctx.ellipse(150, -42, 30, 6, .12, 0, TAU); ctx.fill();
  ctx.strokeStyle = K.must; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(76, -22); ctx.quadraticCurveTo(92, -54, 128, -56); ctx.stroke();
}
function boot() {
  ctx.fillStyle = '#1c1f26'; rrect(-4, -190, 80, 160, 10); ctx.fill();
  ctx.beginPath(); ctx.moveTo(-4, -8); ctx.lineTo(-4, -70); ctx.lineTo(76, -70); ctx.quadraticCurveTo(110, -62, 170, -54); ctx.quadraticCurveTo(206, -44, 204, -8); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#e6dcc2'; rrect(-6, -10, 212, 10, 4); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.18)'; rrect(6, -178, 12, 120, 6); ctx.fill(); ctx.fillStyle = '#34383f'; ctx.fillRect(-4, -190, 80, 14);
}
function sneaker() {
  ctx.fillStyle = '#efe9da'; ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(-2, -60); ctx.quadraticCurveTo(0, -72, 16, -70); ctx.lineTo(70, -66); ctx.quadraticCurveTo(150, -52, 198, -30); ctx.quadraticCurveTo(208, -18, 202, -8); ctx.closePath(); ctx.fill();
  ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(150, -46); ctx.quadraticCurveTo(204, -34, 204, -8); ctx.lineTo(150, -8); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#cfc6ae'; rrect(-3, -10, 208, 10, 4); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.beginPath(); ctx.ellipse(34, -66, 30, 5, -.06, 0, TAU); ctx.fill();
}
const WEAR = { loafer, geta, zori, slipper, boot, sneaker, black: () => loafer('#22242c'), tan: () => loafer('#b37a3c') };
function wear(kind, x, y, s = 1, rot = 0, flip = 1) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s * flip, s); WEAR[kind](); ctx.restore(); }
function pair(kind, x, y, s = 1, rot = 0, flip = 1) { ctx.save(); ctx.globalAlpha *= .78; wear(kind, x + 26 * s * flip, y - 12 * s, s, rot, flip); ctx.restore(); wear(kind, x, y, s, rot, flip); }

// ------------------------------------------------------------ legs (2-bone IK) with sock feet
function foot(sc, shoe, stripe) {
  if (shoe) { ctx.save(); ctx.translate(-50, 54); ctx.scale(1.06, 1.06); }
  ctx.beginPath(); ctx.moveTo(-36, -22); ctx.quadraticCurveTo(-50, 40, -10, 44); ctx.lineTo(118, 44); ctx.quadraticCurveTo(162, 42, 156, 14); ctx.quadraticCurveTo(150, -8, 100, -14); ctx.lineTo(36, -36); ctx.closePath();
  if (shoe) { ctx.restore(); ctx.fillStyle = sc; ctx.beginPath(); ctx.arc(0, -6, 34, 0, TAU); ctx.fill(); ctx.save(); ctx.translate(-50, 54); ctx.scale(1.06, 1.06); WEAR[shoe](); ctx.restore(); return; }
  ctx.fillStyle = sc; ctx.fill(); ctx.save(); ctx.clip();
  ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.arc(150, 20, 42, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(-40, 34, 36, 0, TAU); ctx.fill();
  if (stripe) { ctx.fillStyle = stripe; for (let x = 20; x < 110; x += 34) ctx.fillRect(x, -40, 15, 100); }
  ctx.restore();
}
function leg(hx, hy, ax, ay, rot, L, w, pc, sc, shoe, k = 1, stripe) {
  const dx = ax - hx, dy = ay - hy, d = Math.min(Math.hypot(dx, dy), 2 * L - 2), b = Math.atan2(dy, dx), a1 = Math.acos(d / (2 * L));
  const kx = hx + Math.cos(b - a1) * L, ky = hy + Math.sin(b - a1) * L, sa = Math.atan2(ay - ky, ax - kx);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = sc; ctx.lineWidth = w * .72; ctx.beginPath(); ctx.moveTo(ax - Math.cos(sa) * w * 1.1, ay - Math.sin(sa) * w * 1.1); ctx.lineTo(ax, ay); ctx.stroke();
  ctx.strokeStyle = pc; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(kx, ky); ctx.lineTo(ax - Math.cos(sa) * w * .9, ay - Math.sin(sa) * w * .9); ctx.stroke();
  ctx.save(); ctx.translate(ax, ay); ctx.rotate(rot); ctx.scale(k, k); foot(sc, shoe, stripe); ctx.restore();
}
// ankle path from the floor (in the shoe) up to the facing seat; u 0..1
function liftPath(a0, a1, u) { const cx = a0[0] + 60, cy = a0[1] - 420, v = 1 - u; return [v * v * a0[0] + 2 * v * u * cx + u * u * a1[0], v * v * a0[1] + 2 * v * u * cy + u * u * a1[1]]; }

const SKIN = '#e8c39a';
function rays(cx, cy, t, a = .05, sp = .12, col = '255,255,255') { ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * sp); ctx.fillStyle = `rgba(${col},${a})`; for (let i = 0; i < 12; i++) { ctx.rotate(TAU / 12); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1700, -210); ctx.lineTo(1700, 210); ctx.fill(); } ctx.restore(); }

// ------------------------------------------------------------ people
// o: {top, pc, sc, shoe, kim (robe colour), obi, hair, stand}
function walker(x, g, s, ph, o) {
  const p = ((ph % 1) + 1) % 1, k = s * .8, st = (o.kim ? 70 : 115) * s, base = g - 54 * k, bob = o.stand ? 0 : 6 * s * Math.sin(p * 2 * TAU), hy = g - 430 * s + bob, L = 224 * s;
  const A = q => { q = ((q % 1) + 1) % 1; if (o.stand) return [x + (q < .5 ? 26 : -22) * s, base, 0]; if (q < .6) return [x + st * (1 - 2 * q / .6), base, 0]; const u = (q - .6) / .4; return [x + st * (-1 + 2 * u), base - 64 * s * Math.sin(Math.PI * u), -.3 * Math.sin(Math.PI * u) + .25 * u]; };
  const a = A(p + .5), b = A(p);
  ctx.save(); ctx.globalAlpha *= .85; leg(x - 8 * s, hy, a[0], a[1], a[2], L, 74 * s, o.pc, o.sc, o.shoe, k); ctx.restore();
  leg(x + 8 * s, hy, b[0], b[1], b[2], L, 76 * s, o.pc, o.sc, o.shoe, k);
  if (o.kim) { ctx.fillStyle = o.kim; ctx.beginPath(); ctx.moveTo(x - 80 * s, hy - 30 * s); ctx.lineTo(x + 80 * s, hy - 30 * s); ctx.lineTo(x + 104 * s, g - 96 * s); ctx.lineTo(x - 100 * s, g - 96 * s); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.fillRect(x - 6 * s, hy, 8 * s, 330 * s - 96 * s); }
  ctx.fillStyle = o.kim || o.top; rrect(x - 82 * s, hy - 250 * s, 164 * s, 290 * s, 46 * s); ctx.fill();
  if (o.kim) { ctx.fillStyle = o.obi || K.must; ctx.fillRect(x - 82 * s, hy - 80 * s, 164 * s, 52 * s); ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 6 * s; ctx.beginPath(); ctx.moveTo(x - 30 * s, hy - 248 * s); ctx.lineTo(x + 14 * s, hy - 130 * s); ctx.lineTo(x + 50 * s, hy - 248 * s); ctx.stroke(); }
  ctx.fillStyle = SKIN; ctx.beginPath(); ctx.arc(x + 6 * s, hy - 300 * s, 48 * s, 0, TAU); ctx.fill();
  ctx.fillStyle = o.hair || '#1b1a22'; ctx.beginPath(); ctx.arc(x + 2 * s, hy - 312 * s, 50 * s, Math.PI * .95, Math.PI * 2.05); ctx.fill(); if (o.kim) { ctx.beginPath(); ctx.arc(x - 26 * s, hy - 356 * s, 22 * s, 0, TAU); ctx.fill(); }
  if (o.hat) { ctx.fillStyle = o.hat; rrect(x - 44 * s, hy - 384 * s, 100 * s, 54 * s, 14 * s); ctx.fill(); rrect(x - 66 * s, hy - 338 * s, 146 * s, 14 * s, 6 * s); ctx.fill(); }
}
const FOLK = [
  { kim: '#7c2a22', obi: K.must, pc: '#7c2a22', sc: '#f3ece0', shoe: 'geta' }, { top: '#2c3040', pc: '#3a3f52', sc: '#d9d2c2', shoe: 'loafer', hat: '#3a3f52' },
  { kim: K.teal, obi: '#e9e2cd', pc: K.teal, sc: '#f3ece0', shoe: 'zori' }, { top: '#8b5a33', pc: '#5b3a20', sc: '#d9d2c2', shoe: 'black', hat: '#5b3a20' },
  { kim: K.ink2, obi: K.red, pc: K.ink2, sc: '#f3ece0', shoe: 'geta' }, { top: K.red, pc: '#2c3040', sc: '#f6f0e0', shoe: 'sneaker' }, { top: '#c9b071', pc: '#3a3f52', sc: '#d9d2c2', shoe: 'boot' },
];
function mini(x, y, s, col) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y - 96 * s, 16 * s, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(x - 16 * s, y - 78 * s); ctx.lineTo(x + 16 * s, y - 78 * s); ctx.lineTo(x + 24 * s, y); ctx.lineTo(x - 24 * s, y); ctx.fill(); }

function skyDusk(a = '#172a55', b = '#8a4a62', c = '#f0a25a') { const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, a); g.addColorStop(.62, b); g.addColorStop(1, c); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120); }
function trainCar(x, y, s, t) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = '#6b1f2a'; rrect(0, -150, 560, 130, 14); ctx.fill(); ctx.fillStyle = '#4a141c'; ctx.fillRect(0, -42, 560, 22); ctx.fillStyle = '#ffe2a0'; for (let i = 0; i < 7; i++) { rrect(26 + i * 74, -128, 54, 56, 6); ctx.fill(); } ctx.fillStyle = '#c9c0a8'; rrect(0, -160, 560, 16, 8); ctx.fill(); ctx.fillStyle = '#16171c'; for (const wx of [80, 150, 410, 480]) { ctx.beginPath(); ctx.arc(wx, -8, 22, 0, TAU); ctx.fill(); } ctx.strokeStyle = '#16171c'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(240, -160); ctx.lineTo(280, -210); ctx.lineTo(320, -160); ctx.stroke(); ctx.restore(); }
const T = { hook: 0, hands: LB(1), idea: LB(3), crowd: LB(5), test: LB(6), take: LB(8), umeda: LB(10), promise: LB(12), dining: LB(13), cut: LB(15), legend: LB(17), tokyo: LB(19), shoe: LB(21), tease: LB(22), end: LB(24) };
const UNI = { top: '#1f2a4f', pc: '#1f2a4f', sc: '#d9d2c2', shoe: 'black', hat: '#1f2a4f' };
function digits(str, t, t0, y, size = 190, col = K.must, sh = '#05071a') { if (t < t0) return; const n = str.length, sp = size * .79, x0 = 540 - sp * (n - 1) / 2; for (let i = 0; i < n; i++) { const q = E.oBack(P(t, t0 + i * .07, t0 + .35 + i * .07)); ctx.save(); ctx.translate(x0 + i * sp, y + 80 * (1 - q)); ctx.globalAlpha *= clamp(q * 1.5); big(str[i], 0, 0, size, col, 'center', sh); ctx.restore(); } }
function coin(x, y, r, a = 1, txtIn = '') { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = '#b88a1e'; ctx.beginPath(); ctx.arc(x + r * .08, y + r * .1, r, 0, TAU); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.strokeStyle = '#b88a1e'; ctx.lineWidth = r * .1; ctx.beginPath(); ctx.arc(x, y, r * .76, 0, TAU); ctx.stroke(); if (txtIn) txt(txtIn, x, y + r * .26, font(900, r * .7), '#7a5a10', 'center'); ctx.restore(); }
function badge(x, y, t, t0, name, icon) {
  const p = E.oBack(P(t, t0, t0 + .35)); if (p <= 0) return;
  ctx.save(); ctx.translate(x, y); ctx.scale(p, p); ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.arc(6, 8, 96, 0, TAU); ctx.fill(); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(0, 0, 96, 0, TAU); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(0, 0, 83, 0, TAU); ctx.stroke();
  icon(t - t0); ctx.restore(); label(name, x, y + 138, P(t, t0 + .15, t0 + .4), K.paper, 20);
}

// ------------------------------------------------------------ the terminal building, front view (as teased in episode 2)
function terminalFront(t, trainD = 1) {
  ctx.fillStyle = '#b9a98a'; ctx.fillRect(170, 520, 740, 560); ctx.fillStyle = '#a39373'; ctx.fillRect(154, 504, 772, 26); ctx.fillRect(170, 930, 740, 14);
  for (let rr = 0; rr < 5; rr++) for (let c = 0; c < 9; c++) { ctx.fillStyle = ((rr * 3 + c * 5) % 6) ? `rgba(255,220,140,${.85 + .15 * noise(t * 2 + rr * 5 + c)})` : '#4a4f66'; rrect(196 + c * 78, 548 + rr * 76, 52, 54, 4); ctx.fill(); }
  ctx.fillStyle = K.red; ctx.fillRect(380, 440, 320, 70); txt('DEPARTMENT STORE', 540, 486, font(900, 27), K.paper, 'center', 2);
  ctx.fillStyle = '#16122a'; for (let c = 0; c < 4; c++) { rrect(196 + c * 180, 960, 150, 290, [75, 75, 0, 0]); ctx.fill(); }
  ctx.fillStyle = '#2a2440'; ctx.fillRect(-100, 1230, 1300, 30); ctx.fillStyle = '#16122a'; ctx.fillRect(-100, 1260, 1300, 800);
  for (let i = 0; i < 3; i++) trainCar(lerp(-1900, -560, trainD) + i * 580, 1232, 1, t);
  ctx.fillStyle = '#b9a98a'; for (let c = 0; c < 5; c++) ctx.fillRect(170 + c * 180 - (c === 4 ? 26 : 0), 944, 26, 306); ctx.fillStyle = K.ink2; ctx.fillRect(410, 1010, 260, 60); jp('駅', 450, 1056, 44, K.must, 'center', .06); txt('STATION', 570, 1052, font(900, 30), K.paper, 'center', 2);
}
function sceneHook(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, '#0d1230'); g.addColorStop(1, '#3a2b5c'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  const r = rng(21); for (let i = 0; i < 50; i++) { ctx.fillStyle = `rgba(255,250,220,${.2 + .6 * r()})`; ctx.fillRect(r() * W, 230 + r() * 400, 3, 3); }
  ctx.fillStyle = '#16122a'; ctx.fillRect(-60, 1244, W + 120, 900); ctx.fillStyle = '#2a2440'; ctx.fillRect(-60, 1226, W + 120, 24);
  const z = E.io2(P(t, 0, T.hands)); ctx.save(); ctx.translate(540, 1250); ctx.scale(lerp(.76, .8, z), lerp(.76, .8, z)); ctx.translate(-540, -1250 - 10); terminalFront(t, E.o3(P(t, .2, 3.2))); ctx.restore();
  ctx.fillStyle = 'rgba(8,10,30,.55)'; ctx.fillRect(0, 0, W, 560);
  plate('EP 3', 150, 290, 44, K.red, K.paper, P(t, .3, .4), -.04, E.oBack(P(t, .3, .6)));
  popText('THE STORE INSIDE', 540, 396, 90, t, .55, K.paper, -.015); popText('THE STATION', 540, 506, 118, t, .8, K.must, -.015);
  label('LAST TIME…', 540, 1340, vis(t, .7, T.hands, .4), K.paper, 26);
}

// ------------------------------------------------------------ hands: wrapping parcels / driving trains
function glove(x, y, rot, flip = 1, sl = 300) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(flip, 1); ctx.fillStyle = '#1f2a4f'; rrect(-46, 30, 92, sl, 12); ctx.fill(); ctx.fillStyle = K.must; ctx.fillRect(-46, 62, 92, 9); ctx.fillRect(-46, 80, 92, 5); ctx.fillStyle = '#d8d2c4'; rrect(-52, -14, 30, 50, 14); ctx.fill(); ctx.fillStyle = '#f4f0e6'; rrect(-38, -36, 76, 78, 26); ctx.fill(); ctx.strokeStyle = 'rgba(0,0,0,.12)'; ctx.lineWidth = 3; for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(i * 18, -30); ctx.lineTo(i * 18, -6); ctx.stroke(); } ctx.restore(); }
function panel(y, h, a, k, draw, title, col) { if (a <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a * 1.5); ctx.translate((1 - E.o3(a)) * 90 * k, 0); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(50, y + 12, 1000, h, 28); ctx.fill(); ctx.save(); rrect(40, y, 1000, h, 28); ctx.clip(); draw(); ctx.fillStyle = col; ctx.fillRect(40, y, 1000, 78); txt(title, 76, y + 54, font(900, 38), K.paper, 'left', 3); ctx.restore(); ctx.strokeStyle = K.paper; ctx.lineWidth = 5; rrect(40, y, 1000, h, 28); ctx.stroke(); ctx.restore(); }
function sceneHands(t) {
  fillBG('#1a2146', '#0d1127');
  const a1 = P(t, T.hands, T.hands + .5), r0 = wt(2, 'railwaymen') - .3, a2 = P(t, r0, r0 + .5);
  panel(300, 500, a1, 1, () => { const y = 300; ctx.fillStyle = '#7a5230'; ctx.fillRect(40, y, 1000, 500); ctx.fillStyle = '#e9dcbb'; ctx.fillRect(40, y, 1000, 250); for (let i = 0; i < 9; i++) { ctx.fillStyle = [K.red, K.must, K.teal, K.ink2][i % 4]; rrect(70 + i * 110, y + 110, 84, 110, 8); ctx.fill(); } ctx.fillStyle = K.wood; ctx.fillRect(40, y + 330, 1000, 30); ctx.fillStyle = K.woodD; ctx.fillRect(40, y + 360, 1000, 140);
    const w = Math.sin(t * 5) * 18; ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(410, y + 334, 290, 12); ctx.fillStyle = '#efe6cf'; rrect(400, y + 200, 280, 136, 8); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(540, y + 200); ctx.lineTo(540, y + 336); ctx.moveTo(400, y + 268); ctx.lineTo(680, y + 268); ctx.stroke(); ctx.beginPath(); ctx.ellipse(520 + w * .3, y + 190, 24, 14, -.5, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.ellipse(562 - w * .3, y + 190, 24, 14, .5, 0, TAU); ctx.stroke();
    glove(380 + w, y + 300, .5, 1); glove(700 - w, y + 290, -.5, -1); }, 'ITS FIRST SHOP STAFF?', K.ink2);
  panel(850, 500, a2, -1, () => { const y = 850; ctx.fillStyle = '#2f4a3c'; ctx.fillRect(40, y, 1000, 500); ctx.save(); rrect(90, y + 110, 560, 230, 16); ctx.clip(); const sk = ctx.createLinearGradient(0, y + 110, 0, y + 340); sk.addColorStop(0, '#9fd0dc'); sk.addColorStop(1, '#f6e6bd'); ctx.fillStyle = sk; ctx.fillRect(90, y + 110, 560, 230); ctx.fillStyle = '#8a7a5a'; ctx.beginPath(); ctx.moveTo(350, y + 200); ctx.lineTo(390, y + 200); ctx.lineTo(620, y + 340); ctx.lineTo(120, y + 340); ctx.fill(); ctx.strokeStyle = '#3a3f4a'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(360, y + 200); ctx.lineTo(200, y + 340); ctx.moveTo(380, y + 200); ctx.lineTo(540, y + 340); ctx.stroke(); for (let i = 0; i < 6; i++) { const u = ((t * 1.2 + i / 6) % 1), d = u * u, yy = y + 200 + 140 * d; ctx.lineWidth = 2 + 8 * d; ctx.beginPath(); ctx.moveTo(370 - 20 - 170 * d, yy); ctx.lineTo(370 + 20 + 170 * d, yy); ctx.stroke(); } ctx.restore(); ctx.strokeStyle = '#1c2e25'; ctx.lineWidth = 16; rrect(90, y + 110, 560, 230, 16); ctx.stroke();
    ctx.fillStyle = '#1c2e25'; ctx.fillRect(40, y + 400, 1000, 100); ctx.fillStyle = '#8a6a1e'; ctx.beginPath(); ctx.ellipse(800, y + 400, 130, 34, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#c9a23c'; ctx.beginPath(); ctx.ellipse(800, y + 388, 130, 34, 0, 0, TAU); ctx.fill();
    const a = -.5 + .5 * Math.sin(t * 1.6); ctx.save(); ctx.translate(800, y + 388); ctx.rotate(a); ctx.fillStyle = '#8a6a1e'; rrect(-14, -150, 28, 160, 12); ctx.fill(); ctx.fillStyle = '#2a1c12'; ctx.beginPath(); ctx.arc(0, -160, 34, 0, TAU); ctx.fill(); ctx.restore();
    glove(800 + Math.sin(a) * 160, y + 388 - Math.cos(a) * 160 + 6, a * .6 - .15, -1); glove(330, y + 430, .3, 1, 200); }, 'RAILWAYMEN', '#7c2a22');
  { const qa = P(t, T.hands + .3, T.hands + .6) * (1 - a2); if (qa > 0) { ctx.save(); ctx.globalAlpha = qa; big('?', 540, 1210, 380, K.must, 'center', '#05071a'); ctx.restore(); } }
  if (t > r0 + .6) { const k = E.oBack(P(t, r0 + .6, r0 + .95)); plate('SAME HANDS', 540, 828, 50, K.must, K.ink, 1, -.04, k); }
  label('WHO HAD BEEN DRIVING ITS TRAINS', 540, 1392, vis(t, wt(2, 'driving') - .2, T.idea, .3), K.paper, 22);
}

// ------------------------------------------------------------ the idea
function bigStore(x, y, s) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = '#e6dfcf'; ctx.fillRect(-190, -330, 380, 330); ctx.fillStyle = '#cfc5b0'; ctx.fillRect(-204, -346, 408, 24); for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) { ctx.fillStyle = '#f7dc9a'; rrect(-166 + c * 70, -300 + r * 82, 46, 60, [23, 23, 3, 3]); ctx.fill(); } ctx.fillStyle = '#ffd98a'; rrect(-50, -78, 100, 78, [50, 50, 0, 0]); ctx.fill(); ctx.fillStyle = K.red; ctx.fillRect(-120, -400, 240, 54); txt('BIG STORE', 0, -362, font(900, 30), K.paper, 'center', 2); ctx.restore(); }
function iconAd() { ctx.fillStyle = K.ink; rrect(-40, -52, 80, 104, 6); ctx.fill(); ctx.fillStyle = K.paper; rrect(-33, -45, 66, 90, 4); ctx.fill(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(0, -14, 20, 0, TAU); ctx.fill(); ctx.fillStyle = K.ink; ctx.fillRect(-24, 16, 48, 6); ctx.fillRect(-24, 28, 34, 6); }
function iconDeliver(u) { const b = Math.sin(u * 9) * 2; ctx.fillStyle = K.must; rrect(-46, -40 + b, 62, 50, 6); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-15, -40 + b); ctx.lineTo(-15, 10 + b); ctx.stroke(); ctx.strokeStyle = K.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-50, 14); ctx.lineTo(30, 14); ctx.lineTo(54, -30); ctx.stroke(); ctx.fillStyle = K.ink; for (const x of [-30, 14]) { ctx.beginPath(); ctx.arc(x, 32, 15, 0, TAU); ctx.fill(); } }
function iconBus(u) { const b = Math.sin(u * 9) * 2; ctx.fillStyle = K.teal; rrect(-58, -40 + b, 116, 64, 12); ctx.fill(); ctx.fillStyle = '#ffe9a6'; for (let i = 0; i < 4; i++) { rrect(-48 + i * 26, -30 + b, 19, 22, 3); ctx.fill(); } ctx.fillStyle = K.ink; for (const x of [-32, 32]) { ctx.beginPath(); ctx.arc(x, 28, 14, 0, TAU); ctx.fill(); } }
function sceneIdea(t) {
  fillBG('#1f5a57', '#123a3a');
  const n0 = wt(3, 'kobayashi') - .3, a = P(t, n0, n0 + .5);
  ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = K.must; ctx.fillRect(70, 262, 8, 96 * E.o3(a)); txt('KOBAYASHI ICHIZŌ', 100, 304, font(900, 50), K.paper, 'left', 2); jp('小林一三', 780, 302, 40, K.must, 'left'); label('THE BOSS OF HANKYU RAILWAY · HIS REASONING', 102, 346, 1, 'rgba(243,232,207,.8)', 19, 'left'); ctx.restore();
  const s0 = wt(3, 'saw') - .2, sa = E.o3(P(t, s0, s0 + .5)), f0 = wt(3, 'fortunes') - .2;
  ctx.fillStyle = '#0f2e2e'; ctx.fillRect(0, 940, W, 30);
  ctx.save(); ctx.globalAlpha = sa; bigStore(250, 940 + 40 * (1 - sa), 1.05); for (let i = 0; i < 4; i++) walker(640 + i * 118, 946 + (i % 2) * 8, .44, 0, { ...FOLK[(i * 2) % 7], stand: 1 }); ctx.restore();
  if (t > f0) for (let i = 0; i < 9; i++) { const u = ((t - f0) * .7 + i / 9) % 1, x = lerp(300, 640 + (i % 4) * 118, u), y = lerp(760, 720, u) - Math.sin(u * Math.PI) * 190; coin(x, y, 24, Math.sin(u * Math.PI) * P(t, f0, f0 + .3), '¥'); }
  if (t > f0) plate('SPENDING FORTUNES', 660, 520, 50, K.red, K.paper, 1, -.03, E.oBack(P(t, f0, f0 + .3)));
  label('TO LURE SHOPPERS', 800, 1010, P(t, wt(3, 'lure') - .1, wt(3, 'lure') + .3), K.paper, 22);
  badge(200, 1180, t, wt(4, 'ads') - .25, 'ADS', iconAd); badge(540, 1180, t, wt(4, 'delivery') - .35, 'FREE DELIVERY', iconDeliver); badge(880, 1180, t, wt(4, 'shuttle') - .2, 'SHUTTLE BUSES', iconBus);
}
function concourse(t, trainD = 1) {
  ctx.fillStyle = '#b9a98a'; ctx.fillRect(-60, 520, W + 120, 740); ctx.fillStyle = '#a39373'; ctx.fillRect(-60, 500, W + 120, 30);
  ctx.fillStyle = '#16122a'; for (let c = 0; c < 3; c++) { rrect(40 + c * 350, 600, 300, 660, [150, 150, 0, 0]); ctx.fill(); }
  ctx.save(); ctx.beginPath(); for (let c = 0; c < 3; c++) ctx.roundRect(40 + c * 350, 600, 300, 660, [150, 150, 0, 0]); ctx.clip(); ctx.fillStyle = '#2a2440'; ctx.fillRect(0, 1010, W, 20); for (let i = 0; i < 3; i++) trainCar(lerp(-1900, -420, trainD) + i * 580, 1012, 1, t); ctx.fillStyle = '#3a3050'; ctx.fillRect(0, 1030, W, 230); ctx.restore();
  ctx.fillStyle = '#d9c9a4'; ctx.fillRect(-60, 1250, W + 120, 800); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.fillRect(-60, 1250, W + 120, 12);
}
function sceneCrowd(t) {
  fillBG('#3a2b5c', '#3a2b5c'); concourse(t, E.o3(P(t, T.crowd - .4, T.crowd + 1.2)));
  for (let i = 0; i < 8; i++) mini(((i * 150 + (t - T.crowd) * (60 + i * 8)) % 1300) - 100, 1240 - (i % 2) * 10, 1.3, 'rgba(40,30,70,.5)');
  const N = 8; let hero = null; for (let i = 0; i < N; i++) { const o = i / N, x = lerp(-250, 1300, ((t - T.crowd + 2) * .2 + o) % 1), s = [.6, .5, .66, .56, .42, .62, .52, .58][i], g = 1268 + (i % 3) * 14; walker(x, g, s, (t - T.crowd) * 1.4 + o * 3, FOLK[(i + 1) % FOLK.length]); if (i === 2) hero = [x, g - 420 * s]; }
  ctx.fillStyle = 'rgba(20,14,44,.55)'; ctx.fillRect(0, 0, W, 500);
  popText('CUSTOMERS', 540, 340, 120, t, T.crowd + .15, K.paper, -.015, '#0d0820'); popText('ALREADY ON BOARD', 540, 446, 84, t, wt(5, 'crowds') - .1, K.must, -.015, '#0d0820');
  if (hero) reticle(hero[0], hero[1] + 120, 130, t, 'COMMUTER #001', 'EVERY DAY', vis(t, wt(5, 'every') - .3, T.test + .3, .3), K.must);
}

// ------------------------------------------------------------ the test, then the takeover
function shopfront(t, o = {}) {
  fillBG('#274a7a', '#9db7c9'); ctx.fillStyle = '#cdbb92'; ctx.fillRect(-60, 520, W + 120, 740); ctx.fillStyle = '#b9a67c'; ctx.fillRect(-60, 500, W + 120, 30); ctx.fillStyle = 'rgba(0,0,0,.08)'; for (let y = 560; y < 1250; y += 46) ctx.fillRect(-60, y, W + 120, 4);
  const dg = ctx.createLinearGradient(0, 760, 0, 1250); dg.addColorStop(0, '#fff1c0'); dg.addColorStop(1, '#ffc970'); ctx.fillStyle = dg; rrect(610, 760, 400, 490, [200, 200, 0, 0]); ctx.fill(); for (let i = 0; i < 3; i++) mini(700 + i * 110, 1200, 1.4, 'rgba(120,70,30,.3)');
  for (let c = 0; c < 2; c++) { ctx.fillStyle = '#7f8ea6'; rrect(70 + c * 250, 620, 190, 260, 8); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.moveTo(90 + c * 250, 620); ctx.lineTo(150 + c * 250, 620); ctx.lineTo(80 + c * 250, 800); ctx.lineTo(70 + c * 250, 800); ctx.fill(); }
  ctx.fillStyle = '#8a8478'; ctx.fillRect(-60, 1250, W + 120, 800); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(-60, 1250, W + 120, 12);
  const sw = o.swap || 0, fall = E.i2(clamp(sw * 1.4));
  if (fall < 1) { ctx.save(); ctx.translate(790, 650 + fall * 900); ctx.rotate(fall * 1.6); ctx.fillStyle = K.paper; rrect(-190, -44, 380, 88, 8); ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 4; rrect(-180, -34, 360, 68, 4); ctx.stroke(); txt('TENANT STORE', 0, 14, font(900, 38), K.ink, 'center', 3); ctx.restore(); }
  if (sw > .45) { const k = E.oBack(P(sw, .45, .8)); ctx.save(); ctx.translate(790, 650); ctx.scale(lerp(2.2, 1, k), lerp(2.2, 1, k)); ctx.globalAlpha = P(sw, .45, .55); ctx.fillStyle = '#6b1f2a'; rrect(-200, -52, 400, 104, 8); ctx.fill(); jp('阪急', -100, 26, 70, K.must, 'center', .07); txt('HANKYU', 80, 18, font(900, 46), K.paper, 'center', 3); ctx.restore(); }
}
function sceneTest(t) {
  shopfront(t);
  const w0 = wt(7, 'watching') - .3;
  for (let i = 0; i < 5; i++) { const u = ((t - T.test) * .17 + i / 5) % 1, x = lerp(-200, 800, u); ctx.save(); ctx.globalAlpha = 1 - P(x, 660, 800); walker(x, 1266 + (i % 2) * 10, .54 + (i % 3) * .05, (t - T.test) * 1.3 + i * .37, FOLK[(i * 3) % FOLK.length]); ctx.restore(); }
  walker(960, 1262, .7, 0, { ...UNI, stand: 1 });
  // tally clipboard
  const ca = E.oBack(P(t, w0, w0 + .4)); if (ca > 0) { ctx.save(); ctx.translate(250, 760); ctx.rotate(-.05); ctx.scale(ca, ca); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-172, -182, 360, 400, 14); ctx.fill(); ctx.fillStyle = '#8b5a33'; rrect(-180, -190, 360, 400, 14); ctx.fill(); ctx.fillStyle = K.paper; rrect(-160, -150, 320, 344, 6); ctx.fill(); ctx.fillStyle = '#9a9a9a'; rrect(-60, -206, 120, 44, 8); ctx.fill(); txt('SHOPPERS', -140, -100, font(900, 30), K.ink, 'left', 3); ctx.fillStyle = K.ink; ctx.fillRect(-140, -86, 280, 4); const n = Math.min(9, Math.floor((t - w0) * 3.2)); for (let i = 0; i < n; i++) jp('正', -100 + (i % 3) * 100, -20 + Math.floor(i / 3) * 84, 62, K.red, 'center', .05); ctx.restore(); }
  callout(960, 900, -170, -330, 'HANKYU STAFF', 'COUNTING AT THE DOOR', vis(t, w0 + .2, T.take, .6), K.paper, 0);
  ctx.fillStyle = 'rgba(14,30,60,.55)'; ctx.fillRect(0, 0, W, 480);
  popText('THE TEST', 540, 350, 140, t, wt(6, 'tested') - .25, K.paper, -.015, '#0a1830'); plate('RENT OUT A FLOOR · WATCH IT SELL', 540, 440, 38, K.must, K.ink, P(t, wt(6, 'renting') - .2, wt(6, 'renting')), -.02, E.oBack(P(t, wt(6, 'renting') - .2, wt(6, 'renting') + .15)));
  const s0 = wt(6, 'umeda') - .2, sa = E.o3(P(t, s0, s0 + .5)) * (1 - P(t, T.take - .4, T.take)); if (sa > 0) { ctx.save(); ctx.globalAlpha = sa; ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(66, 1296, 960, 70, 12); ctx.fill(); ctx.fillStyle = K.ink; rrect(60, 1290, 960, 70, 12); ctx.fill(); wear('slipper', 84, 1346, .5); txt('1920: SLIPPERS ON, EVEN IN THE DINING HALL', 210, 1336, font(800, 30), K.paper, 'left', 1); ctx.restore(); }
}
function sceneTake(t) {
  const y0 = wt(8, '1925') - .25, tk = wt(8, 'took') - .2;
  shopfront(t, { swap: P(t, tk - .3, tk + .9) });
  for (let i = 0; i < 4; i++) { const u = ((t - T.take) * .17 + i / 4) % 1, x = lerp(-200, 800, u); ctx.save(); ctx.globalAlpha = 1 - P(x, 660, 800); walker(x, 1266 + (i % 2) * 10, .54 + (i % 3) * .05, (t - T.take) * 1.3 + i * .37, FOLK[(i * 3 + 1) % FOLK.length]); ctx.restore(); }
  walker(960, 1262, .7, 0, { ...UNI, stand: 1 });
  const a0 = LS(9) - .2, p = E.o3(P(t, a0, a0 + .6)); if (p > 0) { ctx.save(); ctx.translate(lerp(-400, 300, p), 880); ctx.rotate(lerp(-.6, -.04, p)); ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(-228, -288, 480, 600); ctx.fillStyle = '#efe6cf'; ctx.fillRect(-240, -300, 480, 600); ctx.strokeStyle = '#222'; ctx.lineWidth = 6; ctx.strokeRect(-222, -282, 444, 564); ctx.lineWidth = 2; ctx.strokeRect(-212, -272, 424, 544);
    txt('NOTICE', 0, -210, font(700, 26, F.m), '#222', 'center', 10); ctx.fillStyle = '#222'; ctx.fillRect(-180, -190, 360, 4);
    txt('WANTED:', 0, -110, font(900, 70), '#222', 'center', 2); txt('WHOLESALERS', 0, -30, font(900, 56), K.red, 'center'); ctx.fillStyle = '#222'; ctx.fillRect(-180, 0, 360, 3);
    txt('Tell us', 0, 62, font(700, 40), '#222', 'center'); txt('what to stock.', 0, 112, font(700, 40), '#222', 'center'); txt('— HANKYU, 1925', 0, 186, font(800, 28), '#222', 'center', 2); txt('PARAPHRASE · ILLUSTRATION', 0, 254, font(500, 16, F.m), 'rgba(40,40,40,.7)', 'center', 3); ctx.restore(); }
  callout(960, 900, -170, -330, 'AMATEURS', 'RAILWAYMEN, NOT RETAILERS', vis(t, wt(9, 'amateurs') - .3, T.umeda, .6), K.must, 0);
  ctx.fillStyle = 'rgba(14,30,60,.55)'; ctx.fillRect(0, 0, W, 480);
  digits('1925', t, y0, 392); if (t > tk) plate('HANKYU TAKES OVER', 540, 446, 48, K.red, K.paper, 1, -.03, E.oBack(P(t, tk, tk + .3)));
}

// ------------------------------------------------------------ Umeda, 15 April 1929: the eight-storey cutaway
const BX = 110, BW = 690, F1 = 1270, FH = 84, GH = 176;
function floorY(k) { return k === 1 ? F1 - GH : F1 - GH - (k - 1) * FH; }   // top of floor k
function cutaway(t, grow, hl) {       // grow: floors shown (0..8, fractional), hl: 0 none, 1 concourse, 2 shop, 3 dining
  for (let k = 1; k <= 8; k++) { const p = E.oBack(clamp(grow - (k - 1))); if (p <= 0) continue; const y = floorY(k), h = k === 1 ? GH : FH, grp = k === 1 ? 1 : k <= 6 ? 2 : 3, dim = hl && hl !== grp;
    ctx.save(); ctx.globalAlpha = clamp(p * 2); ctx.translate(0, -40 * (1 - p));
    ctx.fillStyle = '#b9a98a'; ctx.fillRect(BX, y, BW, h);
    if (k === 1) { ctx.fillStyle = '#2a2440'; ctx.fillRect(BX + 20, y + 18, BW - 40, h - 18); ctx.save(); ctx.beginPath(); ctx.rect(BX + 20, y + 18, BW - 40, h - 18); ctx.clip(); trainCar(BX + 40 + 30 * Math.sin(t * .5), F1 - 8, .7, t); for (let i = 0; i < 5; i++) mini(BX + 480 + i * 42 + 8 * Math.sin(t * 2 + i), F1 - 2, .62, ['#d9d2c2', '#c9b071', '#9db7c9'][i % 3]); ctx.restore(); ctx.fillStyle = '#b9a98a'; for (let c = 0; c < 5; c++) ctx.fillRect(BX + c * (BW - 22) / 4, y + 18, 22, h - 18); }
    else { ctx.fillStyle = grp === 2 ? '#f3e2b4' : '#ffd98a'; ctx.fillRect(BX + 16, y + 12, BW - 32, h - 12); ctx.fillStyle = '#8f7c55'; ctx.fillRect(BX + 16, y + h - 8, BW - 32, 8);
      if (grp === 2) for (let i = 0; i < 6; i++) { const x = BX + 60 + i * 106, c = [K.red, K.teal, K.ink2, K.must, '#7c2a22'][(i + k) % 5]; if ((i + k) % 3 === 0) { ctx.fillStyle = '#8b5a33'; ctx.fillRect(x - 26, y + h - 34, 52, 26); ctx.fillStyle = c; ctx.fillRect(x - 20, y + h - 48, 16, 14); ctx.fillStyle = K.must; ctx.fillRect(x + 2, y + h - 52, 16, 18); } else if ((i + k) % 3 === 1) { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(x - 24, y + 26); ctx.lineTo(x + 24, y + 26); ctx.lineTo(x + 24, y + 44); ctx.lineTo(x + 12, y + 44); ctx.lineTo(x + 14, y + h - 10); ctx.lineTo(x - 14, y + h - 10); ctx.lineTo(x - 12, y + 44); ctx.lineTo(x - 24, y + 44); ctx.fill(); } else mini(x, y + h - 8, .52, c); }
      else for (let i = 0; i < 5; i++) { const x = BX + 80 + i * 132; ctx.fillStyle = '#efe6cf'; rrect(x - 40, y + h - 36, 80, 10, 4); ctx.fill(); ctx.fillStyle = '#8b5a33'; ctx.fillRect(x - 4, y + h - 28, 8, 20); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(x - 16, y + h - 39, 12, 4, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(x + 16, y + h - 39, 12, 4, 0, 0, TAU); ctx.fill(); mini(x - 58, y + h - 8, .46, K.ink2); mini(x + 58, y + h - 8, .46, '#7c2a22'); } }
    if (dim) { ctx.fillStyle = 'rgba(13,18,48,.62)'; ctx.fillRect(BX, y, BW, h); }
    txt(k + 'F', BX - 14, y + h - 22, font(800, 26, F.m), dim ? 'rgba(243,232,207,.4)' : K.paper, 'right');
    ctx.restore(); }
  if (grow >= 8) { ctx.fillStyle = '#a39373'; ctx.fillRect(BX - 14, floorY(8) - 18, BW + 28, 20); }
}
function bracket(k0, k1, title, sub, a, col) { if (a <= 0) return; const y0 = floorY(k1) + 6, y1 = floorY(k0) + (k0 === 1 ? GH : FH) - 6, x = BX + BW + 22, q = E.o3(a); ctx.save(); ctx.globalAlpha = clamp(a * 2); ctx.strokeStyle = col; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x + 16, y0); ctx.lineTo(x + 16, lerp(y0, y1, q)); if (q >= 1) ctx.lineTo(x, y1); ctx.stroke(); const cy = (y0 + y1) / 2; txt(title, x + 34, cy + 2, font(900, 29), col, 'left', 0); txt(sub, x + 34, cy + 32, font(600, 17, F.m), 'rgba(243,232,207,.85)', 'left', 2); ctx.restore(); }
function sceneUmeda(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, '#0d1230'); g.addColorStop(1, '#3a2b5c'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = '#16122a'; ctx.fillRect(-60, F1, W + 120, 900);
  const g0 = wt(10, 'hankyu') - .2, g1 = LS(11) - .5, grow = 8 * P(t, g0, g1);
  const c1 = wt(11, 'concourse') - .3, c2 = wt(11, 'shop') - .3, c3 = wt(11, 'dining') - .3, hl = t > c3 ? 3 : t > c2 ? 2 : t > c1 ? 1 : 0;
  cutaway(t, grow, hl);
  bracket(1, 1, 'CONCOURSE', 'STREET LEVEL', P(t, c1, c1 + .4), K.must); bracket(2, 6, 'SHOP', 'FLOORS', P(t, c2, c2 + .4), K.paper); bracket(7, 8, 'DINING', 'HALLS', P(t, c3, c3 + .4), '#ffd98a');
  // commuter #001 rides up
  const hx = BX + 430, hy = t > c3 ? floorY(7) + FH - 8 : t > c2 ? floorY(4) + FH - 8 : F1 - 2; if (t > c1) { const j = t > c3 ? P(t, c3, c3 + .3) : t > c2 ? P(t, c2, c2 + .3) : 1; mini(hx, hy - Math.sin(j * Math.PI) * 30, .66, K.red); reticle(hx, hy - 30, 46, t, '#001', '', vis(t, c1, T.promise + .3, .3), K.red); }
  ctx.fillStyle = 'rgba(8,10,30,.5)'; ctx.fillRect(0, 0, W, 500);
  const d0 = wt(10, 'april') - .25; digits('1929', t, wt(10, '1929') - .3, 400); if (t > d0) plate('15 APRIL', 250, 280, 50, K.red, K.paper, 1, -.04, E.oBack(P(t, d0, d0 + .3)));
  const e0 = wt(10, 'eightstorey') - .2; if (t > e0) plate('8 STOREYS · UMEDA STATION', 620, 462, 38, K.paper, K.ink, 1, .015, E.oBack(P(t, e0, e0 + .3)));
}
function scenePromise(t) {
  fillBG('#6b1f2a', '#3a0f16'); rays(540, 880, t, .05, .25, '0,0,0');
  const p = E.o3(P(t, T.promise, T.promise + .6));
  ctx.save(); ctx.translate(540, lerp(2100, 870, p)); ctx.rotate(lerp(.15, -.025, p));
  ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(-418, -508, 860, 1040); ctx.fillStyle = '#efe6cf'; ctx.fillRect(-430, -520, 860, 1040); ctx.strokeStyle = '#222'; ctx.lineWidth = 8; ctx.strokeRect(-404, -494, 808, 988); ctx.lineWidth = 2; ctx.strokeRect(-390, -480, 780, 960);
  jp('阪急百貨店', 0, -380, 84, '#6b1f2a', 'center', .06); txt('HANKYU DEPARTMENT STORE · NOW OPEN', 0, -320, font(800, 26), '#222', 'center', 3); ctx.fillStyle = '#222'; ctx.fillRect(-340, -296, 680, 4);
  const b = wt(12, 'best') - .25, c = wt(12, 'cheaper') - .25;
  ctx.save(); ctx.globalAlpha = P(t, b, b + .15); ctx.translate(0, -150); const kb = E.oBack(P(t, b, b + .3)); ctx.scale(kb, kb); txt('THE BEST', 0, 0, font(900, 124), '#222', 'center'); txt('GOODS,', 0, 118, font(900, 124), '#222', 'center'); ctx.restore();
  ctx.save(); ctx.globalAlpha = P(t, c, c + .15); ctx.translate(0, 150); const kc = E.oBack(P(t, c, c + .3)); ctx.scale(kc, kc); ctx.fillStyle = K.red; rrect(-350, -100, 700, 250, 10); ctx.fill(); txt('CHEAPER', 0, 6, font(900, 120), '#efe6cf', 'center'); txt('THAN ANYWHERE.', 0, 104, font(900, 72), K.must, 'center'); ctx.restore();
  txt('UMEDA STATION · 15 APRIL 1929', 0, 400, font(800, 28), '#222', 'center', 3); txt('OPENING-DAY AD · ILLUSTRATION', 0, 456, font(500, 16, F.m), 'rgba(40,40,40,.7)', 'center', 3);
  ctx.restore();
  ctx.fillStyle = 'rgba(40,8,12,.5)'; ctx.fillRect(0, 0, W, 330); popText('ITS PROMISE', 540, 300, 76, t, T.promise + .2, K.paper, -.015, '#1d0508');
}

// ------------------------------------------------------------ the dining hall
function curry(x, y, s, t) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(10, 16, 330, 250, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.ellipse(0, 0, 330, 250, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = '#24407a'; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(0, 0, 300, 222, 0, 0, TAU); ctx.stroke(); ctx.fillStyle = '#ebe5d6'; ctx.beginPath(); ctx.ellipse(0, 0, 250, 180, 0, 0, TAU); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.ellipse(0, 0, 240, 172, 0, 0, TAU); ctx.clip(); ctx.fillStyle = '#9a5a1c'; ctx.fillRect(-20, -200, 300, 400); ctx.fillStyle = '#b06c22'; ctx.beginPath(); ctx.ellipse(120, 10, 110, 130, 0, 0, TAU); ctx.fill();
  const r = rng(9); for (let i = 0; i < 12; i++) { ctx.fillStyle = ['#e08a2a', '#e9cf8a', '#6b3a14'][i % 3]; rrect(20 + r() * 180, -130 + r() * 250, 30 + r() * 16, 26 + r() * 12, 8); ctx.fill(); }
  ctx.fillStyle = '#fbfaf4'; ctx.beginPath(); ctx.moveTo(40, -190); ctx.quadraticCurveTo(-10, -60, 30, 0); ctx.quadraticCurveTo(-20, 80, 40, 190); ctx.lineTo(-260, 190); ctx.lineTo(-260, -190); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.06)'; for (let i = 0; i < 40; i++) { ctx.beginPath(); ctx.ellipse(-220 + r() * 230, -150 + r() * 300, 7, 4, r() * 3, 0, TAU); ctx.fill(); }
  ctx.restore(); ctx.fillStyle = K.red; for (let i = 0; i < 7; i++) { rrect(-150 + (i * 37) % 60, 96 + (i * 23) % 36, 22, 10, 4); ctx.fill(); }
  ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 8; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { const ph = (t * .5 + i / 3) % 1; ctx.globalAlpha = Math.sin(ph * Math.PI) * .8; ctx.beginPath(); for (let k = 0; k <= 8; k++) { const yy = -120 - ph * 160 - k * 16, xx = -40 + i * 90 + Math.sin(k * .9 + t * 2 + i) * 14; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } ctx.globalAlpha = 1;
  ctx.restore();
}
function table() { fillBG('#5b3a20', '#2e1c0e'); ctx.fillStyle = 'rgba(255,255,255,.035)'; for (let i = 0; i < 9; i++) ctx.fillRect(0, 200 + i * 190, W, 6); const g = ctx.createRadialGradient(540, 900, 100, 540, 900, 900); g.addColorStop(0, 'rgba(255,210,140,.16)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
function priceCard(x, y, rot, k, strike = 0) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-232, -92, 480, 200, 10); ctx.fill(); ctx.fillStyle = K.paper; rrect(-240, -100, 480, 200, 10); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 6; rrect(-226, -86, 452, 172, 6); ctx.stroke(); jp('カレーライス', -206, -22, 44, K.ink, 'left', .06); txt('CURRY RICE', -204, 30, font(900, 34), K.ink, 'left', 2); txt('25', 120, 30, font(900, 120), K.red, 'center'); txt('SEN', 120, 70, font(900, 30), K.red, 'center', 6); if (strike > 0) { ctx.strokeStyle = K.ink; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(40, 50); ctx.lineTo(40 + 170 * strike, 50 - 110 * strike); ctx.stroke(); } ctx.restore(); }
function sceneDining(t) {
  table(); const z = E.o3(P(t, T.dining, T.dining + .8)); curry(540, 900, lerp(.7, 1, z), t);
  const p0 = wt(13, 'paid') - .2; if (t > p0) for (let i = 0; i < 7; i++) { const u = ((t - p0) * .8 + i / 7) % 1; coin(lerp(600, 880, u), lerp(760, 560, u) - Math.sin(u * Math.PI) * 120, 22, Math.sin(u * Math.PI), '¥'); }
  if (t > p0) { const k = E.oBack(P(t, p0, p0 + .35)); ctx.save(); ctx.translate(900, 540); ctx.rotate(.14); ctx.scale(k, k); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(-110, 0); ctx.lineTo(-60, -52); ctx.lineTo(120, -52); ctx.lineTo(120, 52); ctx.lineTo(-60, 52); ctx.closePath(); ctx.fill(); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(-70, 0, 10, 0, TAU); ctx.fill(); txt('BARGAINS', 36, 12, font(900, 30), K.paper, 'center', 1); ctx.restore(); }
  const c0 = wt(14, '25') - .3; if (t > c0) priceCard(310, 1260, -.06, E.oBack(P(t, c0, c0 + .35)));
  ctx.fillStyle = 'rgba(30,16,6,.55)'; ctx.fillRect(0, 0, W, 470);
  popText('THE DINING HALLS', 540, 340, 92, t, T.dining + .2, K.paper, -.015, '#170c04'); if (t > p0) plate('PAID FOR THE BARGAINS', 540, 436, 50, K.must, K.ink, 1, -.02, E.oBack(P(t, p0, p0 + .3)));
}
function sceneCut(t) {
  table(); curry(760, 1130, .62, t);
  const y0 = wt(15, '1931') - .25, c0 = wt(15, 'cut') - .2, h0 = wt(16, 'half') - .3;
  priceCard(310, 1260, -.06, 1, E.o3(P(t, c0, c0 + .3)));
  // one sen, cut in half
  const sp = E.o3(P(t, h0, h0 + .5)), a = P(t, LS(16) - .3, LS(16)); if (a > 0) { ctx.save(); ctx.globalAlpha = a; const cx = 300, cy = 760, R = 150;
    for (const sd of [-1, 1]) { ctx.save(); ctx.translate(cx + sd * 40 * sp, cy); ctx.rotate(sd * .12 * sp); ctx.beginPath(); ctx.rect(sd < 0 ? -R - 20 : 0, -R - 20, R + 20, 2 * R + 40); ctx.clip(); ctx.globalAlpha = a * (sd > 0 ? lerp(1, .35, sp) : 1); coin(0, 0, R, 1); txt('1', 0, 20, font(900, 150), '#7a5a10', 'center'); txt('SEN', 0, 80, font(900, 40), '#7a5a10', 'center', 6); ctx.restore(); }
    ctx.restore(); }
  if (t > h0) { popText('½ SEN', 740, 720, 150, t, h0 + .1, K.must, -.03, '#170c04'); label('PROFIT PER PLATE', 740, 790, P(t, wt(16, 'profit') - .2, wt(16, 'profit') + .2), K.paper, 30); plate('“ENOUGH.”', 740, 880, 54, K.paper, K.ink, P(t, wt(16, 'enough') - .2, wt(16, 'enough')), -.03, E.oBack(P(t, wt(16, 'enough') - .2, wt(16, 'enough') + .15))); }
  ctx.fillStyle = 'rgba(30,16,6,.55)'; ctx.fillRect(0, 0, W, 490);
  digits('1931', t, y0, 392, 190, K.must, '#170c04'); if (t > c0) plate('PRICES CUT AGAIN', 540, 448, 50, K.red, K.paper, 1, -.03, E.oBack(P(t, c0, c0 + .3)));
}
function sceneLegend(t) {
  table(); ctx.fillStyle = '#3a2412'; ctx.fillRect(0, 1180, W, 900); ctx.fillStyle = '#7a5230'; ctx.fillRect(0, 1150, W, 40);
  // bowl of plain rice
  const bx = 400, by = 1150; ctx.fillStyle = '#fbfaf4'; ctx.beginPath(); ctx.ellipse(bx, by - 190, 200, 120, 0, Math.PI, 0); ctx.fill(); const r = rng(4); ctx.fillStyle = 'rgba(0,0,0,.07)'; for (let i = 0; i < 40; i++) { ctx.beginPath(); ctx.ellipse(bx - 170 + r() * 340, by - 200 - r() * 90, 8, 4, r() * 3, 0, TAU); ctx.fill(); }
  const w0 = wt(18, 'welcomed') - .1, po = P(t, w0, w0 + 1.2); if (po > 0) { ctx.strokeStyle = '#4a2410'; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i <= 30 * po; i++) { const x = bx - 130 + i * 9, y = by - 250 - 40 * Math.sin(i * .5) * Math.sin(i * .1 + 1); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); }
  ctx.fillStyle = K.ink2; ctx.beginPath(); ctx.moveTo(bx - 220, by - 190); ctx.lineTo(bx + 220, by - 190); ctx.quadraticCurveTo(bx + 200, by - 30, bx + 90, by - 20); ctx.lineTo(bx - 90, by - 20); ctx.quadraticCurveTo(bx - 200, by - 30, bx - 220, by - 190); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.fillRect(bx - 216, by - 190, 432, 14); ctx.fillStyle = K.ink2; rrect(bx - 80, by - 26, 160, 28, 6); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 8; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { const ph = (t * .5 + i / 3) % 1; ctx.globalAlpha = Math.sin(ph * Math.PI) * .8; ctx.beginPath(); for (let k = 0; k <= 8; k++) { const yy = by - 330 - ph * 140 - k * 14, xx = bx - 90 + i * 90 + Math.sin(k * .9 + t * 2 + i) * 12; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } ctx.globalAlpha = 1;
  // sauce bottle
  const tilt = -1.1 * Math.sin(P(t, w0 - .1, w0 + 1.3) * Math.PI), sx = lerp(820, 690, Math.abs(tilt) / 1.1), sy = lerp(1150, 900, Math.abs(tilt) / 1.1); ctx.save(); ctx.translate(sx, sy); ctx.rotate(tilt); ctx.fillStyle = '#3a1c0c'; rrect(-60, -250, 120, 250, 18); ctx.fill(); rrect(-26, -330, 52, 96, 10); ctx.fill(); ctx.fillStyle = K.red; rrect(-30, -350, 60, 30, 6); ctx.fill(); ctx.fillStyle = K.paper; rrect(-50, -190, 100, 120, 6); ctx.fill(); jp('ソース', 0, -128, 30, K.red, 'center', .06); txt('SAUCE', 0, -94, font(900, 20), K.ink, 'center', 2); ctx.restore();
  label('PLAIN RICE', 400, 1250, vis(t, T.legend + .5, T.tokyo, .4), K.paper, 24); label('+ SAUCE', 820, 1250, vis(t, T.legend + .8, T.tokyo, .4), K.must, 24);
  ctx.fillStyle = 'rgba(30,16,6,.55)'; ctx.fillRect(0, 0, W, 470);
  const o0 = wt(17, 'other') - .2, r0 = wt(17, 'riceonly') - .2;
  popText('RICE ONLY?', 540, 350, 120, t, r0, K.paper, -.015, '#170c04'); if (t > o0) plate('OTHER STORES: NO', 540, 446, 46, K.ink, K.paper, 1 - P(t, w0 - .2, w0), -.02, E.oBack(P(t, wt(17, 'turned') - .2, wt(17, 'turned') + .1)));
  if (t > w0 - .2) plate('HANKYU: WELCOME', 540, 446, 54, K.must, K.ink, 1, -.02, E.oBack(P(t, w0 - .2, w0 + .1)));
  stamp(t, wt(17, 'legend') - .25, 820, 640, 'LEGEND', K.red, .12, 70);
}

// ------------------------------------------------------------ copycats: Shibuya 1934, then the horseshoe
function sceneTokyo(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, '#274a7a'); g.addColorStop(1, '#e9c9a0'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  // route strip
  const a = E.o3(P(t, T.tokyo, T.tokyo + .8));
  // Shibuya terminal store
  const rise = E.o3(P(t, T.tokyo + .1, T.tokyo + 1.1)); ctx.save(); ctx.translate(0, (1 - rise) * 800);
  ctx.fillStyle = '#d6cdb8'; rrect(420, 620, 560, 640, [40, 0, 0, 0]); ctx.fill(); ctx.fillStyle = '#b9ae98'; ctx.fillRect(420, 1000, 560, 14);
  for (let r2 = 0; r2 < 5; r2++) { ctx.fillStyle = '#4a5f7a'; rrect(450, 660 + r2 * 68, 500, 40, 6); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.18)'; for (let c = 0; c < 8; c++) ctx.fillRect(458 + c * 62, 664 + r2 * 68, 3, 32); }
  
  ctx.restore();
  ctx.fillStyle = '#6f6a60'; ctx.fillRect(-60, 1060, 760, 24); for (let i = 0; i < 4; i++) ctx.fillRect(40 + i * 190, 1084, 30, 180);
  const tr = E.o3(P(t, wt(19, 'opened') - .6, wt(19, 'opened') + 1.6)); ctx.save(); ctx.translate(lerp(-1300, 60, tr), 1062); ctx.scale(.86, .86); for (let i = 0; i < 2; i++) { ctx.save(); ctx.translate(i * 580 - 580, 0); ctx.fillStyle = '#2f5d50'; rrect(0, -150, 560, 130, 14); ctx.fill(); ctx.fillStyle = '#1f3f36'; ctx.fillRect(0, -42, 560, 22); ctx.fillStyle = '#ffe2a0'; for (let k = 0; k < 7; k++) { rrect(26 + k * 74, -128, 54, 56, 6); ctx.fill(); } ctx.fillStyle = '#c9c0a8'; rrect(0, -160, 560, 16, 8); ctx.fill(); ctx.fillStyle = '#16171c'; for (const wx of [80, 150, 410, 480]) { ctx.beginPath(); ctx.arc(wx, -8, 22, 0, TAU); ctx.fill(); } ctx.restore(); } ctx.restore();
  ctx.fillStyle = '#8a8478'; ctx.fillRect(-60, 1260, W + 120, 800); for (let i = 0; i < 6; i++) mini(((i * 210 + t * (20 + i * 6)) % 1300) - 100, 1300 + (i % 2) * 14, 1.3, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]);
  ctx.fillStyle = K.red; ctx.fillRect(880, 1010, 90, 230); jp('東', 925, 1090, 56, K.paper, 'center', .06); jp('横', 925, 1170, 56, K.paper, 'center', .06); txt('STORE', 925, 1216, font(900, 20), K.paper, 'center', 1);
  label('SHIBUYA TERMINAL', 330, 1150, P(t, wt(19, 'terminal') - .2, wt(19, 'terminal') + .2), K.ink, 22);
  ctx.fillStyle = 'rgba(14,30,60,.6)'; ctx.fillRect(0, 0, W, 590);
  ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = 'rgba(243,232,207,.6)'; ctx.lineWidth = 5; ctx.setLineDash([14, 12]); ctx.lineDashOffset = -t * 40; ctx.beginPath(); ctx.moveTo(190, 300); ctx.lineTo(lerp(190, 890, a), 300); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = '#6b1f2a'; ctx.beginPath(); ctx.arc(190, 300, 20, 0, TAU); ctx.fill(); ctx.strokeStyle = K.paper; ctx.lineWidth = 5; ctx.stroke(); txt('OSAKA · 1929', 190, 356, font(800, 24), K.paper, 'center', 2); ctx.restore();
  const y0 = wt(19, '1934') - .25; if (t > y0) { ctx.fillStyle = '#2f5d50'; ctx.beginPath(); ctx.arc(890, 300, 20 * E.oBack(P(t, y0, y0 + .3)), 0, TAU); ctx.fill(); ctx.strokeStyle = K.paper; ctx.lineWidth = 5; ctx.stroke(); txt('TOKYO · 1934', 890, 356, font(800, 24), K.must, 'center', 2); }
  const s0 = wt(19, 'shibuya') - .3; popText('SHIBUYA · 1934', 540, 474, 104, t, s0, K.paper, -.015, '#0a1830'); if (t > s0 + .2) { ctx.fillStyle = 'rgba(0,0,0,0)'; }
  const g0 = wt(19, 'gotō') - .3; label('GOTŌ KEITA 五島慶太 · RAILWAY BOSS', 540, 552, vis(t, g0, T.shoe, .4), K.paper, 22);
  const k0 = wt(20, 'credited') - .2; if (t > k0) { const k = E.oBack(P(t, k0, k0 + .35)); ctx.save(); ctx.translate(300, 770); ctx.rotate(-.04); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-232, -92, 480, 200, 20); ctx.fill(); ctx.fillStyle = K.paper; rrect(-240, -100, 480, 200, 20); ctx.fill(); ctx.beginPath(); ctx.moveTo(120, 96); ctx.lineTo(190, 170); ctx.lineTo(180, 96); ctx.fill(); txt('THE IDEA?', 0, -30, font(900, 46), K.ink, 'center'); txt('KOBAYASHI’S.', 0, 46, font(900, 58), K.red, 'center'); ctx.restore(); label('— CREDITED BY GOTŌ', 300, 1000, P(t, k0 + .4, k0 + .7), K.ink, 20); }
}
function sceneShoe(t) {
  fillBG('#16305a', '#0d1c38'); ctx.strokeStyle = 'rgba(160,200,255,.08)'; ctx.lineWidth = 2; for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); } for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  // tracks ending in buffer stops
  for (let i = 0; i < 6; i++) { const x = 330 + i * 84; ctx.strokeStyle = 'rgba(200,220,255,.75)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x - 9, 480); ctx.lineTo(x - 9, 1040); ctx.moveTo(x + 9, 480); ctx.lineTo(x + 9, 1040); ctx.stroke(); ctx.lineWidth = 3; for (let y = 490; y < 1040; y += 26) { ctx.beginPath(); ctx.moveTo(x - 16, y); ctx.lineTo(x + 16, y); ctx.stroke(); } ctx.fillStyle = K.red; ctx.fillRect(x - 20, 1040, 40, 10);
    if (i % 2 === 0) { ctx.fillStyle = 'rgba(200,220,255,.16)'; ctx.fillRect(x + 22, 620, 40, 420); }
    const d = E.o3(P(t, T.shoe + i * .25, T.shoe + 2 + i * .25)); ctx.fillStyle = '#6b1f2a'; rrect(x - 15, lerp(-300, 760 + (i % 3) * 50, d), 30, 260, 8); ctx.fill(); }
  label('UMEDA STATION · PLATFORMS', 540, 1092, P(t, T.shoe + .4, T.shoe + .8), 'rgba(200,220,255,.9)', 20);
  // the horseshoe
  const w0 = wt(21, 'wrapped') - .4, u = E.io2(P(t, w0, w0 + 1.6)); ctx.strokeStyle = K.must; ctx.lineWidth = 120; ctx.lineJoin = 'round'; ctx.lineCap = 'butt';
  const pts = [[190, 700], [190, 1180], [890, 1180], [890, 700]], L = [480, 700, 480], tot = 1660; let rem = u * tot; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 0; i < 3 && rem > 0; i++) { const f = Math.min(1, rem / L[i]); ctx.lineTo(lerp(pts[i][0], pts[i + 1][0], f), lerp(pts[i][1], pts[i + 1][1], f)); rem -= L[i]; } if (u > 0) ctx.stroke();
  if (u >= 1) { ctx.fillStyle = 'rgba(0,0,0,.15)'; for (let x = 150; x < 940; x += 60) ctx.fillRect(x, 1124, 3, 112); txt('HANKYU BUILDING', 540, 1198, font(900, 50), K.ink, 'center', 4); }
  label('SCHEMATIC PLAN · NOT TO SCALE', 540, 1320, P(t, w0, w0 + .4) * .85, 'rgba(200,220,255,.9)', 18);
  ctx.fillStyle = 'rgba(8,16,40,.6)'; ctx.fillRect(0, 0, W, 470);
  digits('1936', t, wt(21, '1936') - .25, 392); const h0 = wt(21, 'horseshoe') - .3; if (t > h0) plate('LIKE A HORSESHOE', 540, 448, 52, K.red, K.paper, 1, -.03, E.oBack(P(t, h0, h0 + .3)));
}

// ------------------------------------------------------------ tease: the plate with a flag
function fujiPlate(x, y, s, t, mound = 1, flag = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(8, 22, 430, 80, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.ellipse(0, 0, 430, 80, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#e4dece'; ctx.beginPath(); ctx.ellipse(0, 4, 340, 54, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(0, 0, 410, 70, 0, 0, TAU); ctx.stroke();
  const m = E.oBack(mound); if (m > 0) { ctx.save(); ctx.translate(-60, 0); ctx.scale(1, m); ctx.fillStyle = '#e8763a'; ctx.beginPath(); ctx.moveTo(-210, 6); ctx.quadraticCurveTo(-110, -30, -46, -250); ctx.quadraticCurveTo(0, -272, 46, -250); ctx.quadraticCurveTo(110, -30, 210, 6); ctx.quadraticCurveTo(0, 40, -210, 6); ctx.fill(); const r = rng(6); ctx.fillStyle = 'rgba(255,220,170,.5)'; for (let i = 0; i < 50; i++) { const yy = -r() * 230, hw = 30 + (230 + yy) * .62; ctx.beginPath(); ctx.ellipse((r() - .5) * 2 * hw * .8, yy, 8, 4, r() * 3, 0, TAU); ctx.fill(); } ctx.fillStyle = '#3e8a4a'; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(-100 + i * 50, -40 - (i % 2) * 50, 8, 0, TAU); ctx.fill(); } ctx.restore(); }
  ctx.fillStyle = '#f0c84a'; ctx.beginPath(); ctx.ellipse(230, -24, 96, 44, -.1, 0, TAU); ctx.fill(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.ellipse(236, -40, 50, 12, -.1, 0, TAU); ctx.fill(); ctx.fillStyle = '#8a4a1c'; ctx.beginPath(); ctx.ellipse(-290, -18, 60, 34, .1, 0, TAU); ctx.fill();
  if (flag > 0) { const f = E.oBack(flag), dy = -300 * (1 - E.o3(flag)); ctx.save(); ctx.translate(-60, -255 + dy); ctx.rotate(.08); ctx.globalAlpha = clamp(flag * 3); ctx.strokeStyle = '#c9a66b'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 40); ctx.lineTo(0, -190); ctx.stroke(); const wv = Math.sin(t * 4) * 6; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(4, -190); ctx.quadraticCurveTo(80, -200 + wv, 150, -186); ctx.lineTo(150, -96); ctx.quadraticCurveTo(80, -110 + wv, 4, -100); ctx.fill(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(78, -146 + wv * .5, 26, 0, TAU); ctx.fill(); ctx.restore(); }
  ctx.restore();
}
function sceneTease(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .05, .15, '0,0,0');
  ctx.fillStyle = '#efe6cf'; ctx.fillRect(0, 1130, W, 900); ctx.fillStyle = 'rgba(220,74,51,.25)'; for (let x = 0; x < W; x += 120) ctx.fillRect(x, 1130, 60, 900); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 1130, W, 10);
  const m0 = wt(23, 'shaped') - .2, f0 = wt(23, 'flag') - .45, z = E.io2(P(t, T.tease, T.end));
  fujiPlate(540, 1150, lerp(.96, 1.08, z), t, P(t, m0, m0 + .5), P(t, f0, f0 + .45));
  callout(470, 1010, -200, -250, 'A TINY MT. FUJI', 'SHAPED FROM RICE', vis(t, wt(23, 'mount') - .2, T.end, .6), K.paper, 0);
  ctx.fillStyle = 'rgba(40,10,8,.5)'; ctx.fillRect(0, 0, W, 470);
  digits('1930', t, wt(22, '1930') - .25, 392, 190, K.must, '#2a0b08'); label('A TOKYO DEPARTMENT-STORE DINING HALL', 540, 446, P(t, wt(22, 'tokyo') - .2, wt(22, 'tokyo') + .3), K.paper, 22);
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const p = E.o3(P(t, T.end, T.end + .6));
  ctx.save(); ctx.translate(540, lerp(-300, 640, p)); ctx.rotate(lerp(.25, -.04, p)); ctx.fillStyle = 'rgba(0,0,0,.45)'; rrect(-388, -238, 800, 500, 8); ctx.fill(); ctx.fillStyle = '#efe3c4'; rrect(-400, -250, 800, 500, 8); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.rect(-372, -222, 744, 390); ctx.clip(); ctx.fillStyle = '#b5382a'; ctx.fillRect(-372, -222, 744, 390); ctx.fillStyle = '#efe6cf'; ctx.fillRect(-372, 90, 744, 100); fujiPlate(0, 100, .72, t, 1, 1); ctx.restore();
  txt('EPISODE 4', -372, 218, font(800, 26), '#5b3a20', 'left', 4); txt('ILLUSTRATION', 372, 216, font(500, 16, F.m), 'rgba(91,58,32,.8)', 'right', 3); ctx.restore();
  const n = T.end + .45; plate('NEXT', 190, 1010, 56, K.red, K.paper, P(t, n, n + .1), -.04, E.oBack(P(t, n, n + .3)));
  ['The plate', 'with a flag'].forEach((s, i) => { const a = E.o3(P(t, n + .2 + i * .14, n + .65 + i * .14)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 1150 + i * 116 + 30 * (1 - a), 108, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
}

window.FILM = {
  title: 'THE STORE INSIDE THE STATION', tag: 'EP 3 · JAPAN’S DEPARTMENT STORES',
  hotLines: [17],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.hands, draw: sceneHands }, { start: T.idea, draw: sceneIdea }, { start: T.crowd, draw: sceneCrowd }, { start: T.test, draw: sceneTest }, { start: T.take, draw: sceneTake }, { start: T.umeda, draw: sceneUmeda }, { start: T.promise, draw: scenePromise }, { start: T.dining, draw: sceneDining }, { start: T.cut, draw: sceneCut }, { start: T.legend, draw: sceneLegend }, { start: T.tokyo, draw: sceneTokyo }, { start: T.shoe, draw: sceneShoe }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.hands, .4], [T.idea, .4], [T.crowd, .35], [T.test, .4], [T.take, .3], [T.umeda, .4], [T.promise, .35], [T.dining, .4], [T.cut, .35], [T.legend, .4], [T.tokyo, .4], [T.shoe, .4], [T.tease, .4], [T.end, .4]],
  chapters: [[0, '01', 'THE STATION'], [T.idea, '02', 'THE IDEA'], [T.test, '03', 'THE TEST'], [T.umeda, '04', 'UMEDA, 1929'], [T.dining, '05', 'THE DINING HALL'], [T.tokyo, '06', 'COPYCATS'], [T.tease, '07', 'NEXT']],
  hits: [[.8, 8, .3], [wt(5, 'crowds') - .1, 8, .3], [wt(8, 'took') + .25, 12, .35], [wt(12, 'cheaper') - .25, 12, .35], [wt(16, 'half') - .2, 8, .3], [wt(17, 'legend') - .25, 10, .3], [wt(21, 'horseshoe') - .3, 8, .3], [wt(23, 'flag') - .1, 8, .3]],
  flashes: [[T.idea, .3], [T.umeda, .3], [T.dining, .3], [T.tokyo, .3], [T.end, .3]],
  events: {
    scene: [T.hands, T.idea, T.crowd, T.test, T.take, T.umeda, T.promise, T.dining, T.cut, T.legend, T.tokyo, T.shoe, T.tease, T.end],
    pop: [.3, wt(2, 'railwaymen') - .3, wt(3, 'kobayashi') - .3, wt(4, 'ads') - .25, wt(4, 'delivery') - .35, wt(4, 'shuttle') - .2, wt(7, 'watching') - .3, LS(9) - .2, wt(10, 'april') - .25, wt(11, 'concourse') - .3, wt(11, 'shop') - .3, wt(11, 'dining') - .3, wt(14, '25') - .3, wt(19, '1934') - .25, wt(20, 'credited') - .2, wt(23, 'shaped') - .2, T.end + .45],
    stamp: [.8, wt(2, 'railwaymen') + .3, wt(3, 'fortunes') - .2, T.crowd + .15, wt(6, 'tested') - .25, wt(8, '1925') - .1, wt(8, 'took') + .25, wt(10, '1929') - .15, wt(12, 'best') - .25, wt(12, 'cheaper') - .25, wt(13, 'paid') - .2, wt(15, '1931') - .1, wt(15, 'cut') - .2, wt(16, 'half') - .2, wt(17, 'legend') - .25, wt(18, 'welcomed') - .2, wt(19, 'shibuya') - .3, wt(21, '1936') - .1, wt(21, 'horseshoe') - .3, wt(22, '1930') - .1, wt(23, 'flag') - .1],
    floors: Array.from({ length: 8 }, (_, k) => wt(10, 'hankyu') - .2 + (LS(11) - .5 - wt(10, 'hankyu') + .2) * k / 8),
    tally: Array.from({ length: 9 }, (_, i) => wt(7, 'watching') - .3 + (i + 1) / 3.2),
    coins: [wt(3, 'fortunes') - .2, wt(13, 'paid') - .2], train: [.2, T.crowd - .4, wt(19, 'opened') - .6, T.shoe], steps: [T.crowd, T.take + 2], pour: [wt(18, 'welcomed') - .1], draw: [wt(21, 'wrapped') - .4], end: [T.end],
  },
};
