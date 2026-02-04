# VALUE BOOKS Design System

VALUE BOOKS Design System のデザイントークンとVue/Vuetifyコンポーネントライブラリです。
tokens.css は designsystem から自動で同期されます

## 概要

このデザインシステムは、Figmaファイルから取得した変数情報を基に構築されています。デザイントークンは **brand**・**alias**・**mapped** の3層構造で構成されており、Vue 3 + Vuetify 3 を使用してコンポーネントを実装しています。

## 技術スタック

- **Vue 3**: コンポーネントフレームワーク
- **Vuetify 3**: Material Design ベースのUIコンポーネントライブラリ
- **TypeScript**: 型安全性の確保
- **Vite**: ビルドツール

## インストール

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、ブラウザで `http://localhost:3000` にアクセスできます。

## ビルド

```bash
npm run build
```

## 型チェック

```bash
npm run type-check
```

## プロジェクト構造

```
src/
├── components/          # Vueコンポーネント
│   ├── layout/         # レイアウトコンポーネント
│   │   ├── AppLayout.vue    # 固定ヘッダー＋固定フッターのレイアウト
│   │   ├── SiteHeader.vue   # 固定ヘッダー
│   │   └── SiteFooter.vue    # 固定フッター
│   ├── VBButton.vue    # カスタムボタンコンポーネント
│   └── ButtonShowcase.vue  # ボタンのショーケース
├── composables/         # Vue Composables
│   └── useDesignTokens.ts  # デザイントークンを使用するComposable
├── plugins/             # プラグイン
│   └── vuetify-theme.ts    # Vuetifyテーマの設定
├── tokens/              # デザイントークン
│   ├── brand.ts        # brandコレクション
│   ├── alias.ts        # aliasコレクション
│   ├── mapped.ts       # mappedコレクション
│   └── index.ts        # エクスポート
├── types/               # 型定義
│   └── tokens.ts       # デザイントークンの型定義
├── utils/               # ユーティリティ
│   ├── resolveToken.ts      # トークン参照解決
│   ├── toCSSVariables.ts    # CSS変数変換
│   └── validateTokens.ts     # トークン検証
├── App.vue              # メインアプリケーション
└── main.ts              # エントリーポイント
```

## コンポーネント

### Layoutコンポーネント

固定ヘッダーと固定フッターを持つレイアウトコンポーネントです。

#### 使用方法

```vue
<template>
  <AppLayout>
    <v-container>
      <h1>ページコンテンツ</h1>
      <p>ここにページの本文が入ります。</p>
    </v-container>
  </AppLayout>
</template>

<script setup lang="ts">
import { AppLayout } from '@valuebooks/vb-designsystem';
</script>
```

#### 個別コンポーネントの使用

```vue
<template>
  <v-app>
    <SiteHeader />
    <v-main>
      <v-container>
        <h1>ページコンテンツ</h1>
      </v-container>
    </v-main>
    <SiteFooter />
  </v-app>
</template>

<script setup lang="ts">
import { SiteHeader, SiteFooter } from '@valuebooks/vb-designsystem';
</script>
```

#### エクスポート

- `AppLayout`: 固定ヘッダーと固定フッターを含むレイアウトコンポーネント
- `SiteHeader`: 固定ヘッダーコンポーネント
- `SiteFooter`: 固定フッターコンポーネント

### VBButton

Figma仕様に基づいたカスタムボタンコンポーネントです。Vuetifyのボタンコンポーネントをベースに、デザイントークンを使用してスタイリングされています。

#### 使用方法

```vue
<template>
  <VBButton size="button2" color="primary">プライマリ</VBButton>
  <VBButton size="button1" color="sell">売却</VBButton>
  <VBButton size="button3" variant="outlined">アウトライン</VBButton>
</template>

<script setup lang="ts">
import VBButton from '@/components/VBButton.vue';
</script>
```

#### Props

- `size`: `'button1' | 'button2' | 'button3'` - ボタンのサイズ（デフォルト: `'button2'`）
- `color`: `'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'sell' | 'buy' | 'library'` - ボタンの色（デフォルト: `'primary'`）
- `variant`: `'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'` - ボタンのバリアント（デフォルト: `'flat'`）
- `disabled`: `boolean` - 無効化状態（デフォルト: `false`）
- `loading`: `boolean` - ローディング状態（デフォルト: `false`）
- `prependIcon`: `string` - 先頭アイコン
- `appendIcon`: `string` - 末尾アイコン

#### ボタンサイズ

- **Button1**: 16px, フォントウェイト 600, 行間 1.5
- **Button2**: 14px, フォントウェイト 600, 行間 1.5（デフォルト）
- **Button3**: 12px, フォントウェイト 600, 行間 1.4

## デザイントークン

詳細は [デザイントークン構造要約.md](./デザイントークン構造要約.md) を参照してください。

### 使用例

```typescript
import { useDesignTokens } from '@/composables/useDesignTokens';

const { colors, typography } = useDesignTokens();

// カラーにアクセス
const primaryColor = colors.value.primary; // #009098

// タイポグラフィにアクセス
const h1Typography = typography.value.h1;
```

## 次のステップ

- [ ] 他のコンポーネント（カード、入力フィールドなど）の実装
- [ ] ストーリーブックの統合
- [ ] テストの追加

## ライセンス

MIT
