<template>
  <footer class="mn-footer" :style="footerStyle">
    <div class="mn-footer-inner">
      <slot></slot>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: "mn-footer",
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
    footerStyle() {
      return {
        paddingLeft: this.leftGap ? this.gap : 0,
        paddingRight: this.rightGap ? this.gap : 0,
      };
    },
  },
};
</script>