// THE WRAPPING PAPER AND ANPANMAN — episode 6. Portrait-first (9:16). Helpers shared with episodes 1–5.
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
const T = { hook: 0, symbol: LB(3), visit: LB(5), beach: LB(7), design: LB(9), letter: LB(11), road: LB(15), still: LB(19), tease: LB(22), end: TL[24].e + .15 };
const MAG = '#cf3d74', MAG2 = '#e77aa0';
// Abstract stand-in pattern (rings and bars). Deliberately NOT Mitsukoshi's design.
function paperPattern(x, y, w, h, seed = 42, bgc = '#fbf8f0') {
  ctx.save(); rrect(x, y, w, h, 10); ctx.fillStyle = bgc; ctx.fill(); ctx.clip(); const r = rng(seed), n = Math.round(w * h / 26000);
  for (let i = 0; i < n; i++) { const cx = x + r() * w, cy = y + r() * h; ctx.strokeStyle = i % 3 ? MAG : MAG2; ctx.lineCap = 'round'; if (i % 2) { ctx.lineWidth = 15; ctx.beginPath(); ctx.arc(cx, cy, 26 + r() * 40, 0, TAU); ctx.stroke(); } else { const a = r() * Math.PI, L = 40 + r() * 70; ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(cx - Math.cos(a) * L, cy - Math.sin(a) * L); ctx.lineTo(cx + Math.cos(a) * L, cy + Math.sin(a) * L); ctx.stroke(); } }
  ctx.restore();
}
function hand(x, y, rot, sd, sleeve = '#2c3040') { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = sleeve; rrect(-40, 30, 80, 420, 12); ctx.fill(); ctx.fillStyle = '#f3ece0'; ctx.fillRect(-40, 30, 80, 26); ctx.fillStyle = SKIN; rrect(-36, -36, 72, 76, 26); ctx.fill(); rrect(sd * -50 - 13, -10, 26, 46, 12); ctx.fill(); ctx.restore(); }
function wrapBox(x, y, s, t, open = 0, hands = 1, cord = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-300, -200, 620, 440, 10); ctx.fill(); paperPattern(-310, -220, 620, 440, 42);
  ctx.fillStyle = 'rgba(0,0,0,.05)'; ctx.beginPath(); ctx.moveTo(-310, -220); ctx.lineTo(0, 0); ctx.lineTo(-310, 220); ctx.fill();
  if (cord) { const d = 150 * open; ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-310, 0); ctx.lineTo(-40 - d, 0); ctx.moveTo(40 + d, 0); ctx.lineTo(310, 0); ctx.stroke(); if (open < 1) { ctx.globalAlpha = 1 - open; for (const sd of [-1, 1]) { ctx.beginPath(); ctx.ellipse(sd * 46, -24, 44, 24, sd * .5, 0, TAU); ctx.stroke(); } ctx.globalAlpha = 1; }
    if (hands) for (const sd of [-1, 1]) { const hx = sd * (120 + d * 1.6), hy = 30 + 10 * Math.sin(t * 3 + sd); ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(sd * (40 + d), 0); ctx.lineTo(hx, hy); ctx.stroke(); hand(hx, hy, sd * -.5, sd); } }
  ctx.restore();
}

// ------------------------------------------------------------ S0 hook
function sceneHook(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .05, .12, '0,0,0');
  const z = E.io2(P(t, 0, T.symbol)); wrapBox(540, 1010, lerp(1.0, 1.12, z), t, E.io2(P(t, wt(1, 'launched') - .3, T.symbol - .5)));
  const l0 = wt(2, 'lettered') - .3; if (t > l0) plate('LETTERED BY…', 300, 690, 46, K.paper, K.ink, 1, -.03, pop(t, l0)); const a0 = wt(2, 'anpanman') - .4; if (t > a0) plate('…THE FUTURE CREATOR OF ANPANMAN', 540, 1330, 40, K.must, K.ink, 1, .015, pop(t, a0));
  topBand(540, 'rgba(40,10,8,.55)');
  plate('EP 6', 150, 290, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('THE WRAPPING PAPER', 540, 400, 88, t, .55, K.paper, -.015, '#2a0b08'); popText('AND ANPANMAN', 540, 508, 108, t, .8, K.must, -.015, '#2a0b08');
  if (t > wt(0, '1950') - .2) plate('1950', 900, 640, 60, K.must, K.ink, 1, .06, pop(t, wt(0, '1950') - .2));
}

// ------------------------------------------------------------ a symbol; the visit
function sceneSymbol(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1200); g.addColorStop(0, '#5f7f9a'); g.addColorStop(1, '#e6d3b0'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  // the store in the back, low rebuilt street in front
  ctx.fillStyle = '#e6dfcf'; ctx.fillRect(250, 640, 580, 380); ctx.fillStyle = '#cfc5b0'; ctx.fillRect(236, 624, 608, 24); for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) { ctx.fillStyle = '#7f8ea6'; rrect(276 + c * 78, 670 + r * 100, 50, 70, [25, 25, 3, 3]); ctx.fill(); } ctx.fillStyle = K.ink2; ctx.beginPath(); ctx.arc(540, 600, 40, 0, TAU); ctx.fill(); jp('越', 540, 616, 44, K.paper, 'center', .06);
  for (let i = 0; i < 7; i++) { const x = -20 + i * 165, h = 120 + (i * 53) % 70; ctx.fillStyle = ['#6b4a2c', '#7a5a3a', '#5b3a20'][i % 3]; ctx.fillRect(x, 1040 - h, 150, h); ctx.fillStyle = '#8a8478'; ctx.beginPath(); ctx.moveTo(x - 10, 1040 - h); ctx.lineTo(x + 75, 1040 - h - 34); ctx.lineTo(x + 160, 1040 - h); ctx.fill(); ctx.fillStyle = '#ffd98a'; ctx.fillRect(x + 30, 1040 - h + 34, 36, 40); }
  ctx.fillStyle = '#3a3f4a'; for (const x of [210, 760]) { ctx.fillRect(x, 700, 10, 340); ctx.fillRect(x - 40, 740, 90, 8); } ctx.fillStyle = '#8a8478'; ctx.fillRect(-60, 1040, W + 120, 1000);
  for (let i = 0; i < 6; i++) mini(((i * 210 + (t - T.symbol) * (22 + i * 6) * (i % 2 ? 1 : -1)) % 1300 + 1300) % 1300 - 100, 1090 + (i % 3) * 14, 1.25, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]);
  // a plain parcel, waiting for a symbol
  const s0 = wt(4, 'symbol') - .3, sk = P(t, s0, s0 + .6), px = 540, py = 1200;
  ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(px - 220, py - 150, 460, 320, 8); ctx.fill(); ctx.fillStyle = '#c9a66b'; rrect(px - 230, py - 170, 460, 320, 8); ctx.fill(); ctx.strokeStyle = '#8b6a3a'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(px - 230, py - 10); ctx.lineTo(px + 230, py - 10); ctx.moveTo(px, py - 170); ctx.lineTo(px, py + 150); ctx.stroke();
  if (sk > 0) { ctx.save(); ctx.globalAlpha = sk; paperPattern(px - 230, py - 170, 460, 320, 7); ctx.restore(); ctx.save(); ctx.globalAlpha = .7 * Math.sin(sk * Math.PI); ctx.fillStyle = '#fff'; rrect(px - 230, py - 170, 460, 320, 8); ctx.fill(); ctx.restore(); } else txt('?', px, py + 70, font(900, 200), '#8b6a3a', 'center');
  const o0 = wt(3, 'original') - .3; if (t > o0) plate('WANTED: AN ORIGINAL WRAPPING PAPER', 540, 640, 38, K.paper, K.ink, 1 - P(t, s0 - .1, s0 + .1), -.015, pop(t, o0)); if (t > s0) plate('A SYMBOL OF THE STORE', 540, 640, 54, K.must, K.ink, 1, -.02, pop(t, s0));
  topBand(540, 'rgba(14,26,40,.6)');
  digits('1950', t, T.symbol + .3, 400, 190, K.must, '#0a1420'); plate('MITSUKOSHI · AFTER THE WAR', 540, 470, 40, K.paper, K.ink, P(t, T.symbol + .6, T.symbol + .7), .015, pop(t, T.symbol + .6));
}
function nameTag(t, t0, y, name, jpn, sub, jx = 760) { const a = P(t, t0, t0 + .5); if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = K.must; ctx.fillRect(70, y - 42, 8, 96 * E.o3(a)); txt(name, 100, y, font(900, 48), K.paper, 'left', 1); jp(jpn, 1010, y - 2, 34, K.must, 'right'); label(sub, 102, y + 42, 1, 'rgba(243,232,207,.8)', 19, 'left'); ctx.restore(); }
function portfolio(x, y, s) { ctx.save(); ctx.translate(x, y); ctx.rotate(-.12); ctx.fillStyle = '#1b1a22'; rrect(-90 * s, -70 * s, 180 * s, 140 * s, 8 * s); ctx.fill(); ctx.strokeStyle = K.must; ctx.lineWidth = 4 * s; ctx.strokeRect(-76 * s, -56 * s, 152 * s, 112 * s); ctx.restore(); }
function studio(t) {
  fillBG('#2a7a74', '#17474a'); ctx.fillStyle = '#12393b'; ctx.fillRect(0, 1260, W, 800);
  ctx.fillStyle = '#cfe6ee'; rrect(60, 620, 420, 480, 10); ctx.fill(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 14; rrect(60, 620, 420, 480, 10); ctx.stroke(); ctx.beginPath(); ctx.moveTo(270, 620); ctx.lineTo(270, 1100); ctx.moveTo(60, 860); ctx.lineTo(480, 860); ctx.stroke();
  // easel with an abstract canvas
  ctx.strokeStyle = '#8b5a33'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(700, 1260); ctx.lineTo(800, 620); ctx.lineTo(900, 1260); ctx.moveTo(800, 620); ctx.lineTo(860, 1260); ctx.stroke(); paperPattern(650, 700, 300, 380, 11); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 8; ctx.strokeRect(650, 700, 300, 380);
}
function sceneVisit(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1260); g.addColorStop(0, '#5f7f9a'); g.addColorStop(1, '#e6d3b0'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = '#d6cdb8'; ctx.fillRect(360, 600, 800, 660); ctx.fillStyle = '#6b4a2c'; ctx.beginPath(); ctx.moveTo(330, 610); ctx.lineTo(760, 500); ctx.lineTo(1180, 610); ctx.fill();
  ctx.fillStyle = '#cfe6ee'; rrect(700, 700, 320, 300, 8); ctx.fill(); ctx.save(); rrect(700, 700, 320, 300, 8); ctx.clip(); ctx.strokeStyle = '#8b5a33'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(800, 1000); ctx.lineTo(860, 720); ctx.lineTo(920, 1000); ctx.stroke(); paperPattern(790, 760, 140, 170, 11); ctx.restore(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 12; rrect(700, 700, 320, 300, 8); ctx.stroke();
  const k0 = wt(6, 'ask') - .2, kn = t > k0 ? Math.sin((t - k0) * 26) * 5 * (1 - P(t, k0, k0 + .7)) : 0;
  ctx.fillStyle = '#24407a'; rrect(450 + kn, 760, 190, 500, [8, 8, 0, 0]); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(610 + kn, 1020, 12, 0, TAU); ctx.fill(); ctx.fillStyle = '#c9a23c'; rrect(480, 820, 130, 70, 6); ctx.fill(); jp('猪熊', 545, 868, 40, K.ink, 'center', .06);
  ctx.fillStyle = '#8a8478'; ctx.fillRect(-60, 1260, W + 120, 800);
  const wx = lerp(-160, 360, E.o3(P(t, T.visit, k0))), walking = t < k0; walker(wx, 1270, .8, (t - T.visit) * 1.3, { top: '#3a3f52', pc: '#2c3040', sc: '#d9d2c2', shoe: 'black', stand: walking ? 0 : 1 }); portfolio(wx - 30, 1040, 1);
  if (t > k0) for (let i = 0; i < 3; i++) { const ph = ((t - k0) * 1.6 + i / 3) % 1; ctx.strokeStyle = `rgba(255,255,255,${.8 * (1 - ph)})`; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(470, 980, 20 + ph * 50, -1, 1); ctx.stroke(); }
  topBand(540, 'rgba(14,26,40,.62)');
  nameTag(t, wt(5, 'yanase') - .3, 300, 'YANASE TAKASHI', 'やなせたかし', 'MITSUKOSHI AD DEPARTMENT · A YOUNG MAN'); nameTag(t, wt(6, 'inokuma') - .3, 440, 'INOKUMA GEN’ICHIRŌ', '猪熊弦一郎', 'PAINTER');
}

// ------------------------------------------------------------ pebbles on the beach; the design
const PEB = (() => { const r = rng(88), a = []; for (let i = 0; i < 15; i++) a.push({ x: 80 + r() * 920, y: 1010 + r() * 330, rx: 34 + r() * 46, ry: 24 + r() * 26, rot: r() * 3, c: ['#8a8478', '#b9ae98', '#6f6a60', '#c9b08a', '#9a8f86', '#a0584a'][i % 6] }); return a.sort((p, q) => p.y - q.y); })();
function pebble(p, s = 1) { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(s, s); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(4, 8, p.rx, p.ry, 0, 0, TAU); ctx.fill(); ctx.fillStyle = p.c; ctx.beginPath(); ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, TAU); ctx.ellipse(p.rx * .3, -p.ry * .2, p.rx * .8, p.ry * .9, .4, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.28)'; ctx.beginPath(); ctx.ellipse(-p.rx * .25, -p.ry * .35, p.rx * .4, p.ry * .22, -.3, 0, TAU); ctx.fill(); ctx.restore(); }
function sceneBeach(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 760); g.addColorStop(0, '#3f86c4'); g.addColorStop(1, '#d6ecf2'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, 900);
  ctx.fillStyle = '#5a6a5a'; ctx.beginPath(); ctx.moveTo(0, 760); ctx.lineTo(0, 700); ctx.quadraticCurveTo(160, 660, 320, 760); ctx.fill(); ctx.fillStyle = '#f3ece0'; ctx.fillRect(120, 590, 26, 110); ctx.fillStyle = K.red; ctx.fillRect(114, 580, 38, 16); ctx.fillStyle = '#ffe9a6'; ctx.fillRect(122, 566, 22, 16);
  const sg = ctx.createLinearGradient(0, 760, 0, 960); sg.addColorStop(0, '#2f6fa0'); sg.addColorStop(1, '#7fbcd0'); ctx.fillStyle = sg; ctx.fillRect(-60, 760, W + 120, 220);
  const sd = ctx.createLinearGradient(0, 940, 0, 1500); sd.addColorStop(0, '#b9a480'); sd.addColorStop(1, '#e0cda4'); ctx.fillStyle = sd; ctx.fillRect(-60, 940, W + 120, 1100);
  for (let j = 0; j < 4; j++) { ctx.strokeStyle = `rgba(255,255,255,${.75 - j * .12})`; ctx.lineWidth = 10 - j * 2; ctx.beginPath(); for (let x = -20; x <= W + 20; x += 20) { const y = 800 + j * 44 + Math.sin(x * .012 + t * 1.4 + j) * 10 + Math.sin(t * .9 + j) * 14; x < 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
  const wash = 960 + 70 * Math.sin(t * .9); ctx.fillStyle = 'rgba(160,215,230,.45)'; ctx.beginPath(); ctx.moveTo(-20, 940); for (let x = -20; x <= W + 20; x += 30) ctx.lineTo(x, wash + 16 * Math.sin(x * .02 + t * 2)); ctx.lineTo(W + 20, 940); ctx.fill();
  const p0 = wt(7, 'pebbles') - .5, pick = E.io2(P(t, p0, p0 + 1.0)), hi = 8, hp = PEB[hi];
  PEB.forEach((p, i) => { if (i !== hi) pebble(p); });
  const hx = lerp(hp.x, 540, pick), hy = lerp(hp.y, 1080, pick), hs = lerp(1, 3.4, pick); pebble({ ...hp, x: hx, y: hy }, hs);
  const hand0 = P(t, p0 - .5, p0); if (hand0 > 0) hand(lerp(1250, hx + 60 + 150 * pick, E.o3(hand0)), lerp(1700, hy + 60 + 130 * pick, E.o3(hand0)), -.7, 1, '#e9e2d0');
  const s0 = wt(8, 'shapes') - .5; if (t > s0) { ctx.save(); ctx.translate(hx, hy); ctx.rotate(hp.rot); ctx.setLineDash([16, 12]); ctx.lineDashOffset = -t * 40; ctx.strokeStyle = MAG; ctx.lineWidth = 8; ctx.globalAlpha = P(t, s0, s0 + .3); ctx.beginPath(); ctx.ellipse(hp.rx * .5, 0, hp.rx * 4.6, hp.ry * 4.4, 0, 0, TAU); ctx.stroke(); ctx.restore(); plate('HE LOVED THEIR SHAPES', 540, 1340, 50, K.paper, K.ink, 1, -.02, pop(t, s0)); }
  topBand(540, 'rgba(10,30,60,.6)');
  popText('PEBBLES', 540, 380, 150, t, p0 + .2, K.paper, -.015, '#0a1830'); const i0 = wt(7, 'inub') - .3; if (t > i0) { plate('INUBŌZAKI · EAST OF TOKYO', 470, 474, 40, K.must, K.ink, 1, .015, pop(t, i0)); jp('犬吠埼', 900, 490, 44, K.paper, 'center', .06); }
}
const STROKES = [['r', 300, 880, 86], ['l', 440, 760, 640, 900], ['r', 760, 800, 60], ['l', 200, 1040, 400, 1080], ['r', 560, 1040, 100], ['l', 720, 960, 900, 1060], ['r', 860, 1160, 70], ['l', 240, 1200, 420, 1130], ['r', 400, 990, 36], ['l', 620, 1200, 760, 1180]];
function sceneDesign(t) {
  fillBG('#8b5a33', '#4a2f1a'); ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(86, 596, 930, 740, 10); ctx.fill(); ctx.fillStyle = '#fbf8f0'; rrect(70, 580, 940, 740, 10); ctx.fill();
  const d0 = wt(9, 'turned') - .3, d1 = LS(10) + .2, tot = P(t, d0, d1) * STROKES.length; let tip = null;
  STROKES.forEach((s, i) => { const u = clamp(tot - i); if (u <= 0) return; ctx.strokeStyle = i % 3 ? MAG : MAG2; ctx.lineCap = 'round'; ctx.lineWidth = s[0] === 'r' ? 20 : 24; ctx.beginPath(); if (s[0] === 'r') { ctx.arc(s[1], s[2], s[3], -1.2, -1.2 + TAU * u); if (u < 1) tip = [s[1] + Math.cos(-1.2 + TAU * u) * s[3], s[2] + Math.sin(-1.2 + TAU * u) * s[3]]; } else { const x = lerp(s[1], s[3], u), y = lerp(s[2], s[4], u); ctx.moveTo(s[1], s[2]); ctx.lineTo(x, y); if (u < 1) tip = [x, y]; } ctx.stroke(); });
  if (tip) { ctx.save(); ctx.translate(tip[0], tip[1]); ctx.rotate(.6); ctx.fillStyle = MAG; ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(-22, -50, 0, -80); ctx.quadraticCurveTo(22, -50, 0, 0); ctx.fill(); ctx.fillStyle = '#c9a23c'; ctx.fillRect(-14, -110, 28, 34); ctx.fillStyle = '#5b3a20'; rrect(-11, -420, 22, 314, 8); ctx.fill(); ctx.restore(); }
  // pebbles turning into circles and lines
  for (let i = 0; i < 4; i++) { const k = pop(t, T.design + .1 + i * .08); if (k > 0) pebble({ ...PEB[i * 3 + 1], x: 220 + i * 210, y: 670, rot: i }, .8 * k); }
  label('PEBBLES → CIRCLES AND LINES', 540, 1386, P(t, wt(9, 'circles') - .3, wt(9, 'circles')), K.paper, 24);
  // colour strip
  const c0 = wt(10, 'neither') - .3; if (t > c0) { const k = pop(t, c0); ctx.save(); ctx.translate(540, 1250); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-392, -52, 800, 120, 14); ctx.fill(); const cg = ctx.createLinearGradient(-400, 0, 400, 0); cg.addColorStop(0, '#d8262a'); cg.addColorStop(.5, MAG); cg.addColorStop(1, '#7a3aa8'); ctx.fillStyle = cg; rrect(-400, -60, 800, 120, 14); ctx.fill(); txt('RED', -380, 14, font(900, 34), '#fff', 'left', 2); txt('PURPLE', 380, 14, font(900, 34), '#fff', 'right', 2); const px = 40 * Math.sin(t * 3) * (1 - P(t, c0 + .3, c0 + 1.2)); ctx.strokeStyle = '#fff'; ctx.lineWidth = 8; ctx.strokeRect(-60 + px, -70, 120, 140); ctx.restore(); }
  topBand(540, 'rgba(30,18,8,.6)');
  { ctx.save(); const k = pop(t, T.design + .2); ctx.globalAlpha = P(t, T.design + .2, T.design + .35); ctx.translate(540, 400); ctx.scale(k, k); jp('華ひらく', 0, 0, 130, K.paper, 'center', .06); ctx.restore(); } label('HANA HIRAKU · “FLOWERS BLOOM”', 540, 470, P(t, T.design + .5, T.design + .9), K.must, 30);
  if (t > c0 + .3) plate('NEITHER RED NOR PURPLE', 540, 1130, 46, K.ink, K.paper, 1, -.02, pop(t, c0 + .3));
}

// ------------------------------------------------------------ the lettering
function cursivePt(u) { const x = 190 + u * 700, th = u * TAU * 8.5, amp = 34 + 22 * Math.sin(u * 9 + 1); return [x + Math.sin(th) * 30, 1130 - Math.cos(th) * amp * (.6 + .4 * Math.sin(u * 23))]; }
function sceneLetter(t) {
  studio(t);
  const b0 = wt(12, 'draw') - .4, w0 = wt(13, 'wrote') - .4, sh = E.o3(P(t, w0, w0 + .6));
  ctx.save(); ctx.globalAlpha = 1 - .75 * sh; walker(250, 1270, .82, 0, { top: '#3a3f52', pc: '#2c3040', sc: '#d9d2c2', shoe: 'black', stand: 1 }); portfolio(215, 1030, 1); walker(520, 1270, .86, 0, { top: '#e9e2d0', pc: '#5b3a20', sc: '#d9d2c2', shoe: 'tan', stand: 1, hat: '#1b1a22' }); ctx.restore();
  if (t > b0) { const k = pop(t, b0); ctx.save(); ctx.globalAlpha = 1 - sh; ctx.translate(560, 700); ctx.rotate(-.02); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-432, -122, 880, 250, 26); ctx.fill(); ctx.fillStyle = K.paper; rrect(-440, -130, 880, 250, 26); ctx.fill(); ctx.beginPath(); ctx.moveTo(-60, 116); ctx.lineTo(-40, 200); ctx.lineTo(30, 116); ctx.fill(); txt('“YOU DO THE', 0, -24, font(900, 88), K.ink, 'center'); txt('LETTERING.”', 0, 74, font(900, 96), K.red, 'center'); ctx.restore(); label('INOKUMA, TO YANASE', 560, 560, (1 - sh) * P(t, b0 + .3, b0 + .6), K.paper, 22); }
  if (sh > 0) { const y = lerp(2000, 0, sh); ctx.save(); ctx.translate(0, y); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(106, 916, 900, 430, 10); ctx.fill(); ctx.fillStyle = '#fbf8f0'; rrect(90, 900, 900, 430, 10); ctx.fill();
    const u = P(t, w0 + .5, wt(14, 'still') - .2); ctx.strokeStyle = MAG; ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); let last = cursivePt(0); ctx.moveTo(last[0], last[1]); for (let i = 1; i <= 260 * u; i++) { last = cursivePt(i / 260); ctx.lineTo(last[0], last[1]); } ctx.stroke();
    if (u < 1) { ctx.save(); ctx.translate(last[0], last[1]); ctx.rotate(.5); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-12, -40); ctx.lineTo(12, -40); ctx.fill(); ctx.fillStyle = K.ink2; rrect(-13, -330, 26, 292, 10); ctx.fill(); ctx.fillStyle = K.must; ctx.fillRect(-13, -70, 26, 12); ctx.restore(); }
    txt('“mitsukoshi”', 540, 1262, font('italic 800', 56), K.ink, 'center', 1); txt('ILLUSTRATIVE SCRAWL · NOT THE ACTUAL LOGOTYPE', 540, 1306, font(500, 16, F.m), 'rgba(20,27,51,.7)', 'center', 3); ctx.restore(); }
  topBand(540, 'rgba(8,36,40,.62)');
  popText('THE LETTERING', 540, 390, 110, t, T.letter + .2, K.paper, -.015, '#062020'); if (t > w0) plate('WRITTEN BY YANASE, IN CURSIVE', 540, 480, 40, K.must, K.ink, 1, .015, pop(t, w0));
  const st = wt(14, 'still') - .3; if (t > st) plate('STILL ON THE PAPER TODAY', 540, 780, 56, K.red, K.paper, 1, -.03, pop(t, st));
}

// ------------------------------------------------------------ the long road
function sceneRoad(t) {
  const y73 = wt(17, '1973') - .3, y88 = wt(18, '1988') - .3, dawn = E.io2(P(t, y73 - .4, y73 + 1.6));
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, `rgb(${lerp(10, 60, dawn)},${lerp(13, 110, dawn)},${lerp(34, 170, dawn)})`); g.addColorStop(1, `rgb(${lerp(26, 250, dawn)},${lerp(30, 180, dawn)},${lerp(66, 110, dawn)})`); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  if (dawn > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const sx = 760, sy = lerp(1300, 960, dawn), sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 520); sg.addColorStop(0, `rgba(255,220,140,${.8 * dawn})`); sg.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = sg; ctx.fillRect(0, 300, W, 1100); ctx.restore(); ctx.fillStyle = '#ffe9a6'; ctx.beginPath(); ctx.arc(760, lerp(1300, 960, dawn), 90, 0, TAU); ctx.fill(); }
  // desk, lamp, sketches
  ctx.fillStyle = '#3a2616'; ctx.fillRect(-60, 1180, W + 120, 900); ctx.fillStyle = '#5b3a20'; ctx.fillRect(-60, 1160, W + 120, 30);
  ctx.strokeStyle = '#1b1a22'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(230, 1160); ctx.lineTo(280, 900); ctx.lineTo(420, 800); ctx.stroke(); ctx.fillStyle = '#1b1a22'; rrect(170, 1140, 130, 24, 10); ctx.fill(); ctx.fillStyle = K.teal; ctx.beginPath(); ctx.moveTo(380, 770); ctx.lineTo(470, 760); ctx.lineTo(540, 880); ctx.lineTo(360, 900); ctx.fill();
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 1 - .7 * dawn; const lg = ctx.createLinearGradient(0, 880, 0, 1180); lg.addColorStop(0, 'rgba(255,225,150,.42)'); lg.addColorStop(1, 'rgba(255,225,150,.05)'); ctx.fillStyle = lg; ctx.beginPath(); ctx.moveTo(370, 896); ctx.lineTo(536, 880); ctx.lineTo(820, 1170); ctx.lineTo(240, 1170); ctx.fill(); ctx.restore();
  const y0 = wt(16, 'years') - .5, n = Math.floor(P(t, T.road + .5, y73) * 12);
  for (let i = 0; i < n; i++) { ctx.save(); ctx.translate(520 + ((i * 37) % 60) - 30, 1160 - i * 9); ctx.rotate(((i * 53) % 20 - 10) * .012); ctx.fillStyle = i % 2 ? '#f3ece0' : '#e9e2cd'; rrect(-150, -8, 300, 14, 3); ctx.fill(); ctx.restore(); }
  const r = rng(5); for (let i = 0; i < 9; i++) { const k = pop(t, y0 + i * .22); const bx = 120 + r() * 880, by = 1250 + r() * 130; if (k > 0) { ctx.fillStyle = '#e9e2cd'; ctx.beginPath(); for (let a = 0; a < 9; a++) { const ang = a / 9 * TAU, rr = (24 + 10 * noise(i * 7 + a * 3)) * k; a ? ctx.lineTo(bx + Math.cos(ang) * rr, by + Math.sin(ang) * rr) : ctx.moveTo(bx + Math.cos(ang) * rr, by + Math.sin(ang) * rr); } ctx.fill(); } }
  if (t > y0) plate('YEARS WITHOUT SUCCESS', 540, 1010, 50, K.ink, K.paper, 1 - P(t, y73 - .2, y73 + .1), -.02, pop(t, y0));
  topBand(600, 'rgba(8,10,30,.6)');
  // timeline
  const nodes = [[200, '1953', 'LEAVES MITSUKOSHI', 'TO BE A CARTOONIST', wt(15, '1953') - .3], [540, '1973', 'FIRST ANPANMAN', 'PICTURE BOOK · AGE 54', y73], [880, '1988', 'THE TV ANIME', 'BEGINS', y88]];
  ctx.strokeStyle = 'rgba(243,232,207,.35)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(200, 420); ctx.lineTo(880, 420); ctx.stroke(); const pr = t > y88 ? 1 : t > y73 ? .5 + .5 * E.o3(P(t, y88 - .8, y88)) * 0 : .5 * P(t, nodes[0][4], y73); ctx.strokeStyle = K.must; ctx.beginPath(); ctx.moveTo(200, 420); ctx.lineTo(lerp(200, 880, t > y88 ? 1 : t > y73 ? .5 + .5 * P(t, y73 + .6, y88) : pr), 420); ctx.stroke();
  nodes.forEach(([x, yr, a, b, t0]) => { const on = P(t, t0, t0 + .2), k = t > t0 ? pop(t, t0) : 1; ctx.fillStyle = on > 0 ? K.must : 'rgba(243,232,207,.35)'; ctx.beginPath(); ctx.arc(x, 420, 20 * (on > 0 ? k : 1), 0, TAU); ctx.fill(); ctx.save(); ctx.globalAlpha = .35 + .65 * on; ctx.translate(x, 360); ctx.scale(k, k); big(yr, 0, 0, 96, on > 0 ? K.must : K.paper, 'center', '#05071a'); ctx.restore(); ctx.save(); ctx.globalAlpha = on; txt(a, x, 482, font(800, 22), K.paper, 'center', 1); txt(b, x, 512, font(800, 22), K.paper, 'center', 1); ctx.restore(); });
}

// ------------------------------------------------------------ still wrapping
function sceneStill(t) {
  fillBG('#e9e2d0', '#cfc5b0'); ctx.fillStyle = '#b9ae98'; ctx.fillRect(0, 1230, W, 900); ctx.fillStyle = '#f7f3e8'; ctx.fillRect(0, 1200, W, 44); ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.fillRect(0, 1244, W, 10);
  for (let i = 0; i < 5; i++) { ctx.fillStyle = 'rgba(0,0,0,.05)'; ctx.fillRect(60 + i * 210, 600, 150, 600); }
  const b0 = wt(20, '2014') - .6, bs = E.o3(P(t, b0, b0 + .6)), a0 = wt(21, '2025') - .4, as = E.o3(P(t, a0, a0 + .6)), bx = lerp(540, 330, bs);
  wrapBox(bx, 1010, lerp(.95, .72, bs), t, 1, 0, 0);
  if (bs > 0) { ctx.save(); ctx.translate(lerp(1400, 800, bs), 1200); ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(-126, -356, 270, 360); ctx.fillStyle = '#fbf8f0'; ctx.fillRect(-140, -370, 270, 370); ctx.fillStyle = K.teal; for (let i = 0; i < 5; i++) for (let j = 0; j < 6; j++) { ctx.beginPath(); ctx.arc(-110 + i * 54, -330 + j * 58, 13, 0, TAU); ctx.fill(); } ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(-5, -370, 60, Math.PI, 0); ctx.stroke(); ctx.restore(); label('2014: A NEW BAG', lerp(1400, 800, bs), 1290, bs, K.ink, 22); label('1950: THE SAME PAPER', bx, 1290, bs, MAG, 22); }
  const s0 = wt(20, 'stayed') - .3; if (t > s0 && t < a0 + .2) plate('THE PAPER STAYED', 540, 700, 60, K.red, K.paper, 1 - P(t, a0 - .1, a0 + .2), -.03, pop(t, s0));
  if (as > 0) { ctx.save(); ctx.translate(540, lerp(-300, 720, as)); ctx.rotate(-.04); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-352, -92, 720, 250, 12); ctx.fill(); ctx.fillStyle = '#1b1a22'; rrect(-360, -100, 720, 250, 12); ctx.fill(); for (let i = 0; i < 9; i++) { ctx.fillStyle = i % 2 ? '#1b1a22' : K.paper; ctx.beginPath(); ctx.moveTo(-360 + i * 80, -100); ctx.lineTo(-280 + i * 80, -100); ctx.lineTo(-310 + i * 80, -50); ctx.lineTo(-390 + i * 80, -50); ctx.fill(); } txt('2025 · NHK MORNING DRAMA', 0, 20, font(800, 34), K.paper, 'center', 2); txt('“ANPAN”', 0, 104, font(900, 86), K.must, 'center'); ctx.restore(); label('RECREATED THE MOMENT IT WAS MADE', 540, 920, P(t, wt(21, 'recreated') - .2, wt(21, 'recreated') + .2), K.ink, 22); }
  topBand(540, 'rgba(20,27,51,.72)');
  popText('STILL WRAPPING', 540, 380, 110, t, T.still + .2, K.paper, -.015); popText('75 YEARS ON', 540, 490, 104, t, wt(19, '1950') - .3, K.must, -.015);
}

// ------------------------------------------------------------ tease: the elevator
function sceneTease(t) {
  fillBG('#3a2140', '#1d1024'); ctx.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 900); ctx.fillStyle = '#2a1830'; ctx.fillRect(0, 1330, W, 800);
  const o0 = wt(23, 'elevator') - .5, op = E.io2(P(t, o0, o0 + 1.0)), dw = 330;
  // car interior
  const cg = ctx.createLinearGradient(0, 620, 0, 1330); cg.addColorStop(0, '#ffe2a0'); cg.addColorStop(1, '#c98a3a'); ctx.fillStyle = cg; ctx.fillRect(210, 620, 660, 710); ctx.fillStyle = 'rgba(90,50,20,.35)'; for (let i = 0; i < 5; i++) ctx.fillRect(240 + i * 150, 620, 8, 710); ctx.fillStyle = '#8b5a33'; ctx.fillRect(210, 1010, 660, 14);
  // attendant, as a silhouette
  ctx.save(); ctx.globalAlpha = op; const ax = 420, ay = 1330, c = '#2a1420'; ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(ax - 80, ay); ctx.lineTo(ax - 60, ay - 300); ctx.lineTo(ax + 60, ay - 300); ctx.lineTo(ax + 90, ay); ctx.fill(); rrect(ax - 70, ay - 500, 140, 230, 40); ctx.fill(); ctx.beginPath(); ctx.arc(ax, ay - 560, 54, 0, TAU); ctx.fill(); rrect(ax - 70, ay - 624, 140, 40, 16); ctx.fill(); rrect(ax - 50, ay - 660, 100, 56, 20); ctx.fill(); ctx.strokeStyle = c; ctx.lineWidth = 40; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(ax + 50, ay - 450); ctx.lineTo(ax + 150, ay - 420 + 10 * Math.sin(t * 2)); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ax + 160, ay - 418 + 10 * Math.sin(t * 2), 24, 0, TAU); ctx.fill(); ctx.restore();
  // brass doors
  for (const sd of [-1, 1]) { const x = 540 + (sd < 0 ? -dw - op * 300 : op * 300); ctx.save(); ctx.beginPath(); ctx.rect(210, 620, 660, 710); ctx.clip(); const bg = ctx.createLinearGradient(x, 0, x + dw, 0); bg.addColorStop(0, '#8a6a1e'); bg.addColorStop(.5, '#e9c45a'); bg.addColorStop(1, '#a5822a'); ctx.fillStyle = bg; ctx.fillRect(x, 620, dw, 710); ctx.strokeStyle = 'rgba(90,60,10,.6)'; ctx.lineWidth = 6; rrect(x + 30, 660, dw - 60, 630, 10); ctx.stroke(); for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(x + dw / 2, 700 + i * 40); ctx.lineTo(x + 50, 760 + i * 60); ctx.moveTo(x + dw / 2, 700 + i * 40); ctx.lineTo(x + dw - 50, 760 + i * 60); ctx.stroke(); } ctx.restore(); }
  ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 30; ctx.strokeRect(195, 605, 690, 740);
  // floor dial
  ctx.fillStyle = '#e9dcbb'; ctx.beginPath(); ctx.arc(540, 590, 86, Math.PI, 0); ctx.fill(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(540, 590, 86, Math.PI, 0); ctx.stroke(); const na = Math.PI + Math.PI * clamp(.1 + .8 * P(t, T.tease, o0)); ctx.strokeStyle = K.red; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(540, 588); ctx.lineTo(540 + Math.cos(na) * 70, 588 + Math.sin(na) * 70); ctx.stroke();
  if (t > o0 + .5) plate('JAPAN’S FIRST ELEVATOR GIRLS', 540, 1380, 42, K.must, K.ink, 1, -.02, pop(t, o0 + .5));
  const q0 = LS(24) - .1; if (t > q0) { const k = pop(t, q0); ctx.save(); ctx.translate(720, 860); ctx.rotate(.06); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-172, -82, 360, 190, 20); ctx.fill(); ctx.fillStyle = K.paper; rrect(-180, -90, 360, 190, 20); ctx.fill(); txt('WHO WERE', 0, -14, font(900, 54), K.ink, 'center'); txt('THEY?', 0, 62, font(900, 76), K.red, 'center'); ctx.restore(); }
  topBand(540, 'rgba(20,10,28,.6)');
  digits('1929', t, wt(22, '1929') - .3, 400, 190, K.must, '#12081a'); if (t > wt(22, 'april') - .3) plate('1 APRIL', 150, 262, 40, K.red, K.paper, 1, -.04, pop(t, wt(22, 'april') - .3)); label('A TOKYO DEPARTMENT STORE', 540, 470, P(t, wt(22, 'tokyo') - .2, wt(22, 'tokyo') + .2), K.paper, 24);
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, E.oBack(P(t, n, n + .25))); plate('EPISODE 7', 880, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  ['Japan’s first', 'elevator girls'].forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 820 + i * 130 + 30 * (1 - a), 118, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 1030); ctx.lineTo(80 + 600 * u, 1030); ctx.stroke();
}

window.FILM = {
  title: 'THE WRAPPING PAPER AND ANPANMAN', tag: 'EP 6 · JAPAN’S DEPARTMENT STORES',
  hotLines: [16],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.symbol, draw: sceneSymbol }, { start: T.visit, draw: sceneVisit }, { start: T.beach, draw: sceneBeach }, { start: T.design, draw: sceneDesign }, { start: T.letter, draw: sceneLetter }, { start: T.road, draw: sceneRoad }, { start: T.still, draw: sceneStill }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.symbol, .4], [T.visit, .4], [T.beach, .5], [T.design, .4], [T.letter, .4], [T.road, .5], [T.still, .5], [T.tease, .5], [T.end, .3]],
  chapters: [[0, '01', 'THE PAPER'], [T.symbol, '02', 'A SYMBOL'], [T.beach, '03', 'PEBBLES'], [T.letter, '04', 'THE LETTERING'], [T.road, '05', 'THE LONG ROAD'], [T.still, '06', 'STILL WRAPPING'], [T.tease, '07', 'NEXT']],
  hits: [[.8, 8, .3], [wt(4, 'symbol') - .3, 8, .3], [wt(12, 'draw') - .4, 10, .35], [wt(17, '1973') - .3, 10, .35], [wt(20, 'stayed') - .3, 10, .3]],
  flashes: [[T.beach, .3], [T.letter, .3], [T.still, .3], [T.end, .25]],
  events: {
    scene: [T.symbol, T.visit, T.beach, T.design, T.letter, T.road, T.still, T.tease, T.end],
    pop: [.3, wt(0, '1950') - .2, wt(2, 'lettered') - .3, wt(2, 'anpanman') - .4, wt(3, 'original') - .3, wt(5, 'yanase') - .3, wt(6, 'inokuma') - .3, wt(7, 'inub') - .3, wt(8, 'shapes') - .5, wt(10, 'neither') - .3, wt(13, 'wrote') - .4, wt(15, '1953') - .3, wt(18, '1988') - .3, wt(20, '2014') - .6, wt(21, '2025') - .4, wt(22, 'april') - .3, LS(24) - .1, T.end + .1],
    stamp: [.8, T.symbol + .45, wt(4, 'symbol') - .3, wt(7, 'pebbles') - .3, T.design + .2, T.letter + .2, wt(12, 'draw') - .4, wt(14, 'still') - .3, wt(16, 'years') - .5, wt(17, '1973') - .3, T.still + .2, wt(19, '1950') - .3, wt(20, 'stayed') - .3, wt(22, '1929') - .15],
    knock: [wt(6, 'ask') - .2], waves: [T.beach, T.design], brush: [wt(9, 'turned') - .3, LS(10) + .2], pen: [wt(13, 'wrote') + .1, wt(14, 'still') - .2], crumple: Array.from({ length: 9 }, (_, i) => wt(16, 'years') - .5 + i * .22), dawn: [wt(17, '1973') - .3], doors: [wt(23, 'elevator') - .5], ding: [wt(23, 'elevator') - .6], end: [T.end],
  },
};
