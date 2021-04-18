<template>
  <div id="GlobalLayout">
    <component v-if="layout === 'NotFound'" :is="layout" :key="layout" />
    <mn-container v-else height="100vh" width="100vw">
      <mn-header :height="headerButtonWidth" style="z-index: 1">
        <Header @corner-click="handleCornerClick" :highlight="curtain"></Header>
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
        v-if="!isMobile"
        gap="15px"
        width="80px"
        :icons="[$localeConfig.icons.arrow.up, $localeConfig.icons.arrow.down]"
        @go-top="handleGoTop"
        @go-bottom="handleGoBottom"
      ></mn-going-to>
      <Audio
        v-if="
          $themeConfig.audioplayer &&
          $themeConfig.audioplayer.enable &&
          !isMobile
        "
        :autoplay="currentAutoplay"
        ref="audio"
      ></Audio>
      <transition name="curtion">
        <Curtain
          v-if="curtain != ''"
          :style="{
            height: `calc(100vh - ${headerButtonWidth})`,
          }"
          :which="curtain"
          :live2d="currentLive2d"
          :autoplay="currentAutoplay"
          :isMobile="isMobile"
        ></Curtain>
      </transition>
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
    closeCurtain() {
      this.curtain = "";
    },
    setLive2d(flag, save = false) {
      if (
        this.$themeConfig.live2dHelper &&
        this.$themeConfig.live2dHelper.enable
      ) {
        const waiting = window.setInterval(() => {
          this.currentLive2d = flag;
          const widget = this.$root.$el.querySelector("#live2d-widget");
          if (widget) {
            window.clearInterval(waiting);
            if (this.currentLive2d) {
              widget && (widget.style.opacity = 1);
            } else {
              widget && (widget.style.opacity = 0);
            }
            if (save) {
              this.state.live2d = flag;
              this.$storage.set(this.state);
            }
          }
        }, 16);
      }
    },
    setAutoplay(flag, save = false) {
      if (
        this.$themeConfig.audioplayer &&
        this.$themeConfig.audioplayer.enable &&
        !this.isMobile
      ) {
        this.currentAutoplay = flag;
        if (this.currentAutoplay && this.$refs.audio) {
          this.$refs.audio.play();
        }
        if (save) {
          this.state.autoplay = flag;
          this.$storage.set(this.state);
        }
      }
    },
    setTheme(name, save = false) {
      document.querySelector(":root").className = name;
      if (save) {
        this.state.theme = name;
        this.$storage.set(this.state);
      }
    },
    getBackgroundImage() {
      return this.currentBackgroundImage;
    },
    setBackgroundImage(image, save = false) {
      if (
        this.$themeConfig.wallpapers instanceof Array &&
        this.$themeConfig.wallpapers.length > 0
      ) {
        const waiting = window.setInterval(() => {
          if (this.$refs.scrollableContainer) {
            window.clearInterval(waiting);
            this.$refs.scrollableContainer.$el.style.backgroundImage = image;
            this.currentBackgroundImage = image;
            if (save) {
              this.state.wallpaper = image;
              this.$storage.set(this.state);
            }
          }
        }, 16);
      }
    },
    handleCornerClick(target) {
      if (this.curtain === target) {
        this.curtain = "";
      } else {
        this.curtain = target;
      }
    },
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

        if (
          this.$refs.page &&
          (this.layout === "Post" || this.layout === "Layout")
        ) {
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
    initIsMobile() {
      this.isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
        window.navigator.userAgent
      );
    },
    resizeUpdate() {
      this.initIsMobile();

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
      isMobile: true,
      isLeftFixed: false,
      isRightFixed: false,
      hasBodyGap: true,
      asideWidth: "280px",
      gap: "32px",
      centerWidth: "100%",
      scrollWaiter: null,
      curtain: "",
      currentBackgroundImage: "",
      currentAutoplay: false,
      currentLive2d: true,
      state: null,
    };
  },
  created() {
    if (this.$isServer) return;
    this.state = this.$storage.get();
    if (
      this.$themeConfig.autoRedirect.to &&
      this.$themeConfig.autoRedirect.check &&
      this.$localePath === "/" &&
      this.$themeConfig.autoRedirect.to != "/" &&
      !new RegExp(this.$themeConfig.autoRedirect.check).test(
        window.navigator.browserLanguage || window.navigator.language || "zh"
      )
    ) {
      this.$router.replace(this.$themeConfig.autoRedirect.to);
    }
    if (this.state.theme) {
      this.setTheme(this.state.theme);
    } else {
      this.setTheme("default");
    }
    if (this.state.wallpaper) {
      this.setBackgroundImage(this.state.wallpaper);
    } else if (
      this.$themeConfig.wallpapers instanceof Array &&
      this.$themeConfig.wallpapers.length > 0
    ) {
      this.setBackgroundImage(this.$themeConfig.wallpapers[0]);
    }
    if (this.state.autoplay) {
      this.setAutoplay(this.state.autoplay);
    }
    if (typeof this.state.live2d === "undefined") {
      this.setLive2d(true, true);
    } else {
      this.setLive2d(this.state.live2d);
    }
  },
  mounted() {
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
  background-attachment fixed
  background-repeat no-repeat
  background-position center center
  background-size cover
</style>