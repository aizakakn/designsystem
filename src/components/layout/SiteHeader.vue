<template>
  <v-app-bar
    :elevation="0"
    :height="64"
    fixed
    class="site-header"
  >
    <div class="header-container">
      <!-- デスクトップ表示 -->
      <div class="header-desktop">
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
              <VBIcon name="truck" label="買取申込み" class="nav-icon" />
              <span class="nav-text">買取申込み</span>
            </a>

            <a href="#" class="nav-link">
              <VBIcon name="bookshelf" label="ライブラリ" class="nav-icon" />
              <span class="nav-text">ライブラリ</span>
            </a>

            <a href="#" class="nav-link">
              <VBIcon name="bookOpenVariant" label="読みもの" class="nav-icon" />
              <span class="nav-text">読みもの</span>
            </a>
          </div>
        </div>

        <!-- 中央: スペーサー -->
        <div class="header-spacer" />

        <!-- 右側: 検索・アイコン -->
        <div class="header-right">
          <div class="search-box">
            <VBIcon name="magnify" label="検索" class="search-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="気になる本を検索"
              class="search-input"
            />
          </div>

          <a href="#" class="icon-link">
            <VBIcon name="account" label="ログイン" class="header-icon" />
          </a>

          <div class="icon-link">
            <VBIcon name="cart" label="カート" class="header-icon" />
          </div>
        </div>
      </div>

      <!-- モバイル表示 -->
      <div class="header-mobile">
        <button class="mobile-menu-button" @click="toggleMobileMenu">
          <VBIcon name="menu" label="メニュー" class="mobile-icon" />
        </button>

        <a href="/" class="mobile-logo-link">
          <div class="vb-logo-mobile">
            <img
              :src="logoImage"
              alt="VALUE BOOKS"
              class="logo-image"
            />
          </div>
        </a>

        <div class="mobile-right-icons">
          <button class="mobile-icon-button">
            <VBIcon name="camera" label="カメラ" class="mobile-icon camera-icon" />
          </button>

          <a href="#" class="mobile-icon-button">
            <VBIcon name="account" label="ログイン" class="mobile-icon" />
          </a>

          <div class="mobile-icon-button">
            <VBIcon name="cart" label="カート" class="mobile-icon" />
          </div>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VBIcon from '@/components/icons/VBIcon.vue'

const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

/**
 * ロゴは public 配下の静的ファイルを使う
 * public/assets/images/header/logo.svg
 */
const logoImage = '/designsystem/assets/images/header/logo.svg'
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

/* デスクトップ表示 */
.header-desktop {
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
  align-items: center;
  padding: 16px;
  text-decoration: none;
}

.vb-logo {
  height: 16px;
  width: 160px;
}

.logo-image {
  width: 100%;
  height: 100%;
  display: block;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: var(--vb-color-text-primary);
}

.nav-icon {
  width: 24px;
  height: 24px;
}

.header-spacer {
  flex: 1;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background-color: var(--vb-color-background-default);
  border-radius: 20px;
  width: 320px;
}

.search-icon {
  width: 24px;
  height: 24px;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 12px;
  color: var(--vb-color-text-secondary);
}

.icon-link {
  padding: 16px 8px;
}

.header-icon {
  width: 24px;
  height: 24px;
}

/* モバイル表示 */
.header-mobile {
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 16px;
}

.mobile-menu-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.vb-logo-mobile {
  height: 16px;
  width: 120px;
}

.mobile-right-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mobile-icon-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.mobile-icon {
  width: 24px;
  height: 24px;
}

.camera-icon {
  color: var(--vb-color-service-sell-blue, #0095D9);
}

/* レスポンシブ対応 */
@media (max-width: 960px) {
  .header-desktop {
    display: none;
  }

  .header-mobile {
    display: flex;
  }
}

@media (min-width: 961px) {
  .header-mobile {
    display: none;
  }
}
</style>
