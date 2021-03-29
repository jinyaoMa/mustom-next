<template>
  <div class="AsideRight">
    <transition-group tag="div" name="fade" mode="out-in" appear>
      <Sidebar
        :key="0"
        v-if="
          $docRoot !== $localePath &&
          showSidebar &&
          layout.toLowerCase() === 'layout'
        "
      ></Sidebar>
      <Category :key="1" v-if="layout.toLowerCase() === 'archive'"></Category>
      <Tag :key="2" v-if="layout.toLowerCase() === 'archive'"></Tag>
      <Toc :key="3" v-if="layout.toLowerCase() === 'post'"></Toc>
      <Recent :key="4" v-if="$route.path === $localePath" type="post"></Recent>
      <Recent :key="5" v-if="$route.path === $localePath" type="doc"></Recent>
      <Brand :key="6" v-if="showBrand"></Brand>
      <Clustrmaps :key="7" v-if="enableClustrmaps"></Clustrmaps>
    </transition-group>
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