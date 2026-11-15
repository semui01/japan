#!/usr/bin/env bash
# Scaffold a work directory for a new episode.  usage: new_episode.sh <workdir>
set -euo pipefail
W="$1"; HERE="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$W/film"; cp "$HERE"/../assets/film/* "$W/film/"; cp "$HERE/../assets/score.template.py" "$W/score.py"
[ -f "$W/script.txt" ] || printf '%s\n' "*Last* *time:* replace this with the narration, one caption line per line." "Blank lines separate beats." > "$W/script.txt"
echo "scaffolded $W — next: write script.txt, then narrate.py"
