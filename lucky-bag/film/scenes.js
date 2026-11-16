// THE LUCKY BAG — episode 10: fukubukuro. Portrait-first (9:16). Helpers in lib.js.
// Tone: light and playful; every origin claim stays attributed on screen ("the usual story", "?", "one version says") because the records are thin.
const EP = { n: 10, next: ['Three', 'chocolate bars'] };
const L = TL.length - 1;
const T = { hook: 0, queue: LB(3), first: LB(4), scraps: LB(7), noren: LB(9), prize: LB(12), left: LB(14), bubble: LB(17), later: LB(18), closed: LB(20), tease: LB(23), end: TL[L].e + .15 };
const fadeIn = (t, t0, d = .5) => E.o3(P(t, t0, t0 + d));
function quiet(s, x, y, size, bgc, fg, a) { plate(s, x, y, size, bgc, fg, a, 0, 1); }
function hatMan(x, y, s, col) { mini(x, y, s, col); ctx.fillStyle = col; rrect(x - 13 * s, y - 126 * s, 26 * s, 18 * s, 4 * s); ctx.fill(); rrect(x - 22 * s, y - 111 * s, 44 * s, 6 * s, 3 * s); ctx.fill(); }
const BAGRED = '#c9382a';

// ------------------------------------------------------------ bags
function luckyBag(x, y, s, q, t, col = BAGRED, dark = '#a82c20') {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(10, 8, 190, 22, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-170, 0); ctx.lineTo(-150, -380); ctx.lineTo(150, -380); ctx.lineTo(170, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.14)'; ctx.beginPath(); ctx.moveTo(100, -380); ctx.lineTo(150, -380); ctx.lineTo(170, 0); ctx.lineTo(120, 0); ctx.fill();
  ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(-150, -380); ctx.lineTo(-110, -450); ctx.lineTo(110, -450); ctx.lineTo(150, -380); ctx.fill(); ctx.fillStyle = '#f3ecd8'; ctx.fillRect(-156, -396, 312, 26);
  ctx.strokeStyle = '#c9a23c'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-30, -384); ctx.quadraticCurveTo(-70, -330, -40, -300); ctx.moveTo(30, -384); ctx.quadraticCurveTo(70, -330, 44, -296); ctx.stroke(); ctx.beginPath(); ctx.ellipse(-36, -404, 34, 16, -.4, 0, TAU); ctx.ellipse(36, -404, 34, 16, .4, 0, TAU); ctx.stroke();
  if (q > 0) { ctx.save(); ctx.translate(0, -170); ctx.scale(q, q); ctx.rotate(.05 * Math.sin(t * 2)); ctx.fillStyle = '#f3ecd8'; ctx.beginPath(); ctx.arc(0, 0, 104, 0, TAU); ctx.fill(); txt('?', 0, 62, font(900, 180), col, 'center'); ctx.restore(); }
  ctx.restore();
}
// plain cloth sack with a tied neck; open 0..1 loosens the mouth
function clothBag(x, y, s, open, col = '#e9dcbb') {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(8, 6, 210, 26, 0, 0, TAU); ctx.fill();
  const m = 60 + 70 * open; ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-m, -400); ctx.quadraticCurveTo(-250, -300, -220, -80); ctx.quadraticCurveTo(-200, 0, 0, 0); ctx.quadraticCurveTo(200, 0, 220, -80); ctx.quadraticCurveTo(250, -300, m, -400); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(120,90,40,.14)'; ctx.beginPath(); ctx.moveTo(90, -380); ctx.quadraticCurveTo(250, -300, 220, -80); ctx.quadraticCurveTo(200, 0, 60, 0); ctx.quadraticCurveTo(170, -150, 90, -380); ctx.fill();
  ctx.fillStyle = '#2a1c14'; ctx.beginPath(); ctx.ellipse(0, -400, m, 16 + 22 * open, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.beginPath(); ctx.ellipse(0, -400, m, 16 + 22 * open, 0, 0, TAU); ctx.stroke();
  if (open < .5) { ctx.strokeStyle = '#7c2a22'; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-m - 4, -372); ctx.lineTo(m + 4, -372); ctx.moveTo(m, -372); ctx.quadraticCurveTo(m + 60, -330, m + 30, -280); ctx.stroke(); }
  ctx.restore();
}

// ------------------------------------------------------------ 01 the lucky bag
function bellShape(x, y, s, sw) { ctx.save(); ctx.translate(x, y); ctx.rotate(sw); ctx.strokeStyle = '#8a6a1e'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, -60 * s); ctx.lineTo(0, 0); ctx.stroke(); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(-14 * s, 0); ctx.quadraticCurveTo(-18 * s, 50 * s, -44 * s, 70 * s); ctx.lineTo(44 * s, 70 * s); ctx.quadraticCurveTo(18 * s, 50 * s, 14 * s, 0); ctx.closePath(); ctx.fill(); ctx.fillStyle = K.must; ctx.beginPath(); ctx.arc(0, 78 * s, 9 * s, 0, TAU); ctx.fill(); ctx.restore(); }
function sceneHook(t) {
  fillBG('#f3e8cf', '#e6d3a8'); rays(540, 1000, t, .06, .08, '201,56,42'); ctx.fillStyle = '#c9a66b'; ctx.fillRect(-60, 1300, W + 120, 800);
  // episode 9's paper bells lift away
  const up = E.i2(P(t, .9, 2.4)); if (up < 1) for (let i = 0; i < 5; i++) bellShape(i * 270, 600 - 320 * up, 1.15, .12 * Math.sin(t * 2.2 + i));
  const b0 = wt(1, 'sealed') - 1.4; for (let i = 0; i < 5; i++) { const k = pop(t, b0 + i * .16, .45); if (k > 0) luckyBag(130 + i * 205, 1310 - (i === 2 ? 0 : 6), (i === 2 ? .66 : .5) * k, i === 2 ? pop(t, wt(1, 'mystery') - .3) : 0, t, i % 2 ? '#b02c22' : BAGRED); }
  const n0 = wt(0, 'new') - .3; if (t > n0) plate('AFTER CHRISTMAS: THE NEW YEAR SALE', 540, 600, 36, K.ink, K.paper, 1 - P(t, LS(2) - .3, LS(2)), -.012, pop(t, n0));
  const s0 = wt(1, 'sealed') - .3; if (t > s0) plate('SEALED', 250, 760, 54, K.red, K.paper, 1, -.05, pop(t, s0)); const m0 = wt(1, 'mystery') - .3; if (t > m0) plate('MYSTERY', 800, 800, 54, K.ink, K.paper, 1, .04, pop(t, m0));
  const f0 = wt(2, 'fukubukuro') - .4; if (t > f0) { ctx.save(); ctx.globalAlpha = P(t, f0, f0 + .25); jp('福袋', 540, 700, 130, BAGRED, 'center', .05); ctx.restore(); plate('FUKUBUKURO = LUCKY BAGS', 540, 1338, 44, K.must, K.ink, 1, .012, pop(t, f0 + .2)); }
  topBand(540, 'rgba(60,20,12,.74)');
  plate('EP 10', 160, 268, 44, K.red, K.paper, P(t, .3, .4), -.04, pop(t, .3));
  popText('THE LUCKY BAG', 540, 440, 122, t, .55, K.paper, -.015, '#2a0b08');
}
function sceneQueue(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, '#232d55'); g.addColorStop(.7, '#c98f7c'); g.addColorStop(1, '#f1d6ae'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.fillStyle = '#2a2a3c'; ctx.fillRect(700, 600, 440, 720); ctx.fillStyle = '#1c1c2a'; ctx.fillRect(690, 580, 460, 30); for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) { ctx.fillStyle = 'rgba(255,220,150,.35)'; rrect(730 + i * 120, 640 + j * 130, 70, 90, [35, 35, 3, 3]); ctx.fill(); } ctx.fillStyle = '#12121c'; rrect(760, 1100, 200, 220, [10, 10, 0, 0]); ctx.fill(); ctx.fillStyle = BAGRED; ctx.fillRect(740, 1060, 240, 34);
  ctx.fillStyle = '#1c1c2a'; ctx.fillRect(-60, 1320, W + 120, 800);
  for (let i = 0; i < 11; i++) { const k = pop(t, T.queue + i * .07), x = 720 - i * 66, c = i % 2 ? '#14141e' : '#1c1c2a'; if (k <= 0) continue; (i % 3 === 1 ? hatMan : mini)(x, 1350 + (i % 2) * 10, 2.0 * k, c); const ph = ((t * .5 + i * .37) % 1); ctx.fillStyle = `rgba(255,255,255,${.22 * Math.sin(ph * Math.PI)})`; ctx.beginPath(); ctx.arc(x + 26 + ph * 20, 1150 - ph * 40, 10 + ph * 12, 0, TAU); ctx.fill(); }
  topBand(540, 'rgba(18,16,34,.66)');
  popText('QUEUED', 540, 400, 130, t, T.queue + .2, K.paper, -.015, '#0c0a18'); popText('FOR HOURS', 540, 512, 120, t, wt(3, 'queued') + .1, K.must, -.015, '#0c0a18');
}

// ------------------------------------------------------------ 02 the first sale: print-style street
function lantern(x, y, s, lit, t, i) { ctx.strokeStyle = '#2a2420'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y - 46 * s); ctx.lineTo(x, y - 70 * s); ctx.stroke(); if (lit > 0) { const g = ctx.createRadialGradient(x, y, 0, x, y, 130 * s); g.addColorStop(0, `rgba(255,214,140,${.5 * lit * (.9 + .1 * noise(t * 5 + i * 7))})`); g.addColorStop(1, 'rgba(255,214,140,0)'); ctx.fillStyle = g; ctx.fillRect(x - 130 * s, y - 130 * s, 260 * s, 260 * s); }
  ctx.fillStyle = lit > .5 ? '#fbe6ae' : '#b9ae98'; ctx.beginPath(); ctx.ellipse(x, y, 34 * s, 46 * s, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#2a2420'; ctx.fillRect(x - 20 * s, y - 50 * s, 40 * s, 8 * s); ctx.fillRect(x - 20 * s, y + 42 * s, 40 * s, 8 * s); ctx.strokeStyle = 'rgba(42,36,32,.35)'; ctx.lineWidth = 2; for (let k = -2; k <= 2; k++) { ctx.beginPath(); ctx.moveTo(x - 32 * s, y + k * 14 * s); ctx.lineTo(x + 32 * s, y + k * 14 * s); ctx.stroke(); } ctx.strokeStyle = '#2a2420'; }
function sceneFirst(t) {
  fillBG('#e9dcbb', '#e2d2aa'); const sg = ctx.createLinearGradient(0, 540, 0, 900); sg.addColorStop(0, '#16284a'); sg.addColorStop(1, 'rgba(36,64,122,.15)'); ctx.fillStyle = sg; ctx.fillRect(0, 540, W, 370);
  const l0 = wt(6, 'lantern') - 1.6; ctx.lineJoin = 'round'; ctx.strokeStyle = '#2a2420'; ctx.lineWidth = 5;
  for (let i = 0; i < 3; i++) { const x = -40 + i * 390, w = 370; ctx.fillStyle = '#3a4a5a'; ctx.beginPath(); ctx.moveTo(x - 20, 860); ctx.lineTo(x + 40, 760); ctx.lineTo(x + w - 40, 760); ctx.lineTo(x + w + 20, 860); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.lineWidth = 2; for (let k = 1; k < 9; k++) { ctx.beginPath(); ctx.moveTo(x + k * w / 9, 764); ctx.lineTo(x - 20 + k * (w + 40) / 9, 858); ctx.stroke(); } ctx.lineWidth = 5;
    ctx.fillStyle = '#b9a07a'; ctx.fillRect(x, 860, w, 420); ctx.strokeRect(x, 860, w, 420); ctx.fillStyle = '#5b3a20'; ctx.fillRect(x + 20, 1000, w - 40, 280); ctx.fillStyle = `rgba(255,214,140,${.25 + .55 * fadeIn(t, l0 + i * .3, 1)})`; ctx.fillRect(x + 30, 1010, w - 60, 270);
    for (let p = 0; p < 4; p++) { const px = x + 24 + p * (w - 48) / 4, sw = 5 * Math.sin(t * 1.4 + i + p); ctx.fillStyle = ['#24407a', '#7c2a22', '#274a48'][i]; ctx.beginPath(); ctx.moveTo(px, 880); ctx.lineTo(px + (w - 48) / 4 - 4, 880); ctx.lineTo(px + (w - 48) / 4 - 4 + sw, 1040); ctx.lineTo(px + sw, 1040); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.fillStyle = 'rgba(243,232,207,.8)'; ctx.fillRect(px + 14 + sw * .5, 930, (w - 48) / 4 - 32, 10); }
    ctx.fillStyle = '#5b3a20'; ctx.fillRect(x + 10, 868, w - 20, 14); }
  ctx.fillStyle = '#c9b071'; ctx.fillRect(-20, 1280, 1120, 300); ctx.beginPath(); ctx.moveTo(-20, 1280); ctx.lineTo(1100, 1280); ctx.stroke();
  for (let i = 0; i < 7; i++) lantern(90 + i * 150, 930 + (i % 2) * 14, 1, fadeIn(t, l0 + i * .18, .5), t, i);
  for (let i = 0; i < 6; i++) { const sp = (i % 2 ? 1 : -1) * (30 + i * 6), x = ((i * 190 + (t - T.first) * sp + 2000) % 1300) - 110; mini(x, 1340 + (i % 3) * 12, 1.8, ['#24407a', '#5b2a30', '#274a48', '#3a3f52'][i % 4]); ctx.fillStyle = '#fbe6ae'; ctx.beginPath(); ctx.ellipse(x + 44, 1260 + (i % 3) * 12, 12, 17, 0, 0, TAU); ctx.fill(); ctx.stroke(); }
  const p0 = wt(5, 'print') - .4; if (t > p0) plate('A LATE-EDO PRINT: SHINSAIBASHI, OSAKA', 540, 610, 34, K.paper, K.ink, 1, -.012, pop(t, p0));
  quiet('ILLUSTRATION · NOT THE ACTUAL PRINT', 540, 700, 20, K.ink, K.paper, .9);
  topBand(540, 'rgba(14,20,44,.7)');
  const h0 = wt(4, 'first') - .5; popText('HATSUURI', 540, 405, 132, t, Math.max(T.first + .2, h0), K.paper, -.015, '#070a18'); if (t > h0 + .3) { ctx.save(); ctx.globalAlpha = fadeIn(t, h0 + .3); jp('初売り', 540, 296, 46, K.must, 'center', .05); ctx.restore(); }
  const d0 = wt(6, '2') - .3, o0 = wt(4, 'old') - .3; if (t > o0) plate('THE YEAR’S FIRST SALE · AN OLD CUSTOM', 540, 494, 34, K.paper, K.ink, 1 - P(t, d0 - .2, d0), .012, pop(t, o0)); if (t > d0) plate('2 JANUARY · BY LANTERN LIGHT', 540, 494, 42, K.must, K.ink, 1, .012, pop(t, d0));
}

// ------------------------------------------------------------ 03 who invented it?
const SCRAPS = Array.from({ length: 10 }, (_, i) => ({ x: (i * 173) % 520 - 260, c: ['#7c2a22', '#24407a', '#f0b637', '#2a7a74', '#b5a2c8', '#dc4a33'][i % 6], w: 70 + (i * 37) % 60, r: ((i * 53) % 100) / 100 - .5 }));
function sceneScraps(t) {
  fillBG('#232d55', '#101630'); rays(540, 1000, t, .04, .08);
  const s0 = wt(8, 'stuffed') - .9, bx = 540, by = 1330;
  clothBag(bx, by, 1.15, E.o3(P(t, s0 - .6, s0)));
  SCRAPS.forEach((s, i) => { const u = P(t, s0 + i * .28, s0 + i * .28 + .8); if (u <= 0 || u >= 1) return; const x = lerp(bx + s.x * 1.4, bx + s.x * .15, E.io2(u)), y = lerp(560, by - 460, E.i2(u)); ctx.save(); ctx.translate(x, y); ctx.rotate(s.r + u * 2 * (i % 2 ? 1 : -1)); ctx.globalAlpha = 1 - P(u, .85, 1); ctx.fillStyle = s.c; rrect(-s.w / 2, -24, s.w, 48, 4); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.25)'; for (let k = 0; k < 3; k++) ctx.fillRect(-s.w / 2 + 10 + k * 22, -24, 6, 48); ctx.restore(); });
  const u0 = wt(8, 'usual') - .3; if (t > u0) plate('THE USUAL STORY', 300, 640, 46, K.paper, K.ink, 1, -.03, pop(t, u0)); const e0 = wt(8, 'edo') - .3; if (t > e0) plate('EDO KIMONO SHOPS', 760, 730, 40, K.must, K.ink, 1, .03, pop(t, e0));
  const f0 = wt(8, 'leftover') - .3; if (t > f0) plate('LEFTOVER FABRIC, INTO BAGS', 540, 1296, 42, K.red, K.paper, 1, -.012, pop(t, f0));
  topBand(540, 'rgba(10,14,36,.66)');
  popText('WHO INVENTED IT?', 540, 405, 104, t, T.scraps + .2, K.paper, -.015, '#070a18'); const h0 = wt(7, 'harder') - .2; if (t > h0) plate('HARDER TO PIN DOWN', 540, 494, 42, K.must, K.ink, 1, .012, pop(t, h0));
}
function noren(cx, col, k, t, i) {
  if (k <= 0) return; ctx.save(); ctx.translate(cx, 650); ctx.scale(1, k); ctx.fillStyle = '#5b3a20'; rrect(-160, -14, 320, 20, 8); ctx.fill();
  for (let p = 0; p < 3; p++) { const x = -146 + p * 98, sw = 8 * Math.sin(t * 1.6 + i * 2 + p); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 94, 0); ctx.lineTo(x + 94 + sw, 440); ctx.lineTo(x + sw, 440); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.14)'; ctx.fillRect(x + 80, 0, 14, 440); }
  ctx.fillStyle = '#f3ecd8'; ctx.beginPath(); ctx.arc(0, 220, 92, 0, TAU); ctx.fill(); txt('?', 0, 276, font(900, 160), col, 'center'); ctx.restore();
}
function sceneNoren(t) {
  fillBG('#e9dcbb', '#d6c59a'); ctx.fillStyle = 'rgba(120,80,40,.1)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 + 20, 540, 8, 800); ctx.fillStyle = '#b9a07a'; ctx.fillRect(0, 1130, W, 400);
  const tm = [wt(9, 'echigoya') - .4, wt(10, 'daimaru') - .4, wt(10, 'matsuya') - .4], nm = ['ECHIGOYA?', 'DAIMARU?', 'MATSUYA?'], cl = ['#24407a', '#7c2a22', '#274a48'];
  for (let i = 0; i < 3; i++) { const cx = 190 + i * 350; noren(cx, cl[i], E.oBack(P(t, tm[i], tm[i] + .45)), t, i); if (t > tm[i] + .2) plate(nm[i], cx, 1180, 40, K.ink, K.paper, 1, (i - 1) * .02, pop(t, tm[i] + .2)); }
  const c0 = wt(9, 'gets') - .3; if (t > c0) quiet('MITSUKOSHI’S ANCESTOR · GETS THE CREDIT', 370, 1250, 24, K.paper, K.ink, fadeIn(t, c0)); const s0 = wt(10, 'stories') - .3; if (t > s0) quiet('…HAVE STORIES TOO', 720, 1300, 28, K.paper, K.ink, fadeIn(t, s0));
  topBand(540, 'rgba(30,24,40,.74)');
  popText('THREE STORIES', 540, 405, 120, t, T.noren + .2, K.paper, -.015, '#14101e'); const r0 = wt(11, 'records') - .3; if (t > r0) plate('THE RECORDS ARE THIN', 540, 496, 46, K.red, K.paper, 1, .012, pop(t, r0));
}

// ------------------------------------------------------------ 04 the jackpot
function sceneJackpot(t) {
  fillBG('#3a2616', '#160e08'); const o0 = wt(12, 'gold') - .9, op = E.io2(P(t, o0, o0 + .8)), bx = 540, by = 1330;
  ctx.save(); ctx.globalAlpha = op; rays(bx, by - 470, t, .12, .2, '255,214,120'); const g = ctx.createRadialGradient(bx, by - 470, 0, bx, by - 470, 520); g.addColorStop(0, 'rgba(255,214,120,.55)'); g.addColorStop(1, 'rgba(255,214,120,0)'); ctx.fillStyle = g; ctx.fillRect(0, 540, W, 900); ctx.restore();
  // the sash rises out of the bag in a slow S
  const ru = E.io2(P(t, o0 + .5, o0 + 2.6)); if (ru > 0) { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, by - 462); ctx.clip(); const pt = v => [bx + 150 * Math.sin(v * 5 + t * .8) * v, by - 462 - v * 620 * ru]; for (const [lw, col] of [[96, '#8a6a1e'], [84, '#e9c45a']]) { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'butt'; ctx.lineJoin = 'round'; ctx.beginPath(); for (let i = 0; i <= 40; i++) { const p = pt(i / 40); i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); } ctx.stroke(); }
    ctx.strokeStyle = 'rgba(138,106,30,.7)'; ctx.lineWidth = 5; for (let i = 2; i < 40; i += 3) { const p = pt(i / 40); ctx.beginPath(); ctx.arc(p[0], p[1], 16, 0, TAU); ctx.stroke(); } ctx.restore(); }
  clothBag(bx, by, 1.15, op);
  const r = rng(12); for (let i = 0; i < 16; i++) { const ph = (t * .7 + r()) % 1, x = bx + (r() - .5) * 700, y = by - 500 - r() * 380; ctx.fillStyle = `rgba(255,236,170,${op * Math.sin(ph * Math.PI)})`; ctx.beginPath(); const s = 6 + 10 * Math.sin(ph * Math.PI); ctx.moveTo(x, y - s * 2); ctx.lineTo(x + s * .5, y - s * .5); ctx.lineTo(x + s * 2, y); ctx.lineTo(x + s * .5, y + s * .5); ctx.lineTo(x, y + s * 2); ctx.lineTo(x - s * .5, y + s * .5); ctx.lineTo(x - s * 2, y); ctx.lineTo(x - s * .5, y - s * .5); ctx.fill(); }
  const v0 = wt(12, 'version') - .5; if (t > v0) plate('ONE VERSION SAYS: DAIMARU', 540, 606, 38, K.paper, K.ink, 1, -.012, pop(t, v0)); const l0 = wt(13, 'whoever') - .3; if (t > l0) plate('FOR WHOEVER GOT LUCKY', 540, 1340, 46, K.must, K.ink, 1, .012, pop(t, l0));
  topBand(540, 'rgba(30,16,6,.68)');
  popText('THE PRIZE:', 540, 392, 100, t, T.prize + .2, K.paper, -.015, '#140a04'); popText('A GOLD OBI', 540, 510, 136, t, wt(12, 'gold') - .3, K.must, -.015, '#140a04');
}

// ------------------------------------------------------------ 05 luck in leftovers
const STOCK = Array.from({ length: 12 }, (_, i) => ({ sx: 170 + (i % 4) * 190 + ((i * 31) % 40), sy: 740 + Math.floor(i / 4) * 150, w: 96 + (i * 23) % 40, h: 70 + (i * 17) % 30, c: ['#24407a', '#2f6b45', '#f0b637', '#b5a2c8', '#7c2a22', '#2a7a74'][i % 6] }));
function sceneLeft(t) {
  fillBG('#3a3440', '#1e1a24'); ctx.fillStyle = '#5b3a20'; for (let j = 0; j < 3; j++) ctx.fillRect(80, 740 + j * 150, 920, 18); ctx.fillRect(80, 600, 20, 458); ctx.fillRect(980, 600, 20, 458); ctx.fillStyle = '#2a2430'; ctx.fillRect(0, 1320, W, 800);
  const u0 = wt(15, 'many') - .8, a0 = wt(16, 'ambitious') - .5, grow = E.oBack(P(t, a0, a0 + .6));
  for (let i = 0; i < 3; i++) luckyBag(250 + i * 290, 1330, .52 + .12 * grow * (i === 1 ? 1.6 : 1), 0, t, i % 2 ? '#b02c22' : BAGRED);
  STOCK.forEach((b, i) => { const u = P(t, u0 + i * .27, u0 + i * .27 + .7); if (u >= 1) return; const tx = 250 + (i % 3) * 290, ty = 1100, e = E.io2(u), x = lerp(b.sx, tx, e), y = lerp(b.sy, ty, e) - 150 * Math.sin(u * Math.PI), k = 1 - P(u, .8, 1); ctx.save(); ctx.translate(x, y); ctx.rotate(u * 1.5 * (i % 2 ? 1 : -1)); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(-b.w / 2 + 6, -b.h + 6, b.w, b.h); ctx.fillStyle = b.c; ctx.fillRect(-b.w / 2, -b.h, b.w, b.h); ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fillRect(-b.w / 2, -b.h, b.w, 12); ctx.fillStyle = '#f3ecd8'; ctx.fillRect(-b.w / 2 + 12, -b.h + 28, b.w * .5, 14); ctx.restore(); });
  const s0 = wt(15, 'late') - .3; if (t > s0) plate('INTO THE LATE SHŌWA ERA', 540, 640, 38, K.paper, K.ink, 1 - P(t, a0 - .2, a0), -.012, pop(t, s0)); const n0 = wt(15, 'unsold') - .3; if (t > n0) plate('REALLY UNSOLD STOCK', 540, 1340, 46, K.must, K.ink, 1 - P(t, a0 - .2, a0), .012, pop(t, n0));
  if (t > a0) plate('THEN THEY GOT AMBITIOUS', 540, 640, 50, K.red, K.paper, 1, -.02, pop(t, a0));
  topBand(540, 'rgba(20,16,26,.76)');
  { const k0 = wt(14, 'saying') - .6; ctx.save(); const k = pop(t, Math.max(T.left + .2, k0)); ctx.globalAlpha = P(t, Math.max(T.left + .2, k0), Math.max(T.left + .2, k0) + .15); ctx.translate(540, 400); ctx.scale(k, k); jp('残り物には福がある', 0, 0, 96, K.paper, 'center', .05); ctx.restore(); const l0 = wt(14, 'luck') - .3; if (t > l0) plate('“THERE’S LUCK IN LEFTOVERS”', 540, 490, 44, K.must, K.ink, 1, .012, pop(t, l0)); }
}

// ------------------------------------------------------------ 06 bigger bags
function gilt(x, y, w, h, rot, tag) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(-w / 2 + 10, -h / 2 + 12, w, h); const g = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2); g.addColorStop(0, '#f3d67a'); g.addColorStop(.5, '#a5822a'); g.addColorStop(1, '#e9c45a'); ctx.fillStyle = g; ctx.fillRect(-w / 2, -h / 2, w, h); ctx.strokeStyle = '#6b4e12'; ctx.lineWidth = 4; ctx.strokeRect(-w / 2 + 12, -h / 2 + 12, w - 24, h - 24); ctx.fillStyle = '#2a2420'; ctx.fillRect(-w / 2 + 34, -h / 2 + 34, w - 68, h - 68); ctx.fillStyle = 'rgba(243,232,207,.08)'; ctx.fillRect(-w / 2 + 34, -h / 2 + 34, w - 68, h - 68);
  ctx.fillStyle = '#f3ecd8'; rrect(-70, h / 2 - 28, 140, 34, 4); ctx.fill(); txt(tag, 0, h / 2 - 4, font(800, 20), K.ink, 'center', 2); ctx.restore(); }
function sceneBubble(t) {
  fillBG('#7c2a22', '#3d1410'); rays(540, 1000, t, .06, .1, '255,214,120'); ctx.fillStyle = '#2a0e0a'; ctx.fillRect(0, 1330, W, 800);
  const p0 = wt(17, 'picasso') - .5, r0 = wt(17, 'renoir') - .5, by = 1350, S = 1.25, top = by - 450 * S;
  [[p0, -1, 'PICASSO', 250, 310], [r0, 1, 'RENOIR', 290, 240]].forEach(([t0, sd, tag, w, h]) => { const a = E.o3(P(t, t0, t0 + .7)), d = E.i2(P(t, t0 + 1.0, t0 + 1.7)); if (a <= 0) return; const x = lerp(540 + sd * 800, 540 + sd * 150, a) - sd * 60 * d, y = lerp(700, top + 330, d); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, top + 60 * S); ctx.clip(); gilt(x, y, w, h, sd * .08 * (1 - d), tag); ctx.restore(); });
  luckyBag(540, by, S, 0, t, '#c9a23c', '#8a6a1e');
  quiet('EMPTY FRAMES · ILLUSTRATION', 540, 1362, 20, K.paper, K.ink, .9);
  topBand(540, 'rgba(40,10,8,.7)');
  const y0 = wt(17, '500') - .5; plate('THE BUBBLE YEARS', 540, 284, 38, K.paper, K.ink, P(t, T.bubble + .3, T.bubble + .4), -.012, pop(t, T.bubble + .3));
  ctx.save(); ctx.globalAlpha = 1 - P(t, y0 - .2, y0); popText('ONE BAG', 540, 440, 140, t, wt(17, 'one') - .3, K.paper, -.015, '#2a0b08'); ctx.restore();
  popText('¥500,000,000', 540, 410, 108, t, y0, K.must, -.015, '#2a0b08'); if (t > y0 + .3) plate('A PICASSO AND A RENOIR, IN ONE BAG', 540, 500, 36, K.paper, K.ink, 1, .012, pop(t, y0 + .3));
}
function sceneLater(t) {
  fillBG('#1f5a57', '#123c3e'); rays(540, 1000, t, .04, .08); ctx.fillStyle = '#0e2c2e'; ctx.fillRect(0, 1320, W, 800);
  // a ticket rises from one bag
  const e0 = wt(18, 'experiences') - .6, up = E.o3(P(t, e0, e0 + .8)); if (up > 0) { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, 1330 - 450 * .8 + 96); ctx.clip(); ctx.translate(270, lerp(1100, 800, up)); ctx.rotate(-.1 + .03 * Math.sin(t * 2)); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-142, -72, 300, 160, 12); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-150, -80, 300, 160, 12); ctx.fill(); ctx.setLineDash([8, 8]); ctx.strokeStyle = 'rgba(20,27,51,.4)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(70, -80); ctx.lineTo(70, 80); ctx.stroke(); ctx.setLineDash([]); txt('ADMIT ONE', -130, -30, font(700, 18, F.m), 'rgba(20,27,51,.7)', 'left', 3); txt('EXPERIENCE', -130, 22, font(900, 30), K.red, 'left', 1); ctx.fillStyle = K.must; ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = i * TAU / 10 - Math.PI / 2, rr = i % 2 ? 12 : 28; ctx.lineTo(110 + Math.cos(a) * rr, Math.sin(a) * rr); } ctx.fill(); ctx.restore(); }
  luckyBag(270, 1330, .8, 0, t);
  // a clear bag: you can see what is inside
  const c0 = wt(19, 'clear') - .5, ck = pop(t, c0, .5); if (ck > 0) { ctx.save(); ctx.translate(790, 1330); ctx.scale(ck, ck); const cs = ['#24407a', '#f0b637', '#7c2a22', '#b5a2c8', '#2f6b45']; [[-90, 0, 110, 120], [30, 0, 100, 90], [-40, -120, 120, 100], [70, -90, 60, 130], [-100, -224, 90, 80]].forEach(([x, y, w, h], i) => { ctx.fillStyle = cs[i]; ctx.fillRect(x, y - h - 10, w, h); ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fillRect(x, y - h - 10, w, 12); });
    ctx.fillStyle = 'rgba(220,240,255,.16)'; ctx.strokeStyle = 'rgba(235,245,255,.85)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-140, 0); ctx.lineTo(-126, -360); ctx.lineTo(126, -360); ctx.lineTo(140, 0); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(0, -360, 60, Math.PI, 0); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,.22)'; ctx.beginPath(); ctx.moveTo(-110, -340); ctx.lineTo(-70, -340); ctx.lineTo(-96, -40); ctx.lineTo(-126, -40); ctx.fill(); ctx.restore(); }
  if (t > e0 + .3) plate('BAGS OF EXPERIENCES', 300, 640, 38, K.paper, K.ink, 1, -.03, pop(t, e0 + .3)); if (t > c0 + .3) plate('CLEAR BAGS: SEE WHAT’S INSIDE', 620, 740, 36, K.must, K.ink, 1, .02, pop(t, c0 + .3));
  const g0 = wt(19, 'rather') - .3; if (t > g0) plate('FOR BUYERS WHO’D RATHER NOT GAMBLE', 540, 1300, 34, K.ink, K.paper, 1, -.012, pop(t, g0));
  topBand(540, 'rgba(8,36,40,.66)');
  popText('EXPERIENCES', 540, 400, 116, t, T.later + .2, K.paper, -.015, '#062020'); popText('& CLEAR BAGS', 540, 512, 108, t, c0, K.must, -.015, '#062020');
}

// ------------------------------------------------------------ 07 the queues move
function shutter(x, y, w, h, d) { ctx.fillStyle = '#12121c'; ctx.fillRect(x, y, w, h); const hh = h * d; ctx.fillStyle = '#9aa1aa'; ctx.fillRect(x, y, w, hh); ctx.fillStyle = 'rgba(0,0,0,.18)'; for (let yy = y + 14; yy < y + hh; yy += 18) ctx.fillRect(x, yy, w, 4); ctx.fillStyle = '#6f7780'; ctx.fillRect(x, y + hh - 12, w, 12); }
function kadomatsu(x, y, s) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = '#c9a66b'; rrect(-50, -70, 100, 70, 6); ctx.fill(); ctx.fillStyle = '#8b6a3a'; ctx.fillRect(-50, -46, 100, 8); ctx.fillStyle = '#2f6b45'; for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(i * 12, -70); ctx.lineTo(i * 26 - 10, -150); ctx.lineTo(i * 26 + 12, -150); ctx.fill(); } [[-22, 210], [0, 260], [22, 180]].forEach(([bx, bh]) => { ctx.fillStyle = '#7fae5a'; ctx.beginPath(); ctx.moveTo(bx - 13, -70); ctx.lineTo(bx - 13, -bh + 20); ctx.lineTo(bx + 13, -bh - 14); ctx.lineTo(bx + 13, -70); ctx.fill(); ctx.fillStyle = 'rgba(0,0,0,.15)'; ctx.fillRect(bx - 13, -150, 26, 4); }); ctx.restore(); }
function sceneClosed(t) {
  const g = ctx.createLinearGradient(0, 0, 0, 1300); g.addColorStop(0, '#5a7fa8'); g.addColorStop(.7, '#f0c9a0'); g.addColorStop(1, '#f6e2c0'); ctx.fillStyle = g; ctx.fillRect(-60, -60, W + 120, H + 120);
  const sy = lerp(1000, 760, E.io2(P(t, T.closed, T.closed + 8))); ctx.fillStyle = 'rgba(220,74,51,.25)'; ctx.beginPath(); ctx.arc(860, sy, 150, 0, TAU); ctx.fill(); ctx.fillStyle = '#dc4a33'; ctx.beginPath(); ctx.arc(860, sy, 96, 0, TAU); ctx.fill();
  ctx.fillStyle = '#cfc5b0'; ctx.fillRect(60, 640, 760, 680); ctx.fillStyle = '#a89c84'; ctx.fillRect(46, 620, 788, 26); for (let j = 0; j < 2; j++) for (let i = 0; i < 6; i++) { ctx.fillStyle = '#56607a'; rrect(96 + i * 120, 690 + j * 150, 76, 100, [38, 38, 3, 3]); ctx.fill(); }
  const c0 = wt(21, 'close') - .5; for (let i = 0; i < 3; i++) shutter(100 + i * 240, 1040, 200, 280, E.o3(P(t, c0 + i * .2, c0 + 1.0 + i * .2)));
  ctx.fillStyle = '#8a8478'; ctx.fillRect(-60, 1320, W + 120, 800); kadomatsu(76, 1326, 1); kadomatsu(808, 1326, 1);
  const th = wt(20, 'thinning') - .5; for (let i = 0; i < 8; i++) { const a = 1 - P(t, th + i * .3, th + i * .3 + .6); if (a <= 0) continue; ctx.save(); ctx.globalAlpha = a * .85; (i % 3 === 1 ? hatMan : mini)(930 - i * 70 + 80, 1380 + (i % 2) * 10, 1.9, '#2a2a3c'); ctx.restore(); }
  if (t > T.closed + .3) plate('THE QUEUES ARE THINNING', 540, 600, 40, K.ink, K.paper, 1 - P(t, c0 - .2, c0 + .1), -.012, pop(t, T.closed + .3));
  if (t > c0 + .9) { const k = pop(t, c0 + .9); ctx.save(); ctx.translate(440, 1180); ctx.rotate(-.03); ctx.scale(k, k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-132, -42, 280, 100, 8); ctx.fill(); ctx.fillStyle = '#f3ecd8'; rrect(-140, -50, 280, 100, 8); ctx.fill(); txt('CLOSED', 0, 22, font(900, 60), K.red, 'center', 3); ctx.restore(); }
  const s0 = wt(22, '2nd') - .4; if (t > s0) plate('SOME ON THE 2ND TOO', 480, 600, 42, K.ink, K.paper, 1, -.02, pop(t, s0)); const b0 = wt(22, 'staff') - .4; if (t > b0) plate('A BREAK FOR STAFF', 540, 1340, 46, K.must, K.ink, 1, .012, pop(t, b0));
  topBand(540, 'rgba(20,30,50,.7)');
  const y0 = wt(21, '2025') - .4; ctx.save(); ctx.globalAlpha = 1 - P(t, c0 - .2, c0); digits('2025', t, Math.max(T.closed + .25, y0), 400, 190, K.must, '#0a1020'); if (t > y0 + .5) plate('TOKYO’S BIG DEPARTMENT STORES', 540, 492, 38, K.paper, K.ink, 1, .012, pop(t, y0 + .5)); ctx.restore();
  popText('CLOSED', 540, 400, 150, t, c0, K.paper, -.015, '#0a1020'); popText('1 JANUARY', 540, 512, 116, t, c0 + .2, K.must, -.015, '#0a1020');
}

// ------------------------------------------------------------ 08 tease: three bars on an empty counter
function chocBar(x, y, s, k) { ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); ctx.fillStyle = 'rgba(0,0,0,.3)'; rrect(-76, -34, 164, 80, 8); ctx.fill(); ctx.fillStyle = '#5b3a20'; rrect(-80, -40, 160, 80, 8); ctx.fill(); ctx.fillStyle = '#7a4f2c'; for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) rrect(-72 + i * 37, -32 + j * 34, 31, 28, 4), ctx.fill(); ctx.fillStyle = '#c8ccd4'; ctx.beginPath(); ctx.moveTo(-80, -40); ctx.lineTo(-10, -40); ctx.lineTo(-40, 40); ctx.lineTo(-80, 40); ctx.closePath(); ctx.fill(); ctx.restore(); }
function sceneTease(t) {
  fillBG('#3a2140', '#1d1024'); ctx.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 150 - 20, 540, 70, 900);
  ctx.fillStyle = 'rgba(220,240,255,.08)'; ctx.fillRect(60, 760, 960, 300); ctx.strokeStyle = 'rgba(235,245,255,.5)'; ctx.lineWidth = 5; ctx.strokeRect(60, 760, 960, 300); ctx.beginPath(); ctx.moveTo(60, 910); ctx.lineTo(1020, 910); ctx.stroke();
  ctx.fillStyle = '#8b5a33'; ctx.fillRect(30, 1060, 1020, 280); ctx.fillStyle = '#5b3a20'; ctx.fillRect(20, 1046, 1040, 26); ctx.fillStyle = '#1d1024'; ctx.fillRect(0, 1340, W, 800);
  const b0 = wt(24, 'three') - .6; for (let i = 0; i < 3; i++) { const k = pop(t, b0 + i * .22); if (k > 0) { chocBar(360 + i * 180, 1000, 1, k); ctx.save(); ctx.globalAlpha = P(t, b0 + i * .22, b0 + i * .22 + .2); big(String(i + 1), 360 + i * 180, 880, 70, K.must, 'center', '#0c0612'); ctx.restore(); } }
  const v0 = wt(23, 'valentines') - .3; if (t > v0) { const k = pop(t, v0); ctx.save(); ctx.translate(840, 660); ctx.rotate(.1); ctx.scale(k, k); ctx.fillStyle = K.red; ctx.beginPath(); ctx.moveTo(0, 40); ctx.bezierCurveTo(-90, -20, -50, -90, 0, -40); ctx.bezierCurveTo(50, -90, 90, -20, 0, 40); ctx.fill(); ctx.restore(); plate('VALENTINE’S DAY', 400, 650, 50, K.paper, K.ink, 1, -.03, pop(t, v0)); }
  const s0 = wt(24, 'sold') - .3; if (t > s0) plate('SOLD: JUST THREE BARS', 540, 1200, 50, K.must, K.ink, 1, -.015, pop(t, s0));
  topBand(540, 'rgba(20,10,28,.66)');
  digits('1958', t, Math.max(T.tease + .3, wt(24, '1958') - .6), 400, 190, K.must, '#12081a'); const f0 = wt(24, 'chocolate') - .5; if (t > f0) plate('A DEPARTMENT-STORE CHOCOLATE FAIR', 540, 492, 36, K.paper, K.ink, 1, .012, pop(t, f0));
}
function sceneEnd(t) {
  fillBG('#161d3a', '#0b0f22'); rays(540, 880, t, .025);
  const n = T.end + .1; plate('NEXT', 190, 640, 60, K.red, K.paper, P(t, n, n + .1), -.04, pop(t, n, .25)); plate('EPISODE 11', 870, 640, 34, K.must, K.ink, P(t, n + .1, n + .2), .03, pop(t, n + .1));
  EP.next.forEach((s, i) => { const a = E.o3(P(t, n + .1 + i * .1, n + .45 + i * .1)); ctx.save(); ctx.globalAlpha = a; big(s, 80, 820 + i * 130 + 30 * (1 - a), 118, i === 1 ? K.must : K.paper, 'left', '#05071a'); ctx.restore(); });
  ctx.strokeStyle = K.must; ctx.lineWidth = 8; ctx.lineCap = 'round'; const u = E.o3(P(t, n + .3, n + .9)); ctx.beginPath(); ctx.moveTo(80, 1030); ctx.lineTo(80 + 600 * u, 1030); ctx.stroke();
}

window.FILM = {
  title: 'THE LUCKY BAG', tag: 'EP 10 · JAPAN’S DEPARTMENT STORES',
  hotLines: [],
  scenes: [{ start: 0, draw: sceneHook }, { start: T.queue, draw: sceneQueue }, { start: T.first, draw: sceneFirst }, { start: T.scraps, draw: sceneScraps }, { start: T.noren, draw: sceneNoren }, { start: T.prize, draw: sceneJackpot }, { start: T.left, draw: sceneLeft }, { start: T.bubble, draw: sceneBubble }, { start: T.later, draw: sceneLater }, { start: T.closed, draw: sceneClosed }, { start: T.tease, draw: sceneTease }, { start: T.end, draw: sceneEnd }],
  xfades: [[T.queue, .4], [T.first, .5], [T.scraps, .5], [T.noren, .4], [T.prize, .5], [T.left, .5], [T.bubble, .4], [T.later, .4], [T.closed, .6], [T.tease, .5], [T.end, .3]],
  chapters: [[0, '01', 'THE LUCKY BAG'], [T.first, '02', 'THE FIRST SALE'], [T.scraps, '03', 'WHO INVENTED IT?'], [T.prize, '04', 'THE JACKPOT'], [T.left, '05', 'LUCK IN LEFTOVERS'], [T.bubble, '06', 'BIGGER BAGS'], [T.closed, '07', 'THE QUEUES MOVE'], [T.tease, '08', 'NEXT']],
  hits: [[.8, 8, .3], [wt(12, 'gold') - .3, 8, .3], [wt(17, '500') - .5, 10, .35], [wt(21, 'close') - .5, 8, .3]],
  flashes: [[T.prize, .3], [T.bubble, .3], [T.end, .25]],
  events: {
    scene: [T.queue, T.first, T.scraps, T.noren, T.prize, T.left, T.bubble, T.later, T.closed, T.tease, T.end],
    pop: [.3, wt(0, 'new') - .3, wt(1, 'sealed') - .3, wt(1, 'mystery') - .3, wt(2, 'fukubukuro') - .2, wt(4, 'old') - .3, wt(5, 'print') - .4, wt(6, '2') - .3, wt(7, 'harder') - .2, wt(8, 'usual') - .3, wt(8, 'edo') - .3, wt(8, 'leftover') - .3, wt(9, 'echigoya') - .2, wt(10, 'daimaru') - .2, wt(10, 'matsuya') - .2, wt(11, 'records') - .3, wt(12, 'version') - .5, wt(13, 'whoever') - .3, wt(14, 'luck') - .3, wt(15, 'late') - .3, wt(15, 'unsold') - .3, wt(17, 'picasso') - .5, wt(17, 'renoir') - .5, wt(18, 'experiences') - .3, wt(19, 'clear') - .5, wt(19, 'rather') - .3, T.closed + .3, wt(22, '2nd') - .4, wt(22, 'staff') - .4, wt(23, 'valentines') - .3, wt(24, 'sold') - .3, T.end + .1],
    stamp: [.55, T.queue + .2, wt(4, 'first') - .5, T.scraps + .2, T.noren + .2, wt(12, 'gold') - .3, wt(14, 'saying') - .6, wt(16, 'ambitious') - .5, wt(17, '500') - .5, T.later + .2, wt(21, 'close') - .5, wt(24, '1958') - .6],
    bags: Array.from({ length: 5 }, (_, i) => wt(1, 'sealed') - 1.4 + i * .16), lanterns: Array.from({ length: 7 }, (_, i) => wt(6, 'lantern') - 1.6 + i * .18), scraps: SCRAPS.map((_, i) => wt(8, 'stuffed') - .9 + i * .28 + .7),
    gold: [wt(12, 'gold') - .9], boxes: STOCK.map((_, i) => wt(15, 'many') - .8 + i * .27 + .6), frames: [wt(17, 'picasso') + .5, wt(17, 'renoir') + .5], shutters: [0, 1, 2].map(i => wt(21, 'close') - .5 + i * .2 + .9), bars: [0, 1, 2].map(i => wt(24, 'three') - .6 + i * .22), end: [T.end],
  },
};
