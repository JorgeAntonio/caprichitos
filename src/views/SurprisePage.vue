<script lang="ts" setup>
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import FooterBar from '@/components/layout/FooterBar.vue';
import Navbar from '@/components/layout/Navbar.vue';
import SurpriseList from '@/components/surprise/SurpriseList.vue';

const items = [
    { text: 'Inicio', to: '/' },
    { text: 'Regalos sorpresas', disabled: true }
]
</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <SurpriseList />
    <FooterBar />
</template>
