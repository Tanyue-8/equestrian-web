export interface ProductTranslation {
  id?: number;
  products_id?: number;
  languages_code: string;
  name: string;
  tag?: string;
  description?: string;
  content?: string;
}

export interface Product {
  id: number;
  slug: string;
  translations: ProductTranslation[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function getProductBySlug(slug: string, locale: string = 'en'): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE}/api/products/${slug}?lang=${locale}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json: ApiResponse<Product> = await res.json();
    return json.success ? json.data : null;
  } catch {
    return null;
  }
}

export async function getProducts(locale: string = 'en'): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE}/api/products?lang=${locale}`, { cache: 'no-store' });
    if (!res.ok) return [];
    const json: ApiResponse<Product[]> = await res.json();
    return json.success ? json.data : [];
  } catch {
    return [];
  }
}

export function getTranslation(product: Product, locale: string): ProductTranslation | null {
  return product.translations.find(t => t.languages_code === locale)
    || product.translations[0]
    || null;
}
