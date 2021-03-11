<template>
  <mn-hanger
    class="Brand"
    caption="简介"
    icon="info-circle"
    type="primary"
    plain
  >
    <div class="inner">
      <mn-avatar size="128px" src="/assets/img/avatar.png" fit="contain" circle>
        user
      </mn-avatar>
      <div class="name">耀</div>
      <div class="signature">问题, 方法, 程序, 标准, 解决</div>
      <div class="overview"></div>
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Brand",
};
</script>

<style lang="stylus" scoped>
.inner
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 1.5em 0

.name
  margin-top 1em
  font-size 1.25em
  font-weight bold

.signature, .overview
  margin-top 0.5em
</style>