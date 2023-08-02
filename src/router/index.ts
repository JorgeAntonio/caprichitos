import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: "/catalog",
      name: "Catalog",
      component: () => import("../views/Catalog.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/location",
      name: "Location",
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
