/**
 * デザイントークンをCSS変数としてエクスポートするユーティリティ
 */

import { resolveAllTokens } from './resolveToken';
import { designTokens } from '../tokens';
import type { DesignTokens } from '../types/tokens';

/**
 * オブジェクトをCSS変数名に変換
 * 例: 'brand.color.gray.500' → '--vb-brand-color-gray-500'
 */
function toCSSVariableName(path: string[]): string {
  return `--vb-${path.join('-')}`;
}

/**
 * 値をCSS値に変換
 */
function toCSSValue(value: any): string {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  if (typeof value === 'object' && value !== null) {
    // タイポグラフィトークンの場合
    if ('fontSize' in value && 'fontWeight' in value) {
      // フォントスタイルを文字列として返す（簡易版）
      return `${value.fontSize}px`;
    }
  }
  return String(value);
}

/**
 * デザイントークンをCSS変数のオブジェクトに変換
 */
function tokensToCSSVariables(
  tokens: any,
  prefix: string[] = []
): Record<string, string> {
  const cssVars: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(tokens)) {
    const currentPath = [...prefix, key];
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // $ref形式の参照をチェック
      if ('$ref' in value) {
        // 参照は解決せず、パスとして保持
        const varName = toCSSVariableName(currentPath);
        cssVars[varName] = `var(--vb-${value.$ref.replace(/\./g, '-')})`;
      } else if ('fontSize' in value && 'fontWeight' in value) {
        // タイポグラフィトークンの場合、個別のプロパティとして展開
        const baseName = toCSSVariableName(currentPath);
        cssVars[`${baseName}-font-family`] = value.fontFamily;
        cssVars[`${baseName}-font-size`] = `${value.fontSize}px`;
        cssVars[`${baseName}-font-weight`] = String(value.fontWeight);
        cssVars[`${baseName}-line-height`] = String(value.lineHeight);
        cssVars[`${baseName}-letter-spacing`] = `${value.letterSpacing}px`;
      } else {
        // ネストされたオブジェクトを再帰的に処理
        const nested = tokensToCSSVariables(value, currentPath);
        Object.assign(cssVars, nested);
      }
    } else {
      // プリミティブ値
      const varName = toCSSVariableName(currentPath);
      cssVars[varName] = toCSSValue(value);
    }
  }
  
  return cssVars;
}

/**
 * 解決済みのデザイントークンをCSS変数に変換
 */
export function designTokensToCSSVariables(): Record<string, string> {
  // まずすべての参照を解決
  const resolved = resolveAllTokens(designTokens);
  
  // CSS変数に変換
  return tokensToCSSVariables(resolved);
}

/**
 * CSS変数をCSS文字列としてエクスポート
 */
export function designTokensToCSSString(selector: string = ':root'): string {
  const cssVars = designTokensToCSSVariables();
  const declarations = Object.entries(cssVars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');
  
  return `${selector} {\n${declarations}\n}`;
}

/**
 * CSS変数をJSON形式でエクスポート
 */
export function designTokensToCSSJSON(): Record<string, string> {
  return designTokensToCSSVariables();
}
