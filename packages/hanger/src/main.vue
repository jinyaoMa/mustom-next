<template>
  <div class="mn-hanger" :class="hangerClass" :style="hangerStyle">
    <div class="mn-hanger-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-hanger",
  props: {
    shadow: {
      type: Boolean,
      default() {
        return true;
      },
    },
    round: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  computed: {
    hangerClass() {
      return {
        shadow: this.shadow,
        round: this.round,
      };
    },
    hangerStyle() {
      return {};
    },
  },
};
</script>