/**
 * Aliasコレクション
 * brandの値を参照し、意味的な名前を付けたトークン
 * UIコンポーネントやテーマで使いやすく・直感的な名前付け
 */

import type { AliasTokens } from '../types/tokens';
import { brandTokens } from './brand';

/**
 * タイポグラフィトークンのヘルパー関数
 */
const createTypographyToken = (
  fontSize: number,
  fontWeight: 300 | 600,
  lineHeight: number = 1.5,
  letterSpacing: number = 0
): import('../types/tokens').TypographyToken => ({
  fontFamily: brandTokens.typography.fontFamily.base,
  fontSize,
  fontWeight,
  fontStyle: (fontWeight === 300 ? 'W3' : 'W6') as import('../types/tokens').FontStyle,
  lineHeight,
  letterSpacing,
});

/**
 * Aliasトークンの定義
 * brandの値を参照（$ref形式で参照を表現）
 */
export const aliasTokens: AliasTokens = {
  color: {
    text: {
      primary: { $ref: 'brand.color.gray.500' }, // Gray500 → #2C2C2C
      secondary: { $ref: 'brand.color.gray.300' }, // Gray300 → #6E6E6E
      inverse: { $ref: 'brand.color.base.white' }, // White → #FFFFFF
      disabled: { $ref: 'brand.color.semantic.disabled' }, // Disabled → rgba(44, 44, 44, 0.3) (Figmaから取得)
    },
    background: {
      default: { $ref: 'brand.color.gray.50' }, // Gray50 → #F5F5F5
      secondary: { $ref: 'brand.color.gray.100' }, // Gray100 → #CACACA
      cream: { $ref: 'brand.color.cream.vbCream' }, // VB Cream → #F7F5EB (Figmaから取得)
      disabled: { $ref: 'brand.color.gray.100' }, // Gray100 → #CACACA（推測）
    },
    border: {
      default: { $ref: 'brand.color.gray.300' }, // Gray300 → #6E6E6E
      subtle: { $ref: 'brand.color.gray.200' }, // Gray200 → #999999（推測）
    },
    brand: {
      primary: { $ref: 'brand.color.brand.primary' }, // VB Teal → #009098
    },
    service: {
      sell: { $ref: 'brand.color.service.sellBlue' }, // Sell Blue → #0095D9
      buy: { $ref: 'brand.color.service.buyOrange' }, // Buy Orange → #A0330A
      library: { $ref: 'brand.color.service.libraryGreen' }, // Library Green → #00475A
    },
    semantic: {
      error: { $ref: 'brand.color.semantic.error' }, // VB Red → #DD0022
      accent: { $ref: 'brand.color.semantic.accent' }, // VB Yellow → #F0D03D
    },
  },
  typography: {
    title: {
      h1: createTypographyToken(32, 600, 1.5, 0), // Title/H1
      h2: createTypographyToken(28, 600, 1.5, 0), // Title/H2
      h3: createTypographyToken(24, 600, 1.5, 0), // Title/H3
      h4: createTypographyToken(20, 600, 1.5, 0), // Title/H4
      subtitle1: createTypographyToken(16, 600, 1.5, 0), // Title/subtitle1
      subtitle2: createTypographyToken(14, 600, 1.5, 0), // Title/subtitle2
      subtitle3: createTypographyToken(12, 600, 1.399999976158142, 0), // Title/subtitle3
    },
    body: {
      body1: createTypographyToken(16, 300, 1.5, 0), // Body/Body1
      body2: createTypographyToken(14, 300, 1.5, 0), // Body/Body2
      caption1: createTypographyToken(12, 300, 1.5, 0), // Body/Caption1
      caption2: createTypographyToken(10, 300, 1.5, 0), // Body/Caption2
    },
    button: {
      button1: createTypographyToken(16, 600, 1.5, 0), // Button/Button1
      button2: createTypographyToken(14, 600, 1.5, 0), // Button/Button2
      button3: createTypographyToken(12, 600, 1.399999976158142, 0), // Button/Button3
      textLink1: createTypographyToken(14, 600, 1.5, 0), // Button/Text Link1
      textLink2: createTypographyToken(12, 600, 1.399999976158142, 0), // Button/Text Link2
    },
  },
};
