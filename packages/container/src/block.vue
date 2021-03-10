<template>
  <div class="mn-block" :style="blockStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mn-block",
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
        return "auto";
      },
    },
    fixed: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    blockStyle() {
      return {
        height: this.fixed ? this.height : "auto",
        width: this.fixed ? this.width : "auto",
        position: this.fixed ? "fixed" : "relative",
      };
    },
  },
  methods: {
    scrollHeight() {
      return this.$el.scrollHeight;
    },
    scrollWidth() {
      return this.$el.scrollHeight;
    },
    setScrollTop(scrollTop) {
      this.$el.scrollTop = scrollTop;
    },
    setScrollLeft(scrollLeft) {
      this.$el.scrollLeft = scrollLeft;
    },
    scrollTopDelta(delta) {
      this.$el.scrollTop = this.$el.scrollTop + delta;
    },
    scrollLeftDelta(delta) {
      this.$el.scrollLeft = this.$el.scrollLeft + delta;
    },
  },
};
</script>