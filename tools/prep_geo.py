import json, math, sys
from shapely.geometry import shape, box, mapping, Polygon, MultiPolygon
from shapely.ops import unary_union
G = sys.argv[1]; OUT = sys.argv[2]
def merc(lat): return -math.degrees(math.log(math.tan(math.pi/4 + math.radians(lat)/2)))
def proj_ring(coords): 
    return [round(c,4) for x,y in coords for c in (x, merc(y))]
def polys(g):
    if g.is_empty: return []
    if isinstance(g, Polygon): return [g]
    if isinstance(g, MultiPolygon): return list(g.geoms)
    return [p for gg in getattr(g,'geoms',[]) for p in polys(gg)]
jp = json.load(open(f'{G}/japan.geojson'))
prefs = []; allg = []
for f in jp['features']:
    p = f['properties']; g = shape(f['geometry']).buffer(0)
    allg.append(g)
    ps = [q for q in polys(g) if q.area > 0.00015]
    tol = 0.0010
    rings = []
    for q in ps:
        s = q.simplify(tol, preserve_topology=True)
        for qq in polys(s):
            if len(qq.exterior.coords) >= 4: rings.append(proj_ring(qq.exterior.coords))
    main = max(polys(g), key=lambda q: q.area)
    c = main.centroid
    icon = main.simplify(0.004, preserve_topology=True)
    prefs.append(dict(id=p['id'], en=p['nam'], ja=p['nam_ja'], rings=rings,
        c=[round(c.x,4), round(merc(c.y),4)], icon=proj_ring(icon.exterior.coords)))
jpu = unary_union(allg).buffer(0.02)
land = json.load(open(f'{G}/ne_50m_land.geojson'))
bb = box(108, 14, 162, 56)
nb = []
for f in land['features']:
    g = shape(f['geometry']).buffer(0)
    for q in polys(g.intersection(bb)):
        if q.intersects(jpu) or q.area < 0.002: continue
        s = q.simplify(0.01, preserve_topology=True)
        for qq in polys(s): nb.append(proj_ring(qq.exterior.coords))
prefs.sort(key=lambda p: p['id'])
import random
U = unary_union(allg)
coast = []
for q in polys(U):
    if q.area < 0.00015: continue
    s2 = q.simplify(0.0010, preserve_topology=True)
    for qq in polys(s2): coast.append(proj_ring(qq.exterior.coords))
from shapely.geometry import Point
from shapely.prepared import prep
main = [q for q in polys(U) if q.area > 0.05 and q.centroid.y > 30]
M = prep(unary_union(main)); mb = unary_union(main).bounds
rnd = random.Random(42); pts = []
while len(pts) < 428:
    x = rnd.uniform(mb[0], mb[2]); y = rnd.uniform(mb[1], mb[3])
    if M.contains(Point(x, y)): pts += [round(x,4), round(merc(y),4)]

js = 'window.GEO=' + json.dumps(dict(prefs=prefs, land=nb, coast=coast, pts=pts), separators=(',',':')) + ';'
open(OUT,'w').write(js)
print('prefs', len(prefs), 'pts', sum(len(r)//2 for p in prefs for r in p['rings']), 'land pts', sum(len(r)//2 for r in nb), 'bytes', len(js))
for p in prefs:
    if p['id'] in (11,13,14,23,27): print(p['id'], p['en'], p['ja'], p['c'], len(p['icon'])//2)
