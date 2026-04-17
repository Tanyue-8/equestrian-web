import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '学校与教育机构解决方案 | 安全合规·标准化课程 | 模拟马®',
  description: '为K12学校和高校提供马术教育模拟器解决方案。零骑马风险，标准化课程体系，多所高校验证，支持学分认定。',
  keywords: ['school equestrian program', 'university horse riding simulator', '学校马术课程模拟器', 'indoor horse riding training equipment', 'horse riding simulator for schools', 'equestrian simulator for beginners', 'beginner horse riding simulator'],
  openGraph: { title: '学校与教育机构解决方案 | 模拟马®', description: '为学校提供马术教育模拟器解决方案，安全合规，标准化课程。', url: 'https://www.equestrian-simulators.com/solutions/education', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '学校与教育机构解决方案' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '学校与教育机构解决方案 | 模拟马®', description: '为学校提供马术教育模拟器解决方案。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/solutions/education' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }