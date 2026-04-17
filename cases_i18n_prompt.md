# Task: Convert cases page to 7-language i18n (inline approach)

## File to modify
`src/app/[locale]/cases/page.tsx`

## Requirements
1. Add `import { useLocale } from 'next-intl';` at top
2. Define `type LocaleKey = 'zh' | 'en' | 'ja' | 'ko' | 'es' | 'de' | 'ar';`
3. Add `i18n` constant object (between CaseImageSlider and CasesPage component) with 7 languages
4. In CasesPage component first line: `const locale = useLocale() as LocaleKey; const t = i18n[locale] ?? i18n.en; const isRTL = locale === 'ar';`
5. Change `<main>` to include `dir={isRTL ? 'rtl' : 'ltr'}`
6. Replace all hardcoded Chinese text with `t.xxx`
7. Keep all existing styles, structure, CaseImageSlider component unchanged

## Brand name correction
Replace all "模拟马®" and "SimuHorse®" with "Equestrian Simulators®" in all languages

## i18n data structure (all non-ASCII must be Unicode-escaped like \uXXXX)

```typescript
const i18n: Record<LocaleKey, {
  badge: string;
  h1: string;
  subtitle: string;
  labelClientBg: string;
  labelChallenge: string;
  labelSolution: string;
  cases: Array<{
    badge: string;
    title: string;
    clientBackground: string;
    challenge: string;
    solution: string;
    quote: string | null;
    buttonText: string;
  }>;
  whySectionBadge: string;
  whySectionTitle: string;
  whySectionSubtitle: string;
  statLabel: string;
  advantages: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  ctaTitle: string;
  ctaSub: string;
  ctaBtn1: string;
  ctaBtn2: string;
}> = {
  zh: {
    badge: "\u5ba2\u6237\u6848\u4f8b",
    h1: "\u771f\u5b9e\u5e94\u7528\uff0c\u6df1\u5ea6\u4fe1\u8d56",
    subtitle: "Equestrian Simulators\u00ae\u5df2\u670d\u52a1\u4e8e\u5168\u740310+\u77e5\u540d\u673a\u6784\uff0c\u4ece\u9999\u6e2f\u8d5b\u9a6c\u4f1a\u5230\u519b\u4e8b\u8bad\u7ec3\u57fa\u5730\uff0c\u6bcf\u4e00\u4e2a\u6848\u4f8b\u90fd\u662f\u5b89\u5168\u3001\u9ad8\u6548\u3001\u521b\u65b0\u7684\u5370\u8bc1\u3002",
    // ... (I'll provide complete data in next message due to length)
  },
  // ... other 6 languages
};
```

## Translation data (7 languages)

I have all 7 translations ready. Due to length, I'll save them to a separate file for iFlow to reference.

Continue in next prompt with full data...
