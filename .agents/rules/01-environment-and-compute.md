# Rule 01: Environment & Compute Constraints

## Invariant
- **Zero Local GPU**: No local neural network inference, fine-tuning, or model weight storage is permitted.
- **Low RAM Target**: Assume a low-spec host machine (4GB–8GB RAM). Memory-intensive processes must never be initiated locally.
- **Cloud API Only**: All heavy computation (LLMs, embeddings, image generation, audio/video generation, transcription) must be delegated via HTTP/REST/gRPC to managed cloud endpoints.

## Banned Locally
- Local LLM serving engines: `vLLM`, `Ollama`, `llama.cpp`, `TensorRT-LLM`, `LM Studio`, `KoboldCPP`.
- Local training / fine-tuning libraries: `unsloth`, `peft`, `trl`, `axolotl`, `deepspeed`.
- Local embedding generation: self-hosted `BGE`, `SentenceTransformers`, `Nomic`.
- Local diffusion checkpoints: `ComfyUI`, `Automatic1111`, `diffusers` pipelines, `Wan2.x`.
- In-memory vector indexes storing large embedding matrices locally.

## Approved Cloud APIs
- Reasoning: Claude API (Anthropic), OpenAI API, Google Gemini API.
- Routing / Fallback: OpenRouter.
- Fast open models: NVIDIA NIM (`integrate.api.nvidia.com/v1/chat/completions`).
- Embeddings: OpenAI Embeddings (`text-embedding-3-small`), Cohere Embed.
- Vector store: Qdrant Cloud, Pinecone (free tier).
- Media: OpenAI DALL-E / Images API, Stability API, Runway, Kling, Pika.
- Programmatic video: Remotion (CPU-only render).
