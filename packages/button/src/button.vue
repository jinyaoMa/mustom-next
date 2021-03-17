<template>
  <router-link
    class="mn-button"
    :class="buttonClass"
    :to="to"
    v-slot="{ href, navigate }"
    custom
  >
    <a v-if="externalLink" :href="to" target="_blank">
      <slot></slot>
    </a>
    <a v-else-if="isAnchor" :href="href" @click="navigate">
      <slot></slot>
    </a>
    <button v-else>
      <slot></slot>
    </button>
  </router-link>
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
    fixIcon: {
      type: Boolean,
      default() {
        return false;
      },
    },
    fixPadding: {
      type: Boolean,
      default() {
        return false;
      },
    },
    to: {
      type: String,
      default() {
        return "";
      },
    },
    externalLink: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    isAnchor() {
      return this.to !== "";
    },
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
        fixIcon: this.fixIcon,
        fixPadding: this.fixPadding,
      };
    },
  },
  methods: {
    clickUpdate(e) {
      this.$emit("click", e);
    },
  },
  mounted() {
    this.$el.addEventListener("click", this.clickUpdate);
  },
  destroyed() {
    this.$el.removeEventListener("click", this.clickUpdate);
  },
};
</script>