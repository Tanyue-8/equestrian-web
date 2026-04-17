import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dressage, Jumping & Eventing Simulator | MS.30P Professional Equestrian Simulator',
  description: 'MS.30P is a professional equestrian simulator for dressage, show jumping and eventing training. Supports Piaffe, Passage and advanced biomechanical feedback. Trusted by Hong Kong Jockey Club.',
  keywords: ['MS.30P', 'dressage simulator', 'show jumping simulator', 'Piaffe simulator', 'HKJC equestrian simulator', 'professional equestrian simulator', '盛装舞步模拟器'],
  openGraph: {
    title: 'MS.30P 专业马术模拟器 | 盛装舞步·HKJC认可',
    description: 'MS.30P职业级马术模拟器，CE认证，获香港赛马会HKJC官方认可，支持Piaffe/Passage高阶盛装舞步。',
    url: 'https://www.equestrian-simulators.com/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/ms30p.png', width: 1200, height: 630, alt: 'MS.30P专业马术模拟器' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'MS.30P 专业马术模拟器 | 盛装舞步·HKJC认可',
    description: 'MS.30P职业级马术模拟器，CE认证，获香港赛马会HKJC官方认可。',
    images: ['https://www.equestrian-simulators.com/images/ms30p.png'],
  },
  alternates: { canonical: 'https://www.equestrian-simulators.com/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function MS30PLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "MS.30P Professional Equestrian Simulator",
        "image": ["https://www.equestrian-simulators.com/images/ms30p.png"],
        "description": "Professional dressage and show jumping simulator with biomechanical sensing. CE certified. Trusted by Hong Kong Jockey Club.",
        "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
        "award": "Hong Kong Jockey Club Official Recognition",
        "keywords": "dressage simulator, professional equestrian simulator, horse riding simulator for schools"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the MS.30P equestrian simulator?", "acceptedAnswer": { "@type": "Answer", "text": "The MS.30P is a professional-grade equestrian simulator for dressage, show jumping and eventing. It features biomechanical sensing and is CE certified." } },
          { "@type": "Question", "name": "Is the MS.30P CE certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the MS.30P holds CE certification covering RED, EMC and LVD directives." } },
          { "@type": "Question", "name": "Who uses the MS.30P?", "acceptedAnswer": { "@type": "Answer", "text": "Used by the Hong Kong Jockey Club, military equestrian programs, universities and professional training centers across Asia." } }
        ]
      }) }} />
      {children}
    </>
  );
}