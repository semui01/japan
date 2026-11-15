#!/usr/bin/env python3
"""Synthesize narration with Kokoro and lay it out on a fixed-length timeline.

Script format (UTF-8 text, one narration line per line):
  - *word* marks a caption highlight (stripped before speaking)
  - "shown text || spoken text" when captions and speech differ (e.g. "−50°" vs "minus fifty degree")
  - a blank line marks a chapter break (longer pause, chapterBreak=true on the next line)

Outputs in --out: vo/NN.wav, vo_full.wav, timeline.json, timeline.js (window.TL for the engine).
The speaking speed is fitted automatically so speech plus pauses fills --duration.
"""
import argparse, json, os, re, sys
import numpy as np, soundfile as sf

ap = argparse.ArgumentParser()
ap.add_argument('script'); ap.add_argument('--out', default='.')
ap.add_argument('--duration', type=float, required=True)
ap.add_argument('--voice', default='am_michael'); ap.add_argument('--lang', default='en-us')
ap.add_argument('--models', default=os.path.expanduser('~/.cache/kokoro'))
ap.add_argument('--lead', type=float, default=0.7, help='silence before first line')
ap.add_argument('--tail', type=float, default=2.6, help='room after last line for the end card')
ap.add_argument('--pause', type=float, default=0.42, help='target mean pause between lines (s)')
ap.add_argument('--speed', type=float, default=0, help='force a speed instead of fitting')
a = ap.parse_args()

from kokoro_onnx import Kokoro
k = Kokoro(os.path.join(a.models, 'kokoro-v1.0.onnx'), os.path.join(a.models, 'voices-v1.0.bin'))

lines, brk = [], False
for raw in open(a.script, encoding='utf-8').read().splitlines():
    if not raw.strip(): brk = bool(lines); continue
    shown, _, spoken = raw.partition('||')
    shown = shown.strip(); spoken = (spoken.strip() or shown).replace('*', '')
    lines.append({'display': shown, 'spoken': spoken, 'chapterBreak': brk}); brk = False
if not lines: sys.exit('empty script')
os.makedirs(os.path.join(a.out, 'vo'), exist_ok=True)

def synth(speed):
    clips = []
    for l in lines:
        s, sr = k.create(l['spoken'], voice=a.voice, speed=speed, lang=a.lang)
        idx = np.where(np.abs(s) > 0.01)[0]
        s = s[max(0, idx[0] - int(.03 * sr)):idx[-1] + int(.08 * sr)]
        clips.append(s)
    return clips, sr

# pause weights: chapter breaks and sentence ends breathe more
w = [(1.6 if (i + 1 < len(lines) and lines[i + 1]['chapterBreak']) else 1.0) for i in range(len(lines))]; w[-1] = 0
budget = a.duration - a.lead - a.tail - a.pause * sum(w)
speed = a.speed or 1.0
for it in range(3):
    clips, sr = synth(speed)
    speech = sum(len(c) for c in clips) / sr
    if a.speed or abs(speech - budget) / budget < 0.03: break
    speed = float(np.clip(speed * speech / budget, 0.8, 1.4))
    print(f'fit pass {it + 1}: speech {speech:.1f}s vs budget {budget:.1f}s -> speed {speed:.2f}')
free = a.duration - a.lead - a.tail - speech
if free < 0: print(f'WARNING: speech overruns by {-free:.1f}s even at speed {speed:.2f}; shorten the script or raise --duration')
unit = max(free, 0) / max(sum(w), 1e-9)
t, out, N = a.lead, [], int(a.duration * sr)
full = np.zeros(N)
for i, (c, l) in enumerate(zip(clips, lines)):
    sf.write(os.path.join(a.out, 'vo', f'{i:02d}.wav'), c, sr)
    j = int(t * sr); n = min(len(c), N - j)
    if n > 0: full[j:j + n] += c[:n]
    out.append({**l, 's': round(t, 3), 'e': round(t + len(c) / sr, 3)}); t += len(c) / sr + w[i] * unit
sf.write(os.path.join(a.out, 'vo_full.wav'), full, sr)
json.dump({'duration': a.duration, 'speed': speed, 'voice': a.voice, 'lines': out}, open(os.path.join(a.out, 'timeline.json'), 'w'), indent=1, ensure_ascii=False)
open(os.path.join(a.out, 'timeline.js'), 'w', encoding='utf-8').write(
    'window.DUR=' + json.dumps(a.duration) + ';\nwindow.TL=' + json.dumps(out, ensure_ascii=False) + ';\n')
print(f'speed {speed:.2f}, speech {speech:.1f}s, mean gap {unit:.2f}s, last line ends {out[-1]["e"]:.1f}s of {a.duration}s')
