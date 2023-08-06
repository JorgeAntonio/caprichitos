<script setup lang="ts">
import type { Category } from "../../stores/category";


defineProps<{
  category: Category;
}>();
</script>

<template>
  <div class="mt-8">
    <figure>
      <router-link class="link link-hover" :to="`/category/${category.id}`">
        <img :src="category.image" alt="Card Image"
          class="object-contain w-full rounded-xl hover:shadow-md hover:opacity-90" />
      </router-link>
    </figure>
    <div class="my-5">
      <h2 class="text-xl font-semibold text-center">
        <router-link class="link link-hover" :to="`/category/${category.id}`">{{
          category.name
        }}</router-link>
      </h2>
    </div>
  </div>
</template>
