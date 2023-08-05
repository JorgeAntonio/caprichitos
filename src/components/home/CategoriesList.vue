<script lang="ts" setup>
import { onMounted } from "vue";
import CategoryCard from "@/components/category/CategoryCard.vue";
import { almacenCategory } from "@/stores/category";
import MainSection from "../layout/MainSection.vue";

const category = almacenCategory();

onMounted(() => {
    category.obtenerDatos();
});
</script>

<template>
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">Categorias</h1>
            <button class="btn btn-outline btn-neutral btn-sm">ver todo</button>
        </div>
        <div class="divider pb-8"></div>
        <div class="flex justify-evenly items-center">
            <CategoryCard v-for="(item, index) in category.categories" :key="index" :category="item" />
        </div>
    </MainSection>
</template>
