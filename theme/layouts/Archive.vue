<template>
  <mn-hanger
    id="Archive"
    :caption="$localeConfig.content.caption + ' - ' + $page.frontmatter.title"
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
          :icons="[
            $localeConfig.meta.date.icon,
            $localeConfig.meta.updated.icon,
            $localeConfig.meta.categories.icon,
            $localeConfig.meta.more.icon,
          ]"
          :tooltips="[
            $localeConfig.meta.date.text,
            $localeConfig.meta.updated.text,
            $localeConfig.meta.categories.text,
          ]"
          :textMore="$localeConfig.meta.more.text"
          horizontal
          no-border
          reverse
        ></mn-post-card>
        <div class="divider"></div>
      </div>
      <Pagination class="pagination"></Pagination>
    </div>
  </mn-hanger>
</template>

<script>
import Pagination from "@vuepress/plugin-blog/lib/client/components/Pagination";

export default {
  name: "Archive",
  components: {
    Pagination,
  },
  computed: {
    posts() {
      return this.$pagination.pages.map((post) => {
        const categories = [];
        if (post.frontmatter.categories) {
          post.frontmatter.categories.forEach((cates) => {
            this.setCate(categories, this.$siteCategories.map, cates);
          });
        }
        return {
          date: new Date(post.frontmatter.date).toLocaleDateString(),
          updated: new Date(post.frontmatter.updated).toLocaleDateString(),
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
  display flex
  flex-direction column
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

>>> .pagination
  margin 0 auto
  li:not(.disabled) > a, li:not(.disabled) > span
    color var(--color-primary-0)
    &:hover, &:focus
      background-color var(--color-border-extra-light)
  > li.active
    > a, > span
      color var(--color-white)
      background-color var(--color-primary-1)
      &:hover, &:focus
        background-color var(--color-primary-1)
        border-color var(--color-primary-1)

>>> .mn-post-card-except
  img
    display none
</style>