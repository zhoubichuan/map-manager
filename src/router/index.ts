import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
    path: "/",
    name: "index",
    redirect: "/gaode-map",
  },
    {
    path: "/example",
    name: "example",
    component: () => import("@/views/example/index.vue"),
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("@/views/page/Index.vue"),
  },
  {
    path: "/gaode-map",
    name: "gaode-map",
    component: () => import("@/views/map/index.vue"),
  },
  {
    path: "/show",
    name: "show",
    component: () => import("@/views/show/index.vue"),
  },
  {
    path: "/template",
    name: "template",
    component: () => import("@/views/template/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
