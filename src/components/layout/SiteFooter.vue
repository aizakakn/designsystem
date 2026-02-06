<template>
  <v-footer :elevation="0" class="site-footer">
    <!-- デスクトップ表示 -->
    <div class="footer-desktop">
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
    </div>

    <!-- モバイル表示 -->
    <div class="footer-mobile">
      <!-- 上部セクション（ライトグレー背景） -->
      <div class="footer-mobile-top">
        <div class="footer-mobile-top-content">
          <!-- リンクメニュー -->
          <div class="footer-mobile-links">
            <a href="#" class="footer-mobile-link">おためし査定</a>
            <a href="#" class="footer-mobile-link">よくある質問</a>
            <a href="#" class="footer-mobile-link">はじめての方へ</a>
            <a href="#" class="footer-mobile-link">ご利用方法</a>
            <a href="#" class="footer-mobile-link">お問い合わせ</a>
            <a href="#" class="footer-mobile-link">パートナーシップ・プログラム</a>
          </div>

          <!-- その他のサービス -->
          <div class="footer-mobile-services">
            <p class="footer-mobile-services-title">その他のサービス</p>

            <div class="footer-mobile-service-list">
              <!-- Vaboo -->
              <div class="footer-mobile-service-item">
                <div class="footer-mobile-service-logo">
                  <img :src="logoVaboo" alt="Vaboo" class="footer-mobile-service-logo-image" />
                </div>
                <div class="footer-mobile-service-info">
                  <p class="footer-mobile-service-name">Vaboo / バブー</p>
                  <p class="footer-mobile-service-description">
                    会員登録不要で気軽に古本買取
                  </p>
                </div>
              </div>

              <!-- charibon -->
              <div class="footer-mobile-service-item">
                <div class="footer-mobile-service-logo">
                  <img
                    :src="logoCharibon"
                    alt="charibon"
                    class="footer-mobile-service-logo-image"
                  />
                </div>
                <div class="footer-mobile-service-info">
                  <p class="footer-mobile-service-name">charibon / チャリボン</p>
                  <p class="footer-mobile-service-description">
                    本で社会に寄付する取り組みをしています
                  </p>
                </div>
              </div>

              <!-- NABO -->
              <div class="footer-mobile-service-item">
                <div class="footer-mobile-service-logo footer-mobile-nabo-logo">
                  <img
                    :src="logoNabo"
                    alt="NABO"
                    class="footer-mobile-service-logo-image footer-mobile-nabo-image"
                  />
                </div>
                <div class="footer-mobile-service-info">
                  <p class="footer-mobile-service-name">本と茶 NABO（実店舗）</p>
                  <p class="footer-mobile-service-description">
                    バリューブックスが運営するブックカフェ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 下部セクション（ダークグレー背景） -->
      <div class="footer-mobile-bottom">
        <div class="footer-mobile-bottom-content">
          <!-- ロゴとSNS -->
          <div class="footer-mobile-brand">
            <div class="footer-mobile-logo-wrapper">
              <div class="vb-logo-footer-mobile">
                <img
                  :src="vbLogo"
                  alt="VALUE BOOKS"
                  class="footer-logo-image"
                />
              </div>
            </div>
            <div class="footer-mobile-sns-icons">
              <a href="#" class="footer-mobile-sns-link">
                <img :src="iconInstagram" alt="Instagram" class="footer-mobile-sns-icon" />
              </a>
              <a href="#" class="footer-mobile-sns-link">
                <img :src="iconTwitter" alt="Twitter / X" class="footer-mobile-sns-icon" />
              </a>
              <a href="#" class="footer-mobile-sns-link">
                <img :src="iconLine" alt="LINE" class="footer-mobile-sns-icon" />
              </a>
            </div>
          </div>

          <!-- B Corp ロゴ -->
          <div class="footer-mobile-bcorp">
            <div class="bcorp-logo-mobile">
              <img
                :src="logoBcorp"
                alt="Certified B Corporation"
                class="bcorp-image-mobile"
              />
            </div>
          </div>

          <!-- コピーライトとリンク -->
          <div class="footer-mobile-legal">
            <div class="footer-mobile-bottom-links">
              <a href="#" class="footer-mobile-link-small">個人情報の取扱について</a>
              <a href="#" class="footer-mobile-link-small">特定商取引法に基づく表記</a>
              <a href="#" class="footer-mobile-link-small">利用規約</a>
              <a href="#" class="footer-mobile-link-small">会社概要</a>
              <a href="#" class="footer-mobile-link-small">採用情報</a>
            </div>
            <p class="footer-mobile-copyright">
              COPYRIGHT © VALUE BOOKS ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
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
  padding: 0 16px;
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

/* モバイル表示 */
.footer-mobile {
  display: none;
  width: 100%;
}

.footer-mobile-top {
  background-color: var(--vb-color-background-default, #F5F5F5);
  padding: 40px 32px;
}

.footer-mobile-top-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-mobile-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: normal;
}

.footer-mobile-link {
  color: var(--vb-color-text-primary, #2C2C2C);
  text-decoration: none;
}

.footer-mobile-services {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-mobile-services-title {
  font-size: 12px;
  font-weight: 300;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: 1.5;
  color: var(--vb-color-text-primary, #2C2C2C);
}

.footer-mobile-service-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-mobile-service-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.footer-mobile-service-logo {
  width: 64px;
  height: 32px;
  position: relative;
  flex-shrink: 0;
}

.footer-mobile-nabo-logo {
  background: var(--vb-color-base-white);
  border-radius: 4px;
}

.footer-mobile-service-logo-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-mobile-nabo-image {
  width: 62%;
  height: 88%;
  margin: auto;
}

.footer-mobile-service-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.footer-mobile-service-name {
  font-size: 12px;
  font-weight: 600;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: 1.4;
  color: var(--vb-color-text-primary, #2C2C2C);
}

.footer-mobile-service-description {
  font-size: 10px;
  font-weight: 300;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: 1.5;
  color: var(--vb-color-text-primary, #2C2C2C);
}

.footer-mobile-bottom {
  background-color: var(--vb-color-gray-100, #CACACA);
  padding: 64px 32px;
}

.footer-mobile-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.footer-mobile-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.footer-mobile-logo-wrapper {
  padding: 16px;
}

.vb-logo-footer-mobile {
  width: 160px;
  height: 16px;
}

.footer-mobile-sns-icons {
  display: flex;
  gap: 24px;
  align-items: center;
}

.footer-mobile-sns-link {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-mobile-sns-icon {
  width: 100%;
  height: 100%;
}

.footer-mobile-bcorp {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bcorp-logo-mobile {
  width: 80px;
  height: 117px;
  position: relative;
}

.bcorp-image-mobile {
  width: 100%;
  height: auto;
}

.footer-mobile-legal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 311px;
}

.footer-mobile-bottom-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  justify-content: center;
  font-size: 10px;
  font-weight: 300;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: normal;
}

.footer-mobile-link-small {
  text-decoration: none;
  color: var(--vb-color-text-secondary, #6E6E6E);
}

.footer-mobile-copyright {
  font-size: 8px;
  font-weight: 300;
  font-family: 'Hiragino Sans', sans-serif;
  line-height: normal;
  color: var(--vb-color-text-primary, #2C2C2C);
  text-align: right;
  width: 100%;
}

/* レスポンシブ対応 */
@media (max-width: 960px) {
  .footer-desktop {
    display: none;
  }

  .footer-mobile {
    display: block;
  }
}

@media (min-width: 961px) {
  .footer-mobile {
    display: none;
  }
}
</style>
