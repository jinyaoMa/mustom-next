<template>
  <div id="Audio">
    <mn-audio
      class="audio"
      v-if="playlist.length"
      :playlist="playlist"
    ></mn-audio>
  </div>
</template>

<script>
export default {
  name: "Audio",
  methods: {
    setupPlaylist() {
      this.$http
        .get(
          `https://api.i-meto.com/meting/api?server=netease&type=playlist&id=4989572738&r=0.6792885138967442`
        )
        .then((res) => {
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
</style>