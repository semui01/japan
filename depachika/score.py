import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=73)
up, under, fish, names, noren, word, quarter, tease, end = EV['scene']
dim = EV['dim'][0]
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: brisk throughout. escalator open -> warm 1911 counter -> stepping down to 1922 -> cool, glassy frozen fish
#     -> signs light up, then a short hush when war cuts it short -> bustling Noren-gai -> busiest groove for the food show -> light tease
sk.pad(C + [67], 0, up + 1, .5, bright=1900); [sk.bell(m, .3 + k * .22, .08, pan=(k - 1.5) * .3) for k, m in enumerate([84, 79, 76, 72])]
sk.progression([F, C, G, Am], up, under, bpm=100, pulse=True, kick_from=up + 5, bright=1700, pad_g=.43); melody(up, under, 100, 1, g=.15, dens=.5)
sk.progression([Am, G, F, Em], under, fish, bpm=104, pulse=True, kick_from=under, bright=1600, pad_g=.43); melody(under, fish, 104, 2, g=.15, dens=.5)
sk.pad([45, 57, 64, 69, 76], fish, names - fish + 1, .45, bright=2600, att=.5); melody(fish + 1, names, 88, 3, g=.11, dens=.4, cut=4200)
sk.progression([C, G, Am, F], names, dim, bpm=108, pulse=True, kick_from=names + 3, bright=2000, pad_g=.45); melody(names, dim, 108, 4, g=.16, dens=.55)
sk.pad([45, 52, 57], dim, noren - dim + 1, .45, bright=600)
sk.progression([F, G, C, Am], noren, word, bpm=112, pulse=True, kick_from=noren, hats_from=noren + 4, bright=2300, pad_g=.47); melody(noren, word, 112, 5, g=.17, dens=.65)
sk.progression([C, F, G, C], word, tease, bpm=120, pulse=True, kick_from=word, hats_from=word, bright=2600, pad_g=.5); melody(word, tease, 120, 6, g=.18, dens=.7)
sk.progression([Dm, G], tease, end, bpm=96, pulse=True, bright=1600, pad_g=.45); melody(tease + 1, end, 96, 7, g=.13, dens=.4)
sk.pad(C + [67, 72], end, DUR - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .28)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
e0, e1 = EV['escalator']; sk.hum(e0 + .3, e1 - e0, f=64, g=.1, cut=420); [sk.click(e0 + .6 + i * .65, .07, 500, .03, pan=-.3) for i in range(int((e1 - e0 - 1) / .65))]
sk.sparkle(EV['lightsOn'][0] + .2, 1.3, n=50, g=.016)
f0, f1 = EV['frost']; sk.sparkle(f0, f1 - f0, n=220, g=.014); sk.bed(f0, f1 - f0 + 1, cut=3000, g=.05)
for i, t in enumerate(EV['signs']): sk.click(t, .2, 1900, .02, pan=(i % 3 - 1) * .4); sk.bell(72 + [0, 4, 7, 9, 12, 16, 19][i], t + .03, .05, pan=(i % 3 - 1) * .4, d=1.4, buf='sfx')
sk.whoosh(dim, 1.6, .16, up=False); sk.bell(57, dim + .3, .06, d=3.0, buf='sfx')
for i, t in enumerate(EV['stalls']): sk.click(t + .3, .12, 700 + (i % 5) * 110, .04, pan=(i % 5 - 2) * .3)
b0, b1 = EV['bustle']; sk.bed(b0, b1 - b0, cut=1600, g=.1); [sk.click(b0 + .4 + i * .31, .06, 1000 + (i % 4) * 200, .03, pan=(-1) ** i * .5) for i in range(int((b1 - b0 - 1) / .31))]
for i, t in enumerate(EV['boxes']): sk.boom(t, .22, .4); sk.click(t, .2, 300 + i * 40, .06)
sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
