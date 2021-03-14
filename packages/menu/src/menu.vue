<template>
  <div class="mn-menu" :class="menuClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mn-menu",
  props: {
    horizontal: {
      type: Boolean,
      default() {
        return false;
      },
    },
    align: {
      type: String,
      default() {
        return "left";
      },
      validator(value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
    mini: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    menuClass() {
      return {
        horizontal: this.horizontal,
        vertical: !this.horizontal,
        alignLeft: this.align === "left",
        alignRight: this.align === "right",
        mini: this.mini,
      };
    },
  },
};
</script>