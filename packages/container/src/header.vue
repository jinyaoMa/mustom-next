<template>
  <header class="mn-header" :style="headerStyle">
    <div class="mn-header-inner">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "mn-header",
  props: {
    height: {
      type: String,
      default() {
        return "80px";
      },
    },
    gap: {
      type: String,
      default() {
        return "auto";
      },
    },
  },
  computed: {
    headerStyle() {
      return {
        height: this.height,
        paddingLeft: this.gap,
        paddingRight: this.gap,
      };
    },
  },
};
</script>