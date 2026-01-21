<template>
  <div class="layout-showcase">
    <div class="showcase-section">
      <h2 class="text-h6 mb-4">ヘッダー</h2>
      <div class="header-preview">
        <div class="header-wrapper">
          <SiteHeader />
        </div>
      </div>
    </div>
    
    <v-divider class="my-8" />
    
    <div class="showcase-section">
      <h2 class="text-h6 mb-4">フッター</h2>
      <div class="footer-preview">
        <SiteFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './layout/SiteHeader.vue';
import SiteFooter from './layout/SiteFooter.vue';
</script>

<style scoped>
.layout-showcase {
  padding: 24px 0;
}

.showcase-section {
  margin-bottom: 32px;
}

.header-preview {
  border: 1px solid var(--vb-color-border-default, #6E6E6E);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--vb-color-base-white);
  position: relative;
}

.header-wrapper {
  position: relative;
  width: 100%;
}

.footer-preview {
  border: 1px solid var(--vb-color-border-default, #6E6E6E);
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--vb-color-background-default);
}

/* プレビュー内のヘッダーをfixedからstaticに変更 */
.header-preview :deep(.v-app-bar) {
  position: relative !important;
}
</style>
