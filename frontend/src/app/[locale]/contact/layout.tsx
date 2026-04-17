import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Quote for Equestrian Simulators | Equestrian Simulators',
  description: 'Contact our team to get pricing, customized solutions and demo appointments for professional equestrian simulators. We reply within 24 hours.',
  keywords: ['equestrian simulator quote', 'horse simulator inquiry', '马术模拟器报价', '模拟马联系', 'horse simulator for sale', 'equestrian simulator supplier China', 'buy horse riding simulator'],
  openGraph: {
    title: '联系我们 | 获取模拟马®报价',
    description: '联系我们获取专属方案和报价，24小时内回复。支持询盘表单、WhatsApp、邮件。',
    url: 'https://www.equestrian-simulators.com/contact',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '模拟马联系我们' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: '联系我们 | 获取模拟马®报价',
    description: '联系我们获取专属方案和报价，24小时内回复。',
  },
  alternates: { canonical: 'https://www.equestrian-simulators.com/contact' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}