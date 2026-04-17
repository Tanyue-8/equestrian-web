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
    h1: ['\u5b66\u6821\u4e0e', '\u6559\u80b2\u673a\u6784'],
    heroSub: '\u5c06\u9a6c\u672f\u7eb3\u5165\u4f53\u80b2\u8bfe\u7a0b\uff0c\u65e0\u9700\u9a6c\u573a\u3001\u65e0\u9700\u517b\u9a6c\uff0c\u5f00\u5b66\u5373\u7528\uff0c\u5b89\u5168\u5408\u89c4\uff0c\u6807\u51c6\u5316\u53ef\u8003\u6838\u3002',
    heroAlt: '\u5b66\u6821\u4e0e\u6559\u80b2\u673a\u6784\u9a6c\u672f\u6a21\u62df\u5668',
    recTitle: '\u63a8\u8350\u914d\u7f6e',
    products: [
      { tag: '\u6700\u9002\u5408\u5b66\u6821', name: 'Pony-MS.30', desc: '\u9002\u54816\u5c81\u4ee5\u4e0a\u5b66\u751f\uff0c\u4f53\u578b\u9002\u914d\u8303\u56f4\u5e7f\uff0c\u64cd\u4f5c\u5b89\u5168\u7b80\u5355\uff0c\u652f\u6301\u8bfe\u7a0b\u5316\u7ba1\u7406\uff0c\u5355\u8bfe\u65f645\u5206\u949f\u6807\u51c6\u6a21\u5f0f\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u9ad8\u6821\u8fdb\u9636', name: 'Horse-MS.30P', desc: '\u9002\u5408\u9ad8\u6821\u8fd0\u52a8\u79d1\u5b66\u3001\u4f53\u80b2\u6559\u80b2\u4e13\u4e1a\uff0c\u63d0\u4f9b\u53ef\u91cf\u5316\u7684\u751f\u7269\u529b\u5b66\u6570\u636e\uff0c\u652f\u6301\u6bd5\u4e1a\u8bba\u6587\u7814\u7a76\u548c\u7ade\u6280\u8bad\u7ec3\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u6559\u80b2\u573a\u666f\u6838\u5fc3\u4f18\u52bf',
    advantages: [
      { title: '\u672c\u8d28\u5b89\u5168\uff0c\u96f6\u9a91\u9a6c\u98ce\u9669', desc: '\u6a21\u62df\u5668\u6709\u7d27\u6025\u505c\u6b62\u548c\u5b89\u5168\u5e26\u7cfb\u7edf\uff0c\u5b66\u751f\u65e0\u4efb\u4f55\u5760\u9a6c\u98ce\u9669\uff0c\u5b8c\u5168\u7b26\u5408\u5b66\u6821\u5b89\u5168\u89c4\u8303\uff0c\u5bb6\u957f\u653e\u5fc3\u3002' },
      { title: '\u8bfe\u7a0b\u5316\u6559\u5b66\u65b9\u6848', desc: '\u63d0\u4f9b\u5b8c\u6574\u7684\u8bfe\u7a0b\u5305\uff1a\u6559\u6848\u3001\u8003\u6838\u6807\u51c6\u3001\u8fdb\u9636\u5173\u5361\uff0c\u5f00\u7b71\u5373\u7528\uff0c\u4f53\u80b2\u6559\u5e08\u65e0\u9700\u9a6c\u672f\u80cc\u666f\u4e5f\u80fd\u6559\u5b66\u3002' },
      { title: '\u591a\u6240\u9ad8\u6821\u9a8c\u8bc1', desc: '\u56db\u5ddd\u65c5\u6e38\u5b66\u9662\u3001\u4e2d\u5c71\u5927\u5b66\u6df1\u5733\u9644\u5c5e\u5b66\u6821\u3001\u65b0\u7586\u519c\u4e1a\u5927\u5b66\u7b49\u5df2\u5c06\u6a21\u62df\u9a6c\u7eb3\u5165\u6b63\u5f0f\u6559\u5b66\u4f53\u7cfb\u3002' },
    ],
    caseAlt: '\u56db\u5ddd\u65c5\u6e38\u5b66\u9662\u9a6c\u672f\u6a21\u62df\u8bad\u7ec3',
    caseBadge: '\u9ad8\u6821\u5408\u4f5c',
    caseTitle: '\u56db\u5ddd\u65c5\u6e38\u5b66\u9662 \u2014 \u9a6c\u672f\u8bfe\u7a0b\u4f53\u7cfb\u5efa\u8bbe',
    caseDesc: '\u5c06\u6a21\u62df\u9a6c\u5f15\u5165\u9a6c\u672f\u4e13\u4e1a\u8bfe\u7a0b\uff0c\u6bcf\u5b66\u671f\u8986\u76d6\u5b66\u751f\u8d85\u8fc7200\u4eba\uff0c\u89e3\u51b3\u4e86\u771f\u9a6c\u8d44\u6e90\u77ed\u7f3a\u548c\u573a\u5730\u4e0d\u8db3\u7684\u6838\u5fc3\u95ee\u9898\uff0c\u8bfe\u7a0b\u8bc4\u5206\u663e\u8457\u63d0\u5347\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8fd9\u5957\u65b9\u6848\u6700\u9002\u5408\u60a8',
    fits: [
      { title: '\u60a8\u60f3\u5c06\u9a6c\u672f\u7eb3\u5165\u6b63\u5f0f\u8bfe\u7a0b', desc: '\u591a\u673a\u7ec4\u7f51\u652f\u6301\u73ed\u7ea7\u540c\u6b65\u6559\u5b66\uff0c\u6559\u7ec3\u7aef\u5b9e\u65f6\u76d1\u63a7\u6240\u6709\u5b66\u751f\u6570\u636e\uff0c\u6807\u51c6\u5316\u8bfe\u7a0b\u4f53\u7cfb\u9002\u5408K12\u548c\u9ad8\u6821\u4f53\u80b2\u90e8\u95e8\u3002' },
      { title: '\u60a8\u670d\u52a15-18\u5c81\u9752\u5c11\u5e74\u7fa4\u4f53', desc: '\u5b89\u5168\u8bbe\u8ba1\u9002\u5408\u513f\u7ae5\u4f7f\u7528\uff0c\u9012\u8fdb\u5f0f\u8bfe\u7a0b\u6a21\u5757\u4ece\u57fa\u7840\u5230\u8fdb\u9636\uff0c\u914d\u5408\u9a6c\u672f\u8fd0\u52a8\u666e\u53ca\u63a8\u5e7f\uff0c\u662f\u7d20\u8d28\u6559\u80b2\u7684\u4f18\u8d28\u8f7d\u4f53\u3002' },
      { title: '\u60a8\u9700\u8981\u6807\u51c6\u5316\u7684\u8003\u6838\u4f53\u7cfb', desc: '\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\u5b66\u5458\u5e73\u8861\u5206\u548c\u59ff\u52bf\u8bc4\u5206\uff0c\u6570\u636e\u5316\u8003\u6838\u66ff\u4ee3\u4e3b\u89c2\u8bc4\u4ef7\uff0c\u53ef\u51fa\u5177\u7cfb\u7edf\u62a5\u544a\u652f\u6301\u6821\u5185\u5b66\u5206\u8ba4\u5b9a\u3002' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u5b66\u751f\u4f7f\u7528\u6a21\u62df\u5668\u7684\u6700\u4f4e\u5e74\u9f84\u8981\u6c42\u662f\u591a\u5c11\uff1f', a: 'MS.30\u5728\u6709\u6559\u5e08\u76d1\u7763\u7684\u6559\u5b66\u73af\u5883\u4e2d\u9002\u54815\u5c81\u4ee5\u4e0a\u5b66\u751f\u4f7f\u7528\uff0c\u901f\u5ea6\u548c\u8fd0\u52a8\u5e45\u5ea6\u5747\u53ef\u8c03\u8282\u3002\u5efa\u51688\u5c81\u4ee5\u4e0b\u513f\u7ae5\u4ece\u6700\u6162\u7684\u8d70\u6b65\u6a21\u5f0f\u5f00\u59cb\uff0c\u5728\u6559\u5e08\u6307\u5bfc\u4e0b\u5faa\u5e8f\u6e10\u8fdb\u3002' },
      { q: '\u5b66\u6821\u9700\u8981\u4e13\u4e1a\u9a6c\u672f\u6559\u7ec3\u624d\u80fd\u64cd\u4f5c\u7cfb\u7edf\u5417\uff1f', a: '\u4e13\u4e1a\u9a6c\u672f\u6559\u7ec3\u5bf9\u4e8e\u8bfe\u7a0b\u8bbe\u8ba1\u66f4\u6709\u5e2e\u52a9\uff0c\u4f46\u7ecf\u8fc7\u6211\u4eec\u73b0\u573a\u57f9\u8bad\u540e\uff0c\u4f53\u80b2\u6559\u5e08\u540c\u6837\u53ef\u4ee5\u72ec\u7acb\u64cd\u4f5c\u3002\u7cfb\u7edf\u8f6f\u4ef6\u5f15\u5bfc\u5b66\u751f\u5b8c\u6210\u9884\u8bbe\u8bfe\u7a0b\u6d41\u7a0b\uff0c\u6240\u9700\u4e13\u4e1a\u95e8\u69db\u8fdc\u4f4e\u4e8e\u771f\u9a6c\u6559\u5b66\u3002' },
    ],
    ctaTitle: '\u4e3a\u60a8\u7684\u5b66\u6821\u5b9a\u5236\u6559\u5b66\u65b9\u6848',
    ctaSub: '\u63d0\u4f9b\u5b66\u6821\u540d\u79f0\u3001\u5b66\u751f\u89c4\u6a21\u548c\u8bfe\u7a0b\u9700\u6c42\uff0c\u6211\u4eec\u4e3a\u60a8\u5236\u5b9a\u5b8c\u6574\u5f00\u8bfe\u65b9\u6848',
    ctaBtn1: '\u83b7\u53d6\u6559\u80b2\u65b9\u6848',
    ctaBtn2: '\u67e5\u770b\u5408\u4f5c\u6848\u4f8b',
    viewDetail: '\u67e5\u770b\u8be6\u60c5 \u2192',
    viewCase: '\u67e5\u770b\u5b8c\u6574\u6848\u4f8b \u2192',
  },
  en: {
    label: 'Solutions',
    h1: ['Schools &', 'Educational Institutions'],
    heroSub: 'Integrate equestrian training into PE curricula — no arena, no horses, ready from day one, safety-compliant and assessable.',
    heroAlt: 'School and educational institution equestrian simulator',
    recTitle: 'Recommended Configuration',
    products: [
      { tag: 'Best for Schools', name: 'Pony-MS.30', desc: 'Suitable for students aged 6+, wide size range, safe and simple to operate, supports curriculum-based management with a 45-minute standard session mode.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'University Advanced', name: 'Horse-MS.30P', desc: 'Ideal for sports science and physical education majors, providing quantifiable biomechanical data to support thesis research and competitive training.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Key Advantages for Education',
    advantages: [
      { title: 'Inherently Safe — Zero Riding Risk', desc: 'The simulator features emergency stop and harness systems, eliminating any fall risk for students, fully complying with school safety standards.' },
      { title: 'Curriculum-Ready Teaching Package', desc: 'Complete lesson plans, assessment criteria, and progressive levels — ready to use out of the box. PE teachers can instruct with no equestrian background required.' },
      { title: 'Validated by Multiple Universities', desc: 'Sichuan Tourism College, Zhongshan University Shenzhen Affiliated School, Xinjiang Agricultural University and more have integrated simulators into formal curricula.' },
    ],
    caseAlt: 'Sichuan Tourism College equestrian simulator training',
    caseBadge: 'University Partnership',
    caseTitle: 'Sichuan Tourism College \u2014 Building an Equestrian Curriculum',
    caseDesc: 'Simulator introduced into the equestrian major curriculum, serving 200+ students per semester, solving the core problem of limited real horses and venues while significantly improving course scores.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: 'This Solution Is the Right Fit If\u2026',
    fits: [
      { title: 'You Want to Add Equestrian to the Official Curriculum', desc: 'Multi-unit networking supports synchronized class teaching; instructors monitor all student data in real time with a standardized curriculum for K-12 and university PE departments.' },
      { title: 'You Serve Youth Aged 5\u201318', desc: 'Safe design for children, progressive modules from basics to advanced levels, supporting equestrian outreach — a premium carrier for quality education.' },
      { title: 'You Need a Standardized Assessment System', desc: 'The system auto-generates balance scores and posture ratings, replacing subjective grading with data-driven assessment and generating reports to support credit recognition.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'What is the minimum age for students to use the simulator?', a: 'The MS.30 is suitable for students aged 5+ in a supervised teaching environment, with adjustable speed and range of motion. Children under 8 are recommended to start at the slowest walk mode and progress gradually under teacher guidance.' },
      { q: 'Does the school need a professional riding coach to operate the system?', a: 'A professional riding coach is more helpful for curriculum design, but PE teachers can operate the system independently after our on-site training. The software guides students through preset course workflows, requiring far less expertise than real-horse instruction.' },
    ],
    ctaTitle: 'Get a Custom Teaching Plan for Your School',
    ctaSub: 'Share your school name, student count, and curriculum needs — we will design a complete program for you.',
    ctaBtn1: 'Get Education Proposal',
    ctaBtn2: 'View Partner Cases',
    viewDetail: 'View Details \u2192',
    viewCase: 'View Full Case \u2192',
  },
  ja: {
    label: '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3',
    h1: ['\u5b66\u6821\u30fb', '\u6559\u80b2\u6a5f\u95a2'],
    heroSub: '\u9a6c\u8853\u3092\u4f53\u80b2\u6388\u696d\u306b\u7d44\u307f\u8fbc\u3080\u3002\u9a6c\u5c04\u5834\u3082\u9a6c\u3082\u4e0d\u8981\u3002\u5373\u65e5\u4f7f\u7528\u53ef\u80fd\u3001\u5b89\u5168\u57fa\u6e96\u6e80\u305f\u3057\u3001\u6a19\u6e96\u5316\u3055\u308c\u305f\u8a55\u4fa1\u304c\u53ef\u80fd\u3002',
    heroAlt: '\u5b66\u6821\u30fb\u6559\u80b2\u6a5f\u95a2\u5411\u3051\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc',
    recTitle: '\u63a8\u5968\u69cb\u6210',
    products: [
      { tag: '\u5b66\u6821\u306b\u6700\u9069', name: 'Pony-MS.30', desc: '6\u6b73\u4ee5\u4e0a\u306e\u751f\u5f92\u5bfe\u5fdc\u3001\u5e45\u5e83\u3044\u4f53\u578b\u9069\u5fdc\u7bc4\u56f2\u3001\u5b89\u5168\u3067\u7c21\u5358\u306a\u64cd\u4f5c\u3001\u30ab\u30ea\u30ad\u30e5\u30e9\u30e0\u7ba1\u7406\u5bfe\u5fdc\u3001\u4e00\u30b3\u30de45\u5206\u306e\u6a19\u6e96\u30e2\u30fc\u30c9\u3002', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u5927\u5b66\u4e0a\u7d1a', name: 'Horse-MS.30P', desc: '\u30b9\u30dd\u30fc\u30c4\u79d1\u5b66\u30fb\u4f53\u80b2\u6559\u80b2\u5c02\u6495\u5411\u3051\u3002\u5b9a\u91cf\u53ef\u80fd\u306a\u751f\u4f53\u529b\u5b66\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u3001\u5352\u8ad6\u7814\u7a76\u3084\u7af6\u6280\u8a13\u7df4\u3092\u652f\u63f4\u3002', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u6559\u80b2\u73fe\u5834\u306e\u4e3b\u306a\u30e1\u30ea\u30c3\u30c8',
    advantages: [
      { title: '\u672c\u8cea\u7684\u306b\u5b89\u5168\uff0c\u8a66\u4e57\u30ea\u30b9\u30af\u30bc\u30ed', desc: '\u7dca\u6025\u505c\u6b62\u30fb\u30cf\u30fc\u30cd\u30b9\u30b7\u30b9\u30c6\u30e0\u642d\u8f09\u3002\u5c71\u843d\u3061\u306e\u30ea\u30b9\u30af\u306a\u3057\u3002\u5b66\u6821\u5b89\u5168\u57fa\u6e96\u306b\u5b8c\u5168\u6e96\u62e0\u3002' },
      { title: '\u30ab\u30ea\u30ad\u30e5\u30e9\u30e0\u5bfe\u5fdc\u306e\u6388\u696d\u30d1\u30c3\u30b1\u30fc\u30b8', desc: '\u6307\u5c0e\u6848\u30fb\u8a55\u4fa1\u57fa\u6e96\u30fb\u9032\u5ea6\u30b9\u30c6\u30c3\u30d7\u304c\u5b8c\u5099\u3002\u9a6c\u8853\u672a\u7d4c\u9a13\u306e\u4f53\u80b2\u6559\u5e2b\u3067\u3082\u6307\u5c0e\u53ef\u80fd\u3002' },
      { title: '\u8907\u6570\u306e\u5927\u5b66\u3067\u5b9f\u8a3c\u6e08\u307f', desc: '\u56db\u5ddd\u65c5\u6e38\u5b66\u9662\u3001\u4e2d\u5c71\u5927\u5b66\u6df1\u5733\u9644\u5c5e\u5b66\u6821\u3001\u65b0\u7586\u8fb2\u696d\u5927\u5b66\u306a\u3069\u304c\u6b63\u5f0f\u306e\u6559\u80b2\u30ab\u30ea\u30ad\u30e5\u30e9\u30e0\u306b\u5c0e\u5165\u6e08\u307f\u3002' },
    ],
    caseAlt: '\u56db\u5ddd\u65c5\u6e38\u5b66\u9662\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u8a13\u7df4',
    caseBadge: '\u5927\u5b66\u9023\u643a',
    caseTitle: '\u56db\u5ddd\u65c5\u6e38\u5b66\u9662 \u2014 \u9a6c\u8853\u30ab\u30ea\u30ad\u30e5\u30e9\u30e0\u69cb\u7bc9',
    caseDesc: '\u9a6c\u8853\u5c02\u6495\u306e\u6b63\u5f0f\u6388\u696d\u306b\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3092\u5c0e\u5165\u3002\u5e74200\u540d\u4ee5\u4e0a\u306e\u5b66\u751f\u306b\u5bfe\u5fdc\u3057\u3001\u672c\u7269\u306e\u9a6c\u4e0d\u8db3\u554f\u984c\u3092\u89e3\u6c7a\u3002\u8a66\u9a13\u7d50\u679c\u304c\u5927\u5e45\u5411\u4e0a\u3002',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\u6b21\u306e\u3088\u3046\u306a\u65b9\u306b\u6700\u9069\u3067\u3059',
    fits: [
      { title: '\u9a6c\u8853\u3092\u6b63\u5f0f\u6388\u696d\u306b\u7d44\u307f\u8fbc\u307f\u305f\u3044', desc: '\u8907\u6570\u53f0\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u30af\u30e9\u30b9\u540c\u671f\u6388\u696d\u304c\u53ef\u80fd\u3002\u30a4\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u304c\u5168\u5b66\u751f\u306e\u30c7\u30fc\u30bf\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u76e3\u8996\u3002K12\u304a\u3088\u3073\u5927\u5b66\u4f53\u80b2\u90e8\u9580\u5411\u3051\u6a19\u6e96\u5316\u30ab\u30ea\u30ad\u30e5\u30e9\u30e0\u3002' },
      { title: '5\uff5e18\u6b73\u306e\u9752\u5c11\u5e74\u5411\u3051\u30b5\u30fc\u30d3\u30b9', desc: '\u5150\u7ae5\u5411\u3051\u5b89\u5168\u8a2d\u8a08\u3002\u57fa\u790e\u304b\u3089\u4e0a\u7d1a\u3078\u306e\u9032\u6357\u578b\u30e2\u30b8\u30e5\u30fc\u30eb\u3002\u9a6c\u8853\u666e\u53ca\u3068\u8cea\u306e\u9ad8\u3044\u6559\u80b2\u3092\u4e21\u7acb\u3002' },
      { title: '\u6a19\u6e96\u5316\u3055\u308c\u305f\u8a55\u4fa1\u4f53\u7cfb\u304c\u5fc5\u8981', desc: '\u30b7\u30b9\u30c6\u30e0\u304c\u81ea\u52d5\u3067\u30d0\u30e9\u30f3\u30b9\u30b9\u30b3\u30a2\u3068\u59ff\u52e2\u8a55\u4fa1\u3092\u751f\u6210\u3002\u5ba2\u89b3\u7684\u8a55\u4fa1\u3092\u30c7\u30fc\u30bf\u3067\u7f6e\u304d\u63db\u3048\uff0c\u5b66\u5185\u5358\u4f4d\u8a8d\u5b9a\u306b\u5bfe\u5fdc\u3002' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u5b66\u751f\u304c\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3067\u304d\u308b\u6700\u4f4e\u5e74\u9f62\u306f\uff1f', a: 'MS.30\u306f\u6559\u5e2b\u306e\u76e3\u7763\u4e0b\u30675\u6b73\u4ee5\u4e0a\u304b\u3089\u4f7f\u7528\u53ef\u80fd\u3002\u901f\u5ea6\u3068\u52d5\u304d\u306e\u5e45\u306f\u8abf\u7bc9\u53ef\u80fd\u30028\u6b73\u672a\u6e80\u306f\u6700\u3082\u9065\u3044\u30a6\u30a9\u30fc\u30af\u30e2\u30fc\u30c9\u304b\u3089\u5f15\u5c0e\u3092\u304a\u5e38\u3081\u3057\u307e\u3059\u3002' },
      { q: '\u5b66\u6821\u306f\u30d7\u30ed\u306e\u9a6c\u8853\u30b3\u30fc\u30c1\u304c\u5fc5\u8981\u3067\u3059\u304b\uff1f', a: '\u30d7\u30ed\u30b3\u30fc\u30c1\u306f\u30ab\u30ea\u30ad\u30e5\u30e9\u30e0\u8a2d\u8a08\u306b\u5f79\u7acb\u3061\u307e\u3059\u304c\u3001\u73fe\u5730\u7814\u4fee\u5f8c\u306f\u4f53\u80b2\u6559\u5e2b\u3067\u3082\u72ec\u7acb\u904b\u7528\u53ef\u80fd\u3002\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u5b66\u751f\u3092\u30b3\u30fc\u30b9\u306b\u6cbf\u3063\u3066\u8aa4\u5c0e\u3057\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u5b66\u6821\u5411\u3051\u6559\u80b2\u30d7\u30e9\u30f3\u3092\u53d7\u3051\u53d6\u308b',
    ctaSub: '\u5b66\u6821\u540d\u30fb\u5b66\u751f\u6570\u30fb\u6388\u696d\u30cb\u30fc\u30ba\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u5b8c\u5168\u306a\u958b\u8b1b\u30d7\u30e9\u30f3\u3092\u3054\u63d0\u6848\u3057\u307e\u3059\u3002',
    ctaBtn1: '\u6559\u80b2\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b',
    ctaBtn2: '\u9023\u643a\u4e8b\u4f8b\u3092\u898b\u308b',
    viewDetail: '\u8a73\u7d30\u3092\u898b\u308b \u2192',
    viewCase: '\u5c0e\u5165\u4e8b\u4f8b\u3092\u898b\u308b \u2192',
  },
  ko: {
    label: '\uc194\ub8e8\uc158',
    h1: ['\ud559\uad50 \ubc0f', '\uad50\uc721 \uae30\uad00'],
    heroSub: '\uc2b9\ub9c8\ub97c \uccb4\uc721 \uad50\uacfc\uacfc\uc815\uc5d0 \ub3c4\uc785\ud558\uc138\uc694. \uc2b9\ub9c8\uc7a5\ub3c4 \ub9d0\ub3c4 \ud544\uc694 \uc5c6\uace0, \uc989\uc2dc \uc0ac\uc6a9 \uac00\ub2a5, \uc548\uc804 \uaddc\uc815 \uc900\uc218, \ud45c\uc900\ud654\ub41c \ud3c9\uac00 \uccb4\uacc4.',
    heroAlt: '\ud559\uad50 \ubc0f \uad50\uc721 \uae30\uad00 \uc2b9\ub9c8 \uc2dc\ubbac\ub808\uc774\ud130',
    recTitle: '\uad8c\uc7a5 \uad6c\uc131',
    products: [
      { tag: '\ud559\uad50\uc5d0 \ucd5c\uc801', name: 'Pony-MS.30', desc: '6\uc138 \uc774\uc0c1 \ud559\uc0dd\uc5d0 \uc801\ud569, \ub113\uc740 \uccb4\ud615 \uc801\uc6a9 \ubc94\uc704, \uc548\uc804\ud558\uace0 \uac04\ub2e8\ud55c \uc870\uc791, \uad50\uacfc\uacfc\uc815 \uad00\ub9ac \uc9c0\uc6d0, 45\ubd84 \ud45c\uc900 \uc218\uc5c5 \ubaa8\ub4dc.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\ub300\ud559 \uc2ec\ud654', name: 'Horse-MS.30P', desc: '\uc2a4\ud3ec\uce20 \uacfc\ud559 \ubc0f \uccb4\uc721 \uad50\uc721 \uc804\uacf5\uc5d0 \uc801\ud569, \uc815\ub7c9\ud654 \uac00\ub2a5\ud55c \uc0dd\uccb4\uc5ed\ud559 \ub370\uc774\ud130 \uc81c\uacf5, \ub17c\ubb38 \uc5f0\uad6c \ubc0f \uacbd\uae30 \ud6c8\ub828 \uc9c0\uc6d0.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\uad50\uc721 \ud604\uc7a5 \ud575\uc2ec \uc7a5\uc810',
    advantages: [
      { title: '\ubcf8\uc9c8\uc801 \uc548\uc804, \uc81c\ub85c \ub099\ub9c8 \uc704\ud5d8', desc: '\ube44\uc0c1 \uc815\uc9c0 \ubc0f \ud558\ub124\uc2a4 \uc2dc\uc2a4\ud15c \uc7a5\ucc29. \ud559\uc0dd \ub099\ub9c8 \uc704\ud5d8 \uc81c\ub85c, \ud559\uad50 \uc548\uc804 \uaddc\uc815 \uc99d\uc9c1 \uc900\uc218.' },
      { title: '\uad50\uacfc\uacfc\uc815 \uae30\ubc18 \uc218\uc5c5 \ud328\ud0a4\uc9c0', desc: '\uc644\uc804\ud55c \uad50\uc548, \ud3c9\uac00 \uae30\uc900, \ub2e8\uacc4\ubcc4 \ubbf8\uc158 \uc81c\uacf5. \uc2b9\ub9c8 \uacbd\ud5d8 \uc5c6\ub294 \uccb4\uc721 \uad50\uc0ac\ub3c4 \uc9c0\ub3c4 \uac00\ub2a5.' },
      { title: '\uc5ec\ub7ec \ub300\ud559\uc5d0\uc11c \uac80\uc99d\ub428', desc: '\uc2dc\ucda8\ub8e8 \uc5ec\ud589 \ub300\ud559, \uc911\uc0b0\ub300\ud559 \uc2ec\uc13c \ubd80\uc18d\ud559\uad50, \uc2e0\uc7a5 \ub18d\uc5c5\ub300\ud559 \ub4f1\uc774 \uacf5\uc2dd \uad50\uc721\uc5d0 \ub3c4\uc785.' },
    ],
    caseAlt: '\uc2dc\ucda8\ub8e8 \uc5ec\ud589 \ub300\ud559 \uc2b9\ub9c8 \uc2dc\ubbac\ub808\uc774\ud130 \ud6c8\ub828',
    caseBadge: '\ub300\ud559 \ud611\ub825',
    caseTitle: '\uc2dc\ucda8\ub8e8 \uc5ec\ud589 \ub300\ud559 \u2014 \uc2b9\ub9c8 \uad50\uacfc\uacfc\uc815 \uad6c\ucd95',
    caseDesc: '\uc2b9\ub9c8 \uc804\uacf5 \uacfc\ubaa9\uc5d0 \uc2dc\ubbac\ub808\uc774\ud130 \ub3c4\uc785. \ud559\uae30\ub2f9 200\uba85 \uc774\uc0c1 \ud559\uc0dd \uc218\uac15, \uc2e4\ub9c8 \ubd80\uc871 \ubb38\uc81c \ud574\uacb0, \uacfc\ubaa9 \ud3c9\uac00 \ud06c\uac8c \ud5a5\uc0c1.',
    fitsLabel: 'THIS SOLUTION IS FOR YOU IF\u2026',
    fitsTitle: '\ub2e4\uc74c\uc5d0 \ud574\ub2f9\ud558\uc2dc\uba74 \ucd5c\uc801\uc758 \uc120\ud0dd\uc785\ub2c8\ub2e4',
    fits: [
      { title: '\uc2b9\ub9c8\ub97c \uacf5\uc2dd \uad50\uacfc\uacfc\uc815\uc5d0 \ud3ec\ud568\ud558\uace0 \uc2f6\uc73c\uc2e4 \ub54c', desc: '\ub2e4\uc911 \uae30\uae30 \ub124\ud2b8\uc6cc\ud06c\ub85c \ud559\uae09 \ub3d9\uae30 \uc218\uc5c5 \uc9c0\uc6d0. K12 \ubc0f \ub300\ud559 \uccb4\uc721 \ubd80\uc11c\uc5d0 \uc801\ud569\ud55c \ud45c\uc900\ud654 \uad50\uacfc\uacfc\uc815.' },
      { title: '5\uc138\uc5d0\uc11c 18\uc138 \uccad\uc18c\ub144\uc744 \ub300\uc0c1\uc73c\ub85c \ud558\uc2e4 \ub54c', desc: '\uc544\ub3d9 \uc548\uc804 \uc124\uacc4, \uae30\ucd08\ubd80\ud130 \uc2ec\ud654\uae4c\uc9c0 \ub2e8\uacc4\ubcc4 \ubaa8\ub4c8, \uc9c8\uc801 \uad50\uc721\uc758 \uc6b0\uc218\ud55c \ub9e4\uccb4.' },
      { title: '\ud45c\uc900\ud654\ub41c \ud3c9\uac00 \uccb4\uacc4\uac00 \ud544\uc694\ud560 \ub54c', desc: '\uc2dc\uc2a4\ud15c\uc774 \uc790\ub3d9\uc73c\ub85c \ubc38\ub7f0\uc2a4 \uc810\uc218\uc640 \uc790\uc138 \ud3c9\uac00\ub97c \uc0dd\uc131. \ub370\uc774\ud130 \uae30\ubc18 \ud3c9\uac00\ub85c \ud559\uc810 \uc778\uc815 \uc9c0\uc6d0.' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\ud559\uc0dd\uc774 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucd5c\uc18c \uc5f0\ub839\uc740?', a: 'MS.30\uc740 \uad50\uc0ac \uac10\ub3c5 \ud558\uc5d05\uc138 \uc774\uc0c1 \ud559\uc0dd\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. \uc18d\ub3c4\uc640 \uc6b4\ub3d9 \ubc94\uc704 \uc870\uc808 \uac00\ub2a5. 8\uc138 \ubbf8\ub9cc\uc740 \uac00\uc7a5 \ub290\ub9b0 \uc6cc\ud06c \ubaa8\ub4dc\ubd80\ud130 \uc2dc\uc791 \uad8c\uc7a5.' },
      { q: '\ud559\uad50\uc5d0 \uc804\ubb38 \uc2b9\ub9c8 \ucf54\uce58\uac00 \ud544\uc694\ud55c\uac00\uc694?', a: '\uc804\ubb38 \ucf54\uce58\ub294 \uad50\uacfc\uacfc\uc815 \uc124\uacc4\uc5d0 \ub3c4\uc6c0\uc774 \ub418\uc9c0\ub9cc, \ud604\uc7a5 \uad50\uc721 \ud6c8 \uccb4\uc721 \uad50\uc0ac\ub3c4 \ub3c5\ub9bd \uc6b4\uc6a9 \uac00\ub2a5. \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \ud559\uc0dd\uc744 \ucf54\uc2a4 \ud750\ub984\uc5d0 \ub530\ub77c \uc548\ub0b4.' },
    ],
    ctaTitle: '\ud559\uad50\ub97c \uc704\ud55c \ub9de\ucda4\ud615 \uad50\uc721 \uacc4\ud68d \ubc1b\uae30',
    ctaSub: '\ud559\uad50\uba85, \ud559\uc0dd \uaddc\ubaa8, \uad50\uacfc\uacfc\uc815 \uc694\uad6c\uc0ac\ud56d\uc744 \uc54c\ub824\uc8fc\uc138\uc694. \uc644\uc804\ud55c \uac1c\uac15 \uacc4\ud68d\uc744 \uc81c\ub9bd\ud569\ub2c8\ub2e4.',
    ctaBtn1: '\uad50\uc721 \uc81c\uc548\uc11c \ubc1b\uae30',
    ctaBtn2: '\ud611\ub825 \uc0ac\ub840 \ubcf4\uae30',
    viewDetail: '\uc0c1\uc138 \ubcf4\uae30 \u2192',
    viewCase: '\uc804\uccb4 \uc0ac\ub840 \ubcf4\uae30 \u2192',
  },
  es: {
    label: 'Soluciones',
    h1: ['Escuelas e', 'Instituciones Educativas'],
    heroSub: 'Integra la equitaci\u00f3n en el plan de estudios de Educaci\u00f3n F\u00edsica — sin pista, sin caballos, listo desde el primer d\u00eda, seguro y evaluable.',
    heroAlt: 'Simulador ecuestre para escuelas e instituciones educativas',
    recTitle: 'Configuraci\u00f3n Recomendada',
    products: [
      { tag: 'Ideal para Escuelas', name: 'Pony-MS.30', desc: 'Apto para alumnos de 6+ a\u00f1os, amplio rango de tama\u00f1o, operaci\u00f3n segura y sencilla, gesti\u00f3n curricular, modo est\u00e1ndar de 45 minutos por clase.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'Avanzado Universitario', name: 'Horse-MS.30P', desc: 'Ideal para ciencias del deporte y educaci\u00f3n f\u00edsica universitaria, datos biom\u00e9canicos cuantificables para investigaci\u00f3n y entrenamiento competitivo.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Ventajas Clave para la Educaci\u00f3n',
    advantages: [
      { title: 'Seguro por Dise\u00f1o \u2014 Riesgo Cero', desc: 'Sistema de parada de emergencia y arnes. Sin riesgo de ca\u00eddas. Cumple totalmente las normativas de seguridad escolar.' },
      { title: 'Paquete Did\u00e1ctico Listo para Usar', desc: 'Planes de clase, criterios de evaluaci\u00f3n y niveles progresivos completos. Los profesores de EF pueden impartir clases sin conocimientos ecuestres.' },
      { title: 'Validado por M\u00faltiples Universidades', desc: 'El Colegio de Turismo de Sichuan, la Escuela Afiliada de la U. Sun Yat-sen y la U. Agr\u00edcola de Xinjiang ya lo han integrado en sus planes.' },
    ],
    caseAlt: 'Colegio de Turismo de Sichuan entrenamiento ecuestre',
    caseBadge: 'Colaboraci\u00f3n Universitaria',
    caseTitle: 'Colegio de Turismo de Sichuan \u2014 Construyendo un Plan de Estudios Ecuestre',
    caseDesc: 'El simulador se introdujo en el plan de estudios de equitaci\u00f3n, atendiendo a m\u00e1s de 200 estudiantes por semestre y resolviendo la escasez de caballos reales e instalaciones.',
    fitsLabel: 'ESTA SOLUCI\u00d3N ES PARA TI SI\u2026',
    fitsTitle: 'Esta Soluci\u00f3n Es Ideal Si\u2026',
    fits: [
      { title: 'Quieres Incluir Equitaci\u00f3n en el Plan Oficial', desc: 'Redes de m\u00faltiples unidades para ense\u00f1anza sincronizada en clase. Plan de estudios estandarizado para K-12 y departamentos universitarios de EF.' },
      { title: 'Atiendes a J\u00f3venes de 5 a 18 A\u00f1os', desc: 'Dise\u00f1o seguro para ni\u00f1os. M\u00f3dulos progresivos de b\u00e1sico a avanzado. Excelente veh\u00edculo para la educaci\u00f3n integral.' },
      { title: 'Necesitas un Sistema de Evaluaci\u00f3n Estandarizado', desc: 'El sistema genera autom\u00e1ticamente puntuaciones de equilibrio y postura. Evaluaci\u00f3n objetiva y basada en datos con informes para reconocimiento de cr\u00e9ditos.' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfCu\u00e1l es la edad m\u00ednima para usar el simulador?', a: 'El MS.30 es apto para mayores de 5 a\u00f1os bajo supervisi\u00f3n docente. Los menores de 8 a\u00f1os deben comenzar en el modo de paso m\u00e1s lento y avanzar gradualmente.' },
      { q: '\u00bfNecesita el colegio un instructor de equitaci\u00f3n profesional?', a: 'Un instructor profesional ayuda en el dise\u00f1o curricular, pero los profesores de EF pueden operar el sistema de forma independiente tras nuestra formaci\u00f3n presencial.' },
    ],
    ctaTitle: 'Obtener un Plan de Ense\u00f1anza Personalizado',
    ctaSub: 'Comparte el nombre del centro, el n\u00famero de alumnos y las necesidades curriculares. Dise\u00f1aremos un programa completo para ti.',
    ctaBtn1: 'Obtener Propuesta Educativa',
    ctaBtn2: 'Ver Casos de Colaboraci\u00f3n',
    viewDetail: 'Ver Detalles \u2192',
    viewCase: 'Ver Caso Completo \u2192',
  },
  de: {
    label: 'L\u00f6sungen',
    h1: ['Schulen &', 'Bildungseinrichtungen'],
    heroSub: 'Reitsport in den Sportunterricht integrieren \u2014 ohne Reitplatz, ohne Pferde, sofort einsatzbereit, sicherheitskonform und bewertbar.',
    heroAlt: 'Reitsimulator f\u00fcr Schulen und Bildungseinrichtungen',
    recTitle: 'Empfohlene Konfiguration',
    products: [
      { tag: 'Ideal f\u00fcr Schulen', name: 'Pony-MS.30', desc: 'Geeignet f\u00fcr Sch\u00fcler ab 6 Jahren, breiter K\u00f6rpergr\u00f6\u00dfenbereich, sicher und einfach zu bedienen, Curriculumverwaltung, 45-Min.-Standardmodus.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: 'Universit\u00e4t Fortgeschritten', name: 'Horse-MS.30P', desc: 'Ideal f\u00fcr Sportwissenschaft und Sportlehramt, liefert quantifizierbare biomechanische Daten f\u00fcr Abschlussarbeiten und Wettkampftraining.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: 'Wichtigste Vorteile f\u00fcr die Bildung',
    advantages: [
      { title: 'Inherent sicher \u2014 Kein Sturzrisiko', desc: 'Notaus und Gurtsystem. Kein Sturzrisiko f\u00fcr Sch\u00fcler. Erf\u00fcllt vollst\u00e4ndig alle Schulsicherheitsstandards.' },
      { title: 'Curriculum-fertiges Lehrpaket', desc: 'Vollst\u00e4ndige Unterrichtspl\u00e4ne, Bewertungskriterien und progressive Niveaus. Sportlehrer k\u00f6nnen ohne Reithintergrund unterrichten.' },
      { title: 'Von mehreren Universit\u00e4ten validiert', desc: 'Sichuan Tourism College, Zhongshan-Universit\u00e4t Shenzhen und Xinjiang Agricultural University haben Simulatoren in ihre Lehrpl\u00e4ne integriert.' },
    ],
    caseAlt: 'Sichuan Tourism College Reitsimulator-Training',
    caseBadge: 'Hochschulpartnerschaft',
    caseTitle: 'Sichuan Tourism College \u2014 Aufbau eines Reit-Curriculums',
    caseDesc: 'Simulator in das Reit-Studiengang-Curriculum eingef\u00fchrt, 200+ Studierende pro Semester, L\u00f6sung des Pferde- und Platzmangels, Kursbewertungen deutlich verbessert.',
    fitsLabel: 'DIESE L\u00d6SUNG IST F\u00dcR SIE, WENN\u2026',
    fitsTitle: 'Diese L\u00f6sung Passt Zu Ihnen, Wenn\u2026',
    fits: [
      { title: 'Sie Reitsport offiziell in den Lehrplan aufnehmen m\u00f6chten', desc: 'Mehrger\u00e4te-Netzwerk f\u00fcr synchronen Klassenunterricht. Standardisiertes Curriculum f\u00fcr K-12 und Hochschul-Sportabteilungen.' },
      { title: 'Sie Jugendliche von 5 bis 18 Jahren betreuen', desc: 'Kindgerechtes Sicherheitsdesign. Progressive Module von Grundlagen bis Fortgeschrittene. Exzellenter Tr\u00e4ger f\u00fcr qualitative Bildung.' },
      { title: 'Sie ein standardisiertes Bewertungssystem ben\u00f6tigen', desc: 'Das System generiert automatisch Balance- und Haltungsbewertungen. Datenbasierte Benotung mit Berichten zur Kreditanerkennung.' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'Welches Mindestalter gilt f\u00fcr die Nutzung des Simulators?', a: 'Das MS.30 ist f\u00fcr Sch\u00fcler ab 5 Jahren unter Aufsicht geeignet. Kinder unter 8 Jahren sollten mit dem langsamsten Schritt-Modus beginnen und schrittweise steigern.' },
      { q: 'Braucht die Schule einen professionellen Reitlehrer?', a: 'Ein Profi-Trainer hilft beim Curriculum-Design, aber Sportlehrer k\u00f6nnen das System nach unserer Schulung selbstst\u00e4ndig bedienen. Die Software leitet Sch\u00fcler durch voreingestellte Kursabl\u00e4ufe.' },
    ],
    ctaTitle: 'Individuellen Lehrplan f\u00fcr Ihre Schule Erhalten',
    ctaSub: 'Teilen Sie uns Schulname, Sch\u00fcleranzahl und Lehrplanbed\u00fcrfnisse mit. Wir entwerfen ein vollst\u00e4ndiges Programm f\u00fcr Sie.',
    ctaBtn1: 'Bildungsangebot Erhalten',
    ctaBtn2: 'Partnerf\u00e4lle Anzeigen',
    viewDetail: 'Details Anzeigen \u2192',
    viewCase: 'Vollst\u00e4ndigen Fall Anzeigen \u2192',
  },
  ar: {
    label: '\u062d\u0644\u0648\u0644',
    h1: ['\u0627\u0644\u0645\u062f\u0627\u0631\u0633 \u0648', '\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629'],
    heroSub: '\u0623\u062f\u0645\u062c \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0645\u0646\u0647\u062c \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0627\u0644\u0628\u062f\u0646\u064a\u0629 \u2014 \u062f\u0648\u0646 \u062d\u0644\u0628\u0629 \u0623\u0648 \u062e\u064a\u0648\u0644\u060c \u062c\u0627\u0647\u0632 \u0645\u0646 \u0627\u0644\u064a\u0648\u0645 \u0627\u0644\u0623\u0648\u0644\u060c \u0622\u0645\u0646 \u0648\u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0642\u064a\u064a\u0645.',
    heroAlt: '\u0645\u062d\u0627\u0643\u064a \u0641\u0631\u0648\u0633\u064a\u0629 \u0644\u0644\u0645\u062f\u0627\u0631\u0633 \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629',
    recTitle: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647',
    products: [
      { tag: '\u0627\u0644\u0623\u0641\u0636\u0644 \u0644\u0644\u0645\u062f\u0627\u0631\u0633', name: 'Pony-MS.30', desc: '\u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u0637\u0644\u0627\u0628 \u0645\u0646 \u0633\u0646 6 \u0641\u0623\u0643\u062b\u0631\u060c \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639 \u0644\u0644\u0623\u062d\u062c\u0627\u0645\u060c \u062a\u0634\u063a\u064a\u0644 \u0622\u0645\u0646 \u0648\u0628\u0633\u064a\u0637\u060c \u0625\u062f\u0627\u0631\u0629 \u0645\u0646\u0647\u062c\u064a\u0629\u060c \u0646\u0645\u0637 45 \u062f\u0642\u064a\u0642\u0629.', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
      { tag: '\u0645\u062a\u0642\u062f\u0645 \u062c\u0627\u0645\u0639\u064a', name: 'Horse-MS.30P', desc: '\u0645\u062b\u0627\u0644\u064a \u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0631\u064a\u0627\u0636\u0629 \u0648\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0627\u0644\u0628\u062f\u0646\u064a\u0629\u060c \u064a\u0648\u0641\u0631 \u0628\u064a\u0627\u0646\u0627\u062a \u062d\u064a\u0648\u064a\u0629 \u062d\u0631\u0643\u064a\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064a\u0627\u0633 \u0644\u0623\u0628\u062d\u0627\u062b \u0627\u0644\u062a\u062e\u0631\u062c \u0648\u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u062a\u0646\u0627\u0641\u0633\u064a.', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
    ],
    advTitle: '\u0645\u0632\u0627\u064a\u0627 \u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0644\u062a\u0639\u0644\u064a\u0645',
    advantages: [
      { title: '\u0622\u0645\u0646 \u0628\u0637\u0628\u064a\u0639\u062a\u0647 \u2014 \u0635\u0641\u0631 \u0645\u062e\u0627\u0637\u0631', desc: '\u0646\u0638\u0627\u0645 \u0625\u064a\u0642\u0627\u0641 \u0637\u0627\u0631\u0626 \u0648\u062d\u0632\u0627\u0645 \u0623\u0645\u0627\u0646. \u0644\u0627 \u062e\u0637\u0631 \u0633\u0642\u0648\u0637 \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0627\u0628. \u062a\u0644\u062a\u0632\u0645 \u0628\u0645\u0639\u0627\u064a\u064a\u0631 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u062f\u0627\u0631\u0633 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.' },
      { title: '\u062d\u0632\u0645\u0629 \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u062c\u0627\u0647\u0632\u0629', desc: '\u062e\u0637\u0637 \u062f\u0631\u0648\u0633 \u0643\u0627\u0645\u0644\u0629\u060c \u0645\u0639\u0627\u064a\u064a\u0631 \u062a\u0642\u064a\u064a\u0645\u060c \u0648\u0645\u0633\u062a\u0648\u064a\u0627\u062a \u062a\u062f\u0631\u064a\u062c\u064a\u0629. \u0645\u062f\u0631\u0633\u0648 \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0627\u0644\u0628\u062f\u0646\u064a\u0629 \u064a\u0645\u0643\u0646\u0647\u0645 \u0627\u0644\u062a\u062f\u0631\u064a\u0633 \u062f\u0648\u0646 \u062e\u0628\u0631\u0629 \u0641\u0631\u0648\u0633\u064a\u0629.' },
      { title: '\u0645\u0639\u062a\u0645\u062f \u0645\u0646 \u062c\u0627\u0645\u0639\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629', desc: '\u062c\u0627\u0645\u0639\u0629 \u0633\u064a\u0634\u0648\u0627\u0646 \u0644\u0644\u0633\u064a\u0627\u062d\u0629\u060c \u0648\u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0627\u0644\u0645\u0644\u062d\u0642\u0629 \u0628\u062c\u0627\u0645\u0639\u0629 \u0633\u0648\u0646 \u064a\u0627\u062a \u0633\u064a\u0646 \u0648\u062c\u0627\u0645\u0639\u0629 \u0634\u064a\u0646\u062c\u064a\u0627\u0646\u063a \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629 \u0623\u062f\u0645\u062c\u062a \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0641\u064a \u0645\u0646\u0627\u0647\u062c\u0647\u0627.' },
    ],
    caseAlt: '\u062a\u062f\u0631\u064a\u0628 \u0645\u062d\u0627\u0643\u064a \u062c\u0627\u0645\u0639\u0629 \u0633\u064a\u0634\u0648\u0627\u0646 \u0644\u0644\u0633\u064a\u0627\u062d\u0629',
    caseBadge: '\u0634\u0631\u0627\u0643\u0629 \u062c\u0627\u0645\u0639\u064a\u0629',
    caseTitle: '\u062c\u0627\u0645\u0639\u0629 \u0633\u064a\u0634\u0648\u0627\u0646 \u0644\u0644\u0633\u064a\u0627\u062d\u0629 \u2014 \u0628\u0646\u0627\u0621 \u0645\u0646\u0647\u062c \u062f\u0631\u0627\u0633\u064a \u0644\u0644\u0641\u0631\u0648\u0633\u064a\u0629',
    caseDesc: '\u062a\u0645 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0641\u064a \u0645\u0646\u0647\u062c \u062a\u062e\u0635\u0635 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629\u060c \u064a\u062e\u062f\u0645 200+ \u0637\u0627\u0644\u0628 \u0641\u064a \u0627\u0644\u0641\u0635\u0644\u060c \u062d\u0644 \u0645\u0634\u0643\u0644\u0629 \u0646\u062f\u0631\u0629 \u0627\u0644\u062e\u064a\u0648\u0644 \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642\u060c \u0648\u062a\u062d\u0633\u064a\u0646 \u0643\u0628\u064a\u0631 \u0641\u064a \u0627\u0644\u062f\u0631\u062c\u0627\u062a.',
    fitsLabel: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0645\u0646\u0627\u0633\u0628 \u0644\u0643 \u0625\u0630\u0627\u2026',
    fitsTitle: '\u0647\u0630\u0627 \u0627\u0644\u062d\u0644 \u0627\u0644\u0623\u0646\u0633\u0628 \u0625\u0630\u0627\u2026',
    fits: [
      { title: '\u062a\u0631\u064a\u062f \u0625\u062f\u0631\u0627\u062c \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0647\u062c \u0627\u0644\u0631\u0633\u0645\u064a', desc: '\u0634\u0628\u0643\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0644\u062a\u0639\u0644\u064a\u0645 \u0645\u062a\u0632\u0627\u0645\u0646. \u0645\u0646\u0647\u062c \u0645\u0639\u064a\u0627\u0631\u064a \u0644\u0645\u062f\u0627\u0631\u0633 K-12 \u0648\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0627\u0644\u0628\u062f\u0646\u064a\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u064a\u0629.' },
      { title: '\u062a\u062e\u062f\u0645 \u0634\u0628\u0627\u0628\u064b\u0627 \u0645\u0646 5 \u0625\u0644\u0649 18 \u0639\u0627\u0645\u064b\u0627', desc: '\u062a\u0635\u0645\u064a\u0645 \u0622\u0645\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644. \u0648\u062d\u062f\u0627\u062a \u062a\u062f\u0631\u064a\u062c\u064a\u0629 \u0645\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629. \u0648\u0633\u064a\u0644\u0629 \u0645\u0645\u062a\u0627\u0632\u0629 \u0644\u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0646\u0648\u0639\u064a.' },
      { title: '\u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u062a\u0642\u064a\u064a\u0645 \u0645\u0639\u064a\u0627\u0631\u064a', desc: '\u064a\u0648\u0644\u062f \u0627\u0644\u0646\u0638\u0627\u0645 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u062f\u0631\u062c\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0648\u0627\u0644\u0648\u0636\u0639\u064a\u0629. \u062a\u0642\u064a\u064a\u0645 \u0645\u0648\u0636\u0648\u0639\u064a \u0628\u062a\u0642\u0627\u0631\u064a\u0631 \u062a\u062f\u0639\u0645 \u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629.' },
    ],
    faqTitle: '\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0645\u0627 \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0639\u0645\u0631 \u0627\u0644\u0637\u0627\u0644\u0628 \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0645\u062d\u0627\u0643\u064a\u061f', a: 'MS.30 \u0645\u0646\u0627\u0633\u0628 \u0644\u0645\u0646 \u0647\u0645 \u0641\u0648\u0642 5 \u0633\u0646\u0648\u0627\u062a \u062a\u062d\u062a \u0625\u0634\u0631\u0627\u0641 \u0627\u0644\u0645\u0639\u0644\u0645. \u064a\u064f\u0646\u0635\u062d \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u062f\u0648\u0646 8 \u0633\u0646\u0648\u0627\u062a \u0628\u0627\u0644\u0628\u062f\u0621 \u0628\u0623\u0628\u0637\u0623 \u0646\u0645\u0637 \u0645\u0634\u064a\u060c \u062b\u0645 \u0627\u0644\u062a\u0642\u062f\u0645 \u062a\u062f\u0631\u064a\u062c\u064a\u064b\u0627.' },
      { q: '\u0647\u0644 \u062a\u062d\u062a\u0627\u062c \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0625\u0644\u0649 \u0645\u062f\u0631\u0628 \u0641\u0631\u0648\u0633\u064a\u0629 \u0645\u062a\u062e\u0635\u0635\u061f', a: '\u0627\u0644\u0645\u062f\u0631\u0628 \u0627\u0644\u0645\u062a\u062e\u0635\u0635 \u064a\u0641\u064a\u062f \u0641\u064a \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0646\u0647\u062c\u060c \u0644\u0643\u0646 \u0645\u062f\u0631\u0633\u064a \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0627\u0644\u0628\u062f\u0646\u064a\u0629 \u064a\u0645\u0643\u0646\u0647\u0645 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0645\u0633\u062a\u0642\u0644\u0627\u064b \u0628\u0639\u062f \u062a\u062f\u0631\u064a\u0628\u0646\u0627. \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u064a\u0631\u0634\u062f \u0627\u0644\u0637\u0644\u0627\u0628 \u0639\u0628\u0631 \u0645\u0633\u0627\u0631 \u0627\u0644\u062f\u0631\u0633.' },
    ],
    ctaTitle: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0645\u062f\u0631\u0633\u062a\u0643',
    ctaSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0648\u0639\u062f\u062f \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u0646\u0647\u062c. \u0633\u0646\u0636\u0639 \u0644\u0643 \u0628\u0631\u0646\u0627\u0645\u062c\u064b\u0627 \u0643\u0627\u0645\u0644\u0627\u064b.',
    ctaBtn1: '\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0639\u0631\u0636 \u062a\u0639\u0644\u064a\u0645\u064a',
    ctaBtn2: '\u0639\u0631\u0636 \u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0634\u0631\u0627\u0643\u0629',
    viewDetail: '\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2192',
    viewCase: '\u0639\u0631\u0636 \u0627\u0644\u062d\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629 \u2192',
  },
};

const STATIC = {
  heroImg: '/images/case-university.jpg',
  caseImg: '/images/case-university.jpg',
  caseImgPosition: 'center center',
  caseLink: '/cases#university',
  ctaBtn2Href: '/cases',
  jsonld: { name: 'School & Educational Institution Equestrian Solution', url: 'https://www.equestrian-simulators.com/solutions/education' },
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
