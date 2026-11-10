"""Minimal ctypes binding to libflite: synthesize a sentence and return samples + per-word timings.

Why not ffmpeg's flite filter: it gives no word timings and no speed control. Here we get
duration_stretch (natural tempo change) and word start/end times for word-synced captions.
"""
import ctypes, ctypes.util
import numpy as np

_L = '/usr/lib/x86_64-linux-gnu/'
flite = ctypes.CDLL(_L + 'libflite.so.1', mode=ctypes.RTLD_GLOBAL)
ctypes.CDLL(_L + 'libflite_usenglish.so.1', mode=ctypes.RTLD_GLOBAL)
ctypes.CDLL(_L + 'libflite_cmulex.so.1', mode=ctypes.RTLD_GLOBAL)


class Wave(ctypes.Structure):
    _fields_ = [('type', ctypes.c_char_p), ('sample_rate', ctypes.c_int), ('num_samples', ctypes.c_int),
                ('num_channels', ctypes.c_int), ('samples', ctypes.POINTER(ctypes.c_short))]


class Voice(ctypes.Structure):
    _fields_ = [('name', ctypes.c_char_p), ('features', ctypes.c_void_p), ('ffunctions', ctypes.c_void_p)]


vp = ctypes.c_void_p
flite.flite_init.restype = ctypes.c_int
flite.flite_synth_text.restype = vp; flite.flite_synth_text.argtypes = [ctypes.c_char_p, vp]
flite.utt_wave.restype = ctypes.POINTER(Wave); flite.utt_wave.argtypes = [vp]
flite.utt_relation.restype = vp; flite.utt_relation.argtypes = [vp, ctypes.c_char_p]
flite.relation_head.restype = vp; flite.relation_head.argtypes = [vp]
flite.item_next.restype = vp; flite.item_next.argtypes = [vp]
flite.ffeature_float.restype = ctypes.c_float; flite.ffeature_float.argtypes = [vp, ctypes.c_char_p]
flite.ffeature_string.restype = ctypes.c_char_p; flite.ffeature_string.argtypes = [vp, ctypes.c_char_p]
flite.flite_feat_set_float.restype = None; flite.flite_feat_set_float.argtypes = [vp, ctypes.c_char_p, ctypes.c_float]
flite.delete_utterance.restype = None; flite.delete_utterance.argtypes = [vp]
flite.flite_init()

_voices = {}


def voice(name='rms'):
    if name not in _voices:
        lib = ctypes.CDLL(_L + f'libflite_cmu_us_{name}.so.1', mode=ctypes.RTLD_GLOBAL)
        reg = getattr(lib, f'register_cmu_us_{name}'); reg.restype = ctypes.POINTER(Voice); reg.argtypes = [ctypes.c_char_p]
        _voices[name] = reg(None)
    return _voices[name]


def synth(text, name='rms', stretch=1.0, wave=True):
    """-> (float32 samples, sample_rate, [(word, start_s, end_s), ...])"""
    v = voice(name)
    flite.flite_feat_set_float(v.contents.features, b'duration_stretch', float(stretch))
    u = flite.flite_synth_text(text.encode('utf-8'), ctypes.cast(v, vp))
    words = []
    it = flite.relation_head(flite.utt_relation(u, b'Word'))
    while it:
        w = flite.ffeature_string(it, b'name').decode('utf-8', 'replace')
        s = flite.ffeature_float(it, b'R:SylStructure.daughter1.daughter1.R:Segment.p.end')
        e = flite.ffeature_float(it, b'R:SylStructure.daughtern.daughtern.R:Segment.end')
        words.append((w, float(s), float(e)))
        it = flite.item_next(it)
    x, sr = None, 16000
    if wave:
        wv = flite.utt_wave(u).contents; sr = wv.sample_rate
        x = np.ctypeslib.as_array(wv.samples, shape=(wv.num_samples * wv.num_channels,)).astype(np.float32) / 32768.0
    flite.delete_utterance(u)
    return x, sr, words


if __name__ == '__main__':
    import sys
    x, sr, ws = synth(sys.argv[1] if len(sys.argv) > 1 else 'Their entire business model relies on securing notoriously difficult Japanese student visas for their clients.')
    print(sr, len(x) / sr)
    for w in ws: print(f'{w[1]:6.3f} {w[2]:6.3f} {w[0]}')
