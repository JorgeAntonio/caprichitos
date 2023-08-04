<script lang="ts" setup>
import MainSection from "../layout/MainSection.vue";
import { onMounted } from "vue";

import { almacenForm } from "../../stores/form";

const form = almacenForm();

onMounted(() => {
    form.obtenerDatos();
});
</script>

<template>
    <MainSection>
        <div class="flex justify-between">
            <h1 class="text-4xl font-semibold">Populares</h1>
            <button class="btn btn-outline btn-neutral btn-sm">ver todo</button>
        </div>
        <div class="divider"></div>
        <div class="carousel rounded-box">
            <div class="carousel-item gap-6">
                <div v-for="item in form.productos" :key="item.id" class="flex flex-col justify-center items-center">
                    <img :src="item.image" class="h-1/2" :alt="item.title" />
                    <h3 class="text-center font-semibold mt-2">{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </MainSection>
</template>
