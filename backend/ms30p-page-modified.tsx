// 复制到: frontend/src/app/[locale]/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator/page.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { getProductBySlug, getProductTranslation, getProductImageUrl, Product } from '@/lib/api-client';

const PRODUCT_SLUG = 'horse-ms30p';

// 骨架屏组件
function ProductSkeleton() {
  return (
    <>
      <section style={{ position: 'relative', background: '#0A1E3F', minHeight: '600px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 60px 80px',
          minHeight: '520px'
        }}>
          <div style={{
            height: '40px',
            width: '200px',
            background: 'rgba(201,168,76,0.3)',
            borderRadius: '20px',
            marginBottom: '24px',
            animation: 'skeleton-pulse 1.5s ease-in-out infinite'
          }}></div>
          <div style={{
            height: '80px',
            width: '400px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '8px',
            marginBottom: '24px',
            animation: 'skeleton-pulse 1.5s ease-in-out infinite 0.2s'
          }}></div>
          <div style={{
            height: '100px',
            width: '100%',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            animation: 'skeleton-pulse 1.5s ease-in-out infinite 0.4s'
          }}></div>
        </div>
      </section>
      <style>{`
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default function MS30PPage() {
  const locale = useLocale();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const data = await getProductBySlug(PRODUCT_SLUG, locale);
        if (data) {
          setProduct(data);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to load product');
        console.error('Error loading product:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [locale]);

  // 从 API 获取产品数据
  const translation = product ? getProductTranslation(product, locale) : null;
  const productName = translation?.name || 'MS.30P Professional Equestrian Simulator';
  const productTag = translation?.tag || 'HKJC 瀹樻柟璁ゅ彲';
  const productDescription = translation?.description || '涓撲为鑱屼笟绔炴妧涓庨珮闃惰鍒掓墦閫犵殑涓夐€璧℃ā鎷熷櫒';
  const productContent = translation?.content || '';

  // 加载状态
  if (loading) {
    return <ProductSkeleton />;
  }

  // 错误状态
  if (error || !product) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        textAlign: 'center',
        padding: '40px'
      }}>
        <h2 style={{ fontSize: '24px', color: '#0A1E3F', marginBottom: '16px' }}>
          Product Not Found
        </h2>
        <p style={{ fontSize: '16px', color: '#5A6478', marginBottom: '24px' }}>
          {error || 'Unable to load product data'}
        </p>
        <Link
          href="/ai-equestrian-simulators"
          style={{
            padding: '12px 24px',
            background: '#C9A84C',
            color: '#0A1E3F',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 700,
            textDecoration: 'none'
          }}
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // 渲染产品页面
  return (
    <>
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": productName,
            "description": productDescription,
            "brand": { "@type": "Brand", "name": "Equestrian Simulators" },
            "category": "Equestrian Training Equipment",
            "keywords": "dressage simulator, show jumping simulator, eventing simulator, Piaffe simulator, Passage simulator, professional equestrian simulator",
            "audience": { "@type": "Audience", "audienceType": "Professional riders, equestrian clubs, jockey training centers" },
            "image": getProductImageUrl(product) ? [getProductImageUrl(product)] : []
          })
        }}
      />

      {/* Hide scrollbar for horizontal scroll */}
      <style>{`
        .feature-cards-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="ms30p-hero" style={{ position: 'relative', background: '#0A1E3F', minHeight: '600px' }}>
        {/* Hero Background Glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 85% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)'
        }}></div>

        {/* Hero Grid */}
        <div id="ms30p-hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 60px 80px',
          minHeight: '520px'
        }}>
          {/* Left Column */}
          <div>
            {/* Badge */}
            <div style={{
              background: 'rgba(201,168,76,0.3)',
              border: '1px solid #C9A84C',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#DDB96A',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
              display: 'inline-block',
              padding: '6px 16px'
            }}>
              {productTag}
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: '88px',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-4px',
              lineHeight: 0.9,
              marginBottom: '24px'
            }}>
              MS<span style={{
                background: 'linear-gradient(135deg, #DDB96A, #C9A84C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>.30P</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              marginBottom: '40px'
            }}>
              {productDescription}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'center', marginTop: '40px' }}>
              <Link
                href="/contact"
                style={{
                  padding: '14px 32px',
                  background: '#C9A84C',
                  color: '#0A1E3F',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  width: 'auto'
                }}
              >
                鑾峰彇鎶ヤ环
              </Link>
              <Link
                href="/compare"
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  padding: '14px 0'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                瀵规瘮鍨嬪彥 鈫?
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <style>{`
              @keyframes pd2float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-16px); }
              }
            `}</style>
            <img
              src={getProductImageUrl(product) || '/images/ms30p.png'}
              alt={productName}
              style={{
                width: '100%',
                maxWidth: '480px',
                height: '420px',
                objectFit: 'contain',
                objectPosition: 'center',
                filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.3))',
                animation: 'pd2float 4s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </section>

      {/* Immersive Image Section */}
      <section id="ms30p-immersive-section" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <img
          src="/images/ms30p-immersive.jpg"
          alt="MS.30P equestrian simulator immersive view - professional training equipment"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(10,30,63,0.85) 0%, rgba(10,30,63,0.3) 100%)'
        }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '60px 6%' }}>
          {/* Gold Border Tag */}
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            border: '1px solid #C9A84C',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '1.5px',
            color: '#C9A84C',
            marginBottom: '16px'
          }}>
            鏍稿績鐗规€?
          </div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px'
          }}>
            楂橀簿搴︾敓鐗╁姏瀛︽劅搴?
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7,
            marginBottom: '24px',
            maxWidth: '600px'
          }}>
            鍦ㄩ┈鍖瑰ご閮ㄣ€佽吂閮ㄩ厤缃珮鐏垫晱搴︽劅搴旂煩闃碉紝瀹炴椂鎹曟崏楠戞墜閲嶅績寰ф儏涓庤吙閮ㄦ壎鍔╂寚浠わ紝缂扮怀鎷夊姏鎰熷簲瀹炵幇姣咃紝绾у姩鎬佸搷搴斻€?
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['澶撮儴浼犳劍鍣?', '鑵归儴浼犳劍鍣?', '瀹炴椂鍙嶉', '鐢熺墮鍔涘鍒嗘瀽'].map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: '6px 14px',
                  border: '1px solid #C9A84C',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#C9A84C'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three Column Feature Cards */}
      <section style={{ padding: '80px 6%', background: '#F5F0E8', borderTop: '1px solid #E0D8C8' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1E3F', marginBottom: '8px' }}>
            鏍稿績鍔熻兘
          </h2>
          <p style={{ fontSize: '16px', color: '#5A6478' }}>
            涓撲笟绾ф妧鏈?涓虹珵鎶€璁绯冭€岀敓
          </p>
        </div>

        {/* 鍗＄墖瀹瑰櫒澶栧眰瀹瑰櫃 */}
        <div className="ms30p-features-slider" id="ms30p-features-slider" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* 宸︾鍖洪摼寮€闂?*/}
          {scrollLeft > 0 && (
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: -370, behavior: 'smooth' })}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #E0D8C8',
                background: '#fff',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#C9A84C',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              鈥?
            </button>
          )}

          {/* 鍙崇鍖洪摼寮€闂?*/}
          {canScrollRight && (
            <button
              onClick={() => scrollRef.current?.scrollBy({ left: 370, behavior: 'smooth' })}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #E0D8C8',
                background: '#fff',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#C9A84C',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              鈥?
            </button>
          )}

          {/* 鍗＄墖婊氬姩瀹瑰櫃 */}
          <div
            ref={scrollRef}
            onScroll={(e) => {
              const target = e.currentTarget;
              setScrollLeft(target.scrollLeft);
              setCanScrollRight(target.scrollLeft < target.scrollWidth - target.clientWidth);
            }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              overflowX: 'auto',
              paddingBottom: '16px',
              paddingLeft: '4px',
              paddingRight: '24px',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none'
            }}
            className="feature-cards-container">
            {/* Card 1 */}
            <div style={{
              flex: '0 0 calc(33.333% - 16px)',
              minWidth: '280px',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              border: '1px solid #E0D8C8',
              borderRadius: '20px',
              padding: '40px 32px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.3)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.borderColor = '#E0D8C8';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>馃幆</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1E3F', marginBottom: '12px' }}>
                鏅鸿兘鎵跺姪璇嗗埆
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.6, marginBottom: '20px' }}>
                璇嗗埆"閲屾€€"鎵跺姪鎸囦护锛岄€氳繃鐪熷疄鐢熺墮鍔涘鍔ㄤ綔瑙﹀彂绮惧噯姝ユ€佽浆鎹笌閫熷害鍙樺寲锛屾敮鎸 Piaffe銆丳assage 绛夐珮闃跺姩浣滅殑鎵跺姪璇嗗埆銆?
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['閲屾€€杞鏇?, 'Piaffe', 'Passage', '姝ユ€佸垏鎹?].map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      color: '#0A1E3F',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.35)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 - Highlighted */}
            <div style={{
              flex: '0 0 calc(33.333% - 16px)',
              minWidth: '280px',
              scrollSnapAlign: 'start',
              backgroundImage: "url('/images/ms30p-gallop.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #C9A84C',
              borderTop: '3px solid #C9A84C',
              borderRadius: '20px',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* 钂欏眰 */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                background: 'linear-gradient(180deg, rgba(8,12,24,0.08) 0%, rgba(8,12,24,0.18) 35%, rgba(8,12,24,0.72) 65%, rgba(8,12,24,0.82) 100%)',
                zIndex: 0
              }}></div>

              {/* 鍐呭 */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>馃弴</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  鍏ㄨ兘涓夐€璧°?/h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '20px' }}>
                  绮惧噯杩樺師鎱㈡€併€佸揩姝ャ€佽窇姝ヤ笁澶у熀鏈€冨€冱€侊紝鏀寔 Piaffe锛堝師鍦拌笍姝ワ級銆丳assage锛堥珮鍙版€冱€侊紝鍙婅垰鍦伴殰纰嶈禌璺鍩哄嚭璁捐嚧鎷熴€?
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['鎱㈡€併€佸揩姝ャ€佽窇姝ャ€佽窇姝ャ€丳iaffe', 'Passage', '鍦伴殰纰嶈禌'].map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '4px 10px',
                        background: 'rgba(201,168,76,0.2)',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#C9A84C',
                        border: '1px solid rgba(201,168,76,0.5)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              flex: '0 0 calc(33.333% - 16px)',
              minWidth: '280px',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              border: '1px solid #E0D8C8',
              borderRadius: '20px',
              padding: '40px 32px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.3)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.borderColor = '#E0D8C8';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>馃洝锔?/div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1E3F', marginBottom: '12px' }}>
                涓撲笟瀹夊叏绯荤粺
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.6, marginBottom: '20px' }}>
                绱фュ埣鍔ㄨ裃涓庤浆浠堕殰淇濇姢鍙屽仴淇濇姢锛孋E (RED/EMC/LVD) 鍥介檯璁よ瘉锛岄鍙藉畼鏂硅鍙敤銆?
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['绱фュ埣鍔?', 'CE璁よ瘉', 'HKJC璁ゅ彲'].map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      color: '#0A1E3F',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.35)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section style={{ padding: '80px 6%', background: '#F5F0E8', borderTop: '1px solid #E0D8C8', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#0A1E3F',
          marginBottom: '40px'
        }}>
          浜у搧婕旂ず
        </h2>
        <video
          src="/images/ms30p-demo.mov"
          poster="/images/ms30p-immersive.jpg"
          controls
          style={{
            width: '100%',
            maxWidth: '900px',
            borderRadius: '20px',
            boxShadow: '0 0 60px rgba(201,168,76,0.3)',
            display: 'block',
            margin: '0 auto'
          }}
        >
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Technical Specifications Tables */}
      <section style={{ padding: '80px 0', background: '#F5F0E8', borderTop: '1px solid #E0D8C8', width: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#0A1E3F',
              marginBottom: '14px'
            }}>
              鎶€鏈皯鏍?
            </h2>
            <div style={{
              display: 'block',
              width: '40px',
              height: '3px',
              background: 'linear-gradient(90deg, #C9A84C, #DDB96A)',
              margin: '0 auto 48px',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            maxWidth: '1100px',
            margin: '40px auto 0'
          }}>
            {/* Left Table */}
            <div id="ms30p-specs-left" style={{
              width: '100%',
              paddingRight: '32px',
              borderRight: '1px solid #E0D8C8'
            }}>
              {[
                ['鍨嬪彔', 'MS.30P锛圚orse锛?],
                ['瀹氫綅', '鑱屼笟绾ч┈鏈模鎷熷櫃'],
                ['璁よ瘉', 'CE锛圧ED / EMC / LVD锛?],
                ['璁ゅ彲鏈烘瀯', '棣欐腐璧°?(HKJC锛?],
                ['姝ユ€佹妯℃嫫', '鎱㈡€佸揩姝ャ€佽窇姝ャ€丳iaffe / Passage'],
                ['鏈轰綋鎬婚暱', '2263mm'],
                ['鏈轰綋瀹藉害', '1122mm'],
                ['鏈轰綋闈欐鍘嬫湁楂樺害', '1750mm'],
                ['搴曢儴灏哄', '2100脳690mm'],
                ['闈欐楠戝骇楂樺害', '1500mm']
              ].map(([label, value], index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #E0D8C8'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ flex: '0 0 45%', padding: '18px 16px 18px 0', color: '#8A9AAA', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', verticalAlign: 'middle' }}>
                    {label}
                  </div>
                  <div style={{ flex: 1, padding: '18px 0', color: '#0A1E3F', fontWeight: 600, fontSize: '14px', verticalAlign: 'middle' }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Table */}
            <div id="ms30p-specs-right" style={{
              width: '100%',
              paddingLeft: '32px'
            }}>
              {[
                ['鏁存満閲嶉噺', '450KG'],
                ['棰濆畾鎵胯浇', '98KG'],
                ['棰濆畾鐢靛帇', '220V AC / 50Hz'],
                ['棰濆畾鍔熺巼', '4.8KW'],
                ['澶╄姳鏉块珮搴﹁姹?, '鈮?000mm'],
                ['渚ч潰閫氶亾绌洪棿', '鈮?00mm'],
                ['鍓嶅悗閫氶亾绌洪棿', '鈮?00mm'],
                ['闂ㄦ鍘熷害锛堟暣鏈猴級', '鈮?222mm'],
                ['闂ㄦ鍘熷害锛堟媶鍗革級', '鈮?00mm'],
                ['宸ヤ綔娓╁害', '5掳C 鈥?40掳C'],
                ['璐ㄤ繰鏈?, '1骞?]
              ].map(([label, value], index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #E0D8C8'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ flex: '0 0 45%', padding: '18px 16px 18px 0', color: '#8A9AAA', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', verticalAlign: 'middle' }}>
                    {label}
                  </div>
                  <div style={{ flex: 1, padding: '18px 0', color: '#0A1E3F', fontWeight: 600, fontSize: '14px', verticalAlign: 'middle' }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section style={{
        padding: '72px 6%',
        background: '#F9F7F4'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#1C2333',
            marginBottom: '20px',
            lineHeight: 1.35
          }}>
            MS.30P 涓撲笟椹湳妯℃嫫鏄浠€涔堬紵
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            color: '#5A6478',
            lineHeight: 1.9,
            textAlign: 'left'
          }}>
            {productContent || 'MS.30P 涓€娆鹃潰鍚戦亴涓氱珵鎶€涓庨珮闃惰鍒掓満鏅殑涓撲笟椹湳妯℃嫫锛屾寚 AI 鐢熺墮鍔涘鍙嶉绯荤粺锛岃幏棣欐腐璧°?(HKJC锛夊畼鏂硅鍙敤锛岄€氳繃 CE锛圧ED/EMC/LVD锛夎鍙敤銆傞厤澶 200+ 绮惧瘑浼犳劍鍣紝绮惧噯杩樺師鎱㈡€佸揩姝ャ€佽窇姝ヤ笁绉嶆€冨€冱€侊紝鏀寔鐩涜鍖姪 Piaffe锛堝師鍦拌笍姝ワ級涓?Passage锛堥珮鍙版€冱€侊紝鍙婅垰鍦伴殰纰嶈禌璺鍩哄嚭璁捐嚧鎷熴€傛敮鎸佸疄鏃堕獞濮℃暟鎹垎鏋愪笌璁绯冨憡杈撳嚭锛屼笓涓洪┈鏈勘娆″垯銆佽亴涓氱獞鎵嬪強楂橀樺楠湳璁绯冨鎶ヨ鍒涗緥銆?}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '36px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 800,
                color: '#C9A84C'
              }}>
                3
              </div>
              <div style={{ fontSize: '13px', color: '#5A6478', marginTop: '4px' }}>
                姝ユ€佹妯℃嫫
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 800,
                color: '#C9A84C'
              }}>
                200+
              </div>
              <div style={{ fontSize: '13px', color: '#5A6478', marginTop: '4px' }}>
                绮惧瘑浼犳劍鍣?
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                fontWeight: 800,
                color: '#C9A84C'
              }}>
                HKJC
              </div>
              <div style={{ fontSize: '13px', color: '#5A6478', marginTop: '4px' }}>
                瀹樻柟璁ゅ彲
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 40px',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          position: 'static',
          left: 'auto',
          paddingLeft: 0
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#0A1E3F',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            甯歌闂鍗拌В
          </h2>

          {translation?.faqs?.map((item: any, index: number) => (
            <details
              key={index}
              style={{
                borderBottom: '1px solid #E8E4DC',
                padding: '20px 0'
              }}
            >
              <summary style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#0A1E3F',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none'
              }}>
                {item.question}
                <span style={{ color: '#C9A84C', fontSize: '20px', marginLeft: '12px' }}>+</span>
              </summary>
              <p style={{
                fontSize: '14px',
                color: '#5A6478',
                lineHeight: 1.7,
                marginTop: '16px'
              }}>
                {item.answer}
              </p>
            </details>
          )) || [
            {
              question: 'MS.30P 閫傚悎鍝簺璁绯冨椤圭洰锛?,
              answer: 'MS.30P鏀寔鐩涜鍖姪锛堝惈Piaffe/Passage楂橀樁鍔ㄤ綔锛夈€佽窇纰嶈禌銆佸悎鍚堢患鍚堢粨鍐涘椋燂紝閫傚悎涓撲笟淇変箰閮ㄣ€佽亴涓氭暀缁冨強绔炴妧楠戞墜浣跨敤銆?
            },
            {
              question: 'MS.30P鍜孧S.30鏈変粈涔堝尯鍒锛?,
              answer: 'MS.30P鏄亴涓氱骇浜у搧锛岄厤澶囬珮绮惧害鐢熺墮鍔涘鍙嶉鍣紝鏀寔Piaffe銆丳assage绛夐珮闃剁洓瑁呰垶姝ュ姩浣滐紝鑾烽鍙藉畼鏂硅鍙敤锛汳S.30鏄鏋ョ骇浜у搧锛屾€冨€冱€侀€€鍜岋紝鏀寔澶氫簺鑱旂綉锛岄€傚悎瀛︽牎鎵归噺鏁欏紝鑾峰緱棣欐腐RDA璁ゅ彲銆?
            },
            {
              question: '瀹夎闇€瑕佷粈涔堝満鍦版潯浠讹紵',
              answer: '闇€瑕佹渶浣庡ぉ鑺辨澘楂樺度鈮?000mm锛屽爣鍑?20V/4.8KW鐢垫簮锛屾暣鏈哄昂瀵?263脳1122脳1750mm锛岄噸閲?50KG锛屾壙杞?8KG銆備晶闈㈤€氶亾棰勭暀鈮?00mm锛屽墠鍚庨€氶亾棰勭暀鈮?00mm銆傛暣鏈轰笉鎷嗗嵏杩涘叆闇€闂ㄦ鍘熷害鈮?222mm锛屾媶鍗稿悗鈮?00mm銆?
            },
            {
              question: 'MS.30P鏈夊摢浜涜鍙敤锛?,
              answer: 'MS.30P閫氳繃CE鍥介檯璁よ瘉锛圧ED/EMC/LVD锛夛紝鑾烽鍙藉畼鏂硅鍙敤锛屾寔鏈夊澶嬫浗瀹朵笓鍒╋紝绗﹀悎鍥介檯椹湳璁绯冨璁惧畨鍏ㄦ爣鍑€?
            },
            {
              question: '璐ㄤ繰鍜屽敭鍚庡寘鍚互涓嬪唴瀹癸紵',
              answer: '鎻愪緵1骞存暣鏈鸿川淇濓紝鍚寮免璐逛竴娆′笂闂ㄥ畨瑁呭強鐜板満鍩硅紩锛?脳24灏忔椂杩滅▼鎶€鏈敮鎸侊紝璐ㄤ繰鏈煎唴杞浠跺崌绾х硶鍏嶈垂銆?
            }
          ].map((item, index) => (
            <details
              key={index}
              style={{
                borderBottom: '1px solid #E8E4DC',
                padding: '20px 0'
              }}
            >
              <summary style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#0A1E3F',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none'
              }}>
                {item.question}
                <span style={{ color: '#C9A84C', fontSize: '20px', marginLeft: '12px' }}>+</span>
              </summary>
              <p style={{
                fontSize: '14px',
                color: '#5A6478',
                lineHeight: 1.7,
                marginTop: '16px'
              }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 璧勬枡涓嬭浇 */}
      <div style={{ background: '#fff', padding: '40px 6%' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C', textAlign: 'center', marginBottom: '8px' }}>鍏嶈垂璧勬枡涓嬭浇</div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0A1E3F', textAlign: 'center', marginBottom: '32px' }}>鑾峰彇 Horse-MS.30P 瀹屾暣璧勬枡鍖?/h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E0D8C8', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(201,168,76,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '24px' }}>📄</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#0A1E3F', marginBottom: '4px' }}>MS.30P 浜у搧璁炬柦</div>
                <div style={{ fontSize: '13px', color: '#5A6478' }}>PDF, 8.5 MB</div>
              </div>
              <button style={{ padding: '10px 20px', background: '#C9A84C', color: '#0A1E3F', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                涓嬭浇
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}