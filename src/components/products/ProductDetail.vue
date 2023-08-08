<script setup lang="ts">
import { computed } from 'vue';
import { toCurrency } from '../../shared/utils';
import { almacenForm } from '../../stores/form'
import { useRoute } from 'vue-router';
import { ShoppingCart } from '@element-plus/icons-vue'
import MainSection from '@/components/layout/MainSection.vue';
import { almacenCart } from '@/stores/cart';
import { almacenProductos } from '@/stores/products';

const route = useRoute();

const cartStore = almacenCart();
const productsStore = almacenProductos();
const form = almacenForm();

const product = computed(() => {
    const producto = productsStore.obtenerProductos();
    return producto;
});

product.value;

form.obtenerDatoId(
    route.params.id as string
);

</script>

<template>
    <MainSection>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
            <div class="p-7">
                <img :src="form.producto.image" alt="product image" class="mx-auto">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ form.producto.title }}</h2>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Precio</h3>
                <p class="text-xl my-7">{{ toCurrency(form.producto.price) }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Descripción</h3>
                <p class="mb-7">{{ form.producto.description }}</p>

                <button class="btn btn-primary" @click="cartStore.add(form.producto.id)">
                    <el-icon size="30">
                        <ShoppingCart />
                    </el-icon> Agregar al carrito
                </button>
            </div>
        </div>
    </MainSection>
</template>
