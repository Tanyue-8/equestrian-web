// Blog列表页 - Server Component
export const dynamic = 'force-dynamic'; // 每次请求都重新获取

import BlogContent from './BlogContent';

interface BlogPageProps {
  params: Promise<{
    locale: string;
  }>;
}

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

async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const response = await fetch(
      `${apiUrl}/api/blog?locale=${locale}&limit=50`,
      { cache: 'no-store' } // 不缓存,每次都获取最新数据
    );
    
    if (!response.ok) {
      console.error('Failed to fetch blog posts:', response.statusText);
      return [];
    }
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = await getBlogPosts(locale);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Equestrian Simulators Blog",
            "description": "Industry insights, product guides and training tips for equestrian simulators",
            "url": "https://www.equestrian-simulators.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "广东探月教育设备有限公司",
              "alternateName": "模拟马®",
              "url": "https://www.equestrian-simulators.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.equestrian-simulators.com/images/logo02.png"
              }
            }
          })
        }}
      />

      <BlogContent posts={posts} locale={locale} />
    </>
  );
}
