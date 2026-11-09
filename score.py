import json, sys, numpy as np
import os; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tools'))
from soundkit import *
EV = json.load(open('stills/ev/events.json'))
TL = json.load(open('timeline.json'))['lines']
LS = lambda i: TL[i]['s']
sk = Kit(duration=60, seed=9)
r = sk.rng
Am = [45, 57, 60, 64]; F = [41, 57, 60, 65]; C = [48, 55, 60, 64]; G = [43, 55, 59, 62]; Em = [40, 55, 59, 64]
tok = EV['boom'][0]; rec_end = EV['boom'][1]
t_main = LS(3) - .3; t_drop = LS(16) - .25; t_fin = LS(21) - .25; t_end = TL[-1]['e'] + .25

# ---------------- music
# intro: question — airy pad + bells
sk.pad(Am, 0, 4.6, .5, bright=1100, att=1.0)
sk.pad([33, 45], 0, 9.4, .35, bright=260, att=1.5, rel=1.2)
for k, m in enumerate([76, 72, 69, 72, 76, 79, 76, 81]): sk.bell(m, .7 + k * .42, .045, pan=np.sin(k * 1.3) * .6)
# record: pulse enters under the counter
sk.progression([F, G], 4.0, t_main, bpm=100, pulse=True, bright=1300, pad_g=.45)
# countdown groove, building every rank
sk.progression([Am, F, C, G], t_main, t_drop, bpm=100, pulse=True, kick_from=t_main, hats_from=LS(6) - .3, bright=1700, pad_g=.5)
bar = 2.4; beat = .6
t = LS(9) - .3; k = 0                       # arp from Aichi on
arp = [69, 72, 76, 79, 76, 72]
while t < t_drop - .1:
    sk.pluck(arp[k % 6] + 12, t, .35, .06 + .03 * (t > LS(13)), cut=3500, pan=np.sin(k * .8) * .5); t += beat / 2; k += 1
# drop + riser into Tokyo
sk.pad([33, 45, 52], t_drop, tok - t_drop + .2, .5, bright=600, att=.1, rel=.3)
t = t_drop; g = .03; step = .2
while t < tok - .02:
    sk.hat(t, g, pan=r.uniform(-.3, .3)); t += step; step = max(.05, step * .9); g = min(.12, g * 1.12)
# Tokyo: big, bright
sk.pad([36, 48, 55, 60, 64, 67], tok, 3.2, .75, bright=3200, att=.02, rel=2.2)
sk.progression([C, G, Am, F], tok, t_fin, bpm=100, pulse=True, kick_from=tok, hats_from=tok, bright=2400, pad_g=.5)
for k in range(8): sk.bell([84, 79, 76, 72, 76, 79, 84, 88][k], tok + .05 + k * .15, .05, pan=np.sin(k) * .7)
# finale: resolve
sk.pad(F, t_fin, 2.6, .55, bright=2200, att=.4); sk.pad(G, t_fin + 2.4, 2.6, .55, bright=2400, att=.3)
sk.pad([48, 55, 60, 64, 67, 72], t_fin + 4.8, 60 - t_fin - 4.8, .6, bright=2600, att=.4, rel=2.5)
sk.pad([24, 36], t_fin, 60 - t_fin, .45, bright=240, att=.8, rel=2.5)
for k in range(12): sk.bell([72, 76, 79, 84, 79, 76, 77, 81, 84, 79, 83, 86][k], t_fin + .3 + k * .4, .045, pan=np.sin(k * .9) * .6)
for k, m in enumerate([72, 76, 79, 84, 88]): sk.bell(m, t_end + k * .12, .06, pan=(k - 2) * .3, d=3)

# ---------------- sfx
for t0 in EV['title']: sk.blip(t0, .08, 1760, .1, 0)
# swarm: shimmer of arrivals + counter ticks + landing hit
sk.put('sfx', EV['swarm'][0], sweep_lp(sk.noise(2.2), 400, 7000) * env(int(2.2 * SR), 1.2, .4), 0, .12)
sk.sparkle(EV['swarm'][0] + .85, d=1.5, n=220, g=.02)
for t0, d in EV['count']: sk.ticks(t0, t0 + d, g=.09, start_gap=.09, accel=.95)
sk.boom(rec_end, .55, 1.6); sk.click(rec_end, .3, 900, .06)
for t0 in EV['whoosh']: sk.whoosh(t0 + .5, 1.0, .5)
for t0 in EV['reveal']:
    sk.boom(t0, .35, 1.0); sk.click(t0, .35, 1200, .05); sk.blip(t0 + .02, .12, 1568, .3, 0)
for t0 in EV['pop']: sk.blip(t0, .1, r.choice([1046, 1318, 1568]), .1, r.uniform(-.4, .4))
for t0 in EV['sparkle']: sk.sparkle(t0, d=.7, n=50, g=.025)
for t0 in EV['type']:
    for k in range(5): sk.click(t0 + k * .05, .12, r.uniform(2200, 3400), pan=.3)
for a, b in EV['riser']:
    sk.put('sfx', a, sweep_lp(sk.noise(b - a), 200, 8000) * np.linspace(0, 1, int((b - a) * SR)) ** 2, 0, .35)
    sk.rumble(a, b, .5, 120)
sk.boom(tok, 1.0, 2.8); sk.put('sfx', tok, hp(sk.noise(1.6), 3000) * np.exp(-tt(1.6) * 3.2), 0, .18)  # impact + crash
sk.sparkle(tok + .05, d=1.2, n=160, g=.03)
for t0 in EV['chime']: sk.bell(88, t0, .08, 0, 2, buf='sfx'); sk.bell(84, t0 + .1, .06, .3, 2, buf='sfx')
for k, t0 in enumerate(EV['hop']): sk.blip(t0, .1, [784, 880, 988, 1175, 1318][k], .14, (k - 2) * .3)
sk.bed(0, 9.5, cut=700, g=.12)

sk.mix('audio/narration.wav', 'mix.wav')
sk.mix(None, 'mix_novo.wav')
