<template>
  <div class="mn-scrollbar" :class="customClass" ref="scrollbar">
    <div
      class="mn-scrollbar-thumb"
      :class="thumbClass"
      :style="thumbStyle"
    ></div>
  </div>
</template>

<script>
export default {
  name: "mn-scrollbar",
  props: {
    round: {
      type: Boolean,
      default() {
        return true;
      },
    },
    horizontal: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    customClass() {
      return {
        vertical: !this.horizontal,
        horizontal: this.horizontal,
      };
    },
    thumbClass() {
      return {
        round: this.round,
      };
    },
    thumbStyle() {
      return {
        width: this.horizontal && this.thumbWidth,
        height: !this.horizontal && this.thumbHeight,
        transform: this.horizontal
          ? `translateX(${this.thumbTranslateX}px)`
          : `translateY(${this.thumbTranslateY}px)`,
      };
    },
  },
  data() {
    return {
      bindElement: null,
      thumbHeight: "0px",
      thumbWidth: "0px",
      thumbTranslateY: 0,
      thumbTranslateX: 0,
      scrollbarBorder: 4, // minus 4 px for border
    };
  },
  methods: {
    scrollListener() {
      if (this.bindElement && this.$refs.scrollbar) {
        if (this.horizontal) {
          this.thumbTranslateX =
            (this.bindElement.scrollLeft / this.bindElement.scrollWidth) *
            (this.$refs.scrollbar.offsetWidth - this.scrollbarBorder);
        } else {
          this.thumbTranslateY =
            (this.bindElement.scrollTop / this.bindElement.scrollHeight) *
            (this.$refs.scrollbar.offsetHeight - this.scrollbarBorder);
        }
      }
    },
    bind(element) {
      if (this.bindElement) {
        this.bindElement.removeEventListener("scroll", this.scrollListener);
      }
      this.bindElement = element;
      if (this.horizontal) {
        this.thumbWidth =
          (this.bindElement.offsetWidth / this.bindElement.scrollWidth) *
            (this.$refs.scrollbar.offsetWidth - this.scrollbarBorder) +
          "px";
      } else {
        this.thumbHeight =
          (this.bindElement.offsetHeight / this.bindElement.scrollHeight) *
            (this.$refs.scrollbar.offsetHeight - this.scrollbarBorder) +
          "px";
      }
      this.bindElement.addEventListener("scroll", this.scrollListener);
      this.scrollListener();
    },
  },
};
</script>