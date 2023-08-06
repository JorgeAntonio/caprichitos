<script lang="ts" setup>
import CategoriesList from '@/components/home/CategoriesList.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import FooterBar from '@/components/layout/FooterBar.vue';
import Navbar from '@/components/layout/Navbar.vue';

const items = [
    { text: "Inicio", to: "/" },
    { text: "Categorias", disabled: true },
    { text: "Todos", disabled: true }
];
</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <CategoriesList />
    <FooterBar />
</template>
