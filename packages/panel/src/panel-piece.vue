<template>
  <div
    class="mn-panel-piece"
    :style="customStyle"
    @click="handleClick"
    :class="{
      active: isActive,
    }"
  >
    <div class="mn-panel-piece-label">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-panel-piece",
  props: {
    name: {
      type: String | Number,
    },
    image: {
      type: String,
    },
    width: {
      type: String,
      default() {
        return "120px";
      },
    },
    height: {
      type: String,
      default() {
        return "80px";
      },
    },
    gap: {
      type: String,
      default() {
        return "40px";
      },
    },
    active: {
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
        height: this.height,
        backgroundImage: this.image,
        marginRight: this.gap,
        marginBottom: this.gap,
      };
    },
  },
  methods: {
    handleClick() {
      if (typeof this.$parent.handlePieceClick === "function") {
        this.$parent.handlePieceClick(this.name, this.image);
      }
    },
  },
  data() {
    return {
      isActive: this.active,
    };
  },
};
</script>