/**
 * VALUE BOOKS Design System
 * メインエントリーポイント
 */

// デザイントークンのエクスポート
export {
  designTokens,
  brandTokens,
  aliasTokens,
  mappedTokens,
} from './tokens';

// 型定義のエクスポート
export type {
  DesignTokens,
  BrandTokens,
  AliasTokens,
  MappedTokens,
  ColorValue,
  TypographyToken,
  TokenReference,
} from './types/tokens';

// ユーティリティ関数のエクスポート
export {
  resolveToken,
  resolveAllTokens,
} from './utils/resolveToken';

export {
  designTokensToCSSVariables,
  designTokensToCSSString,
  designTokensToCSSJSON,
} from './utils/toCSSVariables';

// Layoutコンポーネントのエクスポート
export { default as AppLayout } from "./components/layout/AppLayout.vue";
export { default as SiteHeader } from "./components/layout/SiteHeader.vue";
export { default as SiteFooter } from "./components/layout/SiteFooter.vue";
