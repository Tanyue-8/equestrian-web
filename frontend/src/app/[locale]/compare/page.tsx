'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ComparePage() {
  const t = useTranslations('compare');

  const colors = {
    black: '#0A1E3F',
    gold: '#C9A84C',
    purple: '#7B4FBF',
    brown: '#8B5E3C',
    grayBg: '#F5F0E8',
    text: '#1C2333',
    textLight: '#5A6478',
    border: '#E0D8C8',
  };

  const ms30pItems = t.raw('which.ms30p_items') as string[];
  const ms30Items = t.raw('which.ms30_items') as string[];
  const ms20Items = t.raw('which.ms20_items') as string[];
  const tableGroups = t.raw('table.groups') as Array<{
    group: string;
    rows: Array<{ label: string; ms30p: string; ms30: string; ms20: string; highlight: boolean }>;
  }>;
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>;

  return (
    <>
      <style>{`
        /* 移动端表格横向滚动 */
        @media (max-width: 768px) {
          .table-scroll-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 0 -20px;
            padding: 0 20px;
          }
          .table-scroll-container::after {
            content: '👈 滑动查看更多';
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(201,168,76,0.9);
            color: #fff;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 600;
            pointer-events: none;
            animation: fadeOut 3s forwards;
          }
          @keyframes fadeOut {
            0%, 70% { opacity: 1; }
            100% { opacity: 0; }
          }
          #compare-which-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          #compare-cta-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
      {/* FAQ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Equestrian Simulator Comparison: MS.30P vs MS.30 vs MS.20",
        "description": "Compare three professional equestrian simulators: MS.30P for dressage and jumping, MS.30 for education and rehabilitation, MS.20 for jockey training.",
        "url": "https://www.equestrian-simulators.com/compare"
      }) }} />

      {/* Hero */}
      <section style={{ background: colors.grayBg, padding: 'calc(120px + 44px) 40px 80px', textAlign: 'center' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: colors.gold, marginBottom: '12px' }}>
          {t('hero.tag')}
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 700, color: colors.black, marginBottom: '8px', letterSpacing: '-0.5px', margin: '0 0 8px 0' }}>
          {t('hero.title')}
        </h1>
        <p style={{ fontSize: '16px', color: colors.textLight, margin: '8px 0 0 0' }}>
          {t('hero.subtitle')}
        </p>
      </section>

      {/* Which section */}
      <section style={{ background: colors.grayBg, padding: '56px 5%' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: colors.black, textAlign: 'center', margin: '0 0 40px 0' }}>
            {t('which.title')}
          </h2>

          <div id="compare-which-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {/* MS.30P */}
            <div style={{ background: '#fff', border: '2px solid #C9A84C', borderRadius: '16px', padding: '28px 24px', position: 'relative', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(201,168,76,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#C9A84C', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '6px 16px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                ⭐ Editor&apos;s Choice
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: colors.gold, marginTop: '8px', marginBottom: '20px' }}>MS.30P</div>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                {ms30pItems.map((item, i) => (
                  <div key={i} style={{ fontSize: '14px', color: colors.textLight, marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#2E7D32', flexShrink: 0 }}>✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: colors.textLight, marginBottom: '16px', fontStyle: 'italic' }}>{t('which.ms30p_desc')}</p>
              <Link href="/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator"
                style={{ display: 'block', width: '100%', padding: '12px', background: colors.gold, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#B8832E'}
                onMouseLeave={e => e.currentTarget.style.background = colors.gold}>
                {t('cta.learnMore')} MS.30P →
              </Link>
            </div>

            {/* MS.30 */}
            <div style={{ background: '#fff', border: '1px solid #E0D8C8', borderRadius: '16px', padding: '28px 24px', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: colors.purple, marginBottom: '20px' }}>MS.30</div>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                {ms30Items.map((item, i) => (
                  <div key={i} style={{ fontSize: '14px', color: colors.textLight, marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#2E7D32', flexShrink: 0 }}>✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: colors.textLight, marginBottom: '16px', fontStyle: 'italic' }}>{t('which.ms30_desc')}</p>
              <Link href="/ai-equestrian-simulators/ms30-education-pony-simulator"
                style={{ display: 'block', width: '100%', padding: '12px', background: colors.purple, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#6B3BAF'}
                onMouseLeave={e => e.currentTarget.style.background = colors.purple}>
                {t('cta.learnMore')} MS.30 →
              </Link>
            </div>

            {/* MS.20 */}
            <div style={{ background: '#fff', border: '1px solid #E0D8C8', borderRadius: '16px', padding: '28px 24px', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: colors.brown, marginBottom: '20px' }}>MS.20</div>
              <div style={{ marginBottom: '24px', flex: 1 }}>
                {ms20Items.map((item, i) => (
                  <div key={i} style={{ fontSize: '14px', color: colors.textLight, marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#2E7D32', flexShrink: 0 }}>✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: colors.textLight, marginBottom: '16px', fontStyle: 'italic' }}>{t('which.ms20_desc')}</p>
              <Link href="/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator"
                style={{ display: 'block', width: '100%', padding: '12px', background: colors.brown, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#7B4E2C'}
                onMouseLeave={e => e.currentTarget.style.background = colors.brown}>
                {t('cta.learnMore')} MS.20 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: colors.black, textAlign: 'center', marginBottom: '40px' }}>
            {t('table.title')}
          </h2>
          <div className="table-scroll-container" style={{ position: 'relative' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: colors.black }}>
                <th style={{ padding: '16px', textAlign: 'left', color: '#fff', fontSize: '15px', fontWeight: 700 }}>—</th>
                <th style={{ padding: '16px', textAlign: 'center', color: colors.gold, fontSize: '15px', fontWeight: 700 }}>MS.30P</th>
                <th style={{ padding: '16px', textAlign: 'center', color: '#A07BE0', fontSize: '15px', fontWeight: 700 }}>MS.30</th>
                <th style={{ padding: '16px', textAlign: 'center', color: '#C49070', fontSize: '15px', fontWeight: 700 }}>MS.20</th>
              </tr>
            </thead>
            <tbody>
              {tableGroups.map((group, gi) => (
                <React.Fragment key={gi}>
                  <tr style={{ background: colors.grayBg }}>
                    <td colSpan={4} style={{ padding: '10px 16px', color: colors.black, fontSize: '13px', fontWeight: 800, letterSpacing: '1px', borderBottom: '1px solid #E0D8C8', textTransform: 'uppercase' }}>
                      {group.group}
                    </td>
                  </tr>
                  {group.rows.map((row, ri) => (
                    <tr key={ri} style={{ background: ri % 2 === 0 ? '#fff' : '#FAFAFA', borderBottom: '1px solid #E0D8C8' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#FFF8EE'}
                      onMouseLeave={e => e.currentTarget.style.background = ri % 2 === 0 ? '#fff' : '#FAFAFA'}>
                      <td style={{ padding: '14px 16px', color: colors.text, fontWeight: 500 }}>{row.label}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center', color: row.highlight ? colors.gold : colors.text, fontWeight: row.highlight ? 600 : 400 }}>{row.ms30p}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center', color: colors.text }}>{row.ms30}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center', color: row.highlight ? colors.gold : colors.text, fontWeight: row.highlight ? 600 : 400 }}>{row.ms20}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0A1E3F', textAlign: 'center', marginBottom: '40px' }}>
            {t('faq.title')}
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} style={{ borderBottom: '1px solid #E8E4DC', padding: '20px 0' }}>
              <summary style={{ fontSize: '15px', fontWeight: 600, color: '#0A1E3F', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                {item.q}
                <span style={{ color: '#C9A84C', fontSize: '20px', marginLeft: '12px' }}>+</span>
              </summary>
              <p style={{ fontSize: '14px', color: '#5A6478', lineHeight: 1.7, marginTop: '16px' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA middle */}
      <section style={{ background: '#fff', padding: '60px 40px 80px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 700, color: colors.black, marginBottom: '12px' }}>
          {t('cta.title')}
        </h3>
        <p style={{ fontSize: '16px', color: colors.textLight, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
          {t('cta.subtitle')}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ padding: '14px 32px', background: colors.gold, color: '#fff', borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            📋 {t('cta.btnConsult')}
          </Link>
          <a href="https://wa.me/8613112886222" target="_blank" rel="noopener noreferrer"
            style={{ padding: '14px 32px', background: 'transparent', color: colors.black, border: `2px solid ${colors.black}`, borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            💬 {t('cta.btnWhatsapp')}
          </a>
          <a href="mailto:info@equestrian-simulators.com"
            style={{ padding: '14px 32px', background: 'transparent', color: colors.black, border: `2px solid ${colors.black}`, borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            ✉️ {t('cta.btnEmail')}
          </a>
        </div>
      </section>

      {/* Bottom CTA grid */}
      <section style={{ background: colors.black, padding: '56px 5%' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div id="compare-cta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }}>
            <div style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '16px', padding: '32px 24px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: colors.gold, marginBottom: '8px' }}>MS.30P</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{t('cta.ms30p_tag')}</div>
              <Link href="/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator"
                style={{ display: 'inline-block', padding: '10px 24px', background: colors.gold, color: '#fff', borderRadius: '6px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = '#B8832E'}
                onMouseLeave={e => e.currentTarget.style.background = colors.gold}>
                {t('cta.learnMore')}
              </Link>
            </div>
            <div style={{ border: '1px solid rgba(123,79,191,0.4)', borderRadius: '16px', padding: '32px 24px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#A07BE0', marginBottom: '8px' }}>MS.30</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{t('cta.ms30_tag')}</div>
              <Link href="/ai-equestrian-simulators/ms30-education-pony-simulator"
                style={{ display: 'inline-block', padding: '10px 24px', background: colors.purple, color: '#fff', borderRadius: '6px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = '#6B3BAF'}
                onMouseLeave={e => e.currentTarget.style.background = colors.purple}>
                {t('cta.learnMore')}
              </Link>
            </div>
            <div style={{ border: '1px solid rgba(139,94,60,0.4)', borderRadius: '16px', padding: '32px 24px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#C49070', marginBottom: '8px' }}>MS.20</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{t('cta.ms20_tag')}</div>
              <Link href="/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator"
                style={{ display: 'inline-block', padding: '10px 24px', background: colors.brown, color: '#fff', borderRadius: '6px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = '#7B4E2C'}
                onMouseLeave={e => e.currentTarget.style.background = colors.brown}>
                {t('cta.learnMore')}
              </Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
            {t('cta.unsure')}
            <Link href="/contact" style={{ color: colors.gold, textDecoration: 'none', fontWeight: 600, marginLeft: '4px' }}>
              {t('cta.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
