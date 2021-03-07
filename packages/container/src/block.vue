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
        height: this.height,
        width: this.width,
        position: this.fixed ? "fixed" : "relative",
      };
    },
  },
  methods: {
    scrollHeight() {
      return this.$el.scrollHeight;
    },
  },
};
</script>