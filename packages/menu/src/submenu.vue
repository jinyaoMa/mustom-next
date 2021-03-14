<template>
  <div class="mn-submenu">
    <div class="mn-submenu-caption">
      <slot name="caption"></slot>
    </div>
    <div class="mn-submenu-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mn-submenu",
};
</script>