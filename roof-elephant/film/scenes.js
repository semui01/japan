// THE ELEPHANT ON THE ROOF — episode 5. Portrait-first (9:16). Helpers shared with episodes 1–4.
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
const T = { hook: 0, crane: LB(1), roofs: LB(3), cable: LB(5), war: LB(6), trains: LB(7), need: LB(8), taka: LB(9), ride: LB(12), big: LB(14), stairs: LB(17), song: LB(19), tower: LB(20), tease: LB(21), end: LB(23) };
function monoFx(a) { if (a <= 0) return; ctx.save(); ctx.globalCompositeOperation = 'saturation'; ctx.globalAlpha = a; ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, W, H); ctx.restore(); }

// ------------------------------------------------------------ the elephant (origin: ground under her middle, facing +x)
// o: {sil, trunk 0..1 raised, sit 0..1, flip, walk phase, col}
function elephant(x, y, s, o = {}) {
  const sil = o.sil, c = sil ? (o.col || '#141026') : '#8f9db3', d = sil ? c : '#74829a', e = sil ? c : '#e8a9b4', tr = o.trunk || 0, sit = o.sit || 0, ph = o.walk;
  const lift = k => ph === undefined ? 0 : Math.max(0, Math.sin(ph * TAU + k)) * 16;
  ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip ? -1 : 1), s); ctx.translate(-90, 0); ctx.rotate(-.26 * sit); ctx.translate(90, 28 * sit);
  ctx.strokeStyle = d; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-125, -130); ctx.quadraticCurveTo(-170, -110, -160, -60); ctx.stroke();
  ctx.fillStyle = d; if (sit < .5) rrect(-100, -100 - lift(0), 48, 100, 14), ctx.fill(); rrect(40, -100 - lift(2), 48, 100, 14); ctx.fill();
  ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(0, -118, 132, 92, 0, 0, TAU); ctx.fill(); if (sit < .5) rrect(-50, -100 - lift(3.1), 50, 100, 14), ctx.fill(); else rrect(-70, -44, 120, 44, 18), ctx.fill(); rrect(88, -100 - lift(5), 50, 100, 14); ctx.fill();
  ctx.beginPath(); ctx.arc(140, -160, 72, 0, TAU); ctx.fill();
  const L = (a, b) => lerp(a, b, tr); ctx.strokeStyle = c; ctx.lineWidth = 36; ctx.beginPath(); ctx.moveTo(196, L(-140, -156)); ctx.quadraticCurveTo(L(232, 276), L(-60, -150), L(214, 286), L(-24, -226)); ctx.quadraticCurveTo(L(204, 290), L(-4, -262), L(240, 262), L(-18, -272)); ctx.stroke();
  ctx.fillStyle = d; ctx.beginPath(); ctx.ellipse(100, -158, 46, 62, -.15, 0, TAU); ctx.fill(); ctx.fillStyle = e; ctx.beginPath(); ctx.ellipse(102, -156, 28, 42, -.15, 0, TAU); ctx.fill();
  if (!sil) { ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(170, -172, 8, 0, TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(173, -175, 3, 0, TAU); ctx.fill(); }
  if (o.rider) { mini(-10, -196, 1.0, K.red); ctx.strokeStyle = SKIN; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(-2, -270); ctx.lineTo(26 + 8 * Math.sin(o.rider * 9), -310); ctx.stroke(); }
  ctx.restore();
}
function roofDusk(t, ex = 520, reveal = 1) {
  const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, '#172a55'); g.addColorStop(.6, '#8a4a62'); g.addColorStop(1, '#f0a25a'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = '#ffd98a'; ctx.beginPath(); ctx.arc(820, 1060, 90, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(40,24,60,.6)'; for (let i = 0; i < 9; i++) ctx.fillRect(-20 + i * 130, 1000 - (i * 97) % 200, 116, 400);
  ctx.fillStyle = '#2a2140'; ctx.fillRect(-60, 1180, W + 120, 900); ctx.fillStyle = '#3a2f5a'; ctx.fillRect(-60, 1150, W + 120, 40); ctx.strokeStyle = '#141026'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, 1090); ctx.lineTo(W, 1090); ctx.stroke(); for (let x = 20; x < W; x += 70) { ctx.beginPath(); ctx.moveTo(x, 1090); ctx.lineTo(x, 1150); ctx.stroke(); }
  ctx.fillStyle = '#141026'; ctx.fillRect(110, 880, 14, 270); ctx.fillRect(190, 880, 14, 270); rrect(90, 780, 136, 120, 10); ctx.fill(); ctx.fillRect(900, 760, 8, 390); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(908, 764); ctx.lineTo(990 + 8 * Math.sin(t * 5), 786); ctx.lineTo(908, 812); ctx.fill();
  for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) { ctx.fillStyle = ((r * 3 + c * 5) % 4) ? 'rgba(255,220,140,.8)' : '#4a4f66'; rrect(60 + c * 112, 1230 + r * 96, 70, 60, 4); ctx.fill(); }
  elephant(ex, 1150 - 12 * Math.abs(Math.sin(t * 5)), .95, { trunk: .5 + .5 * Math.sin(t * 2) });
}
// daytime rooftop: sky, skyline, railing, tiled deck. deck starts at y 1150
function roofDay(t, sky = ['#3f86c4', '#cfe6ee']) {
  const g = ctx.createLinearGradient(0, 0, 0, 1150); g.addColorStop(0, sky[0]); g.addColorStop(1, sky[1]); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, 1260);
  ctx.fillStyle = 'rgba(255,255,255,.75)'; for (let i = 0; i < 4; i++) { rrect(((i * 330 + t * 12) % 1400) - 200, 600 + (i % 2) * 90, 240, 44, 22); ctx.fill(); }
  ctx.fillStyle = 'rgba(70,100,130,.35)'; for (let i = 0; i < 9; i++) ctx.fillRect(-20 + i * 130, 1010 - (i * 97) % 180, 116, 200);
  ctx.fillStyle = '#d9cfb8'; ctx.fillRect(-60, 1150, W + 120, 900); ctx.strokeStyle = 'rgba(0,0,0,.08)'; ctx.lineWidth = 3; for (let i = -6; i < 14; i++) { ctx.beginPath(); ctx.moveTo(540 + i * 60, 1150); ctx.lineTo(540 + i * 230, 1900); ctx.stroke(); } for (let k = 0; k < 6; k++) { const y = 1150 + k * k * 22 + 20; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.fillStyle = '#b9ae98'; ctx.fillRect(-60, 1130, W + 120, 26); ctx.strokeStyle = '#6f6a60'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, 1070); ctx.lineTo(W, 1070); ctx.stroke(); for (let x = 20; x < W; x += 70) { ctx.beginPath(); ctx.moveTo(x, 1070); ctx.lineTo(x, 1130); ctx.stroke(); }
}
function fountain(x, y, s, t, back = 0) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  if (back !== 2) { ctx.fillStyle = '#a8a08c'; ctx.beginPath(); ctx.ellipse(0, 0, 220, 60, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#6fb6d6'; ctx.beginPath(); ctx.ellipse(0, -6, 196, 46, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#b9b09a'; rrect(-22, -150, 44, 150, 8); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, -150, 70, 16, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle = 'rgba(220,245,255,.9)'; ctx.lineWidth = 7; ctx.lineCap = 'round'; for (let i = -2; i <= 2; i++) { if (!i) continue; const w = i * 62, h = 150 + 14 * Math.sin(t * 5 + i); ctx.beginPath(); ctx.moveTo(0, -160); ctx.quadraticCurveTo(w * .6, -160 - h, w * 1.5, -20); ctx.stroke(); } ctx.beginPath(); ctx.moveTo(0, -160); ctx.lineTo(0, -280 - 14 * Math.sin(t * 6)); ctx.stroke(); }
  if (back !== 1) { ctx.fillStyle = '#b9b09a'; ctx.beginPath(); ctx.ellipse(0, 0, 220, 60, 0, 0, Math.PI); ctx.lineTo(-220, 30); ctx.fill(); ctx.beginPath(); ctx.moveTo(-220, 0); ctx.lineTo(-220, 34); ctx.ellipse(0, 34, 220, 60, 0, Math.PI, 0, true); ctx.lineTo(220, 0); ctx.ellipse(0, 0, 220, 60, 0, 0, Math.PI); ctx.fill(); }
  ctx.restore();
}

// ------------------------------------------------------------ S0 hook, S1 the crane
function sceneHook(t) {
  roofDusk(t); topBand(540, 'rgba(8,10,30,.55)');
  plate('EP 5', 150, 290, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('THE ELEPHANT', 540, 400, 118, t, .55, K.paper, -.015); popText('ON THE ROOF', 540, 510, 118, t, .8, K.must, -.015);
  label('LAST TIME…', 540, 730, vis(t, .7, T.crane, .4), K.paper, 26);
}
function crate(x, y, s, t, peek = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(.03 * Math.sin(t * 1.3)); ctx.scale(s, s);
  const tw = Math.sin(t * 3) * .25; ctx.save(); ctx.translate(40, -110); ctx.rotate(tw); ctx.strokeStyle = '#8f9db3'; ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 30); ctx.quadraticCurveTo(10, -80 * peek, 60 * peek, -110 * peek); ctx.quadraticCurveTo(84 * peek, -120 * peek, 70 * peek, -84 * peek); ctx.stroke(); ctx.restore();
  ctx.fillStyle = '#b98a52'; rrect(-150, -110, 300, 240, 8); ctx.fill(); ctx.fillStyle = '#8b5a33'; for (let i = 0; i < 5; i++) ctx.fillRect(-150 + i * 72, -110, 12, 240); ctx.fillRect(-150, -110, 300, 16); ctx.fillRect(-150, 114, 300, 16); ctx.fillStyle = '#1b1a22'; ctx.fillRect(-60, -60, 120, 26); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(20, -47, 9, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(22 + 3 * Math.sin(t * 2), -47, 5, 0, TAU); ctx.fill();
  ctx.fillStyle = K.paper; rrect(-110, 6, 220, 84, 4); ctx.fill(); txt('FROM', 0, 36, font(700, 20, F.m), K.ink, 'center', 6); txt('THAILAND', 0, 76, font(900, 38), K.red, 'center', 2);
  ctx.restore();
}
function sceneCrane(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1500); g.addColorStop(0, '#3f86c4'); g.addColorStop(1, '#e9dcbb'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = 'rgba(255,255,255,.7)'; for (let i = 0; i < 3; i++) { rrect(((i * 420 + t * 14) % 1400) - 200, 640 + i * 150, 260, 46, 23); ctx.fill(); }
  // the store's stone face
  ctx.fillStyle = '#d9cfb8'; ctx.fillRect(-60, 760, 600, 1300); ctx.fillStyle = '#b9ae98'; ctx.fillRect(-60, 740, 620, 30); ctx.fillStyle = 'rgba(0,0,0,.07)'; for (let y = 800; y < 1900; y += 52) ctx.fillRect(-60, y, 600, 4);
  for (let r = 0; r < 6; r++) for (let c = 0; c < 3; c++) { ctx.fillStyle = '#7f8ea6'; rrect(40 + c * 130, 830 + r * 150, 80, 110, [40, 40, 4, 4]); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fillRect(40 + c * 130, 830 + r * 150, 14, 110); }
  ctx.fillStyle = K.red; ctx.fillRect(430, 830, 86, 420); jp('高', 473, 930, 62, K.paper, 'center', .06); jp('島', 473, 1050, 62, K.paper, 'center', .06); jp('屋', 473, 1170, 62, K.paper, 'center', .06);
  // crane
  ctx.strokeStyle = '#3a3f4a'; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(330, 760); ctx.lineTo(380, 600); ctx.stroke(); ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(380, 600); ctx.lineTo(820, 560); ctx.stroke(); ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(330, 760); ctx.lineTo(600, 580); ctx.moveTo(380, 600); ctx.lineTo(240, 760); ctx.stroke(); ctx.fillStyle = '#3a3f4a'; rrect(270, 740, 130, 30, 6); ctx.fill();
  const h0 = wt(2, 'hoisted') - .3, up = E.io2(P(t, T.crane + .2, T.roofs - .3)), cy = lerp(1560, 880, up), sw = Math.sin(t * 1.3) * 16;
  ctx.strokeStyle = '#1b1a22'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(800, 562); ctx.lineTo(800 + sw, cy - 150); ctx.stroke(); ctx.beginPath(); ctx.moveTo(800 + sw, cy - 150); ctx.lineTo(800 + sw - 150, cy - 108); ctx.moveTo(800 + sw, cy - 150); ctx.lineTo(800 + sw + 150, cy - 108); ctx.stroke();
  crate(800 + sw, cy, 1, t, P(t, T.crane + .6, T.crane + 1.4));
  for (let i = 0; i < 7; i++) mini(590 + i * 76 + 6 * Math.sin(t * 2 + i), 1370 + (i % 2) * 14, 1.0, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]);
  reticle(800 + sw, cy, 190, t, 'CARGO', '1 BABY ELEPHANT', vis(t, wt(1, 'baby') - .2, T.roofs + .3, .3), K.must);
  topBand(540, 'rgba(10,30,60,.6)');
  digits('1950', t, wt(1, '1950') - .3, 400, 190, K.must, '#0a1830'); if (t > wt(1, 'may') - .3) plate('MAY', 180, 290, 50, K.red, K.paper, 1, -.04, pop(t, wt(1, 'may') - .3));
  if (t > h0) plate('BY CRANE, ONTO TAKASHIMAYA · TOKYO', 540, 470, 36, K.paper, K.ink, 1, .015, pop(t, h0));
}

// ------------------------------------------------------------ roofs as playgrounds
function sceneRoofs(t) {
  roofDay(t);
  ctx.fillStyle = '#6b4a2c'; for (const x of [80, 1000]) ctx.fillRect(x - 12, 600, 24, 560); ctx.fillRect(40, 590, 1000, 26); for (let i = 0; i < 9; i++) ctx.fillRect(70 + i * 118, 574, 14, 40);
  for (let i = 0; i < 16; i++) { const x = 90 + i * 60, len = 110 + (i * 53) % 90, sw = Math.sin(t * 1.6 + i) * 8; for (let k = 0; k < 7; k++) { const u = k / 6; ctx.fillStyle = ['#8f6bc4', '#a98bdc', '#c6aef0'][k % 3]; ctx.beginPath(); ctx.arc(x + sw * u + (k % 2 ? 8 : -8) * (1 - u), 620 + u * len, 14 * (1 - u * .55), 0, TAU); ctx.fill(); } }
  fountain(540, 1210, 1.15, t);
  for (let i = 0; i < 6; i++) walker(((i * 260 + (t - T.roofs) * (30 + i * 8)) % 1400) - 150, 1350 + (i % 2) * 26, .32 + (i % 3) * .04, (t - T.roofs) * .9 + i * .3, FOLK[(i * 2) % FOLK.length]);
  topBand(540, 'rgba(10,30,60,.6)');
  const y0 = wt(4, '1907') - .3; ctx.save(); ctx.globalAlpha = 1 - P(t, y0 - .3, y0); popText('STORE ROOFS', 540, 370, 108, t, T.roofs + .15, K.paper, -.015, '#0a1830'); popText('WERE PLAYGROUNDS', 540, 480, 88, t, wt(3, 'playgrounds') - .25, K.must, -.015, '#0a1830'); ctx.restore();
  digits('1907', t, y0, 400, 190, K.must, '#0a1830'); if (t > wt(4, 'roof') - .3) plate('MITSUKOSHI · FIRST ROOF GARDEN', 540, 470, 38, K.paper, K.ink, 1, .015, pop(t, wt(4, 'roof') - .3));
}
function sceneCable(t) {
  roofDay(t, ['#2f6fb0', '#f1e2bd']);
  ctx.fillStyle = '#6f6a60'; for (const x of [70, 1010]) { ctx.fillRect(x - 14, 640, 28, 520); ctx.fillRect(x - 40, 630, 80, 22); }
  const c0 = wt(5, 'cable') - .6, u = ((t - T.cable) * .11 + .1) % 1, gx = lerp(110, 970, u), sag = y => 650 + 70 * Math.sin((y - 70) / 940 * Math.PI);
  ctx.strokeStyle = '#1b1a22'; ctx.lineWidth = 5; ctx.beginPath(); for (let x = 70; x <= 1010; x += 20) x === 70 ? ctx.moveTo(x, sag(x)) : ctx.lineTo(x, sag(x)); ctx.stroke();
  const gy = sag(gx); ctx.strokeStyle = '#1b1a22'; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + 40); ctx.stroke(); ctx.fillStyle = K.red; rrect(gx - 80, gy + 40, 160, 100, 16); ctx.fill(); ctx.fillStyle = K.paper; rrect(gx - 66, gy + 54, 132, 44, 8); ctx.fill(); for (let i = 0; i < 3; i++) { ctx.fillStyle = SKIN; ctx.beginPath(); ctx.arc(gx - 40 + i * 40, gy + 86, 14, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(gx - 40 + i * 40, gy + 80, 14, Math.PI, 0); ctx.fill(); }
  // the small zoo
  const z0 = wt(5, 'zoo') - .4; for (let i = 0; i < 3; i++) { const k = pop(t, z0 + i * .12); if (k <= 0) continue; const x = 220 + i * 320, y = 1150; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = '#5b3a20'; rrect(-120, -200, 240, 200, 10); ctx.fill(); ctx.fillStyle = '#e9dcbb'; ctx.fillRect(-106, -186, 212, 172);
    if (i === 0) { ctx.fillStyle = '#8b5a33'; ctx.beginPath(); ctx.arc(0, -70, 40, 0, TAU); ctx.arc(0, -124, 28, 0, TAU); ctx.fill(); ctx.fillStyle = '#e8c39a'; ctx.beginPath(); ctx.arc(0, -120, 16, 0, TAU); ctx.fill(); } else if (i === 1) { ctx.fillStyle = K.teal; ctx.beginPath(); ctx.ellipse(0, -80, 44, 30, 0, 0, TAU); ctx.arc(36, -108, 20, 0, TAU); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.moveTo(54, -110); ctx.lineTo(76, -104); ctx.lineTo(54, -98); ctx.fill(); } else { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(0, -56, 46, 36, 0, 0, TAU); ctx.arc(30, -96, 24, 0, TAU); ctx.ellipse(22, -140, 9, 28, -.1, 0, TAU); ctx.ellipse(42, -138, 9, 28, .15, 0, TAU); ctx.fill(); }
    ctx.strokeStyle = '#3a3f4a'; ctx.lineWidth = 6; for (let b = -90; b <= 90; b += 30) { ctx.beginPath(); ctx.moveTo(b, -186); ctx.lineTo(b, -14); ctx.stroke(); } ctx.restore(); }
  for (let i = 0; i < 8; i++) mini(80 + i * 135 + 8 * Math.sin(t * 1.5 + i), 1380 + (i % 2) * 16, 1.15, ['#2a2f4f', '#5b2a30', '#274a48', '#7a5a2a'][i % 4]);
  label('A SMALL ZOO', 540, 1214, P(t, z0 + .3, z0 + .6), K.ink, 26); if (t > c0) plate('A CABLE CAR', 540, 880, 50, K.red, K.paper, 1, -.03, pop(t, c0));
  topBand(540, 'rgba(10,30,60,.6)');
  digits('1931', t, wt(5, '1931') - .3, 400, 190, K.must, '#0a1830'); if (t > T.cable + .15) plate('MATSUYA · ASAKUSA', 540, 470, 40, K.paper, K.ink, 1, .015, pop(t, T.cable + .15));
}

// ------------------------------------------------------------ why an elephant
function sceneWar(t) {
  fillBG('#5a6470', '#2c333c'); ctx.fillStyle = '#48505a'; ctx.fillRect(0, 1180, W, 900); ctx.fillStyle = '#3a4048'; ctx.beginPath(); ctx.moveTo(0, 1180); for (let x = 0; x <= W; x += 30) ctx.lineTo(x, 900 - 60 * (.5 + .5 * fbm(x * .004))); ctx.lineTo(W, 1180); ctx.fill();
  const p0 = wt(6, 'put') - .2, gone = E.io2(P(t, p0, p0 + 1.4));
  for (const [x, s, fl] of [[330, 1.25, 0], [760, 1.05, 1]]) { ctx.save(); ctx.globalAlpha = .8 * (1 - gone); elephant(x, 1230, s, { sil: 1, col: '#14181d', flip: fl }); ctx.restore(); ctx.save(); ctx.globalAlpha = .5 * gone; ctx.setLineDash([14, 12]); ctx.strokeStyle = 'rgba(230,236,242,.8)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(x, 1230 - 140 * s, 200 * s, 150 * s, 0, 0, TAU); ctx.stroke(); ctx.restore(); }
  ctx.fillStyle = '#20252b'; ctx.fillRect(0, 760, W, 16); ctx.fillRect(0, 1260, W, 20); for (let x = 30; x < W; x += 64) ctx.fillRect(x, 760, 12, 510);
  for (let i = 0; i < 14; i++) { const ph = (t * .12 + i * .31) % 1; ctx.save(); ctx.translate((i * 197 + ph * 160) % W, 560 + ph * 800); ctx.rotate(t + i); ctx.fillStyle = 'rgba(180,150,90,.55)'; ctx.beginPath(); ctx.ellipse(0, 0, 14, 6, 0, 0, TAU); ctx.fill(); ctx.restore(); }
  label('EMPTY ENCLOSURES', 540, 1340, P(t, p0 + .8, p0 + 1.3), 'rgba(230,236,242,.85)', 24);
  topBand(540, 'rgba(10,12,16,.6)');
  popText('DURING THE WAR', 540, 380, 104, t, T.war + .2, K.paper, -.015, '#05060a'); if (t > p0 - .9) plate('MANY ZOO ELEPHANTS WERE PUT DOWN', 540, 474, 38, K.ink, K.paper, 1, .01, pop(t, p0 - .9));
}
function sceneTrains(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, '#3f86c4'); g.addColorStop(1, '#f1e2bd'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = '#7fb3a6'; ctx.beginPath(); ctx.moveTo(0, 900); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 760 - 60 * (.5 + .5 * fbm((x + t * 60) * .004))); ctx.lineTo(W, 900); ctx.fill();
  ctx.fillStyle = '#6f6a60'; ctx.fillRect(0, 868, W, 14); ctx.fillStyle = '#8a8478'; ctx.fillRect(0, 882, W, 40);
  const tx = lerp(-1700, -420, E.o3(P(t, T.trains - .3, T.trains + 2.2))) + (t - T.trains) * 26; for (let i = 0; i < 3; i++) { const x = tx + i * 580; trainCar(x, 870, 1, t); for (let k = 0; k < 7; k++) { const wx = x + 53 + k * 74; ctx.fillStyle = SKIN; ctx.beginPath(); ctx.arc(wx, 778, 15, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(wx, 772, 15, Math.PI, 0); ctx.fill(); if (k % 2) { ctx.strokeStyle = SKIN; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(wx + 12, 786); ctx.lineTo(wx + 26 + 8 * Math.sin(t * 9 + k), 742); ctx.stroke(); } } ctx.fillStyle = K.paper; rrect(x + 150, 840, 260, 34, 5); ctx.fill(); jp('ぞうれっしゃ', x + 280, 867, 28, K.red, 'center', .06); }
  // Nagoya: two survivors
  const s0 = wt(7, 'two') - .3, a = E.o3(P(t, s0, s0 + .6)); ctx.fillStyle = '#c9b88e'; ctx.fillRect(0, 922, W, 1100); if (a > 0) { ctx.save(); ctx.globalAlpha = a; elephant(330, 1330, 1.25, { trunk: .5 + .5 * Math.sin(t * 2.2) }); elephant(790, 1320, 1.1, { flip: 1, trunk: .5 + .5 * Math.sin(t * 2 + 2) }); ctx.restore(); }
  ctx.fillStyle = '#5b3a20'; ctx.fillRect(0, 1130, W, 12); ctx.fillRect(0, 1340, W, 14); for (let x = 30; x < W; x += 90) ctx.fillRect(x, 1090, 12, 270);
  if (t > s0) plate('TWO SURVIVORS · NAGOYA', 540, 1000, 46, K.must, K.ink, 1, -.02, pop(t, s0));
  topBand(540, 'rgba(10,30,60,.6)');
  digits('1949', t, wt(7, '1949') - .3, 400, 190, K.must, '#0a1830'); if (t > wt(7, 'elephant') - .3) plate('“ELEPHANT TRAINS”', 540, 470, 46, K.red, K.paper, 1, -.02, pop(t, wt(7, 'elephant') - .3));
}
function sceneNeed(t) {
  roofDay(t); fountain(800, 1200, .7, t);
  ctx.save(); ctx.globalAlpha = .55 + .35 * Math.sin(t * 6); ctx.setLineDash([18, 14]); ctx.lineDashOffset = -t * 30; ctx.strokeStyle = K.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(400, 1170, 250, 190, 0, 0, TAU); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = .28; elephant(380, 1340, 1.3, { sil: 1, col: K.ink }); ctx.restore();
  txt('?', 400, 1030, font(900, 200), K.red, 'center');
  topBand(540, 'rgba(10,30,60,.6)');
  popText('TAKASHIMAYA', 540, 370, 112, t, T.need + .15, K.paper, -.015, '#0a1830'); jp('高島屋', 540, 452, 50, K.must); if (t > wt(8, 'needed') - .3) plate('ITS ROOF NEEDED ONE', 540, 760, 60, K.red, K.paper, 1, -.03, pop(t, wt(8, 'needed') - .3));
}

// ------------------------------------------------------------ Taka-chan
function note(x, y, s, a, col) { ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, 0, 16, 12, -.4, 0, TAU); ctx.fill(); ctx.fillRect(12, -60, 6, 60); ctx.beginPath(); ctx.moveTo(18, -60); ctx.quadraticCurveTo(44, -50, 40, -24); ctx.quadraticCurveTo(36, -42, 18, -44); ctx.fill(); ctx.restore(); }
function sceneTaka(t) {
  roofDay(t); fountain(860, 1190, .62, t);
  const sh = wt(10, 'shake') - .3, st = wt(10, 'sit') - .25, tp = wt(11, 'trumpet') - .3, dr = wt(11, 'drum') - .3;
  const sit = E.io2(P(t, st, st + .4)) * (1 - E.io2(P(t, tp - .1, tp + .3))), tr = t > tp ? .9 + .1 * Math.sin(t * 14) : t > sh ? .62 + .2 * Math.sin((t - sh) * 12) * (1 - P(t, st - .1, st + .2)) : .15 + .15 * Math.sin(t * 2);
  const ex = 430, ey = 1400, es = 1.55; shadow(ex, ey + 6, 300, 26, .25); elephant(ex, ey, es, { trunk: tr, sit, walk: undefined });
  if (t > sh && t < tp) { const k = pop(t, sh); walker(930, 1420, .6 * k, 0, { ...FOLK[5], stand: 1 }); }
  if (t > tp) { const k = pop(t, tp); ctx.save(); ctx.translate(ex + 262 * es / 1.55 + 150, ey - 430); ctx.rotate(-.5); ctx.scale(k, k); ctx.fillStyle = K.must; ctx.beginPath(); ctx.moveTo(-90, -10); ctx.lineTo(40, -10); ctx.lineTo(100, -44); ctx.lineTo(100, 44); ctx.lineTo(40, 10); ctx.lineTo(-90, 10); ctx.fill(); ctx.fillStyle = '#b88a1e'; for (let i = 0; i < 3; i++) ctx.fillRect(-50 + i * 26, -26, 12, 22); ctx.restore(); for (let i = 0; i < 4; i++) { const ph = ((t - tp) * .7 + i / 4) % 1; note(880 + i * 40 + ph * 80, 820 - ph * 240, 1.2, Math.sin(ph * Math.PI), [K.red, K.ink, K.teal][i % 3]); } }
  if (t > dr) { const k = pop(t, dr), hit = Math.abs(Math.sin((t - dr) * 9)); ctx.save(); ctx.translate(900, 1400); ctx.scale(k, k); ctx.fillStyle = K.red; ctx.fillRect(-90, -120, 180, 120); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.ellipse(0, -120, 90, 24, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#b5322a'; ctx.beginPath(); ctx.ellipse(0, 0, 90, 24, 0, 0, Math.PI); ctx.fill(); ctx.strokeStyle = K.must; ctx.lineWidth = 6; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 40, -104); ctx.lineTo(i * 40 + 20, -6); ctx.stroke(); } ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-110, -230 + hit * 70); ctx.lineTo(-30, -150 + hit * 26); ctx.stroke(); ctx.restore(); }
  const tags = [[sh, 'SHAKE HANDS', st], [st, 'SIT', tp], [tp, 'TRUMPET', dr], [dr, 'DRUM', T.ride + .3]]; tags.forEach(([a, s, b]) => { if (t > a && t < b + .1) plate(s, 760, 700, 60, K.red, K.paper, 1 - P(t, b - .1, b + .1), -.03, pop(t, a)); });
  topBand(540, 'rgba(10,30,60,.6)');
  const n0 = wt(9, 'takako') - .3, c0 = wt(9, 'takachan') - .3; ctx.save(); ctx.globalAlpha = 1 - P(t, c0 - .2, c0); popText('TAKAKO', 540, 400, 150, t, n0, K.paper, -.015, '#0a1830'); if (t > n0) jp('高子', 540, 500, 70, K.must, 'center', .06); ctx.restore();
  popText('TAKA-CHAN', 540, 410, 150, t, c0, K.must, -.015, '#0a1830'); if (t > c0 + .3) plate('1950–1954 · ON THE ROOF', 540, 490, 38, K.paper, K.ink, 1, .015, pop(t, c0 + .3));
}
function sceneRide(t) {
  roofDay(t); const a = -1.2 + (t - T.ride) * .95, fx = 540, fy = 1290, x = fx + Math.cos(a) * 360, y = fy + 70 + Math.sin(a) * 110, behind = Math.sin(a) < 0, s = lerp(.82, 1.12, (Math.sin(a) + 1) / 2), o = { flip: Math.sin(a) > 0, walk: (t - T.ride) * 1.6, rider: t, trunk: .3 + .2 * Math.sin(t * 3) };
  if (behind) { shadow(x, y + 4, 180 * s, 16, .2); elephant(x, y, s, o); } fountain(fx, fy, 1.2, t); if (!behind) { shadow(x, y + 4, 180 * s, 16, .2); elephant(x, y, s, o); }
  for (let i = 0; i < 5; i++) mini(120 + i * 210 + 6 * Math.sin(t * 2 + i), 1140, 1.1, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]);
  const p0 = wt(13, 'messenger') - .3; if (t > p0) { for (let i = 0; i < 3; i++) { const ph = ((t - p0) * .25 + i * .3) % 1, bx = lerp(-100, 1180, ph), by = 760 - 90 * Math.sin(ph * Math.PI) + i * 50, fl = Math.sin(t * 12 + i) * 16; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(bx, by, 30, 14, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(bx - 10, by); ctx.lineTo(bx - 4, by - 34 - fl); ctx.lineTo(bx + 16, by); ctx.fill(); ctx.beginPath(); ctx.arc(bx + 28, by - 6, 10, 0, TAU); ctx.fill(); } }
  topBand(540, 'rgba(10,30,60,.6)');
  popText('RIDES AROUND', 540, 370, 100, t, T.ride + .15, K.paper, -.015, '#0a1830'); popText('THE FOUNTAIN', 540, 480, 104, t, wt(12, 'fountain') - .5, K.must, -.015, '#0a1830');
  if (t > p0) { ctx.fillStyle = `rgba(10,30,60,${.6 * P(t, p0, p0 + .3)})`; ctx.fillRect(0, 560, W, 150); plate('“A MESSENGER OF PEACE”', 540, 650, 58, K.paper, K.ink, 1, -.02, pop(t, p0)); }
}

// ------------------------------------------------------------ too big for the crane
function sceneBig(t) {
  fillBG('#1f5a57', '#123a3a'); ctx.fillStyle = '#0f2e2e'; ctx.fillRect(0, 1330, W, 800);
  const a0 = wt(15, '560') - .3, a1 = wt(15, '18') + .5, g = E.io2(P(t, a0, a1)), kg = Math.round(lerp(560, 1800, g) / 10) * 10, h0 = wt(16, 'too') - .3;
  // hay
  const e0 = wt(14, '30') - .4; for (let i = 0; i < 6; i++) { const k = pop(t, e0 + i * .12); if (k <= 0) continue; const x = 90 + (i % 3) * 86 + (i > 2 ? 43 : 0), y = 1330 - (i > 2 ? 76 : 0); ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = '#d9b24a'; rrect(-42, -76, 84, 76, 8); ctx.fill(); ctx.strokeStyle = '#a5822a'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-14, -76); ctx.lineTo(-14, 0); ctx.moveTo(14, -76); ctx.lineTo(14, 0); ctx.stroke(); ctx.restore(); }
  if (t > e0) plate('30 KG A DAY', 200, 1120, 42, K.must, K.ink, 1, -.04, pop(t, e0));
  // scale platform + elephant
  ctx.fillStyle = '#3a3f4a'; rrect(360, 1310, 640, 34, 8); ctx.fill(); ctx.fillStyle = '#6f6a60'; rrect(400, 1290, 560, 24, 6); ctx.fill();
  const sq = t > h0 ? Math.sin(t * 40) * 3 * (1 - P(t, h0, h0 + 1)) : 0; elephant(660 + sq, 1290, lerp(.85, 1.75, g), { trunk: .2 + .2 * Math.sin(t * 2) });
  // crane hook
  const hk = E.o3(P(t, h0 - .4, h0 + .1)); if (hk > 0) { const hy = lerp(600, 700, hk) + sq; ctx.strokeStyle = '#1b1a22'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(660, 590); ctx.lineTo(660, hy); ctx.stroke(); ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.strokeStyle = K.must; ctx.beginPath(); ctx.arc(660, hy + 34, 30, -Math.PI * .5, Math.PI * .9); ctx.stroke(); }
  stamp(t, h0 + .1, 620, 900, 'TOO HEAVY', K.red, -.1, 96);
  topBand(540, 'rgba(6,30,30,.6)');
  // readout
  { const k = pop(t, T.big + .2); ctx.save(); ctx.translate(540, 380); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.4)'; rrect(-412, -122, 840, 260, 26); ctx.fill(); ctx.fillStyle = K.ink; rrect(-420, -130, 840, 260, 26); ctx.fill(); ctx.strokeStyle = K.must; ctx.lineWidth = 5; rrect(-404, -114, 808, 228, 18); ctx.stroke(); const sN = kg >= 1000 ? Math.floor(kg / 1000) + ',' + String(kg % 1000).padStart(3, '0') : String(kg); txt(sN, 120, 56, font(900, 170), K.must, 'right', 2); txt('KG', 150, 56, font(900, 90), K.paper, 'left'); ctx.restore(); }
  label(`${1950 + Math.round(g * 4)} · 560 KG → 1,800 KG IN FOUR YEARS`, 540, 570, P(t, a0, a0 + .3), K.paper, 22);
}
function sceneStairs(t) {
  fillBG('#2a1c12', '#170f09');
  ctx.fillStyle = '#e9dcbb'; ctx.fillRect(250, 430, 580, 420); const wg = ctx.createLinearGradient(0, 430, 0, 850); wg.addColorStop(0, '#fff6d6'); wg.addColorStop(1, '#ffd98a'); ctx.fillStyle = wg; rrect(420, 470, 240, 380, [120, 120, 0, 0]); ctx.fill(); ctx.strokeStyle = '#8b5a33'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(540, 470); ctx.lineTo(540, 850); ctx.moveTo(420, 660); ctx.lineTo(660, 660); ctx.stroke();
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; const lg = ctx.createRadialGradient(540, 660, 50, 540, 660, 700); lg.addColorStop(0, 'rgba(255,220,150,.3)'); lg.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = lg; ctx.fillRect(0, 200, W, 1300); ctx.restore();
  const N = 11, sy = k => lerp(850, 1560, Math.pow(k / N, 1.25)), sx = k => lerp(250, -120, k / N);
  for (let k = 0; k < N; k++) { const y0 = sy(k), y1 = sy(k + 1), x0 = sx(k), x1 = sx(k + 1); ctx.fillStyle = k % 2 ? '#b5322a' : '#9a2a24'; ctx.fillRect(x1, y0, W - 2 * x1, y1 - y0); ctx.fillStyle = '#e9dcbb'; ctx.fillRect(x1, y0, W - 2 * x1, 8); ctx.fillStyle = '#8b5a33'; ctx.fillRect(x1, y0, 40, y1 - y0); ctx.fillRect(W - x1 - 40, y0, 40, y1 - y0); }
  const s0 = wt(17, 'walked') - .2, prog = P(t, s0, T.song - .2) * 6.2, st = Math.floor(prog), fr = E.io(clamp((prog - st) * 1.8)), kk = st + fr, ey = sy(kk) + 30, es = lerp(.9, 2.3, kk / 7), hop = Math.sin(fr * Math.PI) * 22;
  ctx.save(); ctx.globalAlpha = .93; elephant(520 + 14 * Math.sin(kk * 2), ey - hop, es, { sil: 1, col: '#0d0806', walk: kk * .5, trunk: .1 }); ctx.restore();
  topBand(540, 'rgba(20,12,6,.65)');
  digits('1954', t, wt(17, '1954') - .3, 400, 190, K.must, '#0b0704'); if (t > wt(17, 'staircase') - .5) plate('DOWN THE CENTRAL STAIRCASE', 540, 470, 40, K.paper, K.ink, 1, .015, pop(t, wt(17, 'staircase') - .5));
  if (t > wt(17, 'step') - .2) plate('STEP BY STEP', 300, 660, 54, K.red, K.paper, 1 - P(t, LS(18) - .2, LS(18)), -.05, pop(t, wt(17, 'step') - .2));
  const u0 = wt(18, 'ueno') - .3; if (t > u0) { const k = pop(t, u0); ctx.save(); ctx.translate(540, 660); ctx.rotate(-.03); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.4)'; rrect(-352, -82, 720, 180, 14); ctx.fill(); ctx.fillStyle = '#1f6d55'; rrect(-360, -90, 720, 180, 14); ctx.fill(); ctx.strokeStyle = K.paper; ctx.lineWidth = 5; rrect(-346, -76, 692, 152, 8); ctx.stroke(); jp('上野動物園', -120, 4, 66, K.paper, 'center', .06); txt('UENO ZOO', -120, 54, font(900, 36), K.paper, 'center', 4); txt('→', 250, 34, font(900, 120), K.must, 'center'); ctx.restore(); }
}

// ------------------------------------------------------------ what's left
function sceneSong(t) {
  fillBG('#e9b24a', '#b9781e'); rays(540, 900, t, .06, .12);
  ctx.strokeStyle = 'rgba(20,27,51,.7)'; ctx.lineWidth = 5; for (let j = 0; j < 5; j++) { ctx.beginPath(); for (let x = 0; x <= W; x += 20) { const y = 700 + j * 34 + Math.sin(x * .006 + t * 1.2) * 40; x ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); }
  for (let i = 0; i < 9; i++) { const x = ((i * 140 + t * 90) % 1260) - 60, y = 700 + ((i * 3) % 5) * 34 - 17 + Math.sin(x * .006 + t * 1.2) * 40 - Math.abs(Math.sin(t * 5 + i)) * 20; note(x, y, 1.5, 1, K.ink); }
  elephant(380, 1320, 1.25, { trunk: .6 + .3 * Math.sin(t * 3) }); elephant(800, 1330, .7, { flip: 1, trunk: .6 + .3 * Math.sin(t * 3 + 1.5) });
  const z0 = wt(19, 'zsan') - .5; if (t > z0) { const k = pop(t, z0); ctx.save(); ctx.translate(540, 980); ctx.rotate(-.03); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-372, -112, 760, 230, 18); ctx.fill(); ctx.fillStyle = K.paper; rrect(-380, -120, 760, 230, 18); ctx.fill(); jp('ぞうさん', -150, 30, 110, K.red, 'center', .06); txt('“ZŌ-SAN”', 210, 0, font(900, 64), K.ink, 'center'); txt('CHILDREN’S SONG', 210, 54, font(800, 24), K.ink, 'center', 3); ctx.restore(); }
  topBand(540, 'rgba(60,34,6,.6)');
  popText('THE ELEPHANT', 540, 370, 108, t, T.song + .15, K.paper, -.015, '#3a2206'); popText('CRAZE', 540, 490, 140, t, wt(19, 'craze') - .25, K.ink, -.015, '#e9b24a'); 
}
function sceneTower(t) {
  roofDay(t, ['#5aa0d8', '#e6f2f6']);
  // the tower, stylised
  const k = E.o3(P(t, T.tower, T.tower + .8)); ctx.save(); ctx.translate(540, 1300); ctx.scale(1, k); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.beginPath(); ctx.ellipse(0, 6, 300, 30, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#e9e2d0'; rrect(-150, -620, 300, 620, [150, 150, 10, 10]); ctx.fill(); ctx.fillStyle = '#d6cdb8'; rrect(-150, -620, 80, 620, [150, 0, 0, 10]); ctx.fill(); ctx.fillStyle = '#e9e2d0'; rrect(-210, -240, 120, 240, 16); ctx.fill(); rrect(90, -240, 120, 240, 16); ctx.fill();
  ctx.strokeStyle = '#e9e2d0'; ctx.lineWidth = 70; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(130, -470); ctx.quadraticCurveTo(300, -440, 290, -250); ctx.stroke(); ctx.fillStyle = '#7f8ea6'; ctx.beginPath(); ctx.arc(40, -500, 26, 0, TAU); ctx.fill(); for (let i = 0; i < 4; i++) { rrect(-30, -400 + i * 90, 60, 54, 6); ctx.fill(); }
  ctx.restore();
  for (let i = 0; i < 5; i++) mini(120 + i * 220 + 6 * Math.sin(t * 2 + i), 1380 + (i % 2) * 20, 1.5, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]);
  // glass canopy
  ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = 5; ctx.fillStyle = 'rgba(190,230,245,.2)'; ctx.beginPath(); ctx.moveTo(-40, 620); ctx.quadraticCurveTo(540, 520, 1120, 620); ctx.lineTo(1120, 560); ctx.lineTo(-40, 560); ctx.fill(); ctx.beginPath(); ctx.moveTo(-40, 620); ctx.quadraticCurveTo(540, 520, 1120, 620); ctx.stroke(); for (let x = 40; x < W; x += 110) { ctx.beginPath(); ctx.moveTo(x, 560); ctx.lineTo(x, 606 - 36 * Math.sin(x / W * Math.PI)); ctx.stroke(); }
  label('ROOFTOP TOWER · STYLISED ILLUSTRATION', 540, 1440, P(t, T.tower + .5, T.tower + .9) * .9, K.ink, 19);
  topBand(540, 'rgba(10,30,60,.6)');
  popText('STILL ON', 540, 370, 118, t, T.tower + .15, K.paper, -.015, '#0a1830'); popText('THE ROOF', 540, 490, 128, t, wt(20, 'still') - .3, K.must, -.015, '#0a1830');
  if (t > wt(20, 'said') - .2) plate('SAID TO BE SHAPED LIKE HER', 540, 720, 40, K.paper, K.ink, 1, -.02, pop(t, wt(20, 'said') - .2));
}

// ------------------------------------------------------------ tease: the wrapping paper
function wrapBox(x, y, s, t, open = 0) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-300, -200, 620, 440, 10); ctx.fill(); ctx.fillStyle = '#fbf8f0'; rrect(-310, -220, 620, 440, 10); ctx.fill();
  ctx.save(); rrect(-310, -220, 620, 440, 10); ctx.clip(); const r = rng(42); for (let i = 0; i < 9; i++) { const bx = -280 + r() * 560, by = -190 + r() * 380, a = r() * 3; ctx.fillStyle = ['#e04a78', '#f08aa8', '#d83a5a'][i % 3]; ctx.beginPath(); ctx.ellipse(bx, by, 50 + r() * 50, 28 + r() * 30, a, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(bx + 40 * Math.cos(a), by + 40 * Math.sin(a), 30 + r() * 20, 22 + r() * 16, a + 1, 0, TAU); ctx.fill(); } ctx.fillStyle = 'rgba(0,0,0,.06)'; ctx.beginPath(); ctx.moveTo(-310, -220); ctx.lineTo(0, 0); ctx.lineTo(-310, 220); ctx.fill(); ctx.restore();
  const d = 150 * open; ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-310, 0); ctx.lineTo(-40 - d, 0); ctx.moveTo(40 + d, 0); ctx.lineTo(310, 0); ctx.stroke(); if (open < 1) { ctx.globalAlpha = 1 - open; for (const sd of [-1, 1]) { ctx.beginPath(); ctx.ellipse(sd * 46, -24, 44, 24, sd * .5, 0, TAU); ctx.stroke(); } ctx.globalAlpha = 1; }
  for (const sd of [-1, 1]) { const hx = sd * (120 + d * 1.6), hy = 30 + 10 * Math.sin(t * 3 + sd); ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(sd * (40 + d), 0); ctx.lineTo(hx, hy); ctx.stroke(); ctx.fillStyle = '#2c3040'; ctx.save(); ctx.translate(hx, hy); ctx.rotate(sd * -.5); rrect(-40, 30, 80, 400, 12); ctx.fill(); ctx.fillStyle = '#f3ece0'; ctx.fillRect(-40, 30, 80, 26); ctx.fillStyle = SKIN; rrect(-36, -36, 72, 76, 26); ctx.fill(); rrect(sd * -50 - 13, -10, 26, 46, 12); ctx.fill(); ctx.restore(); }
  ctx.restore();
}
function sceneTease(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .05, .12, '0,0,0');
  const l0 = wt(22, 'lettering') - .3, o = E.io2(P(t, wt(21, 'launched') - .2, l0 + .3)), z = E.io2(P(t, T.tease, T.end));
  wrapBox(540, 980, lerp(1.05, 1.15, z), t, o);
  if (t > l0) { const k = pop(t, l0); ctx.save(); ctx.translate(540, 1290); ctx.rotate(-.03); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-352, -62, 720, 150, 12); ctx.fill(); ctx.fillStyle = K.paper; rrect(-360, -70, 720, 150, 12); ctx.fill(); const n = Math.floor(P(t, l0 + .2, l0 + 1.6) * 60); ctx.strokeStyle = K.red; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); for (let i = 0; i <= n; i++) { const x = -300 + i * 10, y = 10 + Math.sin(i * .9) * 26 * Math.sin(i * .16 + 1); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); txt('LETTERING: A YOUNG AD MAN', 0, 64, font(800, 22, F.m), K.ink, 'center', 3); ctx.restore(); }
  const a0 = wt(22, 'anpanman') - .4; if (t > a0) plate('…LATER, THE CREATOR OF ANPANMAN', 540, 660, 42, K.must, K.ink, 1, -.02, pop(t, a0));
  topBand(540, 'rgba(40,10,8,.55)');
  digits('1950', t, T.tease + .3, 400, 190, K.must, '#2a0b08'); if (t > wt(21, 'wrapping') - .3) plate('MITSUKOSHI’S NEW WRAPPING PAPER', 540, 470, 38, K.paper, K.ink, 1, .015, pop(t, wt(21, 'wrapping') - .3));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const p = E.o3(P(t, T.end, T.end + .6));
  ctx.save(); ctx.translate(540, lerp(-300, 640, p)); ctx.rotate(lerp(.25, -.04, p)); ctx.fillStyle = 'rgba(0,0,0,.45)'; rrect(-388, -238, 800, 500, 8); ctx.fill(); ctx.fillStyle = '#efe3c4'; rrect(-400, -250, 800, 500, 8); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.rect(-372, -222, 744, 390); ctx.clip(); ctx.fillStyle = '#7c2a22'; ctx.fillRect(-372, -222, 744, 390); wrapBox(0, -26, .72, t, 1); ctx.restore();
  txt('EPISODE 6', -372, 218, font(800, 26), '#5b3a20', 'left', 4); txt('ILLUSTRATION', 372, 216, font(500, 16, F.m), 'rgba(91,58,32,.8)', 'right', 3); ctx.restore();
  const n = T.end + .45; plate('NEXT', 190, 1000, 56, K.red, K.paper, P(t, n, n + .1), -.04, E.oBack(P(t, n, n + .3)));
  ['The wrapping', 'paper and', 'Anpanman'].forEach((s, i) => { const a = E.o3(P(t, n + .2 + i * .14, n + .65 + i * .14)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 1126 + i * 102 + 30 * (1 - a), 96, i === 2 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
}

const STEP0 = wt(17, 'walked') - .2, STEPD = (T.song - .2 - STEP0) / 6.2;
window.FILM = {
  title: 'THE ELEPHANT ON THE ROOF', tag: 'EP 5 · JAPAN’S DEPARTMENT STORES',
  hotLines: [6],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.crane, draw: sceneCrane }, { start: T.roofs, draw: sceneRoofs }, { start: T.cable, draw: sceneCable }, { start: T.war, draw: sceneWar }, { start: T.trains, draw: sceneTrains }, { start: T.need, draw: sceneNeed }, { start: T.taka, draw: sceneTaka }, { start: T.ride, draw: sceneRide }, { start: T.big, draw: sceneBig }, { start: T.stairs, draw: sceneStairs }, { start: T.song, draw: sceneSong }, { start: T.tower, draw: sceneTower }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.crane, .4], [T.roofs, .4], [T.cable, .4], [T.war, .6], [T.trains, .6], [T.need, .4], [T.taka, .4], [T.ride, .4], [T.big, .4], [T.stairs, .5], [T.song, .4], [T.tower, .4], [T.tease, .5], [T.end, .4]],
  chapters: [[0, '01', 'THE ROOF'], [T.roofs, '02', 'PLAYGROUNDS'], [T.war, '03', 'WHY AN ELEPHANT'], [T.taka, '04', 'TAKA-CHAN'], [T.big, '05', 'TOO BIG'], [T.song, '06', 'WHAT’S LEFT'], [T.tease, '07', 'NEXT']],
  hits: [[.8, 8, .3], [wt(16, 'too') - .2, 14, .5], ...Array.from({ length: 6 }, (_, i) => [STEP0 + (i + .45) * STEPD, 12, .3]), [wt(19, 'craze') - .25, 8, .3]],
  flashes: [[T.roofs, .3], [T.taka, .3], [T.song, .3], [T.end, .3]],
  events: {
    scene: [T.crane, T.roofs, T.cable, T.war, T.trains, T.need, T.taka, T.ride, T.big, T.stairs, T.song, T.tower, T.tease, T.end],
    pop: [.3, wt(1, 'may') - .3, wt(2, 'hoisted') - .3, wt(4, 'roof') - .3, wt(5, 'zoo') - .4, wt(5, 'cable') - .6, wt(7, 'elephant') - .3, wt(7, 'two') - .3, wt(8, 'needed') - .3, wt(10, 'shake') - .3, wt(10, 'sit') - .25, wt(13, 'messenger') - .3, wt(14, '30') - .4, wt(18, 'ueno') - .3, wt(19, 'zsan') - .5, wt(21, 'wrapping') - .3, wt(22, 'lettering') - .3, wt(22, 'anpanman') - .4, T.end + .45],
    stamp: [.8, wt(1, '1950') - .15, wt(3, 'playgrounds') - .25, wt(4, '1907') - .15, wt(5, '1931') - .15, wt(7, '1949') - .15, T.need + .15, wt(9, 'takako') - .3, wt(9, 'takachan') - .3, wt(12, 'fountain') - .5, wt(16, 'too') - .2, wt(17, '1954') - .15, wt(19, 'craze') - .25, wt(20, 'still') - .3, T.tease + .45],
    footstep: Array.from({ length: 6 }, (_, i) => STEP0 + (i + .45) * STEPD),
    trumpet: [wt(11, 'trumpet') - .3], drum: [wt(11, 'drum') - .3, T.ride], crane: [T.crane + .2, T.roofs - .3], war: [T.war, T.trains], train: [T.trains - .3], count: [wt(15, '560') - .3, wt(15, '18') + .5], water: [T.roofs, T.cable, T.ride, T.big], song: [T.song, T.tower], end: [T.end],
  },
};
