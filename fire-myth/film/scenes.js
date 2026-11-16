// THE FIRE AND THE MYTH — episode 8: the 1932 Shirokiya fire and the story it left behind. Portrait-first (9:16). Helpers in lib.js.
// Tone rule: sober. No people are drawn in the fire scenes; the toll is shown as lights; the myth appears only as words on a card.
const EP = { n: 8, next: ['Christmas comes', 'to Japan'] };
const L = TL.length - 1;
const T = { dawn: 0, fire: LB(3), toll: LB(6), story: LB(8), spread: LB(12), record: LB(15), chute: LB(16), shop: LB(18), inoue: LB(19), slow: LB(21), fourteen: LB(22), tease: LB(24), end: TL[L].e + .15 };
const fadeIn = (t, t0, d = .5) => E.o3(P(t, t0, t0 + d));
function quiet(s, x, y, size, bgc, fg, a) { plate(s, x, y, size, bgc, fg, a, 0, 1); }                    // a plate that fades in without a bounce

// ------------------------------------------------------------ the store: an eight-storey stone block (generic, not the real facade)
const FH = 82, SW = 520, SX = 540 - SW / 2, G = 1340, FLOORS = 8, STOP = G - 70 - FLOORS * FH;
function store(c, win) {
  ctx.fillStyle = c.body; ctx.fillRect(SX, STOP, SW, G - STOP + 4); ctx.fillStyle = c.trim; ctx.fillRect(SX - 14, STOP - 18, SW + 28, 24); ctx.fillRect(SX + SW * .36, STOP - 70, SW * .28, 56); ctx.fillRect(SX - 6, G - 76, SW + 12, 10);
  for (let f = 0; f < FLOORS; f++) for (let k = 0; k < 7; k++) { const x = SX + 28 + k * 68, y = G - 70 - (f + 1) * FH + 16; ctx.fillStyle = win(f, k); rrect(x, y, 44, 54, [20, 20, 2, 2]); ctx.fill(); }
  ctx.fillStyle = c.door; for (let k = 0; k < 3; k++) rrect(SX + 60 + k * 150, G - 62, 100, 62, [8, 8, 0, 0]), ctx.fill();
}
const floorY = f => G - 70 - (f + 1) * FH + 43;                                                          // window centre of floor f (0 = ground)
function inkSmoke(tt, ox, oy, n, amp, a0, seed = 8) {
  const r = rng(seed);
  for (let i = 0; i < n; i++) { const sp = .05 + r() * .05, ph = (tt * sp + r()) % 1, bx = ox + (r() - .5) * 300, x = bx + ph * (120 + r() * 260) + Math.sin(ph * 6 + i) * 40, y = oy - ph * (oy - 440), rad = (50 + ph * 200) * amp, a = a0 * Math.sin(ph * Math.PI); const sg = ctx.createRadialGradient(x, y, 0, x, y, rad); sg.addColorStop(0, `rgba(18,16,24,${a})`); sg.addColorStop(1, 'rgba(18,16,24,0)'); ctx.fillStyle = sg; ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2); }
}
function lowTown(c1, c2, seed = 5) { const r = rng(seed); let x = -40; while (x < W + 40) { const w = 80 + r() * 110, h = 70 + r() * 150; if (x + w < SX - 10 || x > SX + SW + 10) { ctx.fillStyle = r() > .5 ? c1 : c2; ctx.fillRect(x, G - h, w, h + 6); } x += w + 5; } }

// ------------------------------------------------------------ 01 the morning
function sceneDawn(t) {
  const g = ctx.createLinearGradient(0, 0, 0, G); g.addColorStop(0, '#2a3050'); g.addColorStop(.62, '#c98f7c'); g.addColorStop(1, '#f1d6ae'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  { const sg = ctx.createRadialGradient(860, 1250, 0, 860, 1250, 520); sg.addColorStop(0, 'rgba(255,230,170,.55)'); sg.addColorStop(1, 'rgba(255,230,170,0)'); ctx.fillStyle = sg; ctx.fillRect(300, 700, 800, 700); }
  lowTown('#4a4458', '#5a5064');
  store({ body: '#cfc5b0', trim: '#a89c84', door: '#4a3a2c' }, (f, k) => (f * 7 + k * 3) % 5 === 0 ? '#f3d9a0' : '#56607a');
  ctx.fillStyle = 'rgba(40,36,60,.22)'; ctx.fillRect(SX, STOP - 70, SW * .45, G - STOP + 70);
  // holiday bunting and plain cloth banners (no lettering)
  const b0 = wt(2, 'decked') - .4, bu = P(t, b0, b0 + 1.4);
  if (bu > 0) { for (const sd of [-1, 1]) { const x0 = 540 + sd * (SW / 2 - 10), y0 = STOP - 10, x1 = 540 + sd * 520, y1 = G - 330; ctx.fillStyle = '#3a3440'; ctx.fillRect(x1 - 5, y1, 10, 330);
      ctx.strokeStyle = 'rgba(40,30,30,.7)'; ctx.lineWidth = 3; ctx.beginPath(); const n = Math.floor(16 * bu); for (let i = 0; i <= n; i++) { const u = i / 16, x = lerp(x0, x1, u), y = lerp(y0, y1, u) + 70 * Math.sin(u * Math.PI); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
      for (let i = 1; i < n; i++) { const u = i / 16, x = lerp(x0, x1, u), y = lerp(y0, y1, u) + 70 * Math.sin(u * Math.PI), sw = 5 * Math.sin(t * 2.2 + i); ctx.fillStyle = [K.red, '#f3ece0', K.must][i % 3]; ctx.beginPath(); ctx.moveTo(x - 14, y); ctx.lineTo(x + 14, y); ctx.lineTo(x + sw, y + 34); ctx.fill(); } }
    for (let k = 0; k < 3; k++) { const d = E.o3(P(t, b0 + .3 + k * .2, b0 + 1.2 + k * .2)), x = SX + 96 + k * 136 + (k === 1 ? 0 : 0); ctx.fillStyle = k === 1 ? '#f3ece0' : K.red; ctx.fillRect(x, STOP + 30, 56, 330 * d); ctx.fillStyle = k === 1 ? K.red : '#f3ece0'; ctx.fillRect(x, STOP + 30, 56, Math.min(14, 330 * d)); } }
  ctx.fillStyle = '#3a3440'; ctx.fillRect(-60, G, W + 120, 800); ctx.fillStyle = 'rgba(255,230,170,.12)'; ctx.fillRect(-60, G, W + 120, 14);
  const d0 = wt(1, 'morning') - .3; if (t > d0) quiet('16 DECEMBER 1932 · MORNING', 540, 588, 36, K.paper, K.ink, fadeIn(t, d0) * (1 - P(t, b0 + 1.6, b0 + 2.0)));
  const s0 = wt(2, 'shirokiya'); if (t > s0 - .3) { quiet('SHIROKIYA · NIHONBASHI', 440, 588, 40, K.paper, K.ink, fadeIn(t, b0 + 1.9)); ctx.save(); ctx.globalAlpha = fadeIn(t, b0 + 2.0); jp('白木屋', 850, 604, 46, K.paper, 'center', .06); ctx.restore(); }
  const c0 = wt(2, 'christmas') - .3; if (t > c0) quiet('CHRISTMAS AND YEAR-END SALE', 540, 1338, 40, K.must, K.ink, fadeIn(t, c0));
  topBand(540, 'rgba(18,16,34,.66)');
  plate('EP 8', 150, 268, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('THE FIRE', 540, 400, 124, t, .55, K.paper, 0, '#0c0a18'); popText('AND THE MYTH', 540, 510, 104, t, .8, K.must, 0, '#0c0a18');
}

// ------------------------------------------------------------ 02 the fire (no figures)
function fireSky() { const g = ctx.createLinearGradient(0, 0, 0, G); g.addColorStop(0, '#3a4256'); g.addColorStop(1, '#a39f98'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120); }
function sceneFire(t) {
  fireSky(); const tt = t - T.fire, f0 = wt(5, 'four') - .3, grow = E.io2(P(t, f0, f0 + 1.2));
  inkSmoke(tt + 9, 540, floorY(3) - 30, 34, .8 + .5 * grow, .16 * P(tt, .2, 2.5) + .12 * grow, 8);
  lowTown('#2a2a36', '#32323e');
  store({ body: '#1c1c26', trim: '#16161e', door: '#101016' }, (f, k) => { if (f === 3) { const fl = .55 + .25 * noise(t * 7 + k * 3) + .2 * P(tt, 0, 1.5); return `rgba(240,${Math.round(120 + 50 * fl)},60,${clamp(fl) * (1 - .5 * grow)})`; } return `rgba(200,200,190,${.16 * (1 - grow)})`; });
  inkSmoke(tt + 3, 540, floorY(3) - 20, 26, .55 + .6 * grow, .12 * P(tt, .2, 2.5) + .2 * grow, 21);
  ctx.fillStyle = '#22222c'; ctx.fillRect(-60, G, W + 120, 800);
  // bracket on the fourth floor
  const m0 = wt(3, 'fourth') - .4, ma = fadeIn(t, m0) * (1 - .6 * grow); if (ma > 0) { const y = floorY(3); ctx.save(); ctx.globalAlpha = ma; ctx.strokeStyle = K.must; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(SX - 24, y - 36); ctx.lineTo(SX - 44, y - 36); ctx.lineTo(SX - 44, y + 36); ctx.lineTo(SX - 24, y + 36); ctx.moveTo(SX - 44, y); ctx.lineTo(SX - 90, y); ctx.stroke(); ctx.restore(); quiet('4TH FLOOR', 110, y - 60, 34, K.must, K.ink, ma); quiet('TOY DEPARTMENT', 150, y + 64, 26, K.paper, K.ink, ma); }
  const c0 = wt(4, 'celluloid') - .3; if (t > c0) quiet('PILES OF CELLULOID TOYS', 540, 1338, 40, K.paper, K.ink, fadeIn(t, c0) * (1 - P(t, f0 - .2, f0 + .1)));
  if (t > f0) quiet('FOUR FLOORS BURNED', 540, 1338, 46, K.red, K.paper, fadeIn(t, f0));
  topBand(540, 'rgba(14,14,24,.7)');
  digits('9:23', t, T.fire + .3, 405, 180, K.paper, '#07070e'); const b0 = wt(3, 'fire') - .3; if (t > b0) quiet('FIRE BREAKS OUT', 540, 492, 42, K.red, K.paper, fadeIn(t, b0));
}
const LIGHTS = Array.from({ length: 14 }, (_, i) => [180 + (i % 7) * 120, 830 + Math.floor(i / 7) * 170]);
function sceneToll(t) {
  fillBG('#12131e', '#090a12'); const tt = t - T.toll;
  ctx.save(); ctx.globalAlpha = .35; store({ body: '#1a1a24', trim: '#16161e', door: '#101016' }, () => 'rgba(0,0,0,.4)'); ctx.restore(); inkSmoke(tt + 20, 540, floorY(3), 22, 1.1, .12, 8);
  ctx.fillStyle = 'rgba(9,10,18,.55)'; ctx.fillRect(0, 540, W, 900);
  const l0 = wt(6, 'fourteen') - .2, th = wt(7, 'thirteen') - .3, dim = E.io2(P(t, th, th + 1.2));
  LIGHTS.forEach(([x, y], i) => { const a = fadeIn(t, l0 + i * .13, .7); if (a <= 0) return; const fell = i !== 6, k = fell ? 1 - .45 * dim : 1, fl = .92 + .08 * noise(t * 3 + i * 9);
    const gl = ctx.createRadialGradient(x, y, 0, x, y, 70); gl.addColorStop(0, `rgba(255,226,160,${.5 * a * k * fl})`); gl.addColorStop(1, 'rgba(255,226,160,0)'); ctx.fillStyle = gl; ctx.fillRect(x - 70, y - 70, 140, 140);
    ctx.fillStyle = `rgba(255,240,205,${a * k})`; ctx.beginPath(); ctx.arc(x, y, 15, 0, TAU); ctx.fill(); if (fell && dim > 0) { ctx.strokeStyle = `rgba(243,232,207,${.55 * dim})`; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 34, 0, TAU); ctx.stroke(); } });
  const w0 = wt(6, 'all') - .3; if (t > w0) quiet('ALL OF THEM WORKED IN THE STORE', 540, 680, 38, K.paper, K.ink, fadeIn(t, w0));
  if (t > th) quiet('THIRTEEN FELL WHILE ESCAPING', 540, 1160, 38, K.ink2, K.paper, fadeIn(t, th));
  topBand(540, 'rgba(8,8,16,.7)');
  digits('14', t, l0 - .1, 405, 200, K.paper, '#05050a'); if (t > l0 + .3) quiet('16 DEC 1932 · 14 DEAD', 540, 492, 42, K.red, K.paper, fadeIn(t, l0 + .3));
}

// ------------------------------------------------------------ 03 the story: told as a claim, in words only
const CLAIM = [['Women in kimono,', 'with nothing underneath,'], ['let go of escape ropes', 'to hold their hems.'], ['So — it says — women', 'took up underwear.']];
function claimCard(x, y, shown, a = 1, sc = 1) {
  ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(sc, sc); ctx.fillStyle = 'rgba(0,0,0,.28)'; rrect(-272, -322, 560, 660, 8); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-280, -330, 560, 660, 8); ctx.fill(); ctx.strokeStyle = 'rgba(20,27,51,.25)'; ctx.lineWidth = 3; rrect(-262, -312, 524, 624, 4); ctx.stroke();
  txt('THE STORY, AS REPEATED', -240, -262, font(700, 21, F.m), 'rgba(20,27,51,.75)', 'left', 3); ctx.fillStyle = K.red; ctx.fillRect(-240, -240, 120, 5);
  CLAIM.forEach((ls, i) => { const k = clamp(shown[i]); if (k <= 0) return; ctx.save(); ctx.globalAlpha *= k; txt(String(i + 1), -240, -132 + i * 180, font(900, 60), 'rgba(220,74,51,.9)', 'left'); ls.forEach((s, j) => txt(s, -180, -150 + i * 180 + j * 50, font(700, 35), K.ink, 'left')); ctx.restore(); });
  ctx.restore();
}
function rope(x, y0, len, t, col, lw) { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.beginPath(); let ex = x, ey = y0; for (let i = 0; i <= 40; i++) { const u = i / 40; ex = x + u * u * (38 * Math.sin(t * .9) + 10 * Math.sin(t * 2.3 + u * 3)); ey = y0 + u * len; i ? ctx.lineTo(ex, ey) : ctx.moveTo(ex, ey); } ctx.stroke(); return [ex, ey]; }
function sceneStory(t) {
  fillBG('#b5ad9d', '#8f887a'); const r = rng(3); ctx.fillStyle = 'rgba(0,0,0,.035)'; for (let i = 0; i < 60; i++) ctx.fillRect(r() * W, 540 + r() * 860, 40 + r() * 160, 3);
  rope(928, 520, 760, t - .25, 'rgba(0,0,0,.14)', 20); const e = rope(900, 500, 760, t, '#8b6a3a', 16); ctx.strokeStyle = 'rgba(60,40,10,.5)'; ctx.lineWidth = 3; for (let i = 0; i < 24; i++) { const u = i / 24, x = 900 + u * u * (38 * Math.sin(t * .9) + 10 * Math.sin(t * 2.3 + u * 3)), y = 500 + u * 760; ctx.beginPath(); ctx.moveTo(x - 7, y - 6); ctx.lineTo(x + 7, y + 6); ctx.stroke(); }
  ctx.strokeStyle = '#8b6a3a'; ctx.lineWidth = 4; for (const d of [-12, 0, 12]) { ctx.beginPath(); ctx.moveTo(e[0], e[1]); ctx.lineTo(e[0] + d, e[1] + 30); ctx.stroke(); }
  claimCard(380, 970, [fadeIn(t, LS(9) - .1), fadeIn(t, LS(10) - .1), fadeIn(t, LS(11) - .1)], fadeIn(t, T.story + .3), 1.18);
  const c0 = wt(11, 'it') - .2; if (t > c0) quiet('A CLAIM', 620, 600, 44, K.red, K.paper, fadeIn(t, c0));
  topBand(540, 'rgba(24,22,30,.72)');
  popText('THE STORY', 540, 405, 140, t, T.story + .25, K.paper, 0, '#100e16'); const j0 = wt(8, 'japan') - .3; if (t > j0) quiet('JAPAN STILL REPEATS IT', 540, 494, 40, K.must, K.ink, fadeIn(t, j0));
}

// ------------------------------------------------------------ 04 how it spread: plain newsprint
const COLW = 196, COLX = [40, 246, 452, 658, 864];
function newsprint(scroll) {
  fillBG('#d9d1bd', '#c7bea8'); ctx.save(); ctx.beginPath(); ctx.rect(0, 540, W, 900); ctx.clip();
  COLX.forEach((x, c) => { const r = rng(40 + c); let y = 520 - (scroll % 2000); for (let i = 0; i < 220; i++) { const para = r() > .9; ctx.fillStyle = 'rgba(40,36,30,.42)'; if (y > 500 && y < 1420) ctx.fillRect(x, y, (COLW - 30) * (para ? .4 + r() * .4 : 1), 7); else r(); y += para ? 34 : 17; } ctx.fillStyle = 'rgba(40,36,30,.3)'; if (c) ctx.fillRect(x - 15, 540, 2, 900); });
  ctx.restore();
}
function sceneSpread(t) {
  const tt = t - T.spread, sc = tt * 26; newsprint(sc);
  const q0 = wt(13, 'managing') - .4, y1 = 1010 - (t - q0) * 26; if (t > q0) { const a = fadeIn(t, q0); ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(240,182,55,.5)'; ctx.fillRect(COLX[1] - 8, y1, COLW - 14, 190); ctx.strokeStyle = K.ink; ctx.lineWidth = 4; ctx.strokeRect(COLX[1] - 8, y1, COLW - 14, 190); ctx.restore(); quiet('MANAGING DIRECTOR, QUOTED', 360, y1 - 34, 32, K.ink, K.paper, a); }
  const e0 = wt(14, 'editorial') - .5, y2 = 1150 - (t - e0) * 26; if (t > e0) { const a = fadeIn(t, e0); ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(220,74,51,.28)'; ctx.fillRect(COLX[2] - 8, y2, COLW * 2 + 180, 150); ctx.strokeStyle = K.red; ctx.lineWidth = 5; ctx.strokeRect(COLX[2] - 8, y2, COLW * 2 + 180, 150); ctx.restore(); quiet('EDITORIAL', 760, y2 - 34, 36, K.red, K.paper, a); }
  const s0 = wt(14, 'scolded') - .3; if (t > s0) quiet('SCOLDED WOMEN FOR GOING WITHOUT DRAWERS', 540, 1250, 34, K.ink, K.paper, fadeIn(t, s0));
  quiet('ILLUSTRATION · NOT THE ACTUAL PAGE', 540, 572, 20, K.ink, K.paper, .9);
  topBand(540, 'rgba(24,22,30,.78)');
  const a0 = wt(13, 'tokyo') - .5, m0 = wt(14, 'may') - .3; ctx.save(); ctx.globalAlpha = 1 - P(t, a0 - .2, a0); popText('THE PAPERS', 540, 420, 132, t, T.spread + .2, K.paper, 0, '#100e16'); ctx.restore();
  popText('TOKYO ASAHI', 540, 405, 118, t, a0, K.paper, 0, '#100e16'); if (t > a0 + .2) { ctx.save(); ctx.globalAlpha = fadeIn(t, a0 + .2); jp('東京朝日新聞', 540, 296, 40, K.must, 'center', .05); ctx.restore(); }
  if (t > m0) quiet('7 MAY 1933', 540, 494, 46, K.must, K.ink, fadeIn(t, m0));
}

// ------------------------------------------------------------ 05 what the record shows
function sceneRecord(t) {
  fillBG('#23323a', '#111a20'); claimCard(540, 925, [1, 1, 1], 1, 1.08);
  stamp(t, wt(15, 'big') - .25, 540, 1332, 'A BIG EXAGGERATION', K.red, -.03, 52);
  topBand(540, 'rgba(10,18,22,.7)');
  popText('LATER RESEARCH', 540, 420, 104, t, T.record + .25, K.paper, 0, '#081014');
}
function sceneChute(t) {
  fillBG('#1d2a44', '#111a2e'); ctx.strokeStyle = 'rgba(243,232,207,.06)'; ctx.lineWidth = 2; for (let i = 0; i < 28; i++) { ctx.beginPath(); ctx.moveTo(i * 40, 540); ctx.lineTo(i * 40, 1400); ctx.stroke(); } for (let j = 0; j < 22; j++) { ctx.beginPath(); ctx.moveTo(0, 540 + j * 40); ctx.lineTo(W, 540 + j * 40); ctx.stroke(); }
  const ink = 'rgba(243,232,207,.9)', dr = P(t, T.chute, T.chute + 1.4); ctx.strokeStyle = ink; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  // wall with windows, ground
  ctx.beginPath(); ctx.moveTo(300, 560); ctx.lineTo(300, 1300); ctx.moveTo(40, 1300); ctx.lineTo(1040, 1300); ctx.stroke(); for (let i = 0; i < 4; i++) ctx.strokeRect(120, 610 + i * 170, 110, 110);
  // chute: a cloth tube from a window to the ground
  const A = [300, 700], B = [300 + 560 * dr, 700 + 560 * dr]; ctx.lineWidth = 6; for (const o of [-34, 34]) { ctx.beginPath(); ctx.moveTo(A[0] + (o > 0 ? 0 : 0), A[1] + o); ctx.lineTo(B[0] + o * -.7 + (o > 0 ? 0 : 0), B[1] + o * .7); ctx.stroke(); }
  ctx.lineWidth = 3; for (let i = 1; i < Math.floor(14 * dr); i++) { const u = i / 14, x = 300 + 560 * u, y = 700 + 560 * u; ctx.beginPath(); ctx.moveTo(x + 24 * u, y - 34 + 10 * u); ctx.lineTo(x - 24 * u, y + 34 - 10 * u); ctx.stroke(); }
  if (dr >= 1) { ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(884, 1236); ctx.lineTo(960, 1300); ctx.moveTo(836, 1284); ctx.lineTo(780, 1300); ctx.stroke(); }
  const g0 = wt(17, 'got') - .3; if (t > g0) { ctx.save(); ctx.globalAlpha = fadeIn(t, g0); ctx.setLineDash([26, 30]); ctx.lineDashOffset = -(t - g0) * 120; ctx.strokeStyle = K.must; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(320, 720); ctx.lineTo(850, 1250); ctx.stroke(); ctx.restore(); quiet('HIS CREW GOT THEM OUT', 600, 1348, 44, K.must, K.ink, fadeIn(t, g0)); }
  label('RESCUE CHUTE · SIMPLE DIAGRAM', 700, 600, .8, K.paper, 18);
  const r0 = wt(16, 'reluctant') - .4; if (t > r0) { quiet('A FIREFIGHTER RECALLED:', 700, 720, 30, K.paper, K.ink, fadeIn(t, T.chute + .4)); quiet('RELUCTANT TO SLIDE', 720, 790, 40, K.ink2, K.paper, fadeIn(t, r0)); quiet('DOWN IN KIMONO', 760, 860, 40, K.ink2, K.paper, fadeIn(t, r0 + .15)); } else quiet('A FIREFIGHTER RECALLED:', 700, 720, 30, K.paper, K.ink, fadeIn(t, T.chute + .4));
  topBand(540, 'rgba(10,14,30,.7)');
  popText('THE RECORD', 540, 420, 132, t, T.chute + .2, K.paper, 0, '#070a16');
}
function sceneShop(t) {
  fillBG('#3a3440', '#1e1a24'); const tt = t - T.shop, pan = -150 * E.io2(P(tt, 0, 5.2));
  ctx.save(); ctx.translate(pan, 0);
  // awning, frame, window
  ctx.fillStyle = '#2a2430'; ctx.fillRect(-40, 540, 1400, 900); for (let i = 0; i < 16; i++) { ctx.fillStyle = i % 2 ? '#7c2a22' : '#e9dcbb'; ctx.fillRect(-20 + i * 86, 560, 86, 90); } ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(-20, 640, 1400, 14);
  const wg = ctx.createLinearGradient(0, 690, 0, 1290); wg.addColorStop(0, '#f3d9a0'); wg.addColorStop(1, '#c9955a'); ctx.fillStyle = wg; ctx.fillRect(60, 690, 1180, 600);
  // bolts of cloth, folded kimono, hanging lengths (no figures, no mannequins)
  const cols = ['#7c2a22', '#1f5a57', '#24407a', '#f0b637', '#5b3a20', '#b5a2c8', '#e9dcbb'];
  for (let i = 0; i < 9; i++) { const x = 110 + i * 126, c = cols[i % 7]; ctx.fillStyle = c; ctx.fillRect(x, 700, 70, 250 + (i * 37) % 90); ctx.fillStyle = 'rgba(255,255,255,.14)'; ctx.fillRect(x, 700, 12, 250 + (i * 37) % 90); ctx.fillStyle = 'rgba(0,0,0,.18)'; for (let k = 0; k < 4; k++) ctx.fillRect(x + 20 + k * 12, 700, 3, 250 + (i * 37) % 90); }
  ctx.fillStyle = '#5b3a20'; ctx.fillRect(60, 1150, 1180, 16);
  for (let i = 0; i < 7; i++) { const x = 100 + i * 166; for (let k = 0; k < 3; k++) { ctx.fillStyle = cols[(i + k * 2) % 7]; rrect(x, 1118 - k * 30, 130, 30, 6); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.fillRect(x, 1144 - k * 30, 130, 4); } }
  for (let i = 0; i < 8; i++) { const x = 90 + i * 148; ctx.fillStyle = cols[(i * 3 + 1) % 7]; ctx.beginPath(); ctx.ellipse(x + 50, 1240, 52, 30, 0, 0, TAU); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.3)'; ctx.beginPath(); ctx.ellipse(x + 50, 1240, 16, 9, 0, 0, TAU); ctx.fill(); }
  ctx.strokeStyle = '#3a2616'; ctx.lineWidth = 18; ctx.strokeRect(60, 690, 1180, 600); ctx.lineWidth = 10; for (const x of [450, 850]) { ctx.beginPath(); ctx.moveTo(x, 690); ctx.lineTo(x, 1290); ctx.stroke(); }
  ctx.fillStyle = 'rgba(255,255,255,.07)'; ctx.beginPath(); ctx.moveTo(200, 690); ctx.lineTo(420, 690); ctx.lineTo(180, 1290); ctx.lineTo(-40, 1290); ctx.fill();
  ctx.restore(); ctx.fillStyle = '#16131c'; ctx.fillRect(0, 1300, W, 800);
  // one in a hundred
  const o0 = wt(18, 'one') - .5, ga = fadeIn(t, o0 - 1.2); if (ga > 0) { ctx.save(); ctx.globalAlpha = ga; ctx.translate(770, 990); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-172, -172, 360, 400, 12); ctx.fill(); ctx.fillStyle = '#16131c'; rrect(-180, -180, 360, 400, 12); ctx.fill();
    for (let i = 0; i < 100; i++) { const on = i === 43 && t > o0; ctx.fillStyle = on ? K.must : 'rgba(243,232,207,.3)'; rrect(-150 + (i % 10) * 30, -150 + Math.floor(i / 10) * 30, 22, 22, 4); ctx.fill(); } txt('ABOUT 1 IN 100', 0, 196, font(700, 22, F.m), K.paper, 'center', 3); ctx.restore(); }
  const h0 = wt(18, 'historian') - .5; if (t > h0) quiet('ONE DRESS HISTORIAN’S ESTIMATE', 400, 720, 32, K.paper, K.ink, fadeIn(t, h0));
  topBand(540, 'rgba(20,16,26,.74)');
  digits('~1%', t, o0 - .3, 405, 200, K.must, '#0a080e'); const d0 = wt(18, 'drawer') - .3; if (t > d0) quiet('DRAWER-WEARING AFTER THE FIRE', 540, 494, 38, K.paper, K.ink, fadeIn(t, d0));
}

// ------------------------------------------------------------ 06 Inoue's verdict
function book(x, y, w, h, col, bars) { ctx.fillStyle = 'rgba(0,0,0,.35)'; rrect(x + 10, y + 12, w, h, 8); ctx.fill(); ctx.fillStyle = col; rrect(x, y, w, h, 8); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(x, y, w, h * .14); ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(x + w * .06, y, 6, h); ctx.fillRect(x + w * .92, y, 6, h);
  ctx.fillStyle = 'rgba(243,232,207,.55)'; bars.forEach(([bx, bw]) => { rrect(x + w * bx, y + h * .38, w * bw, h * .24, 6); ctx.fill(); }); }
function sceneInoue(t) {
  fillBG('#2a1c14', '#120c08'); const lg = ctx.createRadialGradient(540, 760, 60, 540, 900, 760); lg.addColorStop(0, 'rgba(255,214,150,.3)'); lg.addColorStop(1, 'rgba(255,214,150,0)'); ctx.fillStyle = lg; ctx.fillRect(0, 540, W, 900);
  ctx.fillStyle = '#4a3020'; ctx.fillRect(-60, 1180, W + 120, 900); ctx.fillStyle = '#6b4a2c'; ctx.fillRect(-60, 1166, W + 120, 22);
  book(250, 1070, 640, 100, '#33483f', [[.12, .2], [.36, .3]]); book(190, 950, 720, 122, K.ink2, [[.12, .34], [.5, .14], [.68, .2]]); book(330, 862, 520, 90, '#7c2a22', [[.14, .4]]);
  label('TITLES LEFT UNREADABLE', 540, 1240, .7, K.paper, 18);
  const e0 = wt(19, 'episode') - .4; if (t > e0) quiet('FROM EPISODE 1: THE SHOES-OFF BOOK', 540, 690, 34, K.paper, K.ink, fadeIn(t, e0));
  topBand(600, 'rgba(14,8,6,.72)');
  nameTag(t, Math.max(T.inoue + .2, wt(19, 'inoue') - .3), 310, 'INOUE SHŌICHI', '井上章一', 'SCHOLAR');
  const d0 = wt(20, 'dubious') - .35; popText('“DUBIOUS”', 540, 510, 140, t, d0, K.must, 0, '#0a0604');
}
function sceneSlow(t) {
  fillBG('#23323a', '#111a20'); const X0 = 110, X1 = 980, Y0 = 1230, u = E.io2(P(t, T.slow + .3, wt(21, 'after') + .9));
  ctx.strokeStyle = 'rgba(243,232,207,.5)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(X0, 660); ctx.lineTo(X0, Y0); ctx.lineTo(X1, Y0); ctx.stroke();
  const wx = lerp(X0, X1, .56); ctx.fillStyle = 'rgba(243,232,207,.08)'; ctx.fillRect(wx, 660, 70, Y0 - 660); label('THE WAR', wx + 35, 648, .7, K.paper, 17);
  const fy = v => Y0 - 30 - 470 / (1 + Math.exp(-(v - .74) * 13)); ctx.strokeStyle = K.must; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); let lx = X0, ly = fy(0); for (let i = 0; i <= 80 * u; i++) { const v = i / 80; lx = lerp(X0, X1, v); ly = fy(v); i ? ctx.lineTo(lx, ly) : ctx.moveTo(lx, ly); } ctx.stroke(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(lx, ly, 14, 0, TAU); ctx.fill();
  ctx.fillStyle = K.red; ctx.beginPath(); ctx.arc(X0 + 40, fy(.045), 12, 0, TAU); ctx.fill(); quiet('THE FIRE, 1932', X0 + 150, fy(.045) - 62, 28, K.red, K.paper, fadeIn(t, T.slow + .3)); label('NO SUDDEN JUMP', X0 + 310, fy(.2) + 60, fadeIn(t, T.slow + .9), K.paper, 20);
  const a0 = wt(21, 'after') - .3; if (t > a0) quiet('MOSTLY AFTER THE WAR', 730, 760, 36, K.must, K.ink, fadeIn(t, a0));
  txt('UNDERWEAR-WEARING', X0 + 16, 700, font(700, 18, F.m), 'rgba(243,232,207,.7)', 'left', 3); quiet('SCHEMATIC · NOT DATA', 540, 1310, 22, K.ink, K.paper, .9);
  topBand(540, 'rgba(10,18,22,.7)');
  popText('SLOWLY', 540, 405, 150, t, Math.max(T.slow + .2, wt(21, 'slowly') - .5), K.paper, 0, '#081014'); const c0 = wt(21, 'changing') - .4; if (t > c0) quiet('WITH CHANGING LIVES', 540, 494, 40, K.must, K.ink, fadeIn(t, c0));
}

// ------------------------------------------------------------ 07 what isn't in doubt
function chrysanthemum(x, y, s, t) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(.03 * Math.sin(t * .6));
  ctx.strokeStyle = '#4a6650'; ctx.lineWidth = 14 * s; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 30 * s); ctx.quadraticCurveTo(26 * s, 200 * s, -6 * s, 400 * s); ctx.stroke();
  ctx.fillStyle = '#4a6650'; for (const [lx, ly, rot] of [[18, 190, .7], [2, 290, -.8]]) { ctx.save(); ctx.translate(lx * s, ly * s); ctx.rotate(rot); ctx.beginPath(); ctx.ellipse(52 * s, 0, 56 * s, 20 * s, 0, 0, TAU); ctx.fill(); ctx.restore(); }
  const rings = [[26, 168, 30, '#dcd8cc'], [22, 140, 28, '#e8e5da'], [18, 110, 26, '#f1efe6'], [14, 80, 22, '#f8f7f1'], [9, 50, 18, '#ffffff']];
  rings.forEach(([n, len, wd, col], k) => { for (let i = 0; i < n; i++) { ctx.save(); ctx.rotate(i * TAU / n + k * .13); ctx.fillStyle = col; ctx.strokeStyle = 'rgba(40,40,60,.16)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, -len * s * .56, wd * s * .5, len * s * .5, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore(); } });
  ctx.fillStyle = '#f3ecc8'; ctx.beginPath(); ctx.arc(0, 0, 16 * s, 0, TAU); ctx.fill(); ctx.restore();
}
function sceneFourteen(t) {
  fillBG('#0d0e16', '#06070c'); const a = fadeIn(t, T.fourteen + .2, 1.2);
  const gl = ctx.createRadialGradient(540, 900, 0, 540, 900, 560); gl.addColorStop(0, `rgba(200,205,230,${.14 * a})`); gl.addColorStop(1, 'rgba(200,205,230,0)'); ctx.fillStyle = gl; ctx.fillRect(0, 300, W, 1300);
  ctx.save(); ctx.globalAlpha = a; chrysanthemum(540, 880, 1.15, t); ctx.restore();
  topBand(540, 'rgba(4,4,8,.5)');
  const f0 = wt(23, 'fourteen') - .3; if (t > f0) { ctx.save(); ctx.globalAlpha = fadeIn(t, f0, .8); big('14', 540, 440, 230, K.paper, 'center', '#030306'); ctx.restore(); label('16 DECEMBER 1932 · SHIROKIYA', 540, 500, fadeIn(t, f0 + .5), K.paper, 22); }
}

// ------------------------------------------------------------ 08 tease: shop-window lights fading up
function sceneTease(t) {
  fillBG('#141a34', '#0a0c1a'); const tt = t - T.tease, up = E.io2(P(tt, .2, 3.2));
  lowTown('#0e1226', '#121732', 9);
  store({ body: '#1a1f3a', trim: '#141830', door: '#0c0f20' }, (f, k) => { const on = P(up * 9 - f - (k % 3) * .3, 0, 1); return `rgba(255,${Math.round(205 + 20 * Math.sin(k))},130,${.12 + .8 * on})`; });
  // show windows at street level and strings of lights
  for (let k = 0; k < 3; k++) { const x = SX + 60 + k * 150; const g = ctx.createRadialGradient(x + 50, G - 30, 0, x + 50, G - 30, 150); g.addColorStop(0, `rgba(255,214,140,${.55 * up})`); g.addColorStop(1, 'rgba(255,214,140,0)'); ctx.fillStyle = g; ctx.fillRect(x - 100, G - 180, 300, 260); ctx.fillStyle = `rgba(255,226,160,${.2 + .8 * up})`; rrect(x, G - 62, 100, 62, [8, 8, 0, 0]); ctx.fill(); }
  for (const sd of [-1, 1]) for (let i = 1; i < 16; i++) { const u = i / 16, x = lerp(540 + sd * (SW / 2 - 10), 540 + sd * 520, u), y = lerp(STOP - 10, G - 330, u) + 70 * Math.sin(u * Math.PI), on = P(up * 20 - i, 0, 1) * (.7 + .3 * Math.sin(t * 3 + i * 1.7)); ctx.fillStyle = `rgba(${i % 2 ? '255,214,140' : '240,120,100'},${on})`; ctx.beginPath(); ctx.arc(x, y, 9, 0, TAU); ctx.fill(); }
  ctx.fillStyle = '#0a0c1a'; ctx.fillRect(-60, G, W + 120, 800); ctx.fillStyle = `rgba(255,214,140,${.1 * up})`; ctx.fillRect(SX - 80, G, SW + 160, 60);
  const h0 = wt(25, 'how') - .3; if (t > h0) quiet('HOW CHRISTMAS CAME TO JAPAN', 540, 1338, 40, K.must, K.ink, fadeIn(t, h0));
  topBand(540, 'rgba(8,10,24,.66)');
  popText('WHY CHRISTMAS?', 540, 405, 108, t, Math.max(T.tease + .25, wt(24, 'why') - .3), K.paper, 0, '#05060e'); const c0 = wt(24, 'dressed') - .3; if (t > c0) quiet('A TOKYO STORE · 1932', 540, 494, 40, K.must, K.ink, fadeIn(t, c0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .02);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n, .25)); plate('EPISODE 9', 880, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 820 + i * 125 + 30 * (1 - a), 104, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 1020); ctx.lineTo(80 + 600 * u, 1020); ctx.stroke();
}

window.FILM = {
  title: 'THE FIRE AND THE MYTH', tag: 'EP 8 · JAPAN’S DEPARTMENT STORES',
  hotLines: [],
  scenes: [{ start: 0, draw: sceneDawn }, { start: T.fire, draw: sceneFire }, { start: T.toll, draw: sceneToll }, { start: T.story, draw: sceneStory }, { start: T.spread, draw: sceneSpread }, { start: T.record, draw: sceneRecord }, { start: T.chute, draw: sceneChute }, { start: T.shop, draw: sceneShop }, { start: T.inoue, draw: sceneInoue }, { start: T.slow, draw: sceneSlow }, { start: T.fourteen, draw: sceneFourteen }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.fire, .7], [T.toll, .8], [T.story, .7], [T.spread, .5], [T.record, .5], [T.chute, .5], [T.shop, .5], [T.inoue, .5], [T.slow, .5], [T.fourteen, .9], [T.tease, .9], [T.end, .4]],
  chapters: [[0, '01', 'THE MORNING'], [T.fire, '02', 'THE FIRE'], [T.story, '03', 'THE STORY'], [T.spread, '04', 'HOW IT SPREAD'], [T.record, '05', 'THE RECORD'], [T.inoue, '06', 'THE VERDICT'], [T.fourteen, '07', 'FOURTEEN'], [T.tease, '08', 'NEXT']],
  hits: [], flashes: [],
  events: {
    scene: [T.fire, T.toll, T.story, T.spread, T.record, T.chute, T.shop, T.inoue, T.slow, T.fourteen, T.tease, T.end],
    pop: [wt(13, 'managing') - .4, wt(14, 'may') - .3, wt(14, 'editorial') - .5, wt(14, 'scolded') - .3, wt(16, 'reluctant') - .4, wt(17, 'got') - .3, wt(18, 'historian') - .5, wt(18, 'one') - .5, wt(19, 'episode') - .4, wt(21, 'after') - .3, wt(25, 'how') - .3, T.end + .1],
    soft: [.3, wt(1, 'morning') - .3, wt(2, 'christmas') - .3, wt(3, 'fourth') - .4, wt(4, 'celluloid') - .3, wt(8, 'japan') - .3, LS(9) - .1, LS(10) - .1, LS(11) - .1, wt(19, 'inoue') - .3],
    stamp: [.55, T.fire + .3, T.story + .25, wt(13, 'tokyo') - .5, wt(15, 'big') - .25, wt(20, 'dubious') - .35],
    bunting: [wt(2, 'decked') - .4], smoke: [T.fire, wt(5, 'four') - .3], lights: LIGHTS.map((_, i) => wt(6, 'fourteen') - .2 + i * .13), dim: [wt(7, 'thirteen') - .3],
    paper: [T.spread, T.record], draw: [T.chute, T.slow + .3], flower: [T.fourteen + .2, wt(23, 'fourteen') - .3], glow: [T.tease + .2], end: [T.end],
  },
};
