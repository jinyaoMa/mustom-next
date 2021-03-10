<template>
  <div id="GlobalLayout">
    <component :is="layout" :key="layout" />
    <mn-container height="100vh" width="100vw">
      <mn-header height="80px">
        <Header></Header>
      </mn-header>
      <mn-container
        height="calc(100vh - 80px)"
        scrollbar
        @scroll="handleContainerScroll"
        ref="scrollableContainer"
      >
        <mn-container
          :horizontal="isLeftFixed"
          gap="80px"
          :enable-gap="hasBodyGap"
          :style="{
            maxWidth: '1680px',
          }"
        >
          <mn-aside
            :width="isLeftFixed ? asideWidth : 'auto'"
            :gap="isLeftFixed ? 'auto' : gap"
          >
            <mn-block
              :fixed="isLeftFixed"
              height="calc(100vh - 80px)"
              width="280px"
              ref="blockLeft"
            >
              <div style="height: 120vh; background: yellow">
                aside1
                <div style="margin-top: 100vh">1</div>
              </div>
            </mn-block>
          </mn-aside>
          <mn-container :horizontal="isRightFixed">
            <mn-container
              :style="{
                minHeight: 'calc(100vh - 80px)',
              }"
            >
              <mn-main
                :gap="gap"
                :left-gap="isLeftFixed"
                :right-gap="isRightFixed"
              >
                <div style="height: 150vh; background: lightcoral">main</div>
              </mn-main>
              <mn-footer
                v-if="isLeftFixed && isRightFixed"
                :gap="gap"
                left-gap
                right-gap
              >
                <div style="background: lightblue">footer</div>
              </mn-footer>
            </mn-container>
            <mn-aside
              :width="isRightFixed ? asideWidth : 'auto'"
              :gap="isRightFixed ? 'auto' : gap"
              :left-gap="!isRightFixed && isLeftFixed"
            >
              <mn-block
                :fixed="isRightFixed"
                height="calc(100vh - 80px)"
                width="280px"
                ref="blockRight"
              >
                <div style="height: 150vh; background: lightgreen">
                  aside2
                  <div style="margin-top: 100vh">2</div>
                </div>
              </mn-block>
            </mn-aside>
            <mn-footer v-if="!isRightFixed" :gap="gap" :left-gap="isLeftFixed">
              <div style="background: lightblue">footer</div>
            </mn-footer>
          </mn-container>
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
    handleContainerScroll(offset, isHorizontal, delta) {
      if (!isHorizontal) {
        this.$refs.blockLeft.scrollTopDelta(delta);
        this.$refs.blockRight.scrollTopDelta(delta);
      }
    },
    resizeUpdate() {
      if (window.innerWidth > 1280) {
        this.hasBodyGap = true;
        this.isLeftFixed = true;
        this.isRightFixed = true;
      } else if (window.innerWidth > 1024) {
        this.hasBodyGap = true;
        this.isLeftFixed = true;
        this.isRightFixed = false;
      } else if (window.innerWidth > 768) {
        this.hasBodyGap = true;
        this.isLeftFixed = false;
        this.isRightFixed = false;
      } else {
        this.hasBodyGap = false;
        this.isLeftFixed = false;
        this.isRightFixed = false;
      }
    },
  },
  data() {
    return {
      isLeftFixed: true,
      isRightFixed: true,
      hasBodyGap: true,
      asideWidth: "280px",
      gap: "32px",
    };
  },
  mounted() {
    console.log(this);
    window.addEventListener("resize", this.resizeUpdate);
    this.resizeUpdate();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeUpdate);
  },
};
</script>