# iFlow Task: 产品详情页拆分为Server+Client组件

## 工作目录
```
D:\equestrian-web\frontend
```

## 目标
将3个产品详情页从Client Component改为混合架构（Server Component + Client Component），以实现SEO优化。

## 任务1：MS30P产品页拆分

### 源文件
```
src/app/[locale]/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator/page.tsx
```

### 输出文件
1. **新建** `MS30PContent.tsx`（同目录）
2. **修改** `page.tsx`

### 具体要求

#### 1. 创建 MS30PContent.tsx（Client Component）
```typescript
'use client';

import { useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface ProductData {
  slug: string;
  model: string;
  name: string;
  description: string;
  featured_image?: string | null;
}

interface MS30PContentProps {
  product: ProductData;
  locale: string;
}

export default function MS30PContent({ product, locale }: MS30PContentProps) {
  const t = useTranslations('ms30p');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 所有现有的交互逻辑保持不变
  // ... 复制原page.tsx中从第14行开始到最后的所有JSX和逻辑

  return (
    <>
      {/* 所有UI代码，但不包含JSON-LD script标签 */}
    </>
  );
}
```

**关键点**：
- ✅ 保留所有 `useRef`, `useState` hooks
- ✅ 保留所有交互函数（滚动、点击等）
- ✅ 保留所有JSX内容（Hero, Features, Specs等所有section）
- ✅ 保留所有样式（inline styles）
- ❌ 不包含JSON-LD `<script>` 标签（这些移到page.tsx）

#### 2. 修改 page.tsx（Server Component）
```typescript
import { getProductBySlugFromAPI } from '@/lib/api';
import { notFound } from 'next/navigation';
import MS30PContent from './MS30PContent';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const dynamic = 'force-static';

export default async function MS30PPage({ params }: PageProps) {
  const { locale } = await params;
  
  // 从FastAPI获取产品数据
  const product = await getProductBySlugFromAPI('horse-ms30p', locale);
  
  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "MS.30P Professional Equestrian Simulator",
            // ... 保持原有JSON-LD内容不变
          })
        }}
      />

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          // ... 保持原有JSON-LD内容不变
        })
      }} />

      {/* 渲染Client Component */}
      <MS30PContent product={product} locale={locale} />
    </>
  );
}
```

**关键点**：
- ✅ 导入 `getProductBySlugFromAPI` from `@/lib/api`
- ✅ 使用 `await params` 获取locale（Next.js 15+）
- ✅ 调用API获取产品数据
- ✅ 保留所有JSON-LD `<script>` 标签
- ✅ 传递 `product` 和 `locale` 给 `MS30PContent`

## 注意事项
1. **不要修改任何样式**：所有inline styles保持原样
2. **不要修改交互逻辑**：所有useState、useRef、事件处理函数保持原样
3. **API已经存在**：`getProductBySlugFromAPI` 在 `src/lib/api.ts` 中已定义
4. **ProductData类型已定义**：在 `src/lib/api.ts` 中
5. **测试方法**：完成后访问 `http://localhost:3000/zh/ai-equestrian-simulators/ms30p-professional-dressage-jumping-simulator` 确认页面正常显示

## 任务2和任务3（后续）
相同方式处理：
- `ms30-education-pony-simulator/page.tsx` → slug: `pony-ms30`
- `ms20-racehorse-jockey-training-simulator/page.tsx` → slug: `racehorse-ms20`

## 预期结果
- ✅ 页面外观和功能完全不变
- ✅ Server端渲染产品数据（SEO友好）
- ✅ Client端处理交互（用户体验良好）
- ✅ 所有7种语言正常工作
