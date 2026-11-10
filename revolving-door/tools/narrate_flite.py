#!/usr/bin/env python3
"""Flite version of the skill's narrate.py (Kokoro unavailable: no package installs on this account).

Same script format and outputs (vo_full.wav, timeline.json, timeline.js), with two upgrades that
Flite's word timings make possible:
  - each SENTENCE is synthesized as one utterance (natural intonation across caption fragments),
    then split into caption lines at the real word boundaries;
  - every caption word gets its real spoken start time (TL[i].wts) for exact karaoke sync.
"""
import argparse, json, os, re, subprocess, sys
import numpy as np
from scipy.io import wavfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from flite_tts import synth

ap = argparse.ArgumentParser()
ap.add_argument('script'); ap.add_argument('--out', default='.')
ap.add_argument('--duration', type=float, default=0, help='0 = natural length')
ap.add_argument('--voice', default='rms')
ap.add_argument('--lead', type=float, default=0.8); ap.add_argument('--tail', type=float, default=3.0)
ap.add_argument('--pause', type=float, default=0.5, help='mean pause between sentences (s)')
ap.add_argument('--stretch', type=float, default=0, help='force duration_stretch instead of fitting')
a = ap.parse_args()

# ---------------------------------------------------------------- parse
lines, brk = [], False
for raw in open(a.script, encoding='utf-8').read().splitlines():
    if not raw.strip(): brk = bool(lines); continue
    shown, _, spoken = raw.partition('||')
    shown = shown.strip(); spoken = (spoken.strip() or shown).replace('*', '')
    lines.append({'display': shown, 'spoken': spoken, 'chapterBreak': brk}); brk = False
sents, cur = [], []
for i, l in enumerate(lines):
    if l['chapterBreak'] and cur: sents.append(cur); cur = []
    cur.append(i)
    if re.search(r'[.!?]["\')\]]*$', l['display'].replace('*', '').strip()): sents.append(cur); cur = []
if cur: sents.append(cur)

def nwords(text, voice):
    return len(synth(text, voice)[2])

# word counts per caption line and per display word (Flite's own tokenizer decides)
for l in lines:
    l['n'] = nwords(l['spoken'], a.voice)
    l['dn'] = [nwords(re.sub(r'[*]', '', w), a.voice) for w in l['display'].split()]

def synth_all(stretch):
    out = []
    for idx in sents:
        text = ' '.join(lines[i]['spoken'] for i in idx)
        x, sr, ws = synth(text, a.voice, stretch)
        nz = np.where(np.abs(x) > 0.01)[0]
        a0 = max(0, nz[0] - int(.03 * sr)); a1 = min(len(x), nz[-1] + int(.10 * sr))
        x = x[a0:a1]; ws = [(w, s - a0 / sr, e - a0 / sr) for w, s, e in ws]
        out.append((x, sr, ws))
    return out

w8 = [1.0] * len(sents)
for k in range(len(sents) - 1):
    if lines[sents[k + 1][0]]['chapterBreak']: w8[k] = 1.8
w8[-1] = 0

stretch = a.stretch or 1.0
for it in range(4):
    clips = synth_all(stretch); sr = clips[0][1]
    speech = sum(len(c[0]) for c in clips) / sr
    if a.stretch or not a.duration: break
    budget = a.duration - a.lead - a.tail - a.pause * sum(w8)
    if abs(speech - budget) / budget < 0.02: break
    stretch = float(np.clip(stretch * budget / speech, 0.7, 1.3))
    print(f'fit pass {it + 1}: speech {speech:.1f}s vs budget {budget:.1f}s -> stretch {stretch:.3f}')

dur = a.duration or round(a.lead + speech + a.pause * sum(w8) + a.tail + .05, 1)
free = dur - a.lead - a.tail - speech
if free < 0: print(f'WARNING: speech overruns by {-free:.1f}s')
unit = max(free, 0) / max(sum(w8), 1e-9)

N = int(dur * sr); full = np.zeros(N, np.float32); t = a.lead
for k, (idx, (x, _, ws)) in enumerate(zip(sents, clips)):
    j = int(t * sr); n = min(len(x), N - j); full[j:j + n] += x[:n]
    counts = [lines[i]['n'] for i in idx]
    if sum(counts) != len(ws):   # tokenizer disagreement: split by character share
        print('note: word-count mismatch in sentence', k, [w for w, _, _ in ws])
        tot = sum(len(lines[i]['spoken']) for i in idx); acc = 0; counts = []
        for i in idx:
            c = round(len(ws) * (acc + len(lines[i]['spoken'])) / tot) - round(len(ws) * acc / tot); counts.append(c); acc += len(lines[i]['spoken'])
    p = 0
    for i, c in zip(idx, counts):
        seg = ws[p:p + c]; p += c
        l = lines[i]; l['s'] = round(t + seg[0][1], 3); l['e'] = round(t + seg[-1][2], 3)
        if sum(l['dn']) == len(seg):
            q = 0; l['wts'] = []
            for dn in l['dn']: l['wts'].append(round(t + seg[q][1], 3)); q += dn
        else:
            l['wts'] = None; print('note: proportional word timing for line', i, l['display'])
    t += len(x) / sr + w8[k] * unit

os.makedirs(a.out, exist_ok=True)
raw = os.path.join(a.out, 'vo_raw16k.wav')
wavfile.write(raw, sr, (np.clip(full, -1, 1) * 32767).astype(np.int16))
# gentle voice polish: rumble cut, a little warmth, tame Flite's buzzy upper mids, resample to 48 kHz
subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', raw, '-af',
                'highpass=f=70,equalizer=f=170:t=q:w=1.0:g=2.5,equalizer=f=2900:t=q:w=1.3:g=-2.5,'
                'equalizer=f=5200:t=q:w=1.5:g=-1.5,aresample=48000', '-c:a', 'pcm_s16le',
                os.path.join(a.out, 'vo_full.wav')], check=True)
out = [{k: l[k] for k in ('display', 'spoken', 'chapterBreak', 's', 'e', 'wts')} for l in lines]
json.dump({'duration': dur, 'stretch': stretch, 'voice': 'flite cmu_us_' + a.voice, 'lines': out},
          open(os.path.join(a.out, 'timeline.json'), 'w'), indent=1, ensure_ascii=False)
open(os.path.join(a.out, 'timeline.js'), 'w', encoding='utf-8').write(
    'window.DUR=' + json.dumps(dur) + ';\nwindow.TL=' + json.dumps(out, ensure_ascii=False) + ';\n')
print(f'stretch {stretch:.3f}, speech {speech:.1f}s, gap unit {unit:.2f}s, {len(sents)} sentences / {len(lines)} lines, '
      f'last line ends {out[-1]["e"]:.1f}s of {dur}s')
