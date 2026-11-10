"""Score + SFX for THE REVOLVING DOOR. Every SFX time comes from the film's own event export (stills/ev/events.json)."""
import sys, json, os
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'tools'))
try:
    import soundfile  # noqa: F401
except ImportError:  # fall back to the small scipy-based stand-in
    sys.path.insert(0, os.path.join(HERE, 'tools', 'compat'))
from soundkit import *          # noqa: E402  (Kit, SR, tt, env, lp, hp, bp, sweep_lp, mf)

EV = json.load(open(os.path.join(HERE, 'stills/ev/events.json')))
TLJ = json.load(open(os.path.join(HERE, 'timeline.json')))
DUR = TLJ['duration']
sk = Kit(DUR, seed=7)
R = np.random.default_rng(3)

# ------------------------------------------------------------------ music
Am = [57, 60, 64, 69]; F = [53, 57, 60, 65]; C = [48, 55, 60, 64]; G = [55, 59, 62, 67]
Dm = [50, 57, 62, 65]; Bb = [46, 53, 58, 62]; Em = [52, 55, 59, 64]; E = [52, 56, 59, 64]
BPM = 92
tape0, tape1 = EV['tape'][0]
# intro: open pad, sparse bells over Okinawa
sk.pad([45, 57, 64, 71], 0, 7.4, .55, bright=1100, att=2.2, rel=2.0)
for k in range(7): sk.bell(int(R.choice([76, 79, 81, 84, 88])), .9 + k * .78 + R.random() * .2, .045, pan=R.uniform(-.7, .7))
# CH1 reveal -> profile -> school: pulse starts on "But statistically"
sk.progression([Am, F, C, G], EV['glitch'][0], tape0, BPM, pulse=True, hats_from=EV['card'][0], bright=1500, pad_g=.45)
# CH2 Nepal: darker colour, kick when the business model appears
sk.progression([Dm, Bb, F, C], tape1, 33.0, BPM, pulse=True, kick_from=EV['card'][3] - .2, hats_from=EV['card'][3] - .2, bright=1400, pad_g=.45)
# CH3 Tokyo: harmonic-minor tension; Okinawa: lift to major
t_down = EV['whoosh'][0]
sk.progression([Am, F, Dm, E], 33.0, t_down, BPM, pulse=True, kick_from=EV['card'][5] - .2, hats_from=34.6, bright=1300, pad_g=.45)
sk.progression([F, C, G, Am], t_down, 46.6, BPM, pulse=True, kick_from=t_down, hats_from=t_down, bright=1900, pad_g=.5)
# CH4 pipeline: full groove
sk.progression([C, G, Am, F], 46.6, 58.0, BPM, pulse=True, kick_from=EV['zips'][0][0], hats_from=46.6, bright=2200, pad_g=.5)
# CH5 exit: breathe — no kick
sk.progression([Am, F, C, G], 58.0, 71.4, BPM, pulse=True, hats_from=EV['zips'][1][0], bright=1500, pad_g=.45)
# CH6 finale: build to the last hit, then the title chord
t_boom = EV['boom'][0]
sk.progression([F, G, Am, C], 71.4, t_boom, BPM, pulse=True, kick_from=73.4, hats_from=71.4, bright=2000, pad_g=.5)
t_title = EV['title'][0]
sk.pad([36, 48, 55, 60, 64, 67, 74], t_boom, DUR - t_boom, .7, bright=1800, att=.08, rel=2.6)
for k, m in enumerate([72, 76, 79, 84]): sk.bell(m, t_title + k * .16, .07, pan=(k - 1.5) * .4, d=3.0)

# ------------------------------------------------------------------ sfx helpers
def tone_sweep(t, d, f0, f1, g, pan=0):
    x = tt(d); f = f0 * (f1 / f0) ** (x / d); s = np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(x), .008, d * .5); sk.put('sfx', t, s, pan, g)
def buzz(t, f=110, d=.15, g=.1):
    x = tt(d); s = np.sign(np.sin(2 * np.pi * f * x)) * env(len(x), .004, .07); sk.put('sfx', t, lp(s, 900), 0, g)
def thump(t, f=150, g=.2):
    x = tt(.35); fr = f * (1 + 1.5 * np.exp(-x * 40)); sk.put('sfx', t, np.sin(2 * np.pi * np.cumsum(fr) / SR) * np.exp(-x * 11), 0, g)
def riser(t_end, d=1.4, g=.3):
    n = sk.noise(d); s = sweep_lp(n, 250, 6500) * np.linspace(0, 1, len(n)) ** 2.4 * env(len(n), .01, .03); sk.put('sfx', t_end - d, s, 0, g)
def scan(t, d=.7, g=.16):
    n = sk.noise(d); out = np.zeros_like(n); blk = 960
    for k in range(0, len(n), blk):
        fc = 600 * (8 ** (k / len(n))); out[k:k + blk] = bp(n[k:k + blk], fc * .8, min(fc * 1.25, 20000))
    sk.put('sfx', t, out * env(len(n), .05, .2), .2, g)
PENTA = [1568, 1760, 2093, 2349, 2637, 3136]
def inv_io2(p): return np.sqrt(p / 2) if p < .5 else 1 - np.sqrt((1 - p) * 2) / 2

# ------------------------------------------------------------------ sfx from events
for t0, t1, n in EV['sprinkle']:
    for k in range(int(n)): sk.blip(t0 + (t1 - t0) * (k + R.random() * .6) / n, .045, float(R.choice(PENTA)), .07, float(R.uniform(-.8, .8)))
for t in EV['blip']: sk.blip(t, .1, 1320, .12)
for t in EV['pop']: sk.blip(t, .11, 988, .1); sk.click(t, .1, 2600)
for t in EV['glitch']:
    sk.crackle(t - .05, .35, 90, .16); tone_sweep(t, .25, 2400, 300, .12); sk.put('sfx', t, bp(sk.noise(.18), 900, 4000) * env(int(.18 * SR), .005, .1), 0, .25)
for t in EV['hit']: sk.boom(t, .42, 1.3); sk.click(t, .22, 1800); sk.bell(88, t, .05, .2, buf='sfx')
for t in EV['swell']: riser(t, 1.3, .26)
for i, t in enumerate(EV['chime']): m = [76, 79, 81, 83, 84, 86, 88][i % 7]; sk.bell(m, t, .08, -.3, buf='sfx'); sk.bell(m + 7, t + .07, .06, .3, buf='sfx')
for t in EV['card']: sk.whoosh(t, .5, .22)
for t in EV['strike']: tone_sweep(t, .22, 2200, 480, .1); buzz(t + .14, 98, .2, .08)
for t in EV['check']: sk.blip(t, .09, 1760, .08); sk.blip(t + .05, .08, 2349, .08)
for t in EV['rise']: sk.whoosh(t + .35, .9, .28); sk.rumble(t, t + .8, .35)
for t0, t1 in EV['tape']: sk.tape(t0, t1 - t0, .14, rev_from=True, src_span=(t0 - 4.5, t0))
for t in EV['whooshBig']: sk.whoosh(t, 1.5, .5)
for t in EV['whoosh']: sk.whoosh(t, .9, .38)
for t0, t1 in EV['pulses']:
    t = t0
    while t < t1: thump(t, 160, .12); sk.blip(t + .02, .03, float(R.choice(PENTA)), .05, float(R.uniform(-.8, .8))); t += .45
for i, (t0, t1) in enumerate(EV['ticks']):
    if i == 2: [sk.click(t0 + (t1 - t0) * inv_io2(m / 24), .12 if m % 12 else .2, 3000 if m % 12 else 2000) for m in range(1, 25)]
    else: sk.ticks(t0, t1, .09)
for t in EV['thud']: sk.boom(t, .45, 1.4)
for t in EV['deny']: buzz(t, 110, .14, .09); sk.click(t, .08, 700)
for t in EV['approve']: sk.blip(t, .08, 1568, .1, .3); sk.blip(t + .06, .07, 2093, .1, .3)
for t in EV['stamp']: sk.boom(t, .85, 1.8); sk.click(t, .45, 900, .05); sk.crackle(t, .15, 30, .12)
for t in EV['scan']: scan(t)
for t0, t1 in EV['zips']:
    for k in range(6): tone_sweep(t0 + (t1 - t0) * k / 6, .24, 500 + 90 * k, 2600 + 200 * k, .06, (k - 2.5) * .25)
for t0, t1 in EV['pipe']: sk.bed(t0, t1 - t0, 1500, .16); sk.sparkle(t0, t1 - t0, int((t1 - t0) * 12), .018)
for t in EV['door']: sk.whoosh(t, .8, .28); sk.bell(76, t + .15, .07, buf='sfx'); sk.bell(83, t + .3, .06, buf='sfx')
for t in EV['boom']: riser(t, 1.6, .3); sk.boom(t, 1.0, 3.2); sk.crackle(t, .5, 60, .1)

import soundfile as sf
from scipy.signal import fftconvolve
def mix_vo(vo_path, out, music_gain=.26, sfx_gain=.42, duck_m=.62, duck_s=.3, fade_out=1.2):
    """Kit.mix with deeper ducking (music AND sfx) so the synthetic voice stays clearly on top."""
    N = sk.N; rng = np.random.default_rng(5)
    ir_t = tt(2.6); ir = np.stack([rng.standard_normal(len(ir_t)) * np.exp(-ir_t * 2.4) for _ in range(2)], 1); ir[:int(.01 * SR)] = 0; ir /= np.sqrt((ir ** 2).sum(0))
    rv = lambda x, w: x + np.stack([fftconvolve(x[:, c], ir[:, c])[:N] for c in range(2)], 1) * w
    mus = rv(sk.mus, .35); sfx = rv(sk.sfx, .22); mus /= np.max(np.abs(mus)) + 1e-9; sfx /= np.max(np.abs(sfx)) + 1e-9
    vo, vsr = sf.read(vo_path); vo = vo.mean(1) if vo.ndim > 1 else vo
    vo = np.interp(np.arange(N) / SR, np.arange(len(vo)) / vsr, vo, right=0); vo = hp(vo, 70); vo = vo / (np.max(np.abs(vo)) + 1e-9) * .8
    venv = lp(np.abs(vo), 6); k = np.clip(venv / (venv.max() * .3), 0, 1)
    m = np.stack([vo, vo], 1) + mus * music_gain * (1 - duck_m * k)[:, None] + sfx * sfx_gain * (1 - duck_s * k)[:, None]
    bedm = (mus * music_gain * (1 - duck_m * k)[:, None]).mean(1); beds = (sfx * sfx_gain * (1 - duck_s * k)[:, None]).mean(1)
    sp = np.zeros(N, bool)
    for l in TLJ['lines']: sp[int(l['s'] * SR):int(l['e'] * SR)] = True
    db = lambda x: 20 * np.log10(np.sqrt(np.mean(x ** 2)) + 1e-12)
    print('in speech: voice %.1f dB | music %.1f dB | sfx %.1f dB | bed %.1f dB -> margin %.1f dB' % (db(vo[sp]), db(bedm[sp]), db(beds[sp]), db((bedm + beds)[sp]), db(vo[sp]) - db((bedm + beds)[sp])))
    f = np.ones(N); nf = int(fade_out * SR); f[-nf:] = np.linspace(1, 0, nf) ** 1.5; f[:int(.05 * SR)] = np.linspace(0, 1, int(.05 * SR))
    m *= f[:, None]; m = np.tanh(m * 1.1) / np.tanh(1.1); m *= .93 / np.max(np.abs(m))
    sf.write(out, m.astype(np.float32), SR, subtype='FLOAT'); print('wrote', out)
mix_vo(os.path.join(HERE, 'audio', 'narration.wav'), os.path.join(HERE, 'mix.wav'))
sk.mix(None, os.path.join(HERE, 'mix_novo.wav'))
