<template>
  <div class="AsideRight">
    <Sidebar
      v-if="
        $docRoot !== $localePath &&
        showSidebar &&
        layout.toLowerCase() === 'layout'
      "
    ></Sidebar>
    <Category v-if="layout.toLowerCase() === 'archive'"></Category>
    <Tag v-if="layout.toLowerCase() === 'archive'"></Tag>
    <Toc v-if="layout.toLowerCase() === 'post'"></Toc>
    <Recent v-if="$route.path === $localePath" type="post"></Recent>
    <Recent v-if="$route.path === $localePath" type="doc"></Recent>
    <Brand v-if="showBrand"></Brand>
    <Clustrmaps v-if="enableClustrmaps"></Clustrmaps>
  </div>
</template>

<script>
import Brand from "../components/Brand";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Clustrmaps from "../components/Clustrmaps";
import Recent from "../components/Recent";
import Toc from "../components/Toc";
import Sidebar from "../components/Sidebar";

export default {
  name: "AsideRight",
  props: {
    layout: {
      type: String,
    },
    showBrand: {
      type: Boolean,
    },
    showSidebar: {
      type: Boolean,
    },
  },
  components: {
    Brand,
    Category,
    Tag,
    Clustrmaps,
    Recent,
    Toc,
    Sidebar,
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