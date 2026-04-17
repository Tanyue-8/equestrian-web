// 复制到: frontend/src/lib/api-client.ts
// 产品数据类型定义
export interface ProductTranslation {
  languages_code: string;
  name: string;
  tag?: string;
  description?: string;
  content?: string;
  features?: string[];
  specifications?: Record<string, string>;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface Product {
  id: string;
  slug: string;
  translations: ProductTranslation[];
  image?: {
    id: string;
    filename_disk: string;
    title?: string;
  };
  price?: number;
  created_at: string;
  updated_at: string;
}

export interface ProductApiResponse {
  success: boolean;
  message: string;
  data: Product | Product[];
}

// API 基础配置
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * 获取单个产品详情
 */
export async function getProductBySlug(slug: string, locale: string = 'en'): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products/${slug}?lang=${locale}`);
    
    if (!response.ok) {
      console.error(`Failed to fetch product ${slug}:`, response.statusText);
      return null;
    }
    
    const result: ProductApiResponse = await response.json();
    
    if (result.success && result.data && typeof result.data === 'object' && !Array.isArray(result.data)) {
      return result.data as Product;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

/**
 * 获取所有产品列表
 */
export async function getProducts(locale: string = 'en'): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products?lang=${locale}`);
    
    if (!response.ok) {
      console.error('Failed to fetch products:', response.statusText);
      return [];
    }
    
    const result: ProductApiResponse = await response.json();
    
    if (result.success && Array.isArray(result.data)) {
      return result.data as Product[];
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * 获取产品的翻译内容
 */
export function getProductTranslation(product: Product, locale: string): ProductTranslation | null {
  const translation = product.translations.find(t => t.languages_code === locale);
  return translation || product.translations[0] || null;
}

/**
 * 获取产品图片 URL
 */
export function getProductImageUrl(product: Product): string | null {
  if (!product.image || !product.image.filename_disk) {
    return null;
  }
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${product.image.filename_disk}`;
}