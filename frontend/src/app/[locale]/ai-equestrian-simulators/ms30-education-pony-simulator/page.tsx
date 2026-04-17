import { getProductBySlugFromAPI } from '@/lib/api';
import type { ProductData } from '@/lib/api';
import { notFound } from 'next/navigation';
import MS30Content from './MS30Content';

// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function MS30Page({ params }: PageProps) {
  const { locale } = await params;
  const product = await getProductBySlugFromAPI('pony-ms30', locale);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "MS.30 Education Equestrian Simulator",
            "description": "Multi-rider networked equestrian simulator for riding schools, universities and rehabilitation centers. Trusted by Hong Kong RDA. CE certified.",
            "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
            "category": "Equestrian Training Equipment",
            "award": "Hong Kong RDA Official Recognition",
            "keywords": "equestrian simulator for schools, riding school simulator, pony simulator, rehabilitation riding simulator, group equestrian training, RDA simulator",
            "audience": { "@type": "Audience", "audienceType": "Riding schools, universities, rehabilitation centers, equestrian clubs" },
            "image": [
              "https://www.equestrian-simulators.com/images/ms30.png",
              "https://www.equestrian-simulators.com/images/ms30-networked-classroom.jpg",
              "https://www.equestrian-simulators.com/images/ms30-group-training.jpg",
              "https://www.equestrian-simulators.com/images/ms30-university-lab.jpg",
              "https://www.equestrian-simulators.com/images/ms30-full-class.jpg"
            ]
          })
        }}
      />

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "MS.30支持多机联网吗？", "acceptedAnswer": { "@type": "Answer", "text": "是的，MS.30支持3+台设备联网教学，教练可在主控端实时监控学员姿态，同步控制所有设备，实现同步教学。" } },
          { "@type": "Question", "name": "MS.30和MS.30P有什么区别？", "acceptedAnswer": { "@type": "Answer", "text": "MS.30是教学款，步态温和，支持多机联网，适合学校批量教学，获香港RDA认可；MS.30P是职业级产品，配备高精度生物力学传感器，支持Piaffe、Passage等高阶盛装舞步动作，获香港赛马会HKJC官方认可。" } },
          { "@type": "Question", "name": "MS.30适合康复治疗吗？", "acceptedAnswer": { "@type": "Answer", "text": "是的，MS.30专为康复设计，步态温和稳定，支持速度0-15km/h可调，已获香港RDA官方认可，用于特殊人群康复训练。" } },
          { "@type": "Question", "name": "安装MS.30需要什么场地条件？", "acceptedAnswer": { "@type": "Answer", "text": "需要最低天花板高度≥3000mm，标准220V/2.2KW电源，整机尺寸2100×1020×1650mm，重量380KG，承载90KG。侧面通道预留≥300mm，前后通道预留≥500mm。" } },
          { "@type": "Question", "name": "质保和售后服务包含什么？", "acceptedAnswer": { "@type": "Answer", "text": "提供1年整机质保，含免费一次上门安装及现场培训，7×24小时远程技术支持，质保期内软件升级免费。" } }
        ]
      }) }} />

      <MS30Content product={product as ProductData} locale={locale} />
    </>
  );
}