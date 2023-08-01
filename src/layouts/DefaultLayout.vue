<script lang="ts" setup>
import NavBar from "../components/layout/Navbar.vue";
import FooterBar from "../components/layout/FooterBar.vue";
</script>

<template>
    <div>
        <NavBar />
        <main>
            <router-view />
        </main>
        <FooterBar />
    </div>
</template>
