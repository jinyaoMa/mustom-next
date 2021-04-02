<template>
  <mn-hanger
    :caption="$localeConfig.clustrmaps.caption"
    :icon="$localeConfig.clustrmaps.icon"
    type="primary"
    plain
    round
    shadow
  >
    <div class="Clustrmaps">
      <script
        v-if="isIt"
        :id="$localeConfig.clustrmaps.id"
        ref="script"
      ></script>
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Clustrmaps",
  computed: {
    isIt() {
      return (
        this.$localeConfig.clustrmaps &&
        this.$localeConfig.clustrmaps.id &&
        this.$localeConfig.clustrmaps.src
      );
    },
  },
  mounted() {
    if (this.isIt) {
      this.$refs.script.src = this.$localeConfig.clustrmaps.src;
    }
  },
};
</script>

<style lang="stylus" scoped>
.Clustrmaps
  margin 12px 10px 0
  overflow hidden
</style>