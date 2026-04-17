'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('home');
  const tn = useTranslations('nav');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <footer dir={isRTL ? 'rtl' : 'ltr'} style={{ background: '#070F20', color: '#fff', padding: '60px 40px 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* 四列主体 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" style={{ paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

          {/* 第一列：Logo + 简介 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="/images/logo02.png" alt="Equestrian Simulators" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '280px' }}>
              {t('footer.companyDesc')}
            </p>
            {/* 社交图标 */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" aria-label="Discord" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.081.114 18.104.132 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
              <a href="#" aria-label="X/Twitter" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 第二列：产品 */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              {t('footer.productsTitle')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Horse-MS.30P', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
                { label: 'Pony-MS.30', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
                { label: 'Racehorse-MS.20', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
              ].map(item => (
                <li key={item.label} style={{ marginBottom: '14px' }}>
                  <Link href={item.href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 第三列：公司 */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              {t('footer.companyTitle')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: t('footer.aboutUs'), href: '/about' },
                { label: t('footer.cases'), href: '/cases' },
                { label: t('footer.blog'), href: '/blog' },
                { label: t('footer.downloads'), href: '/downloads' },
              ].map(item => (
                <li key={item.href} style={{ marginBottom: '12px' }}>
                  <Link href={item.href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '14px' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 第四列：联系方式 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isRTL ? 'flex-end' : 'flex-start' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px', textAlign: isRTL ? 'right' : 'left', width: '100%' }}>
              {t('footer.contactTitle')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: isRTL ? 'flex-end' : 'flex-start', width: '100%' }}>
              {[
                { icon: '📧', label: t('footer.email'), ltr: true },
                { icon: '💬', label: t('footer.whatsapp'), ltr: true },
                { icon: '📍', label: t('footer.address'), ltr: false },
                { icon: '🕐', label: t('footer.hours'), ltr: false },
              ].map((item, i) => (
                <div key={i} style={{ direction: isRTL ? 'rtl' : 'ltr', width: '100%', fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
                  <span style={{ fontSize: '15px', marginLeft: isRTL ? '8px' : '0', marginRight: isRTL ? '0' : '8px' }}>{item.icon}</span>
                  <span dir={isRTL && item.ltr ? 'ltr' : undefined} style={{ unicodeBidi: isRTL && item.ltr ? 'embed' : undefined }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CE认证徽章 */}
            <div style={{ marginTop: '24px', display: 'flex', width: 'fit-content', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '8px', background: 'rgba(201,168,76,0.08)', direction: isRTL ? 'rtl' : 'ltr', marginLeft: isRTL ? 'auto' : '0', marginRight: isRTL ? '0' : 'auto' }}>
              <span style={{ fontSize: '18px' }}>🏆</span>
              <span style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>{t('footer.certified')}</span>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0" style={{ padding: '20px 0' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            {t('footer.copyright')}
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: t('footer.privacy'), href: '#' },
              { label: t('footer.terms'), href: '#' },
              { label: t('footer.sitemap'), href: '#' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
