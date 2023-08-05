<script setup lang="ts">
import About from "./About.vue";
import Catalogo from "@/components/Catalogo.vue";
import Hero from "@/components/Hero.vue";
import Contactar from "./Contactar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import PopularItems from "@/components/home/PopularItems.vue";

</script>

<template>
  <div>
    <Hero />
    <About />
    <Catalogo />
    <PopularItems />
    <Contactar />
    <FooterBar />
  </div>
</template>
