<template>
  <div id="Audio">
    <mn-audio
      class="audio"
      v-if="playlist.length"
      :playlist="playlist"
      :size="`calc(${width} - ${gap} * 2)`"
      vertical
      reverse
    ></mn-audio>
  </div>
</template>

<script>
export default {
  name: "Audio",
  props: {
    gap: {
      type: String,
      default() {
        return "15px";
      },
    },
    width: {
      type: String,
      default() {
        return "80px";
      },
    },
  },
  methods: {
    setupPlaylist() {
      this.$http.get(this.$themeConfig.audioplayer.api).then((res) => {
        this.playlist = res.data;
      });
    },
  },
  data() {
    return {
      playlist: [],
    };
  },
  mounted() {
    this.setupPlaylist();
  },
};
</script>

<style lang="stylus" scoped>
#Audio
  position absolute
  left 0
  bottom 0

.audio
  width 80px
  >>> .mn-audio-inner
    align-items center
    color var(--color-text-primary)
    > div
      margin-bottom 15px
  >>> .mn-audio-left, >>> .mn-audio-button
    padding 0 !important
  >>> .mn-audio-button
    width 100%
    height 100%
    display flex
    flex-direction row
    justify-content center
    align-items center
    background-color var(--color-white)
    box-sizing border-box
    border-radius 8px !important
    border 2px dashed var(--color-primary-8)
    transition 0.2s
    i
      font-size 20px !important
    &:hover, &:focus
      border-style solid
      border-color var(--color-primary-2)
      color var(--color-primary-0)
  >>> .mn-audio-icon
    i
      font-size 20px !important
      transition 0.2s
  >>> .mn-audio-right
    box-sizing border-box
    border-radius 8px !important
    border 2px dashed var(--color-primary-8)
    transition 0.2s
    &:hover, &:focus
      border-style solid
      border-color var(--color-primary-2)
      color var(--color-primary-0)
    &.isPlayed
      color var(--color-primary-0)
      .mn-audio-icon
        i
          font-size 14px !important
          position relative
          left 12px
          top 8px
  >>> .mn-audio-list
    bottom 15px !important
    left 100% !important
    width auto !important
    max-width 50vw !important
</style>