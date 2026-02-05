<template>
  <v-footer :elevation="0" class="site-footer">
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
              <img :src="iconTwitter" alt="Twitter / X" class="sns-icon" />
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

        <!-- 右側: その他のサービス + B Corp -->
        <div class="footer-right">
          <div class="footer-services">
            <p class="footer-services-title">その他のサービス</p>

            <div class="footer-service-list">
              <!-- Vaboo -->
              <div class="footer-service-item">
                <div class="service-logo">
                  <img :src="logoVaboo" alt="Vaboo" class="service-logo-image" />
                </div>
                <div class="service-info">
                  <p class="service-name">Vaboo / バブー</p>
                  <p class="service-description">
                    会員登録不要で気軽に古本買取
                  </p>
                </div>
              </div>

              <!-- charibon -->
              <div class="footer-service-item">
                <div class="service-logo">
                  <img
                    :src="logoCharibon"
                    alt="charibon"
                    class="service-logo-image"
                  />
                </div>
                <div class="service-info">
                  <p class="service-name">charibon / チャリボン</p>
                  <p class="service-description">
                    本で社会に寄付する取り組みをしています
                  </p>
                </div>
              </div>

              <!-- NABO -->
              <div class="footer-service-item">
                <div class="service-logo nabo-logo">
                  <img
                    :src="logoNabo"
                    alt="NABO"
                    class="service-logo-image nabo-image"
                  />
                </div>
                <div class="service-info">
                  <p class="service-name">本と茶 NABO（実店舗）</p>
                  <p class="service-description">
                    バリューブックスが運営するブックカフェ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- B Corp ロゴ -->
          <div class="bcorp-logo">
            <img
              :src="logoBcorp"
              alt="Certified B Corporation"
              class="bcorp-image"
            />
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
/**
 * GitHub Pages: base = /designsystem/
 * 画像は public/assets/images/footer に集約
 */
const BASE = '/designsystem/assets/images/footer'

const vbLogo = `${BASE}/vb_logo.svg`
const iconInstagram = `${BASE}/iconInstagram.svg`
const iconTwitter = `${BASE}/iconTwitter.svg`
const iconLine = `${BASE}/iconLine.svg`

const logoVaboo = `${BASE}/vaboo.svg`
const logoCharibon = `${BASE}/charibon.svg`
const logoNabo = `${BASE}/nabo.svg`

const logoBcorp = `${BASE}/logo_bcorp.svg`
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
}

.vb-logo-footer {
  width: 80px;
  height: 45px;
}

.footer-logo-image {
  width: 100%;
  height: 100%;
}

.sns-icons {
  display: flex;
  gap: 24px;
}

.sns-link {
  width: 24px;
  height: 24px;
}

.sns-icon {
  width: 100%;
  height: 100%;
}

.footer-center {
  display: flex;
  gap: 40px;
  font-size: 12px;
  font-weight: 600;
}

.footer-menu-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-link {
  color: var(--vb-color-text-primary);
  text-decoration: none;
}

.footer-right {
  display: flex;
  gap: 40px;
}

.footer-services {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-services-title {
  font-size: 12px;
  font-weight: 300;
}

.footer-service-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-service-item {
  display: flex;
  gap: 8px;
}

.service-logo {
  width: 64px;
  height: 32px;
  position: relative;
}

.nabo-logo {
  background: var(--vb-color-base-white);
  border-radius: 4px;
}

.service-logo-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nabo-image {
  width: 62%;
  height: 88%;
  margin: auto;
}

.service-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.service-name {
  font-size: 12px;
  font-weight: 600;
}

.service-description {
  font-size: 10px;
  font-weight: 300;
}

.bcorp-logo {
  width: 107px;
  flex-shrink: 0;
}

.bcorp-image {
  width: 100%;
  height: auto;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-link-small {
  text-decoration: none;
  color: var(--vb-color-text-secondary);
}

.footer-copyright {
  font-size: 8px;
}
</style>
