// HOW THE SLIPPERS CAME OFF — episode 2. Portrait-first (9:16). Helpers shared with episode 1.
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

const T = { hook: 0, check: LB(2), roots: LB(3), tatami: LB(5), glass: LB(7), news: LB(10), palace: LB(12), esc: LB(13), door: LB(14), pile: LB(15), date: LB(16), burn: LB(18), rebuilt: LB(20), ginza: LB(21), every: LB(22), tease: LB(24), end: LB(26) };
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

// ------------------------------------------------------------ the Mitsukoshi palace + lions (own coords: x 90..990, top 430, base 1000)
function lion(x, y, s, flip = 1, col = '#8f7742') {
  ctx.save(); ctx.translate(x, y); ctx.scale(s * flip, s);
  ctx.fillStyle = '#b9ae98'; rrect(-200, 0, 450, 76, 6); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(-200, 56, 450, 20); ctx.fillStyle = '#cfc5b0'; ctx.fillRect(-212, -8, 474, 16);
  ctx.strokeStyle = col; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-150, -50); ctx.quadraticCurveTo(-215, -40, -190, -14); ctx.stroke();
  ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, -62, 130, 52, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(-92, -72, 64, 0, TAU); ctx.fill(); rrect(-150, -34, 130, 28, 14); ctx.fill(); rrect(50, -36, 190, 30, 15); ctx.fill();
  ctx.fillStyle = '#6f5a2e'; ctx.beginPath(); ctx.arc(104, -118, 74, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(80, -70, 50, 0, TAU); ctx.fill();
  ctx.fillStyle = col; ctx.beginPath(); ctx.arc(128, -132, 50, 0, TAU); ctx.fill(); rrect(150, -134, 52, 40, 12); ctx.fill(); ctx.beginPath(); ctx.arc(100, -176, 14, 0, TAU); ctx.fill();
  ctx.fillStyle = '#2a2212'; ctx.beginPath(); ctx.arc(146, -142, 6, 0, TAU); ctx.fill(); ctx.fillRect(194, -126, 9, 9);
  ctx.fillStyle = 'rgba(255,240,190,.22)'; ctx.beginPath(); ctx.ellipse(-10, -92, 96, 14, 0, 0, TAU); ctx.fill();
  ctx.restore();
}
function palace(t, burn = 0, lionGlow = 0) {
  const st = burn ? '#2b2422' : '#e6dfcf', st2 = burn ? '#1c1716' : '#cfc5b0', st3 = burn ? '#241d1b' : '#bdb29a';
  ctx.fillStyle = st; ctx.fillRect(90, 430, 900, 570);
  if (!burn) { ctx.fillStyle = st2; ctx.beginPath(); ctx.ellipse(540, 404, 92, 62, 0, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#5f8f86'; ctx.beginPath(); ctx.ellipse(540, 398, 72, 50, 0, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#3a3f4a'; ctx.fillRect(537, 300, 6, 60); }
  else { ctx.fillStyle = st; ctx.beginPath(); ctx.moveTo(90, 432); for (let x = 90; x <= 990; x += 30) ctx.lineTo(x, 430 - 26 * Math.abs(noise(x * .37))); ctx.lineTo(990, 432); ctx.fill(); }
  ctx.fillStyle = st2; ctx.fillRect(74, 420, 932, 26); ctx.fillRect(90, 800, 900, 14);
  for (let i = 0; i <= 9; i++) { ctx.fillStyle = st3; ctx.fillRect(90 + i * 99 - (i === 9 ? 12 : 0), 446, 12, 354); }
  for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) {
    const x = 118 + c * 99, y = 470 + r * 112, f = burn ? Math.max(0, noise(t * 5 + r * 13 + c * 7)) : 0;
    ctx.fillStyle = burn ? `rgb(${40 + 215 * f},${20 + 100 * f},${10 + 20 * f})` : (((r * 4 + c * 3) % 5) ? '#f7dc9a' : '#7f8ea6'); rrect(x, y, 56, 84, r === 0 ? [28, 28, 3, 3] : 3); ctx.fill();
    ctx.fillStyle = st3; ctx.fillRect(x - 6, y + 84, 68, 8); if (!burn) { ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(x + 26, y, 4, 84); }
  }
  ctx.fillStyle = st3; ctx.fillRect(90, 814, 900, 186); ctx.fillStyle = 'rgba(0,0,0,.1)'; for (let y = 830; y < 1000; y += 28) ctx.fillRect(90, y, 900, 4);
  for (let c = 0; c < 5; c++) { const x = 150 + c * 195, big = c === 2, w = big ? 150 : 104, h = big ? 168 : 130; ctx.fillStyle = burn ? '#0a0706' : (big ? '#ffd98a' : '#f1cf88'); rrect(x - w / 2, 1000 - h, w, h, [w / 2, w / 2, 0, 0]); ctx.fill(); if (!burn && !big) { ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(x - 2, 1000 - h, 4, h); } }
  if (!burn) { ctx.fillStyle = K.ink2; ctx.beginPath(); ctx.arc(540, 484, 0, 0, TAU); ctx.fill(); }
  ctx.fillStyle = burn ? '#3a2f2c' : K.ink2; ctx.beginPath(); ctx.arc(540, 792, 34, 0, TAU); ctx.fill(); ctx.strokeStyle = burn ? '#5a4a44' : K.paper; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(540, 792, 27, 0, TAU); ctx.stroke(); jp('越', 540, 806, 36, burn ? '#5a4a44' : K.paper, 'center', .06);
  if (lionGlow > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (const lx of [392, 688]) { const g = ctx.createRadialGradient(lx, 960, 0, lx, 960, 130); g.addColorStop(0, `rgba(255,220,140,${.5 * lionGlow})`); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(lx - 130, 830, 260, 260); } ctx.restore(); }
  lion(392, 978, .3, 1); lion(688, 978, .3, -1);
}
function smoke(t, x0, x1, y, n = 16) { for (let i = 0; i < n; i++) { const ph = (t * .16 + i / n) % 1, x = lerp(x0, x1, (i * .618) % 1) + 60 * noise(i * 3 + t * .3) + ph * 120; ctx.fillStyle = `rgba(${18 + i % 3 * 8},${14 + i % 3 * 6},${16},${.75 * (1 - ph)})`; ctx.beginPath(); ctx.arc(x, y - ph * 620, 50 + ph * 150, 0, TAU); ctx.fill(); } }

// ------------------------------------------------------------ S0 hook: the 1914 palace
function badge(x, y, t, t0, name, icon) {
  const p = E.oBack(P(t, t0, t0 + .35)); if (p <= 0) return;
  ctx.save(); ctx.translate(x, y); ctx.scale(p, p); ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.arc(6, 8, 84, 0, TAU); ctx.fill(); ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(0, 0, 84, 0, TAU); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(0, 0, 72, 0, TAU); ctx.stroke();
  icon(t - t0); ctx.restore(); label(name, x, y + 124, P(t, t0 + .15, t0 + .4), K.paper, 19);
}
function iconLift(u) { ctx.fillStyle = K.ink; rrect(-30, -38, 60, 76, 6); ctx.fill(); ctx.fillStyle = K.must; const y = -30 + 24 * (.5 + .5 * Math.sin(u * 3)); rrect(-22, y, 44, 36, 4); ctx.fill(); ctx.fillStyle = K.ink; ctx.fillRect(-1, y, 2, 36); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(44, -8); ctx.lineTo(54, -26); ctx.lineTo(64, -8); ctx.fill(); ctx.beginPath(); ctx.moveTo(44, 8); ctx.lineTo(54, 26); ctx.lineTo(64, 8); ctx.fill(); }
function iconHeat(u) { ctx.fillStyle = K.ink; for (let i = 0; i < 5; i++) { rrect(-44 + i * 19, -14, 13, 54, 6); ctx.fill(); } ctx.fillRect(-48, 36, 100, 7); ctx.strokeStyle = K.red; ctx.lineWidth = 5; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { ctx.beginPath(); for (let k = 0; k <= 6; k++) { const yy = -24 - k * 5, xx = -26 + i * 26 + Math.sin(k * 1.2 + u * 5 + i) * 6; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } }
function iconEsc(u) { ctx.strokeStyle = K.ink; ctx.lineWidth = 9; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-52, 34); ctx.lineTo(-28, 34); for (let i = 0; i < 4; i++) { ctx.lineTo(-28 + i * 16, 34 - (i + 1) * 15); ctx.lineTo(-28 + (i + 1) * 16, 34 - (i + 1) * 15); } ctx.lineTo(52, -26); ctx.stroke(); const q = (u * .8) % 1; ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(lerp(-30, 26, q), lerp(-2, -58, q), 9, 0, TAU); ctx.fill(); }
function skyDusk(a = '#172a55', b = '#8a4a62', c = '#f0a25a') { const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, a); g.addColorStop(.62, b); g.addColorStop(1, c); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120); }
function sceneHook(t) {
  skyDusk(); const z = E.io2(P(t, 0, T.check));
  ctx.fillStyle = '#1a1830'; ctx.fillRect(-60, 1100, W + 120, 900);
  ctx.save(); ctx.translate(540, 1104); ctx.scale(lerp(.9, .96, z), lerp(.9, .96, z)); ctx.translate(-540, -1000); palace(t); for (let i = 0; i < 5; i++) mini(((i * 230 + t * (18 + i * 5) * (i % 2 ? 1 : -1)) % 1300 + 1300) % 1300 - 100, 1040 + (i % 3) * 12, 1.1, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]); ctx.restore();
  ctx.fillStyle = 'rgba(12,16,40,.4)'; ctx.fillRect(0, 0, W, 520);
  plate('EP 2', 150, 290, 44, K.red, K.paper, P(t, .3, .4), -.04, E.oBack(P(t, .3, .6)));
  popText('HOW THE SLIPPERS', 540, 392, 86, t, .55, K.paper, -.015); popText('CAME OFF', 540, 492, 112, t, .8, K.must, -.015);
  label('MITSUKOSHI · NIHONBASHI, TOKYO · 1914', 540, 1398, P(t, wt(0, '1914') - .2, wt(0, '1914') + .3), K.paper, 21);
  badge(210, 1218, t, wt(0, 'elevators') - .15, 'ELEVATORS', iconLift); badge(540, 1218, t, wt(0, 'heating') - .35, 'CENTRAL HEATING', iconHeat); badge(870, 1218, t, wt(1, 'escalator') - .2, 'FREE ESCALATOR', iconEsc);
}

// ------------------------------------------------------------ shoe-check wall (shared by hook, pile)
let PILE = [], CUB = [];
const KINDS = ['geta', 'zori', 'loafer', 'black', 'geta', 'sneaker', 'zori', 'tan', 'geta', 'boot'];
function cubbies(t, o = {}) {
  const qk = o.qk || 0, mix = o.mix === undefined ? 1e9 : o.mix, t0 = o.t0 === undefined ? -9 : o.t0;
  ctx.fillStyle = '#4a2f1a'; ctx.fillRect(30, 300, 1020, 640);
  CUB.forEach((c, i) => {
    const x = 42 + c.c * 168, y = 312 + c.r * 124;
    ctx.fillStyle = '#1d130c'; rrect(x, y, 156, 112, 6); ctx.fill();
    const p = E.oBack(P(t, t0 + c.o * .9, t0 + .3 + c.o * .9)); if (p <= 0 || (o.hole === i)) return;
    let dx = 0, dy = 0;
    if (c.sw !== undefined) { const m = E.io(P(t, mix + c.sw * .12, mix + .55 + c.sw * .12)), q = CUB[c.to]; dx = (q.c - c.c) * 168 * m; dy = (q.r - c.r) * 124 * m - Math.sin(m * Math.PI) * 60; }
    ctx.save(); ctx.globalAlpha = clamp(p * 2); pair(c.kind, x + 22 + dx, y + 100 + dy, .52 * p, 0); ctx.restore();
    const sw = c.sw !== undefined && t > mix + .5; ctx.fillStyle = sw ? K.red : '#d6a868'; rrect(x + 104, y + 8, 44, 30, 5); ctx.fill(); txt(sw ? '?' : String(c.n), x + 126, y + 31, font(900, sw ? 26 : 17), sw ? K.paper : K.ink, 'center');
  });
  ctx.fillStyle = '#6f4526'; ctx.fillRect(0, 1250, W, 700); ctx.fillStyle = K.wood; ctx.fillRect(0, 1232, W, 30); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, 1262, W, 10);
}
function woodTag(x, y, s, rot, num) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-46, -68, 104, 148, 12); ctx.fill(); ctx.fillStyle = '#d6a868'; rrect(-52, -74, 104, 148, 12); ctx.fill(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(0, -50, 8, 0, TAU); ctx.fill(); txt('No.', 0, 0, font(700, 22, F.m), K.ink, 'center'); txt(num, 0, 48, font(900, 44), K.ink, 'center'); ctx.restore(); }
const HOLE = 14;   // the cubby that will hold the hero pair
function sceneCheck(t) {
  fillBG('#2a1c12', '#170f09'); cubbies(t, { hole: HOLE });
  const h = wt(2, 'hand') - .2, q = E.io2(P(t, h, h + .9)), hx = 42 + 2 * 168 + 22, hy = 312 + 2 * 124 + 100;
  const x = lerp(-300, 400, E.o3(P(t, T.check - .1, T.check + .6))), up = E.io2(P(t, h + 1.0, h + 1.7));
  const px = lerp(x, hx, up), py = lerp(1232, hy, up) - Math.sin(up * Math.PI) * 120, ps = lerp(1.25, .52, up);
  shadow(px + 120 * ps, py + 4, 130 * ps, 9); pair('loafer', px, py, ps);
  if (q > 0) woodTag(lerp(1200, 800, E.o3(q)), 1130, 1.25, -.1 + .05 * Math.sin(t * 3), '428');
  ctx.fillStyle = 'rgba(20,12,6,.6)'; ctx.fillRect(0, 0, W, 300);
  popText('HAND OVER YOUR SHOES', 540, 276, 70, t, h, K.paper, -.015, '#0b0704');
  reticle(hx + 60, hy - 30, 96, t, 'PAIR #001', 'CHECKED · No. 428', vis(t, h + 1.75, T.roots + .3, .3), K.must);
  label('下足番 · THE SHOE CHECK', 540, 985, vis(t, T.check + .3, T.roots, .4), K.must, 24);
}

// ------------------------------------------------------------ S2 roots: Edo street, then tatami selling
function shopRow(side) {
  ctx.save(); if (side < 0) { ctx.translate(1080, 0); ctx.scale(-1, 1); }
  ctx.fillStyle = '#5b3a20'; ctx.beginPath(); ctx.moveTo(0, 880); ctx.lineTo(470, 806); ctx.lineTo(470, 832); ctx.lineTo(0, 1420); ctx.fill();
  ctx.fillStyle = '#c9b88e'; ctx.beginPath(); ctx.moveTo(0, 1150); ctx.lineTo(470, 824); ctx.lineTo(470, 832); ctx.lineTo(0, 1420); ctx.fill();
  ctx.fillStyle = '#22252f'; ctx.beginPath(); ctx.moveTo(0, 440); ctx.lineTo(480, 760); ctx.lineTo(480, 786); ctx.lineTo(0, 640); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.08)'; ctx.lineWidth = 3; for (let i = 1; i < 10; i++) { const u = i / 10; ctx.beginPath(); ctx.moveTo(lerp(0, 480, u), lerp(440, 760, u)); ctx.lineTo(lerp(0, 480, u), lerp(640, 786, u)); ctx.stroke(); }
  ctx.fillStyle = '#24407a'; ctx.beginPath(); ctx.moveTo(0, 640); ctx.lineTo(480, 786); ctx.lineTo(470, 808); ctx.lineTo(0, 890); ctx.fill();
  for (let i = 0; i < 6; i++) { const u = 1 - Math.pow(1 - (i + .5) / 6.4, 1.7), x = lerp(0, 470, u), y0 = lerp(640, 786, u), y1 = lerp(890, 808, u), r = (y1 - y0) * .3; ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(x, (y0 + y1) / 2, r, 0, TAU); ctx.fill(); ctx.fillStyle = '#24407a'; ctx.beginPath(); ctx.arc(x, (y0 + y1) / 2, r * .62, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(x + r * 1.5, y0 + 4, 3, y1 - y0 - 4); }
  ctx.restore();
}
function sceneStreet(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 900); g.addColorStop(0, '#1d3d78'); g.addColorStop(.3, '#6f95bd'); g.addColorStop(.7, '#f1e2bd'); g.addColorStop(1, '#f1c9a0'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, 1000); ctx.fillStyle = '#e3cfa2'; ctx.fillRect(-60, 900, W + 120, 1200);
  const z = E.io2(P(t, T.roots, T.tatami)); ctx.save(); ctx.translate(540, 800); ctx.scale(lerp(1, 1.07, z), lerp(1, 1.07, z)); ctx.translate(-540, -800);
  ctx.fillStyle = '#8fa6c6'; ctx.beginPath(); ctx.moveTo(250, 790); ctx.quadraticCurveTo(450, 700, 500, 520); ctx.lineTo(580, 520); ctx.quadraticCurveTo(630, 700, 830, 790); ctx.fill();
  ctx.fillStyle = '#fbf7ec'; ctx.beginPath(); ctx.moveTo(500, 520); ctx.lineTo(580, 520); ctx.quadraticCurveTo(596, 590, 618, 628); ctx.lineTo(590, 606); ctx.lineTo(566, 640); ctx.lineTo(540, 600); ctx.lineTo(512, 640); ctx.lineTo(488, 604); ctx.lineTo(462, 628); ctx.quadraticCurveTo(486, 590, 500, 520); ctx.fill();
  ctx.fillStyle = 'rgba(251,247,236,.9)'; for (let i = 0; i < 7; i++) { rrect(150 + i * 120 + 14 * Math.sin(t * .4 + i), 716 + (i % 2) * 26, 220, 34, 17); ctx.fill(); }
  ctx.fillStyle = '#e3cfa2'; ctx.beginPath(); ctx.moveTo(470, 806); ctx.lineTo(610, 806); ctx.lineTo(1200, 1500); ctx.lineTo(-120, 1500); ctx.fill();
  shopRow(1); shopRow(-1);
  for (let i = 0; i < 9; i++) { const u = (i + .6) / 9.5, d = u * u, y = lerp(840, 1330, d), s = lerp(.35, 2.1, d), x = 540 + (i % 2 ? 1 : -1) * lerp(30, 250, d) * (.5 + (i * .37) % .6) + 14 * Math.sin(t * .8 + i); mini(x, y, s, ['#24407a', '#7c2a22', '#274a48', '#3a3f52', '#8b5a33'][i % 5]); }
  ctx.restore();
  ctx.fillStyle = 'rgba(12,20,50,.42)'; ctx.fillRect(0, 0, W, 470);
  const e = wt(4, 'echigoya') - .25, y3 = wt(4, '1673') - .2;
  popText('KIMONO SHOPS', 540, 360, 96, t, wt(3, 'kimono') - .2, K.paper, -.015);
  if (t > e) { plate('ECHIGOYA', 380, 450, 54, K.red, K.paper, 1, -.03, E.oBack(P(t, e, e + .3))); jp('越後屋', 720, 468, 60, K.must, 'center', .06); }
  if (t > y3) { const p = E.oBack(P(t, y3, y3 + .35)); ctx.save(); ctx.translate(540, 1010); ctx.rotate(-.04); ctx.scale(p, p); big('1673', 0, 0, 250, K.must, 'center', '#0d1430'); ctx.restore(); }
  label('ILLUSTRATION AFTER HIROSHIGE’S “SURUGA-CHŌ”', 540, 1362, P(t, T.roots + .6, T.roots + 1.1) * .9, K.ink, 17);
}
function bolt(x, y, w, col, u) { ctx.fillStyle = col; rrect(x - w * u, y - 16, w * u + 20, 20, 4); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.25)'; for (let i = 0; i < w * u; i += 46) ctx.fillRect(x - i - 10, y - 16, 12, 20); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x + 14, y - 22, 26, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.arc(x + 14, y - 22, 9, 0, TAU); ctx.fill(); }
function sceneTatami(t) {
  fillBG('#6b4a2c', '#3a2616');
  // shelves of cloth on the back wall
  ctx.fillStyle = '#3a2616'; ctx.fillRect(60, 470, 960, 400); for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) { ctx.fillStyle = [K.red, K.must, K.teal, K.ink2, '#e9e2cd', '#7c2a22'][(r * 5 + c * 7) % 6]; rrect(76 + c * 78, 492 + r * 128, 64, 100, 8); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(76 + c * 78, 572 + r * 128, 64, 20); } ctx.fillStyle = '#5b3a20'; for (let r = 0; r < 4; r++) ctx.fillRect(60, 470 + r * 128, 960, 14);
  // earthen floor + raised tatami
  ctx.fillStyle = '#4b3a2c'; ctx.fillRect(0, 1250, W, 800); ctx.fillStyle = K.woodD; ctx.fillRect(230, 1136, 900, 130); ctx.fillStyle = K.wood; ctx.fillRect(230, 1120, 900, 26);
  ctx.fillStyle = '#b9b86e'; ctx.fillRect(250, 1076, 880, 46); ctx.fillStyle = '#8f8e4c'; for (let x = 250; x < 1130; x += 12) ctx.fillRect(x, 1076, 3, 46); ctx.fillStyle = K.ink; for (let x = 250; x < 1130; x += 290) ctx.fillRect(x, 1076, 14, 46);
  shadow(150, 1254, 80, 8); pair('geta', 70, 1250, .8);
  // customer kneeling, barefoot
  const cx = 420, cy = 1076; ctx.fillStyle = SKIN; rrect(cx - 128, cy - 34, 84, 30, 14); ctx.fill(); for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(cx - 132, cy - 30 + i * 8, 6, 0, TAU); ctx.fill(); }
  ctx.fillStyle = K.teal; rrect(cx - 70, cy - 78, 190, 78, 30); ctx.fill(); rrect(cx - 60, cy - 250, 130, 200, 44); ctx.fill(); ctx.fillStyle = K.must; ctx.fillRect(cx - 60, cy - 130, 130, 40); ctx.fillStyle = SKIN; ctx.beginPath(); ctx.arc(cx + 14, cy - 292, 46, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(cx + 8, cy - 304, 48, Math.PI * .95, Math.PI * 2.05); ctx.fill(); ctx.beginPath(); ctx.arc(cx - 18, cy - 350, 22, 0, TAU); ctx.fill();
  // clerk brings bolts
  const c0 = LS(6) - .2, d = E.o3(P(t, c0, c0 + 1.0)), kx = lerp(1250, 900, d), u = E.io2(P(t, wt(6, 'cloth') - .5, wt(6, 'cloth') + .5));
  ctx.fillStyle = K.ink2; rrect(kx - 70, cy - 78, 180, 78, 30); ctx.fill(); rrect(kx - 50, cy - 250, 130, 200, 44); ctx.fill(); ctx.fillStyle = '#e9e2cd'; ctx.fillRect(kx - 50, cy - 130, 130, 34); ctx.fillStyle = SKIN; ctx.beginPath(); ctx.arc(kx, cy - 292, 46, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(kx + 4, cy - 306, 48, Math.PI * .9, Math.PI * 2.1); ctx.fill();
  [[K.red, 0], [K.must, 1], ['#e9e2cd', 2]].forEach(([col, i]) => bolt(kx - 120 - i * 12, cy - 4 - i * 26, 260 - i * 50, col, clamp(u * 1.3 - i * .15)));
  // titles
  ctx.fillStyle = 'rgba(30,18,8,.5)'; ctx.fillRect(0, 0, W, 450);
  const b = wt(5, 'barefoot') - .2; popText('SEATED SELLING', 540, 350, 92, t, T.tatami + .2, K.paper, -.015, '#1d1208'); jp('座売り', 540, 432, 52, K.must);
  callout(cx - 110, cy - 14, -150, 250, 'BAREFOOT', 'SHOES LEFT BELOW', vis(t, b, T.glass, .7), K.must, 0);
  callout(760, 1100, 60, 150, 'TATAMI', 'THE SHOP FLOOR', vis(t, wt(5, 'tatami') - .2, T.glass, .7), K.paper, 0);
}

// ------------------------------------------------------------ S3 glass cases + the 1905 declaration
function noren(x, y, w, h, t, a) { ctx.fillStyle = K.woodD; rrect(x - 20, y - 16, w + 40, 18, 8); ctx.fill(); for (let i = 0; i < 3; i++) { const sw = 8 * Math.sin(t * 2 + i * 1.3); ctx.fillStyle = '#24407a'; ctx.beginPath(); ctx.moveTo(x + i * w / 3 + 3, y); ctx.lineTo(x + (i + 1) * w / 3 - 3, y); ctx.lineTo(x + (i + 1) * w / 3 - 3 + sw, y + h); ctx.lineTo(x + i * w / 3 + 3 + sw, y + h); ctx.fill(); } }
function tcard(t, t0, y, col, year, title, art) {
  const p = E.o3(P(t, t0, t0 + .5)); if (p <= 0) return; const x = lerp(1120, 60, p);
  ctx.save(); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(x + 10, y + 12, 960, 300, 30); ctx.fill(); rrect(x, y, 960, 300, 30); ctx.fillStyle = col; ctx.fill(); ctx.clip(); ctx.translate(x, y); art(Math.max(0, t - t0));
  big(year, 56, 150, 128, K.must, 'left'); txt(title, 60, 222, font(900, 40), K.paper, 'left', 2); ctx.restore();
}
function kimonoStand(x, y, s, col) { ctx.fillStyle = '#5b3a20'; ctx.fillRect(x - 3 * s, y - 150 * s, 6 * s, 150 * s); ctx.fillRect(x - 40 * s, y - 4 * s, 80 * s, 8 * s); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x - 80 * s, y - 150 * s); ctx.lineTo(x + 80 * s, y - 150 * s); ctx.lineTo(x + 80 * s, y - 84 * s); ctx.lineTo(x + 36 * s, y - 84 * s); ctx.lineTo(x + 44 * s, y - 14 * s); ctx.lineTo(x - 44 * s, y - 14 * s); ctx.lineTo(x - 36 * s, y - 84 * s); ctx.lineTo(x - 80 * s, y - 84 * s); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.3)'; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(x - 24 * s + i * 16 * s, y - 40 * s - (i % 2) * 22 * s, 6 * s, 0, TAU); ctx.fill(); } }
function sceneGlass(t) {
  fillBG('#18203f', '#0f152b');
  const m = wt(7, 'mitsukoshi') - .2, fl = P(t, m, m + .4);
  noren(250, 290, 580, 250, t); 
  ctx.save(); ctx.translate(540, 440); ctx.scale(1, Math.abs(Math.cos(fl * Math.PI))); if (fl < .5) jp('越後屋', 0, 30, 130, K.paper, 'center', .06); else jp('三越', 0, 36, 170, K.paper, 'center', .07); ctx.restore();
  label(fl < .5 ? 'ECHIGOYA' : 'MITSUKOSHI', 540, 602, 1, K.must, 30);
  tcard(t, wt(8, 'display') - .5, 660, '#7c2a22', '1895', 'KIMONO ON DISPLAY', u => { for (let i = 0; i < 2; i++) { const x = 640 + i * 190; kimonoStand(x, 262, 1.05, i ? K.must : K.teal); ctx.fillStyle = 'rgba(190,230,240,.22)'; rrect(x - 88, 40, 176, 236, 8); ctx.fill(); ctx.strokeStyle = '#e9e2cd'; ctx.lineWidth = 6; rrect(x - 88, 40, 176, 236, 8); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,.25)'; ctx.beginPath(); ctx.moveTo(x - 70, 50); ctx.lineTo(x - 30, 50); ctx.lineTo(x - 80, 180); ctx.lineTo(x - 80, 90); ctx.fill(); } });
  tcard(t, wt(9, 'ended') - .3, 990, K.teal, '1900', 'TATAMI SELLING ENDS', u => { ctx.fillStyle = '#b9b86e'; rrect(600, 70, 300, 170, 8); ctx.fill(); ctx.fillStyle = '#8f8e4c'; for (let x = 600; x < 900; x += 12) ctx.fillRect(x, 70, 3, 170); ctx.strokeStyle = K.ink; ctx.lineWidth = 12; rrect(600, 70, 300, 170, 8); ctx.stroke(); const k = E.o3(P(u, .5, .9)); ctx.strokeStyle = K.red; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(580, 256); ctx.lineTo(580 + 340 * k, 256 - 200 * k); ctx.stroke(); });
}
function sceneNews(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 880, t, .05, .25, '0,0,0');
  const p = E.o3(P(t, T.news, T.news + .7)), rot = lerp(TAU * 1.5, -.035, p), sc = lerp(.1, 1, p);
  ctx.save(); ctx.translate(540, 900); ctx.rotate(rot); ctx.scale(sc, sc);
  ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(-418, -468, 860, 960); ctx.fillStyle = '#efe6cf'; ctx.fillRect(-430, -480, 860, 960);
  ctx.fillStyle = '#222'; ctx.fillRect(-400, -450, 800, 8); ctx.fillRect(-400, -350, 800, 4); jp('東京日日新聞', -400, -372, 62, '#222', 'left', .05); txt('JANUARY 1905', 400, -376, font(700, 24, F.m), '#222', 'right', 2);
  const h = wt(10, 'newspapers') - .25, hk = E.oBack(P(t, h, h + .35));
  ctx.fillStyle = K.red; ctx.globalAlpha = .12 + .88 * P(t, h, h + .2); rrect(-400, -320, 800, 330, 6); ctx.fill(); ctx.globalAlpha = 1;
  ctx.save(); ctx.translate(0, -150); ctx.scale(lerp(.9, 1, hk), lerp(.9, 1, hk)); ctx.globalAlpha = P(t, h, h + .15); jp('デパートメントストア宣言', 0, -50, 62, '#efe6cf', 'center', .06); txt('“DEPARTMENT STORE”', 0, 46, font(900, 62), '#efe6cf', 'center'); txt('DECLARED', 0, 120, font(900, 76), K.must, 'center', 4); ctx.restore();
  jp('三越呉服店', -400, 80, 46, '#222', 'left', .05); txt('MITSUKOSHI', -150, 76, font(900, 30), '#222', 'left', 3);
  ctx.fillStyle = 'rgba(40,40,40,.5)'; for (let c = 0; c < 4; c++) for (let r = 0; r < 15; r++) ctx.fillRect(-400 + c * 205, 116 + r * 23, 185 - ((r * 7 + c * 3) % 5) * 14, 7);
  txt('ILLUSTRATION', 400, 466, font(500, 15, F.m), 'rgba(40,40,40,.7)', 'right', 3);
  ctx.restore();
  ctx.fillStyle = 'rgba(40,10,8,.45)'; ctx.fillRect(0, 0, W, 400);
  const y = wt(10, '1905') - .25; if (t > y) for (let i = 0; i < 4; i++) { const q = E.oBack(P(t, y + i * .07, y + .35 + i * .07)); ctx.save(); ctx.translate(250 + i * 150, 372 + 80 * (1 - q)); ctx.globalAlpha = clamp(q * 1.5); big('1905'[i], 0, 0, 190, K.must, 'center', '#2a0b08'); ctx.restore(); }
  label('TOLD TO NEWSPAPERS NATIONWIDE', 540, 1420, vis(t, wt(10, 'told') - .1, T.palace, .4), K.paper, 22);
}

// ------------------------------------------------------------ S4 the palace: quote, escalator, door, pile
function scenePalace(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1150); g.addColorStop(0, '#1f5a6a'); g.addColorStop(1, '#f1e2bd'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = 'rgba(255,255,255,.5)'; for (let i = 0; i < 4; i++) { rrect(((i * 330 + t * 14) % 1400) - 200, 560 + (i % 2) * 80, 240, 40, 20); ctx.fill(); }
  ctx.fillStyle = '#2b3a3c'; ctx.fillRect(-60, 1180, W + 120, 900);
  const z = E.io2(P(t, T.palace, T.esc)); ctx.save(); ctx.translate(540, 1184); ctx.scale(lerp(.98, 1.08, z), lerp(.98, 1.08, z)); ctx.translate(-540, -1000); palace(t); for (let i = 0; i < 6; i++) mini(((i * 200 + t * (16 + i * 5) * (i % 2 ? 1 : -1)) % 1300 + 1300) % 1300 - 100, 1040 + (i % 3) * 12, 1.1, ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]); ctx.restore();
  ctx.fillStyle = 'rgba(10,36,44,.45)'; ctx.fillRect(0, 0, W, 560);
  const q = wt(12, 'finest') - .3; txt('“', 70, 400, font(900, 220), K.must, 'left');
  popText('FINEST EAST', 580, 350, 104, t, q, K.paper, -.015, '#0a2630'); popText('OF SUEZ', 580, 462, 124, t, q + .5, K.must, -.015, '#0a2630');
  label('— THE PRESS ON THE 1914 FLAGSHIP', 580, 524, P(t, q + .9, q + 1.3), K.paper, 20);
  label('1914 FLAGSHIP', 540, 1300, vis(t, T.palace + .3, T.esc, .4), K.paper, 26);
}
function sceneEsc(t) {
  fillBG('#3a2140', '#170d1f');
  ctx.fillStyle = '#e6dfcf'; ctx.fillRect(0, 560, W, 30); ctx.fillStyle = 'rgba(255,255,255,.05)'; for (let i = 0; i < 6; i++) ctx.fillRect(40 + i * 190, 590, 70, 700); ctx.fillStyle = '#2a1830'; ctx.fillRect(0, 1290, W, 800);
  const x0 = 60, y0 = 1290, x1 = 1020, y1 = 600, n = 13, ph = (t * .45) % 1;
  ctx.fillStyle = '#1b1022'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x1, y1 + 150); ctx.lineTo(x0 + 220, y0); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x1, y0); ctx.closePath(); ctx.clip();
  const sx = (x1 - x0) / n, sy = (y0 - y1) / n; for (let i = -1; i <= n; i++) { const x = x0 + (i + ph) * sx, y = y0 - (i + ph) * sy; ctx.fillStyle = '#8a7340'; ctx.fillRect(x, y - sy, sx + 1, sy + 4); ctx.fillStyle = '#c9b071'; ctx.fillRect(x, y - sy, sx + 1, 10); } ctx.restore();
  const R = [[.18, 0], [.47, 2], [.78, 4]]; R.forEach(([o, f]) => { const u = (o + t * .45 / n * 1) % 1, i = Math.floor(u * n), fr = ph, xx = x0 + (i + fr + .5) * sx, yy = y0 - (i + fr + 1) * sy; if (xx < 790) walker(xx, yy + 2, .52, .3, { ...FOLK[f], stand: 1 }); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0 - 10, y0 - 150); ctx.lineTo(x1 + 20, y1 - 150); ctx.stroke(); ctx.strokeStyle = 'rgba(240,182,55,.35)'; ctx.lineWidth = 8; for (let i = 0; i < 8; i++) { const u = i / 7; ctx.beginPath(); ctx.moveTo(lerp(x0, x1, u), lerp(y0, y1, u) - 140); ctx.lineTo(lerp(x0, x1, u), lerp(y0, y1, u) - 6); ctx.stroke(); }
  ctx.fillStyle = K.red; for (let i = 0; i < 3; i++) { const u = ((t * .5 + i / 3) % 1), x = lerp(260, 900, u), y = lerp(1290, 830, u) + 120; ctx.globalAlpha = Math.sin(u * Math.PI); ctx.beginPath(); ctx.moveTo(x + 30, y - 22); ctx.lineTo(x - 8, y - 10); ctx.lineTo(x + 10, y + 16); ctx.fill(); } ctx.globalAlpha = 1;
  ctx.fillStyle = 'rgba(20,10,28,.5)'; ctx.fillRect(0, 0, W, 540);
  const e = wt(13, 'first') - .25; popText('THE FIRST', 540, 330, 84, t, e, K.paper, -.015, '#12081a'); popText('ESCALATOR', 540, 440, 130, t, wt(13, 'escalator') - .25, K.must, -.015, '#12081a');
  label('IN ANY JAPANESE DEPARTMENT STORE', 540, 502, P(t, wt(13, 'in') - .1, wt(13, 'in') + .3), K.paper, 22);
}
function booth(y, t, closed = 0) {
  ctx.fillStyle = K.woodD; rrect(350, y, 380, 420, 18); ctx.fill(); ctx.fillStyle = '#1a120b'; rrect(384, y + 130, 312, 220, 10); ctx.fill();
  ctx.fillStyle = K.ink2; for (let i = 0; i < 3; i++) ctx.fillRect(384 + i * 106, y + 44, 100, 120 + 8 * Math.sin(t * 3 + i)); jp('下足番', 540, y + 118, 58, K.paper, 'center', .06);
  ctx.fillStyle = K.wood; ctx.fillRect(330, y + 340, 420, 26); txt('SHOE CHECK', 540, y + 400, font(900, 30), K.paper, 'center', 4);
  if (closed > 0) { ctx.save(); ctx.globalAlpha = closed; ctx.fillStyle = '#c9b071'; ctx.translate(540, y + 240); ctx.rotate(.22); ctx.fillRect(-230, -22, 460, 44); ctx.rotate(-.44); ctx.fillRect(-230, -22, 460, 44); ctx.restore(); }
}
function sceneDoor(t) {
  fillBG('#161d3a', '#0d1127'); { const ag = ctx.createLinearGradient(0, 540, 0, 1250); ag.addColorStop(0, '#2d2a5c'); ag.addColorStop(1, '#8a5a3a'); ctx.fillStyle = ag; rrect(120, 540, 840, 720, [420, 420, 0, 0]); ctx.fill(); ctx.strokeStyle = '#cdbb92'; ctx.lineWidth = 26; rrect(120, 540, 840, 740, [420, 420, 0, 0]); ctx.stroke(); } ctx.fillStyle = '#2a2140'; ctx.fillRect(0, 1250, W, 800); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, 1250, W, 12);
  const kinds = ['loafer', 'geta', 'black', 'zori', 'boot', 'geta', 'sneaker'];
  for (let i = 0; i < 7; i++) { const u = ((t - T.door) * .36 + i / 7) % 1, x = lerp(-260, 420, u), hop = Math.abs(Math.sin(u * Math.PI * 5)) * 30; ctx.save(); ctx.globalAlpha = 1 - P(u, .86, 1); pair(kinds[i], x, 1250 - hop, lerp(.9, .6, P(u, .8, 1))); ctx.restore(); }
  const s0 = wt(14, 'swapped') - .2;
  for (let i = 0; i < 7; i++) { const u = ((t - T.door) * .36 + i / 7) % 1, x = lerp(600, 1180, u), hop = Math.abs(Math.sin(u * Math.PI * 5)) * 22; if (t - u / .36 < s0 - .2) continue; ctx.save(); ctx.globalAlpha = P(u, 0, .1); pair('slipper', x, 1250 - hop, lerp(.6, .92, P(u, 0, .2))); ctx.restore(); }
  booth(830, t);
  ctx.fillStyle = 'rgba(8,10,30,.45)'; ctx.fillRect(0, 0, W, 470);
  popText('AT THE DOOR', 540, 340, 110, t, wt(14, 'at') - .25, K.paper, -.015);
  ctx.save(); ctx.globalAlpha = P(t, s0, s0 + .3); big('SHOES', 250, 470, 76, K.paper); big('→', 540, 468, 76, K.red); big('SLIPPERS', 800, 470, 76, K.must); ctx.restore();
  label('YOUR SHOES IN', 190, 1330, vis(t, T.door + .4, T.pile, .4), K.paper, 20); label('STORE SLIPPERS OUT', 880, 1330, vis(t, s0 + .3, T.pile, .4), K.must, 20);
}
function scenePile(t) {
  fillBG('#2a1c12', '#170f09');
  const mix = wt(15, 'mixed') - .2, th = wt(15, 'thousands') - .2;
  cubbies(t, { mix, hole: t > mix + .2 ? HOLE : -1, heroIn: 1 });
  const hx = 42 + 2 * 168, hy = 312 + 2 * 124;
  if (t <= mix + .2) pair('loafer', hx + 22, hy + 100, .52); else { const m = E.o3(P(t, mix + .2, mix + .7)); ctx.save(); ctx.globalAlpha = 1 - m; pair('loafer', hx + 22 + 500 * m, hy + 100 - 200 * m, .52, m * 3); ctx.restore(); ctx.save(); ctx.globalAlpha = P(t, mix + .6, mix + .8); pair('geta', hx + 22, hy + 100, .52); ctx.restore(); }
  PILE.forEach((s, i) => { const p = P(t, th + s.o * 1.5, th + s.o * 1.5 + .45); if (p <= 0) return; const b = E.i2(p); wear(s.kind, s.x, lerp(-200, s.y, b), s.s, s.rot * b, s.flip); });
  ctx.fillStyle = 'rgba(20,12,6,.6)'; ctx.fillRect(0, 0, W, 300);
  popText('THOUSANDS OF PAIRS', 540, 276, 76, t, th, K.paper, -.015, '#0b0704');
  if (t > mix + .45) plate('MIXED UP!', 620, 800, 92, K.red, K.paper, 1, -.07, E.oBack(P(t, mix + .45, mix + .75)));
  reticle(hx + 82, hy + 70, 96, t, 'PAIR #001', t > mix + .5 ? 'MISSING · WRONG PAIR' : 'No. 428', vis(t, T.pile + .3, T.date + .3, .3), t > mix + .5 ? K.red : K.must);
}

// ------------------------------------------------------------ S5 1 September 1923
function sceneDate(t) {
  fillBG('#141b33', '#0a0d1c');
  const q0 = wt(17, 'great') - .3, qk = t > q0 ? (1 - P(t, q0, q0 + 2.4)) * P(t, q0, q0 + .15) : 0;
  const p = E.oBack(P(t, T.date + .05, T.date + .5)), fall = E.i2(P(t, q0 + .5, q0 + 1.6));
  ctx.save(); ctx.translate(540 + qk * 40 * noise(t * 30), 1010 + (1 - p) * 300 + fall * 420); ctx.rotate(-.03 + qk * .12 * noise(t * 22 + 5) + fall * .35); ctx.scale(p, p);
  ctx.fillStyle = 'rgba(0,0,0,.4)'; rrect(-290, -388, 600, 800, 16); ctx.fill(); ctx.fillStyle = K.paper; rrect(-300, -400, 600, 800, 16); ctx.fill(); ctx.fillStyle = K.red; rrect(-300, -400, 600, 170, [16, 16, 0, 0]); ctx.fill();
  ctx.fillStyle = K.ink; for (const x of [-170, 170]) { ctx.beginPath(); ctx.arc(x, -400, 20, 0, TAU); ctx.fill(); }
  txt('1923', 0, -272, font(900, 120), K.paper, 'center', 8); txt('SEPTEMBER', 0, -150, font(900, 62), K.ink, 'center', 8);
  txt('1', 0, 240, font(900, 440), K.ink, 'center'); jp('九月一日 · 土曜日', 0, 340, 44, K.red, 'center', .05);
  ctx.restore();
  if (t > q0) {
    ctx.strokeStyle = 'rgba(243,232,207,.8)'; ctx.lineWidth = 7; ctx.lineJoin = 'round'; const c = E.o3(P(t, q0 + .05, q0 + .5)); ctx.beginPath(); ctx.moveTo(560, 200); const pts = [[520, 420], [610, 620], [500, 860], [590, 1080], [470, 1300], [560, 1560]]; pts.forEach(([x, y], i) => { if (i / pts.length < c) ctx.lineTo(x, y); }); ctx.stroke();
    ctx.fillStyle = `rgba(8,6,14,${.6 * P(t, q0, q0 + .3)})`; ctx.fillRect(0, 250, W, 330);
    popText('THE GREAT KANTŌ', 540, 356, 86, t, q0, K.paper, -.02, '#05040a'); popText('EARTHQUAKE', 540, 476, 132, t, wt(17, 'earthquake') - .2, K.must, -.02, '#05040a'); jp('関東大震災', 540, 552, 44, K.red, 'center', .06);
    ctx.strokeStyle = K.red; ctx.lineWidth = 6; ctx.beginPath(); const n = Math.floor(P(t, q0, q0 + 1.2) * 180); for (let i = 0; i <= n; i++) { const x = i * 6, e = Math.exp(-Math.pow((i - 80) / 34, 2)), y = 1290 + (noise(i * 1.7) * 6 + noise(i * .9 + 50) * 150 * e); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
  }
}
function sceneBurn(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, '#0d0808'); g.addColorStop(.55, '#5a1a10'); g.addColorStop(1, '#e0652a'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  const l0 = LS(19) - .3, z = E.io(P(t, l0, l0 + 1.1)), s = lerp(1.0, 2.3, z);
  ctx.save(); ctx.translate(540, lerp(1150, 1240, z)); ctx.scale(s, s); ctx.translate(-540, -1000);
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; const fg = ctx.createRadialGradient(540, 700, 50, 540, 700, 700); fg.addColorStop(0, `rgba(255,120,40,${.4 + .1 * noise(t * 6)})`); fg.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = fg; ctx.fillRect(-300, 0, 1700, 1100); ctx.restore();
  smoke(t, 150, 800, 470); ctx.fillStyle = '#120c0b'; ctx.fillRect(-500, 1000, 2100, 800); palace(t, 1, z);
  ctx.fillStyle = '#ffb060'; for (let i = 0; i < 26; i++) { const ph = (t * .35 + i * .137) % 1; ctx.globalAlpha = 1 - ph; ctx.fillRect(120 + (i * 173) % 860 + 30 * noise(t + i), 900 - ph * 700, 5, 5); } ctx.globalAlpha = 1;
  ctx.restore();
  ctx.fillStyle = 'rgba(10,6,6,.5)'; ctx.fillRect(0, 0, W, 440);
  const b = wt(18, 'burned') - .25; ctx.save(); ctx.globalAlpha = 1 - P(t, l0, l0 + .4); popText('THE FLAGSHIP', 540, 330, 84, t, T.burn + .2, K.paper, -.015, '#050303'); popText('BURNED', 540, 440, 136, t, b, '#ff8a4a', -.015, '#050303'); ctx.restore();
  const u = wt(19, 'lion') - .2; popText('THE TWO LIONS', 540, 330, 96, t, u, K.must, -.015, '#050303'); if (t > wt(19, 'almost') - .2) plate('ALMOST UNHARMED', 540, 440, 60, K.paper, K.ink, 1, -.02, E.oBack(P(t, wt(19, 'almost') - .2, wt(19, 'almost') + .15)));
}
function sceneRebuilt(t) {
  fillBG('#1f5a57', '#123a3a');
  for (let i = 0; i < 6; i++) { const h = (220 + (i * 137) % 260) * E.o3(P(t, T.rebuilt + i * .15, T.rebuilt + 1.6 + i * .15)), x = 20 + i * 180; ctx.fillStyle = 'rgba(8,30,30,.55)'; ctx.fillRect(x, 1250 - h, 150, h); ctx.strokeStyle = 'rgba(240,182,55,.4)'; ctx.lineWidth = 3; for (let y = 1250; y > 1250 - h - 40; y -= 46) { ctx.beginPath(); ctx.moveTo(x - 10, y); ctx.lineTo(x + 160, y); ctx.stroke(); } for (const xx of [x - 8, x + 158]) { ctx.beginPath(); ctx.moveTo(xx, 1250); ctx.lineTo(xx, 1250 - h - 40); ctx.stroke(); } }
  ctx.fillStyle = '#0f2e2e'; ctx.fillRect(0, 1250, W, 800);
  const g0 = wt(20, 'gone') - .25, k = P(t, g0, g0 + .25);
  ctx.save(); ctx.globalAlpha = 1 - .45 * k; booth(830, t, P(t, wt(20, 'shoe') - .2, wt(20, 'shoe') + .25)); ctx.restore();
  ctx.fillStyle = 'rgba(6,30,30,.5)'; ctx.fillRect(0, 0, W, 470);
  popText('TOKYO REBUILDS', 540, 350, 96, t, T.rebuilt + .25, K.paper, -.015, '#062020'); label('AFTER 1923', 540, 430, P(t, T.rebuilt + .5, T.rebuilt + .9), K.must, 30);
  stamp(t, g0, 540, 1010, 'GONE', K.red, -.12, 150);
}
function sceneGinza(t) {
  fillBG('#141a3d', '#2a1c3a');
  // storefront
  ctx.fillStyle = '#cdbb92'; ctx.fillRect(0, 520, W, 740); ctx.fillStyle = '#b9a67c'; ctx.fillRect(0, 500, W, 30); ctx.fillStyle = 'rgba(0,0,0,.1)'; for (let y = 560; y < 1250; y += 46) ctx.fillRect(0, y, W, 4);
  const dg = ctx.createLinearGradient(0, 700, 0, 1250); dg.addColorStop(0, '#fff1c0'); dg.addColorStop(1, '#ffc970'); ctx.fillStyle = dg; rrect(250, 690, 780, 560, [60, 60, 0, 0]); ctx.fill(); ctx.fillStyle = '#5b3a20'; ctx.fillRect(250, 800, 780, 12);
  for (let i = 0; i < 4; i++) mini(430 + i * 150 + 10 * Math.sin(t + i), 1180, 1.5, 'rgba(120,70,30,.35)');
  ctx.fillStyle = K.ink2; ctx.fillRect(40, 560, 150, 520); jp('松', 115, 690, 96, K.paper, 'center', .06); jp('坂', 115, 850, 96, K.paper, 'center', .06); jp('屋', 115, 1010, 96, K.paper, 'center', .06);
  ctx.fillStyle = '#4a4458'; ctx.fillRect(0, 1250, W, 800); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 1250, W, 12);
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; const lg = ctx.createLinearGradient(0, 1250, 0, 1700); lg.addColorStop(0, 'rgba(255,200,110,.3)'); lg.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = lg; ctx.beginPath(); ctx.moveTo(250, 1250); ctx.lineTo(1030, 1250); ctx.lineTo(1300, 1700); ctx.lineTo(60, 1700); ctx.fill(); ctx.restore();
  const w0 = T.ginza - .3; [[0, 1, .84], [.42, 0, .78], [.8, 5, .6]].forEach(([o, f, s], i) => { const x = lerp(-250, 1330, ((t - w0) * .2 + o * .55) % 1.25 / 1.25); walker(x, 1262 + i * 10, s, (t - w0) * 1.25 + o, FOLK[f]); });
  ctx.fillStyle = 'rgba(10,12,40,.5)'; ctx.fillRect(0, 0, W, 480);
  plate('MATSUZAKAYA · GINZA', 540, 290, 44, K.must, K.ink, P(t, wt(21, 'matsuzakaya') - .3, wt(21, 'matsuzakaya') - .1), -.02, E.oBack(P(t, wt(21, 'matsuzakaya') - .3, wt(21, 'matsuzakaya'))));
  popText('WALK STRAIGHT IN', 540, 404, 98, t, wt(21, 'walk') - .25, K.paper, -.015); label('AFTER 1923 · SHOES ON', 540, 462, P(t, wt(21, 'walk') + .2, wt(21, 'walk') + .6), K.must, 28);
}

// ------------------------------------------------------------ S6 open to everyone
function sceneEvery(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, '#2a7a74'); g.addColorStop(1, '#f1e2bd'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = 'rgba(20,60,60,.35)'; for (let i = 0; i < 7; i++) ctx.fillRect(-30 + i * 130, 900 - (i * 97) % 240, 120, 400);
  // the store entrance on the right
  ctx.fillStyle = '#e6dfcf'; ctx.fillRect(640, 520, 500, 740); ctx.fillStyle = '#cfc5b0'; ctx.fillRect(620, 500, 520, 30); const dg = ctx.createLinearGradient(0, 700, 0, 1250); dg.addColorStop(0, '#fff1c0'); dg.addColorStop(1, '#ffc970'); ctx.fillStyle = dg; rrect(760, 720, 420, 540, [200, 0, 0, 0]); ctx.fill();
  ctx.fillStyle = K.red; ctx.fillRect(680, 580, 90, 300); jp('百', 725, 660, 60, K.paper); jp('貨', 725, 750, 60, K.paper); jp('店', 725, 840, 60, K.paper);
  ctx.fillStyle = '#c9b88e'; ctx.fillRect(0, 1250, W, 800); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.fillRect(0, 1250, W, 12);
  for (let i = 0; i < 9; i++) mini(((i * 150 + (t - T.every) * (40 + i * 6)) % 900) - 60, 1236 - (i % 2) * 10, 1.35, 'rgba(20,60,60,.4)');
  // barrier lifts
  const b0 = wt(22, 'no') - .25, up = E.oBack(P(t, b0, b0 + .5));
  ctx.fillStyle = '#3a3f4a'; ctx.fillRect(560, 1090, 22, 160); ctx.save(); ctx.translate(571, 1100); ctx.rotate(Math.PI + up * 1.35); for (let i = 0; i < 8; i++) { ctx.fillStyle = i % 2 ? K.paper : K.red; ctx.fillRect(i * 60, -13, 60, 26); } ctx.restore();
  const flow = .16 + .1 * P(t, LS(23), LS(23) + 1), stop = 1 - up;
  const N = 8; for (let i = 0; i < N; i++) { const o = i / N, raw = ((t - T.every) * flow + o) % 1, x = lerp(-200, 1250, raw), queue = Math.min(x, 470 - ((i * 5) % N) * 105), xx = lerp(x, queue, stop * (x > queue ? 1 : 0)), s = [.78, .6, .86, .7, .5, .8, .66, .74][i]; const moving = stop < .2 || x <= queue; ctx.save(); ctx.globalAlpha = 1 - P(xx, 930, 1080); walker(xx, 1266 + (i % 3) * 14, s, (t - T.every) * 1.3 + o * 3, { ...FOLK[i % FOLK.length], stand: moving ? 0 : 1 }); ctx.restore(); }
  ctx.fillStyle = 'rgba(8,40,40,.5)'; ctx.fillRect(0, 0, W, 480);
  popText('NO SHOE CHECK', 540, 330, 92, t, T.every + .2, K.paper, -.015, '#062020'); if (t > b0) plate('NO BARRIER', 540, 438, 64, K.red, K.paper, 1, -.03, E.oBack(P(t, b0, b0 + .3)));
  const e = wt(23, 'everyone') - .3; if (t > e) { ctx.fillStyle = `rgba(8,40,40,${.55 * P(t, e, e + .3)})`; ctx.fillRect(0, 540, W, 250); popText('OPEN TO', 540, 640, 90, t, e, K.paper, -.02, '#062020'); popText('EVERYONE', 540, 762, 150, t, e + .15, K.must, -.02, '#062020'); }
}

// ------------------------------------------------------------ S7 tease: the store on top of the station
function trainCar(x, y, s, t) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = '#6b1f2a'; rrect(0, -150, 560, 130, 14); ctx.fill(); ctx.fillStyle = '#4a141c'; ctx.fillRect(0, -42, 560, 22); ctx.fillStyle = '#ffe2a0'; for (let i = 0; i < 7; i++) { rrect(26 + i * 74, -128, 54, 56, 6); ctx.fill(); } ctx.fillStyle = '#c9c0a8'; rrect(0, -160, 560, 16, 8); ctx.fill(); ctx.fillStyle = '#16171c'; for (const wx of [80, 150, 410, 480]) { ctx.beginPath(); ctx.arc(wx, -8, 22, 0, TAU); ctx.fill(); } ctx.strokeStyle = '#16171c'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(240, -160); ctx.lineTo(280, -210); ctx.lineTo(320, -160); ctx.stroke(); ctx.restore(); }
function sceneTease(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1250); g.addColorStop(0, '#0d1230'); g.addColorStop(1, '#3a2b5c'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  const r = rng(21); for (let i = 0; i < 50; i++) { ctx.fillStyle = `rgba(255,250,220,${.2 + .6 * r()})`; ctx.fillRect(r() * W, 230 + r() * 400, 3, 3); }
  const z = E.io2(P(t, T.tease, T.end)); ctx.save(); ctx.translate(540, 1250); ctx.scale(lerp(1, 1.06, z), lerp(1, 1.06, z)); ctx.translate(-540, -1250);
  const rise = E.o3(P(t, T.tease, T.tease + .9)); ctx.save(); ctx.translate(0, (1 - rise) * 500);
  ctx.fillStyle = '#b9a98a'; ctx.fillRect(170, 520, 740, 560); ctx.fillStyle = '#a39373'; ctx.fillRect(154, 504, 772, 26); ctx.fillRect(170, 930, 740, 14);
  for (let rr = 0; rr < 5; rr++) for (let c = 0; c < 9; c++) { ctx.fillStyle = ((rr * 3 + c * 5) % 6) ? `rgba(255,220,140,${.85 + .15 * noise(t * 2 + rr * 5 + c)})` : '#4a4f66'; rrect(196 + c * 78, 548 + rr * 76, 52, 54, 4); ctx.fill(); }
  ctx.fillStyle = K.red; ctx.fillRect(380, 440, 320, 70); txt('DEPARTMENT STORE', 540, 486, font(900, 27), K.paper, 'center', 2);
  ctx.fillStyle = '#16122a'; for (let c = 0; c < 4; c++) { rrect(196 + c * 180, 960, 150, 290, [75, 75, 0, 0]); ctx.fill(); }
  ctx.fillStyle = '#a39373'; ctx.fillRect(170, 1080, 740, 0);
  ctx.restore();
  ctx.fillStyle = '#2a2440'; ctx.fillRect(-100, 1230, 1300, 30); ctx.fillStyle = '#16122a'; ctx.fillRect(-100, 1260, 1300, 800);
  const a0 = wt(25, 'station') - .9, d = E.o3(P(t, a0, a0 + 2.2)); for (let i = 0; i < 3; i++) trainCar(lerp(-1900, -560, d) + i * 580, 1232, 1, t);
  ctx.save(); ctx.translate(0, (1 - rise) * 500); ctx.fillStyle = '#b9a98a'; for (let c = 0; c < 5; c++) ctx.fillRect(170 + c * 180 - (c === 4 ? 26 : 0), 944, 26, 306); ctx.fillStyle = K.ink2; ctx.fillRect(410, 1010, 260, 60); jp('駅', 450, 1056, 44, K.must, 'center', .06); txt('STATION', 570, 1052, font(900, 30), K.paper, 'center', 2); ctx.restore();
  ctx.restore();
  ctx.fillStyle = 'rgba(8,10,30,.5)'; ctx.fillRect(0, 0, W, 420);
  const y = wt(24, '1929') - .25; if (t > y) for (let i = 0; i < 4; i++) { const q = E.oBack(P(t, y + i * .07, y + .35 + i * .07)); ctx.save(); ctx.translate(250 + i * 150, 384 + 80 * (1 - q)); ctx.globalAlpha = clamp(q * 1.5); big('1929'[i], 0, 0, 190, K.must, 'center', '#05071a'); ctx.restore(); }
  label('A RAILWAY COMPANY’S TERMINAL · UMEDA, OSAKA', 540, 1340, vis(t, wt(24, 'railway') - .2, T.end, .4), K.paper, 20);
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const p = E.o3(P(t, T.end, T.end + .6));
  ctx.save(); ctx.translate(540, lerp(-300, 640, p)); ctx.rotate(lerp(.25, -.04, p)); ctx.fillStyle = 'rgba(0,0,0,.45)'; rrect(-388, -238, 800, 500, 8); ctx.fill(); ctx.fillStyle = '#efe3c4'; rrect(-400, -250, 800, 500, 8); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.rect(-372, -222, 744, 390); ctx.clip(); ctx.fillStyle = '#d9c59a'; ctx.fillRect(-372, -222, 744, 390); ctx.fillStyle = '#8d6a46'; ctx.fillRect(-250, -170, 500, 250); ctx.fillStyle = '#efe3c4'; for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) ctx.fillRect(-226 + c * 58, -146 + r * 62, 36, 40); ctx.fillStyle = '#6b4a2f'; for (let c = 0; c < 4; c++) { rrect(-226 + c * 120, 40, 96, 130, [48, 48, 0, 0]); ctx.fill(); } ctx.fillStyle = '#c9b88e'; ctx.fillRect(-372, 130, 744, 40); trainCar(lerp(-900, -330, E.o3(P(t, T.end + .3, T.end + 1.6))), 132, .62, t); ctx.fillStyle = 'rgba(120,80,30,.16)'; ctx.fillRect(-372, -222, 744, 390); ctx.restore();
  txt('EPISODE 3', -372, 218, font(800, 26), '#5b3a20', 'left', 4); txt('ILLUSTRATION', 372, 216, font(500, 16, F.m), 'rgba(91,58,32,.8)', 'right', 3); ctx.restore();
  const n = T.end + .45; plate('NEXT', 190, 1010, 56, K.red, K.paper, P(t, n, n + .1), -.04, E.oBack(P(t, n, n + .3)));
  ['The store', 'inside', 'the station'].forEach((s, i) => { const a = E.o3(P(t, n + .2 + i * .14, n + .65 + i * .14)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 1140 + i * 104 + 30 * (1 - a), 96, i === 2 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
}

const tMix = wt(15, 'mixed') - .2, tQ = wt(17, 'great') - .3;
window.FILM = {
  title: 'HOW THE SLIPPERS CAME OFF', tag: 'EP 2 · JAPAN’S DEPARTMENT STORES',
  hotLines: [17, 18],
  init() { const r = rng(77); let n = 101;
    for (let rr = 0; rr < 5; rr++) for (let c = 0; c < 6; c++) CUB.push({ r: rr, c, kind: KINDS[Math.floor(r() * KINDS.length)], o: r(), n: n += 1 + Math.floor(r() * 40) });
    CUB[HOLE].n = 428; [[7, 10], [10, 7], [16, 21], [21, 16], [3, 23], [23, 3]].forEach(([a, b], i) => { CUB[a].sw = Math.floor(i / 2); CUB[a].to = b; });
    for (let i = 0; i < 46; i++) { const u = r(), x = 80 + u * 920, hmax = 250 * Math.sin(Math.PI * clamp((x - 40) / 1000)); PILE.push({ x: x - 90, y: 1236 - r() * hmax, kind: KINDS[Math.floor(r() * KINDS.length)], s: .62 + r() * .22, rot: (r() - .5) * 1.5, flip: r() > .5 ? 1 : -1, o: r() }); }
    PILE.sort((a, b) => a.y - b.y); PILE.forEach(s => { s.o = clamp((1236 - s.y) / 250 * -.6 + .7 + (s.o - .5) * .3); });
  },
  scenes: [{ start: 0, draw: sceneHook }, { start: T.check, draw: sceneCheck }, { start: T.roots, draw: sceneStreet }, { start: T.tatami, draw: sceneTatami }, { start: T.glass, draw: sceneGlass }, { start: T.news, draw: sceneNews }, { start: T.palace, draw: scenePalace }, { start: T.esc, draw: sceneEsc }, { start: T.door, draw: sceneDoor }, { start: T.pile, draw: scenePile }, { start: T.date, draw: sceneDate }, { start: T.burn, draw: sceneBurn }, { start: T.rebuilt, draw: sceneRebuilt }, { start: T.ginza, draw: sceneGinza }, { start: T.every, draw: sceneEvery }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.check, .35], [T.roots, .4], [T.tatami, .4], [T.glass, .4], [T.news, .3], [T.palace, .4], [T.esc, .4], [T.door, .35], [T.pile, .35], [T.date, .4], [T.burn, .5], [T.rebuilt, .5], [T.ginza, .4], [T.every, .4], [T.tease, .5], [T.end, .4]],
  chapters: [[0, '01', 'THE PALACE'], [T.roots, '02', 'ROOTS'], [T.glass, '03', 'GLASS CASES'], [T.palace, '04', 'SLIPPERS'], [T.date, '05', '1923'], [T.every, '06', 'FOR EVERYONE'], [T.tease, '07', 'NEXT']],
  hits: [[.8, 8, .3], [wt(4, '1673') - .2, 10, .35], [wt(11, 'department') - .3, 10, .35], [wt(12, 'finest') + .2, 8, .3], [tMix + .45, 10, .3], [tQ, 48, 2.3], [wt(20, 'gone') - .25, 14, .4], [wt(23, 'everyone') - .15, 10, .35]],
  flashes: [[T.roots, .3], [T.glass, .3], [T.palace, .3], [tQ, .35], [T.every, .3], [T.end, .3]],
  events: {
    scene: [T.check, T.roots, T.tatami, T.glass, T.news, T.palace, T.esc, T.door, T.pile, T.date, T.burn, T.rebuilt, T.ginza, T.every, T.tease, T.end],
    pop: [.3, wt(0, 'elevators') - .15, wt(0, 'heating') - .35, wt(1, 'escalator') - .2, wt(2, 'hand') - .2, wt(4, 'echigoya') - .25, wt(5, 'barefoot') - .2, wt(5, 'tatami') - .2, wt(7, 'mitsukoshi') - .2, wt(8, 'display') - .5, wt(9, 'ended') - .3, wt(13, 'first') - .25, wt(14, 'swapped') - .2, wt(19, 'lion') - .2, wt(21, 'matsuzakaya') - .3, wt(22, 'no') - .25, T.end + .45],
    stamp: [.8, wt(2, 'hand') + 1.5, wt(3, 'kimono') - .2, wt(4, '1673') - .2, wt(10, '1905') - .1, wt(11, 'department') - .3, wt(12, 'finest') - .3, wt(12, 'finest') + .2, wt(13, 'escalator') - .25, tMix + .45, T.date + .1, wt(18, 'burned') - .25, wt(19, 'almost') - .2, wt(20, 'gone') - .25, wt(21, 'walk') - .25, wt(23, 'everyone') - .15, wt(24, '1929') - .1],
    cloth: [wt(6, 'cloth') - .5], paper: [T.news], pile: [wt(15, 'thousands') - .2], quake: [tQ], fire: [T.burn, T.rebuilt], steps: [T.ginza, T.tease], train: [wt(25, 'station') - .9], esc: [T.esc, T.door], end: [T.end],
  },
};
