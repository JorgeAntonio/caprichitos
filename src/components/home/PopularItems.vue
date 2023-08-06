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
            <router-link to="/products" class="btn btn-outline btn-neutral btn-sm">ver todo</router-link>
        </div>
        <div class="divider"></div>
        <div class="carousel rounded-box ">
            <div class="carousel-item gap-6 h-[400px]">
                <div v-for="item in form.productos" :key="item.id" class="flex flex-col justify-center items-center">
                    <router-link :to="`/product/${item.id}`">
                        <img :src="item.image" class="h-[250px]" :alt="item.title" />
                        <h3 class="text-center text-xl font-semibold mt-2">{{ item.title }}</h3>
                    </router-link>
                </div>
            </div>
        </div>
    </MainSection>
</template>
