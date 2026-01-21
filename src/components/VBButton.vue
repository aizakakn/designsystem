<template>
  <v-btn
    :color="vuetifyColor"
    :variant="variant"
    :disabled="disabled"
    :loading="loading"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :class="buttonClass"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDesignTokens } from '../composables/useDesignTokens';

export interface VBButtonProps {
  /**
   * ボタンのサイズ
   * - button1: 16px (Button1)
   * - button2: 14px (Button2)
   * - button3: 12px (Button3)
   */
  size?: 'button1' | 'button2' | 'button3';
  /**
   * ボタンの色
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'sell' | 'buy' | 'library';
  /**
   * ボタンのバリアント
   */
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  /**
   * 無効化状態
   */
  disabled?: boolean;
  /**
   * ローディング状態
   */
  loading?: boolean;
  /**
   * 先頭アイコン
   */
  prependIcon?: string;
  /**
   * 末尾アイコン
   */
  appendIcon?: string;
}

const props = withDefaults(defineProps<VBButtonProps>(), {
  size: 'button2',
  color: 'primary',
  variant: 'flat',
  disabled: false,
  loading: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();

const { colors } = useDesignTokens();

/**
 * ボタンのスタイルクラス
 */
const buttonClass = computed(() => {
  return {
    'vb-button': true,
    [`vb-button--${props.size}`]: true,
    [`vb-button--${props.color}`]: props.color && ['sell', 'buy', 'library'].includes(props.color),
  };
});

/**
 * Vuetifyのカラーにマッピング
 */
const vuetifyColor = computed(() => {
  if (['sell', 'buy', 'library'].includes(props.color || '')) {
    return props.color;
  }
  return props.color;
});

/**
 * カスタムカラーの値（v-bind用）
 */
const sellBlueColor = computed(() => colors.value.sellBlue);
const buyOrangeColor = computed(() => colors.value.buyOrange);
const libraryGreenColor = computed(() => colors.value.libraryGreen);
</script>

<style scoped>
.vb-button {
  font-family: 'Hiragino Sans', sans-serif;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
}

.vb-button--button1 {
  font-size: 16px;
  line-height: 1.5;
  min-height: 48px;
  padding: 12px 24px;
}

.vb-button--button2 {
  font-size: 14px;
  line-height: 1.5;
  min-height: 40px;
  padding: 10px 20px;
}

.vb-button--button3 {
  font-size: 12px;
  line-height: 1.4;
  min-height: 32px;
  padding: 8px 16px;
}

/* カスタムカラーのスタイル */
.vb-button--sell.v-btn--variant-flat {
  background-color: v-bind('sellBlueColor');
  color: white;
}

.vb-button--buy.v-btn--variant-flat {
  background-color: v-bind('buyOrangeColor');
  color: white;
}

.vb-button--library.v-btn--variant-flat {
  background-color: v-bind('libraryGreenColor');
  color: white;
}
</style>
