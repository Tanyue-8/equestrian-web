'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';

interface CaseImageSliderProps {
  images: { src: string; alt: string }[];
}

function CaseImageSlider({ images }: CaseImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;
  
  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, hasMultiple]);
  
  return (
    <div className="case-slider-wrap" style={{ position: 'relative', width: '100%', height: '500px', minHeight: '500px', maxHeight: '500px', overflow: 'hidden', borderRadius: '16px 0 0 16px', flexShrink: 0, background: '#fff' }}>
      <img
        src={images[current].src}
        alt={images[current].alt}
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', transition: 'opacity 0.4s ease' }}
      />
      {hasMultiple && (
        <>
          <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} style={{
            position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
            width: 36, height: 36, color: '#fff', fontSize: 20, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2
          }}>‹</button>
          <button onClick={() => setCurrent((current + 1) % images.length)} style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
            width: 36, height: 36, color: '#fff', fontSize: 20, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2
          }}>›</button>
          <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 2 }}>
            {images.map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? 20 : 6, height: 6, borderRadius: 3,
                background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer', transition: 'all 0.3s'
              }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface Case {
  badge: string;
  badgeColor: string;
  title: string;
  clientBackground: string;
  challenge: string;
  solution: string;
  quote: string | null;
  images: { src: string; alt: string }[];
  buttonText: string;
  buttonColor: string;
  buttonLink: string;
}

interface Advantage {
  icon: string;
  title: string;
  desc: string;
}

interface CasesContentProps {
  locale: string;
  colors: {
    black: string;
    gold: string;
    purple: string;
    grayBg: string;
    text: string;
    textLight: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  intro: string;
  caseLabels: {
    clientBackground: string;
    challengesFaced: string;
    ourSolution: string;
  };
  cases: Case[];
  whyChooseUs: {
    label: string;
    title: string;
    subtitle: string;
    yearsOfExperience: string;
    yearsLabel: string;
    advantages: Advantage[];
  };
}

export default function CasesContent({ locale, colors, hero, intro, caseLabels, cases, whyChooseUs }: CasesContentProps) {
  return (
    <>
      <style>{`
        /* 案例卡片移动端响应式 */
        @media (max-width: 768px) {
          .case-card {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .case-slider-wrap {
            border-radius: 16px 16px 0 0 !important;
            height: 300px !important;
            min-height: 300px !important;
            max-height: 300px !important;
            order: -1 !important;
          }
          .case-content {
            padding: 32px 24px !important;
          }
          .cases-section {
            padding: 40px 20px !important;
          }
          .why-choose-advantages {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .why-choose-section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
      {/* Hero Section - 居中布局（与Downloads页面一致）*/}
      <section style={{ 
        padding: '143px 40px 60px',  // 顶部143px 
        background: colors.grayBg, 
        textAlign: 'center',
        borderBottom: '1px solid #E0D8C8'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '48px',  // 与Downloads一致
            fontWeight: 700,   // 与Downloads一致
            color: colors.black, 
            marginBottom: '8px',   // 与Downloads一致
            lineHeight: 1.1,
            letterSpacing: '-0.5px'  // 与Downloads一致
          }}>
            {hero.title}
          </h1>
          <p style={{ 
            fontSize: '16px',  // 与Downloads一致
            color: colors.textLight, 
            lineHeight: 1.7,
            margin: 0  // 与Downloads一致
          }}>
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro 板块已移除，内容合并到"为什么选择我们"板块 */}

      {/* Cases Grid */}
      <section className="cases-section" style={{ padding: '80px 60px', background: colors.grayBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {cases.map((c, index) => (
            <div key={index} className="case-card" style={{
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 0,
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              minHeight: '500px'
            }}>
              {/* Image */}
              {index % 2 === 0 && <CaseImageSlider images={c.images} />}

              {/* Content */}
              <div className="case-content" style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#fff',
                    background: c.badgeColor,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                  }}>
                    {c.badge}
                  </div>
                  <h2 style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 700, color: colors.black, marginBottom: '24px', lineHeight: 1.3 }}>
                    {c.title}
                  </h2>

                  {/* Labels */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: c.badgeColor, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>
                        {caseLabels.clientBackground}
                      </div>
                      <p style={{ fontSize: '13px', color: colors.textLight, lineHeight: 1.6 }}>
                        {c.clientBackground}
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: c.badgeColor, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>
                        {caseLabels.challengesFaced}
                      </div>
                      <p style={{ fontSize: '13px', color: colors.textLight, lineHeight: 1.6 }}>
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: c.badgeColor, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>
                        {caseLabels.ourSolution}
                      </div>
                      <p style={{ fontSize: '13px', color: colors.textLight, lineHeight: 1.6 }}>
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  {c.quote && (
                    <div style={{
                      borderLeft: `4px solid ${c.badgeColor}`,
                      paddingLeft: '16px',
                      marginBottom: '24px',
                      fontStyle: 'italic',
                      fontSize: '13px',
                      color: colors.textLight,
                      lineHeight: 1.6
                    }}>
                      {c.quote}
                    </div>
                  )}
                </div>

                <Link href={c.buttonLink} style={{
                  display: 'inline-block',
                  padding: '12px 28px',
                  background: c.buttonColor,
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  {c.buttonText}
                </Link>
              </div>

              {/* Image (right side for odd indexes) */}
              {index % 2 === 1 && <CaseImageSlider images={c.images} />}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section" style={{ padding: '80px 60px', background: '#fff' }}>
        <div className="why-choose-advantages" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Left: Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="/images/why-us.png"
              alt="Equestrian Simulator in Training Facility"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
              }}
            />
            {/* Badge: 年经验 */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: colors.gold,
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(201,168,76,0.4)'
            }}>
              <div style={{ fontSize: '16px', fontWeight: 900, lineHeight: 1 }}>{whyChooseUs.yearsOfExperience}</div>
              <div style={{ fontSize: '8px', fontWeight: 600, marginTop: '2px', opacity: 0.9 }}>{whyChooseUs.yearsLabel}</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
              color: colors.gold,
              background: 'rgba(201,168,76,0.1)',
              border: `1px solid ${colors.gold}`,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              {whyChooseUs.label}
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: 900,
              color: colors.black,
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              {whyChooseUs.title}
            </h2>

            {/* Subtitle - 合并了原intro内容 */}
            <p style={{
              fontSize: '14px',
              color: colors.textLight,
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>
              {intro} {whyChooseUs.subtitle}
            </p>

            {/* Advantages Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              {whyChooseUs.advantages.map((adv, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    fontSize: '24px',
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(201,168,76,0.1)',
                    borderRadius: '8px'
                  }}>
                    {adv.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: colors.text,
                      marginBottom: '4px'
                    }}>
                      {adv.title}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: colors.textLight,
                      lineHeight: 1.5
                    }}>
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
