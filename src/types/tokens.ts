/**
 * デザイントークンの型定義
 * brand → alias → mapped の3層構造を型安全に実装
 */

/**
 * カラー値の型
 */
export type ColorValue = string;

/**
 * フォントファミリーの型
 */
export type FontFamily = string;

/**
 * フォントウェイトの型
 */
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * フォントスタイルの型
 */
export type FontStyle = 'W3' | 'W6' | 'normal' | 'italic';

/**
 * タイポグラフィトークンの型
 */
export interface TypographyToken {
  fontFamily: FontFamily;
  fontSize: number;
  fontWeight: FontWeight;
  fontStyle: FontStyle;
  lineHeight: number;
  letterSpacing: number;
}

/**
 * スペーシングトークンの型
 */
export type SpacingToken = number;

/**
 * トークン参照の型（aliasやmappedが参照する際に使用）
 */
export type TokenReference<T> = T | { $ref: string };

/**
 * Brandコレクションの型定義
 * 最も変更頻度が低い、ブランドアイデンティティの核となる値
 */
export interface BrandTokens {
  color: {
    brand: {
      primary: ColorValue; // VB Teal
      teal: {
        50: ColorValue;
        100: ColorValue;
        200: ColorValue;
        300: ColorValue;
        400: ColorValue;
        500: ColorValue; // VB Teal
        600: ColorValue;
        700: ColorValue;
      };
    };
    service: {
      sellBlue: ColorValue;
      buyOrange: ColorValue;
      libraryGreen: ColorValue;
    };
    semantic: {
      error: ColorValue; // VB Red
      warning?: ColorValue;
      success?: ColorValue;
      accent: ColorValue; // VB Yellow
      disabled: ColorValue; // Disabled Color
    };
    gray: {
      50: ColorValue;
      100: ColorValue;
      200: ColorValue;
      300: ColorValue;
      400: ColorValue;
      500: ColorValue;
    };
    base: {
      white: ColorValue;
      black: ColorValue;
    };
    cream: {
      vbCream: ColorValue; // VB Cream
    };
  };
  typography: {
    fontFamily: {
      base: FontFamily;
    };
    fontSize: {
      base: number;
    };
    fontWeight: {
      regular: FontWeight;
      bold: FontWeight;
    };
    lineHeight: {
      base: number;
    };
    letterSpacing: {
      base: number;
    };
  };
  spacing: {
    base: SpacingToken;
  };
  icons: {
    library: string; // アイコンライブラリ名
    url: string; // アイコンライブラリのURL
  };
  components: {
    framework: string; // コンポーネントフレームワーク名
    url: string; // フレームワークのURL
  };
}

/**
 * Aliasコレクションの型定義
 * brandの値を参照し、意味的な名前を付けたトークン
 */
export interface AliasTokens {
  color: {
    text: {
      primary: TokenReference<ColorValue>;
      secondary: TokenReference<ColorValue>;
      inverse: TokenReference<ColorValue>;
      disabled: TokenReference<ColorValue>;
    };
    background: {
      default: TokenReference<ColorValue>;
      secondary: TokenReference<ColorValue>;
      cream: TokenReference<ColorValue>;
      disabled: TokenReference<ColorValue>;
    };
    border: {
      default: TokenReference<ColorValue>;
      subtle: TokenReference<ColorValue>;
    };
    brand: {
      primary: TokenReference<ColorValue>;
    };
    service: {
      sell: TokenReference<ColorValue>;
      buy: TokenReference<ColorValue>;
      library: TokenReference<ColorValue>;
    };
    semantic: {
      error: TokenReference<ColorValue>;
      warning?: TokenReference<ColorValue>;
      success?: TokenReference<ColorValue>;
      accent: TokenReference<ColorValue>;
    };
  };
  typography: {
    title: {
      h1: TokenReference<TypographyToken>;
      h2: TokenReference<TypographyToken>;
      h3: TokenReference<TypographyToken>;
      h4: TokenReference<TypographyToken>;
      subtitle1: TokenReference<TypographyToken>;
      subtitle2: TokenReference<TypographyToken>;
      subtitle3: TokenReference<TypographyToken>;
    };
    body: {
      body1: TokenReference<TypographyToken>;
      body2: TokenReference<TypographyToken>;
      caption1: TokenReference<TypographyToken>;
      caption2: TokenReference<TypographyToken>;
    };
    button: {
      button1: TokenReference<TypographyToken>;
      button2: TokenReference<TypographyToken>;
      button3: TokenReference<TypographyToken>;
      textLink1: TokenReference<TypographyToken>;
      textLink2: TokenReference<TypographyToken>;
    };
  };
}

/**
 * Mappedコレクションの型定義
 * aliasの値を参照し、テーマ・状態・コンポーネント別にマッピング
 */
export interface MappedTokens {
  color: {
    text: {
      primary: {
        default: TokenReference<ColorValue>;
        hover?: TokenReference<ColorValue>;
        active?: TokenReference<ColorValue>;
        disabled: TokenReference<ColorValue>;
      };
      secondary: {
        default: TokenReference<ColorValue>;
        hover?: TokenReference<ColorValue>;
        disabled: TokenReference<ColorValue>;
      };
      inverse: {
        default: TokenReference<ColorValue>;
      };
    };
    background: {
      default: {
        light: TokenReference<ColorValue>;
        dark?: TokenReference<ColorValue>;
      };
      secondary: {
        light: TokenReference<ColorValue>;
        dark?: TokenReference<ColorValue>;
      };
      brand: {
        primary: TokenReference<ColorValue>;
        hover?: TokenReference<ColorValue>;
        active?: TokenReference<ColorValue>;
      };
      service: {
        sell: TokenReference<ColorValue>;
        buy: TokenReference<ColorValue>;
        library: TokenReference<ColorValue>;
      };
      error: TokenReference<ColorValue>;
      disabled: TokenReference<ColorValue>;
    };
    border: {
      default: TokenReference<ColorValue>;
      focus: TokenReference<ColorValue>;
      error: TokenReference<ColorValue>;
    };
  };
  typography: {
    component: {
      button: {
        primary: TokenReference<TypographyToken>;
        secondary: TokenReference<TypographyToken>;
        tertiary: TokenReference<TypographyToken>;
      };
      link: {
        default: TokenReference<TypographyToken>;
        small: TokenReference<TypographyToken>;
      };
      heading: {
        h1: TokenReference<TypographyToken>;
        h2: TokenReference<TypographyToken>;
        h3: TokenReference<TypographyToken>;
        h4: TokenReference<TypographyToken>;
      };
      body: {
        default: TokenReference<TypographyToken>;
        small: TokenReference<TypographyToken>;
      };
    };
  };
}

/**
 * 完全なデザイントークンの型定義
 */
export interface DesignTokens {
  brand: BrandTokens;
  alias: AliasTokens;
  mapped: MappedTokens;
}
