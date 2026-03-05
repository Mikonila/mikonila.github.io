import os
from dataclasses import dataclass, field

from dotenv import load_dotenv

load_dotenv()


@dataclass
class Config:
    BOT_TOKEN: str
    WEBAPP_URL: str          # URL задеплоенного webapp (ngrok / Vercel / etc.)
    ADMINS: list[int] = field(default_factory=list)


def load_config() -> Config:
    admins_raw = os.getenv("ADMINS", "")
    admins = [int(a.strip()) for a in admins_raw.split(",") if a.strip().isdigit()]

    return Config(
        BOT_TOKEN=os.getenv("BOT_TOKEN", ""),
        WEBAPP_URL=os.getenv("WEBAPP_URL", "https://your-webapp-url.com"),
        ADMINS=admins,
    )
