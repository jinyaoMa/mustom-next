<template>
  <mn-hanger
    class="Tag"
    :caption="$localeConfig.tag.caption"
    :icon="$localeConfig.tag.icon"
    type="primary"
    plain
    round
    shadow
  >
    <mn-cloud :cloud-data="$siteTagsForCloud"></mn-cloud>
  </mn-hanger>
</template>

<script>
export default {
  name: "Tag",
};
</script>

<style lang="stylus" scoped>
.mn-cloud
  margin 12px
</style>