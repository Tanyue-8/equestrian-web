from fastapi import APIRouter, HTTPException
from services.directus_client import directus_client
from models import InquiryCreate, InquiryResponse, APIResponse

router = APIRouter()


@router.post("/", response_model=APIResponse)
async def create_inquiry(inquiry: InquiryCreate):
    """
    Submit a new inquiry
    """
    try:
        # Prepare data for Directus
        inquiry_data = {
            "name": inquiry.name,
            "email": inquiry.email,
            "phone": inquiry.phone,
            "subject": inquiry.subject,
            "message": inquiry.message,
            "product_interest": inquiry.product_interest,
            "status": "new"
        }
        
        result = await directus_client.create_item(
            collection="inquiries",
            data=inquiry_data
        )
        
        return APIResponse(
            success=True,
            message="Inquiry submitted successfully",
            data=result
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to submit inquiry: {str(e)}"
        )