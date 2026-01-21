/**
 * デザイントークンの検証用テスト
 * このファイルは、デザイントークンが正しく構築されていることを確認するために使用します
 * 
 * 使用方法:
 * 1. TypeScriptがインストールされていることを確認
 * 2. このファイルを実行して、型エラーがないか確認
 * 3. 必要に応じて、実際の値を確認
 */

import { designTokens, resolveToken } from '../tokens';
import type { DesignTokens } from '../types/tokens';

/**
 * デザイントークンの構造検証
 */
export function validateDesignTokens() {
  // 1. デザイントークンが正しく定義されているか確認
  const tokens: DesignTokens = designTokens;
  
  // 2. brandコレクションの確認
  console.log('Brand Tokens:');
  console.log('- Primary Color:', tokens.brand.color.brand.primary);
  console.log('- VB Teal:', tokens.brand.color.brand.teal[500]);
  console.log('- Error Color:', tokens.brand.color.semantic.error);
  
  // 3. aliasコレクションの確認
  console.log('\nAlias Tokens:');
  console.log('- Text Primary (reference):', tokens.alias.color.text.primary);
  console.log('- Brand Primary (reference):', tokens.alias.color.brand.primary);
  
  // 4. mappedコレクションの確認
  console.log('\nMapped Tokens:');
  console.log('- Text Primary Default (reference):', tokens.mapped.color.text.primary.default);
  console.log('- Background Default Light (reference):', tokens.mapped.color.background.default.light);
  
  // 5. 参照の解決テスト
  console.log('\nResolved Tokens:');
  const resolvedTextPrimary = resolveToken(tokens.alias.color.text.primary);
  console.log('- Resolved Text Primary:', resolvedTextPrimary);
  
  return {
    isValid: true,
    brand: tokens.brand,
    alias: tokens.alias,
    mapped: tokens.mapped,
  };
}

/**
 * 接続関係の検証
 * aliasがbrandを参照し、mappedがaliasを参照していることを確認
 */
export function validateTokenConnections() {
  const issues: string[] = [];
  
  // aliasがbrandを参照しているか確認（$ref形式）
  const aliasTextPrimary = designTokens.alias.color.text.primary;
  if (typeof aliasTextPrimary === 'object' && '$ref' in aliasTextPrimary) {
    console.log('✓ alias.color.text.primary is referencing brand');
  } else {
    issues.push('alias.color.text.primary should reference brand');
  }
  
  // mappedがaliasを参照しているか確認
  const mappedTextPrimary = designTokens.mapped.color.text.primary.default;
  if (mappedTextPrimary === designTokens.alias.color.text.primary) {
    console.log('✓ mapped.color.text.primary.default is referencing alias');
  } else {
    issues.push('mapped.color.text.primary.default should reference alias');
  }
  
  if (issues.length > 0) {
    console.warn('Issues found:', issues);
    return { isValid: false, issues };
  }
  
  return { isValid: true, issues: [] };
}

// このファイルを直接実行した場合の検証
if (require.main === module) {
  console.log('=== Design Tokens Validation ===\n');
  validateDesignTokens();
  console.log('\n=== Token Connections Validation ===\n');
  validateTokenConnections();
}
