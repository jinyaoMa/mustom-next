<template>
  <main class="mn-main" :style="mainStyle">
    <div class="mn-main-inner">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: "mn-main",
  props: {
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
    mainStyle() {
      return {
        paddingLeft: this.leftGap ? this.gap : 0,
        paddingRight: this.rightGap ? this.gap : 0,
      };
    },
  },
};
</script>