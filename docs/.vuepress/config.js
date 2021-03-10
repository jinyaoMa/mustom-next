const pkg = require("../../package.json");

function matchLocale(options) {
  return ({
    sitenamePrepend = "",
    sitename = pkg.name,
    sitenameAppend = ""
  } = options);
}

module.exports = (context) => {
  console.log(context);

  const zhLocale = matchLocale({
    sitenamePrepend: "",
    sitename: "耀 の ",
    sitenameAppend: "部落阁"
  });

  const enLocale = matchLocale({
    sitenamePrepend: "",
    sitename: "Mark's ",
    sitenameAppend: "bloG"
  });

  return {
    theme: require.resolve("../../theme"),

    locales: {
      "/": {
        lang: "zh-CN",
        title:
          zhLocale.sitenamePrepend +
          zhLocale.sitename +
          zhLocale.sitenameAppend,
        ...zhLocale
      },
      "/en/": {
        lang: "en-US",
        title:
          enLocale.sitenamePrepend +
          enLocale.sitename +
          enLocale.sitenameAppend,
        ...enLocale
      }
    }
  };
};
