<template>
  <mn-hanger
    class="Recent"
    :caption="$localeConfig.recent[type].caption"
    :icon="$localeConfig.recent[type].icon"
    type="primary"
    plain
    round
    shadow
  >
    <div v-if="type === 'post' && $sitePostsTotal > 0" class="list">
      <router-link
        v-for="(item, i) in $sitePosts.slice(
          0,
          $localeConfig.recent[type].limit
        )"
        :key="i"
        :to="item.path"
        v-html="item.title"
        :data-date="getDate(item.frontmatter.updated, item.lastUpdated)"
      ></router-link>
    </div>
    <div v-else-if="type === 'doc' && $siteDocsTotal > 0" class="list">
      <router-link
        v-for="(item, i) in $siteDocs.slice(
          0,
          $localeConfig.recent[type].limit
        )"
        :key="i"
        :to="item.path"
        v-html="item.title"
        :data-date="getDate(item.frontmatter.updated, item.lastUpdated)"
      ></router-link>
    </div>
    <div
      v-else
      class="placeholder"
      v-html="$localeConfig.category.placeholder"
    ></div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Recent",
  props: {
    type: {
      type: String,
      default() {
        return "post";
      },
      validator(value) {
        return ["post", "doc"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    getDate(str, lastUpdated) {
      let result = "";
      if (str) {
        result = new Date(str).toLocaleDateString(this.$lang);
      } else if (lastUpdated) {
        result = new Date(lastUpdated).toLocaleDateString(this.$lang);
      }
      return result;
    },
  },
};
</script>

<style lang="stylus" scoped>
.placeholder
  margin 12px 20px
  color var(--color-text-placeholder)

.list
  margin 6px 0

@keyframes shake
  from
    transform translateX(-1px)
  to
    transform translateX(1px)

a
  text-decoration none
  display block
  padding 6px 20px
  color var(--color-text-primary)
  clear both
  transition 0.2s
  &:before
    content attr(data-date)
    float right
    color var(--color-text-secondary)
    font-size 0.8em
    margin-top 0.2em
    margin-left 0.2em
  &:hover, &:focus
    color var(--color-primary-0)
    background var(--color-primary-9)
  &:active
    animation shake 0.2s infinite
</style>