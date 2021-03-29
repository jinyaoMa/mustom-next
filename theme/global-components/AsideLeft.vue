<template>
  <div class="AsideLeft">
    <transition-group tag="div" name="fade" mode="out-in" appear>
      <Menu :key="0"></Menu>
      <Sidebar
        :key="1"
        v-if="
          $docRoot !== $localePath &&
          showSidebar &&
          layout.toLowerCase() === 'layout'
        "
      ></Sidebar>
      <Brand :key="2" v-if="showBrand"></Brand>
    </transition-group>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Brand from "../components/Brand";
import Sidebar from "../components/Sidebar";

export default {
  name: "AsideLeft",
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
    Menu,
    Brand,
    Sidebar,
  },
};
</script>