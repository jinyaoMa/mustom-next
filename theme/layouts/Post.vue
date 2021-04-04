<template>
  <div>
    <mn-hanger
      id="Post"
      :caption="
        $localeConfig.content.caption +
        ' - ' +
        ($page.title || $page.frontmatter.title)
      "
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
            {{ getDate($page.frontmatter.date, $page.lastUpdated) }}
          </div>
          <div :title="$localeConfig.meta.updated.text">
            <mn-icon :name="$localeConfig.meta.updated.icon"></mn-icon>
            {{ getDate($page.frontmatter.updated, $page.lastUpdated) }}
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
        <Content class="post-body" />
        <div class="ending">
          <div
            class="divider"
            v-if="$localeConfig.meta.ending.divider"
            v-html="$localeConfig.meta.ending.divider"
          ></div>
          <div v-if="hasSocialShare" class="share">
            <SocialShare />
          </div>
          <div v-if="hasAddition !== false" class="addition">
            <div
              v-for="(item, i) in addition"
              :key="i"
              v-html="currentPathReplace(item)"
            ></div>
          </div>
          <div class="tags" v-if="hasTags">
            <router-link
              v-for="(tag, i) in tags"
              :key="i"
              :to="$siteTags.map[tag].path"
            >
              # {{ tag }}
            </router-link>
          </div>
          <div class="pn">
            <div
              class="prev"
              :data-label="
                prevIndex >= 0 ? $localeConfig.pagination.prev.post : ''
              "
            >
              <router-link
                v-if="prevIndex >= 0"
                :to="getPage(prevIndex).path || ''"
                :title="
                  $localeConfig.pagination.prev.post +
                  ': ' +
                  getPage(prevIndex).title
                "
              >
                {{ getPage(prevIndex).title }}
              </router-link>
            </div>
            <div
              class="next"
              :data-label="
                nextIndex < $sitePosts.length
                  ? $localeConfig.pagination.next.post
                  : ''
              "
            >
              <router-link
                v-if="nextIndex < $sitePosts.length"
                :to="getPage(nextIndex).path || ''"
                :title="
                  $localeConfig.pagination.next.post +
                  ': ' +
                  getPage(nextIndex).title
                "
              >
                {{ getPage(nextIndex).title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </mn-hanger>
    <transition name="fade" mode="out-in" appear>
      <CustomComment
        v-if="
          $themeConfig.comment &&
          $themeConfig.comment.enable &&
          $frontmatter.comment
        "
      ></CustomComment>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Post",
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
    getPage(index) {
      return this.$sitePosts[index] || {};
    },
    doPrevNext() {
      for (let i = 0; i < this.$sitePosts.length; i++) {
        const page = this.$sitePosts[i];
        if (page.path === this.$page.path) {
          this.prevIndex = i - 1;
          this.nextIndex = i + 1;
          break;
        }
      }
    },
    currentPathReplace(str) {
      if (this.$isServer) return "";
      return str.replace(
        /\{\s*currentPath\s*\}/gi,
        window.location.href.replace(/#.*$/, "")
      );
    },
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
    tags() {
      return this.$page.frontmatter.tags.flat(Infinity);
    },
    hasTags() {
      return (
        this.$page.frontmatter.tags instanceof Array &&
        this.$page.frontmatter.tags.length > 0
      );
    },
    addition() {
      if (this.hasAddition === "frontmatter") {
        return this.$frontmatter.addition;
      }
      return this.$localeConfig.meta.ending.addition;
    },
    hasAddition() {
      if (this.$frontmatter.addition === false) {
        return false;
      }
      if (
        this.$frontmatter.addition instanceof Array &&
        this.$frontmatter.addition.length > 0
      ) {
        return "frontmatter";
      }
      return (
        this.$localeConfig.meta.ending.addition instanceof Array &&
        this.$localeConfig.meta.ending.addition.length > 0
      );
    },
    hasSocialShare() {
      return (
        this.$frontmatter.share &&
        this.$themeConfig.socialShare &&
        this.$themeConfig.socialShare.enable
      );
    },
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
  data() {
    return {
      prevIndex: -1,
      nextIndex: -1,
    };
  },
  mounted() {
    this.doPrevNext();
  },
  updated() {
    this.doPrevNext();
  },
};
</script>

<style lang="stylus" scoped>
#Post
  margin-bottom 18px

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

.ending
  border-top 6px dashed var(--color-primary-8)
  margin 0 -40px
  padding 0 40px
  display flex
  flex-direction column
  align-items center

.divider
  color var(--color-primary-7)
  font-size 18px
  font-weight 500
  line-height 1.7
  user-select none
  text-align center

.share, .addition, .tags
  margin-top 20px

.share, .tags
  text-align center

.addition
  background-color var(--color-primary-9)
  width 100%
  box-sizing border-box
  padding 10px
  border-left 5px solid var(--color-primary-1)
  white-space nowrap
  overflow-y hidden
  > div
    line-height 1.25
    &:not(:last-child)
      margin-bottom 9px
  >>> a
    transition 0.2s
    &:hover, &:focus
      color var(--color-secondary-0)

.tags, .pn
  > a
    transition 0.2s
    &:hover, &:focus
      color var(--color-secondary-0)

.tags
  font-size 16px
  line-height 2
  > a
    margin 0 8px

.pn
  line-height 1.25
  display flex
  flex-direction row
  justify-content space-between
  width 100%

.prev, .next
  margin-top 20px
  &:before
    content attr(data-label)
    display block
    color var(--color-text-placeholder)
  > a
    font-size 16px
    transition 0.2s
    &:hover, &:focus
      color var(--color-secondary-1)

.next
  text-align right

.post-body
  margin-top 40px
  margin-bottom 40px
  font-size 16px
  >>> img
    max-width 100%
  >>> a
    text-decoration none
    transition 0.2s
    color var(--color-primary-0)
    &:hover, &:focus
      color var(--color-secondary-1)

@media (max-width 540px)
  .inner
    padding 10px
  .ending
    border-top-width 4px
  .divider
    font-size 14px
  .share, .addition, .tags
    margin-top 10px
  .tags
    line-height 1.5
  .pn
    flex-direction column
    margin-bottom 4px
  .prev, .next
    text-align center
    margin-top 10px
  .post-body
    margin-top 20px
    margin-bottom 20px
</style>