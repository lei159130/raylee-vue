import App from "@/App.vue";
import "@/assets/css/reset.css";
import router from "@/router";
import store from "@/store";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import _ from "lodash";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype._ = _;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

axios.defaults.baseURL = "https://www.lee1314.com/api";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.path) {
    if (window._hmt) {
      window._hmt.push(["_trackPageview", "/#" + to.fullPath]);
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
