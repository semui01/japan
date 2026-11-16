import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=52)
queue, first, scraps, noren, prize, left, bubble, later, closed, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: bright New Year open -> lantern-lit calm -> curious pulse for the origin stories -> shimmer for the gold obi
#     -> playful stockroom -> big bubble groove -> lighter "later" -> quiet New Year's morning -> small tease
sk.pad(C + [67], 0, queue + 1, .5, bright=1900); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.progression([C, G], queue, first, bpm=100, pulse=True, bright=1700, pad_g=.44)
sk.pad([45, 52, 57, 64], first, scraps - first + 1, .45, bright=1000); melody(first + 1, scraps, 76, 1, g=.1, dens=.35, cut=2000)
sk.progression([Am, F, Dm, G], scraps, prize, bpm=98, pulse=True, kick_from=noren, bright=1500, pad_g=.42); melody(scraps, prize, 98, 2, g=.15, dens=.5)
sk.pad([48, 55, 64, 67, 71], prize, left - prize + 1, .5, bright=2200, att=.4); sk.sparkle(EV['gold'][0] + .2, 3.0, n=160, g=.016)
sk.progression([F, G, C, Am], left, bubble, bpm=106, pulse=True, kick_from=left + 3, bright=1900, pad_g=.45); melody(left, bubble, 106, 3, g=.16, dens=.6)
sk.progression([C, G, Am, F], bubble, closed, bpm=116, pulse=True, kick_from=bubble, hats_from=bubble, bright=2500, pad_g=.5); melody(bubble, closed, 116, 4, g=.18, dens=.65)
sk.pad([48, 55, 60, 64], closed, tease - closed + 1, .45, bright=1100); melody(closed + 1, tease, 72, 5, g=.09, dens=.3, cut=2000)
sk.progression([Dm, G], tease, end, bpm=94, pulse=True, bright=1500, pad_g=.45); melody(tease + 1.5, end, 94, 6, g=.13, dens=.4)
sk.pad(C + [67, 72], end, DUR - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .28)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
def rustle(t, g=.14, pan=0.0, d=.2): n = sk.noise(d); sk.put('sfx', t, bp(n, 1500, 5500) * env(len(n), .01, d * .8), pan, g)
for i, t in enumerate(EV['bags']): rustle(t, .14, (i - 2) * .3); sk.click(t + .1, .14, 380, .05)
for i, t in enumerate(EV['lanterns']): sk.bell(76 + [0, 3, 5, 7, 5, 3, 0][i], t, .04, pan=(i - 3) * .25, d=1.6, buf='sfx')
for i, t in enumerate(EV['scraps']): rustle(t, .1, (-1) ** i * .3, .16)
for i, t in enumerate(EV['boxes']): sk.click(t, .14, 300 + (i % 3) * 60, .05, pan=(i % 3 - 1) * .4); rustle(t + .03, .07, 0, .1)
for t in EV['frames']: sk.whoosh(t, .6, .18, up=False); sk.click(t + .65, .2, 260, .07)
for t in EV['shutters']: sk.put('sfx', t - .9, bp(sk.noise(.9), 200, 1400) * env(int(.9 * SR), .05, .1) * (0.6 + .4 * np.sin(tt(.9) * 60) ** 2), 0, .1); sk.click(t, .22, 180, .08)
for i, t in enumerate(EV['bars']): sk.click(t, .2, 900 + i * 150, .04, pan=(i - 1) * .3)
sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
