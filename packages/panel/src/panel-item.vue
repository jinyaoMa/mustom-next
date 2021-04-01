<template>
  <div class="mn-panel-item" :style="customStyle">
    <div class="mn-panel-item-left">
      {{ label }}
    </div>
    <div class="mn-panel-item-right">
      <div
        class="mn-panel-item__switch"
        :class="{
          active: flag,
        }"
        @click="$emit('click', flag, value)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-panel-item",
  props: {
    label: {
      type: String,
      default() {
        return "";
      },
    },
    value: {
      type: String,
    },
    width: {
      type: String,
      default() {
        return "auto";
      },
    },
    flag: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    customStyle() {
      return {
        width: this.width,
      };
    },
  },
};
</script>