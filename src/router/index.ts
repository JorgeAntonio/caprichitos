import { createRouter, createWebHistory } from "vue-router";
import DefaulLayout from "../layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaulLayout,
    children: [
      {
        path: "",
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
    ],
  },
  {
    path: "/create",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "Create",
        component: () => import("../views/product/create.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: routes,
});

export default router;
