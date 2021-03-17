function getDirectoriesByLocales(locales = {}) {
  const result = [];
  Object.keys(locales).forEach((locale) => {
    result.push({
      id: "post",
      dirname: "_posts",
      path: locale + "posts/",
      title: locales[locale].archive,
      layout: "Archive",
      itemLayout: "Post"
    });
  });
  return result;
}

function getfrontmattersByLocales(locales = {}) {
  const result = [];
  Object.keys(locales).forEach((locale) => {
    result.push({
      id: locale.replace(/\//g, "") + "_category",
      keys: ["category", "categories"],
      path: locale + "categories/",
      title: locales[locale].categories,
      scopeLayout: "Archive"
    });
    result.push({
      id: locale.replace(/\//g, "") + "_tag",
      keys: ["tag", "tags"],
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
