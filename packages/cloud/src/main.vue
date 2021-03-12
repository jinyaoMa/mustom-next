<template>
  <div class="mn-cloud" :class="cloudClass" :style="cloudStyle">
    <router-link
      class="mn-cloud-item"
      v-for="(item, i) in _cloudData"
      :key="i"
      :to="item.url"
      :style="itemStyle(item.count, item.depth)"
    >
      {{ item.text }}
      <span v-if="type === 'list'" class="mn-cloud-count">
        {{ item.count }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "mn-cloud",
  props: {
    type: {
      type: String,
      default() {
        return "cloud";
      },
      validator(value) {
        return ["cloud", "list"].indexOf(value) !== -1;
      },
    },
    fontSize: {
      type: String,
      default() {
        return "14px";
      },
    },
    multiple: {
      type: Number,
      default() {
        return 1.5;
      },
    },
    cloudData: {
      type: Array,
      required: true,
      /**
       * [{ text, url, count, children: [{ text, url, count... }] }]
       */
    },
  },
  data() {
    return {
      max: 0,
      min: Infinity,
    };
  },
  methods: {
    itemStyle(count, depth) {
      return this.type === "cloud"
        ? {
            fontSize:
              1 +
              ((count - this.min) / (this.max - this.min)) *
                (this.multiple - 1) +
              "em",
            opacity: 0.6 + ((count - this.min) / (this.max - this.min)) * 0.4,
          }
        : {
            marginLeft: depth + "em",
          };
    },
  },
  computed: {
    cloudClass() {
      return {
        list: this.type === "list",
        cloud: this.type === "cloud",
      };
    },
    cloudStyle() {
      return {
        fontSize: this.fontSize,
      };
    },
    _cloudData() {
      const result = [];
      this.max = 0;
      this.min = Infinity;
      const extractChildren = (data, depth = 0) => {
        data.forEach((item) => {
          if (item.count > this.max) {
            this.max = item.count;
          }
          if (item.count < this.min) {
            this.min = item.count;
          }
          result.push({
            text: item.text,
            url: item.url,
            count: item.count,
            depth,
          });
          if (item.children instanceof Array && item.children.length > 0) {
            extractChildren(item.children, depth + 1);
          }
        });
      };
      extractChildren(this.cloudData, 0);
      return result;
    },
  },
};
</script>