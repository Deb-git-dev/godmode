import os
from fastapi import APIRouter
from backend.app.core.config import settings

router = APIRouter(prefix="/api/provenance", tags=["Provenance & Traceability"])

@router.get("/log")
async def get_provenance_log():
    """Returns parsed provenance entries from PROVENANCE.md."""
    entries = []
    if os.path.exists(settings.PROVENANCE_FILE):
        with open(settings.PROVENANCE_FILE, "r", encoding="utf-8") as f:
            lines = f.readlines()
            for line in lines:
                if line.strip().startswith("| `") and not line.strip().startswith("| Repo / Resource"):
                    parts = [p.strip() for p in line.strip().split("|")[1:-1]]
                    if len(parts) >= 4:
                        entries.append({
                            "resource": parts[0].replace("`", ""),
                            "category": parts[1],
                            "rationale": parts[2],
                            "location": parts[3].replace("`", "")
                        })
    return {"total": len(entries), "entries": entries}
