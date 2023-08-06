<script setup lang="ts">
import About from "./AboutPage.vue";
import Hero from "@/components/home/Hero.vue";
import Contactar from "./ContactPage.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import PopularItems from "@/components/home/PopularItems.vue";
import ProductsList from "@/components/products/ProductsList.vue";
import CategoriesList from "@/components/home/CategoriesList.vue";

</script>

<template>
  <div>
    <Hero />
    <About />
    <CategoriesList />
    <ProductsList />
    <PopularItems />
    <Contactar />
    <FooterBar />
  </div>
</template>
