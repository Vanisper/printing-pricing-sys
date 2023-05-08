import { createWebHashHistory, createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
// import Test from "../views/test.vue";
// 后台界面
import Admin from "../views/Admin/index.vue";
import Login from "../views/Admin/login/index.vue";
import OffestPrinting from "../views/OffestPrinting/index.vue";
import DigitalPrinting from "../views/DigitalPrinting/index.vue";
// 前台
import Client from "../views/Client/index.vue";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Client,
    meta: {
      keepAlive: false,
    },
  },
  // 后台页面
  {
    path: "/admin/login",
    component: Login,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/admin",
    redirect: "/admin/login",
    component: Admin,
    meta: {
      keepAlive: true,
    },
    children: [
      {
        path: "OffestPrinting",
        component: OffestPrinting,
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "DigitalPrinting",
        component: DigitalPrinting,
        meta: {
          keepAlive: true,
        },
      },
    ]
  },

];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
