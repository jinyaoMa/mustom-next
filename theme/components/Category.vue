<template>
  <mn-hanger
    class="Category"
    :caption="$localeConfig.category.caption"
    :icon="$localeConfig.category.icon"
    type="primary"
    plain
    round
    shadow
  >
    <mn-cloud
      v-if="$siteCategoriesTotal > 0"
      type="list"
      font-size="15px"
      :cloud-data="$siteCategoriesForCloud"
    ></mn-cloud>
    <div
      v-else
      class="placeholder"
      v-html="$localeConfig.category.placeholder"
    ></div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style lang="stylus" scoped>
.placeholder
  margin 12px 20px
  color var(--color-text-placeholder)

.mn-cloud
  margin 12px 20px
  &.list
    >>> .mn-cloud-count
      color var(--color-secondary-0)
      font-weight bold
      right -1em
  >>> .mn-cloud-item:before
    height 2px

>>> .router-link-exact-active
  color var(--color-primary-0)
  font-weight bold
</style>