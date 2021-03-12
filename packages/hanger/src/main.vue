<template>
  <div class="mn-hanger" :class="hangerClass">
    <div class="mn-hanger-inner">
      <div
        v-if="hasCaption"
        class="mn-hanger-caption"
        :class="captionClass"
        :style="captionStyle"
        ref="caption"
      >
        <div class="mn-hanger-caption__title" :style="titleStyle">
          <icon v-if="icon" :name="icon" fix-width></icon>
          {{ caption }}
        </div>
        <div v-if="!disableSwitch" class="mn-hanger-caption__switch">
          <icon :name="close ? 'plus' : 'minus'"></icon>
        </div>
      </div>
      <div class="mn-hanger-content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../../icon";

export default {
  name: "mn-hanger",
  components: {
    icon,
  },
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
    icon: {
      type: String,
    },
    plain: {
      type: Boolean,
      default() {
        return false;
      },
    },
    shadow: {
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
    defaultClose: {
      type: Boolean,
      default() {
        return false;
      },
    },
    caption: {
      type: String,
      default() {
        return "";
      },
    },
    gap: {
      type: String,
      default() {
        return "12px";
      },
    },
    disableSwitch: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    hangerClass() {
      return {
        shadow: this.shadow,
        round: this.round,
      };
    },
    hasCaption() {
      return this.caption.trim() !== "";
    },
    captionClass() {
      return {
        default: this.type === "default",
        primary: this.type === "primary",
        success: this.type === "success",
        warning: this.type === "warning",
        danger: this.type === "danger",
        info: this.type === "info",
        text: this.type === "text",
        plain: this.plain,
      };
    },
    captionStyle() {
      return {
        padding: this.gap,
        marginBottom: this.close ? "0px" : "inherit",
        cursor: this.disableSwitch ? "default" : "pointer",
      };
    },
    titleStyle() {
      return {
        paddingRight: this.gap,
      };
    },
  },
  methods: {
    clickUpdate() {
      this.close = !this.close;
      if (this.close) {
        this.$refs.content.style.height =
          this.$refs.content.scrollHeight + "px";
        window.setTimeout(() => {
          this.$refs.content.style.height = "0px";
          this.$emit("toggle", this.close, this.$refs.content.scrollHeight);
        }, 0);
      } else {
        this.$refs.content.style.height =
          this.$refs.content.scrollHeight + "px";
        window.setTimeout(() => {
          this.$refs.content.style.height = "auto";
          this.$emit("toggle", this.close, this.$refs.content.scrollHeight);
        }, 200);
      }
    },
  },
  data() {
    return {
      close: false,
    };
  },
  mounted() {
    this.close = this.defaultClose;
    if (this.hasCaption && !this.disableSwitch) {
      this.$refs.caption.addEventListener("click", this.clickUpdate);
    }
  },
  destroyed() {
    this.$refs.caption &&
      this.$refs.caption.removeEventListener("click", this.clickUpdate);
  },
};
</script>