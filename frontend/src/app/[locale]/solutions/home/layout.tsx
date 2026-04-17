import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '家庭与个人骑手解决方案 | 室内安装·自主训练 | 模拟马®',
  description: '为家庭和个人骑手提供室内马术模拟器解决方案。室内安装，全家共用，自主训练进阶，让马术训练不再受场地限制。',
  keywords: ['home horse riding simulator', 'personal equestrian training', '家庭马术模拟器'],
  openGraph: { title: '家庭与个人骑手解决方案 | 模拟马®', description: '为家庭和个人提供室内马术模拟器解决方案。', url: 'https://www.equestrian-simulators.com/solutions/home', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '家庭与个人骑手解决方案' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '家庭与个人骑手解决方案 | 模拟马®', description: '为家庭和个人提供室内马术模拟器解决方案。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/solutions/home' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }