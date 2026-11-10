"""Tiny stand-in for the `soundfile` package (not installed; package installs are off).
Implements just what soundkit.py uses: read(path) -> (float data, sr) and write(path, data, sr, subtype)."""
import numpy as np
from scipy.io import wavfile


def read(path, dtype='float64', always_2d=False):
    sr, x = wavfile.read(path)
    if x.dtype == np.int16: x = x.astype(np.float64) / 32768.0
    elif x.dtype == np.int32: x = x.astype(np.float64) / 2147483648.0
    elif x.dtype == np.uint8: x = (x.astype(np.float64) - 128.0) / 128.0
    else: x = x.astype(np.float64)
    if always_2d and x.ndim == 1: x = x[:, None]
    return x, sr


def write(path, data, samplerate, subtype=None):
    data = np.asarray(data)
    if subtype in ('FLOAT', 'DOUBLE'): wavfile.write(path, samplerate, data.astype(np.float32))
    else: wavfile.write(path, samplerate, (np.clip(data, -1, 1) * 32767).astype(np.int16))
