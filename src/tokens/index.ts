/**
 * デザイントークンのエクスポート
 * brand、alias、mappedの3層構造を統合
 */

import type { DesignTokens } from '../types/tokens';
import { brandTokens } from './brand';
import { aliasTokens } from './alias';
import { mappedTokens } from './mapped';

/**
 * 完全なデザイントークンオブジェクト
 */
export const designTokens: DesignTokens = {
  brand: brandTokens,
  alias: aliasTokens,
  mapped: mappedTokens,
};

/**
 * 個別のコレクションもエクスポート
 */
export { brandTokens } from './brand';
export { aliasTokens } from './alias';
export { mappedTokens } from './mapped';

/**
 * ユーティリティ関数もエクスポート
 */
export { resolveToken, resolveAllTokens } from '../utils/resolveToken';

/**
 * 型定義もエクスポート
 */
export type {
  DesignTokens,
  BrandTokens,
  AliasTokens,
  MappedTokens,
  ColorValue,
  TypographyToken,
  TokenReference,
} from '../types/tokens';
