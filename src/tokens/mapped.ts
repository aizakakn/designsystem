/**
 * Mappedコレクション
 * aliasの値を参照し、テーマ・状態・コンポーネント別にマッピング
 * 実際のコンポーネント設計に即した形で使用されるトークン群
 */

import type { MappedTokens } from '../types/tokens';
import { aliasTokens } from './alias';

/**
 * Mappedトークンの定義
 * aliasの値を参照（$ref形式で参照を表現）
 */
export const mappedTokens: MappedTokens = {
  color: {
    text: {
      primary: {
        default: aliasTokens.color.text.primary, // aliasのtext.primaryを参照
        disabled: aliasTokens.color.text.disabled, // aliasのtext.disabledを参照
      },
      secondary: {
        default: aliasTokens.color.text.secondary, // aliasのtext.secondaryを参照
        disabled: aliasTokens.color.text.disabled, // aliasのtext.disabledを参照
      },
      inverse: {
        default: aliasTokens.color.text.inverse, // aliasのtext.inverseを参照
      },
    },
    background: {
      default: {
        light: aliasTokens.color.background.default, // aliasのbackground.defaultを参照（ライトテーマ）
        // dark: { $ref: 'alias.color.background.dark' }, // ダークテーマ（将来の拡張用）
      },
      secondary: {
        light: aliasTokens.color.background.secondary, // aliasのbackground.secondaryを参照（ライトテーマ）
        // dark: { $ref: 'alias.color.background.dark' }, // ダークテーマ（将来の拡張用）
      },
      brand: {
        primary: aliasTokens.color.brand.primary, // aliasのbrand.primaryを参照
        // hover: { $ref: 'alias.color.brand.primaryHover' }, // ホバー状態（将来の拡張用）
        // active: { $ref: 'alias.color.brand.primaryActive' }, // アクティブ状態（将来の拡張用）
      },
      service: {
        sell: aliasTokens.color.service.sell, // aliasのservice.sellを参照
        buy: aliasTokens.color.service.buy, // aliasのservice.buyを参照
        library: aliasTokens.color.service.library, // aliasのservice.libraryを参照
      },
      error: aliasTokens.color.semantic.error, // aliasのsemantic.errorを参照
      disabled: aliasTokens.color.background.disabled, // aliasのbackground.disabledを参照
    },
    border: {
      default: aliasTokens.color.border.default, // aliasのborder.defaultを参照
      focus: aliasTokens.color.brand.primary, // aliasのbrand.primaryを参照（フォーカス時）
      error: aliasTokens.color.semantic.error, // aliasのsemantic.errorを参照（エラー時）
    },
  },
  typography: {
    component: {
      button: {
        primary: aliasTokens.typography.button.button1, // aliasのbutton.button1を参照
        secondary: aliasTokens.typography.button.button2, // aliasのbutton.button2を参照
        tertiary: aliasTokens.typography.button.button3, // aliasのbutton.button3を参照
      },
      link: {
        default: aliasTokens.typography.button.textLink1, // aliasのbutton.textLink1を参照
        small: aliasTokens.typography.button.textLink2, // aliasのbutton.textLink2を参照
      },
      heading: {
        h1: aliasTokens.typography.title.h1, // aliasのtitle.h1を参照
        h2: aliasTokens.typography.title.h2, // aliasのtitle.h2を参照
        h3: aliasTokens.typography.title.h3, // aliasのtitle.h3を参照
        h4: aliasTokens.typography.title.h4, // aliasのtitle.h4を参照
      },
      body: {
        default: aliasTokens.typography.body.body1, // aliasのbody.body1を参照
        small: aliasTokens.typography.body.body2, // aliasのbody.body2を参照
      },
    },
  },
};
