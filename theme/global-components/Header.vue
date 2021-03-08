<template>
  <div class="Header">
    <div class="corner">
      <mn-button square plain filled>
        <mn-icon></mn-icon>
      </mn-button>
    </div>
    <div class="sitetop"></div>
    <div class="corner">
      <mn-button square plain filled>
        <mn-icon></mn-icon>
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

>>> .mn-icon
  font-size 32px
</style>