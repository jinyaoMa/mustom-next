<template>
  <mn-hanger
    id="Archive"
    :caption="$localeConfig.content.caption"
    :icon="$localeConfig.content.icon"
    type="primary"
    plain
    round
    shadow
    disableSwitch
  >
    <div class="inner">
      <div v-for="(post, i) in posts" :key="i">
        <mn-post-card
          :post-data="post"
          :reverse="i % 2 === 1"
          horizontal
          no-border
        ></mn-post-card>
        <div class="divider"></div>
      </div>
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Archive",
  computed: {
    posts() {
      return this.$pagination.pages.map((post) => {
        const categories = [];
        post.frontmatter.categories.forEach((cates) => {
          this.setCate(categories, this.$siteCategories.map, cates);
        });
        return {
          date: post.frontmatter.date.substr(0, 10),
          updated: post.frontmatter.updated.substr(0, 10),
          excerpt: post.excerpt,
          categories: categories,
          cover: post.frontmatter.cover,
          title: post.title,
          path: post.path,
        };
      });
    },
  },
  methods: {
    setCate(cates, map, key, parent = "") {
      if (typeof key === "string") {
        cates.push({
          name: key,
          path: map[parent === "" ? key : `${parent},${key}`].path,
        });
      } else if (key instanceof Array && key.length > 0) {
        const _parent = parent === "" ? key[0] : `${parent},${key[0]}`;
        cates.push({
          name: key[0],
          path: map[_parent].path,
        });
        this.setCate(cates, map, key[1], _parent);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.inner
  padding 20px
  .mn-post-card
    margin-bottom 20px

#Archive
  margin-bottom 18px

.divider
  display block
  clear both
  margin 20px -20px
  border-top 4px dashed var(--color-primary-9)
</style>