<template>
  <header class="mn-header">
    <div class="mn-header-inner" :style="headerStyle">
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
  },
  computed: {
    headerStyle() {
      return {
        height: this.height,
      };
    },
  },
};
</script>