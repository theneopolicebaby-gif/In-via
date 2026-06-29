# Invia E-Sports Site

Invia E-Sportsの公開準備用サイトです。日本人向けの公式サイトとして、チーム情報、スポンサー、サポート、制作者クレジット、公式X導線を入れています。

## ファイル

- `index.html` - ページ本文、SEOタグ、SNSリンク、構造化データ
- `styles.css` - スマホ対応レイアウトとデザイン
- `script.js` - スマホメニュー、ヘッダー挙動、スクロール演出、メールコピー
- `assets/` - 仮SVG素材と公式画像の差し替え枠
- `robots.txt` / `sitemap.xml` - 検索エンジン公開用ファイル

## 更新運用

- 競技部門メンバーは `index.html` の `members-section` に掲載しています。現在はyuzurio、すうぃっきー、junjun、Kahcy、riaを掲載。
- 全メンバーを並べる運用ではなく、サイト上で見せたい選手だけを掲載する想定です。
- 加入希望は常時募集ではありません。募集やトライアウトがある場合のみ公式Xで告知します。
- 日々のお知らせは公式Xへ集約し、サイトでは公式Xへの導線と注目ポストを掲載しています。
- Xのプロフィールタイムライン埋め込みは環境によって空表示になりやすいため、現在は使っていません。注目ポストの埋め込みと公式Xリンクで運用します。
- Media枠には `https://x.com/Invia_FN/status/1947129412656504926?s=20` のポストを埋め込み済みです。
- X埋め込みは閲覧者のブラウザ設定、広告ブロック、X側の仕様変更で表示されない場合があります。その場合でもXで開くリンクは残ります。
- トップ直下の注目情報には、DOMINATORS CHAPTER 3の開催実績とInvia E-Sports 6周年を固定掲載しています。
- DOMINATORS CHAPTER 3は2026年6月20日22:00に開催済みです。
- スポンサー相談、企画相談、その他お問い合わせは `inviaesports67@gmail.com` を表示しています。

## 公式画像の差し替え

今はSVG仮素材で表示できます。公式画像ファイルを使う場合は、以下の名前で `assets` フォルダに入れると自動で差し替わります。

- `assets/invia-icon.jpg`
- `assets/invia-header.jpg`
- `assets/creator-neo.jpg`

## 公開チェックリスト

1. GitHub Pagesで `https://theneopolicebaby-gif.github.io/In-via/` に公開する。
2. Google Search Consoleにサイトを登録する。
3. トップページのインデックス登録をリクエストする。
