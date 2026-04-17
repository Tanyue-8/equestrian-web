import { getProductBySlugFromAPI } from '@/lib/api';
import type { ProductData } from '@/lib/api';
import { notFound } from 'next/navigation';
import MS20Content from './MS20Content';

// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function MS20Page({ params }: PageProps) {
  const { locale } = await params;
  const product = await getProductBySlugFromAPI('racehorse-ms20', locale);

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
            "name": "MS.20 Jockey Training Equestrian Simulator",
            "description": "Professional jockey training and racehorse speed simulator. Pneumatic saddle system, 200KG lightweight design, for jockey training centers, racecourses and exhibitions.",
            "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
            "category": "Equestrian Training Equipment",
            "keywords": "jockey training simulator, racehorse simulator, gallop simulator, speed equestrian simulator, horse racing simulator",
            "audience": { "@type": "Audience", "audienceType": "Jockey training centers, racecourses, government institutions, exhibitions, amusement parks" },
            "image": [
              "https://www.equestrian-simulators.com/images/ms20.png",
              "https://www.equestrian-simulators.com/images/ms20-immersive.jpg",
              "https://www.equestrian-simulators.com/images/ms20-gallop.jpg"
            ]
          })
        }}
      />

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "MS.20最大速度是多少？", "acceptedAnswer": { "@type": "Answer", "text": "MS.20采用专业气动鞍座系统，最大速度可达30km/h，支持速度0-30km/h无级可调，可精确模拟不同阶段的赛马速度训练。" } },
          { "@type": "Question", "name": "MS.20和MS.30P有什么区别？", "acceptedAnswer": { "@type": "Answer", "text": "MS.20是专业赛马速度模拟器，采用气动鞍座系统，重量仅200KG，专为骑师训练设计；MS.30P是盛装舞步模拟器，采用机械臂系统，支持Piaffe、Passage等高阶动作，用于盛装舞步和障碍赛训练。" } },
          { "@type": "Question", "name": "MS.20适合哪些使用场景？", "acceptedAnswer": { "@type": "Answer", "text": "MS.20适合赛马场、骑师训练中心、政府机构、展览展示、游乐园等场景，特别是需要专业骑师速度训练的场所。" } },
          { "@type": "Question", "name": "安装MS.20需要什么场地条件？", "acceptedAnswer": { "@type": "Answer", "text": "需要最低天花板高度≥3000mm，标准220V/2.2KW电源，整机尺寸1850×1020×1650mm，重量200KG，承载90KG。侧面通道预留≥300mm，前后通道预留≥500mm。" } },
          { "@type": "Question", "name": "质保和售后服务包含什么？", "acceptedAnswer": { "@type": "Answer", "text": "提供1年整机质保，含免费一次上门安装及现场培训，7×24小时远程技术支持，质保期内软件升级免费。" } }
        ]
      }) }} />

      <MS20Content product={product as ProductData} locale={locale} />
    </>
  );
}