<template>
  <div class="mn-panel">
    <div v-if="caption" class="mn-panel-caption">
      {{ caption }}
    </div>
    <div class="mn-panel-inner" :style="innerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-panel",
  props: {
    caption: {
      type: String,
    },
    gap: {
      type: String,
      default() {
        return "40px";
      },
    },
  },
  computed: {
    innerStyle() {
      return {
        gridGap: this.gap,
        paddingTop: this.gap,
      };
    },
  },
};
</script>