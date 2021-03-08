<template>
  <i :class="iconClass"></i>
</template>

<script>
export default {
  name: "mn-icon",
  props: {
    name: {
      type: String,
      default() {
        return "ma-jinyao";
      },
    },
    fixWidth: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    iconClass() {
      return `mn-icon mn-icon-${this.name}${this.fixWidth ? " fixWidth" : ""}`;
    },
  },
};
</script>