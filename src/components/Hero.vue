<script lang="ts" setup>
import Navbar from './layout/Navbar.vue';
// import MainSection from './layout/MainSection.vue';
</script>

<template>
    <div class="bg-secondary-focus">
        <Navbar></Navbar>
        <!-- <MainSection> -->
        <div class=" max-w-7xl m-auto py-8 md:py-20 px-4">
            <div class="flex flex-wrap-reverse justify-around items-center md:grid md:grid-cols-2 gap-4">
                <div class="flex justify-center items-center m-auto">
                    <div class="flex flex-col justify-between items-center text-center md:text-start md:items-start gap-6">
                        <h1 class="text-6xl font-semibold">Caprichos</h1>
                        <h2 class="text-xl md:text-4xl font-semibold">Endulza tu vida con los irresistibles caprichos de
                            sabor.
                        </h2>
                        <p class="text-base md:text-xl font-semibold max-w-sm">¡Dulzura que deleita, momentos que perduran!
                        </p>
                        <div class="space-x-2">
                            <router-link to="/catalog" class="btn btn-neutral">Ordenar</router-link>
                            <a href="" class="btn btn-neutral">Contactar</a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center card">
                    <figure>
                        <img src="../assets/wall5-removebg.png" class="h-52 md:h-full" alt="">
                    </figure>
                </div>
            </div>
        </div>
        <!-- </MainSection> -->
    </div>
</template>
