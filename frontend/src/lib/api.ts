/**
 * FastAPI客户端
 * 替代直接调用Directus，通过FastAPI中间层获取数据
 */

export interface ProductData {
  slug: string;
  model: string;
  name: string;
  description: string;
  featured_image?: string | null;
  video_file?: string | null;
  video_url?: string | null;
  video_poster?: string | null;
  brochure_pdf?: string | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * 获取所有产品
 */
export async function getProductsFromAPI(locale: string = 'zh'): Promise<ProductData[]> {
  try {
    const url = `${API_URL}/api/products?locale=${locale}`;
    console.log(`[API] 正在获取产品数据: ${url}`);
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // 缓存1小时
    });
    
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
    }
    
    const products = await response.json();
    console.log(`[API] 获取到 ${products.length} 个产品`);
    
    return products;
  } catch (error) {
    console.error('[API] 获取产品失败:', error);
    throw error;
  }
}

/**
 * 根据slug获取单个产品
 */
export async function getProductBySlugFromAPI(
  slug: string,
  locale: string = 'zh'
): Promise<ProductData | null> {
  try {
    const url = `${API_URL}/api/products/${slug}?locale=${locale}`;
    console.log(`[API] 正在获取产品: ${url}`);
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }
    });
    
    if (response.status === 404) {
      console.warn(`[API] 产品未找到: ${slug}`);
      return null;
    }
    
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
    }
    
    const product = await response.json();
    console.log(`[API] 获取产品成功: ${product.name}`);
    
    return product;
  } catch (error) {
    console.error('[API] 获取产品失败:', error);
    return null;
  }
}
