<template>
  <button class="mn-button" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mn-button",
  props: {
    type: {
      type: String,
      default() {
        return "default";
      },
      validator(value) {
        return (
          [
            "default",
            "primary",
            "success",
            "warning",
            "danger",
            "info",
            "text",
          ].indexOf(value) !== -1
        );
      },
    },
    filled: {
      type: Boolean,
      default() {
        return false;
      },
    },
    plain: {
      type: Boolean,
      default() {
        return false;
      },
    },
    square: {
      type: Boolean,
      default() {
        return false;
      },
    },
    round: {
      type: Boolean,
      default() {
        return false;
      },
    },
    circle: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        default: this.type === "default",
        primary: this.type === "primary",
        success: this.type === "success",
        warning: this.type === "warning",
        danger: this.type === "danger",
        info: this.type === "info",
        text: this.type === "text",
        filled: this.filled,
        plain: this.plain,
        square: this.square,
        round: this.round,
        circle: this.circle,
      };
    },
  },
};
</script>