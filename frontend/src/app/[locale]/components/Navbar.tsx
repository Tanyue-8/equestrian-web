'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { Link, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

const languages = [
  { code: 'zh', label: '中文', short: 'ZH' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'ar', label: 'بالعربية', short: 'AR' },
  { code: 'ja', label: '日本語', short: 'JP' },
  { code: 'ko', label: '한국어', short: 'KO' },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');
  const tc = useTranslations('common');

  const [scrolled, setScrolled] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [solutionDropdown, setSolutionDropdown] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsContactPage(/\/contact\/?$/.test(pathname));
    setIsHomePage(pathname === '/' || /^\/(zh|en|es|ja|ar|ko|de)\/?$/.test(pathname));
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#lang-switcher')) setLangDropdown(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const switchLocale = (code: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(zh|en|es|ja|ar|ko|de)/, '') || '/';
    router.replace(pathWithoutLocale, { locale: code });
    setLangDropdown(false);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('home'), href: '/' },
    {
      label: t('products'), dropdown: 'products', items: [
        { label: 'Horse-MS.30P', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
        { label: 'Pony-MS.30', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
        { label: 'Racehorse-MS.20', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
      ]
    },
    { label: t('compare'), href: '/compare' },
    {
      label: t('solutions'), dropdown: 'solutions', items: [
        { label: t('solClub'), href: '/solutions/club' },
        { label: t('solEducation'), href: '/solutions/education' },
        { label: t('solRehab'), href: '/solutions/rehab' },
        { label: t('solRacing'), href: '/solutions/racing' },
        { label: t('solHome'), href: '/solutions/home' },
        { label: t('solEvent'), href: '/solutions/event' },
      ]
    },
    { label: t('cases'), href: '/cases' },
    { label: t('blog'), href: '/blog' },
    { label: t('downloads'), href: '/downloads' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  return (
    <>
      <div
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-transform duration-300 translate-y-0 ${scrolled ? 'md:-translate-y-[80px]' : ''}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
      >
        {/* 顶部行：80px，Logo行 */}
        <div
          id="navbar-top-row"
          style={{
            height: '80px',
            background: (isHomePage && !scrolled && !isMobile) ? 'transparent' : '#0A1E3F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            boxSizing: 'border-box',
          }}
        >
          {/* 左侧语言切换器 */}
          <div id="lang-switcher" style={{ position: 'relative' }}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none',
                cursor: 'pointer', fontSize: '14px', fontWeight: 500,
                padding: '4px 8px', borderRadius: '4px',
              }}
            >
              <span style={{ fontSize: '18px' }}>🌐</span>
              <span>{currentLang.label}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={langDropdown ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
              </svg>
            </button>
            {langDropdown && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0,
                background: '#fff', borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                padding: '6px', minWidth: '160px', zIndex: 200,
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    style={{
                      display: 'flex', alignItems: 'center', width: '100%',
                      padding: '10px 14px', fontSize: '14px',
                      color: currentLang.code === lang.code ? '#C9A84C' : '#333',
                      background: 'none', border: 'none', borderRadius: '6px',
                      cursor: 'pointer', textAlign: 'left',
                      fontWeight: currentLang.code === lang.code ? 600 : 400,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 中间 Logo */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Link href="/">
              <img src="/logo.png" alt="Equestrian Simulators - Professional Equestrian Simulator Manufacturer China" style={{ height: '52px' }} />
            </Link>
          </div>

          {/* 右侧获取报价按钮 - 桌面端 */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button
                id="nav-quote-btn"
                style={{
                  padding: '10px 24px', background: '#C9A84C', color: '#fff',
                  border: 'none', borderRadius: '6px', fontSize: '14px',
                  fontWeight: 600, cursor: 'pointer',
                }}
              >
                {tc('getQuote')}
              </button>
            </Link>
          </div>

          {/* 汉堡图标 - 仅手机显示 */}
          <button
            id="hamburger-btn"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="打开菜单"
            style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', width: '40px', height: '40px', gap: '6px',
              marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', transition: 'all 0.3s', transformOrigin: 'center', transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', transition: 'all 0.3s', opacity: mobileMenuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', transition: 'all 0.3s', transformOrigin: 'center', transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
          </button>
        </div>

        {/* 第二行：40px，菜单栏 - 桌面端 */}
        <div
          className="hidden md:flex"
          style={{
            height: '40px',
            background: isHomePage && !scrolled ? 'transparent' : '#0A1E3F',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: scrolled ? '0 2px 12px rgba(10,15,26,0.08)' : 'none',
            transition: 'box-shadow 0.36s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px' }}>
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{ position: 'relative', height: '100%' }}
                onMouseEnter={() => {
                  if (item.dropdown === 'products') setProductDropdown(true);
                  if (item.dropdown === 'solutions') setSolutionDropdown(true);
                }}
                onMouseLeave={() => {
                  if (item.dropdown === 'products') setProductDropdown(false);
                  if (item.dropdown === 'solutions') setSolutionDropdown(false);
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    style={{
                      padding: '0 14px', height: '40px', lineHeight: '40px',
                      fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.9)',
                      textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    style={{
                      padding: '0 14px', height: '40px', lineHeight: '40px',
                      fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.9)',
                      display: 'inline-flex', alignItems: 'center', cursor: 'default',
                    }}
                  >
                    {item.label} ▾
                  </span>
                )}

                {/* 下拉菜单 */}
                {item.dropdown && (
                  <div style={{
                    position: 'absolute', top: '40px', left: 0,
                    background: '#0A1E3F', minWidth: '200px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    display: (item.dropdown === 'products' && productDropdown) || (item.dropdown === 'solutions' && solutionDropdown) ? 'block' : 'none',
                    zIndex: 200,
                  }}>
                    {item.items?.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        style={{
                          display: 'block', padding: '10px 16px',
                          color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                          fontSize: '13px', transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 滚动后右侧小报价按钮 */}
          {scrolled && (
            <Link href="/contact" style={{ position: 'absolute', right: '32px', top: '50%', transform: 'translateY(-50%)' }}>
              <button style={{
                padding: '6px 16px', background: '#C9A84C', color: '#fff',
                border: 'none', borderRadius: '4px', fontSize: '12px',
                fontWeight: 600, cursor: 'pointer',
              }}>
                {tc('getQuote')}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* 移动端全屏菜单 */}
      {mounted && createPortal(
        <div style={{
          position: 'fixed', top: '80px', left: 0, right: 0, bottom: 0,
          background: '#0A1E3F', zIndex: 1001, overflowY: 'scroll',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
            {/* 首页 */}
            <Link href="/" style={{
              padding: '16px 0', fontSize: '18px', fontWeight: 600,
              color: 'white', textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>{t('home')}</Link>

            {/* 产品系列滑动 */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '16px 0' }}>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>{t('products')}</div>
              <div style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
                  {[
                    { label: 'Horse-MS.30P', href: '/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator' },
                    { label: 'Pony-MS.30', href: '/ai-equestrian-simulators/ms30-education-pony-simulator' },
                    { label: 'Racehorse-MS.20', href: '/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator' },
                  ].map(p => (
                    <Link key={p.href} href={p.href} style={{
                      flexShrink: 0, padding: '12px 20px', background: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px', color: 'white', fontSize: '14px',
                      fontWeight: 500, textDecoration: 'none',
                    }}>{p.label}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 对比 */}
            <Link href="/compare" style={{
              padding: '16px 0', fontSize: '18px', fontWeight: 600,
              color: 'white', textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>{t('compare')}</Link>

            {/* 解决方案滑动 */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '16px 0' }}>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>{t('solutions')}</div>
              <div style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div style={{ display: 'flex', gap: '12px', width: 'max-content' }}>
                  {[
                    { label: t('solClub'), href: '/solutions/club' },
                    { label: t('solEducation'), href: '/solutions/education' },
                    { label: t('solRehab'), href: '/solutions/rehab' },
                    { label: t('solRacing'), href: '/solutions/racing' },
                    { label: t('solHome'), href: '/solutions/home' },
                    { label: t('solEvent'), href: '/solutions/event' },
                  ].map(s => (
                    <Link key={s.href} href={s.href} style={{
                      flexShrink: 0, padding: '12px 16px', background: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px', color: 'white', fontSize: '14px',
                      fontWeight: 500, textDecoration: 'none',
                    }}>{s.label}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 其余菜单项 */}
            {[
              { label: t('cases'), href: '/cases' },
              { label: t('blog'), href: '/blog' },
              { label: t('downloads'), href: '/downloads' },
              { label: t('about'), href: '/about' },
              { label: t('contact'), href: '/contact' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{
                padding: '16px 0', fontSize: '18px', fontWeight: 600,
                color: 'white', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>{item.label}</Link>
            ))}

            {/* 底部CTA */}
            <div style={{ marginTop: '32px', paddingBottom: '32px' }}>
              <Link href="/contact" style={{
                display: 'block', width: '100%', padding: '16px 0',
                background: '#C9A84C', color: 'white', textAlign: 'center',
                fontSize: '18px', fontWeight: 700, borderRadius: '12px', textDecoration: 'none',
              }}>{tc('getQuote')}</Link>
            </div>

            {/* 语言切换 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', marginTop: '24px' }}>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px', letterSpacing: '1px' }}>
                LANGUAGE
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    style={{
                      padding: '8px 16px', borderRadius: '20px',
                      border: currentLang.code === lang.code ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.25)',
                      background: currentLang.code === lang.code ? 'rgba(201,168,76,0.2)' : 'transparent',
                      color: currentLang.code === lang.code ? '#C9A84C' : 'rgba(255,255,255,0.8)',
                      fontSize: '13px', cursor: 'pointer',
                      fontWeight: currentLang.code === lang.code ? 600 : 400,
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
