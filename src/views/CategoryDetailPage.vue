<script lang="ts" setup>

import ProductCard from "../components/products/ProductCard.vue";
import { almacenForm } from "@/stores/form";
import MainSection from "../components/layout/MainSection.vue";
import { useRoute } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import Breadcrumbs from "@/components/layout/Breadcrumbs.vue";

const route = useRoute();

const form = almacenForm();
const id = route.params.id as string;

form.obtenerDatosPorCategoria(id);

const items = [
    { text: "Inicio", to: "/" },
    { text: "Categorias", to: "/category" },
    { text: form.categorias[id], disabled: true },
];

</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">{{ form.categorias[id] }}</h1>
            <router-link to="/products" class="btn btn-outline btn-neutral btn-sm">ver todo</router-link>
        </div>
        <div class="divider pb-8"></div>
        <div class="flex justify-between">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  min-h-screen">
                <ProductCard v-for="(item, index) in form.productos" :key="index" :product="item" />
            </div>
        </div>
    </MainSection>
    <FooterBar />
</template>