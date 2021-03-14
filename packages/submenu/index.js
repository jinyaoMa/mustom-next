import Component from "../menu/src/submenu.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
