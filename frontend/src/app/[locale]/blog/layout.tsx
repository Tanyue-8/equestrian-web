import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '行业洞察 | 马术训练技术·行业趋势·模拟器应用 | 模拟马',
  description: '模拟马官方博客：马术模拟器训练技术解析、行业趋势洞察、产品选型指南。',
  keywords: ['equestrian simulator training', 'horse riding technology', '马术模拟器训练', '马术行业趋势'],
  openGraph: { 
    title: '行业洞察 | 模拟马博客', 
    description: '马术模拟器训练技术解析、行业趋势洞察、产品选型指南', 
    url: 'https://www.equestrian-simulators.com/blog', 
    siteName: 'Equestrian Simulators', 
    images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '模拟马博客' }], 
    locale: 'zh_CN', 
    type: 'website' 
  },
  twitter: { card: 'summary_large_image' as const, title: '行业洞察 | 模拟马博客', description: '马术模拟器训练技术解析、行业趋势洞察、产品选型指南' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/blog' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }