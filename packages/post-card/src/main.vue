<template>
  <div class="mn-post-card" :class="cardClass">
    <router-link
      v-if="!hasError && postData.cover"
      class="mn-post-card-cover"
      :to="postData.path"
      :title="postData.title"
    >
      <img
        :style="coverStyle"
        :src="postData.cover"
        @load="handleImgLoad"
        @error="handleImgError"
      />
    </router-link>
    <div class="mn-post-card-inner">
      <router-link class="mn-post-card-title" :to="postData.path">
        {{ postData.title }}
      </router-link>
      <div class="mn-post-card-meta">
        <div class="mn-post-card-date" :title="tooltips[0]">
          <Icon :name="icons[0]"></Icon>
          {{ postData.date }}
        </div>
        <div class="mn-post-card-updated" :title="tooltips[1]">
          <Icon :name="icons[1]"></Icon>
          {{ postData.updated }}
        </div>
      </div>
      <div class="mn-post-card-except">
        <div v-html="postData.excerpt"></div>
      </div>
      <div class="mn-post-card-last">
        <div class="mn-post-card-categories" :title="tooltips[2]">
          <Icon
            v-if="postData.categories && postData.categories.length"
            :name="icons[2]"
          ></Icon>
          <span v-for="(item, i) in postData.categories" :key="i">
            <span v-if="i !== 0">, </span>
            <router-link v-if="item.path" :to="item.path">
              {{ item.name }}
            </router-link>
            <span v-else>{{ item.name }}</span>
          </span>
        </div>
        <div>
          <router-link class="mn-post-card-more" :to="postData.path">
            <Icon v-if="icons[3]" :name="icons[3]"></Icon>
            {{ textMore }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../icon";

export default {
  name: "mn-post-card",
  components: {
    Icon,
  },
  props: {
    postData: {
      type: Object,
      required: true,
      /**
       * { date, updated, excerpt, categories, cover, title, path }
       */
    },
    noBorder: {
      type: Boolean,
      default() {
        return false;
      },
    },
    horizontal: {
      type: Boolean,
      default() {
        return false;
      },
    },
    reverse: {
      type: Boolean,
      default() {
        return false;
      },
    },
    textMore: {
      type: String,
      default() {
        return "MORE";
      },
    },
    icons: {
      type: Array,
      default() {
        return [
          "fas fa-calendar-alt fa-fw",
          "fas fa-calendar-check fa-fw",
          "fas fa-folder-open fa-fw",
          "fas fa-chevron-right fa-fw",
        ];
      },
    },
    tooltips: {
      type: Array,
      default() {
        return ["Date", "Last Updated", "Post Categories"];
      },
    },
  },
  computed: {
    cardClass() {
      return {
        noBorder: this.noBorder,
        horizontal: this.horizontal,
        vertical: !this.horizontal,
        reverse: this.reverse,
      };
    },
    coverStyle() {
      return {};
    },
  },
  methods: {
    handleImgLoad(e) {
      this.hasError = false;
      this.$emit("load", e);
    },
    handleImgError(e) {
      this.hasError = true;
      this.$emit("error", e);
    },
  },
  data() {
    return {
      hasError: false,
    };
  },
};
</script>