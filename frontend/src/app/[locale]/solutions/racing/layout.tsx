import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '赛马与骑师训练解决方案 | 高强度训练·HKJC验证 | 模拟马®',
  description: '为赛马俱乐部和骑师学校提供专业训练模拟器解决方案。HKJC实战验证，高重复无疲劳训练，实时生物力学反馈。',
  keywords: ['jockey training simulator', 'racehorse training system', '赛马骑师训练模拟器'],
  openGraph: { title: '赛马与骑师训练解决方案 | 模拟马®', description: '为赛马俱乐部提供专业训练模拟器解决方案，HKJC验证。', url: 'https://www.equestrian-simulators.com/solutions/racing', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '赛马与骑师训练解决方案' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '赛马与骑师训练解决方案 | 模拟马®', description: '为赛马俱乐部提供专业训练模拟器解决方案。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/solutions/racing' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }