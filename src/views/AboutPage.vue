<script lang="ts" setup>
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue';
import MainSection from '@/components/layout/MainSection.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
import AboutCard from '@/components/about/AboutCard.vue';
import Navbar from '@/components/layout/Navbar.vue';

const items = [
    { text: 'Inicio', to: '/' },
    { text: 'Acerca de nosotros', disabled: true },
]
</script>

<template>
    <Navbar />
    <Breadcrumbs :items="items" />
    <AboutCard />
    <MainSection>
        <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-6 m-auto">
            <div>
                <h1 class="text-4xl font-semibold pb-4">Misión</h1>
                <p class="text-xl font-semibold leading-snug">Somos una empresa comprometida a ofrecer una gran variedad
                    de postres y tortas, con la máxima frescura y a precios justos, trabajando en la innovación del
                    producto y la búsqueda constante de la eficiencia.
                </p>
            </div>
            <div>
                <h1 class="text-4xl font-semibold pb-4">Visión</h1>
                <p class="text-xl font-semibold leading-snug">Dentro de un año contar con un local propio, ser una
                    empresa reconocida por la calidad y originalidad de sus productos.
                </p>
            </div>
        </div>
    </MainSection>
    <ContactForm />
</template>
