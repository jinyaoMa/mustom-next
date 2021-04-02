<template>
  <div class="mn-panel-item" :style="customStyle">
    <div class="mn-panel-item-left">
      <slot></slot>
    </div>
    <div class="mn-panel-item-right">
      <div
        class="mn-panel-item__switch"
        :class="{
          active: isActive,
        }"
        @click="handleClick"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-panel-item",
  props: {
    name: {
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
  methods: {
    handleClick() {
      this.isActive = !this.isActive;
      this.$emit("click", this.isActive, this.name);
    },
  },
  data() {
    return {
      isActive: this.flag,
    };
  },
};
</script>