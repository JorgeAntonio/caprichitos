<script setup lang="ts">
import type { Product } from "../../stores/products";
import { toCurrency } from "../../shared/utils";
import { CirclePlusFilled } from '@element-plus/icons-vue'


defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="card">
    <figure class="px-8 pt-10">
      <router-link class="link link-hover" :to="`/product/${product.id}`">
        <img :src="product.image" alt="Card Image" class="object-contain w-full h-64" />
      </router-link>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <router-link class="link link-hover" :to="`/product/${product.id}`">{{
          product.title
        }}</router-link>
      </h2>
      <div class="flex justify-center items-center">
        <p class="text-lg">{{ toCurrency(product.price) }}</p>
        <router-link :to="`/product/${product.id}`">
          <el-icon size="30">
            <CirclePlusFilled />
          </el-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>
