// ==UserScript==
// @name         Github Japanese
// @namespace    Peyang
// @version      0.1
// @description  Githubを日本語化する
// @author       Peyang
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

var json = [
	{
        "name": "Global",
		"page": "^/.*",
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
				"replace": "body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > div.header-nav-current-user.css-truncate > a > strong",
				"format": "{0}としてログイン中"
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
				"replace": "mintues ago",
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
			}
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
        "name": "Repository Top Page",
		"path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}(/.*)?",
		"rules": [
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > div > h1 > span.Label.Label--outline.v-align-middle",
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > div > h1 > span.Label.Label--outline.v-align-middle"
                ],
                "properties": [],
                "replace": "Private",
                "translate": "プライベート"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > summary > span"
                ],
                "properties": [],
                "replace": "Watch",
                "translate": "Watch"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > summary > span"
                ],
                "properties": [],
                "replace": "Unwatch",
                "translate": "Watch中"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > header > h3",
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > header > h3"
                ],
                "properties": [],
                "replace": "Notifications",
                "translate": "通知"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(3) > div > div.f5.text-bold"
                ],
                "properties": [],
                "translate": "関係しているものと@メンション"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(3) > div > div.text-small.text-gray.text-normal.pb-1"
                ],
                "properties": [],
                "translate": "自分に関係していたり、@メンションを受け取った場合のみ通知します。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(4) > div > div.f5.text-bold"
                ],
                "properties": [],
                "translate": "すべてのアクティビティ"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(4) > div > div.text-small.text-gray.text-normal.pb-1"
                ],
                "properties": [],
                "translate": "すべてのこのリポジトリの通知を受け取ります。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(5) > div > div.f5.text-bold"
                ],
                "properties": [],
                "translate": "無視"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > form > button:nth-child(5) > div > div.text-small.text-gray.text-normal.pb-1"
                ],
                "properties": [],
                "translate": "通知を受け取ることはありません。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > button > div > div.d-flex.flex-items-start.flex-justify-between > div.f5.text-bold",
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > header.d-none.d-sm-flex.flex-items-start.pt-1 > h1"
                ],
                "properties": [],
                "translate": "カスタム"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-menu > div > div > button > div > div.text-small.text-gray.text-normal.pb-1",
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > legend > div"
                ],
                "properties": [],
                "translate": "関係する通知と@メンションに加えて、受け取りたい通知を選びます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(2) > div > form.unstarred.js-social-form > button > span"
                ],
                "properties": [],
                "translate": "スター"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(2) > div > form.starred.js-social-form > button > span"
                ],
                "properties": [],
                "translate": "スターを外す"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div > ul > li:nth-child(3) > div > details > summary"
                ],
                "properties": [],
                "replace": "Fork",
                "translate": "フォーク"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > div:nth-child(4) > label"
                ],
                "properties": [],
                "replace": "Releases",
                "translate": "リリース"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > div > button:nth-child(2)"
                ],
                "properties": [],
                "translate": "キャンセル"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > div > button.btn.btn-sm.btn-primary.ml-2"
                ],
                "properties": [],
                "translate": "適用"
            },
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Code\"]"
				],
				"properties": [],
                "replace": "Code",
				"translate": "コード"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Issues\"]",
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > div:nth-child(2) > label"
				],
				"properties": [],
                "replace": "Issues",
				"translate": "イシュー"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Pull requests\"]",
                    "#js-repo-pjax-container > div.bg-gray-light.pt-3.hide-full-screen.mb-5 > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > ul > li:nth-child(1) > notifications-list-subscription-form > details > details-dialog > div > form > fieldset > div:nth-child(3) > label"
				],
				"properties": [],
                "replace": "Pull requests",
				"translate": "プルリクエスト"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Discussions\"]"
				],
				"properties": [],
				"replace": "Discussions",
				"translate": "会話"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Actions\"]"
				],
				"properties": [],
				"replace": "Actions",
				"translate": "アクション"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Projects\"]"
                ],
				"properties": [],
				"replace": "Projects",
				"translate": "プロジェクト"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Wiki\"]"
				],
				"properties": [],
				"replace": "Wiki",
				"translate": "ウィキ"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Security\"]"
				],
				"properties": [],
				"replace": "Security",
				"translate": "セキュリティ"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Insights\"]"
				],
				"properties": [],
				"replace": "Insights",
				"translate": "統計"
			},
			{
				"selectors": [
					"#js-repo-pjax-container span[data-content=\"Settings\"]"
				],
				"properties": [],
				"replace": "Settings",
				"translate": "設定"
			}
		]
	},
    {
        "name": "Global repository watcher page",
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
        "name": "Global stargazers page",
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
                    "#ref-list-branches > div > a:nth-child(1) > span.Label.Label--gray.flex-self-start"
                ],
                "properties": [],
                "translate": "デフォルトブランチ"
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
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-self-center.ml-3.flex-self-stretch.d-none.d-lg-flex.flex-items-center.lh-condensed-ultra > a:nth-child(1) > span"
                ],
                "properties": [],
                "translate": "ブランチ"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > div.flex-self-center.ml-3.flex-self-stretch.d-none.d-lg-flex.flex-items-center.lh-condensed-ultra > a.ml-3.link-gray-dark.no-underline > span"
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
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > a"
                ],
                "properties": [],
                "translate": "ファイルを開く"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > details > summary > span.d-none.d-md-flex.flex-items-center"
                ],
                "properties": [],
                "replace": "Add file",
                "translate": "ファイルを追加"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > details > div > ul > li:nth-child(3) > form > button"
                ],
                "properties": [],
                "translate": "新しくファイルを作成"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > details > div > ul > li:nth-child(4) > a"
                ],
                "properties": [],
                "translate": "既存のファイルをアップロード"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > summary"
                ],
                "properties": [],
                "replace": "Code",
                "translate": "コード"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > div"
                ],
                "properties": [],
                "replace": "Clone",
                "translate": "クローン"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > a"
                ],
                "properties": [
                    "aria-label"
                ],
                "translate": "どのリモートURLを使用すればいいですか？"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(2) > p"
                ],
                "properties": [],
                "translate": ""
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(2) > p"
                ],
                "properties": [],
                "translate": "Gitを使用するか、URLを用いてSYNでチェックアウトできます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(3) > p"
                ],
                "properties": [],
                "translate": "パスワードで保護されたSSH鍵を使用します。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(4) > p"
                ],
                "properties": [],
                "replace": "Work fast with our official CLI.",
                "translate": "GitHub公式のCLIを使用して素早く作業します。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > div > tab-container > div:nth-child(4) > p > a"
                ],
                "properties": [],
                "translate": "詳細"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > ul > li.Box-row.Box-row--hover-gray.p-0.rounded-0.mt-0.js-remove-unless-platform > a"
                ],
                "properties": [],
                "replace":  "Open with GitHub Desktop",
                "translate": "GitHub Desktopで開く"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > ul > li > a"
                ],
                "properties": [],
                "replace": "Open with Visual Studio",
                "translate": "Visual Studioで開く"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.file-navigation.mb-3.d-flex.flex-items-start > span > get-repo > details > div > div > div:nth-child(1) > ul > li > a"
                ],
                "properties": [],
                "replace": "Download ZIP",
                "translate": "ZIPアーカイブでダウンロード"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > include-fragment > div.text-gray.no-wrap"
                ],
                "properties": [],
                "translate": "チェックの状態を読み込んでいます..."
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > h3"
                ],
                "properties": [],
                "replace": "Some checks were not successful",
                "translate": "一部のチェックに失敗しました。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > h3"
                ],
                "properties": [],
                "replace": "All checks have passed",
                "translate": "すべてのチェックに合格しました。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " successful checks",
                "translate": "つのチェックに成功"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " successful check",
                "translate": "つのチェックに成功"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " successful checks",
                "translate": "つのアクションが必要なチェック"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div:nth-child(1) > span"
                ],
                "properties": [],
                "replace": " action required check",
                "translate": "つのアクションが必要なチェック"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.flash.mb-4"
                ],
                "properties": [],
                "replace": "Help people interested in this repository understand your project by adding a README.",
                "translate": "READMEを追加して、このリポジトリに関心のある人がこのプロジェクトを理解できるようにしましょう。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.flash.mb-4"
                ],
                "properties": [],
                "replace": "Add a README",
                "translate": "READMEを作成する"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.d-flex.flex-auto.flex-justify-end.ml-3.flex-items-baseline > details > div > div > div.merge-status-list > div > div.d-flex.col-2.flex-shrink-0 > a"
                ],
                "properties": [],
                "translate": "詳細"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div:nth-child(4) > ul > li > a > span > span"
                ],
                "properties": [],
                "translate": "コミット"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > h2"
                ],
                "properties": [],
                "translate": "概要"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > details > details-dialog > div.Box-header > h1"
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
                    "#repo_metadata_form > div.form-group.mt-3.mb-0 > label"
                ],
                "properties": [],
                "replace": "Packages",
                "translate": "パッケージ"
            },
            {
                "selectors": [
                    "#repo_metadata_form > div.form-group.mt-3.mb-0 > label",
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Environments",
                "translate": "環境"
            },

            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > div.f4.mt-3.text-gray.text-italic"
                ],
                "properties": [],
                "replace": "No description, website, or topics provided.",
                "translate": "説明またはウェブサイト、トピックが設定されていません。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > ul > li > span"
                ],
                "properties": [],
                "replace": "Active",
                "translate": "アクティブ"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > ul > li > span"
                ],
                "properties": [
                    "title"
                ],
                "replace": "Deployment Status Label",
                "translate": "デプロイ稼働ラベル"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Contributors",
                "translate": "貢献者"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div.BorderGrid-row.hide-sm.hide-md > div > div > a"
                ],
                "properties": [],
                "replace": " License",
                "translate": "ライセンス"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2 > a"
                ],
                "properties": [],
                "replace": "Releases",
                "translate": "リリース"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div:nth-child(2) > div > div.text-small.color-text-secondary"
                ],
                "properties": [],
                "translate": "リリースは公開されていません"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div:nth-child(2) > div > a > div > div.d-flex > span.Label.Label--green.flex-shrink-0"
                ],
                "properties": [],
                "replace": "Latest",
                "translate": "最新"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div:nth-child(2) > div > div > a"
                ],
                "properties": [],
                "translate": "リリースを公開する"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-3 > div > div > div > h2"
                ],
                "properties": [],
                "replace": "Languages",
                "translate": "使用されている言語"
            },
        ]
    },
    {
        "name": "Repository issue page nad pull requests.",
        "path": "^\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,100}\/(issues|pulls)(\/)?$",
        "rules": [
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.js-pinned-issues-reorder-container > h2"
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
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.d-flex.flex-justify-start.flex-auto.width-full.my-4.my-md-0 > div > nav > a"
                ],
                "properties": [],
                "replace": "Labels",
                "translate": "ラベル"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.d-flex.flex-justify-start.flex-auto.width-full.my-4.my-md-0 > div > nav > a"
                ],
                "properties": [],
                "replace": "Milestones",
                "translate": "マイルストーン"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.ml-3.d-flex.flex-justify-between.width-full.width-md-auto > a > span"
                ],
                "properties": [],
                "replace": "New issue",
                "translate": "新規作成"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.issues-reset-query-wrapper > a"
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
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "Welcome to pull requests!",
                "translate": "プルリクエストにようこそ！"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": "Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should ",
                "translate": "プルリクエストは、他の人とコードを共同編集するのに役立ちます。<br>プルリクエストが作成されると、ここで検索及びフィルタリング可能なリストに表示されます。<br>開始するには、"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p > a"
                ],
                "properties": [],
                "replace": "create a pull request",
                "translate": "プルリクエストを作成"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > h3"
                ],
                "properties": [],
                "replace": "Welcome to issues!",
                "translate": "イシューにようこそ！"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"
                ],
                "properties": [],
                "replace": "Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should ",
                "translate": "イシューは、Todo、バグ、機能のリクエストなどを追跡するために使用されます。<br>イシューが作成されると、ここで検索及びフィルタリング可能なリストに表示されます。<br>開始するには、"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p > a"
                ],
                "properties": [],
                "replace": "create an issue",
                "translate": "イシューを作成"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.Box.mt-3.Box--responsive.hx_Box--firstRowRounded0 > div > div > p"

                ],
                "properties": [],
                "replace": ".",
                "translate": "する必要があります。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip > strong"
                ],
                "properties": [],
                "replace": "ProTip",
                "translate": "ヒント"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "contains": [
                    "Type "
                ],
                "replace": "Type ",
                "translate": "問題やプルリクエスト上で"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "contains": [
                    " on any issue or pull request to go back to the pull request listing page."
                ],
                "replace": " on any issue or pull request to go back to the pull request listing page.",
                "translate": "を入力することで一覧に戻ることができます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "contains": [
                    " on any issue or pull request to go back to the issue listing page."
                ],
                "replace": " on any issue or pull request to go back to the issue listing page.",
                "translate": "を入力することで一覧に戻ることができます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "replace": "Mix and match filters to narrow down what you’re looking for.",
                "translate": "フィルタを組み合わせてあなたが探しているものを絞り込みます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "replace": " Updated in the last three days",
                "translate": "過去三日前に更新"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"

                ],
                "properties": [],
                "contains": [
                    "Adding "
                ],
                "replace": "Addiing",
                "translate": ""
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "replace": " will show everything without a label.",
                "translate": "使用すると、ラベルのない全てのものが表示されます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"

                ],
                "properties": [],
                "contains": [
                    "Add "
                ],
                "replace": "Add",
                "translate": ""
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "replace": " to see everything that’s not assigned.",
                "translate": "使用すると、誰も割り当てられていないものが表示されます。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "contains": [
                    "Exclude your own issues with"
                ],
                "translate": "",
                "append": "を使用すると、あなたが作成したイシューを除外します。"
            },
            {
                "selectors": [
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div > div.protip"
                ],
                "properties": [],
                "replace": "Notify someone on an issue with a mention, like: ",
                "translate": "次のようなメンションでイシューについて誰かに通知します："
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
                    "#js-repo-pjax-container > div.container-xl.clearfix.new-discussion-timeline.px-3.px-md-4.px-lg-5 > div > div.gutter-condensed.gutter-lg.flex-column.flex-md-row.d-flex > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div.Box.mb-3 > div.Box-header.Box-header--blue.position-relative > div > div.flex-1.d-flex.flex-items-center.ml-3.min-width-0 > div.css-truncate.css-truncate-overflow.text-gray > a"
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

main();

function main() {
    if (!enable)
        return;
    json.forEach((rules) => {
        if (!window.location.pathname.match(new RegExp(rules.path)))
            return;
        rules.rules.forEach((obj) => {
            var doms = obj.selectors.map(s => document.querySelectorAll(s));
            var props = obj.properties;
            var translate = obj.translate;
            var format = obj.format;
            var contains = obj.contains;
            var append = obj.append;
            doms.forEach((domc) => {
                domc.forEach((dom) => {
                    props.forEach((prop) => {
                        tr(dom, translate, prop, obj["replace"], format, contains, append);
                    });
                    if (props.length == 0 && format != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append)
                    else if (props.length == 0 && obj["replace"] == undefined)
                         tr(dom, translate, null, null, format, contains, append)
                    else if (obj["replace"] != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append);
                });

            });
        });

    });
}

var timer = 0;

var config = {
    childList: true,
    subtree: true
};

var observer = new MutationObserver(() => {
    observer.disconnect();
    main();
    observer.observe(document, config);
});

observer.observe(document, config);

document.kill = () => {
    enable = false;
}

function cca (str, array) {
    var a = false;
    array.forEach((ab) => {
        if (a)
            return;
        a = str.includes(ab);
    });
    return a;
}

function tr(dom, translate, prop, replace, format, contains, append) {
    if (dom == undefined || dom == null)
        return;
    if (translate != undefined)
    {
        if (prop != null)
        {
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && !cca(dom[prop], contains))
                return;
            if (replace != null && dom[prop] != undefined)
                dom[prop] = dom[prop].replace(replace, translate) + (append != undefined && append != null ? append: "");
            else
                dom[prop] = translate + (append != undefined && append != null ? append: "");
        }
        else
        {
            if (contains != undefined && contains != null && !cca(dom.innerHTML, contains))
                return;
            if (replace != null)
                dom.innerHTML = dom.innerHTML.replace(replace, translate) + (append != undefined && append != null ? append: "");
            else
                dom.innerHTML = translate + (append != undefined && append != null ? append: "");
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
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && cca(dom[prop], contains))
                dom[prop] = format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
    }
    else
        if (document.querySelector(replace) != null)
              if (contains != undefined && contains != null && cca(dom.innerHTML, contains))
                  dom.innerHTML = format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
}
