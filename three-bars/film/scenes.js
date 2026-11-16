// THREE CHOCOLATE BARS — episode 11: Valentine's Day at the department store. Portrait-first (9:16). Helpers in lib.js.
// Tone: light and wry. "Who was first" is disputed, so the claims stay attributed on screen. No store or maker logos are drawn.
const EP = { n: 11, next: ['White Day'] };
const L = TL.length - 1;
const T = { hook: 0, post: LB(4), first: LB(7), why: LB(12), hearts: LB(15), cross: LB(18), kinds: LB(20), isetan: LB(22), tease: LB(25), end: TL[L].e + .15 };
const SERIF = '"DejaVu Serif","Liberation Serif",Georgia,serif';
const fadeIn = (t, t0, d = .5) => E.o3(P(t, t0, t0 + d));
function quiet(s, x, y, size, bgc, fg, a) { plate(s, x, y, size, bgc, fg, a, 0, 1); }
function hatMan(x, y, s, col) { mini(x, y, s, col); ctx.fillStyle = col; rrect(x - 13 * s, y - 126 * s, 26 * s, 18 * s, 4 * s); ctx.fill(); rrect(x - 22 * s, y - 111 * s, 44 * s, 6 * s, 3 * s); ctx.fill(); }
const CHOC = '#5b3a20', CHOC2 = '#7a4f2c';

function chocBar(x, y, s, k) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-76, -34, 164, 80, 8); ctx.fill(); ctx.fillStyle = CHOC; rrect(-80, -40, 160, 80, 8); ctx.fill(); ctx.fillStyle = CHOC2; for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) rrect(-72 + i * 37, -32 + j * 34, 31, 28, 4), ctx.fill(); ctx.fillStyle = '#c8ccd4'; ctx.beginPath(); ctx.moveTo(-80, -40); ctx.lineTo(-10, -40); ctx.lineTo(-40, 40); ctx.lineTo(-80, 40); ctx.closePath(); ctx.fill(); ctx.restore(); }
function heartPath(s) { ctx.beginPath(); ctx.moveTo(0, .9 * s); ctx.bezierCurveTo(-1.5 * s, -.1 * s, -.9 * s, -1.2 * s, 0, -.5 * s); ctx.bezierCurveTo(.9 * s, -1.2 * s, 1.5 * s, -.1 * s, 0, .9 * s); ctx.closePath(); }
function heart(x, y, s, col, rot = 0) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = col; heartPath(s); ctx.fill(); ctx.restore(); }
function greetCard(x, y, s, k) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(.06); ctx.scale(s * k, s * k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-54, -72, 120, 150, 6); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-60, -80, 120, 150, 6); ctx.fill(); heart(0, -14, 30, K.red); ctx.fillStyle = 'rgba(20,27,51,.35)'; ctx.fillRect(-36, 34, 72, 6); ctx.fillRect(-26, 48, 52, 6); ctx.restore(); }
// the 1958 counter: a glass case on a wooden counter. bars = pop factors for the three bars; card = pop factor; sign = pop factor
function counter58(t, bars, card, sign) {
  fillBG('#3a2140', '#1d1024'); ctx.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 900);
  ctx.fillStyle = 'rgba(220,240,255,.08)'; ctx.fillRect(60, 800, 960, 260); ctx.strokeStyle = 'rgba(235,245,255,.5)'; ctx.lineWidth = 5; ctx.strokeRect(60, 800, 960, 260);
  ctx.fillStyle = '#8b5a33'; ctx.fillRect(30, 1060, 1020, 280); ctx.fillStyle = CHOC; ctx.fillRect(20, 1046, 1040, 26); ctx.fillStyle = '#1d1024'; ctx.fillRect(0, 1340, W, 800);
  for (let i = 0; i < 3; i++) chocBar(230 + i * 190, 1000, 1, bars[i]); greetCard(840, 974, 1, card);
  if (sign > 0) { ctx.save(); ctx.translate(540, 706); ctx.rotate(-.03); ctx.scale(sign, sign); ctx.fillStyle = CHOC; ctx.fillRect(-150, 60, 14, 50); ctx.fillRect(136, 60, 14, 50); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-242, -62, 500, 140, 8); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-250, -70, 500, 140, 8); ctx.fill(); txt('Valentine Sale', 0, 22, `italic 700 62px ${SERIF}`, '#b02c22', 'center'); ctx.strokeStyle = '#b02c22'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = -190; x <= 190; x += 10) { const y = 46 + 5 * Math.sin(x * .08); x === -190 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); ctx.restore(); }
}

// ------------------------------------------------------------ 01 the flop
function sceneHook(t) {
  const s0 = wt(1, 'sign') - .7, b0 = wt(2, 'three') - .4, c0 = wt(2, 'one') - .3;
  counter58(t, [0, 1, 2].map(i => pop(t, b0 + i * .2)), pop(t, c0), pop(t, s0, .45));
  const d0 = wt(0, 'february') + .2; if (t > d0) plate('FEBRUARY 1958 · ISETAN, SHINJUKU', 540, 590, 34, K.paper, K.ink, 1, -.012, pop(t, d0));
  if (t > b0 + .5) plate('3 BARS', 420, 900, 40, K.must, K.ink, 1, -.03, pop(t, b0 + .5)); if (t > c0 + .1) plate('1 CARD', 850, 860, 40, K.paper, K.ink, 1, .04, pop(t, c0 + .1));
  const y0 = wt(3, '170') - .4; if (t > y0) { quiet('TOTAL · THREE DAYS', 540, 1110, 30, K.ink, K.paper, fadeIn(t, y0 - .3)); popText('¥170', 540, 1270, 170, t, y0, K.must, -.02, '#2a1206'); }
  topBand(540, 'rgba(20,10,28,.66)');
  plate('EP 11', 160, 268, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('THREE', 540, 392, 116, t, .55, K.must, -.015, '#12081a'); popText('CHOCOLATE BARS', 540, 508, 100, t, .8, K.paper, -.015, '#12081a');
}

// ------------------------------------------------------------ 02 a postcard
function iconFlower() { ctx.strokeStyle = '#2f6b45'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 60); ctx.quadraticCurveTo(10, 20, 0, -6); ctx.stroke(); ctx.fillStyle = K.red; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(Math.cos(i * TAU / 6) * 22, -20 + Math.sin(i * TAU / 6) * 22, 16, 0, TAU); ctx.fill(); } ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, -20, 12, 0, TAU); ctx.fill(); }
function iconCard() { ctx.fillStyle = K.ink; rrect(-42, -52, 84, 104, 6); ctx.fill(); ctx.fillStyle = '#fff'; rrect(-36, -46, 72, 92, 4); ctx.fill(); heart(0, -6, 22, K.red); }
function iconChoc() { ctx.fillStyle = CHOC; rrect(-52, -34, 104, 68, 8); ctx.fill(); ctx.fillStyle = CHOC2; for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) rrect(-46 + i * 32, -28 + j * 30, 27, 25, 4), ctx.fill(); }
function scenePost(t) {
  table(); const u = E.o3(P(t, T.post + .1, T.post + .9)), px = lerp(1500, 540, u), py = lerp(300, 880, u), rot = lerp(.9, -.05, u);
  ctx.save(); ctx.translate(px, py); ctx.rotate(rot); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-372, -222, 760, 470, 8); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-380, -235, 760, 470, 8); ctx.fill();
  ctx.strokeStyle = 'rgba(20,27,51,.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(10, -200); ctx.lineTo(10, 200); ctx.stroke(); for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(50, 20 + i * 52); ctx.lineTo(340, 20 + i * 52); ctx.stroke(); }
  // handwriting (squiggles), stamp (plain tricolour bands, no real design), postmark
  ctx.strokeStyle = 'rgba(36,64,122,.75)'; ctx.lineWidth = 4; ctx.lineCap = 'round'; const wr = P(t, T.post + .9, T.post + 3.2) * 7; for (let i = 0; i < 7; i++) { const k = clamp(wr - i); if (k <= 0) continue; ctx.beginPath(); for (let x = 0; x <= 300 * k * (i === 6 ? .5 : 1); x += 6) { const y = -170 + i * 52 + 9 * Math.sin(x * .09 + i * 2) * Math.sin(x * .023 + i); x ? ctx.lineTo(-350 + x, y) : ctx.moveTo(-350 + x, y); } ctx.stroke(); }
  ctx.fillStyle = '#fff'; ctx.fillRect(240, -212, 110, 134); ['#24407a', '#f3ecd8', K.red].forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(250 + i * 30, -202, 30, 114); }); ctx.strokeStyle = 'rgba(20,27,51,.3)'; ctx.setLineDash([4, 6]); ctx.lineWidth = 3; ctx.strokeRect(240, -212, 110, 134); ctx.setLineDash([]);
  ctx.strokeStyle = 'rgba(20,27,51,.6)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(190, -130, 62, 0, TAU); ctx.stroke(); txt('PARIS', 190, -120, font(800, 28, F.m), 'rgba(20,27,51,.7)', 'center', 3); for (let i = 0; i < 3; i++) { ctx.beginPath(); for (let x = 250; x <= 360; x += 8) { const y = -150 + i * 18 + 5 * Math.sin(x * .1); x === 250 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); }
  ctx.restore();
  const f0 = wt(6, '14') - .4; if (t > f0) plate('14 FEBRUARY', 540, 1090, 48, K.red, K.paper, 1, -.03, pop(t, f0));
  badge(260, 1225, t, wt(6, 'flowers') - .3, 'FLOWERS', iconFlower); badge(540, 1225, t, wt(6, 'cards') - .3, 'CARDS', iconCard); badge(820, 1225, t, wt(6, 'chocolate') - .5, 'CHOCOLATE', iconChoc);
  const m0 = wt(5, 'wrote') - .4; if (t > m0) plate('A FRIEND WROTE TO MARY CHOCOLATE', 540, 590, 34, K.paper, K.ink, 1, -.012, pop(t, m0));
  topBand(540, 'rgba(30,16,6,.68)');
  popText('A POSTCARD', 540, 400, 120, t, T.post + .2, K.paper, -.015, '#140a04'); popText('FROM PARIS', 540, 512, 120, t, wt(5, 'paris') - .4, K.must, -.015, '#140a04');
}

// ------------------------------------------------------------ 03 not the first
function heartTin(x, y, s) { ctx.save(); ctx.translate(x, y); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.translate(8, 10); heartPath(s); ctx.fill(); ctx.translate(-8, -10); ctx.fillStyle = '#c9a23c'; heartPath(s); ctx.fill(); ctx.fillStyle = '#b02c22'; heartPath(s * .9); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.ellipse(-s * .45, -s * .35, s * .22, s * .12, -.6, 0, TAU); ctx.fill();
  ctx.fillStyle = '#f3ecd8'; ctx.save(); ctx.rotate(-.5); ctx.fillRect(-s * 1.2, -s * .05, s * 2.4, s * .16); ctx.restore(); ctx.beginPath(); ctx.ellipse(-s * .2, -s * .2, s * .22, s * .12, .6, 0, TAU); ctx.ellipse(s * .1, -s * .05, s * .22, s * .12, -1.2, 0, TAU); ctx.fill(); ctx.restore(); }
function sceneFirst(t) {
  fillBG('#d9d1bd', '#c7bea8'); ctx.fillStyle = 'rgba(40,36,30,.4)'; const r = rng(36); for (let c = 0; c < 4; c++) { let y = 560; while (y < 1420) { const para = r() > .9; if (y < 660 || y > 1210 || c === 0 && false) ctx.fillRect(60 + c * 250, y, 210 * (para ? .5 : 1), 7); y += para ? 34 : 17; } }
  const a0 = wt(8, 'morozoff') - .5, ak = fadeIn(t, a0, .6); ctx.save(); ctx.globalAlpha = .25 + .75 * ak; ctx.fillStyle = '#ece5d0'; ctx.fillRect(90, 690, 900, 500); ctx.strokeStyle = '#1b1814'; ctx.lineWidth = 6; ctx.strokeRect(90, 690, 900, 500); ctx.lineWidth = 2; ctx.strokeRect(104, 704, 872, 472);
  heartTin(320, 930, 150); txt('VALENTINE', 740, 860, `700 50px ${SERIF}`, '#1b1814', 'center', 2); txt('CHOCOLATES', 740, 924, `700 44px ${SERIF}`, '#1b1814', 'center', 2); ctx.fillStyle = 'rgba(27,24,20,.5)'; for (let i = 0; i < 4; i++) ctx.fillRect(590, 980 + i * 26, 340 - (i === 3 ? 120 : 0), 8); ctx.restore();
  quiet('PARAPHRASE · ILLUSTRATION', 540, 1150, 20, K.ink, K.paper, .9 * ak);
  if (t > a0) plate('MOROZOFF, KOBE', 300, 690, 44, K.red, K.paper, 1, -.03, pop(t, a0)); const e0 = wt(9, 'englishlanguage') - .4; if (t > e0) plate('AD IN AN ENGLISH-LANGUAGE PAPER', 540, 1250, 36, K.ink, K.paper, 1, .012, pop(t, e0));
  const s0 = wt(10, 'shrugged') - .5; if (t > s0) plate('SHOPPERS MOSTLY SHRUGGED', 540, 1330, 42, K.must, K.ink, 1, -.012, pop(t, s0));
  stamp(t, wt(11, 'argued') - .4, 540, 930, 'STILL ARGUED OVER', K.red, -.08, 60);
  topBand(540, 'rgba(24,22,30,.78)');
  const k0 = wt(8, 'kobes') - .3, y1 = wt(8, '1932') - .4, y2 = wt(9, '1936') - .4; ctx.save(); ctx.globalAlpha = 1 - P(t, k0 - .2, k0); popText('NOT THE FIRST', 540, 440, 110, t, T.first + .2, K.paper, -.015, '#100e16'); ctx.restore();
  popText('KOBE', 540, 380, 104, t, k0, K.paper, -.015, '#100e16'); popText('1932', 330, 506, 116, t, y1, K.must, -.015, '#100e16'); if (t > y2) { ctx.fillStyle = K.paper; ctx.beginPath(); ctx.arc(540, 470, 10, 0, TAU); ctx.fill(); } popText('1936', 750, 506, 116, t, y2, K.must, -.015, '#100e16');
}

// ------------------------------------------------------------ 04 why it flopped: a matchmaking album closes
function portrait(x, y, kind) { ctx.fillStyle = '#d6cdb8'; ctx.beginPath(); ctx.ellipse(x, y, 130, 170, 0, 0, TAU); ctx.fill(); ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, 130, 170, 0, 0, TAU); ctx.clip(); const c = kind ? '#5b2a30' : '#2c3040'; ctx.fillStyle = c; rrect(x - 110, y + 30, 220, 220, 70); ctx.fill(); ctx.fillStyle = '#b9ae98'; ctx.beginPath(); ctx.arc(x, y - 36, 54, 0, TAU); ctx.fill(); ctx.fillStyle = '#1b1a22'; ctx.beginPath(); ctx.arc(x, y - 50, 56, Math.PI * .95, Math.PI * 2.05); ctx.fill(); if (kind) { ctx.beginPath(); ctx.arc(x, y - 104, 30, 0, TAU); ctx.fill(); ctx.strokeStyle = '#f3ecd8'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x - 40, y + 36); ctx.lineTo(x + 6, y + 120); ctx.lineTo(x + 44, y + 36); ctx.stroke(); } else { ctx.fillStyle = '#f3ecd8'; ctx.beginPath(); ctx.moveTo(x - 22, y + 30); ctx.lineTo(x + 22, y + 30); ctx.lineTo(x, y + 80); ctx.fill(); } ctx.restore(); ctx.strokeStyle = '#8a6a1e'; ctx.lineWidth = 8; ctx.beginPath(); ctx.ellipse(x, y, 130, 170, 0, 0, TAU); ctx.stroke(); }
function albumPage(side) { ctx.fillStyle = '#efe8d6'; rrect(side < 0 ? -430 : 0, -330, 430, 660, side < 0 ? [10, 0, 0, 10] : [0, 10, 10, 0]); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.08)'; ctx.fillRect(side < 0 ? -30 : 0, -330, 30, 660); portrait(side * 215, -60, side > 0 ? 1 : 0); ctx.fillStyle = 'rgba(20,27,51,.35)'; for (let i = 0; i < 3; i++) ctx.fillRect(side * 215 - 110 + (i === 2 ? 30 : 0), 170 + i * 30, 220 - (i === 2 ? 60 : 0), 9); }
function sceneWhy(t) {
  fillBG('#5b2a30', '#2a1216'); rays(540, 1000, t, .04, .06, '0,0,0');
  const c0 = wt(14, 'changed') - .9, u = E.io2(P(t, c0, c0 + 1.1)), k = E.o3(P(t, T.why, T.why + .6));
  ctx.save(); ctx.translate(540, lerp(1700, 950, k)); ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(-436, -322, 890, 680, 14); ctx.fill(); ctx.fillStyle = '#274a48'; rrect(-448, -346, 896, 692, 14); ctx.fill();
  albumPage(-1); if (u < .5) { ctx.save(); ctx.scale(1 - 2 * u, 1); albumPage(1); ctx.restore(); } else { ctx.save(); ctx.scale(-(2 * u - 1), 1); ctx.fillStyle = '#274a48'; rrect(0, -346, 448, 692, [0, 14, 14, 0]); ctx.fill(); ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 5; rrect(30, -316, 388, 632, 6); ctx.stroke(); ctx.fillStyle = '#c9a23c'; rrect(110, -80, 228, 16, 6); ctx.fill(); rrect(150, -44, 148, 12, 6); ctx.fill(); ctx.restore(); }
  ctx.restore();
  quiet('A MATCHMAKING ALBUM · ILLUSTRATION', 540, 580, 20, K.paper, K.ink, .9);
  const d0 = wt(13, 'declaring') - .3; if (t > d0) plate('DECLARING HER FEELINGS: ALMOST UNTHINKABLE', 540, 1340, 32, K.paper, K.ink, 1 - P(t, c0 - .1, c0 + .2), -.008, pop(t, d0)); if (t > c0 + .4) plate('SO MARY CHANGED TACK', 540, 1340, 46, K.must, K.ink, 1, .012, pop(t, c0 + .4));
  topBand(540, 'rgba(36,12,16,.7)');
  digits('1958', t, T.why + .25, 400, 190, K.must, '#14080a'); const a0 = wt(12, 'most') - .3; if (t > a0) plate('MOST MARRIAGES: STILL ARRANGED', 540, 492, 40, K.paper, K.ink, 1, .012, pop(t, a0));
}

// ------------------------------------------------------------ 05 hearts
function sceneHearts(t) {
  fillBG('#7c2a3a', '#3a1018'); rays(540, 960, t, .05, .08, '255,200,200');
  const hk = E.oBack(P(t, T.hearts + .1, T.hearts + .6)), w0 = wt(15, 'names') - .9, w1 = wt(16, 'once') - .2;
  ctx.save(); ctx.translate(540, 960); ctx.scale(hk, hk); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.save(); ctx.translate(14, 18); heartPath(300); ctx.fill(); ctx.restore(); ctx.fillStyle = CHOC; heartPath(300); ctx.fill(); ctx.fillStyle = CHOC2; heartPath(262); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.beginPath(); ctx.ellipse(-150, -150, 70, 34, -.6, 0, TAU); ctx.fill();
  // icing: TO ____ / FROM ____ , written left to right by a stylus
  const rows = [['TO', -190, -70, 150], ['FROM', -150, 60, 110]], uu = P(t, w0, w1) * 2; let tip = null;
  rows.forEach(([s, x, y, lineW], i) => { const u = clamp(uu - i); if (u <= 0) return; const tw = s.length * 46 + 20, tot = tw + lineW + 40, cx = x + tot * u; ctx.save(); ctx.beginPath(); ctx.rect(x - 10, y - 80, tot * u + 10, 120); ctx.clip(); txt(s, x, y, `italic 700 64px ${SERIF}`, '#fbf4e4', 'left'); ctx.strokeStyle = '#fbf4e4'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x + tw + 20, y + 4); ctx.lineTo(x + tw + 20 + lineW + 20, y + 4); ctx.stroke(); ctx.restore(); if (u < 1) tip = [cx, y - 8 + 8 * Math.sin(u * 40)]; });
  if (tip) { ctx.save(); ctx.translate(tip[0], tip[1]); ctx.rotate(.55); ctx.fillStyle = '#c8ccd4'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-9, -36); ctx.lineTo(9, -36); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-12, -330, 24, 296, 10); ctx.fill(); ctx.fillStyle = K.red; ctx.fillRect(-12, -80, 24, 12); ctx.restore(); }
  ctx.restore();
  const p0 = wt(17, 'crown') - .5; if (t > p0) { const k = pop(t, p0 + .5); ctx.save(); ctx.translate(880, 690); ctx.scale(k, k); ctx.strokeStyle = '#e9c45a'; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(-26, 0, 44, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(26, 0, 44, 0, TAU); ctx.stroke(); ctx.restore(); plate('SAME YEAR: THE CROWN PRINCE MARRIED FOR LOVE', 540, 1346, 30, K.paper, K.ink, 1, -.008, pop(t, p0)); }
  topBand(540, 'rgba(40,10,16,.68)');
  const s0 = wt(16, 'once') - .4; ctx.save(); ctx.globalAlpha = 1 - P(t, s0 - .2, s0); digits('1959', t, T.hearts + .3, 400, 190, K.must, '#16060a'); const n0 = wt(15, 'heartshaped') - .3; if (t > n0) plate('HEART-SHAPED, WITH NAMES ON THEM', 540, 492, 38, K.paper, K.ink, 1, .012, pop(t, n0)); ctx.restore();
  if (t > s0) plate('THE SLOGAN', 540, 284, 34, K.paper, K.ink, 1, -.012, pop(t, s0)); popText('ONCE A YEAR,', 540, 404, 104, t, s0, K.paper, -.015, '#16060a'); popText('SHE CONFESSES', 540, 512, 104, t, wt(16, 'woman') - .2, K.must, -.015, '#16060a');
}

// ------------------------------------------------------------ 06 taking hold
function sceneCross(t) {
  fillBG('#23323a', '#111a20'); const X0 = 110, X1 = 980, Y0 = 1240, Y1 = 700, u = E.io2(P(t, T.cross + .3, wt(18, '1960s') + .6));
  ctx.strokeStyle = 'rgba(243,232,207,.5)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(X0, Y1 - 40); ctx.lineTo(X0, Y0); ctx.lineTo(X1, Y0); ctx.stroke();
  const fa = v => lerp(Y1 + 40, Y0 - 70, 1 / (1 + Math.exp(-(v - .5) * 7))), fl = v => lerp(Y0 - 70, Y1 + 40, 1 / (1 + Math.exp(-(v - .5) * 7)));
  [[fa, K.paper], [fl, K.red]].forEach(([f, col]) => { ctx.strokeStyle = col; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); let lx, ly; for (let i = 0; i <= 80 * u; i++) { const v = i / 80; lx = lerp(X0, X1, v); ly = f(v); i ? ctx.lineTo(lx, ly) : ctx.moveTo(lx, ly); } ctx.stroke(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(lx, ly, 13, 0, TAU); ctx.fill(); });
  quiet('ARRANGED', 250, Y1 + 10, 30, K.paper, K.ink, fadeIn(t, T.cross + .4)); quiet('LOVE MATCHES', 280, Y0 - 120, 30, K.red, K.paper, fadeIn(t, T.cross + .6));
  const xk = pop(t, wt(18, '1960s') - .3); if (xk > 0) { const cx = (X0 + X1) / 2, cy = (Y1 + 40 + Y0 - 70) / 2; ctx.strokeStyle = K.must; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(cx, cy, 46 * xk, 0, TAU); ctx.stroke(); plate('1960s', cx, cy - 96, 50, K.must, K.ink, 1, 0, xk); }
  const h0 = wt(19, 'took') - .4; if (t > h0) { plate('VALENTINE’S TOOK HOLD', 540, 1340, 46, K.red, K.paper, 1, -.012, pop(t, h0)); for (let i = 0; i < 7; i++) { const ph = ((t - h0) * .5 + i / 7) % 1; ctx.globalAlpha = Math.sin(ph * Math.PI) * .9; heart(620 + i * 60 + 20 * Math.sin(i * 3 + t * 2), 1180 - ph * 420, 16 + (i % 3) * 6, K.red, .2 * Math.sin(t * 2 + i)); } ctx.globalAlpha = 1; }
  quiet('SCHEMATIC · NOT DATA', 800, 620, 20, K.ink, K.paper, .9);
  topBand(540, 'rgba(10,18,22,.7)');
  popText('LOVE MATCHES', 540, 400, 108, t, T.cross + .2, K.paper, -.015, '#081014'); popText('OVERTAKE ARRANGED', 540, 508, 84, t, wt(18, 'overtook') - .3, K.must, -.015, '#081014');
}
function giftBox(x, y, s) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = 'rgba(0,0,0,.25)'; rrect(-30, -22, 68, 52, 6); ctx.fill(); ctx.fillStyle = CHOC; rrect(-34, -26, 68, 52, 6); ctx.fill(); ctx.fillStyle = K.red; ctx.fillRect(-6, -26, 12, 52); ctx.fillRect(-34, -6, 68, 12); ctx.restore(); }
const KINDS = [['GIRI', '義理チョコ', 'OBLIGATION · FOR BOSSES · 1980s'], ['TOMO', '友チョコ', 'FRIENDS · AND FAMILY'], ['JIBUN', '自分チョコ', 'A TREAT FOR YOURSELF']];
function sceneKinds(t) {
  fillBG('#3a2140', '#1d1024'); const tm = [wt(20, 'obligation') - .5, wt(21, 'friends') - .4, wt(21, 'yourself') - .7];
  KINDS.forEach(([name, jpn, sub], r) => { const a = fadeIn(t, tm[r]); if (a <= 0) return; const gy = 800 + r * 245, tt = t - tm[r]; ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(255,255,255,.05)'; rrect(40, gy - 190, 1000, 215, 16); ctx.fill();
    big(name, 70, gy - 96, 76, K.must, 'left', '#0c0612'); jp(jpn, 70, gy - 34, 40, K.paper, 'left', .05); txt(sub, 70, gy + 6, font(700, 18, F.m), 'rgba(243,232,207,.8)', 'left', 2);
    if (r === 0) { mini(640, gy, 1.5, '#b5a2c8'); hatMan(940, gy, 1.6, '#2c3040'); const u = (tt * .55) % 1; ctx.strokeStyle = 'rgba(243,232,207,.35)'; ctx.fillStyle = 'rgba(243,232,207,.35)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(690, gy - 150); ctx.lineTo(880, gy - 150); ctx.stroke(); ctx.beginPath(); ctx.moveTo(894, gy - 150); ctx.lineTo(874, gy - 162); ctx.lineTo(874, gy - 138); ctx.fill(); giftBox(lerp(690, 890, E.io2(u)), gy - 90, 1); }
    else if (r === 1) { mini(640, gy, 1.5, '#b5a2c8'); mini(940, gy, 1.5, '#2a7a74'); const u = .5 - .5 * Math.cos(tt * 2.2); giftBox(lerp(700, 880, u), gy - 110, 1); giftBox(lerp(880, 700, u), gy - 50, 1); }
    else { mini(790, gy, 1.5, '#b5a2c8'); const an = tt * 2.4; ctx.strokeStyle = 'rgba(243,232,207,.3)'; ctx.lineWidth = 4; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.ellipse(880, gy - 100, 90, 56, 0, 0, TAU); ctx.stroke(); ctx.setLineDash([]); giftBox(880 + Math.cos(an) * 90, gy - 100 + Math.sin(an) * 56, 1); }
    ctx.restore(); });
  topBand(540, 'rgba(20,10,28,.68)');
  popText('GIRI · TOMO · JIBUN', 540, 420, 76, t, T.kinds + .2, K.paper, -.015, '#0c0612'); if (t > T.kinds + .6) plate('WHO THE CHOCOLATE IS FOR', 540, 500, 38, K.must, K.ink, 1, .012, pop(t, T.kinds + .6));
}

// ------------------------------------------------------------ 07 back at Isetan: 1958's three bars, then one square per brand
const BRANDC = ['#7c2a22', '#c9a23c', '#2a7a74', '#b5a2c8', '#dc4a33', '#24407a', '#7a4f2c', '#e9dcbb', '#2f6b45'];
function sceneIsetan(t) {
  fillBG('#161d3a', '#0b0f22');
  // top panel: the 1958 counter, in miniature
  ctx.save(); ctx.beginPath(); rrect(60, 566, 960, 300, 14); ctx.clip(); ctx.translate(540, 716); ctx.scale(.62, .62); ctx.translate(-540, -1000); counter58(t, [1, 1, 1], 1, 1); ctx.restore(); ctx.strokeStyle = 'rgba(243,232,207,.4)'; ctx.lineWidth = 4; rrect(60, 566, 960, 300, 14); ctx.stroke();
  plate('1958: 3 BARS', 250, 610, 36, K.paper, K.ink, 1, -.02, pop(t, T.isetan + .3));
  // bottom panel: 17 x 9 = 153 squares
  const g0 = wt(23, '2026') - .4, g1 = wt(23, '153') + .5, n = Math.floor(P(t, g0, g1) * 153), GX = 66, GY = 930, CW = 56, CH = 41;
  if (t > g0 - .2) { ctx.save(); ctx.globalAlpha = fadeIn(t, g0 - .2); ctx.fillStyle = 'rgba(255,255,255,.05)'; rrect(50, 916, 980, 396, 12); ctx.fill(); ctx.restore(); }
  for (let i = 0; i < n; i++) { const c = i % 17, r = Math.floor(i / 17), k = pop(t, lerp(g0, g1, i / 153), .25); ctx.fillStyle = BRANDC[(i * 7 + r * 3) % 9]; const x = GX + c * CW + 24, y = GY + r * CH + 17; rrect(x - 24 * k, y - 17 * k, 48 * k, 34 * k, 6); ctx.fill(); }
  if (t > g0) plate('2026: SALON DU CHOCOLAT', 330, 900, 34, K.must, K.ink, 1, -.015, pop(t, g0)); if (t > g1) quiet('ONE SQUARE = ONE BRAND', 850, 900, 20, K.paper, K.ink, fadeIn(t, g1));
  const c0 = wt(23, '24') - .3; if (t > c0) plate('FROM 24 COUNTRIES', 700, 1120, 46, K.paper, K.ink, 1, .03, pop(t, c0));
  const l0 = wt(24, 'lottery') - .4; if (t > l0) plate('LOTTERY FOR FIRST-HOUR ENTRY', 540, 1352, 38, K.red, K.paper, 1, -.012, pop(t, l0));
  topBand(540, 'rgba(8,10,30,.66)');
  const d0 = wt(23, '153') - .6; ctx.save(); ctx.globalAlpha = 1 - P(t, d0 - .2, d0); popText('BACK AT ISETAN', 540, 440, 104, t, T.isetan + .2, K.paper, -.015, '#05071a'); ctx.restore();
  digits('153', t, d0, 400, 200, K.must, '#05071a'); if (t > d0 + .4) plate('A RECORD NUMBER OF BRANDS', 540, 492, 40, K.paper, K.ink, 1, .012, pop(t, d0 + .4));
}

// ------------------------------------------------------------ 08 tease: a white marshmallow on black
function sceneTease(t) {
  fillBG('#0b0b10', '#040406'); const g = ctx.createRadialGradient(540, 980, 0, 540, 980, 620); g.addColorStop(0, 'rgba(255,255,255,.14)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 400, W, 1200);
  const k = E.oBack(P(t, T.tease + .15, T.tease + .7)), bob = 8 * Math.sin(t * 1.6);
  ctx.save(); ctx.translate(540, 990 + bob); ctx.scale(k, k); ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.beginPath(); ctx.ellipse(0, 210, 230, 30, 0, 0, TAU); ctx.fill();
  const mg = ctx.createLinearGradient(-200, 0, 200, 0); mg.addColorStop(0, '#f7f5ef'); mg.addColorStop(.6, '#ffffff'); mg.addColorStop(1, '#d9d6cc'); ctx.fillStyle = mg; rrect(-200, -130, 400, 310, 70); ctx.fill(); ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(0, -128, 198, 62, 0, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.05)'; ctx.beginPath(); ctx.ellipse(0, -128, 150, 40, 0, 0, TAU); ctx.fill(); ctx.restore();
  const r0 = wt(26, 'rival') - .4; popText('?', 170, 1010, 220, t, r0, K.must, -.14, '#000'); popText('?', 910, 1010, 220, t, r0 + .2, K.red, .14, '#000'); if (t > r0 + .4) plate('RIVAL CLAIMS TO INVENTING IT', 540, 1340, 40, K.paper, K.ink, 1, -.012, pop(t, r0 + .4));
  topBand(540, 'rgba(0,0,0,.4)');
  const w0 = Math.max(T.tease + .25, wt(25, 'white') - .3); popText('WHITE DAY', 540, 410, 150, t, w0, '#ffffff', -.015, '#22222c'); if (t > w0 + .2) { ctx.save(); ctx.globalAlpha = fadeIn(t, w0 + .2); jp('ホワイトデー', 540, 296, 46, K.must, 'center', .05); ctx.restore(); }
  const p0 = wt(25, 'japans') - .3; if (t > p0) plate('JAPAN’S PAYBACK DAY', 540, 498, 44, K.must, K.ink, 1, .012, pop(t, p0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n, .25)); plate('EPISODE 12', 870, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 850 + 30 * (1 - a), 150, K.must, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 920); ctx.lineTo(80 + 600 * u, 920); ctx.stroke();
}

window.FILM = {
  title: 'THREE CHOCOLATE BARS', tag: 'EP 11 · JAPAN’S DEPARTMENT STORES',
  hotLines: [],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.post, draw: scenePost }, { start: T.first, draw: sceneFirst }, { start: T.why, draw: sceneWhy }, { start: T.hearts, draw: sceneHearts }, { start: T.cross, draw: sceneCross }, { start: T.kinds, draw: sceneKinds }, { start: T.isetan, draw: sceneIsetan }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.post, .5], [T.first, .5], [T.why, .5], [T.hearts, .5], [T.cross, .4], [T.kinds, .4], [T.isetan, .5], [T.tease, .6], [T.end, .3]],
  chapters: [[0, '01', 'THE FLOP'], [T.post, '02', 'A POSTCARD'], [T.first, '03', 'NOT THE FIRST'], [T.why, '04', 'WHY IT FLOPPED'], [T.hearts, '05', 'HEARTS'], [T.cross, '06', 'TAKING HOLD'], [T.isetan, '07', 'BACK AT ISETAN'], [T.tease, '08', 'NEXT']],
  hits: [[.8, 8, .3], [wt(3, '170') - .4, 10, .35], [wt(11, 'argued') - .4, 8, .3], [wt(23, '153') - .6, 8, .3]],
  flashes: [[T.hearts, .3], [T.isetan, .3], [T.end, .25]],
  events: {
    scene: [T.post, T.first, T.why, T.hearts, T.cross, T.kinds, T.isetan, T.tease, T.end],
    pop: [.3, wt(0, 'february') + .2, wt(1, 'sign') - .7, wt(2, 'three') - .4, wt(2, 'three') - .2, wt(2, 'three'), wt(2, 'one') - .3, wt(5, 'wrote') - .4, wt(6, '14') - .4, wt(6, 'flowers') - .3, wt(6, 'cards') - .3, wt(6, 'chocolate') - .5, wt(8, 'morozoff') - .5, wt(8, '1932') - .4, wt(9, '1936') - .4, wt(9, 'englishlanguage') - .4, wt(10, 'shrugged') - .5, wt(12, 'most') - .3, wt(13, 'declaring') - .3, wt(14, 'changed') - .5, wt(15, 'heartshaped') - .3, wt(17, 'crown') - .5, wt(18, '1960s') - .3, wt(19, 'took') - .4, wt(20, 'obligation') - .5, wt(21, 'friends') - .4, wt(21, 'yourself') - .7, T.isetan + .3, wt(23, '2026') - .4, wt(23, '24') - .3, wt(24, 'lottery') - .4, wt(25, 'japans') - .3, wt(26, 'rival') - .4, wt(26, 'rival') - .2, T.end + .1],
    stamp: [.55, wt(3, '170') - .4, T.post + .2, T.first + .2, wt(11, 'argued') - .4, T.why + .25, T.hearts + .3, wt(16, 'once') - .4, T.cross + .2, T.kinds + .2, wt(23, '153') - .6, wt(25, 'white') - .3],
    land: [T.post + .9], write: [T.post + .9, T.post + 3.2], album: [wt(14, 'changed') - .9 + .9], icing: [wt(15, 'names') - .9, wt(16, 'once') - .2], grid: [wt(23, '2026') - .4, wt(23, '153') + .5], hearts: [wt(19, 'took') - .4], soft: [T.tease + .15], end: [T.end],
  },
};
