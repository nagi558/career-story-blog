# nagi's blog

28歳未経験から地方在住・リモートでエンジニア転職した経験を書いていく個人の雑記ブログ(MVP)。

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS
- 記事は Markdown で管理(`gray-matter` + `markdown-it`)

## ディレクトリ構成

```
src/
  app/
    page.tsx              トップページ
    articles/page.tsx     記事一覧ページ
    articles/[slug]/page.tsx  記事詳細ページ
  content/articles/*.md   Markdown記事(frontmatter: title, description, date)
  lib/articles.ts         記事の読み込み・パース
  lib/site.ts             サイト共通情報(タイトル・説明文)
  types/index.ts          型定義
```

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できる。

## ビルド確認

```bash
npm run build
```

## 記事の追加方法

`src/content/articles/` に Markdown ファイルを追加する。frontmatter は以下の形式。

```md
---
title: "記事タイトル"
description: "一覧・meta descriptionに使う概要文"
date: "2026-09-22"
---

本文をここに書く。
```

## 現在のサンプル記事について

`hajimemashite.md` / `tenshoku-taiken-gaiyou.md` は、実際の転職体験談を書く前の**仮のプレースホルダー**。内容は捏造せず「これから書いていく」という趣旨に留めている。本人が実体験に基づいて書き換える想定。

## スコープ外(今回のMVPでは未実装)

- アフィリエイト・広告
- 独自ドメイン設定(Vercelサブドメイン前提)
- コメント機能・SNS連携
- 実際のデプロイ作業
