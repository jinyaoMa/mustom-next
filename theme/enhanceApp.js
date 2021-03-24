import "@vuepress/theme-default/styles/index.styl";
import "@fortawesome/fontawesome-free/css/all.css";
import Vuex from "vuex";
import mixins from "./mixins";
import Packages from "../packages";
import axios from "axios";
import VueAxios from "vue-axios";
import jsonp from "./scripts/client/jsonp";

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

  Vue.mixin(mixins(Vuex));
};
