<template>
  <div class="AsideRight">
    <Category v-if="layout.toLowerCase() === 'archive'"></Category>
    <Tag v-if="layout.toLowerCase() === 'archive'"></Tag>
    <Clustrmaps v-if="enableClustrmaps"></Clustrmaps>
  </div>
</template>

<script>
import Category from "../components/Category";
import Tag from "../components/Tag";
import Clustrmaps from "../components/Clustrmaps";

export default {
  name: "AsideRight",
  props: {
    layout: {
      type: String,
    },
  },
  components: {
    Category,
    Tag,
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