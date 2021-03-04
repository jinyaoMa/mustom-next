<template>
  <div class="mn-container" :style="containerStyle">
    <div class="mn-container-inner" ref="inner">
      <slot>
        <div style="height: 200vh; width: 200vw; background: #eee">
          1<br />
          2<br />
          3
        </div>
      </slot>
    </div>
    <scrollbar ref="scrollbar"></scrollbar>
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
    width: {
      type: String,
      default() {
        return "100vw";
      },
    },
  },
  computed: {
    containerStyle() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
  mounted() {
    this.$refs.scrollbar.bind(this.$refs.inner);
  },
  updated() {
    this.$refs.scrollbar.bind(this.$refs.inner);
  },
};
</script>