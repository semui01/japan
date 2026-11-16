import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=32)
fire, toll, story, spread, record, chute, shop, inoue, slow, fourteen, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [69, 72, 74, 76, 79, 81]
def melody(t0, t1, bpm, seed, g=.1, dens=.3, cut=1800):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .9, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# --- music: sober throughout. quiet dawn -> low drone for the fire -> near silence for the toll -> bare minor pulse for story, papers and record
#     -> a little light for the verdict -> hush for the fourteen -> warm, soft tease. No drums anywhere.
sk.pad(Am + [64], 0, fire + 1, .42, bright=1100); [sk.bell(m, .4 + k * .5, .05, pan=(k - 1) * .4) for k, m in enumerate([69, 72, 76])]
sk.pad([33, 45, 52], fire, toll - fire + 1.5, .5, bright=500); sk.pad([45, 51, 57], fire + 2, toll - fire - 1, .22, bright=700)
sk.pad([33, 45], toll, story - toll + 1, .4, bright=420)
sk.progression([Am, Em], story, spread, bpm=66, pulse=True, bright=800, pad_g=.34); melody(story + 1, spread, 66, 1, g=.07, dens=.22)
sk.progression([Dm, Am, F, Em], spread, inoue, bpm=76, pulse=True, bright=1000, pad_g=.36); melody(spread, inoue, 76, 2, g=.09, dens=.3)
sk.progression([F, C, Am, Em], inoue, fourteen, bpm=72, pulse=True, bright=1300, pad_g=.38); melody(inoue, fourteen - 1, 72, 3, g=.1, dens=.3, cut=2200)
sk.pad([45, 52, 57, 64], fourteen, tease - fourteen + 1.2, .42, bright=650)
sk.progression([F, C], tease, end, bpm=72, pulse=True, bright=1500, pad_g=.4); [sk.bell(m, tease + 1.2 + k * .9, .05, pan=(-1) ** k * .4) for k, m in enumerate([76, 79, 84, 81, 79])]
sk.pad(C + [67, 72], end, DUR - end, .5, bright=1800, att=.3); [sk.bell(m, end + .1 + k * .16, .07, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79])]
# --- sfx: sparse and soft; nothing percussive on the fire, the toll or the fourteen
for t in EV['scene']: sk.whoosh(t - .2, 1.1, .14)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .08, [660, 740, 880][i % 3], .14, pan=(-1) ** i * .3)
for i, t in enumerate(EV['soft']): sk.bell([81, 84, 79][i % 3], t, .035, pan=(-1) ** i * .3, d=1.4, buf='sfx')
for t in EV['stamp']: sk.boom(t + .02, .16, .6)
s0, s1 = EV['smoke']; sk.bed(s0, toll - s0 + 1.5, cut=420, g=.2); sk.rumble(s1, toll + 1, g=.35, cut=110)
for i, t in enumerate(EV['lights']): sk.bell(69 if i % 2 else 64, t, .04, pan=(i % 7 - 3) * .2, d=2.2, buf='sfx')
sk.bell(57, EV['dim'][0], .07, d=3.0, buf='sfx')
for t in EV['paper']: n = sk.noise(.5); sk.put('sfx', t + .1, bp(n, 1500, 5000) * env(len(n), .05, .35), .2, .08)
for t in EV['draw']: n = sk.noise(1.3); sk.put('sfx', t, bp(n, 1800, 5200) * (0.5 + .5 * np.sin(tt(1.3) * 11) ** 2) * env(len(n), .1, .3), .2, .05)
sk.bell(76, EV['flower'][0] + .3, .06, d=3.5, buf='sfx'); sk.bell(69, EV['flower'][1], .06, d=3.5, buf='sfx')
sk.sparkle(EV['glow'][0] + .6, 2.4, n=60, g=.012); sk.whoosh(end, .9, .2)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
