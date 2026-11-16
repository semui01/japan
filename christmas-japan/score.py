import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=41)
mass, play, ban, ginza, papers, cal, eve, cafe, dance, vanish, postwar, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: night open -> candlelit hush -> Ginza brightens -> newspaper bounce -> still, plain pad for 25 Dec 1926
#     -> night out and the boom (brightest) -> word vanishes (hush) -> postwar roar -> New Year tease
sk.pad(C + [67], 0, mass + 1, .5, bright=1700); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.pad([45, 52, 57, 64], mass, ginza - mass + 1, .45, bright=900); [sk.bell(m, mass + .8 + k * 1.3, .05, pan=(-1) ** k * .4) for k, m in enumerate([76, 79, 81, 76, 72, 69, 64])]
sk.progression([C, G, Am, F], ginza, cal, bpm=100, pulse=True, kick_from=ginza + 4, hats_from=papers, bright=2000, pad_g=.45); melody(ginza + 2, cal, 100, 1, g=.16, dens=.55)
sk.pad([45, 52, 57], cal, eve - cal + 1, .45, bright=650)
sk.progression([F, G, C, Am], eve, vanish, bpm=112, pulse=True, kick_from=eve, hats_from=cafe, bright=2400, pad_g=.48); melody(eve, vanish, 112, 2, g=.18, dens=.65)
sk.pad([45, 52, 57], vanish, postwar - vanish + 1, .45, bright=600)
sk.progression([C, F, G, C], postwar, tease, bpm=116, pulse=True, kick_from=postwar, hats_from=postwar, bright=2600, pad_g=.5); melody(postwar, tease, 116, 3, g=.19, dens=.7)
sk.progression([Dm, G], tease, end, bpm=96, pulse=True, bright=1700, pad_g=.45); melody(tease + 1, end, 96, 4, g=.14, dens=.4)
sk.pad(C + [67, 72], end, DUR - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .26)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
for i, t in enumerate(EV['soft']): sk.bell([69, 64, 72][i % 3], t, .04, d=2.0, buf='sfx')
for t in EV['lightsOn']: sk.sparkle(t + .2, 1.4, n=50, g=.016)
for i, t in enumerate(EV['candlesOut']): sk.whoosh(t, .3, .09, up=False); sk.bell(81 - i * 2, t, .03, d=1.2, buf='sfx', pan=(i - 3) * .2)
for i, t in enumerate(EV['cards']): n = sk.noise(.22); sk.put('sfx', t + .25, bp(n, 1200, 5000) * env(len(n), .01, .18), (-1) ** i * .3, .16); sk.click(t + .4, .16, 420, .05)
f0 = EV['flip'][0]; n = sk.noise(.5); sk.put('sfx', f0, bp(n, 1500, 5500) * env(len(n), .05, .35), 0, .1)
r0 = EV['range'][0]; sk.ticks(r0, r0 + 2.2, g=.06)
d0, d1 = EV['dance']; [sk.click(d0 + i * .27, .1, 900 if i % 2 else 600, .04, pan=(-1) ** i * .4) for i in range(int((d1 - d0) / .27))]
sk.whoosh(EV['fade'][0], 2.0, .14, up=False)
b0 = EV['bells'][0]; [sk.bell(m, b0 + k * .16, .09, pan=(k - 2) * .3, buf='sfx', d=1.8) for k, m in enumerate([84, 88, 91, 88, 96])]
for i, t in enumerate(EV['bags']): sk.blip(t, .08, 660 + i * 60, .08, pan=(i - 3.5) * .2)
sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
