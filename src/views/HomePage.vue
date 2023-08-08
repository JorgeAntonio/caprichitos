<script setup lang="ts">
import AboutCard from "@/components/about/AboutCard.vue";
import Hero from "@/components/home/Hero.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import PopularItems from "@/components/home/PopularItems.vue";
import ProductsList from "@/components/products/ProductsList.vue";
import CategoriesList from "@/components/home/CategoriesList.vue";
import ContactSection from "@/components/contact/ContactSection.vue";

</script>

<template>
  <div>
    <Hero />
    <AboutCard />
    <CategoriesList />
    <ProductsList />
    <PopularItems />
    <ContactSection />
    <FooterBar />
  </div>
</template>
