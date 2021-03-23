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
      },
      pagination: {
        sorter: (prev, next) => {
          const dayjs = require("dayjs");
          const prevTime = dayjs(prev.frontmatter.updated);
          const nextTime = dayjs(next.frontmatter.updated);
          return prevTime - nextTime > 0 ? -1 : 1;
        },
        prevText: locales[locale].pagination.prev.page,
        nextText: locales[locale].pagination.next.page,
        lengthPerPage: locales[locale].pagination.lengthPerPage,
        layout: "Archive",
        getPaginationPageTitle(pageNumber) {
          return locales[locale].pagination.title.directory
            .replace("?", pageNumber)
            .replace("?", locales[locale].archive);
        }
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
      scopeLayout: "Archive",
      pagination: {
        sorter: (prev, next) => {
          const dayjs = require("dayjs");
          const prevTime = dayjs(prev.frontmatter.updated);
          const nextTime = dayjs(next.frontmatter.updated);
          return prevTime - nextTime > 0 ? -1 : 1;
        },
        prevText: locales[locale].pagination.prev.page,
        nextText: locales[locale].pagination.next.page,
        lengthPerPage: locales[locale].pagination.lengthPerPage,
        layout: "Archive",
        getPaginationPageTitle(pageNumber, key) {
          return locales[locale].pagination.title.frontmatter
            .replace("?", pageNumber)
            .replace("?", key)
            .replace("?", locales[locale].categories);
        }
      }
    });
    result.push({
      id: lang + "_tag",
      keys: [prefix + "tag", prefix + "tags"],
      path: locale + "tags/",
      title: locales[locale].tags,
      scopeLayout: "Archive",
      pagination: {
        sorter: (prev, next) => {
          const dayjs = require("dayjs");
          const prevTime = dayjs(prev.frontmatter.updated);
          const nextTime = dayjs(next.frontmatter.updated);
          return prevTime - nextTime > 0 ? -1 : 1;
        },
        prevText: locales[locale].pagination.prev.page,
        nextText: locales[locale].pagination.next.page,
        lengthPerPage: locales[locale].pagination.lengthPerPage,
        layout: "Archive",
        getPaginationPageTitle(pageNumber, key) {
          return locales[locale].pagination.title.frontmatter
            .replace("?", pageNumber)
            .replace("?", key)
            .replace("?", locales[locale].tags);
        }
      }
    });
  });
  return result;
}

module.exports = {
  getDirectoriesByLocales,
  getfrontmattersByLocales
};
