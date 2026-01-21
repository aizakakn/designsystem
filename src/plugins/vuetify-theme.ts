/**
 * Vuetifyテーマをデザイントークンから作成
 */

import { designTokens, resolveToken } from '../tokens';
import type { ThemeDefinition } from 'vuetify';

/**
 * デザイントークンからVuetifyテーマを作成
 */
export function createVuetifyTheme(cssVars?: Record<string, string>): Record<string, ThemeDefinition> {
  // デザイントークンから値を取得
  const brandPrimary = designTokens.brand.color.brand.primary; // #009098
  const brandError = designTokens.brand.color.semantic.error; // #DD0022
  const brandAccent = designTokens.brand.color.semantic.accent; // #F0D03D
  
  const gray50 = designTokens.brand.color.gray[50]; // #F5F5F5
  const gray100 = designTokens.brand.color.gray[100]; // #CACACA
  const gray300 = designTokens.brand.color.gray[300]; // #6E6E6E
  const gray500 = designTokens.brand.color.gray[500]; // #2C2C2C
  
  const sellBlue = designTokens.brand.color.service.sellBlue; // #0095D9
  const buyOrange = designTokens.brand.color.service.buyOrange; // #A0330A
  const libraryGreen = designTokens.brand.color.service.libraryGreen; // #00475A
  
  const white = designTokens.brand.color.base.white; // #FFFFFF
  const black = designTokens.brand.color.base.black; // #000000
  const vbCream = designTokens.brand.color.cream.vbCream; // #F7F5EB
  const disabled = designTokens.brand.color.semantic.disabled; // rgba(44, 44, 44, 0.3)

  const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: brandPrimary, // VB Teal
      secondary: gray300, // Gray300
      accent: brandAccent, // VB Yellow
      error: brandError, // VB Red
      info: sellBlue, // Sell Blue
      success: libraryGreen, // Library Green
      warning: buyOrange, // Buy Orange
      // カスタムサービスカラー
      sell: sellBlue, // Sell Blue
      buy: buyOrange, // Buy Orange
      library: libraryGreen, // Library Green
      // 追加カラー
      cream: vbCream, // VB Cream
      disabled: disabled, // Disabled Color
      background: gray50, // Gray50
      surface: white, // White
      'on-primary': white,
      'on-secondary': white,
      'on-accent': black,
      'on-error': white,
      'on-info': white,
      'on-success': white,
      'on-warning': white,
      'on-sell': white,
      'on-buy': white,
      'on-library': white,
      'on-cream': gray500, // VB Cream上でのテキスト色
      'on-disabled': gray300, // Disabled上でのテキスト色
      'on-background': gray500, // Gray500
      'on-surface': gray500, // Gray500
    },
  };

  return {
    light: lightTheme,
  };

  
}
