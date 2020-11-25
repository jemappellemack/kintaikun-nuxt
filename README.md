# 勤怠くん (Nuxt版)

```bash
このリポジトリは下記の理解を深めるために作成しています。

  ・　Nuxt2系
  ・　TypeScript
  ・　Composition Api

```

### 勤怠くんとは？
あなたの日々の勤怠を管理するシンプルなアプリ
<br>
<br>

### デモ画面

https://jemappellemack.github.io/kintaikun-nuxt/

デモ画面で入力した値はブラウザリロードすると初期化されます

<br>

### 機能一覧
チェックのない機能は今後実装予定
- [x] 打刻機能
- [x] 月別勤怠一覧表示機能
- [x] 月別勤怠ダウンロード機能
- [ ] 打刻編集機能
- [ ] 一般ユーザー登録機能
- [ ] 管理ユーザー登録機能
- [ ] 承認申請機能
- [ ] 管理者承認機能

<br>

### 使用ライブラリ
- TypeScript
- @nuxtjs/axios
- @nuxtjs/bulma
- @nuxtjs/composition-api
- date-fns　 日付計算
- xlsx　     Excelファイルの読み書き
- file-saver ファイル保存

<br>

### セットアップ

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
