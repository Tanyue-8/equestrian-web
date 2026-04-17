'use client';
// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';


import React from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const colors = {
  primary: '#C9A84C',
  black: '#0A1E3F',
  gray: '#5A6478',
  grayBg: '#F5F0E8',
  white: '#FFFFFF',
  border: '#E0D8C8',
};

type LocaleKey = 'zh' | 'en' | 'ja' | 'ko' | 'es' | 'de' | 'ar';

const i18n: Record<LocaleKey, {
  h1: string;
  heroSub: string;
  missionTagline: string;
  missionTitle: string;
  missionP1: string;
  missionP2: string;
  timelineLabel: string;
  timelineTitle: string;
  timeline: { year: string; title: string; desc: string }[];
  valuesLabel: string;
  valuesTitle: string;
  values: { icon: string; title: string; content: string }[];
  certTitle: string;
  certSub: string;
  certs: { icon: string; title: string; subtitle: string; button: string }[];
  stats: { number: string; label: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSub: string;
  ctaBtn1: string;
  ctaBtn2: string;
}> = {
  zh: {
    h1: '\u5173\u4e8e\u6a21\u62df\u9a6c\u00ae',
    heroSub: '\u81ea2017\u5e74\u8d77\uff0c\u5f15\u9886\u9a6c\u672f\u6a21\u62df\u6280\u672f\u521b\u65b0',
    missionTagline: '\u7528\u79d1\u6280\u63a8\u52a8\u9a6c\u672f\u8fdb\u6b65\uff0c\u8ba9\u4eba\u4e0e\u9a6c\u8fde\u63a5\u66f4\u81ea\u7531',
    missionTitle: '\u6211\u4eec\u7684\u4f7f\u547d',
    missionP1: '\u5e7f\u4e1c\u63a2\u6708\u6559\u80b2\u8bbe\u5907\u6709\u9650\u516c\u53f8\u662f\u6a21\u62df\u9a6c\u00ae\u54c1\u724c\u7684\u8bbe\u8ba1\u3001\u5f00\u53d1\u4e0e\u5236\u9020\u5546\uff0c\u81f4\u529b\u4e8e\u901a\u8fc7\u5148\u8fdb\u7684AI\u4e0e\u6a21\u62df\u6280\u672f\uff0c\u9769\u65b0\u4f20\u7edf\u9a6c\u672f\u8bad\u7ec3\u65b9\u5f0f\uff0c\u4f7f\u4e4b\u66f4\u5b89\u5168\u3001\u9ad8\u6548\u548c\u666e\u53ca\u3002',
    missionP2: '\u6a21\u62df\u9a6c\u00ae\u4e0d\u662f\u4e3a\u4e86\u53d6\u4ee3\u9a6c\uff0c\u800c\u662f\u4e3a\u4e86\u8ba9\u6bcf\u4e00\u4f4d\u9a91\u624b\u5728\u8de8\u4e0a\u771f\u6b63\u9a6c\u80cc\u4e4b\u524d\uff0c\u5148\u5728\u5b89\u5168\u7684\u73af\u5883\u4e2d\u6253\u78e8\u81ea\u5df1\u7684\u8eab\u4f53\u8bed\u8a00\u4e0e\u808c\u8089\u8bb0\u5fc6\u3002\u628a\u6df7\u4e71\u7559\u7ed9\u6a21\u62df\u9a6c\uff0c\u628a\u548c\u8c10\u7559\u7ed9\u771f\u9a6c\u3002',
    timelineLabel: '\u4ece\u63a2\u7d22\u542f\u7a0b\u5230\u5168\u7403\u8ba4\u53ef',
    timelineTitle: '\u53d1\u5c55\u5386\u7a0b',
    timeline: [
      { year: '2017', title: '\u63a2\u7d22\u542f\u7a0b', desc: '\u521b\u59cb\u4eba\u5218\u5fd7\u5728\u81ea\u5df1\u7684\u84dd\u94c2\u9a6c\u672f\u4ff1\u4e50\u90e8\uff0c\u4e3a\u8ba9\u5b69\u5b50\u4eec\u8f7b\u677e\u9002\u5e94\u9a91\u9a6c\uff0c\u5728\u597d\u53cb\u548c\u5bb6\u4eba\u652f\u6301\u4e0b\uff0c\u5f00\u542f\u9a6c\u672f\u6a21\u62df\u5668\u63a2\u7d22\u4e4b\u8def\u3002' },
      { year: '2019', title: '\u9996\u6b3e\u4ea7\u54c1\u9762\u4e16', desc: '7\u670825\u65e5\uff0c\u9996\u6b3e\u6a21\u62df\u9a6cMS10\u6b63\u5f0f\u9762\u4e16\uff0c\u91c7\u96c6\u771f\u9a6c\u6570\u636e1300\u7ec4\uff0c\u5177\u5907\u57fa\u7840\u9a6c\u672f\u8fd0\u52a8\u6b65\u4f10\uff0c\u5e76\u4e0e\u6210\u90fd\u8fbe\u6839\u65af\u9a6c\u672f\u4ff1\u4e50\u90e8\u5408\u4f5c\u6df1\u5ea6\u878d\u5165\u6cd5\u56fdGALOP\u6559\u5b66\u4f53\u7cfb\u3002' },
      { year: '2020', title: '\u83b7CE\u8ba4\u8bc1', desc: '\u901a\u8fc7\u6b27\u76dfCE\u5b89\u5168\u8ba4\u8bc1\uff08RED/EMC/LVD\uff09\uff0c\u83b7\u5f97\u9996\u9879\u4e13\u5229\u6388\u6743\uff0c\u6a21\u62df\u9a6c\u00ae\u6ce8\u518c\u5546\u6807\u3002\u5168\u56fd\u7b2c\u4e00\u4e2a\u5168\u9762\u5e7c\u513f\u9a6c\u672f\u8fdb\u6821\u56ed\u9879\u76ee\u6b63\u5f0f\u5f00\u542f\u3002' },
      { year: '2021', title: '\u516c\u53f8\u6210\u7acb', desc: '\u5e7f\u4e1c\u63a2\u6708\u6559\u80b2\u8bbe\u5907\u6709\u9650\u516c\u53f8\u6b63\u5f0f\u6210\u7acb\uff0c\u6210\u4e3a\u6a21\u62df\u9a6c\u00ae\u54c1\u724c\u72ec\u7acb\u7684\u5f00\u53d1\u3001\u8bbe\u8ba1\u3001\u5236\u9020\u516c\u53f8\uff0c\u53c2\u52a0\u6210\u90fd\u56fd\u9645\u4f53\u535a\u4f1a\u3002' },
      { year: '2022', title: '\u4ea7\u54c1\u5347\u7ea7', desc: '\u65b0\u589e\u591a\u9879\u4e13\u5229\uff0c\u201c\u58a8\u4e911\u53f7\u201d\u8fd0\u52a8\u578b\u6a21\u62df\u9a6c\u9762\u4e16\u3002\u9a6c\u672f\u6a21\u62df\u5b9e\u8bad\u5ba4\u5728\u56db\u5ddd\u65c5\u6e38\u5b66\u9662\u5f00\u653e\u6d4b\u8bd5\u3002' },
      { year: '2023', title: '\u5168\u56fd\u7a81\u7834', desc: '\u56db\u5ddd\u9996\u4e2a\u9a6c\u672f\u6a21\u62df\u4eff\u771f\u5b9e\u9a8c\u5ba4\u6295\u5165\u4f7f\u7528\uff0c\u83b7\u4e2d\u56fd\u65b0\u95fb\u7f51\u3001\u4e2d\u56fd\u65e5\u62a5\u62a5\u9053\u3002\u4e2d\u56fd\u6b66\u8b66\u9a91\u5175\u90e8\u961f\u6b63\u5f0f\u5f15\u8fdb\u6a21\u62df\u9a6c\uff0c\u592e\u89696\u53f0\u519b\u4e8b\u9891\u9053\u7cfb\u5217\u62a5\u9053\u3002' },
      { year: '2024', title: '\u56fd\u9645\u8ba4\u53ef', desc: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a\uff08HKJC\uff09\u6b63\u5f0f\u5f15\u8fdb\u6a21\u62df\u9a6c\u7cfb\u7edf\uff1b\u9999\u6e2f\u4f24\u5065\u7b56\u9a91\u534f\u4f1a\uff08RDA\uff09\u5f15\u8fdb\u6a21\u62df\u9a6c\u7528\u4e8e\u9a6c\u672f\u6cbb\u7597\uff0c\u6a21\u62df\u9a6c\u6b63\u5f0f\u8d70\u8fdb\u56fd\u9645\u9876\u7ea7\u673a\u6784\u3002' },
      { year: '2025', title: '\u6301\u7eed\u6269\u5f20', desc: '\u5e7f\u897f\u5fb7\u4fdd\u804c\u4e1a\u6280\u672f\u5b66\u9662\u5f15\u8fdb\uff0c\u4e0e\u9999\u6e2f\u8d5b\u9a6c\u4f1a\u8054\u5408\u53c2\u52a0\u5e7f\u5dde\u56fd\u9645\u4f53\u535a\u4f1a\u3002\u7cfb\u7edf\u5347\u7ea7\u4e3a\u201c\u4f53\u9a8c\u2192\u6559\u7a0b\u2192\u8bad\u7ec3\u2192\u6bd4\u8d5b\u4e0e\u8003\u7ea7\u201d\u56db\u5927\u7248\u5757\u3002' },
    ],
    valuesLabel: '\u6838\u5fc3\u7406\u5ff5',
    valuesTitle: '\u5b89\u5168 \u00b7 \u9ad8\u6548 \u00b7 \u4eba\u9a6c\u5173\u7cfb',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: '\u5b89\u5168\u2014\u2014\u91cd\u5851\u4fe1\u4efb\u7684\u8fb9\u754c', content: '\u6050\u60e7\u662f\u5b66\u4e60\u9a6c\u672f\u6700\u5927\u7684\u654c\u4eba\u3002\u6a21\u62df\u9a6c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5141\u8bb8\u72af\u9519\u7684\u8bad\u7ec3\u201c\u907f\u98ce\u6e2f\u201d\u2014\u2014\u5931\u8bef\u4e0d\u4f1a\u5bfc\u81f4\u4f24\u5bb3\u3002\u8fd9\u79cd\u5fc3\u7406\u4e0a\u7684\u677e\u5f1b\u611f\uff0c\u662f\u8eab\u4f53\u5b66\u4f1a\u653e\u677e\u7684\u5fc5\u8981\u6761\u4ef6\uff0c\u4e5f\u662f\u5efa\u7acb\u6b63\u786e\u808c\u8089\u8bb0\u5fc6\u7684\u8d77\u70b9\u3002' },
      { icon: '\u26a1', title: '\u9ad8\u6548\u2014\u2014\u6280\u80fd\u7684\u7cbe\u51c6\u5de5\u7a0b', content: '\u4f20\u7edf\u771f\u9a6c\u8bad\u7ec3\u6602\u8d35\u4e14\u4f4e\u6548\u3002\u6a21\u62df\u9a6c\u4e0d\u77e5\u75b2\u5026\uff0c\u53ef\u91cd\u590d\u540c\u4e00\u4e2a\u52a8\u4f5c\u6570\u767e\u6b21\uff0c\u901a\u8fc7\u9ad8\u9891\u6b21\u8bad\u7ec3\u5feb\u901f\u5efa\u7acb\u6b63\u786e\u7684\u795e\u7ecf\u808c\u8089\u901a\u8def\u3002\u4f20\u611f\u5668\u6570\u636e\u5c06\u4e0d\u53ef\u8a00\u4f20\u7684\u201c\u9a91\u611f\u201d\u8f6c\u5316\u4e3a\u53ef\u89c6\u5316\u6570\u636e\uff0c\u8ba9\u8bad\u7ec3\u66f4\u7cbe\u51c6\u3002' },
      { icon: '\ud83d\udc0e', title: '\u4eba\u9a6c\u5173\u7cfb\u2014\u2014\u79d1\u6280\u80cc\u540e\u7684\u4eba\u6587\u5173\u6000', content: '\u6bcf\u4e00\u4f4d\u5728\u6a21\u62df\u9a6c\u4e0a\u7ec3\u597d\u5e73\u8861\u548c\u6276\u52a9\u7684\u9a91\u624b\uff0c\u90fd\u662f\u5728\u4e3a\u771f\u9a6c\u51cf\u8d1f\u3002\u6a21\u62df\u9a6c\u662f\u4eba\u7c7b\u5b66\u4e60\u201c\u9a6c\u8bed\u201d\u7684\u7ffb\u8bd1\u5b98\u2014\u2014\u5f53\u4f60\u4ece\u6a21\u62df\u9a6c\u8de8\u4e0a\u771f\u7684\u9a6c\u80cc\uff0c\u4f60\u4fbf\u662f\u4e00\u4e2a\u8f7b\u76c8\u7684\u821e\u4f34\uff0c\u800c\u975e\u9a6c\u5339\u9700\u8981\u5bb9\u5fcd\u7684\u8d1f\u62c5\u3002' },
    ],
    certTitle: '\u8ba4\u8bc1\u4e0e\u8d44\u8d28',
    certSub: '\u7b26\u5408\u56fd\u9645\u6807\u51c6\uff0c\u5b89\u5168\u6027\u4e0e\u6280\u672f\u9886\u5148\u6027\u5747\u6709\u636e\u53ef\u67e5',
    certs: [
      { icon: '\ud83c\udfc5', title: 'CE\u8ba4\u8bc1', subtitle: '\u6b27\u76df\u5b89\u5168\u8ba4\u8bc1 RED / EMC / LVD', button: '\u67e5\u770b\u8bc1\u4e66' },
      { icon: '\ud83d\udc0e', title: 'HKJC\u8ba4\u53ef', subtitle: '\u9999\u6e2f\u8d5b\u9a6c\u4f1a 2024\u5e74\u5b98\u65b9\u5f15\u8fdb\u8ba4\u53ef', button: '\u7533\u8bf7\u67e5\u770b' },
      { icon: '\u267f', title: 'RDA\u8ba4\u53ef', subtitle: '\u9999\u6e2f\u4f24\u5065\u7b56\u9a91\u534f\u4f1a 2024\u5e74\u5b98\u65b9\u8ba4\u53ef', button: '\u67e5\u770b\u8bc1\u4e66' },
      { icon: '\ud83d\udd2c', title: '\u4e13\u5229\u4e0e\u8457\u4f5c\u6743', subtitle: '\u591a\u9879\u53d1\u660e\u4e13\u5229\u53ca\u8f6f\u4ef6\u8457\u4f5c\u6743 \u56fd\u5bb6\u77e5\u8bc6\u4ea7\u6743\u5c40\u6388\u6743', button: '\u67e5\u770b\u8d44\u8d28' },
    ],
    stats: [
      { number: '10+', label: '\u5408\u4f5c\u673a\u6784' },
      { number: '9+', label: '\u5e74\u63a2\u7d22\u7ecf\u9a8c' },
      { number: 'CE', label: '\u6b27\u76df\u5b89\u5168\u8ba4\u8bc1' },
    ],
    faqTitle: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
    faqs: [
      { q: '\u5e7f\u4e1c\u63a2\u6708\u6559\u80b2\u8bbe\u5907\u6709\u9650\u516c\u53f8\u6210\u7acb\u4e8e\u4ec0\u4e48\u65f6\u5019\uff1f', a: '\u516c\u53f8\u6210\u7acb\u4e8e2017\u5e74\uff0c\u4e13\u6ce8\u4e8e\u9a6c\u672f\u6a21\u62df\u8bbe\u5907\u7684\u7814\u53d1\u3001\u8bbe\u8ba1\u4e0e\u5236\u9020\uff0c\u662f\u6a21\u62df\u9a6c\u00ae\u54c1\u724c\u7684\u521b\u59cb\u4f01\u4e1a\u3002' },
      { q: '\u4ea7\u54c1\u6709\u54ea\u4e9b\u8ba4\u8bc1\u8d44\u8d28\uff1f', a: 'MS.30P\u548cMS.30\u5747\u83b7\u5f97CE\u8ba4\u8bc1\uff08RED/EMC/LVD\uff09\uff0c\u7b26\u5408\u6b27\u76df\u5b89\u5168\u6807\u51c6\u3002\u6240\u6709\u4ea7\u54c1\u51fa\u5382\u524d\u7ecf\u8fc7\u4e25\u683c\u8d28\u68c0\uff0c\u5e76\u6301\u6709\u591a\u9879\u81ea\u4e3b\u7814\u53d1\u8d44\u8d28\u3002' },
      { q: '\u662f\u5426\u63d0\u4f9b\u5b9a\u5236\u5316\u670d\u52a1\uff1f', a: '\u662f\u7684\uff0c\u53ef\u6839\u636e\u673a\u6784\u7c7b\u578b\u3001\u573a\u5730\u6761\u4ef6\u548c\u8bad\u7ec3\u9700\u6c42\u63d0\u4f9b\u5b9a\u5236\u5316\u914d\u7f6e\u65b9\u6848\uff0c\u5305\u62ec\u4f20\u611f\u5668\u5957\u4ef6\u9009\u62e9\u3001\u8f6f\u4ef6\u6a21\u5757\u5b9a\u5236\u53ca\u552e\u540e\u670d\u52a1\u65b9\u6848\u3002' },
    ],
    ctaTitle: '\u51c6\u5907\u5f00\u59cb\u5408\u4f5c\uff1f',
    ctaSub: '\u8054\u7cfb\u6211\u4eec\u7684\u56e2\u961f\uff0c\u83b7\u53d6\u4e13\u5c5e\u89e3\u51b3\u65b9\u6848\u548c\u62a5\u4ef7',
    ctaBtn1: '\u8054\u7cfb\u6211\u4eec',
    ctaBtn2: '\u67e5\u770b\u4ea7\u54c1\u5bf9\u6bd4',
  },
  en: {
    h1: 'About Equestrian Simulators\u00ae',
    heroSub: 'Leading equestrian simulation technology since 2017',
    missionTagline: 'Advancing equestrian sport through technology \u2014 freeing the connection between horse and rider',
    missionTitle: 'Our Mission',
    missionP1: 'Guangdong TanYue Education Equipment Co., Ltd. is the designer, developer and manufacturer of the Equestrian Simulators\u00ae brand, dedicated to transforming traditional equestrian training through advanced AI and simulation technology \u2014 making it safer, more effective and more accessible.',
    missionP2: 'The simulator is not designed to replace the horse \u2014 it is designed to ensure that every rider, before ever mounting a real horse, has already refined their body language and muscle memory in a safe environment. Leave the chaos to the simulator; leave the harmony for the real horse.',
    timelineLabel: 'From humble beginnings to global recognition',
    timelineTitle: 'Our Journey',
    timeline: [
      { year: '2017', title: 'The Beginning', desc: 'Founder Liu Zhi, seeking to help children adapt to horse riding at his own equestrian club, embarked on the journey to develop an equestrian simulator with the support of friends and family.' },
      { year: '2019', title: 'First Product Launch', desc: 'On 25 July, the first simulator MS10 was launched, incorporating 1,300 data sets from real horses, with fundamental equestrian gaits integrated into the French GALOP teaching system in partnership with Chengdu Dagens Equestrian Club.' },
      { year: '2020', title: 'CE Certification', desc: 'Achieved EU CE safety certification (RED/EMC/LVD), received first patent approval, and registered the Equestrian Simulators\u00ae trademark. China\'s first comprehensive equestrian-in-school programme for young children officially launched.' },
      { year: '2021', title: 'Company Established', desc: 'Guangdong TanYue Education Equipment Co., Ltd. formally established as the independent development, design and manufacturing entity for the Equestrian Simulators\u00ae brand. Participated in Chengdu International Sports Expo.' },
      { year: '2022', title: 'Product Upgrade', desc: 'Multiple new patents added. The "Moyun No.1" sport-grade simulator launched. The equestrian simulation training room at Sichuan Tourism University opened for testing.' },
      { year: '2023', title: 'National Breakthrough', desc: 'Sichuan\'s first equestrian simulation laboratory put into operation, reported by China News Service and China Daily. The Chinese Armed Police Cavalry officially adopted the simulator, featured in a series of reports on CCTV Channel 7 Military.' },
      { year: '2024', title: 'International Recognition', desc: 'Hong Kong Jockey Club (HKJC) officially adopted the simulator system; Riding for the Disabled Association Hong Kong (RDA) adopted the simulator for equine-assisted therapy \u2014 marking the simulator\'s entry into the world\'s top institutions.' },
      { year: '2025', title: 'Continued Expansion', desc: 'Adopted by Debao Vocational and Technical College in Guangxi. Joint participation with HKJC at the Guangzhou International Sports Expo. System upgraded to four modules: Experience \u2192 Tutorial \u2192 Training \u2192 Competition & Grading.' },
    ],
    valuesLabel: 'Core Philosophy',
    valuesTitle: 'Safety \u00b7 Efficiency \u00b7 Horse-Rider Bond',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: 'Safety \u2014 Redefining the Boundaries of Trust', content: 'Fear is the greatest obstacle to learning equestrian sport. The simulator provides a training "sanctuary" where mistakes are permitted \u2014 errors carry no physical consequence. This psychological ease is the prerequisite for the body to learn relaxation, and the starting point for building correct muscle memory.' },
      { icon: '\u26a1', title: 'Efficiency \u2014 The Precision Engineering of Skill', content: 'Traditional live horse training is costly and inefficient. The simulator is tireless, capable of repeating the same movement hundreds of times, rapidly building the correct neuromuscular pathways through high-frequency practice. Sensor data transforms the ineffable "feel" of riding into visualised metrics, making training more precise.' },
      { icon: '\ud83d\udc0e', title: 'Horse-Rider Bond \u2014 The Human Element Behind the Technology', content: 'Every rider who perfects their balance and aids on the simulator is reducing the burden on the real horse. The simulator is the interpreter helping humans learn the "language of the horse" \u2014 when you mount a real horse from the simulator, you become a light and harmonious partner, not a burden the horse must endure.' },
    ],
    certTitle: 'Certifications & Credentials',
    certSub: 'Compliant with international standards \u2014 safety and technical leadership fully documented',
    certs: [
      { icon: '\ud83c\udfc5', title: 'CE Certified', subtitle: 'EU Safety Certification RED / EMC / LVD', button: 'View Certificate' },
      { icon: '\ud83d\udc0e', title: 'HKJC Approved', subtitle: 'Hong Kong Jockey Club \u2014 Official Adoption 2024', button: 'Request to View' },
      { icon: '\u267f', title: 'RDA Approved', subtitle: 'Riding for the Disabled Association HK \u2014 Official Approval 2024', button: 'View Certificate' },
      { icon: '\ud83d\udd2c', title: 'Patents & Copyrights', subtitle: 'Multiple invention patents and software copyrights \u2014 authorised by the National Intellectual Property Administration', button: 'View Credentials' },
    ],
    stats: [
      { number: '10+', label: 'Partner Institutions' },
      { number: '9+', label: 'Years of Exploration' },
      { number: 'CE', label: 'EU Safety Certified' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'When was Guangdong TanYue Education Equipment Co., Ltd. established?', a: 'The company was founded in 2017, dedicated to the research, design and manufacture of equestrian simulation equipment, and is the founding enterprise of the Equestrian Simulators\u00ae brand.' },
      { q: 'What certifications do your products hold?', a: 'Both MS.30P and MS.30 hold CE certification (RED/EMC/LVD), compliant with EU safety standards. All products undergo rigorous quality inspection before shipment and are supported by multiple proprietary R&D credentials.' },
      { q: 'Do you offer customisation services?', a: 'Yes. We can provide customised configuration solutions based on institution type, venue conditions and training requirements, including sensor suite selection, software module customisation and after-sales service plans.' },
    ],
    ctaTitle: 'Ready to Start Working Together?',
    ctaSub: 'Contact our team for a tailored solution and quote',
    ctaBtn1: 'Contact Us',
    ctaBtn2: 'View Product Comparison',
  },
  ja: {
    h1: '\u30a8\u30af\u30a8\u30b9\u30c8\u30ea\u30a2\u30f3\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306b\u3064\u3044\u3066',
    heroSub: '2017\u5e74\u304b\u3089\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u6280\u8853\u3092\u30ea\u30fc\u30c9',
    missionTagline: '\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3067\u99ac\u8853\u3092\u9032\u5316\u3055\u305b\u3001\u4eba\u3068\u99ac\u306e\u7d46\u5099\u3092\u81ea\u7531\u306b',
    missionTitle: '\u79c1\u305f\u3061\u306e\u30df\u30c3\u30b7\u30e7\u30f3',
    missionP1: '\u5e83\u6771\u63a2\u6708\u6559\u80b2\u8a2d\u5099\u6709\u9650\u516c\u53f8\u306f\u3001AI\u3068\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u6280\u8853\u3092\u6d3b\u7528\u3057\u3066\u4f1d\u7d71\u7684\u306a\u9a6c\u8853\u8a13\u7df4\u3092\u5909\u9769\u3059\u308b\u3053\u3068\u3092\u4f7f\u547d\u3068\u3057\u3066\u3044\u307e\u3059\u3002',
    missionP2: '\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u9a6c\u3092\u4ee3\u66ff\u3059\u308b\u3082\u306e\u3067\u306f\u306a\u304f\u3001\u9a0e\u624b\u304c\u5b89\u5168\u306a\u74b0\u5883\u3067\u8eab\u4f53\u8a00\u8a9e\u3068\u7b4b\u8089\u8a18\u61b6\u3092\u78e8\u304f\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002',
    timelineLabel: '\u521d\u307e\u308a\u304b\u3089\u30b0\u30ed\u30fc\u30d0\u30eb\u8a8d\u77e5\u3078',
    timelineTitle: '\u6b69\u307f',
    timeline: [
      { year: '2017', title: '\u521d\u307e\u308a', desc: '\u5275\u696d\u8005\u304c\u81ea\u5206\u306e\u9a6c\u8853\u30af\u30e9\u30d6\u3067\u5b50\u3069\u3082\u305f\u3061\u306e\u9a6c\u8853\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u6539\u5584\u3059\u308b\u305f\u3081\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u958b\u767a\u306e\u63a2\u7d22\u3092\u958b\u59cb\u3002' },
      { year: '2019', title: '\u521d\u88fd\u54c1\u767a\u58f2', desc: '7\u670825\u65e5\u3001\u521d\u4ee3\u6a5f\u7a2eMS10\u767a\u58f2\u3002\u672c\u7269\u306e\u9a6c\u306e\u30c7\u30fc\u30bf1300\u7d44\u3092\u53d6\u5f97\u3057\u3001\u30d5\u30e9\u30f3\u30b9GALOP\u6559\u80b2\u30b7\u30b9\u30c6\u30e0\u306b\u7d71\u5408\u3002' },
      { year: '2020', title: 'CE\u8a8d\u8a3c\u53d6\u5f97', desc: 'EU CE\u5b89\u5168\u8a8d\u8a3c\uff08RED/EMC/LVD\uff09\u53d6\u5f97\u3002\u5546\u6a19\u767b\u9332\u5b8c\u4e86\u3002' },
      { year: '2021', title: '\u4f1a\u793e\u8a2d\u7acb', desc: '\u5e83\u6771\u63a2\u6708\u6559\u80b2\u8a2d\u5099\u6709\u9650\u516c\u53f8\u6b63\u5f0f\u8a2d\u7acb\u3002\u6210\u90fd\u56fd\u969b\u30b9\u30dd\u30fc\u30c4\u30a8\u30ad\u30b9\u30dd\u306b\u51fa\u5c55\u3002' },
      { year: '2022', title: '\u88fd\u54c1\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9', desc: '\u65b0\u898f\u7279\u8a31\u8ffd\u52a0\u3002\u300c\u5893\u96f21\u53f7\u300d\u30b9\u30dd\u30fc\u30c4\u578b\u767a\u58f2\u3002\u56db\u5ddd\u65c5\u884c\u5927\u5b66\u3067\u30c6\u30b9\u30c8\u958b\u59cb\u3002' },
      { year: '2023', title: '\u5168\u56fd\u3078\u306e\u666e\u53ca', desc: '\u56db\u5ddd\u7701\u521d\u306e\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u5b9f\u9a13\u5ba4\u7a3c\u50cd\u3002\u4e2d\u56fd\u6b66\u8b66\u9a0e\u5175\u90e8\u968a\u304c\u6b63\u5f0f\u5c0e\u5165\u3002' },
      { year: '2024', title: '\u56fd\u969b\u7684\u8a8d\u77e5', desc: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6\uff08HKJC\uff09\u304a\u3088\u3073\u9999\u6e2fRDA\u304c\u6b63\u5f0f\u5c0e\u5165\u3002' },
      { year: '2025', title: '\u6301\u7d9a\u7684\u6210\u9577', desc: '\u5e83\u897f\u5fb7\u4fdd\u804c\u696d\u6280\u8853\u5b66\u9662\u304c\u5c0e\u5165\u3002\u30b7\u30b9\u30c6\u30e0\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3002' },
    ],
    valuesLabel: '\u30b3\u30a2\u30d5\u30a3\u30ed\u30bd\u30d5\u30a3\u30fc',
    valuesTitle: '\u5b89\u5168 \u00b7 \u52b9\u7387 \u00b7 \u4eba\u99ac\u306e\u7d46\u5099',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: '\u5b89\u5168\u2014\u4fe1\u983c\u306e\u518d\u5b9a\u7fa9', content: '\u6050\u6016\u5fc3\u306f\u9a6c\u8853\u5b66\u7fd2\u306e\u6700\u5927\u306e\u969c\u58c1\u3002\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u5931\u6557\u3057\u3066\u3082\u3051\u304c\u306e\u306a\u3044\u5b89\u5168\u306a\u8a13\u7df4\u74b0\u5883\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002' },
      { icon: '\u26a1', title: '\u52b9\u7387\u2014\u30b9\u30ad\u30eb\u306e\u7cbe\u5bc6\u5de5\u5b66', content: '\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u75b2\u308c\u305a\u3001\u540c\u3058\u52d5\u4f5c\u3092\u4f55\u5ea6\u3082\u7e70\u308a\u8fd4\u305b\u307e\u3059\u3002\u30bb\u30f3\u30b5\u30fc\u30c7\u30fc\u30bf\u304c\u8a13\u7df4\u3092\u7cbe\u5bc6\u5316\u3057\u307e\u3059\u3002' },
      { icon: '\ud83d\udc0e', title: '\u4eba\u99ac\u306e\u7d46\u5099\u2014\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306e\u80cc\u5f8c\u306b\u3042\u308b\u4eba\u9593\u6027', content: '\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u9a7d\u6f0f\u306a\u304f\u7df4\u7fd2\u3057\u305f\u9a0e\u624b\u306f\u3001\u672c\u7269\u306e\u99ac\u3078\u306e\u8ca0\u62c5\u3092\u8efd\u6e1b\u3057\u307e\u3059\u3002' },
    ],
    certTitle: '\u8a8d\u8a3c\u3068\u8cc7\u683c',
    certSub: '\u56fd\u969b\u6a19\u6e96\u6e96\u62e0\u3001\u5b89\u5168\u6027\u3068\u6280\u8853\u529b\u306f\u5b8c\u5168\u306b\u8a18\u9332\u3055\u308c\u3066\u3044\u307e\u3059',
    certs: [
      { icon: '\ud83c\udfc5', title: 'CE\u8a8d\u8a3c', subtitle: 'EU\u5b89\u5168\u8a8d\u8a3c RED/EMC/LVD', button: '\u8a3c\u660e\u66f8\u3092\u898b\u308b' },
      { icon: '\ud83d\udc0e', title: 'HKJC\u8a8d\u5b9a', subtitle: '\u9999\u6e2f\u30b8\u30e7\u30c3\u30ad\u30fc\u30af\u30e9\u30d6 2024\u5e74\u516c\u5f0f\u5c0e\u5165', button: '\u95b2\u89a7\u7533\u8acb' },
      { icon: '\u267f', title: 'RDA\u8a8d\u5b9a', subtitle: '\u9999\u6e2fRDA 2024\u5e74\u516c\u5f0f\u8a8d\u5b9a', button: '\u8a3c\u660e\u66f8\u3092\u898b\u308b' },
      { icon: '\ud83d\udd2c', title: '\u7279\u8a31\u30fb\u8457\u4f5c\u6a29', subtitle: '\u8907\u6570\u306e\u767a\u660e\u7279\u8a31\u304a\u3088\u3073\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u8457\u4f5c\u6a29', button: '\u8cc7\u683c\u3092\u898b\u308b' },
    ],
    stats: [
      { number: '10+', label: '\u30d1\u30fc\u30c8\u30ca\u30fc\u6a5f\u95a2' },
      { number: '9+', label: '\u5e74\u306e\u63a2\u7d22\u7d4c\u9a13' },
      { number: 'CE', label: 'EU\u5b89\u5168\u8a8d\u8a3c' },
    ],
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqs: [
      { q: '\u5e83\u6771\u63a2\u6708\u6559\u80b2\u8a2d\u5099\u6709\u9650\u516c\u53f8\u306f\u3044\u3064\u8a2d\u7acb\u3055\u308c\u307e\u3057\u305f\u304b\uff1f', a: '2017\u5e74\u306b\u8a2d\u7acb\u3055\u308c\u3001\u9a6c\u8853\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u6a5f\u5668\u306e\u7814\u7a76\u30fb\u8a2d\u8a08\u30fb\u88fd\u9020\u306b\u6ce8\u529b\u3057\u3066\u3044\u307e\u3059\u3002' },
      { q: '\u5236\u54c1\u306e\u8a8d\u8a3c\u306f\uff1f', a: 'MS.30P\u3068MS.30\u306fCE\u8a8d\u8a3c\uff08RED/EMC/LVD\uff09\u53d6\u5f97\u6e08\u307f\u3002\u5168\u88fd\u54c1\u53b3\u683c\u691c\u67fb\u5b8c\u4e86\u3002' },
      { q: '\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u5bfe\u5fdc\u3067\u3059\u304b\uff1f', a: '\u306f\u3044\u3002\u6a5f\u95a2\u306e\u7a2e\u985e\u3001\u8a13\u7df4\u8981\u4ef6\u306b\u5fdc\u3058\u3066\u30ab\u30b9\u30bf\u30e0\u69cb\u6210\u3092\u63d0\u6848\u3067\u304d\u307e\u3059\u3002' },
    ],
    ctaTitle: '\u4e00\u7dd2\u306b\u59cb\u3081\u307e\u305b\u3093\u304b\uff1f',
    ctaSub: '\u30c1\u30fc\u30e0\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044',
    ctaBtn1: '\u304a\u554f\u3044\u5408\u308f\u305b',
    ctaBtn2: '\u88fd\u54c1\u6bd4\u8f03\u3092\u898b\u308b',
  },
  ko: {
    h1: '\uc5d0\ud034\uc2a4\ud2b8\ub9ac\uc548 \uc2dc\ubba4\ub808\uc774\ud130\uc5d0 \ub300\ud558\uc5ec',
    heroSub: '2017\ub144\ubd80\ud130 \ub9c8\uc220 \uc2dc\ubba4\ub808\uc774\uc158 \uae30\uc220\uc744 \uc120\ub3c4\ud558\ub2e4',
    missionTagline: '\uae30\uc220\ub85c \ub9c8\uc220\uc744 \uc9c4\ubcf4\uc2dc\ucf1c \uc0ac\ub78c\uacfc \ub9d0\uc758 \uc5f0\uacb0\uc744 \uc790\uc720\ub86d\uac8c',
    missionTitle: '\uc6b0\ub9ac\uc758 \uc0ac\uba85',
    missionP1: '\uad11\ub465 \ud0d0\uc6d4 \uad50\uc721 \uc124\ube44 \uc720\ud55c\ud68c\uc0ac\ub294 AI\uc640 \uc2dc\ubba4\ub808\uc774\uc158 \uae30\uc220\uc744 \ud1b5\ud574 \uc804\ud1b5\uc801\uc778 \ub9c8\uc220 \ud6c8\ub828\uc744 \ubcc0\ud601\ud558\ub294 \ub370 \ud5cc\uc2e0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.',
    missionP2: '\uc2dc\ubba4\ub808\uc774\ud130\ub294 \ub9d0\uc744 \ub300\uccb4\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \uc2e4\uc81c \ub9d0\uc5d0 \ud0c0\uae30 \uc804\uc5d0 \uc548\uc804\ud55c \ud658\uacbd\uc5d0\uc11c \uc2b9\ub9c8 \uae30\uc220\uc744 \uc5f0\ub9c8\ud558\uae30 \uc704\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4.',
    timelineLabel: '\uc2dc\uc791\ubd80\ud130 \uae00\ub85c\ubc8c \uc778\uc815\uae4c\uc9c0',
    timelineTitle: '\uc5f0\ud601',
    timeline: [
      { year: '2017', title: '\uc2dc\uc791', desc: '\ucc3d\uc5c5\uc790\uac00 \uc790\uc2e0\uc758 \uc2b9\ub9c8 \ud074\ub7fd\uc5d0\uc11c \uc544\uc774\ub4e4\uc774 \uc2b9\ub9c8\uc5d0 \uc27d\uac8c \uc801\uc751\ud560 \uc218 \uc788\ub3c4\ub85d \uc2dc\ubba4\ub808\uc774\ud130 \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\ub2e4.' },
      { year: '2019', title: '\uccab \uc81c\ud488 \ucd9c\uc2dc', desc: '7\uc6d425\uc77c MS10 \ucd9c\uc2dc. \uc2e4\uc81c \ub9d0 \ub370\uc774\ud130 1300\uc138\ud2b8 \uc218\uc9d1. \ud504\ub791\uc2a4 GALOP \uad50\uc721 \uccb4\uacc4 \ud1b5\ud569.' },
      { year: '2020', title: 'CE \uc778\uc99d \ucde8\ub4dd', desc: 'EU CE \uc548\uc804 \uc778\uc99d(RED/EMC/LVD) \ucde8\ub4dd. \uc0c1\ud45c \ub4f1\ub85d \uc644\ub8cc.' },
      { year: '2021', title: '\ud68c\uc0ac \uc124\ub9bd', desc: '\uad11\ub465 \ud0d0\uc6d4 \uad50\uc721 \uc124\ube44 \uc720\ud55c\ud68c\uc0ac \uacf5\uc2dd \uc124\ub9bd. \uccad\ub450 \uad6d\uc81c \uc2a4\ud3ec\uce20 \uc5d1\uc2a4\ud3ec \ucc38\uac00.' },
      { year: '2022', title: '\uc81c\ud488 \uc5c5\uadf8\ub808\uc774\ub4dc', desc: '\uc2e0\uaddc \ud2b9\ud5c8 \ucd94\uac00. \uc2a4\ud3ec\uce20\ud615 \ubaa8\ub378 \ucd9c\uc2dc. \uc2dc\ucda8\ub8e8\uc5c5 \ub300\ud559\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \uc2dc\uc791.' },
      { year: '2023', title: '\uc804\uad6d \ud655\uc0b0', desc: '\uc4f0\ucd94\uc548 \ucd5c\ucd08\uc758 \uc2b9\ub9c8 \uc2dc\ubba4\ub808\uc774\uc158 \uc2e4\ud5d8\uc2e4 \uac1c\uc18c. \uc911\uad6d \ubb34\uc7a5\uacbd\ucc30 \uae30\ub3d9\ub300 \uc815\uc2dd \ub3c4\uc785.' },
      { year: '2024', title: '\uad6d\uc81c \uc778\uc815', desc: '\ud64d\ucf69 \uc7254\ud0a4 \ud074\ub7fd(HKJC) \ubc0f \ud64d\ucf69 RDA \uc815\uc2dd \ub3c4\uc785.' },
      { year: '2025', title: '\uc9c0\uc18d\uc801 \ud655\uc7a5', desc: '\uad11\uc2dc \ub355\ubcf4 \uc9c1\uc5c5\uae30\uc220\ud559\uc6d0 \ub3c4\uc785. \uc2dc\uc2a4\ud15c \uc5c5\uadf8\ub808\uc774\ub4dc \uc644\ub8cc.' },
    ],
    valuesLabel: '\ud575\uc2ec \ucca0\ud559',
    valuesTitle: '\uc548\uc804 \u00b7 \ud6a8\uc728 \u00b7 \uc778\ub9c8 \uad00\uacc4',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: '\uc548\uc804\u2014\uc2e0\ub8b0\uc758 \uacbd\uacc4 \uc7ac\uc815\uc758', content: '\ub450\ub824\uc6c0\uc740 \uc2b9\ub9c8\uc2a4\ud3ec\uce20 \ud559\uc2b5\uc758 \uac00\uc7a5 \ud070 \uc7a5\ube45\uc785\ub2c8\ub2e4. \uc2dc\ubba4\ub808\uc774\ud130\ub294 \uc2e4\uc218\ud574\ub3c4 \ub2e4\uce58\uc9c0 \uc54a\ub294 \uc548\uc804\ud55c \ud6c8\ub828 \ud658\uacbd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.' },
      { icon: '\u26a1', title: '\ud6a8\uc728\u2014\uc2a4\ud0ac\uc758 \uc815\ubc00 \uacf5\ud559', content: '\uc2dc\ubba4\ub808\uc774\ud130\ub294 \uc9c0\uce58\uc9c0 \uc54a\uace0 \uac19\uc740 \ub3d9\uc791\uc744 \uc218\ubc31 \ubc88 \ubc18\ubcf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
      { icon: '\ud83d\udc0e', title: '\uc778\ub9c8 \uad00\uacc4\u2014\uae30\uc220 \ub274\uba74\uc758 \uc778\uac04\uc801 \uac00\uce58', content: '\uc2dc\ubba4\ub808\uc774\ud130\uc5d0\uc11c \uc5f0\uc2b5\ud55c \uae30\uc218\ub294 \uc2e4\uc81c \ub9d0\uc5d0 \ud0c0\uc744 \ub54c \uac00\ubcbc\uc6b4 \ud30c\ud2b8\ub108\uac00 \ub429\ub2c8\ub2e4.' },
    ],
    certTitle: '\uc778\uc99d \ubc0f \uc790\uaca9',
    certSub: '\uad6d\uc81c \ud45c\uc900 \uc900\uc218\uff0c\uc548\uc804\uc131\uacfc \uae30\uc220\ub825\uc774 \uc644\uc804\ud788 \uc785\uc99d',
    certs: [
      { icon: '\ud83c\udfc5', title: 'CE \uc778\uc99d', subtitle: 'EU \uc548\uc804 \uc778\uc99d RED/EMC/LVD', button: '\uc778\uc99d\uc11c \ubcf4\uae30' },
      { icon: '\ud83d\udc0e', title: 'HKJC \uc2b9\uc778', subtitle: '\ud64d\ucf69 \uc7254\ud0a4 \ud074\ub7fd 2024\ub144 \uacf5\uc2dd \ub3c4\uc785', button: '\uc5f4\ub78c \uc2e0\uccad' },
      { icon: '\u267f', title: 'RDA \uc2b9\uc778', subtitle: '\ud64d\ucf69 RDA 2024\ub144 \uacf5\uc2dd \uc2b9\uc778', button: '\uc778\uc99d\uc11c \ubcf4\uae30' },
      { icon: '\ud83d\udd2c', title: '\ud2b9\ud5c8 \ubc0f \uc800\uc791\uad8c', subtitle: '\ub2e4\uc218\uc758 \ubc1c\uba85 \ud2b9\ud5c8 \ubc0f \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc800\uc791\uad8c', button: '\uc790\uaca9 \ubcf4\uae30' },
    ],
    stats: [
      { number: '10+', label: '\ud30c\ud2b8\ub108 \uae30\uad00' },
      { number: '9+', label: '\ub144\uac04 \ud0d0\ud5d8 \uacbd\ud5d8' },
      { number: 'CE', label: 'EU \uc548\uc804 \uc778\uc99d' },
    ],
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqs: [
      { q: '\ud68c\uc0ac\ub294 \uc5b8\uc81c \uc124\ub9bd\ub418\uc5c8\ub098\uc694?', a: '2017\ub144\uc5d0 \uc124\ub9bd\ub418\uc5c8\uc73c\uba70 \uc2b9\ub9c8 \uc2dc\ubba4\ub808\uc774\uc158 \uc7a5\ube44\uc758 \uc5f0\uad6c, \uc124\uacc4, \uc81c\uc870\uc5d0 \ud5cc\uc2e0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.' },
      { q: '\uc778\uc99d\uc740 \uc5b4\ub5bb\uac8c \ub418\uc5b4 \uc788\ub098\uc694?', a: 'MS.30P\uc640 MS.30\uc740 CE \uc778\uc99d(RED/EMC/LVD)\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.' },
      { q: '\ub9de\ucdb0 \uc81c\uc791\uc774 \uac00\ub2a5\ud55c\uac00\uc694?', a: '\ub124, \uae30\uad00 \uc720\ud615\uacfc \ud6c8\ub828 \uc694\uad6c\uc5d0 \ub530\ub77c \ub9de\ucdb0 \uc81c\uc791 \uad6c\uc131\uc744 \uc81c\uc548\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.' },
    ],
    ctaTitle: '\ud568\uaed8 \uc2dc\uc791\ud560 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?',
    ctaSub: '\uc800\ud76c \ud300\uc5d0 \ubb38\uc758\ud558\uc138\uc694',
    ctaBtn1: '\uc5f0\ub77d\ud558\uae30',
    ctaBtn2: '\uc81c\ud488 \ube44\uad50 \ubcf4\uae30',
  },
  es: {
    h1: 'Acerca de Equestrian Simulators\u00ae',
    heroSub: 'Liderando la tecnolog\u00eda de simulaci\u00f3n ecuestre desde 2017',
    missionTagline: 'Impulsando el progreso ecuestre con tecnolog\u00eda \u2014 liberando la conexi\u00f3n entre jinete y caballo',
    missionTitle: 'Nuestra Misi\u00f3n',
    missionP1: 'Guangdong TanYue Education Equipment Co., Ltd. es el dise\u00f1ador, desarrollador y fabricante de la marca Equestrian Simulators\u00ae, dedicado a transformar el entrenamiento ecuestre tradicional mediante tecnolog\u00eda avanzada de IA y simulaci\u00f3n.',
    missionP2: 'El simulador no est\u00e1 dise\u00f1ado para reemplazar al caballo, sino para garantizar que cada jinete haya perfeccionado su lenguaje corporal y memoria muscular en un entorno seguro antes de montar un caballo real.',
    timelineLabel: 'De los inicios al reconocimiento global',
    timelineTitle: 'Nuestra Trayectoria',
    timeline: [
      { year: '2017', title: 'Los Inicios', desc: 'El fundador comenz\u00f3 a explorar el desarrollo de simuladores ecuestres para ayudar a los ni\u00f1os a adaptarse a la equitaci\u00f3n en su propio club.' },
      { year: '2019', title: 'Primer Producto', desc: 'El 25 de julio se lanz\u00f3 el simulador MS10, incorporando 1.300 conjuntos de datos de caballos reales e integrado en el sistema GALOP franc\u00e9s.' },
      { year: '2020', title: 'Certificaci\u00f3n CE', desc: 'Certificaci\u00f3n de seguridad CE de la UE (RED/EMC/LVD) obtenida. Marca registrada.' },
      { year: '2021', title: 'Fundaci\u00f3n de la Empresa', desc: 'Guangdong TanYue Education Equipment Co., Ltd. establecida formalmente. Participaci\u00f3n en la Expo Internacional de Deportes de Chengdu.' },
      { year: '2022', title: 'Actualizaci\u00f3n de Producto', desc: 'Nuevas patentes a\u00f1adidas. Modelo deportivo "Moyun No.1" lanzado. Pruebas en la Universidad de Turismo de Sichuan.' },
      { year: '2023', title: 'Expansi\u00f3n Nacional', desc: 'Primer laboratorio de simulaci\u00f3n ecuestre de Sichuan inaugurado. Adoptado por la Polic\u00eda Armada China.' },
      { year: '2024', title: 'Reconocimiento Internacional', desc: 'Hong Kong Jockey Club (HKJC) y RDA Hong Kong adoptan oficialmente el sistema.' },
      { year: '2025', title: 'Expansi\u00f3n Continua', desc: 'Adoptado por el Colegio Vocacional de Debao, Guangxi. Sistema actualizado con cuatro m\u00f3dulos.' },
    ],
    valuesLabel: 'Filosof\u00eda Central',
    valuesTitle: 'Seguridad \u00b7 Eficiencia \u00b7 V\u00ednculo Humano-Equino',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: 'Seguridad \u2014 Redefiniendo los L\u00edmites de la Confianza', content: 'El miedo es el mayor obst\u00e1culo para aprender equitaci\u00f3n. El simulador proporciona un "santuario" de entrenamiento donde los errores no tienen consecuencias f\u00edsicas.' },
      { icon: '\u26a1', title: 'Eficiencia \u2014 La Ingenier\u00eda de Precisi\u00f3n de las Habilidades', content: 'El simulador es incansable, capaz de repetir el mismo movimiento cientos de veces. Los datos de los sensores transforman la "sensaci\u00f3n" de montar en m\u00e9tricas visualizadas.' },
      { icon: '\ud83d\udc0e', title: 'V\u00ednculo Humano-Equino \u2014 El Elemento Humano', content: 'Cada jinete que perfecciona su equilibrio en el simulador reduce la carga sobre el caballo real, convirti\u00e9ndose en un compa\u00f1ero ligero y arm\u00f3nico.' },
    ],
    certTitle: 'Certificaciones y Credenciales',
    certSub: 'Cumple con est\u00e1ndares internacionales \u2014 seguridad y liderazgo t\u00e9cnico plenamente documentados',
    certs: [
      { icon: '\ud83c\udfc5', title: 'Certificado CE', subtitle: 'Certificaci\u00f3n de Seguridad UE RED/EMC/LVD', button: 'Ver Certificado' },
      { icon: '\ud83d\udc0e', title: 'Aprobado HKJC', subtitle: 'Hong Kong Jockey Club \u2014 Adopci\u00f3n Oficial 2024', button: 'Solicitar Ver' },
      { icon: '\u267f', title: 'Aprobado RDA', subtitle: 'RDA Hong Kong \u2014 Aprobaci\u00f3n Oficial 2024', button: 'Ver Certificado' },
      { icon: '\ud83d\udd2c', title: 'Patentes y Derechos de Autor', subtitle: 'M\u00faltiples patentes de invenci\u00f3n y derechos de autor de software', button: 'Ver Credenciales' },
    ],
    stats: [
      { number: '10+', label: 'Instituciones Socias' },
      { number: '9+', label: 'A\u00f1os de Exploraci\u00f3n' },
      { number: 'CE', label: 'Certificado CE' },
    ],
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
      { q: '\u00bfCu\u00e1ndo se fund\u00f3 la empresa?', a: 'La empresa fue fundada en 2017, dedicada a la investigaci\u00f3n, dise\u00f1o y fabricaci\u00f3n de equipos de simulaci\u00f3n ecuestre.' },
      { q: '\u00bfQu\u00e9 certificaciones tienen sus productos?', a: 'El MS.30P y el MS.30 tienen certificaci\u00f3n CE (RED/EMC/LVD), cumpliendo con los est\u00e1ndares de seguridad de la UE.' },
      { q: '\u00bfOfrecen servicios de personalizaci\u00f3n?', a: 'S\u00ed. Podemos proporcionar soluciones de configuraci\u00f3n personalizadas seg\u00fan el tipo de instituci\u00f3n y los requisitos de entrenamiento.' },
    ],
    ctaTitle: '\u00bfListo para Empezar?',
    ctaSub: 'Contacte a nuestro equipo para una soluci\u00f3n personalizada',
    ctaBtn1: 'Cont\u00e1ctenos',
    ctaBtn2: 'Ver Comparaci\u00f3n de Productos',
  },
  de: {
    h1: '\u00dcber Equestrian Simulators\u00ae',
    heroSub: 'F\u00fchrend in der Reitsimulationstechnologie seit 2017',
    missionTagline: 'Reitsport durch Technologie vorantreiben \u2014 die Verbindung zwischen Reiter und Pferd befreien',
    missionTitle: 'Unsere Mission',
    missionP1: 'Guangdong TanYue Education Equipment Co., Ltd. ist Designer, Entwickler und Hersteller der Marke Equestrian Simulators\u00ae und widmet sich der Transformation des traditionellen Reitsports durch fortschrittliche KI- und Simulationstechnologie.',
    missionP2: 'Der Simulator ist nicht daf\u00fcr gedacht, das Pferd zu ersetzen, sondern sicherzustellen, dass jeder Reiter seine K\u00f6rpersprache und sein Muskelged\u00e4chtnis in einer sicheren Umgebung verfeinert hat, bevor er ein echtes Pferd besteigt.',
    timelineLabel: 'Von den Anf\u00e4ngen zur globalen Anerkennung',
    timelineTitle: 'Unsere Geschichte',
    timeline: [
      { year: '2017', title: 'Der Anfang', desc: 'Der Gr\u00fcnder begann, Reitsimulator-Entwicklung zu erkunden, um Kindern in seinem Reitclub zu helfen.' },
      { year: '2019', title: 'Erstes Produkt', desc: 'Am 25. Juli wurde der Simulator MS10 mit 1.300 Datens\u00e4tzen echter Pferde und dem franz\u00f6sischen GALOP-System gestartet.' },
      { year: '2020', title: 'CE-Zertifizierung', desc: 'EU CE-Sicherheitszertifizierung (RED/EMC/LVD) erhalten. Marke registriert.' },
      { year: '2021', title: 'Unternehmensgr\u00fcndung', desc: 'Guangdong TanYue Education Equipment Co., Ltd. offiziell gegr\u00fcndet. Teilnahme an der Chengdu International Sports Expo.' },
      { year: '2022', title: 'Produkt-Upgrade', desc: 'Neue Patente hinzugef\u00fcgt. Sport-Modell "Moyun No.1" eingef\u00fchrt. Tests an der Sichuan Tourism University.' },
      { year: '2023', title: 'Nationaler Durchbruch', desc: 'Erstes Reitsimulationslabor in Sichuan er\u00f6ffnet. Von der chinesischen Bewaffneten Polizei \u00fcbernommen.' },
      { year: '2024', title: 'Internationale Anerkennung', desc: 'Hong Kong Jockey Club (HKJC) und RDA Hongkong \u00fcbernehmen das System offiziell.' },
      { year: '2025', title: 'Weitere Expansion', desc: 'Von Debao Vocational College, Guangxi, \u00fcbernommen. System auf vier Module aktualisiert.' },
    ],
    valuesLabel: 'Kernphilosophie',
    valuesTitle: 'Sicherheit \u00b7 Effizienz \u00b7 Mensch-Pferd-Bindung',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: 'Sicherheit \u2014 Die Grenzen des Vertrauens neu definieren', content: 'Angst ist das gr\u00f6\u00dfte Hindernis beim Reiten lernen. Der Simulator bietet ein sicheres Trainings-"Refugium", in dem Fehler keine k\u00f6rperlichen Konsequenzen haben.' },
      { icon: '\u26a1', title: 'Effizienz \u2014 Pr\u00e4zisionstechnik der F\u00e4higkeiten', content: 'Der Simulator ist unersch\u00f6pflich und kann dieselbe Bewegung hunderte Male wiederholen. Sensordaten machen das Reitgef\u00fchl messbar.' },
      { icon: '\ud83d\udc0e', title: 'Mensch-Pferd-Bindung \u2014 Das menschliche Element', content: 'Jeder Reiter, der am Simulator Balance und Hilfen perfektioniert, reduziert die Last f\u00fcr das echte Pferd und wird zum leichten, harmonischen Partner.' },
    ],
    certTitle: 'Zertifizierungen & Nachweise',
    certSub: 'Einhaltung internationaler Standards \u2014 Sicherheit und technische F\u00fchrung vollst\u00e4ndig dokumentiert',
    certs: [
      { icon: '\ud83c\udfc5', title: 'CE-Zertifiziert', subtitle: 'EU-Sicherheitszertifizierung RED/EMC/LVD', button: 'Zertifikat ansehen' },
      { icon: '\ud83d\udc0e', title: 'HKJC-Zertifiziert', subtitle: 'Hong Kong Jockey Club \u2014 Offizielle \u00dcbernahme 2024', button: 'Anfrage senden' },
      { icon: '\u267f', title: 'RDA-Anerkannt', subtitle: 'RDA Hongkong \u2014 Offizielle Anerkennung 2024', button: 'Zertifikat ansehen' },
      { icon: '\ud83d\udd2c', title: 'Patente & Urheberrechte', subtitle: 'Mehrere Erfindungspatente und Software-Urheberrechte', button: 'Nachweise ansehen' },
    ],
    stats: [
      { number: '10+', label: 'Partnerinstitutionen' },
      { number: '9+', label: 'Jahre Erfahrung' },
      { number: 'CE', label: 'EU-Sicherheitszertifiziert' },
    ],
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    faqs: [
      { q: 'Wann wurde das Unternehmen gegr\u00fcndet?', a: 'Das Unternehmen wurde 2017 gegr\u00fcndet und widmet sich der Forschung, dem Design und der Herstellung von Reitsimulationsger\u00e4ten.' },
      { q: 'Welche Zertifizierungen haben Ihre Produkte?', a: 'MS.30P und MS.30 verf\u00fcgen \u00fcber die CE-Zertifizierung (RED/EMC/LVD) gem\u00e4\u00df EU-Sicherheitsstandards.' },
      { q: 'Bieten Sie Anpassungsdienstleistungen an?', a: 'Ja. Wir k\u00f6nnen ma\u00dfgeschneiderte Konfigurationsl\u00f6sungen basierend auf Institutionstyp und Trainingsanforderungen anbieten.' },
    ],
    ctaTitle: 'Bereit anzufangen?',
    ctaSub: 'Kontaktieren Sie unser Team f\u00fcr eine ma\u00dfgeschneiderte L\u00f6sung',
    ctaBtn1: 'Kontakt aufnehmen',
    ctaBtn2: 'Produktvergleich ansehen',
  },
  ar: {
    h1: '\u062d\u0648\u0644 \u0645\u062d\u0627\u0643\u064a\u0627\u062a \u0627\u0644\u062e\u064a\u0648\u0644',
    heroSub: '\u0631\u0627\u0626\u062f\u0648\u0646 \u0641\u064a \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0645\u0646\u0630 2017',
    missionTagline: '\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629 \u0628\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u2014 \u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0628\u064a\u0646 \u0627\u0644\u0641\u0627\u0631\u0633 \u0648\u0627\u0644\u062c\u0648\u0627\u062f',
    missionTitle: '\u0645\u0647\u0645\u062a\u0646\u0627',
    missionP1: '\u0634\u0631\u0643\u0629 \u063a\u0648\u0627\u0646\u063a\u062f\u0648\u0646\u063a \u062a\u0627\u0646\u064a\u0648\u064a\u0647 \u0644\u0644\u062a\u062c\u0647\u064a\u0632\u0627\u062a \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u062a\u0633\u0639\u0649 \u0625\u0644\u0649 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0641\u0631\u0648\u0633\u064a \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a \u0639\u0628\u0631 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.',
    missionP2: '\u0644\u0645 \u064a\u064f\u0635\u0645\u0651\u0645 \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0644\u064a\u062d\u0644 \u0645\u062d\u0644 \u0627\u0644\u062c\u0648\u0627\u062f\u060c \u0628\u0644 \u0644\u064a\u0636\u0645\u0646 \u0644\u0643\u0644 \u0641\u0627\u0631\u0633 \u0628\u064a\u0626\u0629 \u062a\u062f\u0631\u064a\u0628 \u0622\u0645\u0646\u0629.',
    timelineLabel: '\u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0627\u0639\u062a\u0631\u0627\u0641 \u0627\u0644\u0639\u0627\u0644\u0645\u064a',
    timelineTitle: '\u0645\u0633\u064a\u0631\u062a\u0646\u0627',
    timeline: [
      { year: '2017', title: '\u0627\u0644\u0628\u062f\u0627\u064a\u0629', desc: '\u0628\u062f\u0623 \u0627\u0644\u0645\u0624\u0633\u0633 \u062a\u0637\u0648\u064a\u0631 \u0645\u062d\u0627\u0643\u064a\u0627\u062a \u0627\u0644\u062e\u064a\u0648\u0644 \u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0641\u064a \u0646\u0627\u062f\u064a\u0647 \u0627\u0644\u062e\u0627\u0635.' },
      { year: '2019', title: '\u0625\u0637\u0644\u0627\u0642 \u0623\u0648\u0644 \u0645\u0646\u062a\u062c', desc: '\u062a\u0645 \u0625\u0637\u0644\u0627\u0642 MS10 \u0628\u0628\u064a\u0627\u0646\u0627\u062a 1300 \u062e\u064a\u0648\u0644 \u062d\u0642\u064a\u0642\u064a\u0629 \u0648\u062f\u0645\u062c\u0647 \u0641\u064a \u0646\u0638\u0627\u0645 GALOP.' },
      { year: '2020', title: '\u0634\u0647\u0627\u062f\u0629 CE', desc: '\u062a\u0645 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062f\u0629 CE \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a\u0629 (RED/EMC/LVD).' },
      { year: '2021', title: '\u062a\u0623\u0633\u064a\u0633 \u0627\u0644\u0634\u0631\u0643\u0629', desc: '\u062a\u0623\u0633\u064a\u0633 \u0634\u0631\u0643\u0629 \u063a\u0648\u0627\u0646\u063a\u062f\u0648\u0646\u063a \u062a\u0627\u0646\u064a\u0648\u064a\u0647 \u0631\u0633\u0645\u064a\u0627\u064b.' },
      { year: '2022', title: '\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0646\u062a\u062c', desc: '\u0628\u0631\u0627\u0621\u0627\u062a \u062c\u062f\u064a\u062f\u0629 \u0648\u0625\u0637\u0644\u0627\u0642 \u0646\u0645\u0648\u0630\u062c \u0631\u064a\u0627\u0636\u064a.' },
      { year: '2023', title: '\u0627\u0644\u0627\u0646\u062a\u0634\u0627\u0631 \u0627\u0644\u0648\u0637\u0646\u064a', desc: '\u0623\u0648\u0644 \u0645\u062e\u062a\u0628\u0631 \u0645\u062d\u0627\u0643\u0627\u0629 \u0641\u0631\u0648\u0633\u064a\u0629 \u0641\u064a \u0633\u064a\u062a\u0634\u0648\u0627\u0646.' },
      { year: '2024', title: '\u0627\u0644\u0627\u0639\u062a\u0631\u0627\u0641 \u0627\u0644\u062f\u0648\u0644\u064a', desc: '\u0627\u0639\u062a\u0645\u062f\u0647 \u0646\u0627\u062f\u064a \u062c\u0648\u0643\u064a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a (HKJC) \u0648 RDA \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a.' },
      { year: '2025', title: '\u062a\u0648\u0633\u0639 \u0645\u0633\u062a\u0645\u0631', desc: '\u0627\u0639\u062a\u0645\u062f\u062a\u0647 \u0643\u0644\u064a\u0629 \u062f\u064a\u0628\u0627\u0648 \u0648\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0646\u0638\u0627\u0645.' },
    ],
    valuesLabel: '\u0641\u0644\u0633\u0641\u062a\u0646\u0627 \u0627\u0644\u062c\u0648\u0647\u0631\u064a\u0629',
    valuesTitle: '\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u00b7 \u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u00b7 \u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0628\u0627\u0644\u062c\u0648\u0627\u062f',
    values: [
      { icon: '\ud83d\udee1\ufe0f', title: '\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u2014 \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u0631\u064a\u0641 \u062d\u062f\u0648\u062f \u0627\u0644\u062b\u0642\u0629', content: '\u0627\u0644\u062e\u0648\u0641 \u0647\u0648 \u0623\u0643\u0628\u0631 \u0639\u0642\u0628\u0629 \u0641\u064a \u062a\u0639\u0644\u0645 \u0627\u0644\u0641\u0631\u0648\u0633\u064a\u0629. \u064a\u0648\u0641\u0631 \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0628\u064a\u0626\u0629 \u062a\u062f\u0631\u064a\u0628 \u0622\u0645\u0646\u0629 \u062d\u064a\u062b \u0644\u0627 \u062a\u0633\u0628\u0628 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0623\u0636\u0631\u0627\u0631\u0627\u064b.' },
      { icon: '\u26a1', title: '\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u2014 \u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u062f\u0642\u064a\u0642\u0629 \u0644\u0644\u0645\u0647\u0627\u0631\u0627\u062a', content: '\u0627\u0644\u0645\u062d\u0627\u0643\u064a \u0644\u0627 \u064a\u062a\u0639\u0628 \u0648\u064a\u0645\u0643\u0646\u0647 \u062a\u0643\u0631\u0627\u0631 \u0646\u0641\u0633 \u0627\u0644\u062d\u0631\u0643\u0629 \u0645\u0626\u0627\u062a \u0627\u0644\u0645\u0631\u0627\u062a.' },
      { icon: '\ud83d\udc0e', title: '\u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0628\u0627\u0644\u062c\u0648\u0627\u062f \u2014 \u0627\u0644\u062c\u0627\u0646\u0628 \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a', content: '\u0643\u0644 \u0641\u0627\u0631\u0633 \u064a\u062a\u0642\u0646 \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u0627\u0643\u064a \u064a\u0635\u0628\u062d \u0634\u0631\u064a\u0643\u0627\u064b \u062e\u0641\u064a\u0641\u0627\u064b \u0644\u0644\u062c\u0648\u0627\u062f \u0627\u0644\u062d\u0642\u064a\u0642\u064a.' },
    ],
    certTitle: '\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f\u0627\u062a',
    certSub: '\u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0627\u0644\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u062f\u0648\u0644\u064a\u0629',
    certs: [
      { icon: '\ud83c\udfc5', title: '\u0634\u0647\u0627\u062f\u0629 CE', subtitle: '\u0634\u0647\u0627\u062f\u0629 \u0623\u0645\u0627\u0646 \u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a RED/EMC/LVD', button: '\u0639\u0631\u0636 \u0627\u0644\u0634\u0647\u0627\u062f\u0629' },
      { icon: '\ud83d\udc0e', title: '\u0645\u0639\u062a\u0645\u062f HKJC', subtitle: '\u0646\u0627\u062f\u064a \u062c\u0648\u0643\u064a \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a 2024', button: '\u0637\u0644\u0628 \u0627\u0644\u0627\u0637\u0644\u0627\u0639' },
      { icon: '\u267f', title: '\u0645\u0639\u062a\u0645\u062f RDA', subtitle: 'RDA \u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a 2024', button: '\u0639\u0631\u0636 \u0627\u0644\u0634\u0647\u0627\u062f\u0629' },
      { icon: '\ud83d\udd2c', title: '\u0628\u0631\u0627\u0621\u0627\u062a \u0648\u062d\u0642\u0648\u0642 \u0645\u0644\u0643\u064a\u0629', subtitle: '\u0628\u0631\u0627\u0621\u0627\u062a \u0627\u062e\u062a\u0631\u0627\u0639 \u0645\u062a\u0639\u062f\u062f\u0629', button: '\u0639\u0631\u0636 \u0627\u0644\u0648\u062b\u0627\u0626\u0642' },
    ],
    stats: [
      { number: '10+', label: '\u0645\u0624\u0633\u0633\u0627\u062a \u0634\u0631\u064a\u0643\u0629' },
      { number: '9+', label: '\u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u062e\u0628\u0631\u0629' },
      { number: 'CE', label: '\u0645\u0639\u062a\u0645\u062f CE' },
    ],
    faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
    faqs: [
      { q: '\u0645\u062a\u0649 \u062a\u0623\u0633\u0633\u062a \u0627\u0644\u0634\u0631\u0643\u0629\u061f', a: '\u062a\u0623\u0633\u0633\u062a \u0639\u0627\u0645 2017 \u0648\u062a\u062a\u062e\u0635\u0635 \u0641\u064a \u0623\u062c\u0647\u0632\u0629 \u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u062e\u064a\u0648\u0644.' },
      { q: '\u0645\u0627 \u0647\u064a \u0634\u0647\u0627\u062f\u0627\u062a \u0645\u0646\u062a\u062c\u0627\u062a\u0643\u0645\u061f', a: 'MS.30P \u0648 MS.30 \u062d\u0627\u0635\u0644\u0627\u0646 \u0639\u0644\u0649 \u0634\u0647\u0627\u062f\u0629 CE (RED/EMC/LVD).' },
      { q: '\u0647\u0644 \u062a\u0642\u062f\u0645\u0648\u0646 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u062e\u0635\u064a\u0635\u061f', a: '\u0646\u0639\u0645. \u064a\u0645\u0643\u0646\u0646\u0627 \u062a\u0642\u062f\u064a\u0645 \u062d\u0644\u0648\u0644 \u0645\u062e\u0635\u0635\u0629 \u062d\u0633\u0628 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u062f\u0631\u064a\u0628.' },
    ],
    ctaTitle: '\u0645\u0633\u062a\u0639\u062f\u0648\u0646 \u0644\u0644\u0628\u062f\u0621\u061f',
    ctaSub: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642\u0646\u0627 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062d\u0644 \u0645\u062e\u0635\u0635',
    ctaBtn1: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627',
    ctaBtn2: '\u0639\u0631\u0636 \u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',
  },
};

export default function AboutPage() {
  const locale = useLocale() as LocaleKey;
  const t = i18n[locale] ?? i18n.en;
  const isRTL = locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "\u5e7f\u4e1c\u63a2\u6708\u6559\u80b2\u8bbe\u5907\u6709\u9650\u516c\u53f8",
            "alternateName": "\u6a21\u62df\u9a6c\u00ae",
            "url": "https://www.equestrian-simulators.com",
            "logo": "https://www.equestrian-simulators.com/images/logo02.png",
            "foundingDate": "2021",
            "description": "Professional equestrian simulator manufacturer. CE certified. Recognized by Hong Kong Jockey Club (HKJC) and Riding for the Disabled Association Hong Kong (RDA).",
            "address": { "@type": "PostalAddress", "addressCountry": "CN", "addressRegion": "Guangdong" },
            "award": ["Hong Kong Jockey Club Official Recognition 2024", "RDA Hong Kong Official Recognition 2024", "CE Certification RED/EMC/LVD"]
          })
        }}
      />

      {/* Hero区 */}
      <section
        style={{
          background: colors.grayBg,
          padding: 'calc(120px + 44px) 40px 80px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: colors.black,
            marginBottom: '16px',
            letterSpacing: '-0.5px',
            margin: '0 0 16px 0',
          }}
        >
          {t.h1}
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: colors.gray,
            margin: 0,
          }}
        >
          {t.heroSub}
        </p>
      </section>

      {/* 品牌使命区 */}
      <section
        style={{
          background: colors.white,
          padding: '80px 5%',
        }}
      >
        <div
          id="about-mission-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '15px',
                color: colors.primary,
                letterSpacing: '1.5px',
                marginBottom: '16px',
                display: 'block',
                textTransform: 'uppercase',
              }}
            >
              {t.missionTagline}
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: colors.black,
                marginBottom: '20px',
                margin: '0 0 20px 0',
              }}
            >
              {t.missionTitle}
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: colors.gray,
                lineHeight: '1.8',
                marginBottom: '16px',
              }}
            >
              {t.missionP1}
            </p>
            <p
              style={{
                fontSize: '15px',
                color: colors.gray,
                lineHeight: '1.8',
                marginBottom: 0,
              }}
            >
              {t.missionP2}
            </p>
          </div>
          <div>
            <img
              src="/images/about-mission.png"
              alt="equestrian simulator training"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '16px',
              }}
            />
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section
        style={{
          background: colors.grayBg,
          padding: '80px 5%',
        }}
      >
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '15px',
              color: colors.primary,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {t.timelineLabel}
          </span>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: colors.black,
              margin: 0,
            }}
          >
            {t.timelineTitle}
          </h2>
        </div>

        <div
          style={{
            maxWidth: '800px',
            margin: '48px auto 0',
          }}
        >
          {t.timeline.map((item, index) => (
            <div
              key={item.year}
              style={{
                display: 'flex',
                marginBottom: index < t.timeline.length - 1 ? '40px' : 0,
              }}
            >
              <div
                style={{
                  width: '60px',
                  fontSize: '18px',
                  fontWeight: 800,
                  color: colors.primary,
                  textAlign: 'right',
                  paddingRight: '32px',
                  flexShrink: 0,
                }}
              >
                {item.year}
              </div>
              <div
                style={{
                  position: 'relative',
                  flexShrink: 0,
                  marginRight: '16px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '8px',
                    bottom: index < t.timeline.length - 1 ? '-48px' : '8px',
                    width: '2px',
                    background: colors.border,
                    transform: 'translateX(-50%)',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    width: '12px',
                    height: '12px',
                    background: colors.primary,
                    borderRadius: '50%',
                    marginTop: '4px',
                  }}
                />
              </div>
              <div
                style={{
                  paddingLeft: '24px',
                  paddingRight: isRTL ? '24px' : '0',
                  flex: 1,
                  textAlign: isRTL ? 'right' : 'left',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: colors.black,
                    margin: '0 0 8px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.gray,
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 核心价值三支柱 */}
      <section
        style={{
          background: colors.white,
          padding: '80px 5%',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              fontSize: '15px',
              color: colors.primary,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {t.valuesLabel}
          </span>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: colors.black,
              margin: 0,
            }}
          >
            {t.valuesTitle}
          </h2>
        </div>

        <div
          id="about-values-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {t.values.map((item) => (
            <div
              key={item.title}
              style={{
                background: colors.white,
                border: `1px solid ${colors.border}`,
                borderRadius: '16px',
                padding: '36px 28px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border;
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '20px',
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: colors.black,
                  marginBottom: '16px',
                  margin: '0 0 16px 0',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: colors.gray,
                  lineHeight: '1.8',
                  margin: 0,
                }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 认证与资质 */}
      <section
        style={{
          background: colors.grayBg,
          padding: '80px 5%',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: colors.black,
              marginBottom: '8px',
              margin: '0 0 8px 0',
            }}
          >
            {t.certTitle}
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: colors.gray,
              margin: 0,
            }}
          >
            {t.certSub}
          </p>
        </div>

        <div
          id="about-cert-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {t.certs.map((item) => (
            <div
              key={item.title}
              style={{
                background: colors.white,
                borderRadius: '12px',
                padding: '28px 20px',
                textAlign: 'center',
                border: `1px solid ${colors.border}`,
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '12px',
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: colors.black,
                  marginBottom: '8px',
                  margin: '0 0 8px 0',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: colors.gray,
                  lineHeight: '1.6',
                  marginBottom: '14px',
                  margin: '0 0 14px 0',
                }}
              >
                {item.subtitle}
              </p>
              <button
                style={{
                  fontSize: '12px',
                  padding: '6px 16px',
                  background: 'none',
                  border: `1px solid ${colors.primary}`,
                  color: colors.primary,
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.primary;
                  e.currentTarget.style.color = colors.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = colors.primary;
                }}
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 数据统计 */}
      <section
        style={{
          background: colors.white,
          padding: '64px 5%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            maxWidth: '900px',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          {t.stats.map((item) => (
            <div
              key={item.label}
              style={{
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: colors.primary,
                  marginBottom: '8px',
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: colors.gray,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: '#F5F0E8' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0A1E3F', textAlign: 'center', marginBottom: '40px' }}>{t.faqTitle}</h2>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": t.faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          }) }} />
          {t.faqs.map((item, index) => (
            <details key={index} style={{ borderBottom: '1px solid #E8E4DC', padding: '20px 0' }}>
              <summary style={{ fontSize: '15px', fontWeight: 600, color: '#0A1E3F', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                {item.q}
                <span style={{ color: '#C9A84C', fontSize: '20px', marginLeft: '12px' }}>+</span>
              </summary>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.7, marginTop: '16px' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 底部CTA */}
      <section
        style={{
          background: colors.black,
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: colors.white,
            marginBottom: '16px',
            margin: '0 0 16px 0',
          }}
        >
          {t.ctaTitle}
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: colors.white,
            opacity: 0.7,
            marginBottom: '32px',
            margin: '0 0 32px 0',
          }}
        >
          {t.ctaSub}
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/contact"
            style={{
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 32px',
              background: colors.primary,
              color: colors.white,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {t.ctaBtn1}
          </Link>
          <Link
            href="/compare"
            style={{
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 32px',
              background: 'transparent',
              color: colors.white,
              border: `2px solid ${colors.white}`,
              borderRadius: '8px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {t.ctaBtn2}
          </Link>
        </div>
      </section>
    </div>
  );
}
