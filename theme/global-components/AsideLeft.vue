<template>
  <div class="AsideLeft">
    <Menu></Menu>
    <Brand></Brand>
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