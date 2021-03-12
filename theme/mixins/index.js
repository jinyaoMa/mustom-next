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
      $siteTagsTotal() {
        return this.$tag.length;
      }
    }
  };
};
