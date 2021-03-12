<template>
  <mn-hanger class="Footer" shadow>
    <div class="inner">
      <div v-html="$localeConfig.footer.copyright"></div>
      <div
        v-for="(line, i) in $localeConfig.footer.addition"
        :key="i"
        v-html="line"
      ></div>
      <div class="counter">
        <div :title="$localeConfig.footer.counter.pv.text">
          <mn-icon :name="$localeConfig.footer.counter.pv.icon"></mn-icon>
          <span>{{ pv }}</span>
        </div>
        <div :title="$localeConfig.footer.counter.uv.text">
          <mn-icon :name="$localeConfig.footer.counter.uv.icon"></mn-icon>
          <span>{{ uv }}</span>
        </div>
        <div :title="$localeConfig.footer.counter.wd.text">
          <mn-icon :name="$localeConfig.footer.counter.wd.icon"></mn-icon>
          <span>{{ $siteWordsTotal }}</span>
        </div>
      </div>
      <div class="license" v-html="$localeConfig.footer.license"></div>
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      pv: "∞",
      uv: "∞",
    };
  },
  methods: {
    initBusuanzi() {
      this.$jsonp(
        "//busuanzi.ibruce.info/busuanzi",
        {
          jsonpCallback:
            "BusuanziCallback_" + Math.floor(1099511627776 * Math.random()),
        },
        (result) => {
          this.pv = result.site_pv;
          this.uv = result.site_uv;
        },
        true
      );
    },
  },
  watch: {
    $page: {
      handler() {
        this.initBusuanzi();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.Footer
  margin-bottom 0
  border-radius 4px 4px 0 0

.inner
  display flex
  flex-direction column
  flex-wrap wrap
  align-items center
  font-size 14px
  padding 12px
  > div
    margin 0.75em 0.5em 0

.counter
  display flex
  flex-direction row
  flex-wrap wrap
  > div:not(:last-child)
    margin-right 0.75em
  .mn-icon
    margin-right 0.1em

.license
  margin-top 1em !important
  >>> img
    display block
    height 2em
    object-fit contain
  >>> a
    &:before
      display none
    &:hover
      opacity 0.9

>>> a
  display inline-block
  text-decoration none
  color var(--color-primary-0)
  font-weight bold
  position relative
  &:before
    content ''
    position absolute
    bottom 0
    left 0
    height 2px
    width 0
    background var(--color-primary-5)
    transition 0.2s
  &:hover:before
    width 100%

>>> sup
  line-height 0.5
  color var(--color-danger-0)
  margin 0 0.1em
</style>