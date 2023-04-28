import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = (RouteRecordRaw = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
]);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
