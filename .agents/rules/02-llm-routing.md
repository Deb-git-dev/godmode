# Rule 02: LLM Routing & Grounding Policy

## Routing Hierarchy
1. **Primary Reasoning & Generation**: Claude API (`anthropic`).
2. **Multi-Model Fallback & Cost Optimizer**: OpenRouter API (`openrouter.ai/api/v1`).
3. **Hosted Open-Weights & Fast First Token**: NVIDIA NIM gateway (`https://integrate.api.nvidia.com/v1/chat/completions`) using Server-Sent Events (SSE) streaming for sub-second TTFT.
4. **Secondary Providers**: OpenAI API, Google Gemini API.

## Grounding & Truth Enforcement
- All AI assistant widgets, automated responses, and user-facing intelligence modules must be strictly grounded in verified facts from the workspace knowledge base.
- **Anti-Hallucination Policy**: If a statutory number, transaction ID, legal entity name, or configuration value is not present in the verified context, the assistant must explicitly declare absence rather than inferring or inventing plausible details.
- Guard with Pydantic output validation and prompt contracts.
