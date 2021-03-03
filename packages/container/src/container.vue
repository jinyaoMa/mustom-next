<template>
  <div class="mn-container" :style="containerStyle">
    <div class="mn-container-inner">
      <slot></slot>
    </div>
    <scrollbar></scrollbar>
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
        return "100vh";
      },
    },
  },
  computed: {
    containerStyle() {
      return {
        height: this.height,
      };
    },
  },
};
</script>