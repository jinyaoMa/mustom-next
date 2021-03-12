<template>
  <div class="AsideRight">
    <Category></Category>
    <Tag></Tag>
  </div>
</template>

<script>
import Category from "../components/Category";
import Tag from "../components/Tag";

export default {
  name: "AsideRight",
  components: {
    Category,
    Tag,
  },
};
</script>