// Render frames [a, b) of a canvas film page and pipe them to ffmpeg.
// usage: node renderseg.js <film/index.html> <a> <b> <out.mp4> [fps=30]   (env VERT=1 for 9:16)
const { chromium } = (() => { try { return require('playwright'); } catch { return require('/opt/node22/lib/node_modules/playwright'); } })();
const { spawn } = require('child_process');
const path = require('path');
const [html, a, b, out, fps = 30] = [process.argv[2], +process.argv[3], +process.argv[4], process.argv[5], +(process.argv[6] || 30)];
const V = !!process.env.VERT;
(async () => {
  const br = await chromium.launch();
  const p = await br.newPage({ viewport: V ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 } });
  p.on('pageerror', e => { console.error('PAGE ERROR', e.message); process.exitCode = 1; });
  await p.goto('file://' + path.resolve(html) + (V ? '?v' : ''));
  await p.evaluate(() => window.ready);
  const ff = spawn('ffmpeg', ['-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '15', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let f = a; f < b; f++) {
    const d = await p.evaluate(t => { render(t); return document.getElementById('c').toDataURL('image/jpeg', 0.95); }, f / fps);
    const buf = Buffer.from(d.slice(d.indexOf(',') + 1), 'base64');
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 150 === 0) console.log(out, f);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); await br.close();
})();
