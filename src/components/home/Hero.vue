<script lang="ts" setup>
import Navbar from '../layout/Navbar.vue';
</script>

<template>
    <div class="bg-secondary-focus">
        <Navbar></Navbar>
        <div class=" max-w-7xl m-auto py-8 md:py-20 px-4">
            <div class="flex flex-wrap-reverse justify-around items-center md:grid md:grid-cols-2 gap-4">
                <div class="flex justify-center items-center m-auto">
                    <div class="flex flex-col justify-between items-center text-center md:text-start md:items-start gap-6">
                        <h1 class="text-6xl font-semibold uppercase">Dulce Capricho</h1>
                        <h2 class="text-xl md:text-4xl font-semibold">Endulza tu vida con los irresistibles caprichos de
                            sabor.
                        </h2>
                        <p class="text-base md:text-xl font-semibold max-w-sm">¡Dulzura que deleita, momentos que perduran!
                        </p>
                        <div class="flex gap-2">
                            <router-link to="/products" class="btn btn-neutral w-1/2">Ordenar</router-link>
                            <router-link to="/contactar" class="btn btn-neutral w-1/2">Contactar</router-link>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center card">
                    <figure>
                        <img src="../../assets/wall5-removebg.png" class="h-52 md:h-full" alt="">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>
