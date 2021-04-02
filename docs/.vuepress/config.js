module.exports = (context) => {
  return {
    theme: require.resolve("../../theme"),

    locales: require("./locales"),

    themeConfig: {
      wallpapers: ["linear-gradient(120deg, #ff3300, #cc66ff, #00ccff)"],
      live2dHelper: {
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
            },
            react: {
              opacity: 1
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
        hostname: "https://ma-jinyao.cn"
      },
      comment: {
        enable: true,
        // https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#comment
        service: "vssue",
        owner: "jinyaoMa",
        repo: "mustom-next",
        prefix: "[Site Comment]: ",
        labels: [":point_right:Site_Comment:point_left:"],
        clientId: "2da9973c24e3d7e3430a",
        clientSecret: "050434610d8f2b9a907fdb1f9b97cb672b2a7b8a",
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

    markdown: {
      lineNumbers: true,
      extractHeaders: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  };
};
