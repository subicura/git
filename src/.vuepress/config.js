const autometa_options = {
  title: "Git / GitHub 안내서",
  description: "Git / GitHub 안내서 - 핵심만 제대로 배우기",
  canonical_base: "https://subicura.com/git",
  author: {
    name: "subicura",
    twitter: "subicura",
  },
  site: {
    name: "Git / GitHub 안내서",
    twitter: "subicura",
  },
  description_sources: ["frontmatter"],
  image_sources: ["frontmatter"],
};

module.exports = {
  locales: {
    "/": {
      lang: "ko-KR",
      title: "Git / GitHub 안내서",
      description: "Git / GitHub 안내서 - 핵심만 제대로 배우기",
    },
  },
  dest: "dist/git",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Git / GitHub 안내서",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Git / GitHub 안내서 - 핵심만 제대로 배우기",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/icons/apple-touch-icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "link",
      {
        href: "https://css.gg/css?=|calendar-dates|folder|tag",
        rel: "stylesheet",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/git/icons/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    // [
    //   "script",
    //   {
    //     async: "true",
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //   },
    // ],
    ["meta", { property: "fb:app_id", content: "1611862309129685" }],
  ],

  base: "/git/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "subicura/git",
    editLinks: true,
    docsDir: "src",
    editLinkText: "",
    lastUpdated: true,
    // algolia: {
    //   apiKey: "6b02d4c7b823f2f9dd607f57d047175e",
    //   indexName: "subicura",
    // },
    locales: {
      "/": {
        nav: [
          {
            text: "📔 가이드",
            link: "/guide/",
          },
          {
            text: "⚙️ 준비하기",
            link: "/prepare/",
          },
          // {
          //   text: "영상강의",
          //   link: "https://bit.ly/inflearn-k8s-link",
          // },
        ],
        sidebar: {
          "/guide/": getGuideSidebar("기본 가이드", "문제 해결"),
          "/prepare/": [
            {
              title: "준비하기",
              collapsable: false,
              children: [
                "",
                "git-setup",
                "github-setup",
                "terminal-setup",
                "vscode-setup",
                "sourcetree-setup",
                "link",
              ],
            },
          ],
        },
      },
    },
    yuu: {
      disableThemeIgnore: true,
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    [
      "sitemap",
      {
        hostname: "https://subicura.com",
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, _lang) => {
          var d = new Date(timestamp),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          return [year, month, day].join("-");
        },
      },
    ],
    [require("./plugins/vuepress-plugin-autometa.js"), autometa_options],
    [
      "mermaidjs",
      {
        sequence: {
          mirrorActors: false,
          actorFontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace, 'Pretendard'",
          actorFontWeight: "bold",
          noteFontFamily:
            "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace, 'Pretendard'",
          noteFontWeight: "normal",
          messageFontFamily:
            '"Pretendard", "Apple SD Neo Gothic", "Malgun Gothic", "맑은고딕", Dotum, "돋움", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          messageFontWeight: "normal",
        },
      },
    ],
  ],
};

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "basic",
        "branch",
        "github",
        "github-flow",
        "project",
        "commit",
      ],
    },
    // {
    //   title: groupB,
    //   collapsable: false,
    //   children: ["clean", "reflog", "cherry-pick", "stash", "blame", "delete"],
    // },
  ];
}
