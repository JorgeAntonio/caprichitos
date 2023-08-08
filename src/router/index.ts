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
    {
      path: "/category",
      name: "Category",
      component: () => import("../views/CategoryPage.vue"),
    },
    {
      path: "/category/:id",
      name: "CategoryDetail",
      component: () => import("../views/CategoryDetailPage.vue"),
    },
    {
      path: "/sorpresas",
      name: "Surprise",
      component: () => import("../views/SurprisePage.vue"),
    },
    {
      path: "/sorpresas/:id",
      name: "SurpriseDetail",
      component: () => import("../views/SurpriseDetailPage.vue"),
    },
    {
      path: "/flyers",
      name: "Flyer",
      component: () => import("../views/FlyerPage.vue"),
    },
    {
      path: "/nosotros",
      name: "About",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/contactar",
      name: "Contact",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/cesta",
      name: "Cart",
      component: () => import("../views/CartPage.vue"),
    },
    {
      path: "/create",
      name: "Create",
      component: () => import("../views/CreatePage.vue"),
    },
  ],
});

export default router;
