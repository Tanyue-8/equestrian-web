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
    h1: ['\u5c55\u4f1a\u4e0e', '\u4f53\u9a8c\u6d3b\u52a8'],
    heroSub: '\u60f3\u5728\u5c55\u4f1a\u3001\u5546\u573a\u6216\u6d3b\u52a8\u73b0\u573a\u63d0\u4f9b\u9a6c\u672f\u4f53\u9a8c\uff1f\u6a21\u62df\u9a6c\u5373\u88c5\u5373\u7528\uff0c\u5b89\u5168\u4e92\u52a8\uff0c\u8001\u5c11\u7686\u5b9c\uff0c\u5438\u5f15\u773c\u7403\u3002',
    heroAlt: '\u5c55\u4f1a\u4f53\u9a8c\u6d3b\u52a8\u9a6c\u672f\u6a21\u62df\u5668',
    recTitle: '\u63a8\u8350\u914d\u7f6e',
    products: [
      { tag: '\u5c55\u4f1a\u9996\u9009', name: 'Pony-MS.30', desc: '\u5c3a\u5bf8\u9002\u4e2d\uff0c30\u5206\u949f\u5185\u53ef\u5b8c\u6210\u79fb\u52a8\u90e8\u7f72\uff0c\u9002\u5408\u5546\u573a\u3001\u5c55\u4f1a\u3001\u6d3b\u52a8\u573a\u666f\uff0c\u5b89\u5168\u53cb\u597d\uff0c\u8001\u5c11\u7686\u5b9c\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'VIP\u4f53\u9a8c', name: 'Horse-MS.30P', desc: '\u9ad8\u7aef\u5c55\u4f1a\u6216VIP\u4e13\u533a\u9996\u9009\uff0c\u4e13\u4e1a\u4e09\u9879\u8d5b\u7ea7\u522b\u4f53\u9a8c\uff0c\u79d1\u6280\u611f\u5f3a\uff0c\u5438\u5f15\u9ad8\u7aef\u53c2\u89c2\u8005\u548c\u5a92\u4f53\u5173\u6ce8\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u5c55\u4f1a\u573a\u666f\u6838\u5fc3\u4f18\u52bf',
    advantages: [
      { title: '\u6d41\u91cf\u5165\u53e3 = \u4f53\u9a8c\u7ecf\u6d4e', desc: '\u9a6c\u672f\u6a21\u62df\u5668\u662f\u5929\u7136\u7684\u5c55\u53f0\u6d41\u91cf\u78c1\u94c1\uff0c\u6392\u961f\u4f53\u9a8c\u5e26\u6765\u793e\u4ea4\u5a92\u4f53\u81ea\u4f20\u64ad\uff0c\u589e\u5f3a\u54c1\u724c\u66dd\u5149\u548c\u5c55\u4f1a\u6548\u76ca\u3002' },
      { title: '2\u5c0f\u65f6\u5185\u5b8c\u6210\u90e8\u7f72', desc: '\u6a21\u5757\u5316\u8bbe\u8ba1\u652f\u6301\u5feb\u901f\u62c6\u88c5\uff0c\u5927\u578b\u5c55\u9986\u6216\u5ba4\u5916\u573a\u5730\u5747\u53ef\u90e8\u7f72\uff0c\u65e0\u9700\u6c38\u4e45\u56fa\u5b9a\uff0c\u7075\u6d3b\u642c\u8fc1\u3002' },
      { title: '\u5168\u5e74\u9f84\u6bb5\u53cb\u597d', desc: '\u901f\u5ea6\u548c\u96be\u5ea6\u53ef\u8c03\uff0c\u513f\u7ae5\u548c\u8001\u5e74\u4eba\u5747\u53ef\u5b89\u5168\u4f53\u9a8c\uff0c\u914d\u5408\u7ebf\u4e0b\u6d3b\u52a8\u63a8\u5e7f\u9a6c\u672f\u8fd0\u52a8\u548c\u54c1\u724c\u5f62\u8c61\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a\u5c55\u4f1a\u6d3b\u52a8',
    caseBadge: 'HKJC\u6d3b\u52a8',
    caseTitle: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a \u2014 \u54c1\u724c\u63a8\u5e7f\u4f53\u9a8c\u533a',
    caseDesc: '\u5728\u591a\u573a\u9ad8\u7aef\u8d5b\u4e8b\u548c\u54c1\u724c\u6d3b\u52a8\u4e2d\uff0c\u6a21\u62df\u9a6c\u4f5c\u4e3a\u4e92\u52a8\u4f53\u9a8c\u6838\u5fc3\u88c5\u5907\uff0c\u5438\u5f15\u5927\u91cf\u53c2\u89c2\u8005\u6392\u961f\u4f53\u9a8c\uff0c\u663e\u8457\u63d0\u5347\u73b0\u573a\u4e92\u52a8\u7387\u548c\u54c1\u724c\u8bb0\u5fc6\u5ea6\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd9\u5957\u65b9\u6848\u6700\u9002\u5408\u60a8',
    fits: [
      { title: '\u60a8\u7b56\u5212\u5c55\u4f1a\u3001\u54c1\u724c\u6d3b\u52a8\u6216\u5546\u573a\u63a8\u5e7f', desc: '\u77ed\u671f\u79df\u7528\u6216\u8d2d\u4e70\u5747\u53ef\uff0c\u6a21\u5757\u5316\u5feb\u901f\u90e8\u7f72\uff0c2\u5c0f\u65f6\u5185\u53ef\u5b8c\u6210\u5c55\u53f0\u641e\u5efa\uff0c\u914d\u5408\u6d3b\u52a8\u4e3b\u9898\u5b9a\u5236\u4f53\u9a8c\u6d41\u7a0b\u3002' },
      { title: '\u60a8\u9700\u8981\u9ad8\u4e92\u52a8\u6027\u7684\u4f53\u9a8c\u9879\u76ee', desc: '\u6bcf\u4f4d\u4f53\u9a8c\u8005\u5e73\u5747\u505c\u7559\u65f6\u95f4\u8d85\u8fc715\u5206\u949f\uff0c\u793e\u4ea4\u5a92\u4f53\u81ea\u53d1\u4f20\u64ad\uff0c\u914d\u5408\u4e92\u52a8\u8bc4\u5206\u7cfb\u7edf\u589e\u5f3a\u53c2\u4e0e\u611f\u548c\u5206\u4eab\u6b32\u3002' },
      { title: '\u60a8\u60f3\u4e3a\u6d3b\u52a8\u5f15\u5165\u79d1\u6280\u611f\u548c\u65b0\u5947\u611f', desc: '\u667a\u80fd\u9a6c\u672f\u6a21\u62df\u5668\u7ed3\u5408AI\u6570\u636e\u5206\u6790\uff0c\u662f\u6d3b\u52a8\u73b0\u573a\u7684\u79d1\u6280\u4eae\u70b9\uff0c\u9002\u5408\u79d1\u6280\u5c55\u3001\u4f53\u80b2\u54c1\u724c\u63a8\u5e7f\u548c\u4eb2\u5b50\u6d3b\u52a8\u3002' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u5c55\u4f1a\u6216\u6d3b\u52a8\u79df\u7528\u662f\u5426\u63d0\u4f9b\u77ed\u671f\u670d\u52a1\uff1f', a: '\u662f\u7684\uff0c\u6211\u4eec\u63d0\u4f9b\u77ed\u671f\u79df\u7528\u65b9\u6848\uff0c\u5305\u542b\u8fd0\u8f93\u3001\u5b89\u88c5\u3001\u4e13\u4e1a\u64cd\u4f5c\u4eba\u5458\u73b0\u573a\u652f\u6301\u548c\u62c6\u9664\u670d\u52a1\u3002\u8bf7\u63d0\u524d\u81f3\u5c112\u5468\u8054\u7cfb\u4ee5\u786e\u4fdd\u6863\u671f\u5b89\u6392\u3002' },
      { q: '\u6a21\u62df\u5668\u5728\u6237\u5916\u6d3b\u52a8\u4e2d\u53ef\u4ee5\u4f7f\u7528\u5417\uff1f', a: '\u8bbe\u5907\u4e3b\u8981\u8bbe\u8ba1\u7528\u4e8e\u5ba4\u5185\u6216\u6709\u9065\u853d\u7684\u534a\u5ba4\u5916\u573a\u5730\uff0c\u9700\u8981\u7a33\u5b9a\u7684220V\u7535\u6e90\u548c\u5e73\u6574\u5730\u9762\u3002\u6237\u5916\u4f7f\u7528\u9700\u8981\u641e\u5efa\u9632\u96e8\u9632\u6652\u68da\uff0c\u6211\u4eec\u53ef\u534f\u52a9\u8bc4\u4f30\u573a\u5730\u6761\u4ef6\u3002' },
    ],
    ctaTitle: '\u4e3a\u60a8\u7684\u6d3b\u52a8\u5b9a\u5236\u4f53\u9a8c\u65b9\u6848',
    ctaSub: '\u544a\u8bc9\u6211\u4eec\u6d3b\u52a8\u89c4\u6a21\u3001\u65f6\u95f4\u548c\u573a\u5730\u6761\u4ef6\uff0c\u6211\u4eec\u63d0\u4f9b\u5b8c\u6574\u7684\u5e03\u5c55\u65b9\u6848\u548c\u62a5\u4ef7',
    ctaBtn1: '\u83b7\u53d6\u6d3b\u52a8\u65b9\u6848',
    ctaBtn2: '\u5bf9\u6bd4\u4ea7\u54c1\u578b\u53f7',
    viewDetail: '\u67e5\u770b\u8be6\u60c5 \u2192',
    viewCase: '\u67e5\u770b\u5b8c\u6574\u6848\u4f8b \u2192',
  },
  en: {
    label: 'Solutions',
    h1: ['Exhibitions &', 'Experience Events'],
    heroSub: 'Want to offer an equestrian experience at a trade show, mall, or live event? The simulator deploys in minutes — safe, interactive, all ages welcome, and a guaranteed crowd-puller.',
    heroAlt: 'Equestrian simulator for exhibitions and experience events',
    recTitle: 'Recommended Configuration',
    products: [
      { tag: 'Best for Exhibitions', name: 'Pony-MS.30', desc: 'Mid-size footprint, mobile deployment in under 30 minutes. Perfect for malls, trade shows, and live events. Safe and approachable for all ages.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'VIP Experience', name: 'Horse-MS.30P', desc: 'First choice for premium exhibitions or VIP zones. Professional three-day event-level experience with strong tech appeal — draws high-end visitors and media attention.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Key Advantages for Exhibition Use',
    advantages: [
      { title: 'Foot Traffic Magnet = Experience Economy', desc: 'A natural crowd-puller on any exhibition floor. Queue-worthy experiences drive organic social media sharing and amplify brand exposure.' },
      { title: 'Full Deployment in Under 2 Hours', desc: 'Modular design for rapid set-up and teardown. Works in large convention halls or outdoor venues. No permanent fixing required — relocate freely.' },
      { title: 'All-Ages Friendly', desc: 'Speed and difficulty fully adjustable. Children and seniors alike can safely participate. Ideal alongside lifestyle, sports brand, or family activations.' },
    ],
    caseAlt: 'HKJC exhibition event',
    caseBadge: 'HKJC Activation',
    caseTitle: 'Hong Kong Jockey Club — Brand Experience Zone',
    caseDesc: 'Across multiple high-profile race events and brand activations, the simulator served as the interactive centrepiece — drawing long queues, generating significant social media traction, and measurably boosting on-site engagement.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: 'This Solution Is the Right Fit If\u2026',
    fits: [
      { title: 'You Are Planning a Trade Show, Brand Event, or Mall Activation', desc: 'Available for short-term hire or purchase. Modular fast deployment, full booth built in under 2 hours. Customise the experience flow to your event theme.' },
      { title: 'You Need a High-Engagement Experience Feature', desc: 'Average dwell time per participant exceeds 15 minutes. Spontaneous social media sharing. Gamified scoring enhances participation and the urge to share.' },
      { title: 'You Want to Bring Tech Wow-Factor to Your Event', desc: 'AI-powered equestrian simulators are a standout tech attraction — perfect for tech expos, sports brand campaigns, and family activity days.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'Do you offer short-term rental for exhibitions or events?', a: 'Yes. We provide short-term rental packages including transport, installation, on-site operator support, and dismantling. Please contact us at least 2 weeks in advance to confirm availability.' },
      { q: 'Can the simulator be used at outdoor events?', a: 'The equipment is primarily designed for indoor or semi-sheltered outdoor venues. A stable 220V power supply and level ground are required. For outdoor use, a rain and sun canopy must be erected — we can assist in evaluating site conditions.' },
    ],
    ctaTitle: 'Design a Custom Experience Package for Your Event',
    ctaSub: 'Tell us your event scale, dates, and venue conditions — we will provide a complete booth layout plan and quotation.',
    ctaBtn1: 'Get Event Proposal',
    ctaBtn2: 'Compare Products',
    viewDetail: 'View Details \u2192',
    viewCase: 'View Full Case \u2192',
  },
  ja: {
    label: '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3',
    h1: ['\u5c55\u793a\u4f1a\u30fb', '\u4f53\u9a13\u30a4\u30d9\u30f3\u30c8'],
    heroSub: '\u5c55\u793a\u4f1a\u3084\u30b7\u30e7\u30c3\u30d4\u30f3\u30b0\u30e2\u30fc\u30eb\u3067\u9a6c\u8853\u4f53\u9a13\u3092\u63d0\u4f9b\u3057\u305f\u3044\uff1f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u5373\u8a2d\u5373\u7528\u3002\u5b89\u5168\u3067\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u3001\u5e74\u9f62\u4e0d\u554f\u3002',
    heroAlt: '\u5c55\u793a\u4f1a\u30fb\u4f53\u9a13\u30a4\u30d9\u30f3\u30c8\u5411\u3051\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc',
    recTitle: '\u63a8\u5968\u69cb\u6210',
    products: [
      { tag: '\u5c55\u793a\u4f1a\u7b2c\u4e00\u9078\u629e', name: 'Pony-MS.30', desc: '\u9069\u5ea6\u306a\u30b5\u30a4\u30ba\u306730\u5206\u4ee5\u5185\u306b\u79fb\u52d5\u8a2d\u7f6e\u53ef\u80fd\u3002\u5546\u696d\u65bd\u8a2d\u3084\u5c55\u793a\u4f1a\u306b\u6700\u9069\u3002\u5e73\u548c\u5e74\u9f62\u5c64\u5bfe\u5fdc\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'VIP\u4f53\u9a13', name: 'Horse-MS.30P', desc: '\u9ad8\u7d1a\u5c55\u793a\u4f1a\u307e\u305f\u306fVIP\u30be\u30fc\u30f3\u306e\u7b2c\u4e00\u9078\u629e\u3002\u30d7\u30ed\u30ec\u30d9\u30eb\u306e\u9a6c\u8853\u4f53\u9a13\u3067\u9ad8\u7d1a\u8a2a\u554f\u8005\u3084\u30e1\u30c7\u30a3\u30a2\u306e\u6ce8\u76ee\u3092\u96c6\u3081\u308b\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u5c55\u793a\u4f1a\u5229\u7528\u306e\u4e3b\u306a\u30e1\u30ea\u30c3\u30c8',
    advantages: [
      { title: '\u96c6\u5ba2\u529b = \u4f53\u9a13\u30a8\u30b3\u30ce\u30df\u30fc', desc: '\u5c55\u793a\u30d5\u30ed\u30a2\u306e\u5929\u7136\u306a\u96c6\u5ba2\u30b9\u30dd\u30c3\u30c8\u3002\u884c\u5217\u306b\u4e26\u3076\u4f53\u9a13\u304cSNS\u3067\u81ea\u7136\u8155\u307c\u3048\u3057\u3001\u30d6\u30e9\u30f3\u30c9\u8a8d\u77e5\u5ea6\u3092\u697d\u3005\u3068\u5f15\u304d\u4e0a\u3052\u3002' },
      { title: '2\u6642\u9593\u4ee5\u5185\u306b\u5b8c\u5168\u5c55\u958b', desc: '\u30e2\u30b8\u30e5\u30fc\u30eb\u8a2d\u8a08\u3067\u8fc5\u901f\u7d44\u307f\u7acb\u3066\u30fb\u89e3\u4f53\u53ef\u80fd\u3002\u5927\u578b\u5c55\u793a\u5834\u3084\u5c4b\u5916\u30d9\u30cb\u30e5\u30fc\u306b\u3082\u5bfe\u5fdc\u3002\u6c38\u4e45\u56fa\u5b9a\u4e0d\u8981\u3002' },
      { title: '\u5168\u5e74\u9f62\u5c64\u5bfe\u5fdc', desc: '\u901f\u5ea6\u3068\u96e3\u6613\u5ea6\u3092\u8abf\u6574\u3067\u304d\u3001\u5b50\u4f9b\u304b\u3089\u9ad8\u9f62\u8005\u307e\u3067\u5b89\u5168\u306b\u697d\u3057\u3081\u307e\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u3084\u30d6\u30e9\u30f3\u30c9\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u306b\u6700\u9069\u3002' },
    ],
    caseAlt: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6\u5c55\u793a\u30a4\u30d9\u30f3\u30c8',
    caseBadge: 'HKJC\u30a2\u30af\u30c6\u30a3\u30d9\u30fc\u30b7\u30e7\u30f3',
    caseTitle: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6 \u2014 \u30d6\u30e9\u30f3\u30c9\u4f53\u9a13\u30be\u30fc\u30f3',
    caseDesc: '\u8907\u6570\u306e\u9ad8\u7d1a\u30ec\u30fc\u30b9\u30a4\u30d9\u30f3\u30c8\u3084\u30d6\u30e9\u30f3\u30c9\u30a2\u30af\u30c6\u30a3\u30d9\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u304c\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306e\u4e2d\u5fc3\u5b58\u5728\u3068\u3057\u3066\u6d3b\u8e8d\u3002\u9577\u3044\u884c\u5217\u3092\u5f15\u304d\u4ed8\u3051\u3001SNS\u3067\u5927\u304d\u306a\u30d0\u30ba\u3092\u5f15\u304d\u8d77\u3053\u3057\u305f\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u6b21\u306e\u3088\u3046\u306a\u65b9\u306b\u6700\u9069\u3067\u3059',
    fits: [
      { title: '\u5c55\u793a\u4f1a\u30fb\u30d6\u30e9\u30f3\u30c9\u30a4\u30d9\u30f3\u30c8\u30fb\u30b7\u30e7\u30c3\u30d4\u30f3\u30b0\u30e2\u30fc\u30eb\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u3092\u6848\u753b\u4e2d', desc: '\u77ed\u671f\u30ec\u30f3\u30bf\u30eb\u307e\u305f\u306f\u8cfc\u5165\u304c\u53ef\u80fd\u3002\u30e2\u30b8\u30e5\u30fc\u30eb\u5f0f\u8fc5\u901f\u5c55\u958b\u30672\u6642\u9593\u4ee5\u5185\u306b\u30d6\u30fc\u30b9\u5b8c\u6210\u3002\u30a4\u30d9\u30f3\u30c8\u30c6\u30fc\u30de\u306b\u5408\u308f\u305b\u305f\u4f53\u9a13\u30d5\u30ed\u30fc\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u3002' },
      { title: '\u9ad8\u30a8\u30f3\u30b2\u30fc\u30b8\u30e1\u30f3\u30c8\u306e\u4f53\u9a13\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u5fc5\u8981', desc: '\u4f53\u9a13\u8005\u4e00\u4eba\u5f53\u305f\u308a\u306e\u5e73\u5747\u7a7a\u304d\u6642\u9593\u306f15\u5206\u4ee5\u4e0a\u3002SNS\u3067\u306e\u81ea\u767a\u7684\u306a\u62e1\u6563\u3002\u30b2\u30fc\u30e0\u5316\u30b9\u30b3\u30a2\u30ea\u30f3\u30b0\u3067\u53c2\u52a0\u6b32\u6c42\u3092\u9ad8\u3081\u308b\u3002' },
      { title: '\u30a4\u30d9\u30f3\u30c8\u306b\u6280\u8853\u611f\u3068\u65b0\u9bae\u5473\u3092\u6301\u305f\u305b\u305f\u3044', desc: 'AI\u642d\u8f09\u306e\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u6280\u8853\u5c55\u3084\u30b9\u30dd\u30fc\u30c4\u30d6\u30e9\u30f3\u30c9\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u3001\u30d5\u30a1\u30df\u30ea\u30fc\u30a4\u30d9\u30f3\u30c8\u306b\u6700\u9069\u306a\u30cf\u30a4\u30e9\u30a4\u30c8\u3002' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u5c55\u793a\u4f1a\u3084\u30a4\u30d9\u30f3\u30c8\u5411\u3051\u306e\u77ed\u671f\u30ec\u30f3\u30bf\u30eb\u306f\u3042\u308a\u307e\u3059\u304b\uff1f', a: '\u306f\u3044\u3002\u8f38\u9001\u30fb\u8a2d\u7f6e\u30fb\u73fe\u5730\u30b9\u30bf\u30c3\u30d5\u30fb\u64a4\u53bb\u3092\u542b\u3080\u77ed\u671f\u30ec\u30f3\u30bf\u30eb\u30d7\u30e9\u30f3\u3092\u3054\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002\u5c11\u306a\u304f\u3068\u30822\u9031\u9593\u524d\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002' },
      { q: '\u5c4b\u5916\u30a4\u30d9\u30f3\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b\uff1f', a: '\u8a2d\u5099\u306f\u4e3b\u306b\u5c4b\u5185\u307e\u305f\u306f\u534a\u5c4b\u5916\u306e\u5834\u6240\u5411\u3051\u3067\u3059\u3002\u5b89\u5b9a\u3057\u305f220V\u96fb\u6e90\u3068\u5e73\u5766\u306a\u5730\u9762\u304c\u5fc5\u8981\u3067\u3059\u3002\u5c4b\u5916\u5229\u7528\u6642\u306f\u9632\u96e8\u30fb\u9632\u6691\u30c6\u30f3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002\u73fe\u5730\u8abf\u67fb\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u30a4\u30d9\u30f3\u30c8\u5411\u3051\u4f53\u9a13\u30d7\u30e9\u30f3\u3092\u5ba2\u5236\u5316',
    ctaSub: '\u30a4\u30d9\u30f3\u30c8\u306e\u898f\u6a21\u30fb\u65e5\u7a0b\u30fb\u4f1a\u5834\u6761\u4ef6\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u5b8c\u6574\u306a\u5c55\u793a\u30d7\u30e9\u30f3\u3068\u30af\u30aa\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002',
    ctaBtn1: '\u30a4\u30d9\u30f3\u30c8\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b',
    ctaBtn2: '\u88fd\u54c1\u3092\u6bd4\u8f03\u3059\u308b',
    viewDetail: '\u8a73\u7d30\u3092\u898b\u308b \u2192',
    viewCase: '\u5c0e\u5165\u4e8b\u4f8b\u3092\u898b\u308b \u2192',
  },
  ko: {
    label: '\uc194\ub8e8\uc158',
    h1: ['\uc804\uc2dc\ud68c \ubc0f', '\uccb4\ud5d8 \ud589\uc0ac'],
    heroSub: '\uc804\uc2dc\ud68c, \uc2fc, \ud589\uc0ac\uc5d0\uc11c \uc2b9\ub9c8 \uccb4\ud5d8\uc744 \uc81c\uacf5\ud558\uace0 \uc2f6\uc73c\uc2e4 \ub54c? \uc2dc\ubbac\ub808\uc774\ud130\ub294 \uc989\uc2dc \uc124\uce58 \uac00\ub2a5. \uc548\uc804\ud558\uace0 \uc778\ud130\ub799\ud2f0\ube0c\ud558\uba70 \uc5b4\ub4e0 \uc5f0\ub839\ub300\ub098 \ud658\uc601.',
    heroAlt: '\uc804\uc2dc\ud68c \ubc0f \uccb4\ud5d8 \ud589\uc0ac\uc6a9 \uc2b9\ub9c8 \uc2dc\ubbac\ub808\uc774\ud130',
    recTitle: '\uad8c\uc7a5 \uad6c\uc131',
    products: [
      { tag: '\uc804\uc2dc\ud68c \uc81c1\uc120\ud0dd', name: 'Pony-MS.30', desc: '\uc801\ub2f9\ud55c \ud06c\uae30\ub85c 30\ubd84 \uc774\ub0b4\uc5d0 \uc774\ub3d9 \uc124\uce58 \uac00\ub2a5. \uc2fc, \uc804\uc2dc\ud68c, \ud589\uc0ac\uc5d0 \uc801\ud569. \ubaa8\ub4e0 \uc5f0\ub839\ub300\uc5d0 \uc548\uc804.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'VIP \uccb4\ud5d8', name: 'Horse-MS.30P', desc: '\ud504\ub9ac\ubbf8\uc5c4 \uc804\uc2dc\ud68c \ubc0f VIP \uc874\uc758 \uc81c1\uc120\ud0dd. \ud504\ub85c\ud398\uc154\ub110 \uc2b9\ub9c8 \uccb4\ud5d8\uc73c\ub85c \uace0\uae09 \ubc29\ubb38\uc790\uc640 \ubbf8\ub514\uc5b4\uc758 \uc8fc\ubaa9\uc744 \uc5ec\ub294 \uc120\ud0dd.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\uc804\uc2dc\ud68c \ud65c\uc6a9 \ud575\uc2ec \uc7a5\uc810',
    advantages: [
      { title: '\ud2b8\ub798\ud53d \ub9c8\uadf8\ub137 = \uccb4\ud5d8 \uacbd\uc81c', desc: '\uc804\uc2dc\uc7a5\uc758 \uccb4\ud5d8 \uc911\uc2ec\uc9c0\ub85c\uc11c \uc790\uc5f0\uc2a4\ub7fd\uac8c \ub300\uae30\uc904\uc744 \ub9cc\ub4e4\uace0, SNS \uc790\uc5f0 \ud655\uc0b0\uc73c\ub85c \ube0c\ub79c\ub4dc \ub178\uc785\ub3c4\ub97c \ub192\uc784.' },
      { title: '2\uc2dc\uac04 \ub0b4 \uc644\uc804 \uc124\uce58', desc: '\ubaa8\ub4c8\ub7ec \uc124\uacc4\ub85c \ube60\ub978 \uc870\ub9bd\uacfc \ud574\uccb4 \uac00\ub2a5. \ub300\ud615 \uc804\uc2dc\uc7a5\uacfc \uc2e4\uc678 \ud589\uc0ac\uc7a5\uc5d0\ub3c4 \uc801\ud569. \uc601\uad6c \uace0\uc815 \ubd88\ud544\uc694.' },
      { title: '\ubaa8\ub4e0 \uc5f0\ub839\ub300 \ud658\uc601', desc: '\uc18d\ub3c4\uc640 \ub09c\uc774\ub3c4 \uc870\uc808 \uac00\ub2a5. \uc5b4\ub9b0\uc774\ubd80\ud130 \ub178\uc778\uae4c\uc9c0 \uc548\uc804\ud558\uac8c \uc990\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub77c\uc774\ud504\uc2a4\ud0c0\uc77c \ubc0f \uc2a4\ud3ec\uce20 \ube0c\ub79c\ub4dc \ud65c\uc131\ud654\uc5d0 \uc544\uc8fc \uc801\ud569.' },
    ],
    caseAlt: '\ud64d\ucf69 \uc790\ud0a4\ud074\ub7fd \uc804\uc2dc\ud68c \ud589\uc0ac',
    caseBadge: 'HKJC \uc561\ud2f0\ubca0\uc774\uc158',
    caseTitle: '\ud64d\ucf69 \uc790\ud0a4\ud074\ub7fd \u2014 \ube0c\ub79c\ub4dc \uccb4\ud5d8 \uc874',
    caseDesc: '\ub2e4\uc218\uc758 \uace0\uae09 \uacbd\ub9c8 \uc774\ubca4\ud2b8\uc640 \ube0c\ub79c\ub4dc \uc561\ud2f0\ubca0\uc774\uc158\uc5d0\uc11c \uc2dc\ubbac\ub808\uc774\ud130\uac00 \uc778\ud130\ub799\ud2f0\ube0c \uccb4\ud5d8\uc758 \ud575\uc2ec\uc73c\ub85c \ud65c\uc57d\ud558\uba70 \ub300\uae30 \uc904\uc744 \uc774\ub04c\uace0 SNS\uc5d0\uc11c \ud070 \ubc18\ud5a5\uc744 \uc77c\uc73c\ucf30\uc2b5\ub2c8\ub2e4.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\ub2e4\uc74c\uc5d0 \ud574\ub2f9\ud558\uc2dc\uba74 \ucd5c\uc801\uc758 \uc120\ud0dd\uc785\ub2c8\ub2e4',
    fits: [
      { title: '\uc804\uc2dc\ud68c, \ube0c\ub79c\ub4dc \ud589\uc0ac \ub610\ub294 \uc2dc \ud65c\uc131\ud654\ub97c \uae30\ud68d \uc911\uc77c \ub54c', desc: '\ub2e8\uae30 \ub80c\ud0c8 \ub610\ub294 \uad6c\ub9e4 \uac00\ub2a5. \ubaa8\ub4c8\ub7ec \ube60\ub978 \uc124\uce58\ub85c 2\uc2dc\uac04 \uc774\ub0b4 \ubd80\uc2a4 \uc644\uc131. \ud589\uc0ac \ud14c\ub9c8\uc5d0 \ub9de\ucdb0 \uccb4\ud5d8 \ud50c\ub85c\uc6b0 \ucef4\ucee4\uc2a4\ud0c0\ub9c8\uc774\uc988 \uac00\ub2a5.' },
      { title: '\ucc38\uc5ec\ub3c4 \ub192\uc740 \uccb4\ud5d8 \ucf58\ud150\uce20\uac00 \ud544\uc694\ud560 \ub54c', desc: '\ucc38\uac00\uc790 1\uc778\ub2f9 \ud3c9\uade0 \uccb4\ub958 \uc2dc\uac04 15\ubd84 \uc774\uc0c1. SNS \uc790\ubc1c\uc801 \ud655\uc0b0. \uac8c\uc784\ud654\ub41c \uc810\uc218\ub85c \ucc38\uc5ec\uc6d0\uc5d0\uac8c \ub3d9\uae30\uc5d0 \uc790\ubc1c\uc801\uc73c\ub85c \uacf5\uc720.' },
      { title: '\ud589\uc0ac\uc5d0 \ud14c\ud06c\ub2c8\uceec \uc601\uac10\uc744 \uc8fc\uace0 \uc2f6\uc744 \ub54c', desc: 'AI \uc2b9\ub9c8 \uc2dc\ubbac\ub808\uc774\ud130\ub294 \uae30\uc220 \uc804\uc2dc\ud68c, \uc2a4\ud3ec\uce20 \ube0c\ub79c\ub4dc \ud589\uc0ac, \ud328\ubc00\ub9ac \ub370\uc774 \ub4f1\uc5d0\uc11c \ub208\uc5d0 \ub744\ub294 \ud558\uc774\ub77c\uc774\ud2b8.' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\uc804\uc2dc\ud68c\ub098 \ud589\uc0ac \ub300\uc5ec\ub294 \ub2e8\uae30 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\ub098\uc694?', a: '\ub124. \uc6b4\uc1a1\uc758 \uc124\uce58\uc758 \ud604\uc7a5 \uc2a4\ud0dc\ud504 \uc9c0\uc6d0\uc744 \ud3ec\ud568\ud55c \ub2e8\uae30 \ub80c\ud0c8 \ud328\ud0a4\uc9c0\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc77c\uc815 \ud655\ub3d9\uc744 \uc704\ud574 \uc801\uc5b4\ub3c4 2\uc8fc \uc804\uc5d0 \ubb38\uc758\ud574 \uc8fc\uc138\uc694.' },
      { q: '\uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\uc678 \ud589\uc0ac\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?', a: '\uc7a5\ube44\ub294 \uc8fc\ub85c \uc2e4\ub0b4 \ub610\ub294 \ubc18\uc2e4\uc678 \uc7a5\uc18c\uc6a9\uc73c\ub85c \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc548\uc815\uc801\uc778 220V \uc804\uc6d0\uacfc \ud3c9\ud3c9\ud55c \ubc14\ub2e5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc2e4\uc678 \uc0ac\uc6a9 \uc2dc \ubc29\uc218\uc140 \uc0ac\ud3ec\uac00 \ud544\uc694\ud558\uba70 \ud604\uc7a5 \uc870\uc0ac\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4.' },
    ],
    ctaTitle: '\ud589\uc0ac\uc5d0 \ub9de\ub294 \ub9de\ucda4\ud615 \uccb4\ud5d8 \ud328\ud0a4\uc9c0 \uad6c\uc131',
    ctaSub: '\ud589\uc0ac \uaddc\ubaa8, \uc77c\uc815, \ud604\uc7a5 \uc870\uac74\uc744 \uc54c\ub824\uc8fc\uc138\uc694. \uc644\uc804\ud55c \ubd80\uc2a4 \ub808\uc774\uc544\uc6c3 \uacc4\ud68d\uacfc \uacac\uc801\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.',
    ctaBtn1: '\ud589\uc0ac \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaBtn2: '\uc81c\ud488 \ube44\uad50',
    viewDetail: '\uc0c1\uc138 \ubcf4\uae30 \u2192',
    viewCase: '\uc804\uccb4 \uc0ac\ub840 \ubcf4\uae30 \u2192',
  },
  es: {
    label: 'Soluciones',
    h1: ['Ferias y', 'Eventos de Experiencia'],
    heroSub: '\u00bfQuieres ofrecer una experiencia ecuestre en una feria, centro comercial o evento? El simulador se despliega en minutos \u2014 seguro, interactivo, apto para todas las edades.',
    heroAlt: 'Simulador ecuestre para ferias y eventos de experiencia',
    recTitle: 'Configuraci\u00f3n Recomendada',
    products: [
      { tag: 'Ideal para Ferias', name: 'Pony-MS.30', desc: 'Tama\u00f1o moderado, despliegue m\u00f3vil en menos de 30 minutos. Perfecto para centros comerciales, ferias y eventos. Seguro para todas las edades.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'Experiencia VIP', name: 'Horse-MS.30P', desc: 'Primera elecci\u00f3n para ferias premium o zonas VIP. Experiencia de nivel profesional que atrae visitantes de alto nivel y atenci\u00f3n de medios.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Ventajas Clave para Uso en Ferias',
    advantages: [
      { title: 'Im\u00e1n de P\u00fablico = Econom\u00eda de Experiencia', desc: 'Un polo de atracci\u00f3n natural en cualquier feria. Las experiencias con cola generan difusi\u00f3n org\u00e1nica en redes sociales y amplifican la presencia de marca.' },
      { title: 'Despliegue Completo en Menos de 2 Horas', desc: 'Dise\u00f1o modular para montaje y desmontaje r\u00e1pido. Funciona en grandes pabellones o al aire libre. Sin instalaci\u00f3n permanente.' },
      { title: 'Apto para Todas las Edades', desc: 'Velocidad y dificultad totalmente ajustables. Ni\u00f1os y personas mayores pueden participar con seguridad. Ideal para activaciones de estilo de vida y deporte.' },
    ],
    caseAlt: 'Evento de exhibici\u00f3n HKJC',
    caseBadge: 'Activaci\u00f3n HKJC',
    caseTitle: 'Hong Kong Jockey Club \u2014 Zona de Experiencia de Marca',
    caseDesc: 'En m\u00faltiples eventos de carreras de alto perfil y activaciones de marca, el simulador fue el centro interactivo \u2014 atrayendo largas colas y generando gran difusi\u00f3n en redes sociales.',
    fitsLabel: 'ESTA SOLUCI\u00d3N ES PARA TI SI\u2026',
    fitsTitle: 'Esta Soluci\u00f3n Es Ideal Si\u2026',
    fits: [
      { title: 'Planificas una Feria, Evento de Marca o Activaci\u00f3n en Centro Comercial', desc: 'Alquiler a corto plazo o compra disponibles. Despliegue r\u00e1pido modular, stand completo en menos de 2 horas. Flujo de experiencia personalizable al tema del evento.' },
      { title: 'Necesitas un Contenido de Experiencia de Alta Participaci\u00f3n', desc: 'Tiempo de permanencia promedio por participante superior a 15 minutos. Difusi\u00f3n espont\u00e1nea en redes. Puntuaci\u00f3n gamificada potencia la participaci\u00f3n y el deseo de compartir.' },
      { title: 'Quieres Aportar Factor Tecnol\u00f3gico a Tu Evento', desc: 'Los simuladores ecuestres con IA son una atracci\u00f3n tecnol\u00f3gica destacada \u2014 perfectos para exposiciones tecnol\u00f3gicas, campa\u00f1as de marcas deportivas y actividades familiares.' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfOfrecen servicio de alquiler a corto plazo para ferias o eventos?', a: 'S\u00ed. Ofrecemos paquetes de alquiler a corto plazo que incluyen transporte, instalaci\u00f3n, personal de apoyo in situ y desmontaje. Cont\u00e1ctenos con al menos 2 semanas de antelaci\u00f3n.' },
      { q: '\u00bfSe puede usar el simulador en eventos al aire libre?', a: 'El equipo est\u00e1 principalmente dise\u00f1ado para interiores o exteriores semiprotegidos. Se necesita suministro el\u00e9ctrico estable de 220V y suelo nivelado. Para uso exterior se requiere una carpa protectora \u2014 podemos ayudar a evaluar las condiciones del lugar.' },
    ],
    ctaTitle: 'Dise\u00f1a un Paquete de Experiencia Personalizado para Tu Evento',
    ctaSub: 'Cu\u00e9ntanos el tama\u00f1o del evento, las fechas y las condiciones del lugar \u2014 te proporcionaremos un plan completo y presupuesto.',
    ctaBtn1: 'Obtener Propuesta para el Evento',
    ctaBtn2: 'Comparar Productos',
    viewDetail: 'Ver Detalles \u2192',
    viewCase: 'Ver Caso Completo \u2192',
  },
  de: {
    label: 'L\u00f6sungen',
    h1: ['Messen &', 'Erlebnisevents'],
    heroSub: 'M\u00f6chten Sie auf einer Messe, in einem Einkaufszentrum oder bei einem Event Reiterlebnisse anbieten? Der Simulator ist sofort einsatzbereit \u2014 sicher, interaktiv und f\u00fcr alle Altersgruppen geeignet.',
    heroAlt: 'Reit-Simulator f\u00fcr Messen und Erlebnisevents',
    recTitle: 'Empfohlene Konfiguration',
    products: [
      { tag: 'Ideal f\u00fcr Messen', name: 'Pony-MS.30', desc: 'Mittlere Gr\u00f6\u00dfe, mobiler Aufbau in unter 30 Minuten. Perfekt f\u00fcr Einkaufszentren, Messen und Events. Sicher f\u00fcr alle Altersgruppen.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'VIP-Erlebnis', name: 'Horse-MS.30P', desc: 'Erste Wahl f\u00fcr Premium-Messen oder VIP-Zonen. Professionelles Reiterlebnis, das hochkar\u00e4tige Besucher und Medienaufmerksamkeit anzieht.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Wichtigste Vorteile f\u00fcr Messenutuzng',
    advantages: [
      { title: 'Besuchermagnet = Erlebniseconomie', desc: 'Ein nat\u00fcrlicher Publikumsmagnet auf jeder Messfl\u00e4che. Erlebnisse mit Warteschlange sorgen f\u00fcr organische Social-Media-Verbreitung und mehr Markenpr\u00e4senz.' },
      { title: 'Vollst\u00e4ndiger Aufbau in Unter 2 Stunden', desc: 'Modulares Design f\u00fcr schnellen Auf- und Abbau. Funktioniert in gro\u00dfen Messehallen und im Freien. Keine dauerhafte Befestigung erforderlich.' },
      { title: 'F\u00fcr Alle Altersgruppen Geeignet', desc: 'Geschwindigkeit und Schwierigkeit voll einstellbar. Kinder und Senioren k\u00f6nnen sicher teilnehmen. Ideal f\u00fcr Lifestyle- und Sportmarken-Aktivierungen.' },
    ],
    caseAlt: 'HKJC Messeevent',
    caseBadge: 'HKJC-Aktivierung',
    caseTitle: 'Hong Kong Jockey Club \u2014 Markenerlebnis-Zone',
    caseDesc: 'Bei mehreren hochkar\u00e4tigen Rennveranstaltungen und Marken-Aktivierungen stand der Simulator als interaktives Herzst\u00fcck im Mittelpunkt \u2014 zog lange Warteschlangen an und erzeugte erhebliche Social-Media-Resonanz.',
    fitsLabel: 'DIESE L\u00d6SUNG IST F\u00dcR SIE, WENN\u2026',
    fitsTitle: 'Diese L\u00f6sung Passt Zu Ihnen, Wenn\u2026',
    fits: [
      { title: 'Sie eine Messe, ein Markenevent oder eine Mall-Aktivierung planen', desc: 'Kurzfristige Miete oder Kauf m\u00f6glich. Modularer Schnellaufbau, kompletter Stand in unter 2 Stunden. Erlebnisablauf passend zum Event-Thema anpassbar.' },
      { title: 'Sie ein hochinteraktives Erlebnisangebot ben\u00f6tigen', desc: 'Durchschnittliche Verweildauer pro Teilnehmer \u00fcber 15 Minuten. Spontane Social-Media-Weitergabe. Gamifiziertes Scoring steigert Beteiligung und Teillust.' },
      { title: 'Sie Technologie-Wow-Faktor in Ihr Event bringen m\u00f6chten', desc: 'KI-gest\u00fctzte Reit-Simulatoren sind ein herausragendes Tech-Highlight \u2014 perfekt f\u00fcr Tech-Messen, Sportmarkenkampagnen und Familientage.' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'Bieten Sie Kurzzeit-Verleih f\u00fcr Messen oder Events an?', a: 'Ja. Wir bieten Kurzzeitmiete-Pakete inklusive Transport, Aufbau, Vor-Ort-Personal und Abbau an. Bitte kontaktieren Sie uns mindestens 2 Wochen im Voraus.' },
      { q: 'Kann der Simulator bei Outdoor-Events eingesetzt werden?', a: 'Das Ger\u00e4t ist haupts\u00e4chlich f\u00fcr Innen- oder halbgeschlossene Au\u00dfenbereiche ausgelegt. Ein stabiler 220V-Stromanschluss und ebener Boden sind erforderlich. F\u00fcr den Au\u00dfeneinsatz ist ein Regen- und Sonnenschutzzelt notwendig \u2014 wir helfen bei der Standortbewertung.' },
    ],
    ctaTitle: 'Individuelles Erlebnispaket f\u00fcr Ihr Event Erhalten',
    ctaSub: 'Teilen Sie uns Eventgr\u00f6\u00dfe, Termine und Standortbedingungen mit \u2014 wir liefern einen vollst\u00e4ndigen Aufbauplan und ein Angebot.',
    ctaBtn1: 'Event-Angebot Erhalten',
    ctaBtn2: 'Produkte Vergleichen',
    viewDetail: 'Details Anzeigen \u2192',
    viewCase: 'Vollst\u00e4ndigen Fall Anzeigen \u2192',
  },
  ar: {
    label: '\u062d\u0644\u0648\u0644',
    h1: ['\u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0648', '\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062c\u0631\u0628\u0629'],
    heroSub: '\u062a\u0631\u064a\u062f \u062a\u0642\u062f\u064a\u0645 \u062a\u062c\u0631\u0628\u0629 \u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0645\u0639\u0631\u0636 \u0623\u0648 \u0645\u0631\u0643\u0632 \u062a\u062c\u0627\u0631\u064a \u0623\u0648 \u0641\u0639\u0627\u0644\u064a\u0629\u061f \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u064a\u0646\u0634\u0631 \u0641\u064a \u062f\u0642\u0627\u0626\u0642 \u2014 \u0622\u0645\u0646 \u0648\u062a\u0641\u0627\u0639\u0644\u064a\u060c \u0645\u0646\u0627\u0633\u0628 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631.',
    heroAlt: '\u0645\u062d\u0627\u0643\u064a \u0641\u0631\u0648\u0633\u064a\u0629 \u0644\u0644\u0645\u0639\u0627\u0631\u0636 \u0648\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062c\u0631\u0628\u0629',
    recTitle: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647',
    products: [
      { tag: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0645\u062b\u0644 \u0644\u0644\u0645\u0639\u0627\u0631\u0636', name: 'Pony-MS.30', desc: '\u062d\u062c\u0645 \u0645\u062a\u0648\u0633\u0637\u060c \u0646\u0634\u0631 \u0645\u062a\u062d\u0631\u0643 \u062e\u0644\u0627\u0644 30 \u062f\u0642\u064a\u0642\u0629. \u0645\u062b\u0627\u0644\u064a \u0644\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0631\u0636. \u0622\u0645\u0646 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u062a\u062c\u0631\u0628\u0629 VIP', name: 'Horse-MS.30P', desc: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u0641\u0627\u062e\u0631\u0629 \u0648\u0645\u0646\u0627\u0637\u0642 VIP. \u062a\u062c\u0631\u0628\u0629 \u0641\u0631\u0648\u0633\u064a\u0629 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u062a\u062c\u0630\u0628 \u0632\u0648\u0627\u0631 \u0631\u0641\u064a\u0639\u064a \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0648\u0627\u0647\u062a\u0645\u0627\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0645.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u0645\u0632\u0627\u064a\u0627 \u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0639\u0627\u0631\u0636',
    advantages: [
      { title: '\u0645\u063a\u0646\u0627\u0637\u064a\u0633 \u0627\u0644\u062c\u0645\u0647\u0648\u0631 = \u0627\u0642\u062a\u0635\u0627\u062f \u0627\u0644\u062a\u062c\u0631\u0628\u0629', desc: '\u0642\u0637\u0628 \u062c\u0630\u0628 \u0637\u0628\u064a\u0639\u064a \u0641\u064a \u0623\u064a \u0645\u0639\u0631\u0636. \u0627\u0644\u062a\u062c\u0627\u0631\u0628 \u0630\u0627\u062a \u0627\u0644\u0637\u0648\u0627\u0628\u064a\u0631 \u062a\u0648\u0644\u062f \u0627\u0646\u062a\u0634\u0627\u0631\u064b\u0627 \u0639\u0636\u0648\u064a\u064b\u0627 \u0639\u0644\u0649 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u062a\u0639\u0632\u0632 \u062d\u0636\u0648\u0631 \u0627\u0644\u0639\u0644\u0627\u0645\u0629.' },
      { title: '\u0646\u0634\u0631 \u0643\u0627\u0645\u0644 \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646', desc: '\u062a\u0635\u0645\u064a\u0645 \u0645\u0648\u062f\u064a\u0648\u0644\u064a \u0644\u062a\u0631\u0643\u064a\u0628 \u0648\u0641\u0643 \u0633\u0631\u064a\u0639. \u064a\u0639\u0645\u0644 \u0641\u064a \u0642\u0627\u0639\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u0643\u0628\u0631\u0649 \u0648\u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629. \u0644\u0627 \u064a\u062a\u0637\u0644\u0628 \u062a\u062b\u0628\u064a\u062a\u064b\u0627 \u062f\u0627\u0626\u0645\u064b\u0627.' },
      { title: '\u0645\u0646\u0627\u0633\u0628 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631', desc: '\u0627\u0644\u0633\u0631\u0639\u0629 \u0648\u0627\u0644\u0635\u0639\u0648\u0628\u0629 \u0642\u0627\u0628\u0644\u062a\u0627\u0646 \u0644\u0644\u062a\u0639\u062f\u064a\u0644. \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0648\u0643\u0628\u0627\u0631 \u0627\u0644\u0633\u0646 \u064a\u0634\u0627\u0631\u0643\u0648\u0646 \u0628\u0623\u0645\u0627\u0646. \u0645\u062b\u0627\u0644\u064a \u0644\u062a\u0641\u0639\u064a\u0644 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u062d\u064a\u0627\u062a\u064a \u0648\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629.' },
    ],
    caseAlt: '\u0641\u0639\u0627\u0644\u064a\u0629 \u0645\u0639\u0631\u0636 HKJC',
    caseBadge: '\u062a\u0641\u0639\u064a\u0644 HKJC',
    caseTitle: '\u0646\u0627\u062f\u064a \u062c\u0648\u0643\u064a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a \u2014 \u0645\u0646\u0637\u0642\u0629 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629',
    caseDesc: '\u0641\u064a \u0639\u062f\u0629 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0633\u0628\u0627\u0642 \u0631\u0641\u064a\u0639\u0629 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0648\u062a\u0641\u0639\u064a\u0644\u0627\u062a \u0627\u0644\u0639\u0644\u0627\u0645\u0629\u060c \u0643\u0627\u0646 \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0645\u062d\u0648\u0631 \u0627\u0644\u062a\u0641\u0627\u0639\u0644 \u2014 \u0627\u0633\u062a\u0642\u0637\u0628 \u0637\u0648\u0627\u0628\u064a\u0631 \u0637\u0648\u064a\u0644\u0629 \u0648\u0623\u062d\u062f\u062b \u062a\u0623\u062b\u064a\u0631\u064b\u0627 \u0648\u0627\u0633\u0639\u064b\u0627 \u0639\u0644\u0649 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644.',
    fitsLabel: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0625\u0630\u0627\u2026',
    fitsTitle: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0627\u0644\u0623\u0646\u0633\u0628 \u0625\u0630\u0627\u2026',
    fits: [
      { title: '\u062a\u062e\u0637\u0637 \u0644\u0645\u0639\u0631\u0636 \u0623\u0648 \u062d\u062f\u062b \u0639\u0644\u0627\u0645\u0629 \u0623\u0648 \u062a\u0646\u0634\u064a\u0637 \u0645\u0631\u0643\u0632 \u062a\u062c\u0627\u0631\u064a', desc: '\u0625\u064a\u062c\u0627\u0631 \u0642\u0635\u064a\u0631 \u0627\u0644\u0623\u0645\u062f \u0623\u0648 \u0634\u0631\u0627\u0621 \u0645\u062a\u0627\u062d. \u0646\u0634\u0631 \u0645\u0648\u062f\u064a\u0648\u0644\u064a \u0633\u0631\u064a\u0639\u060c \u062c\u0646\u0627\u062d \u0643\u0627\u0645\u0644 \u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646. \u062a\u062f\u0641\u0642 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062e\u0635\u064a\u0635 \u062d\u0633\u0628 \u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629.' },
      { title: '\u062a\u062d\u062a\u0627\u062c \u0645\u062d\u062a\u0648\u0649 \u062a\u062c\u0631\u0628\u0629 \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u0641\u0627\u0639\u0644', desc: '\u0645\u062a\u0648\u0633\u0637 \u0648\u0642\u062a \u0627\u0644\u0628\u0642\u0627\u0621 \u0644\u0643\u0644 \u0645\u0634\u0627\u0631\u0643 \u064a\u062a\u062c\u0627\u0648\u0632 15 \u062f\u0642\u064a\u0642\u0629. \u0627\u0646\u062a\u0634\u0627\u0631 \u062a\u0644\u0642\u0627\u0626\u064a \u0639\u0644\u0649 \u0627\u0644\u0634\u0628\u0643\u0627\u062a. \u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u062a\u0644\u0639\u0628\u064a \u064a\u0639\u0632\u0632 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0648\u0627\u0644\u0631\u063a\u0628\u0629 \u0641\u064a \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629.' },
      { title: '\u062a\u0631\u064a\u062f \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u062c\u062f\u0629 \u0639\u0644\u0649 \u0641\u0639\u0627\u0644\u064a\u062a\u0643', desc: '\u0645\u062d\u0627\u0643\u064a\u0627\u062a \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0647\u064a \u0646\u0642\u0637\u0629 \u062c\u0630\u0628 \u062a\u0642\u0646\u064a\u0629 \u0628\u0627\u0631\u0632\u0629 \u2014 \u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u062d\u0645\u0644\u0627\u062a \u0639\u0644\u0627\u0645\u0627\u062a \u0631\u064a\u0627\u0636\u064a\u0629 \u0648\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0639\u0627\u0626\u0644\u064a\u0629.' },
    ],
    faqTitle: '\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0647\u0644 \u062a\u0642\u062f\u0645\u0648\u0646 \u062e\u062f\u0645\u0629 \u0625\u064a\u062c\u0627\u0631 \u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0645\u062f \u0644\u0644\u0645\u0639\u0627\u0631\u0636 \u0623\u0648 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a\u061f', a: '\u0646\u0639\u0645. \u0646\u0648\u0641\u0631 \u062d\u0632\u0645 \u0625\u064a\u062c\u0627\u0631 \u0642\u0635\u064a\u0631\u0629 \u0627\u0644\u0623\u0645\u062f \u062a\u0634\u0645\u0644 \u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u062a\u0631\u0643\u064a\u0628 \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0645\u064a\u062f\u0627\u0646\u064a \u0648\u0627\u0644\u062a\u0641\u0643\u064a\u0643. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.' },
      { q: '\u0647\u0644 \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0641\u064a \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u062e\u0627\u0631\u062c\u064a\u0629\u061f', a: '\u0627\u0644\u062c\u0647\u0627\u0632 \u0645\u0635\u0645\u0645 \u0628\u0634\u0643\u0644 \u0631\u0626\u064a\u0633\u064a \u0644\u0644\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629 \u0623\u0648 \u0634\u0628\u0647 \u0627\u0644\u0645\u063a\u0637\u0627\u0629. \u064a\u0644\u0632\u0645 \u062a\u0648\u0641\u0631 \u0637\u0627\u0642\u0629 220V \u0645\u0633\u062a\u0642\u0631\u0629 \u0648\u0623\u0631\u0636\u064a\u0629 \u0645\u0633\u062a\u0648\u064a\u0629. \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062e\u0627\u0631\u062c\u064a \u064a\u0644\u0632\u0645 \u062e\u064a\u0645\u0629 \u0648\u0627\u0642\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0637\u0631 \u0648\u0627\u0644\u0634\u0645\u0633 \u2014 \u064a\u0645\u0643\u0646\u0646\u0627 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0645\u0648\u0642\u0639.' },
    ],
    ctaTitle: '\u0635\u0645\u0651\u0645 \u062d\u0632\u0645\u0629 \u062a\u062c\u0631\u0628\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0641\u0639\u0627\u0644\u064a\u062a\u0643',
    ctaSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629 \u0648\u0645\u0648\u0627\u0639\u064a\u062f\u0647\u0627 \u0648\u0638\u0631\u0648\u0641 \u0627\u0644\u0645\u0643\u0627\u0646 \u2014 \u0633\u0646\u0648\u0641\u0631 \u062e\u0637\u0629 \u0639\u0631\u0636 \u0643\u0627\u0645\u0644\u0629 \u0648\u0639\u0631\u0636 \u0633\u0639\u0631.',
    ctaBtn1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629',
    ctaBtn2: '\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
    viewDetail: '\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2192',
    viewCase: '\u0639\u0631\u0636 \u0627\u0644\u062d\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629 \u2192',
  },
};

const STATIC = {
  heroImg: '/images/solution-event-hero.jpg',
  caseImg: '/images/case-hkjc.jpg',
  caseImgPosition: 'center center',
  caseLink: '/cases#hkjc',
  ctaBtn2Href: '/compare',
  jsonld: { name: 'Exhibition & Experience Event Equestrian Solution', url: 'https://www.equestrian-simulators.com/solutions/event' },
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
