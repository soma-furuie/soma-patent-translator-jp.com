#!/usr/bin/env node
// Google Search Console(GSC) API から検索クエリ別の順位・impressions・clicksを取得するツール。
// 元ネタ: X投稿(ちぇん|LangCore代表氏、SEO Rank Watchスキル、
//   https://x.com/yuno_miyako2/status/2097640192916263311)のfetch_gsc_ranks.mjsをこのサイト向けに実装したもの。
//
// 使い方:
//   node scripts/fetch_gsc_ranks.mjs                 # 直近28日分をコンソールに表示(保存しない)
//   node scripts/fetch_gsc_ranks.mjs --days 7 --append   # 直近7日分を取得しdata/seo/rank-history.jsonに追記
//   node scripts/fetch_gsc_ranks.mjs --days 7 --json     # 追記せず、生データをJSONで出力するだけ
//
// 事前準備(初回のみ・Soma側の作業):
//   1. Google Cloud ConsoleでSearch Console APIを有効化したプロジェクトを作成
//   2. サービスアカウントを作成しJSON鍵をダウンロード
//   3. Google Search Console側で、そのサービスアカウントのメールアドレスを
//      対象プロパティのユーザーとして追加(閲覧権限で可)
//   4. ダウンロードしたJSON鍵ファイルを .secrets/gsc-service-account.json として保存
//      (このフォルダは.gitignore対象。絶対にコミットしないこと)
// 詳細手順は blog_quality/gsc_api_setup.md 参照。

import { google } from 'googleapis';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

const DEFAULT_KEY_FILE = path.join(REPO_ROOT, '.secrets', 'gsc-service-account.json');
const DEFAULT_SITE_URL = 'sc-domain:soma-patent-translator-jp.com'; // GSCのDomain property形式
const RANK_HISTORY_PATH = path.join(REPO_ROOT, 'data', 'seo', 'rank-history.json');

function parseArgs(argv) {
  const args = { days: 28, append: false, json: false, repo: REPO_ROOT, site: DEFAULT_SITE_URL, keyFile: DEFAULT_KEY_FILE };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--days') args.days = Number(argv[++i]);
    else if (a === '--append') args.append = true;
    else if (a === '--json') args.json = true;
    else if (a === '--repo') args.repo = argv[++i];
    else if (a === '--site') args.site = argv[++i];
    else if (a === '--key-file') args.keyFile = argv[++i];
  }
  return args;
}

function isoDateDaysAgo(days) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

async function loadJsonArray(filePath) {
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  let keyFileStat;
  try {
    keyFileStat = await fs.stat(args.keyFile);
  } catch {
    console.error(`[fetch_gsc_ranks] サービスアカウント鍵が見つかりません: ${args.keyFile}`);
    console.error('先に blog_quality/gsc_api_setup.md の手順でGSC APIの認証設定を済ませてください。');
    process.exit(1);
  }
  if (!keyFileStat.isFile()) {
    console.error(`[fetch_gsc_ranks] ${args.keyFile} はファイルではありません。`);
    process.exit(1);
  }

  // GSCデータは反映まで2-3日のラグがあるため、直近2日は除外してendDateを決める
  const endDate = isoDateDaysAgo(2);
  const startDate = isoDateDaysAgo(2 + args.days);

  const auth = new google.auth.GoogleAuth({
    keyFile: args.keyFile,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  console.error(`[fetch_gsc_ranks] site=${args.site} range=${startDate}〜${endDate} (${args.days}日間)`);

  const res = await searchconsole.searchanalytics.query({
    siteUrl: args.site,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query', 'page'],
      rowLimit: 5000,
    },
  });

  const rows = res.data.rows ?? [];
  const fetchedAt = new Date().toISOString();

  const entries = rows.map((row) => ({
    fetchedAt,
    rangeStart: startDate,
    rangeEnd: endDate,
    rangeDays: args.days,
    query: row.keys[0],
    page: row.keys[1],
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: row.ctr,
    position: row.position,
  }));

  // impressions降順で並べ、母数の大きいクエリを見やすくする
  entries.sort((a, b) => b.impressions - a.impressions);

  if (args.json || !args.append) {
    console.log(JSON.stringify(entries, null, 2));
  }

  if (args.append) {
    const history = await loadJsonArray(RANK_HISTORY_PATH);
    history.push(...entries);
    await fs.mkdir(path.dirname(RANK_HISTORY_PATH), { recursive: true });
    await fs.writeFile(RANK_HISTORY_PATH, JSON.stringify(history, null, 2) + '\n', 'utf-8');
    console.error(`[fetch_gsc_ranks] ${entries.length}件を ${RANK_HISTORY_PATH} に追記しました(合計${history.length}件)`);
  }

  if (entries.length === 0) {
    console.error('[fetch_gsc_ranks] 該当データが0件でした。サイトの掲載期間・権限設定を確認してください。');
  }
}

main().catch((err) => {
  console.error('[fetch_gsc_ranks] エラー:', err.message ?? err);
  if (err.response?.data) {
    console.error(JSON.stringify(err.response.data, null, 2));
  }
  process.exit(1);
});
