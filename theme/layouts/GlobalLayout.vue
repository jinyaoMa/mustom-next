<template>
  <div id="GlobalLayout">
    <component :is="layout" :key="layout" />
    <mn-container height="100vh" width="100vw">
      <mn-header height="80px">
        <span>header</span>
      </mn-header>
      <mn-container
        height="calc(100vh - 80px)"
        scrollbar
        @scroll="handleContainerScroll"
      >
        <mn-container
          horizontal
          :style="{
            padding: '0 80px',
          }"
        >
          <mn-aside width="320px">
            <span>aside1</span>
            <div>test sticky</div>
          </mn-aside>
          <mn-container
            :style="{
              minHeight: 'calc(100vh - 80px)',
            }"
          >
            <mn-main>
              <div style="height: 150vh">main</div>
            </mn-main>
            <mn-footer>
              <span>footer</span>
            </mn-footer>
          </mn-container>
          <mn-aside width="320px">
            <span>aside2</span>
          </mn-aside>
        </mn-container>
      </mn-container>
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
  methods: {
    handleContainerScroll(offset, isHorizontal) {
      if (isHorizontal) {
      }
    },
  },
};
</script>