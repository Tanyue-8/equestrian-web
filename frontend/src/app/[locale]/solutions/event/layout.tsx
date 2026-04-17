import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '展览与体验活动解决方案 | 超强引流·快速部署 | 模拟马®',
  description: '为展会、品牌活动和体验营提供马术模拟器解决方案。超强引流吸客，快速部署即插即用，专业运营支持。',
  keywords: ['exhibition horse riding experience', 'event simulator rental', '展览马术体验活动', 'equestrian simulator rental', 'horse simulator hire', 'riding simulator for events'],
  openGraph: { title: '展览与体验活动解决方案 | 模拟马®', description: '为展览和活动提供马术模拟器解决方案，超强引流。', url: 'https://www.equestrian-simulators.com/solutions/event', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '展览与体验活动解决方案' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '展览与体验活动解决方案 | 模拟马®', description: '为展览和活动提供马术模拟器解决方案。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/solutions/event' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }