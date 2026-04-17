import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '马术俱乐部解决方案 | 全天候训练·数据化管理 | 模拟马®',
  description: '为马术俱乐部和专业训练中心提供模拟马解决方案。全天候训练，数据化报告，日均服务8-12名学员。HKJC官方认可，ROI 12-24个月内回收。',
  keywords: ['equestrian club simulator', 'horse training center solution', '马术俱乐部模拟器'],
  openGraph: { title: '马术俱乐部解决方案 | 模拟马®', description: '为马术俱乐部提供模拟马解决方案，HKJC官方认可。', url: 'https://www.equestrian-simulators.com/solutions/club', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '马术俱乐部解决方案' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '马术俱乐部解决方案 | 模拟马®', description: '为马术俱乐部提供模拟马解决方案。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/solutions/club' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }