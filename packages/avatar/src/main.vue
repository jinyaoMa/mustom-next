<template>
  <div class="mn-avatar" :style="avatarStyle" :class="avatarClass">
    <img
      v-if="!hasError"
      :src="src"
      :style="imgStyle"
      @load="handleImgLoad"
      @error="handleImgError"
    />
    <slot v-if="hasError"></slot>
  </div>
</template>

<script>
export default {
  name: "mn-avatar",
  props: {
    size: {
      type: String,
      default() {
        return "64px";
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
    src: {
      type: String,
    },
    fit: {
      type: String,
      default() {
        return "cover";
      },
      validator(value) {
        return (
          ["fill", "contain", "cover", "none", "scale-down"].indexOf(value) !==
          -1
        );
      },
    },
  },
  computed: {
    avatarStyle() {
      return {
        width: this.size,
        height: this.size,
        lineHeight: this.size,
      };
    },
    avatarClass() {
      return {
        square: this.square,
        round: this.round,
        circle: this.circle,
      };
    },
    imgStyle() {
      return {
        objectFit: this.fit,
      };
    },
  },
  methods: {
    handleImgLoad(e) {
      this.hasError = false;
      this.$emit("load", e);
    },
    handleImgError(e) {
      this.hasError = true;
      this.$emit("error", e);
    },
  },
  data() {
    return {
      hasError: false,
    };
  },
};
</script>