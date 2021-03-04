<template>
  <div class="mn-container" :style="containerStyle">
    <div class="mn-container-inner" :class="innerClass" ref="inner">
      <slot></slot>
    </div>
    <scrollbar v-if="!disableScrollbar" ref="scrollbar"></scrollbar>
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
        return "100%";
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
    disableScrollbar: {
      type: Boolean,
      default() {
        return false;
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
      };
    },
  },
  methods: {
    initScrollbar() {
      if (!this.disableScrollbar) {
        this.$refs.scrollbar.bind(this.$refs.inner);
      }
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