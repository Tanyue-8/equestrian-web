import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// 注意：此配置在 Next.js 15+ 中存在兼容性问题
// requestLocale 可能返回 undefined，导致 fallback 到 defaultLocale
// 目前在 layout.tsx 中使用直接动态 import 的方式绕过此问题
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate locale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
