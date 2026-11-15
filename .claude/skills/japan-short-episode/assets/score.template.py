# Per-episode score. Run from the episode work dir after exporting events.json (EV=1 stills). Edit the music map per beat.
import sys, json, os; sys.path.insert(0, 'tools' if os.path.isdir('tools') else os.environ['SK']); from soundkit import *
EV = json.load(open('events.json')); DUR = json.load(open('timeline.json'))['duration']; sk = Kit(duration=DUR, seed=7)
S = EV['scene']; end = EV['end'][0]
C, Am, F, G, Dm = [48, 55, 60, 64], [45, 52, 57, 60], [41, 53, 57, 60], [43, 55, 59, 62], [50, 53, 57, 62]
PENT = [72, 74, 76, 79, 81, 84]
def melody(t0, t1, bpm, seed, g=.16, dens=.55, cut=3200):
    r = np.random.default_rng(seed); beat = 60 / bpm; t = t0; i = 2
    while t < t1:
        if r.random() < dens:
            i = int(np.clip(i + r.integers(-2, 3), 0, 5)); sk.pluck(PENT[i], t, .7, g, cut=cut, pan=r.uniform(-.4, .4))
        t += beat / 2
# music: sparse open -> pulse from beat 2 -> a hush for the turn -> bright legacy -> soft tease -> end chord
sk.pad(C + [67], 0, S[0] + 1, .5, bright=1800); [sk.bell(m, .3 + k * .25, .08, pan=(k - 1) * .4) for k, m in enumerate([72, 76, 79])]
sk.progression([C, Am, F, G], S[0], S[-2], bpm=100, pulse=True, kick_from=S[1], bright=1800, pad_g=.44); melody(S[0], S[-2], 100, 1)
sk.progression([Am, F], S[-2], end, bpm=94, pulse=True, bright=1400, pad_g=.45)
sk.pad(C + [67, 72], end, DUR - end, .6, bright=2400, att=.05); [sk.bell(m, end + .05 + k * .1, .1, pan=(k - 1.5) * .3) for k, m in enumerate([72, 76, 79, 84])]
# sfx: one sound per visual event
for t in EV['scene']: sk.whoosh(t, .7, .3)
for i, t in enumerate(EV.get('pop', [])): sk.blip(t + .05, .14, [880, 990, 1175, 1320][i % 4], .14, pan=(-1) ** i * .3)
for t in EV.get('stamp', []): sk.boom(t + .02, .3, .5); sk.click(t + .02, .25, 1400, .04)
sk.whoosh(end, .8, .4); sk.sparkle(end + .3, 1.0, n=50, g=.02)
# narrated mix keeps music/SFX low under the voice (the level the user asked for after episode 3)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
