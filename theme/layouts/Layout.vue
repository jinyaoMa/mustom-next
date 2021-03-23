<template>
  <div id="Layout">
    <div class="inner"></div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="stylus" scoped>
#Layout
  margin-top 36px
  border-radius 4px
  box-shadow var(--shadow-light)
  background var(--color-white)
  color var(--color-text-primary)
  border 1px solid var(--color-border-extra-light)

.inner
  margin 4px 0
</style>