'use client';
import { Link } from '@/i18n/navigation';

export default function FloatButton() {
  return (
    <>
      {/* 仅移动端显示 */}
      <Link
        href="/contact"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #DDB96A, #C9A84C)',
          boxShadow: '0 4px 20px rgba(201,168,76,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          zIndex: 998,
          textDecoration: 'none',
        }}
        className="float-btn"
      >
        📋
      </Link>
      <style>{`
        /* PC端默认隐藏 */
        .float-btn { display: none; }

        /* 仅移动端显示 */
        @media (max-width: 1023px) {
          .float-btn { display: flex; }
        }
      `}</style>
    </>
  );
}