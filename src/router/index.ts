import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/product",
      name: "Product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: () => import("../views/ProductDetail.vue"),
    },

    {
      path: "/create",
      name: "Create",
      component: () => import("../views/Create.vue"),
    },
  ],
});

export default router;
