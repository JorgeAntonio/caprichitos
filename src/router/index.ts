import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
});

export default router;
