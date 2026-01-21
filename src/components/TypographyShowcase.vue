<template>
  <div class="typography-showcase">
    <h2 class="text-h6 mb-4">タイポグラフィ</h2>
    
    <v-row>
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-4">見出し</h3>
        <div class="d-flex flex-column gap-4 mb-6">
          <div>
            <p class="text-h1 mb-1">Heading 1</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 32px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-h2 mb-1">Heading 2</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 28px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-h3 mb-1">Heading 3</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 24px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-h4 mb-1">Heading 4</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 20px / line-height: 1.5
            </p>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-4">サブタイトル</h3>
        <div class="d-flex flex-column gap-4 mb-6">
          <div>
            <p class="text-subtitle-1 mb-1">Subtitle 1</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 16px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-subtitle-2 mb-1">Subtitle 2</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 14px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-body-2 mb-1" style="font-weight: 600; font-size: 12px; line-height: 1.4;">
              Subtitle 3
            </p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 12px / line-height: 1.4
            </p>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-4">本文</h3>
        <div class="d-flex flex-column gap-4 mb-6">
          <div>
            <p class="text-body-1 mb-1">Body 1</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Regular / 16px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-body-2 mb-1">Body 2</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Regular / 14px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-caption mb-1">Caption 1</p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Regular / 12px / line-height: 1.5
            </p>
          </div>
          <div>
            <p class="text-caption mb-1" style="font-size: 10px;">
              Caption 2
            </p>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Regular / 10px / line-height: 1.5
            </p>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="6">
        <h3 class="text-subtitle-1 mb-4">ボタン・リンク</h3>
        <div class="d-flex flex-column gap-4 mb-6">
          <div>
            <VBButton size="button1" color="primary" class="mb-1">Button 1</VBButton>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 16px / line-height: 1.5
            </p>
          </div>
          <div>
            <VBButton size="button2" color="primary" class="mb-1">Button 2</VBButton>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 14px / line-height: 1.5
            </p>
          </div>
          <div>
            <VBButton size="button3" color="primary" class="mb-1">Button 3</VBButton>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 12px / line-height: 1.4
            </p>
          </div>
          <div>
            <a href="#" class="text-decoration-underline" style="font-family: 'Hiragino Sans', sans-serif; font-weight: 600; font-size: 14px;">
              Text Link 1
            </a>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 14px / line-height: 1.5
            </p>
          </div>
          <div>
            <a href="#" class="text-decoration-underline" style="font-family: 'Hiragino Sans', sans-serif; font-weight: 600; font-size: 12px;">
              Text Link 2
            </a>
            <p class="text-caption text-medium-emphasis">
              Hiragino Sans / Bold / 12px / line-height: 1.4
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    
    <v-divider class="my-6"></v-divider>
    
    <h3 class="text-subtitle-1 mb-4">フォントファミリー</h3>
    <v-card variant="outlined" class="pa-4">
      <p class="text-body-1 mb-2">
        <strong>Hiragino Sans</strong>
      </p>
      <p class="text-body-2 text-medium-emphasis">
        すべてのタイポグラフィで使用されるフォントファミリーです。
      </p>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import VBButton from './VBButton.vue';
</script>

<style scoped>
.typography-showcase {
  padding: 16px 0;
}

.gap-4 {
  gap: 16px;
}

.mb-1 {
  margin-bottom: 4px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-6 {
  margin-bottom: 24px;
}

.my-6 {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
