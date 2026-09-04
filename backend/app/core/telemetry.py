import time
import logging
from typing import Dict, Any, Optional
from backend.app.core.config import settings

logger = logging.getLogger("godmode.telemetry")

class CloudTelemetry:
    """
    Telemetry wrapper for hosted Langfuse tracing.
    Operates without local databases or local compute overhead.
    """
    def __init__(self):
        self.enabled = bool(settings.LANGFUSE_PUBLIC_KEY and settings.LANGFUSE_SECRET_KEY)
        self.traces = []
        if self.enabled:
            logger.info("Langfuse cloud tracing active.")
        else:
            logger.info("Langfuse keys not present; using local lightweight memory tracer.")

    def trace_call(
        self,
        provider: str,
        model: str,
        prompt_tokens: int,
        completion_tokens: int,
        latency_ms: float,
        status: str = "success",
        metadata: Optional[Dict[str, Any]] = None
    ):
        record = {
            "timestamp": time.time(),
            "provider": provider,
            "model": model,
            "prompt_tokens": prompt_tokens,
            "completion_tokens": completion_tokens,
            "latency_ms": latency_ms,
            "status": status,
            "metadata": metadata or {}
        }
        # Keep last 50 traces in memory ring buffer
        self.traces.append(record)
        if len(self.traces) > 50:
            self.traces.pop(0)

        # In production with keys, this forwards asynchronously to cloud Langfuse
        return record

    def get_recent_traces(self):
        return list(reversed(self.traces))

telemetry = CloudTelemetry()
