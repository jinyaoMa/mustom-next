const util = require("./scripts/util");

module.exports = (_, context) => {
  const { themeConfig, siteConfig, isProd, sourceDir } = context;

  const locales = siteConfig.locales;

  const plugins = [
    [
      // https://vuepress-plugin-blog.ulivz.com/
      "@vuepress/blog",
      {
        directories: util.getDirectoriesByLocales(locales),
        frontmatters: util.getfrontmattersByLocales(locales)
      }
    ]
  ];

  return {
    name: "@jinyaoma/mustom-next/theme",
    plugins
  };
};
