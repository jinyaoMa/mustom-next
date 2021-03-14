<template>
  <router-link
    class="mn-menu-item"
    :to="to"
    v-slot="{ href, navigate, isActive, isExactActive }"
  >
    <div v-if="to === ''">
      <slot></slot>
    </div>
    <a v-else-if="external" :href="to" target="_blank">
      <slot></slot>
    </a>
    <a
      v-else
      :href="href"
      @click="navigate"
      :class="itemClass(isActive, isExactActive)"
    >
      <slot></slot>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "mn-menu-item",
  props: {
    to: {
      type: String,
      default() {
        return "";
      },
    },
    external: {
      type: Boolean,
      default() {
        return false;
      },
    },
    exact: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    itemClass(isActive, isExactActive) {
      return {
        active: !this.exact && isActive,
        exactActive: this.exact && isExactActive,
      };
    },
  },
};
</script>