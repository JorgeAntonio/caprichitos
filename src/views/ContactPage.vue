<script lang="ts" setup>
import MainSection from "../components/layout/MainSection.vue";
import ContactCard from "../components/contact/ContactCard.vue";
</script>

<template>
    <MainSection>
        <div id="contactar" class="card border py-16 bg-secondary">
            <div class="card-body grid grid-cols-1 md:grid-cols-2 items-center">
                <div class="hidden md:flex flex-col justify-center items-center">
                    <h1 class="text-2xl font-semibold text-center max-w-sm">Obten 20 % de descuento en tu primera orden
                    </h1>
                    <img src="../assets/wall3-removebg.png" class="" alt="">
                </div>
                <div class="flex flex-col justify-center items-center gap-4">
                    <ContactCard />
                </div>
            </div>
        </div>
    </MainSection>
</template>
