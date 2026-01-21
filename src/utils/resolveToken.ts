/**
 * トークン参照を解決するユーティリティ関数
 * $ref形式の参照を実際の値に変換
 */

import type { TokenReference } from '../types/tokens';
import { designTokens } from '../tokens';

/**
 * パス文字列からオブジェクトの値を取得
 * 例: 'brand.color.gray.500' → designTokens.brand.color.gray[500] または designTokens.brand.color.gray['500']
 */
function getValueByPath(obj: any, path: string): any {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined) {
      return undefined;
    }
    
    // 数値のキーの場合、文字列と数値の両方を試す
    const numKey = Number(key);
    if (!isNaN(numKey) && !isNaN(parseFloat(key))) {
      // 数値キー: まず数値として、次に文字列として試す
      if (current[numKey] !== undefined) {
        current = current[numKey];
      } else if (current[key] !== undefined) {
        current = current[key];
      } else {
        return undefined;
      }
    } else {
      // 通常のキー
      current = current[key];
    }
  }
  
  return current;
}

/**
 * トークン参照を解決する
 * @param token - 解決するトークン（値または$ref形式の参照）
 * @returns 解決された値
 */
export function resolveToken<T>(token: TokenReference<T>): T {
  if (typeof token === 'object' && token !== null && '$ref' in token) {
    const refPath = token.$ref;
    const resolved = getValueByPath(designTokens, refPath);
    
    if (resolved === undefined) {
      console.warn(`Token reference not found: ${refPath}`);
      return token as T; // フォールバック: 元の値を返す
    }
    
    return resolved as T;
  }
  
  return token as T;
}

/**
 * ネストされたオブジェクト内のすべてのトークン参照を再帰的に解決
 */
export function resolveAllTokens<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(resolveAllTokens) as unknown as T;
  }
  
  // $ref形式の参照をチェック
  if ('$ref' in obj) {
    return resolveToken(obj as any) as T;
  }
  
  // オブジェクトの各プロパティを再帰的に解決
  const resolved: any = {};
  for (const [key, value] of Object.entries(obj)) {
    resolved[key] = resolveAllTokens(value);
  }
  
  return resolved as T;
}
