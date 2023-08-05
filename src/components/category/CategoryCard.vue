<script setup lang="ts">
import type { Category } from "../../stores/category";


defineProps<{
  category: Category;
}>();
</script>

<template>
  <div class="card">
    <figure class="px-8 pt-10">
      <router-link class="link link-hover" :to="`/category/${category.id}`">
        <img :src="category.image" alt="Card Image" class="object-contain w-full h-64" />
      </router-link>
    </figure>
    <div class="card-body">
      <h2 class="text-xl font-semibold text-center">
        <router-link class="link link-hover" :to="`/category/${category.id}`">{{
          category.name
        }}</router-link>
      </h2>

    </div>
  </div>
</template>
