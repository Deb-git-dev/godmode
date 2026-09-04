# Rule 05: Memory & Retrieval Architecture

## Plain-Text Markdown Memory
- Maintain state across sessions using plain markdown files (`memory/journal.md`).
- Session synthesis format:
  - Timestamp
  - Goal & Sub-tasks
  - Key architectural decisions made
  - Files modified and status
  - Open blockers & next items
- Plain markdown is human-readable, grep-friendly, and consumes zero resident memory or local vector overhead.

## Cloud-Hosted Vector Stores (RAG)
- If vector retrieval is required for high-volume unstructured corpora:
  - Embeddings must be generated via cloud API (`text-embedding-3-small` or Cohere Embed).
  - Storage must use hosted cloud vector databases: Qdrant Cloud or Pinecone (free tier).
  - Local in-memory FAISS/Chroma indexes holding raw vector dumps in RAM are forbidden on low-spec host.
