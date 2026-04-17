# 技术债务追踪

## 1. next-intl 与 Next.js 15+ 兼容性问题

### 问题描述
- **发现时间**: 2026-04-15
- **问题**: `getMessages()` 依赖的 `requestLocale` 在 Next.js 15+ 中返回 `undefined`
- **影响**: 导致翻译文件fallback到默认语言（en），无法正确加载用户选择的语言

### 当前解决方案
**文件**: `src/app/[locale]/layout.tsx`
```typescript
// 绕过 getMessages()，直接动态 import
const messages = (await import(`../../../messages/${locale}.json`)).default;
```

**优点**:
- ✅ 简单可靠
- ✅ 不依赖框架黑盒
- ✅ 立即解决问题

**缺点**:
- ❌ 与next-intl生态脱节
- ❌ 无法使用next-intl的高级功能（插值、复数、fallback）
- ❌ 维护成本增加（多处使用时需要重复代码）

### 潜在隐患
1. **功能缺失**: 如果翻译文件使用插值/复数形式，可能无法正常工作
2. **维护困难**: 如果需要修改翻译加载逻辑，需要改多处
3. **升级风险**: next-intl新版本的功能无法自动获得

### 长期解决方案（优先级排序）

#### 方案A: 等待官方修复 ⭐⭐⭐⭐⭐
- **条件**: next-intl发布兼容Next.js 15+的版本
- **行动**: 
  - [ ] 订阅next-intl GitHub Releases
  - [ ] 每月15日检查是否有更新
  - [ ] 发现更新后立即测试
- **成本**: 低（只需升级依赖）
- **风险**: 低

#### 方案B: 深入修复requestLocale
- **条件**: 官方6个月内未修复
- **行动**:
  - [ ] 研究Next.js 15+ 的locale传递机制
  - [ ] 从headers/cookies手动提取locale
  - [ ] 修改 `src/i18n/request.ts`
- **成本**: 中（2-4小时开发+测试）
- **风险**: 中（可能无法完全解决）

#### 方案C: 替换next-intl
- **条件**: 方案A和B都失败，且问题严重影响开发
- **行动**:
  - [ ] 调研替代方案（react-i18next, format.js）
  - [ ] 评估迁移成本
  - [ ] 制定迁移计划
- **成本**: 高（1-2天）
- **风险**: 高（需要改动大量代码）

### 监控指标
- next-intl版本: 4.9.0 (当前)
- Next.js版本: 16.2.1 (当前)
- 最后检查时间: 2026-04-15

### Revisit时间表
- **第一次检查**: 2026-05-15 (1个月后)
- **第二次检查**: 2026-06-15 (2个月后)
- **决策deadline**: 2026-10-15 (6个月后，如果仍未解决，执行方案B)

### 相关资源
- next-intl GitHub: https://github.com/amannn/next-intl
- Next.js 15 升级指南: https://nextjs.org/docs/app/building-your-application/upgrading/version-15
- 问题讨论区: 待创建GitHub Issue（如果社区无相关讨论）

---

## 2. 其他技术债务
（待补充）

---

**更新日志**:
- 2026-04-15: 创建文档，记录next-intl兼容性问题
