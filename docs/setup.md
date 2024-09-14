# セットアップ

## 要求環境

- bun ^1
- Docker (Docker Desktop or OrbStack)

## セットアップ

1. 共有された `.env.keys` をプロジェクトのルートに設置  
   (Git の diff でファイルが含まれていないか確認！！！)
1. その後, 次のコマンドを順番に実行:

   ```sh
   bun i

   # Supabase のローカル環境の整備やデータベースのプルなど • プロジェクト初回のみ
   bun setup-init
   # データベースの初期化など (このコマンドでローカル DB で既に追加したものなど消えちゃいます)
   bun setup

   bun dev
   ```

## 環境変数の追加

Vite 側で使う環境変数 `VITE_SAMPLE_KEY` を追加するときの手順:

- key: `VITE_SAMPLE_KEY`  
  クライアントサイドで使うので `VITE_` Prefix を付ける必要アリ ([環境変数とモード - Vite ↗︎](https://ja.vitejs.dev/guide/env-and-mode))
- value: `secret value`

1. dotenvx 経由で環境変数を追加

   ```bash
   # 環境変数の追加
   bun dotenvx set VITE_SAMPLE_KEY "secret value"
   # セットされた値の確認 (復号済み)
   bun dotenvx get --pretty-print
   ```

1. envsafe で環境変数を登録
   `src/lib/services/env.ts` にデータ型とともに追記:

   ```diff
   import { str, envsafe, url } from "envsafe";

   export const ENV = envsafe(
     {
       VITE_SUPABASE_URL: url(),
       VITE_SUPABASE_API_KEY: str(),
   +   VITE_SAMPLE_KEY: str(),
     },
     {
       env: import.meta.env,
     },
   );
   ```

これで, `ENV.VITE_SAMPLE_KEY` で型安全に環境変数を取得できます.  
キーに対して指定できるプロパティーは, <https://github.com/KATT/envsafe> を参照してください.

キーの編集は同じキーで `set` しちゃえば上書きされます.  
また, まとめての復号に使える `decrypt` コマンドがあります.  
その他の操作が必要であれば, <https://dotenvx.com/docs/advanced> に記載されているコマンドを使うか私に聞いてください.
