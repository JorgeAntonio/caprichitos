<script setup lang="ts">
import type { Product } from "../../stores/products";
import { toCurrency } from "../../shared/utils";


defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card bordered">
    <figure class="px-8 pt-10">
      <img :src="product.image" alt="Card Image" class="object-contain w-full h-64" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <router-link class="link link-hover" :to="`/product/${product.id}`">{{
          product.title
        }}</router-link>
      </h2>
      <p>{{ toCurrency(product.price) }}</p>
      <div class="justify-end card-actions">
        <!-- <button class="btn btn-primary" @click="cart.add(product.id)">
          Detalles
        </button> -->
        <router-link class="btn btn-primary" :to="`/product/${product.id}`">
          Detalles
        </router-link>
      </div>
    </div>
  </div>
</template>
