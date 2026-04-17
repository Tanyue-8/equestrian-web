#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Directus产品数据导入脚本
导入 products-data-corrected.json 到 Directus CMS
"""

import json
import requests
from typing import Dict, List, Any

# Directus配置
DIRECTUS_URL = "http://localhost:8055"
DIRECTUS_TOKEN = "cwjwgZqBPYvHDnlxB49PjV1L67l4hj8j"

# API Headers
HEADERS = {
    "Authorization": f"Bearer {DIRECTUS_TOKEN}",
    "Content-Type": "application/json"
}


def load_product_data(file_path: str) -> Dict[str, Any]:
    """读取产品数据JSON文件"""
    print(f"📖 读取产品数据：{file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"✅ 成功读取 {len(data['products'])} 个产品")
    return data


def test_connection() -> bool:
    """测试Directus连接"""
    print(f"\n🔌 测试Directus连接：{DIRECTUS_URL}")
    try:
        response = requests.get(f"{DIRECTUS_URL}/server/ping", timeout=5)
        if response.status_code == 200:
            print("✅ Directus服务器连接成功")
            return True
        else:
            print(f"❌ 连接失败：HTTP {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ 连接失败：{e}")
        return False


def test_auth() -> bool:
    """测试Token认证"""
    print(f"\n🔐 测试Token认证...")
    try:
        response = requests.get(f"{DIRECTUS_URL}/users/me", headers=HEADERS, timeout=5)
        if response.status_code == 200:
            user = response.json()['data']
            print(f"✅ 认证成功：{user.get('email', 'Unknown')}")
            return True
        else:
            print(f"❌ 认证失败：HTTP {response.status_code}")
            print(f"   响应：{response.text}")
            return False
    except Exception as e:
        print(f"❌ 认证失败：{e}")
        return False


def create_product(product_data: Dict[str, Any]) -> bool:
    """创建产品主记录"""
    slug = product_data['slug']
    model = product_data['model']
    print(f"\n📦 创建产品：{model} ({slug})")
    
    # 准备产品主数据（不包含translations）
    product_payload = {
        "slug": product_data['slug'],
        "model": product_data['model'],
        "category": product_data['category'],
        "is_featured": product_data['is_featured']
    }
    
    try:
        # 创建产品主记录
        response = requests.post(
            f"{DIRECTUS_URL}/items/products",
            headers=HEADERS,
            json=product_payload,
            timeout=10
        )
        
        if response.status_code in [200, 201]:
            product_id = response.json()['data']['id']
            print(f"✅ 产品主记录创建成功（ID: {product_id}）")
            
            # 创建多语言翻译
            translations_success = create_translations(product_id, product_data['translations'])
            
            if translations_success:
                print(f"✅ {model} 导入完成（含7种语言翻译）")
                return True
            else:
                print(f"⚠️ {model} 主记录创建成功，但翻译导入部分失败")
                return False
        else:
            print(f"❌ 创建失败：HTTP {response.status_code}")
            print(f"   响应：{response.text}")
            return False
            
    except Exception as e:
        print(f"❌ 创建失败：{e}")
        return False


def create_translations(product_id: int, translations: Dict[str, Dict[str, str]]) -> bool:
    """创建产品翻译记录"""
    print(f"   📝 创建翻译记录...")
    
    success_count = 0
    
    for lang_code, trans_data in translations.items():
        try:
            # 准备翻译数据
            translation_payload = {
                "products_id": product_id,
                "languages_code": lang_code,
                "name": trans_data['name'],
                "description": trans_data['description'],
                "content": trans_data['content']
            }
            
            response = requests.post(
                f"{DIRECTUS_URL}/items/products_translations",
                headers=HEADERS,
                json=translation_payload,
                timeout=10
            )
            
            if response.status_code in [200, 201]:
                print(f"   ✅ {lang_code} 翻译创建成功")
                success_count += 1
            else:
                print(f"   ❌ {lang_code} 翻译创建失败：HTTP {response.status_code}")
                print(f"      响应：{response.text}")
                
        except Exception as e:
            print(f"   ❌ {lang_code} 翻译创建失败：{e}")
    
    print(f"   📊 翻译导入结果：{success_count}/7 成功")
    return success_count == 7


def main():
    """主函数"""
    print("=" * 60)
    print("   Directus 产品数据导入工具")
    print("=" * 60)
    
    # 1. 测试连接
    if not test_connection():
        print("\n❌ 无法连接到Directus服务器，请检查服务是否运行")
        print("   提示：访问 http://localhost:8055 确认服务状态")
        return
    
    # 2. 测试认证
    if not test_auth():
        print("\n❌ Token认证失败，请检查Token是否正确")
        return
    
    # 3. 读取产品数据
    try:
        data = load_product_data("products-data-corrected.json")
    except FileNotFoundError:
        print("\n❌ 找不到数据文件：products-data-corrected.json")
        print("   请确保文件在当前目录下")
        return
    except Exception as e:
        print(f"\n❌ 读取数据文件失败：{e}")
        return
    
    # 4. 导入产品
    products = data['products']
    print(f"\n🚀 开始导入 {len(products)} 个产品...")
    print("=" * 60)
    
    success_count = 0
    for product in products:
        if create_product(product):
            success_count += 1
    
    # 5. 总结
    print("\n" + "=" * 60)
    print(f"   导入完成：{success_count}/{len(products)} 成功")
    print("=" * 60)
    
    if success_count == len(products):
        print("\n🎉 所有产品导入成功！")
        print(f"   访问 {DIRECTUS_URL}/admin/content/products 查看数据")
    else:
        print(f"\n⚠️ 部分产品导入失败，请检查错误信息")


if __name__ == "__main__":
    main()
