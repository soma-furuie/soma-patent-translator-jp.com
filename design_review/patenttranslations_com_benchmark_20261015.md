---
name: patenttranslations_com_benchmark_20261015
description: Martin Cross(patenttranslations.com)全ページ精読とSoma自サイトの比較分析。改善提案のみ(無断修正なし)
metadata:
  node_type: memory
  type: reference
  created: 2026-10-15
---

# patenttranslations.com(Martin Cross)ベンチマーク分析

2026-10-15。Somaから「翻訳ブランディングのお手本」として共有されたLinkedIn経由の特許翻訳者サイトを全ページ(index/certified-translations/translation-for-filing/expert-opinion/publications/ai-translation-risks/request-quote)精読し、自サイト(soma-translator-site、全ページ=トップ/about/services/how-i-work/faq/contact)と比較した。**提案のみ。サイトは一切無断修正していない。**

## サイト概要(Martin Cross / Patent Translations Inc.)

- 日本語→英語(EN→JAのSomaとは逆方向)の特許翻訳者。カナダ・バンクーバー拠点、40年のキャリア
- サービスは3つに特化: Certified translations(証拠用訳) / Translations for filing(出願用訳) / Expert opinion and testimony(専門家意見・証言)
- 独自AIツール「PatentCAT」を保有(用語の一貫性チェック・別解釈の洗い出し。オンプレミスLLM選択可)
- デザイン: 白黒写真+グリーンのアクセントカラー、法律事務所的な落ち着いたトーン

## 強み(Somaのサイトに無い・弱い要素)

### 1. 第三者(裁判所)による客観的な実績証明【最重要】
トップページに実際の訴訟記録(Mitsubishi Chemical Corp. v. Barr Laboratories, S.D.N.Y. 2010)を掲載。1つの日本語文に対し4者(FDA・被告側翻訳者・被告側専門家証人・Martin Cross)が翻訳を提出し、原文の日本語・4つの英訳全文・判決の引用(“the Cross translation is the only reliable Yamamoto translation in evidence”)までそのまま載せている。

**なぜ強いか**: Somaのサイトの実績数字(13M+ words, 0 missed deadlines等)はすべて自己申告。Martin Crossのこの事例は「第三者である連邦裁判所が、他の訳と比較した上で選んだ」という、自己申告では絶対に作れない証明力を持つ。

**Somaへの転用案**: 今すぐ同じ形は作れない(裁判記録のような劇的な素材が無い)。今後の資産化ターゲットとして、①クライアントから具体的な一言評価をもらったら許可を得て引用する、②訳語選定で実際に議論になった実例(社名は伏せて)を記録しておく、を今後の案件ジャーナルに組み込む価値がある。

### 2. Publications(出版物)ページによる権威の時系列蓄積
2007年から2026年まで約30本の記事・論文・プレゼン資料を年代順に一覧化。American Translators Associationのハンドブックの該当章を執筆、NYUで教えた、という第三者機関との接点も明記。2026年の最新記事(AI翻訳のリスクを論じたもの)まであり、「今も最前線で発信し続けている」という継続性を見せている。

**Somaへの転用案**: 現状のblogは4記事。将来的に記事数が増えてきたら、「年表形式で実績・発信をまとめるページ」を検討候補に。今すぐ作る必要はなく、記事が10本を超えたあたりで効果が出る施策。

### 3. 独自の翻訳方法論に名前をつけている
"Literal Translation"(直訳/逐語訳)という方法論に明確な名前をつけ、「証拠として使う翻訳は、読みやすさのために言葉を変えてはいけない」という業界の暗黙の前提に逆張りしたポジショニングをしている。この方法論自体をATAハンドブックの1章として執筆し、権威づけている。

**Somaへの転用案**: Somaのサイトは既に"AI-assisted, human-reviewed"という良いポジショニングを持っているが、固有名詞化はされていない。今すぐの必須事項ではないが、将来的に「自分のワークフローに名前をつける」余地がある(例: 現在のhow-i-workページの7ステップ・3層用語ロック等、既に体系化はできている)。

### 4. 超ニッチな高付加価値サービスへの特化(Expert opinion and testimony)
「専門家証言・意見」という、弁護士が高額でも必要とする領域に完全特化したサービスページを持つ。価格競争から完全に抜け出ている。

**Somaへの転用案**: Somaの現状(フリーランス1年未満)でこの段階に進むのは時期尚早。将来、経験とクライアント実績が積み上がった段階での拡張オプションとして記録に留める。

### 5. 問い合わせフォームの実務的な作り込み
公開特許番号を入力するだけで文献を自動取得する機能、NDA締結前提のセキュアアップロードサーバーの案内が用意されている。

**Somaへの転用案**: Somaのcontactページは現状メールアドレス提示+送付物チェックリストのみ。Martin Crossほどのフォーム機能(自動取得等)は規模的にオーバースペックだが、「NDAは自分のものでも相手のものでも対応可」という文言は既にSomaのサイトにも入っている(how-i-work/servicesページ)。この点は既に追いついている。

## Somaのサイトの方が優れている点(失わないよう確認)

- **AI活用の透明性開示が具体的**: AWS Bedrock Tokyo region・no data retention・no training useという技術的な裏付けは、Martin Crossサイトの「オンプレミスLLM選択可」よりも常設の開示として充実している
- **比較表(自分のワークフロー vs 汎用MT vs ChatGPT)**: Martin Crossサイトにはこの形式の可視化が無い。Somaのhow-i-workページの比較表は分かりやすい差別化要素
- **AI翻訳の失敗モードの技術的理解はSomaのサイトにも反映されている**: Martin Crossの最新記事(ai-translation-risks.html)が指摘する「terminology drift」「modifier-scope」「antecedent ambiguity」は、Somaのservicesページの「6 common patent translation failure modes」と内容的に重なっており、既に同水準の技術理解をサイトに反映できている

## まとめ(Somaの判断待ち)

最大の差分は「客観的な第三者証明の有無」。これはサイト構成やコピーの書き方で埋まるものではなく、実績が積み上がって初めて作れる資産。今すぐの改修よりも、**今後の案件で「引用できる具体的な評価・エピソード」を記録していく運用**(案件ジャーナルへの追記項目として)の方が効果が大きいと判断する。サイト構成自体は既にMartin Crossサイトと遜色ない情報設計になっている。

## 2026-10-15追記：Publicationsページ全35本の精読完了

当初の分析(上記本文)はPublicationsページの一覧とai-translation-risks.html 1本のみを読んで作成したものだったが、Somaから「Publicationsも含めて全部精読したのか」と指摘を受け、Publications配下の全35本(PDF10本・HTML記事25本)を追加で精読した。記事ごとの要約・ブログ素材としての使い道は`blog_ideas_notebook.md`の「2026-10-15：patenttranslations.com全ページ精読」セクションに記録済み(本ファイルへの重複転記はしない)。

**本分析への影響**: 上記「強み2(Publicationsページによる権威の時系列蓄積)」の評価は変わらないが、精読の結果、最も重要な追加発見は**PatentCAT 2.0**(2026年公開の最新記事"A new paradigm for artificial intelligence in translation")。Martin Cross氏自身が開発した第二世代CATツールで、「AIに翻訳させる」のでなく「既存の翻訳の誤りをAIに炙り出させ、人間が判断する」という逆方向の設計思想を取っている。これはSomaの自作システム(AI下訳＋人間レビュー＋翻訳メモリ)と設計思想が極めて近く、「強み3(独自方法論に名前をつけている)」の評価に直結する新情報。業界の権威(ATA Handbook共著者・Cross氏)が同じ結論に達しているという事実は、Somaの技術的な選択を補強する一次情報として使える。

## 2026-10-16追記：サイト改善プラン候補「分野の打ち出しを誤解のない形にする」(実害事例つき)

**きっかけ(実害)**: 2026-10-16、北京の医薬翻訳会社Willingjetから、バイオ・臨床系特許(Harbour BioMed・総6万語/重み付け3万語・Trados必須)の見積依頼が、Somaのサイトの問い合わせフォーム経由で届いた。Somaの専門は機械・電気とメディカルデバイスで、バイオ・臨床は専門外。Trados非保有もあり辞退を決定。単価(0.11〜0.13ドル/語)は悪くなかったが、分野ミスマッチで受けられなかった。

**示唆**: 「Medical」という語だけが先に目に入り、「バイオ・臨床も可」と読まれている可能性がある。誤解による打診は、相手とSomaの双方にとって無駄な往復になる。

**改善案(Soma承認待ち・未着手)**:
1. サイト・LinkedIn・ProZのプロフィールで「Medical **devices**(機械・電気を中核とする)」を前面に出す。
2. 「対象外: biomedical / clinical / pharmaceutical / biotech 系の特許」を明記する(境界の明示。専門外お断りは誠実さの証、という既存方針とも整合)。
3. 納品形式・ツールの前提(例: 使用CATツール)を、必要なら問い合わせ前に分かる位置に書く。Trados必須案件の打診を減らせる。

**注意(限界・誤発火)**: 除外を明記すると、境界案件(例: 医療機器の特許にバイオ寄りの記述が一部含まれるもの)の打診まで減る可能性がある。「対象外」は主題がバイオ・臨床のものに限定する書き方にする。

**本ファイルとの関係**: 上記「強み5(問い合わせフォームの実務的な作り込み)」と同じ系統の改善。ベンチマーク由来の改善案と一緒に、サイト改修時にまとめて検討する。
