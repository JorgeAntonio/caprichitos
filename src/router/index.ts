import { createRouter, createWebHistory } from "vue-router";
import DefaulLayout from "../layouts/DefaultLayout.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "",
      component: DefaulLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/product",
          name: "Product",
          component: () => import("../views/product/index.vue"),
        },
        {
          path: "/product/:id",
          name: "ProductDetail",
          component: () => import("../views/product/detail.vue"),
        },
        {
          path: "/create",
          name: "Create",
          component: () => import("../views/product/create.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("../views/SignIn.vue"),
    },
  ],
});

export default router;
