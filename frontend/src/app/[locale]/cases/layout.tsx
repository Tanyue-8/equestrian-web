import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '客户案例 | 香港赛马会HKJC · RDA · 高校马术教育 | Equestrian Simulators',
  description: '模拟马已服务香港赛马会HKJC深圳训练中心、香港伤健策骑协会RDA、四川旅游学院等机构。了解专业马术模拟器在职业训练、康复治疗、高校教育场景的真实应用案例。',
  keywords: [
    'equestrian simulator case study',
    'HKJC equestrian simulator',
    'RDA horse simulator rehabilitation',
    'university equestrian training simulator',
    'horse simulator customer cases',
    '马术模拟器案例',
    '香港赛马会模拟马',
    'equestrian simulator for schools',
    'equestrian simulator UK',
    'horse simulator Australia',
    'equestrian simulator USA',
    'horse riding simulator Middle East',
    'equestrian simulator Qatar',
  ],
  openGraph: {
    title: '客户案例 | 香港赛马会HKJC · RDA · 高校马术教育',
    description: '了解模拟马如何服务全球领先机构，在职业训练、康复治疗、高校教育场景创造真实价值。',
    url: 'https://www.equestrian-simulators.com/cases',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/case-hkjc.jpg', width: 1200, height: 630, alt: '香港赛马会HKJC模拟马训练案例' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '客户案例 | 香港赛马会HKJC · RDA · 高校马术教育',
    description: '了解模拟马如何服务全球领先机构，在职业训练、康复治疗、高校教育场景创造真实价值。',
    images: ['https://www.equestrian-simulators.com/images/case-hkjc.jpg'],
  },
  alternates: {
    canonical: 'https://www.equestrian-simulators.com/cases',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}