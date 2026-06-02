from fastapi import FastAPI
from sqlalchemy import text

from app.db.database import engine

app = FastAPI(
    title="Dupla API",
    version="1.0.0",
    description="Marketplace hiperlocal de oficios"
)

@app.get("/")
async def root():
    return {
        "name": "Dupla",
        "status": "running",
        "version": "1.0.0"
    }

@app.get("/health/db")
def db_health():

    with engine.connect() as connection:

        result = connection.execute(
            text("SELECT version();")
        )

        version = result.scalar()

    return {
        "database": version
    }