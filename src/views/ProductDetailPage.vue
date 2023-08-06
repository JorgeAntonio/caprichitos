<script setup lang="ts">
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import FooterBar from '@/components/layout/FooterBar.vue';
import Navbar from '@/components/layout/Navbar.vue';
import ProductDetail from '@/components/products/ProductDetail.vue';

const items = [
    { text: "Inicio", to: "/" },
    { text: "Productos", to: "/products" },
    { text: "Detalle", disabled: true }
];
</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <ProductDetail />
    <FooterBar />
</template>
