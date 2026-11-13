import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
EV = json.load(open('events.json')); sk = Kit(duration=92, seed=13)
hands, idea, crowd, test, take, umeda, promise, dining, cut, legend, tokyo, shoe, tease, end = EV['scene']
C, Am, F, G, Dm, Em = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62], [40, 52, 55, 59]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
def clack(t0, n=6, g=.12, every=.36):
    for k in range(n):
        for o in (0, .11): sk.click(t0 + k * every * (1 + k * .05) + o, g, 380, .06, pan=-.3)
# --- music: night-station callback -> curious pulse -> brisk commuter groove -> build -> warm dining hall -> Tokyo -> playful tease
sk.pad(Am + [64], 0, hands + 1, .5, bright=1500); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([69, 72, 76])]
sk.progression([Am, F], hands, idea, bpm=100, pulse=True, bright=1400, pad_g=.4)
sk.progression([C, Am, F, G], idea, test, bpm=104, pulse=True, kick_from=crowd, bright=1700, pad_g=.42); melody(idea, test, 104, 1)
sk.progression([Dm, G, C, Am], test, umeda, bpm=100, pulse=True, kick_from=take, bright=1600, pad_g=.42); melody(test, umeda, 100, 2, dens=.45)
sk.progression([F, G, Am, C], umeda, dining, bpm=108, pulse=True, kick_from=umeda, hats_from=umeda + 3, bright=2300, pad_g=.46); melody(umeda, dining, 108, 3, g=.18, dens=.65)
sk.progression([F, C, Dm, G], dining, tokyo, bpm=92, pulse=True, bright=1500, pad_g=.48); melody(dining, tokyo, 92, 4, g=.15, dens=.45, cut=2600)
sk.progression([C, G, Am, F], tokyo, tease, bpm=106, pulse=True, kick_from=tokyo, hats_from=shoe, bright=2200, pad_g=.45); melody(tokyo, tease, 106, 5, dens=.6)
sk.progression([F, G], tease, end, bpm=96, pulse=True, bright=1700, pad_g=.45); melody(tease, end, 96, 6, g=.2, dens=.7)
sk.pad(C + [67, 72], end, 92 - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .12, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# --- sfx
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV['pop']): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV['stamp']: sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
for i, t in enumerate(EV['floors']): sk.blip(t, .16, 440 * 2 ** (i * 2 / 12), .16, pan=-.2); sk.click(t, .2, 900, .05)
for t in EV['tally']: sk.click(t, .2, 2600, .03, pan=-.4)
for t in EV['coins']: [sk.blip(t + .2 + k * .18, .06, 2400 + (k % 3) * 400, .08, pan=np.sin(k) * .5) for k in range(10)]
for t in EV['train']: sk.hum(t, 2.6, f=48, g=.13); clack(t + .2)
for a, d in [(EV['steps'][0], 2.4), (test + .3, 5.0), (EV['steps'][1], 5.0)]:
    for k in range(int(d / .3)): sk.put('sfx', a + k * .3, lp(sk.noise(.09), 800) * np.exp(-tt(.09) * 50), (-1) ** k * .4, .2)
sk.bed(dining, tokyo - dining, cut=1200, g=.12)
for k in range(8): sk.click(dining + 1 + k * 1.9, .08, 4200, .02, pan=np.sin(k * 2) * .7)
sk.whoosh(EV['pour'][0] + .6, 1.2, .2, up=False); sk.whoosh(EV['draw'][0] + .8, 1.6, .28)
sk.whoosh(end, 1.0, .4); sk.sparkle(end + .5, 1.2, n=60, g=.02)
sk.mix('vo_full.wav', 'mix.wav'); sk.mix(None, 'mix_novo.wav')
