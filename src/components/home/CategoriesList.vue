<script lang="ts" setup>
import { onMounted } from "vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import { almacenCategory } from "@/stores/category";
import MainSection from "../layout/MainSection.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const category = almacenCategory();

onMounted(() => {
    category.obtenerDatos();
});
</script>

<template>
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">Categorias</h1>
            <router-link v-if="route.path === '/'" to="/category" class="btn btn-outline btn-neutral btn-sm">ver
                todo</router-link>
            <div v-else></div>
        </div>
        <div class="divider pb-8"></div>
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <CategoryCard v-for="(item, index) in category.categories" :key="index" :category="item" />
        </div>
    </MainSection>
</template>
