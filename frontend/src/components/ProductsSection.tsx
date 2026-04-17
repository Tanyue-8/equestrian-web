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

interface ProductsSectionProps {
  products: ProductData[];
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  const t = useTranslations('home');
  const [productsIndex, setProductsIndex] = useState(0);

  // 添加浮动动画CSS
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('tc-float-animation')) {
      const style = document.createElement('style');
      style.id = 'tc-float-animation';
      style.textContent = `
        @keyframes tcfloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .tc-float { animation: tcfloat 4s ease-in-out infinite; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // 产品样式配置
  const productStyles: Record<string, any> = {
    'horse-ms30p': {
      tagBg: 'rgba(255,255,255,0.9)',
      tagColor: '#1a2f5a',
      shadowColor: 'rgba(109,148,209,0.3)',
      bgGradient: 'linear-gradient(135deg,#E8EDF5 0%,#F0F4FA 50%,#E2E8F0 100%)',
      subtitleColor: '#1a2f5a',
      btnBg: '#C9A84C',
      btnColor: '#fff',
    },
    'pony-ms30': {
      tagBg: 'rgba(255,255,255,0.9)',
      tagColor: '#1a2f5a',
      shadowColor: 'rgba(159,128,206,0.25)',
      bgGradient: 'linear-gradient(135deg,#EDE8F5 0%,#F5F0FA 50%,#E8E2F0 100%)',
      subtitleColor: '#1a2f5a',
      btnBg: '#C9A84C',
      btnColor: '#fff',
    },
    'racehorse-ms20': {
      tagBg: 'rgba(201,168,76,0.15)',
      tagColor: '#8B6914',
      tagBorder: '1px solid rgba(201,168,76,0.3)',
      shadowColor: 'rgba(201,168,76,0.3)',
      bgGradient: 'linear-gradient(135deg,#F5ECD8 0%,#FAF3E8 50%,#F0E6D0 100%)',
      subtitleColor: '#B8860B',
      btnBg: '#C9A84C',
      btnColor: '#fff',
    },
  };

  // 产品链接映射
  const productLinks: Record<string, string> = {
    'horse-ms30p': '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator',
    'pony-ms30': '/ai-equestrian-simulators/ms30-education-pony-simulator',
    'racehorse-ms20': '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator',
  };

  // 产品图片路径映射（本地fallback）
  const productImages: Record<string, string> = {
    'horse-ms30p': '/images/ms30p.png',
    'pony-ms30': '/images/ms30.png',
    'racehorse-ms20': '/images/ms20.png',
  };

  // 产品标签映射（使用翻译）
  const getProductTag = (slug: string) => {
    if (slug === 'horse-ms30p') return t('products.ms30p.tag');
    if (slug === 'pony-ms30') return t('products.ms30.tag');
    if (slug === 'racehorse-ms20') return t('products.ms20.tag');
    return '';
  };

  const cardsPerView = 3;
  const maxIndex = Math.max(0, products.length - cardsPerView);
  const canScrollLeft = productsIndex > 0;
  const canScrollRight = productsIndex < maxIndex;

  return (
    <section id="products" style={{ padding: '40px 0', background: '#fff' }}>
      {/* 标题区 */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 48px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.5px', color: '#1C2333', marginBottom: '8px' }}>
          {t('products.title')}
        </h2>
        <p style={{ fontSize: '16px', color: '#5A6478', maxWidth: '600px', margin: '0 auto' }}>
          {t('products.subtitle')}
        </p>
      </div>

      {/* PC端产品区 */}
      <div
        className="hidden md:block"
        style={{
          overflowX: 'auto',
          cursor: 'grab',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseDown={(e) => {
          const el = e.currentTarget;
          el.style.cursor = 'grabbing';
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (e: MouseEvent) => {
            const x = e.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            el.style.cursor = 'grab';
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
          };
          window.addEventListener('mousemove', onMove);
          window.addEventListener('mouseup', onUp);
        }}
      >
        <div style={{ minWidth: 'max-content', padding: '0 60px 20px 60px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', padding: '0 55px' }}>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                transition: 'transform 0.4s ease',
                transform: `translateX(-${productsIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {products.map((product) => {
                const style = productStyles[product.slug] || productStyles['horse-ms30p'];
                const link = productLinks[product.slug] || '/';
                const tag = getProductTag(product.slug);
                const fallbackImage = productImages[product.slug] || '/images/ms30p.png';

                return (
                  <div
                    key={product.slug}
                    style={{
                      position: 'relative',
                      flex: '0 0 clamp(480px, 32vw, 600px)',
                      width: 'clamp(480px, 32vw, 600px)',
                      height: '580px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s',
                      background: style.bgGradient,
                      transform: 'scale(0.99)',
                    }}
                  >
                    {/* 标签 */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '24px',
                        left: '28px',
                        zIndex: 2,
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        background: style.tagBg,
                        color: style.tagColor,
                        ...(style.tagBorder ? { border: style.tagBorder } : {}),
                      }}
                    >
                      {tag}
                    </div>

                    {/* 图片层 */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: '180px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                      }}
                    >
                      <img
                        src={product.featured_image || fallbackImage}
                        alt={product.name}
                        className="tc-float"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center bottom',
                          filter: `drop-shadow(0 0 32px ${style.shadowColor})`,
                        }}
                      />
                    </div>

                    {/* 文字层 */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '32px',
                        zIndex: 2,
                        background:
                          'linear-gradient(to top,rgba(255,255,255,1) 0%,rgba(255,255,255,0.98) 50%,rgba(255,255,255,0) 100%)',
                      }}
                    >
                      <div style={{ height: '44px', marginBottom: '4px' }}>
                        <h3
                          style={{
                            fontSize: '32px',
                            fontWeight: 800,
                            color: '#1C2333',
                            letterSpacing: '-0.5px',
                            margin: 0,
                          }}
                        >
                          {product.model}
                        </h3>
                      </div>
                      <div style={{ height: '28px', marginBottom: '12px' }}>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            color: style.subtitleColor,
                          }}
                        >
                          {product.name}
                        </div>
                      </div>
                      <div style={{ height: '64px', overflow: 'hidden', marginBottom: '20px' }}>
                        <p style={{ fontSize: '15px', color: '#393C41', lineHeight: 1.6, margin: 0 }}>
                          {product.description}
                        </p>
                      </div>
                      <div>
                        <Link
                          href={link}
                          style={{
                            display: 'inline-block',
                            padding: '12px 28px',
                            background: style.btnBg,
                            color: style.btnColor,
                            borderRadius: '8px',
                            fontSize: '15px',
                            fontWeight: 600,
                            textDecoration: 'none',
                          }}
                        >
                          {t('products.learnMore')}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 手机端产品横向滑动 */}
      <div className="md:hidden">
        <div
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            {products.map((product) => {
              const style = productStyles[product.slug] || productStyles['horse-ms30p'];
              const link = productLinks[product.slug] || '/';
              const tag = getProductTag(product.slug);
              const fallbackImage = productImages[product.slug] || '/images/ms30p.png';

              return (
                <Link
                  key={`${product.slug}-m`}
                  href={link}
                  style={{
                    textDecoration: 'none',
                    flexShrink: 0,
                    width: '88vw',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      height: '480px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      background: style.bgGradient,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        zIndex: 2,
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        background: style.tagBg,
                        color: style.tagColor,
                      }}
                    >
                      {tag}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: '160px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '30px',
                      }}
                    >
                      <img
                        src={product.featured_image || fallbackImage}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center bottom',
                          filter: `drop-shadow(0 0 24px ${style.shadowColor})`,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '24px',
                        zIndex: 2,
                        background:
                          'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0) 100%)',
                      }}
                    >
                      <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#1C2333', marginBottom: '4px' }}>
                        {product.model}
                      </h3>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: style.subtitleColor, marginBottom: '10px' }}>
                        {product.name}
                      </div>
                      <p
                        style={{
                          fontSize: '13px',
                          color: '#393C41',
                          lineHeight: 1.6,
                          marginBottom: '14px',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {product.description}
                      </p>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '10px 24px',
                          background: style.btnBg,
                          color: style.btnColor,
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {t('products.learnMore')}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 导航按钮（PC端） */}
      {products.length > cardsPerView && (
        <div className="hidden md:flex" style={{ justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
          <button
            onClick={() => setProductsIndex(Math.max(0, productsIndex - 1))}
            disabled={!canScrollLeft}
            style={{
              padding: '12px 24px',
              background: canScrollLeft ? '#C9A84C' : '#E5E7EB',
              color: canScrollLeft ? '#fff' : '#9CA3AF',
              border: 'none',
              borderRadius: '8px',
              cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            ← {t('products.prev')}
          </button>
          <button
            onClick={() => setProductsIndex(Math.min(maxIndex, productsIndex + 1))}
            disabled={!canScrollRight}
            style={{
              padding: '12px 24px',
              background: canScrollRight ? '#C9A84C' : '#E5E7EB',
              color: canScrollRight ? '#fff' : '#9CA3AF',
              border: 'none',
              borderRadius: '8px',
              cursor: canScrollRight ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            {t('products.next')} →
          </button>
        </div>
      )}
    </section>
  );
}
