<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="d-flex align-center mb-6">
          <h1 class="text-h4">VALUE BOOKS Design System</h1>
        </div>
        
        <v-alert v-if="error" type="error" class="mb-4">
          {{ error }}
        </v-alert>
        
        <v-card>
          <v-tabs v-model="tab" bg-color="primary" slider-color="accent">
            <v-tab value="colors">カラーパレット</v-tab>
            <v-tab value="buttons">ボタン</v-tab>
            <v-tab value="typography">タイポグラフィ</v-tab>
            <v-tab value="common">共通パーツ</v-tab>
            <v-tab value="resources">リソース</v-tab>
          </v-tabs>
          
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="colors">
                <ColorShowcase />
              </v-window-item>
              
              
              <v-window-item value="buttons">
                <ButtonShowcase v-if="!error" />
                <div v-else>
                  <p>エラーが発生しました。ブラウザのコンソールを確認してください。</p>
                </div>
              </v-window-item>
              
              <v-window-item value="typography">
                <TypographyShowcase />
              </v-window-item>
              
              <v-window-item value="common">
                <LayoutShowcase />
              </v-window-item>
              
              <v-window-item value="resources">
                <ResourcesShowcase />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';
import ButtonShowcase from './components/ButtonShowcase.vue';
import ColorShowcase from './components/ColorShowcase.vue';
import TypographyShowcase from './components/TypographyShowcase.vue';
import LayoutShowcase from './components/LayoutShowcase.vue';
import ResourcesShowcase from './components/ResourcesShowcase.vue';

const error = ref<string | null>(null);
const tab = ref('colors');

onErrorCaptured((err) => {
  error.value = err.message || String(err);
  console.error('Component error:', err);
  return false;
});
</script>

<style>
/* デザイントークンのCSS変数を適用 */
:root {
  --vb-font-family-base: 'Hiragino Sans', sans-serif;
}
</style>
