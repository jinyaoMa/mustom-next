<template>
  <SWUpdatePopup v-slot="{ enabled, reload }">
    <div v-if="enabled" class="my-sw-update-popup">
      <div class="msg" v-html="$localeConfig.pwa.message"></div>
      <div>
        <span class="btn" @click="reload">{{ $localeConfig.pwa.button }}</span>
      </div>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";
export default {
  components: { SWUpdatePopup },
};
</script>

<style lang="stylus" scoped>
.my-sw-update-popup
  z-index 9999999999
  position fixed
  bottom 0
  right 0
  width 100%
  line-height 1
  padding 1.25rem
  color #ffffff
  background #3eaf7c
  display flex
  flex-direction row
  justify-content center
  text-shadow 0 0 1px white

.msg
  margin-right 1.25rem

.btn
  display inline-block
  border none
  padding 0.5rem
  margin -0.5rem
  border-radius 4px
  cursor pointer
  white-space nowrap
  background #dddddd
  color #000000
</style>