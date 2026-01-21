<template>
  <div class="color-showcase">
    <h2 class="text-h6 mb-4">カラーパレット</h2>
    
    <v-row>
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-2">ブランドカラー</h3>
        <div class="d-flex flex-column gap-2 mb-4">
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.primary }"></div>
            <span>VB Teal: {{ colors.primary }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.accent }"></div>
            <span>VB Yellow: {{ colors.accent }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.error }"></div>
            <span>VB Red: {{ colors.error }}</span>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-2">サービスカラー</h3>
        <div class="d-flex flex-column gap-2 mb-4">
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.sellBlue }"></div>
            <span>Sell Blue: {{ colors.sellBlue }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.buyOrange }"></div>
            <span>Buy Orange: {{ colors.buyOrange }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.libraryGreen }"></div>
            <span>Library Green: {{ colors.libraryGreen }}</span>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-2">背景・テキストカラー</h3>
        <div class="d-flex flex-column gap-2 mb-4">
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.background }"></div>
            <span>Background: {{ colors.background }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.cream }"></div>
            <span>VB Cream: {{ colors.cream }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.textPrimary }"></div>
            <span>Text Primary: {{ colors.textPrimary }}</span>
          </div>
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.textSecondary }"></div>
            <span>Text Secondary: {{ colors.textSecondary }}</span>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-2">状態カラー</h3>
        <div class="d-flex flex-column gap-2 mb-4">
          <div class="d-flex align-center gap-2">
            <div class="color-swatch" :style="{ backgroundColor: colors.disabled }"></div>
            <span>Disabled: {{ colors.disabled }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
    
    
  </div>
</template>

<script setup lang="ts">
import { useDesignTokens } from '../composables/useDesignTokens';

const { colors } = useDesignTokens();
</script>

<style scoped>
.color-showcase {
  padding: 16px 0;
}

.color-swatch {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.gap-2 {
  gap: 8px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mt-6 {
  margin-top: 24px;
}
</style>
