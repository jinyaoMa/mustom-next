<template>
  <div class="AsideLeft">
    <Menu></Menu>
    <Brand
      v-if="
        layout.toLowerCase() === 'archive' || layout.toLowerCase() === 'post'
      "
    ></Brand>
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
  },
  components: {
    Menu,
    Brand,
  },
};
</script>