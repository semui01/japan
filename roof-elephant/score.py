import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
EV = json.load(open('events.json')); sk = Kit(duration=90, seed=19)
crane, roofs, cable, war, trains, need, taka, ride, big, stairs, song, tower, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: dusk callback -> bright rooftops -> hush for the war -> hopeful trains -> playful Taka-chan -> heavy steps -> song -> tease
sk.pad(Am + [64], 0, crane + 1, .5, bright=1500); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([69, 72, 76])]
sk.progression([C, G, Am, F], crane, war, bpm=104, pulse=True, kick_from=roofs, hats_from=cable, bright=2000, pad_g=.44); melody(crane, war, 104, 1, dens=.6)
sk.pad([45, 52, 57], war, trains - war + 1.5, .5, bright=650); sk.bell(64, war + 1.0, .06); sk.bell(60, war + 2.4, .05)
sk.progression([F, C, G, Am], trains, taka, bpm=96, pulse=True, kick_from=trains + 2.5, bright=1600, pad_g=.44); melody(trains + 1.5, taka, 96, 2, g=.15, dens=.5)
sk.progression([C, F, G, C], taka, big, bpm=112, pulse=True, kick_from=taka, hats_from=taka + 2, bright=2400, pad_g=.46); melody(taka, big, 112, 3, g=.18, dens=.7)
sk.progression([Dm, Am], big, stairs, bpm=96, pulse=True, kick_from=big, bright=1500, pad_g=.44); melody(big, stairs - 1.5, 96, 4, g=.14, dens=.45)
sk.pad([38, 45, 50, 53], stairs, song - stairs + 1, .5, bright=800)
sk.progression([C, Am, F, G], song, tease, bpm=100, pulse=True, kick_from=song, bright=2000, pad_g=.46)
for k, m in enumerate([79, 76, 79, 76, 72, 74, 76, 74, 72]): sk.bell(m, song + .5 + k * .5, .09, pan=(-1) ** k * .3, d=1.2)
sk.progression([Am, F], tease, end, bpm=96, pulse=True, bright=1400, pad_g=.45); melody(tease, end, 96, 6, g=.15, dens=.45)
sk.pad(C + [67, 72], end, 90 - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .12, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
for t in EV['footstep']: sk.boom(t, .42, .9); sk.put('sfx', t, lp(sk.noise(.2), 300) * np.exp(-tt(.2) * 18), 0, .3)
a, b = EV['crane']; sk.hum(a, b - a, f=40, g=.1, cut=400); sk.ticks(a, b, g=.04, start_gap=.22, accel=1.0)
a, b = EV['war']; sk.bed(a, b - a + 1, cut=500, g=.25)
tr = EV['train'][0]; sk.hum(tr, 4.5, f=48, g=.12); [sk.click(tr + .3 + k * .42 + o, .11, 380, .06, pan=-.3) for k in range(9) for o in (0, .11)]
# trumpet toots and drum hits
tp = EV['trumpet'][0]
for k, m in enumerate([67, 72, 76]):
    t = tt(.28); s = np.sign(np.sin(2 * np.pi * mf(m) * t)) * .5 + np.sin(2 * np.pi * mf(m) * t); sk.put('sfx', tp + .15 + k * .3, lp(s, 2200) * env(len(t), .02, .08), .3, .16)
d0, d1 = EV['drum']
for k in range(int((d1 - d0) / .35)): sk.put('sfx', d0 + .2 + k * .35, (np.sin(2 * np.pi * 150 * tt(.18)) + .4 * lp(sk.noise(.18), 2500)) * np.exp(-tt(.18) * 22), .4, .35)
w = EV['water']; sk.bed(w[0], w[1] - w[0], cut=3000, g=.07); sk.bed(w[2], w[3] - w[2], cut=3000, g=.07)
sk.ticks(EV['count'][0], EV['count'][1], g=.08, start_gap=.14, accel=.97)
sk.whoosh(end, 1.0, .4); sk.sparkle(end + .5, 1.2, n=60, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
