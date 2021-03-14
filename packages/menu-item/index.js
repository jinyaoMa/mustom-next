import Component from "../menu/src/menu-item.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
