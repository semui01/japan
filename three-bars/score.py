import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=61)
post, first, why, hearts, cross, kinds, isetan, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: a wry, sparse open for the flop -> light postcard waltz feel -> newsprint pulse -> a stiller minor turn for 1958
#     -> warm hearts -> brightening through the 1960s and the three kinds -> biggest groove for the record fair -> soft tease
sk.pad(Am + [64], 0, post + 1, .45, bright=1400); [sk.bell(m, .3 + k * .3, .07, pan=(k - 1) * .4) for k, m in enumerate([76, 72, 69])]
sk.progression([F, C, G, Am], post, first, bpm=92, pulse=True, bright=1700, pad_g=.42); melody(post, first, 92, 1, g=.14, dens=.5)
sk.progression([Am, F, Dm, G], first, why, bpm=98, pulse=True, kick_from=first + 2, bright=1500, pad_g=.42); melody(first, why, 98, 2, g=.14, dens=.45)
sk.progression([Dm, Am], why, hearts, bpm=80, pulse=True, bright=900, pad_g=.4); melody(why + 1, hearts, 80, 3, g=.09, dens=.3, cut=1900)
sk.progression([F, G, C, Am], hearts, cross, bpm=100, pulse=True, kick_from=hearts + 4, bright=2000, pad_g=.46); melody(hearts, cross, 100, 4, g=.16, dens=.55)
sk.progression([C, G, Am, F], cross, isetan, bpm=108, pulse=True, kick_from=cross, hats_from=kinds, bright=2300, pad_g=.47); melody(cross, isetan, 108, 5, g=.17, dens=.6)
sk.progression([C, F, G, C], isetan, tease, bpm=116, pulse=True, kick_from=isetan + 2, hats_from=isetan + 2, bright=2600, pad_g=.5); melody(isetan, tease, 116, 6, g=.18, dens=.7)
sk.pad([48, 55, 62, 64], tease, end - tease + 1, .45, bright=1300); [sk.bell(m, tease + .6 + k * .8, .05, pan=(-1) ** k * .4) for k, m in enumerate([84, 79, 76, 72])]
sk.pad(C + [67, 72], end, DUR - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .28)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
def scratch(a, b, g): n = sk.noise(b - a); sk.put('sfx', a, bp(n, 1800, 5200) * (0.5 + .5 * np.sin(tt(b - a) * 11) ** 2) * env(len(n), .1, .2), .2, g)
l0 = EV['land'][0]; sk.whoosh(l0 - .7, .7, .2, up=False); sk.click(l0, .2, 320, .06)
scratch(EV['write'][0], EV['write'][1], .06); scratch(EV['icing'][0], EV['icing'][1], .05)
a0 = EV['album'][0]; sk.boom(a0, .3, .5); sk.click(a0, .25, 240, .08)
g0, g1 = EV['grid']; sk.ticks(g0, g1, g=.07, start_gap=.12, accel=.96)
sk.sparkle(EV['hearts'][0] + .2, 1.6, n=60, g=.016); sk.bell(84, EV['soft'][0] + .3, .06, d=2.5, buf='sfx')
sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
