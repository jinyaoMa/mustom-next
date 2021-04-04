<template>
  <mn-hanger
    id="CustomComment"
    :caption="$localeConfig.comment.caption"
    :icon="$localeConfig.comment.icon"
    type="primary"
    plain
    round
    shadow
    disableSwitch
  >
    <div class="inner">
      <Comment :options="options" />
    </div>
  </mn-hanger>
</template>

<script>
import Comment from "@vuepress/plugin-blog/lib/client/components/Comment";
export default {
  name: "CustomComment",
  components: {
    Comment,
  },
  computed: {
    options() {
      const locale = this.$localePath.replace(/\//g, "");
      if (locale != "") {
        return {
          locale,
        };
      }
      return {};
    },
  },
};
</script>

<style lang="stylus" scoped>
.inner
  padding 20px
  @media (max-width 540px)
    padding 0

>>> .vssue
  font-size 14px
  a
    transition 0.2s
    &:hover, &:focus
      color var(--color-secondary-1)
  .vssue-button
    font-size 12px
  .vssue-new-comment
    .vssue-new-comment-input
      font-size 14px
  .vssue-comment-avatar
    border-radius 50%
    overflow hidden

#CustomComment
  margin-bottom 18px
</style>