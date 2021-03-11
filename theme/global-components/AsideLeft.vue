<template>
  <div class="AsideLeft">
    <mn-hanger caption="简介" icon="info-circle" type="primary" plain>
      <div class="avatar">
        <mn-avatar
          size="128px"
          src="/assets/img/avatar.png"
          fit="contain"
          circle
        >
          user
        </mn-avatar>
      </div>
    </mn-hanger>
  </div>
</template>

<script>
export default {
  name: "AsideLeft",
};
</script>

<style lang="stylus" scoped>
.mn-hanger
  margin 36px 0

.avatar
  display flex
  flex-direction row
  justify-content center
  margin 32px 0
</style>