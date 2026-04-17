from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Any


class Product(BaseModel):
    id: Optional[str] = None
    slug: str
    translations: List[dict] = []
    image: Optional[dict] = None
    featured_image: Optional[str] = None
    gallery: Optional[List[str]] = None
    video_file: Optional[str] = None
    video_url: Optional[str] = None
    video_poster: Optional[str] = None
    brochure_pdf: Optional[str] = None
    price: Optional[float] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None


class BlogPost(BaseModel):
    id: Optional[str] = None
    slug: str
    translations: List[dict] = []
    image: Optional[dict] = None
    author: Optional[dict] = None
    published_date: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None


class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=50)
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
    product_interest: Optional[str] = None


class InquiryResponse(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    created_at: str


class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Any] = None