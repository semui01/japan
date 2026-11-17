#!/usr/bin/env bash
# Install Python deps and fetch Kokoro TTS models (from GitHub releases; Hugging Face is often blocked in sandboxes).
set -euo pipefail
MODELS="${1:-$HOME/.cache/kokoro}"
pip install -q kokoro-onnx soundfile scipy numpy pillow 2>&1 | grep -v -i warning || true
mkdir -p "$MODELS"
BASE=https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0
for f in kokoro-v1.0.onnx voices-v1.0.bin; do
  [ -s "$MODELS/$f" ] || curl -sSL --fail -o "$MODELS/$f" "$BASE/$f"
done
ls -la "$MODELS"
command -v ffmpeg >/dev/null || echo "WARNING: ffmpeg not found"
node -e "try{require('playwright')}catch(e){require('/opt/node22/lib/node_modules/playwright')}; console.log('playwright ok')" 2>/dev/null || echo "WARNING: playwright not found (npm i -g playwright)"
