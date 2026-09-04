import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.core.config import settings
from backend.app.core.guardrails import assert_zero_local_gpu_compliance
from backend.app.routers import (
    llm_router,
    memory_router,
    skills_router,
    provenance_router,
    health_router
)

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("godmode.backend")

# Instantiate FastAPI app
app = FastAPI(
    title="GODMODE Cloud Orchestration API",
    description="Zero-local-GPU, hosted-API multi-model router, markdown memory journal, and skills engine.",
    version=settings.VERSION
)

# CORS configuration for local development & cloud preview
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Mount modular routers
app.include_router(llm_router.router)
app.include_router(memory_router.router)
app.include_router(skills_router.router)
app.include_router(provenance_router.router)
app.include_router(health_router.router)

@app.on_event("startup")
async def startup_event():
    logger.info("Initializing GODMODE backend...")
    assert_zero_local_gpu_compliance()
    logger.info("Zero-local-GPU compliance verified. All compute directed to cloud APIs.")

@app.get("/")
async def root():
    return {
        "system": "GODMODE",
        "status": "operational",
        "rules_enforced": True,
        "compute_mode": "cloud_api_only",
        "endpoints": [
            "/api/llm/chat",
            "/api/llm/gateways",
            "/api/memory/journal",
            "/api/memory/session",
            "/api/memory/search",
            "/api/skills/list",
            "/api/skills/route",
            "/api/provenance/log",
            "/api/health",
            "/api/health/audit"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
