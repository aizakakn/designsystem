/**
 * デザイントークンを使用するためのComposable
 */

import { computed } from 'vue';
import { designTokens, resolveToken } from '../tokens';
import type { TokenReference, ColorValue, TypographyToken } from '../types/tokens';

/**
 * デザイントークンにアクセスするためのComposable
 */
export function useDesignTokens() {
  /**
   * カラートークンを取得
   */
  const getColor = (path: string): ColorValue => {
    const keys = path.split('.');
    let current: any = designTokens;
    
    for (const key of keys) {
      current = current[key];
      if (current === undefined) {
        console.warn(`Color token not found: ${path}`);
        return '#000000';
      }
    }
    
    // 参照を解決
    if (typeof current === 'object' && current !== null && '$ref' in current) {
      return resolveToken(current as TokenReference<ColorValue>);
    }
    
    return current as ColorValue;
  };

  /**
   * タイポグラフィトークンを取得
   */
  const getTypography = (path: string): TypographyToken => {
    const keys = path.split('.');
    let current: any = designTokens;
    
    for (const key of keys) {
      current = current[key];
      if (current === undefined) {
        console.warn(`Typography token not found: ${path}`);
        return {
          fontFamily: 'Hiragino Sans',
          fontSize: 16,
          fontWeight: 300,
          fontStyle: 'W3',
          lineHeight: 1.5,
          letterSpacing: 0,
        };
      }
    }
    
    // 参照を解決
    if (typeof current === 'object' && current !== null && '$ref' in current) {
      return resolveToken(current as TokenReference<TypographyToken>);
    }
    
    return current as TypographyToken;
  };

  /**
   * よく使用するカラーのcomputed
   */
  const colors = computed(() => {
    try {
      return {
        primary: getColor('brand.color.brand.primary'),
        error: getColor('brand.color.semantic.error'),
        accent: getColor('brand.color.semantic.accent'),
        disabled: getColor('brand.color.semantic.disabled'),
        textPrimary: getColor('alias.color.text.primary'),
        textSecondary: getColor('alias.color.text.secondary'),
        background: getColor('alias.color.background.default'),
        cream: getColor('alias.color.background.cream'),
        sellBlue: getColor('brand.color.service.sellBlue'),
        buyOrange: getColor('brand.color.service.buyOrange'),
        libraryGreen: getColor('brand.color.service.libraryGreen'),
      };
    } catch (err) {
      console.error('Error getting colors:', err);
      // フォールバック値
      return {
        primary: '#009098',
        error: '#DD0022',
        accent: '#F0D03D',
        textPrimary: '#2C2C2C',
        textSecondary: '#6E6E6E',
        background: '#F5F5F5',
        sellBlue: '#0095D9',
        buyOrange: '#A0330A',
        libraryGreen: '#00475A',
      };
    }
  });

  /**
   * よく使用するタイポグラフィのcomputed
   */
  const typography = computed(() => ({
    h1: getTypography('alias.typography.title.h1'),
    h2: getTypography('alias.typography.title.h2'),
    h3: getTypography('alias.typography.title.h3'),
    h4: getTypography('alias.typography.title.h4'),
    body1: getTypography('alias.typography.body.body1'),
    body2: getTypography('alias.typography.body.body2'),
    button1: getTypography('alias.typography.button.button1'),
    button2: getTypography('alias.typography.button.button2'),
    button3: getTypography('alias.typography.button.button3'),
  }));

  return {
    designTokens,
    getColor,
    getTypography,
    colors,
    typography,
  };
}
