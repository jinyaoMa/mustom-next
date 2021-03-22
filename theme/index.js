const util = require("./scripts/node/util");

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

  const extendPageData = ($page) => {
    const {
      _filePath, // file's absolute path
      _computed, // access the client global computed mixins at build time, e.g _computed.$localePath.
      _content, // file's raw content string
      _strippedContent, // file's content string without frontmatter
      key, // page's unique hash key
      frontmatter, // page's frontmatter object
      regularPath, // current page's default link (follow the file hierarchy)
      path // current page's real link (use regularPath when permalink does not exist)
    } = $page;

    // word count & read time
    if (_strippedContent) {
      const zh = (_strippedContent.match(/[\u4E00-\u9FA5]/g) || []).length;
      const en = (
        _strippedContent
          .replace(/[\u4E00-\u9FA5]/g, "")
          .match(
            /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g
          ) || []
      ).length;
      const min2read = zh / 150 + en / 100;
      frontmatter.wordcount = zh + en;
      $page.frontmatter.min2read = min2read < 1 ? "1" : parseInt(min2read, 10);
    } else {
      frontmatter.wordcount = 0;
      frontmatter.min2read = 0;
    }

    // for classifying docs
    Object.keys(locales)
      .sort((a, b) => {
        return a.localeCompare(b);
      })
      .forEach((prefix) => {
        // split by locale
        if (regularPath.startsWith(prefix)) {
          frontmatter._locale = prefix;
        }
        // pick out auto-generated page
        if (
          regularPath.startsWith(prefix + "categories/") ||
          regularPath.startsWith(prefix + "tags/")
        ) {
          frontmatter._auto_generated = true;
        }
      });
  };

  return {
    name: "@jinyaoma/mustom-next/theme",
    plugins,
    extendPageData
  };
};
