<script lang="ts" setup>
import { onMounted } from "vue";

import ProductCard from "../components/products/ProductCard.vue";
import { almacenForm } from "@/stores/form";
import MainSection from "./layout/MainSection.vue";

const form = almacenForm();

onMounted(() => {
    form.obtenerDatos();
});
</script>

<template>
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">Productos</h1>
            <button class="btn btn-outline btn-neutral btn-sm">ver todo</button>
        </div>
        <div class="divider pb-8"></div>
        <div class="flex justify-between">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ProductCard v-for="(item, index) in form.productos" :key="index" :product="item" />
            </div>
        </div>
    </MainSection>
</template>
