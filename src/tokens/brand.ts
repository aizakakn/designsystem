/**
 * Brandコレクション
 * ブランドのコアとなる色・タイポグラフィ・スペースなどの基準値を定義
 * 最も変更頻度が低い、ブランドアイデンティティの核となる値
 */

import type { BrandTokens } from '../types/tokens';

/**
 * Brandトークンの定義
 * Figmaファイルから取得した実際の値を使用
 */
export const brandTokens: BrandTokens = {
  color: {
    brand: {
      primary: '#009098', // VB Teal
      teal: {
        50: '#D8F3F4', // Teal 50 (Figmaから取得)
        100: '#D8F3F4', // Teal 100 (Figmaから取得)
        200: '#A4E0E3', // Teal 200 (Figmaから取得)
        300: '#4CC1C8', // Teal 300 (Figmaから取得)
        400: '#009098', // VB Teal (Figmaから取得)
        500: '#009098', // VB Teal（メイン）(Figmaから取得)
        600: '#00737A', // Teal 600 (Figmaから取得)
        700: '#00475A', // Teal 700 (Figmaから取得、Library Greenと同じ)
      },
    },
    service: {
      sellBlue: '#0095D9', // Sell Blue
      buyOrange: '#A0330A', // Buy Orange
      libraryGreen: '#00475A', // Library Green
    },
    semantic: {
      error: '#DD0022', // VB Red (Figmaから取得)
      accent: '#F0D03D', // VB Yellow (Figmaから取得)
      disabled: 'rgba(44, 44, 44, 0.3)', // Disabled Color (Figmaから取得)
    },
    gray: {
      50: '#F5F5F5', // Gray50 (Figmaから取得)
      100: '#CACACA', // Gray100 (Figmaから取得)
      200: '#999999', // Gray200 (Figmaから取得)
      300: '#6E6E6E', // Gray300 (Figmaから取得)
      400: '#999999', // Gray400 (Figmaから取得)
      500: '#2C2C2C', // Gray500 (Figmaから取得)
    },
    base: {
      white: '#FFFFFF',
      black: '#000000',
    },
    cream: {
      vbCream: '#F7F5EB', // VB Cream (Figmaから取得)
    },
  },
  typography: {
    fontFamily: {
      base: 'Hiragino Sans', // すべてのタイポグラフィで使用
    },
    fontSize: {
      base: 16, // Body1のサイズを基準とする
    },
    fontWeight: {
      regular: 300, // W3
      bold: 600, // W6
    },
    lineHeight: {
      base: 1.5, // ほとんどのタイポグラフィで使用
    },
    letterSpacing: {
      base: 0, // すべてのタイポグラフィで使用
    },
  },
  spacing: {
    base: 4, // 4pxを基準単位とする（推測値）
  },
  icons: {
    library: 'Material Design Icons',
    url: 'https://pictogrammers.com/library/mdi/',
  },
  components: {
    framework: 'Vuetify',
    url: 'https://vuetifyjs.com/ja/',
  },
};
