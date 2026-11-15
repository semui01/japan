import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
EV = json.load(open('events.json')); sk = Kit(duration=90, seed=23)
symbol, visit, beach, design, letter, road, still, tease, end = EV['scene']
dawn = EV['dawn'][0]
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: bright open -> postwar street -> calm beach -> playful design -> studio -> long night -> sunrise -> warm present -> art-deco tease
sk.pad(C + [67], 0, symbol + 1, .5, bright=1800); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.progression([Am, F, C, G], symbol, beach, bpm=96, pulse=True, kick_from=visit, bright=1500, pad_g=.42); melody(symbol, beach, 96, 1, g=.15, dens=.5)
sk.pad([48, 55, 62, 64], beach, design - beach + 1, .5, bright=1200); [sk.bell(m, beach + 1 + k * 1.1, .06, pan=(-1) ** k * .4) for k, m in enumerate([76, 79, 84, 81, 79])]
sk.progression([F, G, C, Am], design, road, bpm=104, pulse=True, kick_from=design, hats_from=letter, bright=2100, pad_g=.45); melody(design, road, 104, 2, g=.17, dens=.6)
sk.pad([45, 52, 57], road, dawn - road + 1, .5, bright=700); sk.progression([Am, Em], road + 1, dawn - .5, bpm=80, pulse=True, bright=800, pad_g=.2); melody(road + 1, dawn - 1, 80, 3, g=.1, dens=.3, cut=1800)
sk.progression([C, G, Am, F], dawn, tease, bpm=104, pulse=True, kick_from=dawn + 2, hats_from=still, bright=2400, pad_g=.48); melody(dawn, tease, 104, 4, g=.18, dens=.65)
[sk.bell(m, dawn + k * .14, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
sk.progression([Dm, Am], tease, end, bpm=92, pulse=True, bright=1400, pad_g=.45); melody(tease + 2, end, 92, 5, g=.14, dens=.4)
sk.pad(C + [67, 72], end, 90 - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
k0 = EV['knock'][0]; [sk.put('sfx', k0 + i * .2, np.sin(2 * np.pi * 220 * tt(.09)) * np.exp(-tt(.09) * 40), -.2, .5) for i in range(3)]
a, b = EV['waves']; sk.bed(a, b - a + 1, cut=1800, g=.2); [sk.whoosh(a + 1 + i * 2.2, 2.0, .16, up=(i % 2 == 0)) for i in range(3)]
for a, b, g in [(EV['brush'][0], EV['brush'][1], .09), (EV['pen'][0], EV['pen'][1], .07)]:
    n = sk.noise(b - a); s = bp(n, 1500, 5000) * (0.5 + .5 * np.sin(tt(b - a) * 9) ** 2) * env(len(n), .1, .2); sk.put('sfx', a, s, .2, g)
for i, t in enumerate(EV['crumple']): sk.put('sfx', t, hp(sk.noise(.16), 2500) * np.exp(-tt(.16) * 22) * (1 + .5 * np.sin(tt(.16) * 300)), np.sin(i) * .6, .22)
sk.sparkle(dawn + .2, 1.6, n=70, g=.02)
d0 = EV['ding'][0]; sk.bell(88, d0, .16, buf='sfx', d=1.6); sk.hum(EV['doors'][0] - .6, 2.4, f=70, g=.12, cut=500); sk.whoosh(EV['doors'][0] + .5, 1.0, .25)
sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
