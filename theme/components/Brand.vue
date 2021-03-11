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
      <div class="overview">
        <div>
          <div class="count">17</div>
          <div>文章</div>
        </div>
        <div>
          <div class="count">10</div>
          <div>分类</div>
        </div>
        <div>
          <div class="count">25</div>
          <div>标签</div>
        </div>
      </div>
      <mn-button-group class="contact">
        <mn-button round fix-icon fix-padding>
          <mn-icon></mn-icon>
        </mn-button>
        <mn-button round fix-icon fix-padding>
          <mn-icon></mn-icon>
        </mn-button>
        <mn-button round fix-icon fix-padding>
          <mn-icon></mn-icon>
        </mn-button>
      </mn-button-group>
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

.signature, .overview, .contact
  margin-top 0.5em

.overview
  display flex
  flex-direction row
  flex-wrap nowrap
  text-align center
  > div
    padding 0.5em
    display flex
    flex-direction column
    cursor pointer
    &:hover
      .count
        color var(--color-primary-0)

.count
  margin-bottom 0.25em
  transition 0.2s
  font-weight bold
</style>