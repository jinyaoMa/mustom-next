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
    <ul v-if="hasHeaders" class="list">
      <li v-for="(item, i) in $page.headers" :key="i">
        <router-link
          :to="`${$page.path}#${item.slug}`"
          v-html="item.title"
        ></router-link>
      </li>
    </ul>
    <div
      v-else
      class="placeholder"
      v-html="$localeConfig.toc.placeholder"
    ></div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Toc",
  computed: {
    hasHeaders() {
      return (
        this.$page.headers instanceof Array && this.$page.headers.length > 0
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.placeholder
  margin 12px 20px
  color var(--color-text-placeholder)

.list
  list-style none
  padding 0
  margin 10px 0
  a
    display block
    padding-left 20px
    font-size 15px
    line-height 2
    transition 0.2s
    &:hover, &:focus
      background-color var(--color-primary-9)
    &.router-link-exact-active
      padding-left 15px
      border-left 5px solid var(--color-primary-0)
      background-color var(--color-primary-9)
</style>