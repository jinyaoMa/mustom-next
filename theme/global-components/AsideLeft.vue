<template>
  <div class="AsideLeft">
    <Menu></Menu>
    <Sidebar
      v-if="
        $docRoot !== $localePath &&
        showSidebar &&
        layout.toLowerCase() === 'layout'
      "
    ></Sidebar>
    <Brand v-if="showBrand"></Brand>
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