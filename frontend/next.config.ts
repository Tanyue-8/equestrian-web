import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // 混合架构：首页SSG，其他页面Dynamic
  // 不使用 output: 'export'，保留所有功能
  
  // 图片优化配置
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8055',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: '*.equestrian-simulators.com',
        pathname: '/assets/**',
      },
    ],
  },
  
  // CDN配置（生产环境）
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_CDN_URL || undefined
    : undefined,
};

export default withNextIntl(nextConfig);
