/**
 * デザイントークンの検証ユーティリティ
 * デザイントークンが正しく構築されていることを確認するための関数
 */

import { designTokens } from '../tokens';
import { resolveToken } from './resolveToken';

/**
 * デザイントークンの基本構造を検証
 */
export function validateTokenStructure(): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  // brandコレクションの確認
  if (!designTokens.brand) {
    errors.push('brandコレクションが存在しません');
  }
  
  if (!designTokens.brand.color) {
    errors.push('brand.colorが存在しません');
  }
  
  if (!designTokens.brand.color.brand?.primary) {
    errors.push('brand.color.brand.primaryが存在しません');
  }
  
  // aliasコレクションの確認
  if (!designTokens.alias) {
    errors.push('aliasコレクションが存在しません');
  }
  
  if (!designTokens.alias.color) {
    errors.push('alias.colorが存在しません');
  }
  
  // mappedコレクションの確認
  if (!designTokens.mapped) {
    errors.push('mappedコレクションが存在しません');
  }
  
  if (!designTokens.mapped.color) {
    errors.push('mapped.colorが存在しません');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * トークン参照の解決を検証
 */
export function validateTokenReferences(): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  try {
    // aliasの参照を解決
    const textPrimary = resolveToken(designTokens.alias.color.text.primary);
    if (!textPrimary || typeof textPrimary !== 'string') {
      errors.push('alias.color.text.primaryの参照解決に失敗しました');
    }
    
    // mappedの参照を解決
    const mappedTextPrimary = resolveToken(
      designTokens.mapped.color.text.primary.default
    );
    if (!mappedTextPrimary || typeof mappedTextPrimary !== 'string') {
      errors.push('mapped.color.text.primary.defaultの参照解決に失敗しました');
    }
  } catch (error) {
    errors.push(`参照解決中にエラーが発生しました: ${error}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * すべての検証を実行
 */
export function validateAll(): {
  structure: ReturnType<typeof validateTokenStructure>;
  references: ReturnType<typeof validateTokenReferences>;
  isValid: boolean;
} {
  const structure = validateTokenStructure();
  const references = validateTokenReferences();
  
  return {
    structure,
    references,
    isValid: structure.isValid && references.isValid,
  };
}
