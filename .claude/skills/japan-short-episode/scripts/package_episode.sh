#!/usr/bin/env bash
# Assemble a finished episode into the repo layout used by every episode folder.
# usage: package_episode.sh <workdir> <slug> [repo_root=.]     e.g. package_episode.sh $W elevator-girls
# Copies source + audio always; copies videos only if deliver.sh outputs exist in <workdir>/out (vo_*.mp4, novo_*.mp4).
set -euo pipefail
W="$1"; SLUG="$2"; REPO="${3:-.}"; HERE="$(cd "$(dirname "$0")" && pwd)"; D="$REPO/$SLUG"
mkdir -p "$D/video" "$D/audio" "$D/tools"; rm -rf "$D/film"; cp -r "$W/film" "$D/film"
cp "$W/script.txt" "$W/timeline.json" "$W/events.json" "$D/"; cp "$HERE"/{narrate.py,stills.js,contact_sheet.py,render.sh,renderseg.js,soundkit.py,deliver.sh,setup.sh} "$D/tools/"
cp "$W/score.py" "$D/score.py"
printf '%s\n' '# render / build outputs' 'stills/' 'out/' 'vo/' 'master_*.mp4' '*.parts.*/' '/mix.wav' '/mix_novo.wav' '/vo_full.wav' '/timeline.js' '__pycache__/' > "$D/.gitignore"
ffmpeg -loglevel error -y -i "$W/vo_full.wav" "$D/audio/narration.wav"
for m in mix mix_novo; do [ -f "$W/$m.wav" ] && ffmpeg -loglevel error -y -i "$W/$m.wav" -c:a flac -sample_fmt s16 "$D/audio/$m.flac"; done
cpv() { [ -f "$1" ] && cp "$1" "$2" && echo "  $2"; true; }
cpv "$W/out/vo_hq.mp4" "$D/video/${SLUG}_9x16.mp4"; cpv "$W/out/vo_chat.mp4" "$D/video/${SLUG}_9x16_small.mp4"
cpv "$W/out/novo_hq.mp4" "$D/video/${SLUG}_9x16_music.mp4"; cpv "$W/out/novo_chat.mp4" "$D/video/${SLUG}_9x16_music_small.mp4"
[ -f "$D/README.md" ] || echo "NOTE: write $D/README.md (see references/readme-template.md) and add a line to the root README."
echo "packaged $D"
