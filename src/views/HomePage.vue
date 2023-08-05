<script setup lang="ts">
import About from "./AboutPage.vue";
import Hero from "@/components/home/Hero.vue";
import Contactar from "./ContactPage.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import PopularItems from "@/components/home/PopularItems.vue";
import Categories from "./CategoryPage.vue";
import Products from "@/components/products/Products.vue";

</script>

<template>
  <div>
    <Hero />
    <About />
    <Categories />
    <Products />
    <PopularItems />
    <Contactar />
    <FooterBar />
  </div>
</template>
