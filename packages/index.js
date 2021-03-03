import "./theme-default/index.styl";
import "./style-default/index.styl";
import components from "./components";

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;

  for (const key in components) {
    Vue.component(components[key].name, components[key]);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
