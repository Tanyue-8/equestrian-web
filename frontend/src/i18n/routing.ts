import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'es', 'ja', 'ar', 'ko', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always'
});
