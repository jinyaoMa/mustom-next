<template>
  <div class="mn-going-to" :style="customStyle">
    <div class="btn" :style="btnStyle" @click="$emit('go-top')">
      <mn-icon :name="icons[0]"></mn-icon>
    </div>
    <div class="btn" :style="btnStyle" @click="$emit('go-bottom')">
      <mn-icon :name="icons[1]"></mn-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-going-to",
  props: {
    gap: {
      type: String,
      default() {
        return "8px";
      },
    },
    width: {
      type: String,
      default() {
        return "64px";
      },
    },
    icons: {
      type: Array,
      default() {
        return ["fas fa-arrow-up", "fas fa-arrow-down"];
      },
    },
  },
  computed: {
    customStyle() {
      return {
        width: this.width,
      };
    },
    btnStyle() {
      return {
        width: `calc(${this.width} - (${this.gap} * 2))`,
        height: `calc(${this.width} - (${this.gap} * 2))`,
        fontSize: `calc(${this.width} / 4)`,
        marginBottom: this.gap,
      };
    },
  },
};
</script>