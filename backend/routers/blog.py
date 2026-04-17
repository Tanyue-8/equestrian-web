from fastapi import APIRouter, HTTPException, Query
from services.directus_client import directus_client
from models import APIResponse

router = APIRouter()


@router.get("/", response_model=APIResponse)
async def get_blog_posts(
    lang: str = Query("en", description="Language code (e.g., en, zh)")
):
    """
    Get all blog posts with translations in the specified language
    """
    try:
        fields = [
            "id",
            "slug",
            "translations.*",
            "date_created",
        ]
        
        filter_params = None
        
        posts_data = await directus_client.get_items(
            collection="blog_posts",
            lang=lang,
            fields=fields,
            filter_params=filter_params
        )
        
        return APIResponse(
            success=True,
            message=f"Retrieved {len(posts_data)} blog posts",
            data=posts_data
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch blog posts: {str(e)}"
        )


@router.get("/{slug}", response_model=APIResponse)
async def get_blog_post_by_slug(
    slug: str,
    lang: str = Query("en", description="Language code (e.g., en, zh)")
):
    """
    Get a single blog post by slug with translations
    """
    try:
        fields = [
            "id",
            "slug",
            "translations.*",
            "date_created",
        ]
        
        filter_params = None
        
        post_data = await directus_client.get_item_by_slug(
            collection="blog_posts",
            slug=slug,
            lang=lang,
            fields=fields
        )
        
        if not post_data:
            raise HTTPException(
                status_code=404,
                detail=f"Blog post with slug '{slug}' not found"
            )
        
        return APIResponse(
            success=True,
            message="Blog post retrieved successfully",
            data=post_data
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch blog post: {str(e)}"
        )