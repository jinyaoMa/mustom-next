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
      type="list"
      font-size="15px"
      :cloud-data="$siteCategoriesForCloud"
    ></mn-cloud>
  </mn-hanger>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style lang="stylus" scoped>
.mn-cloud
  margin 12px 20px
</style>