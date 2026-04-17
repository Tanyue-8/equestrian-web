#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import httpx
import asyncio

async def test():
    async with httpx.AsyncClient() as client:
        response = await client.post(
            'http://localhost:8055/items/downloads',
            json={
                'name': '测试4',
                'email': 'test4@test.com',
                'country': '中国',
                'industry': '测试',
                'resource_name': '测试资料',
                'language': 'zh',
                'status': 'sent',
                'source_page': 'downloads'
            }
        )
        print(f"Status: {response.status_code}")
        print(f"Response: {response.text}")

asyncio.run(test())
