import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
// import Test from "../views/test.vue";
import OffestPrinting from "../views/OffestPrinting/index.vue";
import DigitalPrinting from "../views/DigitalPrinting/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    redirect: "/OffestPrinting",
  },
  {
    path: "/OffestPrinting",
    component: OffestPrinting,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/DigitalPrinting",
    component: DigitalPrinting,
    meta: {
      keepAlive: true,
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
