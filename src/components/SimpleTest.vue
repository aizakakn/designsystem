<template>
  <div>
    <h2>シンプルなテスト</h2>
    <p>Primary Color: {{ primaryColor }}</p>
    <p>Sell Blue: {{ sellBlue }}</p>
    <v-btn color="primary">テストボタン</v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { designTokens } from '../tokens';

const primaryColor = computed(() => designTokens.brand.color.brand.primary);
const sellBlue = computed(() => designTokens.brand.color.service.sellBlue);
</script>
