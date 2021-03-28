<template>
  <div class="AsideLeft">
    <Menu></Menu>
    <Brand v-if="showBrand"></Brand>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Brand from "../components/Brand";

export default {
  name: "AsideLeft",
  props: {
    layout: {
      type: String,
    },
    showBrand: {
      type: Boolean,
    },
  },
  components: {
    Menu,
    Brand,
  },
};
</script>