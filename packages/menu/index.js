import Component from "./src/menu.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;