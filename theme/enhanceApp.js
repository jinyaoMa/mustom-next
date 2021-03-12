import Vuex from "vuex";
import mixins from "./mixins";
import Packages from "../packages";
import "@fortawesome/fontawesome-free/css/all.css";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Packages);

  Vue.mixin(mixins(Vuex));
};
