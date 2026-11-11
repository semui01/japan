// SHOES OFF — why Shōwa Japan slipped its shoes off on trains and in cars. Portrait-first (9:16).
const K = { ink: '#141b33', ink2: '#232d55', paper: '#f3e8cf', red: '#dc4a33', must: '#f0b637', teal: '#2a7a74', wood: '#8b5a33', woodD: '#5b3a20', seat: '#33599a', seatD: '#223f72', shoe: '#7a4120' };
C.cyan = '#f3c552'; C.cyan2 = '#f3e8cf';
const JP = '"IPAPGothic","IPAGothic",sans-serif';
const T = { hook: 0, why: LB(2), cards: wt(3, 'summers') - .3, train: LB(5), night: LB(7), cmp: LB(8), car: LB(11), dokin: LB(14), rest: LB(16), twist: LB(17), store: LB(18), pile: LB(20), end: LB(22) };

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

// ------------------------------------------------------------ the train box seat (persistent world)
const FLOOR = 1260;
function seatShape() {
  ctx.fillStyle = K.woodD; rrect(-84, 300, 168, 960, 16); ctx.fill();
  ctx.fillStyle = K.seatD; rrect(-70, 330, 140, 600, 22); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.07)'; for (let y = 380; y < 900; y += 90) ctx.fillRect(-70, y, 140, 3);
  ctx.fillStyle = '#17110c'; ctx.fillRect(74, 1050, 270, 210); ctx.fillStyle = '#2b2018'; ctx.fillRect(74, 1050, 270, 16);
  ctx.fillStyle = '#4a74b8'; ctx.beginPath(); ctx.moveTo(60, 890); ctx.lineTo(352, 890); ctx.lineTo(372, 942); ctx.lineTo(60, 942); ctx.closePath(); ctx.fill();
  ctx.fillStyle = K.seat; rrect(60, 940, 314, 112, 14); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(60, 1030, 314, 22);
  ctx.fillStyle = '#c9c0a8'; rrect(-76, 318, 152, 70, 10); ctx.fill();   // antimacassar
}
function newspaper(a = 1) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a;
  ctx.fillStyle = '#e9e2cd'; ctx.beginPath(); ctx.moveTo(716, 896); ctx.lineTo(1010, 896); ctx.lineTo(1014, 940); ctx.lineTo(706, 940); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#f4eeda'; ctx.beginPath(); ctx.moveTo(706, 940); ctx.lineTo(1000, 940); ctx.lineTo(994, 1024); ctx.lineTo(712, 1030); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#2a2a2a'; ctx.fillRect(722, 950, 262, 5); jp('毎朝新聞', 852, 986, 28, '#222', 'center', .06);
  ctx.fillStyle = 'rgba(40,40,40,.55)'; for (let i = 0; i < 9; i++) ctx.fillRect(726 + i * 29, 996, 3, 24 - (i % 3) * 6);
  ctx.fillStyle = 'rgba(40,40,40,.35)'; for (let i = 0; i < 12; i++) ctx.fillRect(730 + i * 23, 904 + (i % 2) * 14, 16, 4);
  ctx.restore();
}
function trainWorld(t, cam, o = {}) {
  const night = o.night || 0;
  ctx.save(); ctx.translate(cam.sx === undefined ? 540 : cam.sx, cam.sy === undefined ? 880 : cam.sy); ctx.scale(cam.s, cam.s); ctx.translate(-cam.x, -cam.y);
  // wall
  const wg = ctx.createLinearGradient(0, 100, 0, FLOOR); wg.addColorStop(0, '#9a6a3d'); wg.addColorStop(1, '#6f4526'); ctx.fillStyle = wg; ctx.fillRect(-700, -400, 2500, FLOOR + 400);
  ctx.fillStyle = 'rgba(0,0,0,.1)'; for (let x = -700; x < 1800; x += 86) ctx.fillRect(x, -400, 3, FLOOR + 400);
  ctx.fillStyle = 'rgba(0,0,0,.16)'; ctx.fillRect(-700, 830, 2500, FLOOR - 830);
  // window
  ctx.save(); rrect(250, 330, 580, 450, 26); ctx.clip();
  const sk = ctx.createLinearGradient(0, 330, 0, 780); sk.addColorStop(0, '#9fd0dc'); sk.addColorStop(1, '#f6e6bd'); ctx.fillStyle = sk; ctx.fillRect(250, 330, 580, 450);
  for (const [sp, col, base, amp, f] of [[36, '#7fb3a6', 600, 90, .004], [110, '#4f8d77', 680, 60, .008]]) { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(250, 780); for (let x = 250; x <= 830; x += 10) ctx.lineTo(x, base - amp * (.5 + .5 * fbm((x + t * sp) * f + sp))); ctx.lineTo(830, 780); ctx.fill(); }
  ctx.fillStyle = '#c9c46a'; ctx.fillRect(250, 735, 580, 45);
  if (night > 0) { ctx.fillStyle = `rgba(10,14,40,${.94 * night})`; ctx.fillRect(250, 330, 580, 450); ctx.globalAlpha = night; ctx.fillStyle = '#f6edc4'; ctx.beginPath(); ctx.arc(700, 430, 34, 0, TAU); ctx.fill(); for (let i = 0; i < 9; i++) { const x = 830 - ((t * (260 + i * 60) + i * 173) % 700); ctx.fillStyle = i % 3 ? '#ffd27a' : '#ff8a5a'; ctx.fillRect(x, 640 + (i * 37) % 110, 30 + i * 6, 5); } ctx.globalAlpha = 1; }
  for (let i = 0; i < 2; i++) { const x = 900 - ((t * 780 + i * 520) % 1040); ctx.fillStyle = night > .5 ? '#05060f' : '#3b2a1c'; ctx.fillRect(x, 330, 12, 450); ctx.fillRect(x - 40, 400, 92, 8); }
  ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.beginPath(); ctx.moveTo(330, 330); ctx.lineTo(420, 330); ctx.lineTo(300, 780); ctx.lineTo(250, 780); ctx.lineTo(250, 640); ctx.fill();
  ctx.restore();
  ctx.strokeStyle = K.woodD; ctx.lineWidth = 24; rrect(250, 330, 580, 450, 26); ctx.stroke(); ctx.fillStyle = '#4a2f1a'; rrect(222, 780, 636, 30, 8); ctx.fill(); ctx.fillStyle = K.woodD; ctx.fillRect(534, 330, 12, 450);
  // floor
  const fg = ctx.createLinearGradient(0, FLOOR, 0, FLOOR + 500); fg.addColorStop(0, '#4a3220'); fg.addColorStop(1, '#22160d'); ctx.fillStyle = fg; ctx.fillRect(-700, FLOOR, 2500, 1200);
  ctx.fillStyle = 'rgba(0,0,0,.25)'; for (let i = 0; i < 6; i++) ctx.fillRect(-700, FLOOR + 30 + i * i * 14, 2500, 3);
  seatShape(); ctx.save(); ctx.translate(1080, 0); ctx.scale(-1, 1); seatShape(); ctx.restore();
  newspaper(o.paper === undefined ? 1 : o.paper);
  if (o.draw) o.draw();
  ctx.restore();
}
const DAD = { pc: '#3a3f52', sc: '#d9d2c2' };
// the father's two legs: u1/u2 = how far each foot has travelled from shoe to seat
function dadLegs(t, u1, u2, shoesOn) {
  const w = (u, ph) => u >= 1 ? Math.sin(t * 5 + ph) * .07 : 0;
  const A = liftPath([500, 1206], [842, 846], u2), B = liftPath([430, 1206], [806, 870], u1);
  if (!shoesOn) { shadow(520, FLOOR + 4, 150, 12, .35); wear('loafer', 449, FLOOR, 1.06); }
  leg(0, 868, A[0], A[1], -1.22 * E.io2(u2) + w(u2, 1), 420, 84, '#2c3040', '#c4bdae', shoesOn || (u2 <= 0 ? 'loafer' : 0));
  if (!shoesOn) wear('loafer', 379, FLOOR, 1.06);
  leg(0, 884, B[0], B[1], -1.18 * E.io2(u1) + w(u1, 0), 420, 86, DAD.pc, DAD.sc, shoesOn || (u1 <= 0 ? 'loafer' : 0));
}

// ------------------------------------------------------------ S0 hook
function sceneHook(t) {
  const t1 = wt(0, 'started') - .1, t2 = wt(1, 'shoes') - .05;
  const u1 = E.io(P(t, t1, t1 + .95)), u2 = E.io(P(t, t2, t2 + .8));
  const z = E.io2(P(t, 0, T.why));
  trainWorld(t, { x: lerp(585, 600, z), y: lerp(1050, 1010, z), s: lerp(1.34, 1.2, z), sy: 930 }, { draw() { dadLegs(t, u1, u2); } });
  ctx.fillStyle = 'rgba(10,12,30,.38)'; ctx.fillRect(0, 0, W, 520);
  popText('SHOES OFF…', 540, 345, 132, t, .45, K.paper, -.03);
  if (t > 1.5) plate('ON THE TRAIN?', 540, 455, 76, K.red, K.paper, 1, .025, E.oBack(P(t, 1.5, 1.85)));
  const cs = 1.2, sxp = 540 + (500 - 600) * cs, syp = 930 + (FLOOR - 40 - 1010) * cs;
  reticle(sxp, syp, 120, t, 'PAIR #001', 'LEFT ON THE FLOOR', vis(t, t2 + .5, T.why + .4, .4), K.must);
}

// ------------------------------------------------------------ S1 why: genkan, then Hot / Humid / Muddy
function sceneGenkan(t) {
  fillBG('#1d4a4c', '#12302f');
  // shoji wall + raised floor
  ctx.fillStyle = '#e9dcbb'; ctx.fillRect(600, 420, 480, 640); ctx.strokeStyle = '#6b4a2a'; ctx.lineWidth = 8;
  for (let x = 600; x <= 1080; x += 120) { ctx.beginPath(); ctx.moveTo(x, 420); ctx.lineTo(x, 1060); ctx.stroke(); } for (let y = 420; y <= 1060; y += 128) { ctx.beginPath(); ctx.moveTo(600, y); ctx.lineTo(1080, y); ctx.stroke(); }
  ctx.fillStyle = 'rgba(18,48,47,.35)'; ctx.fillRect(600, 420, 480, 640);
  ctx.fillStyle = '#b9b27a'; ctx.fillRect(560, 1060, 520, 40); ctx.fillStyle = K.wood; ctx.fillRect(560, 1090, 520, 46); ctx.fillStyle = K.woodD; ctx.fillRect(560, 1136, 520, 164);
  ctx.fillStyle = '#6f7474'; ctx.fillRect(0, 1300, W, 700); ctx.fillStyle = 'rgba(0,0,0,.14)'; for (let i = 0; i < 7; i++) ctx.fillRect(i * 170 - 40, 1300, 4, 700);
  ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, 1300, W, 14);
  // someone already inside, in socks
  leg(852, 520, 850, 1014, 0, 248, 84, '#3a3f52', '#d9d2c2'); leg(958, 520, 960, 1016, 0, 249, 84, '#2c3040', '#c4bdae');
  const tH = LS(3) - .1;
  // row of footwear that stays on the stone floor
  const row = [['geta', 20], ['zori', 150], ['sneaker', 285], ['boot', 420]];
  row.forEach(([k, x, back], i) => { const p = E.oBack(P(t, tH + i * .16, tH + .3 + i * .16)); if (p <= 0) return; const y = 1300 - 0; if (i < 0) return; ctx.save(); ctx.globalAlpha = clamp(p * 2); shadow(x + 66, y + 3, 70, 7); pair(k, x, y - 30 * (1 - p), .58); ctx.restore(); });
  // the hero pair tries to come inside
  const tA = wt(2, 'at') - .15, hop = P(t, LS(2) - .1, LS(2) + .9), jump = P(t, tA, tA + .45), back = P(t, tA + .75, tA + 1.2);
  let x = lerp(-260, 180, E.o3(hop)), y = 1300 - Math.abs(Math.sin(hop * Math.PI * 3)) * 46 * (1 - hop), r = 0;
  if (t > tA) { x = lerp(180, 600, E.io2(jump)) - 1100 * E.io2(back); y = 1300 - 222 * E.io2(jump) - Math.sin(jump * Math.PI) * 90 + 222 * E.i2(back) - Math.sin(back * Math.PI) * 70; r = -.25 * Math.sin(jump * Math.PI) + .5 * Math.sin(back * Math.PI); }
  shadow(x + 120, (jump >= 1 && back <= 0) ? 1082 : 1304, 130, 10); pair('loafer', x, y, 1.12, r);
  callout(x + 150, y - 100, -40, -190, 'WESTERN SHOES', 'LEATHER · LACED OR SLIP-ON', vis(t, LS(2) + .5, tA + .1, .7, .2), K.paper, 0);
  if (t > tA + .5 && t < T.cards + .5) { const a = P(t, tA + .5, tA + .6); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = K.red; ctx.lineWidth = 22; ctx.lineCap = 'round'; const k = E.oBack(P(t, tA + .5, tA + .8)) * 70; ctx.beginPath(); ctx.moveTo(760 - k, 900 - k); ctx.lineTo(760 + k, 900 + k); ctx.moveTo(760 + k, 900 - k); ctx.lineTo(760 - k, 900 + k); ctx.stroke(); ctx.restore(); }
  // titles
  ctx.fillStyle = 'rgba(8,20,22,.5)'; ctx.fillRect(0, 0, W, 400);
  jp('玄関', 90, 330, 58, K.must, 'left'); txt('GENKAN', 222, 300, font(900, 44), K.paper, 'left', 6); label('THE ENTRY STEP · SHOES STOP HERE', 224, 334, 1, 'rgba(243,232,207,.75)', 17, 'left');
  if (t > tH) plate('HOUSES: SHOES OFF', 420, 640, 70, K.paper, K.ink, 1, -.03, E.oBack(P(t, tH, tH + .35)));
  // step marker
  ctx.save(); ctx.globalAlpha = vis(t, T.why + .6, T.cards + .6, .5); ctx.strokeStyle = K.must; ctx.lineWidth = 4; ctx.setLineDash([14, 10]); ctx.lineDashOffset = -t * 30; ctx.beginPath(); ctx.moveTo(548, 1010); ctx.lineTo(548, 1296); ctx.stroke(); ctx.restore();
}
function card(t, t0, y, col, word, art) {
  const p = E.o3(P(t, t0, t0 + .5)); if (p <= 0) return; const x = lerp(1120, 60, p);
  ctx.save(); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(x + 10, y + 12, 960, 285, 30); ctx.fill();
  rrect(x, y, 960, 285, 30); ctx.fillStyle = col; ctx.fill(); ctx.clip(); ctx.translate(x, y); art(Math.max(0, t - t0));
  ctx.setTransform(1, 0, 0, 1, SH.x, SH.y); ctx.translate(x, y);
  const k = E.oBack(P(t, t0 + .2, t0 + .55)); ctx.translate(70, 185); ctx.scale(k, k); big(word, 0, 0, 124, K.paper, 'left'); ctx.restore();
}
function sceneCards(t) {
  fillBG('#18203f', '#0f152b');
  const a = wt(3, 'summers') - .25, b = wt(3, 'humid') - .2, c = wt(3, 'streets') - .15;
  card(t, a, 290, '#d6492f', 'Hot.', u => {
    const g = ctx.createRadialGradient(760, 140, 20, 760, 140, 330); g.addColorStop(0, 'rgba(255,214,90,.75)'); g.addColorStop(1, 'rgba(255,214,90,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 960, 285);
    ctx.save(); ctx.translate(760, 140); ctx.rotate(u * .5); ctx.fillStyle = K.must; for (let i = 0; i < 14; i++) { ctx.rotate(TAU / 14); ctx.beginPath(); ctx.moveTo(96, -13); ctx.lineTo(150 + 14 * Math.sin(u * 4 + i), 0); ctx.lineTo(96, 13); ctx.fill(); } ctx.restore();
    ctx.fillStyle = '#ffd56a'; ctx.beginPath(); ctx.arc(760, 140, 82 * E.oBack(clamp(u * 2.5)), 0, TAU); ctx.fill();
  });
  card(t, b, 605, K.teal, 'Humid.', u => {
    ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.lineWidth = 6; ctx.lineCap = 'round'; for (let j = 0; j < 4; j++) { ctx.beginPath(); for (let x = 480; x <= 980; x += 12) { const y = 60 + j * 62 + Math.sin(x * .03 + u * 3 + j) * 12; x === 480 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
    wear('loafer', 610, 250, 1.05);
    ctx.fillStyle = '#bfeee6'; for (let i = 0; i < 9; i++) { const ph = (u * .9 + i * .23) % 1, x = 560 + (i * 97) % 330, y = 215 - ph * 190; ctx.globalAlpha = 1 - ph; ctx.beginPath(); ctx.moveTo(x, y - 18); ctx.quadraticCurveTo(x + 13, y + 4, x, y + 9); ctx.quadraticCurveTo(x - 13, y + 4, x, y - 18); ctx.fill(); } ctx.globalAlpha = 1;
  });
  card(t, c, 920, '#7a5230', 'Muddy.', u => {
    ctx.fillStyle = '#4e3119'; ctx.beginPath(); ctx.moveTo(0, 285); ctx.lineTo(0, 232); for (let x = 0; x <= 960; x += 24) ctx.lineTo(x, 226 + 8 * noise(x * .02)); ctx.lineTo(960, 285); ctx.fill();
    ctx.fillStyle = '#33200f'; ctx.beginPath(); ctx.ellipse(700, 252, 180, 16, 0, 0, TAU); ctx.fill();
    const d = E.oBack(P(u, .25, .6)); pair('geta', 520, 238 - 160 * (1 - d), .8); pair('boot', 760, 246 - 200 * (1 - E.oBack(P(u, .4, .75))), .8);
    ctx.fillStyle = '#4e3119'; for (let i = 0; i < 10; i++) { const p2 = P(u, .58, 1.2), ang = -Math.PI * (.15 + .07 * i), v = 150 + (i * 53) % 110, x = 700 + Math.cos(ang) * v * p2, y = 240 + Math.sin(ang) * v * p2 + 260 * p2 * p2; if (p2 > 0 && p2 < 1) { ctx.beginPath(); ctx.arc(x, y, 8 - i % 4, 0, TAU); ctx.fill(); } }
  });
  // "so people slipped them off whenever they could"
  const s = wt(4, 'slipped') - .15;
  if (t > s) { const p = P(t, s, s + 1.3); for (let i = 0; i < 2; i++) { const q = clamp(p * 1.15 - i * .15), x = lerp(-240, 760 - i * 250, E.o3(q)), y = 1375 - Math.abs(Math.sin(q * Math.PI * 2.5)) * 110 * (1 - q); shadow(x + 100, 1380, 100, 8); wear('loafer', x + 100, y - 40, 1, q * TAU * 2 + (q >= 1 ? 0 : .2), 1); } }
  ctx.save(); ctx.globalAlpha = P(t, a - .1, a + .3); label('WHY LEATHER SHOES CAME OFF', 540, 258, 1, K.must, 20); ctx.restore();
}

// ------------------------------------------------------------ S2 trains
function kidLegs(t) { const s = Math.sin(t * 4.2) * 26; leg(40, 968, 372, 1010 + s, -.5 + s * .006, 172, 62, '#7b2f2a', '#f1ead8', 0, .68, K.red); leg(30, 986, 352, 1040 - s, -.45 - s * .006, 172, 64, '#93392f', '#f6f0e0', 0, .7, K.red); }
function sceneTrain(t) {
  const z = E.io2(P(t, T.train, T.night));
  trainWorld(t, { x: lerp(640, 650, z), y: lerp(985, 965, z), s: lerp(1.0, 1.06, z), sy: 900 }, { draw() {
    shadow(640, FLOOR + 4, 80, 8); pair('zori', 580, FLOOR, .78); shadow(250, FLOOR + 4, 70, 8); pair('sneaker', 196, FLOOR, .56);
    dadLegs(t, 1, 1); kidLegs(t);
  } });
  ctx.fillStyle = 'rgba(10,12,30,.42)'; ctx.fillRect(0, 0, W, 470);
  popText('THE BOX SEAT', 540, 330, 104, t, wt(5, 'box') - .2, K.paper, -.02); jp('ボックス席', 540, 410, 44, K.must);
  callout(815, 905, 60, -250, 'SOCKS UP', 'ON THE FACING SEAT', vis(t, wt(5, 'socks') - .3, T.night, .7), K.paper, 0);
  const n = wt(6, 'newspaper') - .2; if (t > n) { const pu = vis(t, n, n + 1.6, .2, .8); ctx.save(); ctx.globalAlpha = pu; ctx.strokeStyle = K.must; ctx.lineWidth = 6; ctx.setLineDash([16, 10]); ctx.lineDashOffset = -t * 40; rrect(585, 795, 360, 160, 14); ctx.stroke(); ctx.restore(); }
  callout(700, 950, -210, 240, 'NEWSPAPER', 'KEEPS THE SEAT CLEAN', vis(t, n, T.night, .7), K.must, 0);
}
function sceneNight(t) {
  fillBG('#0d1230', '#1b1f47');
  const z = E.o3(P(t, T.night, T.night + 1.4));
  // big night window
  ctx.save(); ctx.translate(540, 760); ctx.scale(lerp(1.12, 1, z), lerp(1.12, 1, z)); ctx.translate(-540, -760);
  ctx.fillStyle = '#6f4526'; ctx.fillRect(-100, 430, 1300, 1600); ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.fillRect(-100, 430, 1300, 1600);
  ctx.save(); rrect(120, 500, 840, 520, 40); ctx.clip(); const g = ctx.createLinearGradient(0, 500, 0, 1020); g.addColorStop(0, '#070a22'); g.addColorStop(1, '#1d2a5c'); ctx.fillStyle = g; ctx.fillRect(120, 500, 840, 520);
  const r = rng(5); for (let i = 0; i < 50; i++) { ctx.fillStyle = `rgba(255,250,220,${.3 + .6 * r()})`; ctx.fillRect(120 + r() * 840, 500 + r() * 330, 3, 3); }
  ctx.fillStyle = '#f6edc4'; ctx.beginPath(); ctx.arc(800, 610, 48, 0, TAU); ctx.fill(); ctx.fillStyle = '#070a22'; ctx.beginPath(); ctx.arc(778, 598, 44, 0, TAU); ctx.fill();
  ctx.fillStyle = '#0a0f2a'; ctx.beginPath(); ctx.moveTo(120, 1020); for (let x = 120; x <= 960; x += 12) ctx.lineTo(x, 900 - 70 * (.5 + .5 * fbm((x + t * 90) * .006))); ctx.lineTo(960, 1020); ctx.fill();
  for (let i = 0; i < 10; i++) { const x = 1000 - ((t * (300 + i * 70) + i * 211) % 1000); ctx.fillStyle = i % 3 ? '#ffd27a' : '#ff8a5a'; ctx.globalAlpha = .9; rrect(x, 925 + (i * 41) % 80, 46 + i * 5, 6, 3); ctx.fill(); } ctx.globalAlpha = 1;
  ctx.fillStyle = 'rgba(255,255,255,.06)'; ctx.beginPath(); ctx.moveTo(250, 500); ctx.lineTo(400, 500); ctx.lineTo(240, 1020); ctx.lineTo(120, 1020); ctx.lineTo(120, 860); ctx.fill();
  ctx.restore(); ctx.strokeStyle = K.woodD; ctx.lineWidth = 30; rrect(120, 500, 840, 520, 40); ctx.stroke();
  // shelf with the footwear on offer
  ctx.fillStyle = '#4a2f1a'; rrect(60, 1240, 960, 30, 8); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(80, 1270, 920, 14);
  ctx.restore();
  const s1 = wt(7, 'slippers') - .25, s0 = wt(7, 'some') - .1;
  const pz = E.oBack(P(t, s0, s0 + .45)); if (pz > 0) { ctx.save(); ctx.globalAlpha = clamp(pz * 2); pair('zori', 120, 1240 - 60 * (1 - pz), 1.25); ctx.restore(); label('STRAW ZŌRI', 250, 1322, P(t, s0 + .3, s0 + .6), 'rgba(243,232,207,.9)', 22); }
  const ps = E.oBack(P(t, s1, s1 + .45)); if (ps > 0) { ctx.save(); ctx.globalAlpha = clamp(ps * 2); pair('slipper', 600, 1240 - 60 * (1 - ps), 1.6); ctx.restore(); label('SLIPPERS', 780, 1322, P(t, s1 + .3, s1 + .6), K.must, 22); }
  // 1905
  const y0 = wt(7, '1905') - .25; ctx.fillStyle = 'rgba(8,10,30,.45)'; ctx.fillRect(0, 0, W, 450);
  if (t > y0) { const digits = '1905'; for (let i = 0; i < 4; i++) { const p = E.oBack(P(t, y0 + i * .07, y0 + .35 + i * .07)); ctx.save(); ctx.translate(250 + i * 150, 395 + 80 * (1 - p)); ctx.globalAlpha = clamp(p * 1.5); big(digits[i], 0, 0, 220, K.must, 'center', '#05071a'); ctx.restore(); } }
  if (t > y0 + .5) plate('SLIPPERS ON BOARD', 750, 420, 44, K.red, K.paper, 1, -.04, E.oBack(P(t, y0 + .5, y0 + .85)));
  label('LONG-DISTANCE TRAINS', 540, 1082, vis(t, wt(7, 'long') - .2, T.cmp, .5), 'rgba(243,232,207,.85)', 22);
}
function miniPanel(t, y, colTop, title, sub, u, shoesOn, a, verdict, vt, vcol) {
  if (a <= 0) return; const k = E.o3(a);
  ctx.save(); ctx.globalAlpha = clamp(a * 1.5); ctx.translate((1 - k) * 80, 0);
  ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(50, y + 12, 1000, 470, 28); ctx.fill();
  ctx.save(); rrect(40, y, 1000, 470, 28); ctx.clip();
  trainWorld(t, { x: 680, y: 1000, s: .78, sx: 540, sy: y + 235 }, { paper: shoesOn ? 0 : 1, draw() { dadLegs(t, u, u, shoesOn); if (shoesOn && u >= 1) { ctx.fillStyle = 'rgba(60,40,20,.7)'; for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.arc(740 + (i * 47) % 200, 912 + (i * 13) % 26, 5 + i % 3, 0, TAU); ctx.fill(); } } } });
  ctx.setTransform(1, 0, 0, 1, SH.x + (1 - k) * 80, SH.y);
  ctx.fillStyle = colTop; ctx.fillRect(40, y, 1000, 84); txt(title, 76, y + 56, font(900, 40), K.paper, 'left', 3); txt(sub, 1004, y + 54, font(700, 18, F.m), 'rgba(243,232,207,.85)', 'right', 3);
  ctx.restore(); ctx.strokeStyle = K.paper; ctx.lineWidth = 5; rrect(40, y, 1000, 470, 28); ctx.stroke();
  if (t > vt) plate(verdict, 730, y + 405, 50, vcol, K.paper, 1, -.05, E.oBack(P(t, vt, vt + .3)));
  ctx.restore();
}
function sceneCompare(t) {
  fillBG('#1a2146', '#0d1127');
  const n0 = wt(8, 'daimaru') - .3, a = P(t, n0, n0 + .5);
  ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = K.must; ctx.fillRect(70, 262, 8, 96 * E.o3(a)); txt('DAIMARU HIROSHI', 100, 304, font(900, 50), K.paper, 'left', 2); jp('大丸 弘', 800, 302, 40, K.must, 'left'); label('DRESS HISTORIAN · HIS OBSERVATION', 102, 346, 1, 'rgba(243,232,207,.8)', 19, 'left'); ctx.restore();
  const pa = n0 + .7, up = wt(8, 'put') - .1;
  miniPanel(t, 395, K.ink2, 'JAPANESE PASSENGER', 'FEET UP', E.io(P(t, up, up + .9)), 0, P(t, pa, pa + .5), 'SHOES OFF FIRST', wt(9, 'first') - .15, K.teal);
  const pb = LS(10) - .2;
  miniPanel(t, 895, '#7c2a22', 'WESTERN PASSENGER', 'FEET UP', E.io(P(t, pb + .1, pb + .9)), 'tan', P(t, pa + .3, pa + .8), 'SHOES STAY ON', wt(10, 'on') - .2, K.red);
  const dim = P(t, pa + .3, pa + .8) * (1 - P(t, pb - .2, pb + .2)); if (dim > 0) { ctx.fillStyle = `rgba(13,17,39,${.62 * dim})`; rrect(36, 891, 1008, 478, 30); ctx.fill(); label('AND THE WESTERN PASSENGER?', 540, 1140, dim, K.paper, 24); }
}

// ------------------------------------------------------------ S3 cars
function sedan(x, y, s, col = K.red, flip = 1, wheelRot = 0) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s * flip, s);
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-284, -50); ctx.lineTo(-282, -92); ctx.quadraticCurveTo(-270, -104, -120, -110); ctx.lineTo(-66, -164); ctx.quadraticCurveTo(-58, -172, -40, -172); ctx.lineTo(84, -172); ctx.quadraticCurveTo(104, -170, 114, -160); ctx.lineTo(160, -112); ctx.lineTo(272, -106); ctx.quadraticCurveTo(286, -102, 286, -86); ctx.lineTo(286, -50); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(-284, -66, 570, 16);
  ctx.fillStyle = '#bfe1e6'; ctx.beginPath(); ctx.moveTo(-104, -112); ctx.lineTo(-60, -158); ctx.lineTo(8, -158); ctx.lineTo(8, -112); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(22, -112); ctx.lineTo(22, -158); ctx.lineTo(82, -158); ctx.lineTo(128, -112); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#d9d9d9'; rrect(-296, -70, 30, 16, 6); ctx.fill(); rrect(268, -70, 30, 16, 6); ctx.fill(); ctx.fillRect(-236, -124, 8, 16); rrect(-246, -134, 22, 12, 4); ctx.fill();
  ctx.fillStyle = '#ffe9a6'; ctx.beginPath(); ctx.arc(-272, -88, 11, 0, TAU); ctx.fill(); ctx.fillStyle = '#ff5a3c'; rrect(270, -98, 14, 22, 4); ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(14, -112); ctx.lineTo(14, -56); ctx.moveTo(-110, -108); ctx.lineTo(-112, -56); ctx.stroke();
  for (const wx of [-172, 176]) { ctx.fillStyle = '#16171c'; ctx.beginPath(); ctx.arc(wx, -40, 46, 0, TAU); ctx.fill(); ctx.fillStyle = '#d9d9d9'; ctx.beginPath(); ctx.arc(wx, -40, 22, 0, TAU); ctx.fill(); ctx.save(); ctx.translate(wx, -40); ctx.rotate(wheelRot); ctx.fillStyle = '#16171c'; ctx.fillRect(-3, -20, 6, 40); ctx.fillRect(-20, -3, 40, 6); ctx.restore(); }
  ctx.restore();
}
function dust(x, y, t, n = 7, col = '201,170,120') { for (let i = 0; i < n; i++) { const ph = (t * 1.6 + i / n) % 1; ctx.fillStyle = `rgba(${col},${.5 * (1 - ph)})`; ctx.beginPath(); ctx.arc(x + ph * 190 + 12 * noise(i * 9 + t), y - ph * 60 - (i % 3) * 12, 14 + ph * 44, 0, TAU); ctx.fill(); } }
const CARCOL = ['#dc4a33', '#f0b637', '#e9e2cd', '#5fa9a3', '#dc4a33', '#e9e2cd', '#f0b637', '#5fa9a3', '#dc4a33'];
function sceneCars(t) {
  fillBG('#1f5a57', '#123a3a');
  const boom = wt(11, 'car') - .2, chart = LS(12) - .2, nine = wt(12, 'ninefold') - .15, road = LS(13) - .15;
  // intro car drives through
  const k = P(t, chart, chart + .6);
  if (k < 1) {
    ctx.save(); ctx.globalAlpha = 1 - k; ctx.fillStyle = '#7a5230'; ctx.fillRect(0, 1180, W, 900); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 1180, W, 12);
    const d = E.o3(P(t, T.car - .2, T.car + 1.3)), x = lerp(-420, 520, d) + 1200 * E.i3(k), bob = Math.sin(t * 22) * 4;
    dust(x - 620 * 1.0, 1170, t); sedan(x, 1186 + bob, 1.5, K.red, -1, t * 14);
    popText('THE CAR', 540, 560, 170, t, boom, K.paper, -.03); popText('BOOM', 540, 760, 230, t, wt(11, 'boom') - .12, K.must, .02);
    ctx.restore();
  }
  if (t > chart) {
    ctx.save(); ctx.globalAlpha = P(t, chart, chart + .4);
    label('CARS PER HOUSEHOLD', 540, 292, 1, K.paper, 30);
    // 1963 row
    txt('1963', 90, 432, font(900, 84), t > wt(12, '1963') - .1 && t < wt(12, '1963') + .9 ? K.must : K.paper, 'left'); sedan(480, 444, .46, CARCOL[0], -1); label('× 1', 660, 428, 1, 'rgba(243,232,207,.8)', 26, 'left');
    ctx.fillStyle = 'rgba(243,232,207,.25)'; ctx.fillRect(90, 478, 900, 3);
    txt('1972', 90, 640, font(900, 84), t > wt(12, '1972') - .1 ? K.must : K.paper, 'left');
    for (let i = 0; i < 9; i++) { const p = E.oBack(P(t, nine + i * .09, nine + .3 + i * .09)); if (p <= 0) continue; const cx = 440 + (i % 3) * 245, cy = 646 + Math.floor(i / 3) * 150; ctx.save(); ctx.translate(cx, cy); ctx.scale(p, p); sedan(0, 0, .42, CARCOL[i], -1); ctx.restore(); }
    if (t > nine) { const p = E.oBack(P(t, nine + .1, nine + .5)); ctx.save(); ctx.translate(190, 880); ctx.rotate(-.08); ctx.scale(p, p); big('×9', 0, 0, 190, K.must, 'center', '#0b2424'); ctx.restore(); }
    ctx.restore();
  }
  if (t > road) {
    const p = E.o3(P(t, road, road + .6)), y = 1180, x0 = 70, w = 940;
    ctx.save(); ctx.globalAlpha = clamp(p * 2); rrect(x0, y, w * p, 150, 16); ctx.save(); ctx.clip();
    ctx.fillStyle = '#8a5f38'; ctx.fillRect(x0, y, w, 150); ctx.fillStyle = '#6d4826'; const r = rng(31); for (let i = 0; i < 90; i++) { ctx.beginPath(); ctx.arc(x0 + w * .2 + r() * w * .8, y + r() * 150, 3 + r() * 7, 0, TAU); ctx.fill(); }
    ctx.fillStyle = '#4b3018'; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.ellipse(x0 + w * (.33 + i * .18), y + 40 + (i % 2) * 70, 44, 15, 0, 0, TAU); ctx.fill(); }
    ctx.fillStyle = '#3b3f4a'; ctx.fillRect(x0, y, w * .2, 150); ctx.fillStyle = '#e9e2cd'; for (let i = 0; i < 3; i++) ctx.fillRect(x0 + 14 + i * 62, y + 71, 38, 8);
    ctx.restore();
    const f = wt(13, 'a') - .15, q = E.o3(P(t, f, f + .4));
    ctx.strokeStyle = K.must; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x0, y - 16); ctx.lineTo(x0, y - 30); ctx.lineTo(x0 + w * .2 * q, y - 30); ctx.lineTo(x0 + w * .2 * q, y - 16); ctx.stroke();
    if (q > 0) { ctx.globalAlpha = q; txt('≈ 1/5', x0, y - 48, font(900, 64), K.must, 'left'); txt('PAVED', x0 + 200, y - 52, font(900, 34), K.paper, 'left', 3); label('THE REST: DIRT & MUD', x0 + w, y - 52, P(t, f + .5, f + .9), 'rgba(243,232,207,.85)', 20, 'right'); }
    ctx.globalAlpha = 1; const cx = lerp(120, 900, E.io2(P(t, road + .3, T.dokin + .2))), onDirt = cx > x0 + w * .2 + 40;
    if (onDirt) dust(cx - 260, y + 140, t, 6); sedan(cx, y + 150 + (onDirt ? Math.sin(t * 26) * 5 : 0), .42, K.paper, -1, t * 12);
    ctx.restore();
  }
}
function sceneDokin(t) {
  fillBG('#161d3a', '#0d1127');
  const d0 = wt(14, 'dokin') - .3, no = wt(14, 'no') - .15, tray = wt(14, 'tray') - .25, st = wt(15, 'stickers') - .3;
  // --- open-door close-up
  const G = 1340, Fy = 1150;
  ctx.fillStyle = '#6d4826'; ctx.fillRect(0, G, W, 700); ctx.fillStyle = '#4b3018'; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.ellipse(700 + i * 90, G + 30 + (i % 2) * 40, 34, 10, 0, 0, TAU); ctx.fill(); }
  ctx.fillStyle = '#0a0d1c'; ctx.fillRect(0, 760, 700, Fy - 760);                                   // cabin
  ctx.fillStyle = K.red; ctx.fillRect(0, Fy, 720, 120); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, Fy + 96, 720, 24); ctx.fillStyle = '#d9d9d9'; ctx.fillRect(0, Fy + 84, 720, 10);   // sill + trim
  ctx.fillStyle = '#16171c'; ctx.beginPath(); ctx.arc(60, G - 30, 150, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#d9d9d9'; ctx.beginPath(); ctx.arc(60, G - 30, 60, Math.PI, 0); ctx.fill(); ctx.fillStyle = '#16171c'; ctx.fillRect(-100, G - 32, 320, 34);
  ctx.fillStyle = '#7c2a22'; rrect(-40, 880, 300, 270, 30); ctx.fill(); ctx.fillStyle = '#9a382d'; rrect(-40, 880, 300, 60, 26); ctx.fill();   // seat
  ctx.fillStyle = '#e9e2cd'; ctx.fillRect(250, Fy - 16, 440, 16); ctx.fillStyle = K.teal; for (let i = 0; i < 11; i++) ctx.fillRect(258 + i * 40, Fy - 16, 20, 16);   // clean mat
  // door (swung open, seen from inside)
  ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(760, 770); ctx.lineTo(1040, 730); ctx.lineTo(1050, Fy + 150); ctx.lineTo(770, Fy + 110); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#9fd0dc'; ctx.beginPath(); ctx.moveTo(785, 792); ctx.lineTo(1018, 760); ctx.lineTo(1022, 960); ctx.lineTo(788, 975); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.beginPath(); ctx.moveTo(770, 1000); ctx.lineTo(1046, 990); ctx.lineTo(1050, Fy + 150); ctx.lineTo(770, Fy + 110); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#d9d9d9'; rrect(820, 1040, 90, 16, 8); ctx.fill();
  // tray + hero pair
  const tp = E.oBack(P(t, tray, tray + .4)); if (tp > 0) { ctx.save(); ctx.globalAlpha = clamp(tp * 2); ctx.fillStyle = '#c9b071'; rrect(420, Fy - 34 - 40 * (1 - tp), 268, 22, 6); ctx.fill(); ctx.fillStyle = '#a58c50'; ctx.fillRect(420, Fy - 46 - 40 * (1 - tp), 10, 22); ctx.fillRect(678, Fy - 46 - 40 * (1 - tp), 10, 22); ctx.restore(); }
  const sp = P(t, tray + .25, tray + .9), sy = lerp(G, Fy - 34, E.io2(sp)) - Math.sin(sp * Math.PI) * 170, sx = lerp(790, 446, E.io2(sp));
  if (t > no - .4) { ctx.save(); ctx.globalAlpha = P(t, no - .4, no - .1); if (sp <= 0) shadow(900, G + 4, 120, 9); pair('loafer', sx, sy, 1.0, -Math.sin(sp * Math.PI) * .3, 1); ctx.restore(); }
  // socked foot steps in
  const fp = E.io(P(t, no, no + .7)); leg(40, 900, lerp(300, 318, fp), lerp(1040, Fy - 62, fp), lerp(-.5, 0, fp), 220, 84, DAD.pc, DAD.sc);
  callout(552, Fy - 60, 40, -150, 'SHOE TRAY', 'BY THE DOOR', vis(t, tray + .7, st + .3, .6), K.must, 0);
  reticle(552, Fy - 70, 130, t, 'PAIR #001', 'RIDING IN THE TRAY', vis(t, st + .9, T.rest + .3, .4), K.must);
  // --- header: 土禁
  if (t > d0) { const p = E.oBack(P(t, d0, d0 + .4)); ctx.save(); ctx.translate(300, 470); ctx.rotate(-.04); ctx.scale(p, p); ctx.fillStyle = 'rgba(0,0,0,.4)'; rrect(-222, -182, 460, 320, 30); ctx.fill(); ctx.fillStyle = K.paper; rrect(-230, -190, 460, 320, 30); ctx.fill(); ctx.strokeStyle = K.red; ctx.lineWidth = 10; rrect(-212, -172, 424, 284, 20); ctx.stroke(); jp('土禁', 0, 56, 196, K.red, 'center', .07); ctx.restore(); }
  popText('DOKIN', 790, 400, 112, t, d0 + .25, K.must, .02);
  ctx.save(); ctx.globalAlpha = P(t, no, no + .3); txt('= NO SHOES', 580, 492, font(900, 60), K.paper, 'left'); txt('IN THE CAR', 580, 560, font(900, 60), K.paper, 'left'); label('(UNTIL THE 1980s)', 582, 612, 1, 'rgba(243,232,207,.8)', 24, 'left'); ctx.restore();
  // sticker slap
  if (t > st) { const p = P(t, st, st + .22), s = lerp(3, 1, E.o3(p)); ctx.save(); ctx.translate(900, 868); ctx.rotate(.1); ctx.scale(s, s); ctx.globalAlpha = clamp(p * 3); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-150, -62, 310, 134, 14); ctx.fill(); ctx.fillStyle = K.must; rrect(-156, -70, 310, 134, 14); ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 5; rrect(-146, -60, 290, 114, 9); ctx.stroke(); jp('土足厳禁', 0, 8, 62, K.red, 'center', .08); txt('NO SHOES', 0, 40, font(900, 22), K.ink, 'center', 6); ctx.restore(); }
  ctx.save(); ctx.globalAlpha = vis(t, tray + 1.2, T.rest, .5, .2) * .95; txt('PSA — don’t drive in slippers.', 540, 1372, font(700, 26, F.m), K.must, 'center', 1); ctx.restore();
}
function sceneRest(t) {
  fillBG('#090c22', '#161b3a');
  const r = rng(11); for (let i = 0; i < 60; i++) { ctx.fillStyle = `rgba(255,250,220,${.2 + .6 * r()})`; ctx.fillRect(r() * W, 230 + r() * 500, 3, 3); }
  ctx.fillStyle = '#0c1a1c'; ctx.beginPath(); ctx.moveTo(0, 900); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 820 - 80 * (.5 + .5 * fbm(x * .004 + 3))); ctx.lineTo(W, 900); ctx.fill();
  ctx.fillStyle = '#1d2233'; ctx.fillRect(0, 880, W, 1100); ctx.strokeStyle = 'rgba(233,226,205,.5)'; ctx.lineWidth = 9; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(180 + i * 150, 900); ctx.lineTo(-240 + i * 330, 1500); ctx.stroke(); }
  // sign
  ctx.fillStyle = '#3a3f4a'; ctx.fillRect(842, 520, 14, 380); ctx.fillStyle = '#1f6d55'; rrect(700, 330, 300, 200, 16); ctx.fill(); ctx.strokeStyle = K.paper; ctx.lineWidth = 5; rrect(712, 342, 276, 176, 10); ctx.stroke(); txt('P', 770, 462, font(900, 110), K.paper, 'center'); jp('休憩所', 895, 430, 42, K.paper, 'center', .06); txt('REST AREA', 895, 480, font(800, 22), K.paper, 'center', 2);
  // car leaving
  const d = E.i2(P(t, T.rest - .2, T.twist)), cx = lerp(560, 1500, d); ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g2 = ctx.createRadialGradient(cx - 130, 880, 0, cx - 130, 880, 90); g2.addColorStop(0, 'rgba(255,70,40,.6)'); g2.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g2; ctx.fillRect(cx - 230, 780, 200, 200); ctx.restore(); sedan(cx, 940, .46, '#7e8aa8', 1, t * 10);
  // lamp + light cone
  ctx.fillStyle = '#3a3f4a'; ctx.fillRect(206, 420, 16, 860); rrect(206, 410, 190, 20, 8); ctx.fill(); ctx.fillStyle = '#ffe9a6'; rrect(330, 428, 70, 16, 6); ctx.fill();
  ctx.save(); ctx.globalCompositeOperation = 'lighter'; const fl = .9 + .1 * noise(t * 9); const cg = ctx.createLinearGradient(0, 440, 0, 1300); cg.addColorStop(0, `rgba(255,225,150,${.34 * fl})`); cg.addColorStop(1, 'rgba(255,225,150,.03)'); ctx.fillStyle = cg; ctx.beginPath(); ctx.moveTo(335, 444); ctx.lineTo(398, 444); ctx.lineTo(760, 1300); ctx.lineTo(130, 1300); ctx.fill();
  const pg = ctx.createRadialGradient(450, 1290, 0, 450, 1290, 330); pg.addColorStop(0, `rgba(255,225,150,${.3 * fl})`); pg.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = pg; ctx.save(); ctx.translate(0, 1290); ctx.scale(1, .28); ctx.translate(0, -1290); ctx.fillRect(100, 900, 700, 800); ctx.restore(); ctx.restore();
  shadow(480, 1296, 150, 12, .5); pair('loafer', 350, 1290, 1.15);
  reticle(470, 1250, 150, t, 'PAIR #001', 'FORGOTTEN', vis(t, wt(16, 'forgotten') + .1, T.twist + .4, .4), K.must);
  plate('LOST & FOUND', 300, 1050, 46, K.red, K.paper, vis(t, wt(16, 'rest') - .2, T.twist + .4, .1), -.05, E.oBack(P(t, wt(16, 'rest') - .2, wt(16, 'rest') + .15)));
}

// ------------------------------------------------------------ S4 the tease
function sceneTwist(t) {
  fillBG('#b5382a', '#7c2a22');
  ctx.save(); ctx.translate(540, 880); ctx.rotate(-t * .7); ctx.fillStyle = 'rgba(0,0,0,.09)'; for (let i = 0; i < 12; i++) { ctx.rotate(TAU / 12); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1500, -190); ctx.lineTo(1500, 190); ctx.fill(); } ctx.restore();
  popText('HERE’S', 540, 520, 120, t, T.twist + .05, K.paper, -.03, '#4a1610'); popText('THE TWIST', 540, 670, 150, t, wt(17, 'twist') - .2, K.must, .02, '#4a1610');
  const p = E.io(P(t, T.twist + .1, T.store - .1)), yr = Math.round(lerp(1972, 1920, p)), s = String(yr);
  for (let i = 0; i < 4; i++) { const x = 180 + i * 240; ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(x - 96, 800, 204, 280, 22); ctx.fill(); ctx.fillStyle = K.ink; rrect(x - 104, 790, 204, 280, 22); ctx.fill(); const roll = (i === 3 && p < 1) ? ((lerp(1972, 1920, p) % 1) + 1) % 1 : 0; txt(s[i], x, 1010 + roll * 30, font(900, 210), K.paper, 'center'); ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(x - 104, 928, 204, 4); }
  label('◀◀ REWIND', 540, 1150, .6 + .4 * Math.sin(t * 18), K.paper, 30);
}
function facade(t) {
  const x0 = 110, w = 860, top = 380, base = 900;
  ctx.fillStyle = '#cdbb92'; ctx.fillRect(x0, top, w, base - top); ctx.fillStyle = '#b9a67c'; ctx.fillRect(x0 - 16, top - 22, w + 32, 30); ctx.fillStyle = '#cdbb92'; ctx.fillRect(440, 290, 200, 100); ctx.fillStyle = '#b9a67c'; ctx.fillRect(428, 276, 224, 22);
  
  ctx.fillStyle = '#ffd98a'; ctx.beginPath(); ctx.arc(540, 344, 30, 0, TAU); ctx.fill(); ctx.strokeStyle = '#5b3a20'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(540, 344); ctx.lineTo(540, 324); ctx.moveTo(540, 344); ctx.lineTo(554, 350); ctx.stroke();
  for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const x = x0 + 34 + c * 102, y = top + 34 + r * 92, lit = ((r * 5 + c * 3) % 7) > 1; ctx.fillStyle = lit ? `rgba(255,214,130,${.85 + .15 * noise(t * 2 + r * 7 + c)})` : '#5a5f6e'; rrect(x, y, 64, 70, [32, 32, 4, 4]); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(x + 30, y, 4, 70); }
  ctx.fillStyle = 'rgba(0,0,0,.12)'; for (let r = 1; r < 4; r++) ctx.fillRect(x0, top + 20 + r * 92, w, 6);
  // ground floor
  ctx.fillStyle = '#8f7c55'; ctx.fillRect(x0, 760, w, 140); for (let i = 0; i < 12; i++) { ctx.fillStyle = i % 2 ? K.paper : K.red; ctx.beginPath(); ctx.moveTo(x0 + i * w / 12, 760); ctx.lineTo(x0 + (i + 1) * w / 12, 760); ctx.lineTo(x0 + (i + 1) * w / 12 + 6, 800); ctx.lineTo(x0 + i * w / 12 - 6, 800); ctx.fill(); }
  ctx.fillStyle = '#ffd98a'; rrect(450, 812, 180, 88, [12, 12, 0, 0]); ctx.fill(); ctx.fillStyle = '#5b3a20'; ctx.fillRect(537, 812, 6, 88);
  for (const bx of [200, 880]) { ctx.fillStyle = K.ink2; ctx.fillRect(bx - 30, 420, 60, 300); jp('百', bx, 500, 44, K.paper); jp('貨', bx, 590, 44, K.paper); jp('店', bx, 680, 44, K.paper); }
  // visitors
  for (let i = 0; i < 6; i++) { const x = ((i * 190 + t * (20 + i * 6) * (i % 2 ? 1 : -1)) % 1200 + 1200) % 1200 - 60, y = 930 + (i % 3) * 14; ctx.fillStyle = ['#2a2f4f', '#5b2a30', '#274a48'][i % 3]; ctx.beginPath(); ctx.arc(x, y - 96, 16, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(x - 16, y - 78); ctx.lineTo(x + 16, y - 78); ctx.lineTo(x + 24, y); ctx.lineTo(x - 24, y); ctx.fill(); }
}
function sceneStore(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 940); g.addColorStop(0, '#141a3d'); g.addColorStop(.6, '#5b2f55'); g.addColorStop(1, '#e58a4e'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, 1000);
  const kk = E.io2(P(t, LS(19) - .45, LS(19) + .3)), fs = lerp(1.22, 1.0, kk); ctx.save(); ctx.translate(540, 880 + lerp(250, 70, kk)); ctx.scale(fs, fs); ctx.translate(-540, -880); ctx.fillStyle = '#1a1830'; ctx.fillRect(-400, 900, 1900, 1600); facade(t); ctx.restore();
  plate('TOKYO · UNTIL THE 1920s', 540, 268, 40, K.must, K.ink, P(t, wt(18, '1920s') - .3, wt(18, '1920s')), -.02, E.oBack(P(t, wt(18, '1920s') - .3, wt(18, '1920s') + .1)));
  // swap card
  const c0 = LS(19) - .25, p = E.o3(P(t, c0, c0 + .5)); if (p <= 0) return;
  const sw = wt(19, 'swap') - .1, sl = wt(19, 'slippers') - .25, y = lerp(1500, 1000, p);
  ctx.save(); ctx.globalAlpha = clamp(p * 2); ctx.fillStyle = 'rgba(0,0,0,.4)'; rrect(52, y + 12, 996, 420, 28); ctx.fill(); ctx.fillStyle = K.paper; rrect(40, y, 1000, 420, 28); ctx.fill();
  ctx.fillStyle = K.ink; rrect(40, y, 1000, 70, [28, 28, 0, 0]); ctx.fill(); txt('AT THE DOOR', 76, y + 48, font(900, 34), K.paper, 'left', 4); jp('下足番', 1004, y + 49, 34, K.must, 'right'); 
  // booth
  ctx.fillStyle = K.woodD; rrect(410, y + 110, 260, 270, 14); ctx.fill(); ctx.fillStyle = '#1a120b'; rrect(432, y + 190, 216, 150, 8); ctx.fill(); ctx.fillStyle = K.ink2; for (let i = 0; i < 3; i++) { ctx.fillRect(432 + i * 73, y + 132, 70, 78 + 6 * Math.sin(t * 3 + i)); } txt('SHOE CHECK', 540, y + 178, font(900, 22), K.paper, 'center', 2); ctx.fillStyle = K.wood; ctx.fillRect(400, y + 336, 280, 18);
  ctx.save(); rrect(40, y, 1000, 420, 28); ctx.clip();
  const q = E.io2(P(t, sw, sw + .8)); ctx.save(); ctx.globalAlpha *= 1 - P(q, .75, 1); pair('loafer', lerp(110, 440, q), y + 336, lerp(1.05, .6, q)); ctx.restore();
  const q2 = E.o3(P(t, sl, sl + .6)); if (q2 > 0) { ctx.save(); ctx.globalAlpha *= clamp(q2 * 3); pair('slipper', lerp(480, 730, q2), y + 336, lerp(.6, 1.15, q2)); ctx.restore(); }
  ctx.restore();
  label('YOUR SHOES', 220, y + 386, 1, K.ink, 20); label('STORE SLIPPERS', 850, y + 386, P(t, sl + .2, sl + .5), K.red, 20);
  // wooden tag
  const tg = E.oBack(P(t, sw + .6, sw + .9)); if (tg > 0) { ctx.save(); ctx.translate(215, y + 190); ctx.rotate(-.12); ctx.scale(tg, tg); ctx.fillStyle = '#d6a868'; rrect(-52, -74, 104, 148, 12); ctx.fill(); ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(0, -50, 8, 0, TAU); ctx.fill(); txt('No.', 0, 0, font(700, 22, F.m), K.ink, 'center'); txt('428', 0, 48, font(900, 44), K.ink, 'center'); ctx.restore(); }
  ctx.restore();
}
let PILE = [], CUB = [];
const KINDS = ['geta', 'zori', 'loafer', 'black', 'geta', 'sneaker', 'zori', 'tan', 'geta', 'boot'];
function scenePile(t) {
  fillBG('#2a1c12', '#170f09');
  const q0 = wt(21, 'earthquake') - .25, qk = t > q0 ? (1 - P(t, q0, q0 + 2.2)) * P(t, q0, q0 + .15) : 0;
  const mix = wt(20, 'mixed') - .2, th = wt(20, 'thousands') - .2;
  // cubby shelves
  ctx.fillStyle = '#4a2f1a'; ctx.fillRect(30, 300, 1020, 640);
  CUB.forEach((c, i) => {
    const x = 42 + c.c * 168, y = 312 + c.r * 124 + qk * 10 * noise(t * 30 + i);
    ctx.fillStyle = '#1d130c'; rrect(x, y, 156, 112, 6); ctx.fill();
    const p = E.oBack(P(t, T.pile - .1 + c.o * .9, T.pile + .2 + c.o * .9)); if (p <= 0) return;
    let kind = c.kind, dx = 0, dy = 0, rot = qk * .5 * noise(t * 22 + i * 3);
    if (c.sw !== undefined) { const m = E.io(P(t, mix + c.sw * .12, mix + .55 + c.sw * .12)), o = CUB[c.to]; dx = (o.c - c.c) * 168 * m; dy = (o.r - c.r) * 124 * m - Math.sin(m * Math.PI) * 60; }
    dy += qk * (40 * Math.abs(noise(t * 17 + i * 5))) ; dx += qk * 30 * noise(t * 19 + i);
    ctx.save(); ctx.globalAlpha = clamp(p * 2); pair(kind, x + 22 + dx, y + 100 + dy, .52 * p, rot); ctx.restore();
    const sw = c.sw !== undefined && t > mix + .5; ctx.fillStyle = sw ? K.red : '#d6a868'; rrect(x + 104, y + 8, 44, 30, 5); ctx.fill(); txt(sw ? '?' : String(c.n), x + 126, y + 31, font(900, sw ? 26 : 17), sw ? K.paper : K.ink, 'center');
  });
  // counter + growing pile
  ctx.fillStyle = '#6f4526'; ctx.fillRect(0, 1250, W, 700); ctx.fillStyle = K.wood; ctx.fillRect(0, 1232, W, 30); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, 1262, W, 10);
  PILE.forEach((s, i) => { const p = P(t, th + s.o * 1.5, th + s.o * 1.5 + .45); if (p <= 0) return; const b = E.i2(p), bounce = p >= 1 ? 0 : 0; const y = lerp(-200, s.y, b) - (p >= 1 ? qk * 90 * Math.abs(noise(t * 13 + i * 2)) : 0), x = s.x + qk * 50 * noise(t * 15 + i * 7); wear(s.kind, x, y, s.s, s.rot * b + qk * .8 * noise(t * 12 + i), s.flip); });
  ctx.fillStyle = 'rgba(20,12,6,.55)'; ctx.fillRect(0, 0, W, 300);
  popText('THOUSANDS OF PAIRS', 540, 276, 76, t, th, K.paper, -.015, '#0b0704');
  if (t > mix + .45 && t < q0) plate('MIXED UP!', 540, 640, 96, K.red, K.paper, 1, -.07, E.oBack(P(t, mix + .45, mix + .75)));
  // earthquake
  if (t > q0) {
    ctx.fillStyle = `rgba(10,6,4,${.55 * P(t, q0, q0 + .3)})`; ctx.fillRect(0, 520, W, 330);
    ctx.strokeStyle = K.red; ctx.lineWidth = 6; ctx.lineJoin = 'round'; ctx.beginPath(); const n = Math.floor(P(t, q0, q0 + 1.1) * 180);
    for (let i = 0; i <= n; i++) { const x = i * 6, e = Math.exp(-Math.pow((i - 75) / 34, 2)); const y = 780 + (noise(i * 1.7) * 6 + noise(i * .9 + 50) * 150 * e); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
    popText('IT TOOK AN', 540, 600, 70, t, q0, K.paper, -.02, '#0b0704'); popText('EARTHQUAKE', 540, 712, 124, t, q0 + .12, K.must, -.02, '#0b0704');
  }
}
function postcard(t) {
  // an illustrated stand-in for the period Ginza postcard
  ctx.fillStyle = 'rgba(0,0,0,.45)'; rrect(-388, -258, 800, 540, 8); ctx.fill(); ctx.fillStyle = '#efe3c4'; rrect(-400, -270, 800, 540, 8); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.rect(-372, -242, 744, 430); ctx.clip();
  const g = ctx.createLinearGradient(0, -242, 0, 190); g.addColorStop(0, '#d9c59a'); g.addColorStop(1, '#eadbb6'); ctx.fillStyle = g; ctx.fillRect(-372, -242, 744, 430);
  const S = '#6b4a2f', S2 = '#8d6a46', S3 = '#b3946a';
  ctx.fillStyle = S3; for (let i = 0; i < 6; i++) ctx.fillRect(-372 + i * 70, 10 - (i % 3) * 30, 64, 130);            // far street
  ctx.fillStyle = S2; ctx.fillRect(60, -170, 312, 310); ctx.fillStyle = S; ctx.fillRect(48, -184, 336, 20); ctx.fillRect(180, -226, 80, 46);   // the store
  ctx.fillStyle = '#efe3c4'; for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) { rrect(78 + c * 42, -150 + r * 52, 24, 36, [12, 12, 2, 2]); ctx.fill(); }
  ctx.fillStyle = S; ctx.fillRect(4, -150, 44, 250); jp('松', 26, -100, 34, '#efe3c4'); jp('坂', 26, -30, 34, '#efe3c4'); jp('屋', 26, 40, 34, '#efe3c4');
  ctx.fillStyle = '#c9b88e'; ctx.fillRect(-372, 140, 744, 60); ctx.fillStyle = S; ctx.fillRect(-372, 136, 744, 5);
  const tx = -300 + ((t * 40) % 500); ctx.fillStyle = S; rrect(tx, 80, 170, 62, 8); ctx.fill(); ctx.fillStyle = '#efe3c4'; for (let i = 0; i < 5; i++) ctx.fillRect(tx + 12 + i * 31, 92, 22, 20); ctx.fillStyle = S; ctx.fillRect(tx + 80, 44, 4, 38); ctx.fillRect(-372, 44, 744, 2);   // tram + wire
  for (const wx of [-330, -150]) { ctx.fillStyle = S; ctx.fillRect(wx, 30, 8, 112); ctx.fillStyle = 'rgba(90,110,60,.75)'; for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.ellipse(wx + 4 + (i - 3) * 14, 20 + Math.abs(i - 3) * 10 + 20, 10, 46, (i - 3) * .12 + .05 * Math.sin(t * 2 + i), 0, TAU); ctx.fill(); } }
  for (let i = 0; i < 7; i++) { const x = -340 + i * 105 + (i % 2) * 30, y = 176 - (i % 3) * 8; ctx.fillStyle = S; ctx.beginPath(); ctx.arc(x, y - 44, 7, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(x - 7, y - 36); ctx.lineTo(x + 7, y - 36); ctx.lineTo(x + 11, y); ctx.lineTo(x - 11, y); ctx.fill(); }
  ctx.fillStyle = 'rgba(120,80,30,.14)'; ctx.fillRect(-372, -242, 744, 430);
  ctx.restore();
  txt('GINZA · MATSUZAKAYA', -372, 232, font(800, 26), '#5b3a20', 'left', 4); txt('ILLUSTRATION', 372, 230, font(500, 16, F.m), 'rgba(91,58,32,.8)', 'right', 3);
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22');
  ctx.save(); ctx.translate(540, 880); ctx.rotate(t * .12); ctx.fillStyle = 'rgba(255,255,255,.025)'; for (let i = 0; i < 12; i++) { ctx.rotate(TAU / 12); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1500, -190); ctx.lineTo(1500, 190); ctx.fill(); } ctx.restore();
  const p = E.oBack(P(t, T.end + .05, T.end + .6));
  ctx.save(); ctx.translate(540, lerp(-400, 600, E.o3(P(t, T.end, T.end + .6)))); ctx.rotate(lerp(.3, -.045, p)); ctx.scale(1.08, 1.08); postcard(t); ctx.restore();
  const n = T.end + .5; plate('NEXT', 190, 1000, 56, K.red, K.paper, P(t, n, n + .1), -.04, E.oBack(P(t, n, n + .3)));
  const L = ['How Japan’s', 'department stores', 'lost their slippers'];
  L.forEach((s, i) => { const a = E.o3(P(t, n + .2 + i * .14, n + .65 + i * .14)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 1120 + i * 96 + 30 * (1 - a), 86, i === 2 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
  const q = E.oBack(P(t, n + .7, n + 1.1)); if (q > 0) { ctx.save(); ctx.globalAlpha = clamp(q * 2); pair('slipper', 760, 1040 - 40 * (1 - q), 1.05, -.12); ctx.restore(); }
}

const tM = wt(20, 'mixed') - .2, tQ = wt(21, 'earthquake') - .25, tTray = wt(14, 'tray') - .25;
window.FILM = {
  title: 'SHOES OFF', tag: 'SHŌWA JAPAN · 1926–1989',
  hotLines: [17, 21],
  init() { const r = rng(77); let n = 101;
    for (let rr = 0; rr < 5; rr++) for (let c = 0; c < 6; c++) CUB.push({ r: rr, c, kind: KINDS[Math.floor(r() * KINDS.length)], o: r(), n: n += 1 + Math.floor(r() * 40) });
    [[7, 10], [10, 7], [15, 20], [20, 15], [3, 22], [22, 3]].forEach(([a, b], i) => { CUB[a].sw = Math.floor(i / 2); CUB[a].to = b; });
    for (let i = 0; i < 46; i++) { const u = r(), x = 80 + u * 920, hmax = 250 * Math.sin(Math.PI * clamp((x - 40) / 1000)); PILE.push({ x: x - 90, y: 1236 - r() * hmax, kind: KINDS[Math.floor(r() * KINDS.length)], s: .62 + r() * .22, rot: (r() - .5) * 1.5, flip: r() > .5 ? 1 : -1, o: r() }); }
    PILE.sort((a, b) => a.y - b.y); PILE.forEach(s => { s.o = clamp((1236 - s.y) / 250 * -.6 + .7 + (s.o - .5) * .3); });
  },
  scenes: [{ start: 0, draw: sceneHook }, { start: T.why, draw: sceneGenkan }, { start: T.cards, draw: sceneCards }, { start: T.train, draw: sceneTrain }, { start: T.night, draw: sceneNight }, { start: T.cmp, draw: sceneCompare },
    { start: T.car, draw: sceneCars }, { start: T.dokin, draw: sceneDokin }, { start: T.rest, draw: sceneRest }, { start: T.twist, draw: sceneTwist }, { start: T.store, draw: sceneStore }, { start: T.pile, draw: scenePile }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.why, .4], [T.cards, .35], [T.train, .4], [T.night, .5], [T.cmp, .4], [T.car, .35], [T.dokin, .35], [T.rest, .45], [T.store, .3], [T.pile, .35], [T.end, .4]],
  chapters: [[0, '01', 'SHOES OFF'], [T.why, '02', 'WHY'], [T.train, '03', 'TRAINS'], [T.car, '04', 'CARS'], [T.twist, '05', 'THE TWIST']],
  hits: [[1.5, 8, .3], [wt(2, 'at') + .3, 8, .3], [wt(11, 'boom') - .12, 12, .4], [wt(12, 'ninefold') - .05, 8, .35], [wt(15, 'stickers') - .1, 12, .35], [tM + .45, 10, .3], [tQ, 46, 2.1]],
  flashes: [[T.train, .3], [T.car, .3], [T.twist, .35], [T.end, .3]],
  events: {
    scene: [T.why, T.cards, T.train, T.night, T.cmp, T.car, T.dokin, T.rest, T.store, T.pile, T.end],
    pop: [.45, wt(3, 'summers') - .25, wt(3, 'humid') - .2, wt(3, 'streets') - .15, wt(5, 'box') - .2, wt(7, 'some') - .1, wt(7, 'slippers') - .25, wt(8, 'japanese') - .3, LS(10) - .2, wt(14, 'dokin') - .3, tTray, wt(19, 'slippers') - .25, T.end + .5],
    stamp: [1.5, wt(2, 'at') + .35, LS(3) - .1, wt(7, '1905') + .25, wt(9, 'first') - .15, wt(10, 'on') - .2, wt(11, 'boom') - .12, wt(12, 'ninefold') - .05, wt(15, 'stickers') - .3, wt(16, 'rest') - .2, tM + .45],
    step: [wt(0, 'started') + .5, wt(1, 'shoes') + .5, wt(4, 'slipped') + .3, wt(4, 'slipped') + .7, tTray + .9, wt(14, 'no') + .5],
    tick: Array.from({ length: 9 }, (_, i) => wt(12, 'ninefold') - .15 + i * .09),
    car: [T.car - .1, LS(13) + .2, T.rest],
    rewind: [T.twist], pile: [wt(20, 'thousands') - .2], quake: [tQ], train: [0, T.train], end: [T.end],
  },
};
