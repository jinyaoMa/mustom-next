export default (Vuex) => {
  return {
    computed: {
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
      }
    }
  };
};
