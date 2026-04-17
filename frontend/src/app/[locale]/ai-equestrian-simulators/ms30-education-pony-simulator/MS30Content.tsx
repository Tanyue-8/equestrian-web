'use client';

import { useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { ProductData } from '@/lib/api';

interface MS30ContentProps {
  product: ProductData;
  locale: string;
}

export default function MS30Content({ product, locale }: MS30ContentProps) {
  const t = useTranslations('ms30');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const immersiveTags = t.raw('immersive.tags') as string[];
  const card1Tags = t.raw('features.card1.tags') as string[];
  const card2Tags = t.raw('features.card2.tags') as string[];
  const card3Tags = t.raw('features.card3.tags') as string[];
  const specsLeft = t.raw('specs.left') as string[][];
  const specsRight = t.raw('specs.right') as string[][];
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>;

  return (
    <>
      <style>{`
        .feature-cards-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ position: 'relative', background: '#0A1E3F', minHeight: '600px' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 85% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)'
        }}></div>

        <div id="ms30-hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px',
          alignItems: 'center', maxWidth: '1200px', margin: '0 auto',
          padding: '100px 60px 80px', minHeight: '520px'
        }}>
          <div>
            {/* Badge */}
            <div style={{
              background: 'rgba(201,168,76,0.3)', border: '1px solid #C9A84C',
              borderRadius: '20px', fontSize: '12px', fontWeight: 700, color: '#DDB96A',
              letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px',
              display: 'inline-block', padding: '6px 16px'
            }}>
              {t('badge')}
            </div>

            <h1 style={{
              fontSize: '88px', fontWeight: 900, color: '#fff',
              letterSpacing: '-4px', lineHeight: 0.9, marginBottom: '24px'
            }}>
              MS<span style={{
                background: 'linear-gradient(135deg, #DDB96A, #C9A84C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>.30</span>
            </h1>

            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
              {t('subtitle')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'center', marginTop: '40px' }}>
              <Link href="/contact" style={{
                padding: '14px 32px', background: '#C9A84C', color: '#0A1E3F',
                border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: 700,
                textDecoration: 'none', cursor: 'pointer'
              }}>
                {t('btnQuote')}
              </Link>
              <Link href="/compare" style={{
                fontSize: '13px', color: 'rgba(255,255,255,0.6)', background: 'none',
                border: 'none', cursor: 'pointer', textDecoration: 'none',
                display: 'inline-block', padding: '14px 0'
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {t('btnCompare')} →
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <style>{`@keyframes pd2float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }`}</style>
            <img
              src="/images/ms30.png"
              alt="MS.30 Pony Equestrian Simulator for Schools and Riding Clubs"
              style={{
                width: '100%', maxWidth: '480px', height: '420px',
                objectFit: 'contain', objectPosition: 'center',
                filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.3))',
                animation: 'pd2float 4s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </section>

      {/* Immersive Section */}
      <section id="ms30-immersive-section" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <img src="/images/ms30-networked-classroom.jpg"
          alt="MS.30 multi-rider networked equestrian training system"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,30,63,0.85) 0%, rgba(10,30,63,0.3) 100%)'
        }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '60px 6%' }}>
          <div style={{
            display: 'inline-block', padding: '8px 16px', border: '1px solid #C9A84C',
            borderRadius: '20px', fontSize: '12px', fontWeight: 600,
            letterSpacing: '1.5px', color: '#C9A84C', marginBottom: '16px'
          }}>
            {t('immersive.tag')}
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            {t('immersive.title')}
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '600px' }}>
            {t('immersive.desc')}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {immersiveTags.map((tag, index) => (
              <span key={index} style={{
                padding: '6px 14px', border: '1px solid #C9A84C',
                borderRadius: '16px', fontSize: '12px', fontWeight: 600, color: '#C9A84C'
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: '80px 6%', background: '#F5F0E8', borderTop: '1px solid #E0D8C8' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1E3F', marginBottom: '8px' }}>
            {t('features.title')}
          </h2>
          <p style={{ fontSize: '16px', color: '#5A6478' }}>{t('features.subtitle')}</p>
        </div>

        <div style={{ position: 'relative' }}>
          {scrollLeft > 0 && (
            <button onClick={() => scrollRef.current?.scrollBy({ left: -370, behavior: 'smooth' })}
              style={{
                position: 'absolute', left: '-18px', top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid #E0D8C8', background: '#fff', cursor: 'pointer',
                fontSize: '18px', color: '#C9A84C', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>‹</button>
          )}
          {canScrollRight && (
            <button onClick={() => scrollRef.current?.scrollBy({ left: 370, behavior: 'smooth' })}
              style={{
                position: 'absolute', right: '-18px', top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid #E0D8C8', background: '#fff', cursor: 'pointer',
                fontSize: '18px', color: '#C9A84C', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>›</button>
          )}

          <div ref={scrollRef}
            onScroll={(e) => {
              const t = e.currentTarget;
              setScrollLeft(t.scrollLeft);
              setCanScrollRight(t.scrollLeft < t.scrollWidth - t.clientWidth);
            }}
            style={{
              display: 'flex', flexDirection: 'row', gap: '24px', overflowX: 'auto',
              paddingBottom: '16px', paddingLeft: '4px', paddingRight: '24px',
              scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none'
            }}
            className="feature-cards-container">

            {/* Card 1 */}
            <div style={{
              flex: '0 0 calc(33.333% - 16px)', minWidth: '280px', scrollSnapAlign: 'start',
              background: '#ffffff', border: '1px solid #E0D8C8', borderRadius: '20px',
              padding: '40px 32px', transition: 'all 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.3)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#E0D8C8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎓</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1E3F', marginBottom: '12px' }}>
                {t('features.card1.title')}
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.6, marginBottom: '20px' }}>
                {t('features.card1.desc')}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {card1Tags.map((tag, index) => (
                  <span key={index} style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px', color: '#0A1E3F', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              flex: '0 0 calc(33.333% - 16px)', minWidth: '280px', scrollSnapAlign: 'start',
              backgroundImage: "url('/images/ms30-group-training.jpg')", backgroundSize: 'cover',
              backgroundPosition: 'center', border: '1px solid #C9A84C', borderTop: '3px solid #C9A84C',
              borderRadius: '20px', padding: '40px 32px', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '20px', background: 'linear-gradient(180deg, rgba(8,12,24,0.08) 0%, rgba(8,12,24,0.18) 35%, rgba(8,12,24,0.72) 65%, rgba(8,12,24,0.82) 100%)', zIndex: 0 }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🐎</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {t('features.card2.title')}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '20px' }}>
                  {t('features.card2.desc')}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {card2Tags.map((tag, index) => (
                    <span key={index} style={{ padding: '4px 10px', background: 'rgba(201,168,76,0.2)', borderRadius: '12px', fontSize: '11px', fontWeight: 600, color: '#C9A84C', border: '1px solid rgba(201,168,76,0.5)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              flex: '0 0 calc(33.333% - 16px)', minWidth: '280px', scrollSnapAlign: 'start',
              background: '#ffffff', border: '1px solid #E0D8C8', borderRadius: '20px',
              padding: '40px 32px', transition: 'all 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.3)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#E0D8C8'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛡️</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0A1E3F', marginBottom: '12px' }}>
                {t('features.card3.title')}
              </h3>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.6, marginBottom: '20px' }}>
                {t('features.card3.desc')}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {card3Tags.map((tag, index) => (
                  <span key={index} style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px', color: '#0A1E3F', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section style={{ padding: '80px 6%', background: '#F5F0E8', borderTop: '1px solid #E0D8C8', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1E3F', marginBottom: '40px' }}>
          {t('video.title')}
        </h2>
        {product.video_file && (
          <video
            src={product.video_file}
            poster={product.video_poster || undefined}
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
        )}
        {!product.video_file && (
          <div style={{
            padding: '60px 20px',
            background: 'rgba(201,168,76,0.1)',
            borderRadius: '20px',
            color: '#5A6478',
            fontSize: '14px'
          }}>
            视频即将上线
          </div>
        )}
      </section>

      {/* Technical Specifications */}
      <section style={{ padding: '80px 0', background: '#F5F0E8', borderTop: '1px solid #E0D8C8', width: '100%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1E3F', marginBottom: '14px' }}>
              {t('specs.title')}
            </h2>
            <div style={{ display: 'block', width: '40px', height: '3px', background: 'linear-gradient(90deg, #C9A84C, #DDB96A)', margin: '0 auto 48px', borderRadius: '2px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1100px', margin: '40px auto 0' }}>
            <div style={{ width: '100%', paddingRight: '32px', borderRight: '1px solid #E0D8C8' }}>
              {specsLeft.map(([label, value], index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0D8C8' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ flex: '0 0 45%', padding: '18px 16px 18px 0', color: '#8A9AAA', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{label}</div>
                  <div style={{ flex: 1, padding: '18px 0', color: '#0A1E3F', fontWeight: 600, fontSize: '14px' }}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{ width: '100%', paddingLeft: '32px' }}>
              {specsRight.map(([label, value], index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0D8C8' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ flex: '0 0 45%', padding: '18px 16px 18px 0', color: '#8A9AAA', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{label}</div>
                  <div style={{ flex: 1, padding: '18px 0', color: '#0A1E3F', fontWeight: 600, fontSize: '14px' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section style={{ padding: '72px 6%', background: '#F9F7F4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, color: '#1C2333', marginBottom: '20px', lineHeight: 1.35 }}>
            {t('whatIs.title')}
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', color: '#5A6478', lineHeight: 1.9, textAlign: 'left' }}>
            {t('whatIs.desc')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '36px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#C9A84C' }}>3</div>
              <div style={{ fontSize: '13px', color: '#5A6478', marginTop: '4px' }}>{t('whatIs.stat1')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#C9A84C' }}>RDA</div>
              <div style={{ fontSize: '13px', color: '#5A6478', marginTop: '4px' }}>{t('whatIs.stat2')}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#C9A84C' }}>3+</div>
              <div style={{ fontSize: '13px', color: '#5A6478', marginTop: '4px' }}>{t('whatIs.stat3')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1E3F', textAlign: 'center', marginBottom: '40px' }}>
            {t('faq.title')}
          </h2>
          {faqItems.map((item, index) => (
            <details key={index} style={{ borderBottom: '1px solid #E8E4DC', padding: '20px 0' }}>
              <summary style={{ fontSize: '15px', fontWeight: 600, color: '#0A1E3F', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                {item.q}
                <span style={{ color: '#C9A84C', fontSize: '20px', marginLeft: '12px' }}>+</span>
              </summary>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.7, marginTop: '16px' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <div style={{ background: '#fff', padding: '40px 6%' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C', textAlign: 'center', marginBottom: '8px' }}>
            {t('downloads.tag')}
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0A1E3F', textAlign: 'center', marginBottom: '32px' }}>
            {t('downloads.title')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E0D8C8', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '36px', flexShrink: 0 }}>📗</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px' }}>{t('downloads.item1.label')}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0A1E3F', marginBottom: '4px' }}>{t('downloads.item1.title')}</div>
                <div style={{ fontSize: '12px', color: '#5A6478' }}>{t('downloads.item1.desc')}</div>
              </div>
              <Link href="/downloads" style={{ display: 'inline-block', padding: '10px 18px', background: '#0A1E3F', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
                {t('downloads.item1.btn')} →
              </Link>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E0D8C8', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '36px', flexShrink: 0 }}>🏅</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px' }}>{t('downloads.item2.label')}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0A1E3F', marginBottom: '4px' }}>{t('downloads.item2.title')}</div>
                <div style={{ fontSize: '12px', color: '#5A6478' }}>{t('downloads.item2.desc')}</div>
              </div>
              <a href="/downloads" style={{ display: 'inline-block', padding: '10px 18px', background: '#0A1E3F', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
                {t('downloads.item2.btn')} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: '80px 6%', background: '#0A1E3F', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
          {t('cta.title')}
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          {t('cta.subtitle')}
        </p>
        <div id="ms30-cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ padding: '14px 32px', background: '#C9A84C', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            📋 {t('cta.btnQuote')}
          </a>
          <a href={`https://wa.me/8613112886222`} target="_blank" rel="noopener noreferrer"
            style={{ padding: '14px 32px', background: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            💬 {t('cta.btnWhatsapp')}
          </a>
          <a href="mailto:info@equestrian-simulators.com"
            style={{ padding: '14px 32px', background: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            ✉️ {t('cta.btnEmail')}
          </a>
        </div>
      </section>
    </>
  );
}