<template>
  <mn-hanger
    class="Toc"
    :caption="$localeConfig.toc.caption"
    :icon="$localeConfig.toc.icon"
    type="primary"
    plain
    round
    shadow
  >
    <div class="placeholder" v-html="$localeConfig.toc.placeholder"></div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Toc",
};
</script>

<style lang="stylus" scoped>
.placeholder
  margin 12px 20px
  color var(--color-text-placeholder)
</style>