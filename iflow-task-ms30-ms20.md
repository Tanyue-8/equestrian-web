# iFlow Task: MS30和MS20产品页拆分

## 工作目录
```
D:\equestrian-web\frontend
```

## 任务1：MS30（Pony）产品页拆分

### 源文件
```
src/app/[locale]/ai-equestrian-simulators/ms30-education-pony-simulator/page.tsx
```

### 输出文件
1. **新建** `MS30Content.tsx`（同目录）
2. **修改** `page.tsx`

### 具体要求

#### 1. 创建 MS30Content.tsx（Client Component）
```typescript
'use client';

import { useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { ProductData } from '@/lib/api';

interface MS30ContentProps {
  product: ProductData;
  locale: string;
}

export default function MS30Content({ product, locale }: MS30ContentProps) {
  const t = useTranslations('ms30');
  // ... 复制所有交互逻辑和JSX
  
  return (
    <>
      {/* 所有UI代码，不包含JSON-LD */}
    </>
  );
}
```

#### 2. 修改 page.tsx（Server Component）
```typescript
import { getProductBySlugFromAPI } from '@/lib/api';
import { notFound } from 'next/navigation';
import MS30Content from './MS30Content';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const dynamic = 'force-static';

export default async function MS30Page({ params }: PageProps) {
  const { locale } = await params;
  
  // 从FastAPI获取产品数据
  const product = await getProductBySlugFromAPI('pony-ms30', locale);
  
  if (!product) {
    notFound();
  }

  return (
    <>
      {/* 保留所有JSON-LD script标签 */}
      <MS30Content product={product} locale={locale} />
    </>
  );
}
```

---

## 任务2：MS20（Racehorse）产品页拆分

### 源文件
```
src/app/[locale]/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator/page.tsx
```

### 输出文件
1. **新建** `MS20Content.tsx`（同目录）
2. **修改** `page.tsx`

### 具体要求

#### 1. 创建 MS20Content.tsx（Client Component）
```typescript
'use client';

import { useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { ProductData } from '@/lib/api';

interface MS20ContentProps {
  product: ProductData;
  locale: string;
}

export default function MS20Content({ product, locale }: MS20ContentProps) {
  const t = useTranslations('ms20');
  // ... 复制所有交互逻辑和JSX
  
  return (
    <>
      {/* 所有UI代码，不包含JSON-LD */}
    </>
  );
}
```

#### 2. 修改 page.tsx（Server Component）
```typescript
import { getProductBySlugFromAPI } from '@/lib/api';
import { notFound } from 'next/navigation';
import MS20Content from './MS20Content';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const dynamic = 'force-static';

export default async function MS20Page({ params }: PageProps) {
  const { locale } = await params;
  
  // 从FastAPI获取产品数据
  const product = await getProductBySlugFromAPI('racehorse-ms20', locale);
  
  if (!product) {
    notFound();
  }

  return (
    <>
      {/* 保留所有JSON-LD script标签 */}
      <MS20Content product={product} locale={locale} />
    </>
  );
}
```

---

## 关键注意事项（避免MS30P遇到的问题）

1. **不要修改翻译文件内容** - 只拆分组件结构，不改变任何文本内容
2. **保持所有样式不变** - 所有inline styles原样复制
3. **保持所有交互逻辑不变** - useState、useRef、事件处理函数原样复制
4. **JSON-LD完整保留** - 所有`<script type="application/ld+json">`标签移到page.tsx
5. **ProductData类型** - 从`@/lib/api`导入，不要重复定义

## 测试方法
完成后访问以下URL确认页面正常：
- MS30: `http://localhost:3000/zh/ai-equestrian-simulators/ms30-education-pony-simulator`
- MS20: `http://localhost:3000/zh/ai-equestrian-simulators/ms20-racehorse-jockey-training-simulator`
