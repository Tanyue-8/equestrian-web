import { getProductBySlugFromAPI } from '@/lib/api';
import type { ProductData } from '@/lib/api';
import MS30PContent from './MS30PContent';

// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function MS30PPage({ params }: PageProps) {
  const { locale } = await params;
  const product = await getProductBySlugFromAPI('horse-ms30p', locale);

  return (
    <>
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "MS.30P Professional Equestrian Simulator",
            "description": "Professional equestrian simulator for dressage (Piaffe, Passage), show jumping and eventing. Trusted by Hong Kong Jockey Club. CE certified.",
            "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
            "category": "Equestrian Training Equipment",
            "award": "Hong Kong Jockey Club Official Recognition",
            "keywords": "dressage simulator, show jumping simulator, eventing simulator, Piaffe simulator, Passage simulator, professional equestrian simulator",
            "audience": { "@type": "Audience", "audienceType": "Professional riders, equestrian clubs, jockey training centers" },
            "image": [
              "https://www.equestrian-simulators.com/images/ms30p.png",
              "https://www.equestrian-simulators.com/images/ms30p-immersive.jpg",
              "https://www.equestrian-simulators.com/images/ms30p-gallop.jpg"
            ]
          })
        }}
      />

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "MS.30P适合哪些训练项目？", "acceptedAnswer": { "@type": "Answer", "text": "MS.30P支持盛装舞步（含Piaffe/Passage高阶动作）、障碍赛、综合马术三项赛模拟训练，适合专业俱乐部、职业教练及竞技骑手使用。" } },
          { "@type": "Question", "name": "MS.30P和MS.30有什么区别？", "acceptedAnswer": { "@type": "Answer", "text": "MS.30P是职业级产品，配备高精度生物力学传感器，支持Piaffe、Passage等高阶盛装舞步动作，获香港赛马会HKJC官方认可；MS.30是教学款，步态温和，支持多机联网，适合学校批量教学，获香港RDA认可。" } },
          { "@type": "Question", "name": "安装MS.30P需要什么场地条件？", "acceptedAnswer": { "@type": "Answer", "text": "需要最低天花板高度≥3000mm，标准220V/4.8KW电源，整机尺寸2263×1122×1750mm，重量450KG，承载98KG。侧面通道预留≥300mm，前后通道预留≥500mm。整机不拆卸进入需门框宽度≥1222mm，拆卸后≥800mm。" } },
          { "@type": "Question", "name": "MS.30P有哪些认证？", "acceptedAnswer": { "@type": "Answer", "text": "MS.30P通过CE国际认证（RED/EMC/LVD），获香港赛马会HKJC官方认可，持有多项国家专利，符合国际马术训练设备安全标准。" } },
          { "@type": "Question", "name": "质保和售后服务包含什么？", "acceptedAnswer": { "@type": "Answer", "text": "提供1年整机质保，含免费一次上门安装及现场培训，7×24小时远程技术支持，质保期内软件升级免费。" } }
        ]
      }) }} />

      <MS30PContent product={product as ProductData} locale={locale} />
    </>
  );
}