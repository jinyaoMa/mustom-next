import Component from "../panel/src/panel-piece.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
