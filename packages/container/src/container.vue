<template>
  <div class="mn-container" :style="containerStyle">
    <div class="mn-container-inner" :class="innerClass" ref="inner">
      <slot></slot>
    </div>
    <scrollbar
      v-if="scrollbar"
      @scrollUpdate="scrollUpdate"
      ref="scrollbar"
    ></scrollbar>
  </div>
</template>

<script>
import scrollbar from "./scrollbar.vue";

export default {
  name: "mn-container",
  components: {
    scrollbar,
  },
  props: {
    height: {
      type: String,
      default() {
        return "auto";
      },
    },
    width: {
      type: String,
      default() {
        return "100%";
      },
    },
    horizontal: {
      type: Boolean,
      default() {
        return false;
      },
    },
    scrollbar: {
      type: Boolean,
      default() {
        return false;
      },
    },
    gap: {
      type: String,
      default() {
        return "auto";
      },
    },
    enableGap: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  computed: {
    innerClass() {
      return {
        vertical: !this.horizontal,
        horizontal: this.horizontal,
      };
    },
    containerStyle() {
      return {
        height: this.height,
        width: this.width,
        paddingLeft: this.enableGap ? this.gap : 0,
        paddingRight: this.enableGap ? this.gap : 0,
      };
    },
  },
  methods: {
    scrollUpdate(offset, isHorizontal, delta) {
      this.$emit("scroll", offset, isHorizontal, delta);
    },
    initScrollbar() {
      if (this.scrollbar) {
        this.$refs.scrollbar.bind(this.$refs.inner);
      }
    },
    scrollHeight() {
      return this.$refs.inner.scrollHeight || 0;
    },
    scrollWidth() {
      return this.$refs.inner.scrollWidth || 0;
    },
    scroll2Top() {
      this.$refs.inner.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scroll2Bottom() {
      this.$refs.inner.scrollTo({
        top: this.$refs.inner.scrollHeight,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.initScrollbar();
  },
  updated() {
    this.initScrollbar();
  },
};
</script>