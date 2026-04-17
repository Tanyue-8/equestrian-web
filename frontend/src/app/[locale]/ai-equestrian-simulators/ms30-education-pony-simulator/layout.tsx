import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pony Riding Simulator for Schools & Riding Clubs | MS.30 Education Equestrian Simulator',
  description: 'MS.30 is a multi-rider networked equestrian simulator for riding schools, universities and rehabilitation centers. Trusted by Hong Kong RDA. Supports group teaching and digital training management.',
  keywords: ['MS.30', 'education equestrian simulator', 'RDA horse simulator', 'multi-unit equestrian simulator', '教学马术模拟器', '马术进校园'],
  openGraph: {
    title: 'MS.30 教学型马术模拟器 | 多机组网·RDA认可',
    description: 'MS.30教学级马术模拟器，多机无限组网，CE认证，获香港RDA官方认可。',
    url: 'https://www.equestrian-simulators.com/ai-equestrian-simulators/ms30-education-pony-simulator',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/ms30.png', width: 1200, height: 630, alt: 'MS.30教学型马术模拟器' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'MS.30 教学型马术模拟器 | 多机组网·RDA认可',
    description: 'MS.30教学级马术模拟器，多机无限组网，CE认证，获香港RDA官方认可。',
    images: ['https://www.equestrian-simulators.com/images/ms30.png'],
  },
  alternates: { canonical: 'https://www.equestrian-simulators.com/ai-equestrian-simulators/ms30-education-pony-simulator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function MS30Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "MS.30 Education Pony Simulator",
        "image": ["https://www.equestrian-simulators.com/images/ms30.png"],
        "description": "Educational pony simulator for riding schools, universities and beginner training. CE certified.",
        "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
        "keywords": "equestrian simulator for beginners, horse riding simulator for schools, indoor horse riding training equipment"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the MS.30 pony simulator?", "acceptedAnswer": { "@type": "Answer", "text": "The MS.30 is an educational equestrian simulator for riding schools, universities and beginner training. CE certified, suitable for ages 8 and above." } },
          { "@type": "Question", "name": "Is the MS.30 suitable for children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the MS.30 is suitable for children aged 8 and above and widely used in school equestrian programs." } }
        ]
      }) }} />
      {children}
    </>
  );
}