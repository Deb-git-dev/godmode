import os
from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict, Any
from backend.app.core.config import settings

router = APIRouter(prefix="/api/skills", tags=["Skills Ecosystem"])

class SkillRouteRequest(BaseModel):
    prompt: str

class SkillInfo(BaseModel):
    name: str
    description: str
    path: str
    category: str

def parse_skill_file(skill_dir: str, skill_name: str) -> Dict[str, Any]:
    skill_md = os.path.join(skill_dir, skill_name, "SKILL.md")
    name = skill_name
    description = ""
    if os.path.exists(skill_md):
        with open(skill_md, "r", encoding="utf-8") as f:
            lines = f.readlines()
            in_frontmatter = False
            for line in lines:
                if line.strip() == "---":
                    in_frontmatter = not in_frontmatter
                    continue
                if in_frontmatter:
                    if line.startswith("name:"):
                        name = line.split("name:")[1].strip()
                    elif line.startswith("description:"):
                        description = line.split("description:")[1].strip()
    return {
        "name": name,
        "description": description,
        "path": f".agents/skills/{skill_name}/SKILL.md"
    }

@router.get("/list")
async def list_skills():
    """List all skills installed in .agents/skills/."""
    skills = []
    if os.path.exists(settings.SKILLS_DIR):
        for item in sorted(os.listdir(settings.SKILLS_DIR)):
            item_path = os.path.join(settings.SKILLS_DIR, item)
            if os.path.isdir(item_path):
                data = parse_skill_file(settings.SKILLS_DIR, item)
                category = "Frontend Taste" if "ui" in item or "design" in item or "garden" in item else \
                           "Meta / Router" if "router" in item or "creator" in item else "Governance / Guard"
                skills.append({**data, "category": category})
    return {"total": len(skills), "skills": skills}

@router.post("/route")
async def route_prompt(request: SkillRouteRequest):
    """
    Skill-router meta-dispatch engine:
    Performs intent classification and semantic matching to recommend the appropriate skills.
    """
    prompt = request.prompt.lower()
    recommended = []
    
    # Matching rules
    if any(k in prompt for k in ["ui", "button", "css", "color", "palette", "tailwind", "layout", "font"]):
        recommended.append("ui-ux-pro-max")
        recommended.append("design-taste-frontend")
    if any(k in prompt for k in ["component", "build", "stage", "workflow", "plan", "garden"]):
        recommended.append("garden-skills")
    if any(k in prompt for k in ["new skill", "repeat", "automate", "workflow to skill", "template"]):
        recommended.append("skill-creator")
    if any(k in prompt for k in ["which skill", "find skill", "catalog", "route", "select"]):
        recommended.append("skill-router")
    if any(k in prompt for k in ["statutory", "legal", "grounding", "tax", "license", "hallucination", "compliance"]):
        recommended.append("compliance-guard")
    
    # Always enforce full output when code is involved
    if any(k in prompt for k in ["code", "function", "implement", "write", "class", "file"]):
        recommended.append("full-output-enforcement")
        
    if not recommended:
        recommended = ["ui-ux-pro-max", "garden-skills"]
        
    return {
        "prompt": request.prompt,
        "primary_skill": recommended[0],
        "active_skills": list(dict.fromkeys(recommended)),
        "reasoning": f"Intent matched keywords corresponding to {recommended[0]} and related governance rules."
    }
