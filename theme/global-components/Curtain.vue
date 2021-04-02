<template>
  <div id="Curtain">
    <transition-group name="fade" mode="out-in" appear>
      <mn-container
        :key="0"
        v-if="which === 'settings'"
        scrollbar
        height="100%"
      >
        <mn-panel :caption="$localeConfig.settings.language" flow-down>
          <div class="customSelect">
            <select @change="handleLanguageChange">
              <option
                v-for="(v, k) in $site.locales"
                :key="k"
                :value="k"
                :selected="k === $localePath"
              >
                {{ v.settings.locale }}
              </option>
            </select>
          </div>
        </mn-panel>
        <mn-panel
          :caption="$localeConfig.settings.theme"
          @piece-change="handleThemeChange"
        >
          <mn-panel-piece
            name="default"
            width="240px"
            height="160px"
            :style="{
              color: '#409eff',
              backgroundColor: '#ecf5ff',
            }"
            :active="getCurrentTheme() === 'default'"
          >
            {{ $localeConfig.settings.default }}
          </mn-panel-piece>
          <mn-panel-piece
            name="dark"
            width="240px"
            height="160px"
            :style="{
              color: '#ffffff',
              backgroundColor: '#303133',
            }"
            :active="getCurrentTheme() === 'dark'"
          >
            {{ $localeConfig.settings.dark }}
          </mn-panel-piece>
        </mn-panel>
        <mn-panel
          v-if="$themeConfig.wallpapers && $themeConfig.wallpapers.length > 0"
          :caption="$localeConfig.settings.wallpaper"
          @piece-change="handleWallpaperChange"
        >
          <mn-panel-piece
            v-for="(wallpaper, i) in $themeConfig.wallpapers"
            :key="i"
            :name="i"
            width="240px"
            height="160px"
            :image="wallpaper"
            :active="getCurrentWallpaper() === wallpaper"
          ></mn-panel-piece>
        </mn-panel>
        <mn-panel :caption="$localeConfig.settings.title" flow-down>
          <mn-panel-item
            name="autoplay"
            width="280px"
            @click="handleItemClick"
            :flag="isAutoplay"
          >
            {{ $localeConfig.settings.autoplay }}
          </mn-panel-item>
          <mn-panel-item
            name="live2d"
            width="280px"
            @click="handleItemClick"
            :flag="isLive2d"
          >
            {{ $localeConfig.settings.live2d }}
          </mn-panel-item>
        </mn-panel>
      </mn-container>
      <mn-container
        :key="1"
        v-else-if="which === 'search'"
        scrollbar
        height="100%"
      >
      </mn-container>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Curtain",
  props: {
    which: {
      type: String,
    },
  },
  methods: {
    getCurrentWallpaper() {
      let image = "";
      if (typeof this.$parent.$parent.getBackgroundImage === "function") {
        image = this.$parent.$parent.getBackgroundImage();
      }
      return image;
    },
    getCurrentTheme() {
      let className = document.querySelector(":root").className;
      if (className === "") {
        className = "default";
      }
      return className;
    },
    handleLanguageChange(e) {
      this.$router.push(e.target.value);
    },
    handleThemeChange(name) {
      document.querySelector(":root").className = name;
    },
    handleWallpaperChange(name, image) {
      if (typeof this.$parent.$parent.setBackgroundImage === "function") {
        this.$parent.$parent.setBackgroundImage(image);
      }
    },
    handleItemClick(flag, name) {
      console.log(flag, name);
      if (name === "autoplay") {
        this.isAutoplay = flag;
      } else if (name === "live2d") {
        this.isLive2d = flag;
      }
    },
  },
  data() {
    return {
      isAutoplay: false,
      isLive2d: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
#Curtain
  position absolute
  bottom 0
  left 0
  width 100%
  background-color var(--color-white)

.customSelect
  position relative
  width fit-content
  &:before
    content ''
    position absolute
    right 1.1em
    top 1.1em
    border 0.3em solid black
    border-left-color transparent
    border-top-color transparent
    transform rotate(45deg)
  > select
    min-width 280px
    padding 1em
    padding-right 2em
    appearance none

>>> .mn-container
  position relative

>>> .mn-container-inner
  padding 80px
</style>