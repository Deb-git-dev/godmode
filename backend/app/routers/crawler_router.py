"""
Firecrawl Scrape & Crawl Router for FastAPI
Allows agent workflows to scrape web pages and crawl documentation into LLM-ready markdown.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, HttpUrl
from typing import Optional, List, Dict, Any
import httpx
import logging

logger = logging.getLogger("crawler_router")
router = APIRouter(prefix="/api/crawler", tags=["Firecrawl Crawler"])

FIRECRAWL_API_BASE = "https://api.firecrawl.dev/v1"
FIRECRAWL_API_KEY = "fc-142efcf8619f4221b6b43495bf2b6dd0"

class ScrapeRequest(BaseModel):
    url: str
    formats: Optional[List[str]] = ["markdown"]
    only_main_content: Optional[bool] = True

@router.get("/status")
async def get_crawler_status() -> Dict[str, Any]:
    """Check Firecrawl service status and documentation endpoints."""
    return {
        "service": "Firecrawl v2",
        "status": "configured",
        "mcp_url": "https://mcp.firecrawl.dev/v2/mcp",
        "docs_index": "https://docs.firecrawl.dev/llms.txt",
        "auth_type": "bearer_token"
    }

@router.post("/scrape")
async def scrape_web_page(req: ScrapeRequest) -> Dict[str, Any]:
    """Scrape a web page to clean markdown via Firecrawl."""
    headers = {
        "Authorization": f"Bearer {FIRECRAWL_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "url": req.url,
        "formats": req.formats,
        "onlyMainContent": req.only_main_content
    }
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            res = await client.post(f"{FIRECRAWL_API_BASE}/scrape", json=payload, headers=headers)
            if res.status_code == 200:
                return res.json()
            return {
                "success": False,
                "status_code": res.status_code,
                "detail": res.text
            }
    except Exception as e:
        logger.error(f"Firecrawl scrape failed: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }
