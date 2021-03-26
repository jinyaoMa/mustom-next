<template>
  <mn-hanger
    id="Comment"
    :caption="$localeConfig.comment.caption"
    :icon="$localeConfig.comment.icon"
    type="primary"
    plain
    round
    shadow
    disableSwitch
  >
    <div class="inner">
      <CommentPlugin :title="$title" :options="options" />
    </div>
  </mn-hanger>
</template>

<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
export default {
  name: "Comment",
  components: {
    CommentPlugin: Comment,
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

#Comment
  margin-bottom 18px
</style>