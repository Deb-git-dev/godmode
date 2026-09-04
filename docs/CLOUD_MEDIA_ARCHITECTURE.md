# Cloud Media & Diffusion Invariant Analysis

> Governed by **Rule 01: Environment & Compute Constraints** and **AGENTS.md §12, §13**.

---

## 1. Deep Analysis: Why Local Diffusion Models are Excluded

| Repository / Tool | Hardware Requirement | Why It Is Strictly Excluded Locally | Cloud Replacement in GODMODE |
|---|---|---|---|
| `Comfy-Org/ComfyUI` | 12GB–24GB VRAM GPU, 16GB+ RAM | Violates Zero Local GPU invariant. Causes out-of-memory lockups on dev workstations. | **OpenAI Images API** / **Stability AI REST API** |
| `civitai/civitai` | Multi-GB local checkpoint weights (`.safetensors`) | Downloading 4GB–10GB checkpoint files violates the Zero Local Weights rule. | **CivitAI Cloud Prompt Grounding & Cloud Generation** |
| `AIDC-AI/Pixelle-Video` | High-VRAM video diffusion pipeline | Requires local video temporal attention tensors and massive GPU memory. | **Runway API**, **Kling API**, **Pika API**, or **Remotion** (CPU-only React video) |

---

## 2. Permitted Local Tool: `upscayl/upscayl`

- **Repository**: `upscayl/upscayl`
- **Why It Is Permitted**:
  - Operates via CPU or low-power Vulkan fallback.
  - Does not load massive in-memory weights or require a dedicated CUDA GPU.
  - Useful for client-side asset scaling without server round-trips.

---

## 3. Programmatic Video: Remotion (CPU-Rendered)

- Video generation in GODMODE leverages **Remotion** (React components rendered to MP4 via headless Chrome and CPU-only FFmpeg).
- Zero GPU requirement; predictable memory footprint; 100% reproducible programmatic video output.
