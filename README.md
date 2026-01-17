# RPG（風）

プログラミングの基礎の練習として、RPG風のゲームを目指して作成されたプロジェクトです。
TypeScript と Canvas API を使用して、ブラウザ上で動作します。

## 開発環境

- TypeScript
- Vite

## セットアップ

```bash
npm install
npm run dev
```

## 遊び方

矢印キー（↑↓←→）でキャラクターを操作

## プロジェクト構成

```
├── index.html
├── src/
│   ├── main.ts           # エントリーポイント、ゲームループ
│   ├── renderer.ts       # 描画処理
│   ├── camera.ts         # カメラ制御
│   ├── input.ts          # キー入力処理
│   ├── jiki.ts           # 自機クラス
│   ├── mob.ts            # NPCクラス（ランダム移動）
│   ├── collisionService.ts # 当たり判定
│   ├── types.ts          # 型定義、Characterベースクラス
│   ├── data.ts           # スプライト・マップデータ読み込み
│   ├── assets/           # 画像素材
│   │   ├── LF-Chara-Sogen01.png  # キャラクタースプライト
│   │   ├── aooni.png             # 敵キャラクタースプライト
│   │   ├── TownForestBg.png      # 背景タイル
│   │   └── townForestAcce.png    # アクセサリータイル
│   └── data/             # データファイル
│       ├── maps.json     # マップデータ
│       └── sprites.json  # スプライト定義
└── tsconfig.json
```
