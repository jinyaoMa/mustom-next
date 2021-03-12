export default (Vuex) => {
  return {
    computed: {
      $sitePostsTotal() {
        return this.$site.pages.filter((p) => p.id === "post").length;
      },
      $sitePosts() {
        return this.$site.pages
          .filter((p) => p.id === "post")
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
        return this.$category.length;
      },
      $siteCategoriesForCloud() {
        const result = [];
        const setCate = (children, key, item) => {
          if (typeof key === "string") {
            children.push({
              text: key,
              url: item.path,
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
        Object.values(this.$category.map)
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
        return this.$tag.length;
      },
      $siteTagsForCloud() {
        const result = [];
        const setCate = (children, key, item) => {
          if (typeof key === "string") {
            children.push({
              text: key,
              url: item.path,
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
        Object.values(this.$tag.map)
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
