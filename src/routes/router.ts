import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import Test from "../views/test.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/page1",
  },
  {
    path: "/index",
    component: Test,
  },
  {
    path: "/page1",
    component: Test,
  },
  {
    path: "/page2",
    component: Test,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
