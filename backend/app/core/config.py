import os
from pydantic import BaseModel, Field

class Settings(BaseModel):
    PROJECT_NAME: str = "GODMODE"
    VERSION: str = "1.0.0"
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    
    # Cloud AI API Keys (Zero local compute)
    ANTHROPIC_API_KEY: str = Field(default_factory=lambda: os.getenv("ANTHROPIC_API_KEY", ""))
    OPENROUTER_API_KEY: str = Field(default_factory=lambda: os.getenv("OPENROUTER_API_KEY", ""))
    NVIDIA_NIM_API_KEY: str = Field(default_factory=lambda: os.getenv("NVIDIA_NIM_API_KEY", ""))
    OPENAI_API_KEY: str = Field(default_factory=lambda: os.getenv("OPENAI_API_KEY", ""))
    GEMINI_API_KEY: str = Field(default_factory=lambda: os.getenv("GEMINI_API_KEY", ""))
    
    # NVIDIA NIM Endpoint
    NVIDIA_NIM_BASE_URL: str = "https://integrate.api.nvidia.com/v1"
    
    # Langfuse Observability
    LANGFUSE_PUBLIC_KEY: str = Field(default_factory=lambda: os.getenv("LANGFUSE_PUBLIC_KEY", ""))
    LANGFUSE_SECRET_KEY: str = Field(default_factory=lambda: os.getenv("LANGFUSE_SECRET_KEY", ""))
    LANGFUSE_HOST: str = Field(default_factory=lambda: os.getenv("LANGFUSE_HOST", "https://cloud.langfuse.com"))
    
    # Paths
    ROOT_DIR: str = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
    MEMORY_FILE: str = os.path.join(ROOT_DIR, "memory", "journal.md")
    PROVENANCE_FILE: str = os.path.join(ROOT_DIR, "PROVENANCE.md")
    SKILLS_DIR: str = os.path.join(ROOT_DIR, ".agents", "skills")
    
    # Constraints
    ENFORCE_ZERO_LOCAL_GPU: bool = True
    MAX_PAYLOAD_SIZE_MB: int = 10

settings = Settings()
