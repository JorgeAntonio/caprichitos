<script setup lang="ts">
import type { Category } from "../../stores/category";


defineProps<{
  category: Category;
}>();
</script>

<template>
  <div class="card hover:shadow-xl">
    <figure class="">
      <router-link class="link link-hover" :to="`/category/${category.id}`">
        <img :src="category.image" alt="Card Image" class="object-contain w-full" />
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
