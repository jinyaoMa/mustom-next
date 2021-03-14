<template>
  <div class="AsideLeft">
    <Menu></Menu>
    <Brand></Brand>
    <Clustrmaps v-if="enableClustrmaps"></Clustrmaps>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Brand from "../components/Brand";
import Clustrmaps from "../components/Clustrmaps";

export default {
  name: "AsideLeft",
  components: {
    Menu,
    Brand,
    Clustrmaps,
  },
  computed: {
    enableClustrmaps() {
      return (
        this.$themeConfig.clustrmaps && this.$themeConfig.clustrmaps.enable
      );
    },
  },
};
</script>