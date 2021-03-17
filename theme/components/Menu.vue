<template>
  <mn-hanger
    class="Menu"
    :caption="$localeConfig.menu.caption"
    :icon="$localeConfig.menu.icon"
    type="primary"
    plain
    round
    shadow
  >
    <mn-menu class="inner">
      <mn-menu-item
        v-for="(item, i) in $localeConfig.menu.list"
        :key="i"
        :to="encodeURI(item.url)"
        :exact="item.url === $localePath"
      >
        <mn-icon :name="item.icon"></mn-icon>
        <span v-html="item.text"></span>
      </mn-menu-item>
    </mn-menu>
  </mn-hanger>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="stylus" scoped>
.inner
  margin 0.5em 0

.mn-menu-item
  padding 16px 20px
  &:after
    content ''
    position absolute
    right 20px
    top 17px
    width 14px
    height 14px
    border-radius 50%
    box-shadow 0 0 0 3px var(--color-white)
    background var(--color-secondary-3)
    opacity 0
    transition 0.2s
  &:hover, &:focus
    background var(--color-primary-9) !important
    color var(--color-text-primary) !important
  &.active, &.exactActive
    font-weight bold
    font-size 16px
    &:after
      opacity 1
  &.active
    background var(--color-primary-1)
    color var(--color-white)

[class^='mn-icon']
  margin-right 12px
</style>