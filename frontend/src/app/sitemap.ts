import { MetadataRoute } from 'next'

const locales = ['en', 'zh', 'ja', 'ko', 'es', 'de', 'ar']
const baseUrl = 'https://www.equestrian-simulators.com'
const lastModifiedDate = new Date('2026-04-20')  // 更新日期

// 获取所有博客文章的函数
async function getBlogPosts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const response = await fetch(`${apiUrl}/api/blog?locale=zh&limit=100`, {
      next: { revalidate: 3600 } // 1小时缓存
    })
    if (!response.ok) {
      console.error('[Sitemap] Failed to fetch blog posts')
      return []
    }
    const posts = await response.json()
    return posts
  } catch (error) {
    console.error('[Sitemap] Error fetching blog posts:', error)
    return []
  }
}

const createLocalizedUrls = (path: string, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'], priority: number) => {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}${path}`,
    lastModified: lastModifiedDate,
    changeFrequency,
    priority,
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = []

  // Homepage (special case - no path after locale)
  locales.forEach((locale) => {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  // Product pages
  urls.push(...createLocalizedUrls('/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator', 'monthly', 0.9))
  urls.push(...createLocalizedUrls('/ai-equestrian-simulators/ms30-education-pony-simulator', 'monthly', 0.9))
  urls.push(...createLocalizedUrls('/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator', 'monthly', 0.9))

  // Other pages
  urls.push(...createLocalizedUrls('/contact', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/compare', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/cases', 'monthly', 0.7))
  urls.push(...createLocalizedUrls('/about', 'monthly', 0.7))
  urls.push(...createLocalizedUrls('/downloads', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/blog', 'weekly', 0.7))

  // 动态获取所有博客文章（新增）
  const blogPosts = await getBlogPosts()
  blogPosts.forEach((post: any) => {
    if (post.slug) {
      urls.push(...createLocalizedUrls(`/blog/${post.slug}`, 'monthly', 0.6))
    }
  })

  // Solution pages
  urls.push(...createLocalizedUrls('/solutions/club', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/solutions/education', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/solutions/rehab', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/solutions/racing', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/solutions/home', 'monthly', 0.8))
  urls.push(...createLocalizedUrls('/solutions/event', 'monthly', 0.8))

  return urls
}