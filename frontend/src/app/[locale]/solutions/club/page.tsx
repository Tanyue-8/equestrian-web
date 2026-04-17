'use client';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

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
    h1: ['\u4ff1\u4e50\u90e8\u4e0e', '\u4e13\u4e1a\u8bad\u7ec3\u4e2d\u5fc3'],
    heroSub: '\u771f\u9a6c\u8bad\u7ec3\u6210\u672c\u9ad8\u3001\u98ce\u9669\u5927\u3001\u573a\u5730\u53d7\u9650\uff1f\u6a21\u62df\u9a6c\u8ba9\u4f60\u5168\u5929\u5019\u9ad8\u5f3a\u5ea6\u8bad\u7ec3\uff0c\u96f6\u4f24\u4ea1\u3001\u96f6\u9a6c\u8d39\u3002',
    heroAlt: '\u9a6c\u672f\u4ff1\u4e50\u90e8\u4e13\u4e1a\u8bad\u7ec3\u4e2d\u5fc3',
    recTitle: '\u63a8\u8350\u914d\u7f6e',
    products: [
      { tag: '\u65d7\u8230\u9996\u9009', name: 'Horse-MS.30P', desc: '\u4e13\u4e1a\u4e09\u9879\u8d5b\u6a21\u62df\u5668\uff0c6\u8f74\u8fd0\u52a8\u5e73\u53f0\u8fd8\u539f\u771f\u5b9e\u9a6c\u6b65\u8282\u5f8b\uff0cAI\u5b9e\u65f6\u7ea0\u59ff\uff0c\u9002\u5408\u9ad8\u6c34\u5e73\u9a91\u624b\u5907\u8d5b\u548c\u65e5\u5e38\u4f53\u80fd\u8bad\u7ec3\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\u6559\u5b66\u526f\u673a', name: 'Pony-MS.30', desc: '\u667a\u80fd\u6559\u5b66\u6a21\u62df\u5668\uff0c\u9002\u5408\u521d\u5b66\u4f1a\u5458\u7cfb\u7edf\u5165\u95e8\u8bad\u7ec3\uff0c\u964d\u4f4e\u6559\u7ec3\u5de5\u65f6\uff0c\u6807\u51c6\u5316\u6559\u5b66\u6d41\u7a0b\uff0c\u6279\u91cf\u57f9\u517b\u65b0\u9a91\u624b\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\u4ff1\u4e50\u90e8\u6838\u5fc3\u4f18\u52bf',
    advantages: [
      { title: '\u5168\u5929\u5019\u4e0d\u95f4\u65ad\u8bad\u7ec3', desc: '\u4e0d\u53d7\u5929\u6c14\u3001\u9a6c\u5339\u75b2\u52b3\u3001\u573a\u5730\u9650\u5236\uff0c\u8bfe\u65f6\u6392\u6ee1\u5373\u53ef\u8fd0\u8425\uff0c\u5355\u53f0\u8bbe\u5907\u65e5\u5747\u53ef\u670d\u52a1 8\u201312 \u540d\u5b66\u5458\u3002' },
      { title: '\u6570\u636e\u5316\u8bad\u7ec3\u62a5\u544a', desc: '\u6bcf\u8282\u8bfe\u81ea\u52a8\u751f\u6210\u5750\u59ff\u3001\u5e73\u8861\u3001\u8282\u594f\u8bc4\u5206\u62a5\u544a\uff0c\u6559\u7ec3\u53ef\u7cbe\u51c6\u5b9a\u4f4d\u95ee\u9898\uff0c\u5b66\u5458\u8fdb\u6b65\u53ef\u89c1\u3001\u53ef\u91cf\u5316\u3002' },
      { title: '\u5927\u5e45\u964d\u4f4e\u8fd0\u8425\u6210\u672c', desc: '\u5bf9\u6bd4\u771f\u9a6c\uff1a\u65e0\u9700\u9a6c\u5ec3\u3001\u517d\u533b\u3001\u997c\u6599\u3001\u4fdd\u9669\u3002\u5355\u53f0\u8bbe\u5907\u6295\u8d44\u56de\u62a5\u5468\u671f\u901a\u5e38\u5728 18\u201324 \u4e2a\u6708\u5185\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u8d5b\u9a6c\u4f1aHKJC',
    caseBadge: '\u771f\u5b9e\u6848\u4f8b',
    caseTitle: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a \u2014 \u4e13\u4e1a\u9a91\u624b\u5907\u8d5b\u7cfb\u7edf',
    caseDesc: 'HKJC \u5f15\u5165 MS.30P \u4f5c\u4e3a\u9a91\u5e08\u4f53\u80fd\u4e0e\u5750\u59ff\u8bad\u7ec3\u7684\u6838\u5fc3\u88c5\u5907\uff0c\u5168\u5e74\u65e0\u4f11\u8fd0\u884c\uff0c\u8f85\u52a9\u6b63\u5f0f\u8d5b\u524d\u70ed\u8eab\u4e0e\u6280\u672f\u5de9\u56fa\uff0c\u6df1\u53d7\u804c\u4e1a\u9a91\u5e08\u8ba4\u53ef\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd9\u5957\u65b9\u6848\u6700\u9002\u5408\u60a8',
    fits: [
      { title: '\u60a8\u60f3\u63d0\u5347\u8bad\u7ec3\u8bfe\u65f6\u5bc6\u5ea6', desc: '\u4e00\u53f0\u6a21\u62df\u5668\u6bcf\u65e5\u53ef\u670d\u52a18-12\u540d\u5b66\u5458\uff0c\u4e0d\u53d7\u5929\u6c14\u548c\u9a6c\u5339\u72b6\u6001\u5f71\u54cd\uff0c\u5927\u5e45\u63d0\u5347\u8bfe\u7a0b\u4e0a\u5ea7\u7387\u548c\u6536\u76ca\u3002' },
      { title: '\u60a8\u9700\u8981\u6570\u636e\u5316\u8bad\u7ec3\u7ba1\u7406', desc: 'AI\u5b9e\u65f6\u751f\u6210\u9a91\u624b\u5e73\u8861\u548c\u59ff\u52bf\u6570\u636e\u62a5\u544a\uff0c\u5e2e\u52a9\u6559\u7ec3\u91cf\u5316\u8bad\u7ec3\u6548\u679c\uff0c\u5438\u5f15\u6ce8\u91cd\u79d1\u5b66\u8bad\u7ec3\u7684\u9ad8\u7aef\u4f1a\u5458\u3002' },
      { title: '\u60a8\u60f3\u63a7\u5236\u8fd0\u8425\u6210\u672c', desc: '\u65e0\u9a6c\u5339\u9972\u517b\u3001\u517d\u533b\u548c\u4fdd\u9669\u6210\u672c\uff0c\u4e00\u6b21\u6027\u8bbe\u5907\u6295\u5165\uff0c\u7a33\u5b9a\u4f4e\u8fd0\u8425\u6210\u672c\uff0cROI\u901a\u5e38\u572812-24\u4e2a\u6708\u5185\u56de\u6536\u3002' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u4ff1\u4e50\u90e8\u901a\u5e38\u9700\u8981\u914d\u5907\u51e0\u53f0\u6a21\u62df\u5668\uff1f', a: '\u5927\u591a\u6570\u4ff1\u4e50\u90e8\u7684\u8d77\u6b65\u914d\u7f6e\u662f1\u53f0 MS.30P \u7528\u4e8e\u9ad8\u9636\u8bad\u7ec3\uff0c\u52a01-2\u53f0 MS.30 \u7528\u4e8e\u521d\u5b66\u8005\u56e2\u4f53\u8bfe\u3002\u62e5\u670950-100\u540d\u6d3b\u8dc3\u4f1a\u5458\u7684\u4e2d\u578b\u4ff1\u4e50\u90e8\u901a\u5e38\u8fd0\u84252-4\u53f0\u3002\u6211\u4eec\u63d0\u4f9b\u514d\u8d39\u7684\u4ea7\u80fd\u89c4\u5212\u548b\u8be2\uff0c\u6839\u636e\u60a8\u7684\u4f1a\u5458\u89c4\u6a21\u548c\u6392\u8bfe\u8868\u7ed9\u51fa\u914d\u7f6e\u5efa\u8bae\u3002' },
      { q: '\u6a21\u62df\u5668\u53ef\u4ee5\u5b8c\u5168\u66ff\u4ee3\u771f\u9a6c\u8bad\u7ec3\u5417\uff1f', a: '\u6a21\u62df\u5668\u5b9a\u4f4d\u662f\u8865\u5145\u800c\u975e\u66ff\u4ee3\u771f\u9a6c\u8bad\u7ec3\u3002\u5b83\u5728\u6280\u672f\u53cd\u590d\u7ec3\u4e60\u3001\u4f53\u80fd\u8c03\u8282\u3001\u521d\u5b66\u8005\u5165\u95e8\u548c\u96e8\u5929\u8bad\u7ec3\u7b49\u573a\u666f\u4e2d\u8868\u73b0\u7a81\u51fa\u2014\u2014\u51cf\u5c11\u65e5\u5e38\u4f8b\u884c\u8bad\u7ec3\u5bf9\u771f\u9a6c\u7684\u4f9d\u8d56\uff0c\u5c06\u771f\u9a6c\u7559\u7ed9\u9ad8\u4ef7\u5024\u7684\u6280\u672f\u63d0\u5347\u8bfe\u3002' },
      { q: '\u4ff1\u4e50\u90e8\u7684\u6295\u8d44\u56de\u6536\u5468\u671f\u4e00\u822c\u662f\u591a\u4e45\uff1f', a: '\u6839\u636e\u5ba2\u6237\u6570\u636e\uff0c\u4ff1\u4e50\u90e8\u901a\u5e38\u572812-24\u4e2a\u6708\u5185\u6536\u56de\u6295\u8d44\uff0c\u6765\u6e90\u5305\u62ec\u8bfe\u65f6\u5bb9\u91cf\u63d0\u5347\u3001\u9a6c\u5339\u6210\u672c\u8282\u7701\u4ee5\u53ca\u6a21\u62df\u5668\u8bfe\u7a0b\u7684\u6ea2\u4ef7\u5b9a\u4ef7\u3002\u6211\u4eec\u53ef\u6839\u636e\u60a8\u7684\u5b9a\u4ef7\u7ed3\u6784\u548c\u4f1a\u5458\u89c4\u6a21\u63d0\u4f9b\u5b9a\u5236\u5316ROI\u6d4b\u7b97\u62a5\u544a\u3002' },
    ],
    ctaTitle: '\u4e3a\u60a8\u7684\u4ff1\u4e50\u90e8\u5b9a\u5236\u65b9\u6848',
    ctaSub: '\u544a\u8bc9\u6211\u4eec\u573a\u5730\u9762\u79ef\u3001\u5b66\u5458\u89c4\u6a21\u548c\u8bad\u7ec3\u76ee\u6807\uff0c\u6211\u4eec24\u5c0f\u65f6\u5185\u7ed9\u51fa\u5b8c\u6574\u914d\u7f6e\u5efa\u8bae',
    ctaBtn1: '\u83b7\u53d6\u5b9a\u5236\u65b9\u6848',
    ctaBtn2: '\u5bf9\u6bd4\u4ea7\u54c1\u578b\u53f7',
    viewDetail: '\u67e5\u770b\u8be6\u60c5 \u2192',
    viewCase: '\u67e5\u770b\u5b8c\u6574\u6848\u4f8b \u2192',
  },
  en: {
    label: 'Solutions',
    h1: ['Equestrian Clubs &', 'Professional Training Centers'],
    heroSub: 'High costs, safety risks, and weather constraints holding back your training? Equestrian simulators enable year-round, high-intensity sessions — zero injuries, zero horse fees.',
    heroAlt: 'Equestrian club professional training center',
    recTitle: 'Recommended Configuration',
    products: [
      { tag: 'Flagship Choice', name: 'Horse-MS.30P', desc: 'Professional dressage simulator with 6-axis motion platform, real-time AI posture correction. Ideal for advanced riders and competition preparation.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: 'Teaching Unit', name: 'Pony-MS.30', desc: 'Smart teaching simulator for beginner group lessons. Standardizes instruction, reduces coach hours, and scales rider development efficiently.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: 'Key Advantages for Clubs',
    advantages: [
      { title: 'Train 365 Days a Year', desc: 'No weather delays, no tired horses, no venue limits. Run full schedules — one unit can serve 8–12 riders per day.' },
      { title: 'Data-Driven Training Reports', desc: 'Every session auto-generates posture, balance, and rhythm scores. Coaches pinpoint issues instantly; riders track measurable progress.' },
      { title: 'Dramatically Lower Operating Costs', desc: 'No stabling, vet fees, feed, or insurance. Typical ROI for clubs is 18–24 months.' },
    ],
    caseAlt: 'Hong Kong Jockey Club HKJC',
    caseBadge: 'Real Case',
    caseTitle: 'Hong Kong Jockey Club — Professional Jockey Training System',
    caseDesc: 'HKJC integrated MS.30P as the core fitness and posture training device for jockeys, running year-round to support pre-race warm-up and technique consolidation.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: 'This Solution Is the Right Fit If\u2026',
    fits: [
      { title: 'You Want to Increase Session Capacity', desc: 'One simulator serves 8–12 riders daily regardless of weather or horse condition — dramatically boosting utilization and revenue.' },
      { title: 'You Need Data-Driven Training Management', desc: 'AI generates real-time balance and posture reports, helping coaches quantify results and attract science-focused premium members.' },
      { title: 'You Want to Control Operating Costs', desc: 'No horse care, vet bills, or insurance. One-time equipment investment with stable, low ongoing costs. Typical ROI: 12–24 months.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How many simulators does a typical club need?', a: 'Most clubs start with 1 MS.30P for advanced training plus 1–2 MS.30 units for beginner group classes. Mid-size clubs with 50–100 active members typically run 2–4 units. We offer free capacity planning consultations.' },
      { q: 'Can simulators fully replace real horse training?', a: 'Simulators complement rather than replace live horse training. They excel at repetitive technique drills, fitness conditioning, beginner onboarding, and rainy-day sessions — freeing real horses for high-value advanced work.' },
      { q: 'What is the typical ROI timeframe for a club?', a: 'Based on client data, clubs typically recover their investment within 12–24 months through increased session capacity, reduced horse costs, and premium pricing for simulator classes. We provide customized ROI projections.' },
    ],
    ctaTitle: 'Get a Custom Plan for Your Club',
    ctaSub: 'Share your venue size, rider count, and training goals — we respond within 24 hours with a full configuration proposal.',
    ctaBtn1: 'Get Custom Proposal',
    ctaBtn2: 'Compare Products',
    viewDetail: 'View Details \u2192',
    viewCase: 'View Full Case \u2192',
  },
  ja: {
    label: '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3',
    h1: ['\u9a6c\u8853\u30af\u30e9\u30d6\u30fb', '\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30bb\u30f3\u30bf\u30fc'],
    heroSub: '\u672c\u7269\u306e\u9a6c\u306e\u8a13\u7df4\u306f\u30b3\u30b9\u30c8\u304c\u9ad8\u304f\u3001\u30ea\u30b9\u30af\u3082\u5927\u304d\u3044\u3002\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u5e74\u4e2d\u7121\u4f11\u9ad8\u5f37\u5ea6\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u5b9f\u73fe\u3002',
    heroAlt: '\u9a6c\u8853\u30af\u30e9\u30d6\u30fb\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30bb\u30f3\u30bf\u30fc',
    recTitle: '\u63a8\u5968\u69cb\u6210',
    products: [
      { tag: '\u30d5\u30e9\u30c3\u30b0\u30b7\u30c3\u30d7', name: 'Horse-MS.30P', desc: '6\u8ef8\u30e2\u30fc\u30b7\u30e7\u30f3\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u642d\u8f09\u306e\u30d7\u30ed\u7528\u99ac\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3002AI\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u59ff\u52e2\u77f3\u6b63\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\u6307\u5c0e\u7528', name: 'Pony-MS.30', desc: '\u521d\u5fc3\u8005\u5411\u3051\u30b0\u30eb\u30fc\u30d7\u30ec\u30c3\u30b9\u30f3\u5bfe\u5fdc\u306e\u30b9\u30de\u30fc\u30c8\u6307\u5c0e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3002\u6559\u4e43\u5de5\u6570\u3092\u524a\u6e1b\u3057\u3001\u6e05\u7b87\u5316\u3055\u308c\u305f\u6307\u5c0e\u3092\u5b9f\u73fe\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\u30af\u30e9\u30d6\u306e\u4e3b\u306a\u30e1\u30ea\u30c3\u30c8',
    advantages: [
      { title: '365\u65e5\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u53ef\u80fd', desc: '\u5929\u5019\u30fb\u9a6c\u306e\u75b2\u5053\u30fb\u65bd\u8a2d\u306e\u5236\u7d04\u306a\u3057\u3002\u4e00\u53f0\u3067\u65e5\u306b8\uff5e12\u540d\u306e\u30e9\u30a4\u30c0\u30fc\u306b\u5bfe\u5fdc\u53ef\u80fd\u3002' },
      { title: '\u30c7\u30fc\u30bf\u99c6\u52d5\u306e\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30ec\u30dd\u30fc\u30c8', desc: '\u30bb\u30c3\u30b7\u30e7\u30f3\u3054\u3068\u306b\u59ff\u52e2\u30fb\u30d0\u30e9\u30f3\u30b9\u30fb\u30ea\u30ba\u30e0\u30b9\u30b3\u30a2\u3092\u81ea\u52d5\u751f\u6210\u3002\u30b3\u30fc\u30c1\u304c\u554f\u984c\u3092\u5373\u5ea7\u306b\u7279\u5b9a\u3067\u304d\u308b\u3002' },
      { title: '\u904b\u55b6\u30b3\u30b9\u30c8\u3092\u5927\u5e45\u524a\u6e1b', desc: '\u9a6c\u523a\u30fb\u517d\u533b\u30fb\u98fc\u6599\u30fb\u4fdd\u967a\u4e0d\u8981\u3002\u5178\u578b\u7684\u306aROI\u56de\u53ce\u671f\u9593\u306f18\uff5e24\u30f6\u6708\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6HKJC',
    caseBadge: '\u5c0e\u5165\u4e8b\u4f8b',
    caseTitle: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6 \u2014 \u30d7\u30ed\u9a0e\u624b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0',
    caseDesc: 'HKJC\u306fMS.30P\u3092\u9a0e\u624b\u306e\u4f53\u80fd\u30fb\u59ff\u52e2\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u306e\u4e2d\u6838\u6a5f\u5668\u3068\u3057\u3066\u5c0e\u5165\u3002\u5e74\u4e2d\u7121\u4f11\u7a3c\u50cd\u3057\u30ec\u30fc\u30b9\u524d\u306e\u30a6\u30a9\u30fc\u30e0\u30a2\u30c3\u30d7\u3068\u6280\u8853\u5b9a\u7740\u3092\u652f\u63f4\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u6b21\u306e\u3088\u3046\u306a\u65b9\u306b\u6700\u9069\u3067\u3059',
    fits: [
      { title: '\u30ec\u30c3\u30b9\u30f3\u306e\u5bc6\u5ea6\u3092\u9ad8\u3081\u305f\u3044', desc: '1\u53f0\u3067\u65e5\u306b8\uff5e12\u540d\u5bfe\u5fdc\u53ef\u80fd\u3002\u5929\u5019\u3084\u9a6c\u306e\u72b6\u614b\u306b\u5de6\u53f3\u3055\u308c\u305a\u7a3c\u50cd\u7387\u3068\u53ce\u76ca\u3092\u5927\u5e45\u5411\u4e0a\u3002' },
      { title: '\u30c7\u30fc\u30bf\u99c6\u52d5\u306e\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\u304c\u5fc5\u8981', desc: 'AI\u304c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30d0\u30e9\u30f3\u30b9\u30fb\u59ff\u52e2\u30c7\u30fc\u30bf\u3092\u751f\u6210\u3002\u79d1\u5b66\u7684\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u6c42\u3081\u308b\u4f1a\u54e1\u3092\u5438\u5f15\u3002' },
      { title: '\u904b\u55b6\u30b3\u30b9\u30c8\u3092\u62bc\u3055\u3048\u305f\u3044', desc: '\u9a6c\u306e\u98fc\u8a2d\u30fb\u517d\u533b\u30fb\u4fdd\u967a\u4e0d\u8981\u3002\u4e00\u5ea6\u306e\u8a2d\u5099\u6295\u8cc4\u3067\u5b89\u5b9a\u3057\u305f\u4f4e\u30b3\u30b9\u30c8\u904b\u55b6\u3002ROI\u56de\u53ce\u306f\u901a\u5e3812\uff5e24\u30f6\u6708\u3002' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u30af\u30e9\u30d6\u306b\u5fc5\u8981\u306a\u53f0\u6570\u306f\uff1f', a: '\u591a\u304f\u306e\u30af\u30e9\u30d6\u306f1\u53f4MS.30P\uff08\u4e0a\u7d1a\u8005\u7528\uff09\uff0b1\uff5e2\u53f4MS.30\uff08\u521d\u5fc3\u8005\u30b0\u30eb\u30fc\u30d7\u7528\uff09\u304b\u3089\u59cb\u3081\u307e\u3059\u3002\u7121\u6599\u306e\u30ad\u30e3\u30d1\u30b7\u30c6\u30a3\u30d7\u30e9\u30f3\u30cb\u30f3\u30b0\u548b\u8ac7\u3092\u53d7\u4ed8\u3051\u3066\u3044\u307e\u3059\u3002' },
      { q: '\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u672c\u7269\u306e\u9a6c\u3092\u5b8c\u5168\u306b\u7f6e\u304d\u63db\u3048\u3089\u308c\u307e\u3059\u304b\uff1f', a: '\u88dc\u5b8c\u7684\u306a\u5f79\u5272\u3067\u3059\u3002\u53cd\u5fa9\u7df4\u7fd2\u30fb\u4f53\u80fd\u8abf\u6574\u30fb\u56e8\u65e5\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u306b\u5f37\u304f\u3001\u672c\u7269\u306e\u9a6c\u3092\u9ad8\u4fa1\u5024\u306a\u8a13\u7df4\u306b\u5c08\u5ff5\u3067\u304d\u307e\u3059\u3002' },
      { q: 'ROI\u56de\u53ce\u306e\u76ee\u5b89\u306f\uff1f', a: '\u30af\u30e9\u30d6\u306e\u5834\u5408\u3001\u901a\u5e3812\uff5e24\u30f6\u6708\u3067\u56de\u53ce\u3067\u304d\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0ROI\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3082\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u30af\u30e9\u30d6\u5411\u3051\u30ab\u30b9\u30bf\u30e0\u30d7\u30e9\u30f3\u3092\u53d6\u5f97',
    ctaSub: '\u65bd\u8a2d\u898f\u6a21\u3001\u4f1a\u54e1\u6570\u3001\u8a13\u7df4\u76ee\u6a19\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u300224\u6642\u9593\u4ee5\u5185\u306b\u6a19\u6e96\u69cb\u6210\u6848\u3092\u56de\u7b54\u3057\u307e\u3059\u3002',
    ctaBtn1: '\u30ab\u30b9\u30bf\u30e0\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b',
    ctaBtn2: '\u88fd\u54c1\u3092\u6bd4\u8f03\u3059\u308b',
    viewDetail: '\u8a73\u7d30\u3092\u898b\u308b \u2192',
    viewCase: '\u5c0e\u5165\u4e8b\u4f8b\u3092\u898b\u308b \u2192',
  },
  ko: {
    label: '\uc194\ub8e8\uc158',
    h1: ['\uc2b9\ub9c8 \ud074\ub7fd &', '\uc804\ubb38 \ud2b8\ub808\uc774\ub2dd \uc13c\ud130'],
    heroSub: '\uc2e4\ub9c8 \ud6c8\ub828\uc758 \ub192\uc740 \ube44\uc6a9\uacfc \uc704\ud5d8\uc774 \uacaa\uc815\ub418\uc2ed\ub2c8\uae4c? \uc2dc\ubbac\ub808\uc774\ud130\ub85c \uc5f0\uc911 \uace0\uac15\ub3c4 \ud6c8\ub828\uc744 \uc2e4\ud604\ud558\uc138\uc694.',
    heroAlt: '\uc2b9\ub9c8 \ud074\ub7fd \uc804\ubb38 \ud2b8\ub808\uc774\ub2dd \uc13c\ud130',
    recTitle: '\uad8c\uc7a5 \uad6c\uc131',
    products: [
      { tag: '\ud50c\ub798\uadf8\uc29d', name: 'Horse-MS.30P', desc: '6\ucd95 \ubaa8\uc158 \ud50c\ub7ab\ud3fc \uc7a5\ucc29 \uc804\ubb38\uac00 \uc2b9\ub9c8 \uc2dc\ubbac\ub808\uc774\ud130. AI \uc2e4\uc2dc\uac04 \uc790\uc138 \uad50\uc815. \uace0\uc218 \uae30\uc218 \ud6c8\ub828\uc5d0 \uc801\ud569.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\uad50\uc721\uc6a9', name: 'Pony-MS.30', desc: '\ucd08\ubcf4\uc790 \uadf8\ub8f9 \ub808\uc2a8\uc5d0 \uc801\ud569\ud55c \uc2a4\ub9c8\ud2b8 \uad50\uc721 \uc2dc\ubbac\ub808\uc774\ud130. \ucf54\uce58 \uc5c5\ubb34\uc2dc\uac04 \uc808\uac10, \ud45c\uc900\ud654\ub41c \uad50\uc721.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\ud074\ub7fd\uc758 \ud575\uc2ec \uc7a5\uc810',
    advantages: [
      { title: '365\uc77c \ud6c8\ub828 \uac00\ub2a5', desc: '\ub0a0\uc528\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uc5f0\uc911 \uc6b4\uc601. \ud558\ub8e8 8\uc5d0\uc11c 12\uba85\uc758 \uae30\uc218\ub97c \ucf54\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
      { title: '\ub370\uc774\ud130 \uae30\ubc18 \ud6c8\ub828 \ub9ac\ud3ec\ud2b8', desc: '\ub9e4 \uc138\uc158\ub9c8\ub2e4 \uc790\uc138\u00b7\ubc38\ub7f0\uc2a4\u00b7\ub9ac\ub4ec \uc810\uc218\ub97c \uc790\ub3d9 \uc0dd\uc131. \ucf54\uce58\uac00 \uc989\uc2dc \ubb38\uc81c\uc810\uc744 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
      { title: '\uc6b4\uc601 \ube44\uc6a9 \ub300\ud3ed \uc808\uac10', desc: '\ub9c8\uad6c\uac04\u00b7\uc218\uc758\uc0ac\u00b7\uc0ac\ub8cc\u00b7\ubcf4\ud5d8\ub8cc \ubd88\ud544\uc694. \uc77c\ubc18\uc801\uc778 ROI \ud68c\uc218 \uae30\uac04\uc740 18\uc5d024\uac1c\uc6d4.' },
    ],
    caseAlt: '\ud64d\ucf69 \uc7ac\ud0a4\ud074\ub7fd HKJC',
    caseBadge: '\uc2e4\uc81c \uc0ac\ub840',
    caseTitle: '\ud64d\ucf69 \uc7ac\ud0a4\ud074\ub7fd \u2014 \ud504\ub85c \uae30\uc218 \ud2b8\ub808\uc774\ub2dd \uc2dc\uc2a4\ud15c',
    caseDesc: 'HKJC\ub294 MS.30P\ub97c \uae30\uc218 \uccb4\ub825 \ubc0f \uc790\uc138 \ud6c8\ub828\uc758 \ud575\uc2ec \uc7a5\ube44\ub85c \ub3c4\uc785\ud558\uc5ec \uc5f0\uc911 \ubb34\ud734 \uc6b4\uc601\ud558\uba70 \uacbd\uc8fc \uc804 \uc8fc\uc694 \ud6c8\ub828\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\ub2e4\uc74c\uc5d0 \ud574\ub2f9\ud558\uc2dc\uba74 \ucd5c\uc801\uc758 \uc120\ud0dd\uc785\ub2c8\ub2e4',
    fits: [
      { title: '\ub808\uc2a8 \uc218\uc6a9\ub825\uc744 \ub192\uc774\uace0 \uc2f6\uc73c\uc2e4 \ub54c', desc: '\ud558\ub8e8 8\uc5d012\uba85 \ub300\uc751 \uac00\ub2a5. \ub0a0\uc528\ub098 \ub9d0\uc758 \uc0c1\ud0dc\uc640 \uad00\uacc4\uc5c6\uc774 \uc548\uc815\uc801\uc73c\ub85c \uc6b4\uc601\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
      { title: '\ub370\uc774\ud130 \uae30\ubc18 \uad00\ub9ac\uac00 \ud544\uc694\ud560 \ub54c', desc: 'AI\uac00 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubc38\ub7f0\uc2a4\uc640 \uc790\uc138 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\uc5ec \uacfc\ud559\uc801 \ud6c8\ub828\uc744 \uc6d0\ud558\ub294 \ud68c\uc6d0\uc744 \uc720\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
      { title: '\uc6b4\uc601 \ube44\uc6a9\uc744 \uc904\uc774\uace0 \uc2f6\uc73c\uc2e4 \ub54c', desc: '\ub9d0 \uad00\ub9ac\u00b7\uc218\uc758\uc0ac\u00b7\ubcf4\ud5d8\ub8cc \ubd88\ud544\uc694. \uc77c\ud68c\uc131 \uc7a5\ube44 \ud22c\uc790\ub85c \uc548\uc815\uc801\uc778 \uc800\ube44\uc6a9 \uc6b4\uc601. ROI 12\uc5d024\uac1c\uc6d4.' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\ud074\ub7fd\uc5d0 \uc5bc\ub9c8\ub098 \ud544\uc694\ud55c\uac00\uc694?', a: '\ub300\ubd80\ubd84\uc758 \ud074\ub7fd\uc740 MS.30P 1\ub300\uc640 MS.30 1\ub0982\ub300\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4. \ubb34\ub8cc \uc6a9\ub7c9 \uacc4\ud68d \uc0c1\ub2f4\uc744 \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.' },
      { q: '\uc2dc\ubbac\ub808\uc774\ud130\uac00 \uc2e4\ub9c8\ub97c \uc644\uc804\ud788 \ub300\uccb4\ud560 \uc218 \uc788\ub098\uc694?', a: '\ubcf4\uc644\uc801\uc778 \uc5ed\ud560\uc785\ub2c8\ub2e4. \ubc18\ubcf5 \uc5f0\uc2b5\u00b7\uccb4\ub825 \uc870\uc815\u00b7\ub9c8\uc2a4\ud130 \uc218\uc5c5 \ub4f1\uc5d0\uc11c \ub6f0\uc5b4\ub098\uba70 \uc2e4\ub9c8\ub97c \uace0\uac00\uce58 \ud6c8\ub828\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\uac8c \uc2dc\uac04\uc744 \ud655\ubcf4\ud574\uc90d\ub2c8\ub2e4.' },
      { q: 'ROI \ud68c\uc218 \uc608\uc0c1 \uae30\uac04\uc740?', a: '\ud074\ub7fd\uc758 \uacbd\uc6b0 \uc77c\ubc18\uc801\uc73c\ub85c 12\uc5d024\uac1c\uc6d4 \ub0b4 \ud68c\uc218\ud569\ub2c8\ub2e4. \ub9de\ucda4\ud615 ROI \uc2dc\ubbac\ub808\uc774\uc158\ub3c4 \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
    ],
    ctaTitle: '\ud074\ub7fd \ub9de\ucda4 \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaSub: '\uc2dc\uc124 \uaddc\ubaa8\uc640 \ud6c8\ub828 \ubaa9\ud45c\ub97c \uc54c\ub824\uc8fc\uc138\uc694. 24\uc2dc\uac04 \uc774\ub0b4 \ub2f5\ubcc0\ub4dc\ub9bd\ub2c8\ub2e4.',
    ctaBtn1: '\ub9de\ucda4 \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaBtn2: '\uc81c\ud488 \ube44\uad50',
    viewDetail: '\uc0c1\uc138 \ubcf4\uae30 \u2192',
    viewCase: '\uc804\uccb4 \uc0ac\ub840 \ubcf4\uae30 \u2192',
  },
  es: {
    label: 'Soluciones',
    h1: ['Clubes Ecuestres &', 'Centros de Entrenamiento Profesional'],
    heroSub: '\u00bfEl alto costo y los riesgos del entrenamiento con caballos reales te limitan? Los simuladores permiten entrenar todo el a\u00f1o con alta intensidad, sin lesiones ni gastos de caballos.',
    heroAlt: 'Club ecuestre y centro de entrenamiento profesional',
    recTitle: 'Configuraci\u00f3n Recomendada',
    products: [
      { tag: 'Opci\u00f3n Insignia', name: 'Horse-MS.30P', desc: 'Simulador profesional de doma con plataforma de 6 ejes y correcci\u00f3n de postura en tiempo real por IA. Ideal para jinetes avanzados y preparaci\u00f3n competitiva.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: 'Unidad de Ense\u00f1anza', name: 'Pony-MS.30', desc: 'Simulador inteligente para clases grupales de principiantes. Estandariza la instrucci\u00f3n y reduce las horas del instructor.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: 'Ventajas Clave para Clubes',
    advantages: [
      { title: 'Entrena 365 D\u00edas al A\u00f1o', desc: 'Sin limitaciones clim\u00e1ticas ni de caballos. Una unidad puede atender de 8 a 12 jinetes al d\u00eda.' },
      { title: 'Informes de Entrenamiento Basados en Datos', desc: 'Cada sesi\u00f3n genera autom\u00e1ticamente puntuaciones de postura, equilibrio y ritmo. Los entrenadores identifican problemas al instante.' },
      { title: 'Reducci\u00f3n Dr\u00e1stica de Costos Operativos', desc: 'Sin establos, veterinarios, forraje ni seguros. El ROI t\u00edpico es de 18 a 24 meses.' },
    ],
    caseAlt: 'Hong Kong Jockey Club HKJC',
    caseBadge: 'Caso Real',
    caseTitle: 'Hong Kong Jockey Club \u2014 Sistema de Entrenamiento para Jinetes Profesionales',
    caseDesc: 'HKJC integr\u00f3 el MS.30P como equipo central de entrenamiento f\u00edsico y postural para jinetes, operando durante todo el a\u00f1o.',
    fitsLabel: 'ESTA SOLUCI\u00d3N ES PARA TI SI\u2026',
    fitsTitle: 'Esta Soluci\u00f3n Es Ideal Si\u2026',
    fits: [
      { title: 'Quieres Aumentar la Capacidad de Clases', desc: 'Un simulador atiende de 8 a 12 jinetes al d\u00eda sin depender del clima ni del estado de los caballos.' },
      { title: 'Necesitas Gesti\u00f3n Basada en Datos', desc: 'La IA genera informes en tiempo real de equilibrio y postura para atraer a miembros premium orientados a la ciencia.' },
      { title: 'Quieres Controlar los Costos Operativos', desc: 'Sin cuidado de caballos, veterinario ni seguro. Inversi\u00f3n \u00fanica con costos operativos estables. ROI: 12 a 24 meses.' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfCu\u00e1ntos simuladores necesita un club t\u00edpico?', a: 'La mayor\u00eda de los clubes comienzan con 1 MS.30P para entrenamiento avanzado y 1\u20132 MS.30 para clases grupales de principiantes. Ofrecemos consultas gratuitas de planificaci\u00f3n de capacidad.' },
      { q: '\u00bfPueden los simuladores reemplazar completamente al caballo real?', a: 'Los simuladores complementan, no reemplazan el entrenamiento con caballos reales. Destacan en ejercicios repetitivos, acondicionamiento f\u00edsico y sesiones en d\u00edas de lluvia.' },
      { q: '\u00bfCu\u00e1l es el plazo t\u00edpico de recuperaci\u00f3n de la inversi\u00f3n?', a: 'Los clubes suelen recuperar su inversi\u00f3n en 12 a 24 meses gracias al aumento de clases, la reducci\u00f3n de costos de caballos y los precios premium.' },
    ],
    ctaTitle: 'Obtener un Plan Personalizado para Tu Club',
    ctaSub: 'Comp\u00e1rtenos el tama\u00f1o de tu instalaci\u00f3n y tus objetivos de entrenamiento. Respondemos en 24 horas.',
    ctaBtn1: 'Obtener Propuesta Personalizada',
    ctaBtn2: 'Comparar Productos',
    viewDetail: 'Ver Detalles \u2192',
    viewCase: 'Ver Caso Completo \u2192',
  },
  de: {
    label: 'L\u00f6sungen',
    h1: ['Reitclubs &', 'Professionelle Trainingszentren'],
    heroSub: 'Hohe Kosten, Sicherheitsrisiken und Wetterh\u00fcrden beim Reiten? Unsere Simulatoren erm\u00f6glichen ganzj\u00e4hriges Hochleistungstraining \u2014 ohne Verletzungen, ohne Pferdek\u00f6sten.',
    heroAlt: 'Reitclub und professionelles Trainingszentrum',
    recTitle: 'Empfohlene Konfiguration',
    products: [
      { tag: 'Flaggschiff', name: 'Horse-MS.30P', desc: 'Professioneller Dressur-Simulator mit 6-Achs-Bewegungsplattform und KI-Echtzeit-Haltungskorrektur. Ideal f\u00fcr fortgeschrittene Reiter und Wettkampfvorbereitung.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: 'Lehreinheit', name: 'Pony-MS.30', desc: 'Smarter Lehr-Simulator f\u00fcr Anf\u00e4nger-Gruppenunterricht. Standardisiert die Ausbildung und reduziert Trainerzeiten.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: 'Wichtigste Vorteile f\u00fcr Clubs',
    advantages: [
      { title: '365 Tage Training', desc: 'Kein Wetter, keine m\u00fcden Pferde, keine Platzbeschr\u00e4nkungen. Eine Einheit kann t\u00e4glich 8\u201312 Reiter betreuen.' },
      { title: 'Datenbasierte Trainingsberichte', desc: 'Jede Einheit generiert automatisch Haltungs-, Gleichgewichts- und Rhythmuswertungen.' },
      { title: 'Drastisch reduzierte Betriebskosten', desc: 'Kein Stall, kein Tier\u00e4rzte, kein Futter, keine Versicherung. Typische ROI-Zeit: 18\u201324 Monate.' },
    ],
    caseAlt: 'Hong Kong Jockey Club HKJC',
    caseBadge: 'Praxisfall',
    caseTitle: 'Hong Kong Jockey Club \u2014 Professionelles Jockey-Trainingssystem',
    caseDesc: 'HKJC integrierte MS.30P als Kernger\u00e4t f\u00fcr Fitness- und Haltungstraining der Jockeys, das ganzj\u00e4hrig l\u00e4uft.',
    fitsLabel: 'DIESE L\u00d6SUNG IST F\u00dcR SIE, WENN\u2026',
    fitsTitle: 'Diese L\u00f6sung Passt Zu Ihnen, Wenn\u2026',
    fits: [
      { title: 'Sie die Kurskapazit\u00e4t erh\u00f6hen m\u00f6chten', desc: 'Ein Simulator betreut t\u00e4glich 8\u201312 Reiter unabh\u00e4ngig von Wetter oder Pferdezustand.' },
      { title: 'Sie datenbasiertes Management ben\u00f6tigen', desc: 'KI generiert Echtzeit-Gleichgewichts- und Haltungsberichte zur Gewinnung qualit\u00e4tsbewusster Mitglieder.' },
      { title: 'Sie die Betriebskosten senken wollen', desc: 'Keine Pflegek\u00f6sten, Tier\u00e4rzte oder Versicherungen. Einmalige Investition mit stabilen Betriebskosten. ROI: 12\u201324 Monate.' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'Wie viele Simulatoren braucht ein typischer Club?', a: 'Die meisten Clubs beginnen mit 1 MS.30P f\u00fcr Fortgeschrittene und 1\u20132 MS.30 f\u00fcr Anf\u00e4ngergruppen. Wir bieten kostenlose Kapazit\u00e4tsplanungsberatung an.' },
      { q: 'K\u00f6nnen Simulatoren echte Pferde vollst\u00e4ndig ersetzen?', a: 'Simulatoren erg\u00e4nzen das Training mit echten Pferden. Sie eignen sich besonders f\u00fcr wiederholte \u00dcbungen, Konditionierung und Regentage.' },
      { q: 'Wie lange dauert die ROI-R\u00fcckgewinnung?', a: 'Clubs erholen sich typischerweise innerhalb von 12\u201324 Monaten durch erh\u00f6hte Kurskapazit\u00e4t, reduzierte Pferdek\u00f6sten und Premiumpreise.' },
    ],
    ctaTitle: 'Individuellen Plan f\u00fcr Ihren Club Erhalten',
    ctaSub: 'Teilen Sie uns Geb\u00e4udegr\u00f6\u00dfe und Trainingsziele mit. Wir antworten innerhalb von 24 Stunden.',
    ctaBtn1: 'Individuelles Angebot Erhalten',
    ctaBtn2: 'Produkte Vergleichen',
    viewDetail: 'Details Anzeigen \u2192',
    viewCase: 'Vollst\u00e4ndigen Fall Anzeigen \u2192',
  },
  ar: {
    label: '\u062d\u0644\u0648\u0644',
    h1: ['\u0623\u0646\u062f\u064a\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 &', '\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629'],
    heroSub: '\u062a\u0643\u0627\u0644\u064a\u0641 \u0628\u0627\u0647\u0638\u0629 \u0648\u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0639\u0644\u0649 \u0627\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629\u061f \u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u062e\u064a\u0644 \u062a\u062a\u064a\u062d \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0637\u0648\u0627\u0644 \u0627\u0644\u0639\u0627\u0645 \u0628\u062f\u0648\u0646 \u0625\u0635\u0627\u0628\u0627\u062a \u0623\u0648 \u062a\u0643\u0627\u0644\u064a\u0641 \u0625\u0636\u0627\u0641\u064a\u0629.',
    heroAlt: '\u0646\u0627\u062f\u064a \u0641\u0631\u0648\u0633\u064a\u0629 \u0648\u0645\u0631\u0643\u0632 \u062a\u062f\u0631\u064a\u0628 \u0627\u062d\u062a\u0631\u0627\u0641\u064a',
    recTitle: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647',
    products: [
      { tag: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0631\u0627\u0626\u062f', name: 'Horse-MS.30P', desc: '\u0645\u062d\u0627\u0643\u064a \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0628\u0645\u0646\u0635\u0629 6 \u0645\u062d\u0627\u0648\u0631 \u0648\u062a\u0635\u062d\u064a\u062d \u0627\u0644\u0648\u0636\u0639\u064a\u0629 \u0641\u0648\u0631\u064a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a. \u0645\u062b\u0627\u0644\u064a \u0644\u0644\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u064a\u0646.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
      { tag: '\u0648\u062d\u062f\u0629 \u062a\u0639\u0644\u064a\u0645\u064a\u0629', name: 'Pony-MS.30', desc: '\u0645\u062d\u0627\u0643\u064a \u062a\u0639\u0644\u064a\u0645\u064a \u0630\u0643\u064a \u0644\u062f\u0631\u0648\u0633 \u0627\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646 \u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0629. \u064a\u0642\u0644\u0644 \u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0645\u062f\u0631\u0628 \u0648\u064a\u0648\u062d\u062f \u0627\u0644\u062a\u0639\u0644\u064a\u0645.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
    ],
    advTitle: '\u0645\u0632\u0627\u064a\u0627 \u0627\u0644\u0623\u0646\u062f\u064a\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
    advantages: [
      { title: '\u062a\u062f\u0631\u064a\u0628 \u0637\u0648\u0627\u0644 \u0627\u0644\u0639\u0627\u0645', desc: '\u0628\u062f\u0648\u0646 \u0642\u064a\u0648\u062f \u0645\u0646\u0627\u062e\u064a\u0629 \u0623\u0648 \u062a\u0639\u0628 \u0627\u0644\u062e\u064a\u0648\u0644. \u062c\u0647\u0627\u0632 \u0648\u0627\u062d\u062f \u064a\u062e\u062f\u0645 8\u201312 \u0641\u0627\u0631\u0633\u064b\u0627 \u064a\u0648\u0645\u064a\u064b\u0627.' },
      { title: '\u062a\u0642\u0627\u0631\u064a\u0631 \u062a\u062f\u0631\u064a\u0628 \u0645\u0633\u062a\u0646\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a', desc: '\u0643\u0644 \u062c\u0644\u0633\u0629 \u062a\u0648\u0644\u062f \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u0648\u0636\u0639\u064a\u0629 \u0648\u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0648\u0627\u0644\u0625\u064a\u0642\u0627\u0639. \u064a\u062d\u062f\u062f \u0627\u0644\u0645\u062f\u0631\u0628 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0641\u0648\u0631\u064b\u0627.' },
      { title: '\u062e\u0641\u0636 \u062a\u0643\u0627\u0644\u064a\u0641 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u062f\u0631\u0627\u0645\u064a\u064b\u0627', desc: '\u0644\u0627 \u062d\u0627\u062c\u0629 \u0644\u0625\u0633\u0637\u0628\u0644\u0629 \u0623\u0648 \u0637\u0628\u064a\u0628 \u0628\u064a\u0637\u0631\u064a \u0623\u0648 \u062a\u0623\u0645\u064a\u0646. \u0641\u062a\u0631\u0629 \u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0646\u0645\u0648\u0630\u062c\u064a\u0629: 18\u201324 \u0634\u0647\u0631\u064b\u0627.' },
    ],
    caseAlt: '\u0646\u0627\u062f\u064a \u0633\u0628\u0627\u0642\u0627\u062a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a HKJC',
    caseBadge: '\u062d\u0627\u0644\u0629 \u062d\u0642\u064a\u0642\u064a\u0629',
    caseTitle: '\u0646\u0627\u062f\u064a \u0633\u0628\u0627\u0642\u0627\u062a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u2014 \u0646\u0638\u0627\u0645 \u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062c\u0648\u0643\u064a\u064a\u0646 \u0627\u0644\u0645\u062d\u062a\u0631\u0641\u064a\u0646',
    caseDesc: '\u0627\u0639\u062a\u0645\u062f HKJC \u0627\u0644\u0645\u062d\u0627\u0643\u064a MS.30P \u062c\u0647\u0627\u0632\u064b\u0627 \u0645\u062d\u0648\u0631\u064a\u064b\u0627 \u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0644\u064a\u0627\u0642\u0629 \u0648\u0627\u0644\u0648\u0636\u0639\u064a\u0629 \u0644\u0644\u062c\u0648\u0643\u064a\u064a\u0646\u060c \u064a\u0639\u0645\u0644 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 \u0627\u0644\u0639\u0627\u0645.',
    fitsLabel: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0625\u0630\u0627\u2026',
    fitsTitle: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0627\u0644\u0623\u0646\u0633\u0628 \u0625\u0630\u0627\u2026',
    fits: [
      { title: '\u062a\u0631\u064a\u062f \u0632\u064a\u0627\u062f\u0629 \u0637\u0627\u0642\u0629 \u0627\u0633\u062a\u064a\u0639\u0627\u0628 \u0627\u0644\u062f\u0631\u0648\u0633', desc: '\u062c\u0647\u0627\u0632 \u0648\u0627\u062d\u062f \u064a\u062e\u062f\u0645 8\u201312 \u0641\u0627\u0631\u0633\u064b\u0627 \u064a\u0648\u0645\u064a\u064b\u0627 \u0628\u063a\u0636 \u0627\u0644\u0646\u0638\u0631 \u0639\u0646 \u0627\u0644\u0637\u0642\u0633.' },
      { title: '\u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0625\u062f\u0627\u0631\u0629 \u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a', desc: '\u064a\u0648\u0644\u062f \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u062a\u0642\u0627\u0631\u064a\u0631 \u0641\u0648\u0631\u064a\u0629 \u0644\u062c\u0630\u0628 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0645\u062a\u0645\u064a\u0632\u064a\u0646.' },
      { title: '\u062a\u0631\u064a\u062f \u062e\u0641\u0636 \u062a\u0643\u0627\u0644\u064a\u0641 \u0627\u0644\u062a\u0634\u063a\u064a\u0644', desc: '\u0644\u0627 \u062a\u0643\u0627\u0644\u064a\u0641 \u0631\u0639\u0627\u064a\u0629 \u0627\u0644\u062e\u064a\u0648\u0644 \u0623\u0648 \u0637\u0628\u064a\u0628 \u0628\u064a\u0637\u0631\u064a. \u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0644\u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629 \u0645\u0639 \u062a\u0643\u0627\u0644\u064a\u0641 \u062a\u0634\u063a\u064a\u0644 \u0645\u0646\u062e\u0641\u0636\u0629. ROI: 12\u201324 \u0634\u0647\u0631\u064b\u0627.' },
    ],
    faqTitle: '\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0643\u0645 \u0645\u062d\u0627\u0643\u064a\u064b\u0627 \u064a\u062d\u062a\u0627\u062c \u0627\u0644\u0646\u0627\u062f\u064a \u0627\u0644\u0639\u0627\u062f\u064a\u061f', a: '\u064a\u0628\u062f\u0623 \u0645\u0639\u0638\u0645 \u0627\u0644\u0623\u0646\u062f\u064a\u0629 \u0628\u062c\u0647\u0627\u0632 MS.30P \u0648\u0627\u062d\u062f \u0648\u062c\u0647\u0627\u0632\u064a MS.30 \u0644\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646. \u0646\u0642\u062f\u0645 \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0637\u0627\u0642\u0629 \u0645\u062c\u0627\u0646\u064b\u0627.' },
      { q: '\u0647\u0644 \u064a\u0645\u0643\u0646 \u0644\u0644\u0645\u062d\u0627\u0643\u064a\u0627\u062a \u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629 \u0643\u0644\u064a\u064b\u0627\u061f', a: '\u062a\u0643\u0645\u0644 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0645\u0639 \u0627\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629. \u062a\u062a\u0645\u064a\u0632 \u0641\u064a \u0627\u0644\u062a\u062f\u0631\u064a\u0628\u0627\u062a \u0627\u0644\u0645\u062a\u0643\u0631\u0631\u0629 \u0648\u0627\u0644\u062a\u0643\u064a\u064a\u0641 \u0627\u0644\u0628\u062f\u0646\u064a.' },
      { q: '\u0645\u0627 \u0647\u0648 \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a \u0627\u0644\u0646\u0645\u0648\u0630\u062c\u064a \u0644\u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0639\u0627\u0626\u062f \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u061f', a: '\u062a\u0633\u062a\u0631\u062f \u0627\u0644\u0623\u0646\u062f\u064a\u0629 \u0639\u0627\u062f\u0629\u064b \u0627\u0633\u062a\u062b\u0645\u0627\u0631\u0647\u0627 \u062e\u0644\u0627\u0644 12\u201324 \u0634\u0647\u0631\u064b\u0627.' },
    ],
    ctaTitle: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0646\u0627\u062f\u064a\u0643',
    ctaSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u062d\u062c\u0645 \u0645\u0646\u0634\u0623\u062a\u0643 \u0648\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u062a\u062f\u0631\u064a\u0628. \u0646\u0631\u062f \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.',
    ctaBtn1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0645\u062e\u0635\u0635',
    ctaBtn2: '\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
    viewDetail: '\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2192',
    viewCase: '\u0639\u0631\u0636 \u0627\u0644\u062d\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629 \u2192',
  },
};

const STATIC = {
  heroImg: '/images/case-hkjc.jpg',
  caseImg: '/images/case-hkjc.jpg',
  caseImgPosition: 'center center',
  caseLink: '/cases#hkjc',
  ctaBtn2Href: '/compare',
  jsonld: { name: 'Equestrian Club & Professional Training Center Solution', url: 'https://www.equestrian-simulators.com/solutions/club' },
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
          <div id="solution-fits-grid" style={{ display: 'grid', gap: '20px' }}>
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
