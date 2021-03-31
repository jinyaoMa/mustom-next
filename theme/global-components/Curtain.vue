<template>
  <div id="Curtain">
    <mn-container scrollbar height="100%"></mn-container>
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
</style>