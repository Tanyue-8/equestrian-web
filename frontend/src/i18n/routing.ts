import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'es', 'ja', 'ar', 'ko', 'de'],
  defaultLocale: 'en',
  // 修改为 'as-needed'：默认语言(en)不显示路径，其他语言显示
  // www.equestrian-simulators.com → 英文版
  // www.equestrian-simulators.com/zh → 中文版
  localePrefix: 'as-needed'
});
