<template>
  <v-footer
    :elevation="0"
    class="site-footer"
  >
    <div class="footer-container">
      <!-- メインコンテンツ -->
      <div class="footer-main">
        <!-- 左側: ロゴとSNS -->
        <div class="footer-left">
          <div class="vb-logo-footer">
            <img
              :src="vbLogo"
              alt="VALUE BOOKS"
              class="footer-logo-image"
            />
          </div>
          <div class="sns-icons">
            <a href="#" class="sns-link">
              <img :src="iconInstagram" alt="Instagram" class="sns-icon" />
            </a>
            <a href="#" class="sns-link">
              <img :src="iconTwitter" alt="Twitter/X" class="sns-icon" />
            </a>
            <a href="#" class="sns-link">
              <img :src="iconLine" alt="LINE" class="sns-icon" />
            </a>
          </div>
        </div>

        <!-- 中央: リンクメニュー -->
        <div class="footer-center">
          <div class="footer-menu-column">
            <a href="#" class="footer-link">おためし査定</a>
            <a href="#" class="footer-link">よくある質問</a>
            <a href="#" class="footer-link">はじめての方へ</a>
            <a href="#" class="footer-link">ご利用方法</a>
          </div>
          <div class="footer-menu-column">
            <a href="#" class="footer-link">お問い合わせ</a>
            <a href="#" class="footer-link">パートナーシップ・プログラム</a>
          </div>
        </div>

        <!-- 右側: その他のサービスとB Corpロゴ -->
        <div class="footer-right">
          <div class="footer-services">
            <p class="footer-services-title">その他のサービス</p>
            <div class="footer-service-list">
              <!-- Vaboo / バブー -->
              <div class="footer-service-item">
                <div class="service-logo">
                  <img :src="logoVaboo" alt="Vaboo" class="service-logo-image" />
                </div>
                <div class="service-info">
                  <p class="service-name">Vaboo / バブー</p>
                  <p class="service-description">会員登録不要で気軽に古本買取</p>
                </div>
              </div>
              <!-- charibon / チャリボン -->
              <div class="footer-service-item">
                <div class="service-logo">
                  <img :src="logoCharibon" alt="charibon" class="service-logo-image" />
                </div>
                <div class="service-info">
                  <p class="service-name">charibon / チャリボン</p>
                  <p class="service-description">本で社会に寄付する取り組みをしています</p>
                </div>
              </div>
              <!-- 本と茶 NABO -->
              <div class="footer-service-item">
                <div class="service-logo nabo-logo">
                  <img :src="logoNabo" alt="NABO" class="service-logo-image nabo-image" />
                </div>
                <div class="service-info">
                  <p class="service-name">本と茶 NABO（実店舗）</p>
                  <p class="service-description">バリューブックスが運営するブックカフェ</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- B Corpロゴ -->
          <div class="bcorp-logo">
            <div class="bcorp-logo-container">
              <div class="bcorp-part bcorp-part-1">
                <img :src="bcorpGroup1" alt="" class="bcorp-image" />
              </div>
              <div class="bcorp-part bcorp-part-2">
                <img :src="bcorpGroup2" alt="" class="bcorp-image" />
              </div>
              <div class="bcorp-part bcorp-part-3">
                <img :src="bcorpGroup3" alt="" class="bcorp-image" />
              </div>
              <div class="bcorp-part bcorp-part-4">
                <img :src="bcorpGroup4" alt="" class="bcorp-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- コピーライト -->
      <div class="footer-bottom">
        <div class="footer-bottom-links">
          <a href="#" class="footer-link-small">個人情報の取扱について</a>
          <a href="#" class="footer-link-small">特定商取引法に基づく表記</a>
          <a href="#" class="footer-link-small">利用規約</a>
          <a href="#" class="footer-link-small">会社概要</a>
          <a href="#" class="footer-link-small">採用情報</a>
        </div>
        <p class="footer-copyright">
          COPYRIGHT © VALUE BOOKS ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
// Figmaから取得した最新の画像URL（7日間有効）
const vbLogo = 'https://www.figma.com/api/mcp/asset/7ccf8919-3b92-4735-8784-2ff0857db38a';
const iconInstagram = 'https://www.figma.com/api/mcp/asset/d89b4562-5bc4-4a64-bcca-e11dba77cebc';
const iconTwitter = 'https://www.figma.com/api/mcp/asset/4e4ca25d-4ff6-4190-b077-defb46af20ae';
const iconLine = 'https://www.figma.com/api/mcp/asset/60b36344-1f9a-4fce-bb95-11119785629b';
const logoVaboo = 'https://www.figma.com/api/mcp/asset/90e510ea-7ba0-4b9a-82bb-7d7df3c750c3';
const logoCharibon = 'https://www.figma.com/api/mcp/asset/2b2baa85-fac5-457a-be83-e8cf272e2758';
const logoNabo = 'https://www.figma.com/api/mcp/asset/e617bef5-4e02-4e27-9e9f-9fad35bb6a25';
const bcorpGroup1 = 'https://www.figma.com/api/mcp/asset/d41ccbe7-c81f-4e01-bbd9-2071a3684952';
const bcorpGroup2 = 'https://www.figma.com/api/mcp/asset/7986829a-f4ed-416d-97bd-d20c5e0d6335';
const bcorpGroup3 = 'https://www.figma.com/api/mcp/asset/51c97228-c868-4437-b244-e8c0ff7e2d0a';
const bcorpGroup4 = 'https://www.figma.com/api/mcp/asset/74d8f5a6-7617-4ab9-bfeb-931a8e1148dc';
</script>

<style scoped>
.site-footer {
  background-color: var(--vb-color-background-default) !important;
  padding: 80px 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  flex-shrink: 0;
}

.vb-logo-footer {
  height: 45.005px;
  width: 80px;
  position: relative;
  flex-shrink: 0;
}

.footer-logo-image {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.sns-icons {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-shrink: 0;
}

.sns-link {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: relative;
  text-decoration: none;
  display: block;
}

.sns-icon {
  width: 100%;
  height: 100%;
  display: block;
  max-width: none;
}

.footer-center {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-shrink: 0;
  font-family: var(--vb-font-family-base);
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: var(--vb-color-text-primary);
}

.footer-menu-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  flex-shrink: 0;
}

.footer-link {
  font-family: var(--vb-font-family-base);
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: var(--vb-color-text-primary);
  text-decoration: none;
  flex-shrink: 0;
}

.footer-right {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-shrink: 0;
}

.footer-services {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  flex-shrink: 0;
}

.footer-services-title {
  font-family: var(--vb-font-family-base);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: var(--vb-color-text-primary);
  margin: 0;
  flex-shrink: 0;
}

.footer-service-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  flex-shrink: 0;
}

.footer-service-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  flex-shrink: 0;
}

.service-logo {
  width: 64px;
  height: 32px;
  position: relative;
  flex-shrink: 0;
}

.nabo-logo {
  background-color: var(--vb-color-base-white);
  border-radius: 4px;
}

.service-logo-image {
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: cover;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.nabo-image {
  height: 87.5%;
  left: 18.97%;
  top: 6.25%;
  width: 62.07%;
}

.service-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  flex-shrink: 0;
  color: var(--vb-color-text-primary);
}

.service-name {
  font-family: var(--vb-font-family-base);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vb-color-text-primary);
  margin: 0;
  flex-shrink: 0;
}

.service-description {
  font-family: var(--vb-font-family-base);
  font-size: 10px;
  font-weight: 300;
  line-height: 1.5;
  color: var(--vb-color-text-primary);
  margin: 0;
  flex-shrink: 0;
}

.bcorp-logo {
  width: 107px;
  height: 156px;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

.bcorp-logo-container {
  position: absolute;
  inset: -0.17% 5.97% -1.55% 5.86%;
  width: calc(100% - 11.83%);
  height: calc(100% + 1.72%);
}

.bcorp-part {
  position: absolute;
  width: 100%;
  height: auto;
}

.bcorp-part-1 {
  inset: 16.23% 5.97% 23.55% 6.01%;
}

.bcorp-part-2 {
  inset: 76.79% 6.07% 13.24% 6.09%;
}

.bcorp-part-3 {
  inset: -0.17% 6.07% 88.8% 5.86%;
}

.bcorp-part-4 {
  inset: 91.76% 6.06% -1.55% 5.86%;
}

.bcorp-image {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.footer-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  font-family: var(--vb-font-family-base);
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
  color: var(--vb-color-text-secondary);
}

.footer-bottom-links {
  display: flex;
  flex: 1 0 0;
  gap: 24px;
  align-items: flex-start;
  min-height: 1px;
  min-width: 1px;
  flex-shrink: 0;
}

.footer-link-small {
  font-family: var(--vb-font-family-base);
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
  color: var(--vb-color-text-secondary);
  text-decoration: none;
  flex-shrink: 0;
}

.footer-copyright {
  font-family: var(--vb-font-family-base);
  font-size: 8px;
  color: var(--vb-color-text-primary);
  text-align: right;
  margin: 0;
  flex-shrink: 0;
}
</style>
