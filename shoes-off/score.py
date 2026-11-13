import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
EV = json.load(open('events.json')); sk = Kit(duration=75, seed=9)
S = EV['scene']; why, cards, train, night, cmp_, car, dokin, rest, store, pile, end = S
twist = EV['rewind'][0]; quake = EV['quake'][0]
C, Am, F, G = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=3200, pan=r.uniform(-.4, .4))
        t += beat / 2
def clack(t0, t1, every=.72, g=.1):
    t = t0
    while t < t1:
        for o in (0, .11): sk.click(t + o, g, 380, .06, pan=-.3); 
        t += every
# --- music: sparse hook -> gentle pulse -> brighter car boom -> hush -> tension -> release
sk.pad(C, 0, why + 1, .45, bright=1400); sk.bell(84, .45, .07); sk.bell(79, 1.5, .06)
sk.progression([C, Am, F, G], why, train, bpm=96, pulse=True, bright=1500, pad_g=.42); melody(why, train, 96, 1)
sk.progression([F, C, Am, G], train, car, bpm=96, pulse=True, kick_from=train, bright=1600, pad_g=.42); melody(train, night, 96, 2); melody(cmp_, car, 96, 3, dens=.45)
for k, m in enumerate([84, 81, 79, 76]): sk.bell(m, night + .4 + k * .9, .06, pan=(-1) ** k * .4)
sk.progression([C, G, Am, F], car, rest, bpm=104, pulse=True, kick_from=car, hats_from=car + 2, bright=2200, pad_g=.45); melody(car, rest, 104, 4, g=.18, dens=.65)
sk.pad([45, 52, 57, 64], rest, twist - rest + 1, .5, bright=1100); sk.bell(76, rest + .6, .07); sk.bell(72, rest + 1.8, .06)
sk.progression([Am, F, Am, [40, 52, 56, 59]], store, quake, bpm=100, pulse=True, kick_from=pile, bright=1300, pad_g=.5); melody(store, pile, 100, 5, g=.13, dens=.4)
sk.pad([45, 52, 57], quake, 2.2, .4, bright=700)
sk.pad(C + [67, 72], end, 75 - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .12, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
sk.tape(twist, store - twist, g=.12, rev_from=True, src_span=(car, car + 8))
# --- sfx
clack(0, why, g=.13); clack(train, night + 4.5, g=.1); sk.hum(0, why, f=52, g=.08); sk.hum(train, cmp_ - train, f=52, g=.07)
for t in S: sk.whoosh(t, .7, .32)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .32, .5); sk.click(t + .02, .25, 1400, .04)
for i, t in enumerate(EV['step']): sk.put('sfx', t, lp(sk.noise(.12), 500) * np.exp(-tt(.12) * 40), (-1) ** i * .3, .5)
for i, t in enumerate(EV['tick']): sk.click(t, .18, 2000 + i * 180, pan=.4)
for t in EV['car']: sk.hum(t, 1.8, f=70, g=.12, cut=500); sk.whoosh(t + .6, 1.2, .22)
sk.bed(rest, twist - rest, cut=700, g=.2)
sk.crackle(EV['pile'][0], 2.4, n=120, g=.16)
for k in range(14): sk.put('sfx', EV['pile'][0] + .15 + k * .13, lp(sk.noise(.1), 900) * np.exp(-tt(.1) * 45), np.sin(k) * .6, .3)
sk.rumble(quake - .5, quake + .1, g=.5); sk.boom(quake, 1.0, 2.6); sk.rumble(quake, quake + 1.4, g=.35, cut=110); sk.crackle(quake + .1, 1.8, n=160, g=.14)
sk.whoosh(end, 1.0, .4); sk.sparkle(end + .5, 1.2, n=60, g=.02)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
