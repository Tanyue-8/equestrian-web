import os
from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # Directus Configuration
    DIRECTUS_URL: str = "http://localhost:8055"
    DIRECTUS_TOKEN: Optional[str] = None

    # API Configuration
    API_PREFIX: str = "/api"
    
    # Default Language
    DEFAULT_LANG: str = "en"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()