<template>
  <div id="Curtain">
    <mn-container scrollbar height="100%">
      <mn-panel caption="Settings" icon="fas fa-paragraph fa-fw">
        <mn-panel-item label="测试" value="test" width="280px"></mn-panel-item>
      </mn-panel>
    </mn-container>
  </div>
</template>

<script>
export default {
  name: "Curtain",
};
</script>

<style lang="stylus" scoped>
#Curtain
  position absolute
  bottom 0
  left 0
  width 100%
  background-color var(--color-white)

>>> .mn-container
  position relative

>>> .mn-container-inner
  padding 80px
</style>