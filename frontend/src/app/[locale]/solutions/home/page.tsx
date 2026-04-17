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
    h1: ['\u5bb6\u5ead\u4e0e', '\u4e2a\u4eba\u9a91\u624b'],
    heroSub: '\u60f3\u5728\u5bb6\u7ec3\u4e60\u9a6c\u672f\uff0c\u4f46\u6ca1\u6709\u9a6c\u573a\uff1f\u6a21\u62df\u9a6c\u8ba9\u4f60\u968f\u65f6\u968f\u5730\u8bad\u7ec3\uff0c\u5168\u5bb6\u53ef\u7528\uff0c\u65e0\u9700\u4e13\u4e1a\u573a\u5730\u3002',
    heroAlt: '\u5bb6\u5ead\u4e0e\u4e2a\u4eba\u9a91\u624b\u9a6c\u672f\u8bad\u7ec3',
    recTitle: '\u63a8\u8350\u914d\u7f6e',
    products: [
      { tag: '\u5bb6\u7528\u9996\u9009', name: 'Pony-MS.30', desc: '\u5b89\u5168\u9002\u5408\u5168\u5bb6\u4f7f\u7528\uff0c\u4ece4\u5c81\u513f\u7ae5\u5230\u6210\u4eba\u5747\u53ef\uff0c\u5c3a\u5bf8\u7d27\u51d1\uff0c\u9002\u5408\u5bb6\u5ead\u8bad\u7ec3\u5ba4\u6216\u522b\u5885\u9a6c\u623f\uff0c\u6709CE\u8ba4\u8bc1\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u8fdb\u9636\u9a91\u624b', name: 'Horse-MS.30P', desc: '\u9ad8\u7aef\u5bb6\u5ead\u8bad\u7ec3\u9996\u9009\uff0cMS.30P\u63d0\u4f9b\u4e13\u4e1a\u4e09\u9879\u8d5b\u7ea7\u522b\u8bad\u7ec3\uff0c\u9002\u5408\u6709\u4e00\u5b9a\u57fa\u7840\u7684\u9a91\u624b\u63d0\u5347\u6c34\u5e73\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u5bb6\u5ead\u573a\u666f\u6838\u5fc3\u4f18\u52bf',
    advantages: [
      { title: '\u968f\u65f6\u8bad\u7ec3\uff0c\u4e0d\u53d7\u5929\u6c14\u9650\u5236', desc: '\u5bb6\u4e2d\u5168\u5929\u5019\u4f7f\u7528\uff0c\u4e0d\u4f9d\u8d56\u9a6c\u573a\u9884\u7ea6\uff0c\u968f\u65f6\u53ef\u8bad\u7ec3\uff0c\u9002\u5408\u7e41\u5fd9\u65e5\u7a0b\u7684\u9a91\u624b\u3002' },
      { title: '\u5168\u5bb6\u8001\u5c11\u7686\u5b9c', desc: '\u5b89\u5168\u8bbe\u8ba1\u9002\u54814\u5c81\u4ee5\u4e0a\u4f7f\u7528\uff0c\u513f\u7ae5\u5230\u6210\u4eba\u5747\u53ef\uff0c\u7d27\u6025\u505c\u6b62\u548c\u5b89\u5168\u5e26\u7cfb\u7edf\u4fdd\u969c\u4f7f\u7528\u5b89\u5168\u3002' },
      { title: '\u771f\u5b9e\u751f\u7269\u529b\u5b66\u4f53\u9a8c', desc: '\u9ad8\u7cbe\u5ea6\u4f20\u611f\u5668\u63d0\u4f9b\u63a5\u8fd1\u771f\u9a6c\u7684\u9a91\u4e58\u4f53\u9a8c\uff0c\u5728\u5bb6\u4e5f\u80fd\u83b7\u5f97\u4e13\u4e1a\u7ea7\u53cd\u9988\u548c\u8bad\u7ec3\u6548\u679c\u3002' },
    ],
    caseAlt: '\u5bb6\u5ead\u9a91\u624b\u8bad\u7ec3\u573a\u666f',
    caseBadge: '\u6848\u4f8b\u5206\u4eab',
    caseTitle: '\u5bb6\u5ead\u9a91\u624b\u7684\u4e13\u5c5e\u8bad\u7ec3\u7a7a\u95f4',
    caseDesc: '"\u5728\u5bb6\u5c31\u53ef\u4ee5\u7ec3\u4e60\u9a6c\u672f\uff0c\u5b69\u5b50\u4eec\u975e\u5e38\u559c\u6b22\uff0c\u6bd4\u53bb\u9a6c\u573a\u65b9\u4fbf\u592a\u591a\u4e86\u3002\u8bbe\u5907\u5b89\u5168\u53ef\u9760\uff0c\u5df2\u7ecf\u6210\u4e3a\u6211\u4eec\u5bb6\u5ead\u7684\u8fd0\u52a8\u4e2d\u5fc3\u3002"',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd9\u5957\u65b9\u6848\u6700\u9002\u5408\u60a8',
    fits: [
      { title: '\u60a8\u60f3\u5728\u5bb6\u4e2d\u5efa\u7acb\u4e13\u5c5e\u8bad\u7ec3\u7a7a\u95f4', desc: '\u7d27\u51d1\u5c3a\u5bf8\u9002\u5408\u5bb6\u5ead\u8bad\u7ec3\u5ba4\uff0c5\u7c73\xd75\u7c73\u7a7a\u95f4\u5373\u53ef\u5b89\u88c5\uff0c\u5b89\u9759\u8fd0\u884c\u4e0d\u6270\u90bb\uff0c\u968f\u65f6\u53ef\u8bad\u7ec3\u65e0\u9700\u9884\u7ea6\u3002' },
      { title: '\u60a8\u6709\u5b69\u5b50\u5e0c\u671b\u7cfb\u7edf\u5b66\u4e60\u9a6c\u672f', desc: '\u4ece\u513f\u7ae5\u5230\u6210\u4eba\u7684\u5168\u5bb6\u5b66\u4e60\u65b9\u6848\uff0c\u9012\u8fdb\u5f0f\u8bfe\u7a0b\u6a21\u5757\uff0c\u914d\u5408\u4e13\u4e1a\u6559\u7ec3\u8fdc\u7a0b\u6307\u5bfc\uff0c\u5728\u5bb6\u5b8c\u6210\u7cfb\u7edf\u9a6c\u672f\u6559\u80b2\u3002' },
      { title: '\u60a8\u662f\u5fd9\u788c\u7684\u9a6c\u672f\u7231\u597d\u8005', desc: '\u65e0\u9700\u5f80\u8fd4\u9a6c\u573a\u8282\u7701\u65f6\u95f4\uff0c\u968f\u65f6\u53ef\u8bad\u7ec330\u5206\u949f\u4fdd\u6301\u72b6\u6001\uff0c\u51fa\u5dee\u524d\u540e\u5feb\u901f\u70ed\u8eab\u6216\u6062\u590d\u8bad\u7ec3\u3002' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u5bb6\u5ead\u4f7f\u7528\u9700\u8981\u591a\u5927\u7684\u7a7a\u95f4\uff1f', a: 'MS.30\u5c3a\u5bf8\u4e3a2068\xd71002\xd71500mm\uff0c\u5efa\u8bae\u5b89\u88c5\u7a7a\u95f4\u4e0d\u5c0f\u4e8e3\xd73\u7c73\uff0c\u5929\u82b1\u677f\u9ad8\u5ea6\u4e0d\u4f4e\u4e8e2.6\u7c73\u3002\u5b8c\u6574\u4f7f\u7528\u6307\u5357\u4e2d\u5305\u542b\u8be6\u7ec6\u7684\u7a7a\u95f4\u89c4\u5212\u5efa\u8bae\u548c\u5b89\u88c5\u8981\u6c42\u3002' },
      { q: '\u513f\u7ae5\u4f7f\u7528\u6a21\u62df\u5668\u5b89\u5168\u5417\uff1f', a: 'MS.30\u914d\u5907\u5b8c\u6574\u7684\u5b89\u5168\u4fdd\u62a4\u7cfb\u7edf\uff0c\u5305\u62ec\u5168\u8eab\u5b89\u5168\u5e26\u3001\u7d27\u6025\u505c\u6b62\u6309\u9215\u548c\u8f6f\u4ef6\u901f\u5ea6\u9650\u5236\u3002\u5728\u5bb6\u957f\u6216\u6559\u5e08\u76d1\u7763\u4e0b\uff0c4\u5c81\u4ee5\u4e0a\u513f\u7ae5\u53ef\u4ee5\u5b89\u5168\u4f7f\u7528\u6162\u901f\u6a21\u5f0f\u3002\u5efa\u8bae\u4ece Walk\u6b65\u6001\u5f00\u59cb\uff0c\u9010\u6b65\u8fdb\u9636\u3002' },
    ],
    ctaTitle: '\u4e3a\u60a8\u7684\u5bb6\u5ead\u5b9a\u5236\u65b9\u6848',
    ctaSub: '\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u7a7a\u95f4\u5c3a\u5bf8\u548c\u4f7f\u7528\u9700\u6c42\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u6700\u9002\u5408\u7684\u914d\u7f6e',
    ctaBtn1: '\u83b7\u53d6\u5bb6\u5ead\u65b9\u6848',
    ctaBtn2: '\u5bf9\u6bd4\u4ea7\u54c1\u578b\u53f7',
    viewDetail: '\u67e5\u770b\u8be6\u60c5 \u2192',
    viewCase: '\u67e5\u770b\u5b8c\u6574\u6848\u4f8b \u2192',
  },
  en: {
    label: 'Solutions',
    h1: ['Home &', 'Personal Riders'],
    heroSub: 'Want to practice equestrian at home but no arena? A simulator lets you train anytime, anywhere — for the whole family, no professional facility needed.',
    heroAlt: 'Home and personal rider equestrian training',
    recTitle: 'Recommended Configuration',
    products: [
      { tag: 'Best for Home', name: 'Pony-MS.30', desc: 'Safe for the whole family, from children aged 4 to adults. Compact size fits a home gym or villa stable room. CE certified.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'Advanced Riders', name: 'Horse-MS.30P', desc: 'Top choice for premium home training. MS.30P delivers professional three-day level training, ideal for riders with a foundation looking to level up.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Key Advantages for Home Use',
    advantages: [
      { title: 'Train Anytime — Weather Never Stops You', desc: 'Available 24/7 at home, no arena booking required. Train whenever you want, perfect for busy schedules.' },
      { title: 'Safe for the Whole Family', desc: 'Safety-designed for ages 4+, from children to adults. Emergency stop and full harness system for total peace of mind.' },
      { title: 'Real Biomechanical Experience', desc: 'High-precision sensors provide a riding feel close to a real horse — professional-grade feedback and training results from home.' },
    ],
    caseAlt: 'Home rider training scene',
    caseBadge: 'Customer Story',
    caseTitle: "The Family Rider's Dedicated Training Space",
    caseDesc: '"We can practice equestrian at home now — the kids absolutely love it, so much more convenient than going to the arena. The equipment is safe and reliable and has become our family fitness center."',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: 'This Solution Is the Right Fit If\u2026',
    fits: [
      { title: 'You Want to Build a Dedicated Training Space at Home', desc: 'Compact size fits a home gym — installs in a 5m\xd75m space, runs quietly without disturbing neighbors, train any time without booking.' },
      { title: 'You Want Your Children to Learn Equestrian Systematically', desc: 'A family-wide learning plan from children to adults, progressive course modules, remote professional coaching — complete equestrian education at home.' },
      { title: 'You Are a Busy Equestrian Enthusiast', desc: 'No commuting to the arena saves time. Train for 30 minutes anytime to stay sharp, or quickly warm up and recover around trips.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How much space does home use require?', a: 'MS.30 dimensions are 2068\xd71002\xd71500mm. Recommended installation space is at least 3\xd73m with a ceiling height of at least 2.6m. The full user guide includes detailed space planning recommendations and installation requirements.' },
      { q: 'Is it safe for children to use the simulator?', a: 'MS.30 comes with a complete safety system including a full-body harness, emergency stop button, and software speed limits. With parental or teacher supervision, children aged 4+ can safely use the slow mode. Start at Walk gait and progress gradually.' },
    ],
    ctaTitle: 'Get a Custom Plan for Your Home',
    ctaSub: 'Tell us your space dimensions and usage needs — we will recommend the most suitable configuration for you.',
    ctaBtn1: 'Get Home Proposal',
    ctaBtn2: 'Compare Products',
    viewDetail: 'View Details \u2192',
    viewCase: 'View Full Case \u2192',
  },
  ja: {
    label: '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3',
    h1: ['\u5bb6\u5ead\u30fb', '\u500b\u4eba\u9a0e\u624b'],
    heroSub: '\u5bb6\u3067\u9a6c\u8853\u3092\u7df4\u7fd2\u3057\u305f\u3044\u3051\u3069\u4e57\u99ac\u5834\u304c\u306a\u3044\uff1f\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u3044\u3064\u3067\u3082\u3069\u3053\u3067\u3082\u3001\u5168\u5bb6\u65cf\u3067\u3001\u5c02\u7528\u65bd\u8a2d\u306a\u3057\u3067\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3002',
    heroAlt: '\u5bb6\u5ead\u30fb\u500b\u4eba\u9a0e\u624b\u306e\u9a6c\u8853\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0',
    recTitle: '\u63a8\u5968\u69cb\u6210',
    products: [
      { tag: '\u5bb6\u5ead\u7528\u7b2c\u4e00\u9078\u629e', name: 'Pony-MS.30', desc: '4\u6b73\u306e\u5b50\u4f9b\u304b\u3089\u5927\u4eba\u307e\u3067\u5168\u5bb6\u65cf\u3067\u5b89\u5168\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u30b3\u30f3\u30d1\u30af\u30c8\u306a\u30b5\u30a4\u30ba\u3067\u5bb6\u5ead\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30eb\u30fc\u30e0\u306b\u3082\u5bfe\u5fdc\u3002CE\u8a8d\u5b9a\u53d6\u5f97\u6e08\u307f\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u4e0a\u7d1a\u8005\u5411\u3051', name: 'Horse-MS.30P', desc: '\u30cf\u30a4\u30a8\u30f3\u30c9\u5bb6\u5ead\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u306e\u7b2c\u4e00\u9078\u629e\u3002\u30d7\u30ed\u4e09\u7a2e\u7af6\u6280\u30ec\u30d9\u30eb\u306e\u8a13\u7df4\u3092\u5bb6\u5ead\u3067\u5b9f\u73fe\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u5bb6\u5ead\u5229\u7528\u306e\u4e3b\u306a\u30e1\u30ea\u30c3\u30c8',
    advantages: [
      { title: '\u3044\u3064\u3067\u3082\u8a13\u7df4\u53ef\u80fd\uff0c\u5929\u5019\u4e0d\u554f', desc: '\u81ea\u5b85\u30664/7\u5229\u7528\u53ef\u80fd\u3002\u4e57\u99ac\u5834\u4e88\u7d04\u4e0d\u8981\u3002\u5fd9\u3057\u3044\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u306b\u6700\u9069\u3002' },
      { title: '\u5bb6\u65cf\u5168\u54e1\u5bfe\u5fdc', desc: '4\u6b73\u4ee5\u4e0a\u5bfe\u5fdc\u306e\u5b89\u5168\u8a2d\u8a08\u3002\u5150\u7ae5\u304b\u3089\u5927\u4eba\u307e\u3067\u3002\u7dca\u6025\u505c\u6b62\u30fb\u30cf\u30fc\u30cd\u30b9\u30b7\u30b9\u30c6\u30e0\u5099\u3048\u3002' },
      { title: '\u672c\u7269\u306e\u751f\u4f53\u529b\u5b66\u4f53\u9a13', desc: '\u9ad8\u7cbe\u5ea6\u30bb\u30f3\u30b5\u30fc\u304c\u672c\u7269\u306e\u99ac\u306b\u8fd1\u3044\u4e57\u99ac\u611f\u899a\u3092\u63d0\u4f9b\u3002\u81ea\u5b85\u3067\u30d7\u30ed\u30ec\u30d9\u30eb\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3002' },
    ],
    caseAlt: '\u5bb6\u5ead\u9a0e\u624b\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30b7\u30fc\u30f3',
    caseBadge: '\u4f7f\u7528\u4e8b\u4f8b',
    caseTitle: '\u5bb6\u65cf\u306e\u305f\u3081\u306e\u5c02\u7528\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30b9\u30da\u30fc\u30b9',
    caseDesc: '"\u5bb6\u3067\u9a6c\u8853\u3092\u7df4\u7fd2\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u5b50\u4f9b\u305f\u3061\u306f\u5927\u5580\u304d\u3067\u3001\u4e57\u99ac\u5834\u3088\u308a\u3082\u3059\u3063\u3068\u4fbf\u5229\u3002\u5b89\u5168\u3067\u4fe1\u983c\u3067\u304d\u308b\u8a2d\u5099\u3067\u3001\u5bb6\u65cf\u306e\u30d5\u30a3\u30c3\u30c8\u30cd\u30b9\u30bb\u30f3\u30bf\u30fc\u306b\u306a\u308a\u307e\u3057\u305f\u3002"',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u6b21\u306e\u3088\u3046\u306a\u65b9\u306b\u6700\u9069\u3067\u3059',
    fits: [
      { title: '\u5b66\u306b\u5c02\u7528\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u308a\u305f\u3044', desc: '\u30b3\u30f3\u30d1\u30af\u30c8\u30b5\u30a4\u30ba\u3067\u5bb6\u5ead\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u30eb\u30fc\u30e0\u306b\u5bfe\u5fdc\u30025m\xd75m\u306e\u30b9\u30da\u30fc\u30b9\u306b\u8a2d\u7f6e\u53ef\u80fd\u3002\u9759\u97f3\u904b\u8ee2\u3067\u8fc2\u60d1\u306a\u3057\u3002' },
      { title: '\u304a\u5b50\u3055\u307e\u306b\u9a6c\u8853\u3092\u4f53\u7cfb\u7684\u306b\u5b66\u3070\u305b\u305f\u3044', desc: '\u5150\u7ae5\u304b\u3089\u5927\u4eba\u307e\u3067\u306e\u5bb6\u65cf\u5b66\u7fd2\u30d7\u30e9\u30f3\u3002\u6bb5\u968e\u7684\u30e2\u30b8\u30e5\u30fc\u30eb\u3002\u30d7\u30ed\u30b3\u30fc\u30c1\u306e\u30ea\u30e2\u30fc\u30c8\u6307\u5c0e\u3082\u5229\u7528\u3067\u304d\u307e\u3059\u3002' },
      { title: '\u5fd9\u3057\u3044\u9a6c\u8853\u611b\u597d\u5bb6\u306e\u65b9', desc: '\u4e57\u99ac\u5834\u3078\u306e\u5f80\u5fa9\u4e0d\u8981\u3067\u6642\u9593\u7bc0\u7d04\u3002\u3044\u3064\u3067\u3082\u5c11\u3057\u306e\u6642\u9593\u3067\u72b6\u614b\u3092\u7dad\u6301\u3002\u51fa\u5f35\u524d\u5f8c\u306e\u30a6\u30a9\u30fc\u30e0\u30a2\u30c3\u30d7\u306b\u3082\u6700\u9069\u3002' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u5bb6\u5ead\u5229\u7528\u306b\u5fc5\u8981\u306a\u30b9\u30da\u30fc\u30b9\u306f\uff1f', a: 'MS.30\u306e\u5bef\u6cd5\u306f2068\xd71002\xd71500mm\u3067\u3059\u3002\u8a2d\u7f6e\u30b9\u30da\u30fc\u30b9\u306f3\xd73m\u4ee5\u4e0a\u3001\u5929\u4e95\u306e\u9ad8\u3055\u306f2.6m\u4ee5\u4e0a\u304c\u5fc5\u8981\u3067\u3059\u3002\u8a73\u7d30\u306a\u30b9\u30da\u30fc\u30b9\u30d7\u30e9\u30f3\u306f\u30e6\u30fc\u30b6\u30fc\u30ac\u30a4\u30c9\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002' },
      { q: '\u5150\u7ae5\u304c\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3082\u5b89\u5168\u3067\u3059\u304b\uff1f', a: 'MS.30\u306b\u306f\u5168\u8eab\u30cf\u30fc\u30cd\u30b9\u3001\u7dca\u6025\u505c\u6b62\u30dc\u30bf\u30f3\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u901f\u5ea6\u5236\u9650\u304c\u5099\u308f\u3063\u3066\u3044\u307e\u3059\u3002\u4e3b\u5c0e\u306e\u76e3\u7763\u4e0b\u30674\u6b73\u4ee5\u4e0a\u304c\u30a6\u30a9\u30fc\u30af\u30e2\u30fc\u30c9\u3067\u5b89\u5168\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002Walk\u304b\u3089\u59cb\u3081\u3066\u6bb5\u968e\u7684\u306b\u9032\u3080\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u3054\u5bb6\u5ead\u5411\u3051\u30ab\u30b9\u30bf\u30e0\u30d7\u30e9\u30f3\u3092\u53d7\u3051\u53d6\u308b',
    ctaSub: '\u30b9\u30da\u30fc\u30b9\u306e\u5bef\u6cd5\u3068\u5229\u7528\u30cb\u30fc\u30ba\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u6700\u9069\u306a\u69cb\u6210\u3092\u3054\u63d0\u6848\u3057\u307e\u3059\u3002',
    ctaBtn1: '\u5bb6\u5ead\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b',
    ctaBtn2: '\u88fd\u54c1\u3092\u6bd4\u8f03\u3059\u308b',
    viewDetail: '\u8a73\u7d30\u3092\u898b\u308b \u2192',
    viewCase: '\u5c0e\u5165\u4e8b\u4f8b\u3092\u898b\u308b \u2192',
  },
  ko: {
    label: '\uc194\ub8e8\uc158',
    h1: ['\uac00\uc815 \ubc0f', '\uac1c\uc778 \uae30\uc218'],
    heroSub: '\uc9d1\uc5d0\uc11c \uc2b9\ub9c8\ub97c \uc5f0\uc2b5\ud558\uace0 \uc2f6\uc9c0\ub9cc \uc2b9\ub9c8\uc7a5\uc774 \uc5c6\ub098\uc694? \uc2dc\ubbac\ub808\uc774\ud130\ub85c \uc5b8\uc81c \uc5b4\ub514\uc11c\ub098 \ud6c8\ub828. \uc628 \uac00\uc871\uc774 \ud568\uaed8, \uc804\ubb38 \uc2dc\uc124 \ubd88\ud544\uc694.',
    heroAlt: '\uac00\uc815 \ubc0f \uac1c\uc778 \uae30\uc218 \uc2b9\ub9c8 \ud6c8\ub828',
    recTitle: '\uad8c\uc7a5 \uad6c\uc131',
    products: [
      { tag: '\uac00\uc815\uc6a9 \uc81c1\uc120\ud0dd', name: 'Pony-MS.30', desc: '4\uc138 \uc544\ub3d9\ubd80\ud130 \uc131\uc778\uae4c\uc9c0 \uc628 \uac00\uc871\uc774 \uc548\uc804\ud558\uac8c \uc0ac\uc6a9. \ucee4\uc9e4 \ud06c\uae30\ub85c \uac00\uc815 \ud2b8\ub808\uc774\ub2dd\ub8f8\uc5d0 \uc801\ud569. CE \uc778\uc99d.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\uc2ec\ud654 \uae30\uc218', name: 'Horse-MS.30P', desc: '\uace0\uae09 \uac00\uc815 \ud6c8\ub828\uc758 \uc81c1\uc120\ud0dd. \uc804\ubb38 3\uc77c \uc885\ubaa9 \ub808\ubca8 \ud6c8\ub828\uc73c\ub85c \uc2e4\ub825 \ud5a5\uc0c1 \uac00\ub2a5.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\uac00\uc815 \ud65c\uc6a9 \ud575\uc2ec \uc7a5\uc810',
    advantages: [
      { title: '\uc5b8\uc81c\ub4e0\uc9c0 \ud6c8\ub828, \ub0a0\uc528 \ubb34\uad00', desc: '\uc9d1\uc5d0\uc11c 24\uc2dc\uac04 \uc0ac\uc6a9 \uac00\ub2a5. \uc2b9\ub9c8\uc7a5 \uc608\uc57d \ubd88\ud544\uc694. \uc5b8\uc81c\ub4e0\uc9c0 \ud6c8\ub828 \uac00\ub2a5.' },
      { title: '\uc628 \uac00\uc871\uc5d0\uac8c \uc548\uc804', desc: '4\uc138 \uc774\uc0c1 \uc548\uc804 \uc124\uacc4. \uc544\ub3d9\ubd80\ud130 \uc131\uc778\uae4c\uc9c0. \ube44\uc0c1 \uc815\uc9c0 \ubc0f \ud558\ub124\uc2a4 \uc2dc\uc2a4\ud15c \ud3ec\ud568.' },
      { title: '\uc2e4\uc81c \uc0dd\uccb4\uc5ed\ud559 \uccb4\ud5d8', desc: '\uace0\uc815\ubc00 \uc13c\uc11c\ub85c \uc2e4\uc81c \ub9d0\uc5d0 \uac00\uae4c\uc6b4 \uc2b9\ub9c8 \uccb4\ud5d8 \uc81c\uacf5. \uc9d1\uc5d0\uc11c\ub3c4 \uc804\ubb38\uae09 \ud53c\ub4dc\ubc31 \ubc0f \ud6c8\ub828 \ud6a8\uacfc.' },
    ],
    caseAlt: '\uac00\uc815 \uae30\uc218 \ud6c8\ub828 \uc7a5\uba74',
    caseBadge: '\uace0\uac1d \uc0ac\ub840',
    caseTitle: '\uac00\uc815 \uae30\uc218\ub97c \uc704\ud55c \uc804\uc6a9 \ud6c8\ub828 \uacf5\uac04',
    caseDesc: '"\uc9d1\uc5d0\uc11c \uc2b9\ub9c8\ub97c \uc5f0\uc2b5\ud560 \uc218 \uc788\uc5b4 \uc544\uc774\ub4e4\uc774 \ub108\ubb34 \uc880\uc544\ud558\uace0, \ub9d0 \ub530 \ub530 \ub098 \ub124\ub2c8 \uada4\uc0c0\uc5b4. \uae30\uae30\ub294 \uc548\uc804\ud558\uace0 \ubbff\uc74c\uc9c1\ud558\uc5ec \uc6b0\ub9ac \uc9d1 \ud53c\ud2b8\ub2c8\uc2a4 \uc13c\ud130\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\ub2e4\uc74c\uc5d0 \ud574\ub2f9\ud558\uc2dc\uba74 \ucd5c\uc801\uc758 \uc120\ud0dd\uc785\ub2c8\ub2e4',
    fits: [
      { title: '\uc9d1\uc5d0 \uc804\uc6a9 \ud6c8\ub828 \uacf5\uac04\uc744 \ub9cc\ub4e4\uace0 \uc2f6\uc73c\uc2e4 \ub54c', desc: '\ucee4\uc9e4 \ud06c\uae30\ub85c \uac00\uc815 \ud2b8\ub808\uc774\ub2dd\ub8f8\uc5d0 \uc801\ud569. 5m\xd75m \uacf5\uac04\uc5d0 \uc124\uce58 \uac00\ub2a5. \uc870\uc6a9\ud55c \uc791\ub3d9\uc73c\ub85c \uc774\uc6c3\uc5d0\uac8c \ubc29\ud574\uac00 \uc5c6\uace0 \uc608\uc57d \uc5c6\uc774 \uc5b8\uc81c\ub4e0\uc9c0 \ud6c8\ub828.' },
      { title: '\uc790\ub140\uac00 \uc2b9\ub9c8\ub97c \uccb4\uacc4\uc801\uc73c\ub85c \uc2b9\ub9c8\ub97c \ubc30\uc6b0\uae38 \uc6d0\ud560 \ub54c', desc: '\uc544\ub3d9\ubd80\ud130 \uc131\uc778\uae4c\uc9c0 \ud3ec\ud568\ud55c \uac00\uc871 \ud559\uc2b5 \uacc4\ud68d. \ub2e8\uacc4\ubcc4 \ubd80\ud130 \uc2ec\ud654\uae4c\uc9c0. \uc804\ubb38 \ucf54\uce58 \uc6d0\uaca9 \uc9c0\ub3c4.' },
      { title: '\ubc14\uc05c \uc2b9\ub9c8 \uc560\ud638\uac00\uc774\uc2e4 \ub54c', desc: '\ub9d0 \ub530 \uc5c5\uc774 \uc2dc\uac04 \uc808\uc57d. \uc5b8\uc81c\ub4e0\uc9c0 30\ubd84 \ud6c8\ub828\uc73c\ub85c \ucee8\ub514\uc158 \uc720\uc9c0. \ucd9c\uc7a5 \uc804\ud6c4 \ube60\ub978 \uc6cc\ubc0d \uc5c5 \ubc0f \ud68c\ubcf5 \ud6c8\ub828.' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\uac00\uc815\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 \uc5bc\ub9c8\ub098 \ud070 \uacf5\uac04\uc774 \ud544\uc694\ud55c\uac00\uc694?', a: 'MS.30 \uc58c\uc218\ub294 2068\xd71002\xd71500mm\uc785\ub2c8\ub2e4. \uad8c\uc7a5 \uc124\uce58 \uacf5\uac04\uc740 3\xd73m \uc774\uc0c1\uc774\uba70 \ucc9c\uc7a5 \ub192\uc774\ub294 2.6m \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\uc6a9 \uac00\uc774\ub4dc\uc5d0 \uc138\ubd80 \uacf5\uac04 \uacc4\ud68d \uad8c\uc7a5 \uc0ac\ud56d\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.' },
      { q: '\uc544\uc774\uac00 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc548\uc804\ud55c\uac00\uc694?', a: 'MS.30\uc5d0\ub294 \uc804\uc2e0 \ud558\ub124\uc2a4, \ube44\uc0c1 \uc815\uc9c0 \ubc84\ud2bc, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc18d\ub3c4 \uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub978\uc774\ub098 \uc120\uc0dd\ub2d8 \uac10\ub3c5 \ud558\uc5d0 4\uc138 \uc774\uc0c1 \uc544\ub3d9\uc774 \ub290\ub9b0 \ubaa8\ub4dc\ub85c \uc548\uc804\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Walk \ubcf4\ud3ec\ubd80\ud130 \uc2dc\uc791\ud574 \ub2e8\uacc4\uc801\uc73c\ub85c \uc21c\uc11c\uc5d0 \ub530\ub77c \uc9c4\ud589\ud558\uc138\uc694.' },
    ],
    ctaTitle: '\uac00\uc815\uc5d0 \ub9de\ub294 \ub9de\ucda4\ud615 \uacc4\ud68d \ubc1b\uae30',
    ctaSub: '\uacf5\uac04 \ud06c\uae30\uc640 \uc0ac\uc6a9 \uc694\uad6c\uc0ac\ud56d\uc744 \uc54c\ub824\uc8fc\uc138\uc694. \uac00\uc7a5 \uc801\ud569\ud55c \uad6c\uc131\uc744 \ucd94\uc2dc\ud574 \ub4dc\ub9bd\ub2c8\ub2e4.',
    ctaBtn1: '\uac00\uc815 \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaBtn2: '\uc81c\ud488 \ube44\uad50',
    viewDetail: '\uc0c1\uc138 \ubcf4\uae30 \u2192',
    viewCase: '\uc804\uccb4 \uc0ac\ub840 \ubcf4\uae30 \u2192',
  },
  es: {
    label: 'Soluciones',
    h1: ['Hogar y', 'Jinetes Personales'],
    heroSub: '\u00bfQuieres practicar equitaci\u00f3n en casa pero no tienes pista? El simulador te permite entrenar en cualquier momento y lugar, para toda la familia, sin instalaciones profesionales.',
    heroAlt: 'Entrenamiento ecuestre en el hogar y para jinetes personales',
    recTitle: 'Configuraci\u00f3n Recomendada',
    products: [
      { tag: 'Ideal para el Hogar', name: 'Pony-MS.30', desc: 'Seguro para toda la familia, de ni\u00f1os de 4 a\u00f1os a adultos. Tama\u00f1o compacto para sala de entrenamiento o cuadra dom\u00e9stica. Certificado CE.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'Jinetes Avanzados', name: 'Horse-MS.30P', desc: 'Primera opci\u00f3n para entrenamiento premium en casa. Ofrece entrenamiento de nivel de tres d\u00edas profesional para jinetes que quieren progresar.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Ventajas Clave para Uso Dom\u00e9stico',
    advantages: [
      { title: 'Entrena Cuando Quieras \u2014 Sin Depender del Clima', desc: 'Disponible en casa las 24 horas. Sin reservas en pista. Entrena cuando lo necesites, perfecto para agendas apretadas.' },
      { title: 'Seguro para Toda la Familia', desc: 'Dise\u00f1o seguro desde los 4 a\u00f1os hasta adultos. Sistema de parada de emergencia y arnes completo.' },
      { title: 'Experiencia Biom\u00e9canica Real', desc: 'Sensores de alta precisi\u00f3n proporcionan una sensaci\u00f3n cercana a la de un caballo real. Resultados profesionales desde casa.' },
    ],
    caseAlt: 'Escena de entrenamiento de jinete en casa',
    caseBadge: 'Testimonio de Cliente',
    caseTitle: 'El Espacio de Entrenamiento Exclusivo del Jinete Familiar',
    caseDesc: '"Podemos practicar equitaci\u00f3n en casa, a los ni\u00f1os les encanta, mucho m\u00e1s c\u00f3modo que ir a la pista. El equipo es seguro y fiable y se ha convertido en el centro de fitness de nuestra familia."',
    fitsLabel: 'ESTA SOLUCI\u00d3N ES PARA TI SI\u2026',
    fitsTitle: 'Esta Soluci\u00f3n Es Ideal Si\u2026',
    fits: [
      { title: 'Quieres Crear un Espacio de Entrenamiento en Casa', desc: 'Tama\u00f1o compacto para sala de entrenamiento dom\u00e9stica, se instala en un espacio de 5m\xd75m, funciona silenciosamente sin molestar a los vecinos.' },
      { title: 'Quieres que Tus Hijos Aprendan Equitaci\u00f3n Sistem\u00e1ticamente', desc: 'Plan de aprendizaje familiar de ni\u00f1os a adultos, m\u00f3dulos progresivos, coaching profesional remoto desde casa.' },
      { title: 'Eres un Entusiasta de la Equitaci\u00f3n con Poco Tiempo', desc: 'Sin desplazamientos a la pista. Entrena 30 minutos cuando quieras para mantenerte en forma. Ideal antes y despu\u00e9s de viajes.' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfCu\u00e1nto espacio se necesita para uso dom\u00e9stico?', a: 'Las dimensiones del MS.30 son 2068\xd71002\xd71500mm. Se recomienda un espacio m\u00ednimo de 3\xd73m con una altura de techo de al menos 2.6m. La gu\u00eda de usuario completa incluye recomendaciones detalladas de planificaci\u00f3n de espacio.' },
      { q: '\u00bfEs seguro que los ni\u00f1os usen el simulador?', a: 'El MS.30 incluye un sistema de seguridad completo: arnes de cuerpo completo, bot\u00f3n de parada de emergencia y l\u00edmites de velocidad por software. Con supervisi\u00f3n de adultos, ni\u00f1os de 4+ a\u00f1os pueden usar el modo lento con seguridad. Comenzar en paso Walk y progresar gradualmente.' },
    ],
    ctaTitle: 'Obtener un Plan Personalizado para Tu Hogar',
    ctaSub: 'D\u00ednos las dimensiones de tu espacio y tus necesidades. Recomendaremos la configuraci\u00f3n m\u00e1s adecuada.',
    ctaBtn1: 'Obtener Propuesta para el Hogar',
    ctaBtn2: 'Comparar Productos',
    viewDetail: 'Ver Detalles \u2192',
    viewCase: 'Ver Caso Completo \u2192',
  },
  de: {
    label: 'L\u00f6sungen',
    h1: ['Zuhause &', 'Privatreiter'],
    heroSub: 'Reiten zu Hause \u00fcben, aber keine Reitanlage? Ein Simulator erm\u00f6glicht Training jederzeit und \u00fcberall \u2014 f\u00fcr die ganze Familie, ohne professionelle Einrichtung.',
    heroAlt: 'Heim- und Privatreitertraining',
    recTitle: 'Empfohlene Konfiguration',
    products: [
      { tag: 'Ideal f\u00fcr Zuhause', name: 'Pony-MS.30', desc: 'Sicher f\u00fcr die ganze Familie, von Kindern ab 4 Jahren bis Erwachsenen. Kompakte Gr\u00f6\u00dfe f\u00fcr Heim-Trainingsraum oder Villa-Stall. CE-zertifiziert.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'Fortgeschrittene Reiter', name: 'Horse-MS.30P', desc: 'Erste Wahl f\u00fcr Premium-Heimtraining. MS.30P bietet professionelles Dreitages-Niveau f\u00fcr Reiter, die ihr Level steigern m\u00f6chten.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Wichtigste Vorteile f\u00fcr Heimnutzung',
    advantages: [
      { title: 'Training Jederzeit \u2014 Wetter Kein Hindernis', desc: '24/7 zu Hause verf\u00fcgbar. Keine Reitplatzbuchung n\u00f6tig. Perfekt f\u00fcr volle Terminpl\u00e4ne.' },
      { title: 'Sicher f\u00fcr die Ganze Familie', desc: 'Sicherheitsdesign ab 4 Jahren bis Erwachsene. Notaus und vollst\u00e4ndiges Gurtsystem.' },
      { title: 'Echte Biomechanische Erfahrung', desc: 'Hochpr\u00e4zise Sensoren bieten ein Reiterlebnis nahe dem echten Pferd. Professionelles Feedback von zu Hause.' },
    ],
    caseAlt: 'Heimreiter-Trainingsszene',
    caseBadge: 'Kundenbericht',
    caseTitle: 'Der Dedizierte Trainingsraum des Familienreiters',
    caseDesc: '"Wir k\u00f6nnen jetzt zu Hause Reiten \u00fcben \u2014 die Kinder lieben es, viel bequemer als zur Reitanlage zu fahren. Das Ger\u00e4t ist sicher und zuverl\u00e4ssig und ist zum Fitnesszentrum unserer Familie geworden."',
    fitsLabel: 'DIESE L\u00d6SUNG IST F\u00dcR SIE, WENN\u2026',
    fitsTitle: 'Diese L\u00f6sung Passt Zu Ihnen, Wenn\u2026',
    fits: [
      { title: 'Sie einen dedizierten Trainingsraum zu Hause einrichten m\u00f6chten', desc: 'Kompakte Gr\u00f6\u00dfe f\u00fcr Heim-Trainingsraum. Installation in einem 5m\xd75m Raum. Leiser Betrieb ohne Nachbarsbeeintr\u00e4chtigung.' },
      { title: 'Ihre Kinder Reiten systematisch lernen sollen', desc: 'Familienweiter Lernplan von Kindern bis Erwachsene, progressive Module, professionelles Remote-Coaching von zu Hause.' },
      { title: 'Sie ein besch\u00e4ftigter Reitsportbegeisterter sind', desc: 'Kein Pendeln zur Reitanlage. Jederzeit 30 Minuten trainieren. Ideal vor und nach Gesch\u00e4ftsreisen.' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'Wie viel Platz ben\u00f6tigt die Heimnutzung?', a: 'MS.30-Ma\u00dfe: 2068\xd71002\xd71500mm. Empfohlener Aufstellplatz mindestens 3\xd73m mit Deckh\u00f6he mindestens 2.6m. Die vollst\u00e4ndige Bedienungsanleitung enth\u00e4lt detaillierte Raumplanungsempfehlungen.' },
      { q: 'Ist es sicher f\u00fcr Kinder, den Simulator zu nutzen?', a: 'MS.30 kommt mit vollst\u00e4ndigem Sicherheitssystem: Vollk\u00f6rpergurt, Notaus-Taste und Software-Geschwindigkeitsbegrenzungen. Unter Aufsicht k\u00f6nnen Kinder ab 4 Jahren den Langsamgang sicher nutzen. Mit Walk-Gang starten und schrittweise steigern.' },
    ],
    ctaTitle: 'Individuellen Plan f\u00fcr Ihr Zuhause Erhalten',
    ctaSub: 'Teilen Sie uns Ihre Raumma\u00dfe und Nutzungsbed\u00fcrfnisse mit. Wir empfehlen die am besten geeignete Konfiguration.',
    ctaBtn1: 'Heimangebot Erhalten',
    ctaBtn2: 'Produkte Vergleichen',
    viewDetail: 'Details Anzeigen \u2192',
    viewCase: 'Vollst\u00e4ndigen Fall Anzeigen \u2192',
  },
  ar: {
    label: '\u062d\u0644\u0648\u0644',
    h1: ['\u0627\u0644\u0645\u0646\u0632\u0644 \u0648', '\u0627\u0644\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0634\u062e\u0635\u064a\u0648\u0646'],
    heroSub: '\u062a\u0631\u064a\u062f \u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644 \u0644\u0643\u0646 \u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u062d\u0644\u0628\u0629\u061f \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u064a\u062a\u064a\u062d \u0644\u0643 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0641\u064a \u0623\u064a \u0648\u0642\u062a \u0648\u0645\u0643\u0627\u0646\u060c \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627.',
    heroAlt: '\u062a\u062f\u0631\u064a\u0628 \u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644',
    recTitle: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647',
    products: [
      { tag: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0645\u062b\u0644 \u0644\u0644\u0645\u0646\u0632\u0644', name: 'Pony-MS.30', desc: '\u0622\u0645\u0646 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627\u060c \u0645\u0646 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u0646 \u0633\u0646 4 \u062d\u062a\u0649 \u0627\u0644\u0628\u0627\u0644\u063a\u064a\u0646. \u062d\u062c\u0645 \u0635\u063a\u064a\u0631 \u0645\u0646\u0627\u0633\u0628 \u0644\u063a\u0631\u0641\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0628. \u0645\u0639\u062a\u0645\u062f CE.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u0644\u0644\u0641\u0631\u0633\u0627\u0646 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u064a\u0646', name: 'Horse-MS.30P', desc: '\u0627\u0644\u062e\u064a\u0627\u0631 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0645\u0646\u0632\u0644\u064a \u0627\u0644\u0641\u0627\u062e\u0631. \u064a\u0648\u0641\u0631 \u062a\u062f\u0631\u064a\u0628\u064b\u0627 \u0628\u0645\u0633\u062a\u0648\u0649 \u062b\u0644\u0627\u062b\u064a \u0627\u062d\u062a\u0631\u0627\u0641\u064a.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u0645\u0632\u0627\u064a\u0627 \u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0646\u0632\u0644\u064a',
    advantages: [
      { title: '\u062a\u062f\u0631\u064a\u0628 \u0641\u064a \u0623\u064a \u0648\u0642\u062a \u2014 \u0628\u063a\u0636 \u0627\u0644\u0646\u0638\u0631 \u0639\u0646 \u0627\u0644\u0637\u0642\u0633', desc: '\u0645\u062a\u0627\u062d 24/7 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644. \u0644\u0627 \u062d\u0627\u062c\u0629 \u0644\u062d\u062c\u0632 \u062d\u0644\u0628\u0629. \u0645\u062b\u0627\u0644\u064a \u0644\u0644\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0645\u0632\u062f\u062d\u0645\u0629.' },
      { title: '\u0622\u0645\u0646 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0628\u0623\u0643\u0645\u0644\u0647\u0627', desc: '\u062a\u0635\u0645\u064a\u0645 \u0622\u0645\u0646 \u0645\u0646 \u0633\u0646 4 \u0641\u0623\u0643\u062b\u0631 \u062d\u062a\u0649 \u0627\u0644\u0628\u0627\u0644\u063a\u064a\u0646. \u0625\u064a\u0642\u0627\u0641 \u0637\u0627\u0631\u0626 \u0648\u062d\u0632\u0627\u0645 \u0623\u0645\u0627\u0646 \u0643\u0627\u0645\u0644.' },
      { title: '\u062a\u062c\u0631\u0628\u0629 \u062d\u064a\u0648\u064a\u0629 \u062d\u0631\u0643\u064a\u0629 \u062d\u0642\u064a\u0642\u064a\u0629', desc: '\u062d\u0633\u0627\u0633\u0627\u062a \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062f\u0642\u0629 \u062a\u0648\u0641\u0631 \u062a\u062c\u0631\u0628\u0629 \u0631\u0643\u0648\u0628 \u0642\u0631\u064a\u0628\u0629 \u0645\u0646 \u0627\u0644\u062e\u064a\u0648\u0644 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629. \u062a\u063a\u0630\u064a\u0629 \u0631\u0627\u062c\u0639\u0629 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0646\u0632\u0644.' },
    ],
    caseAlt: '\u0645\u0634\u0647\u062f \u062a\u062f\u0631\u064a\u0628 \u0641\u0627\u0631\u0633 \u0645\u0646\u0632\u0644\u064a',
    caseBadge: '\u0642\u0635\u0629 \u0639\u0645\u064a\u0644',
    caseTitle: '\u0641\u0636\u0627\u0621 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062e\u0627\u0635 \u0644\u0644\u0641\u0627\u0631\u0633 \u0627\u0644\u0639\u0627\u0626\u0644\u064a',
    caseDesc: '"\u064a\u0645\u0643\u0646\u0646\u0627 \u0627\u0644\u0622\u0646 \u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644. \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u064a\u062d\u0628\u0648\u0646\u0647\u0627 \u0643\u062b\u064a\u0631\u064b\u0627\u060c \u0623\u0643\u062b\u0631 \u0631\u0627\u062d\u0629 \u0628\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0630\u0647\u0627\u0628 \u0625\u0644\u0649 \u0627\u0644\u062d\u0644\u0628\u0629. \u0627\u0644\u062c\u0647\u0627\u0632 \u0622\u0645\u0646 \u0648\u0645\u0648\u062b\u0648\u0642 \u0628\u0647 \u0648\u0623\u0635\u0628\u062d \u0645\u0631\u0643\u0632 \u0644\u064a\u0627\u0642\u0629 \u0639\u0627\u0626\u0644\u062a\u0646\u0627."',
    fitsLabel: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0625\u0630\u0627\u2026',
    fitsTitle: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0627\u0644\u0623\u0646\u0633\u0628 \u0625\u0630\u0627\u2026',
    fits: [
      { title: '\u062a\u0631\u064a\u062f \u0625\u0646\u0634\u0627\u0621 \u0641\u0636\u0627\u0621 \u062a\u062f\u0631\u064a\u0628 \u062e\u0627\u0635 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644', desc: '\u062d\u062c\u0645 \u0635\u063a\u064a\u0631 \u064a\u0646\u0627\u0633\u0628 \u063a\u0631\u0641\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0628. \u064a\u062a\u0633\u0639 \u0641\u064a 5m\xd75m. \u062a\u0634\u063a\u064a\u0644 \u0635\u0627\u0645\u062a \u062f\u0648\u0646 \u0625\u0632\u0639\u0627\u062c \u0627\u0644\u062c\u064a\u0631\u0627\u0646.' },
      { title: '\u062a\u0631\u064a\u062f \u0644\u0623\u0637\u0641\u0627\u0644\u0643 \u062a\u0639\u0644\u0645 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0628\u0634\u0643\u0644 \u0645\u0646\u0647\u062c\u064a', desc: '\u062e\u0637\u0629 \u062a\u0639\u0644\u0645 \u0639\u0627\u0626\u0644\u064a\u0629 \u0645\u0646 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0628\u0627\u0644\u063a\u064a\u0646\u060c \u0648\u062d\u062f\u0627\u062a \u062a\u062f\u0631\u064a\u062c\u064a\u0629\u060c \u062a\u062f\u0631\u064a\u0628 \u0627\u062d\u062a\u0631\u0627\u0641\u064a \u0639\u0646 \u0628\u064f\u0639\u062f.' },
      { title: '\u0623\u0646\u062a \u0645\u062a\u062d\u0645\u0633 \u0644\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0645\u0634\u063a\u0648\u0644', desc: '\u0644\u0627 \u062a\u0646\u0642\u0644\u0627\u062a \u0625\u0644\u0649 \u0627\u0644\u062d\u0644\u0628\u0629. \u062a\u062f\u0631\u064a\u0628 30 \u062f\u0642\u064a\u0642\u0629 \u0641\u064a \u0623\u064a \u0648\u0642\u062a. \u0645\u062b\u0627\u0644\u064a \u0642\u0628\u0644 \u0648\u0628\u0639\u062f \u0627\u0644\u0633\u0641\u0631.' },
    ],
    faqTitle: '\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0643\u0645 \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u064a\u062d\u062a\u0627\u062c\u0647\u0627 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u0646\u0632\u0644\u064a\u061f', a: '\u0623\u0628\u0639\u0627\u062f MS.30: 2068\xd71002\xd71500mm. \u064a\u064f\u0646\u0635\u062d \u0628\u0645\u0633\u0627\u062d\u0629 \u062a\u0631\u0643\u064a\u0628 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 3\xd73m \u0648\u0627\u0631\u062a\u0641\u0627\u0639 \u0633\u0642\u0641 2.6m. \u062f\u0644\u064a\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u064a\u062a\u0636\u0645\u0646 \u062a\u0648\u0635\u064a\u0627\u062a \u062a\u0641\u0635\u064a\u0644\u064a\u0629.' },
      { q: '\u0647\u0644 \u0645\u0646 \u0627\u0644\u0622\u0645\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062d\u0627\u0643\u064a\u061f', a: 'MS.30 \u0645\u0632\u0648\u062f \u0628\u0646\u0638\u0627\u0645 \u0623\u0645\u0627\u0646 \u0643\u0627\u0645\u0644: \u062d\u0632\u0627\u0645 \u0643\u0627\u0645\u0644 \u0627\u0644\u062c\u0633\u0645\u060c \u0632\u0631 \u0625\u064a\u0642\u0627\u0641 \u0637\u0627\u0631\u0626\u060c \u062d\u062f\u0648\u062f \u0633\u0631\u0639\u0629 \u0628\u0631\u0645\u062c\u064a\u0629. \u0628\u0625\u0634\u0631\u0627\u0641 \u0648\u0644\u064a \u0627\u0644\u0623\u0645\u0631\u060c \u064a\u0645\u0643\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u0645\u0646 \u0633\u0646 4+ \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0628\u0637\u064a\u0621 \u0628\u0623\u0645\u0627\u0646.' },
    ],
    ctaTitle: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0645\u0646\u0632\u0644\u0643',
    ctaSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0623\u0628\u0639\u0627\u062f \u0645\u0633\u0627\u062d\u062a\u0643 \u0648\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643. \u0633\u0646\u0648\u0635\u064a \u0628\u0623\u0646\u0633\u0628 \u062a\u0643\u0648\u064a\u0646.',
    ctaBtn1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u0645\u0646\u0632\u0644\u064a',
    ctaBtn2: '\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
    viewDetail: '\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2192',
    viewCase: '\u0639\u0631\u0636 \u0627\u0644\u062d\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629 \u2192',
  },
};

const STATIC = {
  heroImg: '/images/solution-home-hero.jpg',
  caseImg: '/images/hero-slide-2.png',
  caseImgPosition: 'center center',
  caseLink: '/cases',
  ctaBtn2Href: '/compare',
  jsonld: { name: 'Home & Personal Rider Equestrian Solution', url: 'https://www.equestrian-simulators.com/solutions/home' },
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
