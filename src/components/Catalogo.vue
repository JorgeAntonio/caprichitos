<script lang="ts" setup>
import { onMounted } from "vue";

import ProductCard from "../components/products/ProductCard.vue";
import { almacenForm } from "@/stores/form";

const form = almacenForm();

onMounted(() => {
    form.obtenerDatos();
});
</script>

<template>
    <div class="max-w-7xl mx-auto h-screen px-4 py-8">
        <h1 class="text-5xl font-semibold py-6">Catalogo</h1>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard v-for="(item, index) in form.productos" :key="index" :product="item" />
        </div>
    </div>
</template>
