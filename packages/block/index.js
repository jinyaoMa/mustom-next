import Component from "../container/src/block.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
