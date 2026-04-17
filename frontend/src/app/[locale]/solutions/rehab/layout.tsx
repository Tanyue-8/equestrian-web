import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '康复治疗与马术疗愈解决方案 | RDA认证·精准参数可调 | 模拟马®',
  description: '为康复中心和治疗机构提供马术疗愈模拟器解决方案。RDA国际认证，生物力学等效验证，精准参数可调，支持临床报告。',
  keywords: ['hippotherapy simulator', 'rehabilitation horse riding', '马术治疗模拟器', 'equestrian simulator therapy', 'horse therapy simulator', 'therapeutic riding simulator'],
  openGraph: { title: '康复治疗与马术疗愈解决方案 | 模拟马®', description: '为康复机构提供马术疗愈模拟器解决方案，RDA认证。', url: 'https://www.equestrian-simulators.com/solutions/rehab', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '康复治疗与马术疗愈解决方案' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '康复治疗与马术疗愈解决方案 | 模拟马®', description: '为康复机构提供马术疗愈模拟器解决方案。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/solutions/rehab' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }