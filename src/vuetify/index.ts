import { createVuetify } from 'vuetify';

/**
 * VALUE BOOKS Design System - Vuetify preset
 * 色は tokens.css が CSS変数で上書きする前提
 */
export const vbVuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
});

/**
 * Vuetify統合モジュール
 * Vuetifyテーマとプラグイン設定をエクスポート
 */
export { createVuetifyTheme } from '../plugins/vuetify-theme';
export { useDesignTokens } from '../composables/useDesignTokens';
export { designTokens } from '../tokens';
