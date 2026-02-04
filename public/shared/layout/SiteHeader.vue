<template>
  <v-app-bar
    :elevation="0"
    :height="64"
    fixed
    class="site-header"
  >
    <div class="header-container">
      <!-- 左側: ロゴとナビゲーション -->
      <div class="header-left">
        <a href="/" class="logo-link">
          <div class="vb-logo">
            <img
              :src="logoImage"
              alt="VALUE BOOKS"
              class="logo-image"
            />
          </div>
        </a>
        
        <div class="nav-links">
          <a href="#" class="nav-link">
            <img :src="iconTruck" alt="買取申込み" class="nav-icon" />
            <span class="nav-text">買取申込み</span>
          </a>
          <a href="#" class="nav-link">
            <img :src="iconLibrary" alt="ライブラリ" class="nav-icon" />
            <span class="nav-text">ライブラリ</span>
          </a>
          <a href="#" class="nav-link">
            <img :src="iconEndpaper" alt="読みもの" class="nav-icon" />
            <span class="nav-text">読みもの</span>
          </a>
        </div>
      </div>

      <!-- 中央: スペーサー -->
      <div class="header-spacer" />

      <!-- 右側: 検索ボックスとアイコン -->
      <div class="header-right">
        <div class="search-box">
          <img :src="iconSearch" alt="検索" class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="気になる本を検索"
            class="search-input"
          />
        </div>
        
        <a href="#" class="icon-link">
          <img :src="iconLogin" alt="ログイン" class="header-icon" />
        </a>
        
        <div class="icon-link">
          <img :src="iconCart" alt="カート" class="header-icon" />
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import iconTruck from '../../assets/images/header/icon-truck.svg?url';
import iconLibrary from '../../assets/images/header/icon-library.svg?url';

const searchQuery = ref('');

// Figmaから取得した最新の画像URL（7日間有効）
const logoImage = 'https://www.figma.com/api/mcp/asset/7ac81632-f592-46e9-a9f1-143a65cb8414';
const iconCart = 'https://www.figma.com/api/mcp/asset/2aadd22a-f942-47c0-acc4-cebe1ec386c1';
const iconLogin = 'https://www.figma.com/api/mcp/asset/b18b3e36-b4bf-40fe-b00e-7b78900a1059';
const iconSearch = 'https://www.figma.com/api/mcp/asset/8f82b96c-dcb6-47ae-8bcc-ddb53b9339d0';
const iconEndpaper = 'https://www.figma.com/api/mcp/asset/27c24175-5eaf-475b-bd6b-96c2cbaad1bf';
</script>

<style scoped>
.site-header {
  background-color: var(--vb-color-base-white) !important;
  border-bottom: 1px solid var(--vb-color-background-default);
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  flex-shrink: 0;
  z-index: 3;
}

.logo-link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
}

.vb-logo {
  height: 16.005px;
  width: 159.988px;
  position: relative;
}

.logo-image {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.nav-links {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px;
  flex-shrink: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  flex-shrink: 0;
  font-family: var(--vb-font-family-base);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--vb-color-text-primary);
}

.nav-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: relative;
}

.nav-text {
  flex-shrink: 0;
  line-height: 1.5;
}

.header-spacer {
  flex: 1 0 0;
  height: 100%;
  min-height: 1px;
  min-width: 1px;
  overflow: hidden;
  z-index: 2;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  flex-shrink: 0;
  z-index: 1;
  overflow: hidden;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background-color: var(--vb-color-background-default);
  border-radius: 20px;
  width: 320px;
  flex-shrink: 0;
}

.search-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: relative;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--vb-font-family-base);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: var(--vb-color-text-secondary);
}

.search-input::placeholder {
  color: var(--vb-color-text-secondary);
}

.icon-link {
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  flex-shrink: 0;
  text-decoration: none;
  cursor: pointer;
}

.header-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: relative;
}
</style>
