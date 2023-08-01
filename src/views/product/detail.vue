<script setup lang="ts">
import { toCurrency } from '../../shared/utils';
import { almacenForm } from '../../stores/form'
import { useRoute } from 'vue-router';


const route = useRoute();

const form = almacenForm();

form.obtenerDatoId(
    route.params.id as string
);

</script>

<template>
    <div class="card">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="form.producto.image" alt="product image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ form.producto.title }}</h2>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Precio</h3>
                <p class="text-xl my-7">Price <span>S/. {{ toCurrency(form.producto.price) }}</span></p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Descripción</h3>
                <p class="mb-7">{{ form.producto.description }}</p>
                <button class="btn btn-primary">
                    Agregar al carrito
                </button>
            </div>
        </div>
    </div>
</template>
