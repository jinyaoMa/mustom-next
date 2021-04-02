<template>
  <div class="mn-panel">
    <div v-if="caption" class="mn-panel-caption">
      {{ caption }}
    </div>
    <div class="mn-panel-inner" :style="innerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-panel",
  props: {
    caption: {
      type: String,
    },
    gap: {
      type: String,
      default() {
        return "40px";
      },
    },
    flowDown: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    innerStyle() {
      return {
        gap: this.gap,
        paddingTop: this.gap,
        paddingBottom: this.gap,
        flexDirection: this.flowDown ? "column" : "row",
      };
    },
  },
  methods: {
    handlePieceClick(name, image) {
      this.$children.forEach((child) => {
        if (child.$vnode.componentOptions.tag === "mn-panel-piece") {
          if (child.name === name) {
            child.isActive = true;
            this.$emit("piece-change", name, image);
          } else {
            child.isActive = false;
          }
        }
      });
    },
  },
};
</script>