import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 | 广东探月教育设备有限公司 | 模拟马®',
  description: '广东探月教育设备有限公司，模拟马®品牌的设计、开发与制造商。自2017年探索启程，2021年正式成立，通过CE认证，获香港赛马会HKJC和香港伤健策骑协会RDA认可，全球500+装机。',
  keywords: [
    'equestrian simulator manufacturer',
    'Guangdong Tanyue Education Equipment',
    'horse simulator CE certified',
    'HKJC approved equestrian simulator',
    'RDA approved horse simulator',
    '模拟马制造商',
    '广东探月教育设备',
    '马术模拟器品牌',
  ],
  openGraph: {
    title: '关于模拟马® | 广东探月教育设备有限公司',
    description: '用科技推动马术进步，让人与马连接更自由。自2017年探索至今，获HKJC和RDA官方认可，全球500+装机。',
    url: 'https://www.equestrian-simulators.com/about',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '模拟马®品牌Logo' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于模拟马® | 广东探月教育设备有限公司',
    description: '用科技推动马术进步，让人与马连接更自由。自2017年探索至今，获HKJC和RDA官方认可，全球500+装机。',
  },
  alternates: { canonical: 'https://www.equestrian-simulators.com/about' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}