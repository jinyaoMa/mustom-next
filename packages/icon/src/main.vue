<template>
  <i :class="iconClass"></i>
</template>

<script>
export default {
  name: "mn-icon",
  props: {
    icon: {
      type: String,
      default() {
        return "ma-jinyao";
      },
    },
  },
  computed: {
    iconClass() {
      return `mn-icon mn-icon-${this.icon}`;
    },
  },
};
</script>