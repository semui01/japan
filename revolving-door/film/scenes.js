// =====================================================================================================
// THE REVOLVING DOOR — Okinawa's Nepal pipeline.
// World: a dot-matrix map of South & East Asia (equirectangular, 1 world unit = 1° of latitude), camera
// keys flown with van Wijk smooth zoom. Hero: STUDENT #0001 (illustrative), tracked through every chapter.
// Every beat is keyed to a spoken word via wt(line, 'word').
// =====================================================================================================
const LON0 = 105, LAT0 = 28, KX = Math.cos(28 * Math.PI / 180);
const wx = lon => (lon - LON0) * KX, wy = lat => LAT0 - lat;
const NEP = '#ffb340', JPN = '#5fd4ff', OKC = '#5dffa8', RED = '#ff4d5e', PALE = '#e8f3ff';
const CJK = '"Noto Sans CJK JP",sans-serif';
const fJ = (w, s) => `${w} ${s}px ${CJK}`;

// ------------------------------------------------------------------------------------- geography
const pts = s => s.trim().split(/\s*,\s*/).map(p => p.trim().split(/\s+/).map(Number));
const GEO = {
  asia: `40 75, 40 35, 48 30, 50.5 30, 51.5 27.9, 54 26.6, 56 27, 56.5 27.1, 57.3 25.8, 59 25.4, 61.6 25.2, 63.5 25.3, 65 25.3, 66.6 25.5, 67.2 24.8, 67.6 23.9, 68.4 23.5, 68.8 23, 69.1 22.4, 70.2 22.9, 69.6 22.3, 69 22.3, 69.8 21.5, 70.9 20.7, 72.1 21.3, 72.6 22.2, 72.8 21.1, 72.8 19.9, 72.85 19, 73.1 17.6, 73.5 16.3, 73.8 15.4, 74.4 14.3, 74.8 12.9, 75.4 11.8, 75.8 11.2, 76.2 10, 76.6 9, 77 8.4, 77.5 8.1, 78.1 8.8, 78.9 9.3, 79.3 10.3, 79.85 10.8, 79.85 11.9, 80.25 13.1, 80.1 14.5, 80.3 15.7, 81 15.8, 81.5 16.3, 82.3 16.6, 83.3 17.7, 84.3 18.4, 85.1 19.3, 86.3 19.9, 86.9 20.8, 87 21.5, 88.1 21.7, 89.1 21.7, 90 21.9, 90.6 22.6, 91.4 22.8, 91.8 22.3, 92 21.3, 92.3 20.7, 93 19.9, 93.8 19, 94.3 18, 94.3 16.4, 95.2 15.8, 96.2 16.7, 96.9 17.2, 97.4 16.9, 97.6 16, 97.9 14.7, 98.4 13.1, 98.6 11.8, 98.6 10, 98.3 9, 98.3 8.1, 98.8 7.9, 99.6 6.9, 100.2 6.3, 100.4 5.5, 100.9 4.2, 101.4 2.9, 102.3 2.2, 103.4 1.4, 103.9 1.3, 104.25 1.5, 103.9 2.6, 103.4 3.9, 103.4 4.9, 102.9 5.6, 102.2 6.2, 101.6 6.8, 100.9 6.9, 100.4 7.3, 100.1 8.4, 99.9 9.3, 99.2 10.4, 99.6 11.7, 99.95 12.6, 100.1 13.4, 100.6 13.5, 100.95 13.3, 100.9 12.7, 101.4 12.6, 102.3 12.2, 102.8 11.6, 103.5 10.6, 104.4 10.4, 104.8 9.6, 104.8 8.6, 105.4 8.7, 106.3 9.4, 106.8 10.4, 107.5 10.5, 108 10.8, 108.9 11.3, 109.2 12.1, 109.4 13, 109.3 13.9, 108.9 15.3, 108.3 16.1, 107.5 16.6, 106.6 17.5, 105.8 18.6, 106 19.6, 106.6 20.4, 107.4 21.1, 108.1 21.5, 109 21.6, 109.7 21.5, 109.9 20.9, 110.2 20.3, 110.6 20.4, 110.4 21.2, 111 21.5, 112 21.8, 113 22.1, 113.6 22.3, 114.2 22.3, 115 22.7, 116.5 22.95, 116.7 23.3, 117.4 23.8, 118.1 24.5, 118.7 24.9, 119.4 25.4, 119.6 26, 119.9 26.6, 120.4 27.3, 121 28, 121.5 28.7, 121.9 29.6, 121.6 30.2, 121 30.5, 121.4 30.85, 121.9 30.9, 121.85 31.65, 121.2 32.1, 120.8 32.4, 120.9 33, 120.3 34.2, 119.4 34.8, 119.3 35.3, 120.2 35.9, 120.8 36.4, 121.5 36.8, 122.5 37, 122.4 37.4, 121.4 37.6, 120.7 37.7, 120 37.4, 119.2 37.2, 118.9 37.5, 118.6 38.1, 117.8 38.4, 117.7 38.9, 118.3 39.1, 119 39.2, 119.6 39.9, 120.5 40.3, 121.1 40.8, 121.9 40.9, 122.2 40.4, 121.8 39.6, 121.3 39, 121.2 38.8, 121.9 39, 122.6 39.4, 123.5 39.8, 124.3 39.9, 124.7 39.6, 125.2 39.4, 125.4 38.7, 125 38, 125.7 37.7, 126.2 37.7, 126.6 37.4, 126.8 36.9, 126.5 36.7, 126.5 36, 126.6 35.5, 126.4 35, 126.3 34.5, 126.8 34.4, 127.5 34.6, 128 34.8, 128.6 34.8, 129 35.05, 129.4 35.5, 129.6 36.1, 129.4 36.9, 129.1 37.6, 128.6 38.3, 128.3 38.7, 127.5 39.2, 127.9 39.9, 128.7 40.2, 129.7 40.8, 129.8 41.4, 130.3 42.2, 130.7 42.4, 131.3 42.6, 131.9 43.1, 132.4 42.8, 133.2 42.7, 134.5 43.3, 135.6 44, 136.6 44.9, 137.6 45.9, 138.4 46.9, 138.9 47.9, 139.6 48.9, 140.3 50, 140.6 51.3, 141.3 52.5, 141 53.5, 140.6 54, 139 54.2, 137.5 54, 136.5 54.6, 135.3 54.7, 137 56, 138.5 57, 140.5 58.5, 142.5 59.3, 145 59.4, 148 59.3, 150 59.6, 152 59, 155 59.3, 160 61.5, 165 62.5, 175 66, 180 68, 180 75`,
  srilanka: `80.2 9.8, 80.9 8.9, 81.3 8.5, 81.9 7.4, 81.7 6.5, 81.2 6.1, 80.6 5.95, 80.1 6.2, 79.85 7, 79.8 8.2, 79.95 9.2`,
  hainan: `108.6 19.2, 109.2 20, 110 20.1, 110.7 20, 111 19.6, 110.6 18.8, 110 18.3, 109.5 18.2, 108.7 18.5`,
  taiwan: `121 25.05, 121.6 25.3, 121.9 25, 121.8 24.4, 121.5 23.5, 121.2 22.7, 120.85 21.9, 120.7 22.3, 120.3 22.6, 120.1 23.1, 120.2 23.8, 120.5 24.4`,
  luzon: `120.6 18.5, 121.2 18.6, 122.2 18.5, 122.4 17.2, 122.2 16.3, 121.6 15.8, 121.6 14.8, 122 14.1, 123 13.9, 123.8 13.3, 124.2 12.6, 123.4 12.9, 122.6 13.5, 121.8 13.9, 121 13.7, 120.6 14.2, 120.6 14.8, 120 15.1, 119.8 16.1, 120.3 16.3, 120.4 17.6`,
  mindanao: `122 6.9, 122.4 7.8, 123.6 7.9, 124 8.3, 124.7 8.5, 125.5 9.5, 126.2 9, 126.6 7.6, 126.2 6.4, 125.4 5.6, 124.2 6.2, 123.7 7.3, 122.8 7.5`,
  samar: `124.3 12.5, 125.7 12.2, 125.5 11, 125.1 10.1, 124.6 10, 124.3 11`,
  panay: `121.9 11.9, 122.9 11.5, 122.6 10.6, 121.9 10.5`,
  negros: `122.9 10.9, 123.5 10.6, 123.2 9.3, 122.4 9.5`,
  cebu: `123.9 11.2, 124.1 10.6, 123.6 9.6, 123.4 10.2`,
  mindoro: `120.4 13.5, 121.3 13.3, 121.5 12.6, 121 12.2, 120.4 12.7`,
  palawan: `117.2 8.4, 118.3 9.4, 119.3 10.5, 119.6 11.3, 119.2 10.9, 118.6 10.1, 117.9 9.4`,
  borneo: `109 1.5, 109.6 2, 111 1.8, 113 3.2, 114 4.6, 115.4 5.3, 116 6, 117 7, 117.7 6.4, 119.2 5.4, 118.4 4.9, 117.6 4.2, 117.9 3, 118.9 1, 117.6 0.2, 117.4 -1, 116.6 -2, 116.2 -3.5, 115 -4, 114.4 -3.5, 113 -3.2, 111.8 -3.5, 110.3 -2.9, 110 -1.6, 109.3 -0.8, 109 0.4`,
  sumatra: `95.3 5.6, 97.5 5.2, 98.7 3.8, 100.4 2.1, 101.6 1.6, 103 0.4, 103.8 -1, 104.6 -2.3, 106 -3.2, 105.8 -5.8, 104.6 -5.9, 103.8 -5, 102.3 -4, 101 -2.5, 100.3 -1, 99.2 0.8, 98.6 1.8, 97.8 2.9, 96.5 3.8, 95.4 4.9`,
  java: `105.2 -6.8, 106 -5.9, 107 -5.9, 108.3 -6.3, 110.4 -6.9, 111.6 -6.7, 112.7 -6.9, 114.4 -7.7, 114.4 -8.7, 112.9 -8.4, 111 -8.2, 108.8 -7.8, 106.4 -7.4, 105.4 -6.9`,
  sulawesi: `119.4 -5.5, 120.5 -5.5, 121.3 -2.5, 123.2 -1, 121.5 0.1, 124.8 1.3, 120.3 0.9, 119.5 -1, 118.9 -2.8`,
  newguinea: `131 -1.4, 132.5 -0.4, 134 -0.9, 135 -3.3, 137.5 -1.5, 140.7 -2.6, 144.5 -3.8, 146 -5.5, 147.8 -6.3, 147.4 -8, 146 -8.1, 144 -7.7, 143.4 -9, 142.2 -9.2, 141 -9.1, 139 -8.1, 138 -8.4, 137.8 -5.6, 135 -4.4, 133 -4, 132 -2.9, 131.3 -1.5`,
  australia: `113.5 -22, 114.1 -21.8, 116.7 -20.6, 119 -19.9, 121 -19.5, 122.2 -18.1, 122.3 -17, 123.5 -16.5, 124.5 -15.5, 125.5 -14.5, 126.8 -13.9, 128.1 -15, 129.5 -14.9, 130.2 -13.2, 131 -12.2, 132.6 -12, 132.6 -11.5, 133.4 -11.7, 134.3 -12, 135.8 -12, 136.8 -12.3, 136.5 -13.3, 135.9 -14.2, 135.5 -15, 136.3 -15.6, 137.7 -16.3, 139.1 -17.4, 140.6 -17.6, 141.4 -16.4, 141.6 -14.5, 141.6 -12.5, 142.5 -10.7, 143.1 -11.9, 143.5 -13.8, 144.5 -14.2, 145.3 -15, 145.5 -16.5, 146.2 -18.9, 148.8 -20.3, 150 -22.5, 150.8 -23.5, 153 -25.5, 153.5 -28.5, 153.2 -32, 151 -34, 150 -37.5, 140 -38, 130 -32, 115 -34`,
  kyushu: `129.55 33.35, 129.9 33.55, 130.35 33.6, 130.55 33.85, 130.95 33.95, 131.2 33.6, 131.7 33.6, 131.55 33.2, 131.9 32.9, 131.7 32.4, 131.45 31.6, 131.35 31.35, 131.1 31.05, 130.75 31, 130.7 31.6, 130.55 31.3, 130.2 31.2, 130.3 31.9, 130.15 32.15, 130.5 32.7, 130.2 32.85, 130.1 32.6, 129.85 32.7, 129.7 33.05`,
  shikoku: `132.05 33.35, 132.45 33.9, 133 34.05, 133.6 34.25, 134.2 34.3, 134.6 34.2, 134.75 33.85, 134.35 33.65, 134.2 33.25, 133.85 33.5, 133.55 33.4, 133.25 33.2, 133 32.75, 132.65 32.85, 132.45 33.15`,
  honshu: `130.9 34, 131.2 34.4, 131.6 34.7, 132.1 35, 132.6 35.4, 133.1 35.6, 133.6 35.5, 134.3 35.6, 135 35.7, 135.3 35.55, 135.75 35.5, 135.95 35.7, 136.1 36.1, 136.4 36.4, 136.7 36.8, 136.75 37.2, 136.9 37.45, 137.3 37.5, 137.1 37.1, 137 36.85, 137.4 36.75, 137.8 36.9, 138.25 37.15, 138.8 37.7, 139.2 38, 139.45 38.4, 139.7 38.9, 139.95 39.4, 139.75 39.9, 140 40.2, 139.95 40.6, 140.25 40.95, 140.6 41.2, 140.9 41.05, 140.8 40.85, 141.15 40.95, 141.2 41.25, 140.95 41.45, 141.4 41.45, 141.45 41.15, 141.5 40.6, 141.8 40.3, 142 39.9, 142.05 39.5, 141.9 39, 141.55 38.75, 141.45 38.35, 141 38.25, 140.95 37.8, 141 37.3, 140.85 36.9, 140.65 36.5, 140.55 36.15, 140.85 35.75, 140.4 35.25, 139.95 34.9, 139.75 35, 139.85 35.35, 140.1 35.6, 139.85 35.65, 139.7 35.55, 139.65 35.3, 139.6 35.15, 139.4 35.3, 139.1 35.15, 138.95 34.95, 138.8 34.65, 138.75 35.05, 138.5 34.95, 138.15 34.6, 137.6 34.65, 137.05 34.6, 136.95 34.8, 136.8 35, 136.6 34.6, 136.85 34.3, 136.3 33.95, 135.8 33.45, 135.4 33.65, 135.05 33.9, 135.15 34.3, 135.4 34.65, 135.25 34.7, 134.6 34.75, 134.2 34.65, 133.6 34.5, 133 34.35, 132.5 34.3, 132.15 33.95, 131.6 34, 131.2 33.95`,
  hokkaido: `140.05 41.45, 140.15 42.05, 139.85 42.55, 140.45 43.25, 141.35 43.2, 141.65 43.85, 141.75 44.35, 141.65 45, 141.95 45.5, 142.65 45, 143.4 44.3, 144.3 43.95, 145.3 44.35, 145.05 43.65, 145.6 43.35, 144.6 42.95, 143.75 42.6, 143.3 41.95, 142.5 42.3, 141.75 42.6, 141 42.35, 140.55 42.6, 140.3 42.25, 141.15 41.85, 140.7 41.7`,
  sakhalin: `141.75 46.05, 142.05 47, 142.15 48.6, 142.6 50.5, 143.15 51.8, 143.25 52.9, 142.75 54.35, 142.25 54.2, 141.7 53.2, 141.8 51.5, 142 49.8, 141.9 48.2, 141.95 46.6`,
  okinawa: `127.67 26.08, 127.66 26.13, 127.67 26.19, 127.68 26.22, 127.71 26.25, 127.73 26.28, 127.755 26.31, 127.745 26.36, 127.72 26.4, 127.71 26.44, 127.75 26.44, 127.78 26.46, 127.85 26.51, 127.92 26.55, 127.97 26.59, 127.93 26.62, 127.88 26.63, 127.86 26.66, 127.88 26.7, 127.94 26.7, 128 26.68, 128.06 26.67, 128.11 26.7, 128.16 26.75, 128.21 26.82, 128.26 26.87, 128.3 26.84, 128.29 26.78, 128.25 26.72, 128.2 26.66, 128.13 26.6, 128.06 26.53, 127.99 26.48, 127.93 26.45, 127.86 26.43, 127.82 26.42, 127.85 26.37, 127.9 26.35, 127.96 26.33, 127.9 26.31, 127.84 26.29, 127.8 26.25, 127.82 26.2, 127.82 26.16, 127.77 26.13, 127.72 26.1`,
};
const NEPAL_S = `80.06 28.84, 80.5 28.6, 81.3 28.15, 82 27.9, 82.7 27.5, 83.3 27.35, 84 27.35, 84.7 27, 85.2 26.75, 85.9 26.6, 86.5 26.45, 87.2 26.4, 88 26.4, 88.17 26.75, 88.1 27.4, 88.2 27.9, 87.6 27.85, 87 27.95, 86.3 28.05, 85.9 28.2, 85.4 28.35, 84.8 28.6, 84.2 28.9, 83.9 29.3, 83.5 29.15, 83 29.45, 82.5 29.8, 82 30.05, 81.5 30.4, 81.1 30.2, 80.6 29.95, 80.25 29.5`;
// small islands as ellipses: lon, lat, rx°, ry°, rotation°
const SMALL = [[129.45, 28.3, .26, .1, 35], [130, 28.32, .06, .04, 0], [128.95, 27.8, .07, .13, 0], [128.6, 27.37, .12, .05, 30], [128.42, 27.04, .04, .03, 0],
  [127.95, 27.05, .05, .04, 0], [127.81, 26.715, .05, .022, 0], [126.8, 26.35, .07, .05, 0], [127.3, 26.2, .06, .035, 0], [125.3, 24.78, .13, .07, 30],
  [124.2, 24.45, .15, .08, 20], [123.8, 24.33, .13, .09, 0], [123, 24.46, .06, .03, 0], [131, 30.6, .06, .2, -20], [130.53, 30.35, .14, .12, 0],
  [126.55, 33.37, .33, .13, 0], [129.3, 34.4, .08, .3, 30], [138.4, 38, .18, .2, 40], [134.85, 34.4, .1, .25, 30], [139.4, 34.75, .05, .06, 0], [139.8, 33.1, .06, .05, 0],
  [124.2, 9.85, .3, .2, 0], [92.7, 12, .15, .9, 0]];
const REGIONS = [['INDIA', 78.5, 22.5], ['CHINA', 103, 33.5], ['JAPAN', 143, 37.4], ['MYANMAR', 96, 21.6], ['THAILAND', 101.2, 15.6], ['VIETNAM', 106.4, 14.4],
  ['KOREA', 127.9, 36.6], ['PHILIPPINES', 122.4, 15.6], ['MONGOLIA', 103, 46.5], ['BANGLADESH', 90.3, 24.2]];
const SEAS = [['EAST CHINA SEA', 125.2, 29.3], ['PACIFIC OCEAN', 147, 27], ['BAY OF BENGAL', 88.5, 15.5], ['SOUTH CHINA SEA', 114.5, 15.5], ['SEA OF JAPAN', 134.5, 40]];
const CITY = { ktm: [85.32, 27.7], naha: [127.7, 26.215], tokyo: [139.69, 35.68], osaka: [135.5, 34.69], nagoya: [136.91, 35.18], fukuoka: [130.4, 33.59] };
const HERO_NP = [85.47, 27.6];
const NP_ACAD = [[85.32, 27.7], [85.05, 27.8], [85.56, 27.6], [85.2, 27.48], [85.6, 27.86], [84.94, 27.58], [85.42, 27.96], [83.99, 28.21], [84.43, 27.68], [83.45, 27.72],
  [87.27, 26.5], [87.28, 26.81], [84.88, 27.03], [81.65, 28.12], [80.62, 28.72], [85.92, 26.76]];
const OK_ACAD = [[127.71, 26.235], [127.765, 26.3], [127.8, 26.37], [127.97, 26.6]];
const BASES = [[127.77, 26.355], [127.755, 26.272], [127.79, 26.305], [127.88, 26.47], [128.04, 26.53], [128.18, 26.74]];

// ------------------------------------------------------------------------------------- timing
const T = {
  okiName: wt(0, 'okinawa'), american: wt(1, 'american'), stat: wt(2, 'statistically'), one: wt(2, 'one'), inW: wt(2, 'in'), five: wt(2, 'five'),
  nepal1: wt(3, 'nepal'), notMil: wt(4, 'military'), notCorp: wt(4, 'corporate'),
  young: wt(5, 'young'), single: wt(5, 'single'), students: wt(5, 'students'), packed: wt(6, 'packed'), schools: wt(6, 'schools'),
  rew0: TL[6].e + .08, nepal2: wt(7, 'nepal'), acad: wt(8, 'language'), compete: wt(8, 'compete'), forStud: wt(8, 'students'),
  biz: wt(9, 'business'), relies: wt(9, 'relies'), securing: wt(9, 'securing'), notor: wt(10, 'notoriously'), diff: wt(10, 'difficult'),
  visas: wt(10, 'japanese'), clients: wt(10, 'clients'),
  fly2: TL[10].e + .12, tokyo: wt(11, 'tokyos'), strict: wt(11, 'strict'), checkp: wt(11, 'checkpoints'),
  approving1: wt(12, 'approving'), ten: wt(12, '10'), twenty: wt(12, '20'),
  down: wt(13, 'down'), oki2: wt(13, 'okinawa'), office: wt(14, 'immigration'), approving2: wt(14, 'approving'), nearly: wt(14, 'nearly'), ninety: wt(14, '90'),
  spot: wt(15, 'spotting'), nepalese: wt(15, 'nepalese'), partnered: wt(16, 'partnered'), okiAcad: wt(16, 'okinawan'),
  highvol: wt(17, 'highvolume'), pipeline: wt(17, 'pipeline'), island: wt(17, 'island'), guaranteed: wt(18, 'guaranteed'), cheaper: wt(18, 'cheaper'),
  most: wt(19, 'most'), entrance: wt(20, 'entrance'), door: wt(20, 'door'), after: wt(21, 'after'), twoYears: wt(21, 'two'), school: wt(21, 'school'),
  migrate: wt(22, 'migrate'), tokyo2: wt(22, 'tokyo'), higher: wt(23, 'higherpaying'), parttime: wt(23, 'parttime'),
  sotoday: LS(24), quirk: wt(24, 'bureaucratic'), tropical: wt(25, 'tropical'), revolving: wt(26, 'revolvingdoor'), gateway: wt(26, 'gateway'),
  nepYouth: wt(26, 'nepalese'), youth: wt(26, 'youth'), end: TL[26].e + .3,
};
T.rew1 = T.nepal2 + .12;                // landing in Nepal
T.heroDep = T.pipeline + .15; T.heroArr = T.island + 2.3;
T.heroMig0 = T.migrate + .35; T.heroMig1 = T.tokyo2;

// ------------------------------------------------------------------------------------- camera
// views: lon, lat, zoom (px per unit), screen anchor x, y
const VIEWS = {
  okiA: [127.97, 26.47, O(400, 520), O(.42, .5), O(.47, .56)], okiB: [127.95, 26.47, O(660, 830), O(.42, .5), O(.47, .56)],
  okiB2: [127.93, 26.45, O(700, 870), O(.42, .5), O(.47, .56)], naha: [127.725, 26.235, O(1650, 1900), O(.42, .5), O(.52, .58)],
  nepal: [84.6, 28.15, O(140, 112), .5, O(.5, .5)], ktm: [85, 27.95, O(165, 132), .5, O(.5, .5)], ktm2: [85.05, 27.95, O(178, 140), .5, O(.5, .5)],
  tokyo: [139.3, 35.55, O(140, 112), O(.36, .5), O(.47, .36)], tokyo2: [139.35, 35.55, O(152, 120), O(.36, .5), O(.47, .36)],
  okiM: [127.8, 26.4, O(150, 120), O(.36, .5), O(.47, .36)], okiM2: [127.8, 26.4, O(165, 130), O(.36, .5), O(.47, .36)],
  wide: [106.5, 28.6, O(35, 22), .5, O(.47, .45)], wide2: [106.5, 28.6, O(37.5, 23.5), .5, O(.47, .45)],
  okiD: [127.88, 26.47, O(560, 700), O(.40, .5), O(.48, .53)], okiD2: [127.88, 26.47, O(600, 740), O(.40, .5), O(.48, .53)],
  japan: [133.6, 31, O(72, 58), O(.45, .5), O(.5, .55)], japan2: [134.5, 31.4, O(78, 62), O(.45, .5), O(.5, .55)],
  final: [111.5, 30, O(29, 18), .5, O(.47, .45)], final2: [111.5, 30, O(31.5, 19.2), .5, O(.47, .45)],
};
const KEYS = [[0, 'okiA'], [T.one - .2, 'okiB'], [T.students, 'okiB2'], [T.packed - .1, 'okiB2'], [T.schools + .2, 'naha'], [T.rew0, 'naha'],
  [T.rew1, 'nepal'], [T.biz, 'ktm'], [T.fly2, 'ktm2'], [T.tokyo + .1, 'tokyo'], [T.down - .15, 'tokyo2'], [T.oki2 + .3, 'okiM'], [T.nepalese, 'okiM2'],
  [T.partnered + .2, 'wide'], [T.cheaper + 1.2, 'wide2'], [T.entrance - .6, 'okiD'], [T.migrate - .2, 'okiD2'], [T.tokyo2 - .5, 'japan'],
  [T.sotoday - .2, 'japan2'], [T.quirk + .6, 'final'], [DUR, 'final2']];
// van Wijk & Nuij smooth zoom-and-pan between two views (w = visible width in world units)
function vwz(c0, w0, c1, w1, s01) {
  const rho = 1.3, r2 = rho * rho, r4 = r2 * r2, dx = c1[0] - c0[0], dy = c1[1] - c0[1], u1 = Math.hypot(dx, dy);
  if (u1 < 1e-5) return [lerp(c0[0], c1[0], s01), lerp(c0[1], c1[1], s01), w0 * Math.exp(Math.log(w1 / w0) * s01)];
  const b0 = (w1 * w1 - w0 * w0 + r4 * u1 * u1) / (2 * w0 * r2 * u1), b1 = (w1 * w1 - w0 * w0 - r4 * u1 * u1) / (2 * w1 * r2 * u1);
  const q0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), q1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), s = (q1 - q0) / rho * s01;
  const u = w0 / r2 * (Math.cosh(q0) * Math.tanh(rho * s + q0) - Math.sinh(q0));
  return [c0[0] + dx / u1 * u, c0[1] + dy / u1 * u, w0 * Math.cosh(q0) / Math.cosh(rho * s + q0)];
}
let CAM = { x: 0, y: 0, z: 30, ax: .5, ay: .5 };
function camAt(t) {
  let i = 0; while (i < KEYS.length - 2 && t >= KEYS[i + 1][0]) i++;
  const [t0, n0] = KEYS[i], [t1, n1] = KEYS[i + 1], a = VIEWS[n0], b = VIEWS[n1], u = E.io2(P(t, t0, t1));
  const [x, y, w] = vwz([wx(a[0]), wy(a[1])], W / a[2], [wx(b[0]), wy(b[1])], W / b[2], u);
  return { x, y, z: W / w, ax: lerp(a[3], b[3], u), ay: lerp(a[4], b[4], u) };
}
const SW = (X, Y) => [W * CAM.ax + (X - CAM.x) * CAM.z, H * CAM.ay + (Y - CAM.y) * CAM.z];
const S = (lon, lat) => SW(wx(lon), wy(lat));
const SC = c => S(c[0], c[1]);
function scrT() { ctx.setTransform(1, 0, 0, 1, SH.x, SH.y); }
function wrlT() { ctx.setTransform(CAM.z, 0, 0, CAM.z, W * CAM.ax - CAM.x * CAM.z + SH.x, H * CAM.ay - CAM.y * CAM.z + SH.y); }

// ------------------------------------------------------------------------------------- init
function chaikin(p, it) {
  for (let k = 0; k < it; k++) { const o = []; for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; o.push([a[0] * .75 + b[0] * .25, a[1] * .75 + b[1] * .25], [a[0] * .25 + b[0] * .75, a[1] * .25 + b[1] * .75]); } p = o; }
  return p;
}
function ell(lon, lat, rx, ry, rot) { const r = rot * Math.PI / 180, o = []; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU, x = Math.cos(a) * rx, y = Math.sin(a) * ry; o.push([lon + x * Math.cos(r) - y * Math.sin(r), lat + x * Math.sin(r) + y * Math.cos(r)]); } return o; }
const toW = arr => arr.map(([lo, la]) => [wx(lo), wy(la)]);
function pathOf(polys) { const p = new Path2D(); for (const poly of polys) { poly.forEach(([x, y], i) => i ? p.lineTo(x, y) : p.moveTo(x, y)); p.closePath(); } return p; }
function inPoly(x, y, poly) { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }
let LAND, NEPAL_P, OKI_P, OKI_W, NEP_W, RES = [], NPS = [], GL = {}, FLOW = [], FLOW2 = [];
const HEXC = { amber: NEP, cyan: JPN, white: PALE, green: OKC, red: RED };
function glowSprite(col) {
  const c = mkCanvas(64, 64), g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, col + 'aa'); gr.addColorStop(.35, col + '44'); gr.addColorStop(1, col + '00'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return c;
}
function initFilm() {
  const polys = [];
  for (const k in GEO) { const w = chaikin(toW(pts(GEO[k])), 2); if (k === 'okinawa') OKI_W = w; polys.push(w); }
  for (const s of SMALL) polys.push(toW(ell(...s)));
  LAND = pathOf(polys); OKI_P = pathOf([OKI_W]);
  NEP_W = chaikin(toW(pts(NEPAL_S)), 1); NEPAL_P = pathOf([NEP_W]);
  for (const k in HEXC) GL[k] = glowSprite(HEXC[k]);
  // foreign residents on Okinawa (illustrative dots), denser in the urban south
  const r = rng(11); let n = 0;
  const bx = OKI_W.map(p => p[0]), by = OKI_W.map(p => p[1]), x0 = Math.min(...bx), x1 = Math.max(...bx), y0 = Math.min(...by), y1 = Math.max(...by);
  while (RES.length < 65 && n++ < 20000) {
    const x = lerp(x0, x1, r()), y = lerp(y0, y1, r()), lat = LAT0 - y;
    if (!inPoly(x, y, OKI_W) || r() > 1 - .82 * P(lat, 26.25, 26.8)) continue;
    if (RES.some(q => Math.hypot(q.x - x, q.y - y) < .018)) continue;
    RES.push({ x, y, lat, t0: 1.15 + RES.length / 65 * 2.0 + r() * .25 });
  }
  RES.sort((a, b) => b.lat - a.lat);      // north -> south so the amber sweep travels down the island
  let j = 0; RES.forEach((q, i) => { q.nep = i % 5 === 2; if (q.nep) { q.k = j++; q.tn = T.one + .1 + q.k / 13 * .75; } });
  const nep = RES.filter(q => q.nep), nh = [wx(CITY.naha[0]), wy(CITY.naha[1])];
  let best = nep[0]; for (const q of nep) if (Math.hypot(q.x - nh[0], q.y - nh[1]) < Math.hypot(best.x - nh[0], best.y - nh[1])) best = q;
  best.hero = true; nep.forEach((q, i) => { q.tf0 = T.packed + .05 + i * .055; q.tf1 = q.tf0 + .75; });
  // would-be students across Nepal (illustrative)
  const nx = NEP_W.map(p => p[0]), ny = NEP_W.map(p => p[1]); n = 0;
  while (NPS.length < 46 && n++ < 20000) {
    const x = lerp(Math.min(...nx), Math.max(...nx), r()), y = lerp(Math.min(...ny), Math.max(...ny), r()), lon = LON0 + x / KX, lat = LAT0 - y;
    if (!inPoly(x, y, NEP_W) || (lat > 28.95 - .23 * (lon - 80) && r() > .25)) continue;
    let bi = 0, bd = 1e9; NP_ACAD.forEach((a, i) => { const d = Math.hypot(wx(a[0]) - x, wy(a[1]) - y); if (d < bd) { bd = d; bi = i; } });
    NPS.push({ x, y, ac: bi, t0: T.acad + .25 + NPS.length * .022, ph: r() * TAU });
  }
  // particles for the pipeline and the onward routes
  for (let i = 0; i < 90; i++) FLOW.push({ ph: r(), sp: .2 + r() * .12, off: (r() - .5) * 2, k: r() });
  for (let i = 0; i < 60; i++) FLOW2.push({ ph: r(), sp: .32 + r() * .2, off: (r() - .5) * 2, k: r(), route: i % 6 === 5 ? 1 + i % 3 : 0 });
}

// ------------------------------------------------------------------------------------- map
const DT = [mkCanvas(32, 32), mkCanvas(32, 32)];
function dotFill(path, col, alpha, rad = 1.55) {
  const zl = Math.log2(CAM.z / 30), L = Math.floor(zl), f = zl - L;
  ctx.save(); wrlT(); ctx.clip(path); scrT();
  const [ox, oy] = SW(0, 0);
  for (let j = 0; j < 2; j++) {
    const a = j ? f : 1 - f; if (a < .02) continue;
    const spx = .5 / Math.pow(2, L + j) * CAM.z, g = DT[j].getContext('2d');
    g.clearRect(0, 0, 32, 32); g.fillStyle = col; g.beginPath(); g.arc(16, 16, Math.min(15, rad * 32 / spx), 0, TAU); g.fill();
    const pat = ctx.createPattern(DT[j], 'repeat'); pat.setTransform(new DOMMatrix([spx / 32, 0, 0, spx / 32, ox % spx, oy % spx]));
    ctx.globalAlpha = alpha * a; ctx.fillStyle = pat; ctx.fillRect(-SH.x - 4, -SH.y - 4, W + 8, H + 8);
  }
  ctx.restore();
}
function nepalLevel(t) {
  const focus = vis(t, T.nepal2 - .25, T.fly2 + .4, .5, .6);
  const later = P(t, T.nepalese - .2, T.nepalese + .4) * (.6 - .25 * P(t, T.entrance - .6, T.entrance)) + .5 * P(t, T.nepYouth - .1, T.nepYouth + .3);
  return Math.min(1, Math.max(focus, later));
}
function drawMap(t) {
  scrT();
  const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#020812'); g.addColorStop(1, '#05182b');
  ctx.fillStyle = g; ctx.fillRect(-30, -30, W + 60, H + 60);
  { const fx = W * CAM.ax, fy = H * CAM.ay, rg = ctx.createRadialGradient(fx, fy, 0, fx, fy, Math.max(W, H) * .6); rg.addColorStop(0, 'rgba(30,90,140,.20)'); rg.addColorStop(1, 'rgba(30,90,140,0)'); ctx.fillStyle = rg; ctx.fillRect(-30, -30, W + 60, H + 60); }
  // graticule
  ctx.lineWidth = 1;
  const lonA = LON0 + (CAM.x - W * CAM.ax / CAM.z) / KX, lonB = LON0 + (CAM.x + W * (1 - CAM.ax) / CAM.z) / KX;
  const latB = LAT0 - (CAM.y - H * CAM.ay / CAM.z), latA = LAT0 - (CAM.y + H * (1 - CAM.ay) / CAM.z);
  for (const [step, al] of [[5, .075], [1, .06 * P(CAM.z, 70, 180)], [.25, .05 * P(CAM.z, 500, 1000)]]) {
    if (al < .003) continue; ctx.strokeStyle = `rgba(120,190,255,${al})`; ctx.beginPath();
    for (let lo = Math.ceil(lonA / step) * step; lo <= lonB; lo += step) { const x = S(lo, 0)[0]; ctx.moveTo(x, -30); ctx.lineTo(x, H + 30); }
    for (let la = Math.ceil(latA / step) * step; la <= latB; la += step) { const y = S(0, la)[1]; ctx.moveTo(-30, y); ctx.lineTo(W + 30, y); }
    ctx.stroke();
  }
  // land
  wrlT(); ctx.fillStyle = '#0a1c2e'; ctx.fill(LAND);
  dotFill(LAND, '#7cc8f0', .42);
  const nl = nepalLevel(t);
  if (nl > 0) { wrlT(); ctx.fillStyle = `rgba(255,170,60,${.16 * nl})`; ctx.fill(NEPAL_P); dotFill(NEPAL_P, NEP, .85 * nl, 1.9); }
  wrlT(); ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(95,212,255,.10)'; ctx.lineWidth = 7 / CAM.z; ctx.stroke(LAND);
  ctx.strokeStyle = 'rgba(130,220,255,.55)'; ctx.lineWidth = 1.3 / CAM.z; ctx.stroke(LAND);
  // Nepal border always faintly, amber when lit
  ctx.setLineDash([4 / CAM.z, 4 / CAM.z]); ctx.strokeStyle = `rgba(255,190,110,${.18 + .3 * (1 - nl)})`; ctx.lineWidth = 1.1 / CAM.z; ctx.stroke(NEPAL_P); ctx.setLineDash([]);
  if (nl > 0) { ctx.strokeStyle = `rgba(255,180,70,${.85 * nl})`; ctx.lineWidth = 2.4 / CAM.z; ctx.stroke(NEPAL_P); ctx.strokeStyle = `rgba(255,180,70,${.18 * nl})`; ctx.lineWidth = 12 / CAM.z; ctx.stroke(NEPAL_P); }
  // Okinawa glow when it is the subject
  const ol = Math.max(vis(t, 0, T.rew0 + .2, .6, .4), vis(t, T.oki2 - .2, T.nepalese + .5, .4, .5), vis(t, T.entrance - .8, T.migrate + .5, .4, .5), .8 * P(t, T.tropical - .1, T.tropical + .4));
  if (ol > 0) { ctx.strokeStyle = `rgba(120,225,255,${.7 * ol})`; ctx.lineWidth = 2.2 / CAM.z; ctx.stroke(OKI_P); ctx.strokeStyle = `rgba(95,212,255,${.16 * ol})`; ctx.lineWidth = 14 / CAM.z; ctx.stroke(OKI_P); }
  // region labels at mid zoom
  scrT(); const ra = P(CAM.z, 14, 20) * (1 - P(CAM.z, 70, 115));
  if (ra > 0) {
    ctx.globalAlpha = ra;
    const ok = (x, y) => x > 110 && x < W - 110 && y > O(120, 270) && y < H - O(190, 420);
    for (const [n, lo, la] of REGIONS) { const [x, y] = S(lo, la); if (ok(x, y)) txt(n, x, y, font(600, 14, F.m), 'rgba(170,205,235,.42)', 'center', 6); }
    for (const [n, lo, la] of SEAS) { const [x, y] = S(lo, la); if (ok(x, y)) txt(n, x, y, font(500, 13, F.m), 'rgba(110,180,230,.32)', 'center', 5); }
    ctx.globalAlpha = 1;
  }
}

// ------------------------------------------------------------------------------------- drawing helpers
function glow(x, y, r, c, a) { if (a <= 0) return; ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = clamp(a); ctx.drawImage(GL[c], x - r, y - r, r * 2, r * 2); ctx.restore(); }
function dot(x, y, r, col, a) { if (a <= 0) return; ctx.globalAlpha = clamp(a); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; }
function ring(x, y, t, t0, d, r0, r1, col, lw = 2, a = 1) { const u = P(t, t0, t0 + d); if (u <= 0 || u >= 1) return; ctx.save(); ctx.globalAlpha = a * (1 - u); ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.arc(x, y, lerp(r0, r1, E.o3(u)), 0, TAU); ctx.stroke(); ctx.restore(); }
function person(x, y, s, col, a = 1) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = col;
  ctx.beginPath(); ctx.arc(x, y - s * .3, s * .21, 0, TAU); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x, y + s * .42, s * .38, s * .36, 0, Math.PI, TAU); ctx.fill(); ctx.restore();
}
function nepalFlag(x, y, s, a = 1) {
  if (a <= 0) return; const w = s * .8; ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(w, s * .46); ctx.lineTo(w * .38, s * .46); ctx.lineTo(w, s); ctx.lineTo(0, s); ctx.closePath();
  ctx.fillStyle = '#dc143c'; ctx.fill(); ctx.lineJoin = 'miter'; ctx.strokeStyle = '#2a5bd7'; ctx.lineWidth = s * .07; ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(w * .25, s * .28, s * .06, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(w * .25, s * .74, s * .075, 0, TAU); ctx.fill(); ctx.restore();
}
function pin(x, y, s, col, glyph, a = 1, sc = 1) {
  if (a <= 0 || sc <= 0) return; const r = s * .5;
  ctx.save(); ctx.globalAlpha *= clamp(a); ctx.translate(x, y); ctx.scale(sc, sc);
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(-r * .25, -r * .55, -r, -r * 1.05, -r, -r * 1.8); ctx.arc(0, -r * 1.8, r, Math.PI, 0); ctx.bezierCurveTo(r, -r * 1.05, r * .25, -r * .55, 0, 0); ctx.closePath();
  ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 8; ctx.fillStyle = col; ctx.fill(); ctx.shadowBlur = 0;
  if (glyph && s >= 14) txt(glyph, 0, -r * 1.8 + 1, fJ(700, Math.round(r * 1.15)), '#0a1424', 'center', 0, 'middle');
  ctx.restore();
}
function checkMark(x, y, s, col, p, lw = 4) {
  if (p <= 0) return; const L = [[-.38, .02], [-.1, .3], [.42, -.32]]; ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const l1 = Math.hypot(.28, .28), l2 = Math.hypot(.52, .62), tot = l1 + l2, d = p * tot; ctx.beginPath(); ctx.moveTo(x + L[0][0] * s, y + L[0][1] * s);
  if (d <= l1) { const u = d / l1; ctx.lineTo(x + lerp(L[0][0], L[1][0], u) * s, y + lerp(L[0][1], L[1][1], u) * s); }
  else { ctx.lineTo(x + L[1][0] * s, y + L[1][1] * s); const u = (d - l1) / l2; ctx.lineTo(x + lerp(L[1][0], L[2][0], u) * s, y + lerp(L[1][1], L[2][1], u) * s); }
  ctx.stroke(); ctx.restore();
}
function crossMark(x, y, s, col, p, lw = 4) {
  if (p <= 0) return; ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; const a = clamp(p * 2), b = clamp(p * 2 - 1);
  ctx.beginPath(); ctx.moveTo(x - s * .35, y - s * .35); ctx.lineTo(x + lerp(-s * .35, s * .35, a), y + lerp(-s * .35, s * .35, a)); ctx.stroke();
  if (b > 0) { ctx.beginPath(); ctx.moveTo(x + s * .35, y - s * .35); ctx.lineTo(x + lerp(s * .35, -s * .35, b), y + lerp(-s * .35, s * .35, b)); ctx.stroke(); }
  ctx.restore();
}
function panel(x, y, w, h, a, col = JPN, title) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(4,12,24,.84)'; rrect(x, y, w, h, 14); ctx.fill();
  ctx.strokeStyle = col; ctx.globalAlpha = a * .55; ctx.lineWidth = 1.5; ctx.stroke(); ctx.globalAlpha = a;
  if (title) { ctx.fillStyle = col; ctx.fillRect(x + 22, y + 22, 8, 8); txt(title, x + 40, y + 31, font(700, 16, F.m), col, 'left', 4); }
  ctx.restore();
}
function pill(x, y, label, col, a, sc = 1, icon) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a); ctx.translate(x, y); ctx.scale(sc, sc); ctx.font = font(800, 22); ctx.letterSpacing = '2px';
  const w = ctx.measureText(label).width + (icon ? 66 : 40); ctx.letterSpacing = '0px';
  ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 12; ctx.fillStyle = 'rgba(4,12,24,.9)'; rrect(-w / 2, -22, w, 44, 22); ctx.fill(); ctx.shadowBlur = 0;
  ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();
  if (icon) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(-w / 2 + 24, 0, 13, 0, TAU); ctx.fill(); txt(icon, -w / 2 + 24, 1, font(900, 17), '#06101c', 'center', 0, 'middle'); }
  txt(label, icon ? -w / 2 + 46 : -w / 2 + 20, 1, font(800, 22), col, 'left', 2, 'middle'); ctx.restore();
}
function tracker(x, y, r, t, label, sub, a, col = NEP, side = 1) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a); ctx.translate(x, y);
  const rr = r * (1 + .6 * (1 - E.o3(clamp(a * 1.4)))); ctx.rotate(Math.sin(t * 1.5) * .08); ctx.strokeStyle = col; ctx.lineWidth = 3; const L = rr * .45;
  for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { ctx.beginPath(); ctx.moveTo(sx * rr, sy * (rr - L)); ctx.lineTo(sx * rr, sy * rr); ctx.lineTo(sx * (rr - L), sy * rr); ctx.stroke(); }
  ctx.rotate(-Math.sin(t * 1.5) * .08);
  ctx.beginPath(); ctx.moveTo(side * (rr + 6), -rr - 6); ctx.lineTo(side * (rr + 30), -rr - 30); ctx.lineTo(side * (rr + 54), -rr - 30); ctx.stroke();
  ctx.shadowColor = 'rgba(0,0,0,.8)'; ctx.shadowBlur = 10;
  txt(label, side * (rr + 60), -rr - 24, font(800, 22, F.m), col, side > 0 ? 'left' : 'right', 2);
  if (sub) { ctx.globalAlpha = clamp(a) * (Math.floor(t * 3) % 2 ? 1 : .55); txt('● ' + sub, side * (rr + 60), -rr + 1, font(600, 15, F.m), '#fff', side > 0 ? 'left' : 'right', 3); }
  ctx.restore();
}
function stamp2(t, t0, t1, x, y, label, col, rot = -.08, size = 60) {
  if (t < t0 || t > t1) return; const s = E.oBack(P(t, t0, t0 + .3)), a = P(t, t0, t0 + .1) * (1 - P(t, t1 - .35, t1));
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(lerp(2.3, 1, s), lerp(2.3, 1, s)); ctx.globalAlpha = a;
  ctx.font = font(900, size); ctx.letterSpacing = '4px'; const w = ctx.measureText(label).width + 56; ctx.letterSpacing = '0px';
  ctx.fillStyle = 'rgba(4,10,20,.55)'; ctx.fillRect(-w / 2, -size * .78, w, size * 1.56);
  ctx.strokeStyle = col; ctx.lineWidth = 6; ctx.strokeRect(-w / 2, -size * .78, w, size * 1.56); txt(label, 0, 4, font(900, size), col, 'center', 4, 'middle'); ctx.restore();
}
function cityMark(c, a, label, jp, side = 1, col = '#fff', size = 30, sub) {
  if (a <= 0) return; const [x, y] = SC(c); ctx.save(); ctx.globalAlpha = clamp(a);
  ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, 9, 0, TAU); ctx.stroke(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, TAU); ctx.fill();
  ctx.shadowColor = 'rgba(0,0,0,.85)'; ctx.shadowBlur = 12;
  const al = side > 0 ? 'left' : 'right', tx = x + side * 22; txt(label, tx, y + size * .34, font(800, size), col, al, 3);
  if (jp) { ctx.font = font(800, size); ctx.letterSpacing = '3px'; const lw = ctx.measureText(label).width; ctx.letterSpacing = '0px'; txt(jp, tx + side * (lw + 12), y + size * .3, fJ(500, Math.round(size * .7)), 'rgba(230,242,255,.75)', al); }
  if (sub) txt(sub, tx, y + size * .34 + 24, font(600, 14, F.m), 'rgba(230,242,255,.7)', al, 3);
  ctx.restore();
}
const qb = (a, c, b, u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
function arcDef(A, B, bend) { const a = [wx(A[0]), wy(A[1])], b = [wx(B[0]), wy(B[1])], dx = b[0] - a[0], dy = b[1] - a[1]; return { a, b, c: [(a[0] + b[0]) / 2 + dy * bend, (a[1] + b[1]) / 2 - dx * bend] }; }
const arcPt = (d, u) => qb(d.a, d.c, d.b, u);
function arcStroke(d, u0, u1, col, lw, a, dash) {
  if (a <= 0 || u1 <= u0) return; ctx.save(); ctx.globalAlpha = clamp(a); ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); for (let i = 0; i <= 60; i++) { const [X, Y] = arcPt(d, lerp(u0, u1, i / 60)), [x, y] = SW(X, Y); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); ctx.restore();
}
function arcScreen(d, u) { const [X, Y] = arcPt(d, u); return SW(X, Y); }
function arcNormal(d, u) { const [x0, y0] = arcScreen(d, Math.max(0, u - .01)), [x1, y1] = arcScreen(d, Math.min(1, u + .01)), l = Math.hypot(x1 - x0, y1 - y0) || 1; return [-(y1 - y0) / l, (x1 - x0) / l]; }
const PIPE = arcDef(CITY.ktm, CITY.naha, .2);
const REW = arcDef(CITY.naha, HERO_NP, -.2);
const ROUTES = [arcDef(CITY.naha, CITY.tokyo, -.22), arcDef(CITY.naha, CITY.osaka, -.2), arcDef(CITY.naha, CITY.nagoya, -.2), arcDef(CITY.naha, CITY.fukuoka, -.2)];
function appCard(x, y, rot, a, res, hero, sp) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a); ctx.translate(x, y); ctx.rotate(rot);
  const w = O(34, 38), h = O(44, 48); ctx.fillStyle = hero ? '#fff4dc' : '#dbe8f5'; ctx.shadowColor = 'rgba(0,0,0,.5)'; ctx.shadowBlur = 8; ctx.fillRect(-w / 2, -h / 2, w, h); ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(30,50,80,.5)'; for (let i = 0; i < 4; i++) ctx.fillRect(-w / 2 + 6, -h / 2 + 8 + i * 8, w - 12 - (i % 2) * 8, 3);
  if (hero) { ctx.strokeStyle = NEP; ctx.lineWidth = 3; ctx.strokeRect(-w / 2 - 3, -h / 2 - 3, w + 6, h + 6); }
  if (res && sp > 0) { const s = lerp(1.8, 1, E.o3(sp)); ctx.globalAlpha = clamp(a) * clamp(sp * 2); ctx.scale(s, s); ctx.fillStyle = res > 0 ? OKC : RED; ctx.beginPath(); ctx.arc(w * .2, h * .18, 13, 0, TAU); ctx.fill();
    if (res > 0) checkMark(w * .2, h * .18, 18, '#04121e', 1, 3.5); else crossMark(w * .2, h * .18, 18, '#fff', 1, 3.5); }
  ctx.restore();
}
function appStream(t, gx, gy, t0, n, gap, ok, heroK, dist) {
  for (let k = 0; k < n; k++) {
    const s = t0 + k * gap, arr = s + .55; if (t < s) break;
    const good = ok(k); let x, y, a, rot = 0; const sx0 = gx - dist, sy0 = gy + ((k * 7) % 5 - 2) * 9;
    if (t < arr) { const u = E.io2(P(t, s, arr)); x = lerp(sx0, gx - 30, u); y = lerp(sy0, gy, u); a = P(t, s, s + .15); }
    else if (good) { const u = E.i2(P(t, arr + .2, arr + .95)); x = gx - 30 + u * O(200, 150); y = gy - u * 18; a = 1 - P(t, arr + .7, arr + .95); }
    else { const u = P(t, arr + .2, arr + .85); x = gx - 30 - u * 26; y = gy + E.i2(u) * 150; rot = -u * .9; a = 1 - P(t, arr + .5, arr + .85); }
    appCard(x, y, rot, a, t >= arr ? (good ? 1 : -1) : 0, k === heroK, P(t, arr, arr + .14));
  }
}
function gate(x, y, s, a, open, col) {
  if (a <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a); ctx.translate(x, y);
  ctx.fillStyle = '#16304a'; ctx.strokeStyle = '#cfe4f7'; ctx.lineWidth = 2; rrect(s * .1, -s * 1.1, s * .55, s * 1.1, 4); ctx.fill(); ctx.stroke();      // booth
  ctx.fillStyle = col; ctx.beginPath(); ctx.arc(s * .375, -s * .82, s * .1, 0, TAU); ctx.fill(); glow(s * .375, -s * .82, s * .45, col === RED ? 'red' : 'green', .9);
  ctx.fillStyle = '#cfe4f7'; ctx.fillRect(-s * .05, -s * .7, s * .1, s * .7);                                                                               // post
  ctx.save(); ctx.translate(0, -s * .5); ctx.rotate(-open * 1.2);
  const L = s * 1.7, n = 6; for (let i = 0; i < n; i++) { ctx.fillStyle = i % 2 ? '#fff' : col; ctx.fillRect(-L + i * L / n, -s * .06, L / n, s * .12); }
  ctx.restore(); ctx.restore();
}
function building(x, y, w, h, rise, a, col, sign, signJ, lit, litCol) {
  if (a <= 0 || rise <= 0) return; ctx.save(); ctx.globalAlpha = clamp(a); ctx.translate(x, y); ctx.scale(1, rise);
  ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(0, 0, w * .62, 14, 0, 0, TAU); ctx.fill();
  const gr = ctx.createLinearGradient(0, -h, 0, 0); gr.addColorStop(0, '#173452'); gr.addColorStop(1, '#0c1f33'); ctx.fillStyle = gr; ctx.fillRect(-w / 2, -h, w, h);
  ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.strokeRect(-w / 2, -h, w, h);
  ctx.fillStyle = col; ctx.fillRect(-w / 2 - 8, -h - 6, w + 16, 8);
  if (signJ) txt(signJ, 0, -h + 34, fJ(700, 24), '#fff', 'center');
  if (sign) txt(sign, 0, -h + 54, font(600, 12, F.m), 'rgba(220,240,255,.8)', 'center', 3);
  const cols = 5, rows = 4; for (let k = 0; k < cols * rows; k++) { const c = k % cols, r = Math.floor(k / cols), wx_ = -w / 2 + 22 + c * (w - 44 - 20) / (cols - 1), wy_ = -h + 72 + r * (h - 104) / (rows - 1); const on = lit(k);
    ctx.fillStyle = on > 0 ? litCol : 'rgba(120,170,220,.15)'; ctx.globalAlpha = clamp(a) * (on > 0 ? .4 + .6 * on : 1); ctx.fillRect(wx_, wy_, 20, 22); if (on > 0) glow(wx_ + 10, wy_ + 11, 26, 'amber', .5 * on); ctx.globalAlpha = clamp(a); }
  ctx.fillStyle = '#05101c'; ctx.fillRect(-12, -30, 24, 30);
  ctx.restore();
}
function schoolGeo(t) { const [bx, by] = S(127.705, 26.232), w = O(240, 250), h = O(250, 260), rise = E.oBack(P(t, T.packed - .12, T.packed + .5));
  return { bx, by, w, h, rise, win: k => { const c = k % 5, r = Math.floor(k / 5); return [bx - w / 2 + 32 + c * (w - 64) / 4, by + rise * (-h + 83 + r * (h - 104) / 3)]; } }; }
const HERO_WIN = 4;

// ------------------------------------------------------------------------------------- CH 01 · who lives here
function okiTitle(t) {
  const a = vis(t, T.okiName - .35, T.stat - .1, .5, .5); if (a <= 0) return;
  const x = O(130, W / 2), y = O(420, 330), al = O('left', 'center'), p = P(t, T.okiName - .35, T.okiName + .6);
  ctx.save(); ctx.globalAlpha = a; ctx.shadowColor = 'rgba(0,0,0,.8)'; ctx.shadowBlur = 16;
  txt('26.2°N · 127.7°E', x, y - O(86, 80), font(600, 17, F.m), JPN, al, 5);
  const s = 'OKINAWA'; txt(s.slice(0, Math.ceil(s.length * E.o3(p))), x, y, font(900, O(92, 96)), '#fff', al, O(14, 14));
  txt('沖縄県 · 日本', x, y + O(52, 54), fJ(500, 28), 'rgba(220,240,255,.8)', al);
  ctx.fillStyle = JPN; const lw = O(300, 280) * E.o3(P(t, T.okiName, T.okiName + .8)); ctx.fillRect(O(x, x - lw / 2), y + O(78, 80), lw, 3);
  ctx.restore();
}
function residents(t) {
  if (t > T.rew0 + .2) return;
  const g = schoolGeo(t), rad = O(5.5, 6.5);
  for (const q of RES) {
    let a = P(t, q.t0, q.t0 + .3); if (a <= 0) continue;
    let [x, y] = SW(q.x, q.y);
    if (q.nep) {
      if (t > q.tf0) { if (t > q.tf1 || q.hero) continue; const k = E.io2(P(t, q.tf0, q.tf1)); x = lerp(x, g.bx, k); y = lerp(y, g.by - 14 * g.rise, k); }
      const u = P(t, q.tn, q.tn + .25);
      dot(x, y, rad, PALE, a * (1 - u)); glow(x, y, rad * 4.5, 'amber', a * u * .8); dot(x, y, rad * (1 + .25 * u), NEP, a * u);
      ring(x, y, t, q.tn, .7, 6, 30, NEP, 2); ring(x, y, t, T.nepal1 + q.k * .03, .9, 8, 46, NEP, 2.5);
    } else {
      a *= 1 - .6 * P(t, T.notMil - .2, T.notMil + .5); a *= 1 - P(t, T.packed - .2, T.packed + .5);
      dot(x, y, rad * .9, PALE, a * .85);
    }
  }
}
function bases(t) {
  const a0 = P(t, T.american - .05, T.american + .3); if (a0 <= 0 || t > T.stat + .6) return;
  const out = P(t, T.stat - .05, T.stat + .45), flick = t > T.stat ? (Math.floor(t * 34) % 3 ? 1 : .2) : 1, a = a0 * (1 - out) * flick;
  BASES.forEach((b, i) => { const [x, y] = SC(b), s = E.oBack(P(t, T.american + i * .07, T.american + i * .07 + .35)) * O(17, 19); if (s <= 0) return;
    ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.fillStyle = 'rgba(12,30,52,.92)'; ctx.strokeStyle = '#a9c9ec'; ctx.lineWidth = 2; rrect(-s, -s, 2 * s, 2 * s, 4); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#d7e8fb'; ctx.beginPath(); for (let k = 0; k < 10; k++) { const r = k % 2 ? s * .32 : s * .72, q = -Math.PI / 2 + k * Math.PI / 5; ctx.lineTo(Math.cos(q) * r, Math.sin(q) * r); } ctx.closePath(); ctx.fill(); ctx.restore(); });
  const [kx, ky] = SC(BASES[0]); ctx.save(); ctx.globalAlpha = flick;
  callout(kx, ky, O(300, -170), O(-150, -200), 'US MILITARY', 'THE USUAL PICTURE', vis(t, T.american + .15, T.stat + .3, .8, .3), '#cfe2f7', O(1, 0));
  ctx.restore();
}
function statBlock(t) {
  const a = vis(t, T.stat + .05, T.notMil - .25, .35, .4); if (a <= 0) return;
  const cx = O(1530, W / 2), y0 = O(250, 305);
  ctx.save(); ctx.globalAlpha = a;
  panel(cx - O(290, 450), y0 - 46, O(580, 900), O(500, 470), 1, NEP);
  txt('FOREIGN RESIDENTS · OKINAWA', cx, y0 + 4, font(700, 16, F.m), 'rgba(255,220,170,.85)', 'center', 4);
  const parts = [['1', T.one], ['IN', T.inW], ['5', T.five]]; ctx.font = font(900, O(150, 150)); const sp = 30;
  const ws = parts.map(([s]) => ctx.measureText(s).width), tot = ws.reduce((s, v) => s + v, 0) + sp * 2; let x = cx - tot / 2;
  parts.forEach(([s, tw], i) => { const p = P(t, tw - .05, tw + .25); if (p > 0) { ctx.save(); ctx.globalAlpha = a * p; txt(s, x, y0 + O(170, 170) + 26 * (1 - E.o3(p)), font(900, 150), i === 1 ? '#fff' : NEP, 'left'); ctx.restore(); } x += ws[i] + sp; });
  for (let i = 0; i < 5; i++) { const px = cx + (i - 2) * O(92, 120), py = y0 + O(270, 280), on = i === 0 ? P(t, T.five + .1, T.five + .4) : 0;
    person(px, py, O(64, 76), on > 0 ? NEP : 'rgba(200,220,240,.35)', P(t, T.five - .2 + i * .05, T.five + .1 + i * .05)); if (on > 0) { glow(px, py, 70, 'amber', .5 * on); ring(px, py, t, T.five + .1, .7, 30, 80, NEP, 2.5); } }
  const pn = P(t, T.nepal1 - .1, T.nepal1 + .3);
  if (pn > 0) { ctx.save(); ctx.globalAlpha = a * pn; ctx.font = font(900, 40); ctx.letterSpacing = '6px'; const lw = ctx.measureText('FROM NEPAL').width; ctx.letterSpacing = '0px';
    const fx = cx - (lw + 54) / 2; nepalFlag(fx, y0 + O(342, 352), 42); txt('FROM NEPAL', fx + 54, y0 + O(378, 388), font(900, 40), NEP, 'left', 6); ctx.restore(); }
  ctx.restore();
}
function notCards(t) {
  const a = vis(t, T.notMil - .25, T.young - .3, .3, .4); if (a <= 0) return;
  const x = O(1250, 90), w = O(570, 900), h = O(150, 140);
  [[T.notMil, 'MILITARY FAMILIES', 'fam'], [T.notCorp, 'CORPORATE TRANSFERS', 'brief']].forEach(([t0, label, ic], i) => {
    const p = P(t, t0 - .2, t0 + .2); if (p <= 0) return; const y = O(260, 300) + i * O(180, 165) + 20 * (1 - E.o3(p));
    ctx.save(); ctx.globalAlpha = a * p; panel(x, y, w, h, 1, '#a9c9ec');
    const ix = x + 80, iy = y + h / 2;
    if (ic === 'fam') { person(ix - 24, iy + 4, 44, '#cfe2f7'); person(ix + 18, iy + 4, 44, '#cfe2f7'); person(ix - 3, iy + 22, 26, '#cfe2f7');
      ctx.fillStyle = '#ffd36b'; ctx.beginPath(); for (let k = 0; k < 10; k++) { const r = k % 2 ? 5 : 11, q = -Math.PI / 2 + k * Math.PI / 5; ctx.lineTo(ix + 34 + Math.cos(q) * r, iy - 26 + Math.sin(q) * r); } ctx.fill(); }
    else { ctx.fillStyle = '#cfe2f7'; rrect(ix - 34, iy - 16, 68, 46, 6); ctx.fill(); ctx.strokeStyle = '#cfe2f7'; ctx.lineWidth = 5; rrect(ix - 14, iy - 30, 28, 18, 5); ctx.stroke(); ctx.fillStyle = '#0a1a2c'; ctx.fillRect(ix - 34, iy + 2, 68, 4); }
    txt(label, x + 140, iy + 10, font(800, O(26, 30)), '#eaf3ff', 'left', 2);
    const sp = P(t, t0 + .35, t0 + .7); if (sp > 0) { ctx.strokeStyle = RED; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x + 140, iy); ctx.lineTo(x + 130 + (w - 220) * E.o3(sp), iy); ctx.stroke();
      ctx.fillStyle = RED; ctx.beginPath(); ctx.arc(x + w - 44, iy, 24 * E.oBack(sp), 0, TAU); ctx.fill(); crossMark(x + w - 44, iy, 34, '#fff', P(t, t0 + .45, t0 + .8), 5); }
    ctx.restore();
  });
}
function profile(t) {
  const a = vis(t, T.young - .45, T.rew0 - .05, .35, .4); if (a <= 0) return;
  const x = O(1250, 90), y = O(250, 290), w = O(570, 900), h = O(330, 290);
  ctx.save(); ctx.globalAlpha = a; panel(x, y, w, h, 1, NEP, 'WHO THEY ARE');
  const ax = x + O(95, 110), ay = y + O(165, 155); ctx.fillStyle = 'rgba(255,179,64,.12)'; ctx.beginPath(); ctx.arc(ax, ay, 58, 0, TAU); ctx.fill(); ctx.strokeStyle = NEP; ctx.lineWidth = 2; ctx.stroke(); person(ax, ay + 6, 78, NEP);
  [['AGE', 'YOUNG', T.young], ['STATUS', 'SINGLE', T.single], ['VISA', 'STUDENT', T.students]].forEach(([k, v, tw], i) => {
    const p = P(t, tw - .1, tw + .2); if (p <= 0) return; const ry = y + O(110, 100) + i * O(70, 62), rx = x + O(178, 230);
    ctx.save(); ctx.globalAlpha = a * p; txt(k, rx, ry, font(600, 15, F.m), 'rgba(220,235,250,.6)', 'left', 4); txt(v, rx + O(108, 140), ry + 4, font(900, O(30, 36)), '#fff', 'left', 3);
    ctx.fillStyle = OKC; ctx.beginPath(); ctx.arc(x + w - O(42, 70), ry - 6, 17, 0, TAU); ctx.fill(); checkMark(x + w - O(42, 70), ry - 6, 22, '#04121e', P(t, tw, tw + .3), 3.5); ctx.restore();
  });
  ctx.restore();
}
function school(t) {
  if (t < T.packed - .15 || t > T.rew0 + .3) return; const g = schoolGeo(t), a = 1 - P(t, T.rew0 - .05, T.rew0 + .25);
  building(g.bx, g.by, g.w, g.h, g.rise, a, JPN, 'JAPANESE LANGUAGE SCHOOL', '日本語学校', k => P(t, T.packed + .45 + k * .062, T.packed + .6 + k * .062), NEP);
  const occ = P(t, T.packed + .45, T.packed + .6 + 19 * .062);
  if (g.rise > .5) { ctx.save(); ctx.globalAlpha = a; const bw = g.w, bx = g.bx - bw / 2, by = g.by + 30; txt('SEATS FILLED', bx, by + 14, font(600, 13, F.m), 'rgba(220,240,255,.75)', 'left', 3);
    ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(bx, by + 24, bw, 10); ctx.fillStyle = NEP; ctx.fillRect(bx, by + 24, bw * occ, 10);
    if (occ >= 1) txt('FULL', bx + bw, by + 14, font(900, 16, F.m), NEP, 'right', 3); ctx.restore(); }
}

// ------------------------------------------------------------------------------------- CH 02 · the source
function rewU() {
  const a0 = [wx(VIEWS.naha[0]), wy(VIEWS.naha[1])], b0 = [wx(VIEWS.nepal[0]), wy(VIEWS.nepal[1])], dx = b0[0] - a0[0], dy = b0[1] - a0[1];
  return clamp(((CAM.x - a0[0]) * dx + (CAM.y - a0[1]) * dy) / (dx * dx + dy * dy));
}
function rewind(t) {
  const a = vis(t, T.rew0 - .05, T.rew1 + .25, .15, .35); if (a <= 0) return;
  ctx.save(); ctx.globalAlpha = a * .5; ctx.fillStyle = 'rgba(0,0,0,.35)'; for (let y = (t * 300) % 6; y < H; y += 6) ctx.fillRect(0, y, W, 2);
  ctx.globalAlpha = a * .25; for (let k = 0; k < 3; k++) { const by = ((t * 0.9 + k * .37) % 1) * H; ctx.fillStyle = 'rgba(200,230,255,.5)'; ctx.fillRect(0, by, W, 6 + k * 4); }
  ctx.globalAlpha = a; const x = O(W - 70, W / 2), y = O(140, 320), al = O('right', 'center');
  txt('◀◀  REWIND', x + 3, y, font(800, 30, F.m), 'rgba(255,60,90,.8)', al, 6); txt('◀◀  REWIND', x, y, font(800, 30, F.m), '#fff', al, 6);
  txt('BACK TO WHERE IT STARTS', x, y + 30, font(600, 15, F.m), 'rgba(230,240,255,.75)', al, 4);
  ctx.restore();
  if (t > T.rew0 && t < T.rew1 + .3) arcStroke(REW, 0, t < T.rew1 ? rewU() : 1, 'rgba(255,179,64,.8)', 2.5, a, [8, 8]);
}
function nepalScene(t) {
  const a = vis(t, T.nepal2 - .3, T.biz + .2, .4, .5); if (a <= 0) return;
  const [lx, ly] = S(83.4, 29.55); ctx.save(); ctx.globalAlpha = a; ctx.shadowColor = 'rgba(0,0,0,.85)'; ctx.shadowBlur = 16;
  const p = P(t, T.nepal2 - .25, T.nepal2 + .5); txt('NEPAL'.slice(0, Math.ceil(5 * E.o3(p))), lx, ly, font(900, O(64, 64)), NEP, 'center', 16); ctx.restore();
  cityMark(CITY.ktm, a * P(t, T.nepal2, T.nepal2 + .4), 'KATHMANDU', null, O(-1, -1), '#fff', 22);
  NP_ACAD.forEach((c, i) => { const t0 = T.acad + i * .07, s = E.oBack(P(t, t0, t0 + .35)); const [x, y] = SC(c); pin(x, y, O(28, 28), NEP, 'あ', a, s);
    const ph = (i * .37) % .9; if (t > T.compete + ph) ring(x, y - 25, t, T.compete + ph + Math.floor((t - T.compete - ph) / .9) * .9, .9, 6, 46, NEP, 2, a * (1 - P(t, T.forStud + .6, T.forStud + 1.2))); });
  for (const q of NPS) {
    const ap = P(t, q.t0, q.t0 + .25) * a; if (ap <= 0) continue; let [x, y] = SW(q.x, q.y); const [px, py] = SC(NP_ACAD[q.ac]);
    const tug = P(t, T.compete, T.compete + .5), join = E.io2(P(t, T.forStud, T.forStud + .8));
    x += Math.sin(t * 9 + q.ph) * 3 * tug * (1 - join); x = lerp(x, px, join * .85); y = lerp(y, py - 6, join * .85);
    if (tug > 0 && join < 1) { ctx.save(); ctx.globalAlpha = ap * tug * (1 - join) * (.25 + .3 * (Math.sin(t * 13 + q.ph) > 0)); ctx.strokeStyle = NEP; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(px, py - 12); ctx.stroke(); ctx.restore(); }
    dot(x, y, 4, join > .5 ? NEP : PALE, ap);
  }
  const [kx, ky] = SC(CITY.ktm);
  callout(kx + 6, ky - 30, O(170, 130), O(-170, -330), 'LANGUAGE ACADEMIES', 'COMPETING FOR STUDENTS', vis(t, T.acad + .3, T.biz - .2, .9, .4), NEP, O(1, 0));
}
function bizPanel(t) {
  const a = vis(t, T.biz - .25, T.fly2 + .15, .35, .4); if (a <= 0) return;
  scrT(); ctx.fillStyle = `rgba(2,6,14,${.5 * a})`; ctx.fillRect(-20, -20, W + 40, H + 40);
  const x = O(250, 60), y = O(215, 300), w = O(1420, 960), h = O(230, 290);
  ctx.save(); ctx.globalAlpha = a; panel(x, y, w, h, 1, NEP, 'THE ACADEMY BUSINESS MODEL');
  const nodes = [['STUDENT', 'p', T.biz], ['ACADEMY', 'a', T.biz + .28], ['STUDENT VISA', 'v', T.relies], ['JAPAN', 'j', T.securing]];
  const n = nodes.length, cy = y + O(130, 160), gap = (w - O(160, 120)) / (n - 1), x0 = x + O(80, 60);
  nodes.forEach(([lab, ic, tw], i) => {
    const p = E.oBack(P(t, tw - .1, tw + .25)); if (p <= 0) return; const nx = x0 + i * gap, key = i === 2, hi = key ? P(t, T.securing, T.securing + .3) : 0;
    ctx.save(); ctx.globalAlpha = a * clamp(p); ctx.translate(nx, cy); ctx.scale(p, p);
    if (hi > 0) glow(0, 0, 120, 'amber', .7 * hi);
    ctx.fillStyle = 'rgba(10,24,40,.95)'; ctx.strokeStyle = key && hi > 0 ? NEP : 'rgba(200,225,250,.6)'; ctx.lineWidth = key && hi > 0 ? 4 : 2; ctx.beginPath(); ctx.arc(0, 0, O(54, 50), 0, TAU); ctx.fill(); ctx.stroke();
    if (ic === 'p') person(0, 4, 56, NEP); else if (ic === 'a') pin(0, 26, 40, NEP, 'あ'); else if (ic === 'v') { ctx.fillStyle = '#eaf3ff'; ctx.fillRect(-20, -26, 40, 52); ctx.fillStyle = '#9fb6cc'; for (let k = 0; k < 4; k++) ctx.fillRect(-13, -16 + k * 9, 26 - (k % 2) * 8, 3); ctx.fillStyle = NEP; ctx.beginPath(); ctx.arc(10, 16, 8, 0, TAU); ctx.fill(); }
    else { ctx.fillStyle = '#fff'; ctx.fillRect(-28, -19, 56, 38); ctx.fillStyle = '#bc002d'; ctx.beginPath(); ctx.arc(0, 0, 11, 0, TAU); ctx.fill(); }
    ctx.restore();
    ctx.save(); ctx.globalAlpha = a * clamp(p); txt(lab, nx, cy + O(84, 80), font(800, O(20, 19), F.m), key && hi > 0 ? NEP : '#dbe8f5', 'center', 3); ctx.restore();
    if (i > 0) { const ap = P(t, tw - .3, tw), x1 = x0 + (i - 1) * gap + O(66, 58), x2 = nx - O(66, 58); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = 'rgba(220,235,250,.7)'; ctx.fillStyle = 'rgba(220,235,250,.7)'; ctx.lineWidth = 3;
      const xe = lerp(x1, x2, E.o3(ap)); ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(xe, cy); ctx.stroke(); if (ap > .9) { ctx.beginPath(); ctx.moveTo(x2, cy); ctx.lineTo(x2 - 14, cy - 8); ctx.lineTo(x2 - 14, cy + 8); ctx.fill(); } ctx.restore(); }
  });
  const kp = P(t, T.securing + .1, T.securing + .5); if (kp > 0) { const kx = x0 + 2 * gap; ctx.save(); ctx.globalAlpha = a * kp; txt('EVERYTHING DEPENDS ON THIS', kx, cy - O(74, 70), font(800, 15, F.m), NEP, 'center', 3); ctx.restore(); }
  ctx.restore();
  // the application card for the hero
  const va = vis(t, T.notor - .25, T.fly2 + .15, .35, .4); if (va <= 0) return;
  const vx = O(560, 90), vy = O(490, 640), vw = O(800, 900), vh = O(310, 360), sl = 30 * (1 - E.o3(P(t, T.notor - .25, T.notor + .2)));
  ctx.save(); ctx.globalAlpha = va; ctx.translate(0, sl); ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 30; ctx.fillStyle = '#f2ead8'; rrect(vx, vy, vw, vh, 10); ctx.fill(); ctx.shadowBlur = 0;
  ctx.fillStyle = '#1d3a5c'; ctx.fillRect(vx, vy, vw, 54); txt('STUDENT VISA · APPLICATION', vx + 28, vy + 35, font(800, 20, F.m), '#fff', 'left', 4); txt('日本', vx + vw - 28, vy + 37, fJ(700, 24), '#fff', 'right');
  const rows = [['APPLICANT', 'STUDENT #0001'], ['ORIGIN', 'NEPAL'], ['DESTINATION', 'JAPAN']];
  rows.forEach(([k, v], i) => { txt(k, vx + 32, vy + 98 + i * 40, font(600, 15, F.m), '#5b6b80', 'left', 3); txt(v, vx + O(230, 250), vy + 100 + i * 40, font(800, 24), '#14243a', 'left', 2); });
  const dx = vx + 32, dy = vy + vh - 62; txt('DIFFICULTY', dx, dy - 10, font(700, 15, F.m), '#5b6b80', 'left', 3);
  for (let k = 0; k < 5; k++) { const on = P(t, T.notor + k * .14, T.notor + k * .14 + .15); ctx.fillStyle = on > 0 ? `rgba(230,40,60,${.25 + .75 * on})` : 'rgba(20,36,58,.15)'; ctx.fillRect(dx + k * 62, dy, 54, 26); }
  const dl = P(t, T.diff, T.diff + .3); if (dl > 0) { ctx.globalAlpha = va * dl; txt('NOTORIOUSLY HARD', dx + 330, dy + 21, font(900, 24), '#d0213d', 'left', 2); ctx.globalAlpha = va; }
  ctx.globalAlpha = va * (Math.floor(t * 2.5) % 2 ? 1 : .45); txt('● PENDING', vx + vw - 32, vy + 100, font(800, 16, F.m), '#b07a12', 'right', 3);
  ctx.restore();
}

// ------------------------------------------------------------------------------------- CH 03 · the loophole
function tokyoScene(t) {
  const a = vis(t, T.tokyo - .35, T.down + .5, .35, .4); if (a <= 0) return;
  cityMark(CITY.tokyo, a, 'TOKYO', '東京', 1, '#fff', 34);
  const [tx, ty] = SC(CITY.tokyo), gx = tx - O(150, 120), gy = ty + O(10, 10);
  const ga = a * P(t, T.strict - .1, T.strict + .25); gate(gx, gy, 60, ga, 0, RED);
  if (ga > 0) { ctx.save(); ctx.globalAlpha = ga * P(t, T.checkp - .2, T.checkp + .2); ctx.shadowColor = 'rgba(0,0,0,.85)'; ctx.shadowBlur = 10; txt('IMMIGRATION CHECKPOINT', gx + 20, gy + 40, font(700, 15, F.m), '#ffd0d6', 'center', 3); txt('STRICT', gx + 20, gy + 62, font(900, 18, F.m), RED, 'center', 5); ctx.restore(); }
  ctx.save(); ctx.globalAlpha = a; appStream(t, gx - 70, gy - 30, T.approving1 - .25, 12, .24, k => k % 7 === 3, -1, O(560, 420)); ctx.restore();
}
function okiOffice(t) {
  const a = vis(t, T.oki2 - .35, T.nepalese + .6, .35, .5); if (a <= 0) return;
  cityMark(CITY.naha, a, 'OKINAWA', '沖縄', 1, '#fff', 34);
  const [nx, ny] = SC(CITY.naha), gx = nx - O(150, 120), gy = ny + O(10, 10), ga = a * P(t, T.office - .1, T.office + .25);
  gate(gx, gy, 60, ga, P(t, T.approving2 - .2, T.approving2 + .3), OKC);
  if (ga > 0) { ctx.save(); ctx.globalAlpha = ga; ctx.shadowColor = 'rgba(0,0,0,.85)'; ctx.shadowBlur = 10; txt('LOCAL IMMIGRATION OFFICE', gx + 20, gy + 40, font(700, 15, F.m), '#d5ffe9', 'center', 3); ctx.restore(); }
  ctx.save(); ctx.globalAlpha = a; appStream(t, gx - 70, gy - 30, T.approving2 - .5, 13, .2, k => k % 10 !== 6, 4, O(560, 420)); ctx.restore();
  stamp2(t, T.ninety + .25, T.nepalese - .2, gx + O(40, 30), gy - O(150, 160), 'APPROVED', OKC, -.1, O(48, 44));
}
function barsPanel(t) {
  const a = vis(t, T.approving1 - .2, T.nepalese + .7, .4, .5); if (a <= 0) return;
  const x = O(1290, 90), y = O(236, 1010), w = O(530, 900), h = O(420, 330);
  ctx.save(); ctx.globalAlpha = a; panel(x, y, w, h, 1, JPN, 'STUDENT VISA APPROVAL RATE');
  const bx = x + 34, bw = w - 68, r1 = y + O(150, 130), r2 = y + O(300, 250), bh = 28;
  // Tokyo
  txt('TOKYO', bx, r1 - 18, font(800, 24), '#fff', 'left', 3); txt('東京', bx + 104, r1 - 19, fJ(500, 18), 'rgba(220,240,255,.6)', 'left');
  ctx.fillStyle = 'rgba(255,255,255,.08)'; rrect(bx, r1, bw, bh, 6); ctx.fill();
  const f1 = E.o3(P(t, T.ten - .05, T.ten + .4)) * .10, f2 = E.o3(P(t, T.twenty - .05, T.twenty + .4)) * .10;
  ctx.fillStyle = RED; ctx.fillRect(bx, r1, bw * f1, bh);
  if (f2 > 0) { ctx.save(); ctx.beginPath(); ctx.rect(bx + bw * .1, r1, bw * f2, bh); ctx.clip(); ctx.fillStyle = 'rgba(255,77,94,.35)'; ctx.fillRect(bx + bw * .1, r1, bw * .1, bh); ctx.strokeStyle = RED; ctx.lineWidth = 3; for (let k = -2; k < 12; k++) { ctx.beginPath(); ctx.moveTo(bx + bw * .1 + k * 10, r1 + bh); ctx.lineTo(bx + bw * .1 + k * 10 + bh, r1); ctx.stroke(); } ctx.restore(); }
  const v1 = P(t, T.ten - .05, T.ten + .2); if (v1 > 0) { ctx.save(); ctx.globalAlpha = a * v1; txt(t < T.twenty ? '10%' : '10–20%', bx + bw, r1 - 14, font(900, 46), RED, 'right', 1); ctx.restore(); }
  // Okinawa
  const ra = P(t, T.oki2 - .1, T.oki2 + .3);
  if (ra > 0) { ctx.save(); ctx.globalAlpha = a * ra; txt('OKINAWA', bx, r2 - 18, font(800, 24), '#fff', 'left', 3); txt('沖縄', bx + 144, r2 - 19, fJ(500, 18), 'rgba(220,240,255,.6)', 'left');
    ctx.fillStyle = 'rgba(255,255,255,.08)'; rrect(bx, r2, bw, bh, 6); ctx.fill(); const k = E.o3(P(t, T.nearly - .15, T.ninety + .45)); ctx.fillStyle = OKC; ctx.fillRect(bx, r2, bw * .9 * k, bh); if (k > 0) glow(bx + bw * .9 * k, r2 + bh / 2, 40, 'green', .8);
    if (k > 0) txt(k >= 1 ? '≈90%' : Math.round(90 * k) + '%', bx + bw, r2 - 14, font(900, 46), OKC, 'right', 1); ctx.restore(); }
  // the schools spot it
  const sp = P(t, T.spot - .1, T.spot + .6);
  if (sp > 0 && sp < 1) { ctx.save(); ctx.globalAlpha = a * (1 - sp) * .9; const sy = y + h * sp; const g = ctx.createLinearGradient(0, sy - 40, 0, sy); g.addColorStop(0, 'rgba(255,179,64,0)'); g.addColorStop(1, 'rgba(255,179,64,.5)'); ctx.fillStyle = g; ctx.fillRect(x, sy - 40, w, 40); ctx.fillStyle = NEP; ctx.fillRect(x, sy, w, 2); ctx.restore(); }
  const hl = P(t, T.spot + .3, T.spot + .6); if (hl > 0) { ctx.save(); ctx.globalAlpha = a * hl; ctx.strokeStyle = NEP; ctx.lineWidth = 3; rrect(bx - 14, r2 - 56, bw + 28, bh + 72, 10); ctx.stroke(); txt('SPOTTED BY NEPALESE SCHOOLS', bx + bw / 2, r2 + bh + 40, font(800, 15, F.m), NEP, 'center', 3); ctx.restore(); }
  ctx.restore();
}

// ------------------------------------------------------------------------------------- CH 04 · the pipeline
function pipeline(t) {
  if (t < T.nepalese - .3 || t > T.entrance + 1.2) return;
  const fade = 1 - P(t, T.entrance - .4, T.entrance + 1), cs = clamp(CAM.z / 30);
  // academies on both ends (clusters at wide zoom)
  NP_ACAD.forEach((c, i) => { const [x, y] = SC(c); pin(x, y, 22, NEP, null, fade * P(t, T.nepalese + i * .03, T.nepalese + .3 + i * .03), E.oBack(P(t, T.nepalese + i * .03, T.nepalese + .35 + i * .03)) * cs); });
  OK_ACAD.forEach((c, i) => { const [x, y] = SC(c); pin(x - 9 + i * 6, y, 26, JPN, null, fade * P(t, T.okiAcad + i * .1, T.okiAcad + .3 + i * .1), E.oBack(P(t, T.okiAcad + i * .1, T.okiAcad + .4 + i * .1)) * cs); });
  // partnership links
  const lp = P(t, T.partnered - .1, T.partnered + .8), la = fade * (1 - P(t, T.pipeline - .25, T.pipeline + .35));
  if (lp > 0 && la > 0) for (let i = 0; i < 6; i++) { const A = NP_ACAD[[0, 7, 10, 13, 8, 2][i]], B = OK_ACAD[i % 4], d = arcDef(A, B, .12 + i * .035); arcStroke(d, 0, E.io2(clamp(lp * 1.3 - i * .06)), 'rgba(255,200,120,.75)', 1.5, la * .9); }
  const [mx, my] = arcScreen(PIPE, .5);
  if (la > 0) { ctx.save(); ctx.globalAlpha = la * P(t, T.partnered + .2, T.partnered + .6); ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 12; txt('PARTNERSHIPS', mx, my - 40, font(800, 22, F.m), NEP2(), 'center', 6); ctx.restore(); }
  // the pipeline
  const pp = E.io2(P(t, T.pipeline - .35, T.pipeline + .55)); if (pp <= 0) return;
  arcStroke(PIPE, 0, pp, 'rgba(255,179,64,.10)', 30, fade); arcStroke(PIPE, 0, pp, 'rgba(255,179,64,.28)', 14, fade); arcStroke(PIPE, 0, pp, NEP, 4.5, fade); arcStroke(PIPE, 0, pp, '#fff6e0', 1.5, fade * .8);
  flowDots(t, PIPE, FLOW, T.highvol - .2, pp, fade, 1);
  ctx.save(); ctx.globalAlpha = fade * P(t, T.pipeline + .35, T.pipeline + .75); ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 12; txt('DEDICATED PIPELINE', mx, my - 44, font(900, O(26, 24)), NEP, 'center', 6); ctx.restore();
  const b1 = arcScreen(PIPE, .27), b2 = arcScreen(PIPE, .58);
  pill(b1[0], b1[1] + O(64, 70), 'VISA SUCCESS', OKC, fade * P(t, T.guaranteed - .1, T.guaranteed + .2), E.oBack(P(t, T.guaranteed - .1, T.guaranteed + .3)), '✓');
  pill(b2[0], b2[1] + O(64, 132), 'CHEAPER TUITION', NEP, fade * P(t, T.cheaper - .1, T.cheaper + .2), E.oBack(P(t, T.cheaper - .1, T.cheaper + .3)), '¥');
}
function NEP2() { return '#ffd08a'; }
function flowDots(t, d, arr, t0, reveal, a, dens, col = 'amber') {
  if (a <= 0 || t < t0) return; const n = Math.floor(arr.length * clamp(dens) * P(t, t0, t0 + 1.2));
  for (let i = 0; i < n; i++) { const q = arr[i], u = (q.ph + (t - t0) * q.sp) % 1; if (u > reveal) continue;
    const [x, y] = arcScreen(d, u), [nx, ny] = arcNormal(d, u), o = q.off * 4, fa = a * Math.min(1, u * 8, (1 - u) * 8);
    glow(x + nx * o, y + ny * o, 14, col, fa * .7); dot(x + nx * o, y + ny * o, 2.6 + q.k * 1.2, col === 'amber' ? '#ffe2b0' : '#d8f6ff', fa); }
}

// ------------------------------------------------------------------------------------- CH 05 · the exit
function doorScene(t) {
  const a = vis(t, T.entrance - .35, T.after + .2, .35, .45); if (a <= 0) return;
  const [cx, cy] = S(127.88, 26.47), dw = O(110, 120), dh = O(190, 205), open = E.io(P(t, T.door - .1, T.door + .7));
  ctx.save(); ctx.globalAlpha = a; ctx.translate(cx, cy + dh / 2);
  ctx.fillStyle = 'rgba(2,8,16,.75)'; ctx.fillRect(-dw / 2 - 20, -dh - 20, dw + 40, dh + 20);
  if (open > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createLinearGradient(0, 0, 0, 120); g.addColorStop(0, `rgba(255,214,150,${.5 * open})`); g.addColorStop(1, 'rgba(255,214,150,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(-dw / 2, 0); ctx.lineTo(dw / 2, 0); ctx.lineTo(dw * 1.2, 120); ctx.lineTo(-dw * 1.2, 120); ctx.closePath(); ctx.fill(); ctx.restore();
    ctx.fillStyle = `rgba(255,226,175,${.95 * open})`; ctx.fillRect(-dw / 2, -dh, dw, dh); glow(0, -dh / 2, dh, 'amber', .6 * open); }
  const pw = dw * Math.cos(open * Math.PI * .45), sk = 14 * Math.sin(open * Math.PI * .45);
  ctx.fillStyle = '#16314d'; ctx.strokeStyle = JPN; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-dw / 2, -dh); ctx.lineTo(-dw / 2 + pw, -dh - sk); ctx.lineTo(-dw / 2 + pw, sk); ctx.lineTo(-dw / 2, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = NEP; ctx.beginPath(); ctx.arc(-dw / 2 + pw * .82, -dh * .48, 5, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#eef7ff'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-dw / 2 - 6, 0); ctx.lineTo(-dw / 2 - 6, -dh - 6); ctx.lineTo(dw / 2 + 6, -dh - 6); ctx.lineTo(dw / 2 + 6, 0); ctx.stroke();
  ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 14; const lp = P(t, T.entrance - .1, T.entrance + .3);
  ctx.globalAlpha = a * lp; txt('ENTRANCE', 0, -dh - 34, font(900, 36), '#fff', 'center', 10); txt('NOT THE DESTINATION', 0, 50, font(700, 15, F.m), NEP, 'center', 4);
  ctx.restore();
}
function twoYears(t) {
  const a = vis(t, T.after - .3, T.migrate + .2, .35, .45); if (a <= 0) return;
  const [cx, cy] = S(127.88, 26.47), R = O(300, 320), p = E.io2(P(t, T.after, T.school + .35));
  ctx.save(); ctx.globalAlpha = a; ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke();
  if (p > 0) { ctx.strokeStyle = NEP; ctx.beginPath(); ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + TAU * p); ctx.stroke(); const q = -Math.PI / 2 + TAU * p; glow(cx + Math.cos(q) * R, cy + Math.sin(q) * R, 40, 'amber', .9); }
  for (let m = 0; m < 24; m++) { const q = -Math.PI / 2 + m / 24 * TAU, on = m / 24 <= p + 1e-6, L = m % 12 === 0 ? 30 : 16; ctx.strokeStyle = on ? NEP : 'rgba(255,255,255,.25)'; ctx.lineWidth = m % 12 === 0 ? 4 : 2;
    ctx.beginPath(); ctx.moveTo(cx + Math.cos(q) * (R + 14), cy + Math.sin(q) * (R + 14)); ctx.lineTo(cx + Math.cos(q) * (R + 14 + L), cy + Math.sin(q) * (R + 14 + L)); ctx.stroke(); }
  ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 12;
  txt('START', cx, cy - R - 54, font(700, 15, F.m), 'rgba(255,255,255,.75)', 'center', 4);
  if (p > .48) txt('YEAR 1', cx, cy + R + 70, font(800, 18, F.m), NEP, 'center', 4);
  ctx.restore();
  // counter panel
  const x = O(1300, 90), y = O(260, 300), w = O(500, 900), h = O(250, 230);
  ctx.save(); ctx.globalAlpha = a; panel(x, y, w, h, 1, NEP, 'LANGUAGE SCHOOL');
  const mo = Math.max(1, Math.min(24, Math.ceil(p * 24))); txt('MONTH', x + 40, y + 110, font(700, 16, F.m), 'rgba(255,220,170,.8)', 'left', 4);
  txt(String(mo).padStart(2, '0') + ' / 24', x + 40, y + 180, font(900, 72), '#fff', 'left', 2);
  const dn = P(t, T.school + .2, T.school + .5); if (dn > 0) { ctx.globalAlpha = a * dn; txt('2 YEARS ✓', x + w - 40, y + 180, font(900, 40), NEP, 'right', 3); }
  ctx.restore();
}
function migration(t) {
  if (t < T.migrate - .3) return;
  const a = 1 - P(t, DUR - .5, DUR), lp = E.io2(P(t, T.migrate - .1, T.migrate + .8)), fin = P(t, T.sotoday - .2, T.quirk + .6);
  const cities = [[CITY.tokyo, 'TOKYO', '東京', 34], [CITY.osaka, 'OSAKA', null, 20], [CITY.nagoya, 'NAGOYA', null, 20], [CITY.fukuoka, 'FUKUOKA', null, 20]];
  ROUTES.forEach((d, i) => { const main = i === 0; arcStroke(d, 0, lp, main ? 'rgba(255,179,64,.28)' : 'rgba(255,179,64,.14)', main ? 12 : 6, a * (main ? 1 : 1 - fin)); arcStroke(d, 0, lp, NEP, main ? 3.5 : 1.6, a * (main ? 1 : 1 - fin) * (main ? 1 : .8)); });
  FLOW2.forEach((q, i) => { if (q.route && fin >= 1) return; const d = ROUTES[q.route], t0 = T.migrate + .2, u = (q.ph + (t - t0) * q.sp) % 1; if (t < t0 || u > lp) return;
    const [x, y] = arcScreen(d, u), fa = a * Math.min(1, u * 8, (1 - u) * 8) * P(t, t0, t0 + .8) * (q.route ? 1 - fin : 1); glow(x, y, 12, 'amber', fa * .6); dot(x, y, 2.4 + q.k, '#ffe2b0', fa); });
  const ca = a * (1 - P(t, T.sotoday - .3, T.sotoday + .4));
  cities.forEach(([c, n, j, s], i) => { const p = P(t, T.migrate + .3 + i * .12, T.migrate + .6 + i * .12); cityMark(c, ca * p, n, j, 1, i === 0 ? '#fff' : 'rgba(230,242,255,.85)', s); });
}
function payPanel(t) {
  const a = vis(t, T.higher - .3, T.sotoday + .1, .35, .4); if (a <= 0) return;
  const x = O(110, 90), y = O(236, 290), w = O(470, 900), h = O(380, 330);
  ctx.save(); ctx.globalAlpha = a; panel(x, y, w, h, 1, NEP, 'PART-TIME WORK');
  const g = E.o3(P(t, T.higher - .05, T.higher + .6)), base = y + h - O(56, 56), bw = O(110, 150);
  [['OKINAWA', .38, JPN, x + w * .3], ['TOKYO', .95, NEP, x + w * .7]].forEach(([n, v, c, bx]) => { const bh = (h - O(190, 170)) * v * g;
    ctx.fillStyle = c; ctx.globalAlpha = a * .9; ctx.fillRect(bx - bw / 2, base - bh, bw, bh); ctx.globalAlpha = a; txt(n, bx, base + 30, font(800, 18, F.m), '#dbe8f5', 'center', 3); });
  const ap = P(t, T.higher + .3, T.higher + .7); if (ap > 0) { const ax = x + w * .7, ay = base - (h - O(190, 170)) * .95 * g; ctx.globalAlpha = a * ap; ctx.fillStyle = NEP; ctx.beginPath(); ctx.moveTo(ax, ay - 34); ctx.lineTo(ax - 18, ay - 10); ctx.lineTo(ax + 18, ay - 10); ctx.fill(); txt('HIGHER PAY', ax, ay - 46, font(900, 20), NEP, 'center', 2); }
  ctx.globalAlpha = a * .7; txt('HOURLY PAY (RELATIVE)', x + w / 2, y + 64, font(600, 13, F.m), 'rgba(220,240,255,.7)', 'center', 3);
  ctx.restore();
}

// ------------------------------------------------------------------------------------- CH 06 · the revolving door
function finale(t) {
  if (t < T.sotoday - .3) return; const a = 1 - P(t, DUR - .4, DUR), ea = 1 - P(t, T.end - .45, T.end + .05);
  // the whole system: pipeline in, Tokyo out
  const pa = a * P(t, T.sotoday, T.sotoday + .8);
  arcStroke(PIPE, 0, 1, 'rgba(255,179,64,.12)', 22, pa); arcStroke(PIPE, 0, 1, NEP, 3.5, pa); flowDots(t, PIPE, FLOW, T.sotoday, 1, pa, .8);
  const [ox, oy] = SC(CITY.naha), [tx, ty] = SC(CITY.tokyo), [kx, ky] = SC(CITY.ktm);
  const qa = a * vis(t, T.quirk - .1, T.tropical + 1.2, .3, .5);
  pill(tx + O(10, -40), ty - O(56, 60), '10–20%', RED, qa, E.oBack(P(t, T.quirk, T.quirk + .3)));
  pill(ox, oy + O(70, 66), '≈90%', OKC, qa, E.oBack(P(t, T.quirk + .15, T.quirk + .45)));
  stamp2(t, T.quirk + .1, T.tropical + .9, W / 2, O(250, 470), 'BUREAUCRATIC QUIRK', RED, -.06, O(56, 46));
  const tp = vis(t, T.tropical - .1, T.revolving - .1, .4, .4); if (tp > 0) { glow(ox, oy, 140, 'amber', .55 * tp); callout(ox, oy, O(120, -150), O(150, 170), 'TROPICAL ISLAND', 'OKINAWA · JAPAN', tp, '#fff', O(1, 0)); }
  const rp = E.oBack(P(t, T.revolving - .15, T.revolving + .45)), rd = O(54, 44) * (1 + .25 * P(t, T.gateway, T.gateway + .4));
  if (rp > 0) { const ga = a * (.35 + .65 * ea); glow(ox, oy, rd * 3, 'amber', .5 * ga); ctx.save(); ctx.globalAlpha = ga; ctx.translate(ox, oy); ctx.scale(rp, rp); ctx.fillStyle = 'rgba(4,12,24,.85)'; ctx.beginPath(); ctx.arc(0, 0, rd, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(0, 0, rd, -Math.PI * .8, -Math.PI * .2); ctx.stroke(); ctx.beginPath(); ctx.arc(0, 0, rd, Math.PI * .2, Math.PI * .8); ctx.stroke();
    const q = t * 2.6; ctx.strokeStyle = NEP; ctx.lineWidth = 4; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(q + k * Math.PI / 2) * rd * .9, Math.sin(q + k * Math.PI / 2) * rd * .9); ctx.stroke(); }
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(0, 0, 5, 0, TAU); ctx.fill(); ctx.restore();
    ctx.save(); ctx.globalAlpha = a * ea * P(t, T.revolving, T.revolving + .3); ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 14; txt('REVOLVING DOOR', ox, oy - rd - O(26, 24), font(900, O(28, 26)), '#fff', 'center', 6);
    ctx.globalAlpha = a * ea * P(t, T.gateway, T.gateway + .3); txt('GATEWAY FOR NEPALESE YOUTH', ox, oy + rd + O(44, 40), font(800, O(18, 17), F.m), NEP, 'center', 4); ctx.restore(); }
  cityMark(CITY.tokyo, a * ea * P(t, T.sotoday, T.sotoday + .5), 'TOKYO', null, O(1, -1), '#fff', 22);
  cityMark(CITY.ktm, a * ea * P(t, T.sotoday, T.sotoday + .5), 'NEPAL', null, O(-1, 1), NEP, 22);
  ring(kx, ky, t, T.nepYouth, 1.2, 10, 120, NEP, 3, a); ring(kx, ky, t, T.nepYouth + .25, 1.2, 10, 120, NEP, 2, a);
}
function endCard(t) {
  const a = P(t, T.end, T.end + .7); if (a <= 0) return;
  scrT(); ctx.fillStyle = `rgba(2,6,14,${.74 * a})`; ctx.fillRect(-20, -20, W + 40, H + 40);
  const y = H * O(.47, .43), e = E.o3(P(t, T.end + .1, T.end + 1.0));
  ctx.save(); ctx.globalAlpha = a; ctx.shadowColor = 'rgba(0,0,0,.8)'; ctx.shadowBlur = 20;
  txt('NEPAL  →  OKINAWA  →  TOKYO', W / 2, y - O(118, 190), font(700, 20, F.m), NEP, 'center', 6);
  if (V) { txt('THE REVOLVING', W / 2, y - 60 + 20 * (1 - e), font(900, 92), '#fff', 'center', 6); txt('DOOR', W / 2, y + 44 + 20 * (1 - e), font(900, 92), '#fff', 'center', 10); }
  else txt('THE REVOLVING DOOR', W / 2, y + 20 * (1 - e), font(900, 104), '#fff', 'center', 10);
  ctx.fillStyle = NEP; const lw = O(560, 460) * e; ctx.fillRect(W / 2 - lw / 2, y + O(40, 92), lw, 3);
  ctx.globalAlpha = a * P(t, T.end + .5, T.end + 1.1); txt(V ? 'How a visa quirk turned Okinawa' : 'How a visa quirk turned Okinawa into a gateway', W / 2, y + O(96, 152), font(500, O(30, 32)), 'rgba(230,242,255,.85)', 'center');
  if (V) txt('into a gateway', W / 2, y + 196, font(500, 32), 'rgba(230,242,255,.85)', 'center');
  ctx.restore();
}

// ------------------------------------------------------------------------------------- the hero: STUDENT #0001
function hero(t) {
  if (t < T.young - .1) return;
  let x, y, a = 1, sub = 'TYPICAL PROFILE', side = 0;
  const nh = RES.find(q => q.hero);
  if (t < T.packed + .3) { [x, y] = SW(nh.x, nh.y); a = P(t, T.young - .1, T.young + .3); }
  else if (t < T.rew0) { const g = schoolGeo(t), [ax, ay] = SW(nh.x, nh.y), [bx, by] = g.win(HERO_WIN), k = E.io2(P(t, T.packed + .3, T.packed + 1.1)); x = lerp(ax, bx + 10, k); y = lerp(ay, by + 11, k); sub = 'LANGUAGE SCHOOL'; }
  else if (t < T.rew1) { [x, y] = arcScreen(REW, rewU()); sub = 'REWINDING'; }
  else if (t < T.biz) { [x, y] = SC(HERO_NP); sub = 'KATHMANDU'; a = 1 - P(t, T.biz - .5, T.biz - .1); }
  else if (t < T.heroDep) { [x, y] = SC(HERO_NP); sub = 'VISA APPROVED'; a = P(t, T.nepalese + 1.0, T.nepalese + 1.4); }
  else if (t < T.heroArr) { const u = E.io2(P(t, T.heroDep, T.heroArr)); [x, y] = arcScreen(PIPE, u); sub = 'EN ROUTE'; }
  else if (t < T.heroMig0) { [x, y] = SC([127.74, 26.3]); sub = t < T.after ? 'ARRIVED' : 'YEAR ' + (P(t, T.after, T.school + .35) < .5 ? 1 : 2); side = O(-1, 1); }
  else if (t < T.heroMig1) { [x, y] = arcScreen(ROUTES[0], E.io2(P(t, T.heroMig0, T.heroMig1))); sub = '→ TOKYO'; side = O(1, -1); }
  else { [x, y] = SC(CITY.tokyo); sub = 'PART-TIME WORK'; side = O(1, -1); a = 1 - P(t, T.sotoday + .2, T.sotoday + .8); }
  if (a <= 0) return;
  if (!side) side = x > W * .62 ? -1 : 1;
  glow(x, y, 26, 'amber', a); dot(x, y, 6, '#fff3dc', a);
  tracker(x, y, O(30, 32), t, 'STUDENT #0001', sub, a, NEP, side);
}

// ------------------------------------------------------------------------------------- film
function film(t) {
  CAM = camAt(t);
  drawMap(t);
  scrT();
  residents(t); bases(t); okiTitle(t); school(t);
  rewind(t); nepalScene(t);
  tokyoScene(t); okiOffice(t);
  pipeline(t); doorScene(t); twoYears(t); migration(t); finale(t);
  hero(t);
  statBlock(t); notCards(t); profile(t); bizPanel(t); barsPanel(t); payPanel(t);
  endCard(t);
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
}

// ------------------------------------------------------------------------------------- sound events (read by score.py)
const EVT = {}; const ev = (k, ...v) => (EVT[k] = EVT[k] || []).push(v.length === 1 ? +v[0].toFixed(3) : v.map(x => +x.toFixed(3)));
ev('sprinkle', 1.15, 3.4, 40); ev('blip', T.okiName); ev('pop', T.american); ev('pop', T.american + .2); ev('glitch', T.stat);
ev('hit', T.one); ev('hit', T.five); ev('sprinkle', T.one + .1, T.one + .9, 13); ev('swell', T.nepal1); ev('chime', T.nepal1);
ev('card', T.notMil - .15); ev('strike', T.notMil + .45); ev('card', T.notCorp - .15); ev('strike', T.notCorp + .45);
[T.young, T.single, T.students].forEach(x => ev('check', x)); ev('card', T.young - .4); ev('rise', T.packed - .4); ev('sprinkle', T.packed + .45, T.packed + 1.8, 20);
ev('tape', T.rew0, T.rew1); ev('whooshBig', T.rew1 - .4); ev('chime', T.nepal2); ev('sprinkle', T.acad, T.acad + 1.1, 16); ev('pulses', T.compete, T.forStud + .8);
ev('card', T.biz - .2); [T.biz, T.biz + .28, T.relies, T.securing].forEach(x => ev('pop', x)); ev('swell', T.securing); ev('card', T.notor - .2); ev('ticks', T.notor, T.notor + .7); ev('thud', T.diff);
ev('whooshBig', T.fly2 + .8); ev('blip', T.tokyo); ev('thud', T.strict); ev('card', T.approving1 - .2);
for (let k = 0; k < 12; k++) ev(k % 7 === 3 ? 'approve' : 'deny', T.approving1 - .25 + k * .24 + .55);
ev('hit', T.ten); ev('hit', T.twenty); ev('whoosh', T.down); ev('blip', T.oki2); ev('pop', T.office);
for (let k = 0; k < 13; k++) ev(k % 10 !== 6 ? 'approve' : 'deny', T.approving2 - .5 + k * .2 + .55);
ev('ticks', T.nearly - .1, T.ninety + .4); ev('stamp', T.ninety + .25);
ev('scan', T.spot - .1); ev('whooshBig', T.nepalese + .8); ev('sprinkle', T.nepalese, T.nepalese + .6, 16); ev('sprinkle', T.okiAcad, T.okiAcad + .5, 4); ev('zips', T.partnered - .1, T.partnered + .8);
ev('pipe', T.pipeline - .35, T.entrance); ev('swell', T.pipeline); ev('chime', T.guaranteed); ev('chime', T.cheaper);
ev('whooshBig', T.entrance - 1.6); ev('door', T.door); ev('ticks', T.after, T.school + .35); ev('chime', T.school + .3);
ev('whooshBig', T.migrate + .7); ev('zips', T.migrate, T.migrate + .8); ev('blip', T.tokyo2); ev('hit', T.higher); ev('chime', T.parttime);
ev('whooshBig', T.quirk); ev('stamp', T.quirk + .1); ev('swell', T.tropical); ev('whoosh', T.revolving); ev('chime', T.gateway); ev('boom', T.youth); ev('title', T.end);

window.FILM = {
  title: 'THE REVOLVING DOOR', tag: 'THE REVOLVING DOOR',
  hotLines: [3, 5, 7, 8, 15, 17, 21, 26],
  init: initFilm,
  scenes: [{ start: 0, draw: film }],
  xfades: [],
  chapters: [[0, '01', 'WHO LIVES HERE'], [T.rew0, '02', 'WHERE IT STARTS'], [T.fly2, '03', 'THE LOOPHOLE'], [T.spot - .3, '04', 'THE PIPELINE'], [LS(19) - .3, '05', 'THE EXIT'], [T.sotoday - .3, '06', 'THE REVOLVING DOOR']],
  hits: [[T.stat, 6, .3], [T.ninety + .25, 7, .35], [T.quirk + .1, 6, .3], [T.youth, 11, .5]],
  flashes: [[T.stat, .22], [T.youth, .3]],
  events: EVT,
};
