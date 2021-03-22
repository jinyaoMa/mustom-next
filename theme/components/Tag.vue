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
    <mn-cloud
      v-if="$siteTagsTotal > 0"
      font-size="13px"
      :cloud-data="$siteTagsForCloud"
    ></mn-cloud>
    <div
      v-else
      class="placeholder"
      v-html="$localeConfig.tag.placeholder"
    ></div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Tag",
};
</script>

<style lang="stylus" scoped>
.placeholder
  margin 12px 20px
  color var(--color-text-placeholder)

.mn-cloud
  margin 12px

>>> .router-link-exact-active
  color var(--color-primary-0)
  font-weight bold
  opacity 1 !important
</style>