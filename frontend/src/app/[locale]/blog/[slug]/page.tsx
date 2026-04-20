// 博客详情页 - Server Component
export const dynamic = 'force-dynamic';

interface BlogDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  summary: string | null;
  content: string;
  category: string | null;  // 新增分类字段
  featured_image: string | null;
  author: string | null;
  tags: string[] | null;
  published_at: string | null;
}

async function getBlogPost(slug: string, locale: string): Promise<BlogPost | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const url = `${apiUrl}/api/blog/${slug}?locale=${locale}`;
    console.log('[Blog Detail] Fetching:', url);
    
    const response = await fetch(url, { cache: 'no-store' });
    
    if (!response.ok) {
      console.error('Failed to fetch blog post:', response.statusText);
      return null;
    }
    
    const post = await response.json();
    console.log('[Blog Detail] Received post:', {
      id: post.id,
      slug: post.slug,
      title: post.title,
      author: post.author,
      locale
    });
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug, locale);

  if (!post) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h1>404 - Blog Post Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  const colors = {
    black: '#0A1E3F',
    gold: '#C9A84C',
    grayBg: '#F5F0E8',
    text: '#1C2333',
    textLight: '#5A6478',
  };

  // 格式化日期
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (locale === 'zh') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary || '',
            "image": post.featured_image || '',
            "datePublished": post.published_at,
            "author": {
              "@type": "Person",
              "name": post.author || "Equestrian Simulators Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "广东探月教育设备有限公司",
              "alternateName": "模拟马®",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.equestrian-simulators.com/images/logo02.png"
              }
            }
          })
        }}
      />

      {/* Hero */}
      <section style={{
        padding: '140px 40px 40px',
        background: colors.grayBg,
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Category + Tags */}
          <div style={{ marginBottom: '16px' }}>
            {/* Category（主分类，突出显示） */}
            {post.category && (
              <span
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: colors.gold,
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 900,
                  borderRadius: '8px',
                  marginRight: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {post.category}
              </span>
            )}
            
            {/* Tags（标签，次要显示） */}
            {post.tags && post.tags.length > 0 && post.tags.map(tag => (
              <span
                key={tag}
                style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  background: 'rgba(201, 168, 76, 0.15)',
                  color: colors.gold,
                  fontSize: '12px',
                  fontWeight: 600,
                  borderRadius: '6px',
                  marginRight: '8px',
                  border: `1px solid ${colors.gold}`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '42px',
            fontWeight: 900,
            color: colors.black,
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div style={{
            display: 'flex',
            gap: '20px',
            fontSize: '14px',
            color: colors.textLight,
            marginBottom: '24px'
          }}>
            <span>{formatDate(post.published_at)}</span>
            {post.author && <span>作者：{post.author}</span>}
          </div>

          {/* Summary */}
          {post.summary && (
            <p style={{
              fontSize: '18px',
              color: colors.textLight,
              lineHeight: 1.7,
              fontStyle: 'italic'
            }}>
              {post.summary}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <section style={{ background: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <img
              src={post.featured_image}
              alt={post.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section style={{ padding: '60px 40px', background: '#fff' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '16px',
            lineHeight: 1.8,
            color: colors.text
          }}
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
        />
      </section>
    </>
  );
}
