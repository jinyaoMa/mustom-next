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
      <mn-menu-item to="#1" exact>Test1</mn-menu-item>
      <mn-submenu>
        <mn-menu-item slot="caption" to="#2" exact>Test2</mn-menu-item>
        <mn-menu-item to="#3" exact>Test2-1</mn-menu-item>
        <mn-submenu>
          <mn-menu-item slot="caption" to="#7" exact>Test3</mn-menu-item>
          <mn-menu-item to="#5" exact>Test3-1</mn-menu-item>
        </mn-submenu>
        <mn-menu-item to="#4" exact>Test2-2</mn-menu-item>
      </mn-submenu>
      <mn-menu-item to="#6" exact>Test3</mn-menu-item>
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
</style>