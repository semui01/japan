// Render still frames and an optional contact sheet for visual review.
// usage: node stills.js <film/index.html> <outdir> t1 t2 ...   (env VERT=1 for 9:16, Q=ja for Japanese, EV=1 to dump window.EVENTS to <outdir>/events.json)
// Then: python3 contact_sheet.py <outdir> sheet.jpg   and Read the sheet image.
const { chromium } = (() => { try { return require('playwright'); } catch { return require('/opt/node22/lib/node_modules/playwright'); } })();
const fs = require('fs'), path = require('path');
const [html, outdir, ...ts] = process.argv.slice(2);
const V = !!process.env.VERT;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: V ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 } });
  p.on('console', m => console.log('console:', m.text())); p.on('pageerror', e => console.log('PAGE ERROR', e.message));
  const qs = [V ? 'v' : '', process.env.Q || ''].filter(Boolean).join('&');   // env Q adds params, e.g. Q=ja
  await p.goto('file://' + path.resolve(html) + (qs ? '?' + qs : ''));
  await p.evaluate(() => window.ready);
  fs.mkdirSync(outdir, { recursive: true });
  for (const t of ts.map(Number)) {
    const d = await p.evaluate(t => { render(t); return document.getElementById('c').toDataURL('image/jpeg', .85); }, t);
    fs.writeFileSync(path.join(outdir, (V ? 'v' : 'h') + '_' + t.toFixed(2).padStart(6, '0') + '.jpg'), Buffer.from(d.split(',')[1], 'base64'));
  }
  if (process.env.EV) fs.writeFileSync(path.join(outdir, 'events.json'), JSON.stringify(await p.evaluate(() => window.EVENTS), null, 1));
  await b.close();
})();
