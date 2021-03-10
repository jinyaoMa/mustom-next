<template>
  <div class="mn-sitename" :style="sitenameStyle">
    <span class="mn-sitename-prepend" v-if="$slots.prepend">
      <span class="mn-sitename-text">
        <slot name="prepend"></slot>
      </span>
    </span>
    <slot></slot>
    <span class="mn-sitename-append" v-if="$slots.append">
      <span class="mn-sitename-text">
        <slot name="append"></slot>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "mn-sitename",
  props: {
    fontSize: {
      type: String,
    },
  },
  computed: {
    sitenameStyle() {
      return {
        fontSize: this.fontSize,
      };
    },
  },
};
</script>