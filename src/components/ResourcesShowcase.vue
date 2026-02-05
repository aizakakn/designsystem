<template>
  <div class="resources-showcase">
    <h2 class="text-h6 mb-4">リソース</h2>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>アイコンライブラリ</v-card-title>
          <v-card-text>
            <div class="resource-item">
              <h3 class="text-subtitle-1 mb-2">{{ icons.library }}</h3>
              <p class="text-body-2 mb-2">
                デザインシステムでは、アイコンは基本的にMaterial Design Icons (MDI)から使用します。
              </p>
              <v-btn
                :href="icons.url"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="outlined"
                prepend-icon="mdi-open-in-new"
              >
                アイコンライブラリを開く
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>コンポーネントフレームワーク</v-card-title>
          <v-card-text>
            <div class="resource-item">
              <h3 class="text-subtitle-1 mb-2">{{ components.framework }}</h3>
              <p class="text-body-2 mb-2">
                デザインシステムでは、コンポーネントは基本的にVuetifyのものを使用します。
              </p>
              <v-btn
                :href="components.url"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="outlined"
                prepend-icon="mdi-open-in-new"
              >
                フレームワークドキュメントを開く
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { designTokens } from '../tokens';

const icons = computed(() => designTokens.brand.icons);
const components = computed(() => designTokens.brand.components);
</script>

<style scoped>
.resources-showcase {
  padding: 16px 0;
}

.resource-item {
  padding: 8px 0;
}
</style>
