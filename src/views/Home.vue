<script setup lang="ts">
import About from "./About.vue";
import Catalogo from "@/components/Catalogo.vue";
import Hero from "@/components/Hero.vue";
import Contactar from "./Contactar.vue";
import Location from "./Location.vue";
import FooterBar from "@/components/layout/FooterBar.vue";

</script>

<template>
  <div>
    <Hero />
    <div id="catalogo">
      <Catalogo />
    </div>
    <div id="nosotros">
      <About />
    </div>
    <div>
      <Location />
    </div>
    <div>
      <Contactar />
    </div>
    <div>
      <FooterBar />
    </div>
  </div>
</template>
