import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/view/pages/HomePage.vue"),
  },
  {
    path: "/index",
    component: () => import("@/view/pages/HomePage.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router