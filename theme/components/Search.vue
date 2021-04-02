<template>
  <div class="Search">
    <input
      ref="input"
      aria-label="Search"
      :value="query"
      :class="{ focused: focused }"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      @input="query = $event.target.value"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    />
    <ul
      class="suggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        v-for="(s, i) in suggestions"
        :key="i"
        class="suggestion"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// fork plugin-search
import matchQuery from "@vuepress/plugin-search/match-query";
export default {
  name: "Search",
  data() {
    return {
      query: "",
      focused: false,
      focusIndex: 0,
      placeholder: undefined,
    };
  },
  computed: {
    showSuggestions() {
      return true;
    },
    suggestions() {
      const query = this.query.trim().toLowerCase();
      if (!query) {
        return;
      }
      const { pages } = this.$site;
      const max = this.$site.themeConfig.searchMaxSuggestions || 5;
      const localePath = this.$localePath;
      const res = [];
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        const p = pages[i];
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }
        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue;
        }
        if (matchQuery(query, p)) {
          res.push(p);
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            const h = p.headers[j];
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(
                Object.assign({}, p, {
                  path: p.path + "#" + h.slug,
                  header: h,
                })
              );
            }
          }
        }
      }
      return res;
    },
    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length;
      const repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    },
  },
  mounted() {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
    document.addEventListener("keydown", this.onHotkey);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onHotkey);
  },
  methods: {
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== "/" && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }
      return "/";
    },
    isSearchable(page) {
      let searchPaths = null;
      // all paths searchables
      if (searchPaths === null) {
        return true;
      }
      searchPaths = Array.isArray(searchPaths)
        ? searchPaths
        : new Array(searchPaths);
      return (
        searchPaths.filter((path) => {
          return page.path.match(path);
        }).length > 0
      );
    },
    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        ["s", "/"].includes(event.key)
      ) {
        this.$refs.input.focus();
        event.preventDefault();
      }
    },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },
    closeCurtain(parent) {
      if (parent) {
        if (typeof parent.closeCurtain === "function") {
          parent.closeCurtain();
        } else {
          this.closeCurtain(parent.$parent);
        }
      }
    },
    go(i) {
      if (!this.showSuggestions) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.closeCurtain(this.$parent);
      this.query = "";
      this.focusIndex = 0;
    },
    focus(i) {
      this.focusIndex = i;
    },
    unfocus() {
      this.focusIndex = -1;
    },
  },
};
</script>

<style lang="stylus">
.Search
  display inline-block
  position relative
  width 100%
  margin-right 0
  font-size 1.1em
  a:before
    display none
  input
    font-size 1.1em !important
    box-sizing border-box
    cursor text
    width 100%
    height 2em
    display inline-block
    border 1px solid var(--color-border-base)
    box-shadow 0 0 1px var(--color-text-primary)
    border-radius 4px
    font-size 0.9em
    line-height 2em
    padding 0 0.5em
    outline none
    transition all 0.2s ease
    background-size 1em
    &:focus
      cursor auto
      border-color var(--color-primary-0)
  .suggestions
    // background var(--color-white)
    // position absolute
    // top 2 em
    // border 1px solid var(--highlight)
    // box-shadow 0 0 1px var(--color-text-primary)
    border-radius 4px
    // padding 0.4em
    list-style-type none
    width 100%
    margin-top 1em
    padding 0
    &.align-right
      right 0
  .suggestion
    line-height 1.4
    padding 0.4em 0.6em
    border-radius 4px
    cursor pointer
    a
      white-space normal
      color var(--color-primary-0)
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color var(--color-primary-0)
      a
        color white
</style>