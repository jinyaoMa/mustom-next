<template>
  <div class="Header">
    <div class="corner">
      <mn-button
        square
        plain
        filled
        :title="$localeConfig.settings.title"
        @click="$emit('corner-click', 'settings')"
        :class="{
          highlight: highlight === 'settings',
        }"
      >
        <mn-icon :name="$localeConfig.settings.icon"></mn-icon>
      </mn-button>
    </div>
    <div class="sitetop">
      <mn-sitename>
        <span v-if="$localeConfig.sitename.prepend" slot="prepend">
          {{ $localeConfig.sitename.prepend }}
        </span>
        <span v-if="$localeConfig.sitename.text">
          {{ $localeConfig.sitename.text }}
        </span>
        <span v-if="$localeConfig.sitename.append" slot="append">
          {{ $localeConfig.sitename.append }}
        </span>
      </mn-sitename>
    </div>
    <div class="corner">
      <mn-button
        square
        plain
        filled
        :title="$localeConfig.search.title"
        @click="$emit('corner-click', 'search')"
        :class="{
          highlight: highlight === 'search',
        }"
      >
        <mn-icon :name="$localeConfig.search.icon"></mn-icon>
      </mn-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    highlight: {
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped>
.Header
  display flex
  flex-direction row
  height 100%
  box-shadow var(--shadow-base)

.corner
  width 80px
  @media (max-width 768px)
    width 64px
  .mn-button.highlight
    color var(--color-secondary-0)
    background-color var(--color-secondary-9)

.sitetop
  flex-grow 1
  display flex
  flex-direction row
  justify-content center
  align-items center

[class*='mn-icon']
  font-size 20px

.mn-sitename
  font-size 25px

@media (max-width 768px)
  [class*='mn-icon']
    font-size 16px
  .mn-sitename
    font-size 20px
</style>