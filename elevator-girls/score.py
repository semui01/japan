import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=29)
name, first, ride, hire, handle, miss, rank, mag, spread, trips, strain, auto, taka, matsu, tease, end = EV['scene']
admired = EV['stamp'][14]
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: art-deco open -> who-was-first pulse -> brisk "by hand" -> magazine swing -> busy postwar -> hush for the strain -> warm present -> smoky tease
sk.pad(C + [67], 0, first + 1, .5, bright=1800); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.progression([Am, F, C, G], first, hire, bpm=96, pulse=True, kick_from=ride, bright=1500, pad_g=.42); melody(first, hire, 96, 1, g=.15, dens=.5)
sk.progression([C, F, G, Am], hire, rank, bpm=108, pulse=True, kick_from=hire, hats_from=handle, bright=2100, pad_g=.45); melody(hire, rank, 108, 2, g=.17, dens=.6)
sk.progression([F, G, Em, Am], rank, spread, bpm=100, pulse=True, kick_from=mag, bright=1700, pad_g=.44); melody(rank, spread, 100, 3, g=.15, dens=.5)
sk.progression([C, G, Am, F], spread, strain, bpm=116, pulse=True, kick_from=spread, hats_from=trips, bright=2300, pad_g=.46); melody(spread, strain, 116, 4, g=.17, dens=.65)
sk.pad([45, 52, 57], strain, admired - strain + 1, .5, bright=700)
sk.progression([F, C], admired, auto, bpm=100, pulse=True, bright=2000, pad_g=.45); [sk.bell(m, admired + k * .14, .09, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
sk.progression([Dm, Am], auto, taka, bpm=88, pulse=True, bright=1100, pad_g=.4); melody(auto + 1, taka, 88, 5, g=.1, dens=.3, cut=1800)
sk.progression([C, G, Am, F], taka, tease, bpm=104, pulse=True, kick_from=taka + 1, hats_from=matsu, bright=2400, pad_g=.48); melody(taka, tease, 104, 6, g=.18, dens=.6)
sk.progression([Dm, Am], tease, end, bpm=90, pulse=True, bright=1100, pad_g=.45); melody(tease + 2, end, 90, 7, g=.12, dens=.35, cut=2000)
sk.pad(C + [67, 72], end, DUR - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
for t in EV['ding']: sk.bell(88, t, .16, buf='sfx', d=1.6)
for t in EV['doors']: sk.hum(t - .4, 2.4, f=70, g=.12, cut=500); sk.whoosh(t + .4, 1.0, .22)
for t in EV['lever']: [sk.click(t + .5 + i * 1.05, .2, 700, .05, pan=.2) for i in range(3)]
for t in EV['rise']: sk.whoosh(t, 1.3, .22, up=True); sk.hum(t, 2.4, f=90, g=.1, cut=600)
c0 = EV['clunk'][0]; sk.boom(c0, .45, .8); sk.click(c0 + .02, .3, 500, .06); sk.click(c0 + .22, .2, 420, .05)
for i, t in enumerate(EV['tick']): sk.click(t, .22, 1800 if i % 2 else 1500, .03, pan=(-1) ** i * .3); sk.whoosh(t, .3, .1, up=(i % 2 == 0))
a0 = EV['autoSwitch'][0]; [sk.blip(a0 + .5 + i * .26, .12, 1568, .08, pan=.3) for i in range(8)]
sk.bed(tease, end - tease, cut=500, g=.16); sk.crackle(tease + .5, 3.0, n=90, g=.05)
sk.sparkle(admired + .1, 1.2, n=60, g=.02); sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
