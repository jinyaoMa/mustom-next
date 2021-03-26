module.exports = (context) => {
  return {
    theme: require.resolve("../../theme"),

    locales: require("./locales"),

    themeConfig: {
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
