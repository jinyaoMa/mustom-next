export default (Vuex) => {
  return {
    computed: {
      $siteWordsTotal() {
        let result = 0;
        this.$site.pages.forEach((page) => {
          result += page.frontmatter.wordcount;
        });
        if (result >= 1000) {
          result = Math.round(result / 100) / 10 + "k";
        }
        return result;
      },
      $siteDocsTotal() {
        return this.$site.pages.filter(
          (p) =>
            !p.id &&
            p.frontmatter._locale === this.$localePath &&
            !p.frontmatter._auto_generated
        ).length;
      },
      $siteDocs() {
        return this.$site.pages
          .filter(
            (p) =>
              !p.id &&
              p.frontmatter._locale === this.$localePath &&
              !p.frontmatter._auto_generated
          )
          .sort((a, b) => {
            if (a.frontmatter.updated < b.frontmatter.updated) {
              return 1;
            } else if (a.frontmatter.updated > b.frontmatter.updated) {
              return -1;
            }
            return 0;
          });
      },
      $sitePostsTotal() {
        return this.$site.pages.filter(
          (p) => p.id === this.$localePath.replace(/\//g, "") + "_post"
        ).length;
      },
      $sitePosts() {
        return this.$site.pages
          .filter((p) => p.id === this.$localePath.replace(/\//g, "") + "_post")
          .sort((a, b) => {
            if (a.frontmatter.updated < b.frontmatter.updated) {
              return 1;
            } else if (a.frontmatter.updated > b.frontmatter.updated) {
              return -1;
            }
            return 0;
          });
      },
      $siteCategoriesTotal() {
        const target = `$${this.$localePath.replace(/\//g, "")}_category`;
        return this[target].length;
      },
      $siteCategoriesForCloud() {
        const result = [];
        const setCate = (children, key, item) => {
          if (typeof key === "string") {
            children.push({
              text: key,
              url: encodeURI(item.path),
              count: item.pages.length,
              children: []
            });
          } else if (key instanceof Array) {
            const target = children.filter((child) => child.text === key[0]);
            if (target.length === 1) {
              setCate(target[0].children, key[1], item);
            }
          }
        };
        const target = `$${this.$localePath.replace(/\//g, "")}_category`;
        Object.values(this[target].map)
          .sort((a, b) => {
            const keyA = a.key instanceof Array ? a.key.join() : a.key;
            const keyB = b.key instanceof Array ? b.key.join() : b.key;
            return keyA.localeCompare(keyB);
          })
          .forEach((item) => {
            setCate(result, item.key, item);
          });
        return result;
      },
      $siteTagsTotal() {
        const target = `$${this.$localePath.replace(/\//g, "")}_tag`;
        return this[target].length;
      },
      $siteTagsForCloud() {
        const result = [];
        const setCate = (children, key, item) => {
          if (typeof key === "string") {
            children.push({
              text: key,
              url: encodeURI(item.path),
              count: item.pages.length,
              children: []
            });
          } else if (key instanceof Array) {
            const target = children.filter((child) => child.text === key[0]);
            if (target.length === 1) {
              setCate(target[0].children, key[1], item);
            }
          }
        };
        const target = `$${this.$localePath.replace(/\//g, "")}_tag`;
        Object.values(this[target].map)
          .sort((a, b) => {
            const keyA = a.key instanceof Array ? a.key.join() : a.key;
            const keyB = b.key instanceof Array ? b.key.join() : b.key;
            return keyA.localeCompare(keyB);
          })
          .forEach((item) => {
            setCate(result, item.key, item);
          });
        return result;
      }
    }
  };
};
