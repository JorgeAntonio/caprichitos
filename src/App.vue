<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue';
</script>

<template>
  <Navbar />
  <main class="h-screen">
    <RouterView />
  </main>
</template>

<style scoped></style>
