import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
EV = json.load(open('events.json')); sk = Kit(duration=90, seed=17)
modern, d1907, hall, treat, eyes, steps, dep, ando, build, flag, copy, plates, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: playful open -> warm dining hall -> curious ritual -> hush for the Depression -> build the plate -> bright legacy -> dusk tease
sk.pad(C + [67], 0, modern + 1, .5, bright=1800); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.progression([C, G], modern, d1907, bpm=104, pulse=True, bright=1800, pad_g=.42); melody(modern, d1907, 104, 1, dens=.6)
sk.progression([F, C, Dm, G], d1907, eyes, bpm=96, pulse=True, kick_from=hall, bright=1600, pad_g=.45); melody(d1907, eyes, 96, 2, g=.15, dens=.5)
sk.progression([Am, F, C, G], eyes, dep, bpm=104, pulse=True, kick_from=steps, hats_from=steps, bright=1900, pad_g=.42); melody(eyes, dep, 104, 3, dens=.55)
sk.pad([45, 52, 57], dep, ando - dep + 1, .5, bright=700); sk.bell(69, dep + .8, .07); sk.bell(64, dep + 1.9, .06)
sk.progression([Dm, G], ando, build, bpm=92, pulse=True, bright=1300, pad_g=.42); melody(ando + 3, build, 92, 4, g=.14, dens=.45)
sk.progression([C, F, G, C], build, flag, bpm=108, pulse=True, kick_from=build, hats_from=build + 2, bright=2300, pad_g=.46); melody(build, flag, 108, 5, g=.18, dens=.7)
sk.pad(F + [65], flag, copy - flag + 1, .5, bright=1500); [sk.bell(m, flag + 1.2 + k * .3, .07, pan=(k - 1) * .4) for k, m in enumerate([77, 81, 84])]
sk.progression([C, G, Am, F], copy, tease, bpm=108, pulse=True, kick_from=copy, hats_from=plates, bright=2300, pad_g=.46); melody(copy, tease, 108, 6, g=.18, dens=.65)
sk.progression([Am, F], tease, end, bpm=92, pulse=True, bright=1300, pad_g=.45)
sk.pad(C + [67, 72], end, 90 - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .12, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
sk.ticks(EV['count'][0], EV['count'][1], g=.1, start_gap=.12, accel=.95)
sk.bed(EV['hall'][0], EV['hall'][1] - EV['hall'][0] + 3, cut=1200, g=.14)
for k in range(10): sk.click(EV['hall'][0] + .6 + k * .9, .07, 4200, .02, pan=np.sin(k * 2) * .7)
sk.whoosh(EV['fall'][0] + 1.2, 2.4, .25, up=False)
for t in EV['sparkle']: sk.sparkle(t + .1, 1.0, n=50, g=.02)
a, b = EV['steps']
for k in range(int((b - a) / .22)): sk.put('sfx', a + k * .22, lp(sk.noise(.08), 800) * np.exp(-tt(.08) * 55), (-1) ** k * .4, .2)
sk.boom(tease + 5.9, .35, .8)
sk.whoosh(end, 1.0, .4); sk.sparkle(end + .5, 1.2, n=60, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
