#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""测试输入验证"""

import requests
import json

BASE_URL = "http://localhost:8000"

print("=" * 60)
print("测试1：正常输入（应该成功）")
print("=" * 60)

data = {
    "name": "张三",
    "contact": "test@test.com",
    "country": "中国",
    "industry": "教育",
    "locale": "zh"
}

try:
    response = requests.post(f"{BASE_URL}/api/inquiry", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {response.text[:200]}")
except Exception as e:
    print(f"错误: {e}")

print("\n" + "=" * 60)
print("测试2：姓名超长（应该被拒绝）")
print("=" * 60)

data = {
    "name": "A" * 150,  # 超过100字符限制
    "contact": "test@test.com",
    "country": "中国",
    "industry": "教育",
    "locale": "zh"
}

try:
    response = requests.post(f"{BASE_URL}/api/inquiry", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {response.json()}")
except Exception as e:
    print(f"错误: {e}")

print("\n" + "=" * 60)
print("测试3：留言超长（应该被拒绝）")
print("=" * 60)

data = {
    "name": "张三",
    "contact": "test@test.com",
    "country": "中国",
    "industry": "教育",
    "message": "X" * 2500,  # 超过2000字符限制
    "locale": "zh"
}

try:
    response = requests.post(f"{BASE_URL}/api/inquiry", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {response.json()}")
except Exception as e:
    print(f"错误: {e}")

print("\n" + "=" * 60)
print("测试4：邮箱格式验证（DownloadRequest）")
print("=" * 60)

data = {
    "name": "张三",
    "email": "invalid-email",  # 无效邮箱格式
    "country": "中国",
    "industry": "教育",
    "resource": "产品手册",
    "locale": "zh"
}

try:
    response = requests.post(f"{BASE_URL}/api/download", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {response.json()}")
except Exception as e:
    print(f"错误: {e}")

print("\n" + "=" * 60)
print("测试完成！")
print("=" * 60)
