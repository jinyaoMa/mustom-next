<template>
  <div class="AsideLeft">
    <Brand></Brand>
  </div>
</template>

<script>
import Brand from "../components/Brand";

export default {
  name: "AsideLeft",
  components: {
    Brand,
  },
};
</script>

<style lang="stylus" scoped>
.mn-hanger
  margin 36px 0
</style>