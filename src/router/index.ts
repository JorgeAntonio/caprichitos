import { createRouter, createWebHistory } from "vue-router";
import DefaulLayout from "../layouts/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: " ",
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
          name: "CreateProduct",
          component: () => import("../views/product/create.vue"),
        },
      ],
    },
    // {
    //   path: "/dashboard",
    //   name: "Dashboard",
    //   component: () => import("../views/dashboard/dashboard.vue"),
    // },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("../views/SignIn.vue"),
    },
    // {
    //   path: "/product",
    //   name: "Product",
    //   component: () => import("../views/product/index.vue"),
    // },
    // {
    //   path: "/product/:id",
    //   name: "ProductDetail",
    //   component: () => import("../views/product/detail.vue"),
    // },
    // {
    //   path: "/create-product",
    //   name: "Create_product",
    //   component: () => import("../views/product/create.vue"),
    // },
    // {
    //   path: "/registrar-ingreso",
    //   name: "RegistrarIngreso",
    //   component: () => import("../views/almacen/RegistrarIngreso.vue"),
    // },
    // {
    //   path: "/cart",
    //   name: "Cart",
    //   component: () => import("../views/Cart.vue"),
    // },
    // {
    //   path: "/formulario",
    //   name: "Formulario",
    //   component: () => import("../views/Formulario.vue"),
    // },
  ],
});

export default router;
