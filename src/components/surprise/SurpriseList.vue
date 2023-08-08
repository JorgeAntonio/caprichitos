<script lang="ts" setup>
import { onMounted } from "vue";

import MainSection from "../layout/MainSection.vue";
import { surpriseStore } from "@/stores/suprise";
import { useRoute } from "vue-router";

const route = useRoute();

const surprise = surpriseStore();

onMounted(() => {
    surprise.fetchSurprises();
});
</script>

<template>
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">Regalos sorpresas</h1>
            <router-link v-if="route.path === '/'" to="/products" class="btn btn-outline btn-neutral btn-sm">ver
                todo</router-link>
            <div v-else></div>
        </div>
        <div class="divider pb-8"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(item, index) in surprise.surprises" :key="index" class="flex justify-center">
                <img :src="item.image" :alt="item.title" class="h-[450px] object-cover">
            </div>
        </div>
    </MainSection>
</template>
