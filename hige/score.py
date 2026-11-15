import sys, json; sys.path.insert(0, 'tools'); from soundkit import *
ev = json.load(open('events.json')); T = ev['T']
sk = Kit(duration=82)
def koto(m, t, g=.34, pan=0):   # bright pluck, two detuned strings
    sk.pluck(m, t, 1.1, g, cut=3200, pan=pan); sk.pluck(m + 12, t + .005, .5, g * .35, cut=5000, pan=-pan)
def taiko(t, g=.8): sk.boom(t, g, 1.2)
MIY = [62, 63, 67, 69, 70, 74, 75, 79]   # miyako-bushi on D
# intro: drone + sparse koto
sk.pad([38, 45, 50], 0, T['sen'] + 1, .5, bright=900, att=2)
for t, m in [(.4, 62), (1.5, 69), (2.3, 70), (3.2, 69), (4.6, 67), (5.6, 63), (6.8, 62), (8.1, 75), (8.9, 74), (9.4, 70)]: koto(m, t, .3, pan=(-.3 if m < 68 else .3))
# sengoku: taiko pulse, dark
sk.progression([[38, 50, 53, 57], [34, 46, 50, 53], [36, 48, 51, 55], [38, 50, 53, 57]], T['sen'], T['edo'], bpm=96, kick_from=T['sen'], bright=1300)
t = T['sen']
while t < T['edo'] - .5: taiko(t, .45); t += 2.5
# edo: calm koto melody over soft pad
sk.progression([[38, 50, 57, 62], [39, 51, 55, 58], [43, 50, 55, 58], [38, 50, 57, 62]], T['edo'], T['mei'], bpm=72, pulse=False, bright=1500, pad_g=.45)
seq = [0, 2, 3, 4, 3, 2, 1, 0, 2, 4, 5, 4, 3, 2, 3, 1, 0, 1, 2, 3, 4, 6, 5, 4, 3, 2, 1, 0]
for i, k in enumerate(seq):
    tt_ = T['edo'] + .4 + i * .52
    if tt_ < T['mei'] - .3: koto(MIY[k], tt_, .3, pan=(.35 if i % 2 else -.35))
# meiji: bright march
sk.progression([[41, 53, 57, 60], [46, 53, 58, 62], [48, 55, 60, 64], [41, 53, 57, 60]], T['mei'], T['post'], bpm=112, kick_from=T['mei'], hats_from=T['mei'] + 2, bright=2400)
for i in range(26):
    tb = T['mei'] + .3 + i * (60 / 112)
    if tb < T['post'] - .3 and i % 4 != 3: sk.bell([77, 81, 84, 81, 77, 72, 77, 79][i % 8], tb, .05, pan=.3 * (-1) ** i, d=1.2)
# post-war: muted office pulse
sk.progression([[38, 50, 53, 60], [43, 50, 55, 58]], T['post'], T['today'], bpm=100, hats_from=T['post'], bright=1100, pad_g=.4)
# today: lighter groove
sk.progression([[45, 52, 57, 60], [41, 53, 57, 60], [48, 52, 55, 60], [43, 50, 55, 59]], T['today'], T['out'], bpm=100, kick_from=T['today'] + 2.4, hats_from=T['today'], bright=2000)
# outro: four hits then resolve
sk.pad([38, 50, 57, 62, 65], T['out'], 9.5, .6, bright=2000, att=.6, rel=3)
for i, t in enumerate(ev['words']): taiko(t, .75); koto([62, 67, 69, 74][i], t, .4)
for i, m in enumerate([62, 63, 67, 69, 70, 74, 75, 79]): koto(m, ev['graph'][0] + i * .3, .28, pan=-.6 + i * .17)
# ---- sfx
sk.crackle(.4, 2.6, 300, .12)                                  # hair growing on the kanji
for t in ev['swing']: sk.whoosh(t + .1, .7, .3)
for t in ev['eras']: sk.whoosh(t, .9, .55); sk.bell(86, t, .08, buf='sfx')
for t in ev['grow']: sk.crackle(t, 1.6, 240, .14)
sk.whoosh(ev['poof'][0] + .2, .5, .3, up=False)
taiko(ev['clank'][0], .7); sk.click(ev['clank'][0], .5, 1800, .08); sk.bell(93, ev['clank'][0], .1, buf='sfx', d=1)
for t in ev['shave']:
    sk.put('sfx', t, bp(sk.noise(1.3), 2500, 9000) * (.5 + .5 * np.sin(tt(1.3) * 38)) ** 2 * env(int(1.3 * SR), .05, .3), 0, .32)
for t in ev['stamp']: sk.boom(t, 1.0, 1.8); sk.click(t, .5, 900, .06)
sk.boom(ev['win'][0], .8, 1.8); sk.sparkle(ev['win'][0], 1.2, 110, .035); sk.click(ev['win'][0], .5, 1200, .08)
a, b = ev['stretch']; s = np.sin(2 * np.pi * np.cumsum(np.linspace(180, 760, int((b - a) * SR))) / SR) * env(int((b - a) * SR), .1, .1) * .5
sk.put('sfx', a, s, 0, .16); sk.blip(b, .3, 1568, .3); sk.ticks(a, b, .1, .2, .95)
sk.ticks(ev['count'][0], ev['count'][1], .11)
for i, t in enumerate(ev['busts']): sk.blip(t + .2, .22, [880, 1047, 1319][i], .16, pan=-.3 + i * .3)
for i, t in enumerate(ev['clones']): sk.blip(t + .15, .2, 988, .1, pan=(-.6 if i % 2 == 0 else .6)); sk.click(t + .15, .25, 2200)
for t in ev['cards'][1:]: sk.click(t + .05, .16, 3000, pan=.6)
sk.whoosh(ev['graph'][0] + 1.2, 2.4, .25); sk.sparkle(ev['graph'][1] - .3, .8, 60, .03)
sk.boom(ev['card'][0] + .1, 1.0, 2.6); sk.whoosh(ev['card'][0], .8, .4)
sk.mix('vo_full.wav', 'mix.wav', music_gain=.2, sfx_gain=.36); sk.mix(None, 'mix_novo.wav')
