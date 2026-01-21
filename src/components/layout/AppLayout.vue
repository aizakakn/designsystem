<template>
  <v-app class="app-layout">
    <SiteHeader />
    <v-main class="main-content">
      <slot />
    </v-main>
    <SiteFooter />
  </v-app>
</template>

<script setup lang="ts">
import SiteHeader from './SiteHeader.vue';
import SiteFooter from './SiteFooter.vue';
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
  padding-top: var(--vb-header-height, 64px);
  padding-bottom: 0;
}
</style>
