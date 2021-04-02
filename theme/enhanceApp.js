import "@vuepress/theme-default/styles/index.styl";
import "@fortawesome/fontawesome-free/css/all.css";
import mixins from "./mixins";
import Packages from "../packages";
import axios from "axios";
import VueAxios from "vue-axios";
import jsonp from "./scripts/client/jsonp";
import storage from "./scripts/client/storage";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Packages);
  Vue.use(VueAxios, axios);

  Object.defineProperties(Vue.prototype, {
    $jsonp: {
      get: function get() {
        return jsonp;
      }
    }
  });
  Vue.$jsonp = jsonp;

  Object.defineProperties(Vue.prototype, {
    $storage: {
      get: function get() {
        return storage;
      }
    }
  });
  Vue.$storage = storage;

  Vue.mixin(mixins());

  router.options.scrollBehavior = (to, from, savedPosition) => {
    const scrollableContainer = document.querySelector(
      ".scrollableContainer > .mn-container-inner"
    );
    if (scrollableContainer) {
      if (savedPosition) {
        return scrollableContainer.scrollTo({
          top: savedPosition.y,
          behavior: "smooth"
        });
      } else if (to.hash) {
        if (Vue.$vuepress.$get("disableScrollBehavior")) {
          return false;
        }
        const targetElement = document.querySelector(
          `[id='${to.hash.replace("#", "").trim()}']`
        );
        if (targetElement) {
          return scrollableContainer.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
        return false;
      } else {
        return scrollableContainer.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  };
};
