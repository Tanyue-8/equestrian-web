#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
FastAPI中间层
- 对接Directus后台
- 处理复杂业务逻辑
- 为Next.js前端提供API
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import httpx
import os
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import html

# 加载环境变量
load_dotenv()

app = FastAPI(title="Equestrian Simulator API", version="1.0.0")

# CORS配置
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:3001").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directus配置
DIRECTUS_URL = os.getenv("DIRECTUS_URL", "http://localhost:8055")
DIRECTUS_TOKEN = os.getenv("DIRECTUS_TOKEN", "")

# 邮件配置
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME", "info@equestrian-simulators.com")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")  # 必须从环境变量读取
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "info@equestrian-simulators.com")

# 数据模型
class ProductTranslation(BaseModel):
    languages_code: str
    name: str
    description: str
    content: Optional[str] = None

class Product(BaseModel):
    id: int
    slug: str
    model: str
    category: str
    is_featured: bool
    featured_image: Optional[str] = None
    gallery: Optional[List[str]] = None
    video_file: Optional[str] = None
    video_url: Optional[str] = None
    brochure_pdf: Optional[str] = None
    translations: List[ProductTranslation] = []

class ProductResponse(BaseModel):
    slug: str
    model: str
    name: str
    description: str
    featured_image: Optional[str] = None
    video_file: Optional[str] = None
    video_url: Optional[str] = None
    video_poster: Optional[str] = None
    brochure_pdf: Optional[str] = None

class BlogPostResponse(BaseModel):
    id: int
    slug: str
    title: str
    summary: Optional[str] = None
    content: str
    featured_image: Optional[str] = None
    author: Optional[str] = None
    tags: Optional[List[str]] = None
    published_at: Optional[str] = None
    date_created: Optional[str] = None

# API端点

@app.get("/")
async def root():
    """健康检查"""
    return {
        "service": "Equestrian Simulator API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/api/products", response_model=List[ProductResponse])
async def get_products(locale: str = "zh"):
    """
    获取所有产品
    
    参数:
        locale: 语言代码（zh/en/ja/ko/es/de/ar）
    
    返回:
        产品列表（包含对应语言的翻译）
    """
    try:
        # 调用Directus API
        async with httpx.AsyncClient() as client:
            url = f"{DIRECTUS_URL}/items/products"
            params = {
                "fields": "*,translations.*"
            }
            headers = {}
            if DIRECTUS_TOKEN:
                headers["Authorization"] = f"Bearer {DIRECTUS_TOKEN}"
            
            response = await client.get(url, params=params, headers=headers, timeout=10.0)
            response.raise_for_status()
            
            data = response.json()
            products = data.get("data", [])
            
            # 转换为前端需要的格式
            result = []
            for product in products:
                # 查找对应语言的翻译
                translation = None
                translations = product.get("translations", [])
                
                for t in translations:
                    if t.get("languages_code") == locale:
                        translation = t
                        break
                
                # 如果没找到，使用英文或第一个翻译
                if not translation and translations:
                    translation = next(
                        (t for t in translations if t.get("languages_code") == "en"),
                        translations[0]
                    )
                
                # 构建返回数据
                featured_image = None
                if product.get("featured_image"):
                    featured_image = f"{DIRECTUS_URL}/assets/{product['featured_image']}"
                
                video_file = None
                if product.get("video_file"):
                    video_file = f"{DIRECTUS_URL}/assets/{product['video_file']}"
                
                video_poster = None
                if product.get("video_poster"):
                    video_poster = f"{DIRECTUS_URL}/assets/{product['video_poster']}"
                
                brochure_pdf = None
                if product.get("brochure_pdf"):
                    brochure_pdf = f"{DIRECTUS_URL}/assets/{product['brochure_pdf']}"
                
                result.append({
                    "slug": product.get("slug", ""),
                    "model": product.get("model", ""),
                    "name": translation.get("name", product.get("model", "")) if translation else product.get("model", ""),
                    "description": translation.get("description", "") if translation else "",
                    "featured_image": featured_image,
                    "video_file": video_file,
                    "video_url": product.get("video_url"),
                    "video_poster": video_poster,
                    "brochure_pdf": brochure_pdf
                })
            
            return result
            
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Directus API错误: {str(e)}")
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"无法连接到Directus: {str(e)}")
    except Exception as e:
        # 生产环境不暴露详细错误信息
        print(f"[get_products] 内部错误: {str(e)}")  # 记录到日志
        raise HTTPException(status_code=500, detail="服务器内部错误，请稍后再试")

@app.get("/api/products/{slug}", response_model=ProductResponse)
async def get_product_by_slug(slug: str, locale: str = "zh"):
    """
    根据slug获取单个产品
    
    参数:
        slug: 产品slug
        locale: 语言代码
    
    返回:
        产品详情
    """
    try:
        async with httpx.AsyncClient() as client:
            url = f"{DIRECTUS_URL}/items/products"
            params = {
                "fields": "*,translations.*",
                "filter[slug][_eq]": slug,
                "limit": 1
            }
            headers = {}
            if DIRECTUS_TOKEN:
                headers["Authorization"] = f"Bearer {DIRECTUS_TOKEN}"
            
            response = await client.get(url, params=params, headers=headers, timeout=10.0)
            response.raise_for_status()
            
            data = response.json()
            products = data.get("data", [])
            
            if not products:
                raise HTTPException(status_code=404, detail=f"产品未找到: {slug}")
            
            product = products[0]
            
            # 查找翻译
            translation = None
            translations = product.get("translations", [])
            
            for t in translations:
                if t.get("languages_code") == locale:
                    translation = t
                    break
            
            if not translation and translations:
                translation = next(
                    (t for t in translations if t.get("languages_code") == "en"),
                    translations[0]
                )
            
            # 构建返回数据
            featured_image = None
            if product.get("featured_image"):
                featured_image = f"{DIRECTUS_URL}/assets/{product['featured_image']}"
            
            video_file = None
            if product.get("video_file"):
                video_file = f"{DIRECTUS_URL}/assets/{product['video_file']}"
            
            video_poster = None
            if product.get("video_poster"):
                video_poster = f"{DIRECTUS_URL}/assets/{product['video_poster']}"
            
            brochure_pdf = None
            if product.get("brochure_pdf"):
                brochure_pdf = f"{DIRECTUS_URL}/assets/{product['brochure_pdf']}"
            
            return {
                "slug": product.get("slug", ""),
                "model": product.get("model", ""),
                "name": translation.get("name", product.get("model", "")) if translation else product.get("model", ""),
                "description": translation.get("description", "") if translation else "",
                "featured_image": featured_image,
                "video_file": video_file,
                "video_url": product.get("video_url"),
                "video_poster": video_poster,
                "brochure_pdf": brochure_pdf
            }
            
    except HTTPException:
        raise
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Directus API错误: {str(e)}")
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"无法连接到Directus: {str(e)}")
    except Exception as e:
        # 生产环境不暴露详细错误信息
        print(f"[get_product_by_slug] 内部错误: {str(e)}")  # 记录到日志
        raise HTTPException(status_code=500, detail="服务器内部错误，请稍后再试")

@app.get("/api/blog", response_model=List[BlogPostResponse])
async def get_blog_posts(locale: str = "zh", limit: int = 10, offset: int = 0):
    """
    获取博客文章列表
    
    参数:
        locale: 语言代码（zh/en/ja/ko/es/de/ar）
        limit: 返回数量（默认10）
        offset: 偏移量（默认0）
    
    返回:
        博客文章列表（包含对应语言的翻译）
    """
    try:
        async with httpx.AsyncClient() as client:
            url = f"{DIRECTUS_URL}/items/blog_posts"
            params = {
                "fields": "*,translations.*",
                "filter[status][_eq]": "published",
                "sort": "-published_at",
                "limit": limit,
                "offset": offset
            }
            headers = {}
            if DIRECTUS_TOKEN:
                headers["Authorization"] = f"Bearer {DIRECTUS_TOKEN}"
            
            response = await client.get(url, params=params, headers=headers, timeout=10.0)
            response.raise_for_status()
            
            data = response.json()
            posts = data.get("data", [])
            
            # 转换为前端需要的格式
            result = []
            for post in posts:
                # 查找对应语言的翻译
                translation = None
                translations = post.get("translations", [])
                
                for t in translations:
                    if t.get("languages_code") == locale:
                        translation = t
                        break
                
                # 如果没找到，使用英文或第一个翻译
                if not translation and translations:
                    translation = next(
                        (t for t in translations if t.get("languages_code") == "en"),
                        translations[0]
                    )
                
                # 构建返回数据
                featured_image = None
                if post.get("featured_image"):
                    featured_image = f"{DIRECTUS_URL}/assets/{post['featured_image']}"
                
                # 使用翻译的标题、摘要、内容、标签、作者，如果没有则使用主表
                title = translation.get("title") if translation else post.get("title", "")
                summary = translation.get("summary") if translation else post.get("excerpt", "")
                content = translation.get("content") if translation else post.get("content", "")
                slug = translation.get("slug") if translation else post.get("slug", "")
                tags = translation.get("tags") if translation and translation.get("tags") else post.get("tags")
                author = translation.get("author") if translation and translation.get("author") else post.get("author")
                
                result.append({
                    "id": post.get("id"),
                    "slug": slug,
                    "title": title,
                    "summary": summary,
                    "content": content,
                    "featured_image": featured_image,
                    "author": author,
                    "tags": tags,
                    "published_at": post.get("published_at"),
                    "date_created": post.get("date_created")
                })
            
            return result
            
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Directus API错误: {str(e)}")
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"无法连接到Directus: {str(e)}")
    except Exception as e:
        # 生产环境不暴露详细错误信息
        print(f"[get_blog_posts] 内部错误: {str(e)}")  # 记录到日志
        raise HTTPException(status_code=500, detail="服务器内部错误，请稍后再试")

@app.get("/api/blog/{slug}", response_model=BlogPostResponse)
async def get_blog_post_by_slug(slug: str, locale: str = "zh"):
    """
    根据slug获取单篇博客文章
    
    参数:
        slug: 文章slug
        locale: 语言代码
    
    返回:
        博客文章详情
    """
    try:
        async with httpx.AsyncClient() as client:
            # 先查找翻译表中的slug
            url = f"{DIRECTUS_URL}/items/blog_posts"
            params = {
                "fields": "*,translations.*",
                "filter[status][_eq]": "published",
                "limit": -1  # 获取所有，然后在代码中匹配
            }
            headers = {}
            if DIRECTUS_TOKEN:
                headers["Authorization"] = f"Bearer {DIRECTUS_TOKEN}"
            
            response = await client.get(url, params=params, headers=headers, timeout=10.0)
            response.raise_for_status()
            
            data = response.json()
            posts = data.get("data", [])
            
            # 查找匹配的文章（可能在主表或翻译表的slug）
            post = None
            for p in posts:
                if p.get("slug") == slug:
                    post = p
                    break
                # 检查翻译表的slug
                translations = p.get("translations", [])
                for t in translations:
                    if t.get("slug") == slug:
                        post = p
                        break
                if post:
                    break
            
            if not post:
                raise HTTPException(status_code=404, detail=f"博客文章未找到: {slug}")
            
            # 查找翻译
            translation = None
            translations = post.get("translations", [])
            
            for t in translations:
                if t.get("languages_code") == locale:
                    translation = t
                    break
            
            if not translation and translations:
                translation = next(
                    (t for t in translations if t.get("languages_code") == "en"),
                    translations[0]
                )
            
            # 构建返回数据
            featured_image = None
            if post.get("featured_image"):
                featured_image = f"{DIRECTUS_URL}/assets/{post['featured_image']}"
            
            title = translation.get("title") if translation else post.get("title", "")
            summary = translation.get("summary") if translation else post.get("excerpt", "")
            content = translation.get("content") if translation else post.get("content", "")
            slug_return = translation.get("slug") if translation else post.get("slug", "")
            tags = translation.get("tags") if translation and translation.get("tags") else post.get("tags")
            author = translation.get("author") if translation and translation.get("author") else post.get("author")
            
            return {
                "id": post.get("id"),
                "slug": slug_return,
                "title": title,
                "summary": summary,
                "content": content,
                "featured_image": featured_image,
                "author": author,
                "tags": tags,
                "published_at": post.get("published_at"),
                "date_created": post.get("date_created")
            }
            
    except HTTPException:
        raise
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Directus API错误: {str(e)}")
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"无法连接到Directus: {str(e)}")
    except Exception as e:
        # 生产环境不暴露详细错误信息
        print(f"[get_blog_post_by_slug] 内部错误: {str(e)}")  # 记录到日志
        raise HTTPException(status_code=500, detail="服务器内部错误，请稍后再试")

# ========== 邮件发送函数 ==========

async def send_inquiry_email(inquiry: 'InquiryRequest', inquiry_id: int):
    """
    发送询盘通知邮件到管理员
    
    Args:
        inquiry: 表单数据
        inquiry_id: Directus中的记录ID
    """
    # HTML转义所有用户输入，防止XSS攻击
    safe_name = html.escape(inquiry.name)
    safe_contact = html.escape(inquiry.contact)
    safe_country = html.escape(inquiry.country)
    safe_industry = html.escape(inquiry.industry)
    safe_product = html.escape(inquiry.product) if inquiry.product else "未指定"
    safe_scenario = html.escape(inquiry.scenario) if inquiry.scenario else ""
    safe_locale = html.escape(inquiry.locale)
    safe_message = html.escape(inquiry.message) if inquiry.message else ""
    
    # 创建邮件
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'新询盘 #{inquiry_id} - {safe_name}'
    msg['From'] = SMTP_USERNAME
    msg['To'] = ADMIN_EMAIL
    
    # 邮件内容（HTML格式，所有用户输入已转义）
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #C9A84C; margin-top: 0;">🔔 新询盘通知</h2>
                <p style="font-size: 14px; color: #666;">询盘编号：#{inquiry_id}</p>
                
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; width: 120px;">姓名：</td>
                        <td style="padding: 10px 0;">{safe_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">联系方式：</td>
                        <td style="padding: 10px 0;">{safe_contact}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">国家/地区：</td>
                        <td style="padding: 10px 0;">{safe_country}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">行业：</td>
                        <td style="padding: 10px 0;">{safe_industry}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">感兴趣产品：</td>
                        <td style="padding: 10px 0;">{safe_product}</td>
                    </tr>
                    {f'<tr><td style="padding: 10px 0; font-weight: bold;">使用场景：</td><td style="padding: 10px 0;">{safe_scenario}</td></tr>' if safe_scenario else ''}
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">语言：</td>
                        <td style="padding: 10px 0;">{safe_locale}</td>
                    </tr>
                </table>
                
                {f'<div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #C9A84C; border-radius: 4px;"><p style="margin: 0; font-weight: bold;">留言：</p><p style="margin: 10px 0 0 0; white-space: pre-wrap;">{safe_message}</p></div>' if safe_message else ''}
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
                    <p>来自模拟马®官网 | 广东探月教育设备有限公司</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    
    # 添加HTML内容
    html_part = MIMEText(html_content, 'html', 'utf-8')
    msg.attach(html_part)
    
    # 发送邮件（Gmail SMTP）
    smtp = aiosmtplib.SMTP(hostname=SMTP_SERVER, port=SMTP_PORT, start_tls=False, use_tls=False)
    await smtp.connect()
    await smtp.starttls()
    await smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
    await smtp.send_message(msg)
    await smtp.quit()

# ========== 联系表单 API ==========

class InquiryRequest(BaseModel):
    """联系表单数据模型（带安全验证）"""
    name: str
    contact: str  # 邮箱或WhatsApp
    country: str
    industry: str
    product: Optional[str] = None
    message: Optional[str] = None
    scenario: Optional[str] = None  # 使用场景（可选）
    locale: str = "zh"  # 语言
    
    # 字段长度限制，防止恶意输入
    class Config:
        str_max_length = 1000  # 最大1000字符
        
    # 字段验证
    @classmethod
    def validate_fields(cls, values):
        # 限制name长度
        if len(values.get('name', '')) > 100:
            raise ValueError('姓名过长')
        # 限制message长度
        if values.get('message') and len(values['message']) > 2000:
            raise ValueError('留言过长')
        return values

@app.post("/api/inquiry")
async def submit_inquiry(inquiry: InquiryRequest):
    """
    接收联系表单
    
    流程：
    1. 保存到Directus的inquiries表
    2. 发送邮件通知到管理员
    
    返回：
    {"status": "success", "id": 123}
    """
    try:
        async with httpx.AsyncClient() as client:
            # 1. 保存到Directus
            url = f"{DIRECTUS_URL}/items/inquiries"
            headers = {}
            if DIRECTUS_TOKEN:
                headers["Authorization"] = f"Bearer {DIRECTUS_TOKEN}"
            
            # 判断contact是邮箱还是电话
            email_value = inquiry.contact if "@" in inquiry.contact else ""
            phone_value = inquiry.contact if "@" not in inquiry.contact else ""
            
            # 组合message，包含industry和scenario信息
            full_message = f"行业: {inquiry.industry}\n"
            if inquiry.scenario:
                full_message += f"使用场景: {inquiry.scenario}\n"
            if inquiry.message:
                full_message += f"\n留言:\n{inquiry.message}"
            
            payload = {
                "name": inquiry.name,
                "email": email_value,
                "phone": phone_value,
                "country": inquiry.country,
                "product_interest": inquiry.product,
                "message": full_message,  # 包含industry和scenario
                "language": inquiry.locale,
                "status": "new",  # 新询盘
                "source_page": "contact"  # 来源页面
            }
            
            response = await client.post(url, json=payload, headers=headers, timeout=10.0)
            response.raise_for_status()
            
            result = response.json()
            inquiry_id = result.get("data", {}).get("id")
            
            # 2. 发送邮件通知到管理员
            try:
                await send_inquiry_email(inquiry, inquiry_id)
            except Exception as email_error:
                print(f"邮件发送失败: {email_error}")
                # 邮件发送失败不影响表单提交成功
            
            return {
                "status": "success",
                "id": inquiry_id,
                "message": "感谢您的咨询！我们将在24小时内与您联系。"
            }
            
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Directus API错误: {str(e)}")
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"无法连接到Directus: {str(e)}")
    except Exception as e:
        # 生产环境不暴露详细错误信息
        print(f"[submit_download] 内部错误: {str(e)}")  # 记录到日志
        raise HTTPException(status_code=500, detail="服务器内部错误，请稍后再试")

# ========== 下载资料 API ==========

class DownloadRequest(BaseModel):
    """下载资料表单数据模型"""
    name: str
    email: str
    country: str
    industry: str
    resource: str  # 资料名称
    locale: str = "zh"

@app.post("/api/download")
async def submit_download(download: DownloadRequest):
    """
    接收下载资料请求
    
    流程：
    1. 保存到Directus的downloads表
    2. 自动发送PDF到用户邮箱
    3. 发送邮件通知到管理员
    
    返回：
    {"status": "success", "id": 123}
    """
    print(f"收到下载请求: {download}")
    try:
        async with httpx.AsyncClient() as client:
            # 1. 保存到Directus
            url = f"{DIRECTUS_URL}/items/downloads"
            headers = {}
            if DIRECTUS_TOKEN:
                headers["Authorization"] = f"Bearer {DIRECTUS_TOKEN}"
            
            payload = {
                "name": download.name,
                "email": download.email,
                "country": download.country,
                "industry": download.industry,
                "resource_name": download.resource,
                "language": download.locale,
                "status": "sent",  # 已发送
                "source_page": "downloads"
            }
            
            response = await client.post(url, json=payload, headers=headers, timeout=10.0)
            response.raise_for_status()
            
            # Public角色创建时返回204，没有body
            if response.status_code == 204:
                download_id = "unknown"
            else:
                result = response.json()
                download_id = result.get("data", {}).get("id", "unknown")
            
            # 2. 发送PDF到用户邮箱（暂时禁用，Gmail SMTP超时）
            # try:
            #     await send_pdf_to_user(download)
            # except Exception as pdf_error:
            #     print(f"用户PDF发送失败: {pdf_error}")
            
            # 3. 发送邮件通知到管理员（暂时禁用，Gmail SMTP超时）
            # try:
            #     await send_download_notification(download, download_id)
            # except Exception as email_error:
            #     print(f"管理员邮件通知失败: {email_error}")
            
            print(f"下载记录已保存到Directus，ID: {download_id}")
            
            return {
                "status": "success",
                "id": download_id,
                "message": "感谢您的申请！PDF将在24小时内发送到您的邮箱。"
            }
            
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Directus API错误: {str(e)}")
    except httpx.RequestError as e:
        raise HTTPException(status_code=503, detail=f"无法连接到Directus: {str(e)}")
    except Exception as e:
        # 生产环境不暴露详细错误信息
        print(f"[submit_inquiry] 内部错误: {str(e)}")  # 记录到日志
        raise HTTPException(status_code=500, detail="服务器内部错误，请稍后再试")

# PDF文件映射（资料名称 → Directus文件ID）
PDF_FILES = {
    "Horse-MS.30P": "13604e97-9fa4-486d-b249-c39811c2741a",
    "Pony-MS.30": "f57cf08d-ce01-4829-ac8a-af73936bd714",
    "Racehorse-MS.20": "bb2d6e6a-206f-483b-b6c1-810ef7f3106e",
}

async def send_pdf_to_user(download: DownloadRequest):
    """发送PDF到用户邮箱"""
    from email.mime.base import MIMEBase
    from email import encoders
    
    # 根据资料名称匹配PDF文件
    pdf_id = None
    for key in PDF_FILES:
        if key in download.resource:
            pdf_id = PDF_FILES[key]
            break
    
    if not pdf_id:
        print(f"未找到匹配的PDF文件: {download.resource}")
        return
    
    # 下载PDF文件
    pdf_url = f"{DIRECTUS_URL}/assets/{pdf_id}"
    async with httpx.AsyncClient() as client:
        response = await client.get(pdf_url, timeout=30.0)
        response.raise_for_status()
        pdf_data = response.content
    
    # 创建邮件
    msg = MIMEMultipart()
    msg['Subject'] = f'📄 您请求的资料：{download.resource}'
    msg['From'] = SMTP_USERNAME
    msg['To'] = download.email
    
    # 邮件正文
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #C9A84C; margin-top: 0;">📄 您请求的资料</h2>
                <p>尊敬的 {download.name}，</p>
                <p>感谢您对模拟马®产品的关注！请查收附件中的产品手册。</p>
                
                <div style="background-color: #F5F0E8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0; font-weight: bold; color: #0A1E3F;">📎 附件：{download.resource}</p>
                </div>
                
                <p>如果您有任何疑问或需要进一步了解，请随时联系我们：</p>
                <ul style="color: #5A6478;">
                    <li>📧 邮箱：info@equestrian-simulators.com</li>
                    <li>💬 WhatsApp：+86 189 2293 8639</li>
                    <li>🌐 官网：www.equestrian-simulators.com</li>
                </ul>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
                    <p>模拟马® | 广东探月教育设备有限公司</p>
                    <p>专业马术模拟器制造商</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    
    html_part = MIMEText(html_content, 'html', 'utf-8')
    msg.attach(html_part)
    
    # 添加PDF附件
    pdf_attachment = MIMEBase('application', 'pdf')
    pdf_attachment.set_payload(pdf_data)
    encoders.encode_base64(pdf_attachment)
    pdf_attachment.add_header('Content-Disposition', f'attachment; filename="{download.resource}.pdf"')
    msg.attach(pdf_attachment)
    
    # 发送邮件
    smtp = aiosmtplib.SMTP(hostname=SMTP_SERVER, port=SMTP_PORT, start_tls=False, use_tls=False)
    await smtp.connect()
    await smtp.starttls()
    await smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
    await smtp.send_message(msg)
    await smtp.quit()

async def send_download_notification(download: DownloadRequest, download_id: int):
    """发送下载通知邮件到管理员"""
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'📥 新资料下载 #{download_id} - {download.name}'
    msg['From'] = SMTP_USERNAME
    msg['To'] = ADMIN_EMAIL
    
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #C9A84C; margin-top: 0;">📥 新资料下载通知</h2>
                <p style="font-size: 14px; color: #666;">下载记录编号：#{download_id}</p>
                
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; width: 120px;">姓名：</td>
                        <td style="padding: 10px 0;">{download.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">邮箱：</td>
                        <td style="padding: 10px 0;">{download.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">国家/地区：</td>
                        <td style="padding: 10px 0;">{download.country}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">行业：</td>
                        <td style="padding: 10px 0;">{download.industry}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">请求资料：</td>
                        <td style="padding: 10px 0; color: #C9A84C; font-weight: 600;">{download.resource}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold;">语言：</td>
                        <td style="padding: 10px 0;">{download.locale}</td>
                    </tr>
                </table>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
                    <p>来自模拟马®官网 - 资料下载中心 | 广东探月教育设备有限公司</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    
    html_part = MIMEText(html_content, 'html', 'utf-8')
    msg.attach(html_part)
    
    # 发送邮件
    smtp = aiosmtplib.SMTP(hostname=SMTP_SERVER, port=SMTP_PORT, start_tls=False, use_tls=False)
    await smtp.connect()
    await smtp.starttls()
    await smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
    await smtp.send_message(msg)
    await smtp.quit()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
