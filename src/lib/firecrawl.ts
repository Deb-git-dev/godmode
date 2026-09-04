/**
 * Firecrawl Web Scrape & Search Client for GODMODE
 * Connects to Firecrawl API v2 using authenticated Bearer token.
 */

const FIRECRAWL_API_BASE = 'https://api.firecrawl.dev/v1';
const FIRECRAWL_API_KEY = 'fc-142efcf8619f4221b6b43495bf2b6dd0';

export interface ScrapeOptions {
  formats?: ('markdown' | 'html' | 'rawHtml' | 'links' | 'screenshot')[];
  onlyMainContent?: boolean;
  waitFor?: number;
}

export interface ScrapeResult {
  success: boolean;
  markdown?: string;
  html?: string;
  metadata?: {
    title?: string;
    description?: string;
    sourceURL?: string;
    statusCode?: number;
  };
  error?: string;
}

/**
 * Scrape a URL directly into clean LLM-ready markdown
 */
export async function scrapeUrl(
  url: string,
  options: ScrapeOptions = { formats: ['markdown'], onlyMainContent: true }
): Promise<ScrapeResult> {
  try {
    const res = await fetch(`${FIRECRAWL_API_BASE}/scrape`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${FIRECRAWL_API_KEY}`,
      },
      body: JSON.stringify({
        url,
        formats: options.formats || ['markdown'],
        onlyMainContent: options.onlyMainContent ?? true,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { success: false, error: `Firecrawl API error (${res.status}): ${errText}` };
    }

    const data = await res.json();
    return {
      success: true,
      markdown: data.data?.markdown,
      html: data.data?.html,
      metadata: data.data?.metadata,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
