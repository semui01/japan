// Shared helper library for the series (palette, text, plates, people, footwear, props). Loaded after engine.js, before scenes.js.
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
function topBand(h, col = 'rgba(10,10,24,.5)') { { const bg = ctx.createLinearGradient(0, 1300, 0, 1680); bg.addColorStop(0, 'rgba(8,10,24,0)'); bg.addColorStop(1, 'rgba(8,10,24,.8)'); ctx.fillStyle = bg; ctx.fillRect(0, 1300, W, 700); } ctx.fillStyle = col; ctx.fillRect(0, 0, W, h); }
function at(x, y, s, f) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); f(); ctx.restore(); }
function pop(t, t0, d = .35) { return E.oBack(P(t, t0, t0 + d)); }
function hand(x, y, rot, sd, sleeve = '#2c3040') { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = sleeve; rrect(-40, 30, 80, 420, 12); ctx.fill(); ctx.fillStyle = '#f3ece0'; ctx.fillRect(-40, 30, 80, 26); ctx.fillStyle = SKIN; rrect(-36, -36, 72, 76, 26); ctx.fill(); rrect(sd * -50 - 13, -10, 26, 46, 12); ctx.fill(); ctx.restore(); }
function nameTag(t, t0, y, name, jpn, sub, jx = 760) { const a = P(t, t0, t0 + .5); if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = K.must; ctx.fillRect(70, y - 42, 8, 96 * E.o3(a)); txt(name, 100, y, font(900, 48), K.paper, 'left', 1); jp(jpn, 1010, y - 2, 34, K.must, 'right'); label(sub, 102, y + 42, 1, 'rgba(243,232,207,.8)', 19, 'left'); ctx.restore(); }
