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
      component: () => import("../views/product/Product.vue"),
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: () => import("../views/detail/ProductDetail.vue"),
    },

    {
      path: "/create",
      name: "Create",
      component: () => import("../views/create/Create.vue"),
    },
  ],
});

export default router;
