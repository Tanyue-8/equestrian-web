import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '产品对比 | MS.30P vs MS.30 vs MS.20 | Equestrian Simulators',
  description: '对比模拟马三款产品：MS.30P职业级（HKJC认可）、MS.30教学级（RDA认可）、MS.20竞速级。全面对比步态模拟、传感器、认证、规格参数，找到最适合您的马术模拟器。',
  keywords: [
    'equestrian simulator comparison',
    'MS.30P vs MS.30 vs MS.20',
    'dressage simulator vs education simulator',
    'horse simulator buyer guide',
    'equestrian simulator specifications',
    '马术模拟器对比',
    '模拟马型号选择',
    'which equestrian simulator to buy',
    'horse riding simulator price',
    'equestrian simulator cost',
    'how much does a horse simulator cost',
    'horse simulator for sale',
    'buy equestrian simulator',
    'equestrian simulator supplier',
  ],
  openGraph: {
    title: '产品对比 | MS.30P vs MS.30 vs MS.20',
    description: '全面对比三款专业马术模拟器，找到最适合您机构需求的款型。',
    url: 'https://www.equestrian-simulators.com/compare',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/logo02.png', width: 1200, height: 630, alt: '模拟马产品对比' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '产品对比 | MS.30P vs MS.30 vs MS.20',
    description: '全面对比三款专业马术模拟器，找到最适合您机构需求的款型。',
  },
  alternates: {
    canonical: 'https://www.equestrian-simulators.com/compare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between MS.30P and MS.30?", "acceptedAnswer": { "@type": "Answer", "text": "The MS.30P is a professional simulator for dressage and show jumping with biomechanical sensing, CE certified. The MS.30 is an educational pony simulator for beginners and schools, also CE certified." } },
          { "@type": "Question", "name": "Which simulator is right for my school?", "acceptedAnswer": { "@type": "Answer", "text": "For school programs and beginner training, the MS.30 is recommended. For professional training centers, the MS.30P is ideal." } }
        ]
      }) }} />
      {children}
    </>
  );
}