<template>
  <div class="Header">
    <div class="corner">
      <mn-button square plain filled>
        <mn-icon name="cube"></mn-icon>
      </mn-button>
    </div>
    <div class="sitetop">
      <mn-sitename font-size="25px">
        <span>{{ $localeConfig.sitename }}</span>
        <span slot="append">{{ $localeConfig.sitenameAppend }}</span>
      </mn-sitename>
    </div>
    <div class="corner">
      <mn-button square plain filled>
        <mn-icon name="search"></mn-icon>
      </mn-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="stylus" scoped>
.Header
  display flex
  flex-direction row
  height 100%
  box-shadow var(--shadow-base)

.corner
  width 80px

.sitetop
  flex-grow 1
  display flex
  flex-direction row
  justify-content center
  align-items center

>>> .mn-icon
  font-size 20px
</style>