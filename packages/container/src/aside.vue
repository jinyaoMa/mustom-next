<template>
  <aside class="mn-aside" :style="asideStyle">
    <div class="mn-aside-inner" :style="innerStyle">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
export default {
  name: "mn-aside",
  props: {
    width: {
      type: String,
      default() {
        return "320px";
      },
    },
    gap: {
      type: String,
      default() {
        return "auto";
      },
    },
    leftGap: {
      type: Boolean,
      default() {
        return false;
      },
    },
    rightGap: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    asideStyle() {
      return {
        paddingLeft: this.leftGap ? this.gap : 0,
        paddingRight: this.rightGap ? this.gap : 0,
      };
    },
    innerStyle() {
      return {
        width: this.width,
      };
    },
  },
};
</script>