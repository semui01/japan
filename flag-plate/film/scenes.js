// THE PLATE WITH A FLAG — episode 4. Portrait-first (9:16). Helpers shared with episodes 1–3.
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
const UNI = { top: '#1f2a4f', pc: '#1f2a4f', sc: '#d9d2c2', shoe: 'black', hat: '#1f2a4f' };
function digits(str, t, t0, y, size = 190, col = K.must, sh = '#05071a') { if (t < t0) return; const n = str.length, sp = size * .79, x0 = 540 - sp * (n - 1) / 2; for (let i = 0; i < n; i++) { const q = E.oBack(P(t, t0 + i * .07, t0 + .35 + i * .07)); ctx.save(); ctx.translate(x0 + i * sp, y + 80 * (1 - q)); ctx.globalAlpha *= clamp(q * 1.5); big(str[i], 0, 0, size, col, 'center', sh); ctx.restore(); } }
function coin(x, y, r, a = 1, txtIn = '') { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = '#b88a1e'; ctx.beginPath(); ctx.arc(x + r * .08, y + r * .1, r, 0, TAU); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.strokeStyle = '#b88a1e'; ctx.lineWidth = r * .1; ctx.beginPath(); ctx.arc(x, y, r * .76, 0, TAU); ctx.stroke(); if (txtIn) txt(txtIn, x, y + r * .26, font(900, r * .7), '#7a5a10', 'center'); ctx.restore(); }
function badge(x, y, t, t0, name, icon) {
  const p = E.oBack(P(t, t0, t0 + .35)); if (p <= 0) return;
  ctx.save(); ctx.translate(x, y); ctx.scale(p, p); ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.arc(6, 8, 96, 0, TAU); ctx.fill(); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(0, 0, 96, 0, TAU); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(0, 0, 83, 0, TAU); ctx.stroke();
  icon(t - t0); ctx.restore(); label(name, x, y + 138, P(t, t0 + .15, t0 + .4), K.paper, 20);
}

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
const T = { hook: 0, modern: LB(1), d1907: LB(3), hall: LB(4), treat: LB(5), eyes: LB(6), steps: LB(9), dep: LB(11), ando: LB(12), build: LB(14), flag: LB(17), copy: LB(19), plates: LB(20), tease: LB(22), end: LB(24) };
function topBand(h, col = 'rgba(10,10,24,.5)') { ctx.fillStyle = col; ctx.fillRect(0, 0, W, h); }
function cloth(y, a = '#efe6cf', b = 'rgba(220,74,51,.25)') { ctx.fillStyle = a; ctx.fillRect(0, y, W, 900); ctx.fillStyle = b; for (let x = 0; x < W; x += 120) ctx.fillRect(x, y, 60, 900); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, y, W, 10); const cg = ctx.createLinearGradient(0, y + 120, 0, y + 520); cg.addColorStop(0, 'rgba(30,12,10,0)'); cg.addColorStop(1, 'rgba(30,12,10,.82)'); ctx.fillStyle = cg; ctx.fillRect(0, y + 120, W, 900); }
function mono(a, y0 = 0, y1 = H) { if (a <= 0) return; ctx.save(); ctx.globalCompositeOperation = 'saturation'; ctx.globalAlpha = a; ctx.fillStyle = '#808080'; ctx.fillRect(0, y0, W, y1 - y0); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a * .16; ctx.fillStyle = '#7a5a2a'; ctx.fillRect(0, y0, W, y1 - y0); ctx.restore(); }

// ------------------------------------------------------------ food (origin: base centre of each item)
function dish(rx = 470, ry = 96, rim = K.red, pics = 0) { ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(8, 24, rx, ry, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#e4dece'; ctx.beginPath(); ctx.ellipse(0, 4, rx * .8, ry * .7, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = rim; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(0, 0, rx * .95, ry * .88, 0, 0, TAU); ctx.stroke(); if (pics) for (let i = 0; i < 14; i++) { const a = i / 14 * TAU + .2; ctx.fillStyle = [K.red, K.teal, K.must][i % 3]; ctx.beginPath(); ctx.arc(Math.cos(a) * rx * .88, Math.sin(a) * ry * .8, 7, 0, TAU); ctx.fill(); } }
function fujiRice(m = 1, snow = 0) { const k = E.oBack(m); if (k <= 0) return; ctx.save(); ctx.scale(1, k); ctx.fillStyle = '#e8763a'; ctx.beginPath(); ctx.moveTo(-210, 6); ctx.quadraticCurveTo(-110, -30, -46, -250); ctx.quadraticCurveTo(0, -272, 46, -250); ctx.quadraticCurveTo(110, -30, 210, 6); ctx.quadraticCurveTo(0, 40, -210, 6); ctx.fill(); const r = rng(6); ctx.fillStyle = 'rgba(255,220,170,.5)'; for (let i = 0; i < 50; i++) { const yy = -r() * 230, hw = 30 + (230 + yy) * .62; ctx.beginPath(); ctx.ellipse((r() - .5) * 2 * hw * .8, yy, 8, 4, r() * 3, 0, TAU); ctx.fill(); } ctx.fillStyle = '#3e8a4a'; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc(-100 + i * 50, -40 - (i % 2) * 50, 8, 0, TAU); ctx.fill(); }
  if (snow > 0) { ctx.globalAlpha = clamp(snow * 2); const d = 96 * E.o3(snow); ctx.fillStyle = '#fbfaf4'; ctx.beginPath(); ctx.moveTo(-46, -250); ctx.quadraticCurveTo(0, -272, 46, -250); ctx.lineTo(46 + d * .36, -250 + d); ctx.lineTo(30, -250 + d * .72); ctx.lineTo(10, -250 + d * 1.05); ctx.lineTo(-14, -250 + d * .7); ctx.lineTo(-34, -250 + d * 1.0); ctx.lineTo(-46 - d * .36, -250 + d * .92); ctx.closePath(); ctx.fill(); } ctx.restore(); }
function spaghetti() { ctx.fillStyle = '#e9a23a'; ctx.beginPath(); ctx.ellipse(0, -30, 92, 46, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = '#f6c764'; ctx.lineWidth = 7; ctx.lineCap = 'round'; for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.arc(-50 + i * 17, -34 + (i % 2) * 10, 30, .3 + i, 2.6 + i); ctx.stroke(); } ctx.fillStyle = K.red; ctx.beginPath(); ctx.ellipse(4, -52, 34, 14, 0, 0, TAU); ctx.fill(); }
function croquettes() { for (const [x, y] of [[-34, -22], [36, -34]]) { ctx.fillStyle = '#9a5a1c'; ctx.beginPath(); ctx.ellipse(x, y, 54, 32, .1, 0, TAU); ctx.fill(); ctx.fillStyle = '#c98a3a'; for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.arc(x - 36 + i * 10, y - 8 + (i % 3) * 8, 4, 0, TAU); ctx.fill(); } } }
function ham() { for (let i = 0; i < 3; i++) { ctx.fillStyle = '#e88f9a'; ctx.beginPath(); ctx.ellipse(-30 + i * 30, -22 - i * 8, 58, 28, -.15, 0, TAU); ctx.fill(); ctx.strokeStyle = '#f7c5cb'; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(-30 + i * 30, -22 - i * 8, 46, 19, -.15, 0, TAU); ctx.stroke(); } }
function sandwiches() { for (const x of [-46, 40]) { ctx.fillStyle = '#fbfaf4'; ctx.beginPath(); ctx.moveTo(x - 50, 0); ctx.lineTo(x + 50, 0); ctx.lineTo(x, -92); ctx.closePath(); ctx.fill(); ctx.strokeStyle = '#d9b06a'; ctx.lineWidth = 5; ctx.stroke(); ctx.strokeStyle = '#5fa24a'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(x - 30, -34); ctx.lineTo(x + 30, -34); ctx.stroke(); ctx.strokeStyle = '#e88f9a'; ctx.beginPath(); ctx.moveTo(x - 24, -46); ctx.lineTo(x + 24, -46); ctx.stroke(); } }
function bonbons() { [[-56, -8, K.red], [0, -20, K.teal], [56, -6, K.must]].forEach(([x, y, c]) => { ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(x, y, 24, 17, 0, 0, TAU); ctx.fill(); for (const d of [-1, 1]) { ctx.beginPath(); ctx.moveTo(x + d * 22, y); ctx.lineTo(x + d * 44, y - 13); ctx.lineTo(x + d * 44, y + 13); ctx.fill(); } ctx.fillStyle = 'rgba(255,255,255,.4)'; ctx.fillRect(x - 5, y - 16, 10, 32); }); }
function flagPole(kind, t, h = 190) { ctx.strokeStyle = '#c9a66b'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 40); ctx.lineTo(0, -h); ctx.stroke(); const wv = Math.sin(t * 4) * 6; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(4, -h); ctx.quadraticCurveTo(80, -h - 10 + wv, 150, -h + 4); ctx.lineTo(150, -h + 94); ctx.quadraticCurveTo(80, -h + 80 + wv, 4, -h + 90); ctx.fill();
  if (kind === 'sun') { ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(78, -h + 44 + wv * .5, 26, 0, TAU); ctx.fill(); } else if (kind === 'pennant') { ctx.fillStyle = K.red; ctx.fillRect(4, -h + 2, 146, 28); ctx.fillStyle = K.teal; ctx.fillRect(4, -h + 60, 146, 28); } else if (typeof kind === 'number') { ctx.save(); ctx.globalAlpha *= kind; ctx.strokeStyle = K.red; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(78, -h + 44 + wv * .5, 30, 0, TAU); ctx.stroke(); jp('越', 78, -h + 60 + wv * .5, 40, K.red, 'center', .07); ctx.restore(); if (kind < 1) { ctx.save(); ctx.globalAlpha *= 1 - kind; txt('?', 78, -h + 70, font(900, 70), 'rgba(20,27,51,.55)', 'center'); ctx.restore(); } } }
function at(x, y, s, f) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); f(); ctx.restore(); }
function pop(t, t0, d = .35) { return E.oBack(P(t, t0, t0 + d)); }
// the 1930 plate: p = per-item progress [spaghetti, croquettes, ham, sandwiches, bonbons, fuji, snow, flag]
function plate1930(x, y, s, t, p, flagKind = 'sun') {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); dish(470, 100, K.red, 1);
  if (p[5] > 0) at(0, -10, 1, () => fujiRice(p[5], p[6]));
  if (p[7] > 0) { ctx.save(); ctx.translate(0, -262 - 300 * (1 - E.o3(p[7]))); ctx.rotate(.08); ctx.globalAlpha = clamp(p[7] * 3); flagPole(flagKind, t); ctx.restore(); }
  if (p[0] > 0) at(-300, 0, E.oBack(p[0]), spaghetti); if (p[2] > 0) at(300, -4, E.oBack(p[2]), ham);
  if (p[1] > 0) at(-190, 44, E.oBack(p[1]), croquettes); if (p[3] > 0) at(196, 50, E.oBack(p[3]) * .9, sandwiches); if (p[4] > 0) at(0, 62, E.oBack(p[4]), bonbons);
  ctx.restore();
}
function plateModern(x, y, s, t) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); dish(470, 100, K.teal, 0);
  ctx.fillStyle = '#f2c230'; ctx.beginPath(); ctx.ellipse(-60, -40, 190, 120, 0, Math.PI, 0); ctx.fill(); ctx.beginPath(); ctx.ellipse(-60, -40, 190, 34, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i <= 8; i++) { const xx = -150 + i * 22, yy = -100 + (i % 2) * 26 - Math.sin(i / 8 * Math.PI) * 30; i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke();
  ctx.save(); ctx.translate(-10, -150); ctx.rotate(.08); flagPole('pennant', t, 170); ctx.restore();
  ctx.fillStyle = '#6b3a14'; ctx.beginPath(); ctx.ellipse(250, -16, 96, 44, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#4a2410'; ctx.beginPath(); ctx.ellipse(250, -30, 70, 16, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#f0c84a'; for (let i = 0; i < 7; i++) { ctx.save(); ctx.translate(-330 + i * 16, 6); ctx.rotate(-.5 + i * .16); rrect(-7, -90, 14, 90, 4); ctx.fill(); ctx.restore(); }
  ctx.fillStyle = '#e08a2a'; ctx.save(); ctx.translate(120, 50); ctx.rotate(-.2); rrect(-80, -20, 150, 40, 20); ctx.fill(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(70, -16); ctx.lineTo(112, -30); ctx.lineTo(112, 26); ctx.lineTo(70, 16); ctx.fill(); ctx.restore();
  ctx.fillStyle = 'rgba(255,255,255,.7)'; rrect(-190, 20, 96, 60, [8, 8, 30, 30]); ctx.fill(); ctx.fillStyle = '#e04a6a'; rrect(-180, 24, 76, 40, [4, 4, 24, 24]); ctx.fill();
  ctx.restore();
}

// ------------------------------------------------------------ S0 hook
function sceneHook(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .05, .15, '0,0,0'); cloth(1130);
  const z = E.io2(P(t, 0, T.modern)); plate1930(540, 1160, lerp(.92, 1.0, z), t, [0, 0, 0, 0, 0, 1, 0, P(t, wt(0, 'flag') - .5, wt(0, 'flag') - .05)], 'sun');
  topBand(540, 'rgba(40,10,8,.5)');
  plate('EP 4', 150, 290, 44, K.red, K.paper, P(t, .3, .4), -.04, E.oBack(P(t, .3, .6)));
  popText('THE PLATE', 540, 400, 124, t, .55, K.paper, -.015, '#2a0b08'); popText('WITH A FLAG', 540, 510, 110, t, .8, K.must, -.015, '#2a0b08');
  label('LAST TIME…', 540, 1340, vis(t, .7, T.modern, .4), K.ink, 26);
}
function sceneModern(t) {
  fillBG('#2a7a74', '#17474a'); rays(540, 1000, t, .04, .1); cloth(1130, '#f3e8cf', 'rgba(42,122,116,.22)');
  const b0 = wt(2, 'born') - .3, xf = E.io2(P(t, b0, b0 + .9));
  ctx.save(); ctx.globalAlpha = 1 - xf; plateModern(540, 1160, 1, t); ctx.restore();
  if (xf > 0) { ctx.save(); ctx.globalAlpha = xf; plate1930(540, 1160, 1, t, [1, 1, 1, 1, 1, 1, 1, 1], 0); ctx.restore(); }
  mono(xf * .95, 0, H);
  topBand(540, 'rgba(8,36,40,.5)');
  const k0 = wt(1, 'kids') - .3; ctx.save(); ctx.globalAlpha = 1 - xf; if (t > k0) { ctx.save(); const k = pop(t, k0); ctx.translate(540, 380); ctx.scale(k, k); jp('お子様ランチ', 0, 0, 120, K.paper, 'center', .06); ctx.restore(); } popText('JAPAN’S KIDS’ MEAL', 540, 490, 84, t, k0 + .2, K.must, -.015, '#062020'); ctx.restore();
  ctx.save(); ctx.globalAlpha = xf; popText('BORN IN A', 540, 370, 90, t, b0, K.paper, -.015, '#111'); popText('DEPARTMENT STORE', 540, 480, 92, t, wt(2, 'department') - .25, K.must, -.015, '#111'); ctx.restore();
  if (t > b0 + .7) plate('1930', 860, 700, 70, K.paper, K.ink, 1, .06, pop(t, b0 + .7));
}

// ------------------------------------------------------------ the dining hall
function goods(i) { if (i === 0) { ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(-60, -110); ctx.lineTo(60, -110); ctx.lineTo(60, -60); ctx.lineTo(28, -60); ctx.lineTo(34, 0); ctx.lineTo(-34, 0); ctx.lineTo(-28, -60); ctx.lineTo(-60, -60); ctx.fill(); } else if (i === 1) { ctx.fillStyle = K.ink2; rrect(-40, -86, 80, 60, 14); ctx.fill(); rrect(-66, -32, 132, 16, 8); ctx.fill(); ctx.fillStyle = K.must; ctx.fillRect(-40, -44, 80, 10); } else if (i === 2) { ctx.fillStyle = K.teal; ctx.beginPath(); ctx.moveTo(-70, -60); ctx.quadraticCurveTo(0, -150, 70, -60); ctx.fill(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -110); ctx.lineTo(0, -12); ctx.arc(-12, -12, 12, 0, Math.PI); ctx.stroke(); } else if (i === 3) { wear('loafer', -70, 0, .7); } else if (i === 4) { ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, -52, 46, 0, TAU); ctx.fill(); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(0, -52, 36, 0, TAU); ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, -52); ctx.lineTo(0, -78); ctx.moveTo(0, -52); ctx.lineTo(18, -44); ctx.stroke(); } else { ctx.fillStyle = K.red; rrect(-50, -60, 100, 44, 10); ctx.fill(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(-28, -10, 14, 0, TAU); ctx.arc(28, -10, 14, 0, TAU); ctx.fill(); ctx.fillStyle = '#ffe9a6'; ctx.fillRect(-36, -52, 30, 18); } }
function scene1907(t) {
  fillBG('#e9dcbb', '#cdbb92'); ctx.fillStyle = '#8f7c55'; ctx.fillRect(0, 1250, W, 800); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 1250, W, 12);
  const s0 = wt(3, 'selling') - .5; ctx.fillStyle = '#6b4a2c'; ctx.fillRect(50, 600, 470, 650); for (let r = 0; r < 3; r++) { ctx.fillStyle = '#3a2616'; ctx.fillRect(66, 620 + r * 210, 438, 190); ctx.fillStyle = '#8b5a33'; ctx.fillRect(50, 800 + r * 210, 470, 16); for (let c = 0; c < 2; c++) { const i = r * 2 + c, k = i === 0 ? 1 : pop(t, s0 + i * .22); if (k > 0) at(170 + c * 230, 798 + r * 210, k * 1.05, () => goods(i)); } }
  // dining room doorway
  ctx.fillStyle = '#5b3a20'; rrect(580, 600, 440, 660, [24, 24, 0, 0]); ctx.fill(); const dg = ctx.createLinearGradient(0, 640, 0, 1250); dg.addColorStop(0, '#fff1c0'); dg.addColorStop(1, '#ffc970'); ctx.fillStyle = dg; ctx.fillRect(610, 640, 380, 610);
  ctx.fillStyle = '#efe6cf'; rrect(680, 1080, 240, 16, 6); ctx.fill(); ctx.fillStyle = '#8b5a33'; ctx.fillRect(790, 1096, 20, 154); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(740, 1074, 34, 9, 0, 0, TAU); ctx.ellipse(860, 1074, 34, 9, 0, 0, TAU); ctx.fill(); mini(650, 1250, 1.7, 'rgba(120,70,30,.45)'); mini(950, 1250, 1.7, 'rgba(120,70,30,.45)');
  const d0 = wt(3, 'dining') - .3; for (let i = 0; i < 3; i++) { const sw = 8 * Math.sin(t * 2 + i * 1.3) , dr = E.o3(P(t, d0 + i * .1, d0 + .5 + i * .1)); ctx.fillStyle = '#24407a'; ctx.beginPath(); ctx.moveTo(612 + i * 126, 640); ctx.lineTo(736 + i * 126, 640); ctx.lineTo(736 + i * 126 + sw, 640 + 230 * dr); ctx.lineTo(612 + i * 126 + sw, 640 + 230 * dr); ctx.fill(); } if (t > d0 + .4) { ctx.save(); ctx.globalAlpha = P(t, d0 + .4, d0 + .7); jp('食', 740, 800, 110, K.paper, 'center', .06); jp('堂', 866, 800, 110, K.paper, 'center', .06); ctx.restore(); }
  label('DINING ROOM', 800, 1330, P(t, d0 + .5, d0 + .9), K.paper, 24); label('MORE THAN KIMONO', 285, 1330, P(t, s0 + .3, s0 + .7), K.paper, 24);
  topBand(520, 'rgba(40,26,10,.6)');
  digits('1907', t, wt(3, '1907') - .3, 400, 190, K.must, '#1d1208'); { const y0 = wt(3, '1907') - .3; ctx.save(); ctx.globalAlpha = 1 - P(t, y0 - .3, y0); popText('MITSUKOSHI', 540, 390, 120, t, T.d1907 + .2, K.paper, -.015, '#1d1208'); ctx.restore(); }
  if (t > d0) plate('A DINING ROOM INSIDE THE STORE', 540, 466, 38, K.paper, K.ink, 1, .015, pop(t, d0));
}
function sceneHall(t) {
  fillBG('#3a2140', '#1d1024'); const vx = 540, vy = 700;
  ctx.fillStyle = '#e6dfcf'; ctx.fillRect(0, 540, W, 190); for (let i = 0; i < 9; i++) { ctx.fillStyle = '#ffd98a'; rrect(40 + i * 118, 570, 70, 120, [35, 35, 4, 4]); ctx.fill(); }
  ctx.fillStyle = '#8a6a4a'; ctx.beginPath(); ctx.moveTo(0, 730); ctx.lineTo(W, 730); ctx.lineTo(W, 1500); ctx.lineTo(0, 1500); ctx.fill();
  for (let r = -2; r <= 2; r++) { const xn = 540 + r * 300, xf = vx + r * 60; ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.moveTo(xf - 12, 740); ctx.lineTo(xf + 12, 740); ctx.lineTo(xn + 70, 1460); ctx.lineTo(xn - 70, 1460); ctx.fill();
    for (let k = 0; k < 9; k++) { const u = Math.pow((k + .5) / 9, 1.7), y = lerp(750, 1440, u), x = lerp(xf, xn, u), s = lerp(.25, 1.5, u), w = lerp(18, 96, u); for (const sd of [-1, 1]) mini(x + sd * w, y + 10 * s, s, [K.ink2, '#7c2a22', K.teal, '#5b3a20'][(k + r + 5 + (sd > 0 ? 1 : 0)) % 4]); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(x, y - 30 * s, 16 * s, 5 * s, 0, 0, TAU); ctx.fill(); } }
  for (let i = 0; i < 3; i++) { const x = 240 + i * 300; ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x, 520); ctx.lineTo(x, 600); ctx.stroke(); ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(x, 620, 0, x, 620, 150); g.addColorStop(0, `rgba(255,220,150,${.5 + .08 * noise(t * 3 + i)})`); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(x - 150, 470, 300, 300); ctx.restore(); ctx.fillStyle = '#ffe9a6'; ctx.beginPath(); ctx.arc(x, 620, 22, 0, TAU); ctx.fill(); }
  topBand(520, 'rgba(20,10,28,.6)');
  digits('1927', t, wt(4, '1927') - .3, 400, 190, K.must, '#12081a'); plate('HANKYU’S DINING HALL · OSAKA', 540, 466, 38, K.paper, K.ink, P(t, wt(4, 'hankyus') - .2, wt(4, 'hankyus')), .015, pop(t, wt(4, 'hankyus') - .2));
  const c0 = wt(4, 'served') - .2, c1 = wt(4, '5000') + .25; if (t > c0) { const n = Math.round(4778 * E.o3(P(t, c0, c1))), sN = n >= 1000 ? Math.floor(n / 1000) + ',' + String(n % 1000).padStart(3, '0') : String(n), k = pop(t, c0); ctx.save(); ctx.translate(540, 1060); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.4)'; rrect(-372, -152, 760, 300, 26); ctx.fill(); ctx.fillStyle = K.ink; rrect(-380, -160, 760, 300, 26); ctx.fill(); ctx.strokeStyle = K.must; ctx.lineWidth = 5; rrect(-364, -144, 728, 268, 18); ctx.stroke(); txt(sN, 0, 30, font(900, 190), K.must, 'center', 4); txt('DINERS A DAY', 0, 100, font(900, 40), K.paper, 'center', 8); ctx.restore(); }
}
function sceneTreat(t) {
  table(); const z = E.o3(P(t, T.treat, T.treat + .8)); curry(540, 900, lerp(.7, 1, z), t); priceCard(310, 1270, -.06, pop(t, T.treat + .5));
  topBand(480, 'rgba(30,16,6,.55)');
  popText('WESTERN DISHES', 540, 350, 100, t, T.treat + .2, K.paper, -.015, '#170c04'); if (t > wt(5, 'treat') - .25) plate('A TREAT', 420, 440, 60, K.must, K.ink, 1, -.03, pop(t, wt(5, 'treat') - .25)); if (t > T.treat + .5) { ctx.save(); ctx.globalAlpha = P(t, T.treat + .5, T.treat + .8); jp('洋食', 700, 458, 62, K.must, 'center', .06); ctx.restore(); }
  label('FEW FAMILIES COOKED THEM AT HOME', 620, 560, P(t, wt(5, 'few') - .1, wt(5, 'few') + .3), K.paper, 22);
}

// ------------------------------------------------------------ the ritual: models in the window, tickets at the counter
function model(i, t) { ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(4, 6, 100, 22, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.ellipse(0, 0, 100, 22, 0, 0, TAU); ctx.fill();
  if (i === 0) { ctx.fillStyle = '#fbfaf4'; ctx.beginPath(); ctx.ellipse(-28, -6, 52, 30, 0, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#9a5a1c'; ctx.beginPath(); ctx.ellipse(30, -4, 52, 24, 0, Math.PI, 0); ctx.fill(); ctx.beginPath(); ctx.ellipse(30, -4, 52, 10, 0, 0, TAU); ctx.fill(); }
  else if (i === 1) { ctx.fillStyle = '#f2c230'; ctx.beginPath(); ctx.ellipse(0, -6, 74, 50, 0, Math.PI, 0); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, -6, 74, 12, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-30, -34); ctx.lineTo(-10, -44); ctx.lineTo(10, -30); ctx.lineTo(30, -42); ctx.stroke(); }
  else if (i === 2) { ctx.fillStyle = '#9a5a1c'; ctx.beginPath(); ctx.ellipse(-10, -14, 66, 26, -.1, 0, TAU); ctx.fill(); ctx.strokeStyle = '#6b3a14'; ctx.lineWidth = 4; for (let k = -2; k <= 2; k++) { ctx.beginPath(); ctx.moveTo(-10 + k * 22, -36); ctx.lineTo(-16 + k * 22, 8); ctx.stroke(); } ctx.fillStyle = '#7fb85a'; ctx.beginPath(); ctx.ellipse(60, -14, 26, 18, 0, 0, TAU); ctx.fill(); }
  else if (i === 3) { ctx.fillStyle = K.ink2; ctx.beginPath(); ctx.moveTo(-70, -60); ctx.lineTo(70, -60); ctx.quadraticCurveTo(60, 0, 30, 0); ctx.lineTo(-30, 0); ctx.quadraticCurveTo(-60, 0, -70, -60); ctx.fill(); ctx.fillStyle = '#e9cf8a'; ctx.beginPath(); ctx.ellipse(0, -60, 70, 14, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = '#f6e6b0'; ctx.lineWidth = 5; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(-30 + k * 20, -62, 16, 3.4, 6); ctx.stroke(); } }
  else if (i === 4) { ctx.fillStyle = 'rgba(190,230,240,.5)'; ctx.beginPath(); ctx.moveTo(-34, -120); ctx.lineTo(34, -120); ctx.lineTo(22, 0); ctx.lineTo(-22, 0); ctx.fill(); ctx.fillStyle = '#5fc28a'; ctx.beginPath(); ctx.moveTo(-31, -96); ctx.lineTo(31, -96); ctx.lineTo(22, -4); ctx.lineTo(-22, -4); ctx.fill(); ctx.fillStyle = '#fbfaf4'; ctx.beginPath(); ctx.arc(0, -112, 30, Math.PI, 0); ctx.fill(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(8, -142, 10, 0, TAU); ctx.fill(); }
  else { at(0, 0, .62, sandwiches); }
}
const MODELS = ['カレー', 'オムライス', 'カツレツ', 'うどん', 'ソーダ', 'サンド'];
function showcase(t, lit = 1) {
  ctx.fillStyle = '#5b3a20'; rrect(60, 540, 960, 720, 16); ctx.fill(); ctx.fillStyle = '#241710'; ctx.fillRect(90, 570, 900, 660);
  for (let r = 0; r < 2; r++) { ctx.fillStyle = '#8b5a33'; ctx.fillRect(90, 860 + r * 330, 900, 22); for (let c = 0; c < 3; c++) { const i = r * 3 + c, x = 240 + c * 300, y = 846 + r * 330, k = pop(t, T.eyes + .1 + i * .1); if (k <= 0) continue; at(x, y, k * 1.05, () => model(i, t)); ctx.fillStyle = K.paper; rrect(x - 78, y + 44, 156, 44, 5); ctx.fill(); jp(MODELS[i], x, y + 77, 28, K.ink, 'center', .05); } }
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; const sx = 90 + ((t * 260) % 1500) - 300; const g = ctx.createLinearGradient(sx, 0, sx + 260, 0); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.5, 'rgba(255,255,255,.12)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(90, 570, 900, 660); ctx.restore();
  ctx.fillStyle = 'rgba(190,230,240,.1)'; ctx.fillRect(90, 570, 900, 660); ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.beginPath(); ctx.moveTo(140, 570); ctx.lineTo(300, 570); ctx.lineTo(120, 1230); ctx.lineTo(90, 1230); ctx.lineTo(90, 760); ctx.fill();
}
function sceneEyes(t) {
  fillBG('#1f5a57', '#123a3a'); ctx.fillStyle = '#0f2e2e'; ctx.fillRect(0, 1260, W, 800); showcase(t);
  // a child peeking over the counter
  const e0 = T.eyes + .3, up = E.o3(P(t, e0, e0 + .6)) * (1 - E.i2(P(t, LS(7) - .4, LS(7)))), px = 540, py = 1420 - 150 * up; ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(px, py + 40, 150, Math.PI, 0); ctx.fill(); ctx.fillStyle = SKIN; ctx.beginPath(); ctx.ellipse(px, py + 70, 132, 100, 0, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.fillRect(px - 132, py - 34, 264, 34); const lx = Math.sin(t * 1.7) * 14, ly = -8 + Math.cos(t * 1.1) * 4; for (const sd of [-1, 1]) { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(px + sd * 54, py + 30, 32, 28, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(px + sd * 54 + lx, py + 28 + ly, 14, 0, TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(px + sd * 54 + lx + 5, py + 22 + ly, 5, 0, TAU); ctx.fill(); }
  ctx.fillStyle = '#0f2e2e'; ctx.fillRect(0, 1400, W, 600);
  topBand(520, 'rgba(6,30,30,.6)');
  const y0 = wt(8, '1917') - .3, m0 = wt(7, 'models') - .3;
  ctx.save(); ctx.globalAlpha = 1 - P(t, y0 - .3, y0); popText('YOU ORDERED', 540, 350, 92, t, T.eyes + .15, K.paper, -.015, '#062020'); popText('WITH YOUR EYES', 540, 462, 104, t, wt(6, 'eyes') - .45, K.must, -.015, '#062020'); ctx.restore();
  digits('1917', t, y0, 400, 190, K.must, '#062020'); if (t > wt(8, 'shirokiyas') - .3) plate('SHIROKIYA’S DINING HALL', 540, 466, 40, K.paper, K.ink, 1, .015, pop(t, wt(8, 'shirokiyas') - .3));
  if (t > m0) plate('FOOD MODELS ON SHOW', 540, 900, 54, K.red, K.paper, 1 - P(t, LS(8) + .8, LS(8) + 1.2), -.04, pop(t, m0));
  label('ACCORDING TO JAPAN’S BIGGEST FOOD-MODEL MAKER', 540, 1300, vis(t, wt(7, 'japans') - .1, T.steps, .4), K.paper, 19);
}
function stepCard(t, t0, y, n, title, col, icon) { const p = E.o3(P(t, T.steps + n * .12, T.steps + .5 + n * .12)), on = P(t, t0, t0 + .2); if (p <= 0) return; ctx.save(); ctx.translate(lerp(1120, 60, p), y); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(10, 12, 960, 226, 28); ctx.fill(); ctx.fillStyle = col; rrect(0, 0, 960, 226, 28); ctx.fill(); if (on < 1) { ctx.fillStyle = `rgba(13,18,40,${.6 * (1 - on)})`; rrect(0, 0, 960, 226, 28); ctx.fill(); } const k = 1 + .08 * Math.sin(P(t, t0, t0 + .4) * Math.PI); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(110, 113, 66, 0, TAU); ctx.fill(); txt(String(n + 1), 110, 148, font(900, 100), col, 'center'); ctx.save(); ctx.translate(320, 148); ctx.scale(k, k); big(title, 0, 0, 82, K.paper, 'left'); ctx.restore(); ctx.save(); ctx.translate(860, 113); icon(Math.max(0, t - t0)); ctx.restore(); ctx.restore(); }
function sceneSteps(t) {
  fillBG('#18203f', '#0f152b');
  stepCard(t, wt(9, 'looked') - .2, 500, 0, 'LOOK', K.teal, u => { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(0, 0, 70, 44, 0, 0, TAU); ctx.fill(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(Math.sin(u * 3) * 16, 0, 26, 0, TAU); ctx.fill(); });
  stepCard(t, wt(9, 'ticket') - .3, 756, 1, 'TICKET', '#7c2a22', u => { coin(-50, 20, 30, 1, '¥'); ctx.save(); ctx.rotate(-.1); ctx.fillStyle = K.paper; rrect(-20, -60, 110, 76, 6); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 4; rrect(-12, -52, 94, 60, 3); ctx.stroke(); jp('食券', 35, -8, 38, K.red, 'center', .06); ctx.restore(); });
  stepCard(t, wt(9, 'sat') - .2, 1012, 2, 'SIT DOWN', K.must, u => { ctx.fillStyle = K.ink; rrect(-70, -10, 120, 14, 5); ctx.fill(); ctx.fillRect(-16, 4, 12, 56); ctx.fillStyle = K.ink2; rrect(64, -44, 14, 104, 5); ctx.fill(); rrect(30, 14, 48, 12, 5); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(-10, -16, 34, 9, 0, 0, TAU); ctx.fill(); });
  const m0 = LS(10) - .2; for (let i = 0; i < 12; i++) { const x = ((i * 110 + (t - T.steps) * (t > m0 ? 330 : 90)) % 1320) - 120; mini(x, 1372, 1.05, [K.paper, K.must, '#9db7c9', '#e88f9a'][i % 4]); }
  ctx.fillStyle = K.red; for (let i = 0; i < 3; i++) { const x = 400 + i * 120 + ((t * 200) % 120); ctx.globalAlpha = P(t, m0, m0 + .3) * .9; ctx.beginPath(); ctx.moveTo(x, 1404); ctx.lineTo(x + 40, 1420); ctx.lineTo(x, 1436); ctx.fill(); } ctx.globalAlpha = 1;
  topBand(470, 'rgba(8,10,30,.5)');
  plate('1917', 250, 300, 60, K.must, K.ink, P(t, T.steps + .1, T.steps + .2), -.04, pop(t, T.steps + .1)); popText('LOOK, BUY A TICKET, SIT', 540, 420, 70, t, T.steps + .25, K.paper, -.01);
  if (t > m0) plate('IT KEPT THE CROWDS MOVING', 700, 300, 36, K.red, K.paper, 1, .02, pop(t, m0));
}

// ------------------------------------------------------------ 1930
function sceneDep(t) {
  fillBG('#2c3340', '#151a22'); ctx.strokeStyle = 'rgba(255,255,255,.07)'; ctx.lineWidth = 2; for (let y = 620; y <= 1260; y += 80) { ctx.beginPath(); ctx.moveTo(90, y); ctx.lineTo(990, y); ctx.stroke(); } ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(90, 600); ctx.lineTo(90, 1260); ctx.lineTo(990, 1260); ctx.stroke();
  const d0 = wt(11, 'deep') - .3, u = E.io2(P(t, T.dep + .2, d0 + 1.1)), pts = [[90, 720], [220, 690], [340, 730], [450, 700], [540, 800], [640, 960], [740, 1040], [850, 1150], [980, 1200]]; ctx.strokeStyle = K.red; ctx.lineWidth = 12; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath(); const n = u * (pts.length - 1); let last = pts[0]; ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) { if (n >= i) { ctx.lineTo(pts[i][0], pts[i][1]); last = pts[i]; } else if (n > i - 1) { const f = n - (i - 1); last = [lerp(pts[i - 1][0], pts[i][0], f), lerp(pts[i - 1][1], pts[i][1], f)]; ctx.lineTo(last[0], last[1]); } } ctx.stroke(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(last[0], last[1], 18, 0, TAU); ctx.fill();
  for (let i = 0; i < 7; i++) { const ph = ((t - T.dep) * .5 + i / 7) % 1; coin(180 + i * 120, 560 + ph * 760, 20, (1 - ph) * .7 * P(t, d0, d0 + .4), '¥'); }
  label('ECONOMY · SCHEMATIC', 540, 1310, P(t, T.dep + .4, T.dep + .8) * .8, K.paper, 18);
  topBand(520, 'rgba(8,10,16,.6)');
  digits('1930', t, wt(11, '1930') - .3, 400, 190, K.must, '#05060a'); if (t > d0) plate('DEEP IN THE DEPRESSION', 540, 466, 46, K.red, K.paper, 1, -.02, pop(t, d0)); if (t > d0 + .3) { ctx.save(); ctx.globalAlpha = P(t, d0 + .3, d0 + .6); jp('昭和恐慌', 800, 620, 46, 'rgba(243,232,207,.8)', 'center', .05); ctx.restore(); }
}
function picPlate(x, y, r, rot, motif) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.arc(6, 8, r, 0, TAU); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.strokeStyle = [K.red, K.teal, K.must][motif]; ctx.lineWidth = r * .06; ctx.beginPath(); ctx.arc(0, 0, r * .86, 0, TAU); ctx.stroke(); const s = r / 100;
  if (motif === 0) { ctx.fillStyle = '#fff'; ctx.strokeStyle = K.ink; ctx.lineWidth = 4 * s; for (const sd of [-1, 1]) { ctx.beginPath(); ctx.ellipse(sd * 18 * s, -44 * s, 12 * s, 34 * s, sd * .15, 0, TAU); ctx.fill(); ctx.stroke(); } ctx.beginPath(); ctx.arc(0, 6 * s, 38 * s, 0, TAU); ctx.fill(); ctx.stroke(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(-13 * s, 0, 4 * s, 0, TAU); ctx.arc(13 * s, 0, 4 * s, 0, TAU); ctx.fill(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(0, 12 * s, 5 * s, 0, TAU); ctx.fill(); }
  else if (motif === 1) { ctx.fillStyle = K.red; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(Math.cos(i / 6 * TAU) * 26 * s, Math.sin(i / 6 * TAU) * 26 * s, 17 * s, 0, TAU); ctx.fill(); } ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, 0, 15 * s, 0, TAU); ctx.fill(); }
  else { ctx.fillStyle = K.teal; ctx.beginPath(); ctx.ellipse(0, 6 * s, 40 * s, 28 * s, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(34 * s, -18 * s, 20 * s, 0, TAU); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.moveTo(52 * s, -20 * s); ctx.lineTo(72 * s, -14 * s); ctx.lineTo(52 * s, -8 * s); ctx.fill(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(38 * s, -22 * s, 4 * s, 0, TAU); ctx.fill(); ctx.fillStyle = '#17474a'; ctx.beginPath(); ctx.ellipse(-8 * s, 6 * s, 22 * s, 14 * s, .3, 0, TAU); ctx.fill(); }
  ctx.restore(); }
function sceneAndo(t) {
  fillBG('#274a7a', '#12233f'); ctx.fillStyle = '#0d1a30'; ctx.fillRect(0, 1260, W, 800);
  const n0 = wt(12, 'andō') - .3, a = P(t, T.ando + .1, T.ando + .6);
  walker(190, 1262, .86, 0, { top: '#f3ece0', pc: '#2c3040', sc: '#d9d2c2', shoe: 'black', stand: 1 });
  const p0 = wt(12, 'picture') - .4; for (let i = 0; i < 3; i++) ctx.fillStyle = K.paper, ctx.globalAlpha = P(t, p0 - .3 + i * .08, p0 - .1 + i * .08), ctx.beginPath(), ctx.arc(330 + i * 50, 800 - i * 50, 12 + i * 8, 0, TAU), ctx.fill(); ctx.globalAlpha = 1;
  const c0 = LS(13) - .2, m = E.io2(P(t, c0, c0 + .7));
  [[560, 880, 120, -.2, 0], [760, 760, 140, .1, 1], [920, 950, 116, .25, 2]].forEach(([x, y, r, rot, mo], i) => { const k = pop(t, p0 + i * .15); if (k > 0) picPlate(lerp(x, 700 + (i - 1) * 120, m), lerp(y, 1140 + Math.abs(i - 1) * -20, m), r * k * lerp(1, .6, m), rot, mo); });
  if (m > 0) { ctx.save(); ctx.globalAlpha = m; at(700, 880, lerp(.3, .6, E.oBack(m)), () => { dish(470, 100, K.red, 1); }); ctx.restore(); popText('A MEAL FOR', 700, 700, 70, t, c0 + .1, K.paper, -.02, '#0a1830'); popText('CHILDREN', 700, 790, 104, t, wt(13, 'children') - .25, K.must, -.02, '#0a1830'); }
  label('CUTE PICTURE PLATES · FROM A TABLEWARE MAKER', 700, 1240, vis(t, p0 + .3, T.build, .4), K.paper, 19);
  topBand(480, 'rgba(8,16,40,.6)');
  ctx.save(); ctx.globalAlpha = P(t, n0, n0 + .5); ctx.fillStyle = K.must; ctx.fillRect(70, 262, 8, 96 * E.o3(P(t, n0, n0 + .5))); txt('ANDŌ TARŌ', 100, 304, font(900, 56), K.paper, 'left', 2); jp('安藤太郎', 760, 302, 44, K.must, 'left'); label('MITSUKOSHI’S DINING MANAGER · 1930', 102, 346, 1, 'rgba(243,232,207,.8)', 20, 'left'); ctx.restore();
}
const ITEMS = [['spaghetti', 'SPAGHETTI'], ['croquettes', 'CROQUETTES'], ['ham', 'HAM'], ['sandwiches', 'SANDWICHES'], ['bonbons', 'BONBONS']];
function sceneBuild(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .05, .12, '0,0,0'); cloth(1170);
  const ts = ITEMS.map(([w]) => wt(14, w) - .2), f0 = wt(15, 'mount') - .5, s0 = wt(16, 'snow') - .5;
  const p = ts.map(x => P(t, x, x + .35)); p.push(P(t, f0, f0 + .5), P(t, s0, s0 + .6), 0);
  const z = E.io2(P(t, T.build, T.flag)); plate1930(540, 1200, lerp(.94, 1.02, z), t, p);
  // checklist chips
  ITEMS.forEach(([w, name], i) => { const k = pop(t, ts[i]); if (k <= 0) return; const x = 290 + (i % 2) * 500, y = 600 + Math.floor(i / 2) * 84; plate(name, i === 4 ? 540 : x, y, 40, K.paper, K.ink, 1, (i % 2 ? .02 : -.02), k); });
  if (t > f0) plate('KETCHUP-RICE MT. FUJI', 540, 862, 44, K.must, K.ink, 1 - P(t, s0 + .2, s0 + .5), -.02, pop(t, f0)); if (t > s0 + .2) plate('+ WHITE-RICE SNOW', 540, 862, 46, K.paper, K.red, 1, -.02, pop(t, s0 + .2));
  reticle(540, 1010, 130, t, 'MEAL #001', 'MITSUKOSHI · 1930', vis(t, s0 + .6, T.flag + .3, .3), K.must);
  topBand(520, 'rgba(40,10,8,.55)');
  { ctx.save(); const k = pop(t, T.build + .15); ctx.globalAlpha = P(t, T.build + .15, T.build + .3); ctx.translate(540, 400); ctx.scale(k, k); jp('御子様洋食', 0, 0, 130, K.paper, 'center', .06); ctx.restore(); } label('OKOSAMA YŌSHOKU · 1930', 540, 470, P(t, T.build + .4, T.build + .8), K.must, 30);
}
function sceneFlag(t) {
  fillBG('#274a7a', '#12233f'); rays(540, 900, t, .04, .1);
  const z = E.io2(P(t, T.flag, T.copy)), f0 = wt(17, 'flag') - .5, m0 = wt(18, 'mitsukoshis') - .3, mk = P(t, m0, m0 + .5);
  ctx.save(); ctx.translate(540, 1720); ctx.scale(lerp(2.7, 2.9, z), lerp(2.7, 2.9, z)); fujiRice(1, 1); const fp = P(t, f0, f0 + .45); if (fp > 0) { ctx.save(); ctx.translate(0, -258 - 200 * (1 - E.o3(fp))); ctx.rotate(.06); ctx.globalAlpha = clamp(fp * 3); ctx.scale(.62, .62); flagPole(mk, t, 200); ctx.restore(); } ctx.restore();
  { const bg = ctx.createLinearGradient(0, 1300, 0, 1700); bg.addColorStop(0, 'rgba(10,16,36,0)'); bg.addColorStop(1, 'rgba(10,16,36,.85)'); ctx.fillStyle = bg; ctx.fillRect(0, 1300, W, 700); }
  callout(690, 900, 130, 150, 'THE FLAG', mk > .5 ? 'MITSUKOSHI’S MARK?' : 'WHOSE WAS IT?', vis(t, f0 + .5, T.copy, .5), K.paper, 0);
  topBand(520, 'rgba(8,16,40,.6)');
  popText('30 SEN', 540, 390, 170, t, T.flag + .2, K.must, -.02, '#0a1830'); label('ABOUT ¥1,000–1,200 IN 2008 MONEY', 540, 462, P(t, T.flag + .6, T.flag + 1), K.paper, 24);
  if (t > m0) plate('ONE ACCOUNT: MITSUKOSHI’S OWN', 540, 640, 42, K.paper, K.ink, 1, -.02, pop(t, m0));
}

// ------------------------------------------------------------ legacy
function sceneCopy(t) {
  fillBG('#1f5a57', '#123a3a');
  const c0 = wt(19, 'copied') - .4; for (let i = 0; i < 3; i++) { const p = E.o3(P(t, T.copy + i * .15, T.copy + .6 + i * .15)); if (p <= 0) continue; ctx.save(); ctx.translate(lerp(-500, 200 + i * 340, p), 900 + (i % 2) * 60); ctx.rotate([-.06, .03, -.03][i]); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-142, -272, 300, 560, 10); ctx.fill(); ctx.fillStyle = '#efe6cf'; rrect(-150, -280, 300, 560, 10); ctx.fill(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 4; rrect(-136, -266, 272, 532, 6); ctx.stroke();
    jp('お品書き', 0, -200, 40, '#5b3a20', 'center', .05); txt('MENU', 0, -160, font(800, 24), '#5b3a20', 'center', 8); ctx.fillStyle = 'rgba(60,40,20,.45)'; for (let r = 0; r < 7; r++) { if (r === 3) continue; ctx.fillRect(-110, -110 + r * 50, 130 + ((r * 37 + i * 20) % 50), 9); ctx.fillRect(70, -110 + r * 50, 40, 9); }
    const k = pop(t, c0 + i * .22); if (k > 0) { ctx.save(); ctx.translate(0, 44); ctx.scale(k, k); ctx.fillStyle = K.red; rrect(-128, -30, 256, 60, 6); ctx.fill(); jp('お子様ランチ', 0, 12, 34, K.paper, 'center', .06); ctx.restore(); } ctx.restore(); }
  topBand(500, 'rgba(6,30,30,.6)');
  popText('OTHER RESTAURANTS', 540, 340, 78, t, T.copy + .15, K.paper, -.015, '#062020'); stamp(t, c0, 540, 440, 'COPIED IT', K.must, -.04, 70);
  const m0 = wt(19, 'menu') - .3; if (t > m0) plate('A MENU STAPLE', 540, 1330, 64, K.must, K.ink, 1, -.03, pop(t, m0));
}
function foodDots(n, w, seed) { const r = rng(seed); for (let i = 0; i < n; i++) { const x = -w / 2 + (i + .5) * w / n; ctx.fillStyle = 'rgba(0,0,0,.08)'; ctx.beginPath(); ctx.ellipse(x, 0, w / n * .44, 46, 0, 0, TAU); ctx.fill(); ctx.fillStyle = ['#e8763a', '#f2c230', '#9a5a1c', '#5fa24a', '#e88f9a'][i % 5]; ctx.beginPath(); ctx.ellipse(x, -2, w / n * .34, 34, 0, 0, TAU); ctx.fill(); } }
function scenePlates(t) {
  fillBG('#18203f', '#0f152b'); rays(540, 880, t, .03);
  const b0 = wt(20, 'serving') - .3, s0 = wt(20, 'space') - .5, bp = E.o3(P(t, b0, b0 + .7)), sp = E.o3(P(t, s0, s0 + .7));
  if (bp > 0) { ctx.save(); ctx.translate(lerp(-700, 540, bp), 680); ctx.rotate(-.04); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-452, -82, 920, 190, [150, 60, 60, 150]); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.moveTo(-460, 60); ctx.quadraticCurveTo(-470, -20, -330, -80); ctx.lineTo(430, -90); ctx.quadraticCurveTo(460, -90, 460, -60); ctx.lineTo(460, 60); ctx.quadraticCurveTo(460, 90, 430, 90); ctx.lineTo(-430, 90); ctx.quadraticCurveTo(-460, 90, -460, 60); ctx.fill(); ctx.fillStyle = '#24407a'; ctx.fillRect(-440, 52, 890, 18); ctx.fillStyle = '#9fd0dc'; ctx.beginPath(); ctx.moveTo(-390, -20); ctx.lineTo(-320, -56); ctx.lineTo(-300, -20); ctx.fill(); at(90, 0, 1, () => foodDots(5, 660, 3)); ctx.fillStyle = '#16171c'; for (const x of [-300, -220, 280, 360]) { ctx.beginPath(); ctx.arc(x, 96, 20, 0, TAU); ctx.fill(); } ctx.restore(); label('BULLET-TRAIN PLATE', 540, 850, P(t, b0 + .5, b0 + .9), K.paper, 24); }
  if (sp > 0) { ctx.save(); ctx.translate(lerp(1800, 540, sp), 1090); ctx.rotate(.05); ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.moveTo(-420, 20); ctx.lineTo(120, -150); ctx.lineTo(300, -40); ctx.lineTo(440, 14); ctx.lineTo(300, 70); ctx.lineTo(120, 180); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#f7f3e8'; ctx.beginPath(); ctx.moveTo(-430, 0); ctx.lineTo(-380, -50); ctx.lineTo(60, -60); ctx.lineTo(150, -170); ctx.lineTo(250, -170); ctx.lineTo(240, -60); ctx.lineTo(340, -50); ctx.quadraticCurveTo(440, -30, 440, 0); ctx.quadraticCurveTo(440, 30, 340, 50); ctx.lineTo(240, 60); ctx.lineTo(250, 170); ctx.lineTo(150, 170); ctx.lineTo(60, 60); ctx.lineTo(-380, 50); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#16171c'; ctx.beginPath(); ctx.moveTo(360, -44); ctx.quadraticCurveTo(440, -28, 440, 0); ctx.quadraticCurveTo(440, 28, 360, 44); ctx.closePath(); ctx.fill(); ctx.fillRect(-430, -50, 44, 100); at(-20, 0, .8, () => foodDots(4, 560, 5)); ctx.restore(); label('SPACE-SHUTTLE PLATE', 540, 1300, P(t, s0 + .5, s0 + .9), K.paper, 24); }
  topBand(500, 'rgba(8,10,30,.55)');
  popText('STILL ON', 540, 350, 110, t, T.plates + .15, K.paper, -.015); popText('THE MENU', 540, 462, 120, t, T.plates + .35, K.must, -.015);
  const g0 = wt(21, 'grownups') - .3; if (t > g0) plate('GROWN-UPS WELCOME TOO', 540, 1372, 52, K.red, K.paper, 1, -.03, pop(t, g0));
}

// ------------------------------------------------------------ tease: the roof
function elephant(x, y, s, sil = 0) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); const c = sil ? '#141026' : '#8f9db3', d = sil ? '#141026' : '#74829a', e = sil ? '#141026' : '#e8a9b4';
  ctx.strokeStyle = d; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-125, -130); ctx.quadraticCurveTo(-170, -110, -160, -60); ctx.stroke();
  ctx.fillStyle = d; rrect(-100, -100, 48, 100, 14); ctx.fill(); rrect(40, -100, 48, 100, 14); ctx.fill(); ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(0, -118, 132, 92, 0, 0, TAU); ctx.fill(); rrect(-50, -100, 50, 100, 14); ctx.fill(); rrect(88, -100, 50, 100, 14); ctx.fill();
  ctx.beginPath(); ctx.arc(140, -160, 72, 0, TAU); ctx.fill(); ctx.strokeStyle = c; ctx.lineWidth = 36; ctx.beginPath(); ctx.moveTo(196, -140); ctx.quadraticCurveTo(232, -60, 214, -24); ctx.quadraticCurveTo(204, -4, 240, -18); ctx.stroke();
  ctx.fillStyle = d; ctx.beginPath(); ctx.ellipse(100, -158, 46, 62, -.15, 0, TAU); ctx.fill(); ctx.fillStyle = e; ctx.beginPath(); ctx.ellipse(102, -156, 28, 42, -.15, 0, TAU); ctx.fill();
  if (!sil) { ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(170, -172, 8, 0, TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(173, -175, 3, 0, TAU); ctx.fill(); }
  ctx.restore(); }
function roofScene(t, reveal, s = 1, ex = 520) {
  const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, '#172a55'); g.addColorStop(.6, '#8a4a62'); g.addColorStop(1, '#f0a25a'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = '#ffd98a'; ctx.beginPath(); ctx.arc(820, 1060, 90, 0, TAU); ctx.fill();
  ctx.fillStyle = 'rgba(40,24,60,.6)'; for (let i = 0; i < 9; i++) ctx.fillRect(-20 + i * 130, 1000 - (i * 97) % 200, 116, 400);
  ctx.fillStyle = '#2a2140'; ctx.fillRect(-60, 1180, W + 120, 900); ctx.fillStyle = '#3a2f5a'; ctx.fillRect(-60, 1150, W + 120, 40); ctx.strokeStyle = '#141026'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, 1090); ctx.lineTo(W, 1090); ctx.stroke(); for (let x = 20; x < W; x += 70) { ctx.beginPath(); ctx.moveTo(x, 1090); ctx.lineTo(x, 1150); ctx.stroke(); }
  ctx.fillStyle = '#141026'; ctx.fillRect(110, 880, 14, 270); ctx.fillRect(190, 880, 14, 270); rrect(90, 780, 136, 120, 10); ctx.fill(); ctx.fillRect(900, 760, 8, 390); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(908, 764); ctx.lineTo(990 + 8 * Math.sin(t * 5), 786); ctx.lineTo(908, 812); ctx.fill();
  for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) { ctx.fillStyle = ((r * 3 + c * 5) % 4) ? 'rgba(255,220,140,.8)' : '#4a4f66'; rrect(60 + c * 112, 1230 + r * 96, 70, 60, 4); ctx.fill(); }
  if (reveal < 1) { ctx.save(); ctx.globalAlpha = 1 - reveal; elephant(ex, 1150 - 10 * Math.abs(Math.sin(ex * .03)), .95 * s, 1); ctx.restore(); } if (reveal > 0) { ctx.save(); ctx.globalAlpha = reveal; elephant(ex, 1150 - 24 * Math.abs(Math.sin(t * 5)) * (reveal >= 1 ? .5 : 0), .95 * s, 0); ctx.restore(); }
}
function sceneTease(t) {
  const b0 = wt(23, 'baby') - .25, r0 = wt(22, 'roof') - .6, rise = E.o3(P(t, r0, r0 + .7));
  roofScene(t, P(t, b0, b0 + .35), 1, lerp(1400, 520, E.o3(P(t, r0 - .8, r0 + .9))));
  reticle(560, 1010, 190, t, 'NEW RESIDENT', 'ON THE ROOF', vis(t, r0 + .5, T.end + .3, .3), K.must);
  topBand(520, 'rgba(8,10,30,.55)');
  digits('1950', t, wt(22, '1950') - .3, 400); label('ANOTHER TOKYO DEPARTMENT STORE', 540, 466, P(t, wt(22, 'another') - .2, wt(22, 'another') + .3), K.paper, 24);
  if (t > b0) plate('A BABY ELEPHANT', 540, 700, 70, K.must, K.ink, 1, -.03, pop(t, b0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const p = E.o3(P(t, T.end, T.end + .6));
  ctx.save(); ctx.translate(540, lerp(-300, 640, p)); ctx.rotate(lerp(.25, -.04, p)); ctx.fillStyle = 'rgba(0,0,0,.45)'; rrect(-388, -238, 800, 500, 8); ctx.fill(); ctx.fillStyle = '#efe3c4'; rrect(-400, -250, 800, 500, 8); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.rect(-372, -222, 744, 390); ctx.clip(); ctx.translate(-372, -620); ctx.scale(.69, .69); roofScene(t, 1); ctx.restore();
  txt('EPISODE 5', -372, 218, font(800, 26), '#5b3a20', 'left', 4); txt('ILLUSTRATION', 372, 216, font(500, 16, F.m), 'rgba(91,58,32,.8)', 'right', 3); ctx.restore();
  const n = T.end + .45; plate('NEXT', 190, 1010, 56, K.red, K.paper, P(t, n, n + .1), -.04, E.oBack(P(t, n, n + .3)));
  ['The elephant', 'on the roof'].forEach((s, i) => { const a = E.o3(P(t, n + .2 + i * .14, n + .65 + i * .14)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 1150 + i * 116 + 30 * (1 - a), 104, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
}

window.FILM = {
  title: 'THE PLATE WITH A FLAG', tag: 'EP 4 · JAPAN’S DEPARTMENT STORES',
  hotLines: [11],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.modern, draw: sceneModern }, { start: T.d1907, draw: scene1907 }, { start: T.hall, draw: sceneHall }, { start: T.treat, draw: sceneTreat }, { start: T.eyes, draw: sceneEyes }, { start: T.steps, draw: sceneSteps }, { start: T.dep, draw: sceneDep }, { start: T.ando, draw: sceneAndo }, { start: T.build, draw: sceneBuild }, { start: T.flag, draw: sceneFlag }, { start: T.copy, draw: sceneCopy }, { start: T.plates, draw: scenePlates }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.modern, .4], [T.d1907, .4], [T.hall, .4], [T.treat, .4], [T.eyes, .4], [T.steps, .35], [T.dep, .5], [T.ando, .4], [T.build, .4], [T.flag, .4], [T.copy, .4], [T.plates, .4], [T.tease, .5], [T.end, .4]],
  chapters: [[0, '01', 'THE PLATE'], [T.d1907, '02', 'THE DINING HALL'], [T.eyes, '03', 'THE RITUAL'], [T.dep, '04', '1930'], [T.flag, '05', 'THE FLAG'], [T.copy, '06', 'THE LEGACY'], [T.tease, '07', 'NEXT']],
  hits: [[.8, 8, .3], [wt(4, '5000') + .25, 10, .35], [wt(11, 'deep') - .3, 10, .35], [wt(16, 'snow') - .3, 8, .3], [wt(17, 'flag') - .1, 10, .3], [wt(19, 'copied') - .4, 10, .3], [wt(23, 'baby') - .25, 10, .35]],
  flashes: [[T.d1907, .3], [T.eyes, .3], [T.dep, .3], [T.build, .3], [T.copy, .3], [T.end, .3]],
  events: {
    scene: [T.modern, T.d1907, T.hall, T.treat, T.eyes, T.steps, T.dep, T.ando, T.build, T.flag, T.copy, T.plates, T.tease, T.end],
    pop: [.3, wt(1, 'kids') - .3, wt(3, 'dining') - .3, wt(4, 'hankyus') - .2, T.treat + .5, wt(7, 'models') - .3, wt(8, 'shirokiyas') - .3, wt(9, 'looked') - .2, wt(9, 'ticket') - .3, wt(9, 'sat') - .2, wt(12, 'andō') - .3, wt(12, 'picture') - .4, wt(12, 'picture') - .25, wt(12, 'picture') - .1, ...ITEMS.map(([w]) => wt(14, w) - .2), wt(15, 'mount') - .5, wt(18, 'mitsukoshis') - .3, wt(19, 'copied') - .4, wt(19, 'copied') - .18, wt(19, 'copied') + .04, wt(20, 'bullet') - .5, wt(20, 'space') - .5, T.end + .45],
    stamp: [.8, wt(2, 'born') - .3, wt(2, 'department') - .25, wt(3, '1907') - .15, wt(4, '1927') - .15, wt(4, '5000') + .25, wt(5, 'treat') - .25, wt(6, 'eyes') - .45, wt(8, '1917') - .15, LS(10) - .2, wt(11, '1930') - .15, wt(11, 'deep') - .3, wt(13, 'children') - .25, wt(16, 'snow') - .3, T.flag + .2, wt(17, 'flag') - .1, wt(19, 'copied') - .4, wt(19, 'menu') - .3, T.plates + .35, wt(21, 'grownups') - .3, wt(22, '1950') - .15, wt(23, 'baby') - .25],
    count: [wt(4, 'served') - .2, wt(4, '5000') + .25], fall: [T.dep + .2], sparkle: [wt(2, 'born') - .3, wt(16, 'snow') - .5], hall: [T.hall, T.treat], steps: [LS(10) - .2, T.dep], end: [T.end],
  },
};
