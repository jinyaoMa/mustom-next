const util = require("./scripts/node/util");
const pangu = require("./scripts/node/pangu");

module.exports = (_, context) => {
  const { themeConfig, siteConfig, isProd, sourceDir } = context;

  const locales = siteConfig.locales;

  const panguOptions = util.getPangu(themeConfig);

  if (siteConfig.markdown) {
    if (typeof siteConfig.markdown.anchor === "undefined") {
      siteConfig.markdown.anchor = {};
    }
    Object.assign(siteConfig.markdown.anchor, {
      permalink: !panguOptions
    });
  } else {
    siteConfig.markdown = {
      anchor: {
        permalink: !panguOptions
      }
    };
  }

  const plugins = [
    [
      // https://vuepress-plugin-blog.ulivz.com/
      "@vuepress/blog",
      {
        directories: util.getDirectoriesByLocales(locales),
        frontmatters: util.getfrontmattersByLocales(locales),
        sitemap: util.getSitemap(themeConfig),
        comment: util.getComment(themeConfig)
      }
    ],
    [
      // https://vuepress.vuejs.org/plugin/official/plugin-nprogress.html#install
      "@vuepress/nprogress"
    ],
    [
      // https://vuepress.github.io/zh/plugins/mathjax/
      "vuepress-plugin-mathjax"
    ],
    [
      // https://vuepress.vuejs.org/plugin/official/plugin-last-updated.html
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      "container",
      {
        type: "tip",
        defaultTitle: {
          "/": "提示",
          "/en/": "TIP"
        }
      }
    ],
    [
      "container",
      {
        type: "warning",
        defaultTitle: {
          "/": "注意",
          "/en/": "WARNING"
        }
      }
    ],
    [
      "container",
      {
        type: "danger",
        defaultTitle: {
          "/": "警告",
          "/en/": "WARNING"
        }
      }
    ],
    [
      "container",
      {
        type: "details",
        before: (info) =>
          `<details class="custom-block details">${
            info ? `<summary>${info}</summary>` : ""
          }\n`,
        after: () => "</details>\n"
      }
    ]
  ];

  const socialShare = util.getSocialShare(themeConfig);
  if (socialShare) {
    plugins.push([
      // https://sns.goyfe.com/guide/
      "vuepress-plugin-social-share",
      socialShare
    ]);
  }

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

    // pangu
    if (panguOptions && _strippedContent) {
      if ($page.title) {
        $page.title = pangu($page.title);
      }
      if (frontmatter.title) {
        frontmatter.title = pangu(frontmatter.title);
      }
      if ($page.excerpt) {
        $page.excerpt = pangu($page.excerpt.replace(/<img[^>]*>/g, ""));
      }
      if ($page.headers instanceof Array) {
        $page.headers.forEach((header) => {
          header.title = pangu(header.title);
          header.slug = pangu(header.slug);
        });
      }
    }

    // change _posts link
    const { isPost, localePath } = util.postState(locales, regularPath);
    if (isPost) {
      frontmatter.permalink = `/posts/${key.replace("v-", "")}/`;
    }

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
      frontmatter._wordcount = zh + en;
      frontmatter._min2read = min2read < 1 ? "1" : parseInt(min2read, 10);
    } else {
      frontmatter._wordcount = 0;
      frontmatter._min2read = 0;
    }
    if (typeof frontmatter.wordcount === "undefined") {
      frontmatter.wordcount = frontmatter._wordcount;
    }
    if (typeof frontmatter.min2read === "undefined") {
      frontmatter.min2read = frontmatter._min2read;
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

    // extract cover
    if (_strippedContent && typeof frontmatter.cover === "undefined") {
      const matches =
        _strippedContent.match(/\!\[[^\]]*\]\(\s*([^\)]+)\s*\)/) || [];
      if (matches.length > 1) {
        frontmatter.cover = matches[1].replace(/\s+['"][^'"]+['"]$/, "");
      } else {
        frontmatter.cover = false;
      }
    }

    // set frontmatter default values
    if (typeof frontmatter.comment === "undefined") {
      frontmatter.comment = true;
    }
    if (typeof frontmatter.share === "undefined") {
      frontmatter.share = true;
    }
  };

  const extendMarkdown = (md) => {
    md.set({ breaks: true });
    md.use(require("markdown-it-footnote"));

    if (panguOptions) {
      // override render to allow pangu
      const _render = md.render;
      md.render = function(...args) {
        const html = _render.call(md, ...args);
        return pangu(html);
      };
    }
  };

  return {
    name: "@jinyaoma/mustom-next/theme",
    plugins,
    extendPageData,
    extendMarkdown
  };
};
