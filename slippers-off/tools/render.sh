#!/usr/bin/env bash
# Render a whole film in parallel workers, concat, and verify the frame count.
# usage: render.sh <film/index.html> <duration_s> <out.mp4> [workers=3] [fps=30]   (env VERT=1 for 9:16)
# Run this whole script with the Bash tool's run_in_background rather than backgrounding pieces of it:
# each worker is started and waited on inside this one shell, so they share its working directory.
set -euo pipefail
HTML="$1"; DUR="$2"; OUT="$3"; WK="${4:-3}"; FPS="${5:-30}"
HERE="$(cd "$(dirname "$0")" && pwd)"
TOTAL=$(python3 -c "print(round($DUR*$FPS))")
TMP="$(mktemp -d "${OUT%.mp4}.parts.XXXX")"
pids=()
for ((i=0; i<WK; i++)); do
  A=$(( TOTAL*i/WK )); B=$(( TOTAL*(i+1)/WK ))
  node "$HERE/renderseg.js" "$HTML" $A $B "$TMP/$i.mp4" $FPS > "$TMP/$i.log" 2>&1 &
  pids+=($!)
done
fail=0; for p in "${pids[@]}"; do wait $p || fail=1; done
[ $fail = 0 ] || { echo "a worker failed:"; tail -n 5 "$TMP"/*.log; exit 1; }
: > "$TMP/list.txt"; for ((i=0; i<WK; i++)); do echo "file '$i.mp4'" >> "$TMP/list.txt"; done
ffmpeg -loglevel error -y -f concat -safe 0 -i "$TMP/list.txt" -c copy "$OUT"
GOT=$(ffprobe -v error -count_packets -show_entries stream=nb_read_packets -of csv=p=0 "$OUT")
echo "frames: $GOT / $TOTAL"; [ "$GOT" = "$TOTAL" ] || { echo "FRAME COUNT MISMATCH"; exit 1; }
rm -rf "$TMP"
