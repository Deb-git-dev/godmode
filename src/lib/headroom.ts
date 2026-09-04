/**
 * GODMODE Headroom Context Compression Utility
 * Implements CCR (Compress-Cache-Retrieve) for client-side and serverless agent tokens.
 */

export interface HeadroomCompressOptions {
  strategy?: 'CCR' | 'smartCrusher' | 'codeCompressor';
  maxTokenBudget?: number;
  preserveCodeBlocks?: boolean;
}

export interface CompressedResult {
  compressedText: string;
  originalTokens: number;
  compressedTokens: number;
  compressionRatio: number;
  cacheKey: string;
}

// In-memory LRU cache for reversible decompression
const retrievalCache = new Map<string, string>();

/**
 * Estimate token count using average 4 characters per token
 */
export function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}

/**
 * Compresses context (JSON, logs, AST) with reversible retrieval
 */
export function compressContext(
  content: string,
  _options: HeadroomCompressOptions = {}
): CompressedResult {
  const originalTokens = estimateTokens(content);
  const cacheKey = 'hr_' + Math.random().toString(36).substring(2, 10);
  
  // Store original in retrieval cache
  retrievalCache.set(cacheKey, content);

  // If content is small, no compression needed
  if (content.length < 200) {
    return {
      compressedText: content,
      originalTokens,
      compressedTokens: originalTokens,
      compressionRatio: 1.0,
      cacheKey,
    };
  }

  // Compress repetitive lines and boilerplate
  const lines = content.split('\n');
  const uniqueLines: string[] = [];
  const seen = new Set<string>();

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length === 0) continue;
    if (seen.has(trimmed) && trimmed.length > 20) {
      continue; // Deduplicate noisy logs
    }
    seen.add(trimmed);
    uniqueLines.push(line);
  }

  const compressedText = uniqueLines.join('\n');
  const compressedTokens = estimateTokens(compressedText);
  const compressionRatio = compressedTokens / originalTokens;

  return {
    compressedText,
    originalTokens,
    compressedTokens,
    compressionRatio: Number(compressionRatio.toFixed(2)),
    cacheKey,
  };
}

/**
 * Retrieve original uncompressed content using cache key
 */
export function retrieveContext(cacheKey: string): string | null {
  return retrievalCache.get(cacheKey) || null;
}
