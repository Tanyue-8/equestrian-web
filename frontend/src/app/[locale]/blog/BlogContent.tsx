'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  summary: string | null;
  featured_image: string | null;
  author: string | null;
  tags: string[] | null;
  published_at: string | null;
}

interface BlogContentProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogContent({ posts, locale }: BlogContentProps) {
  const [activeTab, setActiveTab] = useState('全部');
  
  // 固定的主分类（根据语言）
  const mainCategories = locale === 'zh' 
    ? ['全部', '产品对比', '训练技术', '行业资讯']
    : ['All', 'Product Comparison', 'Training Techniques', 'Industry News'];

  // 过滤博客：检查post的tags中是否包含当前分类
  const filteredPosts = activeTab === '全部' || activeTab === 'All'
    ? posts 
    : posts.filter(post => post.tags && post.tags.includes(activeTab));

  // 格式化日期
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (locale === 'zh') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const colors = {
    black: '#0A1E3F',
    gold: '#C9A84C',
    grayBg: '#F5F0E8',
    text: '#1C2333',
    textLight: '#5A6478',
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        padding: '140px 40px 60px',
        textAlign: 'center',
        background: colors.grayBg,
        borderBottom: '1px solid #E0D8C8'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          color: colors.black,
          marginBottom: '8px',
          letterSpacing: '-0.5px'
        }}>
          {locale === 'zh' ? '博客' : 'Blog'}
        </h1>
        <p style={{
          fontSize: '16px',
          color: colors.textLight,
          margin: 0
        }}>
          {locale === 'zh' ? '行业洞察、产品解读与训练技巧' : 'Industry Insights, Product Guides & Training Tips'}
        </p>
      </section>

      {/* Tabs */}
      <section style={{ padding: '40px 40px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '16px', borderBottom: '1px solid #E8E4DC', flexWrap: 'wrap' }}>
          {mainCategories.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 20px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? `3px solid ${colors.gold}` : '3px solid transparent',
                color: activeTab === tab ? colors.black : colors.textLight,
                fontWeight: activeTab === tab ? 700 : 400,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '60px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
          {filteredPosts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                borderRadius: '12px',
                overflow: 'hidden',
                background: colors.grayBg,
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Cover */}
              <div style={{
                width: '100%',
                height: '220px',
                background: post.featured_image 
                  ? `url(${post.featured_image}) center/cover` 
                  : `linear-gradient(135deg, ${colors.gold}, #8B7355)`,
                position: 'relative'
              }}>
                {post.tags && post.tags.length > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 12px',
                    background: colors.gold,
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 700,
                    borderRadius: '6px'
                  }}>
                    {post.tags[0]}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: colors.black,
                  marginBottom: '12px',
                  lineHeight: 1.4
                }}>
                  {post.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: colors.textLight,
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.summary || ''}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '13px',
                  color: colors.textLight
                }}>
                  <span>{formatDate(post.published_at)}</span>
                  {post.author && <span>{post.author}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: colors.textLight
          }}>
            <p style={{ fontSize: '16px' }}>
              {locale === 'zh' ? '暂无博客文章' : 'No blog posts yet'}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
