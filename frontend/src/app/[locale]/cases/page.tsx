// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

import { casesTranslations } from '@/data/cases_i18n';
import CasesContent from './CasesContent';

interface CasesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function CasesPage({ params }: CasesPageProps) {
  const { locale } = await params;
  const colors = {
    black: '#0A1E3F',
    gold: '#C9A84C',
    purple: '#7B4FBF',
    grayBg: '#F5F0E8',
    text: '#1C2333',
    textLight: '#5A6478',
  };

  // Get translation data, fallback to English if locale not supported
  const t = casesTranslations[locale as keyof typeof casesTranslations] || casesTranslations.en;

  // Hardcoded data (not translated)
  const badgeColors = [colors.gold, colors.purple, colors.textLight, '#2E5E8E'];
  const buttonColors = [colors.gold, colors.purple, colors.gold, colors.gold];
  const buttonLinks = [
    '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator',
    '/ai-equestrian-simulators/ms30-education-pony-simulator',
    '/contact',
    '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator',
  ];
  const imagesList = [
    [{ src: '/images/case-hkjc.jpg', alt: 'HKJC training' }],
    [
      { src: '/images/case-rda.png', alt: 'RDA training' },
      { src: '/images/case-rda-2.jpg', alt: 'RDA Tuen Mun facility' },
      { src: '/images/case-rda-3.jpg', alt: 'RDA Pok Fu Lam facility' }
    ],
    [{ src: '/images/case-university.jpg', alt: 'University training' }],
    [{ src: '/images/case-military.jpg', alt: 'Military training' }],
  ];

  // Combine translation data with hardcoded data
  const cases = t.cases.map((caseData, index) => ({
    ...caseData,
    badgeColor: badgeColors[index],
    images: imagesList[index],
    buttonColor: buttonColors[index],
    buttonLink: buttonLinks[index],
  }));

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Customer Cases | Equestrian Simulators",
            "description": "Real-world applications of professional equestrian simulators at HKJC, RDA Hong Kong and universities. Verified case studies for professional training, rehabilitation and education.",
            "url": "https://www.equestrian-simulators.com/cases",
            "publisher": {
              "@type": "Organization",
              "name": "Equestrian Simulators",
              "url": "https://www.equestrian-simulators.com",
              "logo": { "@type": "ImageObject", "url": "https://www.equestrian-simulators.com/images/logo02.png" }
            },
            "mainEntity": [
              {
                "@type": "Article",
                "headline": "Hong Kong Jockey Club — Shenzhen Training Center",
                "description": "HKJC deployed MS.30P professional equestrian simulator for biomechanical feedback and gait analysis training.",
                "image": "https://www.equestrian-simulators.com/images/case-hkjc.jpg",
                "about": { "@type": "Organization", "name": "Hong Kong Jockey Club", "url": "https://www.hkjc.com" }
              },
              {
                "@type": "Article",
                "headline": "Hong Kong RDA — Therapeutic Riding Program",
                "description": "RDA Hong Kong deployed MS.30 simulator for safe therapeutic riding for people with disabilities.",
                "image": "https://www.equestrian-simulators.com/images/case-rda.png",
                "about": { "@type": "Organization", "name": "Riding for the Disabled Association Hong Kong" }
              },
              {
                "@type": "Article",
                "headline": "University Equestrian Education Programs",
                "description": "Multiple universities including Sichuan Tourism University deployed MS.30 multi-unit network for group equestrian education.",
                "image": "https://www.equestrian-simulators.com/images/case-university.jpg",
                "about": { "@type": "EducationalOrganization", "name": "Sichuan Tourism University" }
              }
            ]
          })
        }}
      />

      <CasesContent
        locale={locale}
        colors={colors}
        hero={t.hero}
        intro={t.intro}
        caseLabels={t.caseLabels}
        cases={cases}
        whyChooseUs={t.whyChooseUs}
      />
    </>
  );
}
