<template>
  <div id="NotFound">
    <div>{{ bgText }}</div>
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    let bgText = "404 ";
    for (let i = 0; i < 12; i++) {
      bgText += bgText;
    }
    return {
      bgText,
    };
  },
};
</script>

<style lang="stylus" scoped>
#NotFound
  background #111111
  height 100vh
  padding 4px
  display flex
  flex-direction column
  justify-content center
  align-items center
  position relative
  div
    position absolute
    left 0
    top 0
    word-break break-all
    line-height 1.25
    color #333333
    font-size 3vmin
  h1
    font-size 33vmin
    color #aaaaaa
    z-index 1
</style>