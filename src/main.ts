import App from "@/App.vue";
import "@/assets/css/reset.css";
import router from "@/router";
import store from "@/store";
import axios from 'axios';
import Vue from "vue";
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8081';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
