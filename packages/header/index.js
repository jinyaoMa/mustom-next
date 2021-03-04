import Component from "../container/src/header.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
