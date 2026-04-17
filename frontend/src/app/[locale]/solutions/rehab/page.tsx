'use client';
// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

type LocaleKey = 'zh' | 'en' | 'ja' | 'ko' | 'es' | 'de' | 'ar';

const i18n: Record<LocaleKey, {
  label: string; h1: [string, string]; heroSub: string; heroAlt: string;
  recTitle: string;
  products: { tag: string; name: string; desc: string; href: string }[];
  advTitle: string;
  advantages: { title: string; desc: string }[];
  caseAlt: string; caseBadge: string; caseTitle: string; caseDesc: string;
  fitsLabel: string; fitsTitle: string;
  fits: { title: string; desc: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string; ctaSub: string; ctaBtn1: string; ctaBtn2: string;
  viewDetail: string; viewCase: string;
}> = {
  zh: {
    label: '\u89e3\u51b3\u65b9\u6848',
    h1: ['\u5eb7\u590d\u6cbb\u7597', '\u4e0e\u9a6c\u672f\u6cbb\u6108'],
    heroSub: '\u9a6c\u672f\u6cbb\u7597\u88ab\u8bc1\u5b9e\u5bf9\u8fd0\u52a8\u969c\u788d\u3001\u81ea\u95ed\u75c7\u3001\u521b\u4f24\u540e\u6062\u590d\u6709\u663e\u8457\u75d5\u6548\uff0c\u6a21\u62df\u9a6c\u8ba9\u66f4\u591a\u4eba\u5b89\u5168\u63a5\u89e6\u9a6c\u80cc\uff0c\u65e0\u9700\u517b\u9a6c\u573a\u5730\u3002',
    heroAlt: '\u9999\u6e2fRDA\u5eb7\u590d\u9a6c\u672f\u8bad\u7ec3',
    recTitle: '\u63a8\u8350\u914d\u7f6e',
    products: [
      { tag: '\u5eb7\u590d\u9996\u9009', name: 'Pony-MS.30', desc: 'RDA\u9999\u6e2f\u5b98\u65b9\u8ba4\u53ef\uff0c\u8fd0\u52a8\u5e45\u5ea6\u53ef\u7cbe\u7ec6\u8c03\u8282\uff0c\u9002\u5408\u4e0d\u540c\u6b8b\u969c\u7a0b\u5ea6\uff0c\u6709\u5b89\u5168\u5e26\u548c\u7d27\u6025\u505c\u6b62\u4fdd\u62a4\uff0c\u5df2\u5728\u9999\u6e2fRDA\u4f7f\u7528\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\u5eb7\u590d\u573a\u666f\u6838\u5fc3\u4f18\u52bf',
    advantages: [
      { title: '\u53ef\u8c03\u8282\u5f3a\u5ea6\uff0c\u9002\u914d\u4e0d\u540c\u969c\u788d\u7a0b\u5ea6', desc: '\u6b65\u6001\u901f\u5ea6\u548c\u5e45\u5ea6\u7cbe\u786e\u53ef\u63a7\uff0c\u4ece\u8f7b\u5fae\u5e73\u8861\u8bad\u7ec3\u5230\u8f83\u9ad8\u5f3a\u5ea6\u6838\u5fc3\u808c\u7fa4\u6fc0\u6d3b\uff0c\u6ee1\u8db3\u4e0d\u540c\u5eb7\u590d\u9636\u6bb5\u9700\u6c42\u3002' },
      { title: '\u65e0\u9700\u771f\u9a6c\uff0c\u96f6\u575a\u843d\u98ce\u9669', desc: '\u6d88\u9664\u4f20\u7edf\u9a6c\u672f\u6cbb\u7597\u7684\u6700\u5927\u5b89\u5168\u9690\u60a3\uff0c\u6cbb\u7597\u5e08\u53ef\u4e13\u6ce8\u4e8e\u60a3\u8005\u5eb7\u590d\u6548\u679c\u800c\u975e\u5b89\u5168\u63a7\u5236\u3002' },
      { title: 'RDA \u5b98\u65b9\u8ba4\u53ef', desc: '\u9999\u6e2fRDA\uff08Riding for the Disabled Association\uff09\u5b98\u65b9\u5408\u4f5c\u673a\u6784\uff0c\u6709\u5b8c\u6574\u7684\u4e34\u5e8a\u4f7f\u7528\u8bb0\u5f55\u548c\u75af\u6548\u6570\u636e\u652f\u6491\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u5eb7\u590d\u9a91\u672f\u534f\u4f1aRDA',
    caseBadge: '\u8ba4\u8bc1\u5408\u4f5c',
    caseTitle: '\u9999\u6e2fRDA \u2014 \u9a6c\u672f\u5eb7\u590d\u6cbb\u7597\u9879\u76ee',
    caseDesc: '\u9999\u6e2f\u6b8b\u969c\u9a91\u672f\u534f\u4f1a\u5c06\u6a21\u62df\u9a6c\u7528\u4e8e\u8fd0\u52a8\u969c\u788d\u548c\u81ea\u95ed\u75c7\u513f\u7ae5\u7684\u5eb7\u590d\u6cbb\u7597\u9879\u76ee\uff0cMS.30\u7684\u53ef\u8c03\u8282\u6027\u8ba9\u6cbb\u7597\u5e08\u80fd\u9488\u5bf9\u6bcf\u4f4d\u60a3\u8005\u5b9a\u5236\u8bad\u7ec3\u65b9\u6848\uff0c\u5e76\u83b7\u5f97RDA\u5b98\u65b9\u8ba4\u53ef\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd9\u5957\u65b9\u6848\u6700\u9002\u5408\u60a8',
    fits: [
      { title: '\u60a8\u8fd0\u8425\u5eb7\u590d\u4e2d\u5fc3\u6216\u7279\u6559\u5b66\u6821', desc: 'RDA\u8ba4\u8bc1\u4f7f\u7528\u6848\u4f8b\uff0c\u914d\u5957\u5b8c\u6574\u7684\u5eb7\u590d\u8bad\u7ec3\u534f\u8bae\uff0c\u6cbb\u7597\u5e08\u53ef\u96f6\u95e8\u69db\u4e0a\u624b\uff0c\u7cfb\u7edf\u8bb0\u5f55\u6bcf\u4f4d\u60a3\u8005\u7684\u8fdb\u5c55\u6570\u636e\u3002' },
      { title: '\u60a8\u9700\u8981\u4f4e\u98ce\u9669\u7684\u9a6c\u80cc\u4f53\u9a8c\u65b9\u6848', desc: '\u5b8c\u5168\u6d88\u9664\u575a\u9a6c\u98ce\u9669\uff0c\u9002\u5408\u8fd0\u52a8\u969c\u788d\u3001\u5e73\u8861\u969c\u788d\u3001\u8111\u6027\u9ebb\u75f9\u3001\u81ea\u95ed\u75c7\u8c31\u7cfb\u969c\u788d\u7b49\u591a\u79cd\u5eb7\u590d\u5bf9\u8c61\u3002' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u6a21\u62df\u9a6c\u7684\u5eb7\u590d\u6548\u679c\u6709\u4e34\u5e8a\u6570\u636e\u652f\u6301\u5417\uff1f', a: '\u9999\u6e2fRDA\u5728\u4f7f\u7528MS.30\u8fdb\u884c\u5eb7\u590d\u8bad\u7ec3\u540e\u8bb0\u5f55\u4e86\u60a3\u8005\u6838\u5fc3\u808c\u7fa4\u529b\u91cf\u3001\u5e73\u8861\u611f\u548c\u8fd0\u52a8\u534f\u8c03\u6027\u7684\u6539\u5584\u6570\u636e\u3002\u9a6c\u80cc\u8fd0\u52a8\u5bf9\u795e\u7ecf\u808c\u8089\u7cfb\u7edf\u7684\u523a\u6fc0\u5df2\u88ab\u5b66\u672f\u754c\u5e7f\u6cdb\u7814\u7a76\uff0c\u6a21\u62df\u9a6c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66f4\u5b89\u5168\u53ef\u63a7\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002' },
      { q: '\u6a21\u62df\u9a6c\u9002\u5408\u54ea\u4e9b\u7c7b\u578b\u7684\u5eb7\u590d\u5bf9\u8c61\uff1f', a: '\u5df2\u9a8c\u8bc1\u7684\u9002\u7528\u573a\u666f\u5305\u62ec\uff1a\u8fd0\u52a8\u969c\u788d\uff08\u8111\u6027\u9ebb\u75f9\u3001\u4e2d\u98ce\u540e\u9057\u75c7\uff09\u3001\u611f\u7edf\u5931\u8c03\u3001\u81ea\u95ed\u75c7\u8c31\u7cfb\u969c\u788d\uff08ASD\uff09\u3001\u8001\u5e74\u5e73\u8861\u8bad\u7ec3\u3002\u5efa\u8bae\u5728\u533b\u7597\u56e2\u961f\u8bc4\u4f30\u540e\u7eb3\u5165\u5eb7\u590d\u65b9\u6848\u3002' },
    ],
    ctaTitle: '\u4e3a\u60a8\u7684\u5eb7\u590d\u9879\u76ee\u5b9a\u5236\u65b9\u6848',
    ctaSub: '\u544a\u8bc9\u6211\u4eec\u60a3\u8005\u7c7b\u578b\u548c\u6cbb\u7597\u76ee\u6807\uff0c\u6211\u4eec\u63d0\u4f9b\u4e13\u5c5e\u5eb7\u590d\u8bad\u7ec3\u65b9\u6848\u548c\u914d\u7f6e\u5efa\u8bae',
    ctaBtn1: '\u83b7\u53d6\u5eb7\u590d\u65b9\u6848',
    ctaBtn2: '\u67e5\u770bRDA\u6848\u4f8b',
    viewDetail: '\u67e5\u770b\u8be6\u60c5 \u2192',
    viewCase: '\u67e5\u770b\u5b8c\u6574\u6848\u4f8b \u2192',
  },
  en: {
    label: 'Solutions',
    h1: ['Rehabilitation &', 'Equine-Assisted Therapy'],
    heroSub: 'Equine therapy is proven effective for movement disorders, autism, and trauma recovery. Simulators give more people safe access to the horseback experience without requiring a stable.',
    heroAlt: 'Hong Kong RDA rehabilitation equestrian training',
    recTitle: 'Recommended Configuration',
    products: [
      { tag: 'Top Choice for Rehab', name: 'Pony-MS.30', desc: 'Officially recognized by RDA Hong Kong. Precisely adjustable range of motion, suitable for various disability levels. Safety harness and emergency stop included. Already in use at Hong Kong RDA.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: 'Key Advantages for Rehabilitation',
    advantages: [
      { title: 'Adjustable Intensity for Any Disability Level', desc: 'Gait speed and amplitude are precisely controllable — from gentle balance training to higher-intensity core activation — meeting the needs of every rehabilitation stage.' },
      { title: 'No Real Horse — Zero Fall Risk', desc: 'Eliminates the greatest safety concern in traditional equine therapy, letting therapists focus entirely on patient recovery rather than safety control.' },
      { title: 'RDA Officially Recognized', desc: 'Official partner of Hong Kong RDA (Riding for the Disabled Association), with complete clinical usage records and outcome data.' },
    ],
    caseAlt: 'Hong Kong RDA Riding for the Disabled Association',
    caseBadge: 'Certified Partnership',
    caseTitle: 'Hong Kong RDA \u2014 Equine-Assisted Rehabilitation Program',
    caseDesc: 'The Hong Kong Riding for the Disabled Association uses the simulator for rehabilitation of children with movement disorders and autism. The MS.30\u2019s adjustability lets therapists create individualized plans, recognized by RDA officially.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: 'This Solution Is the Right Fit If\u2026',
    fits: [
      { title: 'You Operate a Rehab Center or Special-Needs School', desc: 'RDA-certified case study, complete rehabilitation protocol support, zero onboarding barrier for therapists, and per-patient progress tracking.' },
      { title: 'You Need a Low-Risk Horseback Experience', desc: 'Fully eliminates fall risk. Suitable for movement disorders, balance disorders, cerebral palsy, autism spectrum disorders, and more.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'Is there clinical data supporting the therapeutic benefits of the simulator?', a: 'Hong Kong RDA documented improvements in core muscle strength, balance, and motor coordination after using MS.30 for rehabilitation. The neurological stimulation of horseback motion is well-researched academically; the simulator provides a safer, more controllable implementation.' },
      { q: 'What types of rehabilitation patients is the simulator suitable for?', a: 'Validated use cases include: movement disorders (cerebral palsy, post-stroke), sensory processing issues, autism spectrum disorder (ASD), and elderly balance training. Medical team assessment is recommended before inclusion in a rehab plan.' },
    ],
    ctaTitle: 'Get a Custom Plan for Your Rehabilitation Program',
    ctaSub: 'Tell us the patient type and treatment goals — we will provide a dedicated rehabilitation training plan and configuration recommendation.',
    ctaBtn1: 'Get Rehab Proposal',
    ctaBtn2: 'View RDA Case',
    viewDetail: 'View Details \u2192',
    viewCase: 'View Full Case \u2192',
  },
  ja: {
    label: '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3',
    h1: ['\u30ea\u30cf\u30d3\u30ea\u30c6\u30fc\u30b7\u30e7\u30f3\u30fb', '\u9a6c\u8853\u30bb\u30e9\u30d4\u30fc'],
    heroSub: '\u9a6c\u8853\u30bb\u30e9\u30d4\u30fc\u306f\u904b\u52d5\u969c\u5bb3\u3001\u81ea\u9589\u75c7\u3001\u5916\u5986\u5f8c\u56de\u5fa9\u306b\u6709\u52b9\u3068\u8a3c\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u5b89\u5168\u306b\u99ac\u80cc\u4f53\u9a13\u3092\u63d0\u4f9b\u3002',
    heroAlt: '\u9999\u6e2fRDA\u30ea\u30cf\u30d3\u30ea\u30c6\u30fc\u30b7\u30e7\u30f3\u9a6c\u8853\u8a13\u7df4',
    recTitle: '\u63a8\u5968\u69cb\u6210',
    products: [
      { tag: '\u30ea\u30cf\u30d3\u30ea\u306e\u7b2c\u4e00\u9078\u629e', name: 'Pony-MS.30', desc: 'RDA\u9999\u6e2f\u516c\u8a8d\u3002\u52d5\u304d\u306e\u5e45\u3092\u7d30\u304b\u304f\u8abf\u7bc9\u53ef\u80fd\u3002\u69d8\u3005\u306a\u969c\u5bb3\u7a0b\u5ea6\u306b\u5bfe\u5fdc\u3002\u30cf\u30fc\u30cd\u30b9\u3068\u7dca\u6025\u505c\u6b62\u6a5f\u69cb\u5099\u3048\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\u30ea\u30cf\u30d3\u30ea\u73fe\u5834\u306e\u4e3b\u306a\u30e1\u30ea\u30c3\u30c8',
    advantages: [
      { title: '\u5f37\u5ea6\u8abf\u7bc9\u53ef\u80fd\uff0c\u3042\u3089\u3086\u308b\u969c\u5bb3\u5ea6\u306b\u5bfe\u5fdc', desc: '\u6b69\u884c\u901f\u5ea6\u3068\u632f\u5e45\u3092\u7cbe\u5bc6\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002\u8efd\u5fae\u306a\u30d0\u30e9\u30f3\u30b9\u8a13\u7df4\u304b\u3089\u9ad8\u5f37\u5ea6\u306a\u4f53\u5e79\u6fc0\u6d3b\u307e\u3067\u3001\u5404\u30ea\u30cf\u30d3\u30ea\u30c6\u30fc\u30b7\u30e7\u30f3\u6bb5\u968e\u306b\u5bfe\u5fdc\u3002' },
      { title: '\u672c\u7269\u306e\u9a6c\u4e0d\u8981\uff0c\u8ee2\u5012\u30ea\u30b9\u30af\u30bc\u30ed', desc: '\u4f1d\u7d71\u7684\u306a\u9a6c\u8853\u30bb\u30e9\u30d4\u30fc\u6700\u5927\u306e\u5b89\u5168\u30ea\u30b9\u30af\u3092\u6392\u9664\u3002\u30bb\u30e9\u30d4\u30b9\u30c8\u306f\u5b89\u5168\u7ba1\u7406\u3067\u306a\u304f\u56de\u5fa9\u306b\u96c6\u4e2d\u3067\u304d\u307e\u3059\u3002' },
      { title: 'RDA \u516c\u5f0f\u8a8d\u5b9a', desc: '\u9999\u6e2fRDA\uff08Riding for the Disabled Association\uff09\u516c\u5f0f\u9023\u643a\u3002\u5b8c\u5168\u306a\u81e8\u5e8a\u4f7f\u7528\u8a18\u9332\u3068\u52b9\u679c\u30c7\u30fc\u30bf\u3042\u308a\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u969c\u5bb3\u8005\u4e57\u99ac\u5354\u4f1aRDA',
    caseBadge: '\u8a8d\u5b9a\u9023\u643a',
    caseTitle: '\u9999\u6e2fRDA \u2014 \u9a6c\u8853\u30ea\u30cf\u30d3\u30ea\u30c6\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30b0\u30e9\u30e0',
    caseDesc: '\u9999\u6e2f\u969c\u5bb3\u8005\u4e57\u99ac\u5354\u4f1a\u304c\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3092\u904b\u52d5\u969c\u5bb3\u30fb\u81ea\u9589\u75c7\u306e\u5150\u7ae5\u306e\u30ea\u30cf\u30d3\u30ea\u306b\u6d3b\u7528\u3002MS.30\u306e\u8abf\u7bc9\u6027\u3067\u500b\u5225\u8a13\u7df4\u8a08\u753b\u3092\u4f5c\u6210\u3002RDA\u516c\u5f0f\u8a8d\u5b9a\u53d6\u5f97\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u6b21\u306e\u3088\u3046\u306a\u65b9\u306b\u6700\u9069\u3067\u3059',
    fits: [
      { title: '\u30ea\u30cf\u30d3\u30ea\u30bb\u30f3\u30bf\u30fc\u307e\u305f\u306f\u7279\u6b8a\u6559\u80b2\u5b66\u6821\u3092\u904b\u55b6\u3057\u3066\u3044\u308b', desc: 'RDA\u8a8d\u5b9a\u4e8b\u4f8b\u3001\u5b8c\u5099\u306a\u30ea\u30cf\u30d3\u30ea\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30d7\u30ed\u30c8\u30b3\u30eb\u3001\u30bb\u30e9\u30d4\u30b9\u30c8\u304c\u305d\u306e\u307e\u307e\u4f7f\u3048\u3001\u60a3\u8005\u3054\u3068\u306e\u9032\u6357\u8a18\u9332\u3002' },
      { title: '\u4f4e\u30ea\u30b9\u30af\u306a\u9a6c\u80cc\u4f53\u9a13\u304c\u5fc5\u8981', desc: '\u8ee2\u5012\u30ea\u30b9\u30af\u3092\u5b8c\u5168\u6392\u9664\u3002\u904b\u52d5\u969c\u5bb3\u30fb\u30d0\u30e9\u30f3\u30b9\u969c\u5bb3\u30fb\u8133\u6027\u9ebb\u75fa\u30fb\u81ea\u9589\u75c7\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u969c\u5bb3\u7b49\u5e45\u5e83\u3044\u5bfe\u8c61\u306b\u5bfe\u5fdc\u3002' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306e\u30ea\u30cf\u30d3\u30ea\u6548\u679c\u306b\u81e8\u5e8a\u30c7\u30fc\u30bf\u306f\u3042\u308a\u307e\u3059\u304b\uff1f', a: '\u9999\u6e2fRDA\u306fMS.30\u3092\u7528\u3044\u305f\u30ea\u30cf\u30d3\u30ea\u8a13\u7df4\u5f8c\u306b\u4f53\u5e79\u3001\u30d0\u30e9\u30f3\u30b9\u3001\u904b\u52d5\u5354\u8abf\u6027\u306e\u6539\u5584\u30c7\u30fc\u30bf\u3092\u8a18\u9332\u3057\u307e\u3057\u305f\u3002\u99ac\u80cc\u904b\u52d5\u306e\u795e\u7d4c\u6d3b\u6027\u5316\u52b9\u679c\u306f\u5b66\u8853\u754c\u3067\u5e83\u304f\u7814\u7a76\u3055\u308c\u3066\u3044\u307e\u3059\u3002' },
      { q: '\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u3069\u306e\u3088\u3046\u306a\u30ea\u30cf\u30d3\u30ea\u5bfe\u8c61\u8005\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u304b\uff1f', a: '\u691c\u8a3c\u6e08\u307f\u306e\u9069\u7528\u4f8b\uff1a\u904b\u52d5\u969c\u5bb3\uff08\u8133\u6027\u9ebb\u75fa\u30fb\u8133\u5352\u4e2d\u5f8c\u9057\u75c7\uff09\u3001\u611f\u899a\u7d71\u5408\u969c\u5bb3\u3001\u81ea\u9589\u75c7\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u969c\u5bb3\uff08ASD\uff09\u3001\u9ad8\u9f62\u8005\u306e\u30d0\u30e9\u30f3\u30b9\u8a13\u7df4\u3002\u533b\u7642\u30c1\u30fc\u30e0\u306e\u8a55\u4fa1\u5f8c\u306b\u5c0e\u5165\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u30ea\u30cf\u30d3\u30ea\u30d7\u30ed\u30b0\u30e9\u30e0\u5411\u3051\u30ab\u30b9\u30bf\u30e0\u30d7\u30e9\u30f3\u3092\u53d7\u3051\u53d6\u308b',
    ctaSub: '\u60a3\u8005\u306e\u7a2e\u985e\u3068\u6cbb\u7642\u76ee\u6a19\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u5c02\u7528\u30ea\u30cf\u30d3\u30ea\u8a13\u7df4\u30d7\u30e9\u30f3\u3068\u69cb\u6210\u306e\u63d0\u6848\u3092\u3044\u305f\u3057\u307e\u3059\u3002',
    ctaBtn1: '\u30ea\u30cf\u30d3\u30ea\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b',
    ctaBtn2: 'RDA\u4e8b\u4f8b\u3092\u898b\u308b',
    viewDetail: '\u8a73\u7d30\u3092\u898b\u308b \u2192',
    viewCase: '\u5c0e\u5165\u4e8b\u4f8b\u3092\u898b\u308b \u2192',
  },
  ko: {
    label: '\uc194\ub8e8\uc158',
    h1: ['\uc7ac\ud65c \uce58\ub8cc \ubc0f', '\ub9d0 \ubcf4\uc870 \uce58\ub8cc'],
    heroSub: '\ub9d0 \ubcf4\uc870 \uce58\ub8cc\ub294 \uc6b4\ub3d9 \uc7a5\uc560, \uc790\ud3d0\uc99d, \uc678\uc0c1 \ud6c8 \ud68c\ubcf5\uc5d0 \ud6a8\uacfc\uc801\uc784\uc774 \uc785\uc99d\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc2dc\ubbac\ub808\uc774\ud130\ub85c \ub354 \ub9ce\uc740 \uc0ac\ub78c\uc774 \uc548\uc804\ud558\uac8c \ub9d0 \ub4f1 \uccb4\ud5d8 \uac00\ub2a5.',
    heroAlt: '\ud64d\ucf69 RDA \uc7ac\ud65c \uc2b9\ub9c8 \ud6c8\ub828',
    recTitle: '\uad8c\uc7a5 \uad6c\uc131',
    products: [
      { tag: '\uc7ac\ud65c\uc5d0 \ucd5c\uc801', name: 'Pony-MS.30', desc: 'RDA \ud64d\ucf69 \uacf5\uc2dd \uc778\uc815. \uc6b4\ub3d9 \ubc94\uc704 \uc815\ubc00 \uc870\uc808 \uac00\ub2a5. \ub2e4\uc591\ud55c \uc7a5\uc560 \uc815\ub3c4\uc5d0 \uc801\ud569. \ud558\ub124\uc2a4\uc640 \ube44\uc0c1 \uc815\uc9c0 \uc7a5\uce58 \ud3ec\ud568.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\uc7ac\ud65c \ud604\uc7a5 \ud575\uc2ec \uc7a5\uc810',
    advantages: [
      { title: '\uac15\ub3c4 \uc870\uc808 \uac00\ub2a5, \ub2e4\uc591\ud55c \uc7a5\uc560 \uc815\ub3c4\uc5d0 \uc801\ud569', desc: '\ubcf4\ud589 \uc18d\ub3c4\uc640 \uc9c4\ud3ed\uc744 \uc815\ubc00\ud558\uac8c \uc81c\uc5b4. \uac00\ubcbc\uc6b4 \ubc38\ub7f0\uc2a4 \ud6c8\ub828\ubd80\ud130 \uace0\uac15\ub3c4 \ucf54\uc5b4 \uadfc\uc721 \ud65c\uc131\ud654\uae4c\uc9c0 \ubaa8\ub4e0 \uc7ac\ud65c \ub2e8\uacc4\uc5d0 \ub300\uc751.' },
      { title: '\uc2e4\ub9c8 \ubd88\ud544\uc694, \uc81c\ub85c \ub099\ub9c8 \uc704\ud5d8', desc: '\uc804\ud1b5\uc801\uc778 \uc2b9\ub9c8 \uce58\ub8cc\uc758 \uac00\uc7a5 \ud070 \uc548\uc804 \uc704\ud5d8 \uc81c\uac70. \uce58\ub8cc\uc0ac\uac00 \uc548\uc804 \ud1b5\uc81c\uac00 \uc544\ub2cc \ud658\uc790 \ud68c\ubcf5\uc5d0\ub9cc \uc9d1\uc911.' },
      { title: 'RDA \uacf5\uc2dd \uc778\uc815', desc: '\ud64d\ucf69 RDA(Riding for the Disabled Association) \uacf5\uc2dd \uc5f0\uacc4 \uae30\uad00. \uc644\uc804\ud55c \uc784\uc0c1 \uc0ac\uc6a9 \uae30\ub85d\uacfc \uce58\ub8cc \ub370\uc774\ud130 \ubcf4\uc720.' },
    ],
    caseAlt: '\ud64d\ucf69 \uc7a5\uc560\uc778 \uc2b9\ub9c8 \ud611\ud68c RDA',
    caseBadge: '\uc778\uc99d \ud611\ub825',
    caseTitle: '\ud64d\ucf69 RDA \u2014 \ub9d0 \ubcf4\uc870 \uc7ac\ud65c \uce58\ub8cc \ud504\ub85c\uadf8\ub7a8',
    caseDesc: '\ud64d\ucf69 \uc7a5\uc560\uc778 \uc2b9\ub9c8 \ud611\ud68c\uac00 \uc6b4\ub3d9 \uc7a5\uc560 \ubc0f \uc790\ud3d0\uc99d \uc544\ub3d9 \uc7ac\ud65c\uc5d0 \uc2dc\ubbac\ub808\uc774\ud130 \ud65c\uc6a9. MS.30\uc758 \uc870\uc808 \uae30\ub2a5\uc73c\ub85c \uac1c\ubcc4 \ud6c8\ub828 \uacc4\ud68d \uc218\ub9bd, RDA \uacf5\uc2dd \uc778\uc815 \ud655\ub4dd.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\ub2e4\uc74c\uc5d0 \ud574\ub2f9\ud558\uc2dc\uba74 \ucd5c\uc801\uc758 \uc120\ud0dd\uc785\ub2c8\ub2e4',
    fits: [
      { title: '\uc7ac\ud65c \uc13c\ud130\ub098 \ud2b9\uc218\ud559\uad50\ub97c \uc6b4\uc601\ud558\uc2e4 \ub54c', desc: 'RDA \uc778\uc99d \uc0ac\ub840, \uc644\uc804\ud55c \uc7ac\ud65c \ud6c8\ub828 \ud504\ub85c\ud1a0\ucf5c, \uce58\ub8cc\uc0ac \uc998\uc2dc \ud65c\uc6a9 \uac00\ub2a5, \ud658\uc790\ubcc4 \uc9c4\ub3c4 \uae30\ub85d.' },
      { title: '\uc800\uc704\ud5d8 \ub9d0 \ub4f1 \uccb4\ud5d8\uc774 \ud544\uc694\ud560 \ub54c', desc: '\ub099\ub9c8 \uc704\ud5d8 \uc644\uc804 \uc81c\uac70. \uc6b4\ub3d9 \uc7a5\uc560, \ubc38\ub7f0\uc2a4 \uc7a5\uc560, \ub1cc\uc131\ub9c8\ube44, \uc790\ud3d0\uc99d \uc2a4\ud399\ud2b8\ub7fc \uc7a5\uc560 \ub4f1 \ub2e4\uc591\ud55c \uc7ac\ud65c \ub300\uc0c1\uc5d0 \uc801\ud569.' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\uc2dc\ubbac\ub808\uc774\ud130\uc758 \uc7ac\ud65c \ud6a8\uacfc\uc5d0 \uc784\uc0c1 \ub370\uc774\ud130\uac00 \uc788\ub098\uc694?', a: '\ud64d\ucf69 RDA\uac00 MS.30 \uc7ac\ud65c \ud6c8\ub828 \ud6c4 \ucf54\uc5b4 \uadfc\uc721\ub825, \ubc38\ub7f0\uc2a4, \uc6b4\ub3d9 \ud611\uc870\uc131 \uac1c\uc120 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud588\uc2b5\ub2c8\ub2e4. \ub9d0 \ub4f1 \uc6b4\ub3d9\uc758 \uc2e0\uacbd \uadfc\uc721\uacc4 \uc790\uadf9 \ud6a8\uacfc\ub294 \ud559\uacc4\uc5d0\uc11c \uad11\ubc94\uc704\ud558\uac8c \uc5f0\uad6c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.' },
      { q: '\uc2dc\ubbac\ub808\uc774\ud130\uac00 \uc801\ud569\ud55c \uc7ac\ud65c \ub300\uc0c1\uc740?', a: '\uac80\uc99d\ub41c \uc801\uc6a9 \uc0ac\ub840: \uc6b4\ub3d9 \uc7a5\uc560(\ub1cc\uc131\ub9c8\ube44, \ub1cc\uc878\uc911 \ud6c4\uc720\uc99d), \uac10\uac01 \ud1b5\ud569 \uc7a5\uc560, \uc790\ud3d0\uc99d \uc2a4\ud399\ud2b8\ub7fc \uc7a5\uc560(ASD), \ub178\uc778 \ubc38\ub7f0\uc2a4 \ud6c8\ub828. \uc758\ub8cc\ud300 \ud3c9\uac00 \ud6c4 \uc7ac\ud65c \uacc4\ud68d \ud3ec\ud568 \uad8c\uc7a5.' },
    ],
    ctaTitle: '\uc7ac\ud65c \ud504\ub85c\uadf8\ub7a8\uc5d0 \ub9de\ub294 \ub9de\ucda4\ud615 \uacc4\ud68d \ubc1b\uae30',
    ctaSub: '\ud658\uc790 \uc720\ud615\uacfc \uce58\ub8cc \ubaa9\ud45c\ub97c \uc54c\ub824\uc8fc\uc138\uc694. \uc804\uc6a9 \uc7ac\ud65c \ud6c8\ub828 \uacc4\ud68d\uacfc \uad6c\uc131 \uad8c\uc7a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.',
    ctaBtn1: '\uc7ac\ud65c \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaBtn2: 'RDA \uc0ac\ub840 \ubcf4\uae30',
    viewDetail: '\uc0c1\uc138 \ubcf4\uae30 \u2192',
    viewCase: '\uc804\uccb4 \uc0ac\ub840 \ubcf4\uae30 \u2192',
  },
  es: {
    label: 'Soluciones',
    h1: ['Rehabilitaci\u00f3n y', 'Terapia Asistida con Caballos'],
    heroSub: 'La terapia ecuestre ha demostrado ser efectiva para trastornos del movimiento, autismo y recuperaci\u00f3n de traumas. Los simuladores ofrecen acceso seguro a la experiencia ecuestre sin necesidad de caballos.',
    heroAlt: 'Entrenamiento de rehabilitaci\u00f3n ecuestre RDA Hong Kong',
    recTitle: 'Configuraci\u00f3n Recomendada',
    products: [
      { tag: 'Primera Opci\u00f3n para Rehabilitaci\u00f3n', name: 'Pony-MS.30', desc: 'Reconocido oficialmente por RDA Hong Kong. Rango de movimiento ajustable con precisi\u00f3n. Apto para distintos grados de discapacidad. Arnes de seguridad y parada de emergencia.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: 'Ventajas Clave para la Rehabilitaci\u00f3n',
    advantages: [
      { title: 'Intensidad Ajustable para Cualquier Nivel de Discapacidad', desc: 'Velocidad de marcha y amplitud controladas con precisi\u00f3n. Desde entrenamiento suave de equilibrio hasta activaci\u00f3n de core de alta intensidad.' },
      { title: 'Sin Caballo Real \u2014 Cero Riesgo de Ca\u00edda', desc: 'Elimina el mayor riesgo de la terapia ecuestre tradicional, permitiendo al terapeuta enfocarse en la recuperaci\u00f3n del paciente.' },
      { title: 'Reconocido Oficialmente por RDA', desc: 'Socio oficial de RDA Hong Kong (Riding for the Disabled Association), con registros cl\u00ednicos completos y datos de resultados.' },
    ],
    caseAlt: 'Hong Kong RDA asociaci\u00f3n de equitaci\u00f3n para discapacitados',
    caseBadge: 'Colaboraci\u00f3n Certificada',
    caseTitle: 'Hong Kong RDA \u2014 Programa de Rehabilitaci\u00f3n Ecuestre',
    caseDesc: 'La Asociaci\u00f3n de Equitaci\u00f3n para Personas con Discapacidad de Hong Kong usa el simulador para rehabilitar ni\u00f1os con trastornos del movimiento y autismo. La flexibilidad del MS.30 permite planes individualizados. Reconocido oficialmente por RDA.',
    fitsLabel: 'ESTA SOLUCI\u00d3N ES PARA TI SI\u2026',
    fitsTitle: 'Esta Soluci\u00f3n Es Ideal Si\u2026',
    fits: [
      { title: 'Operas un Centro de Rehabilitaci\u00f3n o Escuela Especial', desc: 'Caso de estudio certificado por RDA, protocolo de rehabilitaci\u00f3n completo, sin curva de aprendizaje para terapeutas, seguimiento del progreso de cada paciente.' },
      { title: 'Necesitas una Experiencia Ecuestre de Bajo Riesgo', desc: 'Riesgo de ca\u00edda completamente eliminado. Apto para trastornos del movimiento, equilibrio, par\u00e1lisis cerebral, TEA y m\u00e1s.' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfExisten datos cl\u00ednicos que respalden los beneficios terap\u00e9uticos del simulador?', a: 'RDA Hong Kong document\u00f3 mejoras en fuerza del core, equilibrio y coordinaci\u00f3n motora tras el uso del MS.30. La estimulaci\u00f3n neurol\u00f3gica del movimiento ecuestre est\u00e1 ampliamente investigada; el simulador proporciona una implementaci\u00f3n m\u00e1s segura y controlable.' },
      { q: '\u00bfPara qu\u00e9 tipos de pacientes es adecuado el simulador?', a: 'Casos validados: trastornos del movimiento (par\u00e1lisis cerebral, secuelas de ictus), problemas de procesamiento sensorial, TEA, entrenamiento de equilibrio en adultos mayores. Se recomienda la evaluaci\u00f3n del equipo m\u00e9dico.' },
    ],
    ctaTitle: 'Obtener un Plan Personalizado para Tu Programa de Rehabilitaci\u00f3n',
    ctaSub: 'D\u00ednos el tipo de paciente y los objetivos terap\u00e9uticos. Proporcionaremos un plan de entrenamiento de rehabilitaci\u00f3n especializado.',
    ctaBtn1: 'Obtener Propuesta de Rehabilitaci\u00f3n',
    ctaBtn2: 'Ver Caso RDA',
    viewDetail: 'Ver Detalles \u2192',
    viewCase: 'Ver Caso Completo \u2192',
  },
  de: {
    label: 'L\u00f6sungen',
    h1: ['Rehabilitation &', 'Pferdegest\u00fctzte Therapie'],
    heroSub: 'Reittherapie ist nachweislich wirksam bei Bewegungsst\u00f6rungen, Autismus und Traumafolgen. Simulatoren erm\u00f6glichen sicheren Zugang zum Reiterlebnis ohne echte Pferde.',
    heroAlt: 'Hongkong RDA Rehabilitations-Reittraining',
    recTitle: 'Empfohlene Konfiguration',
    products: [
      { tag: 'Erste Wahl f\u00fcr Reha', name: 'Pony-MS.30', desc: 'Offiziell anerkannt von RDA Hongkong. Pr\u00e4zise einstellbarer Bewegungsumfang. Geeignet f\u00fcr verschiedene Behinderungsgrade. Sicherheitsgurt und Notaus inklusive.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: 'Wichtigste Vorteile f\u00fcr die Rehabilitation',
    advantages: [
      { title: 'Einstellbare Intensit\u00e4t f\u00fcr jeden Behinderungsgrad', desc: 'Ganggeschwindigkeit und Amplitude pr\u00e4zise steuerbar. Von leichtem Gleichgewichtstraining bis zur hochintensiven Kernmuskelaktivierung.' },
      { title: 'Kein echtes Pferd \u2014 Kein Sturzrisiko', desc: 'Eliminiert das gr\u00f6\u00dfte Sicherheitsrisiko der klassischen Reittherapie. Therapeuten k\u00f6nnen sich vollst\u00e4ndig auf die Genesung konzentrieren.' },
      { title: 'Offiziell von RDA anerkannt', desc: 'Offizieller Partner von RDA Hongkong (Riding for the Disabled Association) mit vollst\u00e4ndigen klinischen Nutzungsdaten und Ergebnisdokumentation.' },
    ],
    caseAlt: 'Hongkong RDA Vereinigung f\u00fcr Behindertenreiten',
    caseBadge: 'Zertifizierte Partnerschaft',
    caseTitle: 'Hongkong RDA \u2014 Programm zur Pferdetherapie',
    caseDesc: 'Die Hongkonger Vereinigung f\u00fcr Behindertenreiten setzt den Simulator f\u00fcr die Rehabilitation von Kindern mit Bewegungsst\u00f6rungen und Autismus ein. Die Einstellbarkeit des MS.30 erm\u00f6glicht individualisierte Pl\u00e4ne. Offiziell von RDA anerkannt.',
    fitsLabel: 'DIESE L\u00d6SUNG IST F\u00dcR SIE, WENN\u2026',
    fitsTitle: 'Diese L\u00f6sung Passt Zu Ihnen, Wenn\u2026',
    fits: [
      { title: 'Sie ein Reha-Zentrum oder eine F\u00f6rderschule betreiben', desc: 'RDA-zertifizierter Anwendungsfall, vollst\u00e4ndiges Rehabilitationsprotokoll, sofort einsatzbereit f\u00fcr Therapeuten, Fortschrittsverfolgung je Patient.' },
      { title: 'Sie ein risikoarmes Reiterlebnis ben\u00f6tigen', desc: 'Sturzrisiko vollst\u00e4ndig eliminiert. Geeignet f\u00fcr Bewegungsst\u00f6rungen, Gleichgewichtsst\u00f6rungen, Zerebralparese, Autismus-Spektrum-St\u00f6rungen und mehr.' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'Gibt es klinische Daten zur therapeutischen Wirksamkeit des Simulators?', a: 'RDA Hongkong dokumentierte nach dem Einsatz des MS.30 Verbesserungen bei Kernmuskelkraft, Balance und motorischer Koordination. Die neurologische Stimulation durch Reitbewegungen ist akademisch gut untersucht.' },
      { q: 'F\u00fcr welche Patientengruppen ist der Simulator geeignet?', a: 'Validierte Einsatzf\u00e4lle: Bewegungsst\u00f6rungen (Zerebralparese, Schlaganfall-Folgen), Sensorische Verarbeitungsst\u00f6rungen, Autismus-Spektrum-St\u00f6rung (ASD), \u00e4ltere Menschen Gleichgewichtstraining. Medizinische Teambeurteilung wird empfohlen.' },
    ],
    ctaTitle: 'Individuellen Plan f\u00fcr Ihr Rehabilitationsprogramm Erhalten',
    ctaSub: 'Teilen Sie uns Patiententyp und Therapieziele mit. Wir erstellen einen spezialisierten Rehabilitationsplan.',
    ctaBtn1: 'Rehabilitationsangebot Erhalten',
    ctaBtn2: 'RDA-Fall Anzeigen',
    viewDetail: 'Details Anzeigen \u2192',
    viewCase: 'Vollst\u00e4ndigen Fall Anzeigen \u2192',
  },
  ar: {
    label: '\u062d\u0644\u0648\u0644',
    h1: ['\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0623\u0647\u064a\u0644 \u0648', '\u0627\u0644\u0639\u0644\u0627\u062c \u0628\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u062e\u064a\u0648\u0644'],
    heroSub: '\u062b\u0628\u062a \u0627\u0644\u0639\u0644\u0627\u062c \u0628\u0627\u0644\u062e\u064a\u0648\u0644 \u0641\u0639\u0627\u0644\u064a\u062a\u0647 \u0644\u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0627\u0644\u062d\u0631\u0643\u0629 \u0648\u0627\u0644\u062a\u0648\u062d\u062f \u0648\u0627\u0644\u062a\u0639\u0627\u0641\u064a. \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u064a\u062a\u064a\u062d \u0648\u0635\u0648\u0644\u0627\u064b \u0622\u0645\u0646\u064b\u0627 \u0644\u062a\u062c\u0631\u0628\u0629 \u0638\u0647\u0631 \u0627\u0644\u062e\u064a\u0644.',
    heroAlt: '\u062a\u062f\u0631\u064a\u0628 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0623\u0647\u064a\u0644 RDA \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a',
    recTitle: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647',
    products: [
      { tag: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u062a\u0623\u0647\u064a\u0644', name: 'Pony-MS.30', desc: '\u0645\u0639\u062a\u0645\u062f \u0631\u0633\u0645\u064a\u064b\u0627 \u0645\u0646 RDA \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a. \u0646\u0637\u0627\u0642 \u062d\u0631\u0643\u0629 \u0642\u0627\u0628\u0644 \u0644\u0644\u0636\u0628\u0637 \u0628\u062f\u0642\u0629. \u064a\u0646\u0627\u0633\u0628 \u062f\u0631\u062c\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u0645\u0646 \u0627\u0644\u0625\u0639\u0627\u0642\u0629. \u062d\u0632\u0627\u0645 \u0623\u0645\u0627\u0646 \u0648\u0625\u064a\u0642\u0627\u0641 \u0637\u0627\u0631\u0626.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\u0645\u0632\u0627\u064a\u0627 \u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0623\u0647\u064a\u0644',
    advantages: [
      { title: '\u0634\u062f\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0639\u062f\u064a\u0644 \u0644\u0623\u064a \u062f\u0631\u062c\u0629 \u0625\u0639\u0627\u0642\u0629', desc: '\u0633\u0631\u0639\u0629 \u0627\u0644\u062e\u0637\u0648\u0629 \u0648\u0627\u0644\u0633\u0639\u0629 \u062a\u062d\u062a \u0633\u064a\u0637\u0631\u0629 \u062f\u0642\u064a\u0642\u0629. \u0645\u0646 \u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0627\u0644\u062e\u0641\u064a\u0641 \u0625\u0644\u0649 \u062a\u0646\u0634\u064a\u0637 \u0639\u0636\u0644\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633 \u0639\u0627\u0644\u064a \u0627\u0644\u0634\u062f\u0629.' },
      { title: '\u0628\u062f\u0648\u0646 \u062e\u064a\u0648\u0644 \u062d\u0642\u064a\u0642\u064a\u0629 \u2014 \u0635\u0641\u0631 \u0645\u062e\u0627\u0637\u0631 \u0633\u0642\u0648\u0637', desc: '\u064a\u0644\u063a\u064a \u0623\u0643\u0628\u0631 \u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a\u0628\u0627\u0644\u062e\u064a\u0648\u0644. \u064a\u0633\u062a\u0637\u064a\u0639 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0648\u0646 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u062a\u0639\u0627\u0641\u064a \u0627\u0644\u0645\u0631\u064a\u0636.' },
      { title: '\u0645\u0639\u062a\u0645\u062f \u0631\u0633\u0645\u064a\u064b\u0627 \u0645\u0646 RDA', desc: '\u0634\u0631\u064a\u0643 \u0631\u0633\u0645\u064a \u0644\u0640RDA \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u0645\u0639 \u0633\u062c\u0644\u0627\u062a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0633\u0631\u064a\u0631\u064a\u0629 \u0643\u0627\u0645\u0644\u0629 \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0646\u062a\u0627\u0626\u062c \u0645\u0648\u062b\u0642\u0629.' },
    ],
    caseAlt: '\u062c\u0645\u0639\u064a\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0644\u0644\u0645\u0639\u0627\u0642\u064a\u0646 \u0641\u064a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a RDA',
    caseBadge: '\u0634\u0631\u0627\u0643\u0629 \u0645\u0639\u062a\u0645\u062f\u0629',
    caseTitle: '\u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a RDA \u2014 \u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0639\u0644\u0627\u062c \u0628\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u062e\u064a\u0648\u0644',
    caseDesc: '\u062a\u0633\u062a\u062e\u062f\u0645 \u062c\u0645\u0639\u064a\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0644\u0644\u0645\u0639\u0627\u0642\u064a\u0646 \u0641\u064a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0644\u0625\u0639\u0627\u062f\u0629 \u062a\u0623\u0647\u064a\u0644 \u0627\u0644\u0623\u0637\u0641\u0627\u0644. \u0645\u0631\u0648\u0646\u0629 MS.30 \u062a\u062a\u064a\u062d \u062e\u0637\u0637\u064b\u0627 \u0641\u0631\u062f\u064a\u0629\u060c \u0645\u0639\u062a\u0645\u062f\u0629 \u0631\u0633\u0645\u064a\u064b\u0627 \u0645\u0646 RDA.',
    fitsLabel: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0625\u0630\u0627\u2026',
    fitsTitle: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0627\u0644\u0623\u0646\u0633\u0628 \u0625\u0630\u0627\u2026',
    fits: [
      { title: '\u062a\u062f\u064a\u0631 \u0645\u0631\u0643\u0632 \u062a\u0623\u0647\u064a\u0644 \u0623\u0648 \u0645\u062f\u0631\u0633\u0629 \u0630\u0648\u064a \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629', desc: '\u062d\u0627\u0644\u0629 \u0645\u0639\u062a\u0645\u062f\u0629 \u0645\u0646 RDA\u060c \u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644 \u062a\u0623\u0647\u064a\u0644 \u0643\u0627\u0645\u0644\u060c \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0641\u0648\u0631\u064a \u0644\u0644\u0645\u0639\u0627\u0644\u062c\u064a\u0646\u060c \u062a\u062a\u0628\u0639 \u062a\u0642\u062f\u0645 \u0643\u0644 \u0645\u0631\u064a\u0636.' },
      { title: '\u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u062a\u062c\u0631\u0628\u0629 \u0641\u0631\u0648\u0633\u064a\u0629 \u0645\u0646\u062e\u0641\u0636\u0629 \u0627\u0644\u0645\u062e\u0627\u0637\u0631', desc: '\u0635\u0641\u0631 \u0645\u062e\u0627\u0637\u0631 \u0633\u0642\u0648\u0637 \u062a\u0645\u0627\u0645\u064b\u0627. \u0645\u0646\u0627\u0633\u0628 \u0644\u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0627\u0644\u062d\u0631\u0643\u0629\u060c \u0627\u0636\u0637\u0631\u0627\u0628 \u0627\u0644\u062a\u0648\u0627\u0632\u0646\u060c \u0627\u0644\u0634\u0644\u0644 \u0627\u0644\u062f\u0645\u0627\u063a\u064a\u060c \u0637\u064a\u0641 \u0627\u0644\u062a\u0648\u062d\u062f\u060c \u0648\u063a\u064a\u0631\u0647\u0627.' },
    ],
    faqTitle: '\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0647\u0644 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a \u0633\u0631\u064a\u0631\u064a\u0629 \u062a\u062f\u0639\u0645 \u0641\u0648\u0627\u0626\u062f \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0627\u0644\u0639\u0644\u0627\u062c\u064a\u0629\u061f', a: 'RDA \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u0648\u062b\u0642\u062a \u062a\u062d\u0633\u064a\u0646\u0627\u062a \u0641\u064a \u0642\u0648\u0629 \u0639\u0636\u0644\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u060c \u0627\u0644\u062a\u0648\u0627\u0632\u0646\u060c \u0648\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u062d\u0631\u0643\u064a. \u062a\u0623\u062b\u064a\u0631 \u062d\u0631\u0643\u0629 \u0638\u0647\u0631 \u0627\u0644\u062e\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u062c\u0647\u0627\u0632 \u0627\u0644\u0639\u0635\u0628\u064a \u0645\u062f\u0631\u0648\u0633 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u064b\u0627.' },
      { q: '\u0645\u0627 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0645\u062d\u0627\u0643\u064a\u061f', a: '\u062d\u0627\u0644\u0627\u062a \u0645\u062a\u062d\u0642\u0642 \u0645\u0646\u0647\u0627: \u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0627\u0644\u062d\u0631\u0643\u0629\u060c \u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u062a\u0643\u0627\u0645\u0644 \u0627\u0644\u062d\u0633\u064a\u060c \u0637\u064a\u0641 \u0627\u0644\u062a\u0648\u062d\u062f (ASD)\u060c \u062a\u062f\u0631\u064a\u0628 \u062a\u0648\u0627\u0632\u0646 \u0643\u0628\u0627\u0631 \u0627\u0644\u0633\u0646. \u064a\u064f\u0646\u0635\u062d \u0628\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0637\u0628\u064a \u0623\u0648\u0644\u0627\u064b.' },
    ],
    ctaTitle: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u062a\u0623\u0647\u064a\u0644',
    ctaSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0646\u0648\u0639 \u0627\u0644\u0645\u0631\u064a\u0636 \u0648\u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u0639\u0644\u0627\u062c\u064a\u0629. \u0633\u0646\u0642\u062f\u0645 \u062e\u0637\u0629 \u062a\u062f\u0631\u064a\u0628 \u062a\u0623\u0647\u064a\u0644 \u0645\u062e\u0635\u0635\u0629.',
    ctaBtn1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0627\u0644\u062a\u0623\u0647\u064a\u0644',
    ctaBtn2: '\u0639\u0631\u0636 \u062d\u0627\u0644\u0629 RDA',
    viewDetail: '\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2192',
    viewCase: '\u0639\u0631\u0636 \u0627\u0644\u062d\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629 \u2192',
  },
};

const STATIC = {
  heroImg: '/images/case-rda.png',
  caseImg: '/images/case-rda.png',
  caseImgPosition: 'center center',
  caseLink: '/cases#rda',
  ctaBtn2Href: '/cases#rda',
  jsonld: { name: 'Rehabilitation & Equine-Assisted Therapy Solution', url: 'https://www.equestrian-simulators.com/solutions/rehab' },
};

export default function SolutionPage() {
  const locale = useLocale() as LocaleKey;
  const d = i18n[locale] ?? i18n.en;
  const isRTL = locale === 'ar';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ paddingTop: '0', background: '#fff', minHeight: '100vh' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": STATIC.jsonld.name, "provider": { "@type": "Organization", "name": "\u5e7f\u4e1c\u63a2\u6708\u6559\u80b2\u8bbe\u5907\u6709\u9650\u516c\u53f8", "alternateName": "\u6a21\u62df\u9a6c\u00ae" }, "url": STATIC.jsonld.url }) }} />

      {/* Hero */}
      <div id="solution-hero" style={{ position: 'relative', width: '100%', background: '#0A1E3F', marginTop: '80px' }}>
        <img src={STATIC.heroImg} alt={d.heroAlt} style={{ width: '100%', height: 'auto', display: 'block' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(10,18,35,0.88) 0%, transparent 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: '3% 5% 5%' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>{d.label}</div>
          <h1 style={{ fontSize: 'clamp(28px,3.5vw,52px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '12px' }}>{d.h1[0]}<br />{d.h1[1]}</h1>
          <p style={{ fontSize: 'clamp(13px,1.2vw,17px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '480px' }}>{d.heroSub}</p>
        </div>
      </div>

      {/* 推荐配置 */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 40px 60px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0A1E3F', marginBottom: '32px', textAlign: 'center' }}>{d.recTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {d.products.map((p, i) => (
            <div key={i} style={{ background: '#F5F0E8', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid #E0D8C8' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C' }}>{p.tag}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1E3F' }}>{p.name}</h3>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
              <Link href={p.href} style={{ display: 'inline-block', padding: '10px 20px', background: '#0A1E3F', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' }}>{d.viewDetail}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* 核心优势 */}
      <div style={{ padding: '60px 40px', background: '#F5F0E8' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0A1E3F', textAlign: 'center', marginBottom: '40px' }}>{d.advTitle}</h2>
        <div id="solution-adv-grid" style={{ display: 'grid', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {d.advantages.map((a, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #E0D8C8' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0A1E3F', marginBottom: '6px' }}>{a.title}</h4>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.7 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 参考案例 */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0A1E3F', marginBottom: '24px', textAlign: 'center' }}>{d.caseBadge}</h2>
        <div id="solution-case-grid" style={{ display: 'grid', background: '#F5F0E8', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E0D8C8' }}>
          <img src={STATIC.caseImg} alt={d.caseAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: STATIC.caseImgPosition, minHeight: '200px', display: 'block' }} />
          <div style={{ padding: '32px' }}>
            <span style={{ display: 'inline-block', padding: '4px 10px', background: '#0A1E3F', color: '#fff', borderRadius: '20px', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>{d.caseBadge}</span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0A1E3F', marginBottom: '8px' }}>{d.caseTitle}</h3>
            <p style={{ fontSize: '14px', color: '#1C2333', lineHeight: 1.7, marginBottom: '16px' }}>{d.caseDesc}</p>
            <Link href={STATIC.caseLink} style={{ fontSize: '13px', fontWeight: 600, color: '#C9A84C', textDecoration: 'none' }}>{d.viewCase}</Link>
          </div>
        </div>
      </div>

      {/* 适合您如果 */}
      <div style={{ padding: '60px 6%', background: '#F5F0E8' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', color: '#C9A84C', marginBottom: '12px', textAlign: 'center' }}>{d.fitsLabel}</div>
          <h2 style={{ fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, color: '#0A1E3F', textAlign: 'center', marginBottom: '36px' }}>{d.fitsTitle}</h2>
          <div id="solution-fits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {d.fits.map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '24px', borderLeft: isRTL ? 'none' : '3px solid #C9A84C', borderRight: isRTL ? '3px solid #C9A84C' : 'none' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0A1E3F', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ fontSize: '13px', color: '#5A6478', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '60px 6%', background: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, color: '#0A1E3F', marginBottom: '40px' }}>{d.faqTitle}</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {d.faqs.map((f, i) => (
            <div key={i} style={{ background: '#F5F0E8', borderRadius: '8px', border: '1px solid #E0D8C8', overflow: 'hidden' }}>
              <div onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: '18px 24px', fontSize: '15px', fontWeight: 600, color: '#1C2333', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{f.q}</span>
                <span style={{ fontSize: '20px', color: '#C9A84C', fontWeight: 300, flexShrink: 0, marginLeft: '16px' }}>{openFaq === i ? '\u2212' : '+'}</span>
              </div>
              {openFaq === i && <p style={{ padding: '0 24px 18px', fontSize: '14px', color: '#5A6478', lineHeight: 1.75, margin: 0 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#0A1E3F', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{d.ctaTitle}</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>{d.ctaSub}</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ padding: '12px 28px', background: '#C9A84C', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>{d.ctaBtn1}</Link>
          <Link href={STATIC.ctaBtn2Href} style={{ padding: '12px 28px', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>{d.ctaBtn2}</Link>
        </div>
      </div>
    </main>
  );
}
