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
    h1: ['\u8d5b\u9a6c', '\u9a91\u5e08\u8bad\u7ec3'],
    heroSub: '\u9a91\u5e08\u8bad\u7ec3\u6210\u672c\u9ad8\u3001\u98ce\u9669\u5927\uff0c\u5982\u4f55\u5728\u4e0d\u6d88\u8017\u8d5b\u9a6c\u7684\u60c5\u51b5\u4e0b\u9ad8\u9891\u8bad\u7ec3\u4f53\u80fd\u548c\u9a91\u59ff\uff1f\u6c14\u538b\u63a8\u6d6a\u611f\u5e94\u6a21\u62df\u771f\u5b9e\u8d5b\u9a6c\u8282\u5f8b\u3002',
    heroAlt: '\u8d5b\u9a6c\u9a91\u5e08\u4e13\u4e1a\u8bad\u7ec3\u4e2d\u5fc3',
    recTitle: '\u63a8\u8350\u914d\u7f6e',
    products: [
      { tag: '\u9a91\u5e08\u9996\u9009', name: 'Horse-MS.30P', desc: '6\u8f74\u8fd0\u52a8\u5e73\u53f0\uff0c\u4e13\u4e1a\u4e09\u9879\u8d5b\u7ea7\u522b\uff0cAI\u5b9e\u65f6\u7ea0\u59ff\uff0c\u9ad8\u9891\u91cd\u590d\u8bad\u7ec3\u4f53\u80fd\u548c\u5750\u59ff\uff0cHKJC\u8ba4\u53ef\u4f9b\u5e94\u5546\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\u9a91\u5e08\u4e13\u8bad', name: 'Racehorse-MS.20', desc: '\u6c14\u538b\u63a8\u6d6a\u611f\u5e94\u7cfb\u7edf\u8bc6\u522b\u9a91\u5e08\u5939\u817f\u529b\u5ea6\uff0c\u7ebf\u6027\u89e6\u53d1\u52a0\u901f\u53cd\u9988\uff0cWalk/Canter/Gallop\u4e09\u6b65\u6001\uff0cMonkey Style\u9a91\u59ff\u8bbe\u8ba1\u3002', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: '\u8d5b\u9a6c\u8bad\u7ec3\u6838\u5fc3\u4f18\u52bf',
    advantages: [
      { title: '\u9ad8\u9891\u91cd\u590d\uff0c\u4e0d\u6d88\u8017\u8d5b\u9a6c', desc: '\u9a91\u5e08\u53ef\u5728\u4e0d\u4e0a\u8d5b\u9a6c\u7684\u60c5\u51b5\u4e0b\u6bcf\u65e5\u91cd\u590d\u8bad\u7ec3\u5e73\u8861\u3001\u6838\u5fc3\u808c\u7fa4\u548c\u624b\u611f\u7ec6\u8155\u5ea6\uff0c\u4fdd\u62a4\u8d5b\u9a6c\u7cbe\u529b\u7528\u4e8e\u6b63\u5f0f\u6bd4\u8d5b\u3002' },
      { title: '\u6c14\u538b\u611f\u5e94\u6a21\u62df\u63a8\u6d6a\u4f53\u611f', desc: '\u8179\u90e8\u5de5\u4e1a\u7ea7\u6c14\u538b\u4f20\u611f\u5668\u8bc6\u522b\u9a91\u5e08\u5939\u817f\u4fe1\u53f7\uff0c\u6a21\u62df\u771f\u5b9e\u8d5b\u9a6c\u5bf9\u6276\u52a9\u7684\u7075\u654f\u54cd\u5e94\uff0c\u8fd8\u539f\u6bd4\u8d5b\u4e2d\u7684\u63a8\u6d6a\u8282\u5f8b\u3002' },
      { title: 'HKJC \u8ba4\u53ef\u4f9b\u5e94\u5546', desc: '\u9999\u6e2f\u8d5b\u9a6c\u4f1aMS.30P\u8ba4\u53ef\u4f9b\u5e94\u5546\uff0c\u62e5\u6709\u5b8c\u6574\u7684\u9a91\u5e08\u8bad\u7ec3\u4f7f\u7528\u8bb0\u5f55\u548cHKJC+PSI\u673a\u6784\u80cc\u4e66\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a\u9a91\u5e08\u8bad\u7ec3',
    caseBadge: '\u8ba4\u8bc1\u5408\u4f5c',
    caseTitle: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a \u2014 \u9a91\u5e08\u4f53\u80fd\u4e0e\u5750\u59ff\u8bad\u7ec3\u7cfb\u7edf',
    caseDesc: 'HKJC\u4f7f\u7528MS.30P\u4f5c\u4e3a\u9a91\u5e08\u65e5\u5e38\u4f53\u80fd\u7ef4\u6301\u548c\u8d5b\u524d\u5750\u59ff\u8c03\u6574\u7684\u6838\u5fc3\u8bad\u7ec3\u5de5\u5177\uff0c\u5168\u5e74\u65e0\u4f11\u8fd0\u884c\uff0c\u6df1\u53d7\u804c\u4e1a\u9a91\u5e08\u8ba4\u53ef\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd9\u5957\u65b9\u6848\u6700\u9002\u5408\u60a8',
    fits: [
      { title: '\u60a8\u8fd0\u8425\u8d5b\u9a6c\u8bad\u7ec3\u4e2d\u5fc3\u6216\u8d5b\u9a6c\u573a', desc: '\u9ad8\u9891\u8bad\u7ec3+PSI\u6570\u636e\u76d1\u63a7\uff0c\u4e0d\u6d88\u8017\u8d5b\u9a6c\uff0c\u9a91\u5e08\u4f53\u80fd\u548c\u5750\u59ff\u91cf\u5316\u63d0\u5347\uff0cHKJC\u8ba4\u53ef\u7684\u4e13\u4e1a\u914d\u7f6e\u65b9\u6848\u3002' },
      { title: '\u60a8\u9700\u8981\u9a91\u5e08\u65e5\u5e38\u4f53\u80fd\u8bad\u7ec3\u5de5\u5177', desc: '\u6bcf\u65e5\u53ef\u670d\u52a1\u591a\u540d\u9a91\u5e08\uff0c\u66ff\u4ee3\u771f\u9a6c\u7684\u65e5\u5e38\u4f8b\u884c\u8bad\u7ec3\uff0c\u5c06\u73cd\u8d35\u8d5b\u9a6c\u65f6\u95f4\u7559\u7ed9\u6700\u9ad8\u4ef7\u5024\u7684\u6bd4\u8d5b\u548c\u91cd\u70b9\u6280\u672f\u8bfe\u3002' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u9a91\u5e08\u4f7f\u7528\u6a21\u62df\u5668\u80fd\u83b7\u5f97\u548c\u771f\u9a6c\u76f8\u4f3c\u7684\u4f53\u611f\u5417\uff1f', a: 'MS.20\u7684\u6c14\u538b\u63a8\u6d6a\u611f\u5e94\u7cfb\u7edf\u4e13\u4e3a\u6a21\u62df\u8d5b\u9a6c\u5bf9\u9a91\u5e08\u6276\u52a9\u7684\u53cd\u9988\u800c\u8bbe\u8ba1\uff0c\u80fd\u8bc6\u522b\u5939\u817f\u4fe1\u53f7\u5e76\u7ebf\u6027\u89e6\u53d1\u52a0\u901f\u54cd\u5e94\uff0c\u5728Monkey Style\u9a91\u59ff\u4e0b\u63a5\u8fd1\u771f\u5b9e\u8d5b\u9a6c\u4f53\u611f\u3002MS.30P\u5219\u66f4\u805a\u7126\u4e8e\u5750\u59ff\u5e73\u8861\u548c\u6838\u5fc3\u808c\u7fa4\u7684\u7cbe\u786e\u8bad\u7ec3\u3002\u4e24\u6b3e\u5404\u6709\u4fa7\u91cd\uff0c\u53ef\u642d\u914d\u4f7f\u7528\u3002' },
      { q: '\u6a21\u62df\u5668\u9002\u5408\u54ea\u4e2a\u7ea7\u522b\u7684\u9a91\u5e08\u4f7f\u7528\uff1f', a: 'MS.30P\u9002\u5408\u4ece\u521d\u7ea7\u5230\u804c\u4e1a\u7ea7\u522b\u7684\u9a6c\u573a\u9a6c\u672f\u548c\u8d8a\u91ce\u9a91\u624b\uff0cMS.20\u4e13\u4e3a\u8d5b\u9a6c\u9a91\u5e08\u8bbe\u8ba1\uff0c\u9002\u5408\u6709\u4e00\u5b9a\u57fa\u7840\u7684\u9a91\u5e08\u8fdb\u884c\u4e13\u9879\u4f53\u80fd\u548c\u63a8\u6d6a\u8bad\u7ec3\u3002\u6211\u4eec\u4e5f\u4e3a\u521d\u7ea7\u9a91\u624b\u63d0\u4f9b\u5b89\u5168\u5165\u95e8\u65b9\u6848\u3002' },
    ],
    ctaTitle: '\u4e3a\u60a8\u7684\u8d5b\u9a6c\u673a\u6784\u5b9a\u5236\u65b9\u6848',
    ctaSub: '\u544a\u8bc9\u6211\u4eec\u9a91\u5e08\u89c4\u6a21\u548c\u8bad\u7ec3\u76ee\u6807\uff0c\u6211\u4eec24\u5c0f\u65f6\u5185\u7ed9\u51fa\u5b8c\u6574\u914d\u7f6e\u5efa\u8bae',
    ctaBtn1: '\u83b7\u53d6\u5b9a\u5236\u65b9\u6848',
    ctaBtn2: '\u5bf9\u6bd4\u4ea7\u54c1\u578b\u53f7',
    viewDetail: '\u67e5\u770b\u8be6\u60c5 \u2192',
    viewCase: '\u67e5\u770b\u5b8c\u6574\u6848\u4f8b \u2192',
  },
  en: {
    label: 'Solutions',
    h1: ['Horse Racing &', 'Jockey Training'],
    heroSub: 'Jockey training is costly and risky. How do you build fitness and riding posture at high frequency without wearing out racehorses? Pneumatic wave simulation mirrors real racehorse rhythm.',
    heroAlt: 'Professional racehorse jockey training center',
    recTitle: 'Recommended Configuration',
    products: [
      { tag: "Jockey's First Choice", name: 'Horse-MS.30P', desc: '6-axis motion platform, professional three-day level, AI real-time posture correction, high-frequency fitness and seat training. HKJC approved supplier.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: 'Jockey Specialist', name: 'Racehorse-MS.20', desc: 'Pneumatic wave-sensing system detects leg grip pressure, linearly triggers acceleration feedback. Walk/Canter/Gallop gaits, Monkey Style design.', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: 'Key Advantages for Racing Training',
    advantages: [
      { title: 'High-Frequency Reps Without Wearing Racehorses', desc: 'Jockeys can drill balance, core strength, and tactile sensitivity daily without mounting a racehorse, preserving horses for race day performance.' },
      { title: 'Pneumatic Sensor Simulates Real Wave Feel', desc: 'Industrial-grade abdominal pressure sensor detects leg grip signals and triggers linear acceleration, replicating the push-wave rhythm felt in real races.' },
      { title: 'HKJC Approved Supplier', desc: 'Hong Kong Jockey Club MS.30P approved supplier with full jockey training records and HKJC+PSI institutional endorsement.' },
    ],
    caseAlt: 'Hong Kong Jockey Club jockey training',
    caseBadge: 'Certified Partnership',
    caseTitle: 'Hong Kong Jockey Club \u2014 Jockey Fitness & Posture Training System',
    caseDesc: 'HKJC uses MS.30P as the core training tool for daily jockey fitness maintenance and pre-race posture calibration, running year-round and highly endorsed by professional jockeys.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: 'This Solution Is the Right Fit If\u2026',
    fits: [
      { title: 'You Operate a Racing Training Center or Racecourse', desc: 'High-frequency training + PSI data monitoring, no horse wear, quantified improvement in jockey fitness and seat. HKJC-endorsed professional configuration.' },
      { title: 'You Need Daily Jockey Fitness Training Tools', desc: 'Serve multiple jockeys per day, replacing routine real-horse drills and reserving precious racehorse time for high-value race prep and technique sessions.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'Can jockeys get a feel similar to a real racehorse?', a: "MS.20's pneumatic wave-sensing system is designed to simulate how racehorses respond to jockey aids. It detects leg grip signals and triggers linear acceleration — approaching real racehorse feel in Monkey Style position. MS.30P focuses on seat balance and core muscle precision. Both complement each other." },
      { q: 'Which jockey skill level is the simulator suitable for?', a: 'MS.30P suits jockeys from beginner to professional level in dressage and cross-country. MS.20 is specifically designed for racehorses, ideal for jockeys with a base looking to specialize in fitness and wave training. We also provide safe beginner entry plans.' },
    ],
    ctaTitle: 'Get a Custom Plan for Your Racing Organization',
    ctaSub: 'Tell us your jockey count and training goals — we respond within 24 hours with a full configuration proposal.',
    ctaBtn1: 'Get Custom Proposal',
    ctaBtn2: 'Compare Products',
    viewDetail: 'View Details \u2192',
    viewCase: 'View Full Case \u2192',
  },
  ja: {
    label: '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3',
    h1: ['\u7af6\u99ac\u30fb', '\u9a0e\u624b\u8a13\u7df4'],
    heroSub: '\u9a0e\u624b\u8a13\u7df4\u306f\u30b3\u30b9\u30c8\u304c\u9ad8\u304f\u30ea\u30b9\u30af\u3082\u5927\u304d\u3044\u3002\u7af6\u99ac\u3092\u6d88\u8017\u305b\u305a\u4f53\u80fd\u30fb\u9a0e\u5ea7\u3092\u9ad8\u983b\u5ea6\u3067\u8a13\u7df4\u3002\u6c17\u5727\u30b7\u30b9\u30c6\u30e0\u304c\u771f\u306e\u7af6\u99ac\u306e\u30ea\u30ba\u30e0\u3092\u518d\u73fe\u3002',
    heroAlt: '\u7af6\u99ac\u9a0e\u624b\u5c02\u9580\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30bb\u30f3\u30bf\u30fc',
    recTitle: '\u63a8\u5968\u69cb\u6210',
    products: [
      { tag: '\u9a0e\u624b\u7b2c\u4e00\u9078\u629e', name: 'Horse-MS.30P', desc: '6\u8ef8\u30e2\u30fc\u30b7\u30e7\u30f3\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3001\u30d7\u30ed\u4e09\u7a2e\u7af6\u6280\u30ec\u30d9\u30eb\u3001AI\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u59ff\u52e2\u77f3\u6b63\u3001\u9ad8\u983b\u5ea6\u306e\u4f53\u80fd\u30fb\u9a0e\u5ea7\u8a13\u7df4\u3002HKJC\u8a8d\u5b9a\u30b5\u30d7\u30e9\u30a4\u30e4\u30fc\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\u9a0e\u624b\u5c02\u9580', name: 'Racehorse-MS.20', desc: '\u6c17\u5727\u63a8\u6ce2\u611f\u5fdc\u30b7\u30b9\u30c6\u30e0\u304c\u5439\u304d\u8179\u306e\u5727\u529b\u3092\u691c\u77e5\u3057\u3001\u7dda\u5f62\u52a0\u901f\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3002Walk/Canter/Gallop\u306e3\u6b69\u6cd5\u3001Monkey Style\u9a0e\u5ea7\u8a2d\u8a08\u3002', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: '\u7af6\u99ac\u8a13\u7df4\u306e\u4e3b\u306a\u30e1\u30ea\u30c3\u30c8',
    advantages: [
      { title: '\u9ad8\u983b\u5ea6\u53cd\u5fa9\u3067\u7af6\u99ac\u3092\u6d88\u8017\u3057\u306a\u3044', desc: '\u7af6\u99ac\u306b\u4e57\u3089\u306a\u304f\u3066\u3082\u30d0\u30e9\u30f3\u30b9\u30fb\u4f53\u5e79\u30fb\u624b\u7dba\u3092\u6bce\u65e5\u7e70\u308a\u8fd4\u3057\u7b4d\u7df4\u3067\u304d\u308b\u3002\u7af6\u99ac\u306e\u4f53\u529b\u306f\u672c\u756a\u30ec\u30fc\u30b9\u7528\u306b\u3002' },
      { title: '\u6c17\u5727\u611f\u5fdc\u304c\u63a8\u6ce2\u611f\u89da\u3092\u518d\u73fe', desc: '\u8179\u90e8\u306e\u7523\u696d\u7528\u6c17\u5727\u30bb\u30f3\u30b5\u30fc\u304c\u5439\u304d\u817f\u4fe1\u53f7\u3092\u691c\u77e5\u3057\u7dda\u5f62\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3002\u5b9f\u969b\u306e\u30ec\u30fc\u30b9\u4e2d\u306e\u63a8\u6ce2\u30ea\u30ba\u30e0\u3092\u518d\u73fe\u3002' },
      { title: 'HKJC \u8a8d\u5b9a\u30b5\u30d7\u30e9\u30a4\u30e4\u30fc', desc: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6\u306eMS.30P\u8a8d\u5b9a\u30b5\u30d7\u30e9\u30a4\u30e4\u30fc\u3002\u5b8c\u5168\u306a\u9a0e\u624b\u8a13\u7df4\u8a18\u9332\u3068HKJC+PSI\u6a5f\u95a2\u306e\u8ecd\u62bc\u3057\u3042\u308a\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6\u9a0e\u624b\u8a13\u7df4',
    caseBadge: '\u8a8d\u5b9a\u9023\u643a',
    caseTitle: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6 \u2014 \u9a0e\u624b\u4f53\u80fd\u30fb\u9a0e\u5ea7\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0',
    caseDesc: 'HKJC\u306fMS.30P\u3092\u9a0e\u624b\u306e\u65e5\u5e38\u4f53\u80fd\u7dad\u6301\u3068\u30ec\u30fc\u30b9\u524d\u9a0e\u5ea7\u8abf\u6574\u306e\u4e2d\u6838\u8a13\u7df4\u6a5f\u5668\u3068\u3057\u3066\u5c0e\u5165\u3002\u5e74\u4e2d\u7121\u4f11\u7a3c\u50cd\u3057\u3001\u30d7\u30ed\u9a0e\u624b\u304b\u3089\u9ad8\u3044\u8a55\u4fa1\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u6b21\u306e\u3088\u3046\u306a\u65b9\u306b\u6700\u9069\u3067\u3059',
    fits: [
      { title: '\u7af6\u99ac\u8a13\u7df4\u30bb\u30f3\u30bf\u30fc\u3084\u7af6\u99ac\u5834\u3092\u904b\u55b6\u3057\u3066\u3044\u308b', desc: '\u9ad8\u983b\u5ea6\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0+PSI\u30c7\u30fc\u30bf\u76e3\u8996\u3001\u7af6\u99ac\u3092\u6d88\u8017\u305b\u305a\u3001\u9a0e\u624b\u4f53\u80fd\u30fb\u9a0e\u5ea7\u3092\u5b9a\u91cf\u5411\u4e0a\u3002HKJC\u8a8d\u5b9a\u306e\u30d7\u30ed\u69cb\u6210\u3002' },
      { title: '\u9a0e\u624b\u306e\u65e5\u5e38\u4f53\u80fd\u8a13\u7df4\u30c4\u30fc\u30eb\u304c\u5fc5\u8981', desc: '\u6bce\u65e5\u8907\u6570\u9a0e\u624b\u306b\u5bfe\u5fdc\u53ef\u80fd\u3002\u5b9f\u99ac\u3092\u7528\u3044\u305f\u65e5\u5e38\u8a13\u7df4\u3092\u7f6e\u304d\u63db\u3048\u3001\u8cb4\u91cd\u306a\u7af6\u99ac\u6642\u9593\u3092\u9ad8\u4fa1\u5024\u306e\u672c\u756a\u30ec\u30fc\u30b9\u306b\u9177\u4f7f\u3002' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u9a0e\u624b\u306f\u672c\u7269\u306e\u7af6\u99ac\u306b\u8fd1\u3044\u611f\u899a\u3092\u5f97\u3089\u308c\u307e\u3059\u304b\uff1f', a: 'MS.20\u306e\u6c17\u5727\u63a8\u6ce2\u611f\u5fdc\u30b7\u30b9\u30c6\u30e0\u306f\u7af6\u99ac\u306e\u624b\u52a9\u3078\u306e\u53cd\u5fdc\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u8a2d\u8a08\u3002Monkey Style\u9a0e\u5ea7\u3067\u5b9f\u969c\u306e\u7af6\u99ac\u611f\u899a\u306b\u8fd1\u3065\u304d\u307e\u3059\u3002MS.30P\u306f\u9a0e\u5ea7\u30d0\u30e9\u30f3\u30b9\u3068\u4f53\u5e79\u7cbe\u5ea6\u8a13\u7df4\u306b\u7279\u5316\u3002' },
      { q: '\u3069\u306e\u30ec\u30d9\u30eb\u306e\u9a0e\u624b\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u304b\uff1f', a: 'MS.30P\u306f\u521d\u5fc3\u8005\u304b\u3089\u30d7\u30ed\u307e\u3067\u306e\u99ac\u5834\u99ac\u8853\u30fb\u8d8a\u91ce\u9a0e\u624b\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002MS.20\u306f\u7af6\u99ac\u9a0e\u624b\u5c02\u7528\u8a2d\u8a08\u3067\u3001\u4e00\u5b9a\u306e\u57fa\u7840\u306e\u3042\u308b\u9a0e\u624b\u306e\u4f53\u80fd\u30fb\u63a8\u6ce2\u8a13\u7df4\u306b\u6700\u9069\u3002\u521d\u5fc3\u8005\u8a18\u5c0e\u5165\u30d7\u30e9\u30f3\u3082\u3054\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u7af6\u99ac\u6a5f\u95a2\u5411\u3051\u30ab\u30b9\u30bf\u30e0\u30d7\u30e9\u30f3\u3092\u53d7\u3051\u53d6\u308b',
    ctaSub: '\u9a0e\u624b\u6570\u3068\u8a13\u7df4\u76ee\u6a19\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u300224\u6642\u9593\u4ee5\u5185\u306b\u5b8c\u5168\u306a\u69cb\u6210\u6848\u3092\u56de\u7b54\u3057\u307e\u3059\u3002',
    ctaBtn1: '\u30ab\u30b9\u30bf\u30e0\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b',
    ctaBtn2: '\u88fd\u54c1\u3092\u6bd4\u8f03\u3059\u308b',
    viewDetail: '\u8a73\u7d30\u3092\u898b\u308b \u2192',
    viewCase: '\u5c0e\u5165\u4e8b\u4f8b\u3092\u898b\u308b \u2192',
  },
  ko: {
    label: '\uc194\ub8e8\uc158',
    h1: ['\uacbd\ub9c8 \ubc0f', '\uc8fc\ud0a4 \ud6c8\ub828'],
    heroSub: '\uc8fc\ud0a4 \ud6c8\ub828\uc740 \ube44\uc6a9\uc774 \ub192\uace0 \uc704\ud5d8\ud558\uc2b5\ub2c8\ub2e4. \uacbd\uc8fc\ub9c8\ub97c \uc18c\ubaa8\ud558\uc9c0 \uc54a\uace0 \uccb4\ub825\uacfc \uc2b9\ub9c8 \uc790\uc138\ub97c \uace0\uac15\ub3c4\ub85c \ud6c8\ub828\ud558\ub294 \ubc29\ubc95. \uae30\uc555 \ud30c\ub3d9 \uac10\uc9c0\ub85c \uc2e4\uc81c \uacbd\uc8fc\ub9c8 \ub9ac\ub4ec \uad6c\ud604.',
    heroAlt: '\uacbd\ub9c8 \uc8fc\ud0a4 \uc804\ubb38 \ud6c8\ub828 \uc13c\ud130',
    recTitle: '\uad8c\uc7a5 \uad6c\uc131',
    products: [
      { tag: '\uc8fc\ud0a4 \uc81c1\uc120\ud0dd', name: 'Horse-MS.30P', desc: '6\ucd95 \ubaa8\uc158 \ud50c\ub7ab\ud3fc, \uc804\ubb38 3\uc77c \uc885\ubaa9 \ub808\ubca8, AI \uc2e4\uc2dc\uac04 \uc790\uc138 \uad50\uc815, \uc8fc\ud0a4 \uccb4\ub825\uacfc \uc2b9\ub9c8 \uc790\uc138 \ub18c\ub825 \ud6c8\ub828. HKJC \uc778\uc99d \uacf5\uae09\uc5c5\uccb4.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\uc8fc\ud0a4 \uc804\ubb38', name: 'Racehorse-MS.20', desc: '\uae30\uc555 \ud30c\ub3d9 \uac10\uc9c0 \uc2dc\uc2a4\ud15c\uc774 \ub2e4\ub9ac \ubb3b\ub294 \ud798\uc744 \uc778\uc2dd, \uc120\ud615 \uac00\uc18d \ud53c\ub4dc\ubc31. Walk/Canter/Gallop 3\ubcf4\uc5b4, Monkey Style \uc124\uacc4.', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: '\uacbd\ub9c8 \ud6c8\ub828 \ud575\uc2ec \uc7a5\uc810',
    advantages: [
      { title: '\uace0\uac15\ub3c4 \ubc18\ubcf5\uc73c\ub85c \uacbd\uc8fc\ub9c8 \uc18c\ubaa8 \uc5c6\uc74c', desc: '\uc8fc\ud0a4\uac00 \uacbd\uc8fc\ub9c8\uc5d0 \ud0c0\uc9c0 \uc54a\uace0\ub3c4 \ubc38\ub7f0\uc2a4, \ucf54\uc5b4 \uadfc\uc721, \uc190\uc57c \ubbfc\uac10\ub3c4\ub97c \ub9e4\uc77c \ubc18\ubcf5 \ud6c8\ub828. \uacbd\uc8fc\ub9c8 \uccb4\ub825\uc740 \ubcf8 \uc2c5\uc8fc\ub97c \uc704\ud574.' },
      { title: '\uae30\uc555 \uac10\uc9c0\ub85c \ud30c\ub3d9 \uccb4\uac10 \uad6c\ud604', desc: '\ubcf5\ubd80\uc758 \uc0b0\uc5c5\uc6a9 \uae30\uc555 \uc13c\uc11c\uac00 \ub2e4\ub9ac \uc2e0\ud638\ub97c \uc778\uc2dd\ud574 \uc120\ud615 \uac00\uc18d \ud53c\ub4dc\ubc31\uc744 \uc720\ubc1c. \uc2e4\uc81c \uacbd\uc8fc \uc911 \ud30c\ub3d9 \ub9ac\ub4ec \uc7ac\ud604.' },
      { title: 'HKJC \uc778\uc99d \uacf5\uae09\uc5c5\uccb4', desc: '\ud64d\ucf69 \uc7ac\ud0a4\ud074\ub7fd MS.30P \uc778\uc99d \uacf5\uae09\uc5c5\uccb4. \uc8fc\ud0a4 \ud6c8\ub828 \uae30\ub85d \ubc0f HKJC+PSI \uae30\uad00 \ubcf4\uc99d.' },
    ],
    caseAlt: '\ud64d\ucf69 \uc7ac\ud0a4\ud074\ub7fd \uc8fc\ud0a4 \ud6c8\ub828',
    caseBadge: '\uc778\uc99d \ud611\ub825',
    caseTitle: '\ud64d\ucf69 \uc7ac\ud0a4\ud074\ub7fd \u2014 \uc8fc\ud0a4 \uccb4\ub825 \ubc0f \uc790\uc138 \ud6c8\ub828 \uc2dc\uc2a4\ud15c',
    caseDesc: 'HKJC\uac00 MS.30P\ub97c \uc8fc\ud0a4 \uc77c\uc0c1 \uccb4\ub825 \uc720\uc9c0\uc640 \uacbd\uc8fc \uc804 \uc790\uc138 \uc870\uc815\uc758 \ud575\uc2ec \uc7a5\ube44\ub85c \ub3c4\uc785. \uc5f0\uc911 \ubb34\ud734 \uc6b4\uc601, \uc804\ubb38 \uc8fc\ud0a4\ub4e4\uc5d0\uac8c \ub192\uc740 \ud3c9\uac00.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\ub2e4\uc74c\uc5d0 \ud574\ub2f9\ud558\uc2dc\uba74 \ucd5c\uc801\uc758 \uc120\ud0dd\uc785\ub2c8\ub2e4',
    fits: [
      { title: '\uacbd\ub9c8 \ud6c8\ub828 \uc13c\ud130\ub098 \uacbd\ub9c8\uc7a5\uc744 \uc6b4\uc601\ud558\uc2e4 \ub54c', desc: '\uace0\uac15\ub3c4 \ud6c8\ub828 + PSI \ub370\uc774\ud130 \ubaa8\ub2c8\ud130\ub9c1, \uacbd\uc8fc\ub9c8 \uc18c\ubaa8 \uc5c6\uc774 \uc8fc\ud0a4 \uccb4\ub825\uacfc \uc790\uc138 \uc815\ub7c9\uc801 \ud5a5\uc0c1. HKJC \uc778\uc99d \uc804\ubb38 \uad6c\uc131.' },
      { title: '\uc8fc\ud0a4 \uc77c\uc0c1 \uccb4\ub825 \ud6c8\ub828 \ub3c4\uad6c\uac00 \ud544\uc694\ud560 \ub54c', desc: '\ud558\ub8e8\uc5d0 \uc5ec\ub7ec \uc8fc\ud0a4\ub97c \ucf54\uce58. \uc2e4\ub9c8\uc758 \uc77c\uc0c1 \ud6c8\ub828\uc744 \ub300\uccb4\ud558\uace0 \uacbd\uc8fc\ub9c8 \uc2dc\uac04\uc740 \ucd5c\uace0 \uac00\uce58 \uc2b9\ubd80\uc5d0 \uc0ac\uc6a9.' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\uc8fc\ud0a4\uac00 \uc2e4\uc81c \uacbd\uc8fc\ub9c8\uc640 \ube44\uc2b7\ud55c \uccb4\uac10\uc744 \uc5bb\uc744 \uc218 \uc788\ub098\uc694?', a: 'MS.20\uc758 \uae30\uc555 \ud30c\ub3d9 \uac10\uc9c0 \uc2dc\uc2a4\ud15c\uc740 \uacbd\uc8fc\ub9c8\uac00 \uc8fc\ud0a4\uc758 \uc5b4\uc2dc\uc2a4\ud2b8\uc5d0 \ubc18\uc751\ud558\ub294 \ubc29\uc2dd\uc744 \ubaa8\uc0ac\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. Monkey Style \uc790\uc138\uc5d0\uc11c \uc2e4\uc81c \uacbd\uc8fc\ub9c8\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4. MS.30P\ub294 \uc2b9\ub9c8 \ubc38\ub7f0\uc2a4\uc640 \ucf54\uc5b4 \uc815\ubc00 \ud6c8\ub828\uc5d0 \ud2b9\ud654.' },
      { q: '\uc5b4\ub5a4 \ub808\ubca8\uc758 \uc8fc\ud0a4\uc5d0\uac8c \uc801\ud569\ud55c\uac00\uc694?', a: 'MS.30P\ub294 \ucd08\ubcf4\ubd80\ud130 \ud504\ub85c\uae09\uae4c\uc9c0 \ub9c8\uc7a5 \uc2b9\ub9c8 \ubc0f \ud06c\ub85c\uc2a4\ucee8\ud2b8\ub9ac \uae30\uc218\uc5d0 \uc801\ud569. MS.20\ub294 \uacbd\ub9c8 \uc8fc\ud0a4\ub97c \uc704\ud55c \uc804\ubb38 \uc124\uacc4\ub85c, \uae30\ucd08\uac00 \uc788\ub294 \uc8fc\ud0a4\uc758 \uccb4\ub825 \ubc0f \ud30c\ub3d9 \ud6c8\ub828\uc5d0 \uc774\uc0c1\uc801.' },
    ],
    ctaTitle: '\uacbd\ub9c8 \uae30\uad00\uc5d0 \ub9de\ub294 \ub9de\ucda4\ud615 \uacc4\ud68d \ubc1b\uae30',
    ctaSub: '\uc8fc\ud0a4 \uaddc\ubaa8\uc640 \ud6c8\ub828 \ubaa9\ud45c\ub97c \uc54c\ub824\uc8fc\uc138\uc694. 24\uc2dc\uac04 \uc774\ub0b4 \uc804\uccb4 \uad6c\uc131 \uc548\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.',
    ctaBtn1: '\ub9de\ucda4 \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaBtn2: '\uc81c\ud488 \ube44\uad50',
    viewDetail: '\uc0c1\uc138 \ubcf4\uae30 \u2192',
    viewCase: '\uc804\uccb4 \uc0ac\ub840 \ubcf4\uae30 \u2192',
  },
  es: {
    label: 'Soluciones',
    h1: ['Carreras de Caballos y', 'Entrenamiento de Jockeys'],
    heroSub: 'El entrenamiento de jockeys es costoso y arriesgado. La simulaci\u00f3n neum\u00e1tica de olas replica el ritmo real del caballo de carreras para entrenar fuerza y postura sin desgastarlo.',
    heroAlt: 'Centro profesional de entrenamiento de jockeys de carreras',
    recTitle: 'Configuraci\u00f3n Recomendada',
    products: [
      { tag: 'Primera Opci\u00f3n para Jockeys', name: 'Horse-MS.30P', desc: 'Plataforma de 6 ejes, nivel de tres d\u00edas profesional, correcci\u00f3n postural con IA en tiempo real, entrenamiento de alta frecuencia. Proveedor aprobado por HKJC.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: 'Especializado para Jockeys', name: 'Racehorse-MS.20', desc: 'Sistema de detecci\u00f3n neum\u00e1tica de olas que mide la presi\u00f3n de las piernas y activa retroalimentaci\u00f3n de aceleraci\u00f3n lineal. Pasos Walk/Canter/Gallop, dise\u00f1o Monkey Style.', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: 'Ventajas Clave para el Entrenamiento de Carreras',
    advantages: [
      { title: 'Alta Frecuencia Sin Desgastar al Caballo', desc: 'Los jockeys pueden entrenar equilibrio, n\u00facleo y sensibilidad t\u00e1ctil diariamente sin montar el caballo, reservando la energ\u00eda del caballo para los d\u00edas de carrera.' },
      { title: 'Sensor Neum\u00e1tico Simula la Sensaci\u00f3n de Ola', desc: 'Sensor de presi\u00f3n abdominal de grado industrial que detecta la se\u00f1al de grip de las piernas y activa aceleraci\u00f3n lineal, reproduciendo el ritmo de empuje en carrera real.' },
      { title: 'Proveedor Aprobado por HKJC', desc: 'Proveedor aprobado por el Hong Kong Jockey Club para MS.30P, con registros completos de entrenamiento de jockeys y aval institucional de HKJC+PSI.' },
    ],
    caseAlt: 'Entrenamiento de jockeys del Hong Kong Jockey Club',
    caseBadge: 'Colaboraci\u00f3n Certificada',
    caseTitle: 'Hong Kong Jockey Club \u2014 Sistema de Entrenamiento F\u00edsico y Postural para Jockeys',
    caseDesc: 'HKJC utiliza el MS.30P como herramienta central para el mantenimiento f\u00edsico diario de jockeys y la calibraci\u00f3n postural previa a la carrera, operando durante todo el a\u00f1o.',
    fitsLabel: 'ESTA SOLUCI\u00d3N ES PARA TI SI\u2026',
    fitsTitle: 'Esta Soluci\u00f3n Es Ideal Si\u2026',
    fits: [
      { title: 'Operas un Centro de Entrenamiento de Carreras o Hip\u00f3dromo', desc: 'Entrenamiento de alta frecuencia + monitoreo de datos PSI, sin desgaste del caballo, mejora cuantificada de la condici\u00f3n f\u00edsica y postura del jockey. Configuraci\u00f3n profesional aprobada por HKJC.' },
      { title: 'Necesitas Herramientas de Condici\u00f3n F\u00edsica Diaria para Jockeys', desc: 'Servir a varios jockeys al d\u00eda, reemplazar los ejercicios de rutina con caballos reales y reservar el tiempo del caballo de carreras para preparaci\u00f3n de alto valor.' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfPueden los jockeys obtener una sensaci\u00f3n similar a la de un caballo real?', a: 'El sistema neum\u00e1tico de detecci\u00f3n de olas del MS.20 est\u00e1 dise\u00f1ado para simular la respuesta del caballo de carreras a las ayudas del jockey. Detecta se\u00f1ales de grip y activa aceleraci\u00f3n lineal, aproxim\u00e1ndose a la sensaci\u00f3n real en posici\u00f3n Monkey Style.' },
      { q: '\u00bfPara qu\u00e9 nivel de jockey es adecuado el simulador?', a: 'MS.30P es apto para jockeys de nivel principiante a profesional en doma y cross. MS.20 est\u00e1 dise\u00f1ado espec\u00edficamente para caballos de carreras, ideal para jockeys con base que buscan especializarse en condici\u00f3n f\u00edsica y entrenamiento de olas.' },
    ],
    ctaTitle: 'Obtener un Plan Personalizado para Tu Organizaci\u00f3n de Carreras',
    ctaSub: 'D\u00ednos el n\u00famero de jockeys y los objetivos de entrenamiento. Respondemos en 24 horas con una propuesta completa.',
    ctaBtn1: 'Obtener Propuesta Personalizada',
    ctaBtn2: 'Comparar Productos',
    viewDetail: 'Ver Detalles \u2192',
    viewCase: 'Ver Caso Completo \u2192',
  },
  de: {
    label: 'L\u00f6sungen',
    h1: ['Pferderennen &', 'Jockey-Training'],
    heroSub: 'Jockey-Training ist teuer und riskant. Pneumatische Wellensimulation spiegelt den Rhythmus echter Rennpferde wider \u2014 intensives Fitness- und Haltungstraining ohne Pferdeverbrauch.',
    heroAlt: 'Professionelles Trainingszentrum f\u00fcr Rennpferd-Jockeys',
    recTitle: 'Empfohlene Konfiguration',
    products: [
      { tag: 'Erste Wahl f\u00fcr Jockeys', name: 'Horse-MS.30P', desc: '6-Achs-Bewegungsplattform, professionelles Dreitages-Niveau, KI-Echtzeit-Haltungskorrektur, hochfrequentes Fitness- und Sitztraining. HKJC-genehmigter Lieferant.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: 'Jockey-Spezialist', name: 'Racehorse-MS.20', desc: 'Pneumatisches Wellenerkennungssystem misst Beindrucksignale und l\u00f6st lineares Beschleunigungsfeedback aus. Walk/Canter/Gallop-G\u00e4nge, Monkey-Style-Design.', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: 'Wichtigste Vorteile f\u00fcr das Renntraining',
    advantages: [
      { title: 'Hochfrequentes Training ohne Pferdeverbrauch', desc: 'Jockeys trainieren t\u00e4glich Gleichgewicht, Rumpf und taktile Sensibilit\u00e4t ohne Rennpferd zu besteigen, um die Energie der Pferde f\u00fcr Renntage zu erhalten.' },
      { title: 'Pneumatischer Sensor Simuliert Wellengef\u00fchl', desc: 'Industriell-gradiger Bauchwanddrucksensor erkennt Beingriffsignale und l\u00f6st lineare Beschleunigung aus \u2014 repliziert den Push-Wave-Rhythmus im echten Rennen.' },
      { title: 'HKJC-Zugelassener Lieferant', desc: 'Hong Kong Jockey Club MS.30P zugelassener Lieferant mit vollst\u00e4ndigen Jockey-Trainingsaufzeichnungen und HKJC+PSI-Institutionsbest\u00e4tigung.' },
    ],
    caseAlt: 'Hong Kong Jockey Club Jockey-Training',
    caseBadge: 'Zertifizierte Partnerschaft',
    caseTitle: 'Hong Kong Jockey Club \u2014 Jockey Fitness & Haltungstrainingssystem',
    caseDesc: 'HKJC nutzt MS.30P als Kernger\u00e4t f\u00fcr t\u00e4gliche Jockey-Fitness und Vorlaufhaltungskalibrierung, l\u00e4uft ganzj\u00e4hrig und wird von professionellen Jockeys hoch gesch\u00e4tzt.',
    fitsLabel: 'DIESE L\u00d6SUNG IST F\u00dcR SIE, WENN\u2026',
    fitsTitle: 'Diese L\u00f6sung Passt Zu Ihnen, Wenn\u2026',
    fits: [
      { title: 'Sie ein Renntrainingszentrum oder eine Rennbahn betreiben', desc: 'Hochfrequentes Training + PSI-Daten\u00fcberwachung, kein Pferdeverbrauch, quantifizierte Verbesserung von Jockey-Fitness und -Sitz. HKJC-gebilligte Profikonfiguration.' },
      { title: 'Sie t\u00e4gliche Jockey-Fitness-Trainingstools ben\u00f6tigen', desc: 'Mehrere Jockeys pro Tag betreuen, routinem\u00e4\u00dfige Echtpferd\u00fcbungen ersetzen, wertvolle Rennpferdezeit f\u00fcr Rennen und Technikstunden reservieren.' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'K\u00f6nnen Jockeys ein dem echten Rennpferd \u00e4hnliches Gef\u00fchl bekommen?', a: "Das pneumatische Wellenerkennungssystem des MS.20 ist darauf ausgelegt, wie ein Rennpferd auf Jockey-Hilfen reagiert. Es erkennt Beingriffsignale und l\u00f6st lineare Beschleunigung aus \u2014 n\u00e4hert sich dem echten Rennpferdgef\u00fchl in Monkey-Style-Position." },
      { q: 'F\u00fcr welches Jockey-Niveau ist der Simulator geeignet?', a: 'MS.30P eignet sich f\u00fcr Jockeys von Anf\u00e4nger bis Profi in Dressur und Gel\u00e4nde. MS.20 ist speziell f\u00fcr Rennpferde konzipiert und ideal f\u00fcr Jockeys mit Basis, die Fitness- und Wellentraining spezialisieren m\u00f6chten.' },
    ],
    ctaTitle: 'Individuellen Plan f\u00fcr Ihre Rennorganisation Erhalten',
    ctaSub: 'Teilen Sie uns Jockeys-Anzahl und Trainingsziele mit. Wir antworten innerhalb von 24 Stunden mit einem vollst\u00e4ndigen Angebot.',
    ctaBtn1: 'Individuelles Angebot Erhalten',
    ctaBtn2: 'Produkte Vergleichen',
    viewDetail: 'Details Anzeigen \u2192',
    viewCase: 'Vollst\u00e4ndigen Fall Anzeigen \u2192',
  },
  ar: {
    label: '\u062d\u0644\u0648\u0644',
    h1: ['\u0633\u0628\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644 \u0648', '\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646'],
    heroSub: '\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0645\u0643\u0644\u0641 \u0648\u0645\u062d\u0641\u0648\u0641 \u0628\u0627\u0644\u0645\u062e\u0627\u0637\u0631. \u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0623\u0645\u0648\u0627\u062c \u0627\u0644\u0647\u0648\u0627\u0626\u064a\u0629 \u062a\u0639\u0643\u0633 \u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629 \u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0644\u064a\u0627\u0642\u0629 \u0648\u0627\u0644\u0648\u0636\u0639\u064a\u0629 \u062f\u0648\u0646 \u0625\u0631\u0647\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644.',
    heroAlt: '\u0645\u0631\u0643\u0632 \u062a\u062f\u0631\u064a\u0628 \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0644\u062c\u0648\u0643\u064a\u064a \u0633\u0628\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644',
    recTitle: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647',
    products: [
      { tag: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646', name: 'Horse-MS.30P', desc: '\u0645\u0646\u0635\u0629 6 \u0645\u062d\u0627\u0648\u0631\u060c \u0645\u0633\u062a\u0648\u0649 \u062b\u0644\u0627\u062b\u064a \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u060c \u062a\u0635\u062d\u064a\u062d \u0648\u0636\u0639\u064a\u0629 \u0641\u0648\u0631\u064a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u060c \u062a\u062f\u0631\u064a\u0628 \u0644\u064a\u0627\u0642\u0629 \u0648\u062c\u0644\u0633\u0629 \u0628\u062a\u0631\u062f\u062f \u0639\u0627\u0644\u064a. \u0645\u0648\u0631\u062f \u0645\u0639\u062a\u0645\u062f \u0645\u0646 HKJC.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\u0645\u062a\u062e\u0635\u0635 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646', name: 'Racehorse-MS.20', desc: '\u0646\u0638\u0627\u0645 \u0643\u0634\u0641 \u0627\u0644\u0623\u0645\u0648\u0627\u062c \u0627\u0644\u0647\u0648\u0627\u0626\u064a\u0629 \u064a\u0642\u064a\u0633 \u0636\u063a\u0637 \u0627\u0644\u0633\u0627\u0642\u064a\u0646\u060c \u062a\u063a\u0630\u064a\u0629 \u0631\u0627\u062c\u0639\u0629 \u062a\u0633\u0627\u0631\u0639 \u062e\u0637\u064a. \u062e\u0637\u0648\u0627\u062a Walk/Canter/Gallop\u060c \u062a\u0635\u0645\u064a\u0645 Monkey Style.', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
    ],
    advTitle: '\u0645\u0632\u0627\u064a\u0627 \u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0633\u0628\u0627\u0642',
    advantages: [
      { title: '\u062a\u0643\u0631\u0627\u0631 \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u0631\u062f\u062f \u062f\u0648\u0646 \u0625\u0631\u0647\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644', desc: '\u064a\u062f\u0631\u0628 \u0627\u0644\u062c\u0648\u0643\u064a\u0648\u0646 \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0648\u0639\u0636\u0644\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633 \u064a\u0648\u0645\u064a\u064b\u0627 \u062f\u0648\u0646 \u0631\u0643\u0648\u0628 \u0627\u0644\u062e\u064a\u0644\u060c \u0648\u062a\u0648\u0641\u064a\u0631 \u0637\u0627\u0642\u0629 \u0627\u0644\u062e\u064a\u0644 \u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0633\u0628\u0627\u0642.' },
      { title: '\u062d\u0633\u0627\u0633 \u0647\u0648\u0627\u0626\u064a \u064a\u062d\u0627\u0643\u064a \u0634\u0639\u0648\u0631 \u0627\u0644\u0645\u0648\u062c\u0629', desc: '\u0645\u0633\u062a\u0634\u0639\u0631 \u0636\u063a\u0637 \u0628\u0637\u0646\u064a \u0635\u0646\u0627\u0639\u064a \u064a\u0643\u0634\u0641 \u0625\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0633\u0627\u0642\u064a\u0646 \u0648\u064a\u064f\u0637\u0644\u0642 \u062a\u063a\u0630\u064a\u0629 \u062a\u0633\u0627\u0631\u0639 \u062e\u0637\u064a\u0629\u060c \u0645\u062d\u0627\u0643\u064a\u0627\u064b \u0625\u064a\u0642\u0627\u0639 \u0627\u0644\u062f\u0641\u0639 \u0641\u064a \u0627\u0644\u0633\u0628\u0627\u0642 \u0627\u0644\u062d\u0642\u064a\u0642\u064a.' },
      { title: '\u0645\u0648\u0631\u062f \u0645\u0639\u062a\u0645\u062f \u0645\u0646 HKJC', desc: '\u0645\u0648\u0631\u062f MS.30P \u0645\u0639\u062a\u0645\u062f \u0645\u0646 \u0646\u0627\u062f\u064a \u0633\u0628\u0627\u0642\u0627\u062a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u0645\u0639 \u0633\u062c\u0644\u0627\u062a \u062a\u062f\u0631\u064a\u0628 \u062c\u0648\u0643\u064a\u064a\u0646 \u0643\u0627\u0645\u0644\u0629 \u0648\u062a\u0623\u064a\u064a\u062f HKJC+PSI.' },
    ],
    caseAlt: '\u062a\u062f\u0631\u064a\u0628 \u062c\u0648\u0643\u064a\u064a \u0646\u0627\u062f\u064a \u0633\u0628\u0627\u0642\u0627\u062a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a',
    caseBadge: '\u0634\u0631\u0627\u0643\u0629 \u0645\u0639\u062a\u0645\u062f\u0629',
    caseTitle: '\u0646\u0627\u062f\u064a \u0633\u0628\u0627\u0642\u0627\u062a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u2014 \u0646\u0638\u0627\u0645 \u062a\u062f\u0631\u064a\u0628 \u0644\u064a\u0627\u0642\u0629 \u0648\u0648\u0636\u0639\u064a\u0629 \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646',
    caseDesc: '\u064a\u0633\u062a\u062e\u062f\u0645 HKJC \u0627\u0644\u0645\u062d\u0627\u0643\u064a MS.30P \u0643\u0623\u062f\u0627\u0629 \u062a\u062f\u0631\u064a\u0628 \u0645\u062d\u0648\u0631\u064a\u0629 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u062a\u0639\u0645\u0644 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 \u0627\u0644\u0639\u0627\u0645 \u0648\u062a\u062d\u0638\u0649 \u0628\u062a\u0642\u062f\u064a\u0631 \u0639\u0627\u0644\u064d\u0627 \u0645\u0646 \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0627\u0644\u0645\u062d\u062a\u0631\u0641\u064a\u0646.',
    fitsLabel: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0625\u0630\u0627\u2026',
    fitsTitle: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0627\u0644\u0623\u0646\u0633\u0628 \u0625\u0630\u0627\u2026',
    fits: [
      { title: '\u062a\u062f\u064a\u0631 \u0645\u0631\u0643\u0632 \u062a\u062f\u0631\u064a\u0628 \u0633\u0628\u0627\u0642 \u0623\u0648 \u0645\u064a\u062f\u0627\u0646\u064b\u0627 \u0644\u0644\u0633\u0628\u0627\u0642', desc: '\u062a\u062f\u0631\u064a\u0628 \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u0631\u062f\u062f + \u0631\u0635\u062f \u0628\u064a\u0627\u0646\u0627\u062a PSI\u060c \u0628\u062f\u0648\u0646 \u0625\u0631\u0647\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644\u060c \u062a\u062d\u0633\u064a\u0646 \u0642\u0627\u0628\u0644 \u0644\u0644\u0642\u064a\u0627\u0633 \u0641\u064a \u0644\u064a\u0627\u0642\u0629 \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0648\u0648\u0636\u0639\u064a\u062a\u0647\u0645.' },
      { title: '\u062a\u062d\u062a\u0627\u062c \u0623\u062f\u0648\u0627\u062a \u062a\u062f\u0631\u064a\u0628 \u0644\u064a\u0627\u0642\u0629 \u064a\u0648\u0645\u064a\u0629 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646', desc: '\u062e\u062f\u0645\u0629 \u0639\u062f\u0629 \u062c\u0648\u0643\u064a\u064a\u0646 \u064a\u0648\u0645\u064a\u064b\u0627\u060c \u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u062a\u062f\u0631\u064a\u0628\u0627\u062a \u0627\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u0631\u0648\u062a\u064a\u0646\u064a\u0629\u060c \u062a\u0648\u0641\u064a\u0631 \u0648\u0642\u062a \u0627\u0644\u062e\u064a\u0648\u0644 \u0644\u0644\u0633\u0628\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u0642\u064a\u0645\u0629.' },
    ],
    faqTitle: '\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0647\u0644 \u064a\u0645\u0643\u0646 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0625\u062d\u0633\u0627\u0633 \u0645\u0634\u0627\u0628\u0647 \u0644\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629\u061f', a: '\u0646\u0638\u0627\u0645 \u0643\u0634\u0641 \u0623\u0645\u0648\u0627\u062c MS.20 \u0645\u0635\u0645\u0651\u0645 \u0644\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u062e\u064a\u0644 \u0644\u0645\u0633\u0627\u0639\u062f\u0627\u062a \u0627\u0644\u062c\u0648\u0643\u064a. \u064a\u0643\u0634\u0641 \u0625\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0633\u0627\u0642\u064a\u0646 \u0648\u064a\u064f\u0637\u0644\u0642 \u062a\u0633\u0627\u0631\u0639\u064b\u0627 \u062e\u0637\u064a\u064b\u0627 \u2014 \u0645\u0642\u062a\u0631\u0628\u064b\u0627 \u0645\u0646 \u0627\u0644\u0625\u062d\u0633\u0627\u0633 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u0641\u064a \u0648\u0636\u0639\u064a\u0629 Monkey Style.' },
      { q: '\u0645\u0627 \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062c\u0648\u0643\u064a \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u0645\u062d\u0627\u0643\u064a\u061f', a: 'MS.30P \u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0645\u0646 \u0627\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646 \u062d\u062a\u0649 \u0627\u0644\u0645\u062d\u062a\u0631\u0641\u064a\u0646. MS.20 \u0645\u0635\u0645\u0651\u0645 \u062e\u0635\u064a\u0635\u064b\u0627 \u0644\u062c\u0648\u0643\u064a\u064a \u0633\u0628\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644\u060c \u0645\u062b\u0627\u0644\u064a \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0630\u0648\u064a \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0633\u0627\u0639\u064a\u0646 \u0644\u0644\u062a\u062e\u0635\u0635 \u0641\u064a \u0627\u0644\u0644\u064a\u0627\u0642\u0629.' },
    ],
    ctaTitle: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0645\u0624\u0633\u0633\u062a\u0643 \u0641\u064a \u0633\u0628\u0627\u0642 \u0627\u0644\u062e\u064a\u0648\u0644',
    ctaSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0639\u062f\u062f \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0648\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u062a\u062f\u0631\u064a\u0628. \u0646\u0631\u062f \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u0628\u0639\u0631\u0636 \u0643\u0627\u0645\u0644.',
    ctaBtn1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0645\u062e\u0635\u0635',
    ctaBtn2: '\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
    viewDetail: '\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2192',
    viewCase: '\u0639\u0631\u0636 \u0627\u0644\u062d\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629 \u2192',
  },
};

const STATIC = {
  heroImg: '/images/solution-racing-hero.jpg',
  caseImg: '/images/case-hkjc.jpg',
  caseImgPosition: 'center center',
  caseLink: '/cases#hkjc',
  ctaBtn2Href: '/compare',
  jsonld: { name: 'Horse Racing & Jockey Training Solution', url: 'https://www.equestrian-simulators.com/solutions/racing' },
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
