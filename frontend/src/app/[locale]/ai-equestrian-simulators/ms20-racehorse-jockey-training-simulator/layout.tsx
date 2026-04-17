import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MS.20 Jockey Training Simulator | Racehorse Speed Simulator | Equestrian Simulators',
  description: 'MS.20 is a professional jockey training simulator with Pneumatic Acceleration — industrial abdominal sensors detect leg squeeze and surge force for linear speed feedback. Walk/Canter/Gallop gaits, Monkey Style posture, 200KG lightweight design.',
  keywords: ['MS.20', 'jockey training simulator', 'racehorse simulator', 'gallop simulator', 'pneumatic acceleration', '骑师训练模拟器', '气压推浪感应', '竞速马术模拟器'],
  openGraph: {
    title: 'MS.20 骑师训练模拟器 | 气压推浪感应 | 赛马竞速',
    description: 'MS.20专业骑师训练模拟器，气压推浪感应系统，智能识别夹腿与推浪力度，线性加速反馈，Walk/Canter/Gallop竞速三步态，蒙基式骑姿训练。',
    url: 'https://www.equestrian-simulators.com/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator',
    siteName: 'Equestrian Simulators',
    images: [{ url: 'https://www.equestrian-simulators.com/images/ms20.png', width: 1200, height: 630, alt: 'MS.20竞速型马术模拟器' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'MS.20 竞速马术模拟器 | 骑师训练',
    description: 'MS.20专业骑师训练模拟器，气压推浪感应，Walk/Canter/Gallop竞速三步态，蒙基式骑姿。',
    images: ['https://www.equestrian-simulators.com/images/ms20.png'],
  },
  alternates: { canonical: 'https://www.equestrian-simulators.com/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const } },
};

export default function MS20Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "MS.20 Jockey Training Simulator",
        "image": ["https://www.equestrian-simulators.com/images/ms20.png"],
        "description": "Professional jockey training simulator with Pneumatic Acceleration system — industrial abdominal sensors detect leg squeeze and surge force, providing linear acceleration feedback. Walk/Canter/Gallop racing gaits, Monkey Style riding posture, 200KG lightweight design. Designed exclusively for professional jockey training.",
        "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
        "keywords": "jockey training simulator, racehorse simulator, horse riding simulator price"
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the MS.20 jockey training simulator?", "acceptedAnswer": { "@type": "Answer", "text": "The MS.20 is a professional jockey training simulator featuring Pneumatic Acceleration — industrial-grade abdominal pneumatic sensors that detect the jockey's leg squeeze and surge force in real time, delivering linear acceleration feedback that replicates a real racehorse's response. It supports Walk, Canter, and Gallop gaits and is designed for the Monkey Style riding posture used by professional jockeys." } },
          { "@type": "Question", "name": "How much does the MS.20 simulator cost?", "acceptedAnswer": { "@type": "Answer", "text": "Contact us for a custom quote. Submit an inquiry on our contact page for a response within 24 hours." } }
        ]
      }) }} />
      {children}
    </>
  );
}