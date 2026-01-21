#!/bin/bash

# Figma画像ダウンロードスクリプト
# このスクリプトは、Figmaから取得した画像URLから画像をダウンロードします

# ディレクトリの作成
mkdir -p src/assets/images/header
mkdir -p src/assets/images/footer

# ヘッダー画像のダウンロード
echo "ヘッダー画像をダウンロード中..."
curl -L "https://www.figma.com/api/mcp/asset/00fcbacb-6bfe-444a-be58-26f8f9c19270" -o src/assets/images/header/valuebooks-logo.png
curl -L "https://www.figma.com/api/mcp/asset/5bace385-18b2-405d-b7e3-a4a9c79f6b65" -o src/assets/images/header/icon-cart.png
curl -L "https://www.figma.com/api/mcp/asset/27d78100-3039-42fe-b527-c51da9d671fe" -o src/assets/images/header/icon-login.png
curl -L "https://www.figma.com/api/mcp/asset/e62434a0-8970-41e0-ad9a-ba3ab5acfbee" -o src/assets/images/header/icon-search.png
curl -L "https://www.figma.com/api/mcp/asset/b3637f81-7530-437e-b8f9-99d1bbca9c1e" -o src/assets/images/header/icon-add.png
curl -L "https://www.figma.com/api/mcp/asset/976f6394-4bc1-4791-9654-bdaa51c9595f" -o src/assets/images/header/icon-endpaper.png

# フッター画像のダウンロード
echo "フッター画像をダウンロード中..."
curl -L "https://www.figma.com/api/mcp/asset/4cb1e912-6e1a-4ec5-a353-cda2e5878b4e" -o src/assets/images/footer/vb-logo.png
curl -L "https://www.figma.com/api/mcp/asset/864cbb3d-837d-459a-ad02-02a938b1570a" -o src/assets/images/footer/icon-instagram.png
curl -L "https://www.figma.com/api/mcp/asset/6fdf1061-efba-4055-8805-4c21f0f220a8" -o src/assets/images/footer/icon-twitter.png
curl -L "https://www.figma.com/api/mcp/asset/96638c98-7d23-4d0e-a167-d5c6b657c1f2" -o src/assets/images/footer/icon-line.png
curl -L "https://www.figma.com/api/mcp/asset/8bb0fcc6-6b9c-45f1-90a6-b86ceceb8ef8" -o src/assets/images/footer/logo-vaboo.png
curl -L "https://www.figma.com/api/mcp/asset/5d891c83-de9c-4b3b-bd74-52bf56dda194" -o src/assets/images/footer/logo-charibon.png
curl -L "https://www.figma.com/api/mcp/asset/a7ff789c-5246-4b29-9f6d-7918b598e0ff" -o src/assets/images/footer/logo-nabo.png
curl -L "https://www.figma.com/api/mcp/asset/8c61cae5-0ad7-4046-ba46-4e1f57633445" -o src/assets/images/footer/bcorp-group1.png
curl -L "https://www.figma.com/api/mcp/asset/449d3cd6-53e1-48eb-9fc7-711dcd949e3b" -o src/assets/images/footer/bcorp-group2.png
curl -L "https://www.figma.com/api/mcp/asset/74823643-bec0-4e88-a828-c5247b251001" -o src/assets/images/footer/bcorp-group3.png
curl -L "https://www.figma.com/api/mcp/asset/1fd12343-a35b-4480-aba0-40848566ae35" -o src/assets/images/footer/bcorp-group4.png

echo "画像のダウンロードが完了しました！"
echo "コンポーネント内の画像URLをローカルインポートに変更してください。"
