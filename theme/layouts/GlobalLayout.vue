<template>
  <div id="GlobalLayout">
    <component v-if="layout === 'NotFound'" :is="layout" :key="layout" />
    <mn-container v-else height="100vh" width="100vw">
      <mn-header :height="headerButtonWidth" style="z-index: 1">
        <Header></Header>
      </mn-header>
      <mn-container
        :height="`calc(100vh - ${headerButtonWidth})`"
        scrollbar
        @scroll="handleContainerScroll"
        ref="scrollableContainer"
        class="scrollableContainer"
      >
        <mn-container :horizontal="isLeftFixed" :gap="bodyGap" enable-gap>
          <mn-aside
            :width="isLeftFixed ? asideWidth : 'auto'"
            :gap="isLeftFixed ? 'auto' : gap"
          >
            <mn-block
              :fixed="isLeftFixed"
              :height="`calc(100vh - ${headerButtonWidth})`"
              :width="asideWidth"
              ref="blockLeft"
            >
              <AsideLeft
                :layout="layout"
                :show-brand="isLeftFixed"
                :show-sidebar="!isRightFixed"
              ></AsideLeft>
            </mn-block>
          </mn-aside>
          <mn-container :horizontal="isRightFixed">
            <mn-container
              :style="{
                minHeight: `calc(100vh - ${headerButtonWidth})`,
                width: centerWidth,
              }"
            >
              <mn-main
                :gap="gap"
                :left-gap="isLeftFixed"
                :right-gap="isRightFixed"
                :class="{
                  isRightLeftNotFixed: !isRightFixed && !isLeftFixed,
                }"
              >
                <transition name="fade" mode="out-in" appear>
                  <component :is="layout" :key="layout" ref="page" />
                </transition>
                <transition name="fade" mode="out-in" appear>
                  <Comment
                    v-if="
                      $themeConfig.comment &&
                      $themeConfig.comment.enable &&
                      $frontmatter.comment
                    "
                  ></Comment>
                </transition>
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
              :width="isRightFixed ? asideWidth : notFixedAsideRightWidth"
              :gap="isRightFixed ? 'auto' : gap"
              :left-gap="!isRightFixed && isLeftFixed"
            >
              <mn-block
                :fixed="isRightFixed"
                :height="`calc(100vh - ${headerButtonWidth})`"
                :width="asideWidth"
                ref="blockRight"
              >
                <AsideRight
                  :class="{
                    isRightNotFixed: !isRightFixed,
                  }"
                  :layout="layout"
                  :show-brand="!isLeftFixed"
                  :show-sidebar="isRightFixed"
                ></AsideRight>
              </mn-block>
            </mn-aside>
            <mn-footer
              v-if="!isRightFixed"
              :gap="gap"
              :left-gap="isLeftFixed"
              class="endFooter"
            >
              <Footer></Footer>
            </mn-footer>
          </mn-container>
        </mn-container>
      </mn-container>
      <mn-going-to
        gap="15px"
        :width="bodyGap"
        :icons="[$localeConfig.icons.arrow.up, $localeConfig.icons.arrow.down]"
        @go-top="handleGoTop"
        @go-bottom="handleGoBottom"
      ></mn-going-to>
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
    headerButtonWidth() {
      return this.hasBodyGap ? "80px" : "64px";
    },
    bodyGap() {
      return this.hasBodyGap ? "80px" : "4px";
    },
    notFixedAsideRightWidth() {
      if (!this.isRightFixed && this.isLeftFixed) {
        return `calc(100vw - ${this.bodyGap} - ${this.bodyGap} - ${this.asideWidth} - ${this.gap})`; // 100vw - bodyGap * 2 - asideWidth - gap
      } else {
        return this.centerWidth;
      }
    },
  },
  methods: {
    handleGoTop() {
      this.$refs.scrollableContainer.scroll2Top();
    },
    handleGoBottom() {
      this.$refs.scrollableContainer.scroll2Bottom();
    },
    handleContainerScroll(offset, isHorizontal, delta) {
      if (!isHorizontal) {
        this.$refs.blockLeft.scrollTopDelta(delta);
        this.$refs.blockRight.scrollTopDelta(delta);

        if (this.layout === "Post" || this.layout === "Layout") {
          window.clearTimeout(this.scrollWaiter);
          this.scrollWaiter = window.setTimeout(() => {
            let notDetected = true;
            const targets = this.$refs.page.$el.querySelectorAll(
              "h1, h2, h3, h4, h5, h6"
            );
            const _run = (simple = false) => {
              if (simple) {
                let index = -1;
                for (let i = 0; i < targets.length; i++) {
                  const el = targets[i];
                  if (offset > el.offsetTop) {
                    index = i;
                  }
                }
                if (index === -1) {
                  if (targets.length > 0) {
                    index = 0;
                  } else {
                    return;
                  }
                }
                const newHash = "#" + (targets[index].id || "");
                if (newHash !== this.$route.hash) {
                  this.$vuepress.$set("disableScrollBehavior", true);
                  this.$router.replace(newHash, () => {
                    this.$nextTick(() => {
                      this.$vuepress.$set("disableScrollBehavior", false);
                    });
                  });
                }
              } else {
                for (let i = 0; i < targets.length; i++) {
                  const el = targets[i];
                  if (
                    el.offsetTop >= offset &&
                    el.offsetTop < offset + window.innerHeight - 80 // 80px for header
                  ) {
                    const newHash = "#" + (el.id || "");
                    if (newHash !== this.$route.hash) {
                      this.$vuepress.$set("disableScrollBehavior", true);
                      this.$router.replace(newHash, () => {
                        this.$nextTick(() => {
                          this.$vuepress.$set("disableScrollBehavior", false);
                        });
                      });
                    }
                    notDetected = false;
                    break;
                  }
                }
              }
            };
            _run();
            if (notDetected) {
              _run(true);
            }
          }, 1200);
        }
      }
    },
    resizeUpdate() {
      if (window.innerWidth > 1366) {
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

      if (this.isRightFixed) {
        this.centerWidth = `calc(100vw - ${this.bodyGap} - ${this.bodyGap} - ${this.asideWidth} - ${this.asideWidth})`; // 100vw - bodyGap * 2 - asideWidth * 2
      } else if (this.isLeftFixed) {
        this.centerWidth = `calc(100vw - ${this.bodyGap} - ${this.bodyGap} - ${this.asideWidth})`; // 100vw - bodyGap * 2 - asideWidth
      } else {
        this.centerWidth = `calc(100vw - ${this.bodyGap} - ${this.bodyGap})`; // 100vw - bodyGap * 2
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
      centerWidth: "100%",
      scrollWaiter: null,
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

<style lang="stylus" scoped>
.isRightNotFixed
  >>> .mn-hanger
    &:first-child
      margin-top 18px
    &:last-child
      margin-bottom 18px

.isRightLeftNotFixed
  >>> .mn-hanger
    &:first-child
      margin-top 0

.scrollableContainer
  background-color var(--color-base)
</style>