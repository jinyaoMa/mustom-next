<template>
  <div id="GlobalLayout">
    <component :is="layout" :key="layout" />
    <mn-container height="100vh" width="100vw">
      <mn-header :height="hasBodyGap ? '80px' : '64px'" style="z-index: 1">
        <Header></Header>
      </mn-header>
      <mn-container
        :height="hasBodyGap ? 'calc(100vh - 80px)' : 'calc(100vh - 64px)'"
        scrollbar
        @scroll="handleContainerScroll"
        ref="scrollableContainer"
        :style="{
          background: '', //'linear-gradient(120deg,#f30,#c6f,#0cf)',
        }"
      >
        <mn-container
          :horizontal="isLeftFixed"
          :gap="hasBodyGap ? '80px' : '4px'"
          enable-gap
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
              <AsideLeft></AsideLeft>
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
              </mn-main>
              <mn-footer
                v-if="isLeftFixed && isRightFixed"
                :gap="gap"
                left-gap
                right-gap
              >
                <Footer></Footer>
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
                <AsideRight></AsideRight>
              </mn-block>
            </mn-aside>
            <mn-footer v-if="!isRightFixed" :gap="gap" :left-gap="isLeftFixed">
              <Footer></Footer>
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
      if (window.innerWidth > 1440) {
        this.hasBodyGap = true;
        this.isLeftFixed = true;
        this.isRightFixed = true;
      } else if (window.innerWidth > 1152) {
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