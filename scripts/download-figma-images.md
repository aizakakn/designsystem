# Figma画像ダウンロード手順

Figmaから取得した画像URLは7日間のみ有効です。以下のURLから画像をダウンロードして、適切なディレクトリに保存してください。

## ヘッダー画像

以下のURLから画像をダウンロードして `src/assets/images/header/` に保存してください：

- **VALUE BOOKSロゴ**: https://www.figma.com/api/mcp/asset/00fcbacb-6bfe-444a-be58-26f8f9c19270
  - 保存先: `src/assets/images/header/valuebooks-logo.png`
  - サイズ: 約160px × 16px

- **カートアイコン**: https://www.figma.com/api/mcp/asset/5bace385-18b2-405d-b7e3-a4a9c79f6b65
  - 保存先: `src/assets/images/header/icon-cart.png`
  - サイズ: 24px × 24px

- **ログインアイコン**: https://www.figma.com/api/mcp/asset/27d78100-3039-42fe-b527-c51da9d671fe
  - 保存先: `src/assets/images/header/icon-login.png`
  - サイズ: 24px × 24px

- **検索アイコン**: https://www.figma.com/api/mcp/asset/e62434a0-8970-41e0-ad9a-ba3ab5acfbee
  - 保存先: `src/assets/images/header/icon-search.png`
  - サイズ: 24px × 24px

- **追加アイコン**: https://www.figma.com/api/mcp/asset/b3637f81-7530-437e-b8f9-99d1bbca9c1e
  - 保存先: `src/assets/images/header/icon-add.png`
  - サイズ: 24px × 24px

- **読みものアイコン**: https://www.figma.com/api/mcp/asset/976f6394-4bc1-4791-9654-bdaa51c9595f
  - 保存先: `src/assets/images/header/icon-endpaper.png`
  - サイズ: 24px × 24px

## フッター画像

以下のURLから画像をダウンロードして `src/assets/images/footer/` に保存してください：

- **VALUE BOOKSロゴ（フッター用）**: https://www.figma.com/api/mcp/asset/4cb1e912-6e1a-4ec5-a353-cda2e5878b4e
  - 保存先: `src/assets/images/footer/vb-logo.png`
  - サイズ: 約80px × 45px

- **Instagramアイコン**: https://www.figma.com/api/mcp/asset/864cbb3d-837d-459a-ad02-02a938b1570a
  - 保存先: `src/assets/images/footer/icon-instagram.png`
  - サイズ: 24px × 24px

- **Twitter/Xアイコン**: https://www.figma.com/api/mcp/asset/6fdf1061-efba-4055-8805-4c21f0f220a8
  - 保存先: `src/assets/images/footer/icon-twitter.png`
  - サイズ: 24px × 24px

- **LINEアイコン**: https://www.figma.com/api/mcp/asset/96638c98-7d23-4d0e-a167-d5c6b657c1f2
  - 保存先: `src/assets/images/footer/icon-line.png`
  - サイズ: 24px × 24px

- **Vabooロゴ**: https://www.figma.com/api/mcp/asset/8bb0fcc6-6b9c-45f1-90a6-b86ceceb8ef8
  - 保存先: `src/assets/images/footer/logo-vaboo.png`
  - サイズ: 64px × 32px

- **charibonロゴ**: https://www.figma.com/api/mcp/asset/5d891c83-de9c-4b3b-bd74-52bf56dda194
  - 保存先: `src/assets/images/footer/logo-charibon.png`
  - サイズ: 64px × 32px

- **NABOロゴ**: https://www.figma.com/api/mcp/asset/a7ff789c-5246-4b29-9f6d-7918b598e0ff
  - 保存先: `src/assets/images/footer/logo-nabo.png`
  - サイズ: 64px × 32px

- **B Corpロゴ（パート1）**: https://www.figma.com/api/mcp/asset/8c61cae5-0ad7-4046-ba46-4e1f57633445
  - 保存先: `src/assets/images/footer/bcorp-group1.png`

- **B Corpロゴ（パート2）**: https://www.figma.com/api/mcp/asset/449d3cd6-53e1-48eb-9fc7-711dcd949e3b
  - 保存先: `src/assets/images/footer/bcorp-group2.png`

- **B Corpロゴ（パート3）**: https://www.figma.com/api/mcp/asset/74823643-bec0-4e88-a828-c5247b251001
  - 保存先: `src/assets/images/footer/bcorp-group3.png`

- **B Corpロゴ（パート4）**: https://www.figma.com/api/mcp/asset/1fd12343-a35b-4480-aba0-40848566ae35
  - 保存先: `src/assets/images/footer/bcorp-group4.png`

## ダウンロード後の使用方法

画像をダウンロードした後、コンポーネント内で以下のようにインポートして使用してください：

```typescript
// SiteHeader.vue の例
import logoImage from '@/assets/images/header/valuebooks-logo.png';
import iconCart from '@/assets/images/header/icon-cart.png';
// ... 他の画像も同様にインポート

const logoImage = logoImage;
const iconCart = iconCart;
```
