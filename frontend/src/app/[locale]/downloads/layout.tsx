import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '资料下载中心 | 产品手册·技术规格·CE认证 | 模拟马®',
  description: '免费下载模拟马®全系产品手册、技术规格书、CE认证文件及解决方案资料。填写邮箱，PDF自动发送，24小时内到达。',
  keywords: ['equestrian simulator brochure', 'horse simulator spec sheet', 'equestrian simulator CE certificate', '马术模拟器产品手册', '模拟马规格书下载'],
  openGraph: { title: '资料下载中心 | 模拟马®', description: '免费下载产品手册、技术规格、CE认证文件。', url: 'https://www.equestrian-simulators.com/downloads', siteName: 'Equestrian Simulators', images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '模拟马资料下载' }], locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image' as const, title: '资料下载中心 | 模拟马®', description: '免费下载产品手册、技术规格、CE认证文件。' },
  alternates: { canonical: 'https://www.equestrian-simulators.com/downloads' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }