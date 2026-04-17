import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatButton";

export const metadata: Metadata = {
  title: {
    default: 'Equestrian Simulators | 模拟马® 专业马术模拟器',
    template: '%s | Equestrian Simulators',
  },
  description: '广东探月教育设备有限公司，模拟马®品牌制造商。专业马术模拟器CE认证，获香港赛马会HKJC和RDA官方认可。适用于训练、教育、康复和骑师训练场景。',
  keywords: ['equestrian simulator', 'horse simulator', 'dressage simulator', 'riding simulator', '马术模拟器', '模拟马', 'equestrian training equipment', 'indoor horse riding training equipment', 'indoor equestrian training'],
  openGraph: {
    title: 'Equestrian Simulators | 模拟马® 专业马术模拟器',
    description: '专业马术模拟器CE认证，获香港赛马会HKJC和RDA官方认可。适用于训练、教育、康复和骑师训练场景。',
    url: 'https://www.equestrian-simulators.com',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '模拟马®专业马术模拟器' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equestrian Simulators | 模拟马® 专业马术模拟器',
    description: '专业马术模拟器CE认证，获香港赛马会HKJC和RDA官方认可。',
    images: ['https://www.equestrian-simulators.com/images/logo02.png'],
  },
  alternates: { canonical: 'https://www.equestrian-simulators.com' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

// RTL languages
const rtlLocales = ['ar'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 直接根据locale加载messages，不依赖getMessages()
  // 修复：Next.js 15+ 中 getMessages() 依赖的 requestLocale 返回 undefined
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const isRTL = rtlLocales.includes(locale);

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} id="html-root" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Equestrian Simulators",
              "alternateName": ["模拟马", "广东探月教育设备有限公司", "EQUESTRIAN SIMULATORS"],
              "url": "https://www.equestrian-simulators.com",
              "logo": "https://www.equestrian-simulators.com/images/logo02.png",
              "description": "Professional equestrian simulators for training, education, rehabilitation and jockey performance. Manufacturer trusted by the Hong Kong Jockey Club, Hong Kong RDA, and universities across Asia.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "info@equestrian-simulators.com",
                "availableLanguage": ["English", "Chinese", "Spanish", "Japanese", "Arabic", "Korean", "German"]
              },
              "areaServed": "Worldwide",
              "sameAs": [
                "https://www.youtube.com/@equestrian-simulators",
                "https://www.tiktok.com/@equestrian_simulators"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "-apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: '#393C41', background: '#fff' }}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Footer />
          <FloatButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
