import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
EV = json.load(open('events.json')); sk = Kit(duration=90, seed=11)
check, roots, tatami, glass, news, palace, esc, door, pile, date, burn, rebuilt, ginza, every, tease, end = EV['scene']
quake = EV['quake'][0]
C, Am, F, G, Dm, E7 = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 56, 59]
PENT = [72, 74, 76, 79, 81, 84]; INSEN = [69, 70, 74, 76, 79, 81]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, scale=PENT, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(scale[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: grand open -> Edo koto -> modernising pulse -> palace bustle -> silence + quake -> embers -> rebuild -> bright crowd -> tease
sk.pad(C + [67], 0, check + 1, .5, bright=1800); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.progression([Am, F], check, roots, bpm=96, pulse=True, bright=1300, pad_g=.4)
sk.pad([45, 52, 57], roots, glass - roots + 1, .4, bright=1100); melody(roots, glass, 84, 7, g=.2, dens=.6, scale=INSEN, cut=2600)
sk.progression([C, Am, F, G], glass, palace, bpm=98, pulse=True, kick_from=news, bright=1600, pad_g=.42); melody(glass, palace, 98, 2)
sk.progression([F, C, G, Am], palace, date, bpm=104, pulse=True, kick_from=palace, hats_from=esc, bright=2100, pad_g=.45); melody(palace, pile, 104, 3, g=.17, dens=.6)
sk.pad([45, 52, 56], date, quake - date + .5, .35, bright=700)
sk.pad([45, 52, 57], quake, burn - quake + 1, .4, bright=600); sk.pad([41, 48, 53, 57], burn, rebuilt - burn + 1, .5, bright=900); sk.bell(69, burn + 2.6, .07); sk.bell(76, burn + 3.6, .06)
sk.progression([Dm, G, C, Am], rebuilt, every, bpm=100, pulse=True, kick_from=ginza, bright=1700, pad_g=.45); melody(ginza, every, 100, 4, dens=.5)
sk.progression([C, G, Am, F], every, tease, bpm=108, pulse=True, kick_from=every, hats_from=every, bright=2400, pad_g=.48); melody(every, tease, 108, 5, g=.19, dens=.7)
sk.progression([Am, F], tease, end, bpm=100, pulse=True, bright=1400, pad_g=.45)
sk.pad(C + [67, 72], end, 90 - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .12, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
sk.whoosh(EV['cloth'][0] + .5, 1.0, .25, up=False); sk.whoosh(EV['paper'][0] + .35, .7, .35)
sk.hum(EV['esc'][0], EV['esc'][1] - EV['esc'][0], f=64, g=.08); sk.ticks(EV['esc'][0] + .2, EV['esc'][1], g=.05, start_gap=.2, accel=1.0)
for k in range(12): sk.put('sfx', door + .3 + k * .28, lp(sk.noise(.1), 700) * np.exp(-tt(.1) * 45), np.sin(k) * .5, .3)
sk.crackle(EV['pile'][0], 2.4, n=120, g=.16)
for k in range(14): sk.put('sfx', EV['pile'][0] + .15 + k * .13, lp(sk.noise(.1), 900) * np.exp(-tt(.1) * 45), np.sin(k) * .6, .3)
sk.rumble(quake - .6, quake + .1, g=.5); sk.boom(quake, 1.0, 2.8); sk.rumble(quake, quake + 1.6, g=.4, cut=110); sk.crackle(quake + .1, 2.0, n=180, g=.14)
sk.crackle(EV['fire'][0], EV['fire'][1] - EV['fire'][0], n=500, g=.12); sk.bed(EV['fire'][0], EV['fire'][1] - EV['fire'][0], cut=500, g=.22)
for k in range(int((EV['steps'][1] - EV['steps'][0]) / .32)): sk.put('sfx', EV['steps'][0] + k * .32, lp(sk.noise(.09), 800) * np.exp(-tt(.09) * 50), (-1) ** k * .4, .22)
tr = EV['train'][0]; sk.hum(tr, 2.6, f=48, g=.14); [sk.click(tr + .2 + k * .36 * (1 + k * .06) + o, .12, 380, .06, pan=-.3) for k in range(6) for o in (0, .11)]
sk.whoosh(end, 1.0, .4); sk.sparkle(end + .5, 1.2, n=60, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
