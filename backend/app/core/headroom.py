"""
Headroom Context Compression Layer (Python)
Provides CCR (Compress-Cache-Retrieve) token compression for agent prompts.
"""
from typing import Dict, Any, Optional
import hashlib

_CACHE: Dict[str, str] = {}

def compress_text(text: str) -> Dict[str, Any]:
    """Compress repetitive logs and text for LLM prompts."""
    original_len = len(text)
    token_est_orig = max(1, original_len // 4)
    cache_key = "hr_" + hashlib.md5(text.encode("utf-8")).hexdigest()[:12]
    _CACHE[cache_key] = text

    if original_len < 200:
        return {
            "text": text,
            "original_tokens": token_est_orig,
            "compressed_tokens": token_est_orig,
            "ratio": 1.0,
            "cache_key": cache_key
        }

    lines = text.splitlines()
    seen = set()
    deduped = []
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        if stripped in seen and len(stripped) > 20:
            continue
        seen.add(stripped)
        deduped.append(line)

    compressed = "\n".join(deduped)
    token_est_comp = max(1, len(compressed) // 4)

    return {
        "text": compressed,
        "original_tokens": token_est_orig,
        "compressed_tokens": token_est_comp,
        "ratio": round(token_est_comp / token_est_orig, 2),
        "cache_key": cache_key
    }

def retrieve_text(cache_key: str) -> Optional[str]:
    """Retrieve original uncompressed text."""
    return _CACHE.get(cache_key)
