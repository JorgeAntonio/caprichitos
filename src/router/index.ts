import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/products",
      name: "Product",
      component: () => import("../views/ProductPage.vue"),
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: () => import("../views/ProductDetailPage.vue"),
    },
    // {
    //   path: "/category",
    //   name: "Catgory",
    //   component: () => import("../views/CategoryPage.vue"),
    // },
    {
      path: "/category/:id",
      name: "CategoryDetail",
      component: () => import("../views/CategoryDetailPage.vue"),
    },
    {
      path: "/create",
      name: "Create",
      component: () => import("../views/CreatePage.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/HomePage.vue"),
    },
  ],
});

export default router;
