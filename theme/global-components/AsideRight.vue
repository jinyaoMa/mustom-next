<template>
  <div class="AsideRight">
    <Category v-if="layout.toLowerCase() === 'archive'"></Category>
    <Tag v-if="layout.toLowerCase() === 'archive'"></Tag>
    <Toc v-if="layout.toLowerCase() === 'post'"></Toc>
    <Recent v-if="$route.path === $localePath" type="post"></Recent>
    <Recent v-if="$route.path === $localePath" type="doc"></Recent>
    <Clustrmaps v-if="enableClustrmaps"></Clustrmaps>
  </div>
</template>

<script>
import Category from "../components/Category";
import Tag from "../components/Tag";
import Clustrmaps from "../components/Clustrmaps";
import Recent from "../components/Recent";
import Toc from "../components/Toc";

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
    Recent,
    Toc,
  },
  computed: {
    enableClustrmaps() {
      return (
        this.$localeConfig.clustrmaps && this.$localeConfig.clustrmaps.enable
      );
    },
  },
};
</script>