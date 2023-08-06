<script lang="ts" setup>
import ProductsList from '@/components/products/ProductsList.vue';
import FooterBar from '@/components/layout/FooterBar.vue';
import Navbar from '@/components/layout/Navbar.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';

const items = [
    { text: "Inicio", to: "/" },
    { text: "Productos", disabled: true },
    { text: "Todos", disabled: true }
];
</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <ProductsList />
    <FooterBar />
</template>
