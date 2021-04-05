module.exports = (context) => {
  return {
    base: "/",

    theme: require.resolve("../../theme"),

    locales: require("./locales"),

    themeConfig: {
      autoRedirect: {
        check: "zh",
        to: "/en/"
      },
      limit: 5,
      wallpapers: [
        "linear-gradient(0deg, #ffffff, #ffffff)",
        "linear-gradient(120deg, #ff3300, #cc66ff, #00ccff)"
      ],
      zooming: {
        enable: true
      },
      pwa: {
        enable: true,
        head: [
          [
            "link",
            {
              rel: "icon",
              href: "/favicon.ico",
              type: "image/x-icon"
            }
          ],
          [
            "link",
            {
              rel: "manifest",
              href: "/manifest.json"
            }
          ],
          [
            "meta",
            {
              name: "theme-color",
              content: "#ffffff"
            }
          ],
          [
            "meta",
            {
              name: "apple-mobile-web-app-capable",
              content: "yes"
            }
          ],
          [
            "meta",
            {
              name: "apple-mobile-web-app-status-bar-style",
              content: "#ffffff"
            }
          ],
          [
            "link",
            {
              rel: "apple-touch-icon",
              href: "/assets/img/apple-touch-icon.png"
            }
          ]
        ]
      },
      live2dHelper: {
        // https://github.com/JoeyBling/vuepress-plugin-helper-live2d
        enable: true,
        options: {
          log: false,
          live2d: {
            enable: true,
            model: "haruto", // ==> .vuepress/public/live2d/haruto
            display: {
              position: "right",
              width: 180,
              height: 270,
              hOffset: 48,
              vOffset: 0
            },
            mobile: {
              show: false
            }
          }
        }
      },
      audioplayer: {
        enable: true,
        api: `https://api.i-meto.com/meting/api?server=netease&type=playlist&id=4989572738&r=${Math.random()}`
      },
      pangu: {
        // enabling pangu will disable markdown-it-anchor permalink
        enable: true
      },
      sitemap: {
        enable: true,
        hostname: "https://k.ma-jinyao.cn"
      },
      comment: {
        enable: true,
        // https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#comment
        service: "vssue",
        owner: "jinyaoMa",
        repo: "mustom-next",
        prefix: "[Site Comment]: ",
        labels: [":point_right:Site_Comment:point_left:"],
        clientId: "72048aa184ffd1de2d18",
        clientSecret: "c44dc925c6c9618d5698df3f7c0c9a3aaf98bacd",
        locale: "zh"
      },
      socialShare: {
        enable: true,
        // https://sns.goyfe.com/guide/
        networks: [
          "qq",
          "weibo",
          "douban",
          "email",
          "whatsapp",
          "facebook",
          "reddit",
          "telegram",
          "line"
        ],
        email: "jinyao.ma@outlook.com",
        fallbackImage: "/assets/img/avatar.png",
        noGlobalSocialShare: true
      }
    },

    plugins: [
      [
        // https://github.com/busyrat/vuepress-plugins/tree/master/packages/vue-demo
        "vue-demo"
      ]
    ],

    markdown: {
      lineNumbers: true,
      extractHeaders: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  };
};
