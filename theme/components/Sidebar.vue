<template>
  <mn-hanger
    class="Sidebar"
    :caption="$localeConfig.sidebar.caption"
    :icon="$localeConfig.sidebar.icon"
    type="primary"
    plain
    round
    shadow
  >
    <div class="inner">
      <div v-for="(doc, i) in docList" :key="i" class="page-link">
        <router-link
          :to="doc.path"
          v-html="doc.title || doc.frontmatter.title"
          :class="{
            isRoot: isRoot(doc.path),
            isActive: isActive(doc.path),
          }"
        ></router-link>
        <ul
          v-if="hasHeaders && isActive(doc.path)"
          class="toc"
          :class="{
            isRoot: isRoot(doc.path),
          }"
        >
          <li v-for="(item, i) in $page.headers" :key="i">
            <router-link
              :to="`${$page.path}#${item.slug}`"
              v-html="item.title"
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    docList() {
      return this.$siteDocsList.filter((doc) => {
        return doc.path.startsWith(this.$docRoot);
      });
    },
    hasHeaders() {
      return (
        this.$page.headers instanceof Array && this.$page.headers.length > 0
      );
    },
  },
  methods: {
    isRoot(path) {
      return !path.endsWith(".html");
    },
    isActive(path) {
      return path === this.$route.path;
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="stylus" scoped>
.inner
  margin 12px 0

.page-link
  font-size 15px
  > a
    display block
    padding-left 40px
    line-height 2
    color var(--color-text-primary)
    transition 0.2s
    &.isRoot
      padding-left 20px
      font-weight bold
      font-size 16px
    &.isActive
      padding-left 35px
      font-weight bold
      &.isRoot
        padding-left 15px
      border-left 5px solid var(--color-primary-0)
      color var(--color-primary-0)
    &:hover, &:focus
      color var(--color-primary-0)
      background-color var(--color-primary-9)
  .toc
    list-style none
    padding-left 40px
    margin 0
    &.isRoot
      padding-left 20px
    a
      display block
      padding-left 20px
      line-height 2
      color var(--color-text-primary)
      transition 0.2s
      &.router-link-exact-active, &:hover, &:focus
        color var(--color-primary-0)
</style>