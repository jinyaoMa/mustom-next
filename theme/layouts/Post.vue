<template>
  <mn-hanger
    id="Post"
    :caption="$localeConfig.content.caption + ' - ' + $page.frontmatter.title"
    :icon="$localeConfig.content.icon"
    type="primary"
    plain
    round
    shadow
    disableSwitch
  >
    <div class="inner">
      <div class="title">
        {{ $page.title || $page.frontmatter.title }}
      </div>
      <div class="meta">
        <div :title="$localeConfig.meta.date.text">
          <mn-icon :name="$localeConfig.meta.date.icon"></mn-icon>
          {{ new Date($page.frontmatter.date).toLocaleDateString() }}
        </div>
        <div :title="$localeConfig.meta.updated.text">
          <mn-icon :name="$localeConfig.meta.updated.icon"></mn-icon>
          {{ new Date($page.frontmatter.updated).toLocaleDateString() }}
        </div>
        <div
          v-if="$page.frontmatter.categories"
          :title="$localeConfig.meta.categories.text"
        >
          <mn-icon :name="$localeConfig.meta.categories.icon"></mn-icon>
          <span v-for="(item, i) in categories" :key="i">
            <span v-if="i !== 0">, </span>
            <router-link :to="item.path" :title="item.name">
              {{ item.name }}
            </router-link>
          </span>
        </div>
        <div :title="$localeConfig.meta.word.text">
          <mn-icon :name="$localeConfig.meta.word.icon"></mn-icon>
          {{ addK($page.frontmatter.wordcount) }}
        </div>
        <div :title="$localeConfig.meta.time.text">
          <mn-icon :name="$localeConfig.meta.time.icon"></mn-icon>
          {{ min2Read($page.frontmatter.min2read) }}
        </div>
      </div>
      <Content class="markdown-body" />
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Post",
  methods: {
    min2Read(num) {
      return (
        num +
        " " +
        (num == 1
          ? this.$localeConfig.unit.minute.one
          : this.$localeConfig.unit.minute.more)
      );
    },
    addK(num) {
      if (num >= 1000) {
        num = Math.round(num / 100) / 10 + "k";
      }
      return num;
    },
    setCate(cates, map, key, parent = "") {
      if (typeof key === "string") {
        cates.push({
          name: key,
          path: map[parent === "" ? key : `${parent},${key}`].path,
        });
      } else if (key instanceof Array && key.length > 0) {
        const _parent = parent === "" ? key[0] : `${parent},${key[0]}`;
        cates.push({
          name: key[0],
          path: map[_parent].path,
        });
        this.setCate(cates, map, key[1], _parent);
      }
    },
  },
  computed: {
    categories() {
      const result = [];
      if (this.$page.frontmatter.categories) {
        this.$page.frontmatter.categories.forEach((cates) => {
          this.setCate(result, this.$siteCategories.map, cates);
        });
      }
      return result;
    },
  },
};
</script>

<style lang="stylus" scoped>
.inner
  padding 40px

.title
  margin 0 auto
  font-size 2.2rem
  font-weight 600
  text-align center
  line-height 1.25

.meta
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content center
  margin-top 10px
  line-height 1.7
  font-size 0.9em
  width 100%
  > div
    color var(--color-text-placeholder)
    transition 0.2s
    &:hover, &:focus
      color var(--color-text-regular)
    &:not(:last-child)
      margin-right 10px
  a
    text-decoration none
    color var(--color-primary-3)
    font-size 0.9em
    &:hover, &:focus
      color var(--color-secondary-1)

.markdown-body
  margin-top 40px
  >>> img
    max-width 100%
  >>> a
    transition 0.2s
    color var(--color-primary-0)
    &:hover, &:focus
      color var(--color-secondary-1)
</style>