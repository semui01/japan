#!/usr/bin/env python3
"""Tile stills into contact sheets so a whole sequence can be reviewed in a single Read.
usage: contact_sheet.py <stills_dir> <out.jpg> [cols]
Landscape (h_*) and portrait (v_*) stills go to separate sheets: <out>_h.jpg / <out>_v.jpg when both exist."""
import sys, glob, os
from PIL import Image, ImageDraw
d, out = sys.argv[1], sys.argv[2]
fs = sorted(glob.glob(os.path.join(d, '*.jpg')))
if not fs: sys.exit('no stills')
groups = {}
for f in fs: groups.setdefault('v' if Image.open(f).height > Image.open(f).width else 'h', []).append(f)
for o, g in groups.items():
    im0 = Image.open(g[0]); portrait = o == 'v'
    cols = int(sys.argv[3]) if len(sys.argv) > 3 else (4 if portrait else 2)
    tw = 540 if portrait else 960; th = round(tw * im0.height / im0.width)
    rows = (len(g) + cols - 1) // cols
    S = Image.new('RGB', (cols * tw, rows * th), 'black'); dr = ImageDraw.Draw(S)
    for i, f in enumerate(g):
        x, y = (i % cols) * tw, (i // cols) * th
        S.paste(Image.open(f).resize((tw, th)), (x, y))
        dr.rectangle([x, y, x + 120, y + 26], fill='black'); dr.text((x + 6, y + 6), os.path.basename(f)[2:-4].lstrip('0') + 's', fill='yellow')
    name = out if len(groups) == 1 else out.replace('.jpg', f'_{o}.jpg')
    S.save(name, quality=82); print(name, S.size, len(g), 'frames')
