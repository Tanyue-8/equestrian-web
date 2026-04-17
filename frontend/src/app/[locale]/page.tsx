import { getProductsFromAPI } from '@/lib/api';
import HomeContent from './HomeContent';

interface PageProps {
  params: {
    locale: string;
  };
}

// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';
export const revalidate = 3600; // 每小时重新验证一次（ISR增量静态再生成）

// 生成所有语言的静态页面
export async function generateStaticParams() {
  const locales = ['zh', 'en', 'ja', 'ko', 'es', 'de', 'ar'];
  
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function HomePage({ params }: PageProps) {
  // Next.js 15+ params is a Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  console.log('\n========== [SSG构建] 开始获取产品数据 ==========');
  console.log('📍 当前locale:', locale);
  console.log('🔗 数据源: FastAPI中间层');

  // 通过FastAPI获取产品数据（构建时执行）
  const products = await getProductsFromAPI(locale);

  console.log(`✅ [SSG构建] ${locale} 语言页面数据准备完成（${products.length}个产品）\n`);

  // 传递数据给Client Component
  return <HomeContent products={products} locale={locale} />;
}
