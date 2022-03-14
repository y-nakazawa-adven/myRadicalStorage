## myRadicalStorage フロントエンド

FE、BE ごとに書くことがあれば、README に書いていく方針で

### suggest について

現状、algolia を使用（ちゃんとプロダクト化するなら、elasticsearch の方が良いかと）

検索周りでも一部 algolia を使っているものの、原則直接 algolia を叩くのはサジェストのみで

### テスト方針

よくある形で書いていく方針

- ロジック -> jest
- コンポーネントごとの UI テスト -> React Testing Library
- (余力があれば)ビジュアルリグレッションテスト -> reg suit & storybook
