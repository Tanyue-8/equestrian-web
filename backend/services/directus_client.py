import httpx
import json
from typing import Optional, Dict, Any, List
from config import settings


class DirectusClient:
    def __init__(self):
        self.base_url = settings.DIRECTUS_URL
        self.token = settings.DIRECTUS_TOKEN
        self.headers = {}
        if self.token:
            self.headers["Authorization"] = f"Bearer {self.token}"

    async def _request(
        self,
        method: str,
        endpoint: str,
        data: Optional[Dict[str, Any]] = None,
        params: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """Make a request to Directus API"""
        url = f"{self.base_url}{endpoint}"
        
        async with httpx.AsyncClient() as client:
            response = await client.request(
                method=method,
                url=url,
                headers=self.headers,
                json=data,
                params=params
            )
            response.raise_for_status()
            return response.json()

    async def get_items(
        self,
        collection: str,
        lang: str = "en",
        fields: Optional[List[str]] = None,
        filter_params: Optional[Dict[str, Any]] = None,
        limit: int = 100
    ) -> List[Dict[str, Any]]:
        """Get items from a Directus collection"""
        params = {
            "limit": limit,
            "deep": json.dumps({
                "translations": {
                    "_filter": {
                        "languages_code": {
                            "_eq": lang
                        }
                    }
                }
            })
        }
        
        if fields:
            params["fields"] = fields
            
        if filter_params:
            params["filter"] = json.dumps(filter_params)

        result = await self._request("GET", f"/items/{collection}", params=params)
        return result.get("data", [])

    async def get_item_by_slug(
        self,
        collection: str,
        slug: str,
        lang: str = "en",
        fields: Optional[List[str]] = None
    ) -> Optional[Dict[str, Any]]:
        """Get a single item by slug"""
        params = {
            "filter": json.dumps({
                "slug": {
                    "_eq": slug
                }
            }),
            "deep": json.dumps({
                "translations": {
                    "_filter": {
                        "languages_code": {
                            "_eq": lang
                        }
                    }
                }
            }),
            "limit": 1
        }
        
        if fields:
            params["fields"] = fields

        result = await self._request("GET", f"/items/{collection}", params=params)
        data = result.get("data", [])
        return data[0] if data else None

    async def create_item(
        self,
        collection: str,
        data: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Create a new item in a Directus collection"""
        result = await self._request("POST", f"/items/{collection}", data=data)
        return result.get("data")


# Singleton instance
directus_client = DirectusClient()