<script setup lang="ts">
import { onMounted } from "vue";

import ProductCard from "../components/products/ProductCard.vue";
import { almacenForm } from "@/stores/form";
import About from "./About.vue";

const form = almacenForm();

onMounted(() => {
  form.obtenerDatos();
});
</script>

<template>
  <div class="hero min-h-[250px]"
    style="background-image: url(https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80);">
    <div class="hero-overlay bg-opacity-10"></div>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Caprichitos</h1>
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div class="flex justify-center items-center gap-2">
          <button class="btn btn-primary">Catalogo</button>
          <button class="btn btn-primary">Contactar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <h1 class="text-5xl font-semibold py-4">Catalogo</h1>
    <div id="catalogo" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard v-for="(item, index) in form.productos" :key="index" :product="item" />
    </div>
    <div id="nosotros">
      <About />
    </div>
  </div>
</template>
