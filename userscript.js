// ==UserScript==
// @name         Github Japanese
// @namespace    com.github.TeamKun
// @version      0.1
// @description  Githubを日本語化する
// @author       Peyang
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

var json = [
    {
        "name": "Notification",
        "path": "^\/.*",
        "selector": "div.flash.flash-notice div",
        "rules": [
            {
                "properties": [],
                "replace": "Workflow enabled successfully.",
                "translate": "ワークフローは正常に有効化されました。"
            },
            {
                "properties": [],
                "replace": "Workflow disabled successfully.",
                "translate": "ワークフローは正常に無効化されました。"
            },
            {
                "properties": [],
                "replace": "Workflow run deleted successfully",
                "translate": "ワークフロー実行を正常に削除しました。"
            },
        ]
    },
    {
        "name": "Label",
        "path": "^\/.*",
        "selector": "span.Label",
        "rules": [
            {
                "selectors": [
                    "a.State"
                ],
                "properties": [],
                "replace": "Open",
                "translate": "オープン"
            },
            {
                "properties": [],
                "replace": "Close",
                "translate": "クローズ"
            },
            {
                "properties": [],
                "replace": "Closed",
                "translate": "クローズド"
            },
            {
                "properties": [],
                "replace": "default",
                "translate": "デフォルト"
            },
            {
                "properties": [],
                "replace": "Private",
                "translate": "プライベート"
            },
            {
                "properties": [],
                "replace": "Latest",
                "translate": "最新"
            },
            {
                "properties": [],
                "replace": "Suggested",
                "translate": "おすすめ"
            },
            {
                "properties": [],
                "replace": "",
                "translate": ""
            },
        ]
    },
	{
        "name": "Global",
		"path": "^\/.*",
		"rules": [
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus",
                    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus.js-site-search-field.is-clearable"
				],
				"properties": [
					"placeholder",
					"value-placeholder",
					"data-unscoped-placeholder",
					"placeholder"
				],
				"translate": "検索またはジャンプ..."
			},
			{
				"selectors": [
					"span[aria-label=\"in all of GitHub\"]"
				],
				"properties": [],
				"translate": "すべてのGitHubから検索"
			},
            {
				"selectors": [
					"span[aria-label=\"in this user\"]"
				],
				"properties": [],
				"translate": "このユーザから検索"
			},
            {
				"selectors": [
					"span[aria-label=\"in this repository\"]"
				],
				"properties": [],
				"translate": "このリポジトリから検索"
			},
            {
				"selectors": [
					"span[aria-label=\"in this organization\"]"
				],
				"properties": [],
				"translate": "この組織から検索"
			},
			{
				"selectors": [
					"div.js-jump-to-badge-jump"
				],
				"properties": [],
				"replace": "Jump to",
				"translate": "ジャンプする"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > a:nth-child(2)",
				    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > a"
                ],
				"properties": [],
                "replace": "Pull",
				"translate": "プル"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > a > span",
				    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > a > span"
                ],
				"properties": [],
                "replace": " request",
				"translate": "リクエスト"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > a:nth-child(2)",
				    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > a"
                ],
				"properties": [],
                "contains": [
                    "リクエスト"
                ],
                "replace": "s",
				"translate": ""
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > a:nth-child(3)",
                    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > a"
                ],
				"properties": [],
                "replace": "Issues",
				"translate": "イシュー"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > div > a",
                    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > div > a"
				],
				"properties": [],
				"translate": "マーケットプレイス"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > div > a",
                    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > div > a"
				],
				"properties": [],
                "replace": "Trending",
				"translate": "トレンド"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mr-md-3.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex > nav > a:nth-child(5)",
                    "body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full > nav > a"
				],
				"properties": [],
                "replace": "Explore",
				"translate": "探検する"
			},
			{
				"selectors": [
                    "body > div.position-relative.js-header-wrapper > header > div > details > details-menu > a:nth-child(1)"
				],
				"properties": [],
                "replace": "New repository",
				"translate": "リポジトリを作成"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div > details > details-menu > a:nth-child(2)"
				],
				"properties": [],
                "replace": "Import repository",
				"translate": "インポートレポジトリ"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div > details > details-menu > a"
				],
				"properties": [],
                "replace": "New gist",
				"translate": "新しいGist"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div > details > details-menu > a"
				],
				"properties": [],
                "replace": "New organization",
				"translate": "新しい組織"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div > details > details-menu > a"
				],
				"properties": [],
                "replace": "New project",
				"translate": "新しいプロジェクト"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div > details > details-menu > a"
				],
				"properties": [],
                "replace": "New project",
				"translate": "新しいプロジェクト"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > div.header-nav-current-user.css-truncate > a"
				],
				"properties": [],
                "contains": [
                    "Signed in as"
                ],
                "replace": "Signed in as",
                "translate": "",
                "append": "としてログイン中"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(5)"
				],
				"properties": [],
				"translate": "あなたのプロフィール"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(6)"
				],
				"properties": [],
				"translate": "あなたのリポジトリ"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(7)"
				],
				"properties": [],
				"translate": "あなたの組織"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(8)"
				],
				"properties": [],
				"translate": "あなたのプロフィール"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(9)"
				],
				"properties": [],
				"translate": "あなたのスター"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(10)"
				],
				"properties": [],
				"translate": "あなたのGist"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(12)"
				],
				"properties": [],
				"translate": "アップグレード"
			},
			{
				"selectors": [
					"#feature-enrollment-toggle > button"
				],
				"properties": [],
				"translate": "機能プレビュー"
			},
			{
				"selectors": [
					"#feature-enrollment-toggle > button"
				],
				"properties": [],
				"translate": "機能プレビュー"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(14)"
				],
				"properties": [],
				"translate": "ヘルプ"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(15)"
				],
				"properties": [],
				"translate": "設定"
			},
			{
				"selectors": [
					"body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > form > button"
				],
				"properties": [],
				"translate": "ログアウト"
			},
			{
				"selectors": [
					"body > details > details-dialog > div > div.Box-header.bg-white > h3"
				],
				"properties": [],
				"translate": "機能のプレビュー"
			},
			{
				"selectors": [
					"body > details > details-dialog > div > div.d-flex.flex-column > div > div.col-8.p-3.height-fit.overflow-auto > div > div.d-flex.mb-3 > div > form > button"
				],
				"properties": [],
				"replace": "Disable",
				"translate": "無効化"
			},
			{
				"selectors": [
					"body > details > details-dialog > div > div.d-flex.flex-column > div > div.col-8.p-3.height-fit.overflow-auto > div > div.d-flex.mb-3 > div > form > button"
				],
				"properties": [],
				"replace": "Enable",
				"translate": "有効化"
			},
			{
				"selectors": [
					"body > details > details-dialog > div > div.d-flex.flex-column > div > div.col-8.p-3.height-fit.overflow-auto > div > div.mt-3.mb-3.flash.flash-warn"
				],
				"properties": [],
				"replace": "body > details > details-dialog > div > div.d-flex.flex-column > div > div.col-8.p-3.height-fit.overflow-auto > div > div.mt-3.mb-3.flash.flash-warn > a",
				"format": "<strong>機能を無効化しました。</strong>改善できるよう、{0}をお寄せください。"
			},
			{
				"selectors": [
					"body > details > details-dialog > div > div.d-flex.flex-column > div > div.col-8.p-3.height-fit.overflow-auto > div > div.mt-3.mb-3.flash.flash-warn > a"
				],
				"properties": [],
				"translate": "フィードバック"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "years ago",
				"translate": "年前"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "last year",
				"translate": "去年"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "months ago",
				"translate": "ヶ月前"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "last month",
				"translate": "先月"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "days ago",
				"translate": "日前"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "yesterday",
				"translate": "昨日"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "hours ago",
				"translate": "時間前"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "hour ago",
				"translate": "時間前"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "minutes ago",
				"translate": "分前"
			},
			{
				"selectors": [
					"relative-time",
                    "time-ago"
				],
				"properties": [],
				"replace": "seconds ago",
				"translate": "秒前"
			},
            {
                "selectors": [
                    ".gh-ja-time"
                ],
                "properties": [],
                "replace": "m",
                "translate": "分"
            },

            {
                "selectors": [
                    ".gh-ja-time"
                ],
                "properties": [],
                "replace": "s",
                "translate": "秒"
            },
            {
                "selectors": [
                    ".gh-ja-time"
                ],
                "properties": [],
                "replace": "h",
                "translate": "時間"
            },
            {
                "selectors": [
                    ".gh-ja-time"
                ],
                "properties": [],
                "replace": "d",
                "translate": "日"
            },
            {
                "selectors": [
                    ".gh-ja-time"
                ],
                "properties": [],
                "replace": "年",
                "translate": "y"
            },
		]
	},
    {
        "name": "Foooter",
        "path": "^(/)?.*",
        "rules": [
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Blog",
                "translate": "ブログ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "About",
                "translate": "概要"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Shop",
                "translate": "ショップ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Contact GitHub",
                "translate": "GitHubに連絡"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Pricing",
                "translate": "価格"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Training",
                "translate": "トレーニング"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Status",
                "translate": "稼働状態"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Security",
                "translate": "セキュリティ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Terms",
                "translate": "利用規約"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Privacy",
                "translate": "プライバシーポリシー"
            },
            {
                "selectors": [
                    "body > div.application-main > div > div > div > div > div.d-flex.flex-justify-start.flex-row.flex-auto > ul > li > a",
                    "body > div.footer.container-xl.width-full.p-responsive > div.position-relative.d-flex.flex-row-reverse.flex-lg-row.flex-wrap.flex-lg-nowrap.flex-justify-center.flex-lg-justify-between.pt-6.pb-2.mt-6.f6.text-gray.border-top.border-gray-light > ul > li > a"
                ],
                "properties": [],
                "replace": "Docs",
                "translate": "ドキュメント"
            },
        ]
    },
	{
        "name": "Top page",
		"path": "^/$",
		"rules": [
			{
				"selectors": [
					"div div details details-menu .SelectMenu-modal header.SelectMenu-header > .SelectMenu-title"
				],
				"properties": [],
				"translate": "表示する内容を変更"
			},
			{
				"selectors": [
					"div div details .SelectMenu-item[data-ga-click=\"Dashboard, click, Manage orgs link in context switcher - context:user\"]"
				],
				"properties": [],
				"replace": "Manage organizations",
				"translate": "組織を管理"
			},
			{
				"selectors": [
					"div div details .SelectMenu-item[data-ga-click=\"Dashboard, click, Create org link in context switcher - context:user\"]"
				],
				"properties": [],
				"replace": "Create organization",
				"translate": "組織を作成"
			},
			{
				"selectors": [
					"#repos-container > h2"
				],
				"properties": [],
				"replace": "Repositories",
				"translate": "リポジトリ"
			},
			{
				"selectors": [
					"#repos-container > h2 > a"
				],
				"properties": [],
				"replace": "New",
				"translate": "新しいリポジトリを作成"
			},
			{
				"selectors": [
					"#dashboard-repos-filter-left"
				],
				"properties": [
					"placeholder",
					"aria-label"
				],
				"translate": "リポジトリを検索..."
			},
			{
				"selectors": [
					"#repos-container > form > button"
				],
				"properties": [],
				"replace": "Show more",
				"translate": "さらに表示"
			},
			{
				"selectors": [
					"#repos-container > form > button"
				],
				"properties": [],
				"replace": "Loading more…",
				"translate": "リポジトリを読込中..."
			},
			{
				"selectors": [
					"#dashboard-user-teams > div > h2"
				],
				"properties": [],
				"translate": "あなたのチーム"
			},
			{
				"selectors": [
					"#your-teams-filter-left"
				],
				"properties": [
					"placeholder",
					"aria-label"
				],
				"translate": "チームを検索..."
			},
			{
				"selectors": [
					"#dashboard > div > h2.f4.mt-md-3.mt-0.text-normal"
				],
				"properties": [],
				"translate": "最近のアクティビティ"
			},
			{
				"selectors": [
					"#dashboard > div > div.mt-2.mb-4.js-recent-activity-container.Details.js-details-container > div > ul > li > div > div.break-word.lh-condensed.text-gray.f6.mt-1 > span.d-inline-block.f6.text-gray"
				],
				"properties": [],
				"replace": "commented",
				"translate": "がコメントしました。"
			},
			{
				"selectors": [
					"#dashboard > div > div.mt-2.mb-4.js-recent-activity-container.Details.js-details-container > div > ul > li > div > div.break-word.lh-condensed.text-gray.f6.mt-1 > span.d-inline-block.f6.text-gray"
				],
				"properties": [],
				"replace": "opened this issue",
				"translate": "がオープンしました。"
			},
			{
				"selectors": [
					"#dashboard > div > div.mt-2.mb-4.js-recent-activity-container.Details.js-details-container > div > ul > li > div > div.break-word.lh-condensed.text-gray.f6.mt-1 > span.d-inline-block.f6.text-gray"
				],
				"properties": [],
				"replace": "You",
				"translate": "あなた"
			},
			{
				"selectors": [
					"#dashboard > div > div.mt-2.mb-4.js-recent-activity-container.Details.js-details-container > div > ul > li > div > div.break-word.lh-condensed.text-gray.f6.mt-1 > span.d-inline-block.f6.text-gray"
				],
				"properties": [],
				"replace": "were assigned",
				"translate": "が割り当てられました。"
			},
			{
				"selectors": [
					"#dashboard > div > h2.f4.text-normal.js-all-activity-header"
				],
				"properties": [],
				"translate": "全体のアクティビティ"
			},
			{
				"selectors": [
					"#dashboard > div > div.js-dashboard-deferred > div > div.loading-message > p"
				],
				"properties": [],
				"translate": "アクティビティを読込中..."
			},
			{
				"selectors": [
					"body > div.application-main > div > aside.team-left-column.col-12.col-md-3.col-lg-3.pr-3.pr-md-4.pr-lg-5.mt-5.hide-lg.hide-md.hide-sm.border-bottom > h2"
				],
				"properties": [],
				"translate": "リポジトリを探検"
			}
		]
	},
	{
        "name": "Global repository top page",
		"path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}((/.*)*)",
		"rules": [
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > summary > span"
                ],
                "properties": [],
                "replace": "Watch",
                "translate": "Watch"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > summary > span"
                ],
                "properties": [],
                "replace": "Unwatch",
                "translate": "Watch中"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > header > h3",
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > header > h3"
                ],
                "properties": [],
                "replace": "Notifications",
                "translate": "通知"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(3) > div > div.f5.text-bold"
                ],
                "properties": [],
                "translate": "関係しているものと@メンション"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(3) > div > div.text-small.text-gray.text-normal.pb-1"
                ],
                "properties": [],
                "translate": "自分に関係していたり、@メンションを受け取った場合のみ通知します。"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(4) > div > div.f5.text-bold"
                ],
                "properties": [],
                "translate": "すべてのアクティビティ"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(4) > div > div.text-small.text-gray.text-normal.pb-1"
                ],
                "properties": [],
                "translate": "すべてのこのリポジトリの通知を受け取ります。"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(5) > div > div.f5.text-bold"
                ],
                "properties": [],
                "translate": "無視"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(5) > div > div.text-small.text-gray.text-normal.pb-1"
                ],
                "properties": [],
                "translate": "通知を受け取ることはありません。"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > button > div > div.d-flex.flex-items-start.flex-justify-between > div.f5.text-bold",
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > header.d-none.d-sm-flex.flex-items-start.pt-1 > h1"
                ],
                "properties": [],
                "translate": "カスタム"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > button > div > div.text-small.text-gray.text-normal.pb-1",
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > legend > div"
                ],
                "properties": [],
                "translate": "関係する通知と@メンションに加えて、受け取りたい通知を選びます。"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(2) > div > form.unstarred.js-social-form > button > span"
                ],
                "properties": [],
                "translate": "スター"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(2) > div > form.starred.js-social-form > button > span"
                ],
                "properties": [],
                "translate": "スターを外す"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(3) > div > details > summary"
                ],
                "properties": [],
                "replace": "Fork",
                "translate": "フォーク"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > div:nth-child(4) > label"
                ],
                "properties": [],
                "replace": "Releases",
                "translate": "リリース"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > div > button:nth-child(2)"
                ],
                "properties": [],
                "translate": "キャンセル"
            },
            {
                "selectors": [
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > div > button.btn.btn-sm.btn-primary.ml-2"
                ],
                "properties": [],
                "translate": "適用"
            },
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Code\"]"
				],
				"properties": [],
                "replace": "Code",
				"translate": "コード"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Issues\"]",
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > div:nth-child(2) > label"
				],
				"properties": [],
                "replace": "Issues",
				"translate": "イシュー"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Pull requests\"]",
                    "div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > div:nth-child(3) > label"
				],
				"properties": [],
                "replace": "Pull requests",
				"translate": "プルリクエスト"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Discussions\"]"
				],
				"properties": [],
				"replace": "Discussions",
				"translate": "会話"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Actions\"]"
				],
				"properties": [],
				"replace": "Actions",
				"translate": "アクション"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Projects\"]"
                ],
				"properties": [],
				"replace": "Projects",
				"translate": "プロジェクト"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Wiki\"]"
				],
				"properties": [],
				"replace": "Wiki",
				"translate": "ウィキ"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Security\"]"
				],
				"properties": [],
				"replace": "Security",
				"translate": "セキュリティ"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Insights\"]"
				],
				"properties": [],
				"replace": "Insights",
				"translate": "統計"
			},
			{
				"selectors": [
					"nav[data-pjax=\"#js-repo-pjax-container\"] span[data-content=\"Settings\"]"
				],
				"properties": [],
				"replace": "Settings",
				"translate": "設定"
			}
		]
	},
    {
        "name": "Repository code page",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}(\/)?$",
        "rules": [
            {
                "selectors": [
                    "#branch-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "translate": "ブランチ/タグを変更"
            },
            {
                "selectors": [
                    "filter-input[aria-owns=\"ref-list-branches\"] > #context-commitish-filter-field"
                ],
                "properties": [
                    "aria-label",
                    "placeholder"
                ],
                "translate": "ブランチ/タグをフィルタ"
            },
            {
                "selectors": [
                    "#branch-select-menu > details-menu > div > tab-container > div.SelectMenu-tabs > button:nth-child(1)"
                ],
                "properties": [],
                "translate": "ブランチ"
            },
            {
                "selectors": [
                    "#branch-select-menu > details-menu > div > tab-container > div.SelectMenu-tabs > button:nth-child(2)"
                ],
                "properties": [],
                "translate": "タグ"
            },
            {
                "selectors": [
                    "#ref-list-branches > footer > a"
                ],
                "properties": [],
                "translate": "すべてのブランチを見る"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-self-center.ml-3.flex-self-stretch.d-none.d-lg-flex.flex-items-center.lh-condensed-ultra > a:nth-child(1) > span"
                ],
                "properties": [],
                "translate": "ブランチ"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-self-center.ml-3.flex-self-stretch.d-none.d-lg-flex.flex-items-center.lh-condensed-ultra > a.ml-3.link-gray-dark.no-underline > span"
                ],
                "properties": [],
                "translate": "タグ"
            },
            {
                "selectors": [
                    "#branch-select-menu > details-menu > div > tab-container > div.SelectMenu-filter > remote-input > input"
                ],
                "properties": [
                    "aria-label",
                    "placeholder"
                ],
                "replace": "Find a tag",
                "translate": "タグを探す"
            },
            {
                "selectors": [
                    "#tags-menu > div > div"
                ],
                "properties": [],
                "replace": "Search for a tag",
                "translate": "タグを取得中"
            },
            {
                "selectors": [
                    "#tags-menu > div > div"
                ],
                "properties": [],
                "replace": "Nothing to show",
                "translate": "表示するものはありません"
            },
            {
                "selectors": [
                    "#tags-menu > footer > a"
                ],
                "properties": [],
                "translate": "すべてのタグを見る"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > a"
                ],
                "properties": [],
                "translate": "ファイルを開く"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > details > summary > span.d-none.d-md-flex.flex-items-center"
                ],
                "properties": [],
                "replace": "Add file",
                "translate": "ファイルを追加"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > details > div > ul > li:nth-child(3) > form > button"
                ],
                "properties": [],
                "translate": "新しくファイルを作成"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > details > div > ul > li:nth-child(4) > a"
                ],
                "properties": [],
                "translate": "既存のファイルをアップロード"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > summary"
                ],
                "properties": [],
                "replace": "Code",
                "translate": "コード"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > div"
                ],
                "properties": [],
                "replace": "Clone",
                "translate": "クローン"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > a"
                ],
                "properties": [
                    "aria-label"
                ],
                "translate": "どのリモートURLを使用すればいいですか？"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(2) > p"
                ],
                "properties": [],
                "translate": ""
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(2) > p"
                ],
                "properties": [],
                "translate": "Gitを使用するか、URLを用いてSYNでチェックアウトできます。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(3) > p"
                ],
                "properties": [],
                "translate": "パスワードで保護されたSSH鍵を使用します。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(4) > p"
                ],
                "properties": [],
                "replace": "Work fast with our official CLI.",
                "translate": "GitHub公式のCLIを使用して素早く作業します。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(4) > p > a"
                ],
                "properties": [],
                "translate": "詳細"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > ul > li.Box-row.Box-row--hover-gray.p-0.rounded-0.mt-0.js-remove-unless-platform > a"
                ],
                "properties": [],
                "replace":  "Open with GitHub Desktop",
                "translate": "GitHub Desktopで開く"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > ul > li > a"
                ],
                "properties": [],
                "replace": "Open with Visual Studio",
                "translate": "Visual Studioで開く"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > ul > li > a"
                ],
                "properties": [],
                "replace": "Download ZIP",
                "translate": "ZIPアーカイブでダウンロード"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > include-fragment > div.text-gray.no-wrap"
                ],
                "properties": [],
                "translate": "チェックの状態を読み込んでいます..."
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > h3"
                ],
                "properties": [],
                "replace": "Some checks were not successful",
                "translate": "一部のチェックに失敗しました。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > h3"
                ],
                "properties": [],
                "replace": "All checks have passed",
                "translate": "すべてのチェックに合格しました。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " successful checks",
                "translate": "つのチェックに成功"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " successful check",
                "translate": "つのチェックに成功"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " successful checks",
                "translate": "つのアクションが必要なチェック"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " action required check",
                "translate": "つのアクションが必要なチェック"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.flash.mb-4"
                ],
                "properties": [],
                "replace": "Help people interested in this repository understand your project by adding a README.",
                "translate": "READMEを追加して、このリポジトリに関心のある人がこのプロジェクトを理解できるようにしましょう。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.flash.mb-4"
                ],
                "properties": [],
                "replace": "Add a README",
                "translate": "READMEを作成する"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div.merge-status-list > div > div.d-flex.col-2.flex-shrink-0 > a"
                ],
                "properties": [],
                "translate": "詳細"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div:nth-child(4) > ul > li > a > span > span"
                ],
                "properties": [],
                "translate": "コミット"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > h2"
                ],
                "properties": [],
                "translate": "概要"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > details > details-dialog > div.Box-header > h1"
                ],
                "properties": [],
                "translate": "リポジトリの概要を編集"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.form-group.mt-0.mb-3 > div > label"
                ],
                "properties": [],
                "replace": "Description",
                "translate": "大まかな説明"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.form-group.my-3 > div > label"
                ],
                "properties": [],
                "replace": "Website",
                "translate": "ウェブサイト"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.width-full.tag-input-container.topic-input-container.d-inline-block.js-tag-input-container > div > div > div.mb-2 > label"
                ],
                "properties": [],
                "replace": "Topics",
                "translate": "トピック"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.width-full.tag-input-container.topic-input-container.d-inline-block.js-tag-input-container > div > div > div.mb-2 > label > span"
                ],
                "properties": [],
                "replace": "separate with spaces",
                "translate": "スペースで区切ります。"
            },
            {
                "selectors": [
                    "#hidden_sidebar_options"
                ],
                "properties": [],
                "replace": "Include in the home page",
                "translate": "リポジトリトップに表示するもの"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.form-group.mt-3.mb-0 > label"
                ],
                "properties": [],
                "replace": "Releases",
                "translate": "リリース"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.form-group.mt-3.mb-0 > label",
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Environments",
                "translate": "環境"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > div.f4.mt-3.text-gray.text-italic"
                ],
                "properties": [],
                "replace": "No description, website, or topics provided.",
                "translate": "説明またはウェブサイト、トピックが設定されていません。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > ul > li > span"
                ],
                "properties": [],
                "replace": "Active",
                "translate": "アクティブ"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > ul > li > span"
                ],
                "properties": [
                    "title"
                ],
                "replace": "Deployment Status Label",
                "translate": "デプロイ稼働ラベル"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Contributors",
                "translate": "貢献者"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > div > a"
                ],
                "properties": [],
                "replace": " License",
                "translate": "ライセンス"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Releases",
                "translate": "リリース"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > div.text-small.color-text-secondary"
                ],
                "properties": [],
                "replace": "No releases published",
                "translate": "リリースは公開されていません"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > div > a"
                ],
                "properties": [],
                "replace": "Create a new release",
                "translate": "リリースを公開する"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > div > a"
                ],
                "properties": [],
                "replace": "Publish your first release",
                "translate": "あなたの最初のリリースを公開する"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.form-group.mt-3.mb-0 > label",
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Packages",
                "translate": "パッケージ"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > div"
                ],
                "properties": [],
                "replace": "No packages published",
                "translate": "パッケージは公開されていません"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > div > a"
                ],
                "properties": [],
                "replace": "Create a new package",
                "translate": "パッケージを公開する"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > div > a"
                ],
                "properties": [],
                "replace": "Publish your first package",
                "translate": "あなたの最初のパッケージを公開する"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2"
                ],
                "properties": [],
                "replace": "Languages",
                "translate": "使用されている言語"
            },
        ]
    },
    {
        "name": "Repository watchers page",
		"path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/watchers",
        "rules": [
            {
                "selectors": [
                    "#repos > h2"
                ],
                "properties": [],
                "replace": "Watchers",
                "translate": "視聴者"
            },
            {
                "selectors": [
                    "#repos > div > h3.mb-1"
                ],
                "properties": [],
                "translate": "このリポジトリをWatchしているユーザはいません。あなたが最初かもしれません！"
            },
            {
                "selectors": [
                    "#repos > div > p"
                ],
                "properties": [],
                "replace": "#repos > div > p > a",
                "format": "{0}をクリックして、GitHubのWatchの仕組みを学ぶ。"
            },
            {
                "selectors": [
                    "#repos > div > p > a"
                ],
                "properties": [],
                "translate": "こちら"
            }
        ]
    },
    {
        "name": "Repository stargazers page",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/stargazers",
        "rules": [
            {
                "selectors": [
                    "#repos > h2"
                ],
                "properties": [],
                "replace": "Stargazers",
                "translate": "スターをしているユーザ"
            },
            {
                "selectors": [
                    "#repos > div > h3.mb-1"
                ],
                "properties": [],
                "translate": "このリポジトリにスターをしているユーザはいません。あなたが最初かもしれません！"
            },
            {
                "selectors": [
                    "#repos > div > nav > a"
                ],
                "properties": [],
                "replace": "All",
                "translate": "すべて"
            },
            {
                "selectors": [
                    "#repos > div > nav > a"
                ],
                "properties": [],
                "replace": "You know",
                "translate": "あなたが知っているユーザ"
            },
            {
                "selectors": [
                    "#repos > div > p"
                ],
                "properties": [],
                "replace": "#repos > div > p > a",
                "format": "{0}をクリックして、GitHubのスターの仕組みを学ぶ。"
            },
            {
                "selectors": [
                    "#repos > div > p > a"
                ],
                "properties": [],
                "translate": "こちら"
            }
        ]
    },
    {
        "name": "Repository issue page and pull requests.",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/(issues|pulls)(\/)?$",
        "rules": [
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-pinned-issues-reorder-container > h2"
                ],
                "properties": [],
                "replace": "Pinned issues",
                "translate": "ピン留めされたイシュー"
            },
            {
                "selectors": [
                    "div.pinned-issue-item > span.d-block.position-relative > span"
                ],
                "properties": [
                    "title"
                ],
                "replace": "Drag to reorder",
                "translate": "ドラッグして順番を変更"
            },
            {
                "selectors": [
                    "div.pinned-issue-item > span.d-block.position-relative > form > button"
                ],
                "properties": [
                    "aria-label"
                ],
                "translate": "イシューのピン留めを外す"
            },
            {
                "selectors": [
                    "span.opened-by"
                ],
                "properties": [],
                "replace": " opened ",
                "translate": "作成時刻: "
            },
            {
                "selectors": [
                    "span.opened-by"
                ],
                "properties": [],
                "replace": " by",
                "translate": " 作成者: "
            },
            {
                "selectors": [
                    "span.opened-by"

                ],
                "properties": [],
                "replace": "was closed ",
                "translate": "閉じた時刻: "
            },
            {
                "selectors": [
                    "div.pinned-issue-item > span.mt-1 > span"
                ],
                "properties": [],
                "replace": "Closed",
                "translate": "クローズ"
            },
            {
                "selectors": [
                    "div.pinned-issue-item > span.mt-1 > span"
                ],
                "properties": [],
                "replace": "Open",
                "translate": "オープン"
            },
            {
                "selectors": [
                    "#filters-select-menu > summary"
                ],
                "properties": [],
                "replace": "Filters",
                "translate": "フィルタ"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-header > h3"
                ],
                "properties": [],
                "replace": "Filter Issues",
                "translate": "イシューをフィルタする"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "Open issues and pull requests",
                "translate": "開いてるイシューとプルリクエスト"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "Your issues",
                "translate": "あなたのイシュー"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "Your pull requests",
                "translate": "あなたのプルリクエスト"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "Everything assigned to you",
                "translate": "あなたに割り当てられたすべて"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "Everything mentioning you",
                "translate": "あなたにメンションされたイシューすべて"
            },
            {
                "selectors": [
                    "#filters-select-menu > details-menu > div > div.SelectMenu-list > a > strong"
                ],
                "properties": [],
                "replace": "View advanced search syntax",
                "translate": "高度な検索構文を見る"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.d-flex.flex-justify-start.flex-auto.width-full.my-4.my-md-0 > div > nav > a"
                ],
                "properties": [],
                "replace": "Labels",
                "translate": "ラベル"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.d-flex.flex-justify-start.flex-auto.width-full.my-4.my-md-0 > div > nav > a"
                ],
                "properties": [],
                "replace": "Milestones",
                "translate": "マイルストーン"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.ml-3.d-flex.flex-justify-between.width-full.width-md-auto > a > span"
                ],
                "properties": [],
                "replace": "New issue",
                "translate": "新規作成"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.ml-3.d-flex.flex-justify-between.width-full.width-md-auto > a > span"
                ],
                "properties": [],
                "replace": "New pull request",
                "translate": "新規作成"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.issues-reset-query-wrapper > a"
                ],
                "properties": [],
                "replace": "Clear current search query, filters, and sorts",
                "translate": "既存のクエリ、フィルタ、ソートを解除する"
            },
            {
                "selectors": [
                    "#js-issues-toolbar > div.table-list-filters.flex-auto.d-flex.min-width-0 > div.flex-auto.d-none.d-lg-block.no-wrap > div > a"
                ],
                "properties": [],
                "replace": "Open",
                "translate": "オープン"
            },
            {
                "selectors": [
                    "#js-issues-toolbar > div.table-list-filters.flex-auto.d-flex.min-width-0 > div.flex-auto.d-none.d-lg-block.no-wrap > div > a"
                ],
                "properties": [],
                "replace": "Closed",
                "translate": "クローズ"
            },
            {
                "selectors": [
                    "#author-select-menu > summary"
                ],
                "properties": [],
                "replace": "Author",
                "translate": "作成者"
            },
            {
                "selectors": [
                    "#author-select-menu > summary"
                ],
                "properties": [
                    "title"
                ],
                "replace": "Author",
                "translate": "作成者"
            },
            {
                "selectors": [
                    "#author-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "replace": "Filter by author",
                "translate": "作成者でフィルタする"
            },
            {
                "selectors": [
                    "#author-filter-field",
                    "#assigns-filter-field"
                ],
                "properties": [
                    "placeholder",
                    "aria-label"
                ],
                "replace": "Filter users",
                "translate": "ユーザをフィルタ"
            },
            {
                "selectors": [
                    "#label-select-menu > summary"
                ],
                "properties": [
                    "title"
                ],
                "replace": "Label",
                "translate": "ラベル"
            },
            {
                "selectors": [
                    "#label-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "replace": "Filter by label",
                "translate": "ラベルでフィルタする"
            },
            {
                "selectors": [
                    "#label-filter-field"
                ],
                "properties": [
                    "placeholder",
                    "aria-label"
                ],
                "replace": "Filter labels",
                "translate": "ラベルをフィルタ"
            },
            {
                "selectors": [
                    "#label-select-menu > details-menu > div > div.SelectMenu-list.select-menu-list > div:nth-child(1) > a:nth-child(1) > strong"
                ],
                "properties": [],
                "replace": "Unlabeled",
                "translate": "ラベルなし"
            },
            {
                "selectors": [
                    "#label-select-menu > details-menu > div > footer > span"
                ],
                "properties": [],
                "replace": "Use ",
                "translate": ""
            },
            {
                "selectors": [
                    "#label-select-menu > details-menu > div > footer > span"
                ],
                "properties": [],
                "replace": " to exclude labels.",
                "translate": "でラベルを除外します。"
            },
            {
                "selectors": [
                    "#project-select-menu > summary"
                ],
                "properties": [],
                "replace": "Projects",
                "translate": "プロジェクト"
            },
            {
                "selectors": [
                    "#project-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "replace": "Filter by project",
                "translate": "プロジェクトでフィルタする"
            },
            {
                "selectors": [
                    "#projects-filter-field"
                ],
                "properties": [
                    "placeholder",
                    "aria-label"
                ],
                "replace": "Filter projects",
                "translate": "プロジェクトをフィルタ"
            },
            {
                "selectors": [
                    "#project-select-menu > details-menu > div > tab-container > div.SelectMenu-tabs > button"
                ],
                "properties": [],
                "replace": "Repository",
                "translate": "リポジトリ"
            },
            {
                "selectors": [
                    "#project-select-menu > details-menu > div > tab-container > div.SelectMenu-tabs > button"
                ],
                "properties": [],
                "replace": "Organization",
                "translate": "組織"
            },
            {
                "selectors": [
                    "#project-select-menu > details-menu > div > tab-container > div.SelectMenu-list.select-menu-list.filterable-empty > div.select-menu-no-results"
                ],
                "properties": [],
                "replace": "No projects found. Sorry about that.",
                "translate": "プロジェクトが見つかりませんでした。<br>申し訳ありません。"
            },
            {
                "selectors": [
                    "#milestones-select-menu > summary"
                ],
                "properties": [],
                "replace": "Milestones",
                "translate": "マイルストーン"
            },
            {
                "selectors": [
                    "#milestones-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "replace": "Filter by milestone",
                "translate": "マイルストーンでフィルタする"
            },
            {
                "selectors": [
                    "#milestones-filter-field"
                ],
                "properties": [
                    "placeholder",
                    "aria-label"
                ],
                "replace": "Filter milestones",
                "translate": "マイルストーンをフィルタ"
            },
            {
                "selectors": [
                    "#assignees-select-menu > summary"
                ],
                "properties": [],
                "replace": "Assignee",
                "translate": "割り当て"
            },
            {
                "selectors": [
                    "#assignees-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "replace": "Filter by who’s assigned",
                "translate": "誰が割り当てられているかでフィルタする"
            },
            {
                "selectors": [
                    "#assignees-select-menu > details-menu > div > div.SelectMenu-list.select-menu-list > div > a:nth-child(1) > strong"
                ],
                "properties": [],
                "replace": "Assigned to nobody",
                "translate": "未割り当て"
            },
            {
                "selectors": [
                    "#sort-select-menu > summary"
                ],
                "properties": [],
                "replace": "Sort",
                "translate": "並べ替え"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > header > span"
                ],
                "properties": [],
                "replace": "Sorty byte",
                "translate": "並べ替え順"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > a > span"
                ],
                "properties": [],
                "replace": "Newest",
                "translate": "新着順"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > a > span"
                ],
                "properties": [],
                "replace": "Oldest",
                "translate": "古い順"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > a > span"
                ],
                "properties": [],
                "replace": "Most commented",
                "translate": "コメントの多い順"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > a > span"
                ],
                "properties": [],
                "replace": "Least commented",
                "translate": "コメントの少ない順"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > a > span"
                ],
                "properties": [],
                "replace": "Least recently updated",
                "translate": "更新順(古い順)"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > a > span"
                ],
                "properties": [],
                "replace": "Recently updated",
                "translate": "更新順"
            },
            {
                "selectors": [
                    "#sort-select-menu > details-menu > div > div > div.SelectMenu-divider"
                ],
                "properties": [],
                "replace": "Most reactions",
                "translate": "リアクションの多い順"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "Welcome to pull requests!",
                "translate": "プルリクエストにようこそ！"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": "Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should ",
                "translate": "プルリクエストは、他の人とコードを共同編集するのに役立ちます。<br>プルリクエストが作成されると、ここで検索及びフィルタリング可能なリストに表示されます。<br>開始するには、"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p > a"
                ],
                "properties": [],
                "replace": "create a pull request",
                "translate": "プルリクエストを作成"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "Welcome to issues!",
                "translate": "イシューにようこそ！"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": "Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should ",
                "translate": "イシューは、Todo、バグ、機能のリクエストなどを追跡するために使用されます。<br>イシューが作成されると、ここで検索及びフィルタリング可能なリストに表示されます。<br>開始するには、"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "There aren’t any open issues.",
                "translate": "開いているイシューはありません。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "No results matched your search.",
                "translate": "検索に一致する結果がありません。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "There aren’t any open pull requests.",
                "translate": "開いているプルリクエストはありません。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"

                ],
                "properties": [],
                "replace": "You could search",
                "translate": ""
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": "all of GitHub",
                "translate": "GitHub全体"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": " or try an ",
                "translate": "または"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": ".",
                "contains": ["advanced search"],
                "translate": "",
                "append": "で検索することができます。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": "advanced search",
                "translate": "高度な検索"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p > a"
                ],
                "properties": [],
                "replace": "create an issue",
                "translate": "イシューを作成"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"

                ],
                "properties": [],
                "replace": ".",
                "translate": "する必要があります。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip > strong"
                ],
                "properties": [],
                "replace": "ProTip",
                "translate": "ヒント"
            },
        ]
    },
    {
        "name": "Repository actions create new",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/actions\/new(\/)?$",
        "rules": [
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div > div > div > h1"
                ],
                "properties": [],
                "replace": "Get started with GitHub Actions",
                "translate": "Github Actionsを始めましょう"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div > div > div > p:nth-child(2)"
                ],
                "properties": [],
                "replace": "Build, test, and deploy your code. Make code reviews, branch management, and issue triaging work the way you want. Select a workflow template to get started.",
                "translate": "コードのビルド、テスト、デプロイをします。コードレビュー、ブランチ管理、問題のトリアージを希望通りに機能させます。作成するワークフローのテンプレートを選びましょう。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div > div > div > p:nth-child(3)"
                ],
                "properties": [],
                "replace": "Skip this and",
                "translate": "スキップして "
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div > div > div > p:nth-child(3)"
                ],
                "properties": [],
                "replace": " set up a workflow yourself",
                "translate": "自分でワークフローをセットアップ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.d-flex.flex-column.flex-md-row.flex-justify-between > h2"
                ],
                "properties": [],
                "replace": " repository",
                "contains": ["Workflows made for your "],
                "translate": "リポジトリ用に構築されたワークフロー",
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.d-flex.flex-column.flex-md-row.flex-justify-between > h2"
                ],
                "properties": [],
                "replace": "Workflows made for your ",
                "translate": "",
            },
            {
                "selectors": [
                    "div.Box div.pr-4 p:nth-child(2)"
                ],
                "properties": [],
                "replace": "By\n",
                "translate": "作成 "
            },
            {
                "selectors": [
                    "div.Box div.pr-4 a.btn"
                ],
                "properties": [],
                "replace": "Set up this workflow",
                "translate": "このワークフローをセットアップ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > h2"
                ],
                "properties": [],
                "replace": "Deploy your code with these popular services",
                "translate": "これらの人気のあるサービスを使用してあなたのコードをデプロイ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > h2"
                ],
                "properties": [],
                "replace": "Continuous integration workflows",
                "translate": "継続的インテグレーションワークフロー"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > h2"
                ],
                "properties": [],
                "replace": "Automate every step in your process",
                "translate": "プロセスのすべてを自動化"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > details > summary"
                ],
                "properties": [],
                "replace": "More continuous integration workflows...",
                "translate": "もっと表示"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > h2"
                ],
                "properties": [],
                "replace": "Learn more about GitHub Actions",
                "translate": "GitHub Actionsについてもっと学ぶ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > div > a > h3"
                ],
                "properties": [],
                "replace": "Getting started and core concepts",
                "translate": "始め方とコンセプト"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > div > a > p"
                ],
                "properties": [],
                "replace": "New to Actions? Start here. Learn the core concepts and how to get started.",
                "translate": "Actionsは初めてですか?ここをクリックしてスタートしましょう。コンセプトと開始方法を学びます。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > div > a > h3"
                ],
                "properties": [],
                "replace": "Configuring and managing workflows",
                "translate": "設定とワークフローの管理"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > div > a > p"

                ],
                "properties": [],
                "replace": "Create custom workflows to control your project's life cycle processes.",
                "translate": "プロジェクトのライフサイクルプロセスをコントロールするワークフローを作成します。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > div > a > h3"
                ],
                "properties": [],
                "replace": "Language and framework guides",
                "translate": "言語とフレームワークのガイド"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-column.width-full > div > div > div > div.mt-4.py-6.mb-n5.border-top > div > a > p"
                ],
                "properties": [],
                "replace": "Guides for projects written in many programming languages.",
                "translate": "多くのプログラミング言語で書かれたプロジェクトのガイド"
            },
            {
                "selectors": [
                    "span.text-gray-light.text-small.overflow-hidden.width-full.text-right"
                ],
                "properties": [],
                "replace": "Deployment",
                "translate": "デプロイ"
            },
            {
                "selectors": [
                    "a.text-gray-light.text-small.overflow-hidden.width-full.text-right"
                ],
                "properties": [],
                "replace": "Automation",
                "translate": "自動化"
            },
            {
                "selectors": [

                ],
                "properties": [],
                "replace": "",
                "translate": ""
            },
            {
                "selectors": [

                ],
                "properties": [],
                "replace": "",
                "translate": ""
            },
        ]
    },
    {
        "name": "Repository actions",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/(actions|runs).*$",
        "rules": [
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div > div > h3"
                ],
                "properties": [],
                "replace": "Workflows",
                "translate": "ワークフロー"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div > div > a.d-none.d-lg-block.btn",
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div > div > a.d-none.d-md-block.d-lg-none.btn.btn-outline",
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div > div > a.d-block.d-md-none.btn.btn-outline"
                ],
                "properties": [],
                "replace": "New workflow",
                "translate": "新規作成"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div > div > h1",
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.hx_actions-sidebar.col-12.col-lg-3.pr-lg-4.pr-xl-5 > ul > li:nth-child(1) > a"

                ],
                "properties": [],
                "replace": "All workflows",
                "translate": "すべてのワークフロー"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.flash.flash-warn.mt-2.mb-4"
                ],
                "properties": [],
                "replace": "This workflow was disabled manually.",
                "translate": "このワークフローは操作によって無効化されています。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.flash.flash-warn.mt-2.mb-4 > form > button"
                ],
                "properties": [],
                "replace": "Enable workflow",
                "translate": "ワークフローを有効化"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div > div > div > form > input"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Filter workflows",
                "translate": "ワークフローをフィルタする"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.d-flex.flex-row.flex-lg-row > div > form > div > div.px-2 > div.width-full.text-normal.bg-white.text-gray-light.py-2"
                ],
                "properties": [],
                "replace": "Narrow your search",
                "translate": "絞り込み検索"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.d-flex.flex-row.flex-lg-row > details > details-menu > details > summary",
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.d-flex.flex-justify-end > details > ul > li.mt-1 > details > summary",
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.d-flex.flex-justify-end > details > ul > li.mt-1 > details > summary"
                ],
                "properties": [],
                "replace": "Create status badge",
                "translate": "実行結果バッジを作成"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.d-flex.flex-row.flex-lg-row > details > details-menu > form > button"
                ],
                "properties": [],
                "replace": "Disable workflow",
                "translate": "ワークフローを無効化"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.Box.Box--responsive.mt-3 > div.Box-header.d-flex.flex-justify-between > div > div > strong"
                ],
                "properties": [],
                "contains": [" workflow runs"],
                "replace": " workflow runs",
                "translate": "",
                "append": "つの実行されたワークフロー"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.Box.Box--responsive.mt-3 > div.Box-header.d-flex.flex-justify-between > div > div > strong"
                ],
                "properties": [],
                "contains": [" workflow run results"],
                "replace": " workflow run results",
                "translate": "",
                "append": "つのワークフローの実行結果"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.Box.Box--responsive.mt-3 > div.Box-header.d-flex.flex-justify-between > div > div > strong"
                ],
                "properties": [],
                "contains": [" workflow run result"],
                "replace": " workflow run result",
                "translate": "",
                "append": "つのワークフローの実行結果"
            },
            {
                "selectors": [
                    "#event-menu > summary"
                ],
                "properties": [],
                "replace": "Event",
                "translate": "イベント"
            },
            {
                "selectors": [
                    "#event-menu > details-menu > div > header > h3"
                ],
                "properties": [],
                "replace": "Filter by event",
                "translate": "フィルタでイベントする"
            },
            {
                "selectors": [
                    "#event-filter"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Find an event",
                "translate": "イベントを探す"
            },
            {
                "selectors": [
                    "#status-menu > summary"
                ],
                "properties": [],
                "replace": "Status",
                "translate": "ステータス"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > header > h3"
                ],
                "properties": [],
                "replace": "Filter by status",
                "translate": "ステータスでフィルタする"
            },
            {
                "selectors": [
                    "Find a status"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Find a status",
                "translate": "ステータスを探す"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "queued",
                "translate": "キュー済み"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "in progress",
                "translate": "実行中"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "waiting",
                "translate": "処理待ち"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "completed",
                "translate": "完了"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "neutral",
                "translate": "ニュートラル"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "success",
                "translate": "成功"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "failure",
                "translate": "失敗"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "cancelled",
                "translate": "キャンセル済み"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "action required",
                "translate": "アクションが必要"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "timed out",
                "translate": "タイムアウト"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "skipped",
                "translate": "スキップ済み"
            },
            {
                "selectors": [
                    "#status-menu > details-menu > div > div.SelectMenu-list > a"
                ],
                "properties": [],
                "replace": "stal",
                "translate": "活動なし"
            },
            {
                "selectors": [
                    "#branch-menu > summary"
                ],
                "properties": [],
                "replace": "Branch",
                "translate": "ブランチ"
            },
            {
                "selectors": [
                    "#branch-menu > details-menu > div > header > h3"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Find by branch",
                "translate": "ブランチを探す"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.Box.Box--responsive.mt-3 > div.Box-header.d-flex.flex-justify-between > div.table-list-header-toggle.states.d-flex.flex-lg-justify-end > details > summary"
                ],
                "properties": [],
                "replace": "Actor",
                "translate": "実行者"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.flex-auto.col-12.col-lg-8 > div.Box.Box--responsive.mt-3 > div.Box-header.d-flex.flex-justify-between > div.table-list-header-toggle.states.d-flex.flex-lg-justify-end > details.details-reset.details-overlay.d-inline-block.position-relative.pr-3.pr-sm-0.px-3 > details-menu > div > header > h3"
                ],
                "properties": [],
                "replace": "Filter by actor",
                "translate": "実行者でフィルタする"
            },
            {
                "selectors": [
                    "#actor-filter"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Find a user",
                "translate": "ユーザを探す"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li > a",
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.d-flex.flex-justify-end > details > ul > li > a",
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.d-flex.flex-justify-end > details > ul > li > a"
                ],
                "properties": [],
                "replace": "View workflow file",
                "translate": "ワークフローの構成を見る"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li > details > summary",
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li > details > details-dialog > div.Box-header > h3"

                ],
                "properties": [],
                "replace": "Delete workflow run",
                "translate": "この実行を削除する"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li:nth-child(2) > details > details-dialog > div.Box-body.pt-0.overflow-y-auto > div > p"
                ],
                "properties": [],
                "replace": "Are you sure you want to delete this workflow run?",
                "translate": "本当にこの実行を削除しますか？"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li:nth-child(2) > details > details-dialog > div.Box-body.pt-0.overflow-y-auto > div > p > strong"
                ],
                "properties": [],
                "replace": "This action cannot be undone",
                "translate": "この操作は元には戻せません"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li:nth-child(2) > details > details-dialog > div.Box-body.pt-0.overflow-y-auto > div > p"
                ],
                "properties": [],
                "replace": ".",
                "translate": "。"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.text-right > details > ul > li:nth-child(2) > details > details-dialog > div.Box-body.pt-0.overflow-y-auto > div > form > button"
                ],
                "properties": [],
                "replace": "Yes, permanently delete this workflow run",
                "translate": "はい、この実行を<strong>永久的に</strong>削除します。"
            },
            {
                "selectors": [
                    "div > div.d-table-cell.v-align-middle.col-1.col-md-3.text-small > div > div.d-none.d-md-block > details > summary > span"
                ],
                "properties": [],
                "addClasses": [
                    "gh-ja-time"
                ]
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > nav > div > div > ul > li:nth-child(1) > a",
                    "nav > div > div > ul > li:nth-child(1) > a"
                ],
                "properties": [],
                "replace": "Summary",
                "translate": "概要"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div.js-updatable-content.js-socket-channel.actions-workflow-stats.actions-fullwidth-module.color-bg-canvas.Box.box-shadow.mb-3.pb-3.px-3.border.border-top-0.border-md-top.rounded-1 > div > div > span.mb-1.d-block.text-small.text-gray"
                ],
                "properties": [],
                "replace": "Status",
                "translate": "状態"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div.js-updatable-content.js-socket-channel.actions-workflow-stats.actions-fullwidth-module.color-bg-canvas.Box.box-shadow.mb-3.pb-3.px-3.border.border-top-0.border-md-top.rounded-1 > div > div > span.mb-1.d-block.text-small.text-gray"
                ],
                "properties": [],
                "replace": "Total duration",
                "translate": "合計実行時間"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div.js-updatable-content.js-socket-channel.actions-workflow-stats.actions-fullwidth-module.color-bg-canvas.Box.box-shadow.mb-3.pb-3.px-3.border.border-top-0.border-md-top.rounded-1 > div > div > span.mb-1.d-block.text-small.text-gray"
                ],
                "properties": [],
                "replace": "Billable time",
                "translate": "請求可能時間"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div.js-updatable-content.js-socket-channel.actions-workflow-stats.actions-fullwidth-module.color-bg-canvas.Box.box-shadow.mb-3.pb-3.px-3.border.border-top-0.border-md-top.rounded-1 > div > div > span.mb-1.d-block.text-small.text-gray"
                ],
                "properties": [],
                "replace": "Artifacts",
                "translate": "成果物"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.mr-2.pt-1 > details > summary",
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.mr-2.pt-1 > details > summary"
                ],
                "properties": [],
                "replace": "Re-run jobs",
                "translate": "Jobを再実行"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.mr-2.pt-1 > details > ul > li > form > button",
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.mr-2.pt-1 > details > ul > li > form > button"
                ],
                "properties": [],
                "replace": "Re-run all jobs",
                "translate": "全てのJobを再実行"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.mr-2.pt-1 > details > ul > li > form > button",
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.mr-2.pt-1 > details > ul > li > form > button"
                ],
                "properties": [
                    "data-confirm",
                    "type"
                ],
                "replace": "Are you sure you want to delete all logs for this run?",
                "translate": "全てのJobを再実行"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.d-flex.flex-justify-end > details > ul > li > form > button",
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-updatable-content.js-socket-channel.d-flex.flex-items-start.flex-md-items-center.pb-3.pb-md-4.pl-0.pl-md-2.mt-n2.mb-1.ml-1 > div.d-none.d-md-flex.flex-self-start.ml-n1.ml-md-0 > div.d-flex.flex-justify-end > details > ul > li:nth-child(4) > form > button"
                ],
                "properties": [],
                "replace": "Delete all logs",
                "translate": "この実行のすべてのログを削除してもよろしいですか？"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div.js-updatable-content.js-socket-channel.actions-workflow-stats.actions-fullwidth-module.color-bg-canvas.Box.box-shadow.mb-3.pb-3.px-3.border.border-top-0.border-md-top.rounded-1 > div > div > a"
                ],
                "properties": [
                    "href"
                ],
                "contains": [
                    "billing"
                ],
                "addClasses": [
                    "gh-ja-time"
                ]
            },
            {
                "selectors": [
                    "summary > div > div.text-mono"
                ],
                "properties": [],
                "addClasses": [
                    "gh-ja-time"
                ]
            },
            {
                "selectors": [
                    "#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > nav > div > div > ul > li > div"
                ],
                "properties": [],
                "replace": "Jobs",
                "translate": "Job"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div > div > div > div > h4"
                ],
                "properties": [],
                "replace": "Annotations",
                "translate": "注釈"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-column.flex-md-row > div > div > div > div > div > div > div"
                ],
                "properties": [],
                "replace": "warning",
                "translate": "警告"
            },
            {
                "selectors": [
                    "#name"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Search logs",
                "translate": "ログを検索"
            },
            {
                "selectors": [
                    "#logs > div.uxr_CheckRun-header.CheckRun-header.mb-2.d-flex.flex-justify-between.flex-items-center.mb-1.py-3.pr-3.js-checks-log-toolbar.rounded-top-0.rounded-md-top-1.pl-3.pl-md-4 > div > details > details-menu > label"
                ],
                "properties": [],
                "replace": "Show timestamps",
                "translate": "タイムスタンプを表示"
            },
            {
                "selectors": [
                    "#logs > div.uxr_CheckRun-header.CheckRun-header.mb-2.d-flex.flex-justify-between.flex-items-center.mb-1.py-3.pr-3.js-checks-log-toolbar.rounded-top-0.rounded-md-top-1.pl-3.pl-md-4 > div > details > details-menu > label"
                ],
                "properties": [],
                "replace": "Show full screen",
                "translate": "フルスクリーン表示"
            },
            {
                "selectors": [
                    "#logs > div.uxr_CheckRun-header.CheckRun-header.mb-2.d-flex.flex-justify-between.flex-items-center.mb-1.py-3.pr-3.js-checks-log-toolbar.rounded-top-0.rounded-md-top-1.pl-3.pl-md-4 > div > details > details-menu > a"
                ],
                "properties": [],
                "replace": "Download log archive",
                "translate": "ログをダウンロード"
            },
            {
                "selectors": [
                    "#logs > div.uxr_CheckRun-header.CheckRun-header.mb-2.d-flex.flex-justify-between.flex-items-center.mb-1.py-3.pr-3.js-checks-log-toolbar.rounded-top-0.rounded-md-top-1.pl-3.pl-md-4 > div > details > details-menu > a"
                ],
                "properties": [],
                "replace": "View raw logs",
                "translate": "生ログを表示"
            },
        ]
    },
    {
        "name": "Project page",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/projects.*$",
        "rules": [
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.clearfix.py-3 > div.col-lg-8.col-md-7.col-sm-12.float-left > p.f1"
                ],
                "properties": [],
                "replace": "Organize your issues with project boards",
                "translate": "プロジェクトボードでイシューを整理"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.clearfix.py-3 > div.col-lg-8.col-md-7.col-sm-12.float-left > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "Did you know you can manage projects in the same place you keep your code? Set up a project board on GitHub to streamline and automate your workflow.",
                "translate": "コードを保持と同じ場所でプロジェクトを管理できることをご存知ですか？ GitHubにプロジェクトボードをセットアップして、ワークフローを合理化および自動化しましょう。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.clearfix.py-3 > div.col-lg-4.col-md-5.col-sm-12.float-left.text-lg-right.text-md-right.text-sm-left.py-3 > a"
                ],
                "properties": [],
                "replace": "Learn More",
                "translate": "もっと学ぶ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.clearfix.py-3 > div.col-lg-4.col-md-5.col-sm-12.float-left.text-lg-right.text-md-right.text-sm-left.py-3 > a"
                ],
                "properties": [],
                "replace": "Create a project",
                "translate": "新規作成"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.f3"
                ],
                "properties": [],
                "replace": "Sort tasks",
                "translate": "タスクを並べ替え"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "Add issues and pull requests to your board and prioritize them alongside note cards containing ideas or task lists.",
                "translate": "ボードにイシューを追加してリクエストをプルし、アイデアやタスクリストを含むノートカードと一緒に優先順位を付けます。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.f3"
                ],
                "properties": [],
                "replace": "Plan your project",
                "translate": "プロジェクトをプラン"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "Sort tasks into columns by status. You can label columns with status indicators like \"To Do\", \"In Progress\", and \"Done\".",
                "translate": "タスクを状態別に列に並べ替えます。 「ToDo」、「In Progress」、「Done」などの状態表示で列にラベルを付けることができます。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.f3"
                ],
                "properties": [],
                "replace": "Automate your workflow",
                "translate": "ワークフローを自動化"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "Set up triggering events to save time on project management—we’ll move tasks into the right columns for you.",
                "translate": "プロジェクト管理の時間を節約するためにトリガーイベントを設定します。タスクを適切な列に移動します。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.f3"
                ],
                "properties": [],
                "replace": "Track progress",
                "translate": "進捗状況を追跡"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "Keep track of everything happening in your project and see exactly what’s changed since the last time you looked.",
                "translate": "プロジェクトで起こっていることすべてを追跡し、最後に見たときから何が変わったかを正確に確認します。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.f3"
                ],
                "properties": [],
                "replace": "Share status",
                "translate": "ステータスをシェア"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "Each card has a unique URL, making it easy to share and discuss individual tasks with your team.",
                "translate": "各カードにはユニークURLがあり、チームと個々のタスクを簡単に共有して話し合うことができます。"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.f3"
                ],
                "properties": [],
                "replace": "Wrap up",
                "translate": "仕上げ"
            },
            {
                "selectors": [
                    "body > div.application-main > div > main > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.d-flex.flex-wrap > div > p.color-text-secondary"
                ],
                "properties": [],
                "replace": "After you wrap up your work, close your project board to remove it from your active projects list. On to the next project!",
                "translate": "作業を終えたら、プロジェクトボードを閉じて、アクティブなプロジェクトリストから削除します。すぐに次のプロジェクトへ！"
            },
        ]
    },
    {
        "name": "Project create new page",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/projects\/new\/*$",
        "rules": [
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.Subhead-description"
                ],
                "properties": [],
                "replace": "Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.",
                "translate": "仕事の調整、追跡、更新を一箇所で行うため、プロジェクトは透明性が高く、スケジュール通りに進行します。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div > div.Subhead-heading"
                ],
                "properties": [],
                "replace": "Create a new project",
                "translate": "プロジェクトボードを新規作成"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > dl > dt > label"
                ],
                "properties": [],
                "replace": "Project board name",
                "translate": "プロジェクトボードの名前"
            },
            {
                "selectors": [
                    "#project_name"
                ],
                "properties": [
                    "placeholder"
                ],
                "replace": "Project board name",
                "translate": "プロジェクトボードの名前"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > dl > dt > label"
                ],
                "properties": [],
                "replace": "Description",
                "translate": "説明"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > dl > dt > label > span"
                ],
                "properties": [],
                "replace": "optional",
                "translate": "任意"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > p.mb-1 > strong"
                ],
                "properties": [],
                "replace": "Project template",
                "translate": "プロジェクトのテンプレート"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > p.text-gray"
                ],
                "properties": [],
                "replace": "Save yourself time with a pre-configured project board template.",
                "translate": "事前に設定されたテンプレートを使用し、時間を節約します。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > summary > i"
                ],
                "properties": [],
                "replace": "Template",
                "translate": "テンプレート"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-header > span"
                ],
                "properties": [],
                "replace": "Templates",
                "translate": "テンプレート"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-list > label > div > span.select-menu-item-heading",
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > summary > span"
                ],
                "properties": [],
                "replace": "None",
                "translate": "なし"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-list > label > div > span.text-normal"
                ],
                "properties": [],
                "replace": "Start from scratch with a completely blank project board. You can add columns and configure automation settings yourself.",
                "translate": "完全空白のプロジェクトボードから始めます。列の追加、自動化設定を自分で設定できます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-list > label > div > span.text-normal"
                ],
                "properties": [],
                "replace": "Basic kanban-style board with columns for To do, In progress and Done.",
                "translate": "To do、In progress、Doneの列がある基本的なかんばんスタイルのボード。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-list > label > div > span.text-normal"
                ],
                "properties": [],
                "replace": "Kanban-style board with built-in triggers to automatically move issues and pull requests across To do, In progress and Done columns.",
                "translate": "トリガーが組み込まれたかんばんスタイルのボードで、イシューを自動的に移動し、[実行]、[進行中]、[完了] の列でリクエストをプルします。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-list > label > div > span.text-normal"
                ],
                "properties": [],
                "replace": "Everything included in the Automated kanban template with additional triggers for pull request reviews.",
                "translate": "自動かんばんテンプレートに含まれるすべてのものと、プルリクエストレビュー用の追加トリガー。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > form > div.form-group.my-4 > details > details-menu > div.select-menu-list > label > div > span.text-normal"
                ],
                "properties": [],
                "replace": "Triage and prioritize bugs with columns for To do, High priority, Low priority, and Closed.",
                "translate": "To do、High priority、Low priority、およびClosedの列を使用して、バグの優先順位を付けをします。"
            },
        ]
    },
    {
        "name": "User profile tooltip",
        "path": "^\/.*",
        "rules": [
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "Owns this repository",
                "translate": "このリポジトリの所有者です。"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "past month",
                "translate": "先週"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "Committed to this repository in the ",
                "contains": [
                    "Committed to this repository in the "
                ],
                "translate": "",
                "append": "にこのリポジトリにコミットしています。"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "Committed to this repository",
                "translate": "このリポジトリにコミットしました。"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "Opened this issue",
                "translate": "このイシューを開きました。"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "their first in ",
                "translate": "最初のイシュー："
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": " and ",
                "translate": "と"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": " more",
                "contains": [
                    " more"
                ],
                "translate": "",
                "append": "つ"
            },
            {
                "selectors": [
                    "body > div.Popover.js-hovercard-content.position-absolute > div > div > div > div > span"
                ],
                "properties": [],
                "replace": "Member of",
                "contains": [
                    "Member of"
                ],
                "translate": "",
                "append": "のメンバーです。"
            },
            {
                "selectors": [
                    "div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.css-truncate.css-truncate-overflow.text-gray > a"
                ],
                "properties": [
                    "title"
                ],
                "contains": [
                    "View all commits by"
                ],
                "replace": "View all commits by",
                "translate": "",
                "append": "からのすべてのコミットを見る。"
            },
        ]
    },
];

(function(){
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'? args[number]: match;
            });
        };
    }
})();

var enable = true;

function main(domr) {
    if (!enable)
        return;
    json.forEach((rules) => {
        if (!window.location.pathname.match(new RegExp(rules.path)))
            return;

        rules.rules.forEach((obj) => {
            var props = obj.properties;
            var translate = obj.translate;
            var format = obj.format;
            var contains = obj.contains;
            var append = obj.append;
            var ignoreCase = obj.ignoreCase ? true: false;
            var override = obj.override;
            var add = obj.addClasses;

            var doms;
            if (!override && rules.selector != undefined && rules.selector != null)
                doms = [document.querySelectorAll(rules.selector)]
            else
                doms = obj.selectors.map(s => document.querySelectorAll(s));

            for (var i = 0; i < doms.length; i++)
            {
                var domc = doms[i]
                domc.forEach((dom) => {
                    if (domr != undefined && domr != null && dom != null && !dom == domr)
                        return;
                    props.forEach((prop) => {
                        tr(dom, translate, prop, obj["replace"], format, contains, append, ignoreCase, add);
                    });
                    if (props.length == 0 && format != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append, ignoreCase, add)
                    else if (props.length == 0 && obj["replace"] == undefined)
                         tr(dom, translate, null, null, format, contains, append, ignoreCase, add)
                    else if (obj["replace"] != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append, ignoreCase, add);
                });

            }
        });

    });
}

var config = {
    childList: true,
    subtree: true,
    attributeOldValue: false,
    attributes: false,
    characterData: false
};

var observer = new MutationObserver((r) => {
    /*var flag = false;
    r.forEach((b) => {
        if (b.target)
            if (b.target.className)
                if (b.target.className.includes("Code"))
                flag = true;
        if (b.nextSibling)
            if (b.nextSibling.className)
                if (b.nextSibling.className.includes("Code"))
                flag = true;
        if (b.previousSibling)
            if (b.previousSibling.className)
                if (b.previousSibling.className.includes("Code"))
                flag = true;
    });
    if (flag)
        return;*/
    observer.disconnect();
    main(null);
    observer.observe(document, config);
});
    observer.observe(document, config);

document.kill = () => {
    enable = false;
}

document.update = () => {
    main(null)
}
function cca (str, array, ignoreCase) {
    var a = false;
    array.forEach((ab) => {
        if (a)
            return;
        if (ignoreCase)
            a = str.toLowerCase().includes(ab.toLowerCase());
        else a = str.includes(ab);
    });
    return a;
}

function lower(str, ignoreCase)
{
    return ignoreCase ? str.ignoreCase(): str;
}

function tr(dom, translate, prop, replace, format, contains, append, ignoreCase, add) {
    if (dom == undefined || dom == null)
        return;

    if (contains == null || (contains && !prop && cca(dom.innerHTML, contains, ignoreCase)) || (contains && prop && dom[prop] && cca(dom[prop], contains, ignoreCase)))
        if (add && add.length != 0)
            add.forEach(s => dom.classList.add(s))

    if (translate != undefined)
    {
        if (prop != null)
        {
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && !cca(dom[prop], contains, ignoreCase))
                return;
            if (replace != null && dom[prop] != undefined)
            {
                var a = dom[prop].replace(replace, translate) + (append != undefined && append != null ? append: "");
                if (a != dom[prop])
                    dom[prop] = a;
            }
            else
            {
                var ate = translate + (append != undefined && append != null ? append: "");
                if (ate != dom[prop])
                    dom[prop] = ate;
            }
        }
        else
        {
            if (contains != undefined && contains != null && !cca(dom.innerHTML, contains, ignoreCase))
                return;

            if (replace != null)
            {
                var kawr = dom.innerHTML.replace(replace, translate) + (append != undefined && append != null ? append: "");
                if (dom.innerHTML != kawr)
                    dom.innerHTML = kawr
            }
            else
            {
                var sar = translate + (append != undefined && append != null ? append: "");
                if ( dom.innerHTML != sar)
                    dom.innerHTML = sar;
            }
        }

        return;
    }

    if (dom == null)
        return;

    if (format == undefined || format == null)
        return;

    if (prop != null)
    {
        if (document.querySelector(replace) != null)
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && cca(dom[prop], contains, ignoreCase))
            {
                var propaw = format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
                if (dom[prop] != propaw)
                    dom[prop] = propaw;
            }
    }
    else
        if (document.querySelector(replace) != null)
              if (contains != undefined && contains != null && cca(dom.innerHTML, contains, ignoreCase))
              {
                  var inn =  format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
                  if (inn != dom.outerHTML)
                      dom.outerHTML = inn;
              }
}










