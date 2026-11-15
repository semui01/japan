#!/usr/bin/env bash
# Mux a silent render with a mix and encode delivery copies sized to platform limits.
# usage: deliver.sh <video.mp4> <mix.wav> <outname> [chat|hq|both]
#   chat -> <outname>_chat.mp4  ≈27 MiB (fits a 30 MiB chat upload), light denoise so grain doesn't eat bitrate
#   hq   -> <outname>_hq.mp4    ≈86 MiB (fits GitHub's 100 MB per-file limit)
# Bitrates are computed from the duration (capped at 8 / 16 Mbps), so any length works; long films get less per second. Audio is loudness-normalized to −14 LUFS.
set -euo pipefail
VID="$1"; MIX="$2"; NAME="$3"; MODE="${4:-both}"
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$VID")
enc() { # target_MiB audio_kbps suffix vf cap_kbps (short films hit the cap, not the size budget)
  local MIB=$1 AK=$2 SUF=$3 VF=$4 CAP=$5
  local VK=$(python3 -c "print(min($CAP, int($MIB*8*1048576/$DUR/1000 - $AK - 60)))")
  local LOG=$(mktemp -u ./.pass_XXXX)
  ffmpeg -loglevel error -y -i "$VID" $VF -c:v libx264 -preset slow -b:v ${VK}k -pass 1 -passlogfile $LOG -an -f mp4 /dev/null
  ffmpeg -loglevel error -y -i "$VID" -i "$MIX" -map 0:v -map 1:a $VF -c:v libx264 -preset slow -b:v ${VK}k \
    -maxrate $((VK*3/2))k -bufsize $((VK*2))k -pass 2 -passlogfile $LOG -pix_fmt yuv420p \
    -af "loudnorm=I=-14:TP=-1.0:LRA=11" -c:a aac -b:a ${AK}k -ar 48000 -t "$DUR" -movflags +faststart "${NAME}_${SUF}.mp4"
  rm -f $LOG*
  echo "${NAME}_${SUF}.mp4 $(du -h "${NAME}_${SUF}.mp4" | cut -f1) (video ${VK}k)"
}
[ "$MODE" = hq ] || enc 27 160 chat "-vf hqdn3d=1.5:1.5:4:4" 8000
[ "$MODE" = chat ] || enc 86 256 hq "" 16000
