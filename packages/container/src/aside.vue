<template>
  <aside class="mn-aside">
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
  },
  computed: {
    innerStyle() {
      return {
        width: this.width,
      };
    },
  },
};
</script>