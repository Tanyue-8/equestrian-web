/**
 * Directus客户端（已弃用）
 * 现在使用FastAPI中间层，此文件保留以防需要
 */

// 导出空类型以保持兼容性
export interface Product {
  id: number;
  slug: string;
  model: string;
  translations?: any[];
}

export interface ProductTranslation {
  id: number;
  languages_code: string;
  name: string;
  description: string;
}

// 占位函数（已弃用）
export async function getProducts() {
  console.warn('[Deprecated] getProducts from directus.ts - use FastAPI instead');
  return [];
}

export function getProductTranslation(product: Product, locale: string) {
  console.warn('[Deprecated] getProductTranslation - use FastAPI instead');
  return null;
}

export function getAssetUrl(fileId?: string | null) {
  if (!fileId) return null;
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
  return `${directusUrl}/assets/${fileId}`;
}
