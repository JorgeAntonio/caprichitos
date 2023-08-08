<script lang="ts" setup>
import { onMounted } from "vue";

import MainSection from "../layout/MainSection.vue";
import { useRoute } from "vue-router";
import { flyerStore } from "@/stores/flyer";

const route = useRoute();

const flyer = flyerStore();

onMounted(() => {
    flyer.fetchFlyers();
});
</script>

<template>
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">Flyers</h1>
            <router-link v-if="route.path === '/'" to="/products" class="btn btn-outline btn-neutral btn-sm">ver
                todo</router-link>
            <div v-else></div>
        </div>
        <div class="divider pb-8"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(item, index) in flyer.flyers" :key="index" class="flex justify-center">
                <img :src="item.image" :alt="item.title" class="h-[450px] object-cover">
            </div>
        </div>
    </MainSection>
</template>
