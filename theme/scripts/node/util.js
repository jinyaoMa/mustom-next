function getDirectoriesByLocales(locales = {}) {
  const result = [];
  Object.keys(locales).forEach((locale) => {
    result.push({
      id: locale.replace(/\//g, "") + "_post",
      dirname: locale.replace(/\//, "") + "_posts",
      path: locale + "posts/",
      title: locales[locale].archive,
      layout: "Archive",
      itemLayout: "Post",
      itemPermalink: "posts/:slug",
      frontmatter: {
        _auto_generated: true
      }
    });
  });
  return result;
}

function getfrontmattersByLocales(locales = {}) {
  const result = [];
  Object.keys(locales).forEach((locale) => {
    const lang = locale.replace(/\//g, "");
    const prefix = lang === "" ? lang : lang + "_";
    result.push({
      id: lang + "_category",
      keys: [prefix + "category", prefix + "categories"],
      path: locale + "categories/",
      title: locales[locale].categories,
      scopeLayout: "Archive"
    });
    result.push({
      id: lang + "_tag",
      keys: [prefix + "tag", prefix + "tags"],
      path: locale + "tags/",
      title: locales[locale].tags,
      scopeLayout: "Archive"
    });
  });
  return result;
}

module.exports = {
  getDirectoriesByLocales,
  getfrontmattersByLocales
};
