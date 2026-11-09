# Insert extra silence before given line indices; rebuild vo_full.wav + timeline.js.  usage: regap.py <dir> idx:sec ...
import json, sys, os, numpy as np, soundfile as sf
d = sys.argv[1]; extra = {int(a.split(':')[0]): float(a.split(':')[1]) for a in sys.argv[2:]}
tl = json.load(open(f'{d}/timeline.json')); L = tl['lines']; shift = 0
for i, l in enumerate(L):
    shift += extra.get(i, 0); l['s'] = round(l['s'] + shift, 3); l['e'] = round(l['e'] + shift, 3)
sr = sf.info(f'{d}/vo/00.wav').samplerate; N = int(tl['duration'] * sr); full = np.zeros(N)
for i, l in enumerate(L):
    c, _ = sf.read(f'{d}/vo/{i:02d}.wav'); j = int(l['s'] * sr); n = min(len(c), N - j); full[j:j + n] += c[:n]
sf.write(f'{d}/vo_full.wav', full, sr); json.dump(tl, open(f'{d}/timeline.json', 'w'), indent=1, ensure_ascii=False)
open(f'{d}/timeline.js', 'w').write('window.DUR=' + json.dumps(tl['duration']) + ';\nwindow.TL=' + json.dumps(L, ensure_ascii=False) + ';\n')
print('last line ends', L[-1]['e'])
