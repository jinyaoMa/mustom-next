<template>
  <div class="mn-scrollbar" :class="scrollbarClass" ref="scrollbar">
    <div
      class="mn-scrollbar-thumb"
      ref="thumb"
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
    scrollbarClass() {
      return {
        vertical: !this.horizontal,
        horizontal: this.horizontal,
        show: this.thumbStart != 0,
        hide: this.hide,
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
      scrollbarLength: 0,
      thumbTranslateY: 0,
      thumbTranslateX: 0,
      thumbTranslateYLimit: 0,
      thumbTranslateXLimit: 0,
      scrollbarBorder: 4, // minus 4 px for border
      thumbStart: 0,
      hide: false,
    };
  },
  methods: {
    scrollUpdate() {
      if (this.bindElement && this.$refs.scrollbar) {
        if (this.horizontal) {
          this.scrollbarLength =
            this.$refs.scrollbar.offsetWidth - this.scrollbarBorder;
          this.thumbWidth =
            (this.bindElement.offsetWidth / this.bindElement.scrollWidth) *
              this.scrollbarLength +
            "px";
          this.thumbTranslateX =
            (this.bindElement.scrollLeft / this.bindElement.scrollWidth) *
            this.scrollbarLength;
          this.thumbTranslateXLimit =
            ((this.bindElement.scrollWidth - this.bindElement.offsetWidth) /
              this.bindElement.scrollWidth) *
            this.scrollbarLength;
        } else {
          this.scrollbarLength =
            this.$refs.scrollbar.offsetHeight - this.scrollbarBorder;
          this.thumbHeight =
            (this.bindElement.offsetHeight / this.bindElement.scrollHeight) *
              this.scrollbarLength +
            "px";
          this.thumbTranslateY =
            (this.bindElement.scrollTop / this.bindElement.scrollHeight) *
            this.scrollbarLength;
          this.thumbTranslateYLimit =
            ((this.bindElement.scrollHeight - this.bindElement.offsetHeight) /
              this.bindElement.scrollHeight) *
            this.scrollbarLength;
        }
      }
    },
    noNeedScroll(element) {
      let result = false;
      if (this.horizontal) {
        if (element.scrollWidth === element.offsetWidth) {
          result = true;
        }
      } else {
        if (element.scrollHeight === element.offsetHeight) {
          result = true;
        }
      }
      return result;
    },
    bind(element) {
      if (this.bindElement) {
        this.bindElement.removeEventListener("scroll", this.scrollUpdate);
      }
      if (this.noNeedScroll(element)) {
        this.hide = true;
        return;
      } else {
        this.hide = false;
      }
      this.thumbStart = 0;
      this.bindElement = element;
      this.bindElement.addEventListener("scroll", this.scrollUpdate);
      this.scrollUpdate();
    },
    thumbDown(e) {
      if (this.horizontal) {
        this.thumbStart = e.clientX;
      } else {
        this.thumbStart = e.clientY;
      }
    },
    thumbMove(e) {
      if (this.bindElement && this.thumbStart != 0) {
        if (this.horizontal) {
          this.thumbTranslateX =
            this.thumbTranslateX + e.clientX - this.thumbStart;
          if (this.thumbTranslateX < 0) {
            this.thumbTranslateX = 0;
          } else if (this.thumbTranslateX > this.thumbTranslateXLimit) {
            this.thumbTranslateX = this.thumbTranslateXLimit;
          }
          this.bindElement.scrollLeft =
            (this.thumbTranslateX / this.scrollbarLength) *
            this.bindElement.scrollWidth;
          this.thumbStart = e.clientX;
        } else {
          this.thumbTranslateY =
            this.thumbTranslateY + e.clientY - this.thumbStart;
          if (this.thumbTranslateY < 0) {
            this.thumbTranslateY = 0;
          } else if (this.thumbTranslateY > this.thumbTranslateYLimit) {
            this.thumbTranslateY = this.thumbTranslateYLimit;
          }
          this.bindElement.scrollTop =
            (this.thumbTranslateY / this.scrollbarLength) *
            this.bindElement.scrollHeight;
          this.thumbStart = e.clientY;
        }
      }
    },
    thumbUp() {
      this.thumbStart = 0;
    },
  },
  mounted() {
    this.$refs.thumb.addEventListener("mousedown", this.thumbDown);
    window.addEventListener("mousemove", this.thumbMove);
    window.addEventListener("mouseup", this.thumbUp);
  },
  destroyed() {
    if (this.bindElement) {
      this.bindElement.removeEventListener("scroll", this.scrollUpdate);
    }
    this.$refs.thumb &&
      this.$refs.thumb.removeEventListener("mousedown", this.thumbDown);
    window.removeEventListener("mousemove", this.thumbMove);
    window.removeEventListener("mouseup", this.thumbUp);
  },
};
</script>