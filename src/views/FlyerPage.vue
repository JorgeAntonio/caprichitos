<script lang="ts" setup>
import FlyerList from '@/components/flyer/FlyerList.vue';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import FooterBar from '@/components/layout/FooterBar.vue';
import Navbar from '@/components/layout/Navbar.vue';

const items = [
    { text: 'Inicio', to: '/' },
    { text: 'Flyers', disabled: true }
]

</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <FlyerList />
    <FooterBar />
</template>
