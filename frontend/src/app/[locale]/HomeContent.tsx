'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface ProductData {
  slug: string;
  model: string;
  name: string;
  description: string;
  featured_image?: string | null;
}

interface HomeContentProps {
  products: ProductData[];
  locale: string;
}
import ProductsSection from '@/components/ProductsSection';

const PARTNERS = [
  { zh: '四川旅游学院',         en: 'Sichuan Tourism University',                    logo: '/images/partner-sctu.png' },
  { zh: '香港赛马会',           en: 'Hong Kong Jockey Club (HKJC)',                  logo: '/images/partner-hkjc.png' },
  { zh: '中国人民解放军',       en: "People's Liberation Army Cavalry",              logo: '/images/partner-pla.png' },
  { zh: '中山大学深圳附属学校', en: 'Sun Yat-sen University Shenzhen School',        logo: '/images/partner-sysu.png' },
  { zh: '新疆农业大学',         en: 'Xinjiang Agricultural University',               logo: '/images/partner-xjau.png' },
  { zh: '德保职业技术学院',     en: 'Debao Vocational and Technical College',        logo: '/images/partner-debao.png' },
  { zh: '深圳市马术协会',       en: 'Shenzhen Equestrian Association',               logo: '/images/partner-sz.png' },
  { zh: 'RDA残障骑术协会',      en: 'Hong Kong RDA',                                 logo: '/images/partner-rda.png' },
  { zh: '伊犁哈萨克自治州人民政府', en: 'Ili Kazakh Autonomous Prefecture Government', logo: '/images/partner-yili.png' },
];

export default function HomeContent({ products, locale }: HomeContentProps) {
  const t = useTranslations('home');
  const pName = (p: typeof PARTNERS[0]) => locale === 'zh' ? p.zh : p.en;
  const [productsIndex, setProductsIndex] = useState(0);
  const [scenesIndex, setScenesIndex] = useState(0);
  const [reviewsIndex, setReviewsIndex] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    '/images/hero-bg.jpg',
    '/images/hero-slide-1.png',
    '/images/hero-slide-2.webp',
    '/images/hero-slide-3.webp',
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Equestrian Simulators | 模拟马®",
  "url": "https://www.equestrian-simulators.com",
  "description": "Professional equestrian simulator manufacturer. CE certified. Recognized by HKJC and RDA.",
  "publisher": {
    "@type": "Organization",
    "name": "广东探月教育设备有限公司",
    "alternateName": "模拟马®",
    "url": "https://www.equestrian-simulators.com",
    "logo": { "@type": "ImageObject", "url": "https://www.equestrian-simulators.com/images/logo02.png" },
    "foundingDate": "2021",
    "address": { "@type": "PostalAddress", "addressCountry": "CN", "addressRegion": "Guangdong" },
    "award": ["CE Certification RED/EMC/LVD", "Hong Kong Jockey Club Official Recognition", "RDA Hong Kong Official Recognition"]
  }
}) }} />
      <style>{`
        @keyframes tcfloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .tc-float { animation: tcfloat 4s ease-in-out infinite; }
      `}</style>
      <main style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Hero Section */}
      <section
        id="hero-section"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        {/* 背景图片：cover填满整个容器，不变形 */}
        <img
          src={heroSlides[heroSlide]}
          alt={heroSlide === 0 ? "Professional equestrian simulators training facility - Equestrian Simulators" : heroSlide === 1 ? "Multiple equestrian simulators in group training session at riding school" : heroSlide === 2 ? "Equestrian Simulators at Hong Kong Jockey Club HKJC exhibition" : "MS.30P professional equestrian simulator showroom display"}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* 文字层：绝对定位叠在图片上，随容器等比缩放 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '0 4% 5% 4%',
          background: 'linear-gradient(to top, rgba(10,18,35,0.8) 0%, rgba(10,18,35,0.2) 50%, transparent 100%)',
        }}>
          {/* 手机端文字整体缩小50% */}
          <div id="hero-text-wrapper" className="md:scale-100" style={{ transformOrigin: 'bottom left' }}>
          {/* 金色小标题 */}
          <div style={{ marginBottom: '24px' }}>
            <span style={{ color: '#C9A84C', fontSize: '16px', fontWeight: 600, letterSpacing: '2px' }}>
              {t('hero.badge')}
            </span>
          </div>

          {/* 白色大标题 */}
          <h1 style={{ fontSize: 'clamp(14px, 4.5vw, 72px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1vw' }}>
            {t('hero.title1')}<br />
            <span style={{ color: '#C9A84C' }}>{t('hero.title2')}</span>
          </h1>

          {/* 白色副标题 */}
          <p style={{ fontSize: 'clamp(10px, 2vw, 20px)', color: 'rgba(255,255,255,0.85)', marginBottom: '2vw' }}>
            {t('hero.subtitle')}
          </p>

          {/* 三按钮 */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link href="/#products"
              className="w-full md:w-auto text-center text-xs md:text-base"
              style={{
                padding: '14px 32px',
                background: '#C9A84C',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t('hero.btnProducts')}
            </Link>
            <Link href="/cases"
              className="w-full md:w-auto text-center"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t('hero.btnCases')}
            </Link>
            <Link href="/contact"
              className="w-full md:w-auto text-center text-xs md:text-base"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t('hero.btnQuote')}
            </Link>
          </div>

          {/* 底部数据 */}
          <div className="grid grid-cols-2 md:flex gap-2 md:gap-10 mt-4 md:mt-10" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#C9A84C' }}>3</span>
              <span>{t('hero.stat1')}</span>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#C9A84C' }}>6+</span>
              <span>{t('hero.stat2')}</span>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#C9A84C' }}>10+</span>
              <span>{t('hero.stat3')}</span>
            </div>
            <div>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#C9A84C' }}>30+</span>
              <span>{t('hero.stat4')}</span>
            </div>
          </div>
          </div>

          {/* 轮播指示点 */}
          <div style={{ position: 'absolute', bottom: '32px', right: '48px', display: 'flex', gap: '8px', zIndex: 10 }}>
            {heroSlides.map((_, i) => (
              <div
                key={i}
                onClick={() => setHeroSlide(i)}
                style={{
                  width: i === heroSlide ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === heroSlide ? '#C9A84C' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 产品卡片区 */}
      <ProductsSection products={products} />

      {/* 为什么选择模拟马 */}
      <section style={{ padding: '60px 40px', background: '#0A1E3F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* 标题区 */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              {t('whyUs.title')}
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
              {t('whyUs.subtitle')}
            </p>
          </div>

          {/* 4列卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" style={{ display: 'grid' }}>
            {[
              { icon: '🛡️', title: t('whyUs.items.safe.title'), desc: t('whyUs.items.safe.desc') },
              { icon: '🌤️', title: t('whyUs.items.weather.title'), desc: t('whyUs.items.weather.desc') },
              { icon: '📊', title: t('whyUs.items.data.title'), desc: t('whyUs.items.data.desc') },
              { icon: '💰', title: t('whyUs.items.cost.title'), desc: t('whyUs.items.cost.desc') },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#F5F0E8',
                  borderRadius: '16px',
                  padding: '28px 20px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0A1E3F', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#666' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 全场景解决方案 */}
      <section style={{ padding: '60px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* 标题区 */}
          <div style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '700px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#0A1E3F', marginBottom: '16px' }}>
              {t('solutions.title')}
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              {t('solutions.subtitle')}
            </p>
          </div>

          {/* 场景数据 */}
          {(() => {
            const scenes = [
              { title: t('solutions.items.club.title'), bg: '/images/scenes/sc-club.png', desc: t('solutions.items.club.desc'), href: '/solutions/club' },
              { title: t('solutions.items.education.title'), bg: '/images/scenes/sc-edu.png', desc: t('solutions.items.education.desc'), href: '/solutions/education' },
              { title: t('solutions.items.rehab.title'), bg: '/images/scenes/sc-rehab.png', desc: t('solutions.items.rehab.desc'), href: '/solutions/rehab' },
              { title: t('solutions.items.racing.title'), bg: '/images/scenes/sc-racing.png', desc: t('solutions.items.racing.desc'), href: '/solutions/racing' },
              { title: t('solutions.items.home.title'), bg: '/images/scenes/sc-club2.png', desc: t('solutions.items.home.desc'), href: '/solutions/home' },
              { title: t('solutions.items.event.title'), bg: '/images/scenes/sc-exhibition.png', desc: t('solutions.items.event.desc'), href: '/solutions/event' },
            ];

            const cardsPerView = 4;
            const maxIndex = Math.max(0, scenes.length - cardsPerView);
            const canScrollLeft = scenesIndex > 0;
            const canScrollRight = scenesIndex < maxIndex;
            
            // RTL语言（阿拉伯语）需要反转transform方向
            const isRTL = locale === 'ar';
            const transformValue = isRTL 
              ? `translateX(calc(${scenesIndex * 25}% + ${scenesIndex * 6}px))`
              : `translateX(calc(-${scenesIndex * 25}% - ${scenesIndex * 6}px))`;

            return (
              <>
                {/* 卡片容器 */}
                <div className="hidden md:block" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                  {/* 轨道 */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      width: '100%',
                      transition: 'transform 0.4s ease',
                      transform: transformValue,
                    }}
                  >
                    {scenes.map((scene, index) => (
                      <Link key={index} href={scene.href} style={{ textDecoration: 'none', display: 'block', flex: '0 0 calc(25% - 18px)', minWidth: 'calc(25% - 18px)' }}>
                        <div
                          style={{
                            flex: '0 0 calc(25% - 18px)',
                            height: '320px',
                            borderRadius: '16px',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                          }}
                        >
                        <img
                          src={scene.bg}
                          alt={index === 0 ? "Equestrian simulator for riding clubs and training centers" : index === 1 ? "Equestrian simulator for schools and universities" : index === 2 ? "Rehabilitation equestrian simulator for therapy centers" : index === 3 ? "Jockey training equestrian simulator for racehorse training" : index === 4 ? "Home equestrian simulator for personal training" : "Equestrian simulator for exhibitions and events"}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(10,18,35,0.85) 0%, rgba(10,18,35,0.2) 60%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '32px',
                          }}
                        >
                          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>
                            {scene.title}
                          </h3>
                          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
                            {scene.desc}
                          </p>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 手机端解决方案：2列网格 */}
                

                {/* 导航按钮 */}
                <div className="hidden md:flex" style={{ justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
                  <button
                    onClick={() => setScenesIndex(Math.max(0, scenesIndex - 1))}
                    disabled={!canScrollLeft}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: canScrollLeft ? '#0A1E3F' : '#ccc',
                      color: '#fff',
                      border: 'none',
                      cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                      fontSize: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setScenesIndex(Math.min(maxIndex, scenesIndex + 1))}
                    disabled={!canScrollRight}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: canScrollRight ? '#0A1E3F' : '#ccc',
                      color: '#fff',
                      border: 'none',
                      cursor: canScrollRight ? 'pointer' : 'not-allowed',
                      fontSize: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ›
                  </button>
                </div>
              

              {/* 手机端场景：横向滑动2行 */}
              <div
                className="md:hidden"
                style={{
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  paddingLeft: '16px',
                  paddingBottom: '16px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridAutoFlow: 'column',
                    gridAutoColumns: '75vw',
                    gap: '12px',
                    width: 'max-content',
                  }}
                >
                  {scenes.map((scene) => (
                    <Link
                      key={scene.title + '-mobile'}
                      href={scene.href}
                      style={{ textDecoration: 'none', scrollSnapAlign: 'start' }}
                    >
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
                        <img src={scene.bg} alt={scene.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{scene.title}</div>
                          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>{scene.desc}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* 合作伙伴区块 */}
      <section style={{ padding: '60px 40px', background: '#fff' }} dir="ltr">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* 标题区 */}
          <div dir="auto" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.5px', color: '#0A1E3F', marginBottom: '8px' }}>
              {t('trusted.title')}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 500, color: '#5A6478' }}>
              {t('trusted.subtitle')}
            </p>
          </div>

          {/* 合作伙伴三排布局 */}
          <div className="hidden md:block w-full overflow-x-auto">
            <div style={{ transform: 'scale(var(--logo-scale, 1))', transformOrigin: 'top left', width: 'max-content', minWidth: '100%' }}>
              <div className="w-full overflow-hidden" style={{ display: 'flex', flexDirection: 'column', gap: '40px', transformOrigin: 'top center' }}>
            {/* 第一排：4个方形 Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '48px' }}>
              {PARTNERS.slice(0, 4).map((partner, index) => (
                <div key={`row1-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={partner.logo} alt={partner.en} style={{ maxWidth: '160px', maxHeight: '160px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', filter: 'grayscale(20%)' }} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#5A6478', textAlign: 'center', whiteSpace: 'nowrap', marginTop: '10px' }}>{pName(partner)}</span>
                </div>
              ))}
            </div>

            {/* 第二排：3个方形 Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '48px' }}>
              {PARTNERS.slice(4, 7).map((partner, index) => (
                <div key={`row2-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={partner.logo} alt={partner.en} style={{ maxWidth: '160px', maxHeight: '160px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', filter: 'grayscale(20%)' }} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#5A6478', textAlign: 'center', whiteSpace: 'nowrap', marginTop: '10px' }}>{pName(partner)}</span>
                </div>
              ))}
            </div>

            {/* 第三排：2个横向 Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '48px' }}>
              {PARTNERS.slice(7, 9).map((partner, index) => (
                <div key={`row3-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '280px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={partner.logo} alt={partner.en} style={{ maxWidth: '280px', maxHeight: '80px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', filter: 'grayscale(20%)' }} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#5A6478', textAlign: 'center', whiteSpace: 'nowrap', marginTop: '10px' }}>{pName(partner)}</span>
                </div>
              ))}
            </div>
              </div>
            </div>
          </div>

          {/* 手机端Logo：3列网格，完整显示9个合作伙伴 */}
          <div id="mobile-logos-grid" style={{ display: 'none', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 12px', padding: '0 8px' }}>
            {PARTNERS.map((partner, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={partner.logo}
                    alt={partner.en}
                    style={{ maxWidth: '80px', maxHeight: '80px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#5A6478', textAlign: 'center', lineHeight: 1.3 }}>{pName(partner)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 什么是马术模拟器 */}
      <div style={{ background: "#fff", padding: "32px 40px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#0A1E3F", marginBottom: "14px" }}>{t('whatIs.title')}</h2>
          <p style={{ fontSize: "15px", color: "#5A6478", lineHeight: 1.8, margin: 0 }}>
            {t('whatIs.desc')}
          </p>
        </div>
      </div>

      {/* 合作伙伴评价区块 */}
      <section style={{ padding: '60px 40px 40px 40px', background: '#0A1E3F' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* 标题区 */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              {t('reviews.title')}
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
              {t('reviews.subtitle')}
            </p>
          </div>

          {/* 评价卡片横向滑动轮播 */}
          {(() => {
            const initials = ['H', 'R', 'L', 'W'];
            const reviewItems = t.raw('reviews.items') as Array<{quote: string; name: string; org: string}>;
            const reviews = reviewItems.map((item, i) => ({
              ...item,
              initial: initials[i] || '?',
            }));

            const cardsPerView = 4;
            const maxIndex = Math.max(0, reviews.length - cardsPerView);
            const canScrollLeft = reviewsIndex > 0;
            const canScrollRight = reviewsIndex < maxIndex;

            return (
              <>
                {/* 轮播容器 */}
                <div className="hidden md:block" style={{ position: 'relative', overflow: 'hidden' }}>
                  {/* 轨道 */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      transition: 'transform 0.4s ease',
                      transform: `translateX(-${reviewsIndex * (100 / cardsPerView)}%)`,
                    }}
                  >
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '260px',
                          flex: '0 0 calc(25% - 18px)',
                          background: '#fff',
                          borderRadius: '20px',
                          padding: '20px',
                          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                        }}
                      >
                        {/* 上半部分：引号 + 评价文字 */}
                        <div>
                          <div style={{ fontSize: '32px', color: '#C9A84C', lineHeight: 1 }}>"</div>
                          <p style={{ fontSize: '13px', color: '#1C2333', lineHeight: 1.7, marginTop: '8px' }}>{review.quote}</p>
                        </div>
                        {/* 下半部分：头像+姓名，固定在底部 */}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E8EBF0' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                            {review.initial}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0A1E3F', lineHeight: 1.2, wordBreak: 'break-word' }}>{review.name}</span>
                            <span style={{ fontSize: '11px', color: '#5A6478', lineHeight: 1.2, marginTop: '2px', wordBreak: 'break-word' }}>{review.org}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 导航按钮 */}
                <div className="hidden md:flex" style={{ justifyContent: 'center', alignItems: 'center', gap: '24px', marginTop: '24px' }}>
                  <button
                    onClick={() => setReviewsIndex(Math.max(0, reviewsIndex - 1))}
                    disabled={!canScrollLeft}
                    style={{
                      fontSize: '28px',
                      color: canScrollLeft ? '#fff' : 'rgba(255,255,255,0.3)',
                      cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                      background: 'none',
                      border: 'none',
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setReviewsIndex(Math.min(maxIndex, reviewsIndex + 1))}
                    disabled={!canScrollRight}
                    style={{
                      fontSize: '28px',
                      color: canScrollRight ? '#fff' : 'rgba(255,255,255,0.3)',
                      cursor: canScrollRight ? 'pointer' : 'not-allowed',
                      background: 'none',
                      border: 'none',
                    }}
                  >
                    ›
                  </button>
                </div>

                {/* 手机端评价：竖向卡片 */}
                
              

              {/* 手机端评价：横向滑动 */}
              <div
                className="md:hidden"
                style={{
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  paddingLeft: '16px',
                  paddingBottom: '16px',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(2, auto)',
                    gridAutoFlow: 'column',
                    gridAutoColumns: '75vw',
                    gap: '12px',
                    width: 'max-content',
                  }}
                >
                  {reviews.map((review, index) => (
                    <div
                      key={`review-mobile-${index}`}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: '#ffffff',
                        borderRadius: '12px',
                        padding: '16px',
                        border: '1px solid #e8e8e8',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                        scrollSnapAlign: 'start',
                      }}
                    >
                      <div style={{ fontSize: '20px', color: '#C9A84C', marginBottom: '8px' }}>"</div>
                      <p style={{ fontSize: '13px', color: '#393C41', lineHeight: 1.6, marginBottom: '12px' }}>{review.quote}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                          {review.initial}
                        </div>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#1C2333' }}>{review.name}</div>
                          <div style={{ fontSize: '11px', color: '#888' }}>{review.org}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </>
            );
          })()}
        </div>
      </section>

      

      {/* CTA Banner */}
      <section style={{ padding: '40px 40px 100px 40px', background: '#0A1E3F', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
            {t('cta.subtitle')}
          </p>
          {/* FAQ JSON-LD */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "模拟马和真马训练有什么区别？", "acceptedAnswer": { "@type": "Answer", "text": "模拟马通过6轴运动平台和200+精密传感器还原真马生物力学动作，提供稳定可量化的训练条件。真马训练受马匹状态、天气、场地限制，模拟马可全天候重复训练，数据实时记录，是真马训练的最佳补充。" } },
              { "@type": "Question", "name": "模拟马适合什么人群使用？", "acceptedAnswer": { "@type": "Answer", "text": "适合所有骑手：初学者可在安全环境建立基础骑感；专业骑手用于精细化技术训练；康复人群可进行低风险体能恢复；赛马骑师可针对性训练平衡与重心控制。" } },
              { "@type": "Question", "name": "你们的产品有哪些型号？", "acceptedAnswer": { "@type": "Answer", "text": "目前有三款：MS.30P（专业三项赛级）、MS.30/Pony-MS.30（教育与康复级，均获CE认证）、MS.20（赛马骑师训练专用）。不同型号适合不同场景，欢迎联系获取专属建议。" } },
              { "@type": "Question", "name": "如何获取报价？", "acceptedAnswer": { "@type": "Answer", "text": "请通过官网联系页面填写询盘表单，或直接发送邮件至 info@equestrian-simulators.com，我们将在24小时内回复并提供定制化报价。" } }
            ]
          }) }} />
          <div style={{ maxWidth: "800px", margin: "0 auto 40px auto", textAlign: "left" }}>
            {(t.raw('faq.items') as Array<{q: string; a: string}>).map((item, index) => (
              <details key={index} style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", padding: "16px 0" }}>
                <summary style={{ fontSize: "15px", fontWeight: 600, color: "#fff", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                  {item.q}
                  <span style={{ color: "#C9A84C", fontSize: "20px", marginLeft: "12px", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginTop: "12px", marginBottom: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link href="/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator"
              className="w-full md:w-auto text-center"
              style={{
                padding: '14px 32px',
                background: '#C9A84C',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t('cta.btnProduct')}
            </Link>
            <a href="https://wa.me/8613112886222" target="_blank" rel="noopener noreferrer"
              className="w-full md:w-auto text-center"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t('cta.btnWhatsapp')}
            </a>
            <Link href="/cases"
              className="w-full md:w-auto text-center text-xs md:text-base"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                border: '1.5px solid rgba(255,255,255,0.4)',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t('cta.btnCases')}
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}