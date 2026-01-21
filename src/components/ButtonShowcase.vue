<template>
  <div class="button-showcase">
    <h2 class="text-h6 mb-4">ボタンサイズ</h2>
    <div class="d-flex flex-column gap-4 mb-8">
      <div>
        <h3 class="text-subtitle-1 mb-2">Button1 (16px)</h3>
        <div class="d-flex gap-2 flex-wrap">
          <VBButton size="button1" color="primary">プライマリ</VBButton>
          <VBButton size="button1" color="secondary">セカンダリ</VBButton>
          <VBButton size="button1" variant="outlined">アウトライン</VBButton>
          <VBButton size="button1" variant="text">テキスト</VBButton>
        </div>
      </div>
      
      <div>
        <h3 class="text-subtitle-1 mb-2">Button2 (14px)</h3>
        <div class="d-flex gap-2 flex-wrap">
          <VBButton size="button2" color="primary">プライマリ</VBButton>
          <VBButton size="button2" color="secondary">セカンダリ</VBButton>
          <VBButton size="button2" variant="outlined">アウトライン</VBButton>
          <VBButton size="button2" variant="text">テキスト</VBButton>
        </div>
      </div>
      
      <div>
        <h3 class="text-subtitle-1 mb-2">Button3 (12px)</h3>
        <div class="d-flex gap-2 flex-wrap">
          <VBButton size="button3" color="primary">プライマリ</VBButton>
          <VBButton size="button3" color="secondary">セカンダリ</VBButton>
          <VBButton size="button3" variant="outlined">アウトライン</VBButton>
          <VBButton size="button3" variant="text">テキスト</VBButton>
        </div>
      </div>
    </div>

    <h2 class="text-h6 mb-4">サービスカラー</h2>
    <div class="d-flex gap-2 flex-wrap mb-8">
      <VBButton color="sell">売却 (Sell Blue)</VBButton>
      <VBButton color="buy">購入 (Buy Orange)</VBButton>
      <VBButton color="library">図書館 (Library Green)</VBButton>
    </div>

    <h2 class="text-h6 mb-4">状態</h2>
    <div class="d-flex gap-2 flex-wrap mb-8">
      <VBButton color="primary">通常</VBButton>
      <VBButton color="primary" disabled>無効</VBButton>
      <VBButton color="primary" loading>ローディング</VBButton>
    </div>

    <h2 class="text-h6 mb-4">アイコン付き</h2>
    <div class="d-flex gap-2 flex-wrap mb-8">
      <VBButton color="primary" prepend-icon="mdi-check">確認</VBButton>
      <VBButton color="primary" append-icon="mdi-arrow-right">次へ</VBButton>
      <VBButton color="primary" prepend-icon="mdi-download" append-icon="mdi-arrow-right">ダウンロード</VBButton>
    </div>

    <h2 class="text-h6 mb-4">セマンティックカラー</h2>
    <div class="d-flex gap-2 flex-wrap">
      <VBButton color="error">エラー</VBButton>
      <VBButton color="success">成功</VBButton>
      <VBButton color="info">情報</VBButton>
      <VBButton color="warning">警告</VBButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import VBButton from './VBButton.vue';
</script>

<style scoped>
.button-showcase {
  padding: 16px 0;
}

.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-8 {
  margin-bottom: 32px;
}
</style>
