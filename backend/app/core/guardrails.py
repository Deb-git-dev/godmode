import re
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field, field_validator

class ChatMessage(BaseModel):
    role: str = Field(..., description="Role of the author ('user', 'assistant', 'system')")
    content: str = Field(..., description="Message text content")

    @field_validator("role")
    def validate_role(cls, v: str) -> str:
        valid_roles = {"user", "assistant", "system", "tool"}
        if v not in valid_roles:
            raise ValueError(f"Role must be one of {valid_roles}")
        return v

class ChatCompletionRequest(BaseModel):
    messages: List[ChatMessage]
    provider: Optional[str] = Field("claude", description="Preferred provider: 'claude', 'openrouter', 'nvidia_nim', 'gemini'")
    model: Optional[str] = Field(None, description="Model identifier override")
    temperature: float = Field(0.7, ge=0.0, le=2.0)
    max_tokens: int = Field(2048, ge=1, le=8192)
    ground_in_facts: bool = Field(True, description="Strictly ground assistant in verified memory/journal facts")

class ChatCompletionResponse(BaseModel):
    provider: str
    model: str
    content: str
    latency_ms: float
    grounded: bool
    provenance_verified: bool = True
    usage: Dict[str, Any] = Field(default_factory=dict)

# Regex PII Sanitizer (Lightweight, CPU-only, zero GPU)
PII_PATTERNS = {
    "email": re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b"),
    "credit_card": re.compile(r"\b(?:\d[ -]*?){13,16}\b"),
    "ssn": re.compile(r"\b\d{3}-\d{2}-\d{4}\b"),
    "phone": re.compile(r"\b(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b")
}

def sanitize_pii(text: str) -> str:
    """Scrub obvious PII tokens to prevent accidental leakage."""
    sanitized = text
    for name, pattern in PII_PATTERNS.items():
        sanitized = pattern.sub(f"[REDACTED_{name.upper()}]", sanitized)
    return sanitized

# Forbidden Local Inference Guard
BANNED_LOCAL_PACKAGES = [
    "vllm", "ollama", "llama_cpp", "torch.cuda", "diffusers", "unsloth", "peft", "axolotl"
]

def assert_zero_local_gpu_compliance():
    """Verify that no local weights or local serving frameworks are loaded into the process."""
    import sys
    loaded_modules = set(sys.modules.keys())
    for banned in BANNED_LOCAL_PACKAGES:
        if banned in loaded_modules:
            raise RuntimeError(f"RULE VIOLATION: Local compute package '{banned}' loaded in violation of Rule 01!")
    return True
