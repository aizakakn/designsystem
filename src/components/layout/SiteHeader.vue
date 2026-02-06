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
        <!-- メイン部分 -->
        <div class="mobile-main-row">
          <!-- 左側: ロゴ + 検索ボックス -->
          <div class="mobile-left-section">
            <a href="/" class="mobile-logo-link">
              <div class="vb-logo-mobile">
                <img
                  :src="mobileLogoImage"
                  alt="VALUE BOOKS"
                  class="logo-image"
                />
              </div>
            </a>
            
            <div class="mobile-search-box">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="気になる本を検索"
                class="mobile-search-input"
              />
              <VBIcon name="camera" label="カメラ" class="mobile-camera-icon" />
            </div>
          </div>
          
          <!-- 右側: アイコン -->
          <div class="mobile-right-icons">
            <a href="#" class="mobile-icon-button">
              <VBIcon name="account" label="ログイン" class="mobile-icon" />
            </a>
            
            <div class="mobile-icon-button">
              <VBIcon name="cart" label="カート" class="mobile-icon" />
            </div>
            
            <button class="mobile-icon-button" @click="toggleMobileMenu">
              <VBIcon name="menu" label="メニュー" class="mobile-icon" />
            </button>
          </div>
        </div>
        
        <!-- ナビゲーション部分 -->
        <div class="mobile-nav-row">
          <a href="#" class="mobile-nav-link">
            <VBIcon name="truck" label="買取申込み" class="mobile-nav-icon" />
            <span class="mobile-nav-text">買取申込み</span>
          </a>
          
          <a href="#" class="mobile-nav-link">
            <VBIcon name="bookshelf" label="ライブラリ" class="mobile-nav-icon" />
            <span class="mobile-nav-text">ライブラリ</span>
          </a>
          
          <a href="#" class="mobile-nav-link">
            <VBIcon name="bookOpenVariant" label="読みもの" class="mobile-nav-icon" />
            <span class="mobile-nav-text">読みもの</span>
          </a>
        </div>
        
        <!-- 下部線 -->
        <div class="mobile-under-line"></div>
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
 * デスクトップ: public/assets/images/header/logo.svg
 * モバイル: public/assets/images/footer/vb_logo.svg
 */
const logoImage = '/designsystem/assets/images/header/logo.svg'
const mobileLogoImage = '/designsystem/assets/images/footer/vb_logo.svg'
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
  flex-direction: column;
  width: 100%;
  height: 118px;
  background-color: var(--vb-color-base-white);
  position: relative;
}

.mobile-main-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding-right: 16px;
}

.mobile-left-section {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  min-width: 0;
  gap: 0;
}

.mobile-logo-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 50px;
  width: 64px;
  text-decoration: none;
  flex-shrink: 0;
}

.vb-logo-mobile {
  height: 18px;
  width: 32px;
}

.mobile-search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 160px;
  padding: 6px 12px;
  background-color: var(--vb-color-background-default, #F5F5F5);
  border-radius: 25px;
  gap: 8px;
}

.mobile-search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 300;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: 1.5;
  color: var(--vb-color-text-secondary, #6E6E6E);
  min-width: 0;
}

.mobile-search-input::placeholder {
  color: var(--vb-color-text-secondary, #6E6E6E);
}

.mobile-camera-icon {
  width: 24px;
  height: 24px;
  color: var(--vb-color-service-sell-blue, #0095D9);
  flex-shrink: 0;
}

.mobile-right-icons {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.mobile-icon-button {
  background: none;
  border: none;
  padding: 0;
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

.mobile-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  flex: 1;
  gap: 8px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--vb-color-text-primary, #2C2C2C);
  font-size: 14px;
  font-weight: 600;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: 1.5;
}

.mobile-nav-icon {
  width: 24px;
  height: 24px;
}

.mobile-nav-text {
  white-space: nowrap;
}

.mobile-under-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  width: 100%;
  background-color: var(--vb-color-background-default, #F5F5F5);
}

/* レスポンシブ対応 */
@media (max-width: 960px) {
  .site-header {
    height: 118px !important;
  }

  .site-header :deep(.v-toolbar__content) {
    height: 118px !important;
  }

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
