<template>
  <div>
    <mn-hanger
      id="Archive"
      :caption="$localeConfig.content.caption + ' - ' + $page.frontmatter.title"
      :icon="$localeConfig.content.icon"
      type="primary"
      plain
      round
      shadow
      disableSwitch
    >
      <div class="inner" ref="inner">
        <transition-group name="fade" mode="out-in" appear>
          <div v-for="(post, i) in posts.slice(0, offset)" :key="i">
            <mn-post-card
              :post-data="post"
              :icons="[
                $localeConfig.meta.date.icon,
                $localeConfig.meta.updated.icon,
                $localeConfig.meta.categories.icon,
                $localeConfig.meta.more.icon,
              ]"
              :tooltips="[
                $localeConfig.meta.date.text,
                $localeConfig.meta.updated.text,
                $localeConfig.meta.categories.text,
              ]"
              :textMore="$localeConfig.meta.more.text"
              :horizontal="horizontal"
              no-border
              reverse
            />
            <div class="divider"></div>
          </div>
          <div :key="posts.length" class="more">
            <mn-button
              v-if="hasMore"
              @click="incrementOffset"
              v-html="$localeConfig.pagination.more.post"
            ></mn-button>
            <mn-button
              v-else
              v-html="$localeConfig.pagination.none.post"
              class="none"
            ></mn-button>
          </div>
        </transition-group>
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
  name: "Archive",
  computed: {
    hasMore() {
      return this.offset < this.posts.length;
    },
    offset() {
      return parseInt(this.$themeConfig.limit) + this.increment;
    },
    posts() {
      return this.$sitePosts.map((post) => {
        const categories = [];
        const cate_prefix = this.$localePath.replace(/\//g, "");
        if (
          post.frontmatter[
            cate_prefix === "" ? "categories" : cate_prefix + "_categories"
          ]
        ) {
          post.frontmatter[
            cate_prefix === "" ? "categories" : cate_prefix + "_categories"
          ].forEach((cates) => {
            this.setCate(categories, this.$siteCategories.map, cates);
          });
        }
        return {
          date: new Date(post.frontmatter.date).toLocaleDateString(this.$lang),
          updated: new Date(post.frontmatter.updated).toLocaleDateString(
            this.$lang
          ),
          excerpt: post.excerpt,
          categories: categories,
          cover: post.frontmatter.cover,
          title: post.title,
          path: post.path,
        };
      });
    },
  },
  methods: {
    incrementOffset() {
      this.increment += parseInt(this.$themeConfig.limit) || 3;
    },
    setCate(cates, map, key, parent = "") {
      if (typeof key === "string") {
        const _parent = parent === "" ? key : `${parent},${key}`;
        cates.push({
          name: key,
          path: map[_parent] ? map[_parent].path : "",
        });
      } else if (key instanceof Array && key.length > 0) {
        const _parent = parent === "" ? key[0] : `${parent},${key[0]}`;
        cates.push({
          name: key[0],
          path: map[_parent] ? map[_parent].path : "",
        });
        this.setCate(cates, map, key[1], _parent);
      }
    },
    resizeUpdate() {
      this.horizontal = !(this.$refs.inner.offsetWidth < 758);
    },
  },
  data() {
    return {
      horizontal: true,
      increment: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.resizeUpdate);
    this.resizeUpdate();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeUpdate);
  },
};
</script>

<style lang="stylus" scoped>
.inner
  display flex
  flex-direction column
  padding 20px
  @media (max-width 540px)
    padding 4px
  .mn-post-card
    margin-bottom 20px

#Archive
  margin-bottom 18px

.divider
  display block
  clear both
  margin 20px -20px
  border-top 4px dashed var(--color-primary-8)

.more
  text-align center
  .none
    cursor not-allowed
    color var(--color-text-placeholder) !important
    background var(--color-border-extra-light) !important
    border-color var(--color-border-light) !important

>>> .mn-post-card-except
  img
    display none
</style>