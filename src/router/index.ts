import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "lee之家"
    }
  },
  {
    path: "/nr",
    name: "NightRead",
    component: () => import("@/views/NightRead.vue"),
    meta: {
      title: "夜读"
    }
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("@/views/500.vue"),
    meta: {
      title: "500-系统异常"
    }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "404-对不起！您访问的页面不存在"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
