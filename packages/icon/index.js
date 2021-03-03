import "../../build/icons/mustom-next-icons.css";
import Component from "./src/main.vue";

Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

export default Component;
