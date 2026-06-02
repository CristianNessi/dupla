from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Professional(Base):
    __tablename__ = "professionals"

    id: Mapped[int] = mapped_column(primary_key=True)

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id")
    )

    profession_id: Mapped[int] = mapped_column(
        ForeignKey("professions.id")
    )

    zone_id: Mapped[int] = mapped_column(
        ForeignKey("zones.id")
    )

    phone: Mapped[str] = mapped_column(
        String(50)
    )

    description: Mapped[str] = mapped_column(
        String(1000)
    )