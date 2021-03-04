<template>
  <div id="GlobalLayout">
    <component :is="layout" :key="layout" />
    <mn-container height="100vh" width="100vw" disable-scrollbar>
      <mn-header></mn-header>
      <mn-container horizontal></mn-container>
    </mn-container>
  </div>
</template>

<script>
export default {
  name: "GlobalLayout",
  computed: {
    layout() {
      if (this.$page.path) {
        const _layout = this.$frontmatter.layout;
        if (
          _layout &&
          (this.$vuepress.getLayoutAsyncComponent(_layout) ||
            this.$vuepress.getVueComponent(_layout))
        ) {
          return _layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>

<style lang="stylus" scoped></style>