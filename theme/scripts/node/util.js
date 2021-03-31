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
            .replace(/\{\s*pageNumber\s*\}/gi, pageNumber)
            .replace(/\{\s*title\s*\}/gi, locales[locale].archive);
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
      keys: [prefix + "categories"],
      path: locale + "categories/",
      title: locales[locale].categories,
      layout: "Archive",
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
            .replace(/\{\s*pageNumber\s*\}/gi, pageNumber)
            .replace(/\{\s*key\s*\}/gi, key)
            .replace(/\{\s*title\s*\}/gi, locales[locale].categories);
        }
      }
    });
    result.push({
      id: lang + "_tag",
      keys: [prefix + "tags"],
      path: locale + "tags/",
      title: locales[locale].tags,
      layout: "Archive",
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
            .replace(/\{\s*pageNumber\s*\}/gi, pageNumber)
            .replace(/\{\s*key\s*\}/gi, key)
            .replace(/\{\s*title\s*\}/gi, locales[locale].tags);
        }
      }
    });
  });
  return result;
}

function postState(locales, regularPath) {
  let isPost = false;
  let localePath = "/";
  if (typeof regularPath === "string") {
    Object.keys(locales)
      .sort((a, b) => {
        return a.localeCompare(b);
      })
      .forEach((locale) => {
        if (regularPath.startsWith(locale)) {
          localePath = locale;
        }
      });
    if (regularPath.startsWith(localePath + "_posts/")) {
      isPost = true;
    }
  }
  return {
    isPost,
    localePath
  };
}

function getSitemap(themeConfig) {
  if (typeof themeConfig.sitemap === "object" && themeConfig.sitemap.enable) {
    return themeConfig.sitemap;
  }
  return null;
}

function getComment(themeConfig) {
  if (typeof themeConfig.comment === "object" && themeConfig.comment.enable) {
    return themeConfig.comment;
  }
  return null;
}

function getSocialShare(themeConfig) {
  if (
    typeof themeConfig.socialShare === "object" &&
    themeConfig.socialShare.enable
  ) {
    return themeConfig.socialShare;
  }
  return null;
}

function getPangu(themeConfig) {
  if (typeof themeConfig.pangu === "object" && themeConfig.pangu.enable) {
    return themeConfig.pangu;
  }
  return null;
}

function generateDocsStructure(sourceDir) {
  const fs = require("fs");
  const path = require("path");
  const indexFileRegex = /(readme|index)\.(md|vue)$/i;
  const ignoreFolderRegex = /(\.vuepress|_posts)/;

  function walk(dir) {
    var children = [];
    fs.readdirSync(dir).forEach(function(filename) {
      var _path = path.join(dir, filename);
      var stat = fs.statSync(_path);
      if (stat && stat.isDirectory()) {
        if (!ignoreFolderRegex.test(_path)) {
          children = children.concat(walk(_path));
        }
      } else {
        children.push(_path);
      }
    });
    return children;
  }

  return walk(sourceDir);
}

function getLive2d(themeConfig) {
  if (
    typeof themeConfig.live2dHelper === "object" &&
    themeConfig.live2dHelper.enable
  ) {
    return themeConfig.live2dHelper;
  }
  return null;
}

module.exports = {
  getDirectoriesByLocales,
  getfrontmattersByLocales,
  postState,
  getSitemap,
  getComment,
  getSocialShare,
  getPangu,
  generateDocsStructure,
  getLive2d
};
