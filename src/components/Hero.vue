<script lang="ts" setup>
import Navbar from './layout/Navbar.vue';
import MainSection from './layout/MainSection.vue';
</script>

<template>
    <div class="bg-secondary-focus">
        <Navbar></Navbar>
        <MainSection>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex justify-center items-center">
                    <div class="flex flex-col justify-between items-start gap-6">
                        <h1 class="text-6xl font-semibold">Caprichos</h1>
                        <h2 class="text-4xl font-semibold">Endulza tu vida con los irresistibles caprichos de sabor.</h2>
                        <p class="text-xl font-semibold max-w-sm">¡Dulzura que deleita, momentos que perduran!
                        </p>
                        <div class="flex gap-3">
                            <router-link to="/catalog" class="btn btn-neutral">Ordenar</router-link>
                            <a href="" class="btn btn-neutral">Contactar</a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <img src="../assets/wall5-removebg.png" class="" alt="">
                </div>
            </div>
        </MainSection>
    </div>
</template>
