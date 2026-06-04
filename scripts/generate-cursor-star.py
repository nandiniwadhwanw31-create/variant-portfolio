#!/usr/bin/env python3
"""Build darkened transparent leopard star cursor PNG."""
from pathlib import Path

from PIL import Image, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'public/images/cursor-star.png'
OUT = ROOT / 'public/images/cursor-star-transparent.png'

if not SRC.exists():
    SRC = Path(
        '/Users/nandini/.cursor/projects/Users-nandini-variant-portfolio/assets/image-79e4f8e9-fd0e-463f-9f33-f3251b1a314e.png'
    )

img = Image.open(SRC).convert('RGBA')
px = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 240 and g > 240 and b > 240:
            px[x, y] = (0, 0, 0, 0)
        elif r > 220 and g > 220 and b > 220:
            t = max(r, g, b)
            alpha = int(a * (255 - t) / 35)
            px[x, y] = (r, g, b, max(0, min(255, alpha)))
        else:
            px[x, y] = (
                max(0, int(r * 0.72)),
                max(0, int(g * 0.68)),
                max(0, int(b * 0.62)),
                a,
            )

img = ImageEnhance.Contrast(img).enhance(1.25)
img = ImageEnhance.Color(img).enhance(1.15)
img.save(OUT, optimize=True)
print(f'Wrote {OUT} ({w}x{h})')
