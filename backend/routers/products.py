from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from services.directus_client import directus_client
from models import Product, APIResponse

router = APIRouter()


@router.get("/", response_model=APIResponse)
async def get_products(
    lang: str = Query("en", description="Language code (e.g., en, zh)")
):
    """
    Get all products with translations in the specified language
    """
    try:
        # Define fields to retrieve
        fields = [
            "id",
            "slug",
            "translations.*",
            "featured_image",
            "gallery",
            "video_file",
            "video_url",
            "video_poster",
            "brochure_pdf",
        ]
        
        products_data = await directus_client.get_items(
            collection="products",
            lang=lang,
            fields=fields
        )
        
        return APIResponse(
            success=True,
            message=f"Retrieved {len(products_data)} products",
            data=products_data
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch products: {str(e)}"
        )


@router.get("/{slug}", response_model=APIResponse)
async def get_product_by_slug(
    slug: str,
    lang: str = Query("en", description="Language code (e.g., en, zh)")
):
    """
    Get a single product by slug with translations
    """
    try:
        fields = [
            "id",
            "slug",
            "translations.*",
            "featured_image",
            "gallery",
            "video_file",
            "video_url",
            "video_poster",
            "brochure_pdf",
        ]
        
        product_data = await directus_client.get_item_by_slug(
            collection="products",
            slug=slug,
            lang=lang,
            fields=fields
        )
        
        if not product_data:
            raise HTTPException(
                status_code=404,
                detail=f"Product with slug '{slug}' not found"
            )
        
        return APIResponse(
            success=True,
            message="Product retrieved successfully",
            data=product_data
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch product: {str(e)}"
        )